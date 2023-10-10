<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generator situs statik multi-basa, otomatis bisa narjamahkeun Markdown kana [leuwih ti saratus basa béda](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sababaraha urang panginten hoyong naroskeun, ayeuna yén browser ngagaduhan fungsi tarjamahan anu diwangun, naha henteu kedah ngainternasionalkeun halaman wéb?

Abdi hoyong disebutkeun yen **ngan ku internationalizing sakabéh situs urang tiasa ngarojong multi-lingual dina loka pilarian téks lengkep tur optimasi search engine** .

## Runtuyan

Alkitab · Kajadian :

> Jaman baheula, nalika basa hiji, umat manusa ngawangun munara nepi ka langit, hiji portal ka domain Allah, proclaiming kakuatan umat manusa.
>
> Allah nyatakeun, "Lalaki ngahiji salaku hiji suku, kalawan basa dibagikeun, sarta munara ieu ngan hiji prolog. Ayeuna aranjeunna ngahontal kahayang maranéhanana, sarta euweuh reverence bakal tetep."
>
> Ku kituna, Allah lungsur, scattering jalma ka béda sudut, make basa béda.
>
> Ti harita, komunikasi manusa jadi nangtang, sengketa teu aya tungtungna, teu aya deui munara nu noel ka langit.

Novel fiksi ilmiah &quot;Tilu Badan&quot; (lafal Basa Cina: `3Ti` ) ngafiksasikeun peradaban alien anu komunikasi ngaliwatan gelombang éléktromagnétik, teu aya halangan basa, sareng makmur sacara téknologi.

Mugi-mugi tiasa nyiptakeun alat anu tiasa ngajantenkeun jalma-jalma di bumi janten sapertos jalma tilu awak, komunikasi tanpa kabeungkeut ku basa, sareng ngahijikeun deui sakumna umat manusa.

## Tutorial

## Fungsi Bubuka

### Tetep Format Markdown

### Robah Tarjamahan

Saatos ngarobih tarjamahan, anjeun kedah ngajalankeun deui `./i18n.sh` pikeun ngapdet cache.

### Catetan Tarjamahan

Koméntar tarjamahan kedah nunjukkeun basa saatos \```, sapertos ` ```rust` .

Ayeuna ngadukung tarjamahan koméntar pikeun karat, c, cpp, java, js, kopi, python, sareng bash.

Édit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) pikeun nambahkeun dukungan tarjamahan pikeun koméntar dina sababaraha basa.

### Konpigurasikeun Proxy

Nyetél variabel lingkungan di handap ieu ngamungkinkeun Google Translate API nelepon ngaliwatan proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variabel Embedding

```
test: 测试变量<br 0>嵌入
```

### Kosongkeun Cache

```bash
rm -rf .i18n/.cache
```
