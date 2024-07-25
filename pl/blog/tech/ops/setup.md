# Zainicjuj Serwer (Użyj Partycji BTRFS, Zaplanowanej Migawki Snappera)

## Serwer Zakupów contabo

contabo to tani dostawca VPS w Niemczech z długą historią (ponad 20 lat) i wieloma użytkownikami (ponad 200 000), więc nie musisz się martwić o ucieczkę.

VPS [contabo.com](//contabo.com) pamiętaj aby wybrać cenę Euro, która jest tańsza.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Za usługę contabo pobierana jest jednorazowa opłata instalacyjna.
Jednak jest kilka dni w miesiącu, kiedy opłata instalacyjna jest bezpłatna. Wystarczy się zarejestrować i zwracać uwagę na promocyjne e-maile.

Oprócz bezpłatnej opłaty obszarowej w Europie, w innych regionach obowiązują różne poziomy podwyżek cen.

W każdym razie wybrałem serwer europejski, po użyciu Cloudflare nie ma dużej różnicy między serwerami.

Ostateczna konfiguracja przedstawia się następująco: 16 GB pamięci, 6 procesorów, 200 GB NVMe, 9,50 euro miesięcznie, co odpowiada 74,43 juanów.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Cena ta stanowi prawie jedną dziesiątą ceny Alibaba Cloud i Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Użyłem [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) do uruchomienia wydajności i parametrów:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Wyświetl CPU Model `AMD EPYC 9224 24-Core Processor` wynik wydajności jednego rdzenia 1285
, wynik wielordzeniowy 4277 Zobacz więcej wyników [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Kupiłem jednocześnie trzy serwery i aktywowałem je w tym samym czasie. Dzięki temu serwery znajdują się w tej samej sali komputerowej, co ułatwia budowanie wysokiej dostępności w przyszłości.

Jego serwery czasami się zawieszają, zapewniając dostępność strony internetowej dzięki wysokiej dostępności.

Nowi użytkownicy muszą przy zakupie przedstawić dowód osobisty w celu uwierzytelnienia na prawdziwe nazwisko.

## Skonfiguruj Logowanie Bez Hasła

Po kilku minutach wszystkie serwery zostały aktywowane.

Pierwszą rzeczą jest edycja `~/.ssh/config` Ustaw alias dla IP a następnie użyj `ssh-copy-id root@c2` , aby skonfigurować logowanie bez hasła.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Możesz zmodyfikować ten [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) , aby szybciej zakończyć konfigurację inicjowania.

Po zakończeniu konfiguracji bez hasła można z niej korzystać [pdsh](https://github.com/chaos/pdsh) Można ją obsługiwać partiami, co jest wygodne.

Pierwszym z nich jest ręczne włączenie protokołu IPv6 i przetestowanie

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Następnie zaktualizuj system do Ubuntu 24 jednym kliknięciem i zainstaluj powszechnie używane oprogramowanie.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 oznacza zmianę języka na chiński i strefy czasowej na Pekin.

Oprogramowanie zainstalowane domyślnie jest skonfigurowane zgodnie z moimi osobistymi przyzwyczajeniami, takimi jak [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) itp. W razie potrzeby możesz skopiować magazyn [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) i zmodyfikować go w razie potrzeby.

Ten krok zajmuje dużo czasu. Po odczekaniu pół godziny aktualizacja i instalacja często używanego oprogramowania zakończy się pomyślnie. Możesz to potwierdzić za pomocą następującego polecenia:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Przyspiesza ssh

Sieć z Europy do Chin nie jest stabilna. Zaleca się korzystanie [mosh](//mosh.org) Przyjdź, aby przyspieszyć `ssh`

Utwórz skrypt `c0` w katalogu `~/.bin` na komputerze lokalnym (głównie dodawanym do zmiennej środowiskowej `PATH` ) w następujący sposób:

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

Po utworzeniu nadaj uprawnienia do wykonywania i soft-link `c1` , `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

W przyszłości możesz bezpośrednio wpisać `c0` , `c1` i użyć `mosh` , aby połączyć się bezpośrednio i wpisać [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konwertuj Format Partycji Z ext4 Na btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Może wykonywać migawki dysków w celu łatwego tworzenia kopii zapasowych.

Najpierw wejdź do systemu ratunkowego

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Wybierz opcję Ratunek Debiana

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Poczekaj na ponowne uruchomienie serwera

Zmiany odcisków palców wystąpią, gdy ssh , użyj `ssh-keygen -R ip` , aby je wyczyścić

Następnie uruchom następujący skrypt, aby przekonwertować partycję

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skrypt automatycznie zrestartuje system po pomyślnej konwersji.

### Wyświetl Współczynnik Kompresji btrfs

Domyślnie kompresuje się automatycznie. Polecenie sprawdzenia współczynnika kompresji jest następujące:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kompresja Ręczna

Jeśli jesteś perfekcjonistą, możesz także ręcznie wykonać kompresję całego dysku. Polecenie jest następujące

```bash
btrfs filesystem defragment -r -czstd /
```

Jak widać na poniższym rysunku, po ręcznej kompresji w nowym systemie skompresowano prawie 100MB więcej.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Utwórz Kopię Zapasową Migawki Btrfs Za Pomocą Snappera

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) to najlepszy partner w tworzeniu kopii zapasowych Btrfs .

Skrypt inicjujący utworzy katalog `~/ubuntu` , wystarczy uruchomić następującą komendę:

```
~/ubuntu/snapper/init.sh
```

Do zobaczenia w treści scenariusza [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Użyj `snapper list-configs` , aby wyświetlić podwoluminy, dla których ustawiono migawki.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Użyj `snapper -c mnt list` , aby wyświetlić migawkę podwoluminu

`/etc/snapper/configs/mnt` Możesz wyświetlić szczegółowe ustawienia kopii zapasowej tego woluminu podrzędnego

Więcej referencji:

[Łatwa gra dzięki funkcji migawki Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Migawka Serwera contabo

contabo Zapewnia funkcję migawki serwera, ale nie obsługuje zaplanowanych migawek. Napisałem [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) do wykonywania codziennych migawek.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Aby przywrócić migawkę serwera, najpierw kliknij Crontol w menu zarządzania

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Następnie kliknij Migawki, aby przywrócić.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Jednak szczegółowość tej migawki jest zbyt duża. Po przywróceniu nowo dodane dane zostaną całkowicie utracone, dlatego należy zachować ostrożność podczas korzystania z niej.

Zwykle wygodniej jest używać migawek btrfs.

## Szczegóły Systemu Ratunkowego

Wejdź do systemu ratunkowego 22 Gdy port będzie [tcping](https://github.com/paradiseduo/tcping) dostępny, nie będziesz mógł uzyskać do niego dostępu przy ustawionym haśle przez 2-3 minut. Poczekaj chwilę i wszystko będzie dobrze.

```
tcping ip 22 -c 9999
```

Dostępność portów może być monitorowana.

### Jak Uzyskać Dostęp Do Dysku Twardego Po Wejściu Do Programu & Przywróć Migawkę

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Możesz na przykład wyświetlić migawkę

```
snapper -c etc list
```

Wyświetl zmiany w pliku migawki

```
snapper -c etc status 5..6
```

Wyświetl konkretny tekst różnicowy

```
snapper -c etc diff 3..5
```

Przywróć migawkę: na przykład cofnij wszystkie zmiany po wykonaniu migawki 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Włącz Trwałość Dziennika

Włączenie trwałości dzienników w systemie ratunkowym wymaga ręcznego utworzenia odpowiedniego katalogu i wykonania kilku dodatkowych kroków, ponieważ usługa systemowa może nie być uruchomiona. Oto kroki, które możesz wypróbować:

Zatem najpierw chroot

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Uruchom ponownie system Ubuntu: Po wprowadzeniu powyższych zmian musisz ponownie uruchomić komputer w normalny sposób i przejść do systemu Ubuntu zamiast do systemu ratunkowego.

W ten sposób systemd-journald rozpocznie pracę z nową konfiguracją i rozpocznie trwałe przechowywanie dzienników na dysku twardym.

Należy pamiętać, że powyższe operacje są wykonywane w systemie ratunkowym, zatem zmiany te zaczną obowiązywać dopiero po ponownym uruchomieniu systemu i po wyjściu z trybu ratunkowego.

Oznacza to, że nie od razu zauważysz, że jakiekolwiek zmiany w istniejących dziennikach staną się trwałe, ale wszystkie wygenerowane później dzienniki zostaną utrwalone.

W ten sposób możesz przeglądać logi usługi ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Uwagi O Chorobach Trudnych I Skomplikowanych

### Rozwiąż Dziwny Problem: Serwer Nie Może Połączyć Się Z Protokołem ssh

Użyłem wcześniej akcji github do utworzenia skryptu automatycznej kompilacji i wdrożenia, ale odkryłem, że usługą wdrażania nie może być ssh.

Wejście do systemu ratunkowego i przeglądanie logów wymaga uprawnień:

`Missing privilege separation directory: /run/sshd`

Możesz utworzyć ten katalog za pomocą następującego polecenia

```
chown root:root /
systemd-tmpfiles --create
```

Po wielokrotnych dochodzeniach dzieje się `1001` dlatego, że github action Użytkownik, który przesłał tar `uid`

tar Rozpakowanie musi zostać wykonane bez parametrów `--no-same-owner` zostanie zdekompresowane do użytkownika `uid` for `1001`

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

