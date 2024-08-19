# Sarvarii Jalqabsiisi (Kutaa BTRFS Fayyadami, Suuraa Sagantaa Snapper) .

## Sarvarii Bittaa contabo

contabo dhaabbata VPS gatii salphaa Jarman keessatti seenaa dheeraa (waggaa 20 ol) fi fayyadamtoota hedduu (200,000 ol) qabuudha, kanaaf baqachuuf yaadda'uun hin barbaachisu.

VPS [contabo.com](//contabo.com) bitattan gatii Yuuroo filachuu hin dagatinaa, kunis gatii salphaadha.

![](https://i-01.eu.org/1718285782.avif)

Contabo'f kaffaltiin yeroo tokkoo dhaabuu ni jira.
Haa ta'u malee ji'a ji'aan guyyoonni muraasni kaffaltiin fe'iinsaa bilisa ta'e jiru Galmaa'aatii iimeelii beeksisaaf xiyyeeffannoo kennuu qofa.

Awurooppaatti kaffaltii naannoo bilisaatiin alatti naannoleen biroo daballii gatii sadarkaa adda addaa qabu.

Ani sarvarii Awurooppaa filadhe.

Qindaa'inni dhumaa akka armaan gadiitti, 16GB memory, 6CPU, 200 GB NVMe, ji'atti 9.50 euros, 74.43 RMB waliin wal gitu.

![](https://i-01.eu.org/1718286008.avif)

**Gatiin kun gatii Alibaba Cloud fi Amazon irraa harka kudhan keessaa tokko jechuun ni danda'ama** .

![](https://i-01.eu.org/1718356956.avif)

Raawwii fi parameetaroota hojjechuuf [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Moodeela `AMD EPYC 9224 24-Core Processor` , qabxii raawwii hojii wiirtuu tokkoo 1285 agarsiisaa jira CPU
, qabxii ijoo hedduu 4277 Bu'aa dabalataa ilaalaa [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Yeroo tokkotti server sadii bitadhee yeroo tokkotti activate godheera Kunis servers kutaa kompiitaraa tokko keessa akka jiran mirkaneessa, gara fuulduraatti availability olaanaa ijaaruun salphaadha.

Sarvaronni isaa darbee darbee bilbila cufa, kunis karaa argama olaanaatiin dhaqqabummaa weebsaayitii mirkaneessa.

Fayyadamtoonni haaraan yeroo bitatan maqaa dhugaa mirkaneessuuf waraqaa eenyummaa isaanii galchuu qabu.

## Galmee Jecha Icciitii Irraa Bilisa Ta'e Qindeessuu

Daqiiqaa muraasa booda sarvaroonni hundi hojiirra oolan.

Wanti jalqabaa `~/.ssh/config` maashinii naannoo IP maqaa biraa saaguudha, sana booda `ssh-copy-id root@c2` fayyadamuun seensaa jecha icciitii irraa bilisa ta'e qindeessuudha.

![](https://i-01.eu.org/1718287198.avif)

Qindaa'ina jalqabbii saffisaan xumuruuf [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) kana fooyyessuu dandeessa.

Erga qindeessaan jecha icciitii irraa bilisa ta'e xumuramee booda itti fayyadamuu [pdsh](https://github.com/chaos/pdsh) It can be operated in batch, which is convenient.

Inni jalqabaa ipv6 harkaan dandeessisuun fi test gochuudha

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Sana booda cuqaasuu tokkoon sirnicha gara ubuntu 24 tti ol guddisuun software yeroo baay'ee itti fayyadamnu install gochuu.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 jechuun afaan gara Chaayinaa, naannoo sa’aatii gara Beejiingitti jijjiiruu jechuudha.

Softwaren akka durtiitti fe'ame akkaataa amala itti fayyadama dhuunfaa kootti kan qindaa'e yoo ta'u, kan akka [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , fi kkf Yoo barbaachisaa ta'e, [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse copy gochuun akka barbaachisummaa isaatti fooyyessuu dandeessu.

Tarkaanfiin kun yeroo dheeraa kan fudhatu Walakkaa sa’aatii erga eegnee booda, fooyya’iinsi fi fe’iinsi sooftiweerii yeroo baay’ee itti fayyadamnu ni milkaa’a. Kana ajaja armaan gadiitiin mirkaneessuu dandeessa:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Saffisa ssh

Neetworkiin Awurooppaa irraa gara Chaayinaa jiru tasgabbaa'aa `ssh` Saffisiisuuf fayyadamuun ni gorfama [mosh](//mosh.org)

Galmee naannoo `~/.bin` (baay'inaan jijjiiramaa naannoo `PATH` irratti dabalame) keessatti iskiriiptii `c0` akka armaan gadiitti uumi:

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

Erga uumamee booda, hayyama raawwatamuu danda'uu fi soft-link `c1` fi `c2` kenni.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Gara fuulduraatti kallattiin `c0` fi `c1` galchuun kallattiin walqunnamtii saffisa guddaa qabu `mosh` fayyadamuudhaan [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Akkaataa Qoqqoodinsa ext4 Irraa Gara btrfs Jijjiiri

[btrfs](https://wikipedia.org/wiki/Btrfs) Salphaatti duubdeebii gochuuf suuraa diskii fudhachuu danda'a.

Jalqaba sirna baraarsaa seena

![](https://i-01.eu.org/1718300448.avif)

Debian Rescue filadhu

![](https://i-01.eu.org/1718300753.avif)

Hanga sarvariin deebi'ee jalqabu eegaa

ssh ashaaraa qubaa ni jiraata, qulqulleessuuf `ssh-keygen -R ip` fayyadami

Sana booda qoqqoodinsa jijjiiruuf iskiriiptii armaan gadii hojjedhu

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Iskiriiptiin erga jijjiirraan milkaa'ee booda ofumaan sirnicha deebisee jalqaba.

### Reeshiyoo Dhiibbaa btrfs Ilaali

Ofumaan durtiidhaan ni dhiiba.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Dhiibbaa Harkaan

Yoo nama mudaa hin qabne taate, dhiibbaa diskiin guutuu harkaan raawwachuu dandeessa Ajajni akka armaan gadiitti:

```bash
btrfs filesystem defragment -r -czstd /
```

Akkuma fakkii armaan gadii irratti mul'atutti sirna haaraa keessatti erga harkaan dhiibamee booda gara 100MB caalaa akka dhiibame arguu dandeessu.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Duwwaa Suuraa Btrfs snapper Waliin Uumi

Btrfs backup gochuuf [snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) hunda caaludha.

Iskiriiptiin jalqabbii galmee `~/ubuntu` ni uuma, ajaja armaan gadii qofa hojjedhu:

```
~/ubuntu/snapper/init.sh
```

Qabiyyee iskiriiptii keessatti wal argina [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Jildii xiqqaa suuraawwan yeroo saagaman ilaaluuf `snapper list-configs` fayyadami.

![](https://i-01.eu.org/1718302689.avif)

Fakkii jildii xiqqaa ilaaluuf `snapper -c mnt list` fayyadami

`/etc/snapper/configs/mnt` qindaa'inoota duwwaa addaa jildii xiqqaa kanaa ilaaluu danda'a

Wabiiwwan dabalataa:

[Salphaatti faankishinii suuraa Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Suuraa Sarvarii contabo

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

![](https://i-01.eu.org/1718304206.avif)

Fakkii sarvarii deebisuuf, jalqaba sajoo bulchiinsa keessatti Crontol cuqaasi

![](https://i-01.eu.org/1718304275.avif)

Sana booda, deebisuuf Snapshots cuqaasi.

![](https://i-01.eu.org/1718304063.avif)

Haa ta'u malee, granularity suuraa kanaa baay'ee guddaadha Erga deebi'ee booda, deetaan haaraan dabalame guutummaatti ni bada, kanaaf maaloo of eeggannoodhaan fayyadami.

Yeroo baayyee suuraawwan btrfs fayyadamuun caalaatti mijataadha.

## Bal'ina Sirna Baraarsaa

Sirna baraarsaa 22 Erga buufanni [tcping](https://github.com/paradiseduo/tcping) dhaqqabamaa ta'ee booda jecha icciitii saagameen 2-3 daqiiqaaf argachuu hin dandeessan Yeroo muraasa qofa eegaa gaarii ta'a.

```
tcping ip 22 -c 9999
```

Dhaqqabummaan buufata doonii hordofamuu danda’a.

### Akkaataa Hard Drive Erga Seennee Booda Restore Snapshot &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Fakkeenyaaf, suuraa ilaaluu dandeessa

```
snapper -c etc list
```

Jijjiiramoota faayilii suuraa ilaali

```
snapper -c etc status 5..6
```

Barruu garaagarummaa murtaa'e ilaali

```
snapper -c etc diff 3..5
```

Fakkii deebisi: Fakkeenyaaf, jijjiirama hunda suuraa 5 booda deebisi

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Itti Fufiinsa Galmee Dandeessisi

Sirna baraarsaa jalatti itti fufiinsa galmee dandeessisuun galmee walgitu harkaan uumuu fi tarkaanfiiwwan dabalataa tokko tokko raawwachuu si barbaachisa, sababni isaas tajaajila systemd hojjechaa jiru qabaachuu dhiisuu dandeessa. Tarkaanfiiwwan yaaluun dandeessan kunooti:

Jalqaba chroot, sana booda

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Gara sirna Ubuntu keessanitti deebi'aa jalqabuu: Jijjiirama armaan olii erga gootanii booda, sirna baraarsaa osoo hin taane maashinii keessan akka idileetti fi gara sirna Ubuntu keessanitti deebi'anii jalqabuu qabdu.

Haala kanaan, systemd-journald qindeessaa haaraa irraa eegalee galmeewwan itti fufiinsaan hard disk irratti kuusuu jalqaba.

Hojiiwwan armaan olii sirna baraarsaa irratti kan raawwataman ta’uu isaanii yaada keessa galchaa, kanaaf jijjiiramni sun hanga sirnichi deebi’ee jalqabuu fi kana booda haala baraarsaa keessa hin jirretti hojiirra hin oolu.

Kana jechuun battalumatti jijjiirama galmeewwan jiran irratti kan itti fufiinsa ta'an hin argitu, garuu galmeewwan sana booda uumaman hundi ni itti fufu.

Haala kanaan galmeewwan tajaajila ssh ilaaluu dandeessa

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Yaadannoowwan Dhukkuboota Rakkisoo Fi Walxaxaa Ta’an Irratti

### Rakkoo Ajaa'ibaa Furu: Sarvariin ssh Hin Danda'u

Ani kanaan dura iskiriiptii qindeessaa fi bobbaa ofumaan hojjechuuf tarkaanfii github fayyadameen ture, garuu tajaajilli bobbaa ssh ta'uu akka hin dandeenye argadhe.

Sirna baraarsaa seenuun galmeewwan ilaaluun dhimma hayyamaadha:

`Missing privilege separation directory: /run/sshd`

Galmee kana ajaja armaan gadiitiin uumuu dandeessa

```
chown root:root /
systemd-tmpfiles --create
```

Irra deddeebiin erga qoratamee booda, User `uid` of tar `1001` waan github action

tar `--no-same-owner` `uid` `1001`

Kanarraa kan ka'e, rsync garee fayyadamaa galmee hundee ni jijjiira, kana booda erga deebitee jalqabdee booda gara ssh seenuu hin dandeessu.

Iskiriiptii dhiibbaa hir'isuu akka armaan gadiitti fooyyessi:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```