# Inicijalizirajte Poslužitelj (Koristite BTRFS Particiju, Snapper Zakazanu Snimku)

## contabo Poslužitelj Za Kupnju

contabo je jeftini VPS pružatelj usluga u Njemačkoj s dugom poviješću (više od 20 godina) i mnogo korisnika (više od 200 000), tako da nema potrebe brinuti o bijegu.

VPS kupujete [contabo.com](//contabo.com) ne zaboravite odabrati cijenu u eurima, koja je jeftinija.

![](https://i-01.eu.org/1718285782.avif)

Postoji jednokratna naknada za instalaciju za contabo.
Međutim, postoji nekoliko dana u mjesecu kada je naknada za instalaciju besplatna. Samo se registrirajte i obratite pozornost na promotivne e-poruke.

Uz naknadu za besplatno područje u Europi, druge regije imaju različite razine povećanja cijena.

U svakom slučaju, nakon korištenja cloudflarea, nema velike razlike između poslužitelja.

Konačna konfiguracija je sljedeća, 16 GB memorije, 6 CPU, 200 GB NVMe, 9,50 eura mjesečno, što je ekvivalentno 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ova cijena je gotovo jedna desetina cijene Alibaba Clouda i Amazona** .

![](https://i-01.eu.org/1718356956.avif)

Koristio sam [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) za pokretanje performansi i parametara:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Prikazuje se CPU Model `AMD EPYC 9224 24-Core Processor` , ocjena izvedbe s jednom jezgrom 1285
, višejezgreni rezultat 4277 Pogledajte više rezultata [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Kupio sam tri poslužitelja odjednom i aktivirao ih u isto vrijeme. To osigurava da su poslužitelji u istoj računalnoj sobi, što olakšava izgradnju visoke dostupnosti u budućnosti.

Njegovi poslužitelji povremeno prekidaju vezu, osiguravajući dostupnost web stranice kroz visoku dostupnost.

Novi korisnici prilikom kupnje trebaju predati svoje osobne iskaznice radi provjere autentičnosti pravim imenom.

## Konfigurirajte Prijavu Bez Lozinke

Nakon nekoliko minuta svi su serveri bili aktivirani.

Prva stvar IP urediti `~/.ssh/config` lokalnog stroja za postavljanje aliasa, a zatim upotrijebiti `ssh-copy-id root@c2` za konfiguraciju prijave bez lozinke.

![](https://i-01.eu.org/1718287198.avif)

Ovu [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) možete modificirati kako biste brže dovršili konfiguraciju inicijalizacije.

Nakon što je konfiguracija bez lozinke dovršena, možete je koristiti [pdsh](https://github.com/chaos/pdsh) Može se koristiti u serijama, što je zgodno.

Prvi je ručno omogućiti ipv6 i testirati

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Zatim nadogradite sustav na ubuntu 24 jednim klikom i instalirajte često korišteni softver.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 znači prebacivanje jezika na kineski i vremenske zone na Peking.

Softver instaliran prema zadanim postavkama je konfiguriran prema mojim osobnim navikama korištenja, kao što su [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , itd. Ako je potrebno, možete kopirati skladište [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) i modificirati ga prema potrebi.

Ovaj korak traje dugo nakon čekanja od pola sata, nadogradnja i instalacija često korištenog softvera bit će uspješna. To možete potvrditi sljedećom naredbom:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Ubrzava ssh

Mreža iz Europe u Kinu nije stabilna. Preporučuje se korištenje `ssh` [mosh](//mosh.org)

Napravite `c0` skripte u lokalnom direktoriju `~/.bin` (uglavnom dodane varijabli okruženja `PATH` ) na sljedeći način:

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

Nakon izrade dodijelite dopuštenja za izvršnu datoteku i meku vezu `c1` i `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Ubuduće možete izravno unijeti `c0` i `c1` da biste koristili `mosh` izravne veze velike brzine i unesite [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Pretvorite Format Particije Iz ext4 U btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Može napraviti snimke diska za jednostavno sigurnosno kopiranje.

Prvo uđite u sustav spašavanja

![](https://i-01.eu.org/1718300448.avif)

Odaberite Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Pričekajte da se poslužitelj ponovno pokrene

ssh Bit će promjena otiska prsta, upotrijebite `ssh-keygen -R ip` za čišćenje

Zatim pokrenite sljedeću skriptu za pretvaranje particije

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skripta će automatski ponovno pokrenuti sustav nakon uspješne konverzije.

### Pogledajte btrfs Omjer Kompresije

Automatski će kompresirati naredbu za provjeru omjera kompresije kako slijedi:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Ručna Kompresija

Ako ste perfekcionist, možete izvršiti i ručnu kompresiju diska na sljedeći način:

```bash
btrfs filesystem defragment -r -czstd /
```

Kao što je prikazano na donjoj slici, možete vidjeti da je nakon ručne kompresije u novom sustavu komprimirano još gotovo 100 MB.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Napravite Sigurnosnu Kopiju Btrfs Snimke Pomoću Snappera

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) je najbolji partner za Btrfs backup.

Inicijalizacijska skripta će stvoriti direktorij `~/ubuntu` , samo pokrenite sljedeću naredbu:

```
~/ubuntu/snapper/init.sh
```

Vidimo se u sadržaju scenarija [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Koristite `snapper list-configs` za pregled podvolumena za koje su postavljene snimke.

![](https://i-01.eu.org/1718302689.avif)

Upotrijebite `snapper -c mnt list` za prikaz snimke podvolumena

`/etc/snapper/configs/mnt` može vidjeti specifične sigurnosne postavke ovog podvolumena

Više referenci:

[Jednostavno se igrajte s funkcijom snimanja Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Snimka Poslužitelja

contabo Pruža funkciju snimke poslužitelja, ali ne podržava planirane snimke. Napisao sam [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) za snimanje dnevnih snimaka.

![](https://i-01.eu.org/1718304206.avif)

Za vraćanje snimke poslužitelja prvo kliknite Crontol u izborniku upravljanja

![](https://i-01.eu.org/1718304275.avif)

Zatim kliknite Snimke za vraćanje.

![](https://i-01.eu.org/1718304063.avif)

Međutim, granularnost ove snimke je prevelika. Nakon vraćanja novododani podaci bit će potpuno izgubljeni, pa ih koristite s oprezom.

Obično je praktičnije koristiti btrfs snimke.

## Detalji Sustava Spašavanja

Uđite u sustav za spašavanje 22 Nakon što je priključak [tcping](https://github.com/paradiseduo/tcping) dostupan, nećete mu moći pristupiti s postavljenom lozinkom još 2-3 minuta.

```
tcping ip 22 -c 9999
```

Dostupnost porta se može pratiti.

### Kako Pristupiti Tvrdom Disku Nakon Ulaska U Rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Na primjer, možete pogledati snimku

```
snapper -c etc list
```

Pregledajte promjene datoteke snimke

```
snapper -c etc status 5..6
```

Pogledajte određeni diff tekst

```
snapper -c etc diff 3..5
```

Vraćanje snimke: Na primjer, poništavanje svih promjena nakon snimke 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Omogući Postojanost Dnevnika

Omogućavanje postojanosti dnevnika u sustavu za spašavanje zahtijeva da ručno kreirate odgovarajući direktorij i izvršite neke dodatne korake, jer možda nemate pokrenutu uslugu systemd. Evo koraka koje možete isprobati:

Prvo chroot, onda

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ponovno pokrenite svoj Ubuntu sustav: Nakon što izvršite gore navedene promjene, trebate ponovno pokrenuti svoje računalo normalno i na svoj Ubuntu sustav umjesto na sustav za spašavanje.

Na taj način, systemd-journald će započeti s novom konfiguracijom i početi trajno pohranjivati zapise na tvrdi disk.

Imajte na umu da se gore navedene operacije izvode na sustavu za spašavanje, tako da te promjene neće stupiti na snagu dok se sustav ponovno ne pokrene i više ne bude u načinu za spašavanje.

To znači da nećete odmah vidjeti promjene postojećih zapisa koji postaju postojani, ali svi zapisi generirani nakon toga bit će postojani.

Na ovaj način možete vidjeti zapisnike ssh usluge

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Bilješke O Teškim I Kompliciranim Bolestima

### Riješite Čudan Problem: Poslužitelj Ne Može ssh

Ranije sam koristio github akciju za izradu automatske kompilacije i skripte za implementaciju, ali sam otkrio da usluga implementacije ne može biti ssh.

Ulazak u sustav spašavanja i gledanje zapisa je pitanje dopuštenja:

`Missing privilege separation directory: /run/sshd`

Ovaj direktorij možete stvoriti sljedećom naredbom

```
chown root:root /
systemd-tmpfiles --create
```

Nakon ponovljenih istraživanja, to je zato što je github action Korisnik `uid` od tar `1001`

tar Raspakiranje mora biti ako nema parametra `--no-same-owner` , bit će dekomprimiran na `uid` za `1001` korisnika

Kao rezultat toga, rsync će promijeniti korisničku grupu korijenskog direktorija, a zatim se nećete moći prijaviti na ssh nakon ponovnog pokretanja.

Izmijenite skriptu za dekompresiju na sljedeći način:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```