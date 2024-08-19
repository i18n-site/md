# 初始化服務器（ 用 BTRFS 分區，snapper 定時快照 ）

## contabo 購買服務器

contabo 是德國的廉價 VPS 供應商，历史悠久（二十多年），用戶眾多（二十多萬），不用擔心跑路。

購買 [contabo.com](//contabo.com) 的 VPS，記得選歐元定價，更便宜。

![](https://i-01.eu.org/1718285782.avif)

contabo 有一次性的安裝費。
不過，每個月都有几天搞活動免安裝費，注冊后關注促銷郵件即可。

除歐洲免費區域費用外，其他不同地區有不同程度的加價。

我就選擇歐洲的服務器，反正套上 cloudflare 后， 服務器在哪兒區别都不大。

最終配置如下，16GB 內存， 6CPU， 200 GB NVMe，一個月 9.50 歐元，折合 74.43 人民幣。

![](https://i-01.eu.org/1718286008.avif)

**這個價格几乎是阿里云、亞馬遜價格的十分之一**。

![](https://i-01.eu.org/1718356956.avif)

我用 [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) 跑了一下性能和參數：

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

顯示 CPU 型號`AMD EPYC 9224 24-Core Processor`，單核性能得分 1285
， 多核得分 4277。更多結果見 [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

我一次性買了三台同時開通，這個可以確保服務器在一個機房，方便后續搭建高可用。

它的服務器偶爾會掛，通過高可用能保证網站的可訪問性。

新用戶購買需要提交身份证做實名認证。

## 配置免密登錄

几分钟后，服務器就全部開通了，

第一件事情，編輯本機的`~/.ssh/config`給 IP 設置别名， 然后用`ssh-copy-id root@c2`配置免密登錄。

![](https://i-01.eu.org/1718287198.avif)

可以魔改此腳本 [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) 來更快的完成初始化配置。

免密配置好之后，就可以用 [pdsh](https://github.com/chaos/pdsh) 批量操作了，方便。

首先是手動啟用 ipv6 ，并測試

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

然后一鍵升級系統到 ubuntu 24 ，并安裝常用軟件 。

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 表示切換語言為中文，時區為北京。

默認安裝的軟件是按我個人使用習慣配置的，比如 [mise](https://github.com/jdx/mise)、[direnv](https://direnv.net/) 等 ，有需要可以复刻 [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) 倉庫，并按需修改。

這一步需要比較久，等待半小時后，升級并安裝常用軟件成功。可以用下面的命令確認下：

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh 提速 ssh

歐洲到中國網絡并不穩定，推荐用 [mosh](//mosh.org) 來給`ssh`提速。

在本機的`~/.bin`（主要添加到環境變量`PATH`） 目錄下創建`c0`腳本如下：

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

創建完成后賦予可執行權限并軟連接`c1`、`c2`。

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

以后就可以直接輸入`c0`、`c1`就可以用`mosh`高速直連并進入 [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html) 了。

## 分區格式從 ext4 轉 btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) 可以做磁盤快照，方便備份。

首先進入救援系統

![](https://i-01.eu.org/1718300448.avif)

選擇 Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

等待服務器重啟

ssh 的時候會出現指紋變化，用`ssh-keygen -R ip`來清理

然后運行下面的腳本轉換分區

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

腳本會在轉換成功后自動重啟系統。

### 查看 btrfs 壓縮率

默認會自動壓縮，查看壓縮率命令如下

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### 手動壓縮

如果有完美主義潔癖，也可以手動做一次全盤壓縮，命令如下

```bash
btrfs filesystem defragment -r -czstd /
```

如下圖，可以看到，新系統手動壓縮之后，多壓縮了接近 100MB。

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### 用 snapper 創建 Btrfs 快照備份

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) 是 Btrfs 快照備份的最佳拍檔。

初始化腳本會創建`~/ubuntu`目錄，直接運行下面命令即可：

```
~/ubuntu/snapper/init.sh
```

腳本內容見 [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

用`snapper list-configs`可以查看設置了快照的子卷

![](https://i-01.eu.org/1718302689.avif)

用`snapper -c mnt list`可以查看某個子卷的快照

`/etc/snapper/configs/mnt`可以查看這個子卷的備份具體設置

更多參考：

[用 snapper 輕松玩轉 Btrfs 的快照功能](https://zhuanlan.zhihu.com/p/31082518)

## contabo 服務器快照

contabo 提供了服務器快照功能，但是不支持定時快照，我寫了一個 [github action 腳本](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)來做每日快照。

![](https://i-01.eu.org/1718304206.avif)

想恢复服務器快照，先在管理菜單中點擊 Crontol

![](https://i-01.eu.org/1718304275.avif)

然后，點擊 Snapshots 即可恢复。

![](https://i-01.eu.org/1718304063.avif)

不過這種快照粒度太大，一旦恢复，新增的數據會完全丟失，請謹慎使用。

平時還是用 btrfs 的快照更方便。

## 救援系統細節

進入救援系統，在 22 端口可以 [tcping](https://github.com/paradiseduo/tcping) 通之后，會有 2-3 分钟無法用設置的密碼訪問，稍等一下就好了。

```
tcping ip 22 -c 9999
```

可以監控端口的可訪問性。

### 進入救援之后怎么訪問硬盤 & 恢复快照

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

查看快照文件改動

```
snapper -c etc status 5..6
```

查看具體差異文本

```
snapper -c etc diff 3..5
```

恢复快照 : 比如撤銷快照 5 之后的所有改動

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### 開啟日志持久化

在救援系統下開啟日志持久化需要你手動創建對應的目錄并執行一些額外步驟，因為你可能沒有運行中的 systemd 服務。這里是你可以尝試的步驟：

先 chroot, 然后

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

重啟到你的 Ubuntu 系統：進行了以上更改后，你需要正常重啟你的機器，并進入到你的 Ubuntu 系統中而不是救援系統。

這樣，systemd-journald 會以新的配置啟動，開始在硬盤上持久化地存儲日志。

請記住，以上操作是在救援系統中進行的，因此一旦系統重啟并且不再處于救援模式，那些改動才會生效。

這意味着你不會立刻看到任何已經存在的日志變成持久化的變化，但所有在這之后產生的日志會被持久保存。

這樣可以查看 ssh 服務的日志

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## 疑難雜症筆記

### 解決詭異問題：服務器無法 ssh

之前用 github action 做了一個自動編譯部署的腳本，但是发現部署服務就沒法 ssh 了。

進入救援系統，看日志是權限問題 :

`Missing privilege separation directory: /run/sshd`

可以用下面命令來創建這個目錄

```
chown root:root /
systemd-tmpfiles --create
```

經過反复排查, 是因為 github action 上 tar 打包的用戶`uid`是`1001`

tar 解包必须如果沒有參數`--no-same-owner`, 會解壓為`uid`為`1001`用戶

進而導致 rsync 會改變了根目錄的用戶組 , 然后重啟后就無法登錄 ssh。

修改解壓腳本如下即可：

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```