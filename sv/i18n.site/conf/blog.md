# Bloggmall

`i18n/conf.yml` av `use: Blog` betyder att du använder bloggmallen för rendering.

`markdown` -filen i blogginlägget måste konfigurera metainformation.

Metainformation måste finnas i början av filen, som börjar med `---` och slutar med `---` Formatet på konfigurationsinformationen i mitten är `YAML` .

En demofil konfigureras enligt följande:

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

Med hjälp av `YMAL` '|`Syntax, du kan skriva sammanfattningar med flera rader.

Konfigurationen av katalogträdet på bloggens högra sida är också `TOC` filer (se föregående kapitel Endast artiklar listade i `TOC` kommer att visas i bloggens hemsidas index).

Artiklar som inte innehåller metainformation kommer inte att visas på bloggens hemsida, men kan dyka upp i katalogträdet till höger.

Om du behöver fästa artikeln till toppen, kör `i18n.site` och redigera de `xxx.yml` filerna under `.i18n/data/blog` och ändra tidsstämpeln till ett negativt tal (flera negativa tal kommer att sorteras från små till stora i absoluta värden).