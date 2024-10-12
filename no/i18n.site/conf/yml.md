# .i18n/conf.yml

Konfigurasjonsfilen for `i18n.site` er `.i18n/conf.yml`, og innholdet er som følger:

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

Blant dem betyr `upload`-konfigurasjonen `ext:` at kun `.md`-filer vil bli lastet opp ved publisering.

## Toppnavigasjon nav

`nav:`-konfigurasjonsalternativene tilsvarer navigasjonsmenyen øverst på hjemmesiden.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Blant dem tilsvarer `i18n: home` `home: Home` i `en/i18n.yml` (der `en` er kildespråket til prosjektoversettelsen).

`en/i18n.yml`-innholdet er navigasjonsmenyens visuelle tekst, som vil bli oversatt i henhold til `fromTo`-konfigurasjonen, for eksempel oversatt til `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Etter at oversettelsen er fullført, kan du endre oversettelsens `yml`-verdi, men ikke slette eller legge til noen `yml`-nøkler.

### `use: Toc`, Enkel filmal med disposisjon

`nav`-konfigurasjonen:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyr at malen vil gjengi en `Toc`-template, som er for å gjengi en enkelt `Markdown`-fil.

`TOC` er forkortelsen for `Table of Contents`. Når denne malen gjengis, vil omrisset av denne `Markdown`-filen vises i sidefeltet.

`url:` representerer `Markdown`-filens sti ( `/` tilsvarer rotkatalogen `/README.md`, og filnavnet krever et prefiks med store bokstaver og et suffiks med små bokstaver).

### `use: Md`, Enkel filmal uten disposisjon

`Md`-malen og `Toc`-malen er identiske, og begge brukes til å gjengi en enkelt `Markdown`-fil. Men `Md`-malen viser ikke disposisjonen i sidefeltet.

Du kan endre `use: Toc` i konfigurasjonen over til `use: Md`, kjøre `i18n.site` i `md`-katalogen igjen, og deretter besøke utviklingsforhåndsvisningsadressen for å se endringene på hjemmesiden.

### `use: Blog`, Bloggmal

Bloggmalen viser en liste over artikler (titler og sammendrag) i publiseringstidens rekkefølge.

[→ Klikk her for å lære om den spesifikke konfigurasjonen](/i18n.site/conf/blog)

### `use: Doc`, Flermalfil dokumentmal

I konfigurasjonsfilen:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Dette indikerer bruk av `Doc` for å gjengi malen.

`Doc`-malen støtter integrering av flere `Markdown`-filer for å generere en enkelt eller flere prosjekters dokumentdisposisjoner.

#### Flere prosjekter og flere filer

`.i18n/conf.yml`-konfigurasjonen for `i18n:doc` er en flersprosjekt flermalfil rendringsmodus.

Her betyr `menu: NB demo1,demo2` at `NB`-malen brukes for å gjengi rullegardinmenyen.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` er forkortelsen for `Name Brief`, som betyr at rullegardinmenyen kan vise prosjektets navn og slagord.

`NB` etterfølges av parameterne `demo1,demo2`.

Merke: **Det skal ikke være mellomrom** før og etter komma `,` i `demo1,demo2`.

For de overnevnte parametrene er den tilsvarende katalogindeksfilen:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Enkelt prosjekt med flere filer

Hvis du bare har ett prosjekt, kan du konfigurere det som følger:

```
  - i18n: xxx
    use: Doc
```

##### Når url Er Tom, Har Den Som Standard Verdien i18n

Hvis `url` ikke er skrevet, er `url` standardverdien `i18n` Denne regelen trer også i kraft for andre maler.

Overnevnte skrivemåte tilsvarer `url: xxx`, og den tilsvarende filen er `en/xxx/TOC`.

#### TOC-innholdsfortegnelse

`i18n.site` vil utføre `js`-plugin `.i18n/hook/after.tran/TOC.js` i demolageret for å lese `TOC`-katalogindeksfilen som tilsvarer `doc`-malens konfigurasjon for å generere en `json`-disposisjon.

Hvis du bruker `doc`-mal, må du ha denne plugin.

Hvis du initialiserer `i18n.site` fra en tom mappe, husk å kopiere `.i18n` fra demolageret til din katalog.

`Doc`-malen vil gjengi innholdsfortegnelsen basert på den genererte `json`.

##### Innholdsdetaljer

`en/blog/TOC`-innholdet er som følger:

```
README.md

news/README.md
  news/begin.md
```

##### Bruk innrykk for å indikere nivåer

`README.md` i den første linjen av `en/blog/TOC` tilsvarer `i18n.site` i bildet under, som er prosjektnavnet.

De neste to linjene er som vist i skjermbildet nedenfor.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` tilsvarer `News`
`news/begin.md` tilsvarer `Our Product is Online!`

`TOC`-filer bruker innrykk for å indikere disposisjonens hierarki, støtter flere nivåer av innrykk og linjekommentarer som starter med `#`.

##### Foreldrenivået skriver bare tittelen, ikke innholdet

Når det er flere nivåer av innrykk, skriver det overordnede nivået bare tittelen, ikke innholdet, ellers kan det føre til forvirring i layouten.

##### Prosjekt README.md

Innhold kan skrives i prosjektets `README.md`, for eksempel `en/demo2/README.md`.

Merke at innholdet i denne filen ikke viser en innholdsfortegnelse, så det anbefales å holde det kort og konsist.

###### Prosjektets slagord

Du kan se at `Deme Two` har sitt prosjektbeskrivelse under rullegardinmenyen, `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Dette tilsvarer den første linjen i `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Prosjektets `README.md`-filens første nivåtittel, etter den første kolonen `:`, blir sett på som prosjektets slagord.

Brukere fra Kina, Japan og Korea, vær oppmerksom på å bruke halvbredde kolon `:` i stedet for full bredde kolon.

##### Hvordan flytte TOC i bulk?

`TOC`-filer må plasseres i kildespråkets katalog.

For eksempel, hvis kildespråket er kinesisk, er `TOC`-filen `zh/blog/TOC`.

Hvis kildespråket endres, må du flytte `TOC`-filer fra ett språk til et annet i prosjektet.

Du kan referere til følgende kommandoer:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Endre `en/` og `zh/` i kommandoen over til din språkkode.

### Standard lasting uten konfigurasjonssti

For en viss sti som åpnes, hvis stiprefikset ikke er konfigurert i `nav:`, vil den tilsvarende `Markdown`-filen lastes som standard og gjengis med `Md`-malen.

For eksempel, hvis `/test` er tilgjengelig, og `nav:` ikke har konfigurert prefikset for denne stien, og gjeldende nettleserspråk er engelsk (kode `en`), vil `/en/test.md` lastes som standard og gjengis med `Md`-malen.

Hvis `/en/test.md` ikke eksisterer, vil standard `404`-side vises.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">