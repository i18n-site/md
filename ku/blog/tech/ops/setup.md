# Pêşkêşkerê Dest Pê Bikin (Partition BTRFS Bikar Bînin, Wêneya Plankirî Ya Snapper Bikar Bînin)

## Server Kirîna contabo

contabo li Almanyayê xwedan dîrokek dirêj (zêdeyî 20 sal) û gelek bikarhêneran (zêdetirî 200,000) peydakiroxek VPS-a erzan e li Almanyayê, ji ber vê yekê ne hewce ye ku meriv ji revê xeman bike.

VPS kirînê [contabo.com](//contabo.com) ji bîr mekin ku bihayê Euro hilbijêrin, ku erzantir e.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Ji bo contabo heqê sazkirinê yek carî heye.
Lêbelê, her meh çend roj hene ku heqê sazkirinê belaş e Tenê qeyd bikin û bala xwe bidin e-nameyên danasînê.

Ji bilî heqê qada belaş li Ewropayê, li herêmên din astên cûda yên zêdebûna bihayê hene.

Min serverek Ewropî hilbijart, piştî karanîna cloudflare, di navbera serveran de pir cûdahî tune.

Veavakirina paşîn bi vî rengî ye, 16 GB bîra, 6CPU, 200 GB NVMe, mehê 9,50 euro, bi qasî 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Ev biha hema hema yek-dehê bihayê Alibaba Cloud û Amazon e** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Min ji bo xebitandina performans û parametreyan bikar [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Nîşan CPU `AMD EPYC 9224 24-Core Processor` Pîvana performansa yek-core 1285
, xala pir-core 4277 Encamên bêtir bibînin [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Min sê server di yek carî de kirrîn û di heman demê de ew çalak kirin.

Pêşkêşkerên wê carinan diqedin, bi hebûna bilind ve gihîştina malperê misoger dike.

Bikarhênerên nû dema kirînê hewce ne ku kartên nasnameya xwe ji bo pejirandina navê rast bişînin.

## Têketina Bê Şîfreyê Mîheng Bike

Piştî çend hûrdeman, server hemî çalak kirin.

Tişta yekem ev e ku hûn makîneya herêmî biguherînin `~/.ssh/config` IP û dûv re `ssh-copy-id root@c2` bikar bînin da ku têketina bê şîfre saz bikin.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Hûn dikarin vê [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) biguhezînin da ku veavakirina destpêkê zûtir temam bikin.

Piştî ku veavakirina bê şîfre qediya, hûn dikarin wê bi kar bînin [pdsh](https://github.com/chaos/pdsh) ku ev yek hêsan e.

Ya yekem ev e ku meriv bi destan ipv6 çalak bike û ceribandin

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Dûv re bi yek klîk pergalê bi ubuntu 24 nûve bikin û nermalava ku bi gelemperî tê bikar anîn saz bikin.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 tê wateya guherandina ziman bo Çînî û herêma demjimêrê bo Pekînê.

Nermalava ku ji hêla xwerû ve hatî saz kirin li gorî adetên min ên karanîna kesane tê mîheng kirin, wek [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , hwd. Ger hewce be, hûn dikarin wargeha [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) kopî bikin û li gorî hewcedariyê biguhezînin.

Vê gavê demek dirêj digire Piştî nîv saetê li bendê, nûvekirin û sazkirina nermalava bi gelemperî tête bikar anîn. Hûn dikarin wê bi fermana jêrîn piştrast bikin:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh ssh Lez Dike

Tora ji Ewrûpayê heya Chinaînê ne aram e. Tê pêşniyar `ssh` ku werin bikar anîn [mosh](//mosh.org)

Di `~/.bin` makîneya herêmî de skrîptek `c0` biafirînin (bi piranî li guhêrbara jîngehê `PATH` ) bi vî rengî:

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

Piştî afirandinê, destûrên îcrakar û nerm-girêdan bidin `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Di pêşerojê de, hûn dikarin rasterast têkevin `c0` `c1` û hûn dikarin pêwendiya rasterast `mosh` bi leza bilind bikar bînin û têkevin [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Forma Dabeşkirinê Ji ext4 Veguherînin btrfs

Ji bo hilanînê hêsan dikare dîmenên dîskê bigire [btrfs](https://wikipedia.org/wiki/Btrfs)

Pêşî têkevin pergala rizgarkirinê

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Debian Rescue hilbijêrin

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Li bendê bin ku server ji nû ve dest pê bike

Guhertinên tiliyê dê çêbibin dema `ssh-keygen -R ip` wê paqij bikin ssh

Dûv re skrîpta jêrîn bimeşînin da ku dabeşê biguherînin

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Piştî ku veguhertin serketî bû, skrîpt dê bixweber pergalê ji nû ve bide destpêkirin.

### Rêjeya Berhevkirina btrfs Bibînin

Ew ê bixweber ji hêla xwerû ve bişewitîne Fermana kontrolkirina rêjeya berhevkirinê wiha ye:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compression Manual

Heke hûn kamilperest in, hûn dikarin bi destan jî kompresyonek dîskê pêk bînin Ferman wiha ye

```bash
btrfs filesystem defragment -r -czstd /
```

Wekî ku di jimareya jêrîn de tê xuyang kirin, hûn dikarin bibînin ku piştî berhevkirina destan a di pergala nû de, nêzîkê 100 MB bêtir hate berhev kirin.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Bi Snapperê Paşvekêşana Wêneya Btrfs Biafirînin

Ji bo hilanînê Btrfs hevkarê çêtirîn e [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)

Skrîpta destpêkê dê pelrêça `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

Hûn di naveroka senaryoyê de bibînin [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Bikaranîn `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Bikaranîn `snapper -c mnt list`

`/etc/snapper/configs/mnt`

Zêdetir referans:

[Bi fonksiyona wêneya wêneyê Btrfs bi hêsanî bilîzin snapper](https://zhuanlan.zhihu.com/p/31082518)

## Wêneya Servera contabo

Fonksiyona wêneya serverê peyda contabo , lê ji bo kişandina dîmenên rojane min [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) nivîsand.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Ji bo vegerandina wêneyek serverê, pêşî li menuya rêveberiyê Crontol bikirtînin

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Dûv re, bikirtînin Snapshots da ku vegerînin.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Lêbelê, hûrguliya vê wêneyê pir mezin e Piştî ku were nûve kirin, daneyên nû hatine zêdekirin dê bi tevahî winda bibin, ji kerema xwe wê bi hişyariyê bikar bînin.

Bi gelemperî hêsantir e ku meriv wêneyên btrfs bikar bîne.

## Agahiyên Pergala Rizgarkirinê

Têkeve pergala rizgarkirinê 22 Piştî ku port [tcping](https://github.com/paradiseduo/tcping) gihîştî be, hûn ê nikaribin bi şîfreya destnîşankirî 2-3 deqeyan bigihîjin wê.

```
tcping ip 22 -c 9999
```

Gihîştina portê dikare were şopandin.

### Meriv Çawa Xwe Bigihîne Dîska Hişk Piştî Ku Hûn Têkevin Rizgarkirinê &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Ji bo nimûne, hûn dikarin wêneya wêneyê bibînin

```
snapper -c etc list
```

Guhertinên pelê wêneyê bibînin

```
snapper -c etc status 5..6
```

Metna cudahiya taybetî bibînin

```
snapper -c etc diff 3..5
```

Vegerandina wêneya wêneyê: Mînakî, hemî guhertinên piştî wêneya 5-ê betal bikin

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Berdewamiya Têketinê Çalak Bike

Çalakkirina berdewamiya têketinê di bin pergalek rizgarkirinê de ji we re hewce dike ku hûn bi destan pelrêça têkildar biafirînin û hin gavên din jî pêk bînin, ji ber ku dibe ku we karûbarek pergala xebitandinê tune be. Li vir gavên ku hûn dikarin biceribînin hene:

Pêşî chroot, paşê

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Di pergala xweya Ubuntu de ji nû ve dest pê bikin: Piştî ku hûn guheztinên jorîn pêk bînin, hûn hewce ne ku makîneya xwe bi gelemperî û li şûna pergala rizgarkirinê têkeve pergala xwe ya Ubuntu.

Bi vî rengî, systemd-journald dê bi veavakirina nû dest pê bike û dest bi tomarkirina têketinên bi domdarî li ser dîska hişk bike.

Bînin bîra xwe ku operasyonên li jor li ser pergalek rizgarkirinê têne kirin, ji ber vê yekê ew guheztin dê tenê gava ku pergal ji nû ve were destpêkirin û êdî di moda rizgarkirinê de nebe bandor bike.

Ev tê vê wateyê ku hûn ê tavilê nebînin ku tu guhertinên di têketinên heyî de domdar dibin, lê hemî têketinên ku piştî vê têne çêkirin dê berdewam bin.

Bi vî rengî hûn dikarin têketinên karûbarê ssh bibînin

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Têbînî Li Ser Nexweşiyên Dijwar Û Tevlihev

### Pirsgirêka Xerîb Çareser Bikin: Server Nikare ssh

Min çalakiya github bikar anî da ku berê xweberek berhevok û birêkûpêk çêbike, lê dît ku karûbarê bicîhkirinê nikare ssh bike.

Ketina pergala rizgarkirinê û lênihêrîna têketin pirsgirêkek destûr e:

`Missing privilege separation directory: /run/sshd`

Hûn dikarin bi fermana jêrîn vê pelrêçê biafirînin

```
chown root:root /
systemd-tmpfiles --create
```

Piştî lêkolînên dubare, ev e github action bikarhênerê ku tar barkirî `1001` `uid`

tar `--no-same-owner` `uid` `1001`

Wekî encamek, rsync dê koma bikarhênerê pelrêça root biguhezîne, û dûv re hûn ê nikaribin piştî ji nû ve destpêkirinê têkevin ssh.

Nivîsara dekompresyonê bi vî rengî biguhezînin:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

