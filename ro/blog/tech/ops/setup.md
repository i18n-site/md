# Inițializați serverul (folosind partiția BTRFS și instantanee programate cu Snapper)

## Cumpărați un server de la Contabo

contabo este un furnizor ieftin de VPS din Germania, cu o istorie lungă (mai mult de 20 de ani) și mulți utilizatori (mai mult de 200.000), așa că nu trebuie să vă faceți griji că fugiți.

Cumpărați un VPS de pe [contabo.com](//contabo.com) și nu uitați să alegeți prețul în euro, care este mai avantajos.

![](https://i-01.eu.org/1718285782.avif)

Contabo percepe o taxă unică pentru instalare.
Însă, există câteva zile în fiecare lună când taxa de instalare este gratuită. După înregistrare, urmăriți e-mailurile promoționale pentru a profita de aceste oferte.

Pe lângă zona gratuită din Europa, alte regiuni au diferite niveluri de suprataxe.

Am ales un server din Europa. Oricum, după configurarea Cloudflare, locația serverului nu mai contează atât de mult.

Configurația finală este următoarea: 16GB memorie, 6CPU, 200GB NVMe, la un preț de 9,50 euro pe lună, echivalentul a 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Acest preț este aproape o zecime din prețul serviciilor oferite de Alibaba Cloud și Amazon**.

![](https://i-01.eu.org/1718356956.avif)

Am rulat [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) pentru a verifica performanța și parametrii:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU afișează modelul `AMD EPYC 9224 24-Core Processor`, cu un scor de performanță pentru un singur nucleu de 1285
și un scor multi-core de 4277. Mai multe rezultate sunt disponibile la [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Am cumpărat trei servere și le-am activat simultan pentru a mă asigura că sunt în aceeași cameră de servere, facilitând astfel configurarea unei soluții de înaltă disponibilitate.

Serverele lor pot avea probleme ocazionale, dar prin utilizarea unei soluții de înaltă disponibilitate, pot asigura accesibilitatea site-ului.

Utilizatorii noi trebuie să trimită o copie a cărții de identitate pentru autentificare.

## Configurați autentificarea fără parolă

După câteva minute, toate serverele au fost activate

Primul lucru pe care trebuie să-l faceți este să editați fișierul `~/.ssh/config` de pe mașina locală pentru a seta un alias pentru IP și apoi să utilizați `ssh-copy-id root@c2` pentru a configura autentificarea fără parolă.

![](https://i-01.eu.org/1718287198.avif)

Puteți modifica acest script [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) pentru a finaliza mai rapid configurația de inițializare.

După configurarea autentificării fără parolă, puteți utiliza [pdsh](https://github.com/chaos/pdsh) pentru a efectua operațiuni în loturi, ceea ce este foarte convenabil.

În primul rând, activați manual IPv6 și testați-l

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Apoi, actualizați sistemul la Ubuntu 24 și instalați software-ul utilizat în mod obișnuit.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 înseamnă schimbarea limbii în chineză și a fusului orar la Beijing.

Software-ul instalat implicit este configurat în funcție de obiceiurile mele personale, cum ar fi [mise](https://github.com/jdx/mise) și [direnv](https://direnv.net/). Dacă este necesar, puteți copia repository-ul [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) și îl puteți modifica după cum este necesar.

Acest pas poate dura ceva timp; după aproximativ o jumătate de oră, actualizarea și instalarea software-ului utilizat în mod obișnuit vor fi finalizate cu succes. Puteți verifica acest lucru folosind următoarea comandă:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh pentru accelerarea SSH

Rețeaua dintre Europa și China nu este foarte stabilă. Se recomandă utilizarea [mosh](//mosh.org) pentru a îmbunătăți performanța `ssh`.

Creați un script `c0` în directorul `~/.bin` (asigurați-vă că adăugați acest director la variabila de mediu `PATH`) după cum urmează:

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

După crearea scriptului, acordați-i permisiuni de executare și creați legături simbolice pentru `c1` și `c2`.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

De acum înainte, puteți introduce direct `c0` sau `c1` pentru a utiliza `mosh` pentru a vă conecta rapid și a intra în [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html).

## Convertiți formatul de partiție de la ext4 la Btrfs

[Btrfs](https://wikipedia.org/wiki/Btrfs) permite crearea de instantanee de disc, facilitând astfel backup-ul.

În primul rând, intrați în sistemul de recuperare

![](https://i-01.eu.org/1718300448.avif)

Alegeți Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Așteptați ca serverul să repornească

La conectarea prin SSH, amprenta se poate schimba. Utilizați comanda `ssh-keygen -R ip` pentru a o curăța

Apoi, rulați următorul script pentru a converti partiția

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Scriptul va reporni automat sistemul după ce conversia este finalizată cu succes.

### Vizualizați rata de compresie Btrfs

În mod implicit, Btrfs comprimă automat datele. Comanda pentru a verifica rata de compresie este:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compresie manuală

Dacă sunteți un perfecționist, puteți efectua o compresie completă a discului manual. Comanda este:

```bash
btrfs filesystem defragment -r -czstd /
```

După cum se arată în imagine, după comprimarea manuală a noului sistem, s-au comprimat încă aproximativ 100MB.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Creați un backup de instantanee Btrfs cu Snapper

[Snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) este un instrument excelent pentru crearea de instantanee de backup pentru Btrfs.

Scriptul de inițializare va crea directorul `~/ubuntu`. Puteți rula următoarea comandă pentru a crea instantanee:

```
~/ubuntu/snapper/init.sh
```

Scriptul complet este disponibil pe [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Puteți utiliza comanda `snapper list-configs` pentru a vizualiza subvolumele pentru care sunt configurate instantanee

![](https://i-01.eu.org/1718302689.avif)

Puteți utiliza comanda `snapper -c mnt list` pentru a vizualiza instantaneele unui anumit subvolum

Puteți verifica setările de backup pentru un subvolum specific în fișierul `/etc/snapper/configs/mnt`

Mai multe informații:

[Utilizați Snapper pentru a gestiona ușor instantaneele Btrfs](https://zhuanlan.zhihu.com/p/31082518)

## Instantanee de server Contabo

Contabo oferă funcționalitatea de instantanee de server, dar nu suportă instantanee programate. Am creat un script [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pentru a realiza instantanee zilnice.

![](https://i-01.eu.org/1718304206.avif)

Pentru a restabili un instantaneu de server, accesați meniul de gestionare și faceți clic pe Cronol

![](https://i-01.eu.org/1718304275.avif)

Apoi, faceți clic pe Instantanee pentru a restabili.

![](https://i-01.eu.org/1718304063.avif)

Rețineți că acest tip de instantanee are o granularitate mare. Odată restaurat, toate datele noi vor fi pierdute, deci utilizați-l cu prudență.

De obicei, este mai convenabil să utilizați instantaneele Btrfs.

## Detalii despre sistemul de recuperare

La intrarea în sistemul de recuperare, după ce portul 22 este accesibil prin [tcping](https://github.com/paradiseduo/tcping), va trebui să așteptați 2-3 minute pentru a putea accesa serverul cu parola setată.

```
tcping ip 22 -c 9999
```

Puteți monitoriza accesibilitatea portului.

### Cum să accesați hard disk-ul și să restaurați instantaneele după intrarea în sistemul de recuperare

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Puteți vizualiza instantaneele, de exemplu:

```
snapper -c etc list
```

Vizualizați modificările din fișierele instantanee

```
snapper -c etc status 5..6
```

Vizualizați textul diferențelor specifice

```
snapper -c etc diff 3..5
```

Restaurați instantaneul: de exemplu, anulați toate modificările după instantaneul 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Activați persistența jurnalului

În sistemul de recuperare, activarea persistenței jurnalului necesită crearea manuală a directorului corespunzător și efectuarea unor pași suplimentari, deoarece este posibil să nu aveți servicii systemd care rulează. Iată pașii pe care îi puteți încerca:

Mai întâi, efectuați chroot, apoi

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reporniți în sistemul Ubuntu: După ce ați efectuat modificările de mai sus, trebuie să reporniți mașina în mod normal și să intrați în sistemul Ubuntu, nu în sistemul de recuperare.

În acest fel, systemd-journald va porni cu noua configurație și va începe să stocheze jurnalele în mod persistent pe hard disk.

Rețineți că operațiunile de mai sus sunt efectuate în sistemul de recuperare, deci modificările vor intra în vigoare doar după repornirea sistemului și ieșirea din modul de recuperare.

Aceasta înseamnă că nu veți vedea imediat modificările persistente ale jurnalelor existente, dar toate jurnalele generate după aceasta vor fi persistente.

În acest fel puteți vizualiza jurnalele serviciului SSH

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Note despre probleme dificile și complicate

### Rezolvarea problemelor ciudate: serverul nu poate fi accesat prin SSH

Am folosit un script de automatizare GitHub pentru a compila și implementa automat, dar am observat că serviciul de implementare nu poate fi accesat prin SSH.

La intrarea în sistemul de recuperare și verificarea jurnalelor, am constatat că există o problemă de permisiuni:

`Missing privilege separation directory: /run/sshd`

Puteți crea acest director cu următoarea comandă:

```
chown root:root /
systemd-tmpfiles --create
```

După investigații repetate, am constatat că utilizatorul `uid` al tar în GitHub Action este `1001`

Dezambalarea tar trebuie să fie fără parametrul `--no-same-owner`, altfel va fi dezambalat ca utilizatorul `uid` `1001`

Ca urmare, rsync va schimba grupul de utilizatori al directorului rădăcină și, după repornire, nu veți putea accesa SSH.

Modificați scriptul de dezambalare după cum urmează:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```