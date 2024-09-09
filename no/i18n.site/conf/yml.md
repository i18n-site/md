# .i18n/conf.yml

Profilen for `i18n.site` er `.i18n/conf.yml`.

Bortsett fra innstillingene [`i18`](/i18) , `ignore:` og `i18n:` , er konfigurasjonsfilen som følger:

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

Deretter betyr `upload`-innstillingen for `ext` at kun `.md`-filer vil bli lastet opp ved publisering.

## Toppnavigasjon nav

`nav`-konfigurasjonsalternativer tilsvarer navigasjonsmenyen øverst på hjemmesiden.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Blant dem tilsvarer `i18n: home` `home: Home` i `en/i18n.yml`.

`en/i18n.yml` vil bli oversatt til flere språk, for eksempel `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Etter at oversettelsen er fullført, kan du endre oversettelsesverdien i `yml`, men ikke slette eller legge til nøkler i oversettelses `yml`.

### `use: Toc`, enkelt filmal (med disposisjon)

I `nav`-konfigurasjonen:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyr at malen vil rendre med en `Toc`-mal, som er for å rendre en enkelt `Markdown`-mal.

`TOC` er en forkortelse for `Table of Contents`. Når denne malen rendres, vil innholdsfortegnelsen for denne `Markdown`-filen vises i sidefeltet.

`url:` representerer `Markdown`-filens sti ( `/` tilsvarer rotkatalogen `/README.md`, og filnavnet må ha et prefiks med store bokstaver og et suffiks med små bokstaver).

### `use: Md`, enkelt filmal (uten disposisjon)

`Md`-malen og `Toc`-malen er identiske og brukes begge til å rendre en enkelt `Markdown`-fil, men `Md`-malen viser ikke innholdsfortegnelsen i sidefeltet.

Du kan endre `use: Toc` til `use: Md` i konfigurasjonen over, kjøre `i18n.site` i `md`-katalogen igjen, og deretter besøke utviklingsforhåndsvisningsadressen for å se endringene på hjemmesiden.

### Ingen konfigurasjonssti for standard lasting

Hvis en sti som besøkes ikke har en konfigurasjon i `nav`, vil den tilsvarende `Markdown`-filen lastes som standard og rendres med `Md`-malen.

For eksempel, hvis `/test` er tilgjengelig, og `nav:` ikke er konfigurert for denne stien, og sidespråket er engelsk (`en`), vil `/en/test.md` lastes inn som standard og vises med malen `Md`.

Hvis `/en/test.md` ikke eksisterer, vil standard `404`-siden vises.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, mal for flere filer

I konfigurasjonsfilen:

```
  - i18n: blog
    use: Doc
```

Dette indikerer bruk av `Doc` for malrendring.

`Doc`-malen støtter integrering av flere `Markdown`-filer for å generere en enkelt eller flere prosjekters dokumentoversikter.

#### Enkelt prosjekt (flere filer)

`blog` ovenfor er `Doc`-malens enkeltprosjektmodus.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Når url Er Tom, Har Den Som Standard Verdien i18n

Hvis `url` ikke er angitt, er standardverdien `url` den samme som `i18n`. Denne regelen gjelder også for andre maler.

Angitt skrivemåte tilsvarer `url: blog`, og den tilsvarende filen er `en/blog/TOC`.

#### Flere prosjekter

`.i18n/conf.yml`-konfigurasjonen for `i18n:doc` er en multiprosjektmodus.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

`menu: NB demo1,demo2` betyr at `NB`-malen brukes til å rendre rullegardinmenyen.

`NB` er en forkortelse for `Name Brief`, som betyr at rullegardinmenyen kan vise prosjektets navn og slagord.

`NB` etterfølges av parameterne `demo1,demo2`.
Merke: ** Det skal ikke være mellomrom rundt kommaet `,` i `demo1,demo2` **.

For de overnevnte parameterne er den tilsvarende katalogindeksfilen:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC-innholdsfortegnelse

`i18n.site` kjører `js`-pluginet `.i18n/hook/after.tran/TOC.js` i demonstrasjonslagret for å lese indeksfilen med `doc`-kataloger som tilsvarer `TOC`-malkonfigurasjonen, for å generere `json`-kataloger.

Hvis du bruker `Doc`-malen, må du ha denne pluginen.

Hvis du initialiserer `i18n.site`-prosjektet fra en tom mappe, husk å kopiere `.i18n` fra demoprosjektet til din katalog.

`Doc`-malen vil rendre innholdsfortegnelsen basert på den genererte `json`.

##### Detaljert innholdsforklaring

`en/blog/TOC`-innholdet er som følger:

```
README.md

news/README.md
  news/begin.md
```

##### Bruk innrykk for å indikere nivåer

`README.md` i den første linjen av `en/blog/TOC` tilsvarer `i18n.site` i bildet nedenfor, som er prosjektnavnet.

De neste to linjene er som vist i skjermbildet nedenfor.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` tilsvarer `News`
`news/begin.md` tilsvarer `Our Product is Online!`

`TOC`-filer bruker innrykk for å indikere innholdsfortegnelsens hierarkiske forhold, støtter flere nivåer av innrykk og linjekommentarer som starter med `#`.

##### Foreldrenivået skriver kun tittelen, ikke innholdet

Når det er flere nivåer av innrykk, skriver det overordnede nivået kun tittelen, ikke innholdet, for å unngå layoutfeil.

##### Prosjekt README.md

Innhold kan skrives i prosjektets `README.md`, for eksempel `en/demo2/README.md`.

Merke at innholdet i denne filen ikke viser en innholdsfortegnelse, så det anbefales å holde det kort og konsist.

###### Prosjektets slagord

Du kan se at `Deme Two` har sitt prosjektbeskrivelse under rullegardinmenyen og katalogens prosjektnavn: `Your Project Slogan`.

![](https://p.3ti.site/1721276842.avif)

Dette tilsvarer den første linjen i `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Innholdet etter den første kolonen `:` i den første overskriften i prosjektets `README.md` vil bli sett på som prosjektets slagord.

Brukere fra Kina, Japan og Korea, vær oppmerksom på å bruke halvbredde kolon `:` i stedet for full bredde kolon.

##### Hvordan flytte TOC i bulk?

`TOC`-filer må plasseres i kildespråkets katalog.

For eksempel, hvis kildespråket er kinesisk, er `TOC`-filen `zh/blog/TOC`.

Hvis kildespråket endres, må du flytte `TOC`-filer fra en språkkatalog til en annen.

Du kan referere til følgende kommandoer:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Endre `en/` og `zh/` i kommandoen over til din språkkode.