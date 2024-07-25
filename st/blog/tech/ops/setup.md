# Qala Seva (Sebelisa Karohano Ea BTRFS, Snapshot E Hlophisitsoeng Ea Snapper)

## contabo Reka Seva

contabo ke mofani oa VPS ea theko e tlaase Jeremane ea nang le histori e telele (lilemo tse fetang 20) le basebelisi ba bangata (ho feta 200,000), kahoo ha ho hlokahale hore u tšoenyehe ka ho baleha.

VPS u reka [contabo.com](//contabo.com) hopola ho khetha litheko tsa Euro, tse theko e tlase.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Ho na le tefiso ea nako e le 'ngoe ea ho kenya contabo.
Leha ho le joalo, ho na le matsatsi a 'maloa khoeli le khoeli moo tefiso ea ho kenya e sa lefelloeng Feela ngodisa' me u ele hloko mangolo-tsoibila a papatso.

Ntle le tefiso ea sebaka sa mahala Europe, libaka tse ling li na le maemo a fapaneng a keketseho ea litheko.

Ke khethile seva sa Europe Leha ho le joalo, ka mor'a ho sebelisa cloudflare, ha ho na phapang e ngata pakeng tsa li-server.

Tlhophiso ea ho qetela ke e latelang, memori ea 16GB, 6CPU, 200 GB NVMe, 9.50 euro ka khoeli, e lekanang le 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Theko ena e batla e le karolo ea leshome ea theko ea Alibaba Cloud le Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ke ne ke [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) ho tsamaisa tšebetso le liparamente:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Pontšo CPU `AMD EPYC 9224 24-Core Processor` lintlha tsa ts'ebetso ea mantlha e le 'ngoe 1285
, lintlha tse ngata-ngata 4277 Sheba liphetho tse ling [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ke ile ka reka li-server tse tharo ka nako e le 'ngoe' me ka li kenya tšebetsong ka nako e le 'ngoe Sena se tiisa hore li-server li ka kamoreng e le' ngoe ea k'homphieutha, e leng ho nolofalletsang ho aha boteng bo phahameng nakong e tlang.

Li-server tsa eona ka linako tse ling li fanyeha, ho netefatsa hore sebaka sa marang-rang sea fumaneha ka ho fumaneha haholo.

Basebelisi ba bacha ba hloka ho fana ka likarete tsa bona tsa ID bakeng sa netefatso ea lebitso la nnete ha ba reka.

## Lokisa Ho Kena Ntle Le Password

Kamora metsotso e seng mekae, li-server kaofela li ile tsa kengoa tšebetsong.

Ntho IP `ssh-copy-id root@c2` ke ho hlophisa mochini oa lehae `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

U ka fetola [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) sena ho phethela tlhophiso ea ho qala kapele.

Kamora hore tlhophiso ea mahala ea password e phetheloe, u ka e sebelisa ka li [pdsh](https://github.com/chaos/pdsh) batches, e leng bonolo.

Ea pele ke ho nolofalletsa ipv6 le teko

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Ebe u ntlafatsa sistimi ho ubuntu 24 ka tobetsa e le 'ngoe ebe u kenya software e sebelisoang hangata.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 e bolela ho fetolela puo ho Sechaena le sebaka sa nako ho ea Beijing.

Software e kentsoeng ka ho sa feleng e lokiselitsoe ho latela mekhoa ea ka ea ho sebelisa, e kang [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , joalo-joalo Haeba ho hlokahala, u ka kopitsa [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ntlo ea polokelo le ho e fetola ha ho hlokahala.

Mohato ona o nka nako e telele Ka mor'a ho ema halofo ea hora, ho ntlafatsa le ho kenya software e sebelisoang hangata ho tla atleha. O ka e netefatsa ka taelo e latelang:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh O Potlakisa ssh

Marang-rang a tsoang Europe ho ea China ha `ssh` tsitsa [mosh](//mosh.org)

Theha `c0` script `~/.bin` oa lehae (haholo-holo o kenyellelitsoe ho feto-fetoha ha tikoloho `PATH` ) ka tsela e latelang:

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

Kamora ho bopa, fana ka tumello e sebetsang le sehokelo se bonolo `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Nakong e tlang, o ka kena ka kotloloho `c0` `c1` mme o ka sebelisa khokahano e tobileng `mosh` ka lebelo le phahameng mme o kenye [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Fetolela Sebopeho Sa Karohano Ho Tloha ext4 Ho Ea Ho btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) E ka nka linepe tsa disk bakeng sa bekapo e bonolo.

Pele kenya tsamaiso ea pholoso

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Khetha Pholoso ea Debian

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Emela hore seva se qale hape

Liphetoho tsa menoana li tla etsahala ha ssh sebelisa `ssh-keygen -R ip`

Ebe u tsamaisa mongolo o latelang ho fetolela karohano

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Mongolo o tla qala sistimi ka bo eona kamora hore phetoho e atlehe.

### Sheba btrfs Compression Ratio

E tla hatella ka ho iketsa Taelo ea ho lekola tekanyo ea compression e tjena:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Khatello Ea Matsoho

Haeba u motho ea ratang ho phethahala, u ka boela ua etsa compression e feletseng ea disk ka letsoho Taelo e tjena

```bash
btrfs filesystem defragment -r -czstd /
```

Joalokaha ho bontšitsoe setšoantšong se ka tlase, u ka bona hore ka mor'a ho hatella ka letsoho tsamaisong e ncha, hoo e ka bang 100MB ho feta e ile ea hatelloa.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Theha "Backup" Ea Btrfs Ka snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ke molekane ea hloahloa bakeng sa bekapo Btrfs .

Sengoloa sa ho qala se tla theha `~/ubuntu` , tsamaisa feela taelo e latelang:

```
~/ubuntu/snapper/init.sh
```

Ke tla u bona ka har'a sengoloa [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Sebelisa `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Sebelisa `snapper -c mnt list` ho bona senepe sa molumo o monyenyane

`/etc/snapper/configs/mnt` U ka sheba litlhophiso tse khethehileng tsa bekapo tsa bukana ena

Litšupiso tse ling:

[Bapala habonolo ka ts'ebetso ea snapshot ea Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Senepe Sa Seva Sa contabo

contabo E fana ka ts'ebetso ea senepe sa seva, empa ha e tšehetse linepe tse reriloeng, ke ngotse [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) ho nka linepe tsa letsatsi le letsatsi.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Ho khutlisa senepe sa seva, tobetsa pele Crontol ho menu ea taolo

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Ka nako eo, tobetsa Snapshots ho tsosolosa.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Leha ho le joalo, granularity ea snapshot ena e kholo haholo Ha e se e khutlisitsoe, data e sa tsoa eketsoa e tla lahleha ka botlalo, kahoo ka kopo e sebelise ka hloko.

Hangata ho bonolo ho sebelisa li-snapshots tsa btrfs.

## Lintlha Tsa Tsamaiso Ea Pholoso

Kenya sistimi ea pholoso Ka mor'a 22 koung e [tcping](https://github.com/paradiseduo/tcping) , u ke ke ua khona ho e fumana ka password e behiloeng bakeng sa 2-3 metsotso e seng mekae.

```
tcping ip 22 -c 9999
```

Tsela ea ho fihlella boema-kepe e ka hlahlojoa.

### Mokhoa Oa Ho Fihlella Hard Drive Ka Mor'a Ho Kena Pholoso &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

U ka sheba snapshot, mohlala

```
snapper -c etc list
```

Sheba liphetoho tsa faele ea snapshot

```
snapper -c etc status 5..6
```

Sheba mongolo o ikhethileng

```
snapper -c etc diff 3..5
```

Khutlisa senepe: Ka mohlala, etsolla liphetoho tsohle ka mor'a setšoantšo sa 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Lumella Ho Phehella Ha Log

Ho nolofalletsa ho phehella ha log tlas'a tsamaiso ea pholoso ho hloka hore u iketsetse bukana e lumellanang le ho etsa mehato e meng e eketsehileng, hobane mohlomong ha u na ts'ebeletso ea tsamaiso ea tsamaiso. Mehato eo u ka e lekang ke ena:

Pele chroot, joale

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Qala hape ho sistimi ea hau ea Ubuntu: Kamora ho etsa liphetoho tse kaholimo, o hloka ho qala mochini oa hau ka mokhoa o tloaelehileng le ho sistimi ea hau ea Ubuntu ho fapana le sistimi ea pholoso.

Ka tsela ena, systemd-journald e tla qala ka tlhophiso e ncha mme e qale ho boloka lits'oants'o tse tsitsitseng ho hard disk.

Hopola hore ts'ebetso e ka holimo e etsoa tsamaisong ea pholoso, kahoo liphetoho tseo li tla sebetsa hang ha tsamaiso e tsosolosoa 'me e se e se boemong ba pholoso.

Sena se bolela hore u ke ke ua bona hang-hang liphetoho leha e le life ho li-log tse seng li ntse li tsoela pele, empa lintlha tsohle tse hlahisoang ka mor'a sena li tla tsoela pele.

Ka tsela ena o ka sheba lits'ebeletso tsa ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Lintlha Ka Mafu a Thata Le a Rarahaneng

### Rarolla Bothata Bo Makatsang: Seva Ha E Khone Ho ssh

Ke sebelisitse ketso ea github ho etsa sengoloa sa boiketsetso le ho tsamaisa pele, empa ka fumana hore ts'ebeletso ea phepelo e ke ke ea ba ssh.

Ho kena tsamaisong ea pholoso le ho sheba lifate ke taba ea tumello:

`Missing privilege separation directory: /run/sshd`

U ka etsa bukana ena ka taelo e latelang

```
chown root:root /
systemd-tmpfiles --create
```

Kamora ho etsa lipatlisiso khafetsa, ke github action mosebelisi ea `1001` tar `uid`

tar Ho notlolla ho tlameha ho etsoa ntle le liparamente `--no-same-owner` e tla hatelloa hore e be `uid` bakeng sa mosebelisi oa `1001`

Ka lebaka leo, rsync e tla fetola sehlopha sa mosebedisi sa motso oa motso, 'me joale u ke ke ua khona ho kena ho ssh ka mor'a ho qala hape.

Fetola script ea decompression ka tsela e latelang:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

