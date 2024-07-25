# .i18n/conf.yml

`i18n.site` Konfiguračný súbor je `.i18n/conf.yml` .

Okrem nastavení `ignore:` a `i18n:` pre [`i18`](/i18) , konfiguračný súbor je nasledujúci:

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

Medzi nimi `ext:` položka konfigurácie `upload` znamená, že pri publikovaní bude nahraných iba `.md` .

## Horná Navigácia nav

`nav:` konfigurácie zodpovedajúce navigačnej ponuke v hornej časti domovskej stránky.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Medzi nimi, `i18n: home` zodpovedá `en/i18n.yml`中`home: Home` .

`en/i18n.yml` bude preložený do viacerých jazykov, napríklad `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po dokončení prekladu môžete zmeniť hodnotu `yml` v preklade, ale nepridávajte ani neodstraňujte kľúč prekladu `yml` .

### `use: Toc` Šablóna Jedného Súboru (S Obrysom)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` znamená použitie vykresľovania `Toc` , čo je vykreslenie jednej šablóny `Markdown` .

`TOC` je skratka `Table of Contents` . Pri vykreslení tejto šablóny sa na bočnom paneli zobrazí obrys tohto súboru `Markdown` .

`url:` predstavuje cestu k súboru `Markdown` ( `/` zodpovedá koreňovému adresáru `/README.md` , tento názov súboru vyžaduje veľkú predponu a malú príponu).

### `use: Md` Šablóna S Jedným Súborom (Bez Obrysu)

`Md` Template je rovnaký ako `Toc` , obe sa používajú na vykreslenie jedného `Markdown` súboru. `Md` Šablóna však nezobrazuje obrys na bočnom paneli.

`md` vyššie `i18n.site` konfigurácii môžete `use: Md` `use: Toc`

### Predvolené Načítanie Bez Konfiguračnej Cesty

Ak predpona cesty určitej cesty, ku ktorej sa pristupuje, nie je nakonfigurovaná v `nav:` súbor `MarkDown` zodpovedajúci ceste sa štandardne načíta a vykreslí pomocou šablóny `Md` .

Ak napríklad navštívite `/test` a `nav:` je nakonfigurované bez tejto cesty a jazyk stránky je angličtina (kód `en` ), predvolene sa šablóna načíta `/en/test.md` a vykreslí pomocou `Md` .

Ak `/en/test.md` tento súbor neexistuje, zobrazí sa predvolená `404` stránka.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Šablóna S Viacerými Súbormi

V konfiguračnom súbore:

```
  - i18n: blog
    use: Doc
```

Označuje použitie `Doc`

`Doc` podporuje integráciu viacerých `MarkDown` na generovanie obrysov dokumentov pre jeden alebo viacero projektov.

#### Jeden Projekt (Viac Súborov)

`blog` vo vyššie uvedenom je režim jedného projektu `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Keď Je Adresa url Prázdna, Predvolená Hodnota Je i18n

Ak nezapíšete `url` `url` na hodnotu `i18n` Toto pravidlo platí aj pre iné šablóny.

Vyššie uvedená metóda zápisu je ekvivalentná s `url: blog` a jej zodpovedajúci súbor je `en/blog/TOC` .

#### Viacero Projektov

`.i18n/conf.yml` Konfigurácia v `i18n:doc` je režim viacerých projektov.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Tu znamená `menu: NB demo1,demo2` použitie `NB` na vykreslenie rozbaľovacej ponuky.

`NB` , je skratka `Name Breif` , čo znamená, že v rozbaľovacej ponuke sa môže zobraziť názov a slogan projektu.

`NB` nasleduje parameter `demo1,demo2` , ktorý mu bol odovzdaný.
Všimnite si `demo1,demo2` že pred a ** čiarkou `,` v : **

Pre vyššie uvedené parametre je zodpovedajúci súbor indexu adresára:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Index Obsahu TOC

`i18n.site` Spustí `js` plugin `.i18n/hook/after.tran/TOC.js` v demo sklade na prečítanie súboru indexu adresára `doc` zodpovedajúceho konfigurácii šablóny `TOC` a vygeneruje `json` obrysu adresára.

Ak používate šablónu `doc` , musíte mať tento doplnok.

Ak inicializujete projekt `i18n.site` z prázdneho priečinka, nezabudnite skopírovať `.i18n` v demo projekte do svojho adresára.

`Doc` vykreslí osnovu obsahu na základe vygenerovaného `json` .

##### Podrobné Vysvetlenie Obsahu

Obsah : nasledovný `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Na Označenie Úrovní Použite Odsadenie

Hore `en/blog/TOC` `README.md` v prvom riadku zodpovedá `i18n.site` na obrázku nižšie, čo je názov projektu.

Nasledujúce dva riadky sú ako na obrázku nižšie.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` sa viaže na `News` ,
`news/begin.md` sa viaže na `Our Product is Online !`

`TOC` Súbor je odsadený na označenie hierarchického vzťahu obrysu a podporuje viacúrovňové odsadenie.

##### Nadradená Úroveň Píše Iba Názov, Nie Obsah.

Ak existuje viacero úrovní odsadenia, nadradená úroveň napíše iba názov a nie obsah. V opačnom prípade bude typografia zmätená.

##### Projekt README.md 

`README.md` projektu, napríklad môžete napísať obsah v `en/demo2/README.md` .

Upozorňujeme, že obsah tohto súboru nezobrazuje prehľad obsahu, preto sa odporúča obmedziť dĺžku a napísať krátky úvod.

###### Slogan Projektu

Ako vidíte `Deme Two` pod rozbaľovacím menu a názvom projektu je `Your Project slogan` jeho projektový slogan :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: zodpovedá prvému riadku `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Obsah za prvou dvojbodkou `:` v názve prvej úrovne sa bude považovať za slogan projektu.

Používatelia z Číny, Japonska a Kórey, upozorňujeme, že musíte použiť dvojbodku s polovičnou šírkou namiesto dvojbodky s plnou šírkou `:`

##### Ako Hromadne Presunúť TOC?

`TOC` Súbor je potrebné umiestniť do adresára zdrojového jazyka.

Napríklad, ak je zdrojový jazyk čínština, `zh/blog/TOC` `TOC`

Ak je zdrojový jazyk upravený, musíte hromadne presunúť `TOC` v určitom jazyku v projekte do iného jazyka.

Môžete použiť nasledujúce príkazy:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Upravte `en/` a `zh/` vo vyššie uvedenom príkaze na kód vášho jazyka.


