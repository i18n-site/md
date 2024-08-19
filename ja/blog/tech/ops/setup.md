# サーバーを初期化します (BTRFS パーティション、スナッパーのスケジュールされたスナップショットを使用)

## contabo購入サーバー

contabo はドイツの格安 VPS プロバイダーで、長い歴史 (20 年以上) と多くのユーザー (20 万人以上) を抱えているため、逃げ出す心配はありません。

[contabo.com](//contabo.com)を購入するVPS 、より安価なユーロ価格を選択することを忘れないでください。

![](https://i-01.eu.org/1718285782.avif)

contabo には 1 回限りのインストール料金がかかります。
ただし、インストール料金が無料になる日が毎月数日あります。登録して、プロモーション メールに注意してください。

ヨーロッパの無料エリア料金に加えて、他の地域ではさまざまな値上げレベルが設定されています。

とにかく、cloudflareを使用した後、どのサーバーにも大きな違いはありません。

最終的な構成は以下の通りで、16GBメモリ、6CPU、200GB NVMe、月額9.50ユーロ、74.43人民元に相当します。

![](https://i-01.eu.org/1718286008.avif)

**この価格は、Alibaba Cloud や Amazon の価格のほぼ 10 分の 1 です**。

![](https://i-01.eu.org/1718356956.avif)

パフォーマンスとパラメータを実行するために[Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)を使用しました

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

モデル`AMD EPYC 9224 24-Core Processor` 、シングルコア パフォーマンス スコア1285を表示していCPU
、マルチコアスコア4277結果をもっと見る[vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

一度に 3 台のサーバーを購入し、同時にアクティブ化することで、サーバーが同じコンピューター ルームに配置されるようになり、将来の高可用性の構築が容易になります。

そのサーバーは時々ハングアップするため、高可用性によって Web サイトへのアクセスが確保されます。

新規ユーザーは購入時に実名認証のためIDカードの提出が必要。

## パスワード不要のログインを構成する

数分後、すべてのサーバーがアクティブ化されました

まずIPローカル マシンの`~/.ssh/config`を編集してエイリアスを設定し、次に`ssh-copy-id root@c2`使用してパスワードなしのログインを構成します。

![](https://i-01.eu.org/1718287198.avif)

この[ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh)を変更して、初期化構成をより速く完了することができます。

パスワード不要の設定が完了したらすぐに使えます[pdsh](https://github.com/chaos/pdsh)一括で操作できるので便利です。

1 つ目は、IPv6 を手動で有効にしてテストすることです

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

次に、ワンクリックでシステムを ubuntu 24 にアップグレードし、一般的に使用されるソフトウェアをインストールします。

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 は、言語を中国語に、タイムゾーンを北京に切り替えることを意味します。

デフォルトでインストールされるソフトウェアは、 [mise](https://github.com/jdx/mise) 、 [direnv](https://direnv.net/)などの個人的な使用習慣に従って構成されています。必要に応じて[i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu)ウェアハウスをコピーし、必要に応じて変更できます。

この手順には長い時間がかかりますが、30 分ほど待つと、一般的に使用されるソフトウェアのアップグレードとインストールが成功します。これは次のコマンドで確認できます

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## モッシュは SSH を高速化します

ヨーロッパから中国へのネットワークは不安定です。 `ssh`化するには[mosh](//mosh.org)を使用することをお勧めします。

次のように、ローカル ディレクトリ`~/.bin`に`c0`スクリプトを作成します (主に環境変数`PATH`に追加されます)

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

作成後、実行可能権限とソフトリンク`c1`および`c2`付与します。

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

将来的には、 `c0`と`c1`直接入力して`mosh`高速ダイレクト接続を使用し、 [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)と入力できるようになります。

## パーティション形式を ext4 から btrfs に変換する

[btrfs](https://wikipedia.org/wiki/Btrfs)簡単にバックアップできるようにディスクのスナップショットを作成できます。

まず救助システムに入る

![](https://i-01.eu.org/1718300448.avif)

Debian レスキューを選択します

![](https://i-01.eu.org/1718300753.avif)

サーバーが再起動するまで待ちます

ssh指紋が変更されます。クリーンアップするには`ssh-keygen -R ip`使用してください

次に、次のスクリプトを実行してパーティションを変換します

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

変換が成功すると、スクリプトはシステムを自動的に再起動します。

### btrfs 圧縮率を表示する

デフォルトでは自動的に圧縮されます。圧縮率を確認するコマンドは次のとおりです

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### 手動圧縮

完璧主義者であれば、次のコマンドを使用してディスク全体の圧縮を手動で実行することもできます

```bash
btrfs filesystem defragment -r -czstd /
```

下の図に示すように、新しいシステムで手動圧縮した後、さらに 100MB 近くが圧縮されたことがわかります。

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### スナッパーを使用して Btrfs スナップショット バックアップを作成する

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfsバックアップの最良のパートナーです。

初期化スクリプトは`~/ubuntu`ディレクトリを作成します。次のコマンドを実行するだけです

```
~/ubuntu/snapper/init.sh
```

スクリプトの内容でお会いしましょう[github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

スナップショットが設定されているサブボリュームを表示するには、 `snapper list-configs`使用します

![](https://i-01.eu.org/1718302689.avif)

サブボリュームのスナップショットを表示するには`snapper -c mnt list`使用します

`/etc/snapper/configs/mnt`このサブボリュームの特定のバックアップ設定を表示できます

その他の参考資料:

[Btrfsのスナップショット機能で簡単プレイsnapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo 服务器快照

contabo 提供したサーバーのスナップショット機能はありますが、スケジュールされたスナップショットはサポートしていません。毎日のスナップショットを取得するための [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) を作成しました。

![](https://i-01.eu.org/1718304206.avif)

想恢复服务器快照，先在管理 menu 中点击 Crontol

![](https://i-01.eu.org/1718304275.avif)

次に、Snapshots をクリックして復元します。

![](https://i-01.eu.org/1718304063.avif)

ただし、このスナップショットの粒度が大きすぎると、復元すると新しく追加されたデータが完全に失われるため、注意して使用してください。

通常は、btrfsのスナップショットを使用する方が便利です。

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

在救援系统下开启日志持久化需要你手动创建对应的目录并执行一些额外步骤，因为你可能没有运行中的 systemd 服务。这里是你可以尝试的步骤:

先 chroot, 然后

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

重启到你的 Ubuntu 系统:进行了以上更改后，你需要正常重启你的机器，并进入到你的 Ubuntu 系统中而不是救援系统。

这样，systemd-journald 会以新的配置启动，开始在硬盘上持久化地存储日志。

请记住，以上操作是在救援系统中进行的，因此一旦系统重启并且不再处于救援模式，那些改动才会生效。

つまり、既存のログに対する変更がすぐに永続化されることはありませんが、その後生成されるすべてのログは永続的に保存されます。

この方法で、sshサービスのログを確認することができます

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## 複雑な問題や難しい状況に関する注意点を記録します

### サーバーがSSH接続できないという不思議な問題を解決します

以前、GitHub Actionを使用して自動コンパイルおよびデプロイメントのスクリプトを作成しましたが、デプロイメントサービスでSSH接続ができなくなったことが判明しました。

レスキュー・システムに移動し、ログを確認すると、権限問題が原因であることが分かりました

`Missing privilege separation directory: /run/sshd`

以下のコマンドを使用して、このディレクトリを作成してください

```
chown root:root /
systemd-tmpfiles --create
```

調査を重ねた結果、 tarの User `uid`が`1001`あるためですgithub action

tarパラメータ`--no-same-owner`がない場合は解凍する必要があり、 `1001`ユーザーの場合は`uid`に解凍されます

その結果、rsync によりルート ディレクトリのユーザー グループが変更され、再起動後に ssh にログインできなくなります。

解凍スクリプトを以下のように修正してください

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```