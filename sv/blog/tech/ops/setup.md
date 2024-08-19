# Initiera servern (använd BTRFS-partition, Snapper schemalagd ögonblicksbild)

## contabo Köp server

contabo är en billig VPS-leverantör i Tyskland med en lång historia (mer än 20 år) och många användare (mer än 200 000), så det finns ingen anledning att oroa sig för att den ska försvinna.

Köp [contabo.com](//contabo.com) VPS, kom ihåg att välja europrissättning, det är billigare.

![](https://i-01.eu.org/1718285782.avif)

contabo har en engångsinstallationsavgift.
Men det finns några dagar varje månad då installationsavgiften är gratis, registrera dig bara och håll utkik efter promotionsmejl.

Utöver den kostnadsfria europeiska regionavgiften tillkommer olika påslag i andra regioner.

Jag valde en europeisk server, för när jag ändå använder Cloudflare spelar det ingen roll var servern fysiskt ligger.

Den slutliga konfigurationen är följande: 16 GB minne, 6 CPU, 200 GB NVMe, 9,50 euro per månad, motsvarande 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Detta pris är nästan en tiondel av Alibaba Clouds och Amazons priser.**

![](https://i-01.eu.org/1718356956.avif)

Jag körde [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) för att testa prestanda och parametrar:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU-modell `AMD EPYC 9224 24-Core Processor`, singelkärnspoäng 1285,
flerkärnspoäng 4277. Se fler resultat på [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Jag köpte tre servrar samtidigt och aktiverade dem för att säkerställa att de alla befinner sig i samma datacenter, vilket underlättar att bygga en hög tillgänglighetslösning i framtiden.

Dess servrar kan ibland krascha, men hög tillgänglighet säkerställer att webbplatsen förblir tillgänglig.

Nya användare måste skicka in ett ID-kort för att verifiera identiteten vid köp.

## Konfigurera lösenordsfri inloggning

Efter några minuter var alla servrar aktiverade

Första steget är att redigera den lokala maskinens `~/.ssh/config` för att ställa in ett alias, sedan använd `ssh-copy-id root@c2` för att konfigurera lösenordsfri inloggning.

![](https://i-01.eu.org/1718287198.avif)

Du kan anpassa detta skript [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) för att snabbare slutföra initialiseringskonfigurationen.

När lösenordsfri inloggning är konfigurerad kan du använda [pdsh](https://github.com/chaos/pdsh) för batchoperationer, vilket är bekvämt.

Först aktivera IPv6 manuellt och testa

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Sedan uppgradera systemet till Ubuntu 24 och installera vanlig programvara med ett klick.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 betyder att byta språk till kinesiska och ställa in tidszonen till Peking.

Standardinstallerad programvara är konfigurerad efter mina personliga användningsvanor, såsom [mise](https://github.com/jdx/mise), [direnv](https://direnv.net/) med flera. Om du behöver kan du duplicera [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) och anpassa efter behov.

Detta steg tar tid, vänta i en halvtimme innan uppgraderingen och installationen av vanlig programvara är klar. Du kan verifiera detta med följande kommando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## Mosh accelererar SSH

Nätverket från Europa till Kina är inte stabilt. Rekommenderas att använda [mosh](//mosh.org) för att förbättra `ssh`-hastigheten.

Skapa ett skript `c0` i den lokala katalogen `~/.bin` (lägg till i miljövariabeln `PATH`) enligt följande:

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

After creating, grant execute permissions and create symbolic links for `c1`, `c2`.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Hereafter, you can directly type `c0` or `c1` to use `mosh` to connect to [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html) at high speed.

## Convert Partition Format from ext4 to btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) can take disk snapshots for easy backup.

First, enter the rescue system

![](https://i-01.eu.org/1718300448.avif)

Select Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Wait for the server to reboot

When using ssh, the fingerprint may change. Use `ssh-keygen -R ip` to clean up

Then run the following script to convert the partition:

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

The script will automatically reboot the system after the conversion is successful.

### Check the btrfs compression ratio

By default, it will compress automatically. The command to check the compression ratio is as follows:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manual Compression

If you have a perfectionist streak, you can also perform a full disk compression manually with the following command:

```bash
btrfs filesystem defragment -r -czstd /
```

As shown in the figure below, after manual compression in the new system, nearly 100MB was further compressed.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Create a Btrfs snapshot backup with snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) is the best companion for Btrfs snapshots.

The initialization script will create a `~/ubuntu` directory, simply run the following command:

```
~/ubuntu/snapper/init.sh
```

The script content can be found in [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Use `snapper list-configs` to view the subvolumes with snapshots set

![](https://i-01.eu.org/1718302689.avif)

Use `snapper -c mnt list` to view the snapshots of a specific subvolume

View the specific backup settings for this subvolume in `/etc/snapper/configs/mnt`

For more references:

[Play easily with Btrfs snapshot features using snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo provides server snapshot functionality, but does not support scheduled snapshots. I wrote a [github action script](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) to take daily snapshots.

![](https://i-01.eu.org/1718304206.avif)

To restore a server snapshot, first click on "Control" in the management menu

![](https://i-01.eu.org/1718304275.avif)

Then click on "Snapshots" to restore.

![](https://i-01.eu.org/1718304063.avif)

However, this snapshot granularity is too large. Once restored, all new data will be completely lost, so use it with caution.

It's usually more convenient to use btrfs snapshots.

## Rescue System Details

After entering the rescue system and being able to [tcping](https://github.com/paradiseduo/tcping) through on port 22, there will be 2-3 minutes where you cannot access with the set password. Wait a bit, and it will be fine.

```
tcping ip 22 -c 9999
```

You can monitor the accessibility of the port.

### How to access the hard drive and restore snapshots after entering the rescue system

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

You can then view the snapshots, for example:

```
snapper -c etc list
```

View changes in the snapshot file

```
snapper -c etc status 5..6
```

View specific difference text

```
snapper -c etc diff 3..5
```

Restore the snapshot: For example, undo all changes after snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Enable Log Persistence

Enabling log persistence in the rescue system requires you to manually create the corresponding directories and perform some additional steps, as you may not have a running systemd service. Here are steps you can try:

First, chroot, then:

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot into your Ubuntu system: After making the above changes, you need to reboot your machine normally and log into your Ubuntu system instead of the rescue system.

This way, systemd-journald will start with the new configuration and begin persistently storing logs on the hard drive.

Remember that the above operations are performed in the rescue system, so they will only take effect after the system reboots and is no longer in rescue mode.

This means you will not see any existing logs become persistent immediately, but all logs generated after this will be preserved.

This allows you to view the ssh service logs

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notes on Difficult and Complicated Issues

### Solve the strange problem: the server cannot ssh

I previously used a github action script for automatic compilation and deployment, but found that after deployment, the service could not ssh.

Enter the rescue system and check the logs for a permissions issue:

`Missing privilege separation directory: /run/sshd`

You can create this directory with the following command:

```
chown root:root /
systemd-tmpfiles --create
```

Efter upprepade undersökningar beror det på github action Användare `uid` av tar är `1001`

If the `--no-same-owner` parameter is not specified during tar extraction, it will be decompressed as the `uid` of the `1001` user

As a result, rsync will change the user group of the root directory, and then you will not be able to log in via ssh after rebooting.

Modify the extraction script as follows:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```