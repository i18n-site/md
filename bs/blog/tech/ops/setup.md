# Inicijalizirajte Server (Koristite BTRFS Particiju, Snapper Planirani Snimak)

## contabo Server Za Kupovinu

contabo je jeftin VPS provajder u Njemačkoj sa dugom istorijom (više od 20 godina) i mnogo korisnika (više od 200.000), tako da nema potrebe da brinete o bijegu.

VPS kupovine [contabo.com](//contabo.com) ne zaboravite da odaberete cijenu u eurima, koja je jeftinija.

![](https://i-01.eu.org/1718285782.avif)

Postoji jednokratna naknada za instalaciju za contabo.
Međutim, postoji nekoliko dana svakog mjeseca kada je naknada za instalaciju besplatna. Samo se registrirajte i obratite pažnju na promotivne e-poruke.

Pored naknade za slobodnu površinu u Evropi, druge regije imaju različite nivoe povećanja cijena.

Odabrao sam evropski server. U svakom slučaju, nakon korištenja cloudflarea, nema velike razlike između servera.

Konačna konfiguracija je sljedeća, 16 GB memorije, 6 CPU, 200 GB NVMe, 9,50 eura mjesečno, što odgovara 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ova cijena je skoro jedna desetina cijene Alibaba Cloud-a i Amazona** .

![](https://i-01.eu.org/1718356956.avif)

Koristio [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) za pokretanje performansi i parametara:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Prikazan model `AMD EPYC 9224 24-Core Processor` , rezultat performansi jednog jezgra 1285 CPU
, višejezgarni rezultat 4277 Pogledajte više rezultata [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Kupio sam tri servera u isto vrijeme i aktivirao ih u isto vrijeme. Ovo osigurava da su serveri u istoj kompjuterskoj sobi, što olakšava izgradnju visoke dostupnosti u budućnosti.

Njegovi serveri povremeno prekidaju vezu, osiguravajući pristupačnost web stranici kroz visoku dostupnost.

Novi korisnici prilikom kupovine moraju dostaviti svoje lične karte za autentifikaciju pravim imenom.

## Konfigurirajte Prijavu Bez Lozinke

Nakon nekoliko minuta, svi serveri su bili aktivirani.

Prva stvar IP da uredite `~/.ssh/config` lokalnog stroja da postavite pseudonim, a zatim koristite `ssh-copy-id root@c2` da konfigurirate prijavu bez lozinke.

![](https://i-01.eu.org/1718287198.avif)

Možete modificirati ovu [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) da brže završite konfiguraciju inicijalizacije.

Nakon što je konfiguracija bez lozinke završena, možete je koristiti u serijama, što je zgodno [pdsh](https://github.com/chaos/pdsh)

Prvi je da ručno omogućite ipv6 i testirate

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Zatim nadogradite sistem na ubuntu 24 jednim klikom i instalirajte često korišteni softver.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 znači prebacivanje jezika na kineski i vremenske zone na Peking.

Softver instaliran prema zadanim postavkama je konfiguriran u skladu s mojim osobnim navikama korištenja, kao što su [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , itd. Ako je potrebno, možete kopirati [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse i modificirati ga po potrebi!

Ovaj korak traje dugo Nakon čekanja od pola sata, nadogradnja i instalacija često korištenog softvera će biti uspješna. Ovo možete potvrditi sljedećom komandom:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Ubrzava ssh

Mreža od Europe do Kine nije stabilna. Preporučuje se [mosh](//mosh.org) `ssh` .

Kreirajte `c0` skripte u lokalnom direktoriju `~/.bin` (uglavnom dodano varijablu okruženja `PATH` ) kako slijedi:

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

Nakon kreiranja, dodijelite izvršne dozvole i soft-link `c1` i `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

U budućnosti, možete direktno uneti `c0` i `c1` da biste koristili `mosh` direktnu vezu velike brzine i unesite [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Pretvorite Format Particije Iz ext4 U btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Može napraviti snimke diska radi lakšeg kopiranja.

Prvo uđite u sistem spašavanja

![](https://i-01.eu.org/1718300448.avif)

Odaberite Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Sačekajte da se server ponovo pokrene

Doći ssh do promjena otiska prsta, koristite `ssh-keygen -R ip` da ga očistite

Zatim pokrenite sljedeću skriptu da pretvorite particiju

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skripta će automatski ponovo pokrenuti sistem nakon što konverzija bude uspješna.

### Pogledajte Omjer Kompresije btrfs

Automatski će se komprimirati prema zadanim postavkama Naredba za provjeru omjera kompresije je sljedeća:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Ručna Kompresija

Ako ste perfekcionista, možete izvršiti i potpunu kompresiju diska ručno.

```bash
btrfs filesystem defragment -r -czstd /
```

Kao što je prikazano na slici ispod, možete vidjeti da je nakon ručne kompresije u novom sistemu komprimirano još skoro 100MB.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Kreirajte Sigurnosnu Kopiju Btrfs Snimka Pomoću Snappera

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) je najbolji partner za Btrfs backup.

Skripta za inicijalizaciju će kreirati direktorij `~/ubuntu` , samo pokrenite sljedeću naredbu:

```
~/ubuntu/snapper/init.sh
```

Vidimo se u sadržaju scenarija [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Koristite `snapper list-configs` da vidite podvolume za koje su postavljeni snimci.

![](https://i-01.eu.org/1718302689.avif)

Koristite `snapper -c mnt list` za prikaz snimka podvolumena

`/etc/snapper/configs/mnt` može vidjeti specifične postavke sigurnosne kopije ovog podvoluma

Više referenci:

[Lako se igrajte s funkcijom snimanja Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Snimak Servera

contabo funkciju snimka servera, ali ne podržava planirane snimke. Napisao sam [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) za snimanje dnevnih snimaka.

![](https://i-01.eu.org/1718304206.avif)

Da biste vratili snimak servera, prvo kliknite na Crontol u meniju za upravljanje

![](https://i-01.eu.org/1718304275.avif)

Zatim kliknite na Snimci za vraćanje.

![](https://i-01.eu.org/1718304063.avif)

Međutim, granularnost ovog snimka je prevelika. Jednom kada se vrati, novododati podaci će biti potpuno izgubljeni, pa ga koristite oprezno.

Obično je zgodnije koristiti btrfs snimke.

## Detalji O Sistemu Spašavanja

Uđite 22 sistem za spašavanje Nakon što je port [tcping](https://github.com/paradiseduo/tcping) , nećete moći da mu pristupite sa postavljenom lozinkom narednih 2-3 .

```
tcping ip 22 -c 9999
```

Pristupačnost porta se može pratiti.

### Kako Pristupiti Tvrdom Disku Nakon Ulaska U Rescue Snapshot &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Možete pogledati snimak, na primjer

```
snapper -c etc list
```

Pogledajte promjene u fajlu snimka

```
snapper -c etc status 5..6
```

Pogledajte određeni tekst razlike

```
snapper -c etc diff 3..5
```

Vrati snimak: Na primjer, poništite sve promjene nakon snimka 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Omogućite Postojanost Dnevnika

Omogućavanje postojanosti dnevnika pod sistemom spašavanja zahtijeva da ručno kreirate odgovarajući direktorij i izvršite neke dodatne korake, jer možda nemate pokrenut systemd servis. Evo koraka koje možete isprobati:

Prvo chroot, onda

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ponovo pokrenite svoj Ubuntu sistem: Nakon što izvršite gore navedene promjene, morate ponovo pokrenuti svoju mašinu normalno i u svoj Ubuntu sistem umjesto u sistem spašavanja.

Na ovaj način, systemd-journald će početi s novom konfiguracijom i početi stalno pohranjivati dnevnike na tvrdi disk.

Imajte na umu da se gore navedene operacije izvode na sistemu spašavanja, tako da te promjene neće stupiti na snagu dok se sistem ne pokrene i više ne bude u načinu spašavanja.

To znači da nećete odmah vidjeti nikakve promjene u postojećim evidencijama koje postanu trajne, ali će svi zapisnici generirani nakon toga biti postojani.

Na ovaj način možete pregledati dnevnike ssh usluge

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Napomene O Teškim I Komplikovanim Bolestima

### Riješite Čudan Problem: Server Ne Može ssh

Ranije sam koristio github akciju da napravim automatsku kompilaciju i skriptu za implementaciju, ali sam otkrio da usluga postavljanja ne može biti ssh.

Ulazak u sistem spašavanja i gledanje dnevnika je problem s dozvolom:

`Missing privilege separation directory: /run/sshd`

Možete kreirati ovaj direktorij pomoću sljedeće naredbe

```
chown root:root /
systemd-tmpfiles --create
```

Nakon ponovljenih istraživanja, to je zato github action je korisnik `uid` od tar `1001`

Raspakivanje mora biti ako nema parametra `--no-same-owner` , biće dekomprimirano na `uid` za `1001` korisnika tar

Kao rezultat toga, rsync će promijeniti korisničku grupu korijenskog direktorija i tada se nećete moći prijaviti na ssh nakon ponovnog pokretanja.

Modificirajte skriptu za dekompresiju na sljedeći način:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```