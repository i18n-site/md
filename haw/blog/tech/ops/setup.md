# E Hoʻomaka I Ke Kikowaena (E Hoʻohana I Ka ʻāpana BTRFS, Snapper Scheduled Snapshot)

## Kikowaena Kūʻai contabo

ʻO contabo kahi mea hoʻolako VPS cheap ma Germany me ka mōʻaukala lōʻihi (ʻoi aku ma mua o 20 mau makahiki) a me nā mea hoʻohana he nui (ʻoi aku ma mua o 200,000), no laila ʻaʻohe pono e hopohopo no ka holo ʻana.

VPS ke kūʻai ʻana [contabo.com](//contabo.com) e hoʻomanaʻo e koho i ke kumukūʻai Euro, ʻoi aku ka maikaʻi.

![](https://i-01.eu.org/1718285782.avif)

Aia kahi uku hoʻokomo hoʻokahi manawa no contabo.
Eia nō naʻe, aia kekahi mau lā i kēlā me kēia mahina kahi manuahi e hoʻopaʻa inoa a hoʻolohe i nā leka uila.

Ma waho aʻe o ka uku ʻāina manuahi ma ʻEulopa, loaʻa i nā wahi ʻē aʻe nā pae like ʻole o ka piʻi ʻana o ke kumukūʻai.

Ua koho au i kahi kikowaena ʻEulopa, ma hope o ka hoʻohana ʻana i cloudflare, ʻaʻohe ʻokoʻa ma waena o nā kikowaena.

ʻO ka hoʻonohonoho hope e like me kēia, 16GB memo, 6CPU, 200 GB NVMe, 9.50 euros i hoʻokahi mahina, e like me 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**ʻO kēia kumukūʻai kokoke i hoʻokahi hapaʻumi o ke kumukūʻai o Alibaba Cloud a me Amazon** .

![](https://i-01.eu.org/1718356956.avif)

[Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) hoʻohana au i ka hana a me nā ʻāpana:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

1285 hōʻike `AMD EPYC 9224 24-Core Processor` CPU
, helu helu nui 4277 E ʻike i nā hualoaʻa hou aku [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ua kūʻai au i ʻekolu mau kikowaena i ka manawa hoʻokahi a hoʻāla iā lākou i ka manawa like e hōʻoiaʻiʻo nei i nā kikowaena i loko o ka lumi kamepiula like, e maʻalahi ai ke kūkulu ʻana i ka loaʻa kiʻekiʻe i ka wā e hiki mai ana.

Hoʻopili ʻia kāna mau kikowaena i kekahi manawa, e hōʻoia ana i ka loaʻa ʻana o ka pūnaewele ma o ka loaʻa kiʻekiʻe.

Pono nā mea hoʻohana hou e hoʻouna i kā lākou kāleka ID no ka hōʻoia inoa maoli i ke kūʻai ʻana.

## E Hoʻopaʻa Inoa ʻole Me Ka ʻōlelo Huna

Ma hope o kekahi mau minuke, ua hoʻopau ʻia nā kikowaena.

IP ka mea mua e hoʻoponopono i `~/.ssh/config` o ka mīkini kūloko e hoʻonohonoho i kahi inoa inoa, a laila e hoʻohana i `ssh-copy-id root@c2` e hoʻonohonoho i ka ʻōlelo huna ʻole.

![](https://i-01.eu.org/1718287198.avif)

Hiki iā ʻoe ke hoʻololi i kēia [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) e hoʻopau wikiwiki i ka hoʻonohonoho hoʻomaka.

Ma hope o ka pau ʻana o ka hoʻonohonoho ʻana i ka ʻōlelo huna, hiki iā ʻoe ke hoʻohana iā ia [pdsh](https://github.com/chaos/pdsh)

ʻO ka mea mua, ʻo ia ka hana lima ipv6 a hoʻāʻo

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

A laila hoʻomaikaʻi i ka ʻōnaehana i ka ubuntu 24 me hoʻokahi kaomi a hoʻokomo i nā polokalamu maʻamau.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

ʻO CN=1 ʻo ia ka hoʻololi ʻana i ka ʻōlelo i ka Pākē a me ka palena manawa i Beijing.

Hoʻonohonoho ʻia ka polokalamu i hoʻonohonoho ʻia e like me kaʻu mau hana pilikino, e like me [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. Inā pono, hiki iā ʻoe ke kope i ka [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse a hoʻololi iā ia e like me ka mea e pono ai.

He manawa lōʻihi kēia ʻanuʻu Ma hope o ka kali ʻana no ka hapalua hola, e kūleʻa ana ka hoʻonui ʻana a me ka hoʻokomo ʻana i nā polokalamu maʻamau. Hiki iā ʻoe ke hōʻoia i kēia me kēia kauoha:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## Wikiwiki Ka mosh I Ka ssh

ʻAʻole [mosh](//mosh.org) ka pūnaewele mai ʻEulopa a hiki i `ssh` .

E hana i `c0` mau palapala ma ka papa kuhikuhi kūloko `~/.bin` (hoʻohui nui ʻia i ka ʻano hoʻololi kaiapuni `PATH` ) penei:

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

Ma hope o ka hana ʻana, hāʻawi i nā ʻae hiki ke hoʻokō a me ka loulou palupalu `c1` a me `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

I ka wā e hiki mai ana, hiki iā ʻoe ke komo pololei i `c0` a me `c1` e hoʻohana i `mosh` kiʻekiʻe-wikiwiki pili pololei a komo [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## E Hoʻohuli I Ke ʻano ʻāpana Mai ext4 a I btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs)

E komo mua i ka ʻōnaehana hoʻopakele

![](https://i-01.eu.org/1718300448.avif)

E koho iā Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

E kali a hoʻomaka hou ke kikowaena

E hoʻololi ʻia ka manamana lima, e hoʻohana ssh `ssh-keygen -R ip` e hoʻomaʻemaʻe

A laila e holo i kēia ʻatikala e hoʻohuli i ka pā

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

E hoʻomaka hou ka ʻōnaehana i ka ʻōnaehana ma hope o ka kūleʻa o ka hoʻololi ʻana.

### Nānā btrfs Lākiō Kōmi

E hoʻopaʻa maʻamau ʻo ia ma ke ʻano o ke kauoha e nānā i ka lākiō hoʻopiʻi penei:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Komi Lima

Inā he perfectionist ʻoe, hiki iā ʻoe ke hoʻokō i ka hoʻopihapiha piha piha me ka lima.

```bash
btrfs filesystem defragment -r -czstd /
```

E like me ka mea i hōʻike ʻia ma ke kiʻi ma lalo nei, hiki iā ʻoe ke ʻike ma hope o ka hoʻopili lima ʻana i ka ʻōnaehana hou, kokoke i 100MB ʻoi aʻe i hoʻopaʻa ʻia.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### E Hana I Kahi Kope Kope Kope Btrfs Me snapper

Btrfs [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)

E hana ka palapala hoʻomaka i ka papa kuhikuhi `~/ubuntu` , e holo wale i kēia kauoha:

```
~/ubuntu/snapper/init.sh
```

E ʻike iā ʻoe ma ka ʻatikala [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

E hoʻohana i `snapper list-configs` no ka nānā ʻana i nā subvolumes i hoʻonohonoho ʻia nā kiʻi paʻi.

![](https://i-01.eu.org/1718302689.avif)

E hoʻohana i `snapper -c mnt list` no ka nānā ʻana i kahi kiʻi o kahi subvolume

`/etc/snapper/configs/mnt` hiki ke nānā i nā hoʻonohonoho backup kikoʻī o kēia subvolume

Nā kuhikuhi hou aku:

[E pāʻani maʻalahi me ka hana snapshot o Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Paʻi Kiʻi Kikowaena contabo

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

![](https://i-01.eu.org/1718304206.avif)

No ka hoʻihoʻi ʻana i kahi snapshot server, kaomi mua iā Crontol i ka papa kuhikuhi

![](https://i-01.eu.org/1718304275.avif)

A laila, kaomi Snapshots e hoʻihoʻi.

![](https://i-01.eu.org/1718304063.avif)

Eia nō naʻe, ʻoi aku ka nui o ka nui o kēia kiʻi paʻi ke hoʻihoʻi ʻia, e nalowale loa ka ʻikepili i hoʻohui ʻia, no laila e ʻoluʻolu e hoʻohana me ka akahele.

ʻOi aku ka maʻalahi o ka hoʻohana ʻana i nā snapshot btrfs.

## Nā Kikoʻī ʻōnaehana Hoʻopakele

E hoʻokomo [tcping](https://github.com/paradiseduo/tcping) ka ʻōnaehana 2-3 22

```
tcping ip 22 -c 9999
```

Hiki ke nānā ʻia ka hiki ʻana o ke awa.

### Pehea E Komo Ai I Ka Paʻakikī Ma Hope O Ke Komo ʻana I Ka Hoʻopakele &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Hiki iā ʻoe ke nānā i ka snapshot, no ka laʻana

```
snapper -c etc list
```

Nānā i nā hoʻololi kiʻi paʻi kiʻi

```
snapper -c etc status 5..6
```

Nānā i nā kikokikona ʻokoʻa

```
snapper -c etc diff 3..5
```

Hoʻihoʻi i ka paʻi kiʻi: No ka laʻana, wehe i nā hoʻololi āpau ma hope o ka paʻi kiʻi 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### E Ho'ā I Ka Ho'omau Log

ʻO ka ʻae ʻana i ka hoʻomau i ka log ma lalo o kahi ʻōnaehana hoʻopakele pono ʻoe e hana lima i ka papa kuhikuhi pili a hana i kekahi mau ʻanuʻu ʻē aʻe, no ka mea, ʻaʻohe āu lawelawe systemd holo. Eia nā ʻanuʻu hiki iā ʻoe ke hoʻāʻo:

ʻO ka chroot mua, a laila

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Hoʻomaka hou i kāu ʻōnaehana Ubuntu: Ma hope o ka hoʻololi ʻana i luna, pono ʻoe e hoʻomaka hou i kāu mīkini maʻamau a i kāu ʻōnaehana Ubuntu ma kahi o ka ʻōnaehana hoʻopakele.

Ma kēia ala, hoʻomaka ka systemd-journald me ka hoʻonohonoho hou a hoʻomaka e mālama mau i nā lāʻau ma ka pā paʻa.

E hoʻomanaʻo e hana ʻia nā hana i luna ma kahi ʻōnaehana hoʻopakele, no laila ʻaʻole e hoʻokō ʻia kēlā mau hoʻololi a hiki i ka hoʻomaka hou ʻana o ka ʻōnaehana a ʻaʻole i ke ʻano hoʻopakele.

'O ia ho'i, 'a'ole 'oe e 'ike koke i nā ho'ololi 'ana i nā lā'au e kū nei, akā e ho'omau 'ia nā lā'au a pau i hana 'ia ma hope.

Ma kēia ala hiki iā ʻoe ke nānā i nā lāʻau o ka lawelawe ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Nā Memo No Nā Maʻi Paʻakikī a Paʻakikī

### E Hoʻoholo I Ka Pilikia ʻē: ʻaʻole Hiki I Ka Server Ke ssh

Ua hoʻohana au i ka hana github e hana i kahi hōʻuluʻulu ʻokoʻa a me ka hoʻonohonoho ʻana ma mua, akā ʻike ʻia ʻaʻole hiki ke lawelawe i ka ssh.

ʻO ke komo ʻana i ka ʻōnaehana hoʻopakele a nānā i nā lāʻau he pilikia ʻae:

`Missing privilege separation directory: /run/sshd`

Hiki iā ʻoe ke hana i kēia papa kuhikuhi me kēia kauoha

```
chown root:root /
systemd-tmpfiles --create
```

Ma hope o ka hoʻokolokolo ʻana, ʻo github action ka mea hoʻohana `uid` o tar he `1001`

tar `--no-same-owner` `uid` `1001`

ʻO ka hopena, e hoʻololi ʻo rsync i ka hui mea hoʻohana o ka papa kuhikuhi kumu, a laila ʻaʻole hiki iā ʻoe ke komo i ka ssh ma hope o ka hoʻomaka ʻana.

E hoʻololi i ka palapala decompression penei:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```