# Blog Txantiloia

`i18n/conf.yml` `use: Blog` esan nahi du blogaren txantiloia errendatzeko erabiltzea.

Blogaren `markdown` fitxategiak meta informazioa konfiguratu behar du.

Meta-informazioak fitxategiaren hasieran egon behar du, `---` -tik hasi eta `---` z amaituz. Erdian dagoen konfigurazio-informazioaren formatua `YAML` da.

Demo fitxategi baten konfigurazioa honako hau da:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` edukiaren laburpena adierazten du, blogaren aurkibide-orrian bistaratuko dena.

`YMAL` -ren laguntzaz | `Sintaxia, lerro anitzeko laburpenak idatz ditzakezu.

Blogaren eskuineko aldean dagoen direktorio-zuhaitzaren konfigurazioa ere `TOC` fitxategia da (ikus aurreko kapitulua `TOC` zerrendatutako artikuluak soilik agertuko dira blogaren hasierako orrialdearen aurkibidean).

Meta informaziorik ez duten artikuluak ez dira blogaren hasierako orrialdean agertuko, baina eskuineko direktorioen zuhaitzean ager daitezke.

## Egilearen Informazioa

Egilearen informazioa artikuluaren meta informazioan idatz daiteke, hala nola:

```yml
author: marlowe
```

Ondoren, editatu `author.yml` iturburu-hizkuntzaren direktorioan eta gehitu egilearen informazioa, adibidez :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` eta `title` aukerakoak dira. `name` ezartzen ez bada, gakoaren izena (hemen `marlowe` ) `name` gisa erabiliko da.

Ikusi [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) eta [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) demo proiektua

## Artikulu Ainguratua

Artikulua goian ainguratu behar baduzu, exekutatu `i18n.site` eta editatu `.i18n/data/blog` azpian dauden `xxx.yml` fitxategiak, eta aldatu denbora-zigilua zenbaki negatibo batera (zenbaki negatibo anitz ordenatuko dira handienetik txikienera).