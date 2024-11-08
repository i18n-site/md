# .i18n/conf.yml

Konfiguracijska datoteka za `i18n.site` je `.i18n/conf.yml` in vsebina je naslednja :

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

Med njimi konfiguracijski element `upload` do `ext:` pomeni, da bosta pri objavi naložena samo `.md` .

## Zgornja Navigacija nav

`nav:` možnosti konfiguracije, ki ustrezajo navigacijskemu meniju na vrhu domače strani.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Med njimi `i18n: home` ustreza `home: Home` v `en/i18n.yml` (pri čemer je `en` izvorni jezik prevoda projekta).

Vsebina `en/i18n.yml` je besedilo, prikazano v navigacijskem meniju, ki bo prevedeno v skladu z `fromTo` v konfiguraciji, na primer prevedeno v `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ko je prevod končan, lahko spremenite vrednost prevoda `yml` , vendar ne dodajte ali izbrišite ključa prevoda `yml` .

### `use: Toc` Dokumenta Z Orisom

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` pomeni upodabljanje z uporabo predloge `Toc` , kar pomeni upodabljanje ene same predloge `Markdown` .

`TOC` je okrajšava za `Table of Contents` Ko je ta predloga upodobljena, bo oris te datoteke `Markdown` prikazan v stranski vrstici.

`url:` predstavlja pot datoteke `Markdown` ( `/` ustreza korenskemu imeniku `/README.md` , to ime datoteke zahteva predpono z velikimi črkami in pripono z malimi črkami).

### `use: Md` Dokumenta Brez Orisa

Predloga `Md` in predloga `Toc` sta enaki in obe se uporabljata za upodabljanje ene same datoteke `Markdown` . Toda predloga `Md` ne prikazuje orisa v stranski vrstici.

`use: Toc` v zgornji konfiguraciji lahko spremenite v `use: Md` , znova zaženete `i18n.site` v imeniku `md` in nato obiščete URL predogleda razvoja, da opazujete spremembe na domači strani.

### `use: Blog` Predlog Bloga

Predloga bloga prikazuje seznam člankov (naslovov in povzetkov) po vrstnem redu glede na čas objave.

[→ Kliknite tukaj, če želite izvedeti več o določeni konfiguraciji](/i18n.site/conf/blog)

### `use: Doc` Predloge Dokumentov Z Več Datotekami

V konfiguracijski datoteki:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Označuje uporabo `Doc` za upodabljanje predloge.

Predloga `Doc` podpira integracijo več `MarkDown` za ustvarjanje orisov dokumentov za enega ali več projektov.

#### Več Projektov in Več Datotek

Konfiguracija `.i18n/conf.yml` v `i18n:doc` je način upodabljanja več projektov in več datotek.

Tukaj `menu: NB demo1,demo2` pomeni uporabo predloge `NB` za upodabljanje spustnega menija.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , kar je okrajšava od `Name Breif` , pomeni, da lahko v spustnem meniju prikažete ime in slogan projekta.

`NB` sledi parameter `demo1,demo2` , ki mu je bil posredovan.

Opomba : ** Pred in za vejico `,` v `demo1,demo2` ne sme biti ** .

Ustrezna datoteka indeksa imenika za zgornje parametre je:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### En Projekt Več Datotek

Če imate samo en projekt, ga lahko konfigurirate na naslednji način.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Posamezen projekt z več datotekami ne podpira konfiguriranja `url` kot korenske poti `/`
> Če __conf.yml → nav:__ Nobena korenska pot ni konfigurirana, bo pri dostopu do domače strani spletnega mesta samodejno prepisana na prvi URL pod konfiguracijo `nav:` .
> Ta zasnova je namenjena boljšemu razlikovanju projektnih dokumentov, spletnih dnevnikov in druge vsebine prek imenikov.
> Priporočljivo je, da kot domačo stran uporabite eno datoteko in eno stran.

> [!TIP]
> Če `url` ni zapisana, je `url` privzeta vrednost `i18n` To pravilo velja tudi za druge predloge.

#### TOC Kazalo Vsebine

Če je v konfiguraciji omogočena predloga `use: Doc` , omogočite vtičnik `i18n.addon/toc` v `.i18n/conf.yml` Konfiguracija je naslednja :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` bo samodejno namestil in izvedel ta vtičnik, prebral `TOC` datoteko indeksa imenika in ustvaril `json` oris imenika.

Če gre za en projekt z več datotekami, je korenski imenik `TOC` imenik, ki ustreza `url:` v imeniku izvornega jezika. Na primer, če je izvorni jezik kitajščina: datoteka, ki ustreza `url: flashduty` je `zh/flashduty/TOC` .

Če gre za več projektov in več datotek, ni treba konfigurirati `url:` Korenski imenik `TOC` je imenik, ki ustreza vrednosti `i18n` .

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

Datoteke `TOC` so zamaknjene, da nakažejo hierarhično razmerje orisa, podpirajo zamik na več ravneh in vrstične komentarje, ki se začnejo z `# ` .

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

### Privzeto Nalaganje Brez Konfiguracijske Poti

Za določeno pot, do katere dostopate, če predpona poti ni konfigurirana v `nav:` , bo datoteka `MarkDown` , ki ustreza poti, privzeto naložena in upodobljena s predlogo `Md` .

Na primer, če se dostopa do `/test` in je `nav:` konfiguriran brez predpone te poti in je trenutni jezik brskanja angleščina (koda `en` ), bo `/en/test.md` privzeto naložen in upodobljen s predlogo `Md` .

Če `/en/test.md` ta datoteka ne obstaja, bo prikazana privzeta `404` stran.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">