# Prosjektversjon

Ta demoprosjektet som et eksempel:

`en/demo2/v` er det gjeldende versjonsnummeret til prosjektet, som vises til høyre for prosjektnavnet i omrisset av sidefeltet.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Her er `en/` språkkoden som tilsvarer oversettelsens kildespråk konfigurert med `.i18n/conf.yml` .

Hvis kildespråket ditt ikke er engelsk, bør `v` filen plasseres i prosjektkatalogen til kildespråket ditt.

Muligheten til å bla gjennom historiske versjoner av dokumenter er under utvikling.

Det anbefales kun å endre versjonsnummeret til dokumentet når større oppdateringer er utgitt (som `v1` , `v2` ) for å unngå for mange versjonsnumre som forårsaker rot på sidene som er indeksert av søkemotorer.

## Bruk Tomme `v` Filer for Å Dele Filindeksene Til Forskjellige Prosjekter

I demoprosjektet kan du i tillegg til `en/demo2/v` også se at det er tomme `v` filer i `en/blog` og `en/demo1` katalogene.

En tom `v` vil ikke vises i sidefeltets disposisjon, men så lenge det er en `v` fil, vil en uavhengig indeks bli generert for filene i katalogen og underkatalogene.

Ved å dele indeksene til forskjellige prosjekter, kan du unngå treg tilgang forårsaket av å laste inn indeksen til alle filene på hele nettstedet samtidig.

For eksempel er indeksfilen som tilsvarer `blog` i demoprosjektet [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :