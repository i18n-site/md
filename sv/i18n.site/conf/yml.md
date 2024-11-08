# .i18n/conf.yml

Konfigurationsfilen för `i18n.site` är `.i18n/conf.yml` och innehållet är som följer :

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

Bland dem betyder `upload` till `ext:` konfigurationsobjekt att endast `.md` kommer att laddas upp vid publicering.

## Toppnavigering nav

`nav:` konfigurationsalternativ, motsvarande navigeringsmenyn överst på hemsidan.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Bland dem motsvarar `i18n: home` `home: Home` på `en/i18n.yml` (där `en` är källspråket för projektöversättningen).

`en/i18n.yml` innehåll är texten som visas i navigeringsmenyn, som kommer att översättas enligt `fromTo` i konfigurationen, till exempel översatt till `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

När översättningen är klar kan du ändra värdet på översättning `yml` , men inte lägga till eller ta bort nyckeln för översättning `yml` .

### `use: Toc` Dokumentmall Med Kontur

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` betyder rendering med en `Toc` mall, vilket är att rendera en enda `Markdown` mall.

`TOC` är förkortningen av `Table of Contents` När denna mall renderas kommer konturerna av denna `Markdown` fil att visas i sidofältet.

`url:` representerar sökvägen till `Markdown` ( `/` motsvarar rotkatalogen `/README.md` , detta filnamn kräver ett prefix med versaler och ett suffix med gemener).

### `use: Md` Dokumentmall Utan Kontur

`Md` mallen och `Toc` -mallen är samma och båda används för att rendera en enda `Markdown` -fil. Men mallen `Md` visar inte konturen i sidofältet.

Du kan ändra `use: Toc` i ovanstående konfiguration till `use: Md` , köra `i18n.site` i `md` -katalogen igen och sedan besöka webbadressen för utvecklingsförhandsgranskning för att observera ändringarna på hemsidan.

### `use: Blog` Bloggmallar

Bloggmallen visar en lista med artiklar (titlar och sammandrag) i ordning efter publiceringstid.

[→ Klicka här för att lära dig mer om den specifika konfigurationen](/i18n.site/conf/blog)

### `use: Doc` Fildokumentmallar

I konfigurationsfilen:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indikerar att `Doc` används för mallrendering.

`Doc` mall stöder integrering av flera `MarkDown` för att generera dokumentkonturer för enstaka eller flera projekt.

#### Flera Projekt Och Flera Filer

Konfigurationen av `.i18n/conf.yml` i `i18n:doc` är multi-projekt multi-fil rendering läge.

Här betyder `menu: NB demo1,demo2` att du använder mallen `NB` för att återge rullgardinsmenyn.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , som är förkortningen av `Name Breif` , betyder att rullgardinsmenyn kan visa projektets namn och slogan.

`NB` följs av parameter `demo1,demo2` som skickas till den.

Obs : ** Det ska inte finnas några mellanslag ** före och efter kommatecken `,` på `demo1,demo2` .

Motsvarande katalogindexfil för ovanstående parametrar är:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Enstaka Projekt Flera Filer

Om du bara har ett projekt kan du konfigurera det enligt följande.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Ett enda projekt med flera filer stöder inte konfigurering av `url` som rotsökväg `/`
> Om __conf.yml → nav:__ Ingen rotsökväg är konfigurerad, kommer den automatiskt att skrivas om till den första URL-adressen under `nav:` -konfigurationen när du öppnar hemsidan.
> Denna design är att bättre särskilja projektdokument, bloggar och annat innehåll genom kataloger.
> Det rekommenderas att använda en enda fil och en enda sida som startsida.

> [!TIP]
> Om `url` inte skrivs, har `url` som standard värdet `i18n` Denna regel gäller även för andra mallar.

#### TOC Innehållsförteckning Index

Om mall `use: Doc` är aktiverad i konfigurationen, aktivera plug-in `i18n.addon/toc` i `.i18n/conf.yml` Konfigurationen är som följer :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` kommer automatiskt att installera och köra denna plug-in, läsa `TOC` katalogindexfilen och generera `json` katalogkonturen.

Om det är ett enskilt projekt med flera filer, är rotkatalogen `TOC` den katalog som motsvarar `url:` i källspråkskatalogen Till exempel, om källspråket är kinesiska: filen som motsvarar `url: flashduty` är `zh/flashduty/TOC` .

Om det är flera projekt och flera filer, behöver du inte konfigurera `url:` Rotkatalogen för `TOC` är den katalog som motsvarar värdet på `i18n` .

##### Detaljerad Innehållsförklaring

`en/blog/TOC` Innehållet är som följer :

```
README.md

news/README.md
  news/begin.md
```

##### Använd Indrag För Att Indikera Nivåer

`README.md` an i första raden av `en/blog/TOC` ovan motsvarar `i18n.site` i bilden nedan, vilket är projektnamnet.

De följande två raderna är som visas i skärmdumpen nedan.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` motsvarar `News` ,
`news/begin.md` motsvarar `Our Product is Online !`

`TOC` filer är indragna för att indikera det hierarkiska förhållandet för konturen, stödja indrag på flera nivåer och radkommentarer som börjar med `# ` .

##### Föräldernivån Skriver Bara Titeln, Inte Innehållet.

När det finns flera nivåer av indrag skriver den överordnade nivån bara titeln och inte innehållet. Annars blir typografin förstörd.

##### Projekt README.md

Innehåll kan skrivas i punkt `README.md` , till exempel `en/demo2/README.md` .

Observera att innehållet i denna fil inte visar en innehållsförteckning, så det rekommenderas att begränsa längden och skriva en kort introduktion.

###### Projektslogan

Du kan se att `Deme Two` har sin projektord under rullgardinsmenyn `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Detta motsvarar den första raden av `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Innehållet efter första kolon `:` i titeln på första nivån för projekt `README.md` kommer att betraktas som projektets slogan.

Användare från Kina, Japan och Korea, vänligen observera att du bör använda halvbreddskolon `:` istället för fullbreddskolon.

##### Hur Flyttar Man TOC I Bulk?

`TOC` filer måste placeras i katalogen för källspråket.

Till exempel, om källspråket är kinesiska, är `TOC` ovan `zh/blog/TOC` .

Om källspråket ändras måste du flytta `TOC` filerna för ett visst språk i projektet till ett annat språk.

Du kan hänvisa till följande kommandon:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Ändra `en/` och `zh/` i kommandot ovan till din språkkod.

### Standardladdning Utan Konfigurationssökväg

För en viss sökväg som nås, om sökvägsprefixet inte är konfigurerat i `nav:` , kommer filen `MarkDown` som motsvarar sökvägen att laddas som standard och renderas med mallen `Md` .

Till exempel, om `/test` nås och `nav:` är konfigurerad utan prefixet för denna sökväg, och det aktuella webbläsarspråket är engelska (kod `en` ), kommer `/en/test.md` att laddas som standard och renderas med mall `Md` .

Om `/en/test.md` denna fil inte finns, kommer standardsidan `404` att visas.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">