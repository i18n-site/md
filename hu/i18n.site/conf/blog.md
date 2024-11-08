# Blog Sablon

`use: Blog` -ből `i18n/conf.yml` a blogsablon használatát jelenti a megjelenítéshez.

A blogbejegyzés `markdown` fájljában be kell állítani a metainformációkat.

A metainformációknak a fájl elején kell lenniük, `---` val kezdődően és `---` gyel végződve. A középső konfigurációs információ formátuma `YAML` .

A demófájl konfigurációja a következő:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` a tartalmi összefoglalót jelöli, amely a blog index oldalán fog megjelenni.

`YMAL` segítségével | `Szintaxis, írhatsz többsoros összefoglalókat.

A blog jobb oldalán található könyvtárfa konfigurációja szintén `TOC` fájl (lásd az `TOC` fejezetet).

A metainformációt nem tartalmazó cikkek nem jelennek meg a blog kezdőlapján, de megjelenhetnek a jobb oldali könyvtárfában.

## Szerzői Információk

A szerzői információk a cikk metainformációiba írhatók, például:

```yml
author: marlowe
```

Ezután szerkessze `author.yml` a forrásnyelvi könyvtárban, és adjon hozzá szerzői információkat, például :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` és `title` nem kötelező. Ha `name` nincs beállítva, a kulcsnév (itt `marlowe` ) `name` ként lesz használva.

Lásd a [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) és [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) demóprojektet

## Rögzített Cikk

Ha a cikk tetejére kell rögzítenie, futtassa `i18n.site` , szerkessze a `xxx.yml` fájlt `.i18n/data/blog` alatt, és módosítsa az időbélyeget negatív számra (több negatív szám a legnagyobbtól a legkisebbig lesz rendezve).