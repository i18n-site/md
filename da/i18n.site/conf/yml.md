# .i18n/conf.yml

`i18n.site`-konfigurationsfilen er `.i18n/conf.yml`.

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
addon:
  - i18n.addon/toc
```

HERunder betyder `upload`-`ext:`-indstillingen, at kun `.md`-filer uploades ved publicering.

## Top navigation nav

`nav:`-konfigurationsindstillingerne svarer til navigationsmenuen øverst på startsiden.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

HERi `i18n: home` svarer til `home: Home` i `en/i18n.yml`.

`en/i18n.yml` vil blive oversat til flere sprog, såsom `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Efter oversættelsen kan du ændre værdien af oversættelses-`yml`, men du må ikke tilføje eller fjerne nogen oversættelses-`yml`-nøgler.

### `use: Toc`, Enkelt filskabelon (med indholdsfortegnelse)

I `nav`-konfigurationen:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyder, at der bruges en `Toc`-skabelon til gengivelse, hvilket er gengivelse af en enkelt `Markdown`-skabelon.

`TOC` er forkortelsen for `Table of Contents`. Når denne skabelon gengives, vises indholdsfortegnelsen for denne `Markdown`-fil i sidebaren.

`url:` repræsenterer `Markdown`-filens sti ( `/` svarer til rodmenuen `/README.md`, filnavnet skal have stort forbogstav og lille efternavn).

### `use: Md`, Enkelt filskabelon (uden indholdsfortegnelse)

`Md`-skabelonen og `Toc`-skabelonen er ens, begge bruges til at gengive en enkelt `Markdown`-fil, men `Md`-skabelonen viser ikke indholdsfortegnelsen i sidebaren.

Du kan ændre `use: Toc` i konfigurationen ovenfor til `use: Md`, køre `i18n.site` igen i `md`-mappen, og derefter besøge udviklingspreview-URL'en for at observere ændringerne på hjemmesiden.

### Ingen konfigurationssti til standardindlæsning

Hvis en bestemt sti tilgås, og dens stipræfiks ikke er konfigureret i `nav:`, vil den tilsvarende `Markdown`-fil blive indlæst som standard og renderet med `Md`-skabelonen.

F.eks. hvis `/test` tilgås, og `nav:` ikke er konfigureret for denne sti, og sidesproget er engelsk (koden `en`), vil `/en/test.md` blive indlæst og renderet med `Md`-skabelonen.

Hvis `/en/test.md`-filen ikke findes, vil standard `404`-siden blive vist.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, Flerspørgsmålsskabelon

I konfigurationsfilen:

```
  - i18n: blog
    use: Doc
```

Dette betyder, at der bruges `Doc` til at rendere skabelonen.

`Doc`-skabelonen understøtter integration af flere `Markdown`-filer for at generere en enkelt eller flere projektets dokumentationsoversigter.

#### Enkelt projekt (flere filer)

`blog` i ovenstående er `Doc`'s enkeltprojekttilstand.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Når url Er Tom, Har Den Som Standard Værdien i18n

Hvis `url` ikke angives, er `url` som standard lig med værdien af `i18n`. Denne regel gælder også for andre skabeloner.

Den ovenstående skrivning svarer til `url: blog`, og den tilsvarende fil er `en/blog/TOC`.

#### Flere projekter

I `.i18n/conf.yml` er `i18n:doc`-konfigurationen flerspørgsmålstilstand.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

HER, `menu: NB demo1,demo2`, betyder, at `NB`-skabelonen bruges til at rendere dropdown-menuen.

`NB` er forkortelsen for `Name Brief`, hvilket betyder, at dropdown-menuen kan vise projektets navn og slogan.

`NB` efterfulgt af parameteren `demo1,demo2`.
Bemærk: **Der skal ikke være mellemrum** før og efter kommaet `,` i `demo1,demo2`.

De ovennævnte parametre, de tilsvarende katalogindeksfiler er:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC katalogindeks

`i18n.site` vil udføre demonstrationens lager `js`-plugin `.i18n/hook/after.tran/TOC.js` for at læse `doc`-skabelonkonfigurationens tilsvarende `TOC` katalogindeksfil for at generere katalogoversigtens `json`.

Hvis du bruger `doc`-skabelonen, skal denne plugin være tilgængelig.

Hvis du initialiserer `i18n.site`-projektet fra en tom mappe, husk at kopiere demonstrationens `.i18n` til din mappe.

`Doc`-skabelonen vil rendere katalogoversigten baseret på den genererede `json`.

##### Indholdsdetaljer

`en/blog/TOC`-indholdet er som følger:

```
README.md

news/README.md
  news/begin.md
```

##### Brug indrykning for at angive niveauer

`en/blog/TOC`-første linje `README.md` svarer til `i18n.site` i.figuren nedenfor, dvs. projektets navn.

De næste to linjer, som vist i.figuren nedenfor.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` svarer til `News`
`news/begin.md` svarer til `Our Product is Online !`

`TOC`-filen bruger indrykning for at angive katalogens hierarkiske relationer og understøtter flere niveauer af indrykning. Linjer, der begynder med `#`, er kommentarer.

##### På fædreniveauet skal du kun skrive titlen, ikke indholdet, ellers kan det forårsage layoutproblemer

I flere niveauer af indrykning, skal du kun skrive titlen på fædreniveauet, ikke indholdet.

##### Projektets README.md

I projektets `README.md`, f.eks. `en/demo2/README.md`, kan du skrive indhold.

Bemærk, at indholdet af denne fil ikke vises i katalogoversigten, så det anbefales at holde det kort og skrive en kort introduktion.

###### Projektets slogan

Du kan se, at `Deme Two` under dropdown-menuen og i katalogoversigtens projektets navn har sit projektets slogan: `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Dette svarer til den første linje i `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Projektets `README.md`-første niveauoverskrifts første kolon `:` efter indholdet vil blive betragtet som projektets slogan.

Kinesiske, japanske og koreanske brugere bemærk, at du skal bruge halvstore bogstaver `:` i stedet for fuldstørrelse koloner.

##### How to batch move TOC?

`TOC`-filen skal placeres i kildesprogens mappe.

F.eks. hvis kildesproget er kinesisk, er ovenstående `TOC` `zh/blog/TOC`.

Hvis kildesproget ændres, skal du批量移动某语种的`TOC`-fil til en anden sprog.

Du kan følge følgende kommandoer:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Rediger venligst `en/` og `zh/` i ovenstående kommando til din sprogkode.