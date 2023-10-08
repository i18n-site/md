# I18N.SITE · Dokumén Tanpa Wates<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, generator situs statik nu ngarojong tarjamah otomatis kana [133 basa béda](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

Sababaraha urang panginten hoyong naroskeun, ayeuna yén browser ngagaduhan fungsi tarjamahan anu diwangun, naha henteu kedah ngainternasionalkeun halaman wéb?

Abdi hoyong disebutkeun yen **ngan ku internationalizing sakabéh situs urang tiasa ngarojong multi-lingual dina loka pilarian téks lengkep tur optimasi search engine** .

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
