<h1 style="justify-content:space-between">3Ti.Site · Pikir tanpa wates<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generator situs statik multi-basa, otomatis bisa narjamahkeun Markdown kana [leuwih ti saratus basa béda](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sababaraha urang panginten hoyong naroskeun, ayeuna yén browser ngagaduhan fungsi tarjamahan anu diwangun, naha henteu kedah ngainternasionalkeun halaman wéb?

Abdi hoyong disebutkeun yen **ngan ku internationalizing sakabéh situs urang tiasa ngarojong multi-lingual dina loka pilarian téks lengkep tur optimasi search engine** .

## Runtuyan

"Alkitab·Kajadian":

> Baheula mah teu ngabedakeun basa. Aranjeunna dilahirkeun kalayan kareueus sareng hoyong ngawangun munara jangkung kalayan puncakna dugi ka langit.
> <blockquote><p>Allah teu ridho kana kaangkuhan manusa, ku kituna Mantenna paburencay sakabeh mahluk di sagala rupa tempat, teu bisa ngarti.</p></blockquote>
> <blockquote><p>Ti saprak éta, manusa hésé pikeun komunikasi, pasea terus-terusan, sareng teu aya Menara Babel di dunya.</p></blockquote>

Novel fiksi ilmiah &quot;Tilu Badan&quot; (lafal Basa Cina: `3Ti` ) ngafiksasikeun peradaban alien anu komunikasi ngaliwatan gelombang éléktromagnétik, teu aya halangan basa, sareng makmur sacara téknologi.

Mugi-mugi ku bantosan ieu alat, jalmi-jalmi di bumi janten sapertos jalma tilu raga, komunikasi moal kawatesan ku basa, sareng sadaya umat manusa bakal ngahiji deui.

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
