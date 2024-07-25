# .i18n/conf.yml

`i18n.site` Konfigurationsfilen er `.i18n/conf.yml` .

Bortset fra `ignore:` og `i18n:` indstillingerne for [`i18`](/i18) er konfigurationsfilen som følger:

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

Blandt dem betyder konfigurationselementet `ext:` for `upload` , at kun `.md` vil blive uploadet ved udgivelse.

## Top Navigation nav

`nav:` konfigurationsmuligheder, svarende til navigationsmenuen øverst på startsiden.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Blandt dem svarer `i18n: home` til `en/i18n.yml`中`home: Home` .

`en/i18n.yml` vil blive oversat til flere sprog, såsom `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Når oversættelsen er fuldført, kan du ændre værdien af `yml` i oversættelsen, men du må ikke tilføje eller slette nøglen til oversættelse `yml` .

### `use: Toc` Enkelt Fil Skabelon (Med Kontur)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyder at bruge `Toc` gengivelse, som er at gengive en enkelt `Markdown` -skabelon.

`TOC` er forkortelsen af `Table of Contents` . Når denne skabelon gengives, vil omridset af denne `Markdown` -fil blive vist i sidebjælken.

`url:` repræsenterer filstien til `Markdown` ( `/` svarer til rodmappen `/README.md` , dette filnavn kræver et stort præfiks og et lille suffiks).

### `use: Md` Enkelt Fil Skabelon (Ingen Kontur)

`Md` Skabelon er den samme som `Toc` , begge bruges til at gengive en enkelt `Markdown` -fil. Dog `Md` skabelonen viser ikke omridset i sidebjælken.

Du kan ændre `use: Toc` i ovenstående konfiguration til `use: Md` , køre `i18n.site` i `md` -mappen igen, og derefter besøge udviklingseksempel-URL'en for at observere ændringerne på hjemmesiden.

### Standardindlæsning Uden Konfigurationssti

Hvis stipræfikset for en bestemt sti, der tilgås, ikke er konfigureret i `nav:` vil `MarkDown` -filen, der svarer til stien, blive indlæst som standard og gengivet ved hjælp af `Md` -skabelonen.

For eksempel, hvis du besøger `/test` og `nav:` er konfigureret uden denne sti, og sidesproget er engelsk (kode `en` ), vil skabelonen blive indlæst `/en/test.md` og gengivet med `Md` som standard.

`/en/test.md` denne fil ikke eksisterer, vil standardsiden `404` blive vist.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Multi-Fil Skabelon

I konfigurationsfilen:

```
  - i18n: blog
    use: Doc
```

Angiver at bruge `Doc` til skabelongengivelse.

`Doc` Skabelon understøtter integration af flere `MarkDown` for at generere dokumentkonturer til enkelte eller flere projekter.

#### Enkelt Projekt (Flere Filer)

`blog` i ovenstående er enkeltprojekttilstanden `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Når url Er Tom, Har Den Som Standard Værdien i18n

Hvis du ikke skriver `url` `url` til værdien af `i18n` . Denne regel træder også i kraft for andre skabeloner.

Ovenstående skrivemetode svarer til at have `url: blog` og dens tilsvarende fil er `en/blog/TOC` .

#### Flere Projekter

`.i18n/conf.yml` Konfigurationen i `i18n:doc` er multiprojekttilstand.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Her betyder `menu: NB demo1,demo2` at bruge `NB` til at gengive rullemenuen.

`NB` , er forkortelsen af `Name Breif` , hvilket indikerer, at rullemenuen kan vise projektets navn og slogan.

`NB` efterfølges af parameteren `demo1,demo2` , der sendes til den.
Bemærk : ** Der bør ikke være mellemrum ** før og efter komma `,` i `demo1,demo2`

For ovenstående parametre er den tilsvarende mappeindeksfil:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Indholdsfortegnelse Indeks

`i18n.site` Vil udføre `js` -plugin `.i18n/hook/after.tran/TOC.js` i demo-lageret for at læse mappeindeksfilen `doc` svarende til skabelonkonfigurationen `TOC` for at generere `json` i biblioteksoversigten.

Hvis du bruger `doc` , skal du have denne plug-in.

Hvis du initialiserer `i18n.site` fra en tom mappe, skal du huske at kopiere `.i18n` i demoprojektet til din mappe.

`Doc` vil gengive indholdsfortegnelsen baseret på det genererede `json` .

##### Detaljeret Indholdsforklaring

Indholdet er som : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Brug Indrykning Til at Angive Niveauer

Ovenfor `en/blog/TOC` `README.md` i den første linje svarer til `i18n.site` på billedet nedenfor, som er projektets navn.

De næste to linjer er som vist på skærmbilledet nedenfor.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` svarer til `News` ,
`news/begin.md` svarer til `Our Product is Online !`

`TOC` Filen er indrykket for at angive det hierarkiske forhold i omridset og understøtter indrykning på flere niveauer.

##### Forældreniveauet Skriver Kun Titlen, Ikke Indholdet.

Når der er flere niveauer af indrykning, skriver det overordnede niveau kun titlen og ikke indholdet. Ellers vil typografien blive rodet.

##### Projekt README.md 

`README.md` af projektet, for eksempel, kan du skrive indhold i `en/demo2/README.md` .

Bemærk, at indholdet af denne fil ikke viser en indholdsfortegnelse, så det anbefales at begrænse længden og skrive en kort introduktion.

###### Projektslogan

Som du kan se `Deme Two` er der under rullemenuen og katalogets projektslogan `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: svarer til den første linje `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Indholdet efter det første kolon `:` i titlen på første niveau vil blive betragtet som projektets slogan.

Brugere fra Kina, Japan og Korea, bemærk venligst `:` at du skal bruge halv-bredde kolon i stedet for fuld bredde kolon.

##### Hvordan Flyttes TOC I Bulk?

`TOC` Filen skal placeres i kildesprogets bibliotek.

For eksempel, hvis kildesproget er kinesisk, så `zh/blog/TOC` `TOC`

Hvis kildesproget er ændret, skal du batchflytte `TOC` på et bestemt sprog i projektet til et andet sprog.

Du kan henvise til følgende kommandoer:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Rediger venligst `en/` og `zh/` i ovenstående kommando til din sprogkode.


