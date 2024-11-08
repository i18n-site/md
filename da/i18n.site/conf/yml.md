# .i18n/conf.yml

Konfigurationsfilen for `i18n.site` er `.i18n/conf.yml` og indholdet er som følger :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Blandt dem betyder `upload` til `ext:` konfigurationselement, at kun `.md` vil blive uploadet ved udgivelse.

## Top Navigation nav

`nav:` konfigurationsmuligheder, svarende til navigationsmenuen øverst på hjemmesiden.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Blandt dem svarer `i18n: home` til `home: Home` i `en/i18n.yml` (hvor `en` er kildesproget for projektoversættelsen).

`en/i18n.yml` indhold er den tekst, der vises i navigationsmenuen, som vil blive oversat i henhold til `fromTo` i konfigurationen, for eksempel oversat til `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Når oversættelsen er fuldført, kan du ændre værdien af oversættelse `yml` , men du må ikke tilføje eller slette nøglen til oversættelse `yml` .

### `use: Toc` Til Enkeltdokument Med Omrids

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyder gengivelse ved hjælp af en `Toc` -skabelon, hvilket er gengivelse af en enkelt `Markdown` -skabelon.

`TOC` er forkortelsen af `Table of Contents` Når denne skabelon er gengivet, vil omridset af denne `Markdown` fil blive vist i sidebjælken.

`url:` repræsenterer filstien til `Markdown` ( `/` svarer til rodbiblioteket `/README.md` , dette filnavn kræver et præfiks med store bogstaver og et suffiks med små bogstaver).

### `use: Md` Til Enkeltdokument Uden Kontur

`Md` skabelonen og `Toc` skabelonen er den samme, og begge bruges til at gengive en enkelt `Markdown` -fil. Men `Md` skabelonen viser ikke omridset i sidebjælken.

Du kan ændre `use: Toc` i ovenstående konfiguration til `use: Md` , køre `i18n.site` i `md` -biblioteket igen og derefter besøge udviklingseksempel-URL'en for at observere ændringerne på hjemmesiden.

### `use: Blog` Blog Skabeloner

Blogskabelonen viser en liste over artikler (titler og abstracts) i rækkefølge efter udgivelsestid.

[→ Klik her for at lære om den specifikke konfiguration](/i18n.site/conf/blog)

### `use: Doc` Filer

I konfigurationsfilen:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Angiver brug af `Doc` til skabelongengivelse.

`Doc` skabelonen understøtter integration af flere `MarkDown` for at generere dokumentkonturer til enkelte eller flere projekter.

#### Flere Projekter Og Flere Filer

Konfigurationen af `.i18n/conf.yml` i `i18n:doc` er multi-projekt multi-fil rendering mode.

Her betyder `menu: NB demo1,demo2` at bruge `NB` -skabelonen til at gengive rullemenuen.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , som er forkortelsen af `Name Breif` , betyder, at rullemenuen kan vise projektets navn og slogan.

`NB` efterfølges af parameteren `demo1,demo2` der sendes til den.

Bemærk : ** Der må ikke være mellemrum ** før og efter kommaet `,` ud af `demo1,demo2` .

Den tilsvarende mappeindeksfil for ovenstående parametre er:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Enkelt Projekt Flere Filer

Hvis du kun har ét projekt, kan du konfigurere det som følger.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Et enkelt projekt med flere filer understøtter ikke konfiguration af `url` som rodsti `/`
> Hvis __conf.yml → nav:__ Ingen rodsti er konfigureret, vil den automatisk blive omskrevet til den første URL under `nav:` -konfigurationen, når du får adgang til hjemmesiden.
> Dette design er for bedre at kunne skelne projektdokumenter, blogs og andet indhold gennem mapper.
> Det anbefales at bruge en enkelt fil og en enkelt side som startside.

> [!TIP]
> Hvis `url` ikke er skrevet, er `url` som standard værdien `i18n` Denne regel træder også i kraft for andre skabeloner.

#### TOC Indholdsfortegnelse Indeks

Hvis skabelon `use: Doc` er aktiveret i konfigurationen, skal du aktivere plug-in `i18n.addon/toc` i `.i18n/conf.yml` Konfigurationen er som følger :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` vil automatisk installere og udføre dette plug-in, læse `TOC` biblioteksindeksfilen og generere `json` biblioteksoversigten.

Hvis det er et enkelt projekt med flere filer, er rodbiblioteket `TOC` det bibliotek, der svarer til `url:` i kildesprogets bibliotek. Hvis kildesproget for eksempel er kinesisk: filen svarende til `url: flashduty` er `zh/flashduty/TOC` .

Hvis det er flere projekter og flere filer, er der ingen grund til at konfigurere `url:` Rodmappen på `TOC` er den mappe, der svarer til værdien af `i18n` .

##### Detaljeret Indholdsforklaring

`en/blog/TOC` Indholdet er som følger :

```
README.md

news/README.md
  news/begin.md
```

##### Brug Indrykning Til at Angive Niveauer

`README.md` i første række af `en/blog/TOC` ovenfor svarer til `i18n.site` på billedet nedenfor, som er projektets navn.

De næste to linjer er som vist på skærmbilledet nedenfor.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` svarer til `News` ,
`news/begin.md` svarer til `Our Product is Online !`

`TOC` filer er indrykket for at angive det hierarkiske forhold i omridset, understøtter indrykning på flere niveauer og linjekommentarer, der starter med `# ` .

##### Forældreniveauet Skriver Kun Titlen, Ikke Indholdet.

Når der er flere niveauer af indrykning, skriver det overordnede niveau kun titlen og ikke indholdet. Ellers vil typografien blive rodet.

##### Projekt README.md

Indhold kan skrives i punkt `README.md` , såsom `en/demo2/README.md` .

Bemærk, at indholdet af denne fil ikke viser en indholdsfortegnelse, så det anbefales at begrænse længden og skrive en kort introduktion.

###### Projektslogan

Du kan se, at `Deme Two` har sin projektmærke under rullemenuen `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Dette svarer til den første række af `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Indholdet efter det første kolon `:` i titlen på første niveau af projekt `README.md` vil blive betragtet som projektets slogan.

Brugere fra Kina, Japan og Korea, bemærk venligst, at du skal bruge halv-bredde kolon `:` i stedet for fuld bredde kolon.

##### Hvordan Flyttes TOC I Bulk?

`TOC` filer skal placeres i kildesprogets bibliotek.

For eksempel, hvis kildesproget er kinesisk, så er `TOC` ovenfor `zh/blog/TOC` .

Hvis kildesproget er ændret, skal du batchflytte `TOC` filerne på et bestemt sprog i projektet til et andet sprog.

Du kan henvise til følgende kommandoer:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Rediger venligst `en/` og `zh/` i ovenstående kommando til din sprogkode.

### Standardindlæsning Uden Konfigurationssti

For en bestemt sti, der tilgås, hvis stipræfikset ikke er konfigureret i `nav:` , vil den `MarkDown` fil, der svarer til stien, blive indlæst som standard og gengivet ved hjælp af `Md` -skabelonen.

For eksempel, hvis `/test` er tilgået, og `nav:` er konfigureret uden præfikset for denne sti, og det aktuelle browsersprog er engelsk (kode `en` ), vil `/en/test.md` blive indlæst som standard og gengivet ved hjælp af skabelon `Md` .

Hvis `/en/test.md` denne fil ikke eksisterer, vil standardsiden `404` blive vist.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">