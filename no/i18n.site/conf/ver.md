# Prosjektversjon

Ta demoprosjektet som et eksempel:

`en/demo2/v` er den nåværende versjonsnummeret for prosjektet, og det vises til høyre for prosjektnavnet i sidekolonnens disposisjon.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Her er `en/` språkkoden som tilsvarer oversettelsens kildespråk, som er konfigurert i `.i18n/conf.yml`.

Hvis ditt kildespråk ikke er engelsk, bør `v`-filen plasseres i katalogen for ditt kildespråk.

Utviklingen av funksjonen for å bla gjennom dokumentets historiske versjoner er ongoing.

Det anbefales å kun endre dokumentets versjonsnummer ved store oppdateringer (som `v1`, `v2`) for å unngå at for mange versjonsnumre fører til rot i søkemotorens indekser.

## Bruk tomme `v`-filer for å dele opp filindekser for forskjellige prosjekter

I demoprosjektet, i tillegg til `en/demo2/v`, kan du også se at det er tomme `v`-filer i `en/blog` og `en/demo1`-katalogene.

En tom `v` vil ikke vises i sidekolonnens disposisjon, men så lenge en `v`-fil eksisterer, vil det genereres en eigen indeks for katalogen og dens underkataloger.

Ved å dele opp indekser for forskjellige prosjekter, kan man unngå treg tilgang som skyldes lasting av alle nettstedets filindekser på én gang.

For eksempel er indeksfilen som tilsvarer `blog` i demoprosjektet [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)