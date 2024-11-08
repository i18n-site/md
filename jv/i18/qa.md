# Faq

## Nambah Utawa Mbusak Baris Terjemahan, Nyebabake Kebingungan Ing Terjemahan

> [!WARN]
> Elinga, **jumlah baris ing terjemahan kudu cocog karo garis ing teks asli** .
> Tegese, nalika nyetel terjemahan kanthi manual, **aja nambah utawa mbusak baris terjemahan** , yen ora, hubungan pemetaan antarane terjemahan lan teks asli bakal ora teratur.

Yen sampeyan ora sengaja nambah utawa mbusak baris, nyebabake kebingungan, mulihake terjemahan menyang versi sadurunge modifikasi, bukak terjemahan `i18` maneh, lan cache maneh pemetaan sing bener.

Pemetaan antarane terjemahan lan teks asli kaiket ing token. Gawe token anyar ing [i18n.site/token](//i18n.site/token) mbusak `.i18h/hash` , lan terjemahake maneh kanggo mbusak pemetaan sing mbingungake (nanging iki bakal nyebabake kabeh pangaturan manual kanggo terjemahan bakal ilang).

## `YAML` : Cara Supaya Link `HTML` Diowahi Dadi `Markdown`

Nilai `YAML` dianggep minangka `MarkDown` kanggo terjemahan.

Kadhangkala konversi saka `HTML` → `MarkDown` ora kaya sing dikarepake, kayata `<a href="/">Home</a>` diowahi dadi `[Home](/)` .

Nambahake atribut liyane saka `href` menyang tag `a` , kayata `<a class="A" href="/">Home</a>` , bisa nyegah konversi iki.

## `./i18n/hash` Konflik File Ing Ngisor Iki

Mbusak file konflik lan mbukak maneh `i18` terjemahan.