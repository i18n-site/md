# Instal Lan Nggunakake

## windows Pisanan Nginstal git bash

windows , mangga [klik ing kene kanggo ngundhuh lan nginstal dhisik `git bash`](https://git-scm.com/download/win)

Jalanake operasi sakteruse ing `git bash`

## Instal

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfigurasi Token Terjemahan

Dolan maring [i18n.site/token](//i18n.site/token) Klik kanggo nyalin token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Gawe `~/.config/i18n.site.yml` tempel konten sing disalin menyang, isine kaya ing ngisor iki:

```
token: YOUR_API_TOKEN
```

Kajaba iku, sampeyan [i18n.site/payBill](//i18n.site/payBill) ngiket kertu kredit kanggo mbayar (ora perlu mbayar ulang, situs web bakal kanthi otomatis nyuda biaya miturut panggunaan, [ndeleng homepage kanggo rega](/#price) ).

## Nggunakake

### Proyek Demo

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) deleng proyek demo kanggo sinau konfigurasi terjemahan `i18`

Pangguna ing China bisa kloning [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Sawise kloning, ketik direktori lan mbukak `i18`

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

Direktori `en` ngemot file demo sing diterjemahake, sing mung minangka conto lan bisa dibusak.

### Run Terjemahan

Ketik direktori lan `i18` kanggo nerjemahake.

### Tambah File Menyang Repositori

Saliyane terjemahan, program kasebut uga bakal ngasilake file ing ngisor iki, mangga ditambahake menyang repositori.

```
.i18n/hash
.i18n/cache/.gitignore
```

Ing antarane : isine `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Iki tegese nglirwakake kabeh file ing `.i18n/cache/` (kajaba `.i18n/cache/.gitignore` ).

Yen piranti lunak kontrol versi sampeyan ora `git`

## File Konfigurasi

`.i18n/conf.yml` Iku file konfigurasi saka alat terjemahan baris `i18`

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

Ing file konfigurasi, bawahan saka `fromTo`

`en` minangka basa sumber, `zh ja ko de fr` minangka basa sasaran terjemahan.

Kode basa ndeleng [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Contone, yen sampeyan pengin nerjemahake Cina menyang Inggris, tulis maneh baris iki `zh: en`

Yen sampeyan pengin nerjemahake menyang kabeh basa sing didhukung, kosongake sawise `:` . Tuladhane

```
i18n:
  fromTo:
    en:
```

### Nglirwakake File

Kanthi gawan, kabeh file sing diwiwiti karo `.md` lan `.yml` ing direktori basa sumber bakal diterjemahake.

Yen sampeyan pengin nglirwakake file tartamtu lan ora nerjemahake (kayata draf sing durung rampung), sampeyan bisa nggunakake konfigurasi lapangan `ignore` .

`ignore` Migunakake sintaks sing padha karo `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Contone, ing file konfigurasi ing ndhuwur `_* ` file sing diwiwiti kanthi `_` ora bakal diterjemahake.

## Aturan Terjemahan

### Editor Terjemahan Ngirim Ora Nambah Utawa Mbusak Baris

Terjemahan bisa diowahi. Ngowahi teks asli lan mesin-terjemahake maneh, modifikasi manual kanggo terjemahan ora bakal ditimpa (yen paragraf teks asli iki durung diowahi).

Nanging elinga yen baris terjemahan lan teks asli kudu cocog siji-siji. Tegese, aja nambah utawa mbusak baris nalika nyusun terjemahan. Yen ora, bakal nyebabake kebingungan ing cache panyuntingan terjemahan.

Yen ana masalah, deleng [FAQ kanggo solusi.](/i18/qa#H1)

### `Yaml`

Alat baris perintah bakal nemokake kabeh file sing diakhiri karo `.yml` ing direktori file basa sumber lan nerjemahake.

* Elinga yen suffix jeneng berkas kudu `.yml` (ora `.yaml` ).

Alat kasebut mung nerjemahake nilai kamus ing `.yml` , dudu tombol kamus.

Tuladhane `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bakal diterjemahake dadi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Terjemahan saka `YAML` uga bisa diowahi kanthi manual (nanging aja nambah utawa mbusak tombol utawa baris ing terjemahan).

Adhedhasar Terjemahan `YAML` , sampeyan bisa kanthi gampang nggawe solusi internasional kanggo macem-macem basa pemrograman.

## Panggunaan Majeng

### Subdirektori Terjemahan

Anggere sampeyan nggawe `.i18n/conf.yml` (ora perlu miwiti saka template proyek demo saben wektu), `i18` bakal bisa digunakake kanthi becik.

Alat baris perintah bakal nemokake konfigurasi `.i18n/conf.yml` ing kabeh subdirektori lan nerjemahake.

Proyek sing nggunakake arsitektur [monorepo](//monorepo.tools) bisa misahake file basa dadi subdirektori.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Direktori Instalasi Khusus

Iku bakal diinstal kanggo `/usr/local/bin`

Yen `/usr/local/bin` ora duwe ijin nulis bakal diinstal menyang `~/.bin` .

Setel variabel lingkungan `TO` Sampeyan bisa nemtokake direktori instalasi, contone :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
