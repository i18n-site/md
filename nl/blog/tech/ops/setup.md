# Initialiseer De Server (Gebruik BTRFS-Partitie, Snapper Geplande Snapshot)

## Contabo-Aankoopserver

contabo is een goedkope VPS-aanbieder in Duitsland met een lange geschiedenis (meer dan 20 jaar) en veel gebruikers (meer dan 200.000), dus u hoeft zich geen zorgen te maken dat u wegloopt.

Denk er VPS het kopen van [contabo.com](//contabo.com) aan om de Euro-prijs te kiezen, wat goedkoper is.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Er zijn eenmalige installatiekosten voor contabo.
Er zijn echter een paar dagen per maand waarop de installatiekosten gratis zijn. Registreer u gewoon en let op de promotionele e-mails.

Naast de vrije-areavergoeding in Europa kennen andere regio's verschillende niveaus van prijsstijgingen.

Ik heb voor een Europese server gekozen. Hoe dan ook, na het gebruik van cloudflare is er niet veel verschil tussen de servers.

De uiteindelijke configuratie is als volgt: 16 GB geheugen, 6 CPU, 200 GB NVMe, 9,50 euro per maand, wat overeenkomt met 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Deze prijs is bijna een tiende van de prijs van Alibaba Cloud en Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ik gebruikte [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) om de prestaties en parameters uit te voeren:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Weergave CPU Model `AMD EPYC 9224 24-Core Processor` single-core prestatiescore 1285
, multi-corescore 4277 Bekijk meer resultaten [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ik heb drie servers tegelijk gekocht en tegelijkertijd geactiveerd. Dit zorgt ervoor dat de servers in dezelfde computerruimte staan, waardoor het makkelijker wordt om in de toekomst een hoge beschikbaarheid op te bouwen.

De servers hangen af ​​en toe vast, waardoor de toegankelijkheid van de website wordt gegarandeerd dankzij hoge beschikbaarheid.

Nieuwe gebruikers moeten bij aankoop hun identiteitskaart indienen voor authenticatie op echte naam.

## Configureer Wachtwoordvrij Inloggen

Na een paar minuten waren de servers allemaal geactiveerd.

Het eerste wat u moet doen, is het `~/.ssh/config` van de lokale machine bewerken. Stel een alias in voor IP en gebruik vervolgens `ssh-copy-id root@c2` om wachtwoordvrij inloggen te configureren.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

U kunt dit [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) aanpassen om de initialisatieconfiguratie sneller te voltooien.

Nadat de wachtwoordvrije configuratie is voltooid, kunt u deze in batches gebruiken, wat handig is [pdsh](https://github.com/chaos/pdsh)

De eerste is om ipv6 handmatig in te schakelen en te testen

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Upgrade het systeem vervolgens met één klik naar ubuntu 24 en installeer veelgebruikte software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 betekent het wisselen van taal naar Chinees en tijdzone naar Peking.

De standaard geïnstalleerde software is geconfigureerd volgens mijn persoonlijke gebruiksgewoonten, zoals [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , enz. Indien nodig kunt u het [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -magazijn kopiëren en indien nodig aanpassen.

Deze stap duurt lang. Na een half uur wachten is de upgrade en installatie van veelgebruikte software succesvol. Je kunt het bevestigen met het volgende commando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Versnelt ssh

Het netwerk `ssh` Europa naar China is niet stabiel. Het wordt aanbevolen om te versnellen [mosh](//mosh.org)

Maak als volgt een `c0` -script in de map `~/.bin` van de lokale machine (voornamelijk toegevoegd aan de omgevingsvariabele `PATH` ):

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

Verleen na het maken uitvoerbare machtigingen en soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In de toekomst kunt u rechtstreeks `c0` , `c1` invoeren en `mosh` gebruiken om rechtstreeks verbinding te maken en [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Converteer Het Partitieformaat Van ext4 Naar btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) schijf-snapshots maken voor eenvoudige back-up.

Ga eerst naar het reddingssysteem

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Kies Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Wacht tot de server opnieuw is opgestart

Vingerafdrukveranderingen `ssh-keygen -R ip` optreden wanneer ssh

Voer vervolgens het volgende script uit om de partitie te converteren

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Het script zal het systeem automatisch opnieuw opstarten nadat de conversie succesvol is.

### Bekijk De Btrfs-Compressieverhouding

Het wordt standaard automatisch gecomprimeerd. De opdracht om de compressieverhouding te controleren is als volgt:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Handmatige Compressie

Als u een perfectionist bent, kunt u ook handmatig een volledige schijfcompressie uitvoeren

```bash
btrfs filesystem defragment -r -czstd /
```

Zoals je in de onderstaande figuur kunt zien, kun je zien dat er na handmatige compressie in het nieuwe systeem bijna 100 MB meer werd gecomprimeerd.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Maak Een Btrfs-Snapshotback-Up Met snapper

de beste partner voor Btrfs back- [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) .

Het initialisatiescript maakt de map `~/ubuntu` , voer gewoon de volgende opdracht uit:

```
~/ubuntu/snapper/init.sh
```

Tot ziens bij de scriptinhoud [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Gebruik `snapper list-configs` om de subvolumes te bekijken waarvoor snapshots zijn ingesteld.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Gebruik `snapper -c mnt list` om een ​​momentopname van een subvolume te bekijken

`/etc/snapper/configs/mnt` U kunt de specifieke back-upinstellingen van dit subvolume bekijken

Meer referenties:

[Speel eenvoudig met de snapshot-functie van Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Momentopname Van De Contabo-Server

contabo Biedt server-snapshot-functie, maar ondersteunt geen geplande snapshots. Ik heb een [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) geschreven om dagelijkse snapshots te maken.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Om een ​​servermomentopname te herstellen, klikt u eerst op Crontol in het beheermenu

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Klik vervolgens op Snapshots om te herstellen.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

De granulariteit van deze momentopname is echter te groot. Eenmaal hersteld, zullen de nieuw toegevoegde gegevens volledig verloren gaan, dus wees voorzichtig.

Het is meestal handiger om btrfs-snapshots te gebruiken.

## Details Van Het Reddingssysteem

Ga naar het reddingssysteem 22 Nadat de poort [tcping](https://github.com/paradiseduo/tcping) toegankelijk is, kunt u deze 2-3 minuten lang niet openen met het ingestelde wachtwoord.

```
tcping ip 22 -c 9999
```

De bereikbaarheid van de haven kan worden gemonitord.

### Toegang Krijgen Tot De Harde Schijf Nadat U Rescue Hebt Geopend &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

U kunt bijvoorbeeld de momentopname bekijken

```
snapper -c etc list
```

Bekijk de wijzigingen in snapshotbestanden

```
snapper -c etc status 5..6
```

Bekijk specifieke diff-tekst

```
snapper -c etc diff 3..5
```

Momentopname herstellen: maak bijvoorbeeld alle wijzigingen na momentopname 5 ongedaan

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Logboekpersistentie Inschakelen

Om logboekpersistentie onder een reddingssysteem in te schakelen, moet u handmatig de bijbehorende map maken en enkele extra stappen uitvoeren, omdat u mogelijk niet over een actieve systemd-service beschikt. Hier zijn de stappen die u kunt proberen:

Eerst chroot dan

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Start uw Ubuntu-systeem opnieuw op: Nadat u de bovenstaande wijzigingen hebt aangebracht, moet u uw machine normaal opnieuw opstarten en in uw Ubuntu-systeem in plaats van in het reddingssysteem.

Op deze manier zal systemd-journald beginnen met de nieuwe configuratie en beginnen met het permanent opslaan van logs op de harde schijf.

Houd er rekening mee dat de bovenstaande bewerkingen worden uitgevoerd op een reddingssysteem, dus deze wijzigingen worden pas van kracht zodra het systeem opnieuw is opgestart en niet langer in de reddingsmodus staat.

Dit betekent dat u niet onmiddellijk zult zien dat eventuele wijzigingen in bestaande logs persistent worden, maar dat alle logs die daarna worden gegenereerd, behouden blijven.

Zo kun je de logs van de ssh-service bekijken

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Opmerkingen Over Moeilijke en Gecompliceerde Ziekten

### Los Het Vreemde Probleem Op: De Server Kan Niet ssh

Ik heb eerder github action gebruikt om een ​​automatisch compilatie- en implementatiescript te maken, maar ontdekte dat de implementatieservice niet ssh kon zijn.

Het betreden van het reddingssysteem en het bekijken van de logbestanden is een toestemmingsprobleem:

`Missing privilege separation directory: /run/sshd`

U kunt deze map maken met de volgende opdracht

```
chown root:root /
systemd-tmpfiles --create
```

Na herhaald onderzoek komt dit omdat github action De gebruiker die tar `1001` heeft geüpload `uid`

tar Het uitpakken moet gebeuren zonder parameters `--no-same-owner` het wordt gedecomprimeerd in `uid` voor `1001` user

Als gevolg hiervan zal rsync de gebruikersgroep van de hoofdmap wijzigen, en kun je na het opnieuw opstarten niet meer inloggen op ssh.

Wijzig het decompressiescript als volgt:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

