# Pasang Sareng Dianggo

## windows Mimiti Masang git bash

windows , mangga [klik di dieu pikeun ngundeur tur masangkeunana `git bash`](https://git-scm.com/download/win)

Jalankeun operasi saterusna dina `git bash`

## Masang

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konpigurasikeun Token Tarjamah

Didatangan [i18n.site/token](//i18n.site/token) Klik pikeun nyalin token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Jieun `~/.config/i18n.site.yml` tempelkeun eusi disalin kana eta, eusina kieu:

```
token: YOUR_API_TOKEN
```

Sajaba ti éta, anjeun [i18n.site/payBill](//i18n.site/payBill) meungkeut kartu kiridit keur mayar (euweuh ngecas diperlukeun, ramatloka bakal otomatis ngurangan waragad nurutkeun pamakéan, [tingali homepage pikeun harga](/#price) ).

## Ngagunakeun

### Proyék Demo

Mangga tingal proyék demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) neuleuman konfigurasi tarjamahan `i18`

Pamaké di Cina tiasa clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Saatos kloning, lebetkeun diréktori sareng jalankeun `i18`

### Struktur Diréktori

Struktur diréktori gudang template nyaéta kieu

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Diréktori `en` ngandung file demo anu ditarjamahkeun, anu ngan ukur conto sareng tiasa dihapus.

### Jalankeun Tarjamahan

Lebetkeun diréktori sareng jalankeun `i18`

### Tambahkeun File Kana Gudang

Salian tarjamahan, program ogé bakal ngahasilkeun file di handap ieu, mangga tambahkeun kana gudang.

```
.i18n/hash
.i18n/cache/.gitignore
```

Di : eusina `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Ieu ngandung harti malire sakabéh file dina `.i18n/cache/` (iwal `.i18n/cache/.gitignore` ).

Upami software kontrol vérsi anjeun henteu `git`

## File Konfigurasi

`.i18n/conf.yml` Ieu mangrupikeun file konfigurasi tina alat tarjamahan baris `i18`

eusina kieu:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Basa Sumber &

Dina file konfigurasi, bawahan tina `fromTo`

`en` nyaéta basa sumber, `zh ja ko de fr` nyaéta basa sasaran tarjamahan.

Kode basa tingali [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Contona, upami anjeun hoyong narjamahkeun basa Cina kana basa Inggris, tuliskeun deui baris ieu `zh: en`

Upami anjeun hoyong narjamahkeun kana sadaya basa anu dirojong, punten kosongkeun saatos `:` salaku conto

```
i18n:
  fromTo:
    en:
```

### Malire File

Sacara standar, sadaya file dimimitian ku `.md` jeung `.yml` dina diréktori basa sumber bakal ditarjamahkeun.

Upami anjeun hoyong malire sababaraha file sareng henteu narjamahkeunana (sapertos draf anu teu acan réngsé), anjeun tiasa nganggo konfigurasi widang `ignore` .

`ignore` Maké sintaksis nu sarupa jeung `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Contona, dina file konfigurasi di luhur `_* ` file dimimitian ku `_` moal ditarjamahkeun.

## Aturan Tarjamahan

### Éditor Tarjamahan Teu Kedah Nambihan Atanapi Mupus Garis

Tarjamahan tiasa diédit. Ngarobah téks aslina tur mesin-narjamahkeun deui, modifikasi manual kana tarjamahan moal overwritten (lamun ayat ieu téks aslina teu acan dirobah).

Tapi punten perhatikeun yén baris tarjamahan sareng téks asli kedah saluyu sareng hiji. Nyaéta, ulah nambihan atanapi mupus garis nalika nyusun tarjamahan. Upami teu kitu, éta bakal ngabalukarkeun kabingungan dina cache éditan terjemahan.

Upami aya anu lepat, mangga tingal [FAQ kanggo solusi.](/i18/qa#H1)

### `Yaml`

Alat baris paréntah bakal mendakan sadaya file anu ditungtungan ku `.yml` dina diréktori file basa sumber sareng narjamahkeunana.

* Catet yén sufiks nami file kedah janten `.yml` (sanés `.yaml` ).

Alatna ngan ukur narjamahkeun nilai kamus dina `.yml`

salaku conto `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bakal ditarjamahkeun jadi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Tarjamahan tina `YAML`

Dumasar kana `YAML` Tarjamahan, anjeun tiasa kalayan gampang ngawangun solusi internasional pikeun sababaraha basa pamrograman.

## Pamakéan Canggih

### Subdirektori Tarjamahan

Salami anjeun nyiptakeun `.i18n/conf.yml` (teu kedah ngamimitian tina template proyék demo unggal waktos), `i18` bakal tiasa dianggo.

Alat baris paréntah bakal mendakan konfigurasi `.i18n/conf.yml` dina sadaya subdirektori sareng narjamahkeunana.

Proyék anu ngagunakeun arsitéktur [monorepo](//monorepo.tools) bisa ngabagi file basa kana subdirektori.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Diréktori Instalasi Custom

Éta bakal dipasang sacara standar `/usr/local/bin`

Lamun `/usr/local/bin` teu boga idin nulis bakal dipasang ka `~/.bin`

Atur variabel lingkungan `TO` Anjeun tiasa nangtukeun diréktori instalasi, contona :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
