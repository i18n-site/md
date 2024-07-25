# Qalisa Iseva (Sebenzisa Ukwahlukanisa Kwe-BTRFS, Isifinyezo Esihleliwe Se-Snapper)

## Iseva Yokuthenga Ye-Contabo

I-contabo ingumhlinzeki we-VPS oshibhile eJalimane onomlando omude (iminyaka engaphezu kwe-20) nabasebenzisi abaningi (ngaphezu kuka-200,000), ngakho-ke asikho isidingo sokukhathazeka ngokubaleka.

VPS uthenga [contabo.com](//contabo.com) khumbula ukukhetha amanani e-Euro, ashibhile.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Kukhona imali yokufaka yesikhathi esisodwa ye-contabo.
Nokho, kunezinsuku ezimbalwa njalo ngenyanga lapho imali yokufaka imahhala Vele ubhalise futhi unake ama-imeyili okukhangisa.

Ngokungeziwe enkokhelweni yendawo yamahhala e-Europe, ezinye izifunda zinamazinga ahlukene okunyuka kwamanani.

Ngikhethe iseva yaseYurophu Noma kunjalo, ngemuva kokusebenzisa i-cloudflare, awukho umehluko omkhulu phakathi kwamaseva.

Ukucushwa kokugcina kungokulandelayo, inkumbulo engu-16GB, i-6CPU, i-200 GB NVMe, ama-euro angu-9.50 ngenyanga, okulingana no-74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Le ntengo icishe ibe ingxenye eyodwa kweshumi yenani le-Alibaba Cloud ne-Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ngisebenzise [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Bonisa CPU `AMD EPYC 9224 24-Core Processor` umphumela wokusebenza we-single-core 1285
, amaphuzu amaningi 4277 Bona eminye imiphumela [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ngithenge amaseva amathathu ngesikhathi esisodwa futhi ngawenza asebenze ngesikhathi esisodwa Lokhu kuqinisekisa ukuthi amaseva asendlini yekhompiyutha efanayo, okwenza kube lula ukwakha ukutholakala okuphezulu esikhathini esizayo.

Iziphakeli zayo ngezikhathi ezithile ziyavala, ziqinisekisa ukufinyeleleka kwewebhusayithi ngokutholakala okuphezulu.

Abasebenzisi abasha badinga ukuhambisa amakhadi abo omazisi ukuze kuqinisekiswe igama langempela lapho bethenga.

## Lungiselela Ukungena Ngemvume Okungenalo Iphasiwedi

Ngemva kwemizuzu embalwa, wonke amaseva acushiwe.

`ssh-copy-id root@c2` yokuqala ukuhlela umshini IP `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Ungakwazi ukulungisa lesi [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ukuze uqedele ukulungiselelwa kokuqalisa ngokushesha.

Ngemuva kokuthi ukucushwa kwamahhala kwephasiwedi kuqediwe, ungayisebenzisa [pdsh](https://github.com/chaos/pdsh)

Esokuqala ukunika amandla i-ipv6 kanye nokuhlola

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Bese uthuthukela ku-ubuntu 24 ngokuchofoza okukodwa bese ufaka isofthiwe esetshenziswa kakhulu.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

I-CN=1 isho ukushintsha ulimi lube isiShayina kanye nendawo yesikhathi iye e-Beijing.

Isofthiwe efakwe ngokuzenzakalelayo ilungiselelwe ngokwemikhuba yami yokusetshenziswa komuntu siqu, njengokuthi [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , njll. Uma kunesidingo, ungakopisha i-warehouse [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) futhi uyiguqule njengoba kudingeka.

Lesi sinyathelo sithatha isikhathi eside Ngemva kokulinda isigamu sehora, ukuthuthukiswa nokufakwa kwesofthiwe evame ukusetshenziswa kuzophumelela. Ungayiqinisekisa ngomyalo olandelayo:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## I-Mosh Isheshisa I-Ssh

Inethiwekhi esuka e-Europe iya e- `ssh` ayizinzile [mosh](//mosh.org)

Dala iskripthi esingu- `c0` emshinini `PATH` `~/.bin`

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

Ngemva kokudala, nikeza izimvume ezisebenzisekayo nesixhumanisi esithambile `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Ngokuzayo, ungangena ngqo `c0` `c1` futhi ungasebenzisa uxhumano oluqondile lwe- `mosh` high-speed bese ufaka [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Guqula Ifomethi Yokuhlukanisa Isuke Ku-Ext4 Iye Ku-Btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Ingathatha izifinyezo zediski ukuze wenze isipele kalula.

Okokuqala faka uhlelo lokuhlenga

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Khetha i-Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Linda iseva ukuthi iqale kabusha

Izinguquko zezigxivizo zeminwe zizokwenzeka uma ssh sebenzisa ukuze `ssh-keygen -R ip`

Bese ugijima iskripthi esilandelayo ukuze uguqule ukwahlukanisa

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Iskripthi sizoqala kabusha ngokuzenzakalelayo ngemuva kokuthi ukuguqulwa kuphumelele.

### Buka I-Btrfs Compression Ratio

Izocindezela ngokuzenzakalelayo Umyalo wokuhlola isilinganiso sokucindezela umi kanje:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Ukucindezelwa Mathupha

Uma ungumuntu othanda ukuphelela, ungenza futhi ukucindezelwa kwediski ngokugcwele Umyalo umi kanje

```bash
btrfs filesystem defragment -r -czstd /
```

Njengoba kuboniswe esithombeni esingezansi, ungabona ukuthi ngemva kokucindezelwa okwenziwa ngesandla ohlelweni olusha, cishe u-100MB ngaphezulu kwacindezelwa.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Dala Isipele Sesifinyezo Se-Btrfs Nge-Snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) unguzakwethu ongcono kakhulu wesipele Btrfs .

Iskripthi sokuqalisa sizodala `~/ubuntu` , vele usebenzise umyalo olandelayo:

```
~/ubuntu/snapper/init.sh
```

Sizokubona kokuqukethwe kombhalo [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Sebenzisa `snapper list-configs` ukuze ubuke amavolumu amancane asethelwe wona izifinyezo.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Sebenzisa `snapper -c mnt list` ukuze ubuke isifinyezo sevolumu engaphansi

`/etc/snapper/configs/mnt` Ungabuka izilungiselelo ezithile zokulondoloza zale volumu engaphansi

Ezinye izithenjwa:

[Dlala kalula ngomsebenzi wesifinyezo we- Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Isifinyezo Seseva Ye-Contabo

contabo Inikeza umsebenzi wesifinyezo seseva, kodwa ayisekeli izifinyezo ezihleliwe ngibhale [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) ukuze ngithathe izifinyezo zansuku zonke.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Ukuze ubuyisele isifinyezo seseva, qala uchofoze i-Crontol kumenyu yokuphatha

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Bese, chofoza Izifinyezo ukuze ubuyisele.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Nokho, imbudumbudu yalesi sifinyezo inkulu kakhulu uma isibuyiselwe, idatha esanda kufakwa izolahleka ngokuphelele, ngakho-ke sicela uyisebenzise ngokuqaphela.

Ngokuvamile kulula kakhulu ukusebenzisa izifinyezo ze-btrfs.

## Imininingwane Yesistimu Yokutakula

Faka isistimu 22 Ngemva kokuthi ichweba selifinyeleleke [tcping](https://github.com/paradiseduo/tcping) , ngeke ukwazi ukufinyelela kulo ngephasiwedi emisiwe amaminithi angu- 2-3 .

```
tcping ip 22 -c 9999
```

Ukufinyeleleka kwembobo kungagadwa.

### Ungafinyelela Kanjani I-Hard Drive Ngemuva Kokufaka &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Ungakwazi ukubuka isifinyezo, isibonelo

```
snapper -c etc list
```

Buka izinguquko zefayela lesifinyezo

```
snapper -c etc status 5..6
```

Buka umbhalo othize we-diff

```
snapper -c etc diff 3..5
```

Buyisela isifinyezo: Ngokwesibonelo, hlehlisa zonke izinguquko ngemva kwesifinyezo 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Nika Amandla Ukuphikelela Kwelogi

Ukunika amandla ukuphikelela kwelogi ngaphansi kwesistimu yokuhlenga kudinga ukuthi uzenzele ngokwakho uhla lwemibhalo oluhambisanayo futhi wenze ezinye izinyathelo ezengeziwe, ngoba ungase ungabi nayo isevisi ye-systemd esebenzayo. Nazi izinyathelo ongazizama:

Okokuqala chroot, ke

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Qalisa kabusha ohlelweni lwakho lwe-Ubuntu: Ngemva kokwenza izinguquko ezingenhla, udinga ukuqalisa kabusha umshini wakho ngokujwayelekile futhi ungene ohlelweni lwakho lwe-Ubuntu esikhundleni sohlelo lokuhlenga.

Ngale ndlela, i-systemd-journald izoqala ngokucushwa okusha futhi iqale ukugcina amalogi ngokuqhubekayo ku-hard disk.

Khumbula ukuthi imisebenzi engenhla yenziwa ohlelweni lokuhlenga, ngakho-ke lezo zinguquko zizoqala ukusebenza kuphela uma isistimu isiqaliswe kabusha futhi ingasekho kumodi yokuhlenga.

Lokhu kusho ukuthi ngeke ubone ngokushesha noma yiziphi izinguquko kulogi akhona ziqhubeka, kodwa wonke amalogi akhiqizwa ngemva kwalokhu azophikelela.

Ngale ndlela ungabuka izingodo zesevisi ye-ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Amanothi Ngezifo Ezinzima Neziyinkimbinkimbi

### Rarulula Inkinga Eyinqaba: Iseva Ayikwazi Ukwenza I-Ssh

Ngisebenzise isenzo se-github ukwenza isikripthi sokuhlanganiswa okuzenzakalelayo nokuthunyelwa ngaphambili, kodwa ngathola ukuthi insizakalo yokuthumela ayinakuba yi-ssh.

Ukungena ohlelweni lokuhlenga nokubheka izingodo kuyinkinga yemvume:

`Missing privilege separation directory: /run/sshd`

Ungakha lolu hlu lwemibhalo ngomyalo olandelayo

```
chown root:root /
systemd-tmpfiles --create
```

Ngemuva kophenyo oluphindaphindiwe, kungenxa github action Umsebenzisi olayishe tar `1001` `uid`

tar Ukuqaqa kufanele kwenziwe ngaphandle kwamapharamitha `--no-same-owner` kuzocindezelwa kube `uid` kumsebenzisi `1001`

Njengomphumela, i-rsync izoshintsha iqembu labasebenzisi bohlu lwezimpande, futhi ngeke ukwazi ukungena ku-ssh ngemva kokuqala kabusha.

Lungisa iskripthi se-decompression kanje:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

