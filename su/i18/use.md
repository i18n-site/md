# Pasang Sareng Dianggo

## windows Install Heula git bash

windows , mangga [klik di dieu pikeun ngundeur tur masang `git bash` munggaran](https://git-scm.com/download/win) .

Jalankeun operasi saterusna dina `git bash` .

## Pasang

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konpigurasikeun Token Tarjamah

Didatangan [i18n.site/token](//i18n.site/token) Klik pikeun nyalin token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Jieun `~/.config/i18n.site.yml` , paste eusi disalin kana eta, eusina kieu:

```
token: YOUR_API_TOKEN
```

Salaku [i18n.site/payBill](//i18n.site/payBill) , anjeun kedah ngabeungkeut kartu kiridit kanggo mayar (henteu ngecas deui, halaman wéb bakal otomatis ngirangan biaya dumasar kana pamakean, [tingali halaman utama pikeun harga](/#price) ).

## Ngagunakeun

### Proyék Demo

Mangga tingal proyék demo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) pikeun neuleuman konfigurasi `i18` tarjamahan.

Pamaké di Cina tiasa clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Saatos kloning, lebetkeun diréktori sareng jalankeun `i18` pikeun ngarengsekeun tarjamahan.

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

File demo anu ditarjamahkeun dina diréktori `en` ngan ukur conto sareng tiasa dihapus.

### Jalankeun Tarjamahan

Lebetkeun diréktori sareng ngajalankeun `i18` pikeun narjamahkeun.

Salian tarjamahan, program ogé bakal ngahasilkeun folder `.i18n/data` , mangga tambahkeun kana gudang.

Saatos narjamahkeun file anyar `git add . ` file data anyar bakal dihasilkeun dina diréktori ieu.

## File Konfigurasi

`.i18n/conf.yml` nyaéta file konfigurasi tina alat panarjamahan baris paréntah `i18`

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

Dina file konfigurasi, bawahan `fromTo` :

`en` nyaéta basa sumber, `zh ja ko de fr` nyaéta basa sasaran tarjamahan.

Kode basa tingali [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Contona, upami anjeun hoyong narjamahkeun basa Cina kana basa Inggris, tuliskeun deui baris ieu `zh: en` .

Upami anjeun hoyong narjamahkeun ka sadaya basa anu dirojong, mangga kosongkeun saatos `:` . salaku conto

```
i18n:
  fromTo:
    en:
```

: tiasa ngonpigurasikeun `fromTo` anu béda pikeun subdirektori anu béda /

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

Dina tabel konfigurasi ieu, basa sumber tarjamahan katalog `blog` nyaéta `zh` , sareng basa sumber tarjamahan katalog `blog/your_file_name.md` nyaéta `ja` .

### Malire File

Sacara standar, sadaya file anu dimimitian ku `.md` sareng `.yml` dina diréktori basa sumber bakal ditarjamahkeun.

Upami anjeun hoyong malire sababaraha file sareng henteu narjamahkeunana (sapertos draf anu teu acan réngsé), anjeun tiasa nganggo konfigurasi lapangan `ignore` .

`ignore` ngagunakeun sintaksis anu [globset](https://docs.rs/globset/latest/globset/#syntax) sareng file `.gitignore` .

Contona, `_* ` dina file konfigurasi luhur hartina file dimimitian ku `_` moal ditarjamahkeun.

## Aturan Tarjamahan

### Éditor Tarjamahan Teu Kedah Nambihan Atanapi Mupus Garis

Tarjamahan tiasa diédit. Ngarobah téks aslina tur mesin-narjamahkeun deui, modifikasi manual kana tarjamahan moal overwritten (lamun ayat ieu téks aslina teu acan dirobah).

> [!WARN]
> Baris tina tarjamahan jeung téks aslina kudu saluyu jeung hiji. Nyaéta, ulah nambihan atanapi mupus garis nalika nyusun tarjamahan. Upami teu kitu, éta bakal ngabalukarkeun kabingungan dina cache éditan terjemahan.

Upami aya anu lepat, mangga tingal [FAQ kanggo solusi.](/i18/qa#H1)

### `YAML` Tarjamahan

Alat baris paréntah bakal mendakan sadaya file anu ditungtungan ku `.yml` dina diréktori file basa sumber sareng narjamahkeunana.

* Catet yén sufiks nami file kedah `.yml` (sanés `.yaml` ).

Alatna ngan ukur narjamahkeun nilai kamus dina `.yml` , sanés konci kamus.

Contona `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bakal ditarjamahkeun jadi `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Tarjamahan `YAML` ogé tiasa dirobih sacara manual (tapi ulah nambihan atanapi mupus konci atanapi garis dina tarjamahan).

Dumasar kana `YAML` tarjamahan, anjeun tiasa gampang ngawangun solusi internasional pikeun sababaraha basa program.

## Pamakéan Canggih

### Subdirektori Tarjamahan

Salami `.i18n/conf.yml` dijieun (teu kudu mimitian ti template proyék demo unggal waktu), `i18` bakal dianggo rupa.

Alat baris paréntah bakal mendakan `.i18n/conf.yml` konfigurasi dina sadaya subdirektori sareng narjamahkeunana.

Proyék anu ngagunakeun arsitéktur [monorepo](//monorepo.tools) bisa ngabagi file basa kana subdirektori.

![](https://p.3ti.site/1719910016.avif)

### Diréktori Instalasi Custom

Éta bakal dipasang ka `/usr/local/bin` sacara standar.

Upami `/usr/local/bin` teu gaduh idin nyerat éta bakal dipasang ka `~/.bin` .

Netepkeun variabel lingkungan `TO` bisa nangtukeun diréktori instalasi, contona :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```