# Initialiser Serveren (Bruk BTRFS-partisjon, Snapper planlagte øyeblikksbilder)

## contabo kjøp server

contabo er en billig VPS-leverandør i Tyskland med en lang historie (over 20 år) og mange brukere (over 200 000), så det er ingen grunn til å bekymre seg for å stikke av.

Ved å kjøpe VPS fra [contabo.com](//contabo.com), husk å velge euro-priser, som er mer økonomiske.

![](https://i-01.eu.org/1718285782.avif)

contabo har et engangsinstallasjonsgebyr.
Det er likevel noen dager hver måned hvor installasjonsgebyret er gratis. bare registrer deg og hold øye med markedsførings-e-postene.

Besides gratisområdet i Europa, har andre regioner forskjellige prisøkninger.

Jeg valgte en europeisk server. Uansett, etter å ha konfigurert Cloudflare, er det ingen stor forskjell mellom serverne.

Den endelige konfigurasjonen er som følger: 16 GB minne, 6 CPU, 200 GB NVMe, 9,50 euro per måned, tilsvarende 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Denne prisen er nesten en tiendedel av prisen på Alibaba Cloud og Amazon**.

![](https://i-01.eu.org/1718356956.avif)

Jeg brukte [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) til å teste ytelsen og parameterne:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU-modell `AMD EPYC 9224 24-Core Processor`, enkeltkjernes ytelsesscore 1285
, multi-core score 4277. Se flere resultater på [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Jeg kjøpte tre servere på en gang og aktiverte dem samtidig. Dette sikrer at serverne er i samme datacenter, noe som gjør det enklere å bygge høy tilgjengelighet i fremtiden.

Serverne kan av og til gå ned, men høy tilgjengelighet sikrer nettsidens tilgjengelighet.

Nye brukere må sende inn ID-kortet for ekte navnsautentisering ved kjøp.

## Konfigurer passordfri pålogging

Etter noen minutter ble alle serverne aktiveret

Først redigerer du den lokale maskinens `~/.ssh/config` for å sette et alias, og deretter bruker du `ssh-copy-id root@c2` for å konfigurere passordfri pålogging.

![](https://i-01.eu.org/1718287198.avif)

Du kan tilpasse dette [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) for å fullføre initialiseringskonfigurasjonen raskere.

Etter at passordfrie konfigurasjonen er fullført, kan du bruke [pdsh](https://github.com/chaos/pdsh) for å utføre batch-operasjoner, noe som er praktisk.

Først manuelt aktivere ipv6 og teste

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Dernest oppgradere systemet til ubuntu 24 med ett klikk og installere vanlige programvare.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 betyr å bytte språk til kinesisk og tidssone til Beijing.

Standardinstallasjonen av programvare er konfigurert i henhold til mine personlige bruksvaner, for eksempel [mise](https://github.com/jdx/mise), [direnv](https://direnv.net/) osv. Hvis nødvendig, kan du kopiere [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -lageret og endre det etter behov.

Dette trinnet tar ganske lang tid. Etter å ha ventet i en halv time, vil oppgraderingen og installasjonen av vanlige programvare være vellykket. Du kan bekrefte dette med følgende kommando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh forbedrer ssh-hastigheten

Nettverket fra Europa til Kina er ikke stabilt `ssh` Det anbefales å bruke [mosh](//mosh.org)

Lag `c0`-skript i den lokale katalogen `~/.bin` (hovedsakelig lagt til miljøvariabelen `PATH`), som følger:

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

Etter opprettelsen, gi skriptet kjørbare rettigheter og opprett soft-links `c1` og `c2`.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

I fremtiden kan du skrive inn `c0` og `c1` direkte for å bruke `mosh` for høyhastighets direkte tilkobling og komme inn i [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html).

## Konverter partisjonsformat fra ext4 til btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) kan ta diskøyeblikksbilder for enkel sikkerhetskopiering.

Først gå inn i redningssystemet

![](https://i-01.eu.org/1718300448.avif)

Velg Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Vent til serveren starter på nytt

Ved å ssh vil det oppstå endringer i fingeravtrykk, bruk `ssh-keygen -R ip` for å rydde opp

Kjør deretter følgende skript for å konvertere partisjonen

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skriptet vil automatisk starte systemet på nytt etter at konverteringen er vellykket.

### Sjekk btrfs-komprimeringsforhold

Det vil automatisk komprimere som standard. Kommandoen for å sjekke komprimeringsforholdet er som følger:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuell komprimering

Hvis du er en perfektionist, kan du også utføre en full diskkomprimering manuelt. Kommandoen er som følger:

```bash
btrfs filesystem defragment -r -czstd /
```

Som vist i figuren nedenfor, kan du se at etter manuell komprimering i det nye systemet ble nesten 100 MB mer komprimert.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Lag en Btrfs-øyeblikksbilde-sikkerhetskopiering med snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) er den beste partneren for Btrfs-sikkerhetskopiering.

Initialiseringsskriptet vil lage `~/ubuntu`-katalogen, kjør bare følgende kommando:

```
~/ubuntu/snapper/init.sh
```

Skriftinnholdet finnes i [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Bruk `snapper list-configs` for å se underkatalogene som øyeblikksbilder er satt for

![](https://i-01.eu.org/1718302689.avif)

Bruk `snapper -c mnt list` for å se øyeblikksbildene til et underkatalog

`/etc/snapper/configs/mnt` kan se de spesifikke sikkerhetskopieringsinnstillingene for dette underkataloget

Flere referanser:

[Spill enkelt med snapshot-funksjonen til Btrfs med snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo serverøyeblikksbilder

contabo tilbyr serverøyeblikksbilder, men støtter ikke planlagte øyeblikksbilder. Jeg har skrevet et [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) for å ta daglige øyeblikksbilder.

![](https://i-01.eu.org/1718304206.avif)

For å gjenopprette et serverøyeblikksbilde, klikk først på "Crontol" i administrasjonsmenyen

![](https://i-01.eu.org/1718304275.avif)

Klikk deretter på "Snapshots" for å gjenopprette.

![](https://i-01.eu.org/1718304063.avif)

Den granulariteten til dette øyeblikksbildet er imidlertid for stor. Når det gjenopprettes, vil de nylig tilførte dataene gå fullstendig tapt, så bruk det med forsiktighet.

Det er vanligvis mer praktisk å bruke btrfs-øyeblikksbilder.

## Detaljer om redningssystem

Gå inn i redningssystemet. Når porten 22 er [tcping](https://github.com/paradiseduo/tcping) tilgjengelig, vil du ikke kunne få tilgang til den med det angitte passordet i 2-3 minutter. Vent et øyeblikk.

```
tcping ip 22 -c 9999
```

Tilgang til nettverket kan overvåkes.

### Slik får du tilgang til harddisken og gjenoppretter øyeblikksbilder

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

Sjekk endringer i øyeblikksbildet

```
snapper -c etc status 5..6
```

Sjekk spesifikk diff-tekst

```
snapper -c etc diff 3..5
```

Gjenoprett øyeblikksbilde: Angre for eksempel alle endringer etter øyeblikksbilde 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktiver Loggoppholdenhet

Å aktivere loggvedvarende enhet i redningssystemet krever at du manuelt oppretter den tilsvarende katalogen og utfører noen ekstra trinn, fordi du kanskje ikke har en systemd-tjeneste som kjører. Her er trinnene du kan prøve:

Først chroot, deretter

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Start på nytt i Ubuntu-systemet: Etter å ha gjort endringene ovenfor, må du starte maskinen på nytt normalt og gå inn i Ubuntu-systemet i stedet for redningssystemet.

På denne måten vil systemd-journald starte med den nye konfigurasjonen og begynne å lagre logger vedvarende på harddisken.

Husk at operasjonene ovenfor utføres på et redningssystem, så disse endringene vil ikke tre i kraft før systemet startes på nytt og ikke lenger er i redningsmodus.

Dette betyr at du ikke umiddelbart vil se noen endringer i eksisterende logger som blir vedvarende, men alle logger som genereres etter det vil bli bevart.

På denne måten kan du se loggene til ssh-tjenesten

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notater om vanskelige og komplekse problemer

### Løs det rare problemet: Serveren kan ikke ssh

Jeg brukte github action for å lage et automatisk kompilerings- og distribusjonsskript før, men fant ut at distribusjonstjenesten ikke kunne være ssh.

Å gå inn i redningssystemet og se på loggene viser at det er et tillatelsesproblem:

`Missing privilege separation directory: /run/sshd`

Du kan opprette denne katalogen med følgende kommando

```
chown root:root /
systemd-tmpfiles --create
```

Etter gjentatte undersøkelser er det github action bruker `uid` av tar som er `1001`

tar-pakking må være uten parameteren `--no-same-owner`, ellers vil den dekomprimeres til `uid` for `1001`-brukere

Som et resultat vil rsync endre brukergruppen til rotkatalogen, og du vil ikke kunne logge på ssh etter omstart.

Rediger dekompresjonsskriptet som følger:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```