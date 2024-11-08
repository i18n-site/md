# Bloggmall

`i18n/conf.yml` av `use: Blog` betyder att du använder bloggmallen för rendering.

`markdown` -filen i blogginlägget måste konfigurera metainformation.

Metainformation måste finnas i början av filen, som börjar med `---` och slutar med `---` Formatet på konfigurationsinformationen i mitten är `YAML` .

Konfigurationen av en demofil är som följer:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indikerar innehållssammanfattningen, som kommer att visas på bloggens indexsida.

Med hjälp av `YMAL` ' | `Syntax, du kan skriva sammanfattningar med flera rader.

Konfigurationen av katalogträdet på bloggens högra sida är också `TOC` filer (se föregående kapitel Endast artiklar listade i `TOC` kommer att visas i bloggens hemsidas index).

Artiklar som inte innehåller metainformation kommer inte att visas på bloggens hemsida, men kan dyka upp i katalogträdet till höger.

## Författarinformation

Författarinformation kan skrivas i artikelns metainformation, till exempel:

```yml
author: marlowe
```

Redigera sedan `author.yml` i källspråkskatalogen och lägg till författareinformation, som :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` och `title` är alla valfria. Om `name` inte är inställt kommer nyckelnamnet (här `marlowe` ) att användas som `name` .

Se demoprojekt [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) och [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Fäst Artikel

Om du behöver fästa artikeln till toppen, kör `i18n.site` och redigera de `xxx.yml` filerna under `.i18n/data/blog` och ändra tidsstämpeln till ett negativt tal (flera negativa tal kommer att sorteras från största till minsta).