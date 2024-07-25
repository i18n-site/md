# تهيئة الخادم (استخدم قسم BTRFS، لقطة snapper المجدولة)

## خادم شراء كونتابو

contabo هو مزود VPS رخيص في ألمانيا وله تاريخ طويل (أكثر من 20 عامًا) والعديد من المستخدمين (أكثر من 200000)، لذلك لا داعي للقلق بشأن الهروب.

VPS الشراء [contabo.com](//contabo.com) تذكر أن تختار سعر اليورو، وهو أرخص.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

هناك رسوم تثبيت لمرة واحدة لـ contabo.
ومع ذلك، هناك بضعة أيام كل شهر حيث تكون رسوم التثبيت مجانية. ما عليك سوى التسجيل والانتباه إلى رسائل البريد الإلكتروني الترويجية.

بالإضافة إلى رسوم المنطقة المجانية في أوروبا، هناك مناطق أخرى لديها مستويات مختلفة من الزيادات في الأسعار.

لقد اخترت خادمًا أوروبيًا على أية حال، بعد استخدام cloudflare، لم يعد هناك فرق كبير بين الخوادم.

التكوين النهائي هو كما يلي، ذاكرة 16 جيجابايت، 6 وحدة معالجة مركزية، 200 جيجابايت NVMe، 9.50 يورو شهريًا، أي ما يعادل 74.43 يوان صيني.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**هذا السعر هو ما يقرب من عُشر سعر Alibaba Cloud وAmazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

اعتدت [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) لتشغيل الأداء والمعلمات:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

عرض النموذج CPU `AMD EPYC 9224 24-Core Processor` درجة أداء النواة الواحدة 1285
، نقاط متعددة النواة 4277 رؤية المزيد من النتائج [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

لقد اشتريت ثلاثة خوادم في وقت واحد وقمت بتنشيطها في نفس الوقت، مما يضمن وجود الخوادم في نفس غرفة الكمبيوتر، مما يسهل تحقيق التوفر العالي في المستقبل.

يتم تعليق خوادمها أحيانًا، مما يضمن إمكانية الوصول إلى موقع الويب من خلال التوفر العالي.

يحتاج المستخدمون الجدد إلى تقديم بطاقات الهوية الخاصة بهم لمصادقة الاسم الحقيقي عند الشراء.

## تكوين تسجيل الدخول بدون كلمة مرور

وبعد دقائق قليلة، تم تفعيل جميع الخوادم.

أول شيء هو تحرير الجهاز المحلي `~/.ssh/config` وتعيين اسم مستعار لـ IP ثم استخدم `ssh-copy-id root@c2` لتكوين تسجيل دخول بدون كلمة مرور.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

يمكنك تعديل هذا [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) لإكمال تكوين التهيئة بشكل أسرع.

بعد اكتمال التكوين الخالي من كلمة المرور، يمكنك [pdsh](https://github.com/chaos/pdsh) على دفعات، وهو أمر مناسب.

الأول هو تمكين IPv6 واختباره يدويًا

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

ثم قم بترقية النظام إلى Ubuntu 24 بنقرة واحدة وقم بتثبيت البرامج شائعة الاستخدام.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 يعني تبديل اللغة إلى اللغة الصينية والمنطقة الزمنية إلى بكين.

يتم تكوين البرنامج المثبت افتراضيًا وفقًا لعادات الاستخدام الشخصية، مثل [mise](https://github.com/jdx/mise) و [direnv](https://direnv.net/) وما إلى ذلك. إذا لزم الأمر، يمكنك نسخ المستودع [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) وتعديله حسب الحاجة.

تستغرق هذه الخطوة وقتًا طويلاً، وبعد الانتظار لمدة نصف ساعة، ستتم ترقية البرامج شائعة الاستخدام وتثبيتها بنجاح. يمكنك تأكيد ذلك باستخدام الأمر التالي:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## Mosh يسرع SSH

الشبكة `ssh` أوروبا إلى الصين ليست مستقرة فمن المستحسن استخدامها لتسريع [mosh](//mosh.org)

قم بإنشاء برنامج نصي `c0` في `~/.bin` الجهاز المحلي (الذي تمت إضافته بشكل أساسي إلى متغير البيئة `PATH` ) كما يلي:

```bash
#!/usr/bin/env باش

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

بعد الإنشاء، قم بمنح الأذونات القابلة للتنفيذ والارتباط `c2` `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

في المستقبل، يمكنك الدخول مباشرة إلى `c0` و `c1` ويمكنك استخدام `mosh` للاتصال مباشرة والدخول [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## تحويل تنسيق القسم من ext4 إلى btrfs

يمكن [btrfs](https://wikipedia.org/wiki/Btrfs) تأخذ لقطات القرص لسهولة النسخ الاحتياطي.

أدخل أولاً إلى نظام الإنقاذ

<img alt="" src="https://i-01.eu.org/1718300448.avif">

اختر إنقاذ دبيان

<img alt="" src="https://i-01.eu.org/1718300753.avif">

انتظر حتى يتم إعادة تشغيل الخادم

ستحدث تغييرات في بصمة الإصبع عند `ssh-keygen -R ip` ssh

ثم قم بتشغيل البرنامج النصي التالي لتحويل القسم

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

سيقوم البرنامج النصي بإعادة تشغيل النظام تلقائيًا بعد نجاح التحويل.

### عرض نسبة ضغط btrfs

سيتم الضغط تلقائيًا بشكل افتراضي. الأمر للتحقق من نسبة الضغط هو كما يلي:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### الضغط اليدوي

إذا كنت من محبي الكمال، فيمكنك أيضًا إجراء ضغط كامل للقرص يدويًا، ويكون الأمر كما يلي

```bash
btrfs filesystem defragment -r -czstd /
```

كما هو موضح في الشكل أدناه، يمكنك أن ترى أنه بعد الضغط اليدوي في النظام الجديد، تم ضغط ما يقرب من 100 ميجابايت إضافية.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### قم بإنشاء نسخة احتياطية من لقطة Btrfs باستخدام snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) أفضل شريك للنسخ الاحتياطي Btrfs .

سيقوم البرنامج النصي للتهيئة بإنشاء `~/ubuntu` ، فقط قم بتشغيل الأمر التالي:

```
~/ubuntu/snapper/init.sh
```

نراكم في محتوى البرنامج النصي [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

استخدم `snapper list-configs` لعرض المجلدات الفرعية التي تم تعيين اللقطات لها.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

استخدم `snapper -c mnt list` لعرض لقطة لمجلد فرعي

`/etc/snapper/configs/mnt` عرض إعدادات النسخ الاحتياطي المحددة لهذا المجلد الفرعي

المزيد من المراجع:

[العب بسهولة مع وظيفة اللقطة Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## لقطة خادم كونتابو

contabo وظيفة لقطة الخادم، لكنه لا يدعم اللقطات المجدولة. لقد قمت بكتابة [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) لالتقاط لقطات يومية.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

لاستعادة لقطة الخادم، انقر أولاً على Crontol في قائمة الإدارة

<img alt="" src="https://i-01.eu.org/1718304275.avif">

ثم انقر فوق اللقطات لاستعادتها.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

ومع ذلك، فإن دقة هذه اللقطة كبيرة جدًا بمجرد استعادتها، سيتم فقدان البيانات المضافة حديثًا بالكامل، لذا يرجى استخدامها بحذر.

عادةً ما يكون استخدام لقطات btrfs أكثر ملاءمة.

## تفاصيل نظام الإنقاذ

أدخل إلى نظام الإنقاذ 22 بعد [tcping](https://github.com/paradiseduo/tcping) إلى المنفذ، لن تتمكن من الوصول إليه باستخدام كلمة المرور المحددة لمدة دقيقة 2-3 . فقط انتظر لحظة وسيكون الأمر على ما يرام.

```
tcping ip 22 -c 9999
```

يمكن مراقبة إمكانية الوصول إلى المنفذ.

### كيفية الوصول إلى القرص الصلب بعد الدخول إلى الإنقاذ &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

يمكنك عرض اللقطة، على سبيل المثال

```
snapper -c etc list
```

عرض تغييرات ملف اللقطة

```
snapper -c etc status 5..6
```

عرض نص فرق محدد

```
snapper -c etc diff 3..5
```

استعادة اللقطة: على سبيل المثال، التراجع عن كافة التغييرات بعد اللقطة 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### تمكين ثبات السجل

يتطلب تمكين استمرارية السجل ضمن نظام الإنقاذ إنشاء الدليل المقابل يدويًا وتنفيذ بعض الخطوات الإضافية، لأنه قد لا يكون لديك خدمة systemd قيد التشغيل. فيما يلي الخطوات التي يمكنك تجربتها:

قم بالجذر أولا، ثم

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

إعادة التشغيل في نظام Ubuntu الخاص بك: بعد إجراء التغييرات المذكورة أعلاه، تحتاج إلى إعادة تشغيل جهازك بشكل طبيعي وفي نظام Ubuntu الخاص بك بدلاً من نظام الإنقاذ.

بهذه الطريقة، سيبدأ systemd-journald بالتكوين الجديد ويبدأ في تخزين السجلات باستمرار على القرص الثابت.

ضع في اعتبارك أن العمليات المذكورة أعلاه يتم تنفيذها على نظام الإنقاذ، وبالتالي فإن هذه التغييرات لن تصبح سارية المفعول إلا بعد إعادة تشغيل النظام ولم يعد في وضع الإنقاذ.

وهذا يعني أنك لن ترى على الفور أن أي تغييرات في السجلات الموجودة تصبح مستمرة، ولكن جميع السجلات التي تم إنشاؤها بعد ذلك ستستمر.

بهذه الطريقة يمكنك عرض سجلات خدمة ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## ملاحظات على الأمراض الصعبة والمعقدة

### حل المشكلة الغريبة: الخادم لا يمكنه استخدام SSH

لقد استخدمت إجراء github لإنشاء برنامج نصي للتجميع والنشر التلقائي من قبل، لكنني وجدت أن خدمة النشر لا يمكن أن تكون ssh.

يعد الدخول إلى نظام الإنقاذ والنظر في السجلات مشكلة تتعلق بالإذن:

`Missing privilege separation directory: /run/sshd`

يمكنك إنشاء هذا الدليل باستخدام الأمر التالي

```
chown root:root /
systemd-tmpfiles --create
```

بعد التحقيقات المتكررة، السبب هو github action المستخدم الذي قام بتحميل tar هو `1001` `uid`

يجب أن يتم التفريغ بدون `--no-same-owner` tar فك ضغطه إلى `uid` للمستخدم `1001`

نتيجة لذلك، سيقوم rsync بتغيير مجموعة مستخدمي الدليل الجذر، وبعد ذلك لن تتمكن من تسجيل الدخول إلى ssh بعد إعادة التشغيل.

قم بتعديل البرنامج النصي لإلغاء الضغط كما يلي:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

