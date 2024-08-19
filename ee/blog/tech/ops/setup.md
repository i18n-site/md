# Dze Dɔdzikpɔla Gɔme (Zã BTRFS Mama, Snapper Ɖoɖowɔɖi Ƒe Nɔnɔmetata)

## contabo Nuƒleƒe Ƒe Dɔwɔƒe

contabo nye VPS dɔwɔƒe si ƒe asi bɔbɔ le Germany si ƒe ŋutinya didi (wu ƒe 20) eye ezãla geɖe (wu 200,000), eyata mehiã be nàtsi dzi ɖe sisi ŋu o.

VPS èle [contabo.com](//contabo.com) ɖo ŋku edzi nàtia Euro ƒe asixɔxɔ, si ƒe asi bɔbɔ wu.

![](https://i-01.eu.org/1718285782.avif)

Woxea fe ɖe contabo ɖoɖo ta zi ɖeka.
Gake ŋkeke ʋɛ aɖewo li ɣleti sia ɣleti siwo me woxea fe si woxena ɖe eɖoɖo ɖe eme la femaxee Ðeko nàŋlɔ ŋkɔ eye nàlé ŋku ɖe e-mail siwo wodona ɖe ŋgɔ ŋu.

Tsɔ kpe ɖe nutoame ƒe fe si woxena femaxee le Europa ŋu la, nuto bubuwo ƒe asi dzina ɖe edzi le mɔ vovovowo nu.

Me tia Europa server aɖe Aleke kee wòɖale o, le cloudflare zazã vɔ megbe la, vovototo boo aɖeke mele serverawo dome o.

Ðoɖo mamlɛtɔ le ale, 16GB ŋkuɖodzinu, 6CPU, 200 GB NVMe, 9.50 euro ɣleti sia ɣleti, si sɔ kple 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Ga sia nye Alibaba Cloud kple Amazon ƒe asi ƒe akpa ewolia kloe** .

![](https://i-01.eu.org/1718356956.avif)

Mezã [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Wole Model `AMD EPYC 9224 24-Core Processor` , nu vevi ɖeka ƒe dɔwɔwɔ ƒe dzesi 1285 ɖem fia CPU
, xexlẽdzesi si me nu vevi geɖe le 4277 Kpɔ emetsonu bubuwo [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Meƒle server etɔ̃ le ɣeyiɣi ɖeka me eye mewɔ wo ŋudɔ le ɣeyiɣi ɖeka me Esia wɔnɛ be serverawo le kɔmpiutaxɔ ɖeka me, si wɔnɛ be wònɔa bɔbɔe be woatu high availability ɖo le etsɔme.

Eƒe dɔwɔƒewo tsia kaƒoƒoa nu ɣeaɖewoɣi, si wɔnɛ be woate ŋu age ɖe nyatakakadzraɖoƒea to alesi woate ŋu akpɔe le teƒe geɖe dzi.

Ele be ezãla yeyewo natsɔ woƒe ID-gbalẽviwo aɖo ɖa be woatsɔ aɖo kpe ŋkɔ ŋutɔŋutɔ dzi ne wole nu ƒlem.

## Trɔ Asi Le Gege Ɖe Eme Si Me Nyagbe Ɣaɣla Mele O Ŋu

Le aɖabaƒoƒo ʋɛ aɖewo megbe la, wowɔ dɔ le serverawo katã ŋu.

Nu gbãtɔ IP be nàtrɔ asi le mɔ̃ si le mia gbɔ `~/.ssh/config` ŋu be nàɖo ŋkɔ bubu, eye emegbe nàzã `ssh-copy-id root@c2` atsɔ awɔ ɖoɖo ɖe gege ɖe eme si me nyagbe ɣaɣla mele o.

![](https://i-01.eu.org/1718287198.avif)

Àteŋu atrɔ asi le [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) sia ŋu be nàwu gɔmedzedze ƒe ɖoɖoa nu kabakaba.

Ne wowu ɖoɖowɔɖi si me nyagbe ɣaɣla mele o nu vɔ la, àte ŋu azãe [pdsh](https://github.com/chaos/pdsh)

Gbãtɔe nye be nàtsɔ asi awɔ ipv6 ŋudɔ eye nàdoe kpɔ

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Emegbe nàdo ɖoɖoa ɖe ubuntu 24 dzi kple asiƒoƒo ɖeka eye nàda kɔmpiutadziɖoɖo siwo wozãna zi geɖe la ɖe wò kɔmpiuta dzi.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 fia be woatrɔ gbegbɔgblɔ ɖe Chinagbe me eye woatrɔ ɣeyiɣi ƒe didime ɖe Beijing ŋu.

Woɖo kɔmpiutadziɖoɖo si woda ɖe eme le gɔmedzedzea me la ɖe nye ŋutɔ nye zazã ƒe nɔnɔmewo nu, abe [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , kple bubuawo Ne ehiã la, àte ŋu awɔ kɔpi na [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) nudzraɖoƒea eye nàtrɔ asi le eŋu ne ehiã.

Afɔɖeɖe sia xɔa ɣeyiɣi didi Ne èlala gaƒoƒo afã vɔ la, kɔmpiutadziɖoɖo siwo wozãna zi geɖe la ɖɔɖɔɖo kple wo dede eme akpɔ dzidzedze. Àte ŋu aɖo kpe esia dzi kple sedede si gbɔna:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Wɔa Duƒuƒu ssh

Netwɔƒe si tso Europa yi China meli ke o. Wokafui be [mosh](//mosh.org) be wòawɔ dɔ kabakaba `ssh` .

Wɔ ŋɔŋlɔdzesi `c0` le teƒea ƒe nyatakakadzraɖoƒe `~/.bin` (vevietɔ wotsɔe kpe ɖe nutome ƒe tɔtrɔ `PATH` ŋu) abe alesi gbɔna ene:

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

Le ewɔwɔ vɔ megbe la, na mɔɖeɖe siwo woate ŋu awɔ kple soft-link `c1` kple `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Le etsɔme la, àte ŋu aŋlɔ `c0` kple `c1` tẽ be nàzã kadodo tẽ `mosh` siwo zɔna kabakaba eye nàŋlɔ [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Trɔ Mama Ƒe Nɔnɔme Tso ext4 Yi btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Ate ŋu axɔ disk ƒe fotowo hena backup bɔbɔe.

Gbã la, ge ɖe xɔnameɖoɖoa me

![](https://i-01.eu.org/1718300448.avif)

Tia Debian Xɔname

![](https://i-01.eu.org/1718300753.avif)

Lala be server la nagbugbɔ adze egɔme

ssh Asibidɛ ƒe dzesi ƒe tɔtrɔwo anɔ anyi, zã `ssh-keygen -R ip` nàtsɔ akɔ eŋu

Emegbe nàwɔ script si gbɔna la atsɔ atrɔ mamaa

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script la agbugbɔ adze ɖoɖoa gɔme le eɖokui si ne tɔtrɔa kpɔ dzidzedze.

### Kpɔ btrfs Ƒe Nutete Ƒe Xexlẽme

Aƒoe ɖe enu le eɖokui si le gɔmedzedzea me Sedede si woatsɔ akpɔ nutete ƒe xexlẽme le ale:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Asi Ƒe Nutete

Ne ènye blibodededila la, àte ŋu awɔ disk ƒe nutete bliboa hã kple asi Sededea le ale:

```bash
btrfs filesystem defragment -r -czstd /
```

Abe alesi woɖee fia le nɔnɔmetata si le ete me ene la, àte ŋu akpɔe be le asi ƒe nutete le ɖoɖo yeyea me megbe la, wogaƒoe ɖe enu wòde 100MB kloe.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Wɔ Btrfs Ƒe Nɔnɔmetata Ƒe Megbenya Kple snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs

Gɔmedzedze ƒe ŋɔŋlɔdzesi la awɔ `~/ubuntu` ƒe agbalẽdzraɖoƒea, ɖeko nàwɔ sedede si gbɔna:

```
~/ubuntu/snapper/init.sh
```

Míakpɔ mia gbɔ le nuŋɔŋlɔa me nyawo me [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Zã `snapper list-configs` nàtsɔ akpɔ subvolume siwo woɖo snapshots na.

![](https://i-01.eu.org/1718302689.avif)

Zã `snapper -c mnt list` nàtsɔ akpɔ subvolume ƒe foto kpui aɖe

`/etc/snapper/configs/mnt` ateŋu akpɔ subvolume sia ƒe backup ɖoɖo tɔxɛwo

Nya bubu siwo ŋu woƒo nu tsoe:

[Fe bɔbɔe kple fotoɖeɖe ƒe dɔwɔwɔ si nye Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Ƒe Nɔnɔmetata

contabo Na server snapshot dɔwɔwɔ, gake mewɔa ɖoɖo ɖe snapshot ŋu o Meŋlɔ [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) be maɖe gbesiagbe snapshot.

![](https://i-01.eu.org/1718304206.avif)

Ne èdi be yeagbugbɔ server ƒe nɔnɔmetata aɖe aɖo anyi la, zi Crontol dzi gbã le management menu la me

![](https://i-01.eu.org/1718304275.avif)

Emegbe, zi Snapshots dzi be nàgbugbɔe aɖo.

![](https://i-01.eu.org/1718304063.avif)

Ke hã, foto sia ƒe granularity lolo akpa ne wogbugbɔe ɖo te ko la, nyatakaka yeye siwo wotsɔ kpe ɖe eŋu la abu keŋkeŋ, eyata taflatse zãe kple ŋuɖɔɖɔɖo.

Zi geɖe la, esɔna wu be woazã btrfs ƒe nɔnɔmetatawo.

## Xɔnameɖoɖoa Ŋuti Nyatakakawo

Ge ɖe xɔnameɖoɖoa 22 Ne ʋudzeƒea [tcping](https://github.com/paradiseduo/tcping) woate ŋu age ɖe eme vɔ la, màte ŋu age ɖe eme kple nyagbe ɣaɣla si nèɖo o hena 2-3 minitiwo.

```
tcping ip 22 -c 9999
```

Woate ŋu alé ŋku ɖe melidzeƒea yiyi ŋu.

### Alesi Nàwɔ Age Ɖe Hard Drive La Me Ne Ège Ɖe Rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Le kpɔɖeŋu me, àte ŋu akpɔ fotoa

```
snapper -c etc list
```

Kpɔ fotoɖeɖefia ƒe faɛl ƒe tɔtrɔwo

```
snapper -c etc status 5..6
```

Kpɔ diff text tɔxɛ aɖewo ɖa

```
snapper -c etc diff 3..5
```

Gbugbɔ fotoɖeɖea ɖo: Le kpɔɖeŋu me, gbugbɔ tɔtrɔ siwo katã nèwɔ le fotoɖeɖefia 5 lia megbe la ɖa

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Na Log Persistence Nawɔ Dɔ

Log persistence ƒe dɔwɔwɔ le xɔnameɖoɖo te bia be nàtsɔ asi awɔ agbalẽdzraɖoƒe si sɔ eye nàwɔ afɔɖeɖe bubu aɖewo, elabena ɖewohĩ systemd subɔsubɔdɔ si le dɔ wɔm mele asiwò o. Afɔɖeɖe siwo nàte ŋu ate kpɔe nye esi:

Gbã la, chroot, ekema

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Gbugbɔ dze egɔme ɖe wò Ubuntu ɖoɖoa me: Ne èwɔ tɔtrɔ siwo le etame vɔ la, ele be nàgbugbɔ adze wò mɔ̃a gɔme le mɔ si sɔ nu eye nàge ɖe wò Ubuntu ɖoɖoa me ɖe xɔnameɖoɖoa teƒe.

To mɔ sia dzi la, systemd-journald adze egɔme kple ɖoɖo yeyea eye wòadze nuŋlɔɖiwo dzadzraɖo gɔme madzudzɔmadzudzɔe le hard disk la dzi.

Nenɔ susu me na wò be xɔnameɖoɖo aɖe dzie wowɔa dɔ siwo le etame la, eyata tɔtrɔ mawo madze dɔwɔwɔ gɔme o vaseɖe esime wogbugbɔ dze ɖoɖoa gɔme eye maganɔ xɔname ƒe nɔnɔme me o.

Esia fia be màkpɔ tɔtrɔ aɖeke enumake le nuŋlɔɖi siwo li xoxo siwo va zua esiwo nɔa anyi ɖaa ŋu o, gake nuŋlɔɖi siwo katã wowɔ le ema megbe la anɔ anyi.

Mɔ sia dzi nàto akpɔ ssh subɔsubɔdɔa ƒe nuŋlɔɖiwo

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Nuŋlɔɖi Siwo Ku Ɖe Dɔléle Sesẽwo Kple Esiwo Sesẽ Ŋu

### Kpɔ Kuxi Wɔnukua Gbɔ: Dɔdzikpɔla Mate Ŋu Awɔ ssh O

Me zã github action tsɔ wɔ automatic nuƒoƒoƒu kple dɔwɔwɔ ƒe ŋɔŋlɔdzesi do ŋgɔ, gake mekpɔe be dɔwɔwɔ ƒe dɔwɔƒea mateŋu anye ssh o.

Xɔnameɖoɖoa me yiyi kple nuŋlɔɖiawo kpɔkpɔ nye mɔɖeɖe ƒe nya:

`Missing privilege separation directory: /run/sshd`

Àte ŋu awɔ agbalẽdzraɖoƒe sia kple sedede si gbɔna

```
chown root:root /
systemd-tmpfiles --create
```

Le tar `uid` megbe la, etso `1001` github action

tar `--no-same-owner` `uid` `1001`

Esia wɔe be rsync atrɔ zãla ƒe ƒuƒoƒo si le root directory la me, eye emegbe màte ŋu age ɖe ssh me le gbugbɔgadzedze vɔ megbe o.

Trɔ asi le decompression script la ŋu ale:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```