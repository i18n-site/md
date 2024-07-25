# Cychwyn Y Gweinydd (Defnyddiwch Raniad BTRFS, Ciplun Wedi'i Amserlennu Snapper)

## Gweinydd Prynu contabo

Mae contabo yn ddarparwr VPS rhad yn yr Almaen gyda hanes hir (mwy nag 20 mlynedd) a llawer o ddefnyddwyr (mwy na 200,000), felly nid oes angen poeni am redeg i ffwrdd.

VPS brynu [contabo.com](//contabo.com) cofiwch ddewis prisio Ewro, sy'n rhatach.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Mae ffi gosod un-amser ar gyfer contabo.
Fodd bynnag, mae yna ychydig ddyddiau bob mis lle mae'r ffi gosod yn rhad ac am ddim.

Yn ogystal â'r ffi ardal am ddim yn Ewrop, mae gan ranbarthau eraill lefelau gwahanol o gynnydd mewn prisiau.

Dewisais weinydd Ewropeaidd Beth bynnag, ar ôl defnyddio cloudflare, nid oes llawer o wahaniaeth rhwng y gweinyddwyr.

Mae'r cyfluniad terfynol fel a ganlyn, cof 16GB, 6CPU, 200 GB NVMe, 9.50 ewro y mis, sy'n cyfateb i 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Mae'r pris hwn bron i un rhan o ddeg o bris Alibaba Cloud ac Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Roeddwn i'n [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) rhedeg y perfformiad a'r paramedrau:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Arddangos CPU Model `AMD EPYC 9224 24-Core Processor` sgôr perfformiad un craidd 1285
, sgôr aml-graidd 4277 Gweld mwy o ganlyniadau [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Prynais dri gweinydd ar yr un pryd a'u gweithredu ar yr un pryd Mae hyn yn sicrhau bod y gweinyddwyr yn yr un ystafell gyfrifiaduron, gan ei gwneud hi'n haws adeiladu argaeledd uchel yn y dyfodol.

Mae ei weinyddion yn hongian i fyny o bryd i'w gilydd, gan sicrhau hygyrchedd gwefan trwy argaeledd uchel.

Mae angen i ddefnyddwyr newydd gyflwyno eu cardiau adnabod ar gyfer dilysu enw go iawn wrth brynu.

## Ffurfweddu Mewngofnodi Di-Gyfrinair

Ar ôl ychydig funudau, roedd y gweinyddwyr i gyd wedi'u actifadu.

Y peth cyntaf yw golygu `~/.ssh/config` Gosod alias ar gyfer IP ac yna defnyddio `ssh-copy-id root@c2` i ffurfweddu mewngofnodi heb gyfrinair.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Gallwch chi addasu'r [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) hon i gwblhau'r cyfluniad cychwyn yn gyflymach.

Ar ôl cwblhau'r cyfluniad heb gyfrinair, gallwch ei ddefnyddio [pdsh](https://github.com/chaos/pdsh) Gellir ei weithredu mewn sypiau, sy'n gyfleus.

Y cyntaf yw galluogi ipv6 a phrofi â llaw

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Yna uwchraddiwch y system i ubuntu 24 gydag un clic a gosodwch feddalwedd a ddefnyddir yn gyffredin.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

Mae CN=1 yn golygu newid iaith i Tsieinëeg a pharth amser i Beijing.

Mae'r meddalwedd a osodwyd yn ddiofyn wedi'i ffurfweddu yn ôl fy arferion defnydd personol, megis [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , ac ati. Os oes angen, gallwch chi gopïo'r warws [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) a'i addasu yn ôl yr angen.

Mae'r cam hwn yn cymryd amser hir ar ôl aros am hanner awr, bydd uwchraddio a gosod meddalwedd a ddefnyddir yn gyffredin yn llwyddiannus. Gallwch ei gadarnhau gyda'r gorchymyn canlynol:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Yn Cyflymu ssh

Nid yw'r rhwydwaith o Ewrop i `ssh` yn sefydlog [mosh](//mosh.org)

Creu `c0` script yng `~/.bin` y peiriant lleol (yn bennaf wedi'i ychwanegu at y newidyn amgylchedd `PATH` ) fel a ganlyn:

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

Ar ôl creu, rhowch ganiatâd gweithredadwy a dolen feddal `c1` , `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Yn y dyfodol, gallwch chi fynd i mewn yn uniongyrchol `c0` , `c1` a gallwch ddefnyddio `mosh` uchel-cyflymder cysylltiad uniongyrchol a mynd i mewn [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Trosi Fformat Rhaniad O ext4 I btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) gymryd cipluniau disg ar gyfer copi wrth gefn hawdd.

Ewch i mewn i'r system achub yn gyntaf

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Dewiswch Achub Debian

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Arhoswch i'r gweinydd ailgychwyn

Bydd newidiadau olion bysedd yn digwydd pan ssh , defnyddiwch `ssh-keygen -R ip`

Yna rhedeg y sgript ganlynol i drosi'r rhaniad

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Bydd y sgript yn ailgychwyn y system yn awtomatig ar ôl i'r trosiad fod yn llwyddiannus.

### Gweld Cymhareb Cywasgu btrfs

Bydd yn cywasgu'n awtomatig yn ddiofyn Mae'r gorchymyn i wirio'r gymhareb cywasgu fel a ganlyn:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Cywasgu Â Llaw

Os ydych chi'n berffeithydd, gallwch chi hefyd berfformio cywasgiad disg llawn â llaw Mae'r gorchymyn fel a ganlyn:

```bash
btrfs filesystem defragment -r -czstd /
```

Fel y dangosir yn y ffigur isod, gallwch weld, ar ôl cywasgu â llaw yn y system newydd, bod bron i 100MB yn fwy wedi'i gywasgu.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Creu Copi Wrth Gefn Ciplun Btrfs Gyda snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) yw'r partner gorau ar gyfer copi wrth gefn Btrfs .

Bydd y sgript cychwyn yn creu'r cyfeiriadur `~/ubuntu` , dim ond rhedeg y gorchymyn canlynol:

```
~/ubuntu/snapper/init.sh
```

Welwn ni chi yng nghynnwys y sgript [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Defnyddiwch `snapper list-configs` i weld yr is-gyfrolau y gosodir cipluniau ar eu cyfer.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Defnyddiwch `snapper -c mnt list` i weld ciplun o is-gyfrol

`/etc/snapper/configs/mnt` Gallwch weld gosodiadau penodol wrth gefn yr is-gyfrol hwn

Mwy o gyfeiriadau:

[Chwarae'n hawdd gyda swyddogaeth ciplun Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Ciplun Gweinydd contabo

contabo Yn darparu swyddogaeth ciplun gweinydd, ond nid yw'n cefnogi cipluniau a drefnwyd Ysgrifennais [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) i gymryd cipluniau dyddiol.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

I adfer ciplun gweinydd, cliciwch yn gyntaf Crontol yn y ddewislen rheoli

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Yna, cliciwch Cipluniau i adfer.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Fodd bynnag, mae gronynnedd y ciplun hwn yn rhy fawr Ar ôl ei adfer, bydd y data sydd newydd ei ychwanegu yn cael ei golli'n llwyr, felly defnyddiwch ef yn ofalus.

Fel arfer mae'n fwy cyfleus defnyddio cipluniau btrfs.

## Manylion Y System Achub

[tcping](https://github.com/paradiseduo/tcping) y system 2-3 22

```
tcping ip 22 -c 9999
```

Gellir monitro hygyrchedd porthladdoedd.

### Sut I Gael Mynediad I'r Gyriant Caled Ar Ôl Mynd I Mewn I Achub &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Gallwch weld y ciplun, er enghraifft

```
snapper -c etc list
```

Gweld newidiadau ffeil ciplun

```
snapper -c etc status 5..6
```

Gweld testun gwahanol penodol

```
snapper -c etc diff 3..5
```

Adfer ciplun: Er enghraifft, dad-wneud pob newid ar ôl ciplun 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Galluogi Dyfalbarhad Log

Mae galluogi dyfalbarhad log o dan system achub yn gofyn ichi greu'r cyfeiriadur cyfatebol â llaw a pherfformio rhai camau ychwanegol, oherwydd efallai nad oes gennych wasanaeth systemd rhedeg. Dyma'r camau y gallwch chi roi cynnig arnynt:

Croot cyntaf, felly

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ailgychwyn i'ch system Ubuntu: Ar ôl gwneud y newidiadau uchod, mae angen i chi ailgychwyn eich peiriant fel arfer ac i mewn i'ch system Ubuntu yn lle'r system achub.

Yn y modd hwn, bydd systemd-journald yn dechrau gyda'r ffurfweddiad newydd ac yn dechrau storio logiau yn barhaus ar y ddisg galed.

Cofiwch fod y gweithrediadau uchod yn cael eu perfformio ar system achub, felly dim ond pan fydd y system wedi'i hailgychwyn ac na fydd yn y modd achub y bydd y newidiadau hynny'n dod i rym.

Mae hyn yn golygu na fyddwch yn gweld unrhyw newidiadau i logiau presennol yn dod yn barhaus ar unwaith, ond bydd yr holl logiau a gynhyrchir ar ôl hyn yn parhau.

Fel hyn gallwch weld logiau'r gwasanaeth ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Nodiadau Ar Afiechydon Anodd a Chymhleth

### Datrys Y Broblem Ryfedd: Ni All Y Gweinydd ssh

Defnyddiais github action i wneud sgript casglu a defnyddio awtomatig o'r blaen, ond darganfyddais na allai'r gwasanaeth lleoli ssh.

Mae mynd i mewn i'r system achub ac edrych ar y logiau yn fater caniatâd:

`Missing privilege separation directory: /run/sshd`

Gallwch greu'r cyfeiriadur hwn gyda'r gorchymyn canlynol

```
chown root:root /
systemd-tmpfiles --create
```

Ar ôl ymchwiliadau dro ar ôl tro, `1001` oherwydd github action Y defnyddiwr a `uid` tar

tar Rhaid dadbacio heb baramedrau `--no-same-owner` bydd yn cael ei ddadgywasgu i `uid` ar gyfer `1001` user

O ganlyniad, bydd rsync yn newid grŵp defnyddwyr y cyfeiriadur gwraidd, ac yna ni fyddwch yn gallu mewngofnodi i ssh ar ôl ailgychwyn.

Addaswch y sgript datgywasgiad fel a ganlyn:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

