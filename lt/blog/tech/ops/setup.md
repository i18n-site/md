# Inicijuoti Serverį (Naudokite BTRFS Skaidinį, Snapper Suplanuotą Momentinę Nuotrauką)

## contabo Pirkimo Serveris

contabo yra pigus VPS tiekėjas Vokietijoje, turintis ilgą istoriją (daugiau nei 20 metų) ir daug vartotojų (daugiau nei 200 000), todėl nereikia jaudintis dėl pabėgimo.

VPS [contabo.com](//contabo.com) nepamirškite pasirinkti euro kainos, kuri yra pigesnė.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

„Contabo“ yra vienkartinis diegimo mokestis.
Tačiau kiekvieną mėnesį yra keletas dienų, kai diegimo mokestis yra nemokamas. Tiesiog užsiregistruokite ir atkreipkite dėmesį į reklaminius el.

Be nemokamo ploto mokesčio Europoje, kituose regionuose kainos kyla skirtingai.

Pasirinkau europietišką serverį šiaip naudojant cloudflare tarp serverių nėra didelio skirtumo.

Galutinė konfigūracija yra tokia: 16 GB atminties, 6 procesorius, 200 GB NVMe, 9,50 euro per mėnesį, tai atitinka 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Ši kaina yra beveik dešimtoji „Alibaba Cloud“ ir „Amazon“ kainos** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Aš [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) našumui ir parametrams paleisti:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Rodyti modelis CPU `AMD EPYC 9224 24-Core Processor` vieno branduolio našumo balas 1285
, kelių branduolių rezultatas 4277 Žiūrėti daugiau rezultatų [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Vienu metu nusipirkau tris serverius ir aktyvavau juos vienu metu. Tai užtikrina, kad serveriai bus tame pačiame kompiuterių kambaryje, todėl ateityje bus lengviau sukurti aukštą pasiekiamumą.

Jo serveriai retkarčiais nutraukia ragelį, užtikrindami svetainės prieinamumą dėl didelio pasiekiamumo.

Nauji vartotojai pirkdami turi pateikti savo asmens tapatybės korteles, kad būtų galima autentifikuoti tikrąjį vardą.

## Konfigūruokite Prisijungimą Be Slaptažodžio

Po kelių minučių visi serveriai buvo aktyvuoti.

Pirmiausia reikia redaguoti vietinio kompiuterio `~/.ssh/config` IP o tada naudoti `ssh-copy-id root@c2` , kad sukonfigūruotumėte prisijungimą be slaptažodžio.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Galite modifikuoti šį [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) , kad greičiau užbaigtumėte inicijavimo konfigūraciją.

Kai konfigūracija be slaptažodžio bus baigta, galėsite ją naudoti [pdsh](https://github.com/chaos/pdsh) Tai patogu.

Pirmasis yra rankiniu būdu įjungti ipv6 ir išbandyti

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Tada vienu spustelėjimu atnaujinkite sistemą į ubuntu 24 ir įdiekite dažniausiai naudojamą programinę įrangą.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 reiškia kalbos perjungimą į kinų kalbą ir laiko juostą į Pekiną.

Pagal numatytuosius nustatymus įdiegta programinė įranga yra sukonfigūruota pagal mano asmeninius naudojimo įpročius, pvz [mise](https://github.com/jdx/mise) , , [direnv](https://direnv.net/) ir tt Jei reikia, galite nukopijuoti [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) sandėlį ir jį modifikuoti pagal poreikį.

Šis veiksmas užtrunka ilgai Laukus pusvalandį, dažniausiai naudojamos programinės įrangos atnaujinimas ir įdiegimas bus sėkmingas. Tai galite patvirtinti naudodami šią komandą:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Pagreitina ssh

Tinklas iš Europos į `ssh` nėra stabilus [mosh](//mosh.org)

Sukurkite `c0` scenarijų vietinio kompiuterio `~/.bin` (daugiausia įtrauktame į aplinkos kintamąjį `PATH` ) taip:

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

Sukūrę suteikite vykdomuosius leidimus ir minkštąją nuorodą `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Ateityje galite tiesiogiai įvesti `c0` `c1` ir naudoti `mosh` , kad prisijungtumėte tiesiogiai ir įvestumėte [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvertuoti Skaidinio Formatą Iš ext4 Į btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) daryti disko momentines kopijas, kad būtų lengva kurti atsargines kopijas.

Pirmiausia įeikite į gelbėjimo sistemą

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Pasirinkite Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Palaukite, kol serveris bus paleistas iš naujo

Pirštų atspaudai pasikeis, kai ssh naudokite `ssh-keygen -R ip`

Tada paleiskite šį scenarijų, kad konvertuotumėte skaidinį

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Po sėkmingo konvertavimo scenarijus automatiškai paleis sistemą iš naujo.

### Peržiūrėkite btrfs Glaudinimo Koeficientą

Pagal numatytuosius nustatymus jis bus automatiškai suspaustas. Suspaudimo laipsnio patikrinimo komanda yra tokia:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Rankinis Suspaudimas

Jei esate perfekcionistas, visą disko suspaudimą galite atlikti ir rankiniu būdu. Komanda yra tokia

```bash
btrfs filesystem defragment -r -czstd /
```

Kaip parodyta paveikslėlyje žemiau, matote, kad po rankinio suspaudimo naujojoje sistemoje buvo suspausta dar beveik 100 MB.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Sukurkite Btrfs Momentinės Kopijos Atsarginę Kopiją Naudodami „Snapper“.

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) geriausias Btrfs atsarginės kopijos partneris.

Inicijavimo scenarijus sukurs `~/ubuntu` , tiesiog paleiskite šią komandą:

```
~/ubuntu/snapper/init.sh
```

Iki pasimatymo scenarijaus turinyje [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Naudodami `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Naudokite `snapper -c mnt list`

`/etc/snapper/configs/mnt` peržiūrėti konkrečius šio potomo atsarginės kopijos nustatymus

Daugiau nuorodų:

[Lengvai žaiskite su momentinės nuotraukos funkcija Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Serverio Momentinė Nuotrauka

Teikia serverio momentinių nuotraukų funkciją, bet [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) suplanuotų contabo nuotraukų.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Norėdami atkurti momentinę serverio nuotrauką, valdymo meniu pirmiausia spustelėkite Crontol

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Tada spustelėkite momentiniai vaizdai, kad atkurtumėte.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Tačiau šios momentinės nuotraukos detalumas yra per didelis. Atkūrus naujai pridėti duomenys bus visiškai prarasti, todėl naudokite juos atsargiai.

Paprastai patogiau naudoti btrfs momentines nuotraukas.

## Išsami Informacija Apie Gelbėjimo Sistemą

Įeikite į gelbėjimo sistemą 22 Kai prievadas bus [tcping](https://github.com/paradiseduo/tcping) pasiekiamas, jūs negalėsite jo pasiekti naudodami nustatytą slaptažodį 2-3 minutes. Tiesiog palaukite ir viskas bus gerai.

```
tcping ip 22 -c 9999
```

Galima stebėti uosto pasiekiamumą.

### Kaip Pasiekti Standųjį Diską Įvedus Gelbėjimo & Atkurti Momentinę Nuotrauką

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Pavyzdžiui, galite peržiūrėti momentinę nuotrauką

```
snapper -c etc list
```

Peržiūrėkite momentinio vaizdo failo pakeitimus

```
snapper -c etc status 5..6
```

Peržiūrėkite konkretų skirtingą tekstą

```
snapper -c etc diff 3..5
```

Atkurti momentinę nuotrauką: pavyzdžiui, anuliuokite visus pakeitimus po 5 momentinės nuotraukos

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Įgalinti Žurnalo Pastovumą

Norint įjungti žurnalo išlikimą gelbėjimo sistemoje, reikia rankiniu būdu sukurti atitinkamą katalogą ir atlikti kai kuriuos papildomus veiksmus, nes gali neveikti sistemos paslauga. Štai žingsniai, kuriuos galite išbandyti:

Pirmiausia chroot, tada

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Perkraukite Ubuntu sistemą: atlikę aukščiau nurodytus pakeitimus, turite iš naujo paleisti kompiuterį įprastu būdu ir į Ubuntu sistemą, o ne į gelbėjimo sistemą.

Tokiu būdu systemd-journald pradės nuo naujos konfigūracijos ir pradės nuolat saugoti žurnalus standžiajame diske.

Atminkite, kad aukščiau nurodytos operacijos atliekamos gelbėjimo sistemoje, todėl tie pakeitimai įsigalios tik tada, kai sistema bus paleista iš naujo ir nebebus gelbėjimo režimo.

Tai reiškia, kad iš karto nematysite jokių esamų žurnalų pakeitimų, kurie taps patvarūs, bet visi po to sukurti žurnalai bus išsaugoti.

Tokiu būdu galite peržiūrėti ssh paslaugos žurnalus

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Pastabos Apie Sunkias Ir Sudėtingas Ligas

### Išspręskite Keistą Problemą: Serveris Negali ssh

Anksčiau naudoju „github“ veiksmą, kad sukurčiau automatinį kompiliavimo ir diegimo scenarijų, bet radau, kad diegimo paslauga negali ssh.

Įėjimas į gelbėjimo sistemą ir žurnalų peržiūra yra leidimo problema:

`Missing privilege separation directory: /run/sshd`

Šį katalogą galite sukurti naudodami šią komandą

```
chown root:root /
systemd-tmpfiles --create
```

Po pakartotinių tyrimų taip yra todėl github action kad vartotojas, kuris įkėlė tar `uid` yra `1001` !

tar turi būti atliktas be parametrų `--no-same-owner` jis bus išspaustas į `uid` `1001` vartotojui

Dėl to rsync pakeis šakninio katalogo vartotojų grupę ir po to, kai iš naujo paleisite, negalėsite prisijungti prie ssh.

Pakeiskite išskleidimo scenarijų taip:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

