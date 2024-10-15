# Blogimalli

`i18n/conf.yml`:ssä `use: Blog` tarkoittaa blogimallin käyttöä renderöinnissä.

Blogin artikkelin `markdown`-tiedoston on sisällettävä metatiedot.

元信息必须位于文件的开头，以 `---` 开始并以 `---` 结束，中间的配置信息格式为 `YAML`。

Yhdennäytteistiedoston asetukset ovat seuraavat:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` viittaa sisällön tiivistelmään, joka näytetään blogin indeksisivulla.

`YMAL` ':n avulla | `Syntaksi, voit kirjoittaa monirivisiä yhteenvetoja.

Blogin oikeassa laidassa olevan sisällyslistan konfiguraatio on `TOC`-tiedosto (katso edellinen luku). Vain `TOC`:ssä luetellut artikkelit näkyvät blogin etusivun indeksissä.

Artikkelit, joissa ei ole metatietoja, eivät näy blogin etusivulla, mutta ne voivat olla näkyvissä oikeassa laidassa olevassa sisällyslistassa.

## Tekijän tiedot

Artikkelin metatiedoissa voidaan kirjoittaa tekijän tietoja, kuten:

```yml
author: marlowe
```

Sitten muokkaa lähdekielen hakemistossa olevaa `author.yml`-tiedostoa ja lisää tekijän tiedot, kuten:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`, `url` ja `title` ovat kaikki valinnaisia. Jos `name` ei ole määritetty, käytetään avaimen nimeä (tässä `marlowe`) `name`-arvona.

Katso esimerkkiprojektin [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ja [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Kiinnitetty artikkeli

Jos haluat asettaa artikkelin etusijalle, suorita `i18n.site` ja muokkaa `.i18n/data/blog`-kansiossa olevaa `xxx.yml`-tiedostoa muuttamalla aikaleima negatiiviseksi luvuksi (useat negatiiviset luvut järjestetään suurimmasta pienimpään).