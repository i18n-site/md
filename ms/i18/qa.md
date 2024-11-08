# Soalan Lazim

## Menambah Atau Memadam Baris Terjemahan, Mengakibatkan Kekeliruan Dalam Terjemahan

> [!WARN]
> Ingat, **bilangan baris dalam terjemahan mesti sepadan dengan baris dalam teks asal** .
> Maksudnya, apabila melaraskan terjemahan secara manual, **jangan tambah atau padam baris terjemahan** , jika tidak, hubungan pemetaan antara terjemahan dan teks asal akan bercelaru.

Jika anda secara tidak sengaja menambah atau memadam baris, menyebabkan kekeliruan, sila pulihkan terjemahan kepada versi sebelum pengubahsuaian, jalankan `i18` terjemahan sekali lagi dan cache semula pemetaan yang betul.

Pemetaan antara terjemahan dan teks asal terikat pada token Cipta token baharu dalam [i18n.site/token](//i18n.site/token) padam `.i18h/hash` , dan terjemah semula untuk mengosongkan pemetaan yang mengelirukan (tetapi ini akan menyebabkan semua pelarasan manual pada terjemahan hilang).

## `YAML` : Bagaimana Untuk Mengelakkan Pautan `HTML` Ditukar Kepada `Markdown`

Nilai `YAML` dianggap sebagai `MarkDown` untuk terjemahan.

Kadangkala penukaran daripada `HTML` → `MarkDown` bukanlah seperti yang kita mahu, seperti `<a href="/">Home</a>` ditukar kepada `[Home](/)` .

Menambah sebarang atribut selain `href` pada teg `a` , seperti `<a class="A" href="/">Home</a>` , boleh mengelakkan penukaran ini.

## `./i18n/hash` Konflik Fail Di Bawah

Padamkan fail yang bercanggah dan jalankan semula `i18` terjemahan.