# Inizializza U Servitore (Utilizate a Partizione BTRFS, Snapper Snapshot Pianificatu)

## Servitore Di Compra contabo

contabo hè un fornitore di VPS economicu in Germania cù una longa storia (più di 20 anni) è parechji utilizatori (più di 200 000), per quessa, ùn ci hè bisognu di preoccupassi di scappà.

VPS compra [contabo.com](//contabo.com) ricordate di sceglie u prezzu Euro, chì hè più prezzu.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Ci hè una tarifa di stallazione una volta per contabo.
Tuttavia, ci sò uni pochi di ghjorni ogni mese induve a tarifa di stallazione hè gratuita Basta à registrà è fate attenzione à l'email promozionale.

In più di a tarifa di l'area libera in Europa, altre regioni anu diverse livelli di aumentu di prezzu.

Aghju sceltu un servitore europeu In ogni modu, dopu avè usatu cloudflare, ùn ci hè micca assai diffarenza trà i servitori.

A cunfigurazione finale hè a siguenti, 16GB di memoria, 6CPU, 200 GB NVMe, 9.50 euro à mese, equivalenti à 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Stu prezzu hè quasi un decimu di u prezzu di Alibaba Cloud è Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Aghju [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) per eseguisce u rendiment è i paràmetri:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Display CPU Modellu `AMD EPYC 9224 24-Core Processor` puntuazione di rendimentu unicu core 1285
, score multi-core 4277 Vede più risultati [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Aghju compru trè servitori in un tempu è attivatu à u stessu tempu Questu assicura chì i servitori sò in a stessa sala di l'informatica, facendu più faciule per custruisce una alta dispunibilità in u futuru.

I so servitori si fermanu in ocasioni, assicurendu l'accessibilità di u situ web attraversu una alta dispunibilità.

I novi utilizatori anu bisognu di mandà e so carte d'identità per l'autentificazione di u nome reale quandu compranu.

## Configurate U Login Senza Password

Dopu qualchì minutu, i servitori eranu tutti attivati.

A prima cosa hè di edità a macchina `~/.ssh/config` Set un alias per IP è dopu aduprà `ssh-copy-id root@c2` per cunfigurà login senza password.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Pudete mudificà stu [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) per compie a cunfigurazione di inizializazione più veloce.

Dopu chì a cunfigurazione senza password hè cumpleta, pudete [pdsh](https://github.com/chaos/pdsh) pò esse operatu in batch, chì hè convenientu.

U primu hè di attivà manualmente ipv6 è pruvà

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Allora aghjurnà u sistema à ubuntu 24 cun un clic è installate u software cumunimenti utilizatu.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 significa cambià a lingua à u Cinese è u fusu orariu à Pechino.

U software installatu per difettu hè cunfiguratu secondu i mo abitudini di usu persunale, cum'è [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , etc. Se necessariu, pudete copià u magazzinu [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) è mudificà cum'è necessariu.

Stu passu pigghia assai tempu Dopu à aspittà per una meza ora, l'aghjurnamentu è a stallazione di u software cumunimenti utilizatu serà successu. Pudete cunfirmà cù u cumandimu seguente:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Accelera ssh

A reta da l'Europa à a `ssh` ùn hè micca stabile [mosh](//mosh.org)

Crea un script `c0` in u `~/.bin` di a macchina locale (principalmente aghjuntu à a variabile di l'ambiente `PATH` ) cum'è seguitu:

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

Dopu a creazione, cuncede permessi eseguibili è soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In u futuru, pudete entre direttamente `c0` `c1` è pudete aduprà a cunnessione diretta à alta velocità `mosh` è entre [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Cunvertisce U Formatu Di Partizioni Da ext4 À btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) piglià snapshots di discu per una copia di salvezza faciule.

Prima entre in u sistema di salvezza

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Sceglite Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Aspettate chì u servitore riavvia

I cambiamenti `ssh-keygen -R ip` impronte digitali saranu quandu ssh

Allora eseguite u seguente script per cunvertisce a partizione

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

U script vi ripigliate automaticamente u sistema dopu à a cunversione hè successu.

### Vede U Rapportu Di Compressione btrfs

Cumpressà automaticamente per difettu U cumandimu per verificà u rapportu di compressione hè cusì:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Cumpressione Manuale

Sè vo site un perfeccionista, pudete ancu fà una cumpressione di discu sanu manualmente

```bash
btrfs filesystem defragment -r -czstd /
```

Comu mostra in a figura sottu, pudete vede chì dopu à a compressione manuale in u novu sistema, quasi 100MB più hè stata cumpressa.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Crea Una Copia Di Salvezza Di Snapshot Btrfs Cù snapper

hè u megliu partenariu per a copia di salvezza Btrfs [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)

U script d'inizializazione creà u repertoriu `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

Ci si vede in u cuntenutu di u script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Aduprà `snapper list-configs` per vede i subvolumi per i quali snapshots sò stati.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Aduprà `snapper -c mnt list` per vede una snapshot di un subvolume

`/etc/snapper/configs/mnt` vede i paràmetri di salvezza specifiche di stu subvolume

Più referenze:

[Ghjucate facilmente cù a funzione snapshot di Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo a funzione di snapshot di u servitore, ma ùn supporta micca [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) snapshots pianificati.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Per restaurà una snapshot di u servitore, prima cliccate Crontol in u menù di gestione

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Dopu, cliccate Snapshots per restaurà.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Tuttavia, a granularità di sta snapshot hè troppu grande Una volta restaurata, i dati appena aghjunti seranu persu cumplettamente, per quessa, aduprate cun prudenza.

Di solitu hè più còmuda di utilizà snapshots btrfs.

## Detaglii Di U Sistema Di Salvezza

Entra in u 22 di salvezza Dopu chì u portu hè [tcping](https://github.com/paradiseduo/tcping) accessibile, ùn puderete micca accede cù a password stabilita per 2-3 minuti.

```
tcping ip 22 -c 9999
```

L'accessibilità portu pò esse monitorata.

### Cume Accede À U Discu Duru Dopu À L'ingressu Di Salvezza &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Pudete vede u snapshot, per esempiu

```
snapper -c etc list
```

Vede i cambiamenti di u schedariu snapshot

```
snapper -c etc status 5..6
```

Vede u testu diffiziale specificu

```
snapper -c etc diff 3..5
```

Restore snapshot: Per esempiu, annullà tutti i cambiamenti dopu snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Abilita a Persistenza Di U Log

L'attivazione di a persistenza di u logu sottu un sistema di salvezza richiede di creà manualmente u repertoriu currispundente è eseguisce alcuni passi supplementari, perchè pudete micca avè un serviziu systemd in esecuzione. Eccu i passi chì pudete pruvà:

Prima chroot, poi

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot in u vostru sistema Ubuntu: Dopu avè fattu i cambiamenti sopra, avete bisognu di reboot a vostra macchina nurmale è in u vostru sistema Ubuntu invece di u sistema di salvezza.

In questu modu, systemd-journald hà da principià cù a nova cunfigurazione è cumincianu à almacenà logs persistente nantu à u discu duru.

Tenite in mente chì l'operazioni di sopra sò realizate nantu à un sistema di salvezza, cusì questi cambiamenti saranu efficaci solu una volta chì u sistema hè riavviatu è ùn hè più in modu di salvezza.

Questu significa chì ùn vi vede micca immediatamente qualsiasi cambiamenti à i logs esistenti diventanu persistenti, ma tutti i logs generati dopu à questu seranu persistuti.

Questu modu pudete vede i logs di u serviziu ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notes Nantu À E Malatie Difficili È Cumplicate

### Risolve U Prublema Stranu: U Servitore Ùn Pò Micca ssh

Aghju utilizatu l'azzione di github per fà una compilazione automatica è un script di implementazione prima, ma truvò chì u serviziu di implementazione ùn puderia micca esse ssh.

Entra in u sistema di salvezza è fighjendu i logs hè un prublema di permessu:

`Missing privilege separation directory: /run/sshd`

Pudete creà stu cartulare cù u cumandimu seguitu

```
chown root:root /
systemd-tmpfiles --create
```

Dopu investigazioni ripetute, hè github action l'utilizatore chì hà `1001` tar `uid`

U disimballamentu deve esse fattu senza parametri tar `--no-same-owner` serà decompressu in `uid` per `1001` user

In u risultatu, rsync cambierà u gruppu d'utilizatori di u repertoriu radicali, è ùn puderete micca login in ssh dopu à riavvia.

Mudificà u script di decompressione cusì:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

