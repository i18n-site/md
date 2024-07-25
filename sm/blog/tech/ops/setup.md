# Fa'amataina Le 'au'aunaga (Fa'aoga BTRFS Vaeluaga, Snapper Scheduled Snapshot)

## contabo Faatau Server

contabo o se taugofie VPS e tuʻuina atu i Siamani ma se talafaasolopito umi (sili atu i le 20 tausaga) ma le tele o tagata faʻaoga (sili atu i le 200,000), o lea e leai se mea e popole ai e uiga i le sola ese.

VPS faʻatau [contabo.com](//contabo.com) manatua e filifili Euro tau, lea e taugofie.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

E tasi le totogi fa'apipi'i mo contabo.
Ae ui i lea, o loʻo i ai ni nai aso i masina uma e leai se totogi o le faʻapipiʻi Naʻo le resitala ma faʻalogo i imeli faʻalauiloa.

I le faaopoopo atu i le totogi fua o le eria i Europa, o isi itulagi e eseese tulaga o siitaga tau.

Na ou filifilia se 'auʻaunaga Europa Ae ui i lea, pe a uma ona faʻaogaina cloudflare, e leai se eseesega tele i le va o sapalai.

O le faʻatulagaga mulimuli e faʻapea, 16GB manatua, 6CPU, 200 GB NVMe, 9.50 euros i le masina, e tutusa ma le 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**O lenei tau e toetoe lava tasi vaesefulu o le tau o Alibaba Cloud ma Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Na ou faʻaaogaina [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

`AMD EPYC 9224 24-Core Processor` CPU 1285
, sikoa tele-core 4277 . Va'ai nisi fa'ai'uga [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Na ou faʻatauina ni 'auʻaunaga se tolu i le taimi e tasi ma faʻagaoioia i latou i le taimi e tasi e faʻamautinoa ai o loʻo i totonu o le potu komipiuta ia saʻo, faʻafaigofie ona fausia avanoa maualuga i le lumanaʻi.

O ana 'au'aunaga e tautau i luga i nisi taimi, fa'amautinoa le fa'aogaina o le upega tafa'ilagi e ala ile maualuga avanoa.

O tagata fou e mana'omia le tu'uina atu o latou ID card mo le fa'amaonia o igoa moni pe a fa'atau.

## Fa'atulaga Le Saini E Leai Se Fa'aupuga

Ina ua mavae ni nai minute, sa fa'agaoioia uma 'au'aunaga.

O le mea muamua o le fa'asa'o ole masini `~/.ssh/config` Seti se igoa mo IP ona fa'aoga lea o `ssh-copy-id root@c2` e fa'aoga ai le saini e leai se fa'aupuga.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

E mafai ona e suia le [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) lenei e faʻamaeʻa vave ai le faʻatulagaina o le amataga.

A maeʻa le faʻapipiʻi e leai se faʻaupuga, e mafai ona e faʻaogaina [pdsh](https://github.com/chaos/pdsh) mafai ona faʻaogaina i vaega, lea e faigofie.

O le mea muamua o le fa'aagaaga ma le lima ipv6 ma su'ega

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Ona faʻaleleia lea o le polokalama i le ubuntu 24 ma le kiliki e tasi ma faʻapipiʻi polokalama faʻaoga masani.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 o lona uiga o le suia o le gagana i le gagana Saina ma le sone taimi i Beijing.

O le polokalama faʻapipiʻi e le mafai ona faʻatulagaina e tusa ai ma aʻu masani faʻaoga, e pei o [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , ma isi. Afai e manaʻomia, e mafai ona e kopiina le [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) faleteuoloa ma suia pe a manaʻomia.

O lenei laasaga e umi se taimi pe a uma ona faʻatali mo le afa itula, o le a manuia le faʻaleleia ma le faʻapipiʻiina o polokalama faʻaoga masani. E mafai ona e faʻamaonia i le poloaiga lenei:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Faatelevave ssh

Le fesoʻotaʻiga mai Europa i Saina e le mautu E `ssh` e faʻaoga [mosh](//mosh.org)

`PATH` se `c0` script i le masini faʻapitonuʻu `~/.bin`

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

A mae'a ona faia, fa'atagaina fa'atagaga fa'atino ma so'otaga vaivai `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

I le lumanaʻi, e mafai ona e ulufale saʻo `c0` , `c1` ma e mafai ona e faʻaogaina le fesoʻotaʻiga tuusaʻo `mosh` maualuga ma ulufale [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Su'e Le Fa'asologa O Vase Mai Le ext4 I Le btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) E mafai ona pu'e ata pu'upu'u mo le fa'asao faigofie.

Ulufale muamua i le faiga laveai

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Filifili Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Faatali mo le server e toe amata

O suiga o tamatamailima o le a tupu pe a ssh , fa'aoga `ssh-keygen -R ip`

Ona tamomoe lea o le tusitusiga lea e faaliliu ai le vaeluaga

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

O le tusitusiga o le a otometi lava ona toe amata le faiga pe a uma le liua.

### Va'ai btrfs Fa'amatega Fua Faatatau

O le a otometi lava ona compress e ala i le faaletonu O le poloaiga e siaki le compression ratio e faapea:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Fa'amau Lima

Afai o oe o se tagata atoatoa, e mafai foʻi ona e faʻatinoina le faʻapipiʻiina o le tisiki atoa ma le lima O le poloaiga e faʻapea

```bash
btrfs filesystem defragment -r -czstd /
```

E pei ona faʻaalia i le ata o loʻo i lalo, e mafai ona e vaʻaia ina ua maeʻa le faʻamalosi tusi i le faiga fou, toetoe lava 100MB sili atu na faʻapipiʻiina.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Fausia Se Fa'amaumauga Btrfs Snapshot Ma Le snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) o le paaga sili ona lelei mo Btrfs backup.

O le uluaʻi tusitusiga o le a fatuina le `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

Va'ai oe i totonu o le tusitusiga [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Fa'aoga `snapper list-configs` e va'ai i vaega laiti o lo'o fa'atulaga ai ata.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Fa'aoga `snapper -c mnt list` e matamata ai se ata o se vaega laiti

`/etc/snapper/configs/mnt` E mafai ona e va'ai i fa'amaumauga fa'asao fa'apitoa o lenei vaega laiti

Tele fa'asinomaga:

[Fa'afaigofie ona ta'alo i le galuega fa'atusa a Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Feso'ota'iga Ata O Le Server

contabo Tuuina atu galuega fa'apipi'i a le 'au'aunaga, ae e le'o lagolagoina ata fa'atulagaina na ou tusia se [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) e pu'e ata i aso uma.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Ina ia toe faʻafoʻi se ata o le server, kiliki muamua Crontol i le lisi o le pulega

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Ona, kiliki Snapshots e toe faʻaleleia.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Ae ui i lea, o le faʻamatalaga o lenei ata e telē tele A toe faʻaleleia, o faʻamatalaga fou faʻaopoopo o le a leiloa atoa, faʻamolemole faʻaoga ma le faʻaeteete.

E masani ona sili atu ona faigofie le faʻaogaina o ata o btrfs.

## Fa'amatalaga Faiga Laveai

Ulufale i le faiga laveai 22 A mae'a ona [tcping](https://github.com/paradiseduo/tcping) le taulaga, o le a le mafai ona e mauaina i le seti upu fa'apolopolo mo minute 2-3 .

```
tcping ip 22 -c 9999
```

E mafai ona mata'ituina le fa'aogaina o le uafu.

### Fa'afefea Ona Maua Le Kiliva Malo Pe a Uma Ona Ulufale I Le Laveai &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

E mafai ona e vaʻai i le ata, mo se faʻataʻitaʻiga

```
snapper -c etc list
```

Va'ai suiga faila faila

```
snapper -c etc status 5..6
```

Va'ai fa'amatalaga eseese

```
snapper -c etc diff 3..5
```

Toe fa'afo'i le ata: Mo se fa'ata'ita'iga, fa'ate'a uma suiga pe a uma le ata 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Fa'aagaoioi Ogalaau Tumau

O le fa'aagaoioi o le fa'atonuga o le log i lalo o se faiga lavea'i e mana'omia ai oe e fai ma le lima le fa'atonuga fa'atatau ma fai nisi la'asaga fa'aopoopo, ona e ono leai sau auaunaga systemd. O laasaga nei e mafai ona e taumafai:

Muamua chroot, ona

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Toe faʻafou i totonu o lau polokalama Ubuntu: A maeʻa ona fai suiga o loʻo i luga, e tatau ona e toe faʻafou lau masini masani ma i totonu o lau polokalama Ubuntu nai lo le faiga laveai.

I lenei auala, systemd-journald o le a amata i le faatulagaga fou ma amata le teuina o ogalaau i luga o le hard disk.

Ia manatua o gaioiga o loʻo taʻua i luga o loʻo faia i luga o se faiga laveai, o lea o na suiga o le a naʻo le faʻaaogaina pe a toe faʻafouina le faiga ae le toe i ai i le auala laveai.

O lona uiga o le a e le vave va'aia so'o se suiga i ogalaau o lo'o i ai nei o lo'o tumau pea, ae o ogalaau uma e gaosia pe a mae'a o le a fa'aauau pea.

O le auala lea e mafai ai ona e vaʻai i ogalaau o le auaunaga ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Fa'amatalaga I Fa'ama'i Faigata Ma Lavelave

### Foia Le Faʻafitauli Uiga Ese: E Le Mafai E Le 'auʻaunaga Ona ssh

Na ou faʻaogaina le github action e fai ai se faʻapipiʻi faʻapipiʻi ma le faʻapipiʻiina o tusitusiga muamua, ae na iloa e le mafai ona ssh le auaunaga faʻapipiʻi.

O le ulufale atu i le faiga laveai ma tilotilo i ogalaau o se faʻatagaga mataupu:

`Missing privilege separation directory: /run/sshd`

E mafai ona e fatuina lenei lisi ma le poloaiga lenei

```
chown root:root /
systemd-tmpfiles --create
```

A mae'a su'esu'ega faifaipea, e mafua ona github action le tagata na fa'auluina tar o le `1001` `uid`

E tatau ona faia le tatalaina e aunoa ma ni tapula'a tar `--no-same-owner` o le a fa'apalapala i le `uid` mo `1001` tagata fa'aoga

O se taunuuga, o le a suia e rsync le vaega faʻaoga o le root directory, ona e le mafai ai lea ona e ulufale i totonu i le ssh pe a uma ona toe amata.

Suia le fa'amaufa'ailoga fa'apea e fa'apea:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

