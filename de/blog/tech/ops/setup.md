# Initialisieren Sie Den Server (Verwenden Sie Die BTRFS-Partition Und Einen Geplanten Snapper-Snapshot)

## Contabo-Einkaufsserver

contabo ist ein günstiger VPS-Anbieter in Deutschland mit einer langen Geschichte (mehr als 20 Jahre) und vielen Nutzern (mehr als 200.000), sodass Sie keine Angst haben müssen, wegzulaufen.

Denken Sie VPS Kauf [contabo.com](//contabo.com) den Euro-Preis zu wählen, der günstiger ist.

![](https://i-01.eu.org/1718285782.avif)

Für contabo fällt eine einmalige Installationsgebühr an.
Es gibt jedoch jeden Monat ein paar Tage, an denen die Installationsgebühr kostenlos ist. Registrieren Sie sich einfach und achten Sie auf die Werbe-E-Mails.

Zusätzlich zur kostenlosen Gebietsgebühr in Europa gibt es in anderen Regionen unterschiedliche Preiserhöhungen.

Ich habe mich jedenfalls für einen europäischen Server entschieden, nachdem ich Cloudflare verwendet habe, gibt es keinen großen Unterschied zwischen den Servern.

Die endgültige Konfiguration sieht wie folgt aus: 16 GB Speicher, 6 CPU, 200 GB NVMe, 9,50 Euro pro Monat, umgerechnet 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Dieser Preis beträgt fast ein Zehntel des Preises von Alibaba Cloud und Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Ich habe [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) verwendet, um die Leistung und Parameter auszuführen:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Wird angezeigt CPU Modell `AMD EPYC 9224 24-Core Processor` , Single-Core-Leistungsbewertung 1285
, Multi-Core-Score 4277 Weitere Ergebnisse anzeigen [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Ich habe drei Server gleichzeitig gekauft und gleichzeitig aktiviert. Dadurch wird sichergestellt, dass sich die Server im selben Computerraum befinden, was den Aufbau einer hohen Verfügbarkeit in Zukunft erleichtert.

Die Server bleiben gelegentlich hängen und stellen die Erreichbarkeit der Website durch Hochverfügbarkeit sicher.

Neue Benutzer müssen beim Kauf ihren Personalausweis zur Authentifizierung mit echtem Namen vorlegen.

## Konfigurieren Sie Die Passwortfreie Anmeldung

Nach ein paar Minuten waren alle Server aktiviert

Der erste Schritt IP die `~/.ssh/config` des lokalen Computers zu bearbeiten, um einen Alias festzulegen, und dann `ssh-copy-id root@c2` zu verwenden, um die passwortfreie Anmeldung zu konfigurieren.

![](https://i-01.eu.org/1718287198.avif)

Sie können dieses [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ändern, um die Initialisierungskonfiguration schneller abzuschließen.

Nachdem die passwortfreie Konfiguration abgeschlossen ist, können Sie sie verwenden [pdsh](https://github.com/chaos/pdsh) Sie kann stapelweise ausgeführt werden, was praktisch ist.

Die erste besteht darin, IPv6 manuell zu aktivieren und zu testen

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Anschließend aktualisieren Sie das System mit einem Klick auf Ubuntu 24 und installieren häufig verwendete Software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 bedeutet, dass die Sprache auf Chinesisch und die Zeitzone auf Peking umgestellt wird.

Die standardmäßig installierte Software ist entsprechend meinen persönlichen Nutzungsgewohnheiten konfiguriert, z. B. [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) usw. Bei Bedarf können Sie das [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) Warehouse kopieren und nach Bedarf ändern.

Dieser Schritt dauert lange. Nach einer halben Stunde Wartezeit sind das Upgrade und die Installation häufig verwendeter Software erfolgreich. Sie können dies mit dem folgenden Befehl bestätigen:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Beschleunigt ssh

Das Netzwerk von Europa nach China ist nicht stabil. Zur Beschleunigung wird [mosh](//mosh.org) empfohlen `ssh`

Erstellen Sie `c0` Skripte im lokalen Verzeichnis `~/.bin` (hauptsächlich zur Umgebungsvariablen `PATH` hinzugefügt), wie folgt:

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

Erteilen Sie nach der Erstellung ausführbare Berechtigungen und Soft-Links `c1` und `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In Zukunft können Sie `c0` und `c1` direkt eingeben, um `mosh` Hochgeschwindigkeits-Direktverbindungen zu nutzen, und eingeben [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konvertieren Sie Das Partitionsformat Von ext4 in btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Kann Festplatten-Snapshots zur einfachen Sicherung erstellen.

Betreten Sie zunächst das Rettungssystem

![](https://i-01.eu.org/1718300448.avif)

Wählen Sie Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Warten Sie, bis der Server neu gestartet wird

ssh 的时候会出现指纹变化，用`ssh-keygen -R ip`来清理

Dann laufen Sie das folgende Skript aus, um die Partition zu konvertieren

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Das Skript startet das System automatisch neu, nachdem die Konvertierung erfolgreich war.

### Btrfs-Komprimierungsverhältnis Anzeigen

Die Komprimierung erfolgt standardmäßig automatisch. Der Befehl zum Überprüfen des Komprimierungsverhältnisses lautet wie folgt:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manuelle Komprimierung

Wenn Sie ein Perfektionist sind, können Sie eine vollständige Festplattenkomprimierung auch manuell durchführen. Der Befehl lautet wie folgt:

```bash
btrfs filesystem defragment -r -czstd /
```

Wie in der folgenden Abbildung dargestellt, können Sie sehen, dass nach der manuellen Komprimierung im neuen System fast 100 MB mehr komprimiert wurden.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Erstellen Sie Mit snapper Ein Btrfs-Snapshot-Backup

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ist der beste Partner für Btrfs Backup.

Das Initialisierungsskript erstellt das Verzeichnis `~/ubuntu` Führen Sie einfach den folgenden Befehl aus:

```
~/ubuntu/snapper/init.sh
```

Wir sehen uns im Skriptinhalt [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Verwenden Sie `snapper list-configs` um die Subvolumes anzuzeigen, für die Snapshots festgelegt sind

![](https://i-01.eu.org/1718302689.avif)

Verwenden Sie `snapper -c mnt list` um einen Snapshot eines Subvolumes anzuzeigen

`/etc/snapper/configs/mnt` kann die spezifischen Sicherungseinstellungen dieses Subvolumes anzeigen

Weitere Referenzen:

[Spielen Sie ganz einfach mit der Snapshot-Funktion von Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Contabo-Server-Snapshot

contabo Bietet Server-Snapshot-Funktion, unterstützt jedoch keine geplanten Snapshots. Ich habe ein [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) geschrieben, um tägliche Snapshots zu erstellen.

![](https://i-01.eu.org/1718304206.avif)

Um einen Server-Snapshot wiederherzustellen, klicken Sie zunächst im Verwaltungsmenü auf Crontol

![](https://i-01.eu.org/1718304275.avif)

Klicken Sie dann auf Snapshots zum Wiederherstellen.

![](https://i-01.eu.org/1718304063.avif)

Die Granularität dieses Snapshots ist jedoch zu groß. Nach der Wiederherstellung gehen die neu hinzugefügten Daten vollständig verloren. Verwenden Sie ihn daher mit Vorsicht.

Normalerweise ist es bequemer, BTRFS-Snapshots zu verwenden.

## Details Zum Rettungssystem

Rufen Sie das Rettungssystem auf 22 Nachdem der Port [tcping](https://github.com/paradiseduo/tcping) zugänglich ist, können Sie mit dem festgelegten Passwort 2-3 Minuten lang nicht darauf zugreifen.

```
tcping ip 22 -c 9999
```

Die Erreichbarkeit von Ports kann überwacht werden.

### So Greifen Sie Nach Dem Aufrufen Von & Rescue Snapshot“ Auf Die Festplatte Zu

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Sie können sich beispielsweise den Schnappschuss ansehen

```
snapper -c etc list
```

Änderungen an Snapshot-Dateien anzeigen

```
snapper -c etc status 5..6
```

Spezifischen Diff-Text anzeigen

```
snapper -c etc diff 3..5
```

Snapshot wiederherstellen : Machen Sie beispielsweise alle Änderungen nach Snapshot 5 rückgängig

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktivieren Sie Die Protokollpersistenz

Um die Protokollpersistenz unter einem Rettungssystem zu aktivieren, müssen Sie das entsprechende Verzeichnis manuell erstellen und einige zusätzliche Schritte ausführen, da möglicherweise kein systemd-Dienst ausgeführt wird. Hier sind Schritte, die Sie ausprobieren können:

Dann erstmal chrooten

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Starten Sie Ihr Ubuntu-System neu: Nachdem Sie die oben genannten Änderungen vorgenommen haben, müssen Sie Ihren Computer normal und in Ihrem Ubuntu-System und nicht im Rettungssystem neu starten.

Auf diese Weise beginnt systemd-journald mit der neuen Konfiguration und beginnt, Protokolle dauerhaft auf der Festplatte zu speichern.

Beachten Sie, dass die oben genannten Vorgänge auf einem Rettungssystem ausgeführt werden, sodass diese Änderungen erst wirksam werden, wenn das System neu gestartet wird und sich nicht mehr im Rettungsmodus befindet.

Dies bedeutet, dass Änderungen an vorhandenen Protokollen, die dauerhaft werden, nicht sofort angezeigt werden. Alle danach generierten Protokolle bleiben jedoch bestehen.

Auf diese Weise können Sie die Protokolle des SSH-Dienstes anzeigen

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notizen zu komplexen und kniffligen Problemen

### Lösung eines seltsamen Problems: Der Server kann keine SSH-Verbindung herstellen

Ich habe zuvor ein automatisches Kompilierungs- und Deployment-Skript mit GitHub Actions erstellt, habe aber festgestellt, dass nach der Deployment der Dienst keine SSH-Verbindung mehr herstellen kann.

Beim Eintreten in den Notfallmodus zeigt die Protokollierung eine Berechtigungsproblematik an:

`Missing privilege separation directory: /run/sshd`

Dieses Verzeichnis kann mit folgendem Befehl erstellt werden

```
chown root:root /
systemd-tmpfiles --create
```

Nach mehreren Untersuchungen stellt sich heraus, dass das Problem daran liegt, dass der `uid` des tar-Bündlers in der GitHub Action `1001` ist

Das Entpacken von `tar` muss ohne den Parameter `--no-same-owner` erfolgen, da sonst die Dateien für den Benutzer `1001` dekomprimiert werden

Infolgedessen ändert rsync die Benutzergruppe des Stammverzeichnisses und Sie können sich nach dem Neustart nicht mehr bei ssh anmelden.

Ändern Sie das Entpackungsskript wie folgt:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```