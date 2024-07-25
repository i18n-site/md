# راه اندازی سرور (استفاده از پارتیشن BTRFS، عکس فوری برنامه ریزی شده snapper)

## سرور خرید contabo

contabo یک ارائه دهنده ارزان VPS در آلمان با سابقه طولانی (بیش از 20 سال) و کاربران بسیار (بیش از 200000) است، بنابراین نیازی به نگرانی در مورد فرار نیست.

VPS خرید [contabo.com](//contabo.com) به یاد داشته باشید که قیمت یورو را انتخاب کنید، که ارزان تر است.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

یک بار هزینه نصب برای contabo وجود دارد.
با این حال، هر ماه چند روز وجود دارد که هزینه نصب رایگان است فقط ثبت نام کنید و به ایمیل های تبلیغاتی توجه کنید.

علاوه بر هزینه منطقه آزاد در اروپا، سایر مناطق دارای سطوح متفاوتی از افزایش قیمت هستند.

من یک سرور اروپایی را انتخاب کردم، پس از استفاده از cloudflare، تفاوت زیادی بین سرورها وجود ندارد.

پیکربندی نهایی به شرح زیر است، حافظه 16 گیگابایت، 6 سی پی یو، 200 گیگابایت NVMe، 9.50 یورو در ماه، معادل 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**این قیمت تقریبا یک دهم قیمت Alibaba Cloud و Amazon است** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

من برای اجرای عملکرد و پارامترها استفاده [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) :

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

نمایشگر مدل CPU `AMD EPYC 9224 24-Core Processor` امتیاز عملکرد تک هسته ای 1285
, امتیاز چند هسته ای 4277 مشاهده نتایج بیشتر [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

من سه سرور را در یک زمان خریدم و آنها را به طور همزمان فعال کردم.

سرورهای آن گهگاه قطع می شوند و دسترسی به وب سایت را از طریق در دسترس بودن بالا تضمین می کنند.

کاربران جدید هنگام خرید باید کارت شناسایی خود را برای احراز هویت واقعی ارسال کنند.

## پیکربندی ورود بدون رمز عبور

بعد از چند دقیقه همه سرورها فعال شدند.

اولین چیز این است که دستگاه محلی را ویرایش کنید `~/.ssh/config` یک نام مستعار برای IP و سپس از `ssh-copy-id root@c2` برای پیکربندی ورود بدون رمز عبور استفاده کنید.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

شما می توانید این [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) را تغییر دهید تا پیکربندی اولیه را سریعتر تکمیل کنید.

پس از تکمیل پیکربندی بدون رمز عبور، می توانید از [pdsh](https://github.com/chaos/pdsh) به صورت دسته ای استفاده کنید، که راحت است.

اولین مورد این است که ipv6 را به صورت دستی فعال کنید و تست کنید

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

سپس با یک کلیک سیستم را به اوبونتو 24 ارتقا دهید و نرم افزارهای رایج را نصب کنید.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 به معنای تغییر زبان به چینی و منطقه زمانی به پکن است.

نرم افزار نصب شده به طور پیش فرض بر اساس عادات استفاده شخصی من مانند [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) و غیره پیکربندی شده است [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu)

این مرحله بعد از نیم ساعت انتظار، به روز رسانی و نصب نرم افزارهای رایج با موفقیت انجام می شود. با دستور زیر می توانید آن را تایید کنید:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh سرعت ssh را افزایش می دهد

شبکه از اروپا به چین است که توصیه می شود برای افزایش `ssh` [mosh](//mosh.org)

یک اسکریپت `c0` در `~/.bin` ماشین محلی (عمدتاً به متغیر محیطی `PATH` اضافه شده) به صورت زیر ایجاد کنید:

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

پس از ایجاد، مجوزهای اجرایی و `c2` -link اعطا کنید `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

در آینده می توانید مستقیماً `c0` `c1` را وارد کنید و می توانید از `mosh` برای اتصال مستقیم و وارد کردن [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## تبدیل فرمت پارتیشن از ext4 به btrfs

می [btrfs](https://wikipedia.org/wiki/Btrfs) برای تهیه نسخه پشتیبان از دیسک عکس های فوری بگیرد.

ابتدا وارد سیستم نجات شوید

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Debian Rescue را انتخاب کنید

<img alt="" src="https://i-01.eu.org/1718300753.avif">

منتظر بمانید تا سرور راه اندازی مجدد شود

تغییرات اثر انگشت زمانی رخ `ssh-keygen -R ip` دهد که از ssh

سپس اسکریپت زیر را برای تبدیل پارتیشن اجرا کنید

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

اسکریپت پس از موفقیت آمیز شدن تبدیل، سیستم را به طور خودکار راه اندازی مجدد می کند.

### مشاهده نسبت فشرده سازی btrfs

به طور پیش فرض به طور خودکار فشرده می شود. دستور بررسی نسبت فشرده سازی به شرح زیر است:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### فشرده سازی دستی

اگر شما یک کمال گرا هستید، می توانید فشرده سازی کامل دیسک را به صورت دستی نیز انجام دهید

```bash
btrfs filesystem defragment -r -czstd /
```

همانطور که در شکل زیر نشان داده شده است، مشاهده می کنید که پس از فشرده سازی دستی در سیستم جدید، نزدیک به 100 مگابایت بیشتر فشرده شده است.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### با snapper یک بک آپ عکس فوری Btrfs ایجاد کنید

بهترین شریک برای #پشتیبان گیری Btrfs [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) .

اسکریپت اولیه `~/ubuntu` را ایجاد می کند، فقط دستور زیر را اجرا کنید:

```
~/ubuntu/snapper/init.sh
```

شما را در محتوای فیلمنامه می بینیم [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

از `snapper list-configs` برای مشاهده حجم های فرعی که عکس های فوری برای آنها تنظیم شده اند استفاده کنید.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

برای مشاهده عکس فوری از یک زیر جلد استفاده `snapper -c mnt list`

می توانید تنظیمات پشتیبان خاص این زیرجلد `/etc/snapper/configs/mnt` مشاهده کنید

مراجع بیشتر:

[به راحتی با عملکرد عکس فوری Btrfs بازی کنید snapper](https://zhuanlan.zhihu.com/p/31082518)

## عکس فوری سرور contabo

عملکرد عکس فوری سرور را ارائه می دهد contabo اما [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) عکس های فوری برنامه ریزی شده پشتیبانی نمی کند.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

برای بازیابی یک عکس فوری سرور، ابتدا روی Crontol در منوی مدیریت کلیک کنید

<img alt="" src="https://i-01.eu.org/1718304275.avif">

سپس برای بازیابی، روی Snapshots کلیک کنید.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

با این حال، جزئیات این عکس فوری بسیار زیاد است، پس از بازیابی، داده های تازه اضافه شده به طور کامل از بین خواهند رفت، بنابراین لطفاً با احتیاط از آن استفاده کنید.

معمولاً استفاده از عکس های فوری btrfs راحت تر است.

## جزئیات سیستم نجات

وارد سیستم نجات شوید 22 پس از اینکه پورت [tcping](https://github.com/paradiseduo/tcping) در دسترس قرار گرفت، نمی توانید با رمز عبور تعیین شده به مدت 2-3 دقیقه به آن دسترسی پیدا کنید.

```
tcping ip 22 -c 9999
```

دسترسی به بندر قابل نظارت است.

### نحوه دسترسی به هارد دیسک پس از ورود & Restore snapshot

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

برای مثال می توانید عکس فوری را مشاهده کنید

```
snapper -c etc list
```

مشاهده تغییرات فایل لحظه ای

```
snapper -c etc status 5..6
```

مشاهده متن متفاوت خاص

```
snapper -c etc diff 3..5
```

Restore snapshot: برای مثال، تمام تغییرات بعد از عکس فوری 5 را لغو کنید

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### فعال کردن ماندگاری گزارش

فعال کردن تداوم گزارش در یک سیستم نجات از شما می‌خواهد که دایرکتوری مربوطه را به صورت دستی ایجاد کنید و برخی مراحل اضافی را انجام دهید، زیرا ممکن است یک سرویس systemd در حال اجرا نداشته باشید. در اینجا مراحلی وجود دارد که می توانید امتحان کنید:

اول chroot، سپس

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

راه‌اندازی مجدد در سیستم اوبونتو: پس از ایجاد تغییرات بالا، باید دستگاه خود را به‌طور عادی راه‌اندازی مجدد کنید و به جای سیستم نجات، در سیستم اوبونتو خود راه‌اندازی کنید.

به این ترتیب، systemd-journald با پیکربندی جدید شروع می‌کند و شروع به ذخیره‌سازی لاگ‌ها به‌طور مداوم روی دیسک سخت می‌کند.

به خاطر داشته باشید که عملیات فوق بر روی یک سیستم نجات انجام می شود، بنابراین این تغییرات تنها زمانی اعمال می شوند که سیستم راه اندازی مجدد شود و دیگر در حالت نجات نباشد.

این بدان معناست که شما فوراً مشاهده نخواهید کرد که هیچ تغییری در گزارش‌های موجود پایدار شود، اما همه گزارش‌هایی که پس از آن ایجاد می‌شوند، باقی خواهند ماند.

به این ترتیب می توانید گزارش های سرویس ssh را مشاهده کنید

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## نکاتی در مورد بیماری های سخت و پیچیده

### حل مشکل عجیب: سرور نمی تواند ssh

من قبلاً از اکشن github برای ایجاد اسکریپت کامپایل و استقرار خودکار استفاده کردم، اما متوجه شدم که سرویس استقرار نمی تواند ssh کند.

ورود به سیستم نجات و مشاهده سیاههها یک مشکل مجوز است:

`Missing privilege separation directory: /run/sshd`

با دستور زیر می توانید این دایرکتوری را ایجاد کنید

```
chown root:root /
systemd-tmpfiles --create
```

پس از بررسی های مکرر، به این دلیل است github action کاربری که `1001` tar آپلود کرده است `uid`

باز کردن بسته بندی باید بدون `--no-same-owner` tar کاربر `1001` به `uid` از حالت فشرده خارج می شود

در نتیجه rsync گروه کاربری دایرکتوری ریشه را تغییر می دهد و پس از راه اندازی مجدد نمی توانید وارد ssh شوید.

اسکریپت فشرده سازی را به صورت زیر تغییر دهید:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

