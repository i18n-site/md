# Projektversion

Ta demoprojektet som ett exempel:

`en/demo2/v` är det aktuella versionsnumret för projektet, som kommer att visas till höger om projektnamnet i sidofältskonturen.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Här `en/` är språkkoden som motsvarar källspråket `.i18n/conf.yml` .

Om ditt källspråk inte är engelska, bör filen `v` placeras i projektkatalogen för ditt källspråk. 

Möjligheten att bläddra i historiska versioner av dokument är under utveckling.

Det rekommenderas att endast ändra versionsnumret för dokumentet när du släpper större uppdateringar (som `v1` , `v2` ) för att undvika att sidorna som indexeras av sökmotorer blir röriga på grund av för många versionsnummer.

## Använd Tomma `v` -Filer För Att Dela Upp Filindex För Olika Projekt

I demoprojektet, `en/demo2/v` , kan du också se att innehållet i katalogerna `en/blog` och `en/demo1` är tomma `v` filer.

Empty `v` kommer inte att visas i sidofältskonturen, men så länge filen `v` existerar kommer ett oberoende index att genereras för filerna i katalogen och underkatalogerna.

Genom att dela upp indexen för olika projekt kan du undvika långsam åtkomst orsakad av att ladda indexet för alla filer på hela webbplatsen samtidigt.

Till exempel, i demoprojektet [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) motsvarande indexfil `blog` :

