# Initialize the Server (with BTRFS partition and Snapper scheduled snapshot)

## Purchase the Server from contabo

Contabo is a cheap VPS provider in Germany with a long history (more than 20 years) and a large number of users (more than 200,000), so there is no need to worry about it running away.

When purchasing the VPS from [contabo.com](//contabo.com), remember to choose the Euro pricing, which is cheaper.

![](https://i-01.eu.org/1718285782.avif)

There is a one-time installation fee for contabo.
However, there are several days every month when the installation fee is waived. Just register and pay attention to the promotional emails.

In addition to the free area fee in Europe, other regions have different levels of price increments.

I chose a European server. Anyway, after using cloudflare, the difference between the servers is not significant.

The final configuration is as follows: 16GB memory, 6 CPUs, 200 GB NVMe, 9.50 euros per month, which is equivalent to 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**This price is almost one-tenth of the prices of Alibaba Cloud and Amazon**.

![](https://i-01.eu.org/1718356956.avif)

I used [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) to run the performance and parameters:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Showing the CPU model `AMD EPYC 9224 24-Core Processor`, the single-core performance score is 1285
, and the multi-core score is 4277. See more results at [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

I purchased three servers simultaneously and activated them at the same time. This ensures that the servers are in the same machine room, making it easier to build high availability in the future.

Its servers occasionally hang, and high availability ensures the accessibility of the website through this.

New users need to submit their ID cards for real-name authentication when purchasing.

## Configure password-free login

After a few minutes, all the servers were activated

The first thing is to edit the `~/.ssh/config` of the local machine to set an alias for the IP, and then use `ssh-copy-id root@c2` to configure password-free login.

![](https://i-01.eu.org/1718287198.avif)

You can modify this [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) to complete the initialization configuration more quickly.

After the password-free configuration is completed, you can use [pdsh](https://github.com/chaos/pdsh) for batch operation, which is convenient.

The first step is to manually enable ipv6 and test

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Then upgrade the system to ubuntu 24 with one click and install commonly used software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 means switching the language to Chinese and the time zone to Beijing.

The software installed by default is configured according to my personal usage habits, such as [mise](https://github.com/jdx/mise), [direnv](https://direnv.net/), etc. If necessary, you can replicate the [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) repository and modify it as needed.

This step takes a relatively long time. After waiting for half an hour, the upgrade and installation of commonly used software will be successful. You can confirm this with the following command:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## Mosh speeds up ssh

The network from Europe to China is not stable. It is recommended to use [mosh](//mosh.org) to speed up `ssh`.

Create the `c0` script in the local directory `~/.bin` (mainly added to the environment variable `PATH`) as follows:

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

After creation, grant executable permissions and create soft links `c1` and `c2`.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In the future, you can directly enter `c0` and `c1` to use `mosh` for high-speed direct connection and enter [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html).

## Convert the partition format from ext4 to btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) can take disk snapshots for easy backup.

First, enter the rescue system

![](https://i-01.eu.org/1718300448.avif)

Choose Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Wait for the server to restart

When ssh, there will be fingerprint changes. Use `ssh-keygen -R ip` to clean it up

Then run the following script to convert the partition

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

The script will automatically restart the system after the conversion is successful.

### View the btrfs compression ratio

It will automatically compress by default. The command to check the compression ratio is as follows:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manual compression

If you have a perfectionist complex, you can also perform a full-disk compression manually. The command is as follows:

```bash
btrfs filesystem defragment -r -czstd /
```

As shown in the figure below, you can see that after manual compression in the new system, nearly 100MB more was compressed.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Create a Btrfs snapshot backup with Snapper

[Snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) is the best partner for Btrfs snapshot backup.

The initialization script will create the `~/ubuntu` directory. Just run the following command:

```
~/ubuntu/snapper/init.sh
```

The script content can be seen in [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Use `snapper list-configs` to view the subvolumes for which snapshots are set

![](https://i-01.eu.org/1718302689.avif)

Use `snapper -c mnt list` to view a snapshot of a subvolume

`/etc/snapper/configs/mnt` can view the specific backup settings of this subvolume

More references:

[Easily play with the snapshot function of Btrfs with Snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo provides the server snapshot function, but does not support timed snapshots. I wrote a [github action script](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) to take daily snapshots.

![](https://i-01.eu.org/1718304206.avif)

To restore a server snapshot, first click Crontol in the management menu

![](https://i-01.eu.org/1718304275.avif)

Then, click Snapshots to restore.

![](https://i-01.eu.org/1718304063.avif)

However, the granularity of this snapshot is too large. Once restored, the newly added data will be completely lost, so please use it with caution.

Usually, it is more convenient to use the snapshots of btrfs.

## Rescue System Details

Enter the rescue system. After the port 22 is [tcping](https://github.com/paradiseduo/tcping) passable, there will be 2-3 minutes during which it cannot be accessed with the set password. Just wait for a moment and it will be okay.

```
tcping ip 22 -c 9999
```

The accessibility of the port can be monitored.

### How to access the hard drive after entering the rescue & restore the snapshot

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

View the changes of the snapshot file

```
snapper -c etc status 5..6
```

View the specific difference text

```
snapper -c etc diff 3..5
```

Restore the snapshot: For example, undo all the changes after snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Enable Log Persistence

Enabling log persistence under the rescue system requires you to manually create the corresponding directory and perform some additional steps, because you may not have a running systemd service. Here are the steps you can try:

First chroot, and then

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot into your Ubuntu system: After making the above changes, you need to reboot your machine normally and enter your Ubuntu system instead of the rescue system.

In this way, systemd-journald will start with the new configuration and begin to store logs persistently on the hard disk.

Keep in mind that the above operations are performed in the rescue system, so those changes will not take effect until the system is rebooted and no longer in the rescue mode.

This means that you will not immediately see any changes in the existing logs that become persistent, but all the logs generated after that will be persisted.

In this way, you can view the logs of the ssh service

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notes on Difficult and Complicated Diseases

### Solve the Weird Problem: The Server Cannot ssh

I used github action to make an automatic compilation and deployment script before, but found that the deployment service could not be ssh.

Entering the rescue system and looking at the logs is a permission issue:

`Missing privilege separation directory: /run/sshd`

You can create this directory with the following command

```
chown root:root /
systemd-tmpfiles --create
```

After repeated investigations, it is because the user `uid` of github action tar is `1001`

tar Unpacking must be if there is no parameter `--no-same-owner`, it will be decompressed to `uid` for `1001` users

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