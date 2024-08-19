# Zainicjuj serwer (używając partycji BTRFS i zaplanowanych migawek Snapper)

## Kup serwer w Contabo

Contabo to tani dostawca VPS w Niemczech z długą historią (ponad 20 lat) i liczną bazą użytkowników (ponad 200 tysięcy), więc nie musisz się martwić o jego zamknięcie.

Kup VPS na [contabo.com](//contabo.com), pamiętaj, aby wybrać cenę w euro, która jest tańsza.

![](https://i-01.eu.org/1718285782.avif)

Contabo pobiera jednorazową opłatę instalacyjną.
Jednak co miesiąc są dni, kiedy opłata instalacyjna jest darmowa. Wystarczy się zarejestrować i śledzić promocyjne e-maile.

Poza darmowym obszarem w Europie, w innych regionach obowiązują różne poziomy podwyżek cen.

Wybrałem serwer w Europie, bo po włączeniu Cloudflare nie ma znaczenia, gdzie serwer się znajduje.

Ostateczna konfiguracja to: 16 GB pamięci, 6 rdzeni CPU, 200 GB NVMe, 9,50 euro miesięcznie, co odpowiada 74,43 juanów.

![](https://i-01.eu.org/1718286008.avif)

**Cena ta jest prawie dziesięciokrotnie niższa niż w Alibaba Cloud i Amazon**.

![](https://i-01.eu.org/1718356956.avif)

Użyłem [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) do testowania wydajności i parametrów:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Wyświetla model CPU `AMD EPYC 9224 24-Core Processor`, wynik wydajności jednego rdzenia to 1285
, wynik wielordzeniowy to 4277. Więcej wyników można znaleźć na [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Kupiłem trzy serwery jednocześnie i aktywowałem je, co zapewnia, że będą w tej samej serwerowni, co ułatwia przyszłe wdrożenie wysokiej dostępności.

Serwery czasami się zawieszają, ale dzięki wysokiej dostępności można zapewnić dostępność strony internetowej.

Nowi użytkownicy muszą przed zakupem przedstawić dowód osobisty w celu uwierzytelnienia na prawdziwe nazwisko.

## Skonfiguruj logowanie bez hasła

Po kilku minutach wszystkie serwery zostały aktywowane

Pierwszą rzeczą jest edycja pliku `~/.ssh/config` na komputerze lokalnym, aby ustawić alias dla IP, a następnie użycie `ssh-copy-id root@c2` do skonfigurowania logowania bez hasła.

![](https://i-01.eu.org/1718287198.avif)

Możesz zmodyfikować ten skrypt [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh), aby szybciej zakończyć konfigurację inicjalizacyjną.

Po zakończeniu konfiguracji bez hasła można używać [pdsh](https://github.com/chaos/pdsh) do masowych operacji, co jest wygodne.

Najpierw ręcznie włącz protokół IPv6 i przetestuj go

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Następnie zaktualizuj system do Ubuntu 24 jednym kliknięciem i zainstaluj powszechnie używane oprogramowanie.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 oznacza zmianę języka na chiński i strefy czasowej na Pekin.

Domyślnie zainstalowane oprogramowanie jest skonfigurowane zgodnie z moimi osobistymi przyzwyczajeniami, takimi jak [mise](https://github.com/jdx/mise), [direnv](https://direnv.net/) itp. W razie potrzeby można skopiować repozytorium [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) i dostosować je do własnych potrzeb.

Ten krok zajmuje dużo czasu. Po odczekaniu pół godziny aktualizacja i instalacja powszechnie używanego oprogramowania zakończy się pomyślnie. Można to potwierdzić za pomocą następującego polecenia:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh przyspiesza ssh

Sieć z Europy do Chin nie jest stabilna. Zaleca się użycie [mosh](//mosh.org) do przyspieszenia `ssh`.

Utwórz skrypt `c0` w katalogu `~/.bin` (głównie dodaj do zmiennej środowiskowej `PATH`) w następujący sposób:

```bash
#!/usr/bin/env bash

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Po utworzeniu nadaj uprawnienia do wykonywania i utwórz miękkie łącze do `c1` i `c2`.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

W przyszłości można bezpośrednio wprowadzić `c0` i `c1`, aby używać `mosh` do szybkich połączeń bezpośrednich i wejścia do [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html).

## Konwertuj format partycji z ext4 na btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) umożliwia tworzenie migawek dysków, co ułatwia tworzenie kopii zapasowych.

Najpierw wejdź do systemu ratunkowego

![](https://i-01.eu.org/1718300448.avif)

Wybierz opcję Ratunek Debiana

![](https://i-01.eu.org/1718300753.avif)

Poczekaj na ponowne uruchomienie serwera

Podczas ssh pojawią się zmiany odcisków palców, użyj `ssh-keygen -R ip`, aby je wyczyścić

Następnie uruchom następujący skrypt, aby przekonwertować partycję

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skrypt automatycznie zrestartuje system po pomyślnej konwersji.

### Wyświetl współczynnik kompresji btrfs

Domyślnie kompresja jest automatyczna. Polecenie do sprawdzenia współczynnika kompresji wygląda następująco:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Ręczna kompresja

Jeśli masz perfekcjonistyczne podejście, możesz ręcznie wykonać pełną kompresję dysku. Polecenie wygląda następująco:

```bash
btrfs filesystem defragment -r -czstd /
```

Jak widać na poniższym rysunku, po ręcznej kompresji w nowym systemie skompresowano prawie 100 MB więcej.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Utwórz kopię zapasową migawki Btrfs za pomocą Snappera

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) to najlepszy partner do tworzenia migawek Btrfs.

Skrypt inicjalizacyjny utworzy katalog `~/ubuntu`, wystarczy uruchomić następującą komendę:

```
~/ubuntu/snapper/init.sh
```

Zawartość skryptu można znaleźć na [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Użyj `snapper list-configs`, aby wyświetlić podwoluminy z ustawionymi migawkami

![](https://i-01.eu.org/1718302689.avif)

Użyj `snapper -c mnt list`, aby wyświetlić migawki podwoluminu

`/etc/snapper/configs/mnt` pokazuje szczegółowe ustawienia kopii zapasowej tego podwoluminu

Więcej referencji:

[Łatwa obsługa funkcji migawki Btrfs dzięki Snapper](https://zhuanlan.zhihu.com/p/31082518)

## Migawki serwera Contabo

Contabo oferuje funkcję migawek serwera, ale nie obsługuje zaplanowanych migawek. Napisałem [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) do wykonywania codziennych migawek.

![](https://i-01.eu.org/1718304206.avif)

Aby przywrócić migawkę serwera, najpierw kliknij Crontol w menu zarządzania

![](https://i-01.eu.org/1718304275.avif)

Następnie kliknij Migawki, aby przywrócić.

![](https://i-01.eu.org/1718304063.avif)

Jednak migawki mają zbyt dużą szczegółowość. Po przywróceniu nowo dodane dane zostaną całkowicie utracone, więc należy używać ich ostrożnie.

Zwykle wygodniej jest używać migawek btrfs.

## Szczegóły systemu ratunkowego

Wejdź do systemu ratunkowego, na porcie 22 można [tcping](https://github.com/paradiseduo/tcping) po 2-3 minutach bez dostępu do ustawionego hasła. Poczekaj chwilę i wszystko będzie dobrze.

```
tcping ip 22 -c 9999
```

Można monitorować dostępność portów.

### Jak uzyskać dostęp do dysku twardego i przywrócić migawkę po wejściu do systemu ratunkowego

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Można wyświetlić migawkę, na przykład

```
snapper -c etc list
```

Wyświetl zmiany w pliku migawki

```
snapper -c etc status 5..6
```

Wyświetl szczegółowy tekst różnicowy

```
snapper -c etc diff 3..5
```

Przywróć migawkę: na przykład cofnij wszystkie zmiany po wykonaniu migawki 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Włącz trwałość dziennika

Włączenie trwałości dzienników w systemie ratunkowym wymaga ręcznego utworzenia odpowiedniego katalogu i wykonania kilku dodatkowych kroków, ponieważ usługa systemowa może nie być uruchomiona. Oto kroki, które możesz wypróbować:

Najpierw wykonaj chroot

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Uruchom ponownie system Ubuntu: Po wprowadzeniu powyższych zmian musisz ponownie uruchomić komputer w normalny sposób i przejść do systemu Ubuntu zamiast do systemu ratunkowego.

W ten sposób systemd-journald rozpocznie pracę z nową konfiguracją i rozpocznie trwałe przechowywanie dzienników na dysku twardym.

Należy pamiętać, że powyższe operacje są wykonywane w systemie ratunkowym, zatem zmiany te zostaną zastosowane dopiero po ponownym uruchomieniu systemu i wyjściu z trybu ratunkowego.

Oznacza to, że nie zobaczysz od razu żadnych zmian w istniejących dziennikach, które staną się trwałe, ale wszystkie wygenerowane później dzienniki zostaną utrwalone.

W ten sposób można przeglądać logi usługi ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Uwagi o problemach trudnych i skomplikowanych

### Rozwiąż dziwny problem: serwer nie może połączyć się z protokołem ssh

Użyłem wcześniej akcji github do utworzenia skryptu automatycznej kompilacji i wdrożenia, ale odkryłem, że usługą wdrażania nie można połączyć się z ssh.

Wejście do systemu ratunkowego i przeglądanie logów wskazuje na problem z uprawnieniami:

`Missing privilege separation directory: /run/sshd`

Można utworzyć ten katalog za pomocą następującego polecenia

```
chown root:root /
systemd-tmpfiles --create
```

Po wielokrotnych dochodzeniach okazało się, że użytkownik `uid` tar w github action to `1001`

tar Rozpakowanie musi nastąpić, jeśli nie ma parametru `--no-same-owner`, zostanie ono zdekompresowane do `uid` dla `1001` użytkowników

W rezultacie rsync zmieni grupę użytkowników katalogu głównego, a wtedy po ponownym uruchomieniu nie będzie można zalogować się do ssh.

Zmodyfikuj skrypt dekompresji w następujący sposób:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```