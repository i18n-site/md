# Prosjektversjon

Ta demoprosjektet som et eksempel:

`en/demo2/v` er det gjeldende versjonsnummeret til prosjektet, som vises til høyre for prosjektnavnet i sidefeltet.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Her `en/` er språkkoden som tilsvarer `.i18n/conf.yml` oversettelseskildespråket.

Hvis kildespråket ditt ikke er engelsk, bør `v` -filen plasseres i prosjektkatalogen til kildespråket ditt. 

Muligheten til å bla gjennom historiske versjoner av dokumenter er under utvikling.

Det anbefales kun å endre versjonsnummeret til dokumentet når du slipper store oppdateringer (som `v1` , `v2` ) for å unngå rot på sidene som er indeksert av søkemotorer på grunn av for mange versjonsnumre.

## Bruk Tomme `v` -Filer for Å Dele Filindekser for Forskjellige Prosjekter

I demoprosjektet, i tillegg `en/demo2/v` , kan du også se at innholdet i `en/blog` og `en/demo1` -katalogene er tomme `v` filer.

Empty `v` vil ikke vises i sidefeltet, men så lenge `v` -filen eksisterer, vil en uavhengig indeks bli generert for filene i katalogen og underkatalogene.

Ved å dele indeksene til forskjellige prosjekter, kan du unngå treg tilgang forårsaket av å laste inn indeksen til alle filene på hele nettstedet samtidig.

For eksempel, i demoprosjektet er [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) tilsvarende indeksfilen : `blog`

