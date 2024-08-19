# Inisjalisearje De Tsjinner (Brûk BTRFS-Partysje, Snapper Plande Snapshot)

## contabo Oankeap Tsjinner

contabo is in goedkeape VPS-oanbieder yn Dútslân mei in lange skiednis (mear dan 20 jier) en in protte brûkers (mear dan 200.000), dus d'r is gjin need om soargen te meitsjen oer fuort te rinnen.

VPS jo keapje [contabo.com](//contabo.com) tink om Euro-prizen te kiezen, dy't goedkeaper is.

![](https://i-01.eu.org/1718285782.avif)

Der is in ienmalige ynstallaasje fergoeding foar contabo.
D'r binne lykwols elke moanne in pear dagen wêr't de ynstallaasjefergoeding fergees is.

Neist de frije gebietsfergoeding yn Europa hawwe oare regio's ferskillende nivo's fan priisferhegingen.

Ik keas in Europeeske tsjinner Anyway, nei it brûken fan cloudflare, der is net folle ferskil tusken de tsjinners.

De definitive konfiguraasje is as folget, 16GB ûnthâld, 6CPU, 200 GB NVMe, 9,50 euro per moanne, lykweardich oan 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Dizze priis is hast in tsiende fan 'e priis fan Alibaba Cloud en Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Ik [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) om de prestaasjes en parameters út te fieren:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Toane Model `AMD EPYC 9224 24-Core Processor` , single-core prestaasjes score 1285 CPU
, multi-core skoare 4277 Sjoch mear resultaten [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ik kocht trije tsjinners op ien kear en aktivearre se tagelyk Dit soarget derfoar dat de tsjinners binne yn deselde kompjûter keamer, wêrtroch't it makliker te bouwen hege beskikberens yn 'e takomst.

Syn servers hingje sa no en dan op, en soarget foar tagonklikens fan webside troch hege beskikberens.

Nije brûkers moatte har ID-kaarten yntsjinje foar autentikaasje mei echte namme by it keapjen.

## Konfigurearje Wachtwurdfrije Oanmelding

Nei in pear minuten waarden de servers allegear aktivearre.

It earste ding IP om de `~/.ssh/config` fan 'e lokale masine te bewurkjen om in alias yn te stellen, en brûk dan `ssh-copy-id root@c2` om wachtwurdfrije oanmelding te konfigurearjen.

![](https://i-01.eu.org/1718287198.avif)

Jo kinne dit [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) oanpasse om de inisjalisaasjekonfiguraasje rapper te foltôgjen.

Nei't de wachtwurdfrije konfiguraasje is foltôge, kinne jo it brûke [pdsh](https://github.com/chaos/pdsh)

De earste is om ipv6 manuell yn te skeakeljen en te testen

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Upgrade dan it systeem nei ubuntu 24 mei ien klik en ynstallearje gewoan brûkte software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 betsjut oerskeakelje fan taal nei Sineesk en tiidsône nei Peking.

De standert ynstalleare software is konfigurearre neffens myn persoanlike gebrûksgewoanten, lykas [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , ensfh. As it nedich is, kinne jo it [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) -pakhús kopiearje en sa nedich oanpasse.

Dizze stap duorret lang. Jo kinne dit befestigje mei it folgjende kommando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Fersnelt ssh

It netwurk fan Europa nei Sina is `ssh` [mosh](//mosh.org) .

Meitsje `c0` skripts yn 'e lokale map `~/.bin` (benammen tafoege oan omjouwingsfariabele `PATH` ) as folget:

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

Jou nei oanmeitsjen útfierbere tagongsrjochten en soft-link `c1` en `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Yn 'e takomst kinne jo direkt `c0` en `c1` ynfiere om `mosh` direkte ferbining mei hege snelheid te brûken en ynfiere [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvertearje Partysjeformaat Fan ext4 Nei btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Kin skiif snapshots nimme foar maklike reservekopy.

Fier earst it rêdingssysteem yn

![](https://i-01.eu.org/1718300448.avif)

Kies Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Wachtsje oant de tsjinner opnij starte

ssh `ssh-keygen -R ip`

Fier dan it folgjende skript út om de partysje te konvertearjen

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

It skript sil it systeem automatysk opnij starte nei't de konverzje suksesfol is.

### Besjoch Btrfs-Kompresjeferhâlding

It sil standert automatysk komprimearje It kommando om de kompresjeferhâlding te kontrolearjen is as folget:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Hânlieding Kompresje

As jo in perfeksjonist binne, kinne jo ek in folsleine skiifkompresje manuell útfiere It kommando is as folget:

```bash
btrfs filesystem defragment -r -czstd /
```

Lykas werjûn yn 'e ôfbylding hjirûnder, kinne jo sjen dat nei hânmjittich kompresje yn it nije systeem, hast 100MB mear waard komprimearre.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Meitsje in Btrfs-Snapshot-Backup Mei snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) is de bêste partner foar Btrfs backup.

It inisjalisaasjeskript sil de map `~/ubuntu` oanmeitsje, gewoan it folgjende kommando útfiere:

```
~/ubuntu/snapper/init.sh
```

Sjoch dy yn it skript ynhâld [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Brûk `snapper list-configs` om de subvoluminten te besjen wêrfoar snapshots ynsteld binne.

![](https://i-01.eu.org/1718302689.avif)

Brûk `snapper -c mnt list` om in momintopname fan in subvolume te besjen

`/etc/snapper/configs/mnt` kin de spesifike reservekopyynstellingen fan dit subvolume besjen

Mear referinsjes:

[Spielje maklik mei de snapshotfunksje fan Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Tsjinner Momintopname

contabo serversnapshotfunksje, mar stipet gjin plande snapshots Ik skreau in [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) om deistige snapshots te nimmen.

![](https://i-01.eu.org/1718304206.avif)

Om in tsjinner momintopname te herstellen, klik earst op Crontol yn it behearmenu

![](https://i-01.eu.org/1718304275.avif)

Klikje dan op Snapshots om te herstellen.

![](https://i-01.eu.org/1718304063.avif)

De granulariteit fan dizze momintopname is lykwols te grut.

It is normaal handiger om btrfs-snapshots te brûken.

## Rescue Systeem Details

2-3 [tcping](https://github.com/paradiseduo/tcping) rêdingssysteem yn 22

```
tcping ip 22 -c 9999
```

Havenberikberens kin wurde kontrolearre.

### Hoe Kinne Jo Tagong Krije Ta De Hurde Skiif Nei It Ynfieren Fan 'e & Snapshot Weromsette

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Jo kinne bygelyks de momintopname besjen

```
snapper -c etc list
```

Besjoch momintopnamebestânwizigingen

```
snapper -c etc status 5..6
```

Besjoch spesifike diff-tekst

```
snapper -c etc diff 3..5
```

Snapshot weromsette: bygelyks alle wizigingen nei snapshot 5 ûngedien meitsje

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Ynskeakelje Log Persistinsje

It ynskeakeljen fan log-persistinsje ûnder in rêdingssysteem fereasket dat jo de korrespondearjende map mei de hân oanmeitsje en wat ekstra stappen útfiere, om't jo miskien gjin rinnende systemd tsjinst hawwe. Hjir binne stappen dy't jo kinne besykje:

Earst chroot, dan

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot yn jo Ubuntu-systeem: Nei it meitsjen fan de boppesteande wizigingen, moatte jo jo masine normaal opnij starte en yn jo Ubuntu-systeem ynstee fan it rêdingssysteem.

Op dizze manier sil systemd-journald begjinne mei de nije konfiguraasje en begjinne logs oanhâldend op te slaan op 'e hurde skiif.

Hâld der rekken mei dat de boppesteande operaasjes wurde útfierd op in rêdingssysteem, dus dy wizigingen sille net effekt krije oant it systeem opnij is opstart en net mear yn 'e rêdingsmodus is.

Dit betsjut dat jo net daliks gjin feroarings sille sjen oan besteande logs dy't persistint wurde, mar alle logs dy't dêrnei oanmakke wurde sille bliuwe.

Op dizze manier kinne jo de logs fan 'e ssh-tsjinst besjen

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notysjes Oer Drege en Yngewikkelde Sykten

### Los It Nuvere Probleem Op: De Tsjinner Kin Net ssh

Ik brûkte github-aksje foar it meitsjen fan in automatysk kompilaasje- en ynsetskript foar, mar fûn dat de ynsettsjinst net ssh koe wêze.

It yngean fan it rêdingssysteem en it besjen fan de logs is in tastimmingsprobleem:

`Missing privilege separation directory: /run/sshd`

Jo kinne dizze map oanmeitsje mei it folgjende kommando

```
chown root:root /
systemd-tmpfiles --create
```

Nei werhelle ûndersiken is it github action brûker `uid` fan tar `1001` is

tar útpakke moat wêze as der gjin parameter `--no-same-owner` is, sil it wurde dekomprimearre nei `uid` foar `1001` brûkers

As gefolch sil rsync de brûkersgroep fan 'e root-map feroarje, en dan kinne jo net oanmelde by ssh nei it opnij starte.

Feroarje it dekompresjeskript as folget:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```