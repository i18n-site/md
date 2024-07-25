# Bẹrẹ Olupin Naa (Lo Ipin BTRFS, Aworan Ti a Ṣeto Sinapa)

## Olupin Rira contabo

contabo jẹ olupese VPS olowo poku ni Germany pẹlu itan-akọọlẹ gigun (diẹ sii ju ọdun 20) ati ọpọlọpọ awọn olumulo (diẹ sii ju 200,000), nitorinaa ko si iwulo lati ṣe aniyan nipa ṣiṣe kuro.

VPS o ba n ra [contabo.com](//contabo.com) ranti lati yan idiyele Euro, eyiti o din owo.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Owo fifi sori akoko kan wa fun contabo.
Sibẹsibẹ, awọn ọjọ diẹ wa ni gbogbo oṣu nibiti idiyele fifi sori ẹrọ jẹ ọfẹ Kan forukọsilẹ ki o san ifojusi si awọn imeeli igbega.

Ni afikun si idiyele agbegbe ọfẹ ni Yuroopu, awọn agbegbe miiran ni awọn ipele oriṣiriṣi ti awọn alekun idiyele.

Mo ti yan a European olupin Lonakona, lẹhin lilo cloudflare, nibẹ ni ko Elo iyato laarin awọn olupin.

Iṣeto ipari jẹ bi atẹle, iranti 16GB, 6CPU, 200 GB NVMe, awọn owo ilẹ yuroopu 9.50 ni oṣu kan, deede si 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Iye owo yii fẹrẹ to idamẹwa ti idiyele Alibaba Cloud ati Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Mo ti lo [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Ifihan CPU Awoṣe `AMD EPYC 9224 24-Core Processor` Dimegilio išẹ-ọkan-ọkan 1285
, Olona-mojuto Dimegilio 4277 Wo awọn esi diẹ sii [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Mo ti ra awọn olupin mẹta ni akoko kan ati ki o mu wọn ṣiṣẹ ni akoko kanna Eyi ni idaniloju pe awọn olupin wa ni yara kọmputa kanna, ti o mu ki o rọrun lati kọ wiwa giga ni ojo iwaju.

Awọn olupin rẹ lẹẹkọọkan duro, ni idaniloju iraye si oju opo wẹẹbu nipasẹ wiwa giga.

Awọn olumulo titun nilo lati fi awọn kaadi ID wọn silẹ fun ijẹrisi gidi-orukọ nigba rira.

## Tunto Wiwọle-Free Ọrọigbaniwọle

Lẹhin iṣẹju diẹ, gbogbo awọn olupin ti mu ṣiṣẹ.

`ssh-copy-id root@c2` akọkọ IP lati ṣatunkọ ẹrọ agbegbe's `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

O le ṣe atunṣe [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) yii lati pari iṣeto ipilẹṣẹ ni iyara.

Lẹhin iṣeto ti ko ni ọrọ igbaniwọle ti pari, o le lo [pdsh](https://github.com/chaos/pdsh)

Ohun akọkọ ni lati mu ipv6 ṣiṣẹ pẹlu ọwọ ati idanwo

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Lẹhinna ṣe igbesoke eto naa si ubuntu 24 pẹlu titẹ kan ki o fi sọfitiwia ti a lo nigbagbogbo.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 tumo si iyipada ede si Kannada ati agbegbe aago si Beijing.

Sọfitiwia ti a fi sii nipasẹ aiyipada jẹ tunto ni ibamu si [direnv](https://direnv.net/) isesi lilo ti ara ẹni [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) bii [mise](https://github.com/jdx/mise)

Igbesẹ yii gba akoko pipẹ Lẹhin ti nduro fun idaji wakati kan, igbesoke ati fifi sori ẹrọ ti sọfitiwia ti o wọpọ yoo jẹ aṣeyọri. O le jẹrisi rẹ pẹlu aṣẹ atẹle:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Iyara Soke ssh

Nẹtiwọọki lati Yuroopu si Ilu China ko ni iduroṣinṣin O jẹ iṣeduro `ssh` lo [mosh](//mosh.org)

Ṣẹda iwe afọwọkọ `c0` kan ninu `~/.bin` agbegbe (eyiti o ṣafikun si oniyipada `PATH` ) bi atẹle:

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

Lẹhin ẹda, funni ni awọn igbanilaaye ṣiṣe ati ọna asopọ rirọ `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Ni ọjọ iwaju, o le wọle taara `c0` `c1` ati pe o le lo asopọ taara iyara `mosh` ki o tẹ [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Yipada Ọna Kika Ipin Lati ext4 Si btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) ya awọn aworan disiki fun afẹyinti rọrun.

Ni akọkọ tẹ eto igbala

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Yan Igbala Debian

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Duro fun olupin lati tun bẹrẹ

Awọn iyipada itẹka yoo waye nigbati ssh `ssh-keygen -R ip` lati sọ di mimọ

Lẹhinna ṣiṣe iwe afọwọkọ atẹle lati yi ipin naa pada

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Awọn akosile yoo laifọwọyi tun awọn eto lẹhin ti awọn iyipada ti wa ni aseyori.

### Wo Ipin Funmorawon btrfs

Yoo ṣe compress laifọwọyi nipasẹ aiyipada.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Funmorawon Afowoyi

Ti o ba jẹ pipe, o tun le ṣe funmorawon disk ni kikun pẹlu ọwọ

```bash
btrfs filesystem defragment -r -czstd /
```

Bi o ṣe han ninu nọmba ti o wa ni isalẹ, o le rii pe lẹhin titẹkuro afọwọṣe ninu eto tuntun, o fẹrẹ to 100MB diẹ sii ni fisinuirindigbindigbin.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Ṣẹda Afẹyinti Aworan Btrfs Pẹlu Sinapa

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) jẹ alabaṣepọ ti o dara julọ fun Btrfs afẹyinti.

Iwe afọwọkọ ibẹrẹ yoo ṣẹda itọsọna `~/ubuntu` , kan ṣiṣẹ aṣẹ wọnyi:

```
~/ubuntu/snapper/init.sh
```

Wo ọ ninu akoonu iwe afọwọkọ [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Lo `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Lo `snapper -c mnt list`

`/etc/snapper/configs/mnt` le wo awọn eto afẹyinti ni pato ti iwọn kekere yii

Awọn itọkasi diẹ sii:

[Ni irọrun mu ṣiṣẹ pẹlu iṣẹ aworan ti Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Foto Olupin contabo

contabo Pese iṣẹ fọtoyiya olupin, ṣugbọn ko ṣe atilẹyin awọn aworan ti a ṣeto [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) mo kọ lati ya awọn aworan ojoojumọ.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Lati mu aworan olupin pada sipo, kọkọ tẹ Crontol ninu akojọ iṣakoso

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Lẹhinna, tẹ Snapshots lati mu pada.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Sibẹsibẹ, granularity ti fọtoyiya ti tobi ju ni kete ti o ti tun pada, data tuntun ti a ṣafikun yoo sọnu patapata, nitorinaa jọwọ lo pẹlu iṣọra.

Nigbagbogbo o rọrun diẹ sii lati lo awọn aworan ifaworanhan btrfs.

## Awọn Alaye Eto Igbala

Tẹ eto igbala 22 Lẹhin ti o wa ni [tcping](https://github.com/paradiseduo/tcping) wiwọle, iwọ kii yoo ni anfani lati wọle si pẹlu ọrọ igbaniwọle ti a ṣeto fun awọn iṣẹju 2-3 kan yoo dara.

```
tcping ip 22 -c 9999
```

Wiwọle ibudo le ṣe abojuto.

### Bii O Ṣe Le Wọle Si Dirafu Lile Lẹhin Titẹ Igbala Pada &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

O le wo aworan aworan, fun apẹẹrẹ

```
snapper -c etc list
```

Wo awọn iyipada faili aworan aworan

```
snapper -c etc status 5..6
```

Wo ọrọ iyatọ kan pato

```
snapper -c etc diff 3..5
```

Pada aworan pada: Fun apẹẹrẹ, mu gbogbo awọn ayipada pada lẹhin aworan 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Mu Itẹramọṣẹ Log Ṣiṣẹ

Gbigbe itẹramọṣẹ iwe ipamọ labẹ eto igbala nbeere ki o ṣẹda pẹlu ọwọ ki o ṣe itọsọna ti o baamu diẹ ninu awọn igbesẹ, nitori o le ma ni iṣẹ ṣiṣe eto. Eyi ni awọn igbesẹ ti o le gbiyanju:

Chroot akọkọ, lẹhinna

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Atunbere sinu eto Ubuntu rẹ: Lẹhin ṣiṣe awọn ayipada loke, o nilo lati tun atunbere ẹrọ rẹ deede ati sinu eto Ubuntu rẹ dipo eto igbala.

Ni ọna yii, systemd-journald yoo bẹrẹ pẹlu iṣeto tuntun ati bẹrẹ fifipamọ awọn akọọlẹ titilai lori disiki lile.

Ranti pe awọn iṣẹ ṣiṣe ti o wa loke ni a ṣe lori eto igbala, nitorinaa awọn iyipada yẹn yoo ni ipa ni kete ti eto naa ba tun bẹrẹ ati pe ko si ni ipo igbala mọ.

Eyi tumọ si pe iwọ kii yoo rii lẹsẹkẹsẹ eyikeyi awọn ayipada si awọn iforukọsilẹ ti o wa tẹlẹ di itẹramọṣẹ, ṣugbọn gbogbo awọn igbasilẹ ti ipilẹṣẹ lẹhin eyi yoo duro.

Ni ọna yii o le wo awọn akọọlẹ ti iṣẹ ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Awọn Akọsilẹ Lori Awọn Arun Ti O Nira Ati Idiju

### Yanju Iṣoro Isokuso: Olupin Ko Le ssh

Mo lo igbese github lati ṣe akojọpọ adaṣe ati iwe afọwọkọ imuṣiṣẹ ṣaaju, ṣugbọn rii pe iṣẹ imuṣiṣẹ ko le ssh.

Titẹ sii eto igbala ati wiwo awọn akọọlẹ jẹ ọran igbanilaaye:

`Missing privilege separation directory: /run/sshd`

O le ṣẹda itọsọna yii pẹlu aṣẹ atẹle

```
chown root:root /
systemd-tmpfiles --create
```

Lẹhin awọn iwadii leralera, `1001` jẹ github action olumulo ti o gbejade tar `uid`

Ṣii tar gbọdọ ṣee ṣe laisi awọn paramita `--no-same-owner` yoo jẹ idinku sinu `uid` fun olumulo `1001`

Bi abajade, rsync yoo yi ẹgbẹ olumulo ti itọsọna root pada, lẹhinna o kii yoo ni anfani lati wọle si ssh lẹhin ti o tun bẹrẹ.

Ṣe atunṣe iwe afọwọkọ idinku bi atẹle:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

