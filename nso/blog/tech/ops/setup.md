# Initialize Seva (Sebelisa BTRFS Karohano, Snapper Kemiso Snapshot)

## contabo Reka Seva

contabo ke mofani wa VPS e theko e tlaase Jeremane e nang le histori e telele (lilemo tse fetang 20) le basebedisi ba bangata (ba fetang 200,000), kahoo ha ho hlokahale hore o tshwenyege ka ho tšhaba.

VPS o reka [contabo.com](//contabo.com) gopola go kgetha theko ya Euro, yeo e lego theko ya fase.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Go na le tefo ya go hloma ya nako e tee ya contabo.
Le ge go le bjalo, go na le matšatši a mmalwa kgwedi ye nngwe le ye nngwe moo tefo ya go hloma e lego ya mahala E no ingwadiša gomme o ele hloko di-imeile tša papatšo.

Go tlaleletša go tefo ya lefelo la mahala kua Yuropa, dilete tše dingwe di na le maemo a fapanego a go hlatloga ga ditheko.

Ke ile ka kgetha seva ya Yuropa Le ge go le bjalo, ka morago ga go diriša cloudflare, ga go na phapano e kgolo magareng ga di-server.

Peakanyo ya mafelelo ke ka tsela ye e latelago, memori ya 16GB, 6CPU, 200 GB NVMe, di-euro tše 9.50 ka kgwedi, e lekanago le 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Theko ye e nyakile e le karolo ya lesome ya theko ya Alibaba Cloud le Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ke ile ka sebelisa [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Pontšo Model CPU `AMD EPYC 9224 24-Core Processor` maemo a tshebetso ya motheo e le 'ngoe 1285
, maemo a mantši a motheo 4277 Bona dipoelo tše dingwe [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ke rekile di-server tše tharo ka nako e tee gomme ka di tsenya tirišong ka nako e tee Se se kgonthišetša gore di-server di ka phapošing e tee ya khomphutha, e lego seo se dirago gore go be bonolo go aga go hwetšagala mo go phagamego nakong e tlago.

Di-server tša yona ka dinako tše dingwe di kgaola mogala, di kgonthišetša phihlelelo ya wepesaete ka go hwetšagala mo go phagamego.

Badiriši ba bafsa ba swanetše go romela dikarata tša bona tša boitsebišo bakeng sa netefatšo ya leina la kgonthe ge ba reka.

## Beakanya Go Tsena Ka Ntle Le Phasewete

Ka morago ga metsotso e sego kae, di-server ka moka di ile tša šoma.

Selo sa pele ke go rulaganya motšhene wa selegae wa `~/.ssh/config` Beakanya leina le lengwe la IP gomme ka morago o šomiše `ssh-copy-id root@c2` go beakanya go tsena ka ntle le phasewete.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

O ka fetola [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) se go phetha peakanyo ya go thoma ka lebelo.

Ka morago ga ge peakanyo ya go hloka phasewete e phethilwe, o ka [pdsh](https://github.com/chaos/pdsh) šomiša E ka šomišwa ka dihlopha, yeo e lego bonolo.

Ya pele ke go kgontšha ipv6 le go dira diteko ka seatla

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Ebe ntlafatsa tsamaiso ho ubuntu 24 ka ho tobetsa e le 'ngoe le kenya ka tloaelo sebediswa software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN = 1 e bolela go fetolela polelo go Setšhaena le lefelo la nako go Beijing.

Software yeo e hlomilwego ka go ikemela e beakantšwe go ya ka mekgwa ya ka ya tšhomišo ya motho ka noši, bjalo ka [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , bj.bj.Ge go nyakega, o ka kopiša lefelo la polokelo [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) gomme wa le fetoša ge go nyakega.

Mogato wo o tšea nako ye telele Ka morago ga go leta seripa sa iri, go kaonafatša le go tsenywa ga disoftware tšeo di šomišwago ka tlwaelo go tla atlega. O ka e tiišetša ka taelo ye e latelago:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh E Akgofiša ssh

Neteweke go tloga Yuropa go ya China ga e tsepame go `ssh` šomiša [mosh](//mosh.org)

Hlama sengwalwa sa `c0` ka gare ga `~/.bin` ya motšhene wa selegae (kudukudu e okeditšwe go phetogo ya tikologo `PATH` ) ka tsela ye e latelago:

```bash
#!/ usr / bin / env bash

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Ka morago ga tlholo, fa ditumelelo tše di phethagatšwago le soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Nakong e tlago, o ka tsena ka go lebanya `c0` , `c1` gomme o ka diriša `mosh` kgokagano ya thwii ya lebelo le legolo gomme wa tsenya [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Fetola Sebopego Sa Karoganyo Go Tšwa Go ext4 Go Ya Go btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Ka nka tiske snapshots bakeng sa bekapo bonolo.

Pele kena tshepedišong ya phološo

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Kgetha Phološo ya Debian

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Ema gore seva e thome gape

Diphetogo tša kgatišo `ssh-keygen -R ip` menwana di tla direga ge ssh

Ka morago ga moo matha sengwalwa se se latelago go fetolela karoganyo

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Sengwalwa se tla thoma tshepedišo gape ka go iketla ka morago ga ge phetošo e atlegile.

### View btrfs Karo-Karolelano Ya Kgatelelo

E tla gatelela ka go iketla ka go ikemela.Taelo ya go hlahloba tekanyo ya kgatelelo ke ye e latelago:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kgatelelo Ya Seatla

Ge e le gore o motho yo a ratago phethego, o ka dira gape le kgatelelo ya disk ka botlalo Taelo e ka tsela ye e latelago

```bash
btrfs filesystem defragment -r -czstd /
```

Bjalo ka ge go bontšhitšwe seswantšhong se se lego ka mo tlase, o ka bona gore ka morago ga go gatelela ka seatla tshepedišong e mpsha, mo e nyakilego go ba 100MB e oketšegilego e ile ya gatelelwa.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Theha Bekapo Ya Setshwantsho Sa Btrfs Ka snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ke molekane yo mokaone wa Btrfs backup.

Sengwalwa sa go thoma se tla hlola `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

Re tla bonana ka gare ga diteng tša sengwalwa [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Šomiša `snapper list-configs` go lebelela dibolumo tše nnyane tšeo diswantšho tša go tšewa ka pela di beakantšwego.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Šomiša `snapper -c mnt list` go lebelela seswantšho sa bolumo ya ka fasana

`/etc/snapper/configs/mnt` O ka lebelela dipeakanyo tše di itšego tša bekapo ya bolumo ye ya ka fasana

Ditšhupetšo tše dingwe:

[Bapala gabonolo ka mošomo wa seswantšho sa Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Seva Setshwantsho Sa Snapshot

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Go bušetša seswantšho sa seva, thoma ka go klika Crontol ka go thepo ya taolo

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Ka morago ga moo, klika Ditshwantšho go bušetša.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Le ge go le bjalo, granularity ya seswantšho se ke ye kgolo kudu Ge e šetše e tsošološitšwe, datha ye e sa tšwago go okeletšwa e tla lahlega ka botlalo, ka fao hle e šomiše ka kelohloko.

Gantši go bonolo kudu go šomiša diswantšho tša btrfs.

## Dintlha Tša Tshepedišo Ya Phološo

Kena tshepedišong ya phološo 22 morago ga ge boema-kepe bo [tcping](https://github.com/paradiseduo/tcping) fihlelelwa, o ka se kgone go bo fihlelela ka phasewete yeo e beilwego ka metsotso ya 2-3 Ema motsotswana gomme e tla loka.

```
tcping ip 22 -c 9999
```

Phihlelelo ya boemakepe e ka hlokomelwa.

### Tsela Ya Go Fihlelela Hard Drive Ka Morago Ga Go Tsena Phološo Snapshot &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

O ka lebelela seswantšho sa go tšewa ka lebelo, mohlala

```
snapper -c etc list
```

Lebelela diphetogo tša faele ya seswantšho

```
snapper -c etc status 5..6
```

Lebelela sengwalwa se se itšego sa diff

```
snapper -c etc diff 3..5
```

Bušetša seswantšho sa go tšewa ka lebelo: Go fa mohlala, bušetša morago diphetogo ka moka ka morago ga seswantšho sa 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Kgontšha Go Phegelela Ga Log

Go kgontšha go phegelela ga log ka fase ga tshepedišo ya phološo go nyaka gore o hlame ka seatla tšhupetšo ye e swanetšego gomme o dire magato a mangwe a tlaleletšo, ka gobane o ka no se be le tirelo ya systemd ye e šomago. Megato yeo o ka e lekago ke ye:

Pele chroot, ka nako yeo

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot ka gare ga tshepedišo ya gago ya Ubuntu: Ka morago ga go dira diphetogo tše di lego ka mo godimo, o swanetše go thoma gape motšhene wa gago ka tlwaelo le ka gare ga tshepedišo ya gago ya Ubuntu go e na le tshepedišo ya phološo.

Ka tsela ye, systemd-journald e tla thoma ka peakanyo ye mpsha gomme ya thoma go boloka dilog ka go phegelela go tiske ye thata.

Dula o gopola gore ditiro tše di lego ka mo godimo di dirwa tshepedišong ya phološo, ka gona diphetogo tšeo di tla thoma go šoma feela ge tshepedišo e thomile gape gomme e se sa le mokgweng wa phološo.

Se se ra gore o ka se bone ka pela diphetogo dife goba dife go dilog tše di lego gona di fetoga tše di phegelelago, eupša dilog ka moka tšeo di tšweleditšwego ka morago ga se di tla phegelela.

Ka tsela ye o ka lebelela dilog tša tirelo ya ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Dintlha Ka Malwetši a Thata Le a Raraganego

### Rarolla Bothata Bjo Bo Makatšago: Seva E Ka Se Kgone Go ssh

Ke šomišitše tiro ya github go dira sengwalwa sa go kgoboketša le go tsenya tirišong ka go itiriša pele, eupša ka hwetša gore tirelo ya go tsenya tirišong e be e ka se be ssh.

Go tsena tshepedišong ya phološo le go lebelela dikota ke taba ya tumelelo:

`Missing privilege separation directory: /run/sshd`

O ka hlama tšhupetšo ye ka taelo ye e latelago

```
chown root:root /
systemd-tmpfiles --create
```

Ka morago ga dinyakišišo tše di boeleditšwego, ke `1001` github action Modiriši yo a tsentšego tar `uid`

tar Go phutholla go swanetše go dirwa ntle le ditekanyetšo `--no-same-owner` e tla decompressed ka `uid` bakeng sa `1001` mosebedisi

Ka lebaka leo, rsync e tla fetola sehlopha sa mosebedisi sa tšhupetšo ya modu, gomme ka morago o ka se kgone go tsena go ssh ka morago ga go thoma gape.

Fetoša sengwalwa sa decompression ka tsela ye e latelago:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

