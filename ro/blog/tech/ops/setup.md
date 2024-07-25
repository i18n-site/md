# Inițializați Serverul (Utilizați Partiția BTRFS, Instantaneu Programat Snapper)

## Server De Cumpărare contabo

contabo este un furnizor ieftin de VPS din Germania, cu o istorie lungă (mai mult de 20 de ani) și mulți utilizatori (mai mult de 200.000), așa că nu trebuie să vă faceți griji că fugiți.

VPS cumpărați [contabo.com](//contabo.com) nu uitați să alegeți prețul în euro, care este mai ieftin.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Există o taxă unică de instalare pentru contabo.
Cu toate acestea, există câteva zile în fiecare lună în care taxa de instalare este gratuită Doar înregistrați-vă și acordați atenție e-mailurilor promoționale.

Pe lângă taxa de suprafață gratuită din Europa, alte regiuni au niveluri diferite de creștere a prețurilor.

Am ales un server european. Oricum, după ce am folosit cloudflare, nu există prea multă diferență între servere.

Configurația finală este următoarea, 16GB memorie, 6CPU, 200 GB NVMe, 9,50 euro pe lună, echivalent cu 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Acest preț este aproape o zecime din prețul Alibaba Cloud și Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Am [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) pentru a rula performanța și parametrii:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Afișează CPU Model `AMD EPYC 9224 24-Core Processor` scor de performanță cu un singur nucleu 1285
, scor multi-core 4277 Vedeți mai multe rezultate [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Am cumpărat trei servere simultan și le-am activat în același timp. Acest lucru asigură că serverele sunt în aceeași cameră de computere, facilitând construirea de disponibilitate ridicată în viitor.

Serverele sale se închid ocazional, asigurând accesibilitatea site-ului web prin disponibilitate ridicată.

Utilizatorii noi trebuie să își trimită cărțile de identitate pentru autentificarea cu numele real atunci când cumpără.

## Configurați Autentificarea Fără Parolă

După câteva minute, toate serverele au fost activate.

Primul lucru este să editați mașina locală `~/.ssh/config` Setați un alias pentru IP și apoi folosiți `ssh-copy-id root@c2` pentru a configura autentificarea fără parolă.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Puteți modifica acest [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) pentru a finaliza mai rapid configurația de inițializare.

După finalizarea configurației fără parolă, o puteți utiliza [pdsh](https://github.com/chaos/pdsh) Poate fi operată în loturi, ceea ce este convenabil.

Primul este să activați manual ipv6 și să testați

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Apoi actualizați sistemul la ubuntu 24 cu un singur clic și instalați software-ul utilizat în mod obișnuit.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 înseamnă schimbarea limbii în chineză și a fusului orar la Beijing.

Software-ul instalat implicit este configurat în funcție de obiceiurile mele personale, cum ar fi [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. Dacă este necesar, puteți copia depozitul [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) și îl puteți modifica după cum este necesar.

Acest pas durează mult timp după o jumătate de oră, actualizarea și instalarea software-ului utilizat în mod obișnuit va avea succes. Puteți confirma acest lucru cu următoarea comandă:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Accelerează ssh

Rețeaua din Europa în China nu este `ssh` [mosh](//mosh.org)

Creați un script `c0` în `~/.bin` mașinii locale (adăugat în principal la variabila de mediu `PATH` ) după cum urmează:

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

După creare, acordați permisiuni executabile și soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

În viitor, puteți intra direct `c0` `c1` și puteți utiliza `mosh` pentru a vă conecta direct și a intra [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Convertiți Formatul De Partiție Din ext4 În btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Poate face instantanee de pe disc pentru o copie de rezervă ușoară.

Mai întâi intrați în sistemul de salvare

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Alegeți Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Așteptați ca serverul să repornească

Modificările `ssh-keygen -R ip` amprentă vor avea loc când ssh

Apoi rulați următorul script pentru a converti partiția

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Scriptul va reporni automat sistemul după ce conversia are succes.

### Vizualizați Raportul De Compresie btrfs

Se va comprima automat în mod implicit. Comanda pentru a verifica raportul de compresie este următoarea:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compresie Manuală

Dacă sunteți perfecționist, puteți efectua și o comprimare completă a discului manual. Comanda este următoarea:

```bash
btrfs filesystem defragment -r -czstd /
```

După cum se arată în figura de mai jos, puteți vedea că după comprimarea manuală în noul sistem, aproape 100 MB au fost comprimați în plus.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Creați O Copie De Rezervă a Instantaneului Btrfs Cu snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) cel mai bun partener pentru Btrfs backup.

Scriptul de inițializare va crea directorul `~/ubuntu` , trebuie doar să rulați următoarea comandă:

```
~/ubuntu/snapper/init.sh
```

Ne vedem în conținutul scenariului [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Utilizați `snapper list-configs` pentru a vizualiza subvolumele pentru care sunt setate instantanee.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Utilizați `snapper -c mnt list` pentru a vizualiza un instantaneu al unui subvolum

`/etc/snapper/configs/mnt` Puteți vizualiza setările specifice de backup ale acestui subvolum

Mai multe referințe:

[Joacă cu ușurință cu funcția de instantaneu a Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Instantaneu Server contabo

contabo funcția de instantanee de server, dar nu acceptă instantanee programate. Am scris un [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pentru a face instantanee zilnice.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Pentru a restabili un instantaneu de server, faceți mai întâi clic pe Crontol în meniul de gestionare

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Apoi, faceți clic pe Instantanee pentru a restabili.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Cu toate acestea, gradul de detaliu al acestui instantaneu este prea mare Odată restaurat, datele nou adăugate se vor pierde complet, așa că vă rugăm să le folosiți cu prudență.

De obicei, este mai convenabil să utilizați instantanee btrfs.

## Detalii Despre Sistemul De Salvare

Intrați în sistemul de salvare 22 După ce portul este [tcping](https://github.com/paradiseduo/tcping) accesibil, nu veți putea să îl accesați cu parola setată pentru 2-3 minute.

```
tcping ip 22 -c 9999
```

Accesibilitatea portului poate fi monitorizată.

### Cum Să Accesezi Hard Disk-Ul După Ce Intri În Salvare &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Puteți vizualiza instantaneul, de exemplu

```
snapper -c etc list
```

Vedeți modificările fișierului instantaneu

```
snapper -c etc status 5..6
```

Vizualizați textul diferit specific

```
snapper -c etc diff 3..5
```

Restaurați instantaneul: de exemplu, anulați toate modificările după instantaneul 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Activați Persistența Jurnalului

Activarea persistenței jurnalului într-un sistem de salvare necesită să creați manual directorul corespunzător și să efectuați câțiva pași suplimentari, deoarece este posibil să nu aveți un serviciu systemd care rulează. Iată pașii pe care îi puteți încerca:

Mai întâi chroot, apoi

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reporniți în sistemul Ubuntu: După ce ați făcut modificările de mai sus, trebuie să reporniți mașina în mod normal și în sistemul Ubuntu în loc de sistemul de salvare.

În acest fel, systemd-journald va începe cu noua configurație și va începe să stocheze jurnalele în mod persistent pe hard disk.

Rețineți că operațiunile de mai sus sunt efectuate pe un sistem de salvare, astfel încât acele modificări vor intra în vigoare doar odată ce sistemul este repornit și nu mai este în modul de salvare.

Aceasta înseamnă că nu veți vedea imediat modificări ale jurnalelor existente care devin persistente, dar toate jurnalele generate după aceasta vor fi persistente.

În acest fel puteți vizualiza jurnalele serviciului ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Note Despre Boli Dificile Și Complicate

### Rezolvați Problema Ciudată: Serverul Nu Poate ssh

Am folosit acțiunea github pentru a realiza un script automat de compilare și implementare, dar am constatat că serviciul de implementare nu poate fi ssh.

Intrarea în sistemul de salvare și examinarea jurnalelor este o problemă de permis:

`Missing privilege separation directory: /run/sshd`

Puteți crea acest director cu următoarea comandă

```
chown root:root /
systemd-tmpfiles --create
```

După investigații repetate, este `1001` github action utilizatorul care a încărcat tar `uid`

tar Dezambalarea trebuie făcută fără parametri `--no-same-owner` va fi decomprimată în `uid` pentru `1001` user

Ca rezultat, rsync va schimba grupul de utilizatori din directorul rădăcină și apoi nu vă veți putea conecta la ssh după repornire.

Modificați scriptul de decompresie după cum urmează:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

