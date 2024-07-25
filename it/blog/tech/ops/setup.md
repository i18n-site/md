# Inizializzare Il Server (Utilizzare Partizione BTRFS, Snapshot Pianificato Dello Snapper)

## Server Di Acquisto contabo

contabo è un fornitore VPS economico in Germania con una lunga storia (più di 20 anni) e molti utenti (più di 200.000), quindi non c'è bisogno di preoccuparsi di scappare.

VPS dell'acquisto [contabo.com](//contabo.com) ricordati di scegliere il prezzo in Euro, che è più economico.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

È previsto un costo di installazione una tantum per contabo.
Tuttavia, ci sono alcuni giorni al mese in cui la quota di installazione è gratuita. Basta registrarsi e prestare attenzione alle e-mail promozionali.

Oltre alla tariffa per la zona franca in Europa, altre regioni hanno diversi livelli di aumento dei prezzi.

Ho scelto un server europeo. Comunque, dopo aver utilizzato cloudflare, non c'è molta differenza tra i server.

La configurazione finale è la seguente, 16GB di memoria, 6CPU, 200 GB NVMe, 9,50 euro al mese, pari a 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Questo prezzo è quasi un decimo del prezzo di Alibaba Cloud e Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ho usato [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) per eseguire le prestazioni e i parametri:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Visualizza CPU Modello `AMD EPYC 9224 24-Core Processor` punteggio prestazioni single-core 1285
, punteggio multi-core 4277 Visualizza più risultati [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ho acquistato tre server contemporaneamente e li ho attivati ​​contemporaneamente. Ciò garantisce che i server si trovino nella stessa sala computer, facilitando la creazione di un'elevata disponibilità in futuro.

I suoi server occasionalmente si bloccano, garantendo l'accessibilità al sito web grazie all'elevata disponibilità.

I nuovi utenti devono inviare le proprie carte d'identità per l'autenticazione del nome reale al momento dell'acquisto.

## Configura L'accesso Senza Password

Dopo pochi minuti i server erano tutti attivati.

La prima cosa è modificare il `~/.ssh/config` Impostare un alias per IP quindi utilizzare `ssh-copy-id root@c2` per configurare l'accesso senza password.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

È possibile modificare questo [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) per completare più rapidamente la configurazione di inizializzazione.

Una volta completata la configurazione senza password, è possibile utilizzarla [pdsh](https://github.com/chaos/pdsh) Può essere utilizzata in batch, il che è conveniente.

Il primo è abilitare manualmente IPv6 e testarlo

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Quindi aggiorna il sistema a Ubuntu 24 con un clic e installa il software di uso comune.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 significa cambiare lingua in cinese e fuso orario in Pechino.

Il software installato per impostazione predefinita è configurato in base alle mie abitudini di utilizzo personali, come [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , ecc. Se necessario, puoi copiare il magazzino [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) e modificarlo secondo necessità.

Questo passaggio richiede molto tempo. Dopo aver atteso mezz'ora, l'aggiornamento e l'installazione del software di uso comune avranno esito positivo. Puoi confermarlo con il seguente comando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Accelera ssh

La rete dall'Europa alla Cina non è stabile Si consiglia di `ssh` [mosh](//mosh.org)

Crea uno script `c0` nella directory `~/.bin` del computer locale (principalmente aggiunto alla variabile di ambiente `PATH` ) come segue:

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

Dopo la creazione, concedi le autorizzazioni eseguibili e il soft- `c2` `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In futuro, puoi inserire direttamente `c0` , `c1` e puoi utilizzare la connessione diretta ad alta velocità `mosh` e inserire [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Converti Il ​​Formato Della Partizione Da ext4 a btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Può acquisire istantanee del disco per un facile backup.

Per prima cosa entra nel sistema di salvataggio

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Scegli Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Attendi il riavvio del server

Le modifiche alle impronte digitali `ssh-keygen -R ip` verificheranno quando ssh

Quindi esegui il seguente script per convertire la partizione

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Lo script riavvierà automaticamente il sistema al termine della conversione.

### Visualizza Il Rapporto Di Compressione btrfs

Si comprimerà automaticamente per impostazione predefinita. Il comando per verificare il rapporto di compressione è il seguente:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compressione Manuale

Se sei un perfezionista, puoi anche eseguire manualmente una compressione completa del disco. Il comando è il seguente

```bash
btrfs filesystem defragment -r -czstd /
```

Come mostrato nella figura seguente, puoi vedere che dopo la compressione manuale nel nuovo sistema, sono stati compressi quasi 100 MB in più.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Crea Un Backup Di Snapshot Btrfs Con snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) è il miglior partner per il backup Btrfs .

Lo script di inizializzazione creerà la directory `~/ubuntu` , basta eseguire il seguente comando:

```
~/ubuntu/snapper/init.sh
```

Ci vediamo nel contenuto dello script [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Utilizzare `snapper list-configs` per visualizzare i sottovolumi per i quali sono impostati gli snapshot.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Utilizzare `snapper -c mnt list` per visualizzare un'istantanea di un sottovolume

`/etc/snapper/configs/mnt` È possibile visualizzare le impostazioni di backup specifiche di questo sottovolume

Ulteriori riferimenti:

[Gioca facilmente con la funzione istantanea di Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Istantanea Del Server contabo

contabo Fornisce la funzione di istantanea del server, ma non supporta le istantanee pianificate. Ho scritto uno [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) per acquisire istantanee giornaliere.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Per ripristinare uno snapshot del server, fare prima clic su Crontol nel menu di gestione

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Quindi, fai clic su Istantanee da ripristinare.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Tuttavia, la granularità di questa istantanea è troppo grande. Una volta ripristinati, i dati appena aggiunti andranno completamente persi, quindi utilizzali con cautela.

Di solito è più conveniente utilizzare gli snapshot btrfs.

## Dettagli Del Sistema Di Salvataggio

Entra nel sistema di salvataggio 22 Dopo che la porta sarà [tcping](https://github.com/paradiseduo/tcping) accessibile, non potrai accedervi con la password impostata per 2-3 minuti. Aspetta un momento e tutto andrà bene.

```
tcping ip 22 -c 9999
```

L'accessibilità del porto può essere monitorata.

### Come Accedere Al Disco Rigido Dopo Aver Inserito L'istantanea Di Ripristino &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

È possibile visualizzare, ad esempio, l'istantanea

```
snapper -c etc list
```

Visualizza le modifiche ai file di istantanea

```
snapper -c etc status 5..6
```

Visualizza il testo differenziale specifico

```
snapper -c etc diff 3..5
```

Ripristina snapshot: ad esempio, annulla tutte le modifiche dopo lo snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Abilita La Persistenza Del Registro

L'abilitazione della persistenza dei log in un sistema di salvataggio richiede la creazione manuale della directory corrispondente e l'esecuzione di alcuni passaggi aggiuntivi, poiché potresti non avere un servizio systemd in esecuzione. Ecco i passaggi che puoi provare:

Prima chroot, quindi

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Riavvia nel tuo sistema Ubuntu: dopo aver apportato le modifiche di cui sopra, devi riavviare il computer normalmente e nel tuo sistema Ubuntu invece che nel sistema di ripristino.

In questo modo systemd-journald inizierà con la nuova configurazione e inizierà a memorizzare i log in modo persistente sul disco rigido.

Tieni presente che le operazioni di cui sopra vengono eseguite su un sistema di salvataggio, quindi tali modifiche avranno effetto solo una volta riavviato il sistema e non più in modalità di salvataggio.

Ciò significa che non vedrai immediatamente che le modifiche ai log esistenti diventeranno persistenti, ma tutti i log generati successivamente verranno persistenti.

In questo modo puoi visualizzare i log del servizio ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Note Sulle Malattie Difficili E Complicate

### Risolvi Lo Strano Problema: Il Server Non Può ssh

In precedenza ho utilizzato l'azione github per creare uno script di compilazione e distribuzione automatica, ma ho scoperto che il servizio di distribuzione non poteva essere ssh.

L'accesso al sistema di salvataggio e la visualizzazione dei registri è un problema di autorizzazione:

`Missing privilege separation directory: /run/sshd`

È possibile creare questa directory con il seguente comando

```
chown root:root /
systemd-tmpfiles --create
```

Dopo ripetute tar `uid` è `1001` github action

tar L'estrazione deve essere eseguita senza parametri `--no-same-owner` verrà decompresso in `uid` per `1001` user

Di conseguenza, rsync cambierà il gruppo utenti della directory root e quindi non sarà possibile accedere a ssh dopo il riavvio.

Modificare lo script di decompressione come segue:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

