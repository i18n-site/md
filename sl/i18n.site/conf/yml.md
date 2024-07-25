# .i18n/conf.yml

`i18n.site` Konfiguracijska datoteka je `.i18n/conf.yml` .

Razen nastavitev `ignore:` in `i18n:` za [`i18`](/i18) je konfiguracijska datoteka naslednja:

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

Med njimi postavka `ext:` konfiguracije `upload` pomeni, da bo pri objavi naložen samo `.md` .

## Zgornja Navigacija nav

`nav:` možnosti konfiguracije, ki ustrezajo navigacijskemu meniju na vrhu domače strani.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Med njimi `i18n: home` ustreza `en/i18n.yml`中`home: Home` .

`en/i18n.yml` bo preveden v več jezikov, kot je `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ko je prevod končan, lahko spremenite vrednost `yml` v prevodu, vendar ne dodajte ali izbrišite ključa prevoda `yml` .

### `use: Toc` , Predloga Za Eno Datoteko (Z Orisom)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` pomeni uporabo upodabljanja `Toc` , ki upodablja eno samo predlogo `Markdown` .

`TOC` je okrajšava za `Table of Contents` Ko je ta predloga upodobljena, bo oris te datoteke `Markdown` prikazan v stranski vrstici.

`url:` predstavlja pot datoteke `Markdown` ( `/` ustreza korenskemu imeniku `/README.md` , to ime datoteke zahteva predpono z velikimi in malimi črkami).

### `use: Md` , Predloga Za Eno Datoteko (Brez Orisa)

Predloga je enaka `Toc` `Md` oba se uporabljata za upodabljanje ene datoteke `Markdown` . Vendar `Md` predloga ne prikazuje orisa v stranski vrstici.

Lahko spremenite `use: Toc` v zgornji konfiguraciji na `use: Md` , ponovno zaženite `i18n.site` v imeniku `md` in nato obiščite URL za predogled razvoja, da opazujete spremembe na domači strani.

### Privzeto Nalaganje Brez Konfiguracijske Poti

Če predpona poti določene poti, do katere dostopate, ni konfigurirana v `nav:` bo datoteka `MarkDown` , ki ustreza poti, privzeto naložena in upodobljena s predlogo `Md` .

Na primer, če obiščete `/test` in je `nav:` konfiguriran brez te poti, jezik strani pa je angleščina (koda `en` ), bo predloga privzeto naložena `/en/test.md` in upodobljena `Md` .

Če `/en/test.md` ta datoteka ne obstaja, bo prikazana privzeta stran `404` .

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Večdatotečna Predloga

V konfiguracijski datoteki:

```
  - i18n: blog
    use: Doc
```

Označuje uporabo `Doc` za upodabljanje predloge.

`Doc` Predloga podpira integracijo več `MarkDown` za ustvarjanje orisov dokumentov za enega ali več projektov.

#### Posamezen Projekt (Več Datotek)

`blog` v zgornjem je način enega projekta `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ko Je url Prazen, Je Privzeta Vrednost i18n

`url` ne napišete `url` `i18n` to pravilo velja tudi za druge predloge.

Zgornji način zapisovanja je enakovreden `url: blog` njegova ustrezna datoteka pa je `en/blog/TOC` .

#### Več Projektov

`.i18n/conf.yml` Konfiguracija v `i18n:doc` je večprojektni način.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Tukaj `menu: NB demo1,demo2` pomeni uporabo `NB` za upodabljanje spustnega menija.

`NB` , je okrajšava `Name Breif` , ki označuje, da lahko spustni meni prikaže ime in slogan projekta.

`NB` sledi parameter `demo1,demo2` , ki mu je bil posredovan.
Opomba : ** Pred in za vejico `,` ne sme biti ** `demo1,demo2`

Za zgornje parametre je ustrezna datoteka indeksa imenika:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Kazalo Vsebine

`i18n.site` Izvedel bo vtičnik `js` `.i18n/hook/after.tran/TOC.js` v predstavitvenem skladišču za branje datoteke indeksa imenika `doc` ki ustreza konfiguraciji predloge `TOC` da se ustvari `json` orisa imenika.

Če uporabljate predlogo `doc` , morate imeti ta vtičnik.

Če inicializirate projekt `i18n.site` iz prazne mape, ne pozabite kopirati `.i18n` v predstavitvenem projektu v svoj imenik.

Predloga bo prikazala oris kazala na podlagi ustvarjenega `json` `Doc`

##### Podrobna Razlaga Vsebine

Vsebina : naslednja `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Za Označevanje Ravni Uporabite Zamik

`en/blog/TOC` `README.md` v prvi vrstici ustreza `i18n.site` na spodnji sliki, kar je ime projekta.

Naslednji dve vrstici sta prikazani na spodnjem posnetku zaslona.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odgovarja `News` ,
`news/begin.md` odgovarja `Our Product is Online !`

`TOC` je zamaknjena, da označuje hierarhično razmerje orisa in podpira večnivojsko zamikanje.

##### Nadrejena Raven Napiše Le Naslov, Ne Pa Vsebine.

Če obstaja več ravni zamika, nadrejena raven zapiše samo naslov in ne vsebine. V nasprotnem primeru bo tipografija motena.

##### Projekt README.md 

`README.md` projekta, lahko na primer napišete vsebino v `en/demo2/README.md` .

Upoštevajte, da vsebina te datoteke ne prikazuje orisa kazala, zato priporočamo, da omejite dolžino in napišete kratek uvod.

###### Slogan Projekta

Kot lahko vidite `Deme Two` je pod spustnim menijem in imenom projekta katalog : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ustreza prvi vrstici `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Vsebina za prvim `:` v naslovu prve stopnje bo obravnavana kot slogan projekta.

Uporabniki iz Kitajske, Japonske in Koreje, upoštevajte, da morate uporabiti dvopičje polovične širine namesto dvopičja polne širine `:`

##### Kako Premakniti TOC v Velikem Obsegu?

`TOC` Datoteka mora biti postavljena v imenik izvornega jezika.

Na primer, če je izvorni jezik kitajščina, je `TOC` zgoraj `zh/blog/TOC` .

Če je izvorni jezik spremenjen, morate paketno premakniti `TOC` v določenem jeziku v projektu v drug jezik.

Lahko se sklicujete na naslednje ukaze:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Prosimo, spremenite `en/` in `zh/` v zgornjem ukazu v kodo svojega jezika.


