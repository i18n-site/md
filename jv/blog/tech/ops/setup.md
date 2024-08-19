# Miwiti Server (Nggunakake Partisi BTRFS, Snapshot Terjadwal)

## Server Tuku contabo

contabo minangka panyedhiya VPS murah ing Jerman kanthi sejarah sing dawa (luwih saka 20 taun) lan akeh pangguna (luwih saka 200.000), dadi ora perlu kuwatir yen mlayu.

VPS tuku [contabo.com](//contabo.com) elinga milih rega Euro, sing luwih murah.

![](https://i-01.eu.org/1718285782.avif)

Ana biaya instalasi siji-wektu kanggo contabo.
Nanging, ana sawetara dina saben sasi ing ngendi biaya instalasi gratis Cukup ndhaptar lan mbayar manungsa waé menyang email promosi.

Saliyane biaya wilayah gratis ing Eropa, wilayah liyane duwe tingkat kenaikan rega sing beda.

Aku milih server Eropa Oalah, sawise nggunakake cloudflare, ora ana bedane antarane server.

Konfigurasi pungkasan kaya ing ngisor iki, memori 16GB, 6CPU, 200 GB NVMe, 9,50 euro saben wulan, padha karo 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Rega iki meh sepersepuluh saka rega Alibaba Cloud lan Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Aku [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) kanggo mbukak kinerja lan paramèter:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU Model `AMD EPYC 9224 24-Core Processor` , skor kinerja siji-inti 1285
, skor multi-inti 4277 Deleng asil liyane [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Aku tuku telung server ing siji wektu lan ngaktifake ing wektu sing padha iki njamin sing server ing kamar komputer padha, nggawe luwih gampang kanggo mbangun kasedhiyan dhuwur ing mangsa.

Server kasebut sok-sok mateni, njamin aksesibilitas situs web liwat kasedhiyan dhuwur.

Pangguna anyar kudu ngirim kertu ID kanggo otentikasi jeneng nyata nalika tuku.

## Konfigurasi Login Tanpa Sandhi

Sawise sawetara menit, server kabeh diaktifake.

Wangsulan: Bab ingkang kapisan IP ngowahi `~/.ssh/config` mesin lokal kanggo nyetel alias, lan banjur nggunakake `ssh-copy-id root@c2` kanggo konfigurasi login tanpa sandi.

![](https://i-01.eu.org/1718287198.avif)

Sampeyan bisa ngowahi [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) iki kanggo ngrampungake konfigurasi initialization luwih cepet.

Sawise konfigurasi tanpa sandhi rampung, sampeyan bisa nggunakake [pdsh](https://github.com/chaos/pdsh)

Pisanan yaiku ngaktifake ipv6 lan tes kanthi manual

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Banjur upgrade sistem menyang ubuntu 24 kanthi siji klik lan instal piranti lunak sing umum digunakake.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 tegese ngoper basa menyang Cina lan zona wektu menyang Beijing.

Piranti lunak sing diinstal kanthi standar dikonfigurasi miturut kabiasaan panggunaan pribadi, kayata [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , lsp. Yen perlu, sampeyan bisa nyalin gudang [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) lan ngowahi yen perlu.

Langkah iki mbutuhake wektu suwe Sawise ngenteni setengah jam, upgrade lan instalasi piranti lunak sing umum digunakake bakal sukses. Sampeyan bisa konfirmasi iki kanthi printah ing ngisor iki:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Nyepetake ssh

Jaringan saka Eropa menyang China ora stabil [mosh](//mosh.org) nggunakake kanggo nyepetake `ssh` .

Gawe `c0` skrip ing direktori lokal `~/.bin` (utamane ditambahake menyang variabel lingkungan `PATH` ) kaya ing ngisor iki:

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

Sawise digawe, wenehi ijin sing bisa dieksekusi lan link alus `c1` lan `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Ing mangsa ngarep, sampeyan bisa langsung ngetik `c0` lan `c1` kanggo nggunakake `mosh` sambungan langsung kacepetan dhuwur lan ketik [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Ngonversi Format Partisi Saka ext4 Dadi btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Bisa njupuk gambar disk kanggo serep gampang.

Pisanan ketik sistem ngluwari

![](https://i-01.eu.org/1718300448.avif)

Pilih Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Ngenteni server kanggo miwiti maneh

ssh Bakal ana owah-owahan bekas driji, gunakake `ssh-keygen -R ip` kanggo ngresiki

Banjur mbukak script ing ngisor iki kanggo ngowahi partisi

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skrip bakal miwiti maneh sistem kanthi otomatis sawise konversi sukses.

### Ndeleng Rasio Kompresi btrfs

Bakal kanthi otomatis compress minangka standar.

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kompresi Manual

Yen sampeyan perfeksionis, sampeyan uga bisa nindakake kompresi disk lengkap kanthi manual.

```bash
btrfs filesystem defragment -r -czstd /
```

Kaya sing ditampilake ing gambar ing ngisor iki, sampeyan bisa ndeleng manawa sawise kompresi manual ing sistem anyar, meh 100MB luwih akeh dikompres.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Gawe Serep Snapshot Btrfs Nganggo snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) iku partner paling apik kanggo Btrfs backup.

Skrip inisialisasi bakal nggawe direktori `~/ubuntu` , mung jalanake perintah ing ngisor iki:

```
~/ubuntu/snapper/init.sh
```

Ndeleng sampeyan ing isi naskah [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Gunakake `snapper list-configs` kanggo ndeleng subvolume sing diset jepretan.

![](https://i-01.eu.org/1718302689.avif)

Gunakake `snapper -c mnt list` kanggo ndeleng snapshot saka subvolume

`/etc/snapper/configs/mnt` bisa ndeleng setelan serep tartamtu saka subvolume iki

Referensi liyane:

[Gampang muter karo fungsi snapshot saka Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Snapshot Server Kontak

contabo Nyedhiyani fungsi snapshot server, nanging ora ndhukung snapshots dijadwal Aku nulis [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) kanggo njupuk jepretan saben dina.

![](https://i-01.eu.org/1718304206.avif)

Kanggo mulihake snapshot server, klik dhisik Crontol ing menu manajemen

![](https://i-01.eu.org/1718304275.avif)

Banjur, klik Snapshots kanggo mulihake.

![](https://i-01.eu.org/1718304063.avif)

Nanging, granularity snapshot iki gedhe banget Sawise dibalekake, data sing mentas ditambahake bakal ilang, mula gunakake kanthi ati-ati.

Biasane luwih trep nggunakake jepretan btrfs.

## Rincian Sistem Ngluwari

Ketik 2-3 [tcping](https://github.com/paradiseduo/tcping) 22

```
tcping ip 22 -c 9999
```

Aksesibilitas port bisa dipantau.

### Carane Ngakses Hard Drive Sawise Ngetik Rescue &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Sampeyan bisa ndeleng snapshot, contone

```
snapper -c etc list
```

Deleng owah-owahan file snapshot

```
snapper -c etc status 5..6
```

Deleng teks beda tartamtu

```
snapper -c etc diff 3..5
```

Mulihake snapshot: Contone, batalaken kabeh owah-owahan sawise snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktifake Ketekunan Log

Ngaktifake ketekunan log ing sistem penyelamat mbutuhake sampeyan nggawe direktori sing cocog kanthi manual lan nindakake sawetara langkah tambahan, amarga sampeyan ora duwe layanan systemd sing mlaku. Ing ngisor iki langkah-langkah sing bisa sampeyan coba:

Pisanan chroot, banjur

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Urip maneh menyang sistem Ubuntu: Sawise nggawe owah-owahan ing ndhuwur, sampeyan kudu urip maneh mesin kanthi normal lan menyang sistem Ubuntu tinimbang sistem ngluwari.

Kanthi cara iki, systemd-journald bakal miwiti konfigurasi anyar lan wiwit nyimpen log kanthi terus-terusan ing hard disk.

Elinga yen operasi ing ndhuwur ditindakake ing sistem ngluwari, mula owah-owahan kasebut ora bakal ditrapake nganti sistem urip maneh lan ora ana maneh ing mode ngluwari.

Iki tegese sampeyan ora bakal langsung ndeleng owah-owahan ing log sing wis ana sing terus-terusan, nanging kabeh log sing digawe sawise iku bakal tetep.

Kanthi cara iki sampeyan bisa ndeleng log layanan ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Cathetan Babagan Penyakit Sing Angel Lan Rumit

### Ngatasi Masalah Aneh: Server Ora Bisa ssh

Aku nggunakake aksi github kanggo nggawe kompilasi otomatis lan skrip penyebaran sadurunge, nanging nemokake yen layanan penyebaran ora bisa ssh.

Mlebet sistem ngluwari lan ndeleng log minangka masalah ijin:

`Missing privilege separation directory: /run/sshd`

Sampeyan bisa nggawe direktori iki kanthi printah ing ngisor iki

```
chown root:root /
systemd-tmpfiles --create
```

Sawise diselidiki bola-bali, github action pangguna `uid` saka tar yaiku `1001`

tar kudu yen ora ana parameter `--no-same-owner` , iku bakal decompressed kanggo `uid` kanggo `1001` pangguna

Akibaté, rsync bakal ngganti grup pangguna direktori root, banjur sampeyan ora bakal bisa mlebu menyang ssh sawise miwiti maneh.

Owahi skrip dekompresi kaya ing ngisor iki:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```