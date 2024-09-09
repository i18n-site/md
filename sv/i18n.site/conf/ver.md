# Projektversion

Ta demoprojektet som ett exempel:

`en/demo2/v` är det aktuella versionsnumret för projektet, som visas till höger om projektets namn i sidofältets disposition.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Här är `en/` språkkoden som motsvarar översättningens källspråk som är konfigurerat i `.i18n/conf.yml`.

Om ditt källspråk inte är engelska, bör `v`-filen placeras i din källspråksprojektkatalog.

Funktionen för att bläddra genom dokumentens historiska versioner håller på att utvecklas.

Det rekommenderas att endast ändra dokumentets versionsnummer vid större uppdateringar (t.ex. `v1`, `v2`) för att undvika att för många versioner skapar en oreda i sökmotorernas index.

## Använd tomma `v`-filer för att dela upp olika projekts filindex

I demoprojektet kan du, förutom `en/demo2/v`, också se att det finns tomma `v`-filer i katalogerna `en/blog` och `en/demo1`.

Tomma `v`-filer kommer inte att visas i sidofältets disposition, men när en `v`-fil finns, kommer ett eget index att genereras för katalogens och dess underkatalogers filer.

Genom att dela upp olika projekts index kan man undvika långsam laddningstid som orsakas av att ladda alla webbplatsens filindex samtidigt.

Till exempel är indexfilen som motsvarar `blog` i demoprojektet [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :