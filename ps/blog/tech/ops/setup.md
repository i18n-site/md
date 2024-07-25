# سرور پیل کړئ (د BTRFS برخې وکاروئ، د سنیپر ټاکل شوي سنیپ شاټ)

## contabo پیرود سرور

contabo په آلمان کې یو ارزانه VPS چمتو کونکی دی چې اوږد تاریخ لري (له 20 کلونو څخه ډیر) او ډیری کارونکي (له 200,000 څخه ډیر) ، نو د تیښتې په اړه اندیښنه ته اړتیا نشته.

VPS پیرود کوئ [contabo.com](//contabo.com) په یاد ولرئ چې د یورو قیمت غوره کړئ، کوم چې ارزانه وي.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

د کانټابو لپاره د یو ځل نصبولو فیس شتون لري.
په هرصورت، په هره میاشت کې یو څو ورځې شتون لري چیرې چې د نصب کولو فیس وړیا دی یوازې راجستر کړئ او پروموشنل بریښنالیکونو ته پاملرنه وکړئ.

په اروپا کې د وړیا ساحې فیس سربیره، نورې سیمې د بیې لوړیدو مختلفې کچې لري.

ما یو اروپایی سرور غوره کړ، د کلاوډ فلیر کارولو وروسته، د سرورونو ترمنځ ډیر توپیر شتون نلري.

وروستی ترتیب په لاندې ډول دی، 16GB حافظه، 6CPU، 200 GB NVMe، په میاشت کې 9.50 یورو، د 74.43 RMB سره مساوي.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**دا بیه د علی بابا کلاوډ او امازون قیمت نږدې لسمه برخه ده** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

ما د فعالیت او پیرامیټونو چلولو لپاره کارولی [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

د ښودلو ماډل CPU د واحد کور فعالیت سکور 1285 `AMD EPYC 9224 24-Core Processor`
, ملټي کور سکور 4277 نورې پایلې وګورئ [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

ما په یو وخت کې درې سرورونه واخیستل او په ورته وخت کې یې فعال کړل دا ډاډ ورکوي چې سرورونه په ورته کمپیوټر خونه کې دي، په راتلونکي کې د لوړ شتون رامینځته کول اسانه کوي.

د دې سرورونه کله ناکله ځړول کیږي، د لوړ شتون له لارې د ویب پاڼې لاسرسي ډاډمن کوي.

نوي کاروونکي باید د پیرودلو په وخت کې د اصلي نوم تصدیق کولو لپاره خپل شناخت کارتونه وسپاري.

## د پټنوم پرته ننوتل تنظیم کړئ

د څو دقیقو وروسته، سرورونه ټول فعال شول.

لومړی شی د ځایی ماشین ترمیم کول دي `~/.ssh/config` لپاره یو عرف وټاکئ IP او بیا د پټنوم څخه پاک ننوتنه تنظیم کولو لپاره `ssh-copy-id root@c2` وکاروئ.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

تاسو کولی شئ دا [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) بدل کړئ ترڅو د پیل کولو ترتیب ګړندی بشپړ کړئ.

وروسته له دې چې د پټنوم څخه پاک ترتیب بشپړ شو [pdsh](https://github.com/chaos/pdsh) تاسو کولی شئ دا په بیچونو کې چلولی شئ، کوم چې مناسب دی.

لومړی دا دی چې په لاسي ډول ipv6 فعال کړئ او ازموینه وکړئ

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

بیا سیسټم په یو کلیک سره اوبنټو 24 ته لوړ کړئ او په عام ډول کارول شوي سافټویر نصب کړئ.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN = 1 معنی د ژبې چینایي ته او د وخت زون بیجینګ ته.

د ډیفالټ لخوا نصب شوی سافټویر زما د شخصي استعمال عادتونو سره سم ترتیب شوی دی، لکه [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. که اړتیا وي، تاسو کولی شئ د [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ګودام کاپي کړئ او د اړتیا سره سم یې بدل کړئ.

دا ګام ډیر وخت نیسي د نیم ساعت انتظار وروسته، د عام استعمال شوي سافټویر اپ گریڈ او نصب به بریالی شي. تاسو کولی شئ دا د لاندې کمانډ سره تایید کړئ:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh ssh سرعت کوي

له اروپا څخه چین ته شبکه مستحکم `ssh` ده د کارولو لپاره راشئ [mosh](//mosh.org)

په محلي `~/.bin` کې `c0` سکریپټ جوړ کړئ (په عمده ډول د چاپیریال متغیر `PATH` کې اضافه شوي) په لاندې ډول:

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

د جوړولو وروسته، د اجرا وړ اجازه او نرم `c2` ورکړئ `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

په راتلونکي کې، تاسو کولی شئ مستقیم داخل کړئ `c0` `c1` او تاسو کولی شئ `mosh` لوړ سرعت مستقیم اړیکه وکاروئ او داخل شئ [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## د برخې بڼه له ext4 څخه btrfs ته واړوئ

د اسانه بیک اپ لپاره د ډیسک عکسونه اخیستل کیدی شي [btrfs](https://wikipedia.org/wiki/Btrfs)

لومړی د ژغورنې سیسټم ته ننوځئ

<img alt="" src="https://i-01.eu.org/1718300448.avif">

د Debian ریسکیو غوره کړئ

<img alt="" src="https://i-01.eu.org/1718300753.avif">

د سرور بیا پیل کولو لپاره انتظار وکړئ

د ګوتو نښې به هغه وخت رامینځته شي ssh د پاکولو لپاره یې وکاروئ `ssh-keygen -R ip`

بیا د برخې بدلولو لپاره لاندې سکریپټ چل کړئ

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

سکریپټ به په اتوماتيک ډول د تبادلې بریالي کیدو وروسته سیسټم بیا پیل کړي.

### د btrfs کمپریشن تناسب وګورئ

دا به په اتوماتيک ډول د کمپریشن تناسب چک کولو قوماندې په لاندې ډول وي:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### لاسي کمپریشن

که تاسو بشپړتیا لرئ، تاسو کولی شئ په لاسي ډول د بشپړ ډیسک کمپریشن ترسره کړئ په لاندې ډول

```bash
btrfs filesystem defragment -r -czstd /
```

لکه څنګه چې په لاندې شکل کې ښودل شوي، تاسو لیدلی شئ چې په نوي سیسټم کې د لاسي کمپریشن وروسته، نږدې 100MB ډیر فشار شوی.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### د سنیپر سره د Btrfs سنیپ شاټ بیک اپ جوړ کړئ

Btrfs بیک اپ لپاره غوره ملګری دی [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)

د پیل کولو سکریپټ به `~/ubuntu` جوړ کړي، یوازې لاندې کمانډ چلوي:

```
~/ubuntu/snapper/init.sh
```

تاسو د سکریپټ مینځپانګې کې ګورئ [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

د فرعي حجمونو د لیدلو لپاره `snapper list-configs` د کوم لپاره چې سنیپ شاټونه ترتیب شوي.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

د فرعي حجم د عکس لیدو لپاره وکاروئ `snapper -c mnt list`

تاسو کولی `/etc/snapper/configs/mnt` د دې فرعي حجم ځانګړي بیک اپ تنظیمات وګورئ

نورې حوالې:

[په اسانۍ سره د Btrfs د سنیپ شاټ فنکشن سره لوبې وکړئ snapper](https://zhuanlan.zhihu.com/p/31082518)

## د کانټابو سرور سنیپ شاټ

د سرور سنیپ شاټ فعالیت چمتو کوي contabo مګر د ټاکل شوي سنیپ شاټونو ملاتړ نه کوي ما د ورځني عکس اخیستو لپاره [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) لیکلی.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

د سرور سنیپ شاټ بحالولو لپاره، لومړی د مدیریت مینو کې کرونټ کلیک وکړئ

<img alt="" src="https://i-01.eu.org/1718304275.avif">

بیا، د بیا رغونې لپاره سنیپ شاټونه کلیک وکړئ.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

په هرصورت، د دې سنیپ شاټ ګرانولیت خورا لوی دی یوځل چې بیرته راګرځول شي، نوي اضافه شوي ډاټا به په بشپړه توګه له لاسه ورکړي، نو مهرباني وکړئ دا په احتیاط سره وکاروئ.

دا معمولا د btrfs سنیپ شاټونو کارول خورا اسانه دي.

## د ژغورنې سیسټم توضیحات

د ریسکیو سیسټم ته ننوتئ وروسته له دې 22 [tcping](https://github.com/paradiseduo/tcping) د لاسرسي وړ وي، تاسو به 2-3 دقیقو لپاره د ټاکل شوي پاسورډ سره لاسرسی ونلرئ او دا به ښه وي.

```
tcping ip 22 -c 9999
```

د بندر لاسرسي څارنه کیدی شي.

### د ریسکیو ریسټور سنیپ شاټ ته د ننوتلو وروسته هارډ ډرایو ته څنګه لاسرسی ومومئ &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

تاسو کولی شئ سنیپ شاټ وګورئ، د بیلګې په توګه

```
snapper -c etc list
```

د سنیپ شاټ فایل بدلونونه وګورئ

```
snapper -c etc status 5..6
```

د ځانګړي توپیر متن وګورئ

```
snapper -c etc diff 3..5
```

سنیپ شاټ بحال کړئ: د مثال په توګه، د سنیپ شاټ 5 وروسته ټول بدلونونه بیرته راګرځول

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### د لاګ دوام فعال کړئ

د ژغورنې سیسټم لاندې د لاګ دوام فعالول تاسو ته اړتیا لري چې په لاسي ډول اړونده ډایرکټر جوړ کړئ او ځینې اضافي مرحلې ترسره کړئ، ځکه چې تاسو ممکن د چلولو سیسټم خدمت نلرئ. دلته هغه ګامونه دي چې تاسو یې هڅه کولی شئ:

لومړی کروټ، بیا

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

خپل اوبنټو سیسټم کې ریبوټ: د پورته بدلونونو کولو وروسته ، تاسو اړتیا لرئ خپل ماشین په نورمال ډول او د ریسکیو سیسټم پرځای خپل اوبنټو سیسټم کې ریبوټ کړئ.

په دې توګه، systemd-journald به د نوي ترتیب سره پیل شي او په هارډ ډیسک کې به په دوامداره توګه د لاګونو ذخیره کول پیل کړي.

په یاد ولرئ چې پورته عملیات د ریسکیو سیسټم کې ترسره کیږي، نو دا بدلونونه به یوازې هغه وخت اغیزمن شي کله چې سیسټم ریبوټ شي او نور د ژغورنې حالت کې نه وي.

دا پدې مانا ده چې تاسو به سمدلاسه په موجوده لاګونو کې کوم بدلون ونه ګورئ چې دوامدار شي ، مګر له دې وروسته رامینځته شوي ټول لاګونه به دوام ومومي.

پدې توګه تاسو کولی شئ د ssh خدمت لاګونه وګورئ

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## د سختو او پیچلو ناروغیو یادونه

### عجیب ستونزه حل کړئ: سرور نشي کولی ssh

ما مخکې د اتوماتیک تالیف او پلي کولو سکریپټ جوړولو لپاره د ګیتوب عمل کارولی و ، مګر وموندله چې د ګمارنې خدمت نشي کیدی ssh.

د ژغورنې سیسټم ته ننوتل او د لاګونو لیدل د اجازې مسله ده:

`Missing privilege separation directory: /run/sshd`

تاسو کولی شئ دا لارښود د لاندې کمانډ سره جوړ کړئ

```
chown root:root /
systemd-tmpfiles --create
```

د مکرر پلټنو وروسته، دا ځکه github action هغه کاروونکي چې `1001` tar یې پورته کړی `uid`

پیک کول باید د پیرامیټرو پرته ترسره شي tar دا به `--no-same-owner` `1001` کارونکي لپاره په `uid` کې ډیکمپریس شي

د پایلې په توګه، rsync به د روټ ډایرکټر کاروونکي ګروپ بدل کړي، او بیا به تاسو د بیا پیل کولو وروسته ssh ته ننوتلو توان ونلرئ.

د ډیکمپریشن سکریپټ په لاندې ډول تعدیل کړئ:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

