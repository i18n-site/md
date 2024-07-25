# Inicializirajte Strežnik (Uporabite Particijo BTRFS, Načrtovani Posnetek Snapperja)

## contabo Nakupovalni Strežnik

contabo je poceni ponudnik VPS v Nemčiji z dolgo zgodovino (več kot 20 let) in številnimi uporabniki (več kot 200.000), tako da vam ni treba skrbeti, da bi pobegnili.

VPS nakupu [contabo.com](//contabo.com) ne pozabite izbrati cene v evrih, ki je cenejša.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Za contabo je treba plačati enkratno namestitev.
Vendar pa je vsak mesec nekaj dni, ko je pristojbina za namestitev brezplačna. Samo registrirajte se in bodite pozorni na promocijska e-poštna sporočila.

Poleg pristojbine za brezplačno območje v Evropi imajo druge regije različne stopnje povišanja cen.

Izbral sem evropski strežnik. Kakorkoli, po uporabi cloudflare ni velike razlike med strežniki.

Končna konfiguracija je naslednja, 16 GB pomnilnika, 6 CPU, 200 GB NVMe, 9,50 evra na mesec, kar ustreza 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Ta cena je skoraj ena desetina cene Alibaba Cloud in Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Uporabil sem [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) za zagon zmogljivosti in parametrov:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Zaslon CPU Model `AMD EPYC 9224 24-Core Processor` enojedrna ocena zmogljivosti 1285
, večjedrni rezultat 4277 Oglejte si več rezultatov [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Kupil sem tri strežnike naenkrat in jih aktiviral hkrati. To zagotavlja, da so strežniki v isti računalniški sobi, kar olajša gradnjo visoke razpoložljivosti v prihodnosti.

Njegovi strežniki občasno prekinejo, kar zagotavlja dostopnost spletnega mesta z visoko razpoložljivostjo.

Novi uporabniki morajo ob nakupu predložiti svojo osebno izkaznico za preverjanje pristnosti s pravim imenom.

## Konfigurirajte Prijavo Brez Gesla

Po nekaj minutah so bili vsi strežniki aktivirani.

Prva stvar je, da uredite lokalni računalnik `~/.ssh/config` Nastavite vzdevek za IP in nato uporabite `ssh-copy-id root@c2` za konfiguracijo prijave brez gesla.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Ta [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) lahko spremenite, da hitreje dokončate inicializacijsko konfiguracijo.

Ko je konfiguracija brez gesla končana, jo lahko uporabljate [pdsh](https://github.com/chaos/pdsh)

Prvi je, da ročno omogočite ipv6 in preizkusite

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Nato nadgradite sistem na ubuntu 24 z enim klikom in namestite pogosto uporabljeno programsko opremo.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 pomeni preklop jezika na kitajščino in časovni pas na Peking.

Privzeto nameščena programska oprema je konfigurirana glede na moje osebne navade uporabe, kot so [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) itd. Po potrebi lahko kopirate skladišče [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) in ga po potrebi spremenite.

Ta korak traja dolgo časa. Po pol ure čakanja bo nadgradnja in namestitev pogosto uporabljene programske opreme uspešna. Lahko ga potrdite z naslednjim ukazom:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Pospeši ssh

Omrežje iz Evrope v Kitajsko ni stabilno `ssh` Priporočamo uporabo [mosh](//mosh.org)

Ustvarite skript `c0` v imeniku `~/.bin` (večinoma dodan v spremenljivko okolja `PATH` ) na naslednji način:

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

Po ustvarjanju podelite dovoljenja za izvedljivo datoteko in `c2` povezavo `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

V prihodnje lahko neposredno vnesete `c0` , `c1` in uporabite `mosh` za neposredno povezavo in vnesete [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Pretvorite Format Particije Iz ext4 v btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Lahko posname posnetke diska za preprosto varnostno kopiranje.

Najprej vstopite v reševalni sistem

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Izberite Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Počakajte, da se strežnik znova zažene

Spremembe prstnih odtisov se bodo zgodile ssh ko `ssh-keygen -R ip`

Nato zaženite naslednji skript za pretvorbo particije

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skript bo po uspešni pretvorbi samodejno znova zagnal sistem.

### Oglejte Si Kompresijsko Razmerje btrfs

Ukaz za preverjanje kompresijskega razmerja je privzeto naslednji:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Ročno Stiskanje

Če ste perfekcionist, lahko ročno izvedete tudi popolno stiskanje diska

```bash
btrfs filesystem defragment -r -czstd /
```

Kot je prikazano na spodnji sliki, lahko vidite, da je bilo po ročnem stiskanju v novem sistemu stisnjenih skoraj 100 MB več.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Ustvarite Varnostno Kopijo Posnetka Btrfs S Snapperjem

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) je najboljši partner za varnostno kopiranje Btrfs .

Inicializacijski skript bo ustvaril imenik `~/ubuntu` , samo zaženite naslednji ukaz:

```
~/ubuntu/snapper/init.sh
```

Se vidimo v vsebini scenarija [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Uporabite `snapper list-configs` za ogled podvolumenov, za katere so nastavljeni posnetki.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Uporabite `snapper -c mnt list` za ogled posnetka podvolumena

`/etc/snapper/configs/mnt` Ogledate si lahko posebne nastavitve varnostnega kopiranja tega podnosilca

Več referenc:

[Preprosto se igrajte s funkcijo posnetka Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Posnetek Strežnika

contabo Zagotavlja funkcijo posnetkov strežnika, vendar ne podpira načrtovanih posnetkov. Napisal sem [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) za ustvarjanje dnevnih posnetkov.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Če želite obnoviti posnetek strežnika, najprej kliknite Crontol v meniju za upravljanje

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Nato kliknite Posnetki za obnovitev.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Vendar pa je razdrobljenost tega posnetka prevelika, ko bodo na novo dodani podatki popolnoma izgubljeni, zato jih uporabljajte previdno.

Običajno je bolj priročno uporabiti posnetke btrfs.

## Podrobnosti Reševalnega Sistema

Vstopite v sistem za reševanje 22 Ko so vrata [tcping](https://github.com/paradiseduo/tcping) , do njih ne boste mogli dostopati z nastavljenim geslom 2-3 minut in vse bo v redu.

```
tcping ip 22 -c 9999
```

Dostopnost vrat je mogoče spremljati.

### Kako Dostopati Do Trdega Diska Po Vstopu v Reševanje & Obnovi Posnetek

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Ogledate si lahko na primer posnetek

```
snapper -c etc list
```

Oglejte si spremembe datoteke s posnetki

```
snapper -c etc status 5..6
```

Oglejte si določeno besedilo razlike

```
snapper -c etc diff 3..5
```

Obnovi posnetek: Na primer, razveljavi vse spremembe po posnetku 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Omogoči Obstojnost Dnevnika

Če omogočite obstojnost dnevnika v sistemu za reševanje, morate ročno ustvariti ustrezen imenik in izvesti nekaj dodatnih korakov, ker morda nimate delujoče storitve systemd. Tu so koraki, ki jih lahko poskusite:

Najprej chroot, potem

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Znova zaženite svoj sistem Ubuntu: Ko naredite zgornje spremembe, morate znova zagnati vaš računalnik na običajen način in v sistem Ubuntu namesto v sistem za reševanje.

Na ta način bo systemd-journald začel z novo konfiguracijo in začel vztrajno shranjevati dnevnike na trdi disk.

Upoštevajte, da se zgornje operacije izvajajo v reševalnem sistemu, zato bodo te spremembe začele veljati šele, ko bo sistem znova zagnan in ne bo več v načinu reševanja.

To pomeni, da ne boste takoj videli, da bi spremembe obstoječih dnevnikov postale trajne, vendar bodo vsi dnevniki, ustvarjeni po tem, ohranjeni.

Tako si lahko ogledate dnevnike storitve ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Opombe O Težkih in Zapletenih Boleznih

### Rešite Čudno Težavo: Strežnik Ne More Vzpostaviti ssh

Prej sem uporabil dejanje github za izdelavo skripta za samodejno prevajanje in uvajanje, vendar sem ugotovil, da storitev uvajanja ne more biti ssh.

Vstop v reševalni sistem in pregledovanje dnevnikov je vprašanje dovoljenja:

`Missing privilege separation directory: /run/sshd`

Ta imenik lahko ustvarite z naslednjim ukazom

```
chown root:root /
systemd-tmpfiles --create
```

Po večkratnih preiskavah je to zato github action `1001` je uporabnik, ki je naložil tar `uid`

tar Razpakiranje mora biti opravljeno brez parametrov `--no-same-owner` razpakirano bo v `uid` za uporabnika `1001`

Posledično bo rsync spremenil uporabniško skupino korenskega imenika in po ponovnem zagonu se ne boste mogli prijaviti v ssh.

Spremenite dekompresijski skript na naslednji način:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

