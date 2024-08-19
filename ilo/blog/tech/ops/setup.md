# Irugi Ti Serbidor (Usaren Ti BTRFS a Panagbingbingay, Snapper Nga Naikeddeng a Snapshot) .

## contabo Serbidor Ti Panaggatang

ti contabo ket maysa a nalaka a VPS provider idiay Alemania nga addaan iti nabayagen a pakasaritaan (nasurok a 20 a tawen) ken adu nga agus-usar (nasurok a 200,000), isu a saan a kasapulan a madanagan maipapan iti panagtaray.

VPS gumatang [contabo.com](//contabo.com) laglagipen a pilien ti Euro pricing, a nalaklaka.

![](https://i-01.eu.org/1718285782.avif)

Adda maminsan laeng a bayad ti pannakaipasdek ti contabo.
Nupay kasta, adda sumagmamano nga aldaw iti kada bulan a libre ti bayad ti pannakaipasdek.

Malaksid iti libre a bayad ti lugar idiay Europa, dagiti dadduma a rehion ket addaan iti nadumaduma a lebel ti panagngato ti presio.

Pinilik ti European server Anyway, kalpasan ti panangusarko iti cloudflare, awan unay ti nagdumaan dagiti server.

Ti maudi a konfigurasion ket kastoy, 16GB a memoria, 6CPU, 200 GB NVMe, 9.50 euros iti binulan, katupag ti 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Daytoy a presio ket dandani kakasangapulo ti presio ti Alibaba Cloud ken Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Inusarko ti [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script)

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Ipakita ti Modelo `AMD EPYC 9224 24-Core Processor` , single-core nga iskor ti panagaramid 1285 CPU
, multi-core nga iskor 4277 Kitaen ti ad-adu pay a resulta [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Gimmatangak iti tallo a server iti maminsan ken aggigiddan nga in-activate-ko Daytoy ti mangsigurado a dagiti server ket adda iti isu met laeng a computer room, a mangpalaka iti panangbangon iti nangato a availability iti masanguanan.

Pasaray ag-hang up dagiti server-na, a mangipasigurado iti pannakagun-od ti website babaen ti nangato a pannakagun-od.

Masapul nga isubmite dagiti baro nga agus-usar dagiti ID card-da para iti real-name authentication no gumatangda.

## Ikonfigura Ti Awanan Password a Panaglogin

Kalpasan ti sumagmamano a minuto, na-activate amin dagiti server.

Ti umuna a banag IP ti panang-edit ti `~/.ssh/config` ti lokal a makina tapno mangikeddeng ti alias, ken kalpasanna usaren `ssh-copy-id root@c2` tapno mangikonfigura ti awanan password a panaglogin.

![](https://i-01.eu.org/1718287198.avif)

Mabalinmo a baliwan daytoy nga [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) tapno naparpartak a makompleto ti panagisaad ti panangrugi.

Kalpasan a malpas ti password-free configuration, mabalinmo nga usaren [pdsh](https://github.com/chaos/pdsh) Mabalin a mapaandar kadagiti batch, a kombeniente.

Ti umuna ket ti manual a panangipalubos ti ipv6 ken panangsubok

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Kalpasanna, i-upgrade ti sistema iti ubuntu 24 babaen ti maysa a click ken i-install ti gagangay a maus-usar a software.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

Ti CN=1 ket kayatna a sawen ti panagbalbaliw ti pagsasao iti Insik ken sona ti oras iti Beijing.

Ti software a naikabil babaen ti default ket naikonfigura segun kadagiti personal nga ugali ti panagusarko, kas iti [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , kdpy.. No kasapulan, mabalinmo a kopiaen ti [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) bodega ken baliwan daytoy no kasapulan.

Mabayag daytoy nga addang Kalpasan ti panaguray iti kagudua nga oras, agballigi ti panag-upgrade ken panag-install iti gagangay a maus-usar a software. Mabalinmo a pasingkedan daytoy babaen ti sumaganad a bilin:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Ti Mangpapartak Iti ssh

Saan a natalged ti network manipud Europa agingga iti China Mairekomendar [mosh](//mosh.org) usaren tapno mapapartak `ssh` .

Mangaramid ti `c0` nga iskrip iti lokal a direktorio `~/.bin` (kangrunaan a nainayon iti aglawlaw a variable `PATH` ) a kas ti sumaganad:

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

Kalpasan ti panagpartuat, ikkan dagiti maipatungpal a pammalubos ken soft-link `c1` ken `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Iti masakbayan, mabalinmo a direkta nga iserrek `c0` ken `c1` tapno agusar iti `mosh` a napartak a direkta a koneksion ken iserrek [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Pagbalinen Ti Pormat Ti Panagbingbingay Manipud Iti ext4 Aginggana Iti btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Mabalin ti mangala kadagiti disk snapshot para iti nalaka a panag-backup.

Umuna a sumrek iti sistema ti panangispal

![](https://i-01.eu.org/1718300448.avif)

Pilien ti Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Urayen ti panagrugi manen ti server

ssh Adda dagiti panagbalbaliw ti marka ti ramay, usaren `ssh-keygen -R ip` a mangdalus iti dayta

Kalpasanna, tarayen ti sumaganad nga iskrip tapno mabaliwan ti partision

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Automatiko nga irugi manen ti iskrip ti sistema kalpasan a naballigi ti panagbalbaliw.

### Kitaen Ti btrfs a Ratio Ti Panagkompresion

Automatiko nga agkompresion daytoy babaen ti default.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Manual a Panagkompresion

No maysaka a perpeksionista, mabalinmo pay nga aramiden ti naan-anay a panagkompresion ti disk a manual Ti bilin ket kastoy:

```bash
btrfs filesystem defragment -r -czstd /
```

Kas naipakita iti ladawan iti baba, makitam a kalpasan ti manual a panagkompresion iti baro a sistema, dandani 100MB pay ti naikompresion.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Mangaramid Ti Btrfs Snapshot Backup Babaen Ti snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ti kasayaatan a partner para iti Btrfs backup.

Ti iskrip ti panangrugi ket mangpartuat ti `~/ubuntu` a direktorio, basta tarayen ti sumaganad a bilin:

```
~/ubuntu/snapper/init.sh
```

Agkitakayo iti linaon ti iskrip [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Usaren `snapper list-configs` tapno makita dagiti subtomo a dagiti snapshot ket naikeddeng.

![](https://i-01.eu.org/1718302689.avif)

Usaren `snapper -c mnt list` tapno makita ti snapshot ti maysa a subtomo

`/etc/snapper/configs/mnt` ket mabalinna a kitaen dagiti espesipiko a panagitunos ti backup daytoy a subtomo

Ad-adu pay a reperensia:

[Nalaka nga agay-ayam iti snapshot function ti Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## contabo Nga Serbidor Nga Snapshot

contabo [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml)

![](https://i-01.eu.org/1718304206.avif)

Tapno maisubli ti server snapshot, umuna nga i-klik ti Crontol iti management menu

![](https://i-01.eu.org/1718304275.avif)

Kalpasanna, i-click ti Snapshots tapno maisubli.

![](https://i-01.eu.org/1718304063.avif)

Nupay kasta, ti granularidad daytoy a snapshot ket dakkel unay Apaman a maisubli, ti baro a nainayon a datos ket naan-anay a mapukaw, isu nga pangngaasi nga usaren daytoy a buyogen ti panagannad.

Gagangay nga ad-adda a kombeniente ti agusar kadagiti btrfs snapshot.

## Detalye Ti Sistema Ti Panangispal

Iserrek ti sistema ti panangispal Kalpasan 22 ti puerto ket [tcping](https://github.com/paradiseduo/tcping) accessible, saanmo a makastrek babaen ti naikeddeng a password iti 2-3 a minuto Urayem laeng ti apagbiit ket nasayaatto.

```
tcping ip 22 -c 9999
```

Mabalin a mamonitor ti pannakagun-od iti puerto.

### Kasano Ti Ag-Access Iti Hard Drive Kalpasan Ti Iseserrek Iti Rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Mabalinmo a kitaen ti snapshot, kas pagarigan

```
snapper -c etc list
```

Kitaen dagiti panagbalbaliw ti snapshot file

```
snapper -c etc status 5..6
```

Kitaen ti espesipiko a diff text

```
snapper -c etc diff 3..5
```

Isubli ti snapshot: Kas pagarigan, i-undo amin a panagbalbaliw kalpasan ti snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Pagbalinen Ti Panagtultuloy Ti Log

Ti panangipalubos ti panagtalinaay ti log iti sidong ti sistema ti panangispal ket kasapulan a manual a mangpartuat ti maitunos a direktorio ken mangaramid kadagiti sumagmamano a kanayonan nga addang, gapu ta mabalin nga awan ti agtartaray a serbisio ti systemd. Adtoy dagiti addang a mabalinmo a padasen:

Umuna ngarud ti chroot

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

I-reboot iti sistemam ti Ubuntu: Kalpasan ti panangaramidmo kadagiti panagbalbaliw iti ngato, kasapulam nga i-reboot ti makinam iti normal ken iti sistemam nga Ubuntu imbes a ti sistema ti panangispal.

Iti daytoy a wagas, mangrugi ti systemd-journald iti baro a panagisaad ken mangrugi nga agidulin kadagiti log a kanayon iti hard disk.

Laglagipem a dagiti operasion iti ngato ket maaramid iti sistema ti panangispal, isu a saan nga epektibo dagita a panagbalbaliw agingga a mai-reboot ti sistema ken saanen nga adda iti rescue mode.

Kayatna a sawen a saanmo a dagus a makita ti ania man a panagbalbaliw kadagiti addan a log nga agbalin a agtultuloy, ngem amin a log a napataud kalpasan dayta ket agtalinaedto.

Iti daytoy a wagas ket mabalinmo a kitaen dagiti log ti serbisio ti ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Dagiti Nota Maipapan Kadagiti Narigat Ken Komplikado a Sakit

### Solbaren Ti Karkarna a Parikut: Ti Server Ket Saan a Maka-Ssh

Inusarko ti github action tapno mangaramid ti automatiko nga iskrip ti panagtipon ken panagipakat sakbay, ngem nasarakak a ti serbisio ti panagipakat ket saan a mabalin a ssh.

Ti iseserrek iti sistema ti panangispal ken panangkita kadagiti troso ket maysa nga isyu ti pammalubos:

`Missing privilege separation directory: /run/sshd`

Mabalinmo ti mangpartuat iti daytoy a direktorio babaen ti sumaganad a bilin

```
chown root:root /
systemd-tmpfiles --create
```

Kalpasan ti maulit-ulit nga imbestigasion, gapu github action ti User `uid` ti tar ket `1001`

tar Ti panaglukat ket masapul no awan ti parametro `--no-same-owner` , daytoy ket mai-decompress iti `uid` para iti `1001` nga agar-aramat

Kas resulta, ti rsync ket mangbalbaliw ti grupo ti agar-aramat ti ramut a direktorio, ken kalpasanna saankanto a makalog-in iti ssh kalpasan ti panangrugi manen.

Baliwan ti iskrip ti dekompresion a kas ti sumaganad:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```