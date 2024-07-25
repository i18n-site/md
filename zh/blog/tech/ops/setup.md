# 初始化服务器（ 用 BTRFS 分区，snapper 定时快照 ）

## contabo 购买服务器

contabo 是德国的廉价 VPS 供应商，历史悠久（二十多年），用户众多（二十多万），不用担心跑路。

购买 [contabo.com](//contabo.com) 的 VPS，记得选欧元定价，更便宜。

![](https://i-01.eu.org/1718285782.avif)

contabo 有一次性的安装费。
不过，每个月都有几天搞活动免安装费，注册后关注促销邮件即可。

除欧洲免费区域费用外，其他不同地区有不同程度的加价。

我就选择欧洲的服务器，反正套上 cloudflare 后， 服务器在哪儿区别都不大。

最终配置如下，16GB 内存， 6CPU， 200 GB NVMe，一个月 9.50 欧元，折合 74.43 人民币。

![](https://i-01.eu.org/1718286008.avif)

**这个价格几乎是阿里云、亚马逊价格的十分之一**。

![](https://i-01.eu.org/1718356956.avif)

我用 [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) 跑了一下性能和参数：

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

显示 CPU 型号`AMD EPYC 9224 24-Core Processor`，单核性能得分 1285
， 多核得分 4277。更多结果见 [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

我一次性买了三台同时开通，这个可以确保服务器在一个机房，方便后续搭建高可用。

它的服务器偶尔会挂，通过高可用能保证网站的可访问性。

新用户购买需要提交身份证做实名认证。

## 配置免密登录

几分钟后，服务器就全部开通了，

第一件事情，编辑本机的`~/.ssh/config`给 IP 设置别名， 然后用`ssh-copy-id root@c2`配置免密登录。

![](https://i-01.eu.org/1718287198.avif)

可以魔改此脚本 [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) 来更快的完成初始化配置。

免密配置好之后，就可以用 [pdsh](https://github.com/chaos/pdsh) 批量操作了，方便。

首先是手动启用 ipv6 ，并测试

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

然后一键升级系统到 ubuntu 24 ，并安装常用软件 。

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 表示切换语言为中文，时区为北京。

默认安装的软件是按我个人使用习惯配置的，比如 [mise](https://github.com/jdx/mise)、[direnv](https://direnv.net/) 等 ，有需要可以复刻 [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) 仓库，并按需修改。

这一步需要比较久，等待半小时后，升级并安装常用软件成功。可以用下面的命令确认下：

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh 提速 ssh

欧洲到中国网络并不稳定，推荐用 [mosh](//mosh.org) 来给`ssh`提速。

在本机的`~/.bin`（主要添加到环境变量`PATH`） 目录下创建`c0`脚本如下：

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

创建完成后赋予可执行权限并软连接`c1`、`c2`。

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

以后就可以直接输入`c0`、`c1`就可以用`mosh`高速直连并进入 [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html) 了。

## 分区格式从 ext4 转 btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) 可以做磁盘快照，方便备份。

首先进入救援系统

![](https://i-01.eu.org/1718300448.avif)

选择 Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

等待服务器重启

ssh 的时候会出现指纹变化，用`ssh-keygen -R ip`来清理

然后运行下面的脚本转换分区

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

脚本会在转换成功后自动重启系统。

### 查看 btrfs 压缩率

默认会自动压缩，查看压缩率命令如下

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### 手动压缩

如果有完美主义洁癖，也可以手动做一次全盘压缩，命令如下

```bash
btrfs filesystem defragment -r -czstd /
```

如下图，可以看到，新系统手动压缩之后，多压缩了接近 100MB。

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### 用 snapper 创建 Btrfs 快照备份

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) 是 Btrfs 快照备份的最佳拍档。

初始化脚本会创建`~/ubuntu`目录，直接运行下面命令即可：

```
~/ubuntu/snapper/init.sh
```

脚本内容见 [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

用`snapper list-configs`可以查看设置了快照的子卷

![](https://i-01.eu.org/1718302689.avif)

用`snapper -c mnt list`可以查看某个子卷的快照

`/etc/snapper/configs/mnt`可以查看这个子卷的备份具体设置

更多参考：

[用 snapper 轻松玩转 Btrfs 的快照功能](https://zhuanlan.zhihu.com/p/31082518)

## contabo 服务器快照

contabo 提供了服务器快照功能，但是不支持定时快照，我写了一个 [github action 脚本](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)来做每日快照。

![](https://i-01.eu.org/1718304206.avif)

想恢复服务器快照，先在管理菜单中点击 Crontol

![](https://i-01.eu.org/1718304275.avif)

然后，点击 Snapshots 即可恢复。

![](https://i-01.eu.org/1718304063.avif)

不过这种快照粒度太大，一旦恢复，新增的数据会完全丢失，请谨慎使用。

平时还是用 btrfs 的快照更方便。

## 救援系统细节

进入救援系统，在 22 端口可以 [tcping](https://github.com/paradiseduo/tcping) 通之后，会有 2-3 分钟无法用设置的密码访问，稍等一下就好了。

```
tcping ip 22 -c 9999
```

可以监控端口的可访问性。

### 进入救援之后怎么访问硬盘 & 恢复快照

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

就可以查看快照了 , 比如

```
snapper -c etc list
```

查看快照文件改动

```
snapper -c etc status 5..6
```

查看具体差异文本

```
snapper -c etc diff 3..5
```

恢复快照 : 比如撤销快照 5 之后的所有改动

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### 开启日志持久化

在救援系统下开启日志持久化需要你手动创建对应的目录并执行一些额外步骤，因为你可能没有运行中的 systemd 服务。这里是你可以尝试的步骤：

先 chroot, 然后

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

重启到你的 Ubuntu 系统：进行了以上更改后，你需要正常重启你的机器，并进入到你的 Ubuntu 系统中而不是救援系统。

这样，systemd-journald 会以新的配置启动，开始在硬盘上持久化地存储日志。

请记住，以上操作是在救援系统中进行的，因此一旦系统重启并且不再处于救援模式，那些改动才会生效。

这意味着你不会立刻看到任何已经存在的日志变成持久化的变化，但所有在这之后产生的日志会被持久保存。

这样可以查看 ssh 服务的日志

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## 疑难杂症笔记

### 解决诡异问题：服务器无法 ssh

之前用 github action 做了一个自动编译部署的脚本，但是发现部署服务就没法 ssh 了。

进入救援系统，看日志是权限问题 :

`Missing privilege separation directory: /run/sshd`

可以用下面命令来创建这个目录

```
chown root:root /
systemd-tmpfiles --create
```

经过反复排查, 是因为 github action 上 tar 打包的用户`uid`是`1001`

tar 解包必须如果没有参数`--no-same-owner`, 会解压为`uid`为`1001`用户

进而导致 rsync 会改变了根目录的用户组 , 然后重启后就无法登录 ssh。

修改解压脚本如下即可：

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

