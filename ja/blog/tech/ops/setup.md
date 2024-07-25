# サーバーを初期化します (BTRFS パーティション、スナッパーのスケジュールされたスナップショットを使用)

## contabo購入サーバー

contabo はドイツの格安 VPS プロバイダーで、長い歴史 (20 年以上) と多くのユーザー (20 万人以上) を抱えているため、逃げ出す心配はありません。

[contabo.com](//contabo.com)を購入するVPS 、より安価なユーロ価格を選択することを忘れないでください。

<img alt="" src="https://i-01.eu.org/1718285782.avif">

contabo には 1 回限りのインストール料金がかかります。
ただし、インストール料金が無料になる日が毎月数日あります。登録して、プロモーション メールに注意してください。

ヨーロッパの無料エリア料金に加えて、他の地域ではさまざまな値上げレベルが設定されています。

とにかく、cloudflareを使用した後、どのサーバーにも大きな違いはありません。

最終的な構成は以下の通りで、16GBメモリ、6CPU、200GB NVMe、月額9.50ユーロ、74.43人民元に相当します。

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**この価格は、Alibaba Cloud や Amazon の価格のほぼ 10 分の 1 です**。

<img alt="" src="https://i-01.eu.org/1718356956.avif">

パフォーマンスとパラメータを実行するために[Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)を使用しました。

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

表示CPUモデル`AMD EPYC 9224 24-Core Processor`シングルコア パフォーマンス スコア1285
、マルチコアスコア4277結果をもっと見る[vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

一度に 3 台のサーバーを購入し、同時にアクティブ化することで、サーバーが同じコンピューター ルームに配置されるようになり、将来の高可用性の構築が容易になります。

そのサーバーは時々ハングアップするため、高可用性によって Web サイトへのアクセスが確保されます。

新規ユーザーは購入時に実名認証のためIDカードの提出が必要。

## パスワード不要のログインを構成する

数分後、すべてのサーバーがアクティブになりました。

まず、ローカル マシンの`~/.ssh/config`のエイリアスを設定しIP `ssh-copy-id root@c2`を使用してパスワードなしのログインを構成します。

<img alt="" src="https://i-01.eu.org/1718287198.avif">

この[ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh)を変更して、初期化構成をより速く完了することができます。

パスワード不要の設定が完了したらすぐに使えます[pdsh](https://github.com/chaos/pdsh)一括で操作できるので便利です。

1 つ目は、IPv6 を手動で有効にしてテストすることです。

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

次に、ワンクリックでシステムを ubuntu 24 にアップグレードし、一般的に使用されるソフトウェアをインストールします。

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 は、言語を中国語に、タイムゾーンを北京に切り替えることを意味します。

デフォルトでインストールされるソフトウェアは、 [mise](https://github.com/jdx/mise) 、 [direnv](https://direnv.net/)などの個人的な使用習慣に従って構成されています。必要に応じて[i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu)ウェアハウスをコピーし、必要に応じて変更できます。

この手順には長い時間がかかりますが、30 分ほど待つと、一般的に使用されるソフトウェアのアップグレードとインストールが成功します。次のコマンドで確認できます。

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## モッシュは SSH を高速化します

ヨーロッパから中国へのネットワークは安定し`ssh`いないので、高速化するために使用することをお勧めします[mosh](//mosh.org)

次のように、ローカル マシンの`~/.bin` (主に環境変数`PATH`に追加) ディレクトリに`c0`スクリプトを作成します。

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

作成後、実行可能権限とソフト`c2`を付与します`c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

将来的には、 `c0` 、 `c1`直接入力したり、 `mosh`使用して直接接続して[tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## パーティション形式を ext4 から btrfs に変換する

[btrfs](https://wikipedia.org/wiki/Btrfs)簡単にバックアップできるようにディスクのスナップショットを作成できます。

まず救助システムに入る

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Debian レスキューを選択します

<img alt="" src="https://i-01.eu.org/1718300753.avif">

サーバーが再起動するまで待ちます

指紋の変化が発生する場合はssh `ssh-keygen -R ip`を使用してください。

次に、次のスクリプトを実行してパーティションを変換します。

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

変換が成功すると、スクリプトはシステムを自動的に再起動します。

### btrfs 圧縮率を表示する

デフォルトでは自動的に圧縮されます。圧縮率を確認するコマンドは次のとおりです。

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### 手動圧縮

完璧主義者であれば、手動でディスク全体の圧縮を実行することもできます。コマンドは次のとおりです。

```bash
btrfs filesystem defragment -r -czstd /
```

以下の図に示すように、新しいシステムで手動圧縮した後、さらに 100MB 近くが圧縮されたことがわかります。

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### スナッパーを使用して Btrfs スナップショット バックアップを作成する

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfsバックアップの最良のパートナーです。

初期化スクリプトによって`~/ubuntu`ディレクトリが作成されます。次のコマンドを実行するだけです。

```
~/ubuntu/snapper/init.sh
```

スクリプトの内容でお会いしましょう[github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

スナップショットが設定されているサブボリュームを表示するには、 `snapper list-configs`を使用します。

<img alt="" src="https://i-01.eu.org/1718302689.avif">

サブボリュームのスナップショットを表示するには`snapper -c mnt list`を使用します

`/etc/snapper/configs/mnt`このサブボリュームの特定のバックアップ設定を表示できます。

その他の参考資料:

[Btrfsのスナップショット機能で簡単プレイsnapper](https://zhuanlan.zhihu.com/p/31082518)

## コンタボサーバーのスナップショット

contaboサーバーのスナップショット機能を提供しますが、スケジュールされたスナップショットはサポートしていません。毎日のスナップショットを取得するための[github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)を作成しました。

<img alt="" src="https://i-01.eu.org/1718304206.avif">

サーバーのスナップショットを復元するには、まず管理メニューの「Crontol」をクリックします。

<img alt="" src="https://i-01.eu.org/1718304275.avif">

次に、「スナップショット」をクリックして復元します。

<img alt="" src="https://i-01.eu.org/1718304063.avif">

ただし、このスナップショットの粒度が大きすぎると、復元すると新しく追加されたデータが完全に失われるため、注意して使用してください。

通常は、btrfs スナップショットを使用する方が便利です。

## レスキューシステムの詳細

レスキュー システムに入ります22 [tcping](https://github.com/paradiseduo/tcping)ポートにアクセスできるようになると、 2-3分間は設定したパスワードでアクセスできなくなります。少し待つだけで問題ありません。

```
tcping ip 22 -c 9999
```

ポートのアクセス可能性を監視できます。

### &に入った後にハードドライブにアクセスする方法 スナップショットを復元する

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

スナップショットを表示できます。たとえば、

```
snapper -c etc list
```

スナップショット ファイルの変更を表示する

```
snapper -c etc status 5..6
```

特定の差分テキストを表示する

```
snapper -c etc diff 3..5
```

スナップショットの復元: たとえば、スナップショット 5 以降のすべての変更を元に戻します。

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### ログの永続性を有効にする

systemd サービスが実行されていない可能性があるため、レスキュー システムでログの永続性を有効にするには、対応するディレクトリを手動で作成し、いくつかの追加手順を実行する必要があります。以下の手順を試すことができます。

最初に chroot、次に

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Ubuntu システムを再起動する: 上記の変更を加えた後、マシンを通常どおり再起動し、レスキュー システムではなく Ubuntu システムを再起動する必要があります。

このようにして、systemd-journald は新しい構成で起動し、ハードディスクへのログの永続的な保存を開始します。

上記の操作はレスキュー システムで実行されるため、これらの変更はシステムが再起動され、レスキュー モードでなくなった後にのみ有効になることに注意してください。

これは、既存のログへの変更がすぐに永続化されることはありませんが、これ以降に生成されたすべてのログは永続化されることを意味します。

このようにして、ssh サービスのログを表示できます。

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## 難しい病気や複雑な病気についての注意点

### サーバーが SSH 接続できないという奇妙な問題を解決します

以前、github アクションを使用して自動コンパイルおよびデプロイメント スクリプトを作成しましたが、デプロイメント サービスを ssh にできないことがわかりました。

レスキュー システムに入ってログを確認するには、権限の問題があります。

`Missing privilege separation directory: /run/sshd`

次のコマンドを使用してこのディレクトリを作成できます

```
chown root:root /
systemd-tmpfiles --create
```

調査を重ねた結果、 tar `1001`アップロードしたユーザー`uid` github action

tar解凍はパラメータなしで行う必要があります`--no-same-owner` `1001` user 用に`uid`されます。

その結果、rsync によりルート ディレクトリのユーザー グループが変更され、再起動後に ssh にログインできなくなります。

解凍スクリプトを次のように変更します。

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

