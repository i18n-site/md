# ነቲ ኣገልጋሊ ምጅማር (BTRFS ክፍሊ ምጥቃም፣ ስናፐር መደብ ዝተገብረሉ ቅጽበታዊ ስእሊ)

## contabo ዕድጊ ኣገልጋሊ

contabo ኣብ ጀርመን ነዊሕ ታሪኽ ዘለዎ (ልዕሊ 20 ዓመት)ን ብዙሓት ተጠቀምትን (ልዕሊ 200,000) ዘለዎ ርካሽ VPS ኣቕራቢ ስለዝኾነ፡ ብዛዕባ ምህዳም ምጭናቕ ኣየድልን።

[contabo.com](//contabo.com) ክትገዝእ VPS ዋጋ ዩሮ ምምራጽ ኣይትረስዕ፣ እዚ ድማ ዝሓሰረ እዩ።

![](https://i-01.eu.org/1718285782.avif)

ንኮንታቦ ናይ ሓደ ግዜ ናይ ምትካል ክፍሊት ኣሎ።
ይኹን እምበር ኣብ ነፍሲ ወከፍ ወርሒ ናይ ምትካል ክፍሊት ብነጻ ዝኾነሉ ውሑዳት መዓልታት ኣለዉ በቃ ተመዝገቡን ነቶም ናይ ምልላይ ኢመይላት ኣቓልቦ ሃቡን።

ኣብ ኤውሮጳ ብዘይካ እቲ ነጻ ናይ ከባቢ ክፍሊት፡ ካልኦት ዞባታት ዝተፈላለየ ደረጃ ወሰኽ ዋጋ ኣለወን።

ብዝኾነ ድሕሪ ምጥቃም ክላውድፍሌር ኣብ መንጎ ሰርቨር ብዙሕ ፍልልይ የለን።

ናይ መወዳእታ ውቅር ከምዚ ዝስዕብ ኮይኑ፡ 16GB መዘክር፡ 6CPU፡ 200 GB NVMe፡ 9.50 ዩሮ ኣብ ወርሒ፡ ማዕረ 74.43 RMB እዩ።

![](https://i-01.eu.org/1718286008.avif)

**እዚ ዋጋ ዳርጋ ሓደ ዓስራይ ክፋል ናይቲ ዋጋ ዓሊባባ ክላውድን ኣማዞንን እዩ** ።

![](https://i-01.eu.org/1718356956.avif)

ኣነ [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

ሞዴል `AMD EPYC 9224 24-Core Processor` ፣ ንጽል-ኮር ኣፈጻጽማ ነጥቢ 1285 የርኢ ኣሎ CPU
፣ ብዙሕ ዋናታት ዘለዎ ነጥቢ 4277 ተወሳኺ ውጽኢት ርአ [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

ኣብ ሓደ እዋን ሰለስተ ሰርቨር ገዚአ ኣብ ሓደ ግዜ ኣክቲቭ ጌረዮም እዚ ድማ እቶም ሰርቨር ኣብ ሓደ ክፍሊ ኮምፒተር ምህላዎም የረጋግጽ፣ ኣብ መጻኢ ልዑል ተረባሕነት ንምህናጽ ቀሊል ይገብሮ።

ኣገልገልታታ ሓሓሊፎም ቴለፎን ይዓጽዉ፡ እዚ ድማ ብዝለዓለ ተረባሕነት ኣቢሉ ተበጻሕነት ዌብሳይት የረጋግጹ።

ሓደስቲ ተጠቀምቲ ኣብ ዝዕድጉሉ እዋን ንሓቀኛ ስም ንምርግጋጽ መንነት ካርዶም ከቕርቡ ኣለዎም።

## ካብ ምልክት ቃል ነጻ ዝኾነ መእተዊ ምውቃር

ድሕሪ ቁሩብ ደቓይቕ እቶም ኣገልገልቲ ኩሎም ተነቒሎም።

እቲ ቀዳማይ ነገር ናይቲ ሎካል ማሽን `~/.ssh/config` ብምእራም ቅጽል ስም ምቕማጥ IP ፣ ድሕሪኡ `ssh-copy-id root@c2` ተጠቒምካ ካብ ፓስዎርድ ነጻ ዝኾነ መእተዊ ምውቃር እዩ።

![](https://i-01.eu.org/1718287198.avif)

ነዚ [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) እዚ ነቲ ናይ ምጅማር ውቅር ብቕልጡፍ ንምዝዛም ክትቅይሮ ትኽእል ኢኻ።

እቲ ካብ ፓስዎርድ ነጻ ዝኾነ ውቅር ምስተዛዘመ ክትጥቀመሉ ትኽእል [pdsh](https://github.com/chaos/pdsh) ብጉጅለ ክሰርሕ ይኽእል እዩ፣ እዚ ድማ ምቹእ እዩ።

እቲ ቀዳማይ ብኢድካ ipv6 ምኽፋትን ምፍታንን እዩ።

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

ድሕሪኡ ነቲ ስርዓት ብሓደ ጠውቂ ናብ ubuntu 24 ኣዕብዮ እሞ ልሙድ ዝኾነ ሶፍትዌር ንጽዓኖ።

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 ማለት ቋንቋ ናብ ቻይና፡ ዞባ ሰዓት ድማ ናብ ቤጂንግ ምቕያር ማለት እዩ።

እቲ ብነባሪ ዝተተኽለ ሶፍትዌር ብመሰረት ውልቃዊ ልምዲ ኣጠቓቕማይ ዝተዋቕረ እዩ፣ ከም [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , ወዘተ ኣድላዪ እንተኾይኑ ነቲ [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) መኽዘን ቀዲሕካ ከም ኣድላይነቱ ክትቅይሮ ትኽእል ኢኻ።

እዚ ስጉምቲ ነዊሕ ግዜ ዝወስድ ንፍርቂ ሰዓት ድሕሪ ምጽባይ፡ ምዕባይን ምትካልን ልሙድ ዝኾነ ሶፍትዌር ዕዉት ክኸውን እዩ። ነዚ በዚ ዝስዕብ ትእዛዝ ከተረጋግጾ ትኽእል ኢኻ፤

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh ንssh የቀላጥፎ

ካብ ኤውሮጳ ክሳብ ቻይና ዘሎ መርበብ ርጉእ ኣይኮነን ንምቅልጣፍ [mosh](//mosh.org) ይምከር `ssh` .

ኣብቲ ሎካል ማህደር `~/.bin` (ብቐንዱ ኣብ ተለዋዋጢ ከባቢ `PATH` ዝተወሰኸ) `c0` ስክሪፕት ከምዚ ዝስዕብ ንፍጠር፤

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

ድሕሪ ምፍጣር፡ ተግባራዊ ፍቓድን ሶፍት-ሊንክ `c1` ን `c2` ን ምሃብ።

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

ኣብ መጻኢ ብቐጥታ `c0` ን `c1` ን ብምእታው `mosh` ፍጥነት ዘለዎ ቀጥታዊ ምትእስሳር ክትጥቀምን [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## ቅርጺ ምክፍፋል ካብ ext4 ናብ btrfs ምቕያር

[btrfs](https://wikipedia.org/wiki/Btrfs) ንቐሊል ምትሕብባር ዲስክ ቅጽበታዊ ስእሊ ክወስድ ይኽእል።

መጀመርታ ናብቲ ናይ ምድሓን ስርዓት ኣቲኻ

![](https://i-01.eu.org/1718300448.avif)

ደብያን ምድሓን ምረጽ

![](https://i-01.eu.org/1718300753.avif)

እቲ ሰርቨር ዳግማይ ክሳብ ዝጅምር ተጸበ

ssh `ssh-keygen -R ip`

ድሕሪኡ ነቲ ክፍሊ ንምቕያር ነዚ ዝስዕብ ስክሪፕት ኣካይድ

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

እቲ ስክሪፕት ድሕሪ እቲ ምቕያር ዕዉት ምዃኑ ነቲ ስርዓት ብኣውቶማቲክ ዳግማይ ክጅምሮ እዩ።

### btrfs ምጽቃጥ ሬሽዮ ርአ

ብኣውቶማቲክ ብነባሪ ክጽቕጥ እዩ እቲ ናይ ምጽቃጥ ሬሽዮ ንምፍታሽ ዝሕግዝ ትእዛዝ ከምዚ ዝስዕብ እዩ።

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### ብኢድ ምጽቃጥ

ፍጹምነት ዝደሊ እንተኾንካ ምሉእ ዲስክ ምጽቃጥ ብኢድካ እውን ክትፍጽም ትኽእል ኢኻ እቲ ትእዛዝ ከምዚ ዝስዕብ እዩ።

```bash
btrfs filesystem defragment -r -czstd /
```

ከምቲ ኣብ ታሕቲ ዘሎ ስእሊ ንርእዮ ዘለና ኣብቲ ሓድሽ ስርዓት ብኢድ ምጽቃጥ ድሕሪ ምጽቃጥ ዳርጋ 100MB ዝያዳ ከም ዝተጸቕጠ ክትዕዘቡ ትኽእሉ ኢኹም።

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### ብስናፐር ናይ Btrfs ቅጽበታዊ ስእሊ መጠባበቒ ምፍጣር

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) Btrfs

እቲ ናይ ምጅማር ስክሪፕት `~/ubuntu` ማህደር ክፈጥር እዩ፣ ነዚ ዝስዕብ ትእዛዝ ጥራይ ኣካይድ፤

```
~/ubuntu/snapper/init.sh
```

ኣብ ትሕዝቶ ስክሪፕት የራኽበና [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

ቅጽበታዊ ስእልታት ዝተቐመጡሎም ንኡሳን ጥራዛት ንምርኣይ `snapper list-configs` ተጠቐም።

![](https://i-01.eu.org/1718302689.avif)

ቅጽበታዊ ስእሊ ናይ ሓደ ንኡስ ድምጺ ንምርኣይ `snapper -c mnt list` ተጠቐም

`/etc/snapper/configs/mnt` ፍሉይ ናይ መጠባበቒ ቅጥዕታት ናይዚ ንኡስ ጥራዝ ክርኢ ይኽእል።

ተወሳኺ መወከሲታት፤

[ብቐሊሉ ብናይ Btrfs ቅጽበታዊ ስእሊ ፋንክሽን ተጻወቱ snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo server ቅጽበታዊ ስእሊ

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

![](https://i-01.eu.org/1718304206.avif)

ንሓደ ናይ ሰርቨር ቅጽበታዊ ስእሊ ንምምላስ፡ መጀመርታ ኣብቲ ናይ ምሕደራ ዝርዝር ክሮንቶል ጠውቕ

![](https://i-01.eu.org/1718304275.avif)

ድሕሪኡ፡ ስናፕሾትስ ጠውቕ እሞ ናብ ንቡር ምምላስ።

![](https://i-01.eu.org/1718304063.avif)

ይኹን እምበር፡ ንእሽቶ ስእሊ ናይዚ ቅጽበታዊ ስእሊ ኣዝዩ ዓቢ እዩ፡ ሓንሳብ ምስ ተመልሰ፡ እቲ ሓድሽ ዝተወሰኸ ዳታ ምሉእ ብምሉእ ክጠፍእ እዩ፡ ስለዚ በጃኹም ብጥንቃቐ ተጠቐሙሉ።

መብዛሕትኡ ግዜ btrfs ቅጽበታዊ ስእልታት ምጥቃም ዝያዳ ምቹእ እዩ።

## ዝርዝር ስርዓት ምድሓን ህይወት

ናብቲ ናይ ምድሓን ስርዓት ኣቲኻ እቲ 22 [tcping](https://github.com/paradiseduo/tcping) ተበጻሒ ምስ ኮነ፡ በቲ ዝተቐመጠ ፓስዎርድ ን 2-3 ደቓይቕ ክትረኽቦ ኣይትኽእልን ኢኻ።

```
tcping ip 22 -c 9999
```

ተበፃሕነት ወደብ ክከታተል ይኽእል እዩ።

### ከመይ ጌርና ናብ ሃርድ ድራይቭ ድሕሪ ምእታው rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

ንኣብነት ነቲ ቅጽበታዊ ስእሊ ክትሪኦ ትኽእል ኢኻ።

```
snapper -c etc list
```

ናይ ቅጽበታዊ ስእሊ ፋይል ለውጢ ርአ

```
snapper -c etc status 5..6
```

ፍሉይ diff ጽሑፍ ርአ

```
snapper -c etc diff 3..5
```

ቅጽበታዊ ስእሊ ምምላስ፦ ንኣብነት ድሕሪ ቅጽበታዊ ስእሊ 5 ዝመጽእ ኩሉ ለውጢ ምምላስ

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### ሎግ ጽንዓት ኣኽእሎ

ኣብ ትሕቲ ስርዓተ ምድሓን ሎግ ጽንዓት ምኽፋት ብኢድካ ነቲ ተዛማዲ ማህደር ክትፈጥርን ገለ ተወሳኺ ስጉምትታት ክትፍጽምን የድሊ፣ ምኽንያቱ ዝሰርሕ ናይ systemd ኣገልግሎት ዘይክህልወካ ይኽእል እዩ። ክትፍትኖም እትኽእል ስጉምትታት እዞም ዝስዕቡ እዮም፤

መጀመርታ chroot ድሕሪኡ

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

ናብ ስርዓት ኡቡንቱ ዳግማይ ምጅማር፦ እዚ ኣብ ላዕሊ ዝተጠቕሰ ለውጢ ድሕሪ ምግባርና፡ ኣብ ክንዲ ስርዓተ ምድሓን ማሽንና ብንቡርን ናብ ስርዓት ኡቡንቱ ዳግማይ ምጅማርን የድልየና።

በዚ መንገዲ እዚ systemd-journald በቲ ሓድሽ ውቅር ክጅምርን ምዝገባታት ብቐጻልነት ኣብ ሃርድ ዲስክ ክዕቅብ ክጅምርን እዩ።

እዞም ኣብ ላዕሊ ዝተጠቕሱ ስርሒታት ኣብ ስርዓተ ምድሓን ህይወት ከም ዝፍጸሙ ኣብ ግምት ኣእትዉ፣ ስለዚ እቶም ለውጥታት ክሳብ እቲ ስርዓት ዳግማይ ዝጅምርን ኣብ ሞድ ምድሓን ህይወት ክሳብ ዘይህሉን ተግባራዊ ኣይኮኑን።

እዚ ማለት ኣብ ዝጸንሑ ምዝገባታት ዝኾነ ለውጢ ብኡንብኡ ቀጻሊ ዝኸውን ኣይትርእዮን ኢኻ፡ ግን ኩሎም ድሕሪኡ ዝፍጠሩ ምዝገባታት ክጸንሑ እዮም።

በዚ መንገዲ እዚ ናይ ssh ኣገልግሎት ምዝገባታት ክትዕዘብ ትኽእል

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## መተሓሳሰቢ ብዛዕባ ከበድትን ዝተሓላለኹን ሕማማት

### ነቲ ዝገርም ጸገም ፍታሕ: እቲ ሰርቨር ssh ክገብር ኣይክእልን እዩ።

ቅድሚ ሕጂ ኣውቶማቲክ ናይ ምጥርናፍን ምዝርጋሕን ስክሪፕት ንምስራሕ github action ተጠቂመ ነይረ፡ ግን እቲ ናይ ምዝርጋሕ ኣገልግሎት ssh ክኸውን ከምዘይክእል ረኺበዮ።

ናብቲ ናይ ምድሓን ስርዓት ምእታውን ምዝገባታት ምርኣይን ናይ ፍቓድ ጉዳይ እዩ፤

`Missing privilege separation directory: /run/sshd`

ነዚ ማህደር በዚ ዝስዕብ ትእዛዝ ክትፈጥሮ ትኽእል ኢኻ።

```
chown root:root /
systemd-tmpfiles --create
```

ድሕሪ ተደጋጋሚ መርመራታት፡ ተጠቃሚ `uid` ናይ tar `1001` ስለ ዝኾነ እዩ github action

tar `--no-same-owner` `uid` `1001`

ከም ውጽኢቱ ድማ rsync ነቲ ናይ ተጠቃሚ ጉጅለ ናይቲ ሱር ማህደር ክቕይሮ እዩ፣ ድሕሪኡ ዳግማይ ምጅማርካ ናብ ssh ክትኣቱ ኣይትኽእልን ኢኻ።

ነቲ ናይ ምውጋድ ምጽቃጥ ስክሪፕት ከምዚ ዝስዕብ ኣዐርዮ፤

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```