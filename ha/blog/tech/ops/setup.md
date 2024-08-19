# Ƙaddamar Da Uwar Garken (Amfani Da Ɓangaren BTRFS, Hoton Hoto Da Aka Tsara)

## Uwar Garken Sayen contabo

contabo shine mai ba da VPS mai arha a Jamus tare da dogon tarihi (fiye da shekaru 20) da masu amfani da yawa (fiye da 200,000), don haka babu buƙatar damuwa game da gudu.

VPS siyan [contabo.com](//contabo.com) tuna don zaɓar farashin Yuro, wanda ya fi arha.

![](https://i-01.eu.org/1718285782.avif)

Akwai kuɗin shigarwa na lokaci ɗaya don contabo.
Koyaya, akwai ƴan kwanaki kowane wata inda kuɗin shigarwa kyauta ne kawai kuyi rajista kuma ku kula da imel ɗin talla.

Baya ga kuɗin yanki na kyauta a Turai, sauran yankuna suna da matakan haɓaka daban-daban.

Na zaɓi uwar garken Turai Duk da haka, bayan amfani da Cloudflare, babu bambanci sosai tsakanin sabobin.

Tsarin ƙarshe na ƙarshe shine kamar haka, ƙwaƙwalwar ajiya 16GB, 6CPU, 200 GB NVMe, Yuro 9.50 a wata, daidai da 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Wannan farashin kusan kashi ɗaya cikin goma na farashin Alibaba Cloud da Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Na yi amfani da [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) don gudanar da ayyuka da sigogi:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

`AMD EPYC 9224 24-Core Processor` CPU 1285
, Multi-core ci 4277 Duba ƙarin sakamako [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Na sayi sabobin uku a lokaci guda kuma na kunna su a lokaci guda Wannan yana tabbatar da cewa sabobin suna cikin ɗakin kwamfuta ɗaya, yana sauƙaƙa don gina babban samuwa a nan gaba.

Sabbin sabar sa lokaci-lokaci suna ratayewa, suna tabbatar da isa ga gidan yanar gizon ta hanyar samun dama.

Sabbin masu amfani suna buƙatar ƙaddamar da katunan ID ɗin su don tantance ainihin suna lokacin siye.

## Sanya Shiga Mara Kalmar Sirri

Bayan 'yan mintoci kaɗan, duk an kunna sabobin.

Abu na farko IP a gyara na'urar gida `~/.ssh/config` don saita laƙabi, sannan a yi amfani da `ssh-copy-id root@c2` don saita shiga mara kalmar sirri.

![](https://i-01.eu.org/1718287198.avif)

Kuna iya canza wannan [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) don kammala tsarin farawa da sauri.

Bayan an gama saitin kalmar sirri, zaku iya amfani da shi [pdsh](https://github.com/chaos/pdsh)

Na farko shine don kunna iPV6 da hannu da gwadawa

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Sannan haɓaka tsarin zuwa ubuntu 24 tare da dannawa ɗaya kuma shigar da software da aka saba amfani dashi.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 yana nufin sauya harshe zuwa Sinanci da yankin lokaci zuwa Beijing.

An tsara [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ɗin da aka shigar ta hanyar tsohuwa bisa ga halaye na amfani da [direnv](https://direnv.net/) , kamar [mise](https://github.com/jdx/mise)

Wannan matakin yana ɗaukar lokaci mai tsawo Bayan jira na rabin sa'a, haɓakawa da shigar da software da aka saba amfani da su za su yi nasara. Kuna iya tabbatar da wannan tare da umarni mai zuwa:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Yana Sauri ssh

Cibiyar sadarwa daga Turai zuwa China ba ta [mosh](//mosh.org) `ssh` .

Ƙirƙirar rubutun `c0` a cikin kundin adireshin gida `~/.bin` (wanda aka ƙara shi zuwa madaidaicin yanayi `PATH` ) kamar haka:

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

Bayan ƙirƙirar, ba da izini da za a iya aiwatarwa da `c1` da `c2` mai laushi.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

A nan gaba, zaku iya shigar da `c0` da `c1` kai tsaye don amfani da haɗin kai tsaye mai sauri `mosh` kuma shigar da [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Maida Tsarin Bangare Daga ext4 Zuwa btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Zai iya ɗaukar hotunan diski don sauƙi.

Da farko shigar da tsarin ceto

![](https://i-01.eu.org/1718300448.avif)

Zaɓi Ceto Debian

![](https://i-01.eu.org/1718300753.avif)

Jira uwar garken ta sake farawa

Za a sami canjin sawun ssh , yi amfani da `ssh-keygen -R ip` don tsaftace shi

Sa'an nan kuma gudanar da rubutun mai zuwa don canza bangare

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Rubutun zai sake kunna tsarin ta atomatik bayan an yi nasarar jujjuyawa.

### Duba Rabon Matsawa btrfs

Za ta damfara ta atomatik Umurnin don bincika rabon matsawa kamar haka:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Matsi Da Hannu

Idan kai mai kamala ne, Hakanan zaka iya yin cikakken matsewar diski da hannu Umurnin shine kamar haka:

```bash
btrfs filesystem defragment -r -czstd /
```

Kamar yadda aka nuna a cikin hoton da ke ƙasa, za ku ga cewa bayan damfara da hannu a cikin sabon tsarin, kusan 100MB an matsa.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Ƙirƙiri Madadin Hoto Na Btrfs Tare Da snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) shine mafi kyawun abokin tarayya don Btrfs madadin.

Rubutun farawa zai ƙirƙiri kundin adireshin `~/ubuntu` , kawai gudanar da umarni mai zuwa:

```
~/ubuntu/snapper/init.sh
```

Duba ku a cikin abun cikin rubutun [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Yi amfani da `snapper list-configs` don duba ƙananan juzu'i waɗanda aka saita hotunan hoto don su.

![](https://i-01.eu.org/1718302689.avif)

Yi amfani da `snapper -c mnt list` don duba hoton ƙaramin juzu'i

`/etc/snapper/configs/mnt` na iya duba takamaiman saitunan wariyar ajiya na wannan ƙaramin juzu'in

Karin bayani:

[Yi wasa cikin sauƙi tare da aikin ɗaukar hoto na Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Hoton Uwar Garken contabo

contabo ba da aikin ɗaukar hoto na uwar garke, amma baya goyan bayan [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) -shiryen daukar hoto na yau da kullun.

![](https://i-01.eu.org/1718304206.avif)

Don mayar da hoton uwar garke, da farko danna Crontol a cikin menu na gudanarwa

![](https://i-01.eu.org/1718304275.avif)

Sa'an nan, danna Snapshots don mayar.

![](https://i-01.eu.org/1718304063.avif)

Koyaya, girman girman wannan hoton ya yi girma da yawa da zarar an dawo da shi, sabbin bayanan da aka ƙara za su ɓace gaba ɗaya, don haka a yi amfani da su a hankali.

Yawancin lokaci ya fi dacewa don amfani da btrfs snapshots.

## Bayanan Tsarin Ceto

[tcping](https://github.com/paradiseduo/tcping) da tsarin 2-3 22

```
tcping ip 22 -c 9999
```

Ana iya sa ido kan samun damar tashar jiragen ruwa.

### Yadda Ake Samun Damar Rumbun Kwamfutarka Bayan Shigar Da Ceto &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Kuna iya duba hoton, misali

```
snapper -c etc list
```

Duba canje-canjen hoton hoto

```
snapper -c etc status 5..6
```

Duba takamaiman rubutu dabam

```
snapper -c etc diff 3..5
```

Mayar da hoto: Misali, gyara duk canje-canje bayan hoton hoto na 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Kunna Dagewar Log

Ba da damar dagewar log ɗin ƙarƙashin tsarin ceto yana buƙatar ka ƙirƙiri littafin da ya dace da hannu kuma ka yi wasu ƙarin matakai, saboda ƙila ba ka da sabis na tsarin aiki. Anan akwai matakan da zaku iya gwadawa:

Na farko chroot, sa'an nan

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Sake yi cikin tsarin Ubuntu: Bayan yin canje-canjen da ke sama, kuna buƙatar sake kunna injin ku akai-akai kuma cikin tsarin Ubuntu maimakon tsarin ceto.

Ta wannan hanyar, systemd-journald zai fara da sabon tsarin kuma ya fara adana rajistan ayyukan a kan rumbun kwamfutarka.

Ka tuna cewa ana yin ayyukan da ke sama akan tsarin ceto, don haka waɗannan canje-canje ba za su yi tasiri ba har sai an sake kunna tsarin kuma baya cikin yanayin ceto.

Wannan yana nufin cewa nan da nan ba za ku ga kowane canje-canje ga rajistan ayyukan da ke wanzu waɗanda suka zama masu tsayi ba, amma duk rajistan ayyukan da aka samar bayan haka za a ci gaba da wanzuwa.

Ta wannan hanyar zaku iya duba rajistan ayyukan sabis ɗin ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Bayanan Kula Akan Cututtuka Masu Wuya Da Rikitarwa

### Magance Matsalar Ban Mamaki: Uwar Garken Ba Zai Iya ssh Ba

Na yi amfani da aikin github don yin tari ta atomatik da rubutun turawa a baya, amma na gano cewa aikin turawa ba zai iya zama ssh ba.

Shigar da tsarin ceto da duban rajistan ayyukan batu ne na izini:

`Missing privilege separation directory: /run/sshd`

Kuna iya ƙirƙirar wannan kundin adireshi tare da umarni mai zuwa

```
chown root:root /
systemd-tmpfiles --create
```

Bayan tar akai `1001` `uid` , saboda github action

tar `--no-same-owner` `uid` `1001`

Sakamakon haka, rsync zai canza rukunin masu amfani na tushen directory, sannan ba za ku iya shiga ssh ba bayan an sake farawa.

Gyara rubutun ragewa kamar haka:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```