# চাৰ্ভাৰ আৰম্ভ কৰক (BTRFS বিভাজন ব্যৱহাৰ কৰক, স্নেপাৰ নিৰ্ধাৰিত স্নেপশ্বট)

## contabo ক্ৰয় চাৰ্ভাৰ

contabo হৈছে জাৰ্মানীৰ এটা সস্তা ভিপিএছ প্ৰদানকাৰী যাৰ দীৰ্ঘ ইতিহাস (২০ বছৰতকৈ অধিক) আৰু বহু ব্যৱহাৰকাৰী (২ লাখতকৈ অধিক), গতিকে পলাই যোৱাৰ চিন্তা কৰাৰ প্ৰয়োজন নাই।

[contabo.com](//contabo.com) ক্ৰয় কৰাৰ VPS ইউৰোৰ মূল্য নিৰ্ধাৰণ বাছি ল'বলৈ মনত ৰাখিব, যিটো সস্তা।

![](https://i-01.eu.org/1718285782.avif)

contabo ৰ বাবে এককালীন ইনষ্টলেচন মাচুল আছে।
কিন্তু প্ৰতিমাহে কেইটামান দিন এনেকুৱা হয় য’ত ইনষ্টলেচন মাচুল বিনামূলীয়া হয় মাত্ৰ পঞ্জীয়ন কৰক আৰু প্ৰচাৰমূলক ইমেইলবোৰলৈ মনোযোগ দিয়ক।

ইউৰোপত বিনামূলীয়া এলেকাৰ মাচুলৰ উপৰিও আন অঞ্চলত মূল্য বৃদ্ধিৰ মাত্ৰা বেলেগ বেলেগ।

মই এটা ইউৰোপীয় চাৰ্ভাৰ বাছি লৈছিলো যিয়েই নহওক, ক্লাউডফ্লেয়াৰ ব্যৱহাৰ কৰাৰ পিছত চাৰ্ভাৰবোৰৰ মাজত বিশেষ পাৰ্থক্য নাই।

চূড়ান্ত কনফিগাৰেচন তলত দিয়া ধৰণৰ, ১৬জিবি মেমৰি, ৬চিপিইউ, ২০০ জিবি এনভিএমই, মাহে ৯.৫০ ইউৰো, যিটো ৭৪.৪৩ আৰএমবিৰ সমতুল্য।

![](https://i-01.eu.org/1718286008.avif)

**এই মূল্য আলিবাবা ক্লাউড আৰু আমাজনৰ দামৰ প্ৰায় এক দশম ভাগ** ৷

![](https://i-01.eu.org/1718356956.avif)

মই পৰিৱেশন আৰু প্ৰাচলসমূহ চলাবলৈ ব্যৱহাৰ [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

মডেল `AMD EPYC 9224 24-Core Processor` , একক-কোৰ পৰিৱেশন স্ক'ৰ 1285 দেখুৱাইছে CPU
, মাল্টি-কোৰ স্ক'ৰ 4277 আৰু ফলাফল চাওক [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

মই এটা সময়ত তিনিটা চাৰ্ভাৰ কিনিলোঁ আৰু একে সময়তে সক্ৰিয় কৰিলোঁ ইয়াৰ ফলত চাৰ্ভাৰসমূহ একেটা কম্পিউটাৰ ৰুমত থকাটো নিশ্চিত হয়, যাৰ ফলত ভৱিষ্যতে উচ্চ উপলব্ধতা গঢ়ি তোলাটো সহজ হয়।

ইয়াৰ চাৰ্ভাৰসমূহে মাজে মাজে ফোনটো বন্ধ কৰি দিয়ে, উচ্চ উপলব্ধতাৰ জৰিয়তে ৱেবছাইটৰ অভিগম্যতা নিশ্চিত কৰে।

নতুন ব্যৱহাৰকাৰীয়ে ক্ৰয় কৰাৰ সময়ত প্ৰকৃত নামৰ প্ৰমাণীকৰণৰ বাবে নিজৰ আইডি কাৰ্ড জমা দিব লাগিব।

## পাছৱৰ্ড-মুক্ত প্ৰৱেশ বিন্যাস কৰক

কেইমিনিটমানৰ পাছত চাৰ্ভাৰবোৰ সকলো সক্ৰিয় হৈ গ’ল।

প্ৰথম কথাটো IP এটা ছদ্মনাম সংহতি কৰিবলে স্থানীয় যন্ত্ৰৰ `~/.ssh/config` সম্পাদনা কৰা, আৰু তাৰ পিছত পাছৱৰ্ড-মুক্ত প্ৰৱেশ বিন্যাস কৰিবলে `ssh-copy-id root@c2` ব্যৱহাৰ কৰা ।

![](https://i-01.eu.org/1718287198.avif)

আপুনি এই [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) পৰিবৰ্তন কৰিব পাৰে আৰম্ভণি বিন্যাস দ্ৰুতভাৱে সম্পূৰ্ণ কৰিবলে ।

গুপ্তশব্দ-মুক্ত বিন্যাস সম্পূৰ্ণ হোৱাৰ পিছত, আপুনি ইয়াক ব্যৱহাৰ কৰিব পাৰে ইয়াক বেচসমূহত চলাব পাৰি, যি সুবিধাজনক [pdsh](https://github.com/chaos/pdsh)

প্ৰথমটো হ'ল ipv6 আৰু পৰীক্ষা হস্তচালিতভাৱে সামৰ্থবান কৰা

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

তাৰ পিছত এটা ক্লিকৰ সৈতে চিস্টেমটো ubuntu 24 লৈ উন্নীত কৰক আৰু সাধাৰণতে ব্যৱহৃত চফ্টৱেৰ ইনষ্টল কৰক।

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 মানে ভাষা চীনালৈ আৰু সময় মণ্ডল বেইজিংলৈ সলনি কৰা।

অবিকল্পিতভাৱে ইনষ্টল কৰা [direnv](https://direnv.net/) মোৰ [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ব্যৱহাৰৰ অভ্যাস অনুসৰি বিন্যাস কৰা হৈছে, যেনে [mise](https://github.com/jdx/mise)

এই পদক্ষেপে বহু সময় লয়। আপুনি ইয়াক নিম্নলিখিত আদেশৰ সৈতে নিশ্চিত কৰিব পাৰে:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh ssh গতি বৃদ্ধি কৰে

ইউৰোপৰ পৰা চীনলৈ নেটৱৰ্ক সুস্থিৰ নহয় `ssh` দ্ৰুত কৰিবলৈ ব্যৱহাৰ কৰাটো বাঞ্ছনীয় [mosh](//mosh.org)

স্থানীয় পঞ্জিকা `~/.bin` ত `c0` স্ক্ৰিপ্ট সৃষ্টি কৰক (মূলতঃ পৰিৱেশ চলক `PATH` ত যোগ কৰা হৈছে) নিম্নলিখিত ধৰণে:

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

সৃষ্টি কৰাৰ পিছত, এক্সিকিউটেবল অনুমতিসমূহ আৰু চফ্ট-লিংক `c1` আৰু `c2` প্ৰদান কৰক।

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

ভৱিষ্যতে, আপুনি `mosh` হাই-স্পীড ডাইৰেক্ট সংযোগ ব্যৱহাৰ কৰিবলৈ পোনপটীয়াকৈ `c0` আৰু `c1` প্ৰৱেশ কৰিব পাৰিব আৰু [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## ext4 ৰ পৰা btrfs লৈ বিভাজন বিন্যাস ৰূপান্তৰ কৰক

সহজ বেকআপৰ বাবে ডিস্ক স্নেপশ্বট লব পাৰে [btrfs](https://wikipedia.org/wiki/Btrfs)

প্ৰথমে উদ্ধাৰ ব্যৱস্থাত প্ৰৱেশ কৰক

![](https://i-01.eu.org/1718300448.avif)

ডেবিয়ান উদ্ধাৰ নিৰ্ব্বাচন কৰক

![](https://i-01.eu.org/1718300753.avif)

চাৰ্ভাৰ পুনৰাৰম্ভ হোৱালৈ অপেক্ষা কৰক

ssh `ssh-keygen -R ip`

তাৰ পিছত বিভাজন ৰূপান্তৰ কৰিবলে নিম্নলিখিত স্ক্ৰিপ্ট চলাওক

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

ৰূপান্তৰ সফল হোৱাৰ পিছত লিপিয়ে স্বয়ংক্ৰিয়ভাৱে চিস্টেম পুনৰাৰম্ভ কৰিব।

### btrfs সংকোচন অনুপাত চাওক

ই অবিকল্পিতভাৱে স্বয়ংক্ৰিয়ভাৱে সংকোচন কৰিব সংকোচন অনুপাত পৰীক্ষা কৰিবলে আদেশ নিম্নলিখিত:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### মেনুৱেল কম্প্ৰেছন

যদি আপুনি এজন নিখুঁততাবাদী, আপুনি এটা সম্পূৰ্ণ ডিষ্ক সংকোচন হস্তচালিতভাৱেও কৰিব পাৰে আদেশ নিম্নলিখিত:

```bash
btrfs filesystem defragment -r -czstd /
```

তলৰ চিত্ৰত দেখুওৱাৰ দৰে, আপুনি দেখিব পাৰিব যে নতুন চিস্টেমত হস্তচালিত সংকোচনৰ পিছত, প্ৰায় 100MB অধিক সংকোচন কৰা হৈছিল।

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### স্নেপাৰৰ সৈতে এটা Btrfs স্নেপশ্বট বেকআপ সৃষ্টি কৰক

Btrfs বেকআপৰ বাবে সৰ্বোত্তম অংশীদাৰ [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)

আৰম্ভণি স্ক্ৰিপ্টই `~/ubuntu` পঞ্জিকা সৃষ্টি কৰিব, মাত্ৰ নিম্নলিখিত আদেশ চলাওক:

```
~/ubuntu/snapper/init.sh
```

লিপিৰ বিষয়বস্তুত দেখা পাম [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

`snapper list-configs` ব্যৱহাৰ কৰক উপভলিউমসমূহ চাবলৈ যাৰ বাবে স্নেপশ্বটসমূহ সংহতি কৰা হৈছে।

![](https://i-01.eu.org/1718302689.avif)

এটা উপভলিউমৰ এটা স্নেপশ্বট চাবলৈ `snapper -c mnt list` ব্যৱহাৰ কৰক

`/etc/snapper/configs/mnt` এ এই উপভলিউমৰ নিৰ্দিষ্ট বেকআপ সংহতিসমূহ চাব পাৰে

অধিক উল্লেখ:

[Btrfs ৰ স্নেপশ্বট ফাংচনৰ সৈতে সহজে খেলক snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo চাৰ্ভাৰ স্নেপশ্বট

চাৰ্ভাৰ স্নেপশ্বট ফাংচন প্ৰদান contabo , কিন্তু নিৰ্ধাৰিত স্নেপশ্বট সমৰ্থন নকৰে মই দৈনিক স্নেপশ্বট ল'বলৈ এটা [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) লিখিলোঁ।

![](https://i-01.eu.org/1718304206.avif)

এটা চাৰ্ভাৰ স্নেপশ্বট পুনৰুদ্ধাৰ কৰিবলে, প্ৰথমে ব্যৱস্থাপনা তালিকাত Crontol ক্লিক কৰক

![](https://i-01.eu.org/1718304275.avif)

তাৰ পিছত, পুনৰুদ্ধাৰ কৰিবলৈ স্নেপশ্বটসমূহ ক্লিক কৰক।

![](https://i-01.eu.org/1718304063.avif)

কিন্তু, এই স্নেপশ্বটৰ গ্ৰেনুলেৰিটি অতি ডাঙৰ, এবাৰ পুনৰুদ্ধাৰ কৰিলে, নতুনকৈ যোগ কৰা তথ্য সম্পূৰ্ণৰূপে হেৰাই যাব, গতিকে অনুগ্ৰহ কৰি ইয়াক সাৱধানে ব্যৱহাৰ কৰক।

সাধাৰণতে btrfs স্নেপশ্বট ব্যৱহাৰ কৰাটো অধিক সুবিধাজনক।

## উদ্ধাৰ ব্যৱস্থাৰ বিৱৰণ

পৰ্টে [tcping](https://github.com/paradiseduo/tcping) অভিগমযোগ্য 22 পিছত, আপুনি 2-3 মিনিটৰ বাবে নিৰ্ধাৰিত গুপ্তশব্দৰ সৈতে অভিগম কৰিব নোৱাৰিব।

```
tcping ip 22 -c 9999
```

বন্দৰৰ অভিগম্যতা নিৰীক্ষণ কৰিব পাৰি।

### & স্নেপশ্বট পুনৰুদ্ধাৰ কৰাৰ পিছত হাৰ্ড ড্ৰাইভত কেনেকৈ অভিগম কৰিব পাৰি

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

আপুনি স্নেপশ্বট চাব পাৰে, উদাহৰণস্বৰূপ

```
snapper -c etc list
```

স্নেপশ্বট নথিপত্ৰ পৰিবৰ্তনসমূহ চাওক

```
snapper -c etc status 5..6
```

নিৰ্দিষ্ট পাৰ্থক্য লিখনী চাওক

```
snapper -c etc diff 3..5
```

স্নেপশ্বট পুনৰুদ্ধাৰ কৰক: উদাহৰণস্বৰূপ, স্নেপশ্বট 5 ৰ পিছত সকলো পৰিবৰ্তন পূৰ্বৱৰ্তী অৱস্থালৈ ঘূৰাই আনিব

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### লগ স্থায়িত্ব সামৰ্থবান কৰক

এটা উদ্ধাৰ ব্যৱস্থাপ্ৰণালীৰ অন্তৰ্গত লগ স্থায়িত্ব সামৰ্থবান কৰিলে আপুনি সংশ্লিষ্ট পঞ্জিকা হস্তচালিতভাৱে সৃষ্টি কৰিব লাগিব আৰু কিছুমান অতিৰিক্ত পদক্ষেপ সম্পাদন কৰিব লাগিব, কাৰণ আপোনাৰ এটা চলি থকা systemd সেৱা নাথাকিবও পাৰে । আপুনি চেষ্টা কৰিব পৰা পদক্ষেপসমূহ ইয়াত দিয়া হ'ল:

প্ৰথমে chroot, তাৰ পিছত

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

আপোনাৰ উবুন্টু ব্যৱস্থাপ্ৰণালীলৈ পুনৰাৰম্ভ কৰক: ওপৰৰ পৰিবৰ্তনসমূহ কৰাৰ পিছত, আপুনি আপোনাৰ যন্ত্ৰক সাধাৰণভাৱে আৰু আপোনাৰ উবুন্টু ব্যৱস্থাপ্ৰণালীত উদ্ধাৰ ব্যৱস্থাপ্ৰণালীৰ পৰিবৰ্তে পুনৰাৰম্ভ কৰিব লাগিব ।

এইদৰে, systemd-journald এ নতুন বিন্যাসৰ সৈতে আৰম্ভ কৰিব আৰু হাৰ্ড ডিষ্কত লগসমূহ স্থায়ীভাৱে সংৰক্ষণ কৰিবলৈ আৰম্ভ কৰিব ।

মনত ৰাখিব যে ওপৰৰ কাৰ্য্যসমূহ এটা উদ্ধাৰ ব্যৱস্থাপ্ৰণালীত কৰা হয়, গতিকে সেই পৰিবৰ্তনসমূহ কাৰ্যকৰী নহ'ব যেতিয়ালৈকে ব্যৱস্থাপ্ৰণালী পুনৰাৰম্ভ কৰা নহয় আৰু উদ্ধাৰ ধৰণত নহয় ।

ইয়াৰ অৰ্থ হ'ল আপুনি বৰ্ত্তমানৰ লগসমূহত কোনো পৰিবৰ্তন তৎক্ষণাত দেখা নাপাব যি স্থায়ী হয়, কিন্তু তাৰ পিছত সৃষ্টি কৰা সকলো লগ স্থায়ী হ'ব।

এইদৰে আপুনি ssh সেৱাৰ লগসমূহ চাব পাৰিব

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## কঠিন আৰু জটিল ৰোগৰ ওপৰত টোকা

### অদ্ভুত সমস্যা সমাধান কৰক: চাৰ্ভাৰে ssh কৰিব নোৱাৰে

মই আগতে এটা স্বয়ংক্ৰিয় কম্পাইলেচন আৰু মোতায়েন স্ক্ৰিপ্ট বনাবলৈ github কাৰ্য্য ব্যৱহাৰ কৰিছিলোঁ, কিন্তু দেখিলোঁ যে মোতায়েন সেৱা ssh হ'ব নোৱাৰে।

উদ্ধাৰ ব্যৱস্থাপ্ৰণালীত প্ৰৱেশ কৰা আৰু লগসমূহ চোৱাটো এটা অনুমতিৰ সমস্যা:

`Missing privilege separation directory: /run/sshd`

আপুনি নিম্নলিখিত আদেশৰ সৈতে এই পঞ্জিকা সৃষ্টি কৰিব পাৰে

```
chown root:root /
systemd-tmpfiles --create
```

বাৰে বাৰে তদন্তৰ পিছত, github action tar ৰ ব্যৱহাৰকাৰী `uid` `1001`

tar হ'ব লাগিব যদি কোনো প্ৰাচল `--no-same-owner` নাই, ইয়াক `1001` ব্যৱহাৰকাৰীৰ বাবে `uid` লৈ ডিকম্প্ৰেছ কৰা হ'ব

ফলস্বৰূপে, rsync এ ৰূট পঞ্জিকাৰ ব্যৱহাৰকাৰী গোট সলনি কৰিব, আৰু তাৰ পিছত আপুনি পুনৰাৰম্ভ কৰাৰ পিছত ssh ত লগ ইন কৰিব নোৱাৰিব ।

ডিকম্প্ৰেছন লিপি নিম্নলিখিত ধৰণে পৰিবৰ্তন কৰক:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```