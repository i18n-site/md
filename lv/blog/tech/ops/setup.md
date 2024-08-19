# Inicializējiet Serveri (Izmantojiet BTRFS Nodalījumu, Snapper Plānoto Momentuzņēmumu)

## contabo Pirkšanas Serveris

contabo ir lēts VPS nodrošinātājs Vācijā ar ilgu vēsturi (vairāk nekā 20 gadi) un daudziem lietotājiem (vairāk nekā 200 000), tāpēc nav jāuztraucas par bēgšanu.

VPS [contabo.com](//contabo.com) atcerieties izvēlēties eiro cenu, kas ir lētāka.

![](https://i-01.eu.org/1718285782.avif)

Contabo ir vienreizēja uzstādīšanas maksa.
Tomēr katru mēnesi ir dažas dienas, kad uzstādīšanas maksa ir bezmaksas. Vienkārši reģistrējieties un pievērsiet uzmanību reklāmas e-pastiem.

Papildus bezmaksas platības nodevai Eiropā citos reģionos ir dažādi cenu pieauguma līmeņi.

Es izvēlējos Eiropas serveri Jebkurā gadījumā pēc cloudflare izmantošanas starp serveriem nav lielas atšķirības.

Galīgā konfigurācija ir šāda, 16 GB atmiņa, 6 CPU, 200 GB NVMe, 9,50 eiro mēnesī, kas atbilst 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Šī cena ir gandrīz viena desmitā daļa no Alibaba Cloud un Amazon cenas** .

![](https://i-01.eu.org/1718356956.avif)

Es [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) lai palaistu veiktspēju un parametrus:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Tiek rādīts CPU modelis, viena kodola veiktspējas rādītājs 1285 `AMD EPYC 9224 24-Core Processor`
, daudzkodolu rezultāts 4277 Skatīt citus rezultātus [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Es nopirku trīs serverus vienlaikus un aktivizēju tos. Tas nodrošina, ka serveri atrodas vienā datortelpā, tādējādi atvieglojot augstas pieejamības izveidi nākotnē.

Tās serveri laiku pa laikam pārtrauc klausuli, nodrošinot vietnes pieejamību, izmantojot augstu pieejamību.

Jaunajiem lietotājiem, veicot pirkumu, ir jāiesniedz ID kartes reālā vārda autentifikācijai.

## Konfigurējiet Pieteikšanos Bez Paroles

Pēc dažām minūtēm visi serveri tika aktivizēti.

Vispirms IP jārediģē vietējās mašīnas `~/.ssh/config` lai iestatītu aizstājvārdu, un pēc tam izmantojiet `ssh-copy-id root@c2` , lai konfigurētu pieteikšanos bez paroles.

![](https://i-01.eu.org/1718287198.avif)

Varat modificēt šo [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) , lai ātrāk pabeigtu inicializācijas konfigurāciju.

Pēc bezparoles konfigurācijas pabeigšanas [pdsh](https://github.com/chaos/pdsh) var izmantot pa partijām, kas ir ērti.

Pirmais ir manuāli iespējot ipv6 un pārbaudīt

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Pēc tam ar vienu klikšķi jauniniet sistēmu uz ubuntu 24 un instalējiet plaši izmantoto programmatūru.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 nozīmē valodas pārslēgšanu uz ķīniešu valodu un laika joslu uz Pekinu.

Pēc noklusējuma instalētā programmatūra ir konfigurēta atbilstoši maniem personīgajiem lietošanas paradumiem, piemēram [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) utt. Ja nepieciešams, varat kopēt [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) noliktavu un modificēt to pēc vajadzības.

Šis solis aizņem ilgu laiku. Pēc pusstundas gaidīšanas bieži lietotās programmatūras jaunināšana un instalēšana būs veiksmīga. To var apstiprināt ar šādu komandu:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Paātrina ssh

Tīkls no Eiropas uz Ķīnu nav stabils, [mosh](//mosh.org) paātrinātu `ssh` .

Izveidojiet `c0` skriptus lokālajā direktorijā `~/.bin` (galvenokārt pievienoti vides mainīgajam `PATH` ) šādi:

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

Pēc izveides piešķiriet izpildāmās atļaujas un mīkstās saites `c1` un `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Nākotnē varat tieši ievadīt `c0` un `c1` , lai izmantotu `mosh` ātrgaitas tiešo savienojumu, un ievadiet [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvertējiet Nodalījuma Formātu No ext4 Uz btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) uzņemt diska momentuzņēmumus, lai atvieglotu dublēšanu.

Vispirms ievadiet glābšanas sistēmu

![](https://i-01.eu.org/1718300448.avif)

Izvēlieties Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Pagaidiet, līdz serveris restartējas

Tiks mainīti pirkstu nospiedumi, izmantojiet `ssh-keygen -R ip` ssh lai to notīrītu

Pēc tam palaidiet šo skriptu, lai pārveidotu nodalījumu

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Pēc veiksmīgas konvertēšanas skripts automātiski restartēs sistēmu.

### Skatīt btrfs Saspiešanas Pakāpi

Pēc noklusējuma tas tiks automātiski saspiests. Komanda, lai pārbaudītu kompresijas pakāpi, ir šāda:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuāla Saspiešana

Ja esat perfekcionists, varat arī manuāli veikt pilnu diska saspiešanu. Komanda ir šāda:

```bash
btrfs filesystem defragment -r -czstd /
```

Kā parādīts zemāk esošajā attēlā, varat redzēt, ka pēc manuālas saspiešanas jaunajā sistēmā tika saspiests vēl gandrīz 100 MB.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Izveidojiet Btrfs Momentuzņēmuma Dublējumu, Izmantojot snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) labākais partneris Btrfs dublēšanai.

Inicializācijas skripts izveidos `~/ubuntu` direktoriju, vienkārši palaidiet šādu komandu:

```
~/ubuntu/snapper/init.sh
```

Tiekamies scenārija saturā [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Izmantojiet `snapper list-configs` lai skatītu apakšsējumus, kuriem ir iestatīti momentuzņēmumi.

![](https://i-01.eu.org/1718302689.avif)

Izmantojiet `snapper -c mnt list` lai skatītu apakšsējuma momentuzņēmumu

`/etc/snapper/configs/mnt` var skatīt konkrētos šī apakšsējuma dublēšanas iestatījumus

Vairāk atsauces:

[Ērti spēlējiet ar Btrfs momentuzņēmuma funkciju snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Servera Momentuzņēmums

contabo servera momentuzņēmumu funkciju, bet neatbalsta plānotos momentuzņēmumus. Es uzrakstīju [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) , lai uzņemtu ikdienas momentuzņēmumus.

![](https://i-01.eu.org/1718304206.avif)

Lai atjaunotu servera momentuzņēmumu, vispirms pārvaldības izvēlnē noklikšķiniet uz Crontol

![](https://i-01.eu.org/1718304275.avif)

Pēc tam noklikšķiniet uz Momentuzņēmumi, lai atjaunotu.

![](https://i-01.eu.org/1718304063.avif)

Tomēr šī momentuzņēmuma precizitāte ir pārāk liela, kad tikko pievienotie dati tiks pilnībā zaudēti, tāpēc, lūdzu, izmantojiet tos piesardzīgi.

Parasti ērtāk ir izmantot btrfs momentuzņēmumus.

## Sīkāka Informācija Par Glābšanas Sistēmu

Ievadiet glābšanas sistēmu 22 Kad ports [tcping](https://github.com/paradiseduo/tcping) pieejams, jūs nevarēsiet tai piekļūt ar iestatīto paroli 2-3 minūtes.

```
tcping ip 22 -c 9999
```

Ostas pieejamību var uzraudzīt.

### Kā Piekļūt Cietajam Diskam Pēc Glābšanas & Atjaunošanas

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Piemēram, varat skatīt momentuzņēmumu

```
snapper -c etc list
```

Skatiet momentuzņēmuma faila izmaiņas

```
snapper -c etc status 5..6
```

Skatīt konkrētu atšķirīgo tekstu

```
snapper -c etc diff 3..5
```

Atjaunot momentuzņēmumu: piemēram, atsaukt visas izmaiņas pēc 5. momentuzņēmuma

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Iespējot Žurnāla Noturību

Lai iespējotu žurnāla noturību glābšanas sistēmā, jums ir manuāli jāizveido atbilstošais direktorijs un jāveic dažas papildu darbības, jo jums var nedarboties sistēmas pakalpojums. Tālāk ir norādītas darbības, kuras varat izmēģināt:

Vispirms chroot, tad

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Atsāknēšana Ubuntu sistēmā: pēc iepriekš minēto izmaiņu veikšanas, jums ir jārestartē dators kā parasti un Ubuntu sistēmā, nevis glābšanas sistēmā.

Tādā veidā systemd-journald sāks ar jauno konfigurāciju un sāks pastāvīgi saglabāt žurnālus cietajā diskā.

Ņemiet vērā, ka iepriekš minētās darbības tiek veiktas glābšanas sistēmā, tāpēc šīs izmaiņas stāsies spēkā tikai pēc tam, kad sistēma tiks restartēta un vairs nebūs glābšanas režīmā.

Tas nozīmē, ka jūs uzreiz neredzēsit nekādas izmaiņas esošajos žurnālos, kas kļūs pastāvīgi, taču visi pēc tam ģenerētie žurnāli tiks saglabāti.

Tādā veidā jūs varat apskatīt ssh pakalpojuma žurnālus

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Piezīmes Par Sarežģītām Un Sarežģītām Slimībām

### Atrisiniet Dīvaino Problēmu: Serveris Nevar ssh

Iepriekš izmantoju github darbību, lai izveidotu automātisku kompilāciju un izvietošanas skriptu, taču atklāju, ka izvietošanas pakalpojums nevar būt ssh.

Ieeja glābšanas sistēmā un žurnālu apskate ir atļaujas problēma:

`Missing privilege separation directory: /run/sshd`

Šo direktoriju var izveidot ar šādu komandu

```
chown root:root /
systemd-tmpfiles --create
```

Pēc atkārtotas izmeklēšanas tas ir tāpēc github action ka tar lietotājs `uid` ir `1001`

Izsaiņošanai ir jābūt tar ja nav parametra `--no-same-owner` , tas tiks atspiests uz `uid` `1001` lietotājiem

Rezultātā rsync mainīs saknes direktorija lietotāju grupu, un pēc restartēšanas jūs nevarēsit pieteikties ssh.

Modificējiet dekompresijas skriptu šādi:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```