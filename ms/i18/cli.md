# Penjelasan Terperinci Tentang Parameter Baris Arahan

## `-p` Fail

`-p` atau `--purge` akan mengosongkan fail yang wujud dalam setiap direktori terjemahan tetapi tidak wujud dalam direktori bahasa sumber.

Kerana semasa menulis dokumen, nama fail Markdown sering dilaraskan, yang membawa kepada banyak fail lama dan terbengkalai dalam direktori terjemahan.

Gunakan parameter ini untuk membersihkan fail yang harus dipadamkan dalam direktori bahasa lain.

## `-d` Menentukan Direktori Terjemahan

Direktori yang diterjemahkan menjadi lalai kepada direktori di mana fail semasa berada.

`-d` atau `--workdir` boleh menentukan direktori terjemahan, seperti:

```
i18 -d ~/i18n/md
```

## `-h` Lihat Bantuan

`-h` atau `--help` untuk melihat bantuan baris arahan.