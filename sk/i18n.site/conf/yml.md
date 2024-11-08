# .i18n/conf.yml

Konfiguračný súbor pre `i18n.site` je `.i18n/conf.yml` a obsah je nasledujúci :

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

Medzi nimi `upload` až `ext:` konfiguračná položka znamená, že pri publikovaní budú nahrané iba `.md` .

## Horná Navigácia nav

`nav:` možností konfigurácie, čo zodpovedá navigačnej ponuke v hornej časti domovskej stránky.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Medzi nimi `i18n: home` zodpovedá `home: Home` v `en/i18n.yml` (kde `en` je zdrojový jazyk prekladu projektu).

Obsah `en/i18n.yml` je text zobrazený v navigačnom menu, ktorý bude v konfigurácii preložený podľa `fromTo` , napríklad preložený do `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po dokončení prekladu môžete upraviť hodnotu prekladu `yml` , ale nepridávajte ani neodstraňujte kľúč prekladu `yml` .

### `use: Toc` Dokumentu S Obrysom

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znamená vykreslenie pomocou šablóny `Toc` , čo je vykreslenie jednej šablóny `Markdown` .

`TOC` je skratka `Table of Contents` Keď je táto šablóna vykreslená, obrys tohto súboru `Markdown` sa zobrazí na bočnom paneli.

`url:` predstavuje cestu k súboru `Markdown` ( `/` zodpovedá koreňovému adresáru `/README.md` , tento názov súboru vyžaduje veľkú predponu a malú príponu).

### `use: Md` Dokumentu Bez Obrysu

Šablóna `Md` a šablóna `Toc` sú rovnaké a obe sa používajú na vykreslenie jedného súboru `Markdown` . Šablóna `Md` však nezobrazuje obrys na bočnom paneli.

Môžete upraviť `use: Toc` vo vyššie uvedenej konfigurácii na `use: Md` , znova spustiť `i18n.site` v adresári `md` a potom navštíviť webovú adresu ukážky vývoja a sledovať zmeny na domovskej stránke.

### `use: Blog` Šablón Blogu

Šablóna blogu zobrazuje zoznam článkov (názvov a abstraktov) v poradí podľa času zverejnenia.

[→ Kliknutím sem sa dozviete o konkrétnej konfigurácii](/i18n.site/conf/blog)

### 0 Šablóny Dokumentov S `use: Doc` Súbormi

V konfiguračnom súbore:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Označuje použitie `Doc` na vykreslenie šablóny.

Šablóna `Doc` podporuje integráciu viacerých `MarkDown` na generovanie obrysov dokumentov pre jeden alebo viacero projektov.

#### Viaceré Projekty a Viacero Súborov

Konfigurácia `.i18n/conf.yml` v `i18n:doc` je režim vykresľovania viacerých projektov s viacerými súbormi.

Tu `menu: NB demo1,demo2` znamená použitie šablóny `NB` na vykreslenie rozbaľovacej ponuky.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , čo je skratka `Name Breif` , znamená, že v rozbaľovacej ponuke sa môže zobraziť názov a slogan projektu.

`NB` je nasledovaný parametrom `demo1,demo2` ktorý mu bol odovzdaný.

Poznámka : ** Pred a za čiarkou `,` v `demo1,demo2` by nemali byť žiadne ** .

Zodpovedajúci súbor indexu adresára pre vyššie uvedené parametre je:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Jeden Projekt S Viacerými Súbormi

Ak máte iba jeden projekt, môžete ho nakonfigurovať nasledovne.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Jeden projekt s viacerými súbormi nepodporuje konfiguráciu `url` ako koreňovej cesty `/`
> Ak __conf.yml → nav:__ Nie je nakonfigurovaná žiadna koreňová cesta, pri prístupe na domovskú stránku webovej lokality sa automaticky prepíše na prvú adresu URL pod konfiguráciou `nav:` .
> Tento dizajn slúži na lepšie rozlíšenie projektových dokumentov, blogov a iného obsahu prostredníctvom adresárov.
> Ako domovskú stránku sa odporúča použiť jeden súbor a jednu stránku.

> [!TIP]
> Ak nie je zapísaná `url` , predvolená hodnota `url` je `i18n` Toto pravidlo platí aj pre iné šablóny.

#### Index Obsahu TOC

Ak je v konfigurácii povolená šablóna `use: Doc` , povoľte doplnok `i18n.addon/toc` v `.i18n/conf.yml` Konfigurácia je nasledovná :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` automaticky nainštaluje a spustí tento doplnok, prečíta `TOC` súbor indexu adresára a vygeneruje `json` prehľad adresára.

