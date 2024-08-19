# Inicializoni Serverin (Përdorni Ndarjen BTRFS, Fotografinë E Planifikuar Të Snapper)

## Serveri I Blerjes contabo

contabo është një ofrues i lirë VPS në Gjermani me një histori të gjatë (më shumë se 20 vjet) dhe shumë përdorues (më shumë se 200,000), kështu që nuk ka nevojë të shqetësoheni për ikjen.

VPS blini [contabo.com](//contabo.com) mos harroni të zgjidhni çmimin në Euro, i cili është më i lirë.

![](https://i-01.eu.org/1718285782.avif)

Ekziston një tarifë instalimi një herë për contabo.
Megjithatë, ka disa ditë çdo muaj ku tarifa e instalimit është falas.

Përveç tarifës së zonës së lirë në Evropë, rajone të tjera kanë nivele të ndryshme të rritjes së çmimeve.

Unë zgjodha një server evropian. Gjithsesi, pas përdorimit të cloudflare, nuk ka shumë ndryshim midis serverëve.

Konfigurimi përfundimtar është si më poshtë, memorie 16 GB, 6 CPU, 200 GB NVMe, 9,50 euro në muaj, ekuivalente me 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ky çmim është pothuajse një e dhjeta e çmimit të Alibaba Cloud dhe Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Kam [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) për të ekzekutuar performancën dhe parametrat:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Po shfaqet Modeli `AMD EPYC 9224 24-Core Processor` , rezultati i performancës me një 1285 CPU
, rezultat me shumë bërthama 4277 Shiko më shumë rezultate [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Bleva tre serverë në të njëjtën kohë dhe i aktivizova në të njëjtën kohë. Kjo siguron që serverët të jenë në të njëjtën dhomë kompjuteri, duke e bërë më të lehtë krijimin e disponueshmërisë së lartë në të ardhmen.

Serverët e tij mbyllen herë pas here, duke siguruar akses në uebfaqe përmes disponueshmërisë së lartë.

Përdoruesit e rinj duhet të dorëzojnë kartat e tyre të identitetit për vërtetimin e emrit të vërtetë kur blejnë.

## Konfiguro Hyrjen Pa Fjalëkalim

Pas disa minutash, serverët u aktivizuan të gjithë.

Gjëja e parë IP të modifikoni `~/.ssh/config` në e makinës lokale për të vendosur një pseudonim dhe më pas përdorni `ssh-copy-id root@c2` për të konfiguruar hyrjen pa fjalëkalim.

![](https://i-01.eu.org/1718287198.avif)

Ju mund ta modifikoni këtë [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) për të përfunduar konfigurimin e inicializimit më shpejt.

Pas përfundimit të konfigurimit pa fjalëkalim, mund ta përdorni [pdsh](https://github.com/chaos/pdsh) në grupe, gjë që është e përshtatshme.

E para është aktivizimi manual i ipv6 dhe testimi

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Më pas përmirësoni sistemin në ubuntu 24 me një klikim dhe instaloni softuerin e përdorur zakonisht.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 do të thotë kalimi i gjuhës në kinezisht dhe i zonës kohore në Pekin.

Softueri i instaluar si parazgjedhje është konfiguruar sipas zakoneve të [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) të përdorimit, si [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etj.

Ky hap kërkon një kohë të gjatë Pas pritjes për gjysmë ore, përmirësimi dhe instalimi i softuerit të përdorur zakonisht do të jetë i suksesshëm. Ju mund ta konfirmoni këtë me komandën e mëposhtme:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Shpejton ssh

Rrjeti nga Evropa në Kinë nuk është i qëndrueshëm Rekomandohet të [mosh](//mosh.org) për të shpejtuar `ssh` .

Krijoni `c0` skripta në drejtorinë lokale `~/.bin` (kryesisht të shtuara në variablin e mjedisit `PATH` ) si më poshtë:

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

Pas krijimit, jepni leje të ekzekutueshme dhe soft-link `c1` dhe `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Në të ardhmen, mund të futni drejtpërdrejt `c0` dhe `c1` për të përdorur `mosh` lidhje direkte me shpejtësi të lartë dhe të hyni [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvertoni Formatin E Ndarjes Nga ext4 Në btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) të marrë fotografi të diskut për kopje rezervë të lehtë.

Fillimisht hyni në sistemin e shpëtimit

![](https://i-01.eu.org/1718300448.avif)

Zgjidhni Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Prisni që serveri të rifillojë

Do të ketë ndryshime të gjurmëve të ssh , përdorni `ssh-keygen -R ip` për ta pastruar atë

Pastaj ekzekutoni skriptin e mëposhtëm për të kthyer ndarjen

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skripti do të rifillojë automatikisht sistemin pasi konvertimi të jetë i suksesshëm.

### Shikoni Raportin E Kompresimit btrfs

Do të kompresohet automatikisht si parazgjedhje Komanda për të kontrolluar raportin e kompresimit është si më poshtë:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kompresim Manual

Nëse jeni një perfeksionist, mund të kryeni gjithashtu një kompresim të plotë të diskut me dorë.

```bash
btrfs filesystem defragment -r -czstd /
```

Siç tregohet në figurën më poshtë, mund të shihni se pas kompresimit manual në sistemin e ri, u kompresuan afro 100MB më shumë.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Krijo Një Kopje Rezervë Të Fotografive Btrfs Me snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) partneri më i mirë për kopje rezervë Btrfs .

Skripti i inicializimit do të krijojë drejtorinë `~/ubuntu` , thjesht ekzekutoni komandën e mëposhtme:

```
~/ubuntu/snapper/init.sh
```

Shihemi në përmbajtjen e skenarit [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Përdorni `snapper list-configs` për të parë nënvëllimet për të cilat janë vendosur fotografitë.

![](https://i-01.eu.org/1718302689.avif)

Përdorni `snapper -c mnt list` për të parë një fotografi të një nënvëllimi

`/etc/snapper/configs/mnt` mund të shikojë cilësimet specifike rezervë të këtij nënvëllimi

Më shumë referenca:

[Luaj me lehtësi me funksionin e fotografisë së Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Foto E Serverit contabo

contabo funksionin e fotografive të serverit, por nuk mbështet [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) e planifikuara.

![](https://i-01.eu.org/1718304206.avif)

Për të rivendosur një fotografi të serverit, së pari klikoni Crontol në menynë e menaxhimit

![](https://i-01.eu.org/1718304275.avif)

Pastaj, klikoni Snapshots për të rivendosur.

![](https://i-01.eu.org/1718304063.avif)

Megjithatë, përmasat e kësaj fotografie janë shumë të mëdha.

Zakonisht është më i përshtatshëm për të përdorur fotografitë e btrfs.

## Detajet E Sistemit Të Shpëtimit

Futni sistemin e shpëtimit 22 Pasi porti të jetë [tcping](https://github.com/paradiseduo/tcping) i aksesueshëm, nuk do të jeni në gjendje ta aksesoni atë me fjalëkalimin e vendosur për 2-3 minuta.

```
tcping ip 22 -c 9999
```

Mund të monitorohet aksesueshmëria e portit.

### Si Të Hyni Në Hard Diskun Pasi Të Keni Hyrë Në Shpëtim &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Ju mund të shikoni fotografinë, për shembull

```
snapper -c etc list
```

Shikoni ndryshimet e skedarit të fotografive

```
snapper -c etc status 5..6
```

Shikoni tekstin specifik të ndryshimit

```
snapper -c etc diff 3..5
```

Rivendos fotografinë: Për shembull, zhbëni të gjitha ndryshimet pas fotografisë 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktivizo Qëndrueshmërinë E Regjistrit

Aktivizimi i qëndrueshmërisë së regjistrit nën një sistem shpëtimi kërkon që ju të krijoni manualisht drejtorinë përkatëse dhe të kryeni disa hapa shtesë, sepse mund të mos keni një shërbim systemd që funksionon. Këtu janë hapat që mund të provoni:

Së pari chroot, pastaj

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Rinisni në sistemin tuaj Ubuntu: Pasi të keni bërë ndryshimet e mësipërme, duhet të rindizni kompjuterin tuaj normalisht dhe në sistemin tuaj Ubuntu në vend të sistemit të shpëtimit.

Në këtë mënyrë, systemd-journald do të fillojë me konfigurimin e ri dhe do të fillojë të ruajë regjistrat vazhdimisht në hard disk.

Mbani në mend se operacionet e mësipërme kryhen në një sistem shpëtimi, kështu që këto ndryshime nuk do të hyjnë në fuqi derisa sistemi të rindizet dhe të mos jetë më në modalitetin e shpëtimit.

Kjo do të thotë që nuk do të shihni menjëherë ndonjë ndryshim në regjistrat ekzistues që bëhen të qëndrueshëm, por të gjithë regjistrat e krijuar pas kësaj do të vazhdojnë.

Në këtë mënyrë ju mund të shikoni regjistrat e shërbimit ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Shënime Mbi Sëmundjet E Vështira Dhe Të Ndërlikuara

### Zgjidheni Problemin E Çuditshëm: Serveri Nuk Mund Të ssh

Kam përdorur veprimin e github për të bërë një skript automatik përpilimi dhe vendosjeje më parë, por zbulova se shërbimi i vendosjes nuk mund të ishte ssh.

Hyrja në sistemin e shpëtimit dhe shikimi i regjistrave është një çështje leje:

`Missing privilege separation directory: /run/sshd`

Ju mund ta krijoni këtë direktori me komandën e mëposhtme

```
chown root:root /
systemd-tmpfiles --create
```

Pas hetimeve të përsëritura, është për shkak github action Përdoruesi `uid` i tar është `1001`

Shpaketimi duhet të jetë nëse nuk ka parametër `--no-same-owner` , ai do të dekompresohet në `uid` për `1001` përdorues tar

Si rezultat, rsync do të ndryshojë grupin e përdoruesve të drejtorisë rrënjësore dhe më pas nuk do të jeni në gjendje të identifikoheni në ssh pas rinisjes.

Ndryshoni skriptin e dekompresimit si më poshtë:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```