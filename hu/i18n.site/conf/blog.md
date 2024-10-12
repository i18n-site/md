# Blog Sablon

`use: Blog` -ből `i18n/conf.yml` a blogsablon használatát jelenti a megjelenítéshez.

A blogbejegyzés `markdown` fájljának metainformációkat kell konfigurálnia.

A metainformációknak a fájl elején kell lenniük, `---` val kezdődően és `---` gyel végződve. A középső konfigurációs információ formátuma `YAML` .

A demófájl a következőképpen van konfigurálva:

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

`YMAL` segítségével|`Szintaxis, írhatsz többsoros összefoglalókat.

A blog jobb oldalán található könyvtárfa konfigurációja szintén `TOC` fájl (lásd az `TOC` fejezetet).

A metainformációt nem tartalmazó cikkek nem jelennek meg a blog kezdőlapján, de megjelenhetnek a jobb oldali könyvtárfában.

Ha a cikk tetejére kell rögzítenie, futtassa `i18n.site` , szerkessze a `xxx.yml` fájlt `.i18n/data/blog` alatt, és módosítsa az időbélyeget negatív számra (több negatív számot a rendszer kicsiről nagyra rendezi abszolút értékben).