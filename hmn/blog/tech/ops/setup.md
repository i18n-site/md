# Pib Lub Server (Siv BTRFS Muab Faib, Snapper Teem Sijhawm Snapshot)

## contabo Buy Server

contabo yog tus kws kho mob pheej yig VPS hauv Tebchaws Yelemees nrog keeb kwm ntev (ntau tshaj 20 xyoo) thiab ntau tus neeg siv (ntau tshaj 200,000), yog li tsis tas yuav txhawj xeeb txog kev khiav tawm.

VPS muas [contabo.com](//contabo.com) nco ntsoov xaiv tus nqi Euro, uas yog pheej yig dua.

![](https://i-01.eu.org/1718285782.avif)

Muaj tus nqi them ib zaug rau kev sib txuas.
Txawm li cas los xij, muaj ob peb hnub txhua lub hlis uas tus nqi them nqi tsuas yog sau npe thiab them nyiaj rau kev tshaj tawm email.

Ntxiv rau qhov chaw pub dawb hauv Tebchaws Europe, lwm thaj chaw muaj ntau theem ntawm tus nqi nce.

Kuv xaiv ib tus neeg rau zaub mov nyob sab Europe Txawm li cas los xij, tom qab siv cloudflare, tsis muaj qhov sib txawv ntawm cov servers.

Qhov kawg configuration yog raws li nram no, 16GB nco, 6CPU, 200 GB NVMe, 9.50 euros ib hlis, sib npaug rau 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Tus nqi no yog yuav luag ib feem kaum ntawm tus nqi ntawm Alibaba Huab thiab Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Kuv siv [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Qhia CPU Qauv `AMD EPYC 9224 24-Core Processor` , ib qho qhab nia ua tau zoo 1285
, multi-core qhab nia 4277 Saib cov txiaj ntsig ntxiv [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Kuv yuav peb lub servers ib zaug thiab qhib lawv tib lub sijhawm Qhov no ua kom cov servers nyob hauv tib lub computer chav, ua kom yooj yim dua los tsim kom muaj kev txaus siab yav tom ntej.

Nws cov servers qee zaus dai, ua kom lub vev xaib nkag mus tau los ntawm kev muaj ntau.

Cov neeg siv tshiab yuav tsum xa lawv daim npav ID rau kev lees paub lub npe tiag tiag thaum yuav khoom.

## Configure Password-Free ID Nkag Mus

Tom qab ob peb feeb, cov servers tau qhib tag nrho.

Thawj qhov IP los hloov kho lub tshuab hauv zos `~/.ssh/config` los teeb tsa lub npe, thiab tom qab ntawd siv `ssh-copy-id root@c2` los teeb tsa tus password tsis pub nkag.

![](https://i-01.eu.org/1718287198.avif)

Koj tuaj yeem hloov kho [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) no kom ua tiav qhov pib teeb tsa sai dua.

Tom qab tus password-dawb configuration tiav, koj tuaj yeem siv nws [pdsh](https://github.com/chaos/pdsh)

Thawj yog kom manually pab ipv6 thiab sim

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Tom qab ntawd hloov kho lub kaw lus mus rau ubuntu 24 nrog ib nyem thiab nruab ib qho software uas nquag siv.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN = 1 txhais tau tias hloov hom lus rau Suav thiab lub sijhawm rau Beijing.

Lub software ntsia los ntawm lub neej ntawd yog teeb tsa raws li kuv tus kheej siv tus cwj pwm, xws li [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , thiab lwm yam. Yog tias tsim nyog, koj tuaj yeem luam tawm [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse thiab hloov kho raws li xav tau.

Cov kauj ruam no yuav siv sij hawm ntev tom qab tos ib nrab ib teev, kev txhim kho thiab kev teeb tsa ntawm cov software siv feem ntau yuav ua tiav. Koj tuaj yeem paub meej qhov no nrog cov lus txib hauv qab no:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Ceev ssh

Lub network los ntawm Tebchaws Europe mus rau Tuam Tshoj tsis ruaj khov Nws raug `ssh` zoo kom siv [mosh](//mosh.org)

Tsim `c0` scripts nyob rau hauv lub zos directory `~/.bin` (feem ntau ntxiv rau ib puag ncig sib txawv `PATH` ) raws li nram no:

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

Tom qab tsim, muab kev tso cai ua tiav thiab muag-txuas `c1` thiab `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Nyob rau hauv lub neej yav tom ntej, koj tuaj yeem nkag ncaj qha rau `c0` thiab `c1` siv `mosh` kev sib txuas ncaj qha thiab nkag mus [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Hloov Muab Faib Hom Los Ntawm ext4 Rau btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) tuaj yeem nqa disk snapshots kom yooj yim thaub qab.

Ua ntej nkag mus rau qhov kev cawm dim

![](https://i-01.eu.org/1718300448.avif)

Xaiv Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Tos kom lub server rov pib dua

ssh Yuav muaj kev hloov pauv ntiv tes, siv `ssh-keygen -R ip` los ntxuav nws

Ces khiav cov ntawv hauv qab no los hloov cov muab faib

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Tsab ntawv yuav cia li pib dua lub kaw lus tom qab kev hloov dua siab tshiab tiav.

### Saib btrfs Compression Ratio

Nws yuav cia li compression los ntawm lub neej ntawd cov lus txib los xyuas cov compression piv yog raws li nram no:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kev Ceev Compression

Yog tias koj yog tus kws tshaj lij, koj tuaj yeem ua tiav daim disk compression manually Cov lus txib yog raws li hauv qab no:

```bash
btrfs filesystem defragment -r -czstd /
```

Raws li pom hauv daim duab hauv qab no, koj tuaj yeem pom tias tom qab phau ntawv compression hauv lub kaw lus tshiab, ze li ntawm 100MB ntau tau compressed.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Tsim Btrfs Snapshot Thaub Qab Nrog snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) yog tus khub zoo tshaj plaws rau Btrfs backup.

Cov ntawv sau pib yuav tsim `~/ubuntu` phau ntawv qhia, tsuas yog khiav cov lus txib hauv qab no:

```
~/ubuntu/snapper/init.sh
```

Pom koj hauv cov ntsiab lus ntawm tsab ntawv [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Siv `snapper list-configs` los saib cov subvolumes uas tau teeb tsa snapshots.

![](https://i-01.eu.org/1718302689.avif)

Siv `snapper -c mnt list` los saib qhov snapshot ntawm subvolume

`/etc/snapper/configs/mnt` tuaj yeem saib cov chaw thaub qab tshwj xeeb ntawm cov subvolume no

Xav paub ntau ntxiv:

[Yooj yim ua si nrog snapshot muaj nuj nqi ntawm Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo Muab kev ua haujlwm snapshot rau server, tab sis tsis txhawb kev teem sijhawm snapshots Kuv tau sau ntawv [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) kom thaij duab txhua hnub.

![](https://i-01.eu.org/1718304206.avif)

Txhawm rau rov qab ib tus neeg rau zaub mov snapshot, thawj zaug nyem Crontol hauv cov ntawv qhia zaub mov

![](https://i-01.eu.org/1718304275.avif)

Tom qab ntawd, nyem Snapshots los kho.

![](https://i-01.eu.org/1718304063.avif)

Txawm li cas los xij, qhov granularity ntawm qhov snapshot no loj dhau thaum rov qab los, cov ntaub ntawv tshiab ntxiv yuav ploj tag, yog li thov siv ceev faj.

Nws yog feem ntau yooj yim dua los siv btrfs snapshots.

## Rescue System Cov Ntsiab Lus

Nkag mus rau qhov 2-3 cawm [tcping](https://github.com/paradiseduo/tcping) 22

```
tcping ip 22 -c 9999
```

Chaw nres nkoj nkag tau tuaj yeem saib xyuas.

### Yuav Ua Li Cas Nkag Mus Rau Lub Hard Drive Tom Qab Nkag Mus Cawm &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Koj tuaj yeem saib cov snapshot, piv txwv li

```
snapper -c etc list
```

Saib cov ntaub ntawv snapshot hloov

```
snapper -c etc status 5..6
```

Saib cov ntawv txawv txawv

```
snapper -c etc diff 3..5
```

Restore snapshot: Piv txwv li, undo tag nrho cov kev hloov tom qab snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Qhib Lub Log Persistence

Enabling log persistence nyob rau hauv ib tug cawm system xav kom koj manually tsim cov ntaub ntawv sib raug zoo thiab ua ib co ntxiv cov kauj ruam, vim hais tias koj yuav tsis muaj ib tug khiav systemd kev pab cuam. Nov yog cov kauj ruam koj tuaj yeem sim:

Thawj chroot, ces

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot rau hauv koj lub Ubuntu system: Tom qab ua qhov kev hloov pauv saum toj no, koj yuav tsum rov pib dua koj lub tshuab ib txwm thiab rau hauv koj lub Ubuntu system es tsis txhob siv lub tshuab cawm.

Nyob rau hauv txoj kev no, systemd-journald yuav pib nrog cov kev teeb tsa tshiab thiab pib khaws cov cav tsis tu ncua ntawm lub hard disk.

Nco ntsoov tias cov haujlwm saum toj no tau ua nyob rau hauv lub tshuab cawm siav, yog li cov kev hloov no yuav tsis siv kom txog thaum lub kaw lus rov pib dua thiab tsis nyob hauv hom kev cawm.

Qhov no txhais tau tias koj yuav tsis pom tam sim ntawd qhov kev hloov pauv rau cov cav uas twb muaj lawm, tab sis tag nrho cov cav tsim tawm tom qab ntawd yuav txuas ntxiv mus.

Txoj kev no koj tuaj yeem saib cov cav ntawm cov kev pabcuam ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Cov Ntawv Sau Txog Cov Kab Mob Nyuaj Thiab Nyuaj

### Daws Qhov Teeb Meem Weird: Tus Neeg Rau Zaub Mov Tsis Tuaj Yeem ssh

Kuv tau siv github qhov kev txiav txim los ua qhov tsis siv neeg muab tso ua ke thiab xa tawm tsab ntawv ua ntej, tab sis pom tias qhov kev xa tawm tsis tuaj yeem yog ssh.

Nkag mus rau qhov kev cawm dim thiab saib cov cav yog qhov teeb meem kev tso cai:

`Missing privilege separation directory: /run/sshd`

Koj tuaj yeem tsim daim ntawv teev npe no nrog cov lus txib hauv qab no

```
chown root:root /
systemd-tmpfiles --create
```

Tom qab rov tshawb xyuas, nws yog github action tus neeg siv `uid` ntawm tar yog `1001`

tar yuav tsum yog tsis muaj parameter `--no-same-owner` , nws yuav decompressed rau `uid` rau `1001` cov neeg siv

Yog li ntawd, rsync yuav hloov cov neeg siv pawg ntawm cov npe hauv paus, thiab tom qab ntawd koj yuav tsis tuaj yeem nkag mus rau ssh tom qab rov pib dua.

Hloov cov ntawv decompression raws li hauv qab no:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```