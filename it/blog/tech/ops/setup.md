# Inizializzare il server (usare partizione BTRFS, snapshot pianificato con Snapper)

## Acquisto server su contabo

Contabo è un fornitore di VPS low cost in Germania, con una lunga storia (oltre 20 anni) e un gran numero di utenti (oltre 200.000), senza timore di chiusura improvvisa.

Acquistare un VPS su [contabo.com](//contabo.com), ricordarsi di scegliere il prezzo in euro, che è più economico.

![](https://i-01.eu.org/1718285782.avif)

Contabo ha un costo di installazione una tantum.
Tuttavia, ci sono alcuni giorni al mese in cui l'installazione è gratuita; basta registrarsi e seguire le email promozionali.

Oltre alla zona franca europea, altre aree hanno aumenti di prezzo variabili.

Ho scelto un server europeo, comunque, con Cloudflare attivo, la differenza di ubicazione del server è irrilevante.

La configurazione finale è la seguente: 16GB di RAM, 6 CPU, 200GB NVMe, 9,50 euro al mese, equivalenti a 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Questo prezzo è quasi un decimo di quello di Alibaba Cloud e Amazon**.

![](https://i-01.eu.org/1718356956.avif)

Ho eseguito le prove di prestazione e i parametri con [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script):

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Il modello di CPU è `AMD EPYC 9224 24-Core Processor`, con un punteggio di prestazione single-core di 1285
e un punteggio multi-core di 4277. Ulteriori risultati su [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ho acquistato tre server contemporaneamente e li ho attivati insieme, garantendo che fossero tutti nella stessa stanza per facilitare la configurazione di alta disponibilità in futuro.

Il server di contabo a volte si blocca, ma l'alta disponibilità garantisce l'accessibilità del sito web.

I nuovi utenti devono fornire una carta d'identità per la verifica dell'identità al momento dell'acquisto.

## CONFIGURAZIONE ACCESSO SENZA PASSWORD

Dopo pochi minuti, tutti i server erano attivi

La prima cosa da fare è modificare il file `~/.ssh/config` del computer locale per impostare un alias per l'IP, quindi usare `ssh-copy-id root@c2` per configurare l'accesso senza password.

![](https://i-01.eu.org/1718287198.avif)

È possibile personalizzare questo script [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) per completare più rapidamente la configurazione iniziale.

Dopo aver configurato l'accesso senza password, è possibile utilizzare [pdsh](https://github.com/chaos/pdsh) per operazioni in batch, il che è molto conveniente.

Iniziare abilitando manualmente IPv6 e testarlo

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Poi aggiornare il sistema a Ubuntu 24 e installare il software comune con un solo clic.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 indica di impostare la lingua in cinese e il fuso orario a Pechino.

Il software installato di default è configurato secondo le mie abitudini di utilizzo, come [mise](https://github.com/jdx/mise), [direnv](https://direnv.net/) ecc. Se necessario, è possibile clonare il repository [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) e adattarlo secondo le esigenze.

Questo passaggio richiede molto tempo; dopo aver atteso mezz'ora, l'aggiornamento e l'installazione del software comune sono completati. Puoi verificare con il seguente comando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Accelera ssh

La rete tra Europa e Cina non è molto stabile, si consiglia di utilizzare [mosh](//mosh.org) per accelerare `ssh`.

Creare uno script `c0` nella directory `~/.bin` (aggiunta principalmente alla variabile di ambiente `PATH`):

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

Dopo la creazione, concedi le autorizzazioni eseguibili e il soft-link `c1` e `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In futuro, potrai inserire direttamente `c0` e `c1` per utilizzare `mosh` connessioni dirette ad alta velocità e inserire [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Convertire il formato della partizione da ext4 a btrfs

[Btrfs](https://wikipedia.org/wiki/Btrfs) può creare snapshot del disco, facilitando il backup.

Prima, entrare nel sistema di ripristino

![](https://i-01.eu.org/1718300448.avif)

Scegliere Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Attendere il riavvio del server

ssh Ci saranno modifiche alle impronte digitali, utilizzare `ssh-keygen -R ip` per ripulirle

Quindi eseguire lo script seguente per convertire la partizione:

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Lo script riavvierà automaticamente il sistema al termine della conversione.

### Visualizzare il rapporto di compressione di btrfs

Per impostazione predefinita, btrfs si comprime automaticamente. Il comando per verificare il rapporto di compressione è:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compressione manuale

Se si è perfezionisti, si può eseguire una compressione manuale completa del disco. Il comando è:

```bash
btrfs filesystem defragment -r -czstd /
```

Come mostrato nella figura, dopo la compressione manuale del nuovo sistema, sono stati compressi quasi 100MB in più.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Creare un backup di snapshot Btrfs con Snapper

[Snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) è il compagno ideale per il backup di Btrfs.

Lo script di inizializzazione creerà la directory `~/ubuntu`, quindi eseguire il seguente comando:

```
~/ubuntu/snapper/init.sh
```

Il contenuto dello script è disponibile su [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Utilizzare `snapper list-configs` per visualizzare i sottovolumi con snapshot impostati

![](https://i-01.eu.org/1718302689.avif)

Utilizzare `snapper -c mnt list` per visualizzare gli snapshot di un sottovolume specifico

`/etc/snapper/configs/mnt` può visualizzare le impostazioni di backup per questo volume secondario

Altri riferimenti:

[Usare Snapper per giocare facilmente con le funzionalità di snapshot di Btrfs](https://zhuanlan.zhihu.com/p/31082518)

## Istantanea Del Server contabo

contabo Fornisce la funzione di istantanea del server, ma non supporta le istantanee pianificate. Ho scritto uno [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) per acquisire istantanee giornaliere.

![](https://i-01.eu.org/1718304206.avif)

Tuttavia, questa granularità di snapshot è troppo grande; una volta ripristinato, i dati nuovi andranno persi, quindi usare con cautela

![](https://i-01.eu.org/1718304275.avif)

Normalmente, è più conveniente utilizzare gli snapshot di btrfs.

![](https://i-01.eu.org/1718304063.avif)

Dettagli del sistema di ripristino.

Di solito è più conveniente utilizzare gli snapshot btrfs.

## You can monitor the accessibility of the port

Entra nel sistema di salvataggio 22 Dopo che la porta sarà [tcping](https://github.com/paradiseduo/tcping) accessibile, non potrai accedervi con la password impostata per 2-3 minuti. Aspetta un momento e tutto andrà bene.

```
tcping ip 22 -c 9999
```

You can view the snapshots, for example.

### View the changes in the snapshot files

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

View the specific differential text

```
snapper -c etc list
```

Restore the snapshot: for example, cancel all changes after snapshot 5

```
snapper -c etc status 5..6
```

Enable log persistence

```
snapper -c etc diff 3..5
```

Ripristina snapshot: ad esempio, annulla tutte le modifiche dopo lo snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### First, chroot, then

Reboot into your Ubuntu system: after making the above changes, you need to reboot your machine normally and enter your Ubuntu system instead of the rescue system

Prima chroot, quindi

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Remember that the above operations are performed on a rescue system, so the changes will not take effect until the system is rebooted and no longer in rescue mode.

This means you will not immediately see any existing logs become persistent, but all logs generated thereafter will be saved persistently.

This way you can view the ssh service logs.

Troubleshooting Notes.

Solve the strange problem: the server cannot ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Note Sulle Malattie Difficili E Complicate

### Enter the rescue system and view the logs to find it is a permission issue:

You can create this directory with the following command.

L'accesso al sistema di salvataggio e la visualizzazione dei registri è un problema di autorizzazione:

`Missing privilege separation directory: /run/sshd`

È possibile creare questa directory con il seguente comando

```
chown root:root /
systemd-tmpfiles --create
```

Dopo ripetute indagini, è perché github action L'utente `uid` di tar è `1001`

tar Il disimballaggio deve essere effettuato se non è presente il parametro `--no-same-owner` , verrà decompresso in `uid` per `1001` utenti

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