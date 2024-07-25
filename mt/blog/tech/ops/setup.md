# Inizjalizza S-Server (Uża Partizzjoni BTRFS, Snapshot Skedat Snapper)

## Server Tax-Xiri contabo

contabo huwa fornitur irħis tal-VPS fil-Ġermanja bi storja twila (aktar minn 20 sena) u ħafna utenti (aktar minn 200,000), għalhekk m'hemmx għalfejn tinkwieta dwar il-ħarba.

VPS tixtri [contabo.com](//contabo.com) ftakar li tagħżel prezzijiet tal-Euro, li huwa orħos.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Hemm ħlas ta' installazzjoni ta' darba għal contabo.
Madankollu, hemm ftit jiem kull xahar fejn il-miżata tal-installazzjoni hija b'xejn Irreġistra u tagħti attenzjoni lill-emails promozzjonali.

Minbarra l-miżata taż-żona bla ħlas fl-Ewropa, reġjuni oħra għandhom livelli differenti ta 'żidiet fil-prezzijiet.

Għażilt server Ewropew Xorta waħda, wara li użajt cloudflare, m'hemmx ħafna differenza bejn is-servers.

Il-konfigurazzjoni finali hija kif ġej, memorja 16GB, 6CPU, 200 GB NVMe, 9.50 euro fix-xahar, ekwivalenti għal 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Dan il-prezz huwa kważi wieħed minn għaxra tal-prezz ta 'Alibaba Cloud u Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Jien [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) biex inħaddem il-prestazzjoni u l-parametri:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Mudell tal-wiri CPU `AMD EPYC 9224 24-Core Processor` punteġġ tal-prestazzjoni b'qalba waħda 1285
, punteġġ multi-core 4277 Ara aktar riżultati [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Xtrajt tliet servers f'ħin wieħed u attivajthom fl-istess ħin Dan jiżgura li s-servers ikunu fl-istess kamra tal-kompjuters, li jagħmilha aktar faċli biex tinbena disponibbiltà għolja fil-futur.

Is-servers tagħha kultant hang up, u jiżguraw aċċessibbiltà tal-websajt permezz ta 'disponibbiltà għolja.

Utenti ġodda jridu jissottomettu l-karti tal-identità tagħhom għall-awtentikazzjoni tal-isem reali meta jixtru.

## Ikkonfigura Login Mingħajr Password

Wara ftit minuti, is-servers ġew kollha attivati.

L-ewwel ħaġa hi li teditja l- `~/.ssh/config` lokali Issettja alias għal IP u mbagħad uża `ssh-copy-id root@c2` biex tikkonfigura login mingħajr password.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Tista 'timmodifika dan [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) biex tlesti l-konfigurazzjoni tal-inizjalizzazzjoni aktar malajr.

Wara li titlesta l-konfigurazzjoni mingħajr password, tista 'tużaha Tista [pdsh](https://github.com/chaos/pdsh) titħaddem f'lottijiet, li huwa konvenjenti.

L-ewwel huwa li tippermetti manwalment ipv6 u test

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Imbagħad aġġorna s-sistema għal ubuntu 24 bi klikk waħda u installa softwer użat b'mod komuni.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 tfisser li taqleb il-lingwa għaċ-Ċiniż u ż-żona tal-ħin għal Beijing.

Is [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) softwer installat b'mod awtomatiku huwa kkonfigurat skont id-drawwiet personali tal-użu tiegħi, bħal [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , eċċ.

Dan il-pass jieħu żmien twil Wara li tistenna għal nofs siegħa, l-aġġornament u l-installazzjoni ta 'softwer użat b'mod komuni se jkunu ta' suċċess. Tista' tikkonfermah bil-kmand li ġej:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Tħaffef ssh

In-netwerk mill-Ewropa lejn iċ-Ċina mhux stabbli Huwa rakkomandat li `ssh` [mosh](//mosh.org)

Oħloq `c0` script fid- `~/.bin` tal-magna lokali (prinċipalment miżjuda mal-varjabbli ambjentali `PATH` ) kif ġej:

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

Wara l-ħolqien, agħti permessi eżekutibbli u soft-link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Fil-futur, tista 'tidħol direttament `c0` `c1` u tista' tuża `mosh` konnessjoni diretta b'veloċità għolja u tidħol [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Ikkonverti L-Format Tal-Partizzjoni Minn ext4 Għal btrfs

Jista [btrfs](https://wikipedia.org/wiki/Btrfs) jieħu snapshots tad-disk għal backup faċli.

L-ewwel jidħol fis-sistema ta 'salvataġġ

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Agħżel Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Stenna li s-server jerġa' jibda

Tibdil fil-marki tas-swaba `ssh-keygen -R ip` se jseħħu meta ssh

Imbagħad mexxi l-iskrittura li ġejja biex tikkonverti l-partizzjoni

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

L-iskrittura terġa 'tibda awtomatikament is-sistema wara li l-konverżjoni tkun ta' suċċess.

### Ara L-Proporzjon Tal-Kompressjoni btrfs

Jikkompressa awtomatikament b'mod awtomatiku Il-kmand biex jiċċekkja l-proporzjon tal-kompressjoni huwa kif ġej:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kompressjoni Manwali

Jekk inti perfezzjonista, tista 'wkoll twettaq kompressjoni tad-diska sħiħa manwalment Il-kmand huwa kif ġej

```bash
btrfs filesystem defragment -r -czstd /
```

Kif muri fil-figura hawn taħt, tista 'tara li wara kompressjoni manwali fis-sistema l-ġdida, kważi 100MB aktar ġew ikkompressati.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Oħloq Backup Ta 'snapshot Btrfs B'snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) l-aħjar sieħeb għal Btrfs backup.

L-iskript tal-inizjalizzazzjoni se joħloq id `~/ubuntu` direttorju, ħaddem il-kmand li ġej:

```
~/ubuntu/snapper/init.sh
```

Narawkom fil-kontenut tal-iskript [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Uża `snapper list-configs` biex tara s-subvolumi li għalihom huma stabbiliti snapshots.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Uża `snapper -c mnt list` biex tara stampa ta' subvolum

`/etc/snapper/configs/mnt` Tista' tara s-settings speċifiċi tal-backup ta' dan is-subvolum

Aktar referenzi:

[Ilgħab faċilment bil-funzjoni ta 'snapshot ta' Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Snapshot Tas-Server contabo

Jipprovdi funzjoni ta' snapshots tas contabo server, iżda ma [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) snapshots skedati.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Biex tirrestawra snapshot tas-server, l-ewwel ikklikkja Crontol fil-menu tal-ġestjoni

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Imbagħad, ikklikkja Snapshots biex tirrestawra.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Madankollu, il-granularità ta 'din l-istampa hija kbira wisq Ladarba tiġi restawrata, id-dejta miżjuda ġdida tintilef kompletament, għalhekk jekk jogħġbok użaha b'kawtela.

Normalment ikun aktar konvenjenti li tuża snapshots btrfs.

## Dettalji Tas-Sistema Ta' Salvataġġ

Daħħal is-sistema ta' salvataġġ Wara 22 l-port ikun [tcping](https://github.com/paradiseduo/tcping) aċċessibbli, ma tkunx tista' taċċessaha bil-password stabbilita għal 2-3 minuti.

```
tcping ip 22 -c 9999
```

L-aċċessibbiltà tal-port tista' tiġi mmonitorjata.

### Kif Taċċessa L-Hard Drive Wara Li Tidħol Fis-Salvataġġ &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Tista' tara l-istampa, pereżempju

```
snapper -c etc list
```

Ara l-bidliet fil-fajl tal-istampa

```
snapper -c etc status 5..6
```

Ara test diff speċifiku

```
snapper -c etc diff 3..5
```

Irrestawra snapshot: Per eżempju, ħassar il-bidliet kollha wara snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Attiva L-Persistenza Tal-Log

L-abilitazzjoni tal-persistenza tal-log taħt sistema ta' salvataġġ teħtieġ li toħloq manwalment id-direttorju korrispondenti u twettaq xi passi addizzjonali, għax jista' ma jkollokx servizz systemd li jaħdem. Hawn huma passi li tista' tipprova:

L-ewwel chroot, imbagħad

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot fis-sistema Ubuntu tiegħek: Wara li tagħmel il-bidliet t'hawn fuq, għandek bżonn terġa 'tibda l-magna tiegħek normalment u fis-sistema Ubuntu tiegħek minflok is-sistema ta' salvataġġ.

B'dan il-mod, systemd-journald se jibda bil-konfigurazzjoni l-ġdida u jibda jaħżen zkuk b'mod persistenti fuq il-hard disk.

Żomm f'moħħok li l-operazzjonijiet ta 'hawn fuq isiru fuq sistema ta' salvataġġ, għalhekk dawk il-bidliet jidħlu fis-seħħ biss ladarba s-sistema terġa 'tibda u ma tibqax fil-modalità ta' salvataġġ.

Dan ifisser li mhux se tara immedjatament l-ebda tibdil fir-reġistri eżistenti jsiru persistenti, iżda r-zkuk kollha ġġenerati wara dan se jibqgħu jippersistu.

Dan il-mod tista' tara r-reġistri tas-servizz ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Noti Dwar Mard Diffiċli U Kkumplikat

### Issolvi L-Problema Stramba: Is-Server Ma Jistax ssh

Jien użajt azzjoni github biex nagħmel script ta 'kumpilazzjoni u skjerament awtomatiku qabel, iżda sibt li s-servizz ta' skjerament ma setax ssh.

Id-dħul fis-sistema ta 'salvataġġ u l-ħarsa lejn ir-zkuk hija kwistjoni ta' permess:

`Missing privilege separation directory: /run/sshd`

Tista 'toħloq dan id-direttorju bil-kmand li ġej

```
chown root:root /
systemd-tmpfiles --create
```

Wara investigazzjonijiet ripetuti, huwa github action l-utent li `1001` tar `uid`

tar L-ispakkjar irid isir mingħajr parametri `--no-same-owner` se jiġi dekompressat f' `uid` għal `1001` utent

Bħala riżultat, rsync se jibdel il-grupp tal-utenti tad-direttorju tal-għeruq, u mbagħad ma tkunx tista 'tidħol f'ssh wara li terġa' tibda.

Immodifika l-iskript tad-dekompressjoni kif ġej:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

