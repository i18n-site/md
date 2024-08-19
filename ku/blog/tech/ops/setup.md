# Pêşkêşkerê Dest Pê Bikin (Partition BTRFS Bikar Bînin, Wêneya Plankirî Ya Snapper Bikar Bînin)

## Server Kirîna contabo

contabo li Almanyayê xwedan dîrokek dirêj (zêdeyî 20 sal) û gelek bikarhêneran (zêdetirî 200,000) peydakiroxek VPS-a erzan e li Almanyayê, ji ber vê yekê ne hewce ye ku meriv ji revê xeman bike.

VPS kirînê [contabo.com](//contabo.com) ji bîr mekin ku bihayê Euro hilbijêrin, ku erzantir e.

![](https://i-01.eu.org/1718285782.avif)

Ji bo contabo heqê sazkirinê yek carî heye.
Lêbelê, her meh çend roj hene ku heqê sazkirinê belaş e Tenê qeyd bikin û bala xwe bidin e-nameyên danasînê.

Ji bilî heqê qada belaş a li Ewropayê, herêmên din jî astên cihêreng ên zêdebûna bihayê hene.

Min serverek Ewropî hilbijart, piştî karanîna cloudflare, di navbera serveran de pir cûdahî tune.

Veavakirina paşîn bi vî rengî ye, 16 GB bîra, 6CPU, 200 GB NVMe, mehê 9,50 euro, bi qasî 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ev biha hema hema yek-dehê bihayê Alibaba Cloud û Amazon e** .

![](https://i-01.eu.org/1718356956.avif)

Min ji bo xebitandina performans û parametreyan bikar [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Nîşan dide Model `AMD EPYC 9224 24-Core Processor` , xala performansa yek-core 1285 CPU
, xala pir-core 4277 Encamên bêtir bibînin [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Min sê server di yek carî de kirrîn û di heman demê de ew çalak kirin.

Pêşkêşkerên wê carinan diqewimin, bi hebûna bilind ve gihîştina malperê misoger dike.

Bikarhênerên nû dema kirînê hewce ne ku kartên nasnameya xwe ji bo pejirandina navê rast bişînin.

## Têketina Bê Şîfreyê Mîheng Bike

Piştî çend hûrdeman, server hemî çalak kirin.

Tişta yekem IP ku meriv `~/.ssh/config` ya makîneya herêmî biguherîne da ku navekî destnîşan bike, û dûv re `ssh-copy-id root@c2` bikar bîne da ku têketina bê şîfre mîheng bike.

![](https://i-01.eu.org/1718287198.avif)

Hûn dikarin vê [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) biguhezînin da ku veavakirina destpêkê zûtir temam bikin.

Piştî ku veavakirina bê şîfre qediya, hûn dikarin wê bi kar bînin [pdsh](https://github.com/chaos/pdsh) ku ev yek hêsan e.

Ya yekem ev e ku meriv bi destan ipv6 çalak bike û ceribandin

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Dûv re bi yek klîk pergalê bi ubuntu 24 nûve bikin û nermalava ku bi gelemperî tê bikar anîn saz bikin.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 tê wateya guherandina ziman bo Çînî û herêma demjimêrê bo Pekînê.

Nermalava ku ji hêla xwerû ve hatî saz kirin li gorî adetên min ên karanîna kesane tê mîheng kirin, wek [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , hwd. Ger hewce be, hûn dikarin wargeha [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) kopî bikin û li gorî hewcedariyê biguhezînin.

Vê gavê demek dirêj digire Piştî nîv saetê li bendê, nûvekirin û sazkirina nermalava bi gelemperî tête bikar anîn. Hûn dikarin vê bi fermana jêrîn piştrast bikin:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh ssh Lez Dike

Tora ji Ewrûpayê heya Chinaînê ne aram e. Ji bo bilezkirina `ssh` tê pêşniyar kirin [mosh](//mosh.org)

Di pelrêça herêmî `~/.bin` de `c0` nivîsan biafirînin (bi piranî li guhêrbara jîngehê `PATH` hatî zêdekirin) bi vî rengî:

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

Piştî afirandinê, destûrên îcrakar û nerm-girêdan `c1` û `c2` bidin.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Di pêşerojê de, hûn dikarin rasterast têkevin `c0` û `c1` da ku `mosh` girêdana rasterast a bilez bikar bînin û têkevin [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Forma Dabeşkirinê Ji ext4 Veguherînin btrfs

Ji bo hilanînê hêsan dikare dîmenên dîskê bigire [btrfs](https://wikipedia.org/wiki/Btrfs)

Pêşî têkevin pergala rizgarkirinê

![](https://i-01.eu.org/1718300448.avif)

Debian Rescue hilbijêrin

![](https://i-01.eu.org/1718300753.avif)

Li bendê bin ku server ji nû ve dest pê bike

Dê guhertinên şopa ssh hebin, `ssh-keygen -R ip` bikar bînin da ku wê paqij bikin

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

Heke hûn kamilperest in, hûn dikarin bi destan jî kompresyonek dîskê pêk bînin Ferman wiha ye:

```bash
btrfs filesystem defragment -r -czstd /
```

Wekî ku di jimareya jêrîn de tê xuyang kirin, hûn dikarin bibînin ku piştî berhevkirina destan a di pergala nû de, nêzîkê 100 MB bêtir hate berhev kirin.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Bi Snapperê Paşvekêşana Wêneya Btrfs Biafirînin

Ji bo hilanînê Btrfs hevkarê çêtirîn e [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)

Skrîpta destpêkê dê pelrêça `~/ubuntu` biafirîne, tenê emrê jêrîn bimeşîne:

```
~/ubuntu/snapper/init.sh
```

Hûn di naveroka senaryoyê de bibînin [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Ji bo dîtina bincildên ku wêne ji bo wan hatine danîn `snapper list-configs` bikar bînin.

![](https://i-01.eu.org/1718302689.avif)

`snapper -c mnt list` bikar bînin da ku wêneyek jêr-cildê bibînin

`/etc/snapper/configs/mnt` dikare mîhengên hilanînê yên taybetî yên vê binerdê bibîne

Zêdetir referans:

[Bi fonksiyona wêneya wêneyê Btrfs bi hêsanî bilîzin snapper](https://zhuanlan.zhihu.com/p/31082518)

## Wêneya Servera contabo

Fonksiyona wêneya serverê peyda contabo , lê ji bo kişandina dîmenên rojane min [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) nivîsand.

![](https://i-01.eu.org/1718304206.avif)

Ji bo vegerandina wêneyek serverê, pêşî li menuya rêveberiyê Crontol bikirtînin

![](https://i-01.eu.org/1718304275.avif)

Dûv re, bikirtînin Snapshots da ku vegerînin.

![](https://i-01.eu.org/1718304063.avif)

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

Mînakî, hûn dikarin wêneya wêneyê bibînin

```
snapper -c etc list
```

Guhertinên pelê wêneyê bibînin

```
snapper -c etc status 5..6
```

Nivîsara cûda ya taybetî bibînin

```
snapper -c etc diff 3..5
```

Vegerandina wêneya wêneyê: Mînakî, piştî wêneya 5-ê hemî guhertinan betal bikin

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Berdewamiya Têketinê Çalak Bike

Çalakkirina domdariya têketinê di bin pergalek rizgarkirinê de hewce dike ku hûn bi destan pelrêça têkildar biafirînin û hin gavên din jî pêk bînin, ji ber ku dibe ku we karûbarek pergala xebitandinê tune be. Li vir gavên ku hûn dikarin biceribînin hene:

Pêşî chroot, paşê

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Di pergala xweya Ubuntu de ji nû ve saz bikin: Piştî ku hûn guheztinên jorîn pêk bînin, hûn hewce ne ku makîneya xwe bi gelemperî û li şûna pergala rizgarkirinê di pergala xweya Ubuntu de ji nû ve bidin destpêkirin.

Bi vî rengî, systemd-journald dê bi veavakirina nû dest pê bike û dest bi tomarkirina têketinên bi domdarî li ser dîska hişk bike.

Bînin bîra xwe ku operasyonên jorîn li ser pergalek rizgarkirinê têne kirin, ji ber vê yekê ew guhertin dê bandor nebin heya ku pergal ji nû ve neyê destpêkirin û êdî ne di moda rizgarkirinê de be.

Ev tê vê wateyê ku hûn ê tavilê ti guhartinên têketinên heyî yên ku domdar dibin nebînin, lê hemî têketinên ku piştî wê hatine çêkirin dê berdewam bin.

Bi vî rengî hûn dikarin têketinên karûbarê ssh bibînin

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Têbînî Li Ser Nexweşiyên Dijwar Û Tevlihev

### Pirsgirêka Xerîb Çareser Bikin: Server Nikare ssh

Min çalakiya github bikar anî da ku berê xweberek berhevok û birêkûpêk çêbike, lê dît ku karûbarê bicîhkirinê nikare ssh be.

Ketina pergala rizgarkirinê û lênihêrîna têketin pirsgirêkek destûr e:

`Missing privilege separation directory: /run/sshd`

Hûn dikarin bi fermana jêrîn vê pelrêçê biafirînin

```
chown root:root /
systemd-tmpfiles --create
```

Piştî lêkolînên dubare, ji ber github action Bikarhêner `uid` ya tar `1001` e

Ger parametre `--no-same-owner` tune be, wê ji bo `1001` bikarhêneran bibe `uid` tar

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