# Initialiser Serveren (Bruk BTRFS-Partisjon, Snapper Planlagt Øyeblikksbilde)

## contabo Kjøpsserver

contabo er en billig VPS-leverandør i Tyskland med en lang historie (mer enn 20 år) og mange brukere (mer enn 200 000), så det er ingen grunn til å bekymre seg for å stikke av.

VPS du kjøper [contabo.com](//contabo.com) husk å velge Euro-priser, som er billigere.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Det er en engangs installasjonsavgift for contabo.
Det er imidlertid noen dager hver måned hvor installasjonsgebyret er gratis. Bare registrer deg og vær oppmerksom på reklame-e-postene.

I tillegg til friarealavgiften i Europa, har andre regioner ulike prisøkninger.

Jeg valgte en europeisk server Uansett, etter å ha brukt cloudflare, er det ikke mye forskjell mellom serverne.

Den endelige konfigurasjonen er som følger, 16 GB minne, 6CPU, 200 GB NVMe, 9,50 euro i måneden, tilsvarende 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Denne prisen er nesten en tiendedel av prisen på Alibaba Cloud og Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Jeg brukte [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) til å kjøre ytelsen og parameterne:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Display CPU Model `AMD EPYC 9224 24-Core Processor` ytelsespoeng med én kjerne 1285
, multi-core score 4277 Se flere resultater [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Jeg kjøpte tre servere på en gang og aktiverte dem samtidig. Dette sikrer at serverne er i samme datarom, noe som gjør det lettere å bygge høy tilgjengelighet i fremtiden.

Serverne henger av og til på, noe som sikrer nettsidetilgjengelighet gjennom høy tilgjengelighet.

Nye brukere må sende inn ID-kortene sine for autentisering med ekte navn ved kjøp.

## Konfigurer Passordfri Pålogging

Etter noen minutter ble alle serverne aktivert.

Den første tingen er å redigere den lokale maskinens `~/.ssh/config` Sett et alias for IP og bruk deretter `ssh-copy-id root@c2` for å konfigurere passordfri pålogging.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Du kan endre dette [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) for å fullføre initialiseringskonfigurasjonen raskere.

Etter at den passordfrie konfigurasjonen er fullført, kan du bruke den [pdsh](https://github.com/chaos/pdsh)

Den første er å manuelt aktivere ipv6 og teste

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Deretter oppgraderer du systemet til ubuntu 24 med ett klikk og installer ofte brukt programvare.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 betyr å bytte språk til kinesisk og tidssone til Beijing.

Programvaren som er installert som standard er konfigurert i henhold til mine personlige bruksvaner, for eksempel [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , etc. Hvis det er nødvendig, kan du kopiere [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -lageret og endre det etter behov.

Dette trinnet tar lang tid Etter å ha ventet i en halv time, vil oppgraderingen og installasjonen av ofte brukt programvare være vellykket. Du kan bekrefte det med følgende kommando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Øker Hastigheten På ssh

Nettverket fra Europa til Kina er `ssh` stabilt Det anbefales å bruke [mosh](//mosh.org)

Lag et `c0` -skript i den lokale maskinens `~/.bin` (hovedsakelig lagt til miljøvariabelen `PATH` ) som følger:

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

Etter opprettelsen, gi kjørbare tillatelser og soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

I fremtiden kan du skrive `c0` , `c1` og du kan bruke `mosh` for å koble direkte og gå inn [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konverter Partisjonsformat Fra ext4 Til btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Kan ta diskbilder for enkel sikkerhetskopiering.

Gå først inn i redningssystemet

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Velg Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Vent til serveren starter på nytt

`ssh-keygen -R ip` vil skje når ssh

Kjør deretter følgende skript for å konvertere partisjonen

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skriptet vil automatisk starte systemet på nytt etter at konverteringen er vellykket.

### Se Btrfs-Komprimeringsforhold

Den vil automatisk komprimere som standard Kommandoen for å kontrollere komprimeringsforholdet er som følger:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuell Komprimering

Hvis du er en perfeksjonist, kan du også utføre en full diskkomprimering manuelt. Kommandoen er som følger

```bash
btrfs filesystem defragment -r -czstd /
```

Som vist i figuren nedenfor, kan du se at etter manuell komprimering i det nye systemet ble nesten 100MB mer komprimert.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Lag en Btrfs Snapshot Backup Med snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) er den beste partneren for Btrfs backup.

Initialiseringsskriptet vil opprette `~/ubuntu` , bare kjør følgende kommando:

```
~/ubuntu/snapper/init.sh
```

Vi sees i manusinnholdet [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Bruk `snapper list-configs` for å se undervolumene som øyeblikksbilder er satt for.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Bruk `snapper -c mnt list` for å se et øyeblikksbilde av et undervolum

`/etc/snapper/configs/mnt` Du kan se de spesifikke sikkerhetskopieringsinnstillingene for dette undervolumet

Flere referanser:

[Spill enkelt med snapshot-funksjonen til Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Øyeblikksbilde

contabo Gir server snapshot-funksjon, men støtter ikke planlagte øyeblikksbilder. Jeg skrev et [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) for å ta daglige øyeblikksbilder.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

For å gjenopprette et server øyeblikksbilde, klikk først Crontol i administrasjonsmenyen

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Klikk deretter på Snapshots for å gjenopprette.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Granulariteten til dette øyeblikksbildet er imidlertid for stor. Når den er gjenopprettet, vil de nylig tilførte dataene gå fullstendig tapt, så bruk dem med forsiktighet.

Det er vanligvis mer praktisk å bruke btrfs-øyeblikksbilder.

## Detaljer Om Redningssystem

Gå inn i 22 Etter at porten er [tcping](https://github.com/paradiseduo/tcping) tilgjengelig, vil du ikke kunne få tilgang til den med det angitte passordet på 2-3 minutter. Bare vent et øyeblikk.

```
tcping ip 22 -c 9999
```

Havnetilgjengelighet kan overvåkes.

### Slik Får Du Tilgang Til Harddisken Etter &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Du kan for eksempel se øyeblikksbildet

```
snapper -c etc list
```

Se endringer i øyeblikksbildefilen

```
snapper -c etc status 5..6
```

Se spesifikk diff-tekst

```
snapper -c etc diff 3..5
```

Gjenopprett øyeblikksbilde: Angre for eksempel alle endringer etter øyeblikksbilde 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktiver Loggoppholdenhet

Aktivering av loggvedvarenhet under et redningssystem krever at du manuelt oppretter den tilsvarende katalogen og utfører noen ekstra trinn, fordi du kanskje ikke har en systemd-tjeneste som kjører. Her er trinnene du kan prøve:

Først chroot, da

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Start på nytt i Ubuntu-systemet: Etter å ha gjort endringene ovenfor, må du starte maskinen på nytt normalt og inn i Ubuntu-systemet i stedet for redningssystemet.

På denne måten vil systemd-journald starte med den nye konfigurasjonen og begynne å lagre logger vedvarende på harddisken.

Husk at operasjonene ovenfor utføres på et redningssystem, så disse endringene vil først tre i kraft når systemet er startet på nytt og ikke lenger er i redningsmodus.

Dette betyr at du ikke umiddelbart vil se at noen endringer i eksisterende logger blir vedvarende, men alle logger som genereres etter dette vil bli bevart.

På denne måten kan du se loggene til ssh-tjenesten

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notater Om Vanskelige Og Kompliserte Sykdommer

### Løs Det Rare Problemet: Serveren Kan Ikke ssh

Jeg brukte github action for å lage et automatisk kompilerings- og distribusjonsskript før, men fant ut at distribusjonstjenesten ikke kunne være ssh.

Å gå inn i redningssystemet og se på loggene er et tillatelsesproblem:

`Missing privilege separation directory: /run/sshd`

Du kan opprette denne katalogen med følgende kommando

```
chown root:root /
systemd-tmpfiles --create
```

Etter gjentatte undersøkelser er `1001` github action brukeren som lastet opp tar `uid`

tar Utpakking må gjøres uten parametere `--no-same-owner` den vil bli dekomprimert til `uid` for `1001` bruker

Som et resultat vil rsync endre brukergruppen til rotkatalogen, og du vil ikke kunne logge på ssh etter omstart.

Endre dekompresjonsskriptet som følger:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

