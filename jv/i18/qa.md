# Masalah Umum

## Nambah Utawa Mbusak Baris Terjemahan, Nyebabake Kebingungan Ing Terjemahan

Elinga, **jumlah baris ing terjemahan kudu cocog karo garis ing teks asli** .

Tegese, nalika nyetel terjemahan kanthi manual, **aja nambah utawa mbusak baris terjemahan** , yen ora, hubungan pemetaan antarane terjemahan lan teks asli bakal ora teratur.

Yen sampeyan ora sengaja nambah utawa mbusak baris, nyebabake kebingungan, mulihake terjemahan menyang versi sadurunge modifikasi, bukak terjemahan `i18` , lan cache maneh pemetaan sing bener.

Pemetaan antarane terjemahan lan teks asli kaiket `.i18h/hash` token [i18n.site/token](//i18n.site/token)

## `YAML` : Nyegah `HTML` Saka Link Saka Diowahi Dadi `Markdown`

Nilai saka `YAML` bakal dianggep minangka `MarkDown` kanggo terjemahan.

Kadhangkala konversi saka `HTML` → `MarkDown` ora kaya sing dikarepake, kayata `<a href="/">Home</a>` diowahi dadi `[Home](/)` .

Tambah atribut liyane saka `href` menyang tag `a` , kayata `<a class="A" href="/">Home</a>` , kanggo ngindhari konversi iki.

## `./I18n/Hash` File Ing Ngisor Iki Konflik

Mbusak file sing bertentangan lan mbukak maneh Translate `i18`
