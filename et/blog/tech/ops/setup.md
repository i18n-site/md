# Initsialiseerige Server (Kasutage BTRFS-I Partitsiooni, Snapperi Ajastatud Hetktõmmist)

## contabo Ostuserver

contabo on odav VPS-i pakkuja Saksamaal, millel on pikk ajalugu (rohkem kui 20 aastat) ja palju kasutajaid (üle 200 000), seega pole vaja karta põgenemise pärast.

VPS [contabo.com](//contabo.com) ärge unustage valida euro hind, mis on odavam.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Contabole on ühekordne paigaldustasu.
Siiski on igas kuus paar päeva, kus paigaldustasu on tasuta. Lihtsalt registreeru ja pööra tähelepanu reklaammeilidele.

Lisaks Euroopa tasuta alatasule on teistes piirkondades erineva tasemega hinnatõus.

Valisin Euroopa serveri.

Lõplik konfiguratsioon on järgmine, 16 GB mälu, 6 CPU, 200 GB NVMe, 9,50 eurot kuus, mis vastab 74,43 RMB-le.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**See hind on peaaegu kümnendik Alibaba Cloudi ja Amazoni hinnast** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ma [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) jõudluse ja parameetrite käivitamiseks:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Kuva mudel CPU `AMD EPYC 9224 24-Core Processor` ühetuumaline jõudlusskoor 1285
, mitmetuumaline tulemus 4277 Kuva rohkem tulemusi [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ostsin korraga kolm serverit ja aktiveerisin need korraga. See tagab, et serverid asuvad samas arvutiruumis, mistõttu on edaspidi lihtsam kõrget saadavust üles ehitada.

Selle serverid katkestavad aeg-ajalt kõne, tagades veebisaidi juurdepääsetavuse kõrge kättesaadavuse kaudu.

Uued kasutajad peavad ostu sooritamisel esitama oma ID-kaardi pärisnime autentimiseks.

## Seadistage Paroolivaba Sisselogimine

Mõne minuti pärast aktiveeriti kõik serverid.

Esimese asjana tuleb redigeerida kohaliku masina `~/.ssh/config` `ssh-copy-id root@c2` IP

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Saate seda [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) muuta, et lähtestamiskonfiguratsioon kiiremini lõpule viia.

Pärast paroolivaba konfigureerimise lõpetamist saate seda [pdsh](https://github.com/chaos/pdsh) pakettidena, mis on mugav.

Esimene on ipv6 käsitsi lubamine ja testimine

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Seejärel uuendage süsteem ühe klõpsuga versioonile ubuntu 24 ja installige sageli kasutatav tarkvara.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 tähendab keele vahetamist hiina keelele ja ajavööndit Pekingile.

Vaikimisi installitud tarkvara on konfigureeritud vastavalt minu isiklikele kasutusharjumustele, nagu [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) jne. Vajadusel saate kopeerida [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ladu ja muuta seda vastavalt vajadusele.

See samm võtab kaua aega Pärast pooletunnist ootamist õnnestub sageli kasutatava tarkvara uuendamine ja installimine. Saate selle kinnitada järgmise käsuga:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Kiirendab Ssh-D

Võrk Euroopast Hiinasse ei ole stabiilne `ssh` Tule kiirendada [mosh](//mosh.org)

Looge kohaliku `~/.bin` (peamiselt keskkonnamuutuja `PATH` ) kataloogis `c0` skript järgmiselt:

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

Pärast loomist andke käivitamisõigused ja pehme link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Tulevikus saate otse sisestada `c0` , `c1` ja kasutada `mosh` otse ühenduse loomiseks ja sisestamiseks [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Teisendage Partitsiooni Vorming Ext4-St Btrfs-I

[btrfs](https://wikipedia.org/wiki/Btrfs) teha ketta hetktõmmiseid lihtsaks varundamiseks.

Esmalt sisenege päästesüsteemi

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Valige Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Oodake, kuni server taaskäivitub

Sõrmejäljed muutuvad, kui ssh kasutage selle puhastamiseks `ssh-keygen -R ip`

Seejärel käivitage partitsiooni teisendamiseks järgmine skript

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Pärast teisendamise õnnestumist taaskäivitab skript süsteemi automaatselt.

### Vaadake Btrfs-I Tihendussuhet

See tihendab vaikimisi automaatselt Tihendusastme kontrollimise käsk on järgmine:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Käsitsi Kokkusurumine

Kui olete perfektsionist, saate ketta täieliku tihendamise teha ka käsitsi. Käsk on järgmine

```bash
btrfs filesystem defragment -r -czstd /
```

Nagu on näidatud alloleval joonisel, näete, et pärast käsitsi pakkimist uues süsteemis tihendati ligi 100 MB rohkem.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Looge Snapperiga Btrfsi Hetktõmmise Varukoopia

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) on parim partner Btrfs varundamiseks.

Initsialiseerimisskript loob `~/ubuntu` , käivitage lihtsalt järgmine käsk:

```
~/ubuntu/snapper/init.sh
```

Kohtumiseni stsenaariumi sisus [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Kasutage `snapper list-configs` alamköidete vaatamiseks, mille jaoks hetktõmmised on määratud.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Kasutage alamköite hetktõmmise vaatamiseks `snapper -c mnt list`

`/etc/snapper/configs/mnt` vaadata selle alamköite konkreetseid varundusseadeid

Veel viiteid:

[Mängige hõlpsalt Btrfs hetktõmmise funktsiooniga snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Serveri Hetktõmmis

contabo serveri hetktõmmiste funktsiooni, kuid ei toeta ajastatud hetktõmmiste [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) .

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Serveri hetktõmmise taastamiseks klõpsake esmalt haldusmenüüs Crontol

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Seejärel klõpsake taastamiseks nuppu Snapshots.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Selle hetktõmmise detailsus on aga pärast taastamist kaotsi läinud, seega kasutage neid ettevaatlikult.

Tavaliselt on mugavam kasutada btrfs-i hetktõmmiseid.

## Päästesüsteemi Üksikasjad

Sisenege 22 Kui port on [tcping](https://github.com/paradiseduo/tcping) juurdepääsetav, ei saa te sellele 2-3 minuti jooksul juurde pääseda. Oodake veidi ja kõik on korras.

```
tcping ip 22 -c 9999
```

Sadama ligipääsetavust saab jälgida.

### Kuidas Pääseda Juurde Kõvakettale Pärast & Sisenemist Taasta Hetktõmmis

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Saate vaadata näiteks hetktõmmist

```
snapper -c etc list
```

Vaadake hetktõmmise faili muudatusi

```
snapper -c etc status 5..6
```

Vaadake konkreetset erinevat teksti

```
snapper -c etc diff 3..5
```

Taasta hetktõmmis: näiteks võtke pärast 5. hetktõmmist tagasi kõik muudatused

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Logi Püsivuse Lubamine

Logi püsivuse lubamine päästesüsteemis eeldab vastava kataloogi käsitsi loomist ja mõningate lisatoimingute tegemist, kuna teil ei pruugi olla töötavat systemd-teenust. Siin on sammud, mida saate proovida.

Kõigepealt chroot, siis

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Taaskäivitage oma Ubuntu süsteemi: pärast ülaltoodud muudatuste tegemist peate oma masina tavapäraselt taaskäivitama ja päästesüsteemi asemel oma Ubuntu süsteemi.

Sel viisil alustab systemd-journald uue konfiguratsiooniga ja hakkab püsivalt kõvakettale logisid salvestama.

Pidage meeles, et ülaltoodud toimingud tehakse päästesüsteemis, nii et need muudatused jõustuvad alles siis, kui süsteem taaskäivitatakse ega ole enam päästerežiimis.

See tähendab, et te ei näe kohe, et olemasolevate logide muudatused muutuvad püsivaks, kuid kõik pärast seda loodud logid jäävad alles.

Nii saate vaadata ssh-teenuse logisid

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Märkused Raskete Ja Keeruliste Haiguste Kohta

### Lahendage Imelik Probleem: Server Ei Saa Ssh-D

Kasutasin varem automaatse kompileerimise ja juurutamise skripti tegemiseks githubi toimingut, kuid avastasin, et juurutusteenus ei saa olla ssh.

Päästesüsteemi sisenemine ja logide vaatamine on loa probleem:

`Missing privilege separation directory: /run/sshd`

Selle kataloogi saate luua järgmise käsuga

```
chown root:root /
systemd-tmpfiles --create
```

`uid` korduvaid tar on `1001` github action

Lahtipakkimine peab `1001` `--no-same-owner` `uid` tar

Selle tulemusena muudab rsync juurkataloogi kasutajagruppi ja siis ei saa te pärast taaskäivitamist ssh-sse sisse logida.

Muutke lahtipakkimisskripti järgmiselt.

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

