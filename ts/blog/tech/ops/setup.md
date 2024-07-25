# Sungula Sevha (Tirhisa Xiphemu Xa BTRFS, Xifaniso Xa Xihatla Lexi Hleriweke Xa Snapper)

## contabo Sevha Yo Xava

contabo i muphakeri wa VPS wo chipa eJarimani loyi a nga na matimu yo leha (ku tlula 20 wa malembe) na vatirhisi vo tala (ku tlula 200,000), hikwalaho a ku na xilaveko xo vilela hi ku baleka.

VPS u xava [contabo.com](//contabo.com) tsundzuka ku hlawula Euro pricing, leyi chipa.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Kuna mali yo veka kan’we ya contabo.
Kambe ku na masiku ma nga ri mangani n’hweti na n’hweti laha mali yo nghenisa yi nga mahala Tsarisa ntsena u nyikela nyingiso eka ti-imeyili ta nsusumeto.

Ku engetela eka mali ya ndhawu ya mahala eYuropa, swifundzha swin’wana swi ni swiyimo swo hambana-hambana swa ku tlakuka ka minxavo.

Ndzi hlawurile sevha ya le Yuropa Anyway, endzhaku ko tirhisa cloudflare, a ku na ku hambana lokukulu exikarhi ka ti server.

Xivumbeko xo hetelela hi lexi landzelaka, 16GB ya memori, 6CPU, 200 GB NVMe, 9.50 wa ti-euro hi n’hweti, leswi ringanaka na 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Ntsengo lowu wu lava ku va n’we-xa-khume xa nxavo wa Alibaba Cloud na Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ndzi tirhise [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) ku fambisa matirhelo na tiparameter:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Xikombiso CPU `AMD EPYC 9224 24-Core Processor` xikoro xa matirhelo ya xisekelo xin'we 1285
, xikoro xa swilo swo tala 4277 Vona mbuyelo wun'wana [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ndzi xavile tisevha tinharhu hi nkarhi wun’we kutani ndzi ti tirhisa hi nkarhi wun’we Leswi swi tiyisisa leswaku tisevha ti le ka kamara rin’we ra khompyuta, leswi endlaka leswaku swi olova ku aka vukona bya le henhla enkarhini lowu taka.

Tisevha ta yona minkarhi yin’wana ti veka riqingho, ti tiyisisa ku fikelela ka webusayiti hi ku tirhisa vukona bya le henhla.

Vatirhisi lavantshwa va fanele ku rhumela makhadi ya vona ya ID leswaku va tiyisisiwa hi vito ra xiviri loko va xava.

## Hlela Ku Nghena Loku Nga Riki Na Phaswedi

Endzhaku ka timinete ti nga ri tingani, tisevha hinkwato ti tirhisiwile.

Nchumu wo sungula `ssh-copy-id root@c2` IP hlela `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

U nga cinca [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) leri ku hetisa vukorhokeri byo sungula hi ku hatlisa.

Endzhaku ka loko ku lulamisiwa loku nga riki na phaswedi ku hetiwile, u nga ku tirhisa [pdsh](https://github.com/chaos/pdsh) nga tirhisiwa hi swiyenge, leswi olovaka.

Xo sungula i ku pfumelela ipv6 hi voko na ku kambela

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Kutani ndlandlamuxa sisiteme ku ya eka ubuntu 24 hi ku tikhoma kan’we ivi u nghenisa software leyi tirhisiwaka ngopfu.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 swi vula ku cinca ririmi ku ya eka Xichayina na ndhawu ya nkarhi ku ya eBeijing.

Software leyi nghenisiweke hi ku tiyimisela yi lulamisiwile hi ku ya hi mikhuva ya mina ya matirhiselo ya munhu hi xiyexe, yo tanihi [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , na swin’wana na swin’wana Loko swi laveka, u nga kopa vuhlayiselo bya [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ivi u byi cinca hilaha swi lavekaka hakona.

Goza leri ri teka nkarhi wo leha Endzhaku ko rindza hafu ya awara, ku ndlandlamuxiwa ni ku nghenisiwa ka software leyi tirhisiwaka ngopfu swi ta humelela. U nga swi tiyisisa hi xileriso lexi landzelaka:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Yi Hatlisisa ssh

Netiweke ku suka eYuropa ku ya eChina a yi tshamisekanga Ku bumabumeriwa ku yi `ssh` [mosh](//mosh.org)

Endla `c0` script eka muchini wa laha `~/.bin` (ngopfu-ngopfu yi engeteriwile eka environment variable `PATH` ) directory hi ndlela leyi landzelaka:

```bash
#!/usr/bin/env bash ya xirhendzevutani

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Endzhaku ko tumbuluxa, nyika mpfumelelo lowu tirhisiwaka na soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Enkarhini lowu taka, u nga nghena hi ku kongoma `c0` , `c1` naswona u nga tirhisa `mosh` vuhlanganisi byo kongoma bya rivilo lerikulu ivi u nghenisa [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Hundzuluxa Xivumbeko Xa Xiphemu Ku Suka Eka ext4 Ku Ya Eka btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) A nga teka swifaniso swa disk leswaku u olova ku endla backup.

Xo sungula nghena eka fambiselo ro ponisa

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Hlawula Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Yimela leswaku sevha yi sungula nakambe

Ku cinca ka swikombiso swa tintiho ku ta humelela loko ssh , tirhisa `ssh-keygen -R ip`

Kutani tirhisa script leyi landzelaka ku hundzuluxa xiphemu

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Xikripti xi ta sungula sisiteme nakambe hi ku tisungulela endzhaku ka loko ku hundzuriwa ku humelerile.

### Languta Mpimo Wa Ku Tshikileriwa Ka btrfs

Yi ta tshikilela hi ku tisungulela hi ku tiyimisela Xileriso xo kambela mpimo wa ku tshikileriwa hi lexi landzelaka:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Ku Tshikileriwa Hi Voko

Loko u ri munhu la lavaka ku hetiseka, u nga ha tlhela u endla ku tshikileriwa ka disk hi ku helela hi voko Xileriso xi le ka xiyimo lexi landzelaka

```bash
btrfs filesystem defragment -r -czstd /
```

Hilaha swi kombisiweke hakona eka xifaniso lexi nga laha hansi, u nga vona leswaku endzhaku ka ku tshikileriwa hi voko eka sisiteme leyintshwa, kwalomu ka 100MB yin’wana yi tshikileriwe.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Endla Vuhlayiselo Bya Xifaniso Xa Xihatla Xa Btrfs Hi snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs

Xitshuriwa xo sungula xi ta tumbuluxa `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

Hi ta vonana eka nhundzu ya tsalwa [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Tirhisa `snapper list-configs` ku languta tivholumo letitsongo leti swifaniso swa xihatla swi vekiweke eka tona.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Tirhisa `snapper -c mnt list` ku languta xifaniso xa xihatla xa subvolume

`/etc/snapper/configs/mnt` U nga languta swiletelo swo karhi swa vuhlayiselo bya vholumo leyitsongo

Swikombo swin’wana:

[Tlanga hi ku olova hi ntirho wa xifaniso xa xihatla wa Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Xifaniso Xa Xihatla

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Ku vuyisela xifaniso xa xihatla xa sevha, rhanga hi ku tikhoma Crontol eka menyu ya vulawuri

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Kutani, ti-click Snapshots ku vuyisela.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Kambe, granularity ya xifaniso lexi i yikulu ngopfu Loko se yi vuyiseriwile, data leyintshwa leyi engeteriweke yi ta lahleka hi ku helela, kutani hi kombela u yi tirhisa hi vukheta.

Hi ntolovelo swi olova swinene ku tirhisa swifaniso swa btrfs.

## Vuxokoxoko Bya Sisiteme Yo Ponisa

Nghena eka sisiteme 22 ponisa Endzhaku ka loko port yi [tcping](https://github.com/paradiseduo/tcping) fikeleriwile, a wu nge swi koti ku yi nghena hi password leyi vekiweke ku ringana 2-3 minutes.

```
tcping ip 22 -c 9999
```

Ku fikelela ka ribuwa ku nga vekiwa tihlo.

### Ndlela Yo Nghena Eka Hard Drive Endzhaku Ko Nghena Eka Rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

U nga languta xifaniso xa xihatla, hi xikombiso

```
snapper -c etc list
```

Languta ku cinca ka fayili ya xifaniso xa xihatla

```
snapper -c etc status 5..6
```

Languta tsalwa ro karhi ra diff

```
snapper -c etc diff 3..5
```

Vuyisela xifaniso xa xihatla: Xikombiso, tlherisela endzhaku ku cinca hinkwako endzhaku ka xifaniso xa xihatla xa 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Endla Leswaku Ku Phikelela Ka Log Ku Tirha

Ku pfumelela ku phikelela ka log ehansi ka sisiteme yo ponisa swi lava leswaku u tumbuluxa hi voko xikombo lexi fambelanaka na ku endla magoza man’wana yo engetela, hikuva u nga ha va u nga ri na vukorhokeri bya systemd lebyi tirhaka. Hi lawa magoza lawa u nga ma ringetaka:

Xo sungula chroot, kutani

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot eka sisiteme ya wena ya Ubuntu: Endzhaku ko endla ku cinca loku nga laha henhla, u fanele ku pfuxeta muchini wa wena hi ntolovelo na le ka sisiteme ya wena ya Ubuntu ematshan’wini ya sisiteme yo ponisa.

Hi ndlela leyi, systemd-journald yi ta sungula hi vukorhokeri lebyintshwa naswona yi ta sungula ku hlayisa tilog hi ku phikelela eka hard disk.

Tsundzuka leswaku mintirho leyi nga laha henhla yi endliwa eka sisiteme yo ponisa, hikwalaho ku cinca koloko ku ta tirha ntsena loko sisiteme yi pfuriwile nakambe naswona yi nga ha ri eka xiyimo xo ponisa.

Leswi swi vula leswaku a wu nge hatli u vona ku cinca kwihi na kwihi eka tilogi leti nga kona ku va loku phikelelaka, kambe tilog hinkwato leti endliweke endzhaku ka leswi ti ta phikelela.

Hi ndlela leyi u nga languta tilog ta vukorhokeri bya ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Tinhlamuselo Eka Mavabyi Yo Tika Na Lama Rharhanganeke

### Ntlhantlha Xiphiqo Xo Hlamarisa: Sevha a Yi Nge Swi Koti Ku ssh

Ndzi tirhise xiendlo xa github ku endla tsalwa ra nhlengeleto wa otomatiki na ku tirhisa khale, kambe ndzi kume leswaku vukorhokeri byo tirhisa a byi nga ta va ssh.

Ku nghena eka sisiteme yo ponisa na ku languta swihlahla i mhaka ya mpfumelelo:

`Missing privilege separation directory: /run/sshd`

U nga endla xikombo lexi hi xileriso lexi landzelaka

```
chown root:root /
systemd-tmpfiles --create
```

Endzhaku ka vulavisisi byo phindha-phindha, i mhaka `1001` github action Mutirhisi loyi a nga uploada tar `uid`

tar Ku pfula swi fanele ku endliwa handle ka ti parameters `--no-same-owner` swi ta decompressed eka `uid` for `1001` user

Hikwalaho ka sweswo, rsync yi ta cinca ntlawa wa vatirhisi wa xikombo xa timitsu, kutani a wu nge swi koti ku nghena eka ssh endzhaku ko sungula nakambe.

Cinca tsalwa ra decompression hi ndlela leyi landzelaka:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

