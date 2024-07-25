# .i18n/conf.yml

`i18n.site` Konfigurasjonsfilen er `.i18n/conf.yml` .

Bortsett fra `ignore:` og `i18n:` innstillingene til [`i18`](/i18) er konfigurasjonsfilen som følger:

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

Blant dem betyr `ext:` konfigurasjonselementet `upload` kun `.md` vil bli lastet opp ved publisering.

## Toppnavigasjon nav

`nav:` konfigurasjonsalternativer, tilsvarende navigasjonsmenyen øverst på hjemmesiden.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Blant `en/i18n.yml` `home: Home` `i18n: home`

`en/i18n.yml` vil bli oversatt til flere språk, for eksempel `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Etter at oversettelsen er fullført, kan du endre verdien av `yml` i oversettelsen, men ikke legg til eller slett nøkkelen til oversettelsen `yml`

### `use: Toc` Enkelt Filmal (Med Disposisjon)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyr å bruke `Toc` gjengivelse, som er å gjengi en enkelt `Markdown` -mal.

`TOC` er forkortelsen av `Table of Contents` . Når denne malen er gjengitt, vil omrisset av denne `Markdown` -filen vises i sidefeltet.

`url:` representerer filbanen til `Markdown` ( `/` tilsvarer rotkatalogen `/README.md` , dette filnavnet krever et prefiks med store bokstaver og et suffiks med små bokstaver).

### `use: Md` Enkeltfilmal (Ingen Disposisjon)

`Md` Mal er den samme som `Toc` , begge brukes til å gjengi en enkelt `Markdown` -fil. Imidlertid `Md` malen viser ikke omrisset i sidefeltet.

Du kan endre `use: Toc` i konfigurasjonen ovenfor til `use: Md` , kjøre `i18n.site` i `md` -katalogen igjen, og deretter gå til forhåndsvisningsadressen for utvikling for å observere endringene på hjemmesiden.

### Standard Lasting Uten Konfigurasjonsbane

Hvis baneprefikset til en bestemt bane som åpnes ikke er konfigurert i `nav:` vil `MarkDown` -filen som tilsvarer banen lastes som standard og gjengis med `Md` -mal.

For eksempel, hvis du besøker `/test` og `nav:` er konfigurert uten denne banen, og sidespråket er engelsk (kode `en` ), vil malen bli lastet `/en/test.md` og gjengitt med `Md` som standard.

`/en/test.md` denne filen ikke eksisterer, vil standard `404` -siden vises.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Mal for Flere Filer

I konfigurasjonsfilen:

```
  - i18n: blog
    use: Doc
```

Indikerer bruk av `Doc`

`Doc` Mal støtter integrering av flere `MarkDown` for å generere dokumentkonturer for enkelt- eller flere prosjekter.

#### Enkelt Prosjekt (Flere Filer)

`blog` i det ovenstående er enkeltprosjektmodusen `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Når url Er Tom, Har Den Som Standard Verdien i18n

Hvis du ikke skriver `url` `url` `i18n` .

Skrivemetoden ovenfor tilsvarer å ha `url: blog` og dens tilsvarende fil er `en/blog/TOC` .

#### Flere Prosjekter

`.i18n/conf.yml` Konfigurasjonen i `i18n:doc` er multiprosjektmodus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Her betyr `menu: NB demo1,demo2` å bruke `NB` for å gjengi rullegardinmenyen.

`NB` , er forkortelsen av `Name Breif` , som indikerer at rullegardinmenyen kan vise navnet og slagordet til prosjektet.

`NB` etterfølges av parameteren `demo1,demo2` som sendes til den.
Merk at `demo1,demo2` ikke skal være mellomrom ** før og etter komma `,` i : **

For parametrene ovenfor er den tilsvarende katalogindeksfilen:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Innholdsfortegnelse Indeks

`i18n.site` Vil kjøre `js` -plugin `.i18n/hook/after.tran/TOC.js` i demolageret for å lese katalogindeksfilen `doc` tilsvarer malkonfigurasjonen `TOC` for å generere `json` til katalogomrisset.

Hvis du bruker `doc` , må du ha denne plug-in.

Hvis du initialiserer `i18n.site` -prosjektet fra en tom mappe, husk å kopiere `.i18n` i demoprosjektet til katalogen din.

`Doc` vil gjengi innholdsfortegnelsen basert på den genererte `json` .

##### Detaljert Innholdsforklaring

Innholdet er som : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Bruk Innrykk for Å Indikere Nivåer

Over `en/blog/TOC` `README.md` i den første linjen tilsvarer `i18n.site` i bildet nedenfor, som er prosjektnavnet.

De neste to linjene er som vist på skjermbildet nedenfor.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` tilsvarer `News` ,
`news/begin.md` tilsvarer `Our Product is Online !`

`TOC` Filen er rykket inn for å indikere det hierarkiske forholdet til omrisset og støtter innrykk på flere nivåer.

##### Foreldrenivået Skriver Bare Tittelen, Ikke Innholdet.

Når det er flere nivåer med innrykk, skriver det overordnede nivået bare tittelen og ikke innholdet. Ellers blir typografien rotet til.

##### Prosjekt README.md 

`README.md` av prosjektet, for eksempel, kan du skrive innhold i `en/demo2/README.md` .

Merk at innholdet i denne filen ikke viser en innholdsfortegnelse, så det anbefales å begrense lengden og skrive en kort introduksjon.

###### Prosjekt Slagord

Som du kan se `Deme Two` under rullegardinmenyen og katalogens prosjektnavn, er det prosjektslagordet `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: tilsvarer den første linjen `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Prosjekt `README.md` Innholdet etter første kolon `:` i tittelen på første nivå vil bli sett på som prosjektets slagord.

Brukere fra Kina, Japan og Korea, vær oppmerksom på at du må bruke halvbredde kolon i stedet for full bredde kolon `:`

##### Hvordan Flytte TOC I Bulk?

`TOC` Filen må plasseres i katalogen til kildespråket.

For eksempel, hvis kildespråket er kinesisk, er `TOC` ovenfor `zh/blog/TOC` .

Hvis kildespråket er endret, må du batchflytte `TOC` på et bestemt språk i prosjektet til et annet språk.

Du kan referere til følgende kommandoer:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vennligst endre `en/` og `zh/` i kommandoen ovenfor til språkkoden din.


