# Initiera Servern (Använd BTRFS-Partition, Snapper Schemalagd Ögonblicksbild)

## contabo Köpserver

contabo är en billig VPS-leverantör i Tyskland med en lång historia (mer än 20 år) och många användare (mer än 200 000), så det finns ingen anledning att oroa sig för att fly.

VPS du köper [contabo.com](//contabo.com) kom ihåg att välja Euro-prissättning, som är billigare.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Det tillkommer en engångsinstallationsavgift för contabo.
Det finns dock några dagar varje månad där installationsavgiften är gratis. Registrera dig och var uppmärksam på reklammejlen.

Utöver den fria områdesavgiften i Europa har andra regioner olika nivåer av prisökningar.

Jag valde en europeisk server Hur som helst, efter att ha använt cloudflare, är det inte mycket skillnad mellan servrarna.

Den slutliga konfigurationen är som följer, 16 GB minne, 6CPU, 200 GB NVMe, 9,50 euro i månaden, motsvarande 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Detta pris är nästan en tiondel av priset för Alibaba Cloud och Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Jag [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) för att köra prestanda och parametrar:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Display CPU Model `AMD EPYC 9224 24-Core Processor` prestandapoäng med en kärna 1285
, flerkärnig poäng 4277 Se fler resultat [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Jag köpte tre servrar på en gång och aktiverade dem samtidigt. Detta säkerställer att servrarna är i samma datorrum, vilket gör det lättare att bygga hög tillgänglighet i framtiden.

Dess servrar lägger sig då och då, vilket säkerställer webbplatstillgänglighet genom hög tillgänglighet.

Nya användare måste skicka in sina ID-kort för autentisering med riktiga namn vid köp.

## Konfigurera Lösenordsfri Inloggning

Efter några minuter var alla servrar aktiverade.

Det första är att redigera den lokala maskinens `~/.ssh/config` Ställ in ett alias för IP och använd sedan `ssh-copy-id root@c2` för att konfigurera lösenordsfri inloggning.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Du kan ändra det här [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) för att slutföra initialiseringskonfigurationen snabbare.

När den lösenordsfria konfigurationen är klar kan du använda den [pdsh](https://github.com/chaos/pdsh)

Den första är att manuellt aktivera ipv6 och testa

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Uppgradera sedan systemet till ubuntu 24 med ett klick och installera vanlig programvara.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 betyder att byta språk till kinesiska och tidszon till Peking.

Mjukvaran som är installerad som standard är konfigurerad enligt mina personliga användningsvanor, såsom [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , etc. Vid behov kan du kopiera [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -lagret och ändra det efter behov.

Det här steget tar lång tid Efter att ha väntat i en halvtimme kommer uppgraderingen och installationen av vanlig programvara att lyckas. Du kan bekräfta det med följande kommando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Snabbar Upp ssh

Nätverket från Europa till Kina `ssh` inte stabilt Det rekommenderas att använda [mosh](//mosh.org)

Skapa ett `c0` -skript i den lokala maskinens `~/.bin` (huvudsakligen lagt till miljövariabeln `PATH` ) enligt följande:

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

Efter skapande, bevilja körbara behörigheter och mjuklänk `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

I framtiden kan du direkt `c0` , `c1` och du kan använda `mosh` höghastighetsanslutning och ange [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvertera Partitionsformat Från ext4 Till btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Kan ta ögonblicksbilder på disken för enkel säkerhetskopiering.

Gå först in i räddningssystemet

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Välj Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Vänta tills servern startar om

Fingeravtrycksförändringar kommer `ssh-keygen -R ip` ske när ssh

Kör sedan följande skript för att konvertera partitionen

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skriptet kommer automatiskt att starta om systemet efter att konverteringen har lyckats.

### Visa btrfs Komprimeringsförhållande

Det kommer automatiskt att komprimera som standard Kommandot för att kontrollera komprimeringsförhållandet är som följer:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuell Komprimering

Om du är en perfektionist kan du också utföra en fullständig diskkomprimering manuellt. Kommandot är som följer

```bash
btrfs filesystem defragment -r -czstd /
```

Som visas i figuren nedan kan du se att efter manuell komprimering i det nya systemet komprimerades nästan 100MB mer.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Skapa en Btrfs Ögonblicksbild Backup Med snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) är den bästa partnern för Btrfs backup.

Initialiseringsskriptet skapar `~/ubuntu` , kör bara följande kommando:

```
~/ubuntu/snapper/init.sh
```

Vi ses i manusinnehållet [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Använd `snapper list-configs` för att se undervolymerna för vilka ögonblicksbilder är inställda.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Använd `snapper -c mnt list` för att se en ögonblicksbild av en undervolym

`/etc/snapper/configs/mnt` Du kan se de specifika säkerhetskopieringsinställningarna för denna undervolym

Fler referenser:

[Spela enkelt med snapshot-funktionen för Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Ögonblicksbild Av contabo Server

contabo Tillhandahåller serversnapshot-funktion, men stöder inte schemalagda ögonblicksbilder. Jag skrev ett [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) för att ta dagliga ögonblicksbilder.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

För att återställa en ögonblicksbild av servern, klicka först på Crontol i hanteringsmenyn

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Klicka sedan på Snapshots för att återställa.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Den här ögonblicksbildens granularitet är dock för stor. När den har återställts kommer den nyligen tillagda informationen att gå förlorad, så använd den med försiktighet.

Det är vanligtvis bekvämare att använda btrfs ögonblicksbilder.

## Information Om Räddningssystemet

Gå in i räddningssystemet Efter 22 porten är [tcping](https://github.com/paradiseduo/tcping) tillgänglig, kommer du inte att kunna komma åt den med det inställda lösenordet på 2-3 minuter.

```
tcping ip 22 -c 9999
```

Hamntillgängligheten kan övervakas.

### Hur Man Kommer Åt Hårddisken Efter Att Ha Gått in I &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Du kan till exempel se ögonblicksbilden

```
snapper -c etc list
```

Visa ändringar i ögonblicksbildfilen

```
snapper -c etc status 5..6
```

Visa specifik diff-text

```
snapper -c etc diff 3..5
```

Återställ ögonblicksbild: Till exempel, ångra alla ändringar efter ögonblicksbild 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktivera Loggbeständighet

Aktivering av loggbeständighet under ett räddningssystem kräver att du manuellt skapar motsvarande katalog och utför några ytterligare steg, eftersom du kanske inte har en systemd-tjänst som körs. Här är steg du kan prova:

Först chroot alltså

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Starta om i ditt Ubuntu-system: När du har gjort ändringarna ovan måste du starta om din maskin normalt och in i ditt Ubuntu-system istället för räddningssystemet.

På detta sätt kommer systemd-journald att börja med den nya konfigurationen och börja lagra loggar konstant på hårddisken.

Tänk på att ovanstående operationer utförs på ett räddningssystem, så dessa ändringar kommer bara att träda i kraft när systemet har startat om och inte längre är i räddningsläge.

Det betyder att du inte omedelbart kommer att se några ändringar i befintliga loggar bli bestående, men alla loggar som genereras efter detta kommer att bevaras.

På så sätt kan du se loggarna för ssh-tjänsten

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Anteckningar Om Svåra Och Komplicerade Sjukdomar

### Lös Det Konstiga Problemet: Servern Kan Inte ssh

Jag använde github action för att göra ett automatiskt kompilerings- och distributionsskript tidigare, men upptäckte att distributionstjänsten inte kunde vara ssh.

Att gå in i räddningssystemet och titta på loggarna är ett behörighetsproblem:

`Missing privilege separation directory: /run/sshd`

Du kan skapa den här katalogen med följande kommando

```
chown root:root /
systemd-tmpfiles --create
```

Efter upprepade undersökningar beror det på github action användaren som laddade upp tar är `1001` `uid`

tar Uppackning måste göras utan parametrar `--no-same-owner` den kommer att dekomprimeras till `uid` för `1001` användare

Som ett resultat kommer rsync att ändra användargruppen för rotkatalogen, och sedan kommer du inte att kunna logga in på ssh efter omstart.

Ändra dekompressionsskriptet enligt följande:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