Ak ide o jeden projekt s viacerými súbormi, koreňový adresár `TOC` je adresár zodpovedajúci `url:` v adresári zdrojového jazyka. Napríklad, ak je zdrojovým jazykom čínština: súbor zodpovedajúci `url: flashduty` je `zh/flashduty/TOC` .

Ak ide o viacero projektov a viacero súborov, nie je potrebné konfigurovať `url:` Koreňový adresár `TOC` je adresár zodpovedajúci hodnote `i18n` .

##### Podrobné Vysvetlenie Obsahu

`en/blog/TOC` Obsah je nasledovný :

```
README.md

news/README.md
  news/begin.md
```

##### Na Označenie Úrovní Použite Odsadenie

`README.md` v prvom riadku `en/blog/TOC` vyššie zodpovedá číslu `i18n.site` na obrázku nižšie, čo je názov projektu.

Nasledujúce dva riadky sú ako na obrázku nižšie.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` zodpovedá `News` ,
`news/begin.md` zodpovedá `Our Product is Online !`

Súbory `TOC` sú odsadené na označenie hierarchického vzťahu obrysu, podporujú viacúrovňové odsadenie a komentáre k riadkom začínajúce `# ` .

##### Nadradená Úroveň Píše Iba Názov, Nie Obsah.

Ak existuje viacero úrovní odsadenia, nadradená úroveň napíše iba názov a nie obsah. V opačnom prípade bude typografia zmätená.

##### Projekt README.md

Obsah je možné zapísať do položky `README.md` , napríklad `en/demo2/README.md` .

Upozorňujeme, že obsah tohto súboru nezobrazuje prehľad obsahu, preto sa odporúča obmedziť dĺžku a napísať krátky úvod.

###### Slogan Projektu

Môžete vidieť `Your Project slogan` že `Deme Two` má svoj slogan projektu pod rozbaľovacím menu a katalógovým názvom projektu : .

![](https://p.3ti.site/1721276842.avif)

To zodpovedá prvému riadku `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Obsah za prvou dvojbodkou `:` v názve projektu `README.md` prvej úrovne sa bude považovať za slogan projektu.

Používatelia z Číny, Japonska a Kórey by mali používať `:` s polovičnou šírkou namiesto dvojbodky s plnou šírkou.

##### Ako Hromadne Presunúť TOC?

`TOC` súborov je potrebné umiestniť do adresára zdrojového jazyka.

Napríklad, ak je zdrojovým jazykom čínština, potom `TOC` vyššie je `zh/blog/TOC` .

Ak je zdrojový jazyk upravený, musíte hromadne presunúť `TOC` súborov určitého jazyka v projekte do iného jazyka.

Môžete použiť nasledujúce príkazy:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Upravte `en/` a `zh/` vo vyššie uvedenom príkaze na kód vášho jazyka.

### Predvolené Načítanie Bez Konfiguračnej Cesty

Ak pre určitú cestu, ku ktorej sa pristupuje, ak predpona cesty nie je nakonfigurovaná na `nav:` , predvolene sa načíta súbor `MarkDown` zodpovedajúci ceste a vykreslí sa pomocou šablóny `Md` .

Ak sa napríklad pristupuje `/test` a `nav:` je nakonfigurovaná bez predpony tejto cesty a aktuálny jazyk prehliadania je angličtina (kód `en` ), predvolene sa načíta `/en/test.md` a vykreslí sa pomocou šablóny `Md` .

Ak `/en/test.md` tento súbor neexistuje, zobrazí sa predvolená `404` stránka.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">