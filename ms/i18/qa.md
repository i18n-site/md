# Masalah Biasa

## Menambah Atau Memadam Baris Terjemahan, Mengakibatkan Kekeliruan Dalam Terjemahan

Ingat, **bilangan baris dalam terjemahan mesti sepadan dengan baris dalam teks asal** .

Maksudnya, apabila melaraskan terjemahan secara manual, **jangan tambah atau padam baris terjemahan** , jika tidak, hubungan pemetaan antara terjemahan dan teks asal akan bercelaru.

Jika anda secara tidak sengaja menambah atau memadam baris, menyebabkan kekeliruan, sila pulihkan terjemahan kepada versi sebelum pengubahsuaian, jalankan terjemahan `i18` dan cache semula pemetaan yang betul.

Pemetaan antara terjemahan dan teks asal terikat pada token Cipta token baharu dalam [i18n.site/token](//i18n.site/token) , padam `.i18h/hash` dan terjemah semula untuk mengosongkan pemetaan yang mengelirukan (tetapi ini akan menyebabkan semua pelarasan manual pada terjemahan hilang).

## `YAML` : Untuk Menghalang `HTML` Pautan Daripada Ditukar Kepada `Markdown`

Nilai `YAML` akan dianggap sebagai `MarkDown` untuk terjemahan.

Kadangkala penukaran bagi `HTML` → `MarkDown` bukan yang kita mahu, seperti `<a href="/">Home</a>` ditukar kepada `[Home](/)` .

Tambahkan sebarang atribut selain daripada `href` pada teg `a` , seperti `<a class="A" href="/">Home</a>` , untuk mengelakkan penukaran ini.

## `./I18n/Hash` Fail Berikut Bercanggah

Padamkan fail yang bercanggah dan jalankan semula Terjemah `i18`
