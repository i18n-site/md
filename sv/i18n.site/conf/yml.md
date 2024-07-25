# .i18n/conf.yml

`i18n.site` Konfigurationsfilen är `.i18n/conf.yml` .

Förutom `ignore:` och `i18n:` inställningarna för [`i18`](/i18) är konfigurationsfilen som följer:

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

Bland dem `upload` `ext:` konfigurationsobjektet att endast `.md` kommer att laddas upp vid publicering.

## Toppnavigering nav

`nav:` konfigurationsalternativ, motsvarande navigeringsmenyn överst på startsidan.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Bland `home: Home` `en/i18n.yml` `i18n: home`

`en/i18n.yml` kommer att översättas till flera språk, till exempel `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

När översättningen är klar kan du ändra värdet på `yml` i översättningen, men lägg inte till eller ta bort nyckeln för översättning `yml` .

### `use: Toc` Enstaka Filmall (Med Kontur)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyder att använda `Toc` , vilket är att rendera en enda `Markdown` -mall.

`TOC` är förkortningen av `Table of Contents` . När denna mall renderas kommer konturerna av denna `Markdown` -fil att visas i sidofältet.

`url:` representerar filsökvägen till `Markdown` ( `/` motsvarar rotkatalogen `/README.md` , detta filnamn kräver ett prefix med versaler och ett suffix med gemener).

### `use: Md` Enstaka Filmall (Ingen Kontur)

`Md` Mall är samma som `Toc` , båda används för att rendera en enda `Markdown` -fil. Dock `Md` mallen visar inte konturen i sidofältet.

Du kan ändra `use: Toc` i ovanstående konfiguration till `use: Md` , köra `i18n.site` i `md` -katalogen igen, och sedan besöka utvecklingsförhandsgranskningens URL för att observera ändringarna på hemsidan.

### Standardladdning Utan Konfigurationssökväg

Om sökvägsprefixet för en viss sökväg som nås inte är konfigurerat i `nav:` kommer `MarkDown` -filen som motsvarar sökvägen att laddas som standard och renderas med `Md` -mall.

Till exempel, om du besöker `/test` och `nav:` är konfigurerad utan denna sökväg, och sidspråket är engelska (kod `en` ), kommer mallen att laddas `/en/test.md` och återges med `Md` som standard.

Om `/en/test.md` den här filen inte finns kommer standardsidan `404` att visas.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Mall För Flera Filer

I konfigurationsfilen:

```
  - i18n: blog
    use: Doc
```

Indikerar att använda `Doc` för mallrendering.

`Doc` Mall stöder integrering av flera `MarkDown` för att generera dokumentkonturer för enstaka eller flera projekt.

#### Enstaka Projekt (Flera Filer)

`blog` i ovanstående är enkelprojektläget för `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### När url Är Tom Har Den Som Standard Värdet i18n

Om du inte skriver `url` `url` till värdet `i18n` .

Ovanstående skrivmetod motsvarar att ha `url: blog` och dess motsvarande fil är `en/blog/TOC` .

#### Flera Projekt

`.i18n/conf.yml` Konfigurationen i `i18n:doc` är multiprojektläge.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Här betyder `menu: NB demo1,demo2` att använda `NB` för att återge rullgardinsmenyn.

`NB` , är förkortningen av `Name Breif` , vilket indikerar att rullgardinsmenyn kan visa projektets namn och slogan.

`NB` följs av parametern `demo1,demo2` som skickas till den.
Observera att det inte ska finnas några mellanslag ** före `demo1,demo2` efter komma `,` i : **

För ovanstående parametrar är motsvarande katalogindexfil:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Innehållsförteckning Index

`i18n.site` Kommer att köra `js` plugin `.i18n/hook/after.tran/TOC.js` i demolagret för att läsa katalogindexfilen `doc` motsvarande mallkonfigurationen `TOC` för att generera `json` för katalogkonturen.

Om du `doc` mallen måste du ha denna plug-in.

Om du initierar `i18n.site` från en tom mapp, kom ihåg att kopiera `.i18n` i demoprojektet till din katalog.

Mallen kommer att återge innehållsförteckningen baserat på det genererade `json` `Doc`

##### Detaljerad Innehållsförklaring

Innehållet är : följer `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Använd Indrag För Att Indikera Nivåer

Ovan `en/blog/TOC` `README.md` i den första raden motsvarar `i18n.site` i bilden nedan, vilket är projektets namn.

De följande två raderna är som visas i skärmdumpen nedan.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` motsvarar `News` ,
`news/begin.md` motsvarar `Our Product is Online !`

`TOC` Filen är indragen för att indikera det hierarkiska förhållandet för konturen och stöder indrag på flera nivåer.

##### Föräldranivån Skriver Bara Titeln, Inte Innehållet.

När det finns flera nivåer av indrag skriver den överordnade nivån bara titeln och inte innehållet. Annars blir typografin förstörd.

##### Projekt README.md 

`README.md` för projektet, till exempel, kan du skriva innehåll i `en/demo2/README.md` .

Observera att innehållet i denna fil inte visar en innehållsförteckning, så det rekommenderas att begränsa längden och skriva en kort introduktion.

###### Projektslogan

Som du kan se `Deme Two` under rullgardinsmenyn och katalogens projektnamn, finns dess projektslogan `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: motsvarar den första raden `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Innehållet efter första kolon `:` i titeln på första nivån kommer att betraktas som projektets slogan.

Användare från Kina, Japan och Korea, vänligen observera att du måste använda kolon på halv bredd istället för full bredd `:`

##### Hur Flyttar Man TOC I Bulk?

`TOC` Filen måste placeras i källspråkets katalog.

Till exempel, om källspråket är kinesiska, `zh/blog/TOC` `TOC`

Om källspråket modifieras måste du batchflytta `TOC` på ett visst språk i projektet till ett annat språk.

Du kan hänvisa till följande kommandon:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Vänligen ändra `en/` och `zh/` i kommandot ovan till din språkkod.


