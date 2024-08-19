# Inisialisasi Server (Gunakan Partisi BTRFS, Snapshot Terjadwal Kakap)

## Server Pembelian contabo

contabo merupakan penyedia VPS murah di Jerman dengan sejarah yang panjang (lebih dari 20 tahun) dan pengguna yang banyak (lebih dari 200.000), jadi tidak perlu khawatir kabur.

VPS membeli [contabo.com](//contabo.com) ingatlah untuk memilih harga Euro yang lebih murah.

![](https://i-01.eu.org/1718285782.avif)

Ada biaya instalasi satu kali untuk contabo.
Namun, ada beberapa hari dalam sebulan yang biaya pemasangannya gratis. Cukup mendaftar dan perhatikan email promosinya.

Selain bebas biaya wilayah di Eropa, wilayah lain mempunyai tingkat kenaikan harga yang berbeda-beda.

Saya memilih server Eropa. Lagi pula, setelah menggunakan cloudflare, tidak banyak perbedaan antar server.

Konfigurasi terakhirnya adalah sebagai berikut, memori 16GB, 6CPU, NVMe 200 GB, 9,50 euro sebulan atau setara dengan 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Harga ini hampir sepersepuluh dari harga Alibaba Cloud dan Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Saya menggunakan [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) untuk menjalankan kinerja dan parameter:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Menampilkan CPU Model `AMD EPYC 9224 24-Core Processor` , skor kinerja inti tunggal 1285
, skor multi-inti 4277 Lihat hasil lainnya [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Saya membeli tiga server sekaligus dan mengaktifkannya secara bersamaan. Hal ini memastikan bahwa server berada di ruang komputer yang sama, sehingga memudahkan untuk membangun ketersediaan tinggi di masa mendatang.

Servernya terkadang terputus, memastikan aksesibilitas situs web melalui ketersediaan tinggi.

Pengguna baru harus menyerahkan kartu identitas mereka untuk otentikasi nama asli saat membeli.

## Konfigurasikan Login Tanpa Kata Sandi

Setelah beberapa menit, semua server diaktifkan.

Hal pertama IP mengedit `~/.ssh/config` mesin lokal untuk menyetel alias, lalu menggunakan `ssh-copy-id root@c2` untuk mengonfigurasi login tanpa kata sandi.

![](https://i-01.eu.org/1718287198.avif)

Anda dapat memodifikasi [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ini untuk menyelesaikan konfigurasi inisialisasi lebih cepat.

Setelah konfigurasi bebas kata sandi selesai, Anda dapat menggunakannya [pdsh](https://github.com/chaos/pdsh) Ini dapat dioperasikan secara batch, yang nyaman.

Yang pertama adalah mengaktifkan ipv6 secara manual dan mengujinya

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Kemudian tingkatkan sistem ke ubuntu 24 dengan satu klik dan instal perangkat lunak yang umum digunakan.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 berarti mengganti bahasa ke bahasa Mandarin dan zona waktu ke Beijing.

Perangkat lunak yang diinstal secara default dikonfigurasikan sesuai dengan kebiasaan penggunaan pribadi saya, seperti [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , dll. Jika perlu, Anda dapat menyalin [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) gudang dan memodifikasinya sesuai kebutuhan.

Langkah ini memakan waktu lama. Setelah menunggu setengah jam, upgrade dan instalasi software yang umum digunakan akan berhasil. Anda dapat mengonfirmasinya dengan perintah berikut:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Mempercepat ssh

Jaringan dari Eropa ke China tidak stabil. Disarankan untuk menggunakan [mosh](//mosh.org) untuk mempercepat `ssh` .

Buat `c0` skrip di direktori lokal `~/.bin` (terutama ditambahkan ke variabel lingkungan `PATH` ) sebagai berikut:

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

Setelah pembuatan, berikan izin yang dapat dieksekusi dan tautan lunak `c1` dan `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Di masa depan, Anda dapat langsung memasukkan `c0` dan `c1` untuk menggunakan `mosh` koneksi langsung berkecepatan tinggi dan masuk [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Konversi Format Partisi Dari ext4 Ke btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Dapat mengambil snapshot disk untuk memudahkan pencadangan.

Pertama masuk ke sistem penyelamatan

![](https://i-01.eu.org/1718300448.avif)

Pilih Penyelamatan Debian

![](https://i-01.eu.org/1718300753.avif)

Tunggu hingga server dimulai ulang

ssh Akan ada perubahan sidik jari, gunakan `ssh-keygen -R ip` untuk membersihkannya

Kemudian jalankan skrip berikut untuk mengonversi partisi

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Script akan secara otomatis me-restart sistem setelah konversi berhasil.

### Lihat Rasio Kompresi btrfs

Secara otomatis akan terkompresi secara default. Perintah untuk memeriksa rasio kompresi adalah sebagai berikut:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Kompresi Manual

Jika Anda seorang perfeksionis, Anda juga dapat melakukan kompresi disk penuh secara manual.

```bash
btrfs filesystem defragment -r -czstd /
```

Seperti yang ditunjukkan pada gambar di bawah, Anda dapat melihat bahwa setelah kompresi manual di sistem baru, hampir 100 MB lebih dikompresi.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Buat Cadangan Snapshot Btrfs Dengan Kakap

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) adalah mitra terbaik untuk pencadangan Btrfs .

Script inisialisasi akan membuat direktori `~/ubuntu` , jalankan saja perintah berikut:

```
~/ubuntu/snapper/init.sh
```

Sampai jumpa di isi naskah [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Gunakan `snapper list-configs` untuk melihat subvolume yang snapshotnya ditetapkan.

![](https://i-01.eu.org/1718302689.avif)

Gunakan `snapper -c mnt list` untuk melihat cuplikan subvolume

`/etc/snapper/configs/mnt` dapat melihat pengaturan cadangan spesifik subvolume ini

Referensi lebih lanjut:

[Mainkan dengan mudah menggunakan fungsi snapshot Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Cuplikan Server contabo

contabo Menyediakan fungsi snapshot server, tetapi tidak mendukung snapshot terjadwal. Saya menulis [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) untuk mengambil snapshot harian.

![](https://i-01.eu.org/1718304206.avif)

Untuk memulihkan snapshot server, pertama-tama klik Crontol di menu manajemen

![](https://i-01.eu.org/1718304275.avif)

Lalu, klik Snapshots untuk memulihkan.

![](https://i-01.eu.org/1718304063.avif)

Namun, rincian cuplikan ini terlalu besar. Setelah dipulihkan, data yang baru ditambahkan akan hilang sepenuhnya, jadi harap gunakan dengan hati-hati.

Biasanya lebih nyaman menggunakan snapshot btrfs.

## Detail Sistem Penyelamatan

Masuk ke sistem penyelamatan 22 Setelah port [tcping](https://github.com/paradiseduo/tcping) dapat diakses, Anda tidak akan dapat mengaksesnya dengan kata sandi yang ditetapkan selama 2-3 menit.

```
tcping ip 22 -c 9999
```

Aksesibilitas pelabuhan dapat dipantau.

### Cara Mengakses Hard Drive Setelah Masuk Penyelamatan & Kembalikan Snapshot

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Anda dapat melihat cuplikannya, misalnya

```
snapper -c etc list
```

Lihat perubahan file snapshot

```
snapper -c etc status 5..6
```

Lihat teks perbedaan tertentu

```
snapper -c etc diff 3..5
```

Pulihkan snapshot: Misalnya, membatalkan semua perubahan setelah snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Aktifkan Persistensi Log

Mengaktifkan persistensi log di bawah sistem penyelamatan mengharuskan Anda membuat direktori terkait secara manual dan melakukan beberapa langkah tambahan, karena Anda mungkin tidak menjalankan layanan systemd. Berikut langkah-langkah yang bisa Anda coba:

Chroot pertama, lalu

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reboot ke sistem Ubuntu Anda: Setelah melakukan perubahan di atas, Anda perlu me-reboot mesin Anda secara normal dan masuk ke sistem Ubuntu Anda, bukan ke sistem penyelamat.

Dengan cara ini, jurnal sistemd akan memulai dengan konfigurasi baru dan mulai menyimpan log secara persisten di hard disk.

Ingatlah bahwa operasi di atas dilakukan pada sistem penyelamatan, sehingga perubahan tersebut tidak akan berlaku sampai sistem di-boot ulang dan tidak lagi berada dalam mode penyelamatan.

Artinya, Anda tidak akan langsung melihat perubahan apa pun pada log yang sudah ada dan menjadi persisten, namun semua log yang dihasilkan setelahnya akan tetap ada.

Dengan cara ini Anda dapat melihat log layanan ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Catatan Penyakit Sulit Dan Rumit

### Selesaikan Masalah Aneh: Server Tidak Dapat ssh

Saya menggunakan tindakan github untuk membuat skrip kompilasi dan penerapan otomatis sebelumnya, tetapi menemukan bahwa layanan penerapan tidak dapat berupa ssh.

Memasuki sistem penyelamatan dan melihat log adalah masalah izin:

`Missing privilege separation directory: /run/sshd`

Anda dapat membuat direktori ini dengan perintah berikut

```
chown root:root /
systemd-tmpfiles --create
```

Setelah diselidiki berulang kali, itu karena github action Pengguna `uid` dari tar adalah `1001`

tar Harus dibongkar jika tidak ada parameter `--no-same-owner` , maka akan didekompresi menjadi `uid` untuk `1001` pengguna

Akibatnya, rsync akan mengubah grup pengguna direktori root, dan Anda tidak akan bisa masuk ke ssh setelah memulai ulang.

Ubah skrip dekompresi sebagai berikut:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```