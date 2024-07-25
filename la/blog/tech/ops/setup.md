# Initialize in Calculonis Servi (Uti BTRFS Partitione, Snapper Scheduled Snapshot)

## contabo Servo Emptio

contabo vilis VPS provisor in Germania cum longa historia (plus 20 annis) et multis utentibus (plus quam 200,000), ideo non est opus de fuga solliciti.

VPS emere [contabo.com](//contabo.com) memento eligere Morbi cursus sapien, quod est vilius.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Est unum tempus installationis pro contabo.
Sed pauci dies singulis mensibus sunt ubi feodum institutionis libera est.

Praeter aream liberam in Europa, aliae regiones diversis gradibus pretii crescit.

Usquam servitorem Europaeum elegi.

Configuratio finalis haec est: 16GB memoria, 6CPU, 200 GB NVMe, 9.50 indicem in mense, aequivalens 74.43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Pretium hoc pretium est prope decima pretii Alibaba Cloud et Amazonum** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Ego [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

`AMD EPYC 9224 24-Core Processor` CPU 1285
, multi-core score 4277 Plures eventus videre [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Tres servientes simul emi et eos simul reduxi. Hoc efficit ut servientes in eodem conclavi computatrali sint, ut facilius ad altam facultatem in futuro aedificent.

Ministri eius interdum suspendunt, prospiciendi accessibilitatem per altum disponibilitatem.

Novos usores postulo ut ID pecto suas submittere pro authenticas nomine reali in emendo.

## Configurare Password Libero Login

Paucis minutis servientes omnes reducuntur.

Primum `ssh-copy-id root@c2` machinae IP creare `~/.ssh/config`

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Hoc [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) mutare potes ut configurationem initializationem citius perficias.

Configuratione liberarum tesserarum completa, ea uti potes [pdsh](https://github.com/chaos/pdsh) Potest operari in batches, quod convenit.

Primum est manually ipv6 et probare

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Tunc upgrade systema ad Decuriam 24 una strepita et programmata communiter adhibita institue.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=I significat mutandi linguam ad Sinenses et tempus zonam Beijing.

Progressio per defaltam inauguratus configuratur secundum meum habitum personalem usum, qualis est [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , etc. Si opus est, horreum [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) imitari potes et prout opus est mutare.

Hic gradus diu moratus est. Post semihoram expectato, upgrade et institutio programmatis communiter adhibita succedet. Confirmare potes hoc mandato:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Velocitates ssh

Retis ex Europa ad Sinas non stabilis `ssh` . Commendatur uti [mosh](//mosh.org)

Creare `c0` scriptum in machina loci `~/.bin` (maxime additur ad environment variabilis `PATH` ) directorium hoc modo:

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

Post creationem, concede permissiones exsecutabiles et `c2` mollis `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

In posterum directe intrare potes `c0` `c1` et `mosh` directe coniungere et inire potes [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Conversus Partitionis Forma Ab ext4 Ad btrfs

Disci snapshots pro facili tergum capere [btrfs](https://wikipedia.org/wiki/Btrfs) .

Primum in liberandum ratio

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Elige Debian Eripe

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Exspecta servo ut sileo

Mutationes fingerprintes fient quando ssh utere `ssh-keygen -R ip`

Deinde currere scriptum est ut partitionem convertat

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Scriptum statim systema sileo post conversionem succedit.

### Visum btrfs Compressionem Ratio

Praeceptum comprimendi per defaltam sponte erit.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compressio Manualis

Si perfectus es, etiam plenam orbis compressionem manualem facere potes. Mandatum hoc est

```bash
btrfs filesystem defragment -r -czstd /
```

Ut in figura infra ostenditur, videre potes compressionem manualem in nova systemate, 100MB fere magis compressam.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Creare Btrfs Snapshot Tergum Cum snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) est optimum socium pro Btrfs tergum.

Scriptum initializationis creabit `~/ubuntu` , sequentia mandata percurre:

```
~/ubuntu/snapper/init.sh
```

Vide te in scripto content [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Utere `snapper list-configs` videre subvolumenta pro quibus snapshots ponuntur.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Use `snapper -c mnt list` to view a snapshot of subvolume

`/etc/snapper/configs/mnt`

More references:

[Facile ludere cum functione snapshot Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Servo Snapshot

contabo Munus snapshot server praebet, sed snapshots schedula non sustinet. Scripseram [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) ad cotidianos snapshots.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Ut servo snapshot, preme Crontol in tabula administratione primum

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Tum preme Snapshots ut restituat.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

Sed granularitas huius snapshot magna nimis est. Cum restitutus est, notitia adiecta noviter penitus amittetur, ita cauto utere placet.

Solet commodius btrfs snapshots uti.

## Eripe Systema Singula

Ingredere [tcping](https://github.com/paradiseduo/tcping) 2-3 22

```
tcping ip 22 -c 9999
```

Portus facilitas viverra potest.

### Quam Ut Obvius Ferreus Coegi Postquam Liberandum Intrans &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Snapshotum inspicere potes, e.g

```
snapper -c etc list
```

View snapshot lima mutationes

```
snapper -c etc status 5..6
```

View text specifica diss

```
snapper -c etc diff 3..5
```

Snapshot restitue: Pro exemplo, abroga omnes mutationes post snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Admitte Iniuriarum Perseverantia

Patiens stipes perseverantiae sub subsidio systema te requirit ut manually directorium creandum et aliquos gradus additos perficias, quia ministerium systematis currens non habes. Hic gradus es experiri potes:

Primum chroot, deinde

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot in systema tuum Ubuntu: Post mutationes factas, machinam tuam regulariter reboot et in systemate Ubuntu tuo loco subsidii systematis.

Hoc modo systemd-journald cum nova configuratione incipiet et in duro orbe adsidue trabes accommodandas committitur.

Meminerint praedictae operationes in subsidio systematis peragi, ut mutationes illae tantum effectum sortiantur semel systema rebooted nec diutius in liberando modo.

Hoc significat quod non statim videbis mutationes lignorum existentium persistentes, sed omnia post haec generata perstiterint.

Hoc modo videre potes ligna servitii ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notae De Morbis Difficilibus Et Complicatis

### Infandum Solvere Problema Et Servo Non ssh

Github usus sum ad faciendum automatice compilationem et scripturam instruere ante, sed instruere ministerium ssh non posse inveni.

Ratio liberandi intrandi et spectandi ligna licentia est exitus;

`Missing privilege separation directory: /run/sshd`

Hoc directorium cum sequenti imperio creare potes

```
chown root:root /
systemd-tmpfiles --create
```

Post repetitas tar `uid` est `1001` github action

tar `--no-same-owner` `uid` `1001`

Quam ob rem, rsync turba utentis radicis directorii mutabit, et tunc post restarting ssh inire non poteris.

Mutare decompression scriptor ut sequitur:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

