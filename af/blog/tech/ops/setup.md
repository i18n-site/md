# Inisialiseer Die Bediener (Gebruik BTRFS Partisie, Snapper Geskeduleerde Momentopname)

## contabo Aankoop Bediener

contabo is 'n goedkoop VPS-verskaffer in Duitsland met 'n lang geskiedenis (meer as 20 jaar) en baie gebruikers (meer as 200 000), so jy hoef nie bekommerd te wees om weg te hardloop nie.

VPS jy koop [contabo.com](//contabo.com) onthou om Euro-pryse te kies, wat goedkoper is.

![](https://i-01.eu.org/1718285782.avif)

Daar is 'n eenmalige installasiefooi vir contabo.
Daar is egter 'n paar dae elke maand waar die installasiefooi gratis is Registreer net en let op die promosie-e-posse.

Benewens die gratis areafooi in Europa, het ander streke verskillende vlakke van prysstygings.

Ek het in elk geval 'n Europese bediener gekies, nadat ek cloudflare gebruik het, is daar nie veel verskil tussen die bedieners nie.

Die finale konfigurasie is soos volg, 16 GB geheue, 6CPU, 200 GB NVMe, 9,50 euro per maand, gelykstaande aan 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Hierdie prys is byna een-tiende van die prys van Alibaba Cloud en Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Ek het [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) gebruik om die prestasie en parameters uit te voer:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Wys CPU Model `AMD EPYC 9224 24-Core Processor` , enkelkern-prestasietelling 1285
, multi-kern telling 4277 Sien meer resultate [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ek het drie bedieners op een slag gekoop en hulle gelyktydig geaktiveer. Dit verseker dat die bedieners in dieselfde rekenaarkamer is, wat dit makliker maak om hoë beskikbaarheid in die toekoms te bou.

Sy bedieners hang af en toe op, wat die toeganklikheid van die webwerf verseker deur hoë beskikbaarheid.

Nuwe gebruikers moet hul ID-kaarte indien vir regte-naam-verifikasie wanneer hulle koop.

## Stel Wagwoordvrye Aanmelding Op

Na 'n paar minute is die bedieners almal geaktiveer.

Die eerste ding IP om die plaaslike masjien se `~/.ssh/config` te wysig om 'n alias te stel, en dan `ssh-copy-id root@c2` te gebruik om wagwoordvrye aanmelding op te stel.

![](https://i-01.eu.org/1718287198.avif)

Jy kan hierdie [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) wysig om die inisialiseringkonfigurasie vinniger te voltooi.

Nadat die wagwoordvrye konfigurasie voltooi is, kan jy dit gebruik [pdsh](https://github.com/chaos/pdsh) Dit kan in bondels bedryf word, wat gerieflik is.

Die eerste is om ipv6 handmatig te aktiveer en te toets

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Gradeer dan die stelsel op na ubuntu 24 met een klik en installeer algemeen gebruikte sagteware.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 beteken om taal na Chinees en tydsone na Beijing oor te skakel.

Die sagteware wat by verstek geïnstalleer is, is gekonfigureer volgens my persoonlike gebruiksgewoontes, soos [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , ens. Indien nodig, kan jy die [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) pakhuis kopieer en dit verander soos nodig!

Hierdie stap neem 'n lang tyd Nadat 'n halfuur gewag is, sal die opgradering en installering van algemeen gebruikte sagteware suksesvol wees. U kan dit bevestig met die volgende opdrag:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Versnel ssh

Die netwerk van Europa na China is nie stabiel nie. Dit word aanbeveel om `ssh` te gebruik [mosh](//mosh.org)

Skep `c0` skrifte in die plaaslike gids `~/.bin` (hoofsaaklik by omgewingsveranderlike `PATH` gevoeg) soos volg:

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

Na die skepping, gee uitvoerbare toestemmings en sagteskakel `c1` en `c2` toe.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In die toekoms kan jy direk `c0` en `c1` invoer om `mosh` hoëspoed direkte verbinding te gebruik en in te voer [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Skakel Partisie Formaat Van ext4 Na btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Kan skyffoto's neem vir maklike rugsteun.

Voer eers die reddingstelsel in

![](https://i-01.eu.org/1718300448.avif)

Kies Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Wag vir die bediener om te herbegin

ssh Daar sal vingerafdrukveranderinge wees, gebruik `ssh-keygen -R ip` om dit skoon te maak

Voer dan die volgende skrip uit om die partisie om te skakel

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Die skrip sal die stelsel outomaties herbegin nadat die omskakeling suksesvol is.

### Bekyk Btrfs-Kompressieverhouding

Dit sal outomaties saamgepers word. Die opdrag om die kompressieverhouding na te gaan is soos volg:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Handmatige Kompressie

As jy 'n perfeksionis is, kan jy ook 'n volledige skyfkompressie met die hand uitvoer. Die opdrag is soos volg:

```bash
btrfs filesystem defragment -r -czstd /
```

Soos in die figuur hieronder getoon, kan u sien dat na handmatige kompressie in die nuwe stelsel, byna 100 MB meer saamgepers is.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Skep 'n Btrfs Momentopname Rugsteun Met snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) is die beste vennoot vir Btrfs rugsteun.

Die inisialiseringskrip sal die `~/ubuntu` gids skep, voer net die volgende opdrag uit:

```
~/ubuntu/snapper/init.sh
```

Sien jou in die teks inhoud [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Gebruik `snapper list-configs` om die subvolumes te sien waarvoor kiekies gestel is.

![](https://i-01.eu.org/1718302689.avif)

Gebruik `snapper -c mnt list` om 'n momentopname van 'n subvolume te sien

`/etc/snapper/configs/mnt` kan die spesifieke rugsteuninstellings van hierdie subvolume sien

Meer verwysings:

[Speel maklik met die momentopname-funksie van Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Bediener Momentopname

contabo Verskaf bediener momentopname funksie, maar ondersteun nie geskeduleerde foto's nie. Ek het 'n [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) geskryf om daaglikse foto's te neem.

![](https://i-01.eu.org/1718304206.avif)

Om 'n bedienerfoto te herstel, klik eers op Crontol in die bestuurskieslys

![](https://i-01.eu.org/1718304275.avif)

Klik dan op Snapshots om te herstel.

![](https://i-01.eu.org/1718304063.avif)

Die korreligheid van hierdie momentopname is egter te groot Sodra dit herstel is, sal die nuut bygevoegde data heeltemal verlore wees, so gebruik dit asseblief met omsigtigheid.

Dit is gewoonlik geriefliker om btrfs-kiekies te gebruik.

## Reddingstelsel Besonderhede

Voer die reddingstelsel 22 Nadat die poort [tcping](https://github.com/paradiseduo/tcping) toeganklik is, sal jy vir 2-3 minute nie toegang daartoe kan kry nie, en dit sal goed wees.

```
tcping ip 22 -c 9999
```

Hawetoeganklikheid kan gemonitor word.

### Hoe Om Toegang Tot Die Hardeskyf Te Kry Nadat U Redding Betree &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Jy kan byvoorbeeld die momentopname bekyk

```
snapper -c etc list
```

Bekyk momentopname lêer veranderinge

```
snapper -c etc status 5..6
```

Bekyk spesifieke verskilteks

```
snapper -c etc diff 3..5
```

Herstel momentopname: Ontdoen byvoorbeeld alle veranderinge na momentopname 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktiveer Log-Volharding

Om log-volharding onder 'n reddingstelsel te aktiveer, vereis dat jy die ooreenstemmende gids met die hand skep en 'n paar bykomende stappe moet uitvoer, omdat jy dalk nie 'n lopende stelseldiens het nie. Hier is stappe wat jy kan probeer:

Eers chroot, toe

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Herlaai in jou Ubuntu-stelsel: Nadat jy die bogenoemde veranderinge aangebring het, moet jy jou masjien normaalweg en in jou Ubuntu-stelsel herlaai in plaas van die reddingstelsel.

Op hierdie manier sal systemd-journald met die nuwe konfigurasie begin en logs aanhoudend op die hardeskyf begin stoor.

Hou in gedagte dat die bogenoemde bewerkings op 'n reddingstelsel uitgevoer word, so daardie veranderinge sal nie in werking tree totdat die stelsel herlaai is en nie meer in reddingsmodus is nie.

Dit beteken dat jy nie onmiddellik enige veranderinge aan bestaande logs sal sien wat aanhoudend word nie, maar alle logs wat daarna gegenereer word, sal volgehou word.

Op hierdie manier kan u die logs van die ssh-diens sien

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notas Oor Moeilike en Ingewikkelde Siektes

### Los Die Vreemde Probleem Op: Die Bediener Kan Nie ssh Nie

Ek het voorheen github-aksie gebruik om 'n outomatiese samestelling en ontplooiingskrip te maak, maar het gevind dat die ontplooiingsdiens nie ssh kon wees nie.

Om die reddingstelsel te betree en na die logs te kyk, is 'n toestemmingskwessie:

`Missing privilege separation directory: /run/sshd`

Jy kan hierdie gids skep met die volgende opdrag

```
chown root:root /
systemd-tmpfiles --create
```

Na herhaalde ondersoeke is dit github action gebruiker `uid` van tar `1001` is

tar Uitpak moet wees as daar geen parameter `--no-same-owner` is nie, dit sal gedekomprimeer word tot `uid` vir `1001` gebruikers

As gevolg hiervan, sal rsync die gebruikersgroep van die wortelgids verander, en dan sal jy nie by ssh kan aanmeld nadat jy herbegin het nie.

Verander die dekompressieskrip soos volg:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```