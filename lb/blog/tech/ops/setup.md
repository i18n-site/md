# Initialiséiere Vum Server (Benotzt BTRFS Partition, Snapper Geplangte Snapshot)

## contabo Kaf Server

contabo ass e bëllege VPS Provider an Däitschland mat enger laanger Geschicht (méi wéi 20 Joer) a vill Benotzer (méi wéi 200.000), also ass et net néideg ze fäerten ze lafen.

VPS Dir kaaft [contabo.com](//contabo.com) erënnert Iech un Euro Präisser ze wielen, wat méi bëlleg ass.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Et gëtt eng eemoleg Installatiounskäschte fir Contabo.
Wéi och ëmmer, et ginn e puer Deeg all Mount wou d'Installatiounsgebühr gratis ass.

Zousätzlech zu der fräier Gebittsgebühr an Europa hunn aner Regiounen verschidden Niveaue vu Präiserhéijungen.

Ech hunn op alle Fall en europäesche Server gewielt, nodeems ech Cloudflare benotzt hunn, ass et net vill Ënnerscheed tëscht de Serveren.

Déi lescht Konfiguratioun ass wéi follegt, 16GB Erënnerung, 6CPU, 200 GB NVMe, 9.50 Euro de Mount, entspriechend 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Dëse Präis ass bal en Zéngtel vum Präis vun Alibaba Cloud an Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ech [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) d'Performance an d'Parameteren benotzt:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Display CPU `AMD EPYC 9224 24-Core Processor` Single-Core Performance Score 1285
, Multi-Kär Score 4277 Kuckt méi Resultater [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ech kaaft dräi Serveren op eng Kéier an aktivéiert hinnen op der selwechter Zäit Dëst garantéiert datt d'Serveren am selwechten Computer Sall sinn, mécht et méi einfach eng héich Disponibilitéit an Zukunft ze bauen.

Seng Serveren hänken heiansdo op, fir Websäit Accessibilitéit duerch héich Disponibilitéit ze garantéieren.

Nei Benotzer mussen hir Identitéitskaarte fir Echt-Numm Authentifikatioun ofginn wann se kafen.

## Passwuertfräi Login Konfiguréieren

No e puer Minutten waren d'Serveren all aktivéiert.

Déi éischt Saach ass d'lokal Maschinn z'änneren `~/.ssh/config` Setzt en Alias ​​fir IP a benotzt dann `ssh-copy-id root@c2` fir Passwuertfräi Login ze konfiguréieren.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Dir kënnt dëse [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) änneren fir d'Initialiséierungskonfiguratioun méi séier ze kompletéieren.

Nodeems d'Passwuertfräi Konfiguratioun fäerdeg ass, kënnt Dir et [pdsh](https://github.com/chaos/pdsh) Et kann a Chargen operéiert ginn, wat bequem ass.

Déi éischt ass fir ipv6 manuell z'aktivéieren an ze testen

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Da upgrade de System op Ubuntu 24 mat engem Klick an installéiert allgemeng benotzt Software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 heescht d'Sprooch op Chinesesch ze wiesselen an d'Zäitzone op Peking.

D'Software, déi als Standard installéiert ass, ass no menge perséinleche Benotzungsgewunnechten konfiguréiert, wéi [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , etc. Wann néideg, kënnt Dir de [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) Lager kopéieren an änneren wéi néideg!

Dëse Schrëtt dauert eng laang Zäit. Dir kënnt et mat dem folgenden Kommando bestätegen:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Beschleunegt ssh

D'Netzwierk vun Europa op China ass `ssh` stabil Et ass recommandéiert ze benotzen [mosh](//mosh.org)

Erstellt e `c0` Skript an der lokaler `~/.bin` (haaptsächlech an d'Ëmweltvariabel `PATH` bäigefüügt) wéi follegt:

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

No der Schafung, gitt ausführbar Permissiounen a Soft-Link `c1` `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

An der Zukunft kënnt Dir direkt aginn `c0` `c1` an Dir kënnt `mosh` High-Speed-Direktverbindung benotzen a gitt [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvertéiert Partitionsformat Vun ext4 Op btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Kann Disk Snapshots fir einfache Backup maachen.

Éischt gitt de Rettungssystem

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Wielt Debian Rescue

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Waart bis de Server nei starten

Fangerofdrock Ännerungen geschéien wann ssh benotzen `ssh-keygen -R ip`

Fuert dann de folgende Skript fir d'Partition ze konvertéieren

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

De Skript wäert de System automatesch nei starten nodeems d'Konversioun erfollegräich ass.

### Kuckt btrfs Kompressiounsverhältnis

Et kompriméiert automatesch als Standard De Kommando fir de Kompressiounsverhältnis ze kontrolléieren ass wéi follegt:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuell Kompressioun

Wann Dir e Perfektionist sidd, kënnt Dir och eng voll Diskkompressioun manuell maachen De Kommando ass wéi follegt

```bash
btrfs filesystem defragment -r -czstd /
```

Wéi an der Figur hei ënnendrënner, kënnt Dir gesinn, datt no manueller Kompressioun am neie System, bal 100MB méi kompriméiert gouf.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Erstellt E Btrfs Snapshot Backup Mat snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ass de beschte Partner fir Btrfs Backup.

D'Initialiséierungsskript erstellt den `~/ubuntu`

```
~/ubuntu/snapper/init.sh
```

Gesinn Iech am Skript Inhalt [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Benotzt `snapper list-configs`

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Benotzt `snapper -c mnt list` fir e Snapshot vun engem Ënnervolumen ze gesinn

`/etc/snapper/configs/mnt` Dir kënnt d'spezifesch Backup-Astellunge vun dësem Ënnervolumen kucken

Méi Referenzen:

[Spillt einfach mat der Snapshot Funktioun vun Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Server Snapshot

contabo Server Snapshot Funktioun, awer ënnerstëtzt [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) geplangte Snapshots.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Fir e Server Snapshot ze restauréieren, klickt éischt op Crontol am Managementmenü

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Da klickt op Snapshots fir ze restauréieren.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Wéi och ëmmer, d'Granularitéit vun dësem Snapshot ass ze grouss Eemol restauréiert ginn déi nei bäigefüügt Donnéeën komplett verluer, also benotzt se mat Vorsicht.

Et ass normalerweis méi praktesch btrfs Snapshots ze benotzen.

## Rescue System Detailer

Gitt [tcping](https://github.com/paradiseduo/tcping) Rettungssystem 2-3 22

```
tcping ip 22 -c 9999
```

Port Accessibilitéit kann iwwerwaacht ginn.

### Wéi Zougang Zu Der Festplack No Der & Restauréieren Snapshot

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Dir kënnt zum Beispill d'Snapshot kucken

```
snapper -c etc list
```

View Snapshot Datei Ännerungen

```
snapper -c etc status 5..6
```

Kuckt spezifesch Ënnerscheed Text

```
snapper -c etc diff 3..5
```

Snapshot restauréieren: Zum Beispill, all Ännerungen no Snapshot 5 undoen

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktivéiert Log Persistenz

D'Logbestännegkeet ënner engem Rettungssystem aktivéieren erfuerdert datt Dir de entspriechende Verzeechnes manuell erstellt an e puer zousätzlech Schrëtt ausféiert, well Dir vläicht kee Lafen Systemd Service hutt. Hei sinn Schrëtt déi Dir kënnt probéieren:

Éischt Chroot, dann

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Restart an Ärem Ubuntu System: Nodeems Dir déi uewe genannte Ännerunge gemaach hutt, musst Dir Är Maschinn normalerweis nei starten an an Ärem Ubuntu System amplaz vum Rettungssystem.

Op dës Manéier fänkt systemd-journald mat der neier Konfiguratioun un a fänkt u Logbicher permanent op der Festplack ze späicheren.

Denkt drun datt déi uewe genannte Operatiounen op engem Rettungssystem ausgeführt ginn, sou datt dës Ännerungen nëmmen a Kraaft trieden wann de System nei gestart ass an net méi am Rettungsmodus ass.

Dëst bedeit datt Dir keng Ännerunge fir existent Logbicher direkt wäert gesinn, awer all Logbicher, déi duerno generéiert ginn, wäerte bestoe bleiwen.

Op dës Manéier kënnt Dir d'Logbicher vum ssh Service kucken

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notizen Iwwer Schwiereg a Komplizéiert Krankheeten

### De Komeschen Problem Léisen: De Server Kann Net ssh

Ech hunn github Handlung benotzt fir en automatesche Kompiléierungs- an Deployment-Skript virdru ze maachen, awer fonnt datt den Deployment-Service net ssh konnt.

De Rettungssystem anzeginn an d'Logbicher kucken ass en Erlaabnisprobleem:

`Missing privilege separation directory: /run/sshd`

Dir kënnt dëse Verzeechnes mat dem folgenden Kommando erstellen

```
chown root:root /
systemd-tmpfiles --create
```

No widderholl Ermëttlungen ass et `1001` de Benotzer deen tar eropgelueden `uid` github action

tar D'Auspackung muss ouni Parameteren gemaach ginn `--no-same-owner` et gëtt dekompriméiert an `uid` fir `1001` Benotzer

Als Resultat ännert rsync d'Benotzergrupp vum Root-Verzeichnis, an da kënnt Dir Iech net op ssh aloggen nodeems Dir nei starten.

Ännert den Dekompressionsskript wéi follegt:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

