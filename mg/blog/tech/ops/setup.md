# Atombohy Ny Mpizara (Ampiasao Ny Fisarahana BTRFS, Snapper Voalahatra Snapshot)

## contabo Purchase Server

contabo dia mpamatsy VPS mora vidy any Alemaina manana tantara lava (mihoatra ny 20 taona) ary mpampiasa maro (mihoatra ny 200.000), noho izany dia tsy ilaina ny manahy ny handositra.

VPS mividy [contabo.com](//contabo.com) tadidio ny misafidy ny vidin'ny Euro, izay mora kokoa.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Misy sara fametrahana indray mandeha ny contabo.
Na izany aza, misy andro vitsivitsy isam-bolana izay maimaim-poana ny saram-pametrahana Misoratra anarana fotsiny ary tandremo ny mailaka fampiroboroboana.

Ho fanampin'ny saram-pandraharahana maimaim-poana any Eoropa, ny faritra hafa dia manana haavon'ny fiakaran'ny vidiny.

Nifidy mpizara Eoropeana aho Na izany na tsy izany, taorian'ny fampiasana cloudflare dia tsy misy fahasamihafana be eo amin'ireo mpizara.

Ny fanamafisana farany dia toy izao manaraka izao, fahatsiarovana 16GB, 6CPU, 200 GB NVMe, 9.50 euros isam-bolana, mitovy amin'ny 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Saika ny ampahafolon'ny vidin'ny Alibaba Cloud sy Amazon io vidiny io** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Nampiasa [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) aho mba hampandehanana ny fampisehoana sy ny parameter:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Asehoy ny modely CPU `AMD EPYC 9224 24-Core Processor` isa tokana 1285
, isa maromaro 4277 Hijery valiny bebe kokoa [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Nividy mpizara telo tamin'ny fotoana iray aho ary navitrika azy ireo tamin'ny fotoana iray.

Mihantona indraindray ny mpizara azy, miantoka ny fidirana amin'ny tranokala amin'ny alàlan'ny fisiana avo lenta.

Ireo mpampiasa vaovao dia mila mandefa ny kara-panondrony ho fanamarinana ny anarana tena izy rehefa mividy.

## Ampifanaraho Ny Fidirana Tsy Misy Tenimiafina

Rehefa afaka minitra vitsy, dia nihetsika daholo ny mpizara.

Ny zavatra voalohany dia ny manitsy ny an'ny `ssh-copy-id root@c2` eo an- IP `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Azonao atao ny manova an'io [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) io mba hamitana haingana kokoa ny fanefena fanombohana.

Rehefa vita ny fanamboarana tsy misy tenimiafina dia azonao ampiasaina izany [pdsh](https://github.com/chaos/pdsh)

Ny voalohany dia ny mamela ny ipv6 sy ny fitsapana

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Avy eo amboary ny rafitra amin'ny ubuntu 24 amin'ny tsindry iray ary apetraho ny rindrambaiko mahazatra.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 dia midika hoe mamadika ny fiteny amin'ny teny sinoa ary ny faritry ny ora mankany Beijing.

Ny logiciel apetraka amin'ny alàlan'ny default dia amboarina araka ny fomba fampiasako manokana, toy ny [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , sns. Raha ilaina dia azonao atao ny mandika ny [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse ary manova azy araka izay ilaina.

Mitaky fotoana lava io dingana io Rehefa avy niandry antsasak'adiny dia hahomby ny fanavaozana sy fametrahana ny rindrambaiko mahazatra. Azonao atao ny manamarina izany amin'ny baiko manaraka:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Manafaingana Ny ssh

Ny tambajotra avy any Eoropa mankany `ssh` dia tsy miorina tsara [mosh](//mosh.org)

Mamorona script `c0` ao amin'ny lahatahiry an `PATH` toerana `~/.bin`

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

Aorian'ny famoronana dia omeo alalana azo tanterahana sy rohy malefaka `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Amin'ny ho avy, azonao atao ny miditra mivantana `c0` , `c1` ary afaka mampiasa fifandraisana mivantana `mosh` avo lenta ianao ary miditra [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Hanova Endrika Fizarazarana Avy Amin'ny ext4 Ho btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Afaka maka sary kapila mba ho mora backup.

Ampidiro aloha ny rafitra famonjena

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Mifidiana Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Andraso ny mpizara hanomboka

Hisy fiovana eo amin'ny rantsantanana rehefa ssh , ampiasao `ssh-keygen -R ip`

Avy eo, tanteraho ity script manaraka ity hanovana ny fizarazarana

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Hanomboka ho azy ny rafitra ny script rehefa nahomby ny fiovam-po.

### Jereo Ny Tahan'ny Famatrarana btrfs

Izy io dia manindry ho azy amin'ny alàlan'ny default.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Famoretana Amin'ny Tanana

Raha mpanao perfectionista ianao dia afaka manao compression kapila feno amin'ny tanana

```bash
btrfs filesystem defragment -r -czstd /
```

Araka ny asehon'ny sary etsy ambany, dia hitanao fa taorian'ny fanerena amin'ny tanana ao amin'ny rafitra vaovao dia efa ho 100MB bebe kokoa no voatsindry.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Mamorona Backup Snapshot Btrfs Miaraka Amin'ny snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) no mpiara-miasa tsara indrindra ho an'ny backup Btrfs .

Ny script fanombohana dia hamorona ny `~/ubuntu` , araho fotsiny ity baiko manaraka ity:

```
~/ubuntu/snapper/init.sh
```

Hitanao ao amin'ny votoatin'ny script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Ampiasao ny `snapper list-configs` hijerena ny subvolume izay ametrahana sary.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Ampiasao ny `snapper -c mnt list` hijerena sarin'ny subvolume

`/etc/snapper/configs/mnt`

Fanondroana bebe kokoa:

[Milalao mora amin'ny fiasan'ny snapshot an'ny Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Snapshot Mpizara contabo

contabo Manome fiasa snapshot amin'ny mpizara, fa tsy manohana sary voalahatra aho nanoratra [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) mba haka sary isan'andro.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Mba hamerenana ny snapshot mpizara, tsindrio aloha Crontol ao amin'ny menio fitantanana

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Avy eo, tsindrio Snapshots hamerenana.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Na izany aza, lehibe loatra ny haben'ity sary ity rehefa tafaverina, dia ho very tanteraka ny angona vao nampidirina, koa ampiasao izany amim-pitandremana.

Matetika dia mety kokoa ny mampiasa sary btrfs.

## Ny Antsipirian'ny Rafitra Famonjena

Ampidiro ny rafitra 22 rehefa [tcping](https://github.com/paradiseduo/tcping) azo idirana ny seranana, dia tsy ho afaka miditra amin'ny tenimiafina napetraka mandritra 2-3 minitra ianao dia ho tsara.

```
tcping ip 22 -c 9999
```

Azo jerena ny fidirana amin'ny seranana.

### Ahoana Ny Fomba Hidirana Amin'ny Kapila Mafy Aorian'ny Fidirana Amin'ny Famonjena &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Azonao atao ny mijery ny snapshot, ohatra

```
snapper -c etc list
```

Jereo ny fanovana rakitra snapshot

```
snapper -c etc status 5..6
```

Jereo ny lahatsoratra tsy mitovy

```
snapper -c etc diff 3..5
```

Avereno ny sary: ​​Ohatra, esory ny fanovana rehetra aorian'ny sary 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Alefaso Ny Fikirizana Log

Ny fampandehanana ny fikirizana log ao anatin'ny rafitra mpamonjy voina dia mitaky anao hamorona ny lahatahiry mifanaraka amin'izany ary hanao dingana fanampiny, satria mety tsy manana serivisy systemd mandeha ianao. Ireto misy dingana azonao andramana:

Voalohany chroot, avy eo

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Avereno ao amin'ny rafitra Ubuntu anao: Aorian'ny fanaovana ireo fanovana etsy ambony dia mila averinao amin'ny fomba mahazatra ny masininao ary ao amin'ny rafitra Ubuntu anao fa tsy ny rafitra famonjena.

Amin'izany fomba izany, ny systemd-journald dia hanomboka amin'ny fanovana vaovao ary manomboka mitahiry logs tsy tapaka amin'ny kapila mafy.

Ataovy ao an-tsaina fa ireo hetsika etsy ambony dia atao amin'ny rafi-pamonjena, ka ireo fiovana ireo dia tsy hisy fiantraikany raha tsy rehefa averina ny rafitra ary tsy ao anatin'ny fomba famonjena intsony.

Midika izany fa tsy ho hitanao avy hatrany izay fiovana amin'ny diary efa misy ho lasa maharitra, fa ny diary rehetra avoaka aorian'izany dia hitohy.

Amin'izany fomba izany dia azonao atao ny mijery ny diarin'ny serivisy ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Fanamarihana Momba Ny Aretina Sarotra Sy Sarotra

### Mamaha Ny Olana Hafahafa: Tsy Afaka ssh Ny Mpizara

Nampiasa hetsika github aho mba hanaovana famoriam-bola mandeha ho azy sy script deployment taloha, saingy hitako fa tsy afaka ssh ny serivisy deployment.

Olana fahazoan-dàlana ny fidirana ao amin'ny rafitra mpamonjy voina sy mijery ny logs:

`Missing privilege separation directory: /run/sshd`

Azonao atao ny mamorona ity lahatahiry ity miaraka amin'ity baiko manaraka ity

```
chown root:root /
systemd-tmpfiles --create
```

Taorian'ny fanadihadihana imbetsaka dia satria github action mpampiasa nampiakatra tar dia `1001` `uid`

tar Tsy maintsy atao tsy misy masontsivana ny famotsorana azy `--no-same-owner` dia hofoanana ho an'ny `1001` `uid`

Vokatr'izany, ny rsync dia hanova ny vondron'ny mpampiasa ny lahatahiry fototra, ary avy eo dia tsy afaka miditra amin'ny ssh ianao rehefa manomboka.

Ovao ny script decompression toy izao manaraka izao:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

