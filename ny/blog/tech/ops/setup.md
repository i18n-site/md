# Yambitsani Seva (Gwiritsani Ntchito Magawo a BTRFS, Chithunzithunzi Chokonzekera)

## contabo Kugula Seva

contabo ndi mtengo wotsika mtengo wa VPS ku Germany ndi mbiri yakale (zaka zoposa 20) ndi ogwiritsa ntchito ambiri (kuposa 200,000), kotero palibe chifukwa chodera nkhawa za kuthawa.

VPS [contabo.com](//contabo.com) kumbukirani kusankha mitengo ya Euro, yomwe ndiyotsika mtengo.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Pali chindapusa chokhazikitsa kamodzi kokha kwa contabo.
Komabe, pali masiku angapo mwezi uliwonse pomwe malipiro oyika ndi aulere Ingolembetsani ndikumvera maimelo otsatsa.

Kuphatikiza pa chindapusa chaulere ku Europe, madera ena ali ndi magawo osiyanasiyana okwera mitengo.

Ndinasankha seva yaku Europe Komabe, nditagwiritsa ntchito cloudflare, palibe kusiyana kwakukulu pakati pa ma seva.

Kukonzekera komaliza kuli motere, kukumbukira kwa 16GB, 6CPU, 200 GB NVMe, 9.50 euro pamwezi, yofanana ndi 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Mtengo uwu ndi pafupifupi gawo limodzi mwa magawo khumi a mtengo wa Alibaba Cloud ndi Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ndidagwiritsa [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) mayendedwe ndi magawo:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Onetsani CPU `AMD EPYC 9224 24-Core Processor` single-core performance score 1285
, zigoli zambiri 4277 Onani zotsatira zina [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ndinagula ma seva atatu nthawi imodzi ndikuwayambitsa nthawi imodzi.

Ma seva ake nthawi zina amayimitsidwa, kuwonetsetsa kupezeka kwa webusayiti chifukwa cha kupezeka kwakukulu.

Ogwiritsa ntchito atsopano ayenera kutumiza ma ID awo kuti atsimikizire dzina lenileni pogula.

## Konzani Malowedwe Opanda Mawu Achinsinsi

Pambuyo pa mphindi zingapo, ma seva onse adatsegulidwa.

`ssh-copy-id root@c2` IP ndikusintha makina am'deralo `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Mutha kusintha [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) iyi kuti mumalize kuyika koyambira mwachangu.

Mukamaliza kukonzanso kopanda mawu achinsinsi, mutha [pdsh](https://github.com/chaos/pdsh) ntchito m'magulu, omwe ndi abwino.

Choyamba ndikutsegula pamanja ipv6 ndikuyesa

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Kenako konzani kachitidwe ka ubuntu 24 ndikudina kamodzi ndikuyika mapulogalamu omwe amagwiritsidwa ntchito kwambiri.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 imatanthauza kusintha chinenero kupita ku Chitchaina ndi nthawi yopita ku Beijing.

Mapulogalamu [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) amaikidwa mwachisawawa amakonzedwa molingana ndi zizolowezi zanga zogwiritsira ntchito, monga [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , ndi zina zotero.

Izi zimatenga nthawi yayitali Mukadikirira kwa theka la ola, kukweza ndi kukhazikitsa mapulogalamu omwe amagwiritsidwa ntchito kwambiri kudzakhala kopambana. Mutha kutsimikizira ndi lamulo ili:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Imathandizira ssh

[mosh](//mosh.org) ochokera ku Europe kupita ku China ndiwokhazikika `ssh`

Pangani `c0` script `~/.bin` akomweko (makamaka owonjezera pakusintha kwachilengedwe `PATH` ) motere:

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

Pambuyo pakupanga, perekani zilolezo zotheka ndi ulalo wofewa `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

M'tsogolomu, mutha kulowa mwachindunji `c0` `c1` ndipo mutha kugwiritsa ntchito `mosh` mwachangu kwambiri ndikulowa [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Sinthani Mawonekedwe Ogawa Kuchokera Ku ext4 Kukhala btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Itha kutenga zithunzi za disk kuti zisungidwe mosavuta.

Choyamba lowetsani dongosolo lopulumutsa

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Sankhani Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Yembekezerani seva kuti iyambitsenso

Zosintha zala zala zidzachitika `ssh-keygen -R ip` ssh

Kenako yendetsani zolemba zotsatirazi kuti musinthe magawowo

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script idzayambitsanso dongosolo pambuyo pa kutembenuka bwino.

### Onani btrfs Compression Ratio

Idzangodzipanikiza mwachisawawa Lamulo loti muwone kuchuluka kwa compression ndi motere:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kuponderezana Pamanja

Ngati ndinu wokonda kuchita zinthu mwangwiro, mutha kuchitanso ma compression athunthu pamanja Lamulo lili motere

```bash
btrfs filesystem defragment -r -czstd /
```

Monga momwe tawonetsera pachithunzichi, mutha kuwona kuti pambuyo pa kukanikizana pamanja mudongosolo latsopano, pafupifupi 100MB ina idapanikizidwa.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Pangani Zosunga Zobwezeretsera Za Btrfs Ndi snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ndiye bwenzi labwino kwambiri la Btrfs zosunga zobwezeretsera.

Zolemba zoyambira zidzapanga `~/ubuntu` , ingoyendetsani lamulo ili:

```
~/ubuntu/snapper/init.sh
```

Tikuwonani muzolemba [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Gwiritsani ntchito `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Gwiritsani ntchito `snapper -c mnt list` kuti muwone chithunzithunzi cha subvolume

`/etc/snapper/configs/mnt`

Maumboni enanso:

[Sewerani mosavuta ndi chithunzithunzi cha Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Seva Chithunzithunzi

contabo Amapereka chithunzithunzi cha seva, koma [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) ndi zithunzi zomwe zakonzedwa.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Kuti mubwezeretse chithunzithunzi cha seva, choyamba dinani Crontol mumenyu yoyang'anira

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Ndiye, dinani Zithunzi kuti abwezeretse.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Komabe, granularity ya chithunzithunzichi ndi chachikulu kwambiri ikadzabwezeretsedwa, zomwe zangowonjezedwa posachedwa zidzatayika, choncho chonde mugwiritseni ntchito mosamala.

Nthawi zambiri zimakhala zosavuta kugwiritsa ntchito zithunzi za btrfs.

## Tsatanetsatane Wa Dongosolo Lopulumutsira

Lowani njira 22 doko likafika [tcping](https://github.com/paradiseduo/tcping) , simungathe kulipeza ndi mawu achinsinsi a 2-3 mphindi.

```
tcping ip 22 -c 9999
```

Kufikira kumadoko kumayang'aniridwa.

### Momwe Mungapezere Hard Drive Mutalowa Kupulumutsa &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Mutha kuwona chithunzithunzi, mwachitsanzo

```
snapper -c etc list
```

Onani kusintha kwa fayilo yachidule

```
snapper -c etc status 5..6
```

Onani zolemba zina zosiyana

```
snapper -c etc diff 3..5
```

Bwezeretsani chithunzithunzi: Mwachitsanzo, sinthani zosintha zonse mutatha chithunzi 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Yambitsani Kulimbikira Kwa Chipika

Kuthandizira kulimbikira kwa chipika pansi pa njira yopulumutsira kumafuna kuti mupange pamanja chikwatu chofananira ndikuchita zina zowonjezera, chifukwa mwina mulibe ntchito ya systemd. Nazi njira zomwe mungayesere:

Choyamba chroot, ndiye

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Yambitsaninso dongosolo lanu la Ubuntu: Mukasintha zomwe zili pamwambapa, muyenera kuyambitsanso makina anu nthawi zonse ndi dongosolo lanu la Ubuntu m'malo mopulumutsa.

Mwanjira iyi, systemd-journald idzayamba ndi kasinthidwe katsopano ndikuyamba kusunga zipika mosalekeza pa hard disk.

Kumbukirani kuti ntchito zomwe zili pamwambazi zikuchitidwa pa njira yopulumutsira, kotero kusintha kumeneku kudzangogwira ntchito pokhapokha dongosololi litayambiranso ndipo silikhalanso mu njira yopulumutsira.

Izi zikutanthauza kuti simudzawona kusintha kulikonse kwa zipika zomwe zilipo zikupitilirabe, koma zipika zonse zomwe zimapangidwa pambuyo pa izi zidzapitirizidwa.

Mwanjira iyi mutha kuwona zipika za ssh service

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Zolemba Pa Matenda Ovuta Komanso Ovuta

### Konzani Vuto Lodabwitsa: Seva Siyingathe ssh

Ndidagwiritsa ntchito github kuti ndipange zolembera zokha ndikutumiza kale, koma ndidapeza kuti ntchito yotumizira singakhale ssh.

Kulowa mu dongosolo lopulumutsira ndikuyang'ana zipika ndi vuto la chilolezo:

`Missing privilege separation directory: /run/sshd`

Mutha kupanga bukhuli ndi lamulo ili

```
chown root:root /
systemd-tmpfiles --create
```

Pambuyo pofufuza mobwerezabwereza, ndichifukwa github action ntchito tar ndi `1001` `uid`

tar `--no-same-owner` `uid` `1001`

Zotsatira zake, rsync idzasintha gulu la osuta la mizu, ndiyeno simungathe kulowa mu ssh mutayambiranso.

Sinthani decompression script motere:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

