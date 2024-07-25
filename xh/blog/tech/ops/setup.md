# Qalisa Umncedisi (Sebenzisa Isahlulelo Se-BTRFS, I-Snapper Ecwangcisiweyo Ye-Snapshot)

## Umncedisi Wokuthenga We-Contabo

i-contabo ngumboneleli we-VPS ongabizi kakhulu eJamani kunye nembali ende (ngaphezulu kweminyaka eyi-20) kunye nabasebenzisi abaninzi (ngaphezu kwe-200,000), ngoko akukho mfuneko yokukhathazeka ngokubaleka.

VPS uthenga [contabo.com](//contabo.com) khumbula ukukhetha amaxabiso e-Euro, angabizi kakhulu.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Kukho umrhumo wexesha elinye lofakelo lwe-contabo.
Nangona kunjalo, kukho iintsuku ezimbalwa nyanga zonke apho umrhumo wofakelo usimahla Bhalisa kwaye ubeke ingqalelo kwii-imeyile zokuthengisa.

Ukongeza kwintlawulo yendawo yasimahla eYurophu, eminye imimandla inamanqanaba ahlukeneyo okunyuka kwamaxabiso.

Ndikhethe iseva yaseYurophu Nangona kunjalo, emva kokusebenzisa i-cloudflare, akukho mahluko kakhulu phakathi kweeseva.

Ukucwangciswa kokugqibela ngolu hlobo lulandelayo, imemori ye-16GB, i-6CPU, i-200 GB NVMe, i-9.50 euro ngenyanga, ilingana ne-74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Eli xabiso liphantse libe linye kwishumi lexabiso le-Alibaba Cloud kunye ne-Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

[Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) ukusebenza kunye neeparamitha:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Bonisa iModeli CPU inqaku 1285 elinye elingundoqo `AMD EPYC 9224 24-Core Processor`
, amanqaku amaninzi 4277 Bona ezinye iziphumo [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ndithenge iiseva ezintathu ngexesha elinye kwaye ndizenze zisebenze ngexesha elinye.

Iiseva zayo ngamanye amaxesha ziyaxhoma, ziqinisekisa ukufikeleleka kwewebhusayithi ngokufumaneka okuphezulu.

Abasebenzisi abatsha kufuneka bangenise amakhadi abo esazisi ukuze baqinisekise igama lokwenyani xa bethenga.

## Qwalasela Igama Lokungena Elingenalo Igama Lokugqitha

Emva kwemizuzu embalwa, zonke iiseva zenziwe zasebenza.

`ssh-copy-id root@c2` yokuqala kukuhlela umatshini IP `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Ungasitshintsha esi [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ukuze ugqibezele uqwalaselo lokuqalisa ngokukhawuleza.

Emva kokuba i-password-free configuration igqityiwe, ungayisebenzisa [pdsh](https://github.com/chaos/pdsh)

Eyokuqala kukwenza i-ipv6 ngesandla kunye novavanyo

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Emva koko uphucule inkqubo ku-ubuntu 24 ngonqakrazo olunye kwaye ufake isoftware esetyenziswa ngokuqhelekileyo.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 ithetha ukutshintshela ulwimi kwisiTshayina kunye nexesha lendawo ukuya eBeijing.

Isoftware efakwe ngokungagqibekanga iqwalaselwe ngokwemikhwa yam yokusetyenziswa, njenge [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) njl.

Eli nyathelo lithatha ixesha elide Emva kokulinda isiqingatha seyure, ukuphuculwa kunye nokufakwa kwesoftware esetyenziswa ngokuqhelekileyo kuya kuphumelela. Ungayiqinisekisa ngalo myalelo ulandelayo:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Isantya Phezulu ssh

Uthungelwano olusuka eYurophu ukuya eTshayina `ssh` [mosh](//mosh.org)

Yenza i `c0` script `~/.bin` wasekhaya (ingakumbi wongezwe kutshintsho lwemeko-bume `PATH` ) uvimba weefayili ngolu hlobo lulandelayo:

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

Emva kokudalwa, nika iimvume eziphunyeziweyo kunye nekhonkco elithambileyo `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Kwixesha elizayo, ungangena ngqo `c0` `c1` kwaye ungasebenzisa `mosh` olukwisantya esiphezulu kwaye ungenise [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Guqula Ifomati Yokwahlula Ukusuka Kwi-Ext4 Ukuya Kwi-Btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs)

Okokuqala faka inkqubo yokuhlangula

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Khetha iDebian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Lindela umncedisi ukuba aqalise kwakhona

Utshintsho lweminwe luyakwenzeka xa ssh sebenzisa `ssh-keygen -R ip`

Emva koko sebenzisa iskripthi esilandelayo ukuguqula isahlulelo

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Iscript siya kuqalisa kwakhona isistim ngokuzenzekelayo emva kokuba uguqulelo luphumelele.

### Jonga I-Btrfs Yoxinzelelo Lomlinganiselo

Iza kucinezela ngokuzenzekelayo Umyalelo wokujonga umlinganiselo woxinzelelo ngolu hlobo lulandelayo:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Uxinzelelo Lwezandla

Ukuba ungumntu othanda ukugqibelela, unokwenza ucinezelo lwedisk epheleleyo ngesandla

```bash
btrfs filesystem defragment -r -czstd /
```

Njengoko kubonisiwe kulo mfanekiso ungezantsi, unokubona ukuba emva koxinzelelo lwezandla kwinkqubo entsha, phantse i-100MB ngaphezulu yaxinzelelwa.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Yenza I-Btrfs Snapshot Backup Nge-Snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) lelona qabane lilungileyo le Btrfs backup.

Iskripthi sokuqalisa siya kudala i `~/ubuntu` directory, sebenzisa nje lo myalelo ulandelayo:

```
~/ubuntu/snapper/init.sh
```

Ndikubona kumxholo wescript [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Sebenzisa `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Sebenzisa `snapper -c mnt list` ukujonga umfanekiso omfutshane wesandi

`/etc/snapper/configs/mnt` ukujonga imimiselo ethile yogcino lwalo mqulu osezantsi

Ezinye izingqinisiso:

[Dlala ngokulula ngomsebenzi we-snapshot we Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Umncedisi We-Contabo Okhawulezayo

contabo Ibonelela ngomsebenzi wesnapshot yeseva, kodwa ayixhasi [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) ezicwangcisiweyo.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Ukubuyisela i-snapshot yeseva, cofa kuqala i-Crontol kwimenyu yolawulo

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Emva koko, cofa i-Snapshots ukubuyisela.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Nangona kunjalo, i-granularity yesi sithombe sifinyeziweyo inkulu kakhulu yakuba ibuyiselwe, idatha esanda kongezwa iya kulahleka ngokupheleleyo, ngoko ke nceda uyisebenzise ngononophelo.

Ngokuqhelekileyo kulula ngakumbi ukusebenzisa ii-btrfs snapshots.

## Iinkcukacha Zenkqubo Yokuhlangula

Ngenisa inkqubo 22 Emva kokuba i-port [tcping](https://github.com/paradiseduo/tcping) , awuyi kukwazi ukufikelela kuyo kunye negama eligqithisiweyo lemizuzu ye- 2-3 .

```
tcping ip 22 -c 9999
```

Ukufikeleleka kwezibuko kunokujongwa.

### Ukufikelela Njani Kwi-Hard Drive Emva Kokungena &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Ungajonga umfanekiso okhawulezayo, umzekelo

```
snapper -c etc list
```

Jonga utshintsho lwefayile ekhawulezayo

```
snapper -c etc status 5..6
```

Jonga idiff text ethile

```
snapper -c etc diff 3..5
```

Buyisela i-snapshot: Umzekelo, hlehlisa lonke utshintsho emva kwe-snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Yenza Ilog Iqhubeke

Ukuvumela ukuqhubekeka kwelog phantsi kwenkqubo yokuhlangula kufuna ukuba udale ngesandla ulawulo oluhambelanayo kwaye wenze amanye amanyathelo ongezelelweyo, kuba awunakuba nenkonzo yenkqubo esebenzayo. Nanga amanyathelo onokuwazama:

Okokuqala chroot, emva koko

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Qalisa kwakhona kwisixokelelwano sakho se-Ubuntu: Emva kokwenza olu tshintsho lungentla, kufuneka uqalise ngokutsha umatshini wakho ngokwesiqhelo nakwinkqubo yakho ye-Ubuntu endaweni yenkqubo yokuhlangula.

Ngale ndlela, i-systemd-journald iyakuqala ngoqwalaselo olutsha kwaye iqalise ukugcina iilog ngokuzingileyo kwihard disk.

Gcina ukhumbule ukuba le misebenzi ingentla iyenziwa kwinkqubo yokuhlangula, ngoko ke olo tshintsho luya kusebenza kuphela xa inkqubo iqaliswe ngokutsha kwaye ayisekho kwimodi yokuhlangula.

Oku kuthetha ukuba awuzukubona ngokukhawuleza naluphi na utshintsho kwiilog ezikhoyo ziqhubeka, kodwa zonke iilog ezenziwe emva koku ziya kuqhubeka.

Ngale ndlela unokujonga iilog zenkonzo ye-ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Amanqaku Ngezifo Ezinzima Nezinzima

### Sombulula Ingxaki Engaqhelekanga: Umncedisi Akakwazi ssh

Ndisebenzise isenzo se-github ukwenza ukuhlanganiswa okuzenzekelayo kunye nokuthunyelwa kweskripthi ngaphambili, kodwa ndafumanisa ukuba inkonzo yokuthunyelwa ayinakuba yi-ssh.

Ukungena kwinkqubo yokuhlangula kunye nokujonga iilog ngumba wemvume:

`Missing privilege separation directory: /run/sshd`

Unokwenza olu lawulo ngomyalelo olandelayo

```
chown root:root /
systemd-tmpfiles --create
```

Emva kophando oluphindaphindiweyo, kungenxa github action Umsebenzisi ofake tar `1001` Package `uid`

tar Ukungapakishi `1001` kwenziwe ngaphandle `uid` `--no-same-owner`

Ngenxa yoko, i-rsync izakutshintsha iqela lomsebenzisi lolawulo lweengcambu, kwaye emva koko awuyi kukwazi ukungena kwi-ssh emva kokuphinda uqale.

Guqula iskripthi sokudambisa ngolu hlobo lulandelayo:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

