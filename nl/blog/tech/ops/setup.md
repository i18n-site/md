# Initialiseer De Server (Gebruik BTRFS-Partitie, Snapper Geplande Snapshot)

## Contabo-Aankoopserver

contabo is een goedkope VPS-aanbieder in Duitsland met een lange geschiedenis (meer dan 20 jaar) en veel gebruikers (meer dan 200.000), dus u hoeft zich geen zorgen te maken dat u wegloopt.

Denk er VPS het kopen van [contabo.com](//contabo.com) aan om de Euro-prijs te kiezen, wat goedkoper is.

![](https://i-01.eu.org/1718285782.avif)

Er zijn eenmalige installatiekosten voor contabo.
Er zijn echter een paar dagen per maand waarop de installatiekosten gratis zijn. Registreer u gewoon en let op de promotionele e-mails.

Naast de vrije-areavergoeding in Europa kennen andere regio's verschillende niveaus van prijsstijgingen.

Ik heb voor een Europese server gekozen. Hoe dan ook, na het gebruik van cloudflare is er niet veel verschil tussen de servers.

De uiteindelijke configuratie is als volgt: 16 GB geheugen, 6 CPU, 200 GB NVMe, 9,50 euro per maand, wat overeenkomt met 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Deze prijs is bijna een tiende van de prijs van Alibaba Cloud en Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Ik gebruikte [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) om de prestaties en parameters uit te voeren:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Toont CPU Model `AMD EPYC 9224 24-Core Processor` , single-core prestatiescore 1285
, multi-corescore 4277 Bekijk meer resultaten [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ik heb drie servers tegelijk gekocht en tegelijkertijd geactiveerd. Dit zorgt ervoor dat de servers in dezelfde computerruimte staan, waardoor het makkelijker wordt om in de toekomst een hoge beschikbaarheid op te bouwen.

De servers hangen af en toe vast, waardoor de toegankelijkheid van de website wordt gegarandeerd dankzij hoge beschikbaarheid.

Nieuwe gebruikers moeten bij aankoop hun identiteitskaart indienen voor authenticatie op echte naam.

## Configureer Wachtwoordvrij Inloggen

Na een paar minuten waren de servers allemaal geactiveerd

Het eerste wat u moet doen IP de `~/.ssh/config` van de lokale machine bewerken om een alias in te stellen, en vervolgens `ssh-copy-id root@c2` gebruiken om wachtwoordvrij inloggen te configureren.

![](https://i-01.eu.org/1718287198.avif)

U kunt dit [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) aanpassen om de initialisatieconfiguratie sneller te voltooien.

Nadat de wachtwoordvrije configuratie is voltooid, kunt u deze in batches gebruiken, wat handig is [pdsh](https://github.com/chaos/pdsh)

De eerste is om ipv6 handmatig in te schakelen en te testen

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Upgrade het systeem vervolgens met één klik naar ubuntu 24 en installeer veelgebruikte software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 betekent het wisselen van taal naar Chinees en tijdzone naar Peking.

De standaard geïnstalleerde software is geconfigureerd volgens mijn persoonlijke gebruiksgewoonten, zoals [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , enz. Indien nodig kunt u het [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -magazijn kopiëren en indien nodig aanpassen.

Deze stap duurt lang. Na een half uur wachten is de upgrade en installatie van veelgebruikte software succesvol. Je kunt dit bevestigen met het volgende commando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Versnelt ssh

Het netwerk van Europa naar China is niet stabiel. Het wordt aanbevolen om snelheid `ssh` te gebruiken [mosh](//mosh.org)

Maak als volgt `c0` scripts in de lokale map `~/.bin` (voornamelijk toegevoegd aan omgevingsvariabele `PATH` ):

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

Na het maken verleent u uitvoerbare machtigingen en soft-link `c1` en `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In de toekomst kunt u direct `c0` en `c1` invoeren om `mosh` snelle directe verbindingen te gebruiken en binnen te gaan [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Converteer Het Partitieformaat Van ext4 Naar btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) kan schijf-snapshots maken voor eenvoudige back-up.

Ga eerst naar het reddingssysteem

![](https://i-01.eu.org/1718300448.avif)

Kies Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Wacht tot de server opnieuw is opgestart

ssh Er zullen vingerafdrukveranderingen zijn, gebruik `ssh-keygen -R ip` om het op te ruimen

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

Als u een perfectionist bent, kunt u ook handmatig een volledige schijfcompressie uitvoeren. De opdracht luidt als volgt:

```bash
btrfs filesystem defragment -r -czstd /
```

Zoals je in de onderstaande figuur kunt zien, kun je zien dat er na handmatige compressie in het nieuwe systeem bijna 100 MB meer werd gecomprimeerd.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Maak Een Btrfs-Snapshotback-Up Met snapper

de beste partner voor Btrfs back- [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) .

Het initialisatiescript maakt de map `~/ubuntu` aan. Voer gewoon de volgende opdracht uit:

```
~/ubuntu/snapper/init.sh
```

Tot ziens bij de scriptinhoud [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Gebruik `snapper list-configs` om de subvolumes te bekijken waarvoor snapshots zijn ingesteld

![](https://i-01.eu.org/1718302689.avif)

Gebruik `snapper -c mnt list` om een momentopname van een subvolume te bekijken

`/etc/snapper/configs/mnt` kan de specifieke back-upinstellingen van dit subvolume bekijken

Meer referenties:

[Speel eenvoudig met de snapshot-functie van Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Momentopname Van De Contabo-Server

contabo Biedt server-snapshot-functie, maar ondersteunt geen geplande snapshots. Ik heb een [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) geschreven om dagelijkse snapshots te maken.

![](https://i-01.eu.org/1718304206.avif)

Om een servermomentopname te herstellen, klikt u eerst op Crontol in het beheermenu

![](https://i-01.eu.org/1718304275.avif)

Klik vervolgens op Snapshots om te herstellen.

![](https://i-01.eu.org/1718304063.avif)

De granulariteit van deze momentopname is echter te groot. Eenmaal hersteld, zullen de nieuw toegevoegde gegevens volledig verloren gaan, dus wees voorzichtig.

Het is meestal handiger om btrfs-snapshots te gebruiken.

## Rescue Systeem Details

Ga naar het reddingssysteem 22 Nadat de poort [tcping](https://github.com/paradiseduo/tcping) toegankelijk is, kunt u er 2-3 minuten geen toegang meer krijgen met het ingestelde wachtwoord.

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

### Open Logboek Persistentie

Om logboekpersistentie onder een reddingssysteem in te schakelen, moet u handmatig de bijbehorende map maken en enkele extra stappen uitvoeren, omdat u mogelijk niet over een actieve systemd-service beschikt. Hier zijn de stappen die u kunt proberen:

Eerst chroot, dan

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Start uw Ubuntu-systeem opnieuw op: Nadat u de bovenstaande wijzigingen hebt aangebracht, moet u uw machine normaal opnieuw opstarten en in uw Ubuntu-systeem in plaats van in het reddingssysteem.

Op deze manier zal systemd-journald beginnen met de nieuwe configuratie en logs permanent op de harde schijf opslaan.

Houd er rekening mee dat de bovenstaande bewerkingen worden uitgevoerd op een reddingssysteem, zodat deze wijzigingen pas van kracht worden als het systeem opnieuw wordt opgestart en niet langer in de reddingsmodus staat.

Dit betekent dat u niet onmiddellijk wijzigingen in bestaande logs ziet die permanent worden opgeslagen, maar dat alle logs die daarna worden gegenereerd, permanent worden bewaard.

Zo kunt u de logs van de ssh-service bekijken

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notities over moeilijke en complexe problemen

### Oplossing van vreemde problemen: de server kan geen ssh uitvoeren

Eerder heb ik een script voor automatische compilatie en implementatie met GitHub Actions gebruikt, maar ontdekte dat de implementatieservice geen ssh kon accepteren.

Bij het binnengaan van het reddingssysteem blijkt dat het een toestemmingsprobleem is met de logs:

`Missing privilege separation directory: /run/sshd`

U kunt deze map aanmaken met de volgende opdracht:

```
chown root:root /
systemd-tmpfiles --create
```

Na herhaaldelijk onderzoek bleek dit te wijten aan het feit dat de `uid` van de tar-pakking in GitHub Actions `1001` is

Tar moet worden uitgepakt zonder de parameter `--no-same-owner`, anders wordt het gedecomprimeerd naar `uid` `1001` voor gebruikers

Dit leidt er toe dat rsync de gebruikersgroep van de rootmap wijzigt, waardoor u na een herstart niet meer kunt inloggen op ssh.

Wijzig het script voor het uitpakken als volgt:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```