# .i18n/conf.yml

`i18n.site`-profilen är `.i18n/conf.yml`.

Förutom inställningarna [`i18`](/i18) , `ignore:` och `i18n:` är konfigurationsfilen följande:

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

Därmed betyder `upload`-konfigurationens `ext:` att endast `.md`-filer laddas upp vid publicering.

## Toppnavigering: nav

`nav:`-konfigurationsalternativen motsvarar den övre navigeringsmenyn på startsidan.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Bland dem motsvarar `i18n: home` `home: Home` i `en/i18n.yml`.

`en/i18n.yml` kommer att översättas till flera språk, såsom `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

När översättningen är klar kan du ändra översättningens `yml`-värden, men du får inte lägga till eller ta bort några `yml`-nycklar.

### `use: Toc`, enskild mall (med innehållsförteckning)

I `nav`-konfigurationen:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyder att använda `Toc`-mallen för rendering, vilket innebär att rendera en enskild `Markdown`-mall.

`TOC` är en förkortning av `Table of Contents`. När denna mall renderas kommer denna `Markdown`-fills innehållsförteckning att visas i sidofältet.

`url:` representerar `Markdown`-filens sökväg ( `/` motsvarar rotkatalogen `/README.md`, filnamnet börjar med en stor bokstav och slutar med en liten bokstav).

### `use: Md`, enskild mall (utan innehållsförteckning)

`Md`-mallen och `Toc`-mallen är desamma och båda används för att rendera en enskild `Markdown`-fil. Men `Md`-mallen visar inte innehållsförteckningen i sidofältet.

Du kan ändra `use: Toc` i den tidigare konfigurationen till `use: Md`, köra `i18n.site` igen i `md`-katalogen och sedan besöka utvecklingsförhandsgranskningens webbadress för att observera förändringarna på startsidan.

### Standardinläsning utan konfigurerad sökväg

Om en viss sökväg anropas och dess sökvägsprefix inte är konfigurerat i `nav:`, laddas som standard den `Markdown`-fil som motsvarar sökvägen och renderas med `Md`-mallen.

Till exempel, om `/test` anropas och `nav:` inte är konfigurerat för denna sökväg och sidspråket är engelska (kod `en`), laddas `/en/test.md` som standard och renderas med `Md`-mallen.

Om `/en/test.md`-filen inte finns, visas standard `404`-sidan.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, flera filers mall

I konfigurationsfilen:

```
  - i18n: blog
    use: Doc
```

Detta indikerar att `Doc` används för mallrendering.

`Doc`-mallen stöder integration av flera `Markdown`-filer för att generera en eller flera projektets dokumentationssidor.

#### Enstaka projekt (flera filer)

`blog` som nämns ovan är ett enskilt projektläge för `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### När url Är Tom Har Den Som Standard Värdet i18n

Om `url` inte anges, har `url` standardvärdet `i18n`. Denna regel gäller också för andra maller.

Ovanstående skrivning motsvarar `url: blog`, och dess motsvarande fil är `en/blog/TOC`.

#### Flera projekt

`.i18n/conf.yml`-konfigurationen för `i18n:doc` är för flera projekt.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Här betyder `menu: NB demo1,demo2` att du använder `NB`-mallen för att rendera rullgardinsmenyn.

`NB` är en förkortning av `Name Brief`, vilket innebär att rullgardinsmenyn kan visa projektets namn och slogan.

`NB` följs av parametern `demo1,demo2`.
Observera: ** Det får inte finnas några mellanslag ** före och efter kommatecknet `,` i `demo1,demo2`.

För ovanstående parametrar är motsvarande katalogindexfil:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC-innehållsförteckning index

`i18n.site` kommer att köra `js`-pluginet `.i18n/hook/after.tran/TOC.js` i demolagret för att läsa `TOC`-katalogindexfilerna som motsvarar `doc`-mallkonfigurationen och generera en `json`-innehållsförteckning.

Om du använder `doc`-mallen måste du ha denna plugin.

Om du initialiserar ett `i18n.site`-projekt från en tom mapp, kom ihåg att kopiera `.i18n` från demolagret till din katalog.

`Doc`-mallen kommer att rendera innehållsförteckningen baserat på den genererade `json`.

##### Detaljerad innehållsförklaring

`en/blog/TOC`-innehållet är som följer:

```
README.md

news/README.md
  news/begin.md
```

##### Använd indrag för att indikera nivåer

`README.md` i första raden av `en/blog/TOC` ovan motsvarar `i18n.site` i figuren nedan, vilket är projektnamnet.

De följande två raderna visas som i skärmdumpen nedan.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` motsvarar `News`
`news/begin.md` motsvarar `Our Product is Online !`

`TOC`-filer använder indrag för att indikera konturens hierarkiska struktur, stödjer flera nivåers indrag och rader som börjar med `#` som kommentarer.

##### På föräldranivå skrivs endast titeln, inte innehållet

När det finns flera nivåer av indrag skrivs endast titeln på föräldranivån, inte innehållet, annars kan layouten bli förstörd.

##### Projektets README.md

Innehåll kan skrivas i projektets `README.md`, till exempel `en/demo2/README.md`.

Observera att innehållet i denna fil inte visar en innehållsförteckning, så det rekommenderas att hålla längden kort och skriva en kort introduktion.

###### Projektslogan

Du kan se att `Deme Two` `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Detta motsvarar den första raden i `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Innehållet efter det första kolonet `:` i titeln på första nivån i projektets `README.md` betraktas som projektets slogan.

Användare från Kina, Japan och Korea, observera att ni bör använda halvbreddskolon `:` istället för fullbreddskolon.

##### Hur flyttar man TOC i bulk?

`TOC`-filer måste placeras i katalogen för källspråket.

Till exempel, om källspråket är kinesiska, är `TOC` ovan `zh/blog/TOC`.

Om källspråket ändras måste du flytta `TOC`-filerna för ett visst språk i projektet till ett annat språk.

Du kan hänvisa till följande kommando:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ändra `en/` och `zh/` i kommandot ovan till din språkkod.