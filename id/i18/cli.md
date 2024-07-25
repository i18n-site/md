# Penjelasan Mendetail Tentang Parameter Baris Perintah

## `-P` Bersihkan File

`-p` Atau `--purge` akan membersihkan file yang ada di setiap direktori terjemahan tetapi tidak ada di direktori bahasa sumber.

Karena saat menulis dokumen, nama file Markdown sering disesuaikan sehingga mengakibatkan banyak file lama dan terbengkalai di direktori terjemahan.

Gunakan parameter ini untuk membersihkan file yang harus dihapus di direktori bahasa lain.

## `-D` Tentukan Direktori Terjemahan

Direktori yang diterjemahkan secara default adalah direktori tempat file saat ini berada.

`-d` Atau `--workdir` dapat menentukan direktori terjemahan, seperti:

```
i18 -d ~/i18n/md
```

## `-H` Lihat Bantuan

`-h` Atau `--help` dapat melihat bantuan baris perintah.