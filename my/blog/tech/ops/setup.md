# ဆာဗာကို စတင်လုပ်ဆောင်ပါ (BTRFS အပိုင်းကို အသုံးပြုပါ၊ snapper စီစဉ်ထားသော လျှပ်တစ်ပြက်ရိုက်ချက်)

## contabo ဝယ်ယူမှုဆာဗာ

contabo သည် ရှည်လျားသောသမိုင်းကြောင်း (နှစ် 20 ကျော်) နှင့် အသုံးပြုသူအများအပြား (200,000 ကျော်) ရှိသည့် ဂျာမနီရှိ စျေးပေါသော VPS ဝန်ဆောင်မှုပေးသူဖြစ်သောကြောင့် အဝေးကိုထွက်ပြေးရန် စိတ်ပူစရာမလိုပါ။

ဝယ်ယူသည့် VPS သက်သာသော ယူရိုစျေးနှုန်းကို ရွေးချယ်ရန် မမေ့ပါနှင့် [contabo.com](//contabo.com)

![](https://i-01.eu.org/1718285782.avif)

contabo အတွက် တစ်ကြိမ်တည်း တပ်ဆင်ခ ကောက်ခံမှု ရှိပါသည်။
သို့သော်လည်း တပ်ဆင်ခ အခမဲ့ဖြစ်ပြီး မှတ်ပုံတင်ပြီး ပရိုမိုးရှင်းအီးမေးလ်များကို အာရုံစိုက်ရုံဖြင့် လစဉ် ရက်အနည်းငယ်ရှိပါသည်။

ဥရောပရှိ အခမဲ့ဧရိယာအခကြေးငွေအပြင် အခြားဒေသများတွင် စျေးနှုန်းတိုးမြှင့်မှု အဆင့်အမျိုးမျိုးရှိသည်။

ဘာပဲဖြစ်ဖြစ် cloudflare ကိုသုံးပြီးနောက်၊ ဆာဗာတွေကြားက သိပ်ကွာခြားမှုမရှိပါဘူး။

နောက်ဆုံးဖွဲ့စည်းပုံမှာ အောက်ပါအတိုင်းဖြစ်သည်၊ 16GB မမ်မိုရီ၊ 6CPU၊ 200 GB NVMe၊ တစ်လလျှင် ယူရို 9.50၊ 74.43 RMB နှင့် ညီမျှသည်။

![](https://i-01.eu.org/1718286008.avif)

**ဤစျေးနှုန်းသည် Alibaba Cloud နှင့် Amazon တို့၏ စျေးနှုန်း၏ ဆယ်ပုံတစ်ပုံနီးပါးဖြစ်သည်** ။

![](https://i-01.eu.org/1718356956.avif)

စွမ်းဆောင်ရည်နှင့် ကန့်သတ်ချက်များကို လုပ်ဆောင်ရန် အသုံးပြု [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) ။

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

မော်ဒယ် `AMD EPYC 9224 24-Core Processor` ၊ single-core စွမ်းဆောင်ရည် 1285 ကို ပြသ CPU
၊ multi-core ရမှတ် 4277 နောက်ထပ်ရလဒ်များကိုကြည့်ပါ [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

ဆာဗာသုံးခုကို တစ်ချိန်တည်းဝယ်ပြီး တစ်ချိန်တည်းတွင် ဆာဗာများကို တစ်ချိန်တည်းတွင် စတင်အသုံးပြုနိုင်ကြောင်း သေချာစေပါသည်။

၎င်း၏ဆာဗာများသည် ရံဖန်ရံခါ ဖုန်းချကြပြီး ဝဘ်ဆိုက်အသုံးပြုရလွယ်ကူမှုကို မြင့်မားစွာရရှိနိုင်မှုဖြင့် သေချာစေသည်။

သုံးစွဲသူအသစ်များသည် ၎င်းတို့၏ ID ကတ်များကို ဝယ်ယူသည့်အခါ အမည်ရင်း စစ်မှန်ကြောင်းအထောက်အထားပြရန် လိုအပ်ပါသည်။

## စကားဝှက်မပါဘဲ အကောင့်ဝင်ခြင်းကို စီစဉ်သတ်မှတ်ပါ။

မိနစ်အနည်းငယ်ကြာပြီးနောက်၊ ဆာဗာများအားလုံးကို စတင်အသုံးပြုနိုင်ပါပြီ။

ပထမ IP alias တစ်ခုသတ်မှတ်ရန် စက်တွင်းစက်၏ `~/.ssh/config` တည်းဖြတ်ရန်ဖြစ်ပြီး၊ ထို့နောက် စကားဝှက်မပါဘဲ အကောင့်ဝင်ရန် `ssh-copy-id root@c2` အသုံးပြုပါ။

![](https://i-01.eu.org/1718287198.avif)

ကနဦးသတ်မှတ်ဖွဲ့စည်းမှုကို ပိုမိုမြန်ဆန်စွာ အပြီးသတ်ရန် ဤ [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) သင်မွမ်းမံနိုင်သည်။

စကားဝှက်မပါဘဲ ဖွဲ့စည်းမှုပုံစံကို ပြီးမြောက်ပြီးနောက်၊ ၎င်းကို အတွဲလိုက်ဖြင့် လုပ်ဆောင်နိုင်သည်၊ ၎င်းကို အဆင်ပြေသည် [pdsh](https://github.com/chaos/pdsh)

ပထမအချက်မှာ ipv6 ကို ကိုယ်တိုင်ဖွင့်ပြီး စမ်းသပ်ရန်ဖြစ်သည်။

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

ထို့နောက် တစ်ချက်နှိပ်ရုံဖြင့် ubuntu 24 သို့ အဆင့်မြှင့်ပြီး အသုံးများသောဆော့ဖ်ဝဲလ်ကို ထည့်သွင်းပါ။

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 ဆိုသည်မှာ တရုတ်ဘာသာစကားသို့ ဘာသာစကားပြောင်းလဲခြင်း နှင့် စံတော်ချိန်ဘေဂျင်းသို့ ပြောင်းလဲခြင်းကို ဆိုလိုသည်။

ပုံမှန်အားဖြင့် ထည့်သွင်းထားသောဆော့ဖ်ဝဲလ်ကို [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) စသည်တို့ကဲ့သို့ ကျွန်ုပ်၏ကိုယ်ရေးကိုယ်တာအသုံးပြုမှုအလေ့အထအရ ပြင်ဆင်သတ်မှတ်ထားပါသည်။ လိုအပ်ပါက၊ သင်သည် [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse ကို ကူးယူပြီး လိုအပ်သလို ပြင်ဆင်နိုင်ပါသည်။

ဤအဆင့်သည် နာရီဝက်ကြာအောင် စောင့်ပြီးနောက်၊ အသုံးများသောဆော့ဖ်ဝဲလ်ကို အဆင့်မြှင့်တင်ခြင်းနှင့် တပ်ဆင်ခြင်း အောင်မြင်ပါမည်။ အောက်ပါ command ဖြင့် ၎င်းကို အတည်ပြုနိုင်သည်-

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh သည် ssh ကိုအရှိန်မြှင့်သည်။

ဥရောပမှ တရုတ်သို့ ကွန်ရက်သည် `ssh` အရှိန်မြှင့်ရန် အကြံပြုထားသည် [mosh](//mosh.org)

local directory `~/.bin` တွင် script `c0` ခုဖန်တီးပါ (အဓိကအားဖြင့် Environment variable `PATH` သို့ ပေါင်းထည့်သည်) အောက်ပါအတိုင်းဖြစ်သည်-

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

ဖန်တီးပြီးနောက်၊ အကောင်အထည်ဖော်နိုင်သောခွင့်ပြုချက်များနှင့် soft-link `c1` နှင့် `c2` ပေးပါ။

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

အနာဂတ်တွင် သင်သည် မြန်နှုန်းမြင့် တိုက်ရိုက်ချိတ်ဆက်မှု `mosh` အသုံးပြုရန် `c0` နှင့် `c1` တိုက်ရိုက်ရိုက်ထည့်နိုင်ပြီး [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## partition format ကို ext4 မှ btrfs သို့ပြောင်းပါ။

[btrfs](https://wikipedia.org/wiki/Btrfs) အလွယ်တကူ အရန်ကူးယူရန်အတွက် ဒစ်စပီကာများကို ရိုက်ယူနိုင်သည်။

ပထမဦးစွာ ကယ်ဆယ်ရေးစနစ်သို့ ဝင်ရောက်ပါ။

![](https://i-01.eu.org/1718300448.avif)

Debian Rescue ကို ရွေးပါ။

![](https://i-01.eu.org/1718300753.avif)

ဆာဗာကို ပြန်လည်စတင်ရန် စောင့်ပါ။

ssh လက်ဗွေရာ ပြောင်းလဲမှုများ ရှိပါမည်၊ ၎င်းကို ရှင်းလင်းရန် `ssh-keygen -R ip` အသုံးပြုပါ။

ထို့နောက် partition ကိုပြောင်းရန် အောက်ပါ script ကို run ပါ။

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

ပြောင်းလဲခြင်းအောင်မြင်ပြီးနောက် script သည် စနစ်အား အလိုအလျောက်ပြန်လည်စတင်ပါမည်။

### btrfs ဖိသိပ်မှုအချိုးကို ကြည့်ပါ။

ချုံ့မှုအချိုးကို စစ်ဆေးရန် ၎င်းသည် default အနေဖြင့် အလိုအလျောက် ချုံ့မည် ဖြစ်သည်။

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manual ချုံ့

သင်သည် perfectionist တစ်ယောက်ဖြစ်ပါက၊ သင်သည် full disk compression ကို manually လုပ်ဆောင်နိုင်သည်။

```bash
btrfs filesystem defragment -r -czstd /
```

အောက်ပါပုံတွင်ပြထားသည့်အတိုင်း၊ စနစ်အသစ်တွင် manual compression လုပ်ပြီးနောက် 100MB နီးပါးကို compressed လုပ်ထားသည်ကို သင်တွေ့မြင်နိုင်ပါသည်။

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Snapper ဖြင့် Btrfs လျှပ်တစ်ပြက်ရိုက်ချက်အရန်ကို ဖန်တီးပါ။

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs အရန်ကူးခြင်းအတွက် အကောင်းဆုံးပါတနာဖြစ်သည်။

အစပြုခြင်း script သည် `~/ubuntu` directory ကိုဖန်တီးမည်ဖြစ်ပြီး၊ အောက်ပါ command ကို run ရုံသာဖြစ်သည်။

```
~/ubuntu/snapper/init.sh
```

ဇာတ်ညွှန်းအကြောင်းအရာမှာ တွေ့မယ် [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

လျှပ်တစ်ပြက်ရိုက်ချက်များကို သတ်မှတ်ရန်အတွက် အတွဲခွဲများကို ကြည့်ရန် `snapper list-configs` သုံးပါ။

![](https://i-01.eu.org/1718302689.avif)

အတွဲခွဲတစ်ခု၏ လျှပ်တစ်ပြက်ရိုက်ချက်အား ကြည့်ရှုရန် `snapper -c mnt list` အသုံးပြုပါ။

`/etc/snapper/configs/mnt` သည် ဤအတွဲခွဲ၏ သီးခြားအရန်ဆက်တင်များကို ကြည့်ရှုနိုင်သည်။

နောက်ထပ် ကိုးကားချက်များ-

[Btrfs ၏လျှပ်တစ်ပြက်လုပ်ဆောင်ချက်ဖြင့် အလွယ်တကူကစားပါ snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo server လျှပ်တစ်ပြက်

contabo ဆာဗာ လျှပ်တစ်ပြက်ရိုက်ချက် လုပ်ဆောင်ချက်ကို ပံ့ပိုးပေးသော်လည်း၊ နေ့စဉ် လျှပ်တစ်ပြက်ရိုက်ချက်များ ရယူရန် [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) ကျွန်ုပ် ရေးထားပါသည်။

![](https://i-01.eu.org/1718304206.avif)

ဆာဗာလျှပ်တစ်ပြက်ရိုက်ချက်ကို ပြန်လည်ရယူရန် စီမံခန့်ခွဲမှုမီနူးရှိ Crontol ကို ဦးစွာနှိပ်ပါ။

![](https://i-01.eu.org/1718304275.avif)

ထို့နောက် ပြန်လည်ရယူရန် Snapshots ကိုနှိပ်ပါ။

![](https://i-01.eu.org/1718304063.avif)

သို့သော်၊ ဤလျှပ်တစ်ပြက်ရိုက်ချက်၏အသေးစိတ်ဖော်ပြချက်မှာ ကြီးမားလွန်းသည်၊ ပြန်လည်ရယူပြီးသည်နှင့် အသစ်ထည့်သွင်းထားသောဒေတာသည် လုံးဝဆုံးရှုံးသွားလိမ့်မည်ဖြစ်သောကြောင့် သတိဖြင့်အသုံးပြုပါ။

btrfs လျှပ်တစ်ပြက်ရိုက်ချက်များကို အသုံးပြုရန် များသောအားဖြင့် ပိုအဆင်ပြေသည်။

## ကယ်ဆယ်ရေးစနစ်အသေးစိတ်

ကယ်တင်ခြင်းစနစ်သို့ ထည့်သွင်းပါ 22 ဆိပ်ကမ်းသည် [tcping](https://github.com/paradiseduo/tcping) သုံးနိုင်ပြီးနောက်၊ သင်သည် သတ်မှတ်ထားသော စကားဝှက်ကို 2-3 မိနစ်ဖြင့် ဝင်ရောက်နိုင်တော့မည်မဟုတ်ပါ။

```
tcping ip 22 -c 9999
```

ဆိပ်ကမ်းဝင်ရောက်နိုင်မှုကို စောင့်ကြည့်နိုင်သည်။

### ကယ်ဆယ်ရေးထဲသို့ဝင်ပြီးနောက် hard drive & မည်သို့ဝင်ရောက်နည်း

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

ဥပမာအားဖြင့် လျှပ်တစ်ပြက်ကို သင်ကြည့်ရှုနိုင်သည်။

```
snapper -c etc list
```

လျှပ်တစ်ပြက် ဖိုင်ပြောင်းလဲမှုများကို ကြည့်ရှုပါ။

```
snapper -c etc status 5..6
```

သီးခြားကွဲပြားသောစာသားကိုကြည့်ပါ။

```
snapper -c etc diff 3..5
```

လျှပ်တစ်ပြက်ရိုက်ချက်အား ပြန်လည်ရယူပါ- ဥပမာ၊ လျှပ်တစ်ပြက်ရိုက်ချက် 5 ပြီးနောက် ပြောင်းလဲမှုအားလုံးကို ပြန်ဖျက်ပါ။

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### မှတ်တမ်းစွဲမြဲမှုကို ဖွင့်ပါ။

ကယ်တင်ရေးစနစ်အောက်တွင် မှတ်တမ်းစွဲမြဲမှုကို ဖွင့်ထားခြင်းဖြင့် သင့်တွင် လည်ပတ်နေသော စနစ်တစ်ခု ဝန်ဆောင်မှုတစ်ခု မရှိနိုင်သောကြောင့် သက်ဆိုင်ရာ လမ်းညွှန်ကို ကိုယ်တိုင်ဖန်တီးပြီး နောက်ထပ်အဆင့်အချို့ကို လုပ်ဆောင်ရန် လိုအပ်ပါသည်။ ဤသည်မှာ သင်ကြိုးစားနိုင်သော အဆင့်များဖြစ်သည်-

ပထမဦးစွာ chroot, ထို့နောက်

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

သင်၏ Ubuntu စနစ်သို့ ပြန်လည်စတင်ပါ- အထက်ဖော်ပြပါ အပြောင်းအလဲများကို ပြုလုပ်ပြီးနောက်၊ သင်သည် သင်၏စက်ကို ပုံမှန်အတိုင်း ပြန်လည်စတင်ရန်နှင့် ကယ်ဆယ်ရေးစနစ်အစား သင်၏ Ubuntu စနစ်သို့ ပြန်လည်စတင်ရန် လိုအပ်ပါသည်။

ဤနည်းအားဖြင့်၊ systemd-journald သည် အသစ်ဖွဲ့စည်းမှုပုံစံဖြင့် စတင်ပြီး ဟာ့ဒ်ဒစ်ပေါ်တွင် မှတ်တမ်းများကို အမြဲမပြတ်သိမ်းဆည်းနေပါသည်။

အထက်ဖော်ပြပါ လုပ်ဆောင်ချက်များသည် ကယ်ဆယ်ရေးစနစ်တွင် လုပ်ဆောင်ကြောင်း မှတ်သားထားပါ၊ ထို့ကြောင့် အဆိုပါပြောင်းလဲမှုများသည် စနစ်ပြန်လည်စတင်ပြီး ကယ်ဆယ်ရေးမုဒ်တွင် မရှိတော့မချင်း အဆိုပါပြောင်းလဲမှုများသည် အကျိုးသက်ရောက်မှုရှိမည်မဟုတ်ကြောင်း မှတ်သားထားပါ။

ဆိုလိုသည်မှာ တည်မြဲနေသော မှတ်တမ်းများတွင် ပြောင်းလဲမှုတစ်စုံတစ်ရာကို သင်ချက်ချင်းမြင်နိုင်မည်မဟုတ်သော်လည်း ၎င်းပြီးနောက် ထုတ်လုပ်လိုက်သော မှတ်တမ်းများအားလုံး ဆက်လက်တည်ရှိနေမည်ဖြစ်သည်။

ဤနည်းဖြင့် သင်သည် ssh ဝန်ဆောင်မှု၏ မှတ်တမ်းများကို ကြည့်ရှုနိုင်သည်။

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## ခက်ခဲရှုပ်ထွေးသောရောဂါများအတွက်မှတ်စုများ

### ထူးဆန်းသောပြဿနာကိုဖြေရှင်းပါ- ဆာဗာသည် ssh မရနိုင်ပါ။

ကျွန်ုပ်သည် ယခင်က အလိုအလျောက်စုစည်းမှုနှင့် အသုံးချမှု script တစ်ခုပြုလုပ်ရန် github လုပ်ဆောင်ချက်ကို အသုံးပြုခဲ့သော်လည်း ဖြန့်ကျက်ခြင်းဝန်ဆောင်မှုသည် ssh မဟုတ်ကြောင်း တွေ့ရှိခဲ့သည်။

ကယ်ဆယ်ရေးစနစ်သို့ဝင်ရောက်ပြီး မှတ်တမ်းများကိုကြည့်ရှုခြင်းသည် ခွင့်ပြုချက်ပြဿနာဖြစ်သည်-

`Missing privilege separation directory: /run/sshd`

သင်သည် အောက်ပါ command ဖြင့် ဤလမ်းညွှန်ကို ဖန်တီးနိုင်သည်။

```
chown root:root /
systemd-tmpfiles --create
```

ထပ်ခါတလဲလဲ စုံစမ်းပြီးနောက်၊ tar ၏ အသုံးပြုသူ `uid` သည် `1001` ဖြစ်သောကြောင့်ဖြစ်သည် github action

ပါရာမီတာ `--no-same-owner` မရှိပါက ထုပ်ပိုးခြင်းမှာ အသုံးပြုသူ `1001` ဦးအတွက် `uid` သို့ ဖိသိပ်ထားမည်ဖြစ်သည် tar

ရလဒ်အနေဖြင့်၊ rsync သည် root directory ၏အသုံးပြုသူအုပ်စုကိုပြောင်းလဲမည်ဖြစ်ပြီး၊ ထို့နောက်သင်ပြန်လည်စတင်ပြီးနောက် ssh သို့ဝင်ရောက်နိုင်တော့မည်မဟုတ်ပါ။

decompression script ကို အောက်ပါအတိုင်း ပြင်ဆင်ပါ။

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```