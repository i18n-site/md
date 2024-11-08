# Predloga Bloga

`i18n/conf.yml` od `use: Blog` pomeni uporabo predloge spletnega dnevnika za upodabljanje.

Datoteka `markdown` objave v spletnem dnevniku mora konfigurirati meta informacije.

Meta informacije morajo biti na začetku datoteke, začenši z `---` in končati z `---` Format konfiguracijskih informacij na sredini je `YAML` .

Konfiguracija predstavitvene datoteke je naslednja:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` označuje povzetek vsebine, ki bo prikazan na indeksni strani bloga.

S pomočjo `YMAL` ' | `Sintaksa, lahko pišete večvrstične povzetke.

Konfiguracija drevesa imenikov na desni strani bloga je prav tako `TOC` datotek (glejte prejšnje poglavje). V indeksu domače strani bloga bodo prikazani samo članki, navedeni v `TOC` .

Članki, ki ne vsebujejo metainformacij, ne bodo prikazani na domači strani bloga, lahko pa se prikažejo v drevesu imenikov na desni.

## Podatki O Avtorju

Podatke o avtorju lahko zapišete v metainformacije članka, kot so:

```yml
author: marlowe
```

Nato uredite `author.yml` v imeniku izvornega jezika in dodajte podatke o avtorju, kot je :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` in `title` so neobvezne. Če `name` ni nastavljeno, bo ime ključa (tukaj `marlowe` ) uporabljeno kot `name` .

Oglejte si predstavitveni projekt [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) in [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pripet Članek

Če morate članek pripeti na vrh, zaženite `i18n.site` in uredite `xxx.yml` datoteki pod `.i18n/data/blog` ter spremenite časovni žig na negativno število (več negativnih števil bo razvrščenih od največjega do najmanjšega).