# Tanga Sevha (Shandisa BTRFS Partition, Snapper Yakarongwa Snapshot)

## contabo Kutenga Server

contabo inodhura VPS mupi muGermany ane nhoroondo yakareba (kupfuura makore 20) uye vashandisi vakawanda (kupfuura 200,000), saka hapana chikonzero chekunetseka nezvekutiza.

VPS uchitenga [contabo.com](//contabo.com) rangarira kusarudza Euro mitengo, iyo yakachipa.

![](https://i-01.eu.org/1718285782.avif)

Pane imwe-nguva yekuisa mari ye contabo.
Nekudaro, kune mazuva mashoma mwedzi wega wega uko mari yekuisa ndeyemahara Ingo nyoresa uye teerera kune ekusimudzira maemail.

Pamusoro pemubhadharo wemahara wenzvimbo muEurope, mamwe matunhu ane mazinga akasiyana ekuwedzera kwemitengo.

Ndakasarudza sevha yeEurope, zvakadaro, mushure mekushandisa cloudflare, hapana misiyano yakawanda pakati pemaseva.

Kugadziriswa kwekupedzisira kunotevera, 16GB ndangariro, 6CPU, 200 GB NVMe, 9.50 euros pamwedzi, yakaenzana ne74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Uyu mutengo unenge chikamu chimwe chegumi chemutengo weAlibaba Cloud neAmazon** .

![](https://i-01.eu.org/1718356956.avif)

Ini [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) kumhanyisa kuita uye paramita:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU Model `AMD EPYC 9224 24-Core Processor` , single-core performance score 1285
, multi-core score 4277 Ona zvimwe zvabuda [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ndakatenga maseva matatu panguva imwe chete uye ndakaamisa panguva imwe chete.

Masevha ayo anomborembera, achivimbisa kuwanikwa kwewebhusaiti kuburikidza nekuwanikwa kwakanyanya.

Vashandisi vatsva vanofanirwa kuendesa maID avo echokwadi-zita rechokwadi kana uchitenga.

## Gadzirisa Password-Isina Login

Mushure memaminitsi mashoma, maseva ese akavhurwa.

Chinhu chekutanga IP muchina wemuno `~/.ssh/config` kuseta alias, wobva washandisa `ssh-copy-id root@c2` kugadzirisa password-yemahara login.

![](https://i-01.eu.org/1718287198.avif)

Unogona kushandura [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ichi kuti upedze kugadzirisa kwekutanga nekukurumidza.

Mushure mekunge iyo password-yemahara kumisikidzwa yapedzwa, unogona kuishandisa [pdsh](https://github.com/chaos/pdsh)

Yekutanga ndeye kugonesa ipv6 nemaoko uye kuyedza

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Wobva wasimudzira sisitimu ku ubuntu 24 nekudzvanya kamwe chete uye isa inowanzoshandiswa software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 zvinoreva kushandura mutauro kuenda kuChinese uye nguva yenguva kuenda kuBeijing.

Iyo software yakaiswa nekusarudzika inogadziriswa zvinoenderana nemaitiro angu ega ekushandisa, akadai [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , etc. Kana zvichidikanwa, unogona kukopa [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse uye kuigadzirisa sezvinodiwa.

Iyi nhanho inotora nguva yakareba mushure mekumirira kwehafu yeawa, kukwidziridzwa uye kuiswa kweanowanzo shandiswa software kuchabudirira. Unogona kusimbisa izvi nemurairo unotevera:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Inomhanyisa ssh

Iyo network kubva kuEurope kuenda kuChina haina `ssh` Inokurudzirwa kushandisa [mosh](//mosh.org)

Gadzira zvinyorwa `c0` mudhairekitori renzvimbo `~/.bin` (kunyanya kuwedzerwa kune nharaunda inosiyana `PATH` ) sezvinotevera:

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

Mushure mekugadzira, ipa mvumo inogoneka uye yakapfava-link `c1` uye `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Mune ramangwana, unogona kupinda zvakananga `c0` uye `c1` kushandisa `mosh` yakakwirira-kumhanya yakananga kubatana uye kupinda [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Shandura Fomati Yekuparadzanisa Kubva ext4 Kuenda Ku btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Inogona kutora disk snapshots kuti zvive nyore kuchengetedza.

Kutanga kupinda muhurongwa hwekununura

![](https://i-01.eu.org/1718300448.avif)

Sarudza Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Mirira kuti server itangezve

ssh nekuchinja kweminwe, shandisa `ssh-keygen -R ip` kuichenesa

Wobva wamhanya inotevera script kuti uchinje chikamu

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Iyo script inozotangazve sisitimu mushure mekunge shanduko yabudirira.

### Ona btrfs Compression Ratio

Iyo inozozvidzvanya nekusingaperi.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manual Compression

Kana iwe uri munhu akakwana, iwe unogona zvakare kuita yakazara disk compression nemaoko.

```bash
btrfs filesystem defragment -r -czstd /
```

Sezvinoratidzwa mumufananidzo uri pazasi, unogona kuona kuti mushure mekudzvanywa kwemanyore muhurongwa hutsva, ingangoita 100MB yakawanda yakamanikidzwa.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Gadzira Btrfs Snapshot Backup Ne snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ndiye akanakisa shamwari ye Btrfs backup.

Iyo yekutanga script ichagadzira iyo `~/ubuntu` dhairekitori, ingo mhanyisa unotevera kuraira:

```
~/ubuntu/snapper/init.sh
```

Ndokuona mune script zvemukati [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Shandisa `snapper list-configs` kuona mavhoriyamu akaiswa ma snapshots.

![](https://i-01.eu.org/1718302689.avif)

Shandisa `snapper -c mnt list` kuona mufananidzo we subvolume

`/etc/snapper/configs/mnt` inogona kuona iyo chaiyo backup marongero eiyi subvolume

Mamwe mareferensi:

[Tamba zviri nyore neiyo snapshot basa re Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo Inopa sevha snapshot basa, asi haitsigire yakarongwa [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) .

![](https://i-01.eu.org/1718304206.avif)

Kuti udzorere sevha snapshot, tanga wadzvanya Crontol mune manejimendi menyu

![](https://i-01.eu.org/1718304275.avif)

Zvadaro, tinya Snapshots kudzorera.

![](https://i-01.eu.org/1718304063.avif)

Nekudaro, iyo granularity yeiyi snapshot yakakura zvakanyanya kana yadzoreredzwa, iyo ichangobva kuwedzerwa data icharasika zvachose, saka ndapota ishandise nekuchenjerera.

Kazhinji zviri nyore kushandisa btrfs snapshots.

## Rescue System Details

Pinda iyo 22 sisitimu Mushure mekunge chiteshi chasvika [tcping](https://github.com/paradiseduo/tcping) , haugone kuiwana neseti password 2-3 maminetsi.

```
tcping ip 22 -c 9999
```

Kuwanikwa kwePort kunogona kuongororwa.

### Maitiro Ekuwana Iyo Hard Drive Mushure Mekupinda Kununura &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Unogona kuona mufananidzo, semuenzaniso

```
snapper -c etc list
```

Wona snapshot faira shanduko

```
snapper -c etc status 5..6
```

Ona mavara akasiyana

```
snapper -c etc diff 3..5
```

Dzosera snapshot: Semuyenzaniso, gadzirisa zvese shanduko mushure memufananidzo 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Ita Kuti Log Irambe Iripo

Kugonesa kutsungirira kwegi pasi pehurongwa hwekununura kunoda kuti iwe ugadzire dhairekitori rinoenderana uye uite mamwe matanho ekuwedzera, nekuti ungangove usina inomhanya systemd sevhisi. Heano matanho aungaedza:

Kutanga chroot, ipapo

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot muUbuntu system yako: Mushure mekuita shanduko dziri pamusoro, unofanirwa kutangazve muchina wako uye muUbuntu system yako pane yekununura system.

Nenzira iyi, systemd-journald inotanga nekugadzirisa kutsva uye kutanga kuchengeta matanda zvakaramba pane hard disk.

Ramba uchifunga kuti mashandiro ari pamusoro anoitwa pane yekununura system, saka izvo shanduko hazvizoitike kusvika iyo system yatangwazve uye isisiri mumodhi yekununura.

Izvi zvinoreva kuti iwe hauzongoona chero shanduko kune aripo matanda anoshingirira, asi ese matanda anogadzirwa mushure meizvozvo anozoenderera mberi.

Nenzira iyi unogona kuona matanda eiyo ssh sevhisi

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Zvinyorwa Pamusoro Pezvirwere Zvakaoma Uye Zvakaoma

### Gadzirisa Dambudziko Risinganzwisisike: Sevha Haigone ssh

Ndakashandisa github chiito kugadzira otomatiki kuunganidza uye kutumira script pamberi, asi ndakaona kuti sevhisi yekuendesa haigone kuve ssh.

Kupinda muhurongwa hwekununura uye kutarisa matanda inyaya yemvumo:

`Missing privilege separation directory: /run/sshd`

Iwe unogona kugadzira dhairekitori iri nemurairo unotevera

```
chown root:root /
systemd-tmpfiles --create
```

Mushure mekuongorora kwakadzokororwa, imhaka github action Mushandisi `uid` we tar ndeye `1001`

tar `--no-same-owner` `uid` `1001`

Nekuda kweizvozvo, rsync inoshandura boka revashandisi remudzi dhairekitori, uye ipapo haugone kupinda mu ssh mushure mekutangazve.

Shandura iyo decompression script sezvinotevera:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```