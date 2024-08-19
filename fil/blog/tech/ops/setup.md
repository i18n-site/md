# I-Initialize Ang Server (Gamitin Ang BTRFS Partition, Snapper Scheduled Snapshot)

## Server Ng Pagbili Ng contabo

Ang contabo ay isang murang VPS provider sa Germany na may mahabang kasaysayan (higit sa 20 taon) at maraming user (higit sa 200,000), kaya hindi na kailangang mag-alala tungkol sa pagtakas.

VPS bumibili [contabo.com](//contabo.com) tandaan na pumili ng Euro pricing, na mas mura.

![](https://i-01.eu.org/1718285782.avif)

Mayroong isang beses na bayad sa pag-install para sa contabo.
Gayunpaman, mayroong ilang araw bawat buwan kung saan ang bayad sa pag-install ay libre Magrehistro lamang at bigyang pansin ang mga email na pang-promosyon.

Bilang karagdagan sa libreng bayad sa lugar sa Europa, ang ibang mga rehiyon ay may iba't ibang antas ng pagtaas ng presyo.

Pinili ko ang isang European server Anyway, pagkatapos gumamit ng cloudflare, walang gaanong pagkakaiba sa pagitan ng mga server.

Ang huling configuration ay ang mga sumusunod, 16GB memory, 6CPU, 200 GB NVMe, 9.50 euros sa isang buwan, katumbas ng 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ang presyong ito ay halos isang-sampung bahagi ng presyo ng Alibaba Cloud at Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Ginamit ko ang [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) upang patakbuhin ang pagganap at mga parameter:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Ipinapakita CPU Model `AMD EPYC 9224 24-Core Processor` , single-core performance score 1285
, multi-core na marka 4277 Tingnan ang higit pang mga resulta [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Bumili ako ng tatlong server nang sabay-sabay at na-activate ang mga ito sa parehong oras.

Ang mga server nito ay paminsan-minsan ay nag-hang up, na tinitiyak ang pagiging naa-access ng website sa pamamagitan ng mataas na kakayahang magamit.

Kailangang isumite ng mga bagong user ang kanilang mga ID card para sa tunay na pangalan na pagpapatunay kapag bumibili.

## I-Configure Ang Login Na Walang Password

Pagkaraan ng ilang minuto, ang lahat ng mga server ay na-activate.

Ang unang bagay IP i-edit ang `~/.ssh/config` ng lokal na makina upang magtakda ng alias, at pagkatapos ay gumamit ng `ssh-copy-id root@c2` upang i-configure ang pag-login na walang password.

![](https://i-01.eu.org/1718287198.avif)

Maaari mong baguhin ang [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) na ito para mas mabilis na makumpleto ang configuration ng initialization.

Pagkatapos makumpleto ang pagsasaayos na walang password, maaari [pdsh](https://github.com/chaos/pdsh) itong gamitin sa mga batch, na maginhawa.

Ang una ay ang manu-manong paganahin ang ipv6 at pagsubok

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Pagkatapos ay i-upgrade ang system sa ubuntu 24 sa isang click at i-install ang karaniwang ginagamit na software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 ay nangangahulugan ng paglipat ng wika sa Chinese at time zone sa Beijing.

Ang software na naka-install bilang default ay na-configure ayon sa aking mga personal na gawi sa paggamit, tulad ng [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , atbp. Kung kinakailangan, maaari mong kopyahin ang [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse at baguhin ito kung kinakailangan.

Ang hakbang na ito ay tumatagal ng mahabang panahon Pagkatapos maghintay ng kalahating oras, ang pag-upgrade at pag-install ng karaniwang ginagamit na software ay magiging matagumpay. Maaari mong kumpirmahin ito gamit ang sumusunod na utos:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## Pinapabilis Ni mosh Ang ssh

Ang network mula sa Europa hanggang China ay hindi stable. Inirerekomenda [mosh](//mosh.org) gamitin ang `ssh` .

Lumikha ng `c0` script sa lokal na direktoryo `~/.bin` (pangunahing idinagdag sa variable ng kapaligiran `PATH` ) tulad ng sumusunod:

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

Pagkatapos ng paggawa, magbigay ng mga executable na pahintulot at soft-link `c1` at `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Sa hinaharap, maaari mong direktang ipasok `c0` at `c1` upang gumamit `mosh` mataas na bilis na direktang koneksyon at pumasok [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## I-Convert Ang Format Ng Partition Mula ext4 Hanggang btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Maaaring kumuha ng mga snapshot ng disk para sa madaling pag-backup.

Unang pumasok sa rescue system

![](https://i-01.eu.org/1718300448.avif)

Piliin ang Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Hintaying mag-restart ang server

ssh Magkakaroon ng mga pagbabago sa fingerprint, gamitin `ssh-keygen -R ip` upang linisin ito

Pagkatapos ay patakbuhin ang sumusunod na script upang i-convert ang partition

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Awtomatikong ire-restart ng script ang system pagkatapos na matagumpay ang conversion.

### Tingnan Ang Ratio Ng Compression Ng btrfs

Awtomatiko itong i-compress bilang default Ang utos upang suriin ang ratio ng compression ay ang mga sumusunod.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manu-Manong Compression

Kung ikaw ay isang perfectionist, maaari ka ring magsagawa ng isang buong disk compression nang manu-mano Ang command ay ang mga sumusunod:

```bash
btrfs filesystem defragment -r -czstd /
```

Gaya ng ipinapakita sa figure sa ibaba, makikita mo na pagkatapos ng manual compression sa bagong system, halos 100MB pa ang na-compress.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Gumawa Ng Btrfs Snapshot Backup Gamit Ang snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ay ang pinakamahusay na kasosyo para sa Btrfs backup.

Ang script ng pagsisimula ay lilikha ng `~/ubuntu` na direktoryo, patakbuhin lamang ang sumusunod na utos:

```
~/ubuntu/snapper/init.sh
```

Magkita-kita tayo sa nilalaman ng script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Gamitin `snapper list-configs` upang tingnan ang mga subvolume kung saan nakatakda ang mga snapshot.

![](https://i-01.eu.org/1718302689.avif)

Gamitin `snapper -c mnt list` upang tingnan ang isang snapshot ng isang subvolume

`/etc/snapper/configs/mnt` ay maaaring tingnan ang mga partikular na backup na setting ng subvolume na ito

Higit pang mga sanggunian:

[Madaling laruin ang snapshot function ng Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Snapshot Ng contabo Server

contabo Nagbibigay ng function ng snapshot ng server, ngunit hindi sumusuporta sa mga naka-iskedyul [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) snapshot.

![](https://i-01.eu.org/1718304206.avif)

Upang ibalik ang isang snapshot ng server, i-click muna ang Crontol sa menu ng pamamahala

![](https://i-01.eu.org/1718304275.avif)

Pagkatapos, i-click ang Mga Snapshot para i-restore.

![](https://i-01.eu.org/1718304063.avif)

Gayunpaman, ang granularity ng snapshot na ito ay masyadong malaki Kapag naibalik, ang bagong idinagdag na data ay ganap na mawawala, kaya mangyaring gamitin ito nang may pag-iingat.

Karaniwang mas maginhawang gumamit ng mga btrfs snapshot.

## Mga Detalye Ng Rescue System

Ipasok ang rescue system 22 Pagkatapos ng port ay [tcping](https://github.com/paradiseduo/tcping) naa-access, hindi mo ito maa-access gamit ang nakatakdang password sa loob ng 2-3 minuto.

```
tcping ip 22 -c 9999
```

Maaaring masubaybayan ang accessibility sa port.

### Paano I-Access Ang Hard Drive Pagkatapos Ipasok Ang Rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Maaari mong tingnan ang snapshot, halimbawa

```
snapper -c etc list
```

Tingnan ang mga pagbabago sa snapshot file

```
snapper -c etc status 5..6
```

Tingnan ang partikular na diff text

```
snapper -c etc diff 3..5
```

Ibalik ang snapshot: Halimbawa, i-undo ang lahat ng pagbabago pagkatapos ng snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Paganahin Ang Pagtitiyaga Ng Log

Ang pagpapagana ng pagtitiyaga ng log sa ilalim ng isang rescue system ay nangangailangan sa iyong manu-manong lumikha ng kaukulang direktoryo at magsagawa ng ilang karagdagang mga hakbang, dahil maaaring wala kang tumatakbong serbisyo ng systemd. Narito ang mga hakbang na maaari mong subukan:

Unang chroot, pagkatapos

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

I-reboot sa iyong Ubuntu system: Pagkatapos gawin ang mga pagbabago sa itaas, kailangan mong i-reboot nang normal ang iyong machine at sa iyong Ubuntu system sa halip na ang rescue system.

Sa ganitong paraan, magsisimula ang systemd-journald sa bagong configuration at magsisimulang mag-imbak ng mga log nang tuloy-tuloy sa hard disk.

Tandaan na ang mga operasyon sa itaas ay ginagawa sa isang rescue system, kaya ang mga pagbabagong iyon ay hindi magkakabisa hanggang sa ang system ay na-reboot at wala na sa rescue mode.

Nangangahulugan ito na hindi ka kaagad makakakita ng anumang mga pagbabago sa mga kasalukuyang log na nagiging paulit-ulit, ngunit lahat ng mga log na nabuo pagkatapos noon ay magpapatuloy.

Sa ganitong paraan maaari mong tingnan ang mga log ng serbisyo ng ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Mga Tala Sa Mahirap at Kumplikadong Mga Sakit

### Lutasin Ang Kakaibang Problema: Hindi Ma-Ssh Ng Server

Gumamit ako ng github action para gumawa ng awtomatikong compilation at deployment script dati, ngunit nalaman kong hindi ssh ang deployment service.

Ang pagpasok sa rescue system at pagtingin sa mga log ay isang isyu sa pahintulot:

`Missing privilege separation directory: /run/sshd`

Maaari kang lumikha ng direktoryo na ito gamit ang sumusunod na utos

```
chown root:root /
systemd-tmpfiles --create
```

Pagkatapos ng paulit-ulit na pagsisiyasat, ito ay github action ang User `uid` ng tar ay `1001`

tar `--no-same-owner` `uid` `1001`

Bilang resulta, babaguhin ng rsync ang pangkat ng gumagamit ng root directory, at pagkatapos ay hindi ka makakapag-log in sa ssh pagkatapos mag-restart.

Baguhin ang script ng decompression tulad ng sumusunod:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```