# .i18n/conf.yml

Profilen for `i18n.site` er `.i18n/conf.yml`.

Bortset fra indstillingerne [`i18`](/i18) , `ignore:` og `i18n:` , er konfigurationsfilen som følger:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Blandt dem betyder `upload` til `ext:`-konfigurationselementet, at kun `.md`-filer vil blive uploadet ved udgivelse.

## Top Navigation nav

`nav:`-konfigurationerne svarer til navigationsmenuen øverst på startsiden.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Blandt dem svarer `i18n: home` til `home: Home` i `en/i18n.yml`.

`en/i18n.yml` vil blive oversat til flere sprog, såsom `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Når oversættelsen er fuldført, kan du ændre værdien af oversættelsesfilen `yml`, men du må ikke tilføje eller slette nøglerne i oversættelsesfilen `yml`.

### `use: Toc`, Enkelt Fil Skabelon (Med Omrids)

`nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyder gengivelse ved hjælp af en `Toc`-skabelon, hvilket er gengivelse af en enkelt `Markdown`-skabelon.

`TOC` er forkortelsen af `Table of Contents`. Når denne skabelon gengives, vil omridset af denne `Markdown`-fil blive vist i sidebjælken.

`url:` repræsenterer filstien til `Markdown` (`/` svarer til roden `/README.md`, dette filnavn skal have et stort præfiks og et lille suffiks).

### `use: Md`, Enkelt Fil Skabelon (Ingen Kontur)

`Md`-skabelonen og `Toc`-skabelonen er den samme, og begge bruges til at gengive en enkelt `Markdown`-fil. Men `Md`-skabelonen viser ikke omridset i sidebjælken.

Du kan ændre `use: Toc` i ovenstående konfiguration til `use: Md`, køre `i18n.site` i `md`-mappen igen, og derefter besøge udviklingseksempel-URL'en for at observere ændringerne på hjemmesiden.

### Standardindlæsning Uden Konfigurationssti

Hvis der tilgås en bestemt sti, og dens stipræfiks ikke er konfigureret i `nav:` , vil den tilsvarende `Markdown`-fil blive indlæst som standard og vist ved hjælp af `Md`-skabelonen.

For eksempel, hvis `/test` tilgås, og `nav:` ikke er konfigureret til denne sti, og sidesproget er engelsk (kode `en`), vil `/en/test.md` blive indlæst som standard og vist ved hjælp af skabelon `Md`.

Hvis `/en/test.md` denne fil ikke eksisterer, vil standardsiden `404` blive vist.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, Multi-Fil Skabelon

I konfigurationsfilen:

```
  - i18n: blog
    use: Doc
```

Angiver brug af `Doc` til skabelongengivelse.

`Doc`-skabelonen understøtter integration af flere `Markdown`-filer for at generere dokumentkonturer til enkelte eller flere projekter.

#### Enkelt Projekt (Flere Filer)

Ovenstående `blog` er enkeltelementtilstanden `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Når url Er Tom, Har Den Som Standard Værdien i18n

Hvis `url` ikke er skrevet, er `url` som standard værdien af `i18n`. Denne regel gælder også for andre skabeloner.

Ovenstående skrivemetode svarer til `url: blog`, og dens tilsvarende fil er `en/blog/TOC`.

#### Flere Projekter

Konfigurationen af `i18n:doc` i `.i18n/conf.yml` er multi-projekttilstand.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Her betyder `menu: NB demo1,demo2`, at bruge `NB`-skabelonen til at gengive rullemenuen.

`NB`, som er forkortelsen af `Name Brief`, betyder, at rullemenuen kan vise projektets navn og slogan.

`NB` efterfølges af parameteren `demo1,demo2`, der sendes til den.
Bemærk: **Der må ikke være mellemrum** før og efter kommaet `,` i `demo1,demo2`.

Den tilsvarende mappeindeksfil for ovenstående parametre er:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Indholdsfortegnelse Indeks

`i18n.site` vil udføre `js`-plugin `.i18n/hook/after.tran/TOC.js` i demo-lageret for at læse indeksfilen med `doc`-mapper, der svarer til `TOC`-skabelonkonfigurationen, for at generere `json`-biblioteksoversigten.

Hvis du bruger `doc`-skabelonen, skal du have dette plugin.

Hvis du initialiserer projekt `i18n.site` fra en tom mappe, skal du huske at kopiere demoprojektets `.i18n` til dit bibliotek.

`Doc`-skabelonen vil gengive indholdsfortegnelsen baseret på den genererede `json`.

##### Detaljeret Indholdsforklaring

`en/blog/TOC` Indholdet er som følger:

```
README.md

news/README.md
  news/begin.md
```

##### Brug Indrykning Til At Angive Niveauer

`README.md` i første række af `en/blog/TOC` svarer til `i18n.site` på billedet nedenfor, som er projektets navn.

De næste to linjer er som vist på skærmbilledet nedenfor.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` svarer til `News`,
`news/begin.md` svarer til `Our Product is Online !`

`TOC`-filer er indrykket for at angive det hierarkiske forhold i omridset og understøtter indrykning på flere niveauer.

##### Forældreniveauet Skriver Kun Titlen, Ikke Indholdet

Når der er flere niveauer af indrykning, skriver det overordnede niveau kun titlen og ikke indholdet. Ellers vil typografien blive rodet.

##### Projekt README.md

Indhold kan skrives i `README.md`, såsom `en/demo2/README.md`.

Bemærk, at indholdet af denne fil ikke viser en indholdsfortegnelse, så det anbefales at begrænse længden og skrive en kort introduktion.

###### Projektslogan

Du kan se `Your Project slogan` under `Deme Two` i rullemenuen og katalogets projektnavn.

![](https://p.3ti.site/1721276842.avif)

Dette svarer til den første række i `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Indholdet efter det første kolon `:` i titlen på første niveau af projekt `README.md` vil blive betragtet som projektets slogan.

Brugere fra Kina, Japan og Korea, bemærk venligst, at du skal bruge halv-bredde kolon `:` i stedet for fuld bredde kolon.

##### Hvordan Flyttes TOC I Bulk?

`TOC`-filer skal placeres i kildesprogets bibliotek.

For eksempel, hvis kildesproget er kinesisk, så er `TOC` ovenfor `zh/blog/TOC`.

Hvis kildesproget ændres, skal du batchflytte `TOC`-filerne på et bestemt sprog i projektet til et andet sprog.

Du kan henvise til følgende kommandoer:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Rediger venligst `en/` og `zh/` i ovenstående kommando til din sprogkode.