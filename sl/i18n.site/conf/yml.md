# .i18n/conf.yml

Profil za `i18n.site` je `.i18n/conf.yml` .

Razen nastavitev [`i18`](/i18) , `ignore:` in `i18n:` je konfiguracijska datoteka naslednja:

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

Med njimi konfiguracijski element `upload` do `ext:` pomeni, da bosta pri objavi naložena samo `.md` .

## Zgornja Navigacija nav

`nav:` možnosti konfiguracije, ki ustrezajo navigacijskemu meniju na vrhu domače strani.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Med njimi `i18n: home` ustreza `home: Home` v `en/i18n.yml` .

`en/i18n.yml` bo preveden v več jezikov, na primer `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ko je prevod končan, lahko spremenite vrednost prevoda `yml` , vendar ne dodajte ali izbrišite ključa prevoda `yml` .

### `use: Toc` , Predloga Za Eno Datoteko (Z Orisom)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` pomeni upodabljanje z uporabo predloge `Toc` , kar pomeni upodabljanje ene same predloge `Markdown` .

`TOC` je okrajšava za `Table of Contents` Ko je ta predloga upodobljena, bo oris te datoteke `Markdown` prikazan v stranski vrstici.

`url:` predstavlja pot datoteke `Markdown` ( `/` ustreza korenskemu imeniku `/README.md` , to ime datoteke zahteva predpono z velikimi črkami in pripono z malimi črkami).

### `use: Md` , Predloga Za Eno Datoteko (Brez Orisa)

Predloga `Md` in predloga `Toc` sta enaki in obe se uporabljata za upodabljanje ene same datoteke `Markdown` . Toda predloga `Md` ne prikazuje orisa v stranski vrstici.

`use: Toc` v zgornji konfiguraciji lahko spremenite v `use: Md` , znova zaženete `i18n.site` v imeniku `md` in nato obiščete URL predogleda razvoja, da opazujete spremembe na domači strani.

### Privzeto Nalaganje Brez Konfiguracijske Poti

Če se dostopa do določene poti in njena predpona poti ni konfigurirana v `nav:` , bo datoteka `MarkDown` , ki ustreza poti, privzeto naložena in upodobljena s predlogo `Md` .

Na primer, če se dostopa do `/test` in je `nav:` konfiguriran brez te poti in je jezik strani angleščina (koda `en` ), bo `/en/test.md` privzeto naložen in upodobljen s predlogo `Md` .

Če `/en/test.md` ta datoteka ne obstaja, bo prikazana privzeta `404` stran.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Večdatotečna Predloga

V konfiguracijski datoteki:

```
  - i18n: blog
    use: Doc
```

Označuje uporabo `Doc` za upodabljanje predloge.

Predloga `Doc` podpira integracijo več `MarkDown` za ustvarjanje orisov dokumentov za enega ali več projektov.

#### Posamezen Projekt (Več Datotek)

`blog` zgoraj je način enega elementa `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ko Je url Prazen, Je Privzeta Vrednost i18n

Če `url` ni zapisana, je `url` privzeta vrednost `i18n` To pravilo velja tudi za druge predloge.

Zgornja metoda pisanja je enakovredna `url: blog` , ustrezna datoteka pa je `en/blog/TOC` .

#### Več Projektov

Konfiguracija `i18n:doc` od `.i18n/conf.yml` je večprojektni način.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Tukaj `menu: NB demo1,demo2` pomeni uporabo predloge `NB` za upodabljanje spustnega menija.

`NB` , kar je okrajšava od `Name Breif` , pomeni, da lahko v spustnem meniju prikažete ime in slogan projekta.

`NB` sledi parameter `demo1,demo2` , ki mu je bil posredovan.
Opomba : ** Pred in za vejico `,` v `demo1,demo2` ne sme biti ** .

Ustrezna datoteka indeksa imenika za zgornje parametre je:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Kazalo Vsebine

`i18n.site` bo izvedel `js` vtičnik `.i18n/hook/after.tran/TOC.js` v predstavitvenem skladišču, da prebere indeksno datoteko `doc` imenikov, ki ustreza konfiguraciji predloge `TOC` , da ustvari oris `json` imenikov.

Če uporabljate predlogo `doc` , morate imeti ta vtičnik.

Če inicializirate projekt `i18n.site` iz prazne mape, ne pozabite kopirati predstavitvenega projekta `.i18n` v svoj imenik.

Predloga `Doc` bo upodobila oris kazala na podlagi ustvarjenega `json` .

##### Podrobna Razlaga Vsebine

`en/blog/TOC` je naslednja :

```
README.md

news/README.md
  news/begin.md
```

##### Za Označevanje Ravni Uporabite Zamik

`README.md` v prvi vrstici od `en/blog/TOC` zgoraj ustreza `i18n.site` na spodnji sliki, kar je ime projekta.

Naslednji dve vrstici sta prikazani na spodnjem posnetku zaslona.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` ustreza `News` ,
`news/begin.md` ustreza `Our Product is Online !`

Datoteke `TOC` so zamaknjene, da nakažejo hierarhično razmerje orisa in podpirajo večnivojsko zamikanje.

##### Nadrejena Raven Napiše Le Naslov, Ne Pa Vsebine.

Če obstaja več ravni zamika, nadrejena raven zapiše samo naslov in ne vsebine. V nasprotnem primeru bo tipografija motena.

##### Projekt README.md

Vsebina je lahko zapisana v postavki `README.md` , na primer `en/demo2/README.md` .

Upoštevajte, da vsebina te datoteke ne prikazuje orisa kazala, zato priporočamo, da omejite dolžino in napišete kratek uvod.

###### Slogan Projekta

Vidite lahko, da ima `Deme Two` slogan projekta pod spustnim menijem in ime projekta v katalogu `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

To ustreza prvi vrstici `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Vsebina za prvim dvopičjem `:` naslova prve stopnje projekta `README.md` bo obravnavana kot slogan projekta.

Uporabniki iz Kitajske, Japonske in Koreje upoštevajte, da morate namesto dvopičja polne širine uporabiti dvopičje `:` v polovični širini.

##### Kako Premakniti TOC v Velikem Obsegu?

`TOC` datotek je treba postaviti v imenik izvornega jezika.

Na primer, če je izvorni jezik kitajščina, je `TOC` zgoraj `zh/blog/TOC` .

Če je izvorni jezik spremenjen, morate paketno premakniti `TOC` datotek določenega jezika v projektu v drug jezik.

Lahko se sklicujete na naslednje ukaze:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Prosimo, spremenite `en/` in `zh/` v zgornjem ukazu v kodo svojega jezika.