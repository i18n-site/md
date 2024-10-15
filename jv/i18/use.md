# Instal Lan Nggunakake

## windows Pisanan Nginstal git bash

windows , mangga [klik ing kene kanggo ngundhuh lan nginstal `git bash` dhisik](https://git-scm.com/download/win) .

Jalanake operasi sakteruse ing `git bash` .

## Instal

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurasi Token Terjemahan

Dolan maring [i18n.site/token](//i18n.site/token) Klik kanggo nyalin token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Nggawe `~/.config/i18n.site.yml` , paste isi sing disalin menyang, isine kaya ing ngisor iki:

```
token: YOUR_API_TOKEN
```

[i18n.site/payBill](//i18n.site/payBill) , sampeyan kudu ngubungake kertu kredit kanggo pambayaran (ora perlu diisi ulang, situs web bakal nyuda biaya kanthi otomatis miturut panggunaan, [deleng homepage kanggo rega](/#price) ).

## Nggunakake

### Proyek Demo

Mangga deleng proyek demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) sinau konfigurasi `i18` terjemahan.

Pangguna ing China bisa kloning [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Sawise kloning, ketik direktori lan mbukak `i18` kanggo ngrampungake terjemahan.

### Struktur Direktori

Struktur direktori gudang cithakan kaya ing ngisor iki

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

File demo sing diterjemahake ing direktori `en` mung minangka conto lan bisa dibusak.

### Run Terjemahan

Ketik direktori lan mbukak `i18` kanggo nerjemahake.

Saliyane terjemahan, program kasebut uga bakal ngasilake folder `.i18n/data` , mangga ditambahake menyang repositori.

Sawise nerjemahake file anyar, file data anyar bakal digawe ing direktori iki Elinga nambah `git add . ` .

## File Konfigurasi

`.i18n/conf.yml` minangka file konfigurasi saka alat terjemahan baris perintah `i18`

Isine kaya ing ngisor iki:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Basa Sumber &

Ing file konfigurasi, subordinate `fromTo` :

`en` minangka basa sumber, `zh ja ko de fr` minangka basa sasaran terjemahan.

Kode basa ndeleng [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Contone, yen sampeyan pengin nerjemahake Cina menyang Inggris, tulis maneh baris iki `zh: en` .

Yen sampeyan pengin nerjemahake menyang kabeh basa sing didhukung, kosongake sawise `:` . contone

```
i18n:
  fromTo:
    en:
```

: bisa ngatur macem-macem `fromTo` kanggo macem-macem subdirektori File /

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Ing tabel konfigurasi iki, basa sumber terjemahan katalog `blog` yaiku `zh` , lan basa sumber terjemahan katalog `blog/your_file_name.md` yaiku `ja` .

### Nglirwakake File

Kanthi gawan, kabeh file sing diwiwiti karo `.md` lan `.yml` ing direktori basa sumber bakal diterjemahake.

Yen sampeyan pengin nglirwakake file tartamtu lan ora nerjemahake (kayata draf sing durung rampung), sampeyan bisa nggunakake konfigurasi lapangan `ignore` .

`ignore` nggunakake sintaks sing [globset](https://docs.rs/globset/latest/globset/#syntax) karo file `.gitignore` .

Contone, `_* ` ing file konfigurasi ndhuwur tegese file sing diwiwiti karo `_` ora bakal diterjemahake.

## Aturan Terjemahan

### Editor Terjemahan Ngirim Ora Nambah Utawa Mbusak Baris

Terjemahan bisa diowahi. Ngowahi teks asli lan mesin-terjemahake maneh, modifikasi manual kanggo terjemahan ora bakal ditimpa (yen paragraf teks asli iki durung diowahi).

Nanging elinga yen baris terjemahan lan teks asli kudu cocog siji-siji. Tegese, aja nambah utawa mbusak baris nalika nyusun terjemahan. Yen ora, bakal nyebabake kebingungan ing cache panyuntingan terjemahan.

Yen ana masalah, deleng [FAQ kanggo solusi.](/i18/qa#H1)

### `YAML` Terjemahan

Alat baris perintah bakal nemokake kabeh file sing diakhiri karo `.yml` ing direktori file basa sumber lan nerjemahake.

* Elinga yen sufiks jeneng berkas kudu `.yml` (ora `.yaml` ).

Alat kasebut mung nerjemahake nilai kamus ing `.yml` , dudu tombol kamus.

Contone `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bakal diterjemahake dadi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Terjemahan `YAML` uga bisa diowahi kanthi manual (nanging aja nambah utawa mbusak tombol utawa garis ing terjemahan).

Adhedhasar `YAML` terjemahan, sampeyan bisa kanthi gampang nggawe solusi internasional kanggo macem-macem basa pamrograman.

## Panggunaan Majeng

### Subdirektori Terjemahan

Anggere `.i18n/conf.yml` digawe (ora perlu kanggo miwiti saka demo project Cithakan saben wektu), `i18` bakal bisa nggoleki.

Alat baris perintah bakal nemokake `.i18n/conf.yml` konfigurasi ing kabeh subdirektori lan nerjemahake.

Proyek sing nggunakake arsitektur [monorepo](//monorepo.tools) bisa misahake file basa dadi subdirektori.

![](https://p.3ti.site/1719910016.avif)

### Direktori Instalasi Khusus

Iku bakal diinstal menyang `/usr/local/bin` minangka standar.

Yen `/usr/local/bin` ora duwe ijin nulis, bakal diinstal menyang `~/.bin` .

Setelan variabel lingkungan `TO` bisa nemtokake direktori instalasi, contone :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```