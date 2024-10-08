# יניטיאַליזירן די סערווער (נוצן BTRFS צעטיילונג, סנאַפּער סקעדזשולד מאָמענטבילד)

## קאָנטאַבאָ קויפן סערווער

קאָנטאַבאָ איז אַ ביליק וופּס שפּייַזער אין דייַטשלאַנד מיט אַ לאַנג געשיכטע (מער ווי 20 יאָר) און פילע יוזערז (מער ווי 200,000), אַזוי עס איז ניט דאַרפֿן צו זאָרג וועגן לויפן אַוועק.

VPS בייינג [contabo.com](//contabo.com) געדענקען צו קלייַבן ייראָ פּרייסינג, וואָס איז טשיפּער.

![](https://i-01.eu.org/1718285782.avif)

עס איז אַ איין-צייַט ינסטאַלירונג אָפּצאָל פֿאַר קאָנטאַבאָ.
אָבער, עס זענען אַ ביסל טעג יעדער חודש ווו די ינסטאַלירונג אָפּצאָל איז פריי.

אין אַדישאַן צו די פריי געגנט אָפּצאָל אין אייראָפּע, אנדערע מקומות האָבן פאַרשידענע לעוועלס פון פּרייַז ינקריסאַז.

איך אויסדערוויילט אַ אייראפעישער סערווער סייַ ווי סייַ, נאָך ניצן קלאָודפלאַרע, עס איז נישט פיל חילוק צווישן די סערווערס.

די לעצט קאַנפיגיעריישאַן איז ווי גייט, 16 גיגאבייט זכּרון, 6 קפּו, 200 גיגאבייט NVMe, 9.50 עוראָס פּער חודש, עקוויוואַלענט צו 74.43 רמב.

![](https://i-01.eu.org/1718286008.avif)

**דער פּרייַז איז כּמעט 1/10 פון די פּרייַז פון אַליבאַבאַ קלאָוד און אַמאַזאָן** .

![](https://i-01.eu.org/1718356956.avif)

איך [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) צו לויפן די פאָרשטעלונג און פּאַראַמעטערס:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

ווייזונג מאָדעל `AMD EPYC 9224 24-Core Processor` , איין-האַרץ פאָרשטעלונג כעזשבן 1285 CPU
, מאַלטי-האַרץ כעזשבן 4277 זען מער רעזולטאטן [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

איך געקויפט דריי סערווערס אין איין צייט און אַקטיווייטיד זיי אין דער זעלביקער צייט, דאָס ינשורז אַז די סערווערס זענען אין דער זעלביקער קאָמפּיוטער פּלאַץ, וואָס מאכט עס גרינגער צו בויען הויך אַוויילאַבילאַטי אין דער צוקונפֿט.

זיין סערווערס טייל מאָל הענגען אַרויף, ינשורינג וועבזייטל אַקסעסאַביליטי דורך הויך אַוויילאַבילאַטי.

נייַע ניצערס דאַרפֿן צו פאָרלייגן זייער שייַן קאַרדס פֿאַר פאַקטיש נאָמען אָטענטאַקיישאַן ווען זיי קויפן.

## קאַנפיגיער פּאַראָל-פריי לאָגין

נאָך אַ ביסל מינוט, אַלע סערווערס זענען אַקטיווייטיד.

דער ערשטער זאַך IP צו רעדאַגירן די `~/.ssh/config` פון די היגע מאַשין צו שטעלן אַן אַליאַס, און דעמאָלט נוצן `ssh-copy-id root@c2` צו קאַנפיגיער פּאַראָל-פריי לאָגין.

![](https://i-01.eu.org/1718287198.avif)

איר קענען מאָדיפיצירן דעם [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) צו פאַרענדיקן די יניטיאַליזאַטיאָן קאַנפיגיעריישאַן פאַסטער.

נאָך די פּאַראָל-פריי קאַנפיגיעריישאַן איז געענדיקט, איר קענען נוצן [pdsh](https://github.com/chaos/pdsh) אין באַטשאַז, וואָס איז באַקוועם.

דער ערשטער איז צו מאַניואַלי געבן יפּוו6 און פּרובירן

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

דערנאָך אַפּגרייד די סיסטעם צו ובונטו 24 מיט איין גיט און ינסטאַלירן קאַמאַנלי געוויינט ווייכווארג.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 מיטל באַשטימען שפּראַך צו כינעזיש און צייט זאָנע צו בעידזשינג.

די ווייכווארג אינסטאַלירן דורך פעליקייַט איז קאַנפיגיערד לויט מיין פּערזענלעך נוצן געוווינהייטן, אַזאַ ווי [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , אאז"ו ו. אויב נייטיק, איר קענען נאָכמאַכן די [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ווערכאַוס און מאָדיפיצירן עס ווי דארף.

דער שריט נעמט אַ לאַנג צייַט נאָך ווארטן פֿאַר אַ האַלב שעה, די אַפּגרייד און ינסטאַלירונג פון קאַמאַנלי געוויינט ווייכווארג וועט זיין געראָטן. איר קענען באַשטעטיקן דעם מיט די פאלגענדע באַפֿעל:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh ספּידז אַרויף ssh

די נעץ פון אייראָפּע צו טשיינאַ איז נישט סטאַביל צו [mosh](//mosh.org) `ssh` .

שאַפֿן `c0` סקריפּס אין די היגע וועגווייַזער `~/.bin` (דער הויפּט צוגעלייגט צו סוויווע בייַטעוודיק `PATH` ) ווי גייט:

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

נאָך שאַפונג, געבן עקסעקוטאַבלע פּערמישאַנז און ווייך-לינק `c1` און `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

אין דער צוקונפֿט, איר קענען גלייך אַרייַן `c0` און `c1` צו נוצן `mosh` הויך-גיכקייַט דירעקט קשר און אַרייַן [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## גער צעטיילונג פֿאָרמאַט פֿון ext4 צו btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) נעמען דיסק סנאַפּשאַץ פֿאַר גרינג באַקאַפּ.

ערשטער אַרייַן די ראַטעווען סיסטעם

![](https://i-01.eu.org/1718300448.avif)

קלייַבן Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

וואַרטן פֿאַר די סערווער צו ריסטאַרט

ssh עס וועט זיין ענדערונגען אין פינגערפּרינט, נוצן `ssh-keygen -R ip` צו ריין עס

דערנאָך לויפן די פאלגענדע שריפט צו בייַטן די צעטיילונג

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

דער שריפט וועט אויטאָמאַטיש ריסטאַרט די סיסטעם נאָך די קאַנווערזשאַן איז געראָטן.

### זען btrfs קאַמפּרעשאַן פאַרהעלטעניש

עס וועט אויטאָמאַטיש קאָמפּרעס דורך פעליקייַט די באַפֿעל צו קאָנטראָלירן די קאַמפּרעשאַן פאַרהעלטעניש איז ווי גייט:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### מאַנואַל קאַמפּרעשאַן

אויב איר זענט אַ פּערפעקשאַניסט, איר קענען אויך דורכפירן אַ פול דיסק קאַמפּרעשאַן מאַניואַלי די באַפֿעל איז ווי גייט:

```bash
btrfs filesystem defragment -r -czstd /
```

ווי געוויזן אין די פיגור אונטן, איר קענען זען אַז נאָך מאַנואַל קאַמפּרעשאַן אין די נייַע סיסטעם, קימאַט 100 מב מער איז קאַמפּרעסט.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### שאַפֿן אַ Btrfs מאָמענטבילד באַקאַפּ מיט סנאַפּער

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) איז דער בעסטער שוטעף פֿאַר Btrfs באַקאַפּ.

די יניטיאַליזאַטיאָן שריפט וועט מאַכן די `~/ubuntu` וועגווייַזער, נאָר לויפן די פאלגענדע באַפֿעל:

```
~/ubuntu/snapper/init.sh
```

זען איר אין די שריפט אינהאַלט [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

ניצן `snapper list-configs` צו זען די סובוואַליומז פֿאַר וואָס סנאַפּשאַץ זענען באַשטימט.

![](https://i-01.eu.org/1718302689.avif)

ניצן `snapper -c mnt list` צו זען אַ מאָמענטבילד פון אַ סובבאַנד

`/etc/snapper/configs/mnt` קענען זען די ספּעציפיש באַקאַפּ סעטטינגס פון דעם סובוואָם

מער באַווייַזן:

[שפּיל לייכט מיט די מאָמענטבילד פונקציע פון Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## קאָנטאַבאָ סערווער מאָמענטבילד

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

![](https://i-01.eu.org/1718304206.avif)

צו ומקערן אַ סערווער מאָמענטבילד, ערשטער גיט Crontol אין די פאַרוואַלטונג מעניו

![](https://i-01.eu.org/1718304275.avif)

דערנאָך, גיט Snapshots צו ומקערן.

![](https://i-01.eu.org/1718304063.avif)

אָבער, די גראַניאַלעראַטי פון דעם מאָמענטבילד איז צו גרויס אַמאָל געזונט, די ניי צוגעלייגט דאַטן וועט זיין גאָר פאַרפאַלן, אַזוי ביטע נוצן עס מיט וואָרענען.

עס איז יוזשאַוואַלי מער באַקוועם צו נוצן btrfs סנאַפּשאַץ.

## רעסקיו סיסטעם פרטים

אַרייַן [tcping](https://github.com/paradiseduo/tcping) 2-3 סיסטעם 22

```
tcping ip 22 -c 9999
```

פּאָרט אַקסעסאַביליטי קענען זיין מאָניטאָרעד.

### ווי צו אַקסעס די שווער פאָר נאָך אַרייַן ראַטעווען &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

איר קענען זען די מאָמענטבילד, פֿאַר בייַשפּיל

```
snapper -c etc list
```

View מאָמענטבילד טעקע ענדערונגען

```
snapper -c etc status 5..6
```

זען ספּעציפיש חילוק טעקסט

```
snapper -c etc diff 3..5
```

ומקערן מאָמענטבילד: פֿאַר בייַשפּיל, ופמאַכן אַלע ענדערונגען נאָך מאָמענטבילד 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### געבן קלאָץ פּערסיסטאַנס

געבן די קלאָץ פּערסיסטאַנס אונטער אַ ראַטעווען סיסטעם ריקווייערז איר צו מאַניואַלי שאַפֿן די קאָראַספּאַנדינג וועגווייַזער און דורכפירן עטלעכע נאָך סטעפּס, ווייַל איר קען נישט האָבן אַ פליסנדיק סיסטעם דינסט. דאָ זענען סטעפּס איר קענען פּרובירן:

ערשטער טשראָאָט, דעמאָלט

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

רעבאָאָט אין דיין ובונטו סיסטעם: נאָך מאכן די אויבן ענדערונגען, איר דאַרפֿן צו רעבאָאָט דיין מאַשין נאָרמאַלי און אין דיין ובונטו סיסטעם אַנשטאָט פון די ראַטעווען סיסטעם.

אין דעם וועג, systemd-journald וועט אָנהייבן מיט די נייַע קאַנפיגיעריישאַן און אָנהייבן סטאָרינג לאָגס פּערסיסטאַנטלי אויף די שווער דיסק.

האַלטן אין מיינונג אַז די אויבן אַפּעריישאַנז זענען דורכגעקאָכט אויף אַ ראַטעווען סיסטעם, אַזוי די ענדערונגען וועלן נישט נעמען ווירקונג ביז די סיסטעם איז רעבאָאָטעד און ניט מער אין ראַטעווען מאָדע.

דעם מיטל אַז איר וועט נישט גלייך זען קיין ענדערונגען צו יגזיסטינג לאָגס וואָס ווערן פּערסיסטענט, אָבער אַלע לאָגס דזשענערייטאַד נאָך וואָס וועט זיין פּערסיסטאַד.

דעם וועג איר קענען זען די לאָגס פון די ssh דינסט

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## הערות אויף שווער און קאָמפּליצירט חולאתן

### סאָלווע די מאָדנע פּראָבלעם: דער סערווער קען נישט ssh

איך געוויינט גיטהוב קאַמף צו מאַכן אַן אָטאַמאַטיק זאַמלונג און דיפּלוימאַנט שריפט פריער, אָבער געפֿונען אַז די דיפּלוימאַנט דינסט קען נישט זיין ssh.

אַרייַן די ראַטעווען סיסטעם און קוקן אין די לאָגס איז אַ דערלויבעניש אַרויסגעבן:

`Missing privilege separation directory: /run/sshd`

איר קענען מאַכן דעם וועגווייַזער מיט די פאלגענדע באַפֿעל

```
chown root:root /
systemd-tmpfiles --create
```

נאָך ריפּיטיד ינוועסטאַגיישאַנז, דאָס איז github action באַניצער `uid` פון tar איז `1001`

tar מוזן זיין אויב עס איז קיין פּאַראַמעטער `--no-same-owner` , עס וועט זיין דיקאַמפּרעסט צו `uid` פֿאַר `1001` יוזערז

ווי אַ רעזולטאַט, rsync וועט טוישן די באַניצער גרופּע פון דער וואָרצל וועגווייַזער, און איר וועט נישט קענען צו קלאָץ אין צו ssh נאָך ריסטאַרטינג.

מאָדיפיצירן די דיקאַמפּרעשאַן שריפט ווי גייט:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```