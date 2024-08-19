# Serweri Işe Giriziň (Btrfs Bölümini, Snapper Meýilleşdirilen Suraty Ulanyň)

## Kontabo Satyn Alyş Serweri

kontabo uzak taryhy (20 ýyldan gowrak) we köp ulanyjy (200,000-den gowrak) Germaniýada arzan VPS üpjün edijisidir, şonuň üçin gaçmak barada alada etmegiň zerurlygy ýok.

Satyn VPS [contabo.com](//contabo.com) arzan bahadan ýewro bahasyny saýlamagy ýatdan çykarmaň.

![](https://i-01.eu.org/1718285782.avif)

Kontabo üçin bir gezeklik gurnama tölegi bar.
Şeýle-de bolsa, her aý gurnama tölegi mugt bolan birnäçe gün bar, diňe mahabat e-poçtalaryna üns beriň.

Europeewropada erkin tölegden başga-da, beýleki sebitlerde bahalaryň ýokarlanmagy dürli derejededir.

Europeanewropa serwerini saýladym, her niçigem bolsa, bulutdan peýdalananymdan soň, serwerleriň arasynda kän bir tapawut ýok.

Iň soňky konfigurasiýa aşakdaky ýaly: 16 Gb ýat, 6CPU, 200 GB NVMe, aýda 9,50 ýewro, bu 74.43 RMB-a deňdir.

![](https://i-01.eu.org/1718286008.avif)

**Bu baha “Alibaba Cloud” we “Amazon” -yň bahasynyň ondan birine deňdir** .

![](https://i-01.eu.org/1718356956.avif)

Öndürijiligi we parametrleri işletmek üçin [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Model `AMD EPYC 9224 24-Core Processor` görkezýär, bir ýadroly öndürijilik baly 1285 CPU
, köp ýadroly 4277 [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8) giňişleýin netijelere serediň

Bir wagtyň özünde üç serwer satyn aldym we şol bir wagtyň özünde işjeňleşdirdim, bu serwerleriň bir kompýuter otagynda bolmagyny üpjün edýär we geljekde ýokary elýeterliligi gurmagy aňsatlaşdyrýar.

Onuň serwerleri wagtal-wagtal asylýar, ýokary elýeterlilik arkaly web sahypasynyň elýeterliligini üpjün edýär.

Täze ulanyjylar satyn alanyňyzda hakyky adyny tassyklamak üçin şahsyýetnamalaryny tabşyrmaly.

## Parolsyz Girişi Sazlaň

Birnäçe minutdan soň serwerleriň hemmesi işjeňleşdirildi.

IP bilen, lakam bellemek üçin ýerli maşynyň `~/.ssh/config` redaktirlemek, soňra bolsa parolsyz girişi düzmek üçin `ssh-copy-id root@c2` ulanmak.

![](https://i-01.eu.org/1718287198.avif)

Başlangyç konfigurasiýasyny has çalt tamamlamak üçin bu [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) üýtgedip bilersiňiz.

Parolsyz konfigurasiýa gutarandan soň, ulanyp bilersiňiz [pdsh](https://github.com/chaos/pdsh) Bu amatly toparlarda işledilip bilner!

Birinjisi, ipv6-ny el bilen işletmek we synagdan geçirmek

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Soňra ulgamy bir gezek basyp ubuntu 24-e täzeläň we köplenç ulanylýan programma üpjünçiligini guruň.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN = 1 dilini hytaý diline we wagt zolagyna Pekine geçmegi aňladýar.

Dymmaklyk bilen gurlan programma üpjünçiligi, şahsy ulanyş endiklerime görä düzüldi, meselem [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) we ş.m. Gerek bolsa, [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ammary göçürip, zerur bolanda üýtgedip bilersiňiz.

Bu ädim köp wagt alýar, ýarym sagat garaşanyňyzdan soň, köplenç ulanylýan programma üpjünçiligini täzelemek we gurmak üstünlikli bolar. Muny aşakdaky buýruk bilen tassyklap bilersiňiz:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## ssh Tizlenýär

Europeewropadan `ssh` çenli ulgam durnukly däl [mosh](//mosh.org)

Directoryerli katalogda `~/.bin` (esasanam daşky gurşaw `PATH` goşulýar) `c0` skript dörediň:

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

Döredilenden soň ýerine ýetirip boljak rugsatlary we `c1` we `c2` ýumşak baglanyşyk beriň.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Geljekde `mosh` ýokary tizlikli göni birikme ulanmak we girmek üçin göni `c0` we `c1` girizip bilersiňiz [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Bölüm Formatyny Ext4-Den Btrf-a Öwüriň

Aňsat ätiýaçlyk üçin disk suratlaryny alyp bilersiňiz [btrfs](https://wikipedia.org/wiki/Btrfs)

Ilki bilen halas ediş ulgamyna giriň

![](https://i-01.eu.org/1718300448.avif)

Debian halas edişini saýlaň

![](https://i-01.eu.org/1718300753.avif)

Serweriň täzeden açylmagyna garaşyň

Barmak yzynyň üýtgemegi bolar, arassalamak üçin `ssh-keygen -R ip` ulanyň ssh

Soňra bölümi öwürmek üçin aşakdaky skripti işlediň

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Öwürmek üstünlikli bolandan soň, skript ulgamy awtomatiki açar.

### btrfs Gysyş Gatnaşygyny Görüň

Düzgüne görä awtomatiki gysylar, gysyş gatnaşygy barlamak buýrugy:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### El Bilen Gysyş

Kämilleşdiriji bolsaňyz, doly diski gysyp bilersiňiz. Buýruk aşakdaky ýaly:

```bash
btrfs filesystem defragment -r -czstd /
```

Aşakdaky suratda görkezilişi ýaly, täze ulgamda el bilen gysylandan soň, takmynan 100MB gysyldy.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Snpper Bilen Btrfs Gysgaça Ätiýaçlyk Nusgasyny Dörediň

Btrfs ätiýaçlyk nusgasy üçin iň gowy hyzmatdaş [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)

Başlangyç skript `~/ubuntu` katalogy döreder, diňe aşakdaky buýrugy işlediň:

```
~/ubuntu/snapper/init.sh
```

Scriptazgy mazmunynda görüşeris [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Suratlar üçin düzülen kiçi göwrümleri görmek üçin `snapper list-configs` ulanyň.

![](https://i-01.eu.org/1718302689.avif)

Subvolumyň suratyny görmek üçin `snapper -c mnt list` ulanyň

`/etc/snapper/configs/mnt` bu kiçi göwrümiň aýratyn ätiýaçlyk sazlamalaryny görüp biler

Has köp salgylanma:

[Btrfs Surat suraty bilen aňsatlyk bilen oýnaň snapper](https://zhuanlan.zhihu.com/p/31082518)

## Kontabo Serweriniň Suraty

Serweriň surata düşüriş funksiýasyny üpjün contabo , ýöne gündelik suratlary almak üçin [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) ýazdym.

![](https://i-01.eu.org/1718304206.avif)

Serweriň suratyny dikeltmek üçin ilki dolandyryş menýusynda “Crontol” -a basyň

![](https://i-01.eu.org/1718304275.avif)

Soňra dikeltmek üçin “Snapshots” -a basyň.

![](https://i-01.eu.org/1718304063.avif)

Şeýle-de bolsa, bu suratyň granulikasy gaty uludyr, dikeldilenden soň, täze goşulan maglumatlar düýbünden ýitiriler, şonuň üçin seresaplylyk bilen ulanyň.

Adatça btrfs suratlaryny ulanmak has amatlydyr.

## Halas Ediş Ulgamynyň Jikme-Jiklikleri

Halas ediş ulgamyna giriň 22 Port [tcping](https://github.com/paradiseduo/tcping) elýeterli bolansoň, kesgitlenen parol bilen 2-3 minutlap girip bilmersiňiz, biraz garaşyň we gowy bolar.

```
tcping ip 22 -c 9999
```

Portuň elýeterliligine gözegçilik edilip bilner.

### Halas Ediş Işine Gireniňizden Soň Gaty Diski Nädip Almaly &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Mysal üçin, suraty görüp bilersiňiz

```
snapper -c etc list
```

Faýl üýtgeşmelerini görüň

```
snapper -c etc status 5..6
```

Aýratyn diff tekstini görüň

```
snapper -c etc diff 3..5
```

Suratyňy dikelt: Mysal üçin, 5-nji suratdan soň ähli üýtgeşmeleri yzyna al

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Logurnalyň Dowamlylygyny Işjeňleşdiriň

Halas ediş ulgamynyň gündeligini dowam etdirmek, degişli katalogy el bilen döretmegi we käbir goşmaça ädimleri ýerine ýetirmegi talap edýär, sebäbi işleýän systemd hyzmaty ýok bolmagy mümkin. Synag edip boljak ädimler:

Ilki bilen çapyň, soň

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ubuntu ulgamyňyza täzeden açyň: aboveokardaky üýtgeşmeleri girizeniňizden soň, halas ediş ulgamynyň ýerine enjamyňyzy adaty we Ubuntu ulgamyna täzeden açmaly.

Şeýlelik bilen, systemd-journald täze konfigurasiýa bilen başlar we surnallary gaty diskde yzygiderli saklap başlar.

Aboveokardaky amallaryň halas ediş ulgamynda ýerine ýetirilendigini ýadyňyzdan çykarmaň, şonuň üçin bu üýtgeşmeler ulgam täzeden açylýança we halas ediş tertibinde bolmaz.

Diýmek, dowam edýän bar bolan gündeliklere haýsydyr bir üýtgeşme görmersiňiz, ýöne şondan soň döredilen ähli ýazgylar dowam etdiriler.

Şeýlelik bilen ssh hyzmatynyň surnallaryny görüp bilersiňiz

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Kyn We Çylşyrymly Keseller Barada Bellikler

### Geň Meseläni Çözüň: Serwer ssh Edip Bilmez

Öň awtomatiki düzmek we ýerleşdirmek skriptini döretmek üçin github hereketini ulanýardym, ýöne ýerleşdiriş hyzmatynyň ssh bolup bilmejekdigine göz ýetirdim.

Halas ediş ulgamyna girmek we surnallara seretmek rugsat meselesi:

`Missing privilege separation directory: /run/sshd`

Bu bukjany aşakdaky buýruk bilen döredip bilersiňiz

```
chown root:root /
systemd-tmpfiles --create
```

Gaýtadan gözleglerden soň, tar paketiň Ulanyjy `uid` `1001` dyr github action

`--no-same-owner` açmak üçin parametr ýok bolsa, açmak gerek, `1001` ulanyjy üçin `uid` dekompressiýa ediler tar

Netijede, rsync kök katalogynyň ulanyjy toparyny üýtgeder, soň täzeden açanyňyzdan soň ssh-e girip bilmersiňiz.

Dekompressiýa skriptini aşakdaky ýaly üýtgediň:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```