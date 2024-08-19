# Initialize Server (Nganggo Partisi BTRFS, Snapshot Dijadwalkeun Snapshot)

## Server Pameseran contabo

contabo mangrupikeun panyadia VPS murah di Jerman sareng sajarah panjang (leuwih ti 20 taun) sareng seueur pangguna (langkung ti 200,000), janten teu kedah hariwang ngeunaan kabur.

VPS ngagaleuh [contabo.com](//contabo.com) émut pikeun milih harga Euro, anu langkung mirah.

![](https://i-01.eu.org/1718285782.avif)

Aya fee instalasi hiji-waktos keur contabo.
Nanging, aya sababaraha dinten unggal bulan dimana biaya instalasi gratis Ngan ngadaptar sareng nengetan email promosi.

Salian fee aréa bébas di Éropa, wewengkon séjén boga tingkat béda tina kanaékan harga.

Kuring milih server Éropa Atoh, sanggeus ngagunakeun cloudflare, aya teu jauh bédana antara server.

Konfigurasi final nyaéta kieu, 16GB memori, 6CPU, 200 GB NVMe, 9,50 euro sabulan, sarua jeung 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Harga ieu ampir sapersapuluh tina harga Alibaba Cloud sareng Amazon** .

![](https://i-01.eu.org/1718356956.avif)

I dipaké [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) ngajalankeun kinerja sarta parameter:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU Model `AMD EPYC 9224 24-Core Processor` , skor kinerja inti tunggal 1285
, skor multi-inti 4277 Tempo deui hasil [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Kuring ngagaleuh tilu server sakaligus sareng ngaktifkeunana dina waktos anu sami.

Serverna aya kalana ngagantung, mastikeun aksés halaman wéb ngalangkungan kasadiaan anu luhur.

Pangguna anyar kedah ngalebetkeun kartu KTP pikeun auténtikasi nami nyata nalika mésér.

## Konpigurasikeun Login Bébas Sandi

Saatos sababaraha menit, server sadayana diaktipkeun.

Hal kahiji IP ngedit mesin lokal urang `~/.ssh/config` pikeun set hiji landian, lajeng nganggo `ssh-copy-id root@c2` pikeun ngonpigurasikeun login bébas sandi.

![](https://i-01.eu.org/1718287198.avif)

Anjeun tiasa ngarobih [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ieu pikeun ngarengsekeun konfigurasi inisialisasi langkung gancang.

Saatos konfigurasi bébas sandi réngsé, Anjeun bisa make [pdsh](https://github.com/chaos/pdsh) bisa dioperasikeun dina bets, nu merenah.

Anu kahiji nyaéta ngaktipkeun ipv6 sareng uji sacara manual

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Teras ningkatkeun sistem ka ubuntu 24 kalayan hiji klik sareng pasang parangkat lunak anu biasa dianggo.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 hartina ngaganti basa ka Cina jeung zona waktu ka Beijing.

Parangkat [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) anu dipasang sacara standar dikonpigurasikeun dumasar kana kabiasaan pamakean pribadi kuring, [direnv](https://direnv.net/) [mise](https://github.com/jdx/mise)

Léngkah ieu butuh waktu anu lami Saatos ngantosan satengah jam, pamutahiran sareng pamasangan parangkat lunak anu biasa dianggo bakal suksés. Anjeun tiasa mastikeun ieu ku paréntah di handap ieu:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Ngagancangkeun ssh

Jaringan ti Éropa ka Cina henteu stabil [mosh](//mosh.org) pikeun ngagancangkeun `ssh` .

Jieun `c0` naskah dina diréktori lokal `~/.bin` (utamana ditambahkeun kana variabel lingkungan `PATH` ) saperti kieu:

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

Saatos nyiptakeun, pasihan idin anu tiasa dieksekusi sareng tautan lemes `c1` sareng `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Dina mangsa nu bakal datang, anjeun bisa langsung ngasupkeun `c0` jeung `c1` ngagunakeun `mosh` -speed tinggi sambungan langsung terus asupkeun [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Ngarobih Format Partisi Tina ext4 Ka btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Bisa nyandak snapshots disk pikeun cadangan gampang.

Mimiti asupkeun sistem nyalametkeun

![](https://i-01.eu.org/1718300448.avif)

Pilih Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Ngadagoan server balikan deui

ssh Bakal aya parobahan sidik, paké `ssh-keygen -R ip` pikeun ngabersihan

Teras jalankeun skrip di handap ieu pikeun ngarobih partisi

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skrip bakal otomatis ngabalikan deui sistem saatos konvérsi suksés.

### Ningali Rasio Komprési btrfs

Bakal otomatis ngompres sacara standar Paréntah pikeun mariksa rasio komprési nyaéta kieu:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Komprési Manual

Upami anjeun perfeksionis, anjeun ogé tiasa ngalakukeun komprési disk pinuh ku cara manual.

```bash
btrfs filesystem defragment -r -czstd /
```

Ditémbongkeun saperti dina gambar di handap, Anjeun bisa nempo yén sanggeus komprési manual dina sistem anyar, ampir 100MB leuwih ieu dikomprés.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Jieun Cadangan Snapshot Btrfs Kalawan Kakap

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) teh pasangan pangalusna pikeun Btrfs cadangan.

Skrip initialization bakal nyieun diréktori `~/ubuntu` , ngan ngajalankeun paréntah di handap:

```
~/ubuntu/snapper/init.sh
```

Ningali anjeun dina eusi naskah [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Paké `snapper list-configs` pikeun nempo subvolume nu snapshots disetel.

![](https://i-01.eu.org/1718302689.avif)

Anggo `snapper -c mnt list` pikeun ningali snapshot tina subvolume

`/etc/snapper/configs/mnt` tiasa ningali setélan cadangan khusus tina subvolume ieu

Rujukan deui:

[Gampang maén sareng fungsi snapshot Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Snapshot Server contabo

contabo Nyadiakeun fungsi snapshot server, tapi teu ngarojong snapshots dijadwalkeun Kuring nulis [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) pikeun nyandak snapshots poean.

![](https://i-01.eu.org/1718304206.avif)

Pikeun mulangkeun snapshot pangladén, klik heula Crontol dina ménu manajemén

![](https://i-01.eu.org/1718304275.avif)

Lajeng, klik Snapshots mulangkeun.

![](https://i-01.eu.org/1718304063.avif)

Tapi, granularity snapshot ieu badag teuing.

Ieu biasana leuwih merenah ngagunakeun snapshots btrfs.

## Rinci Sistim Nyalametkeun

[tcping](https://github.com/paradiseduo/tcping) sistem 2-3 22

```
tcping ip 22 -c 9999
```

Aksesibilitas port tiasa diawaskeun.

### Kumaha Carana Ngaksés Hard Drive Saatos Ngalebetkeun Nyalametkeun &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Anjeun tiasa ningali snapshot, contona

```
snapper -c etc list
```

Tempo parobahan file snapshot

```
snapper -c etc status 5..6
```

Témbongkeun téks béda husus

```
snapper -c etc diff 3..5
```

Mulangkeun snapshot: Contona, bolaykeun sadaya parobahan sanggeus snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktipkeun Kegigihan Log

Aktipkeun kegigihan log dina sistem nyalametkeun merlukeun anjeun sacara manual nyieun diréktori pakait jeung ngalakukeun sababaraha léngkah tambahan, sabab anjeun bisa jadi teu boga layanan systemd jalan. Ieu léngkah anu anjeun tiasa cobian:

Mimiti chroot, teras

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot kana sistem Ubuntu anjeun: Saatos ngadamel perobahan di luhur, anjeun kedah reboot mesin anjeun normal sareng kana sistem Ubuntu anjeun tinimbang sistem nyalametkeun.

Ku cara kieu, systemd-journald bakal ngamimitian ku konfigurasi anyar sareng mimitian nyimpen log terus-terusan dina hard disk.

Émut yén operasi di luhur dilakukeun dina sistem nyalametkeun, ku kituna parobihan éta moal berlaku dugi ka sistem reboot sareng henteu aya dina modeu nyalametkeun.

Ieu ngandung harti yén anjeun moal langsung ningali parobahan naon waé kana log anu parantos aya, tapi sadaya log anu dihasilkeun saatos éta bakal tetep.

Ku cara ieu anjeun tiasa ningali log tina jasa ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Catetan Dina Kasakit Susah Jeung Pajeulit

### Ngarengsekeun Masalah Aneh: Server Teu Bisa ssh

I dipaké aksi github nyieun hiji kompilasi otomatis tur skrip deployment saméméhna, tapi kapanggih yén layanan deployment teu bisa ssh.

Lebetkeun sistem nyalametkeun sareng ningali log mangrupikeun masalah idin:

`Missing privilege separation directory: /run/sshd`

Anjeun tiasa nyiptakeun diréktori ieu nganggo paréntah di handap ieu

```
chown root:root /
systemd-tmpfiles --create
```

Saatos panilitian anu diulang-ulang, éta github action pangguna `uid` tina tar nyaéta `1001`

tar Unpacking kudu lamun euweuh parameter `--no-same-owner` , éta bakal decompressed ka `uid` pikeun `1001` pamaké

Hasilna, rsync bakal ngarobih grup pangguna tina diréktori akar, teras anjeun moal tiasa lebet kana ssh saatos ngamimitian deui.

Robah skrip decompression sapertos kieu:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```