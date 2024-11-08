# .i18n/conf.yml

Konfigurasjonsfilen for `i18n.site` er `.i18n/conf.yml` og innholdet er som følger :

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

Blant dem betyr `upload` til `ext:` konfigurasjonselement at kun `.md` vil bli lastet opp ved publisering.

## Toppnavigasjon nav

`nav:` konfigurasjonsalternativer, tilsvarende navigasjonsmenyen øverst på hjemmesiden.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Blant dem tilsvarer `i18n: home` `home: Home` av `en/i18n.yml` (der `en` er kildespråket til prosjektoversettelsen).

`en/i18n.yml` innhold er teksten som vises i navigasjonsmenyen, som vil bli oversatt i henhold til `fromTo` i konfigurasjonen, for eksempel oversatt til `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Etter at oversettelsen er fullført, kan du endre verdien av oversettelsen `yml` , men ikke legg til eller slett nøkkelen til oversettelsen `yml` .

### `use: Toc` Med Disposisjon

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyr gjengivelse med en `Toc` -mal, som er å gjengi en enkelt `Markdown` -mal.

`TOC` er forkortelsen av `Table of Contents` Når denne malen er gjengitt, vil omrisset av denne `Markdown` filen vises i sidefeltet.

`url:` representerer filbanen til `Markdown` ( `/` tilsvarer rotkatalogen `/README.md` , dette filnavnet krever et prefiks med store bokstaver og et suffiks med små bokstaver).

### `use: Md` Uten Omriss

`Md` malen og `Toc` malen er den samme, og begge brukes til å gjengi en enkelt `Markdown` -fil. Men `Md` malen viser ikke omrisset i sidefeltet.

Du kan endre `use: Toc` i konfigurasjonen ovenfor til `use: Md` , kjøre `i18n.site` i `md` -katalogen igjen, og deretter gå til forhåndsvisningsadressen for utvikling for å se endringene på hjemmesiden.

### `use: Blog` Bloggmaler

Bloggmalen viser en liste over artikler (titler og sammendrag) i rekkefølge etter publiseringstiden.

[→ Klikk her for å lære om den spesifikke konfigurasjonen](/i18n.site/conf/blog)

### `use: Doc` Dokumentmaler for Flere Filer

I konfigurasjonsfilen:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indikerer bruk av `Doc` for malgjengivelse.

`Doc` malen støtter integrering av flere `MarkDown` for å generere dokumentskisser for enkelt eller flere prosjekter.

#### Flere Prosjekter Og Flere Filer

Konfigurasjonen av `.i18n/conf.yml` i `i18n:doc` er multi-prosjekt multi-fil rendering modus.

Her betyr `menu: NB demo1,demo2` å bruke `NB` -malen for å gjengi rullegardinmenyen.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , som er forkortelsen for `Name Breif` , betyr at rullegardinmenyen kan vise navnet og slagordet til prosjektet.

`NB` etterfølges av parameter `demo1,demo2` som sendes til den.

Merk : ** Det skal ikke være mellomrom ** før og etter komma `,` av `demo1,demo2` .

Den tilsvarende katalogindeksfilen for parameterne ovenfor er:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Enkelt Prosjekt Flere Filer

Hvis du bare har ett prosjekt, kan du konfigurere det som følger.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Enkelt prosjekt med flere filer støtter ikke konfigurering av `url` som rotbane `/`
> Hvis __conf.yml → nav:__ Ingen rotbane er konfigurert, vil den automatisk skrives om til den første URL-en under `nav:` -konfigurasjonen når du går til hjemmesiden til nettstedet.
> Denne utformingen er for å bedre skille prosjektdokumenter, blogger og annet innhold gjennom kataloger.
> Det anbefales å bruke en enkelt fil og en enkelt side som startside.

> [!TIP]
> Hvis `url` ikke er skrevet, er `url` standardverdien `i18n` Denne regelen trer også i kraft for andre maler.

#### TOC Innholdsfortegnelse Indeks

Hvis mal `use: Doc` er aktivert i konfigurasjonen, vennligst aktiver plug-in `i18n.addon/toc` i `.i18n/conf.yml` Konfigurasjonen er som følger :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` vil automatisk installere og kjøre denne plug-in, lese `TOC` katalogindeksfilen og generere `json` katalogomrisset.

Hvis det er et enkelt prosjekt med flere filer, er rotkatalogen `TOC` katalogen som tilsvarer `url:` i kildespråkkatalogen. For eksempel, hvis kildespråket er kinesisk: filen som tilsvarer `url: flashduty` er `zh/flashduty/TOC` .

Hvis det er flere prosjekter og flere filer, er det ikke nødvendig å konfigurere `url:` Rotkatalogen til `TOC` er katalogen som tilsvarer verdien av `i18n` .

##### Detaljert Innholdsforklaring

`en/blog/TOC` Innholdet er som følger :

```
README.md

news/README.md
  news/begin.md
```

##### Bruk Innrykk for Å Indikere Nivåer

`README.md` i den første raden av `en/blog/TOC` ovenfor tilsvarer `i18n.site` i bildet under, som er prosjektnavnet.

De neste to linjene er som vist på skjermbildet nedenfor.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` tilsvarer `News` ,
`news/begin.md` tilsvarer `Our Product is Online !`

`TOC` filer er rykket inn for å indikere det hierarkiske forholdet til omrisset, støtter innrykk på flere nivåer og linjekommentarer som starter med `# ` .

##### Foreldrenivået Skriver Bare Tittelen, Ikke Innholdet.

Når det er flere nivåer med innrykk, skriver det overordnede nivået bare tittelen og ikke innholdet. Ellers blir typografien rotet til.

##### Prosjekt README.md

Innhold kan skrives i element `README.md` , for eksempel `en/demo2/README.md` .

Merk at innholdet i denne filen ikke viser en innholdsfortegnelse, så det anbefales å begrense lengden og skrive en kort introduksjon.

###### Prosjekt Slagord

Du kan se at `Deme Two` har sin prosjektbeskrivelse under rullegardinmenyen `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Dette tilsvarer den første raden av `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Innholdet etter første kolon `:` i førstenivåtittelen til prosjekt `README.md` vil bli sett på som prosjektets slagord.

Brukere fra Kina, Japan og Korea, vær oppmerksom på at du bør bruke halvbredde kolon `:` i stedet for full bredde kolon.

##### Hvordan Flytte TOC I Bulk?

`TOC` filer må plasseres i katalogen til kildespråket.

For eksempel, hvis kildespråket er kinesisk, er `TOC` ovenfor `zh/blog/TOC` .

Hvis kildespråket er endret, må du batchflytte `TOC` filene til et bestemt språk i prosjektet til et annet språk.

Du kan referere til følgende kommandoer:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vennligst endre `en/` og `zh/` i kommandoen ovenfor til språkkoden din.

### Standard Lasting Uten Konfigurasjonsbane

For en bestemt bane som åpnes, hvis baneprefikset ikke er konfigurert i `nav:` , vil `MarkDown` filen som tilsvarer banen lastes som standard og gjengis ved hjelp av `Md` -malen.

For eksempel, hvis `/test` er tilgjengelig og `nav:` er konfigurert uten prefikset til denne banen, og gjeldende nettleserspråk er engelsk (kode `en` ), vil `/en/test.md` lastes inn som standard og gjengis ved hjelp av mal `Md` .

Hvis `/en/test.md` denne filen ikke eksisterer, vil standard `404` -side vises.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">