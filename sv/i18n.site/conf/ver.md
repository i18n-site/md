# Projektversion

Ta demoprojektet som ett exempel:

`en/demo2/v` är det aktuella versionsnumret för projektet, som kommer att visas till höger om projektnamnet i sidofältskonturen.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Här är `en/` språkkoden som motsvarar översättningens källspråk som konfigurerats av `.i18n/conf.yml` .

Om ditt källspråk inte är engelska, bör `v` -filen placeras i projektkatalogen för ditt källspråk.

Möjligheten att bläddra i historiska versioner av dokument är under utveckling.

Det rekommenderas att endast ändra versionsnumret för dokumentet när större uppdateringar släpps (som `v1` , `v2` ) för att undvika att för många versionsnummer orsakar röran på sidorna som indexeras av sökmotorer.

## Använd Tomma `v` Filer För Att Dela Upp Filindexen För Olika Projekt

I demoprojektet kan du förutom `en/demo2/v` också se att det finns `v` tomma filer i katalogerna `en/blog` och `en/demo1` .

En tom `v` kommer inte att visas i sidofältskonturen, men så länge det finns en `v` -fil kommer ett oberoende index att genereras för filerna i katalogen och underkatalogerna.

Genom att dela upp indexen för olika projekt kan du undvika långsam åtkomst orsakad av att ladda indexet för alla filer på hela webbplatsen samtidigt.

Till exempel är indexfilen som motsvarar `blog` i demoprojektet [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :