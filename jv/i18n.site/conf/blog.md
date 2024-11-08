# Cithakan Blog

`i18n/conf.yml` saka `use: Blog` tegese nggunakake template blog kanggo rendering.

File `markdown` saka kiriman blog kudu ngatur informasi meta.

Informasi meta kudu ana ing wiwitan file, diwiwiti kanthi `---` lan diakhiri karo `---` Format informasi konfigurasi ing tengah yaiku `YAML` .

Konfigurasi file demo kaya ing ngisor iki:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` nuduhake ringkesan isi, sing bakal ditampilake ing kaca indeks blog.

Kanthi bantuan saka `YMAL` ' | `Syntax, sampeyan bisa nulis ringkesan multi-baris.

Konfigurasi wit direktori ing sisih tengen blog uga `TOC` file (ndeleng bab sadurunge Mung artikel sing kadhaptar ing `TOC` bakal katon ing indeks homepage blog).

Artikel sing ora ngemot informasi meta ora bakal katon ing homepage blog, nanging bisa katon ing wit direktori ing sisih tengen.

## Informasi Penulis

Informasi pangarang bisa ditulis ing informasi meta artikel, kayata:

```yml
author: marlowe
```

Banjur sunting `author.yml` ing direktori basa sumber lan tambahake informasi pangarang, kayata :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` lan `title` kabeh opsional. Yen `name` ora disetel, jeneng kunci (kene `marlowe` ) bakal digunakake minangka `name` .

Deleng proyek demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) lan [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artikel Sing Disematake

Yen sampeyan perlu masang artikel menyang ndhuwur, bukak `i18n.site` lan sunting `xxx.yml` file ing ngisor iki `.i18n/data/blog` , lan ganti stempel wektu dadi nomer negatif (kaping pirang-pirang nomer negatif bakal diurutake saka paling gedhe nganti paling cilik).