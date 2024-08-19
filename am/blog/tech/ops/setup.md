# አገልጋዩን አስጀምር (የBTRFS ክፍልፍል፣ ስናፐር መርሐግብር የተያዘለት ቅጽበታዊ ገጽ እይታን ተጠቀም)

## contabo ግዢ አገልጋይ

contabo ረጅም ታሪክ ያለው (ከ20 አመት በላይ) እና ብዙ ተጠቃሚዎች (ከ200,000 በላይ) ያለው በጀርመን ውስጥ ርካሽ ቪፒኤስ አቅራቢ ነው፣ ስለዚህ ስለሸሸው መጨነቅ አያስፈልግም።

[contabo.com](//contabo.com) የዩሮ ዋጋ VPS ያስታውሱ፣ ይህም ርካሽ ነው።

![](https://i-01.eu.org/1718285782.avif)

ለኮንታቦ የአንድ ጊዜ የመጫኛ ክፍያ አለ።
ነገር ግን፣ በየወሩ የመጫኛ ክፍያ ነጻ የሆነባቸው ጥቂት ቀናት ብቻ ይመዝገቡ እና ለማስታወቂያ ኢሜይሎች ትኩረት ይስጡ።

በአውሮፓ ካለው የነፃ አካባቢ ክፍያ በተጨማሪ ሌሎች ክልሎች የተለያየ የዋጋ ጭማሪ አላቸው።

ለማንኛውም፣ Cloudflare ከተጠቀምኩ በኋላ፣ በአገልጋዮቹ መካከል ብዙ ልዩነት የለም።

የመጨረሻው ውቅረት እንደሚከተለው ነው፣ 16GB ማህደረ ትውስታ፣ 6ሲፒዩ፣ 200 ጂቢ NVMe፣ በወር 9.50 ዩሮ፣ ከ74.43 RMB ጋር እኩል ነው።

![](https://i-01.eu.org/1718286008.avif)

**ይህ ዋጋ ከአሊባባ ክላውድ እና አማዞን ዋጋ አንድ አስረኛ ነው** ።

![](https://i-01.eu.org/1718356956.avif)

አፈፃፀሙን እና መለኪያዎችን ለማስኬድ ተጠቀምኩኝ [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU ላይ ሞዴል `AMD EPYC 9224 24-Core Processor` , ነጠላ-ኮር የአፈጻጸም ነጥብ 1285
፣ ባለብዙ-ኮር ነጥብ 4277 ተጨማሪ ውጤቶችን ይመልከቱ [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

በአንድ ጊዜ ሶስት ሰርቨሮችን ገዛሁ እና በአንድ ጊዜ አነቃኋቸው ይህ ሰርቨሮቹ በአንድ የኮምፒዩተር ክፍል ውስጥ መሆናቸውን ያረጋግጣል, ይህም ለወደፊቱ ከፍተኛ ተደራሽነት ለመገንባት ቀላል ያደርገዋል.

አገልጋዮቹ አልፎ አልፎ ይዘጋሉ፣ ይህም የድረ-ገጹን ተደራሽነት በከፍተኛ ተደራሽነት ያረጋግጣል።

አዲስ ተጠቃሚዎች ሲገዙ የመታወቂያ ካርዶቻቸውን ለእውነተኛ ስም ማረጋገጫ ማስገባት አለባቸው።

## ከይለፍ ቃል-ነጻ መግቢያን ያዋቅሩ

ከጥቂት ደቂቃዎች በኋላ አገልጋዮቹ ሁሉም ነቅተዋል።

የመጀመሪያው IP ተለዋጭ ስም ለማዘጋጀት የሃገር ውስጥ ማሽን `~/.ssh/config` ን ማስተካከል እና ከዚያ `ssh-copy-id root@c2` በመጠቀም ከይለፍ ቃል ነፃ የሆነ መግቢያን ማዋቀር ነው።

![](https://i-01.eu.org/1718287198.avif)

የማስጀመሪያውን ውቅረት በፍጥነት ለማጠናቀቅ ይህን [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ማሻሻል ይችላሉ።

ከይለፍ ቃል-ነጻ ውቅር ከተጠናቀቀ በኋላ ሊጠቀሙበት ይችላሉ [pdsh](https://github.com/chaos/pdsh)

የመጀመሪያው ipv6ን በእጅ ማንቃት እና መሞከር ነው።

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

ከዚያ ስርዓቱን በአንድ ጠቅታ ወደ ubuntu 24 አሻሽሉት እና በብዛት ጥቅም ላይ የዋሉ ሶፍትዌሮችን ይጫኑ።

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 ቋንቋን ወደ ቻይንኛ እና የሰዓት ዞን ወደ ቤጂንግ መቀየር ማለት ነው።

በነባሪነት የተጫነው [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) [direnv](https://direnv.net/) [mise](https://github.com/jdx/mise)

ይህ እርምጃ ለግማሽ ሰዓት ያህል ከተጠባበቀ በኋላ ብዙ ጊዜ ጥቅም ላይ የሚውለውን ሶፍትዌር ማሻሻል እና መጫን ስኬታማ ይሆናል. ይህንን በሚከተለው ትዕዛዝ ማረጋገጥ ይችላሉ፡-

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh ssh ያፋጥናል

ከአውሮፓ ወደ ቻይና ያለው አውታረመረብ የተረጋጋ አይደለም `ssh` [mosh](//mosh.org) .

በአካባቢያዊው ማውጫ `~/.bin` (በዋነኛነት ወደ አካባቢ ተለዋዋጭ `PATH` ) ውስጥ `c0` ስክሪፕቶችን ይፍጠሩ

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

ከተፈጠረ በኋላ፣ ተፈፃሚ የሆኑ ፈቃዶችን እና ለስላሳ-ሊንክ `c1` እና `c2` ይስጡ።

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

ወደፊት `mosh` ባለ ከፍተኛ ፍጥነት ቀጥተኛ ግንኙነት ለመጠቀም `c0` እና `c1` በቀጥታ ማስገባት እና ማስገባት ትችላለህ [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## የክፍል ቅርፀትን ከ ext4 ወደ btrfs ቀይር

ለቀላል ምትኬ የዲስክ ቅጽበተ-ፎቶዎችን ማንሳት [btrfs](https://wikipedia.org/wiki/Btrfs) ።

በመጀመሪያ ወደ የማዳኛ ስርዓት ውስጥ ይግቡ

![](https://i-01.eu.org/1718300448.avif)

ዴቢያን ማዳንን ይምረጡ

![](https://i-01.eu.org/1718300753.avif)

አገልጋዩ እንደገና እስኪጀምር ድረስ ይጠብቁ

የጣት አሻራ ለውጦች ይኖራሉ ssh እሱን ለማጽዳት `ssh-keygen -R ip` ይጠቀሙ

ከዚያም ክፋዩን ለመለወጥ የሚከተለውን ስክሪፕት ያሂዱ

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

ልወጣው ከተሳካ በኋላ ስክሪፕቱ በራስ-ሰር ስርዓቱን እንደገና ይጀምራል።

### የbtrfs መጭመቂያ ሬሾን ይመልከቱ

የጨመቁትን ጥምርታ ለመፈተሽ ትእዛዝ በነባሪነት ይጨመቃል።

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### በእጅ መጭመቅ

ፍፁምነት ባለሙያ ከሆንክ ሙሉ የዲስክ መጭመቂያውን በእጅ ማከናወን ትችላለህ።

```bash
btrfs filesystem defragment -r -czstd /
```

ከታች ባለው ስእል እንደሚታየው በአዲሱ ሲስተም ውስጥ በእጅ ከተጨመቀ በኋላ 100MB የሚጠጋ ተጨማሪ የታመቀ መሆኑን ማየት ይችላሉ።

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### ከ snapper ጋር የBtrfs ቅጽበታዊ ፎቶ ምትኬ ይፍጠሩ

ለ Btrfs ምትኬ ምርጡ አጋር ነው [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html)

የማስጀመሪያው ስክሪፕት `~/ubuntu` ማውጫን ይፈጥራል፣ የሚከተለውን ትዕዛዝ ብቻ ያሂዱ፡-

```
~/ubuntu/snapper/init.sh
```

በስክሪፕቱ ይዘት ውስጥ እንገናኝ [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

ቅጽበተ-ፎቶዎች የተቀናበሩበትን ንዑስ ጥራዞች ለማየት `snapper list-configs` ይጠቀሙ።

![](https://i-01.eu.org/1718302689.avif)

የአንድ ንዑስ ጥራዝ ቅጽበታዊ ገጽ እይታን ለማየት `snapper -c mnt list` ይጠቀሙ

`/etc/snapper/configs/mnt` የዚህን ንዑስ ጥራዝ ልዩ የመጠባበቂያ ቅንጅቶችን ማየት ይችላል።

ተጨማሪ ማጣቀሻዎች፡-

[የ Btrfs ቅጽበታዊ ተግባርን በቀላሉ ይጫወቱ snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo አገልጋይ ቅጽበታዊ

[github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) ቅጽበተ-ፎቶ ተግባርን ያቀርባል፣ ግን የታቀዱ ቅጽበተ-ፎቶዎችን contabo ።

![](https://i-01.eu.org/1718304206.avif)

የአገልጋይ ቅጽበተ-ፎቶን ወደነበረበት ለመመለስ በመጀመሪያ በአስተዳደር ሜኑ ውስጥ ክሮንቶልን ጠቅ ያድርጉ

![](https://i-01.eu.org/1718304275.avif)

ከዚያ ወደነበረበት ለመመለስ ቅጽበተ-ፎቶዎችን ጠቅ ያድርጉ።

![](https://i-01.eu.org/1718304063.avif)

ነገር ግን የዚህ ቅጽበታዊ ገጽ እይታ በጣም ትልቅ ነው አንዴ ከተመለሰ አዲስ የተጨመረው መረጃ ሙሉ በሙሉ ይጠፋል፣ ስለዚህ እባክዎን በጥንቃቄ ይጠቀሙበት።

ብዙውን ጊዜ btrfs ቅጽበተ-ፎቶዎችን መጠቀም የበለጠ አመቺ ነው።

## የማዳኛ ስርዓት ዝርዝሮች

የማዳኛ ስርዓቱን ያስገቡ 22 ወደቡ ከተደረሰ በኋላ በተዘጋጀው የይለፍ ቃል ለ 2-3 ደቂቃ [tcping](https://github.com/paradiseduo/tcping) ሊደርሱበት አይችሉም።

```
tcping ip 22 -c 9999
```

የወደብ ተደራሽነት መከታተል ይቻላል።

### ማዳን ከገባ በኋላ ሃርድ ድራይቭን እንዴት ማግኘት ይቻላል &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

ለምሳሌ ቅጽበተ-ፎቶውን ማየት ይችላሉ

```
snapper -c etc list
```

ቅጽበታዊ የፋይል ለውጦችን ይመልከቱ

```
snapper -c etc status 5..6
```

የተለየ ጽሑፍ ይመልከቱ

```
snapper -c etc diff 3..5
```

ቅጽበተ-ፎቶን ወደነበረበት መልስ፡- ለምሳሌ፣ ከቅጽበተ-ፎቶ 5 በኋላ ሁሉንም ለውጦች ይቀልብሱ

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### የምዝግብ ማስታወሻ ጽናት አንቃ

በማዳኛ ስርዓት ውስጥ የምዝግብ ማስታወሻን መጽናት ማንቃት ተጓዳኝ ማውጫውን እራስዎ መፍጠር እና አንዳንድ ተጨማሪ እርምጃዎችን ማከናወን ያስፈልግዎታል ምክንያቱም በስርዓት የተያዘ አገልግሎት ላይኖርዎት ይችላል። መሞከር የምትችላቸው ደረጃዎች እነኚሁና፡

መጀመሪያ ክሩት ፣ ከዚያ

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

ወደ ኡቡንቱ ስርዓትዎ እንደገና ያስነሱ፡ ከላይ ያሉትን ለውጦች ካደረጉ በኋላ፣ ከማዳኛ ስርዓት ይልቅ ማሽንዎን በመደበኛነት እና ወደ ኡቡንቱ ሲስተምዎ እንደገና ማስጀመር ያስፈልግዎታል።

በዚህ መንገድ ሲስተምድ-ጆርናልድ በአዲሱ ውቅረት ይጀምራል እና ምዝግብ ማስታወሻዎችን በሃርድ ዲስክ ላይ ያለማቋረጥ ማከማቸት ይጀምራል።

ከላይ ያሉት ስራዎች የሚከናወኑት በማዳኛ ስርዓት ላይ መሆኑን አስታውስ፣ ስለዚህ እነዚያ ለውጦች ስርዓቱ ዳግም እስኪነሳ ድረስ እና በማዳን ሁነታ ላይ እስካልተገኘ ድረስ ተግባራዊ አይሆኑም።

ይህ ማለት በነባር ምዝግብ ማስታወሻዎች ላይ ቋሚ የሆኑ ለውጦችን ወዲያውኑ አታዩም ነገር ግን ከዚያ በኋላ የተፈጠሩ ሁሉም ምዝግብ ማስታወሻዎች ይቀጥላሉ ማለት ነው።

በዚህ መንገድ የ ssh አገልግሎት ምዝግብ ማስታወሻዎችን ማየት ይችላሉ

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## ስለ አስቸጋሪ እና ውስብስብ በሽታዎች ማስታወሻዎች

### እንግዳውን ችግር ይፍቱ፡ አገልጋዩ ssh አይችልም።

ከዚህ በፊት አውቶማቲክ ማጠናቀር እና ማሰማራት ስክሪፕት ለመስራት github እርምጃን ተጠቀምኩ፣ ነገር ግን የማሰማራቱ አገልግሎት ssh ሊሆን እንደማይችል ተረድቻለሁ።

የማዳኛ ስርዓቱን ማስገባት እና መዝገቦችን መመልከት የፍቃድ ጉዳይ ነው፡-

`Missing privilege separation directory: /run/sshd`

ይህንን ማውጫ በሚከተለው ትዕዛዝ መፍጠር ይችላሉ።

```
chown root:root /
systemd-tmpfiles --create
```

ከተደጋጋሚ ምርመራዎች በኋላ፣ ተጠቃሚው `uid` የ tar `1001` ስለሆነ ነው github action

ማሸግ መለኪያ `--no-same-owner` ከሌለ መሆን አለበት ለ `uid` ለ `1001` ተጠቃሚዎች ይጨመቃል tar

በውጤቱም, rsync የ root ማውጫውን የተጠቃሚ ቡድን ይለውጠዋል, እና እንደገና ከጀመሩ በኋላ ወደ ssh መግባት አይችሉም.

የመበስበስ ስክሪፕቱን እንደሚከተለው ያስተካክሉት

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```