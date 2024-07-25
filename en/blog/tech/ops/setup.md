# Initialize the Server (Use BTRFS Partition, Snapper Scheduled Snapshot)

## contabo Purchase Server

contabo is a cheap VPS provider in Germany with a long history (more than 20 years) and many users (more than 200,000), so there is no need to worry about running away.

VPS buying [contabo.com](//contabo.com) remember to choose Euro pricing, which is cheaper.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

There is a one-time installation fee for contabo.
However, there are a few days every month where the installation fee is free. Just register and pay attention to the promotional emails.

In addition to the free area fee in Europe, other regions have different levels of price increases.

I chose a European server. Anyway, after using cloudflare, there is not much difference between the servers.

The final configuration is as follows, 16GB memory, 6CPU, 200 GB NVMe, 9.50 euros a month, equivalent to 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**This price is almost one-tenth of the price of Alibaba Cloud and Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

I used [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) to run the performance and parameters:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Display CPU Model `AMD EPYC 9224 24-Core Processor` single-core performance score 1285
, multi-core score 4277 . See more results [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

I bought three servers at one time and activated them at the same time. This ensures that the servers are in the same computer room, making it easier to build high availability in the future.

Its servers occasionally hang up, ensuring website accessibility through high availability.

New users need to submit their ID cards for real-name authentication when purchasing.

## Configure Password-Free Login

After a few minutes, the servers were all activated.

The first thing is to edit the local machine's `~/.ssh/config` Set an alias for IP and then use `ssh-copy-id root@c2` to configure password-free login.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

You can modify this [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) to complete the initialization configuration faster.

After the password-free configuration is completed, you can use it [pdsh](https://github.com/chaos/pdsh) It can be operated in batches, which is convenient.

The first is to manually enable ipv6 and test

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Then upgrade the system to ubuntu 24 with one click and install commonly used software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 means switching language to Chinese and time zone to Beijing.

The software installed by default is configured according to my personal usage habits, such as [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. If necessary, you can copy the [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse and modify it as needed.

This step takes a long time. After waiting for half an hour, the upgrade and installation of commonly used software will be successful. You can confirm it with the following command:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Speeds Up ssh

The network from Europe to China is not stable. It is recommended to use [mosh](//mosh.org) Come to speed up `ssh`

Create a `c0` script in the local machine's `~/.bin` (mainly added to the environment variable `PATH` ) directory as follows:

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

After creation, grant executable permissions and soft-link `c1` , `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In the future, you can directly enter `c0` , `c1` and you can use `mosh` to connect directly and enter [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Convert Partition Format From ext4 to btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Can take disk snapshots for easy backup.

First enter the rescue system

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Choose Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Wait for the server to restart

Fingerprint changes will occur when ssh , use `ssh-keygen -R ip` to clean it

Then run the following script to convert the partition

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

The script will automatically restart the system after the conversion is successful.

### View btrfs Compression Ratio

It will automatically compress by default. The command to check the compression ratio is as follows:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manual Compression

If you are a perfectionist, you can also perform a full disk compression manually. The command is as follows

```bash
btrfs filesystem defragment -r -czstd /
```

As shown in the figure below, you can see that after manual compression in the new system, nearly 100MB more was compressed.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Create a Btrfs Snapshot Backup With snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) is the best partner for Btrfs backup.

The initialization script will create the `~/ubuntu` directory, just run the following command:

```
~/ubuntu/snapper/init.sh
```

See you in the script content [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Use `snapper list-configs` to view the subvolumes for which snapshots are set.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Use `snapper -c mnt list` to view a snapshot of a subvolume

`/etc/snapper/configs/mnt` You can view the specific backup settings of this subvolume

More references:

[Easily play with the snapshot function of Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo Provides server snapshot function, but does not support scheduled snapshots. I wrote a [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) to take daily snapshots.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

To restore a server snapshot, first click Crontol in the management menu

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Then, click Snapshots to restore.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

However, the granularity of this snapshot is too large. Once restored, the newly added data will be completely lost, so please use it with caution.

It is usually more convenient to use btrfs snapshots.

## Rescue System Details

Enter the rescue system 22 After the port is [tcping](https://github.com/paradiseduo/tcping) accessible, you will not be able to access it with the set password for 2-3 minutes. Just wait a moment and it will be fine.

```
tcping ip 22 -c 9999
```

Port accessibility can be monitored.

### How to Access the Hard Drive After Entering Rescue & Restore Snapshot

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

You can view the snapshot, for example

```
snapper -c etc list
```

View snapshot file changes

```
snapper -c etc status 5..6
```

View specific diff text

```
snapper -c etc diff 3..5
```

Restore snapshot: For example, undo all changes after snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Enable Log Persistence

Enabling log persistence under a rescue system requires you to manually create the corresponding directory and perform some additional steps, because you may not have a running systemd service. Here are steps you can try:

First chroot, then

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot into your Ubuntu system: After making the above changes, you need to reboot your machine normally and into your Ubuntu system instead of the rescue system.

In this way, systemd-journald will start with the new configuration and start storing logs persistently on the hard disk.

Keep in mind that the above operations are performed on a rescue system, so those changes will only take effect once the system is rebooted and no longer in rescue mode.

This means that you won't immediately see any changes to existing logs become persistent, but all logs generated after this will be persisted.

This way you can view the logs of the ssh service

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notes on Difficult and Complicated Diseases

### Solve the Weird Problem: The Server Cannot ssh

I used github action to make an automatic compilation and deployment script before, but found that the deployment service could not ssh.

Entering the rescue system and looking at the logs is a permission issue:

`Missing privilege separation directory: /run/sshd`

You can create this directory with the following command

```
chown root:root /
systemd-tmpfiles --create
```

After repeated investigations, it is because github action The user who uploaded tar `uid` is `1001`

tar Unpacking must be done without parameters `--no-same-owner` it will be decompressed into `uid` for `1001` user

As a result, rsync will change the user group of the root directory, and then you will not be able to log in to ssh after restarting.

Modify the decompression script as follows:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

