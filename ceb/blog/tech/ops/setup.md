# Pagsugod Sa Server (Gamit Ang BTRFS Partition, Snapper Scheduled Snapshot)

## contabo Pagpalit Server

Ang contabo usa ka barato nga VPS provider sa Germany nga adunay taas nga kasaysayan (labaw sa 20 ka tuig) ug daghang mga tiggamit (labaw sa 200,000), busa dili kinahanglan nga mabalaka bahin sa paglayas.

VPS nagpalit [contabo.com](//contabo.com) hinumdomi nga pilion ang pagpresyo sa Euro, nga mas barato.

![](https://i-01.eu.org/1718285782.avif)

Adunay usa ka higayon nga bayad sa pag-install alang sa contabo.
Bisan pa, adunay pipila ka mga adlaw matag bulan diin libre ang bayad sa pag-install Pagrehistro ug pagtagad sa mga email nga pang-promosyon.

Dugang sa libre nga bayad sa lugar sa Europe, ang ubang mga rehiyon adunay lainlaing lebel sa pagtaas sa presyo.

Gipili nako ang usa ka European server Bisan pa, pagkahuman sa paggamit sa cloudflare, wala’y daghang kalainan tali sa mga server.

Ang katapusang configuration mao ang mosunod, 16GB memory, 6CPU, 200 GB NVMe, 9.50 euros sa usa ka bulan, katumbas sa 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Kini nga presyo hapit usa sa ikanapulo sa presyo sa Alibaba Cloud ug Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Gigamit nako ang [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Nagpakita CPU Model `AMD EPYC 9224 24-Core Processor` , single-core performance score 1285
, multi-core nga iskor 4277 Tan-awa ang dugang nga mga resulta [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Gipalit nako ang tulo ka mga server sa usa ka higayon ug gi-aktibo kini sa parehas nga oras.

Ang mga server niini usahay magbitay, nga nagsiguro sa pagka-access sa website pinaagi sa taas nga pagkaanaa.

Ang mga bag-ong tiggamit kinahanglan nga mosumite sa ilang mga ID card alang sa tinuod nga ngalan nga panghimatuud kung mamalit.

## I-Configure Ang Login Nga Walay Password

Pagkahuman sa pipila ka minuto, ang tanan nga mga server gi-aktibo.

Ang una nga butang IP ang pag-edit sa `~/.ssh/config` sa lokal nga makina aron magbutang usa ka alias, ug dayon gamiton ang `ssh-copy-id root@c2` aron ma-configure ang wala’y password nga pag-login.

![](https://i-01.eu.org/1718287198.avif)

Mahimo nimong usbon kini nga [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) aron mas paspas nga makompleto ang configuration sa initialization.

Human makompleto ang walay password nga configuration, mahimo nimo kini gamiton [pdsh](https://github.com/chaos/pdsh)

Ang una mao ang manual nga pagpagana sa ipv6 ug pagsulay

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Dayon i-upgrade ang sistema sa ubuntu 24 sa usa ka pag-klik ug i-install ang kasagarang gigamit nga software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

Ang CN=1 nagpasabot sa pagbalhin sa pinulongan ngadto sa Chinese ug time zone ngadto sa Beijing.

Ang software nga gi-install sa default gi-configure sumala sa akong personal nga mga batasan sa paggamit, sama sa [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , ug uban pa. Kung gikinahanglan, mahimo nimong kopyahon ang [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) bodega ug usbon kini kung gikinahanglan.

Kini nga lakang nagkinahanglan og taas nga panahon Human sa paghulat sa tunga sa oras, ang pag-upgrade ug pag-instalar sa kasagarang gigamit nga software mahimong malampuson. Mahimo nimong kumpirmahon kini pinaagi sa mosunod nga sugo:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## Gipadali Ni mosh Ang ssh

Ang network gikan sa Europe hangtod sa China dili lig-on Girekomenda [mosh](//mosh.org) gamiton aron mapadali `ssh` .

Paghimo og `c0` ka mga script sa lokal nga direktoryo `~/.bin` (kadaghanan gidugang sa environment variable `PATH` ) sama sa mosunod:

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

Human sa paghimo, paghatag ug executable permissions ug soft-link `c1` ug `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Sa umaabot, mahimo nimong direkta nga mosulod sa `c0` ug `c1` aron magamit `mosh` high-speed nga direktang koneksyon ug pagsulod [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## I-Convert Ang Partition Format Gikan Sa ext4 Ngadto Sa btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Makakuha ug mga snapshot sa disk alang sa sayon nga pag-backup.

Una pagsulod sa sistema sa pagluwas

![](https://i-01.eu.org/1718300448.avif)

Pilia ang Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Paghulat alang sa server nga magsugod pag-usab

ssh Adunay mga pagbag-o sa fingerprint, gamita `ssh-keygen -R ip` aron malimpyohan kini

Dayon padagana ang mosunod nga script aron ma-convert ang partition

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Ang script awtomatikong i-restart ang sistema pagkahuman malampuson ang pagkakabig.

### Tan-Awa Ang btrfs Compression Ratio

Awtomatiko kini nga mag-compress pinaagi sa default Ang mando nga susihon ang ratio sa compression mao ang mosunod:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manwal Nga Kompresiyon

Kung ikaw usa ka perpeksiyonista, mahimo ka usab nga maghimo usa ka tibuuk nga pag-compress sa disk nga mano-mano.

```bash
btrfs filesystem defragment -r -czstd /
```

Sama sa gipakita sa hulagway sa ubos, imong makita nga human sa manual compression sa bag-ong sistema, halos 100MB pa ang na-compress.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Paghimo Og Btrfs Snapshot Backup Gamit Ang snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) mao ang labing maayo nga kauban alang sa Btrfs backup.

Ang script sa initialization maghimo sa `~/ubuntu` nga direktoryo, padagana lang ang mosunod nga sugo:

```
~/ubuntu/snapper/init.sh
```

Makita ka sa sulud sa script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Gamita `snapper list-configs` aron tan-awon ang mga subvolume diin gitakda ang mga snapshot.

![](https://i-01.eu.org/1718302689.avif)

Gamita `snapper -c mnt list` aron makita ang snapshot sa usa ka subvolume

`/etc/snapper/configs/mnt` mahimong tan-awon ang piho nga backup nga mga setting sa kini nga subvolume

Dugang nga mga pakisayran:

[Sayon nga pagdula sa snapshot function sa Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Contact Snapshot Sa Server

contabo Naghatag [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) function sa snapshot sa server, apan wala mosuporta sa naka-iskedyul nga mga snapshot.

![](https://i-01.eu.org/1718304206.avif)

Aron mapasig-uli ang snapshot sa server, i-klik una ang Crontol sa menu sa pagdumala

![](https://i-01.eu.org/1718304275.avif)

Dayon, i-klik ang Mga Snapshot aron mapasig-uli.

![](https://i-01.eu.org/1718304063.avif)

Apan, ang granularity niini nga snapshot kay dako na kaayo kung mabalik na, ang bag-ong gidugang nga data hingpit nga mawala, busa palihog gamita kini uban ang pag-amping.

Kasagaran mas sayon ang paggamit sa mga snapshot sa btrfs.

## Mga Detalye Sa Sistema Sa Pagluwas

Pagsulod sa sistema sa pagluwas 22 Human ma [tcping](https://github.com/paradiseduo/tcping) access ang pantalan, dili nimo kini ma-access gamit ang gitakda nga password sulod sa 2-3 minuto ug maayo na.

```
tcping ip 22 -c 9999
```

Ang pag-access sa pantalan mahimong ma-monitor.

### Giunsa Ang Pag-Access Sa Hard Drive Pagkahuman Sa Pagsulod Sa Pagluwas &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Mahimo nimong tan-awon ang snapshot, pananglitan

```
snapper -c etc list
```

Tan-awa ang mga pagbag-o sa snapshot file

```
snapper -c etc status 5..6
```

Tan-awa ang piho nga diff nga teksto

```
snapper -c etc diff 3..5
```

Iuli ang snapshot: Pananglitan, bawia ang tanang kausaban human sa snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### I-Enable Ang Pagpadayon Sa Log

Ang pagpagana sa pagpadayon sa log ubos sa usa ka sistema sa pagluwas nagkinahanglan kanimo sa paghimo sa katugbang nga direktoryo ug paghimo og pipila ka dugang nga mga lakang, tungod kay wala kay nagdagan nga serbisyo sa systemd. Ania ang mga lakang nga mahimo nimong sulayan:

Una chroot, unya

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Pag-reboot sa imong sistema sa Ubuntu: Human sa paghimo sa mga pagbag-o sa ibabaw, kinahanglan nimo nga i-reboot ang imong makina sa normal ug sa imong sistema sa Ubuntu imbes sa sistema sa pagluwas.

Niining paagiha, ang systemd-journald magsugod sa bag-ong configuration ug magsugod sa pagtipig sa mga log nga makanunayon sa hard disk.

Hinumdumi nga ang mga operasyon sa ibabaw gihimo sa usa ka sistema sa pagluwas, aron ang mga pagbag-o dili molihok hangtod ang sistema ma-reboot ug wala na sa mode sa pagluwas.

Nagpasabot kini nga dili dayon nimo makita ang bisan unsang mga pagbag-o sa mga naglungtad nga mga troso nga mahimong makanunayon, apan ang tanan nga mga troso nga nahimo pagkahuman niana magpadayon.

Niining paagiha makita nimo ang mga log sa serbisyo sa ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Mga Nota Sa Lisud Ug Komplikado Nga Mga Sakit

### Pagsulbad Sa Katingad-an Nga Problema: Ang Server Dili Maka-Ssh

Gigamit nako ang github nga aksyon aron makahimo usa ka awtomatik nga pag-compile ug deployment script kaniadto, apan nakit-an nga ang serbisyo sa pag-deploy dili mahimong ssh.

Ang pagsulod sa sistema sa pagluwas ug pagtan-aw sa mga troso usa ka isyu sa pagtugot:

`Missing privilege separation directory: /run/sshd`

Mahimo nimong himoon kini nga direktoryo gamit ang mosunod nga sugo

```
chown root:root /
systemd-tmpfiles --create
```

Human sa balik-balik nga imbestigasyon, kini tungod github action ang User `uid` sa tar kay `1001`

tar `--no-same-owner` `uid` `1001`

Ingon nga resulta, ang rsync mag-usab sa grupo sa tiggamit sa root directory, ug unya dili ka maka-log in sa ssh human sa pagsugod pag-usab.

Usba ang decompression script sama sa mosunod:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```