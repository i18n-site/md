# אתחול השרת (השתמש במחיצת BTRFS, תמונת מצב מתוכננת של סנאפר)

## שרת רכישה של contabo

contabo הוא ספק VPS זול בגרמניה עם היסטוריה ארוכה (יותר מ-20 שנה) ומשתמשים רבים (יותר מ-200,000), כך שאין צורך לדאוג לברוח.

VPS הקנייה [contabo.com](//contabo.com) זכרו לבחור בתמחור יורו, שהוא זול יותר.

![](https://i-01.eu.org/1718285782.avif)

יש עמלת התקנה חד פעמית עבור contabo.
עם זאת, יש כמה ימים בכל חודש שבהם דמי ההתקנה הם בחינם. פשוט הירשמו ושימו לב למיילים הפרסומיים.

בנוסף לתשלום השטח החינמי באירופה, באזורים אחרים יש רמות שונות של עליות מחירים.

בכל מקרה בחרתי בשרת אירופאי, לאחר השימוש ב-cloudflare, אין הרבה הבדל בין השרתים.

התצורה הסופית היא כדלקמן, 16GB זיכרון, 6CPU, 200GB NVMe, 9.50 יורו לחודש, שווה ערך ל-74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**מחיר זה הוא כמעט עשירית מהמחיר של עליבאבא ענן ואמזון** .

![](https://i-01.eu.org/1718356956.avif)

השתמשתי [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) כדי להפעיל את הביצועים והפרמטרים:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU דגם `AMD EPYC 9224 24-Core Processor` , ציון ביצועים בליבת 1285
, ציון רב ליבות 4277 ראה תוצאות נוספות [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

קניתי שלושה שרתים בבת אחת והפעלתי אותם בו זמנית זה מבטיח שהשרתים נמצאים באותו חדר מחשב, מה שמקל על בניית זמינות גבוהה בעתיד.

השרתים שלה מנתקים מדי פעם, מה שמבטיח נגישות לאתר באמצעות זמינות גבוהה.

משתמשים חדשים צריכים להגיש את תעודות הזהות שלהם לצורך אימות שם אמיתי בעת הרכישה.

## הגדר התחברות ללא סיסמה

לאחר מספר דקות, כל השרתים הופעלו.

הדבר הראשון IP לערוך `~/.ssh/config` של המחשב המקומי כדי להגדיר כינוי, ולאחר מכן להשתמש `ssh-copy-id root@c2` כדי להגדיר התחברות ללא סיסמה.

![](https://i-01.eu.org/1718287198.avif)

אתה יכול לשנות [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) זה כדי להשלים את תצורת האתחול מהר יותר.

לאחר השלמת התצורה נטולת הסיסמה, אתה יכול להשתמש [pdsh](https://github.com/chaos/pdsh) בקבוצות, וזה נוח.

הראשון הוא להפעיל ידנית את ipv6 ולבדוק

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

לאחר מכן שדרג את המערכת ל-ubuntu 24 בלחיצה אחת והתקן תוכנה נפוצה.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 פירושו מעבר שפה לסינית ואזור זמן לבייג'ינג.

התוכנה המותקנת כברירת מחדל מוגדרת בהתאם להרגלי השימוש האישיים שלי, כגון [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) וכו'. במידת הצורך, ניתן להעתיק את המחסן [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) ולשנות אותו לפי הצורך.

שלב זה נמשך זמן רב לאחר המתנה של חצי שעה, השדרוג וההתקנה של תוכנות נפוצות יצליחו. אתה יכול לאשר זאת באמצעות הפקודה הבאה:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh מאיץ את ssh

הרשת מאירופה לסין אינה יציבה. מומלץ להשתמש [mosh](//mosh.org) להאיץ `ssh` .

צור `c0` סקריפטים בספרייה המקומית `~/.bin` (התווסף בעיקר למשתנה סביבה `PATH` ) באופן הבא:

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

לאחר היצירה, הענק הרשאות הפעלה ו-soft-link `c1` ו `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

בעתיד, תוכל להזין ישירות `c0` ו `c1` כדי להשתמש `mosh` חיבורים ישירים במהירות גבוהה ולהזין [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## המרת פורמט מחיצה מ-ext4 ל-btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) יכול לצלם תמונות בדיסק לגיבוי קל.

ראשית היכנס למערכת החילוץ

![](https://i-01.eu.org/1718300448.avif)

בחר Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

המתן עד שהשרת יופעל מחדש

ssh יהיו שינויים בטביעת האצבע, השתמש `ssh-keygen -R ip` כדי לנקות את זה

לאחר מכן הפעל את הסקריפט הבא כדי להמיר את המחיצה

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

הסקריפט יפעיל מחדש את המערכת באופן אוטומטי לאחר שההמרה תצליח.

### הצג את יחס הדחיסה של btrfs

זה ידחוס אוטומטית כברירת מחדל הפקודה לבדיקת יחס הדחיסה היא כדלקמן:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### דחיסה ידנית

אם אתה פרפקציוניסט, אתה יכול גם לבצע דחיסת דיסק מלאה באופן ידני הפקודה היא כדלקמן:

```bash
btrfs filesystem defragment -r -czstd /
```

כפי שמוצג באיור למטה, אתה יכול לראות שלאחר דחיסה ידנית במערכת החדשה, נדחס כמעט 100MB יותר.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### צור גיבוי של תמונת Btrfs עם snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) הוא השותף הטוב ביותר לגיבוי Btrfs .

סקריפט האתחול יצור את ספריית `~/ubuntu` , פשוט הפעל את הפקודה הבאה:

```
~/ubuntu/snapper/init.sh
```

נתראה בתוכן התסריט [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

השתמש ב `snapper list-configs` כדי להציג את נפחי המשנה שעבורם מוגדרות צילומי מצב.

![](https://i-01.eu.org/1718302689.avif)

השתמש ב `snapper -c mnt list` כדי להציג תמונת מצב של תת-נפח

`/etc/snapper/configs/mnt` יכול להציג את הגדרות הגיבוי הספציפיות של תת-נפח זה

עוד הפניות:

[שחק בקלות עם פונקציית תמונת המצב של Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## תמונת מצב של שרת contabo

contabo מספק פונקציית תמונת מצב של השרת, אך לא תומך [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) מצב מתוזמנים.

![](https://i-01.eu.org/1718304206.avif)

כדי לשחזר תמונת מצב של שרת, תחילה לחץ על Crontol בתפריט הניהול

![](https://i-01.eu.org/1718304275.avif)

לאחר מכן, לחץ על תמונות Snapshot כדי לשחזר.

![](https://i-01.eu.org/1718304063.avif)

עם זאת, הפירוט של תמונת מצב זו גדולה מדי לאחר השחזור, הנתונים החדשים שנוספו יאבדו לחלוטין, אז נא להשתמש בהם בזהירות.

בדרך כלל נוח יותר להשתמש בתמונות מצב של btrfs.

## פרטי מערכת החילוץ

היכנס למערכת ההצלה לאחר 22 [tcping](https://github.com/paradiseduo/tcping) נגישה, לא תוכל לגשת אליה עם הסיסמה המוגדרת במשך דקות של 2-3 .

```
tcping ip 22 -c 9999
```

ניתן לעקוב אחר נגישות הנמל.

### כיצד לגשת לכונן הקשיח לאחר כניסה לחילוץ &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

אתה יכול לראות את תמונת המצב, למשל

```
snapper -c etc list
```

הצג שינויים בקובץ תמונת מצב

```
snapper -c etc status 5..6
```

הצג טקסט שונה ספציפי

```
snapper -c etc diff 3..5
```

שחזר תמונת מצב: לדוגמה, בטל את כל השינויים לאחר תמונת מצב 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### אפשר התמדה ביומן

הפעלת התמדה ביומן תחת מערכת הצלה מחייבת אותך ליצור ידנית את הספרייה המתאימה ולבצע כמה שלבים נוספים, מכיוון שייתכן שאין לך שירות systemd פועל. להלן השלבים שתוכל לנסות:

ראשית chroot, אז

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

אתחל מחדש לתוך מערכת אובונטו שלך: לאחר ביצוע השינויים לעיל, עליך לאתחל את המחשב שלך כרגיל ולמערכת אובונטו שלך במקום מערכת ההצלה.

באופן זה, systemd-journald יתחיל עם התצורה החדשה ויתחיל לאחסן יומנים באופן קבוע בדיסק הקשיח.

זכור כי הפעולות הנ"ל מבוצעות על מערכת הצלה, כך שהשינויים הללו לא ייכנסו לתוקף עד שהמערכת תופעל מחדש ולא תהיה יותר במצב הצלה.

משמעות הדבר היא שלא תראה מייד שינויים ביומנים קיימים שהופכים קבועים, אך כל היומנים שנוצרו לאחר מכן יישמרו.

כך תוכלו לצפות ביומנים של שירות ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## הערות על מחלות קשות ומסובכות

### פתור את הבעיה המוזרה: השרת לא יכול ssh

השתמשתי בפעולת github כדי ליצור סקריפט קומפילציה ופריסה אוטומטית בעבר, אבל גיליתי ששירות הפריסה לא יכול להיות ssh.

כניסה למערכת החילוץ והסתכלות ביומנים היא בעיית הרשאה:

`Missing privilege separation directory: /run/sshd`

אתה יכול ליצור ספרייה זו עם הפקודה הבאה

```
chown root:root /
systemd-tmpfiles --create
```

לאחר חקירות חוזרות ונשנות, זה בגלל github action `uid` של tar הוא `1001`

tar האריזה חייב להיות אם אין פרמטר `--no-same-owner` , הוא יפורק ל `uid` עבור `1001` משתמשים

כתוצאה מכך, rsync ישנה את קבוצת המשתמשים של ספריית השורש, ולאחר מכן לא תוכל להיכנס ל-ssh לאחר הפעלה מחדש.

שנה את סקריפט הדחיסה באופן הבא:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```