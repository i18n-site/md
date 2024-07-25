# Initialiser Serveren (Brug BTRFS Partition, Snapper Planlagt Snapshot)

## contabo Købsserver

contabo er en billig VPS-udbyder i Tyskland med en lang historie (mere end 20 år) og mange brugere (mere end 200.000), så der er ingen grund til at bekymre sig om at stikke af.

VPS du køber [contabo.com](//contabo.com) så husk at vælge Euro-prissætning, som er billigere.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Der er et engangsinstallationsgebyr for contabo.
Der er dog et par dage hver måned, hvor installationsgebyret er gratis. Bare registrer dig og vær opmærksom på kampagnemails.

Ud over friarealafgiften i Europa har andre regioner forskellige niveauer af prisstigninger.

Jeg valgte en europæisk server. Efter at have brugt cloudflare er der ikke meget forskel på serverne.

Den endelige konfiguration er som følger, 16 GB hukommelse, 6CPU, 200 GB NVMe, 9,50 euro om måneden, svarende til 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Denne pris er næsten en tiendedel af prisen på Alibaba Cloud og Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Jeg [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) til at køre ydeevnen og parametrene:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Display CPU Model `AMD EPYC 9224 24-Core Processor` single-core performance score 1285
, multi-core score 4277 Se flere resultater [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Jeg købte tre servere på én gang og aktiverede dem på samme tid. Dette sikrer, at serverne er i samme computerrum, hvilket gør det lettere at opbygge høj tilgængelighed i fremtiden.

Dens servere lægger lejlighedsvis på, hvilket sikrer webstedets tilgængelighed gennem høj tilgængelighed.

Nye brugere skal indsende deres ID-kort til autentificering med rigtige navn, når de køber.

## Konfigurer Adgangskodefrit Login

Efter et par minutter var alle serverne aktiveret.

Den første ting er at redigere den lokale maskines `~/.ssh/config` Indstil et alias for IP og brug derefter `ssh-copy-id root@c2` til at konfigurere adgangskodefrit login.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Du kan ændre dette [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) for at fuldføre initialiseringskonfigurationen hurtigere.

Når den adgangskodefri konfiguration er fuldført, kan du bruge den [pdsh](https://github.com/chaos/pdsh)

Den første er at aktivere ipv6 manuelt og teste

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Opgrader derefter systemet til ubuntu 24 med et enkelt klik og installer almindeligt brugt software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 betyder at skifte sprog til kinesisk og tidszone til Beijing.

Softwaren, der er installeret som standard, er konfigureret i henhold til mine personlige brugsvaner, såsom [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , osv. Hvis det er nødvendigt, kan du kopiere [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -lageret og ændre det efter behov.

Dette trin tager lang tid Efter at have ventet i en halv time, vil opgraderingen og installationen af ​​almindeligt brugt software være vellykket. Du kan bekræfte det med følgende kommando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Fremskynder ssh

Netværket fra Europa til Kina er `ssh` stabilt Det anbefales at bruge [mosh](//mosh.org)

Opret et `c0` -script i den lokale maskine `~/.bin` (hovedsageligt tilføjet til miljøvariablen `PATH` ) som følger:

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

Efter oprettelse, giv eksekverbare tilladelser og soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

I fremtiden kan du indtaste `c0` `c1` direkte, og du kan bruge `mosh` til at oprette forbindelse direkte og indtaste [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konverter Partitionsformat Fra ext4 Til btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Kan tage disksnapshots for nem backup.

Gå først ind i redningssystemet

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Vælg Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Vent på, at serveren genstarter

Fingeraftryksændringer vil forekomme `ssh-keygen -R ip` når ssh

Kør derefter følgende script for at konvertere partitionen

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Scriptet genstarter automatisk systemet, når konverteringen er vellykket.

### Se btrfs Kompressionsforhold

Det vil automatisk komprimere som standard Kommandoen til at kontrollere komprimeringsforholdet er som følger:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuel Komprimering

Hvis du er perfektionist, kan du også udføre en fuld diskkomprimering manuelt. Kommandoen er som følger

```bash
btrfs filesystem defragment -r -czstd /
```

Som vist i figuren nedenfor, kan du se, at efter manuel komprimering i det nye system, blev der komprimeret næsten 100MB mere.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Opret en Btrfs Snapshot Backup Med snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) er den bedste partner til Btrfs backup.

Initialiseringsscriptet vil oprette mappen `~/ubuntu` , bare kør følgende kommando:

```
~/ubuntu/snapper/init.sh
```

Vi ses i manuskriptets indhold [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Brug `snapper list-configs` til at se de undervolumener, som snapshots er indstillet til.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Brug `snapper -c mnt list` til at se et øjebliksbillede af en underbind

`/etc/snapper/configs/mnt` Du kan se de specifikke sikkerhedskopieringsindstillinger for denne underenhed

Flere referencer:

[Spil nemt med snapshot-funktionen i Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo Giver serversnapshotfunktion, men understøtter ikke planlagte snapshots. Jeg skrev et [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) til at tage daglige snapshots.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

For at gendanne et serversnapshot skal du først klikke på Crontol i administrationsmenuen

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Klik derefter på Snapshots for at gendanne.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Granulariteten af ​​dette øjebliksbillede er dog for stor. Når den først er gendannet, vil de nyligt tilføjede data gå fuldstændig tabt, så brug det med forsigtighed.

Det er normalt mere praktisk at bruge btrfs snapshots.

## Redningssystemet Detaljer

Gå ind 22 redningssystemet Når porten er [tcping](https://github.com/paradiseduo/tcping) tilgængelig, vil du ikke være i stand til at få adgang til den med den indstillede adgangskode i 2-3 minutter.

```
tcping ip 22 -c 9999
```

Havnetilgængelighed kan overvåges.

### Sådan Får Du Adgang Til Harddisken Efter Indtastning Af Redning &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Du kan f.eks. se øjebliksbilledet

```
snapper -c etc list
```

Se ændringer i snapshot-filen

```
snapper -c etc status 5..6
```

Se specifik diff-tekst

```
snapper -c etc diff 3..5
```

Gendan snapshot: Fortryd for eksempel alle ændringer efter snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktiver Log Vedholdenhed

Aktivering af log persistens under et redningssystem kræver, at du manuelt opretter den tilsvarende mappe og udfører nogle yderligere trin, fordi du muligvis ikke har en kørende systemd-tjeneste. Her er trin, du kan prøve:

Først chroot, så

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Genstart i dit Ubuntu-system: Efter at have foretaget ovenstående ændringer, skal du genstarte din maskine normalt og ind i dit Ubuntu-system i stedet for redningssystemet.

På denne måde vil systemd-journald starte med den nye konfiguration og begynde at gemme logs vedvarende på harddisken.

Husk, at ovenstående handlinger udføres på et redningssystem, så disse ændringer træder først i kraft, når systemet er genstartet og ikke længere er i redningstilstand.

Det betyder, at du ikke umiddelbart vil se, at ændringer i eksisterende logfiler bliver vedvarende, men alle logfiler, der er genereret efter dette, vil blive beholdt.

På denne måde kan du se logfilerne for ssh-tjenesten

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Noter Om Vanskelige Og Komplicerede Sygdomme

### Løs Det Mærkelige Problem: Serveren Kan Ikke ssh

Jeg brugte github action til at lave et automatisk kompilerings- og implementeringsscript før, men fandt ud af, at implementeringstjenesten ikke kunne ssh.

At gå ind i redningssystemet og se på loggene er et tilladelsesproblem:

`Missing privilege separation directory: /run/sshd`

Du kan oprette denne mappe med følgende kommando

```
chown root:root /
systemd-tmpfiles --create
```

Efter gentagne undersøgelser skyldes det github action `1001` brugeren, der uploadede tar `uid`

tar Udpakning skal ske uden parametre `--no-same-owner` den vil blive dekomprimeret til `uid` for `1001` bruger

Som et resultat vil rsync ændre brugergruppen for rodmappen, og så vil du ikke være i stand til at logge på ssh efter genstart.

Rediger dekompressionsscriptet som følger:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

