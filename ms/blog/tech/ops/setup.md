# Mulakan Pelayan (Gunakan Partition BTRFS, Snapshot Berjadual Snapshot)

## Pelayan Pembelian contabo

contabo ialah penyedia VPS murah di Jerman dengan sejarah yang panjang (lebih daripada 20 tahun) dan ramai pengguna (lebih daripada 200,000), jadi tidak perlu risau tentang melarikan diri.

VPS membeli [contabo.com](//contabo.com) ingat untuk memilih harga Euro, yang lebih murah.

![](https://i-01.eu.org/1718285782.avif)

Terdapat bayaran pemasangan sekali untuk contabo.
Walau bagaimanapun, terdapat beberapa hari setiap bulan di mana bayaran pemasangan adalah percuma. Hanya daftar dan perhatikan e-mel promosi.

Selain bayaran kawasan percuma di Eropah, wilayah lain mempunyai tahap kenaikan harga yang berbeza.

Saya memilih pelayan Eropah Bagaimanapun, selepas menggunakan cloudflare, tidak banyak perbezaan antara pelayan.

Konfigurasi akhir adalah seperti berikut, memori 16GB, 6CPU, NVMe 200 GB, 9.50 euro sebulan, bersamaan dengan 74.43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Harga ini hampir satu per sepuluh daripada harga Alibaba Cloud dan Amazon** .

![](https://i-01.eu.org/1718356956.avif)

Saya menggunakan [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) untuk menjalankan prestasi dan parameter:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

CPU Model `AMD EPYC 9224 24-Core Processor` , skor prestasi teras tunggal 1285
, skor berbilang teras 4277 Lihat lebih banyak hasil [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Saya membeli tiga pelayan pada satu masa dan mengaktifkannya pada masa yang sama Ini memastikan bahawa pelayan berada dalam bilik komputer yang sama, menjadikannya lebih mudah untuk membina ketersediaan tinggi pada masa hadapan.

Pelayannya kadangkala menutup telefon, memastikan kebolehcapaian tapak web melalui ketersediaan tinggi.

Pengguna baharu perlu menyerahkan kad ID mereka untuk pengesahan nama sebenar semasa membeli.

## Konfigurasikan Log Masuk Tanpa Kata Laluan

Selepas beberapa minit, semua pelayan telah diaktifkan.

Perkara pertama IP mengedit `~/.ssh/config` mesin tempatan untuk menetapkan alias, dan kemudian gunakan `ssh-copy-id root@c2` untuk mengkonfigurasi log masuk tanpa kata laluan.

![](https://i-01.eu.org/1718287198.avif)

Anda boleh mengubah suai [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) ini untuk melengkapkan konfigurasi permulaan dengan lebih cepat.

Selepas konfigurasi bebas kata laluan selesai, anda boleh menggunakannya [pdsh](https://github.com/chaos/pdsh) Ia boleh dikendalikan secara berkelompok, yang memudahkan.

Yang pertama ialah mendayakan ipv6 dan ujian secara manual

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Kemudian tingkatkan sistem kepada ubuntu 24 dengan satu klik dan pasang perisian yang biasa digunakan.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 bermaksud menukar bahasa ke bahasa Cina dan zon waktu ke Beijing.

Perisian yang dipasang secara lalai dikonfigurasikan mengikut tabiat penggunaan peribadi saya, seperti [mise](https://github.com/jdx/mise) , [direnv](https://direnv.net/) , dsb. Jika perlu, anda boleh menyalin [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse dan mengubahnya mengikut keperluan.

Langkah ini mengambil masa yang lama Selepas menunggu selama setengah jam, naik taraf dan pemasangan perisian yang biasa digunakan akan berjaya. Anda boleh mengesahkan ini dengan arahan berikut:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## mosh Mempercepatkan ssh

Rangkaian dari Eropah ke China tidak stabil Adalah disyorkan untuk [mosh](//mosh.org) untuk mempercepatkan `ssh` .

Buat `c0` skrip dalam direktori tempatan `~/.bin` (terutamanya ditambahkan pada pembolehubah persekitaran `PATH` ) seperti berikut:

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

Selepas penciptaan, berikan kebenaran boleh laku dan pautan lembut `c1` dan `c2` .

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Pada masa hadapan, anda boleh terus memasukkan `c0` dan `c1` untuk menggunakan `mosh` sambungan terus berkelajuan tinggi dan masukkan [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Tukar Format Partition Daripada ext4 Kepada btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Boleh mengambil gambar cakera untuk sandaran mudah.

Mula-mula masukkan sistem menyelamat

![](https://i-01.eu.org/1718300448.avif)

Pilih Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Tunggu pelayan dimulakan semula

ssh Akan ada perubahan cap jari, gunakan `ssh-keygen -R ip` untuk membersihkannya

Kemudian jalankan skrip berikut untuk menukar partition

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

Skrip akan memulakan semula sistem secara automatik selepas penukaran berjaya.

### Lihat Nisbah Mampatan btrfs

Ia secara automatik akan memampatkan secara lalai Perintah untuk menyemak nisbah mampatan adalah seperti berikut:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Pemampatan Manual

Jika anda seorang perfeksionis, anda juga boleh melakukan pemampatan cakera penuh secara manual Perintahnya adalah seperti berikut:

```bash
btrfs filesystem defragment -r -czstd /
```

Seperti yang ditunjukkan dalam rajah di bawah, anda dapat melihat bahawa selepas pemampatan manual dalam sistem baharu, hampir 100MB lagi telah dimampatkan.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Buat Sandaran Syot Kilat Btrfs Dengan snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) ialah rakan kongsi terbaik untuk Btrfs backup.

Skrip permulaan akan mencipta direktori `~/ubuntu` , hanya jalankan arahan berikut:

```
~/ubuntu/snapper/init.sh
```

Jumpa anda dalam kandungan skrip [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Gunakan `snapper list-configs` untuk melihat subvolum yang syot kilat ditetapkan.

![](https://i-01.eu.org/1718302689.avif)

Gunakan `snapper -c mnt list` untuk melihat syot kilat subjilid

`/etc/snapper/configs/mnt` boleh melihat tetapan sandaran khusus subvolum ini

Lebih banyak rujukan:

[Main dengan mudah dengan fungsi syot kilat Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Petikan Pelayan contabo

contabo Menyediakan fungsi syot kilat pelayan, tetapi tidak menyokong syot kilat berjadual saya menulis [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) untuk mengambil syot kilat harian.

![](https://i-01.eu.org/1718304206.avif)

Untuk memulihkan petikan pelayan, mula-mula klik Crontol dalam menu pengurusan

![](https://i-01.eu.org/1718304275.avif)

Kemudian, klik Syot Kilat untuk memulihkan.

![](https://i-01.eu.org/1718304063.avif)

Walau bagaimanapun, butiran gambar ini terlalu besar Setelah dipulihkan, data yang baru ditambah akan hilang sepenuhnya, jadi sila gunakannya dengan berhati-hati.

Ia biasanya lebih mudah untuk menggunakan syot kilat btrfs.

## Butiran Sistem Menyelamat

Masukkan sistem penyelamat 22 Selepas port [tcping](https://github.com/paradiseduo/tcping) boleh diakses, anda tidak akan dapat mengaksesnya dengan kata laluan yang ditetapkan selama 2-3 minit.

```
tcping ip 22 -c 9999
```

Kebolehcapaian pelabuhan boleh dipantau.

### Bagaimana Untuk Mengakses Cakera Keras Selepas Memasukkan Gambar Penyelamat &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Anda boleh melihat syot kilat, sebagai contoh

```
snapper -c etc list
```

Lihat perubahan fail syot kilat

```
snapper -c etc status 5..6
```

Lihat teks perbezaan tertentu

```
snapper -c etc diff 3..5
```

Pulihkan syot kilat: Contohnya, buat asal semua perubahan selepas syot kilat 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Dayakan Kegigihan Log

Mendayakan kegigihan log di bawah sistem penyelamat memerlukan anda membuat direktori yang sepadan secara manual dan melakukan beberapa langkah tambahan, kerana anda mungkin tidak mempunyai perkhidmatan systemd yang sedang berjalan. Berikut adalah langkah yang boleh anda cuba:

Mula-mula chroot, kemudian

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

But semula ke dalam sistem Ubuntu anda: Selepas membuat perubahan di atas, anda perlu but semula mesin anda secara normal dan ke dalam sistem Ubuntu anda dan bukannya sistem penyelamat.

Dengan cara ini, systemd-journald akan bermula dengan konfigurasi baharu dan mula menyimpan log secara berterusan pada cakera keras.

Perlu diingat bahawa operasi di atas dilakukan pada sistem menyelamat, jadi perubahan tersebut tidak akan berkuat kuasa sehingga sistem dibut semula dan tidak lagi dalam mod menyelamat.

Ini bermakna anda tidak akan segera melihat sebarang perubahan pada log sedia ada yang menjadi berterusan, tetapi semua log yang dijana selepas itu akan berterusan.

Dengan cara ini anda boleh melihat log perkhidmatan ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Nota Mengenai Penyakit Yang Sukar Dan Rumit

### Selesaikan Masalah Pelik: Pelayan Tidak Boleh ssh

Saya menggunakan tindakan github untuk membuat kompilasi automatik dan skrip penggunaan sebelum ini, tetapi mendapati bahawa perkhidmatan penempatan tidak boleh ssh.

Memasuki sistem penyelamat dan melihat log adalah isu kebenaran:

`Missing privilege separation directory: /run/sshd`

Anda boleh membuat direktori ini dengan arahan berikut

```
chown root:root /
systemd-tmpfiles --create
```

Selepas penyiasatan berulang, ia adalah kerana github action Pengguna `uid` daripada tar ialah `1001`

tar Membongkar mestilah jika tiada parameter `--no-same-owner` , ia akan dimampatkan kepada `uid` untuk `1001` pengguna

Akibatnya, rsync akan menukar kumpulan pengguna direktori akar, dan kemudian anda tidak akan dapat log masuk ke ssh selepas dimulakan semula.

Ubah suai skrip penyahmampatan seperti berikut:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```