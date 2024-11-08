# Blogimalli

`i18n/conf.yml` tarkoittaa `use: Blog` käyttöä renderöimiseen.

Blogiviestin `markdown` tiedoston on määritettävä metatiedot.

Metatietojen tulee olla tiedoston alussa, alkaen `---` sta ja päättyen `---` een. Keskellä olevien asetustietojen muoto on `YAML` .

Demotiedoston kokoonpano on seuraava:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ilmaisee sisällön yhteenvedon, joka näytetään blogin hakemistosivulla.

`YMAL` ':n avulla | `Syntaksi, voit kirjoittaa monirivisiä yhteenvetoja.

Blogin oikealla puolella olevan hakemistopuun konfiguraatio on myös `TOC` tiedostoa (katso edellinen luku Vain kohdassa `TOC` luetellut artikkelit näkyvät blogin etusivun hakemistossa).

Artikkelit, jotka eivät sisällä metatietoja, eivät näy blogin etusivulla, mutta voivat näkyä oikealla olevassa hakemistopuussa.

## Tekijän Tiedot

Tekijätiedot voidaan kirjoittaa artikkelin metatietoihin, kuten:

```yml
author: marlowe
```

Muokkaa sitten `author.yml` lähdekielen hakemistossa ja lisää tekijätiedot, kuten :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ja `title` ovat kaikki valinnaisia. Jos `name` ei ole asetettu, avaimen nimeä (tässä `marlowe` ) käytetään `name` :nä.

Katso demoprojekti [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ja [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Kiinnitetty Artikkeli

Jos haluat kiinnittää artikkelin alkuun, suorita `i18n.site` ja muokkaa `xxx.yml` tiedostoa arvon `.i18n/data/blog` alapuolella ja muuta aikaleima negatiiviseksi numeroksi (useita negatiivisia lukuja lajitellaan suurimmasta pienimpään).