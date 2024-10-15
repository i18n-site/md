# Penjelasan Mendetail Tentang Parameter Baris Perintah

## `-p` File

`-p` atau `--purge` akan menghapus file yang ada di setiap direktori terjemahan tetapi tidak ada di direktori bahasa sumber.

Karena saat menulis dokumen, nama file Markdown sering disesuaikan, yang menyebabkan banyak file lama dan terbengkalai di direktori terjemahan.

Gunakan parameter ini untuk membersihkan file yang harus dihapus di direktori bahasa lain.

## `-d` Menentukan Direktori Terjemahan

Direktori yang diterjemahkan secara default adalah direktori tempat file saat ini berada.

`-d` atau `--workdir` dapat menentukan direktori terjemahan, seperti:

```
i18 -d ~/i18n/md
```

## `-h` Lihat Bantuan

`-h` atau `--help` untuk melihat bantuan baris perintah.