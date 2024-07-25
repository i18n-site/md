# .i18n/conf.yml

Konfigūracijos failas yra `.i18n/conf.yml` `i18n.site`

Išskyrus `ignore:` ir `i18n:` nustatymus [`i18`](/i18) konfigūracijos failas yra toks:

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

Tarp jų `ext:` konfigūracijos elementas reiškia `upload` kad paskelbiant bus įkelta tik `.md` .

## Viršutinė Navigacijos Navigacija

`nav:` parinktys, atitinkančios pagrindinio puslapio viršuje esantį naršymo meniu.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Tarp jų `i18n: home` atitinka `en/i18n.yml`中`home: Home` .

bus išverstas į kelias kalbas, pvz., `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kai vertimas bus baigtas, galite pakeisti vertimo `yml` , bet nepridėkite ir neištrinkite vertimo rakto `yml` .

### `use: Toc` Vieno Failo Šablonas (Su Kontūru)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` reiškia naudoti `Toc` atvaizdavimą, kuris yra vieno `Markdown` šablono atvaizdavimas.

`TOC` `Table of Contents` `Markdown`

`url:` žymi failo kelią `Markdown` ( `/` atitinka šakninį katalogą `/README.md` , šiam failo pavadinimui reikalingas didžiųjų raidžių priešdėlis ir mažosios raidės priesaga).

### `use: Md` Vieno Failo Šablonas (Be Kontūro)

`Md` yra toks pat kaip `Toc` , abu naudojami vienam `Markdown` failui pateikti. Tačiau `Md` šablonas nerodo kontūro šoninėje juostoje.

Aukščiau pateiktoje konfigūracijoje galite `use: Toc` į `use: Md` , paleisti `i18n.site` dar kartą `md` kataloge, tada apsilankykite kūrimo peržiūros URL, kad pamatytumėte pakeitimus pagrindiniame puslapyje.

### Numatytasis Įkėlimas Be Konfigūracijos Kelio

Jei tam tikro pasiekiamo kelio kelio priešdėlis nesukonfigūruotas `nav:` kelią atitinkantis `MarkDown` failas bus įkeltas pagal numatytuosius nustatymus ir pateikiamas naudojant `Md` šabloną.

`Md` `nav:` `/en/test.md` `en` `/test`

`/en/test.md` šio failo nėra, bus rodomas numatytasis `404` puslapis.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Kelių Failų Šablonas

Konfigūracijos faile:

```
  - i18n: blog
    use: Doc
```

Nurodo, kad šablono atvaizdavimui naudojamas `Doc`

`Doc` `MarkDown`

#### Vienas Projektas (Keli Failai)

`blog` yra vieno projekto režimas `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kai url Yra Tuščias, Jo Numatytoji Reikšmė Yra i18n

Jei nerašote `url` `url` į `i18n` reikšmę.

Aukščiau pateiktas rašymo būdas atitinka `url: blog` o atitinkamas failas yra `en/blog/TOC` .

#### Keli Projektai

`.i18n/conf.yml` Konfigūracija `i18n:doc` yra kelių projektų režimas.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Čia `menu: NB demo1,demo2` reiškia naudoti `NB` kad būtų pateiktas išskleidžiamasis meniu.

`NB` yra `Name Breif` santrumpa, nurodanti, kad išskleidžiamajame meniu gali būti rodomas projekto pavadinimas ir šūkis.

Po `NB` yra jam perduotas parametras `demo1,demo2` .
Atminkite `demo1,demo2` kad prieš ir po kablelio ** neturėtų būti tarpų `,` : **

Pirmiau minėtiems parametrams atitinkamas katalogo indekso failas yra:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Turinio Rodyklė

Demonstraciniame sandėlyje vykdys `.i18n/hook/after.tran/TOC.js` `js` `i18n.site` kad nuskaitytų katalogo indekso failą `doc` atitinkantį šablono konfigūraciją `TOC` kad būtų sukurtas katalogo kontūro `json` .

Jei naudojate `doc` , turite turėti šį papildinį.

Jei inicijuojate `i18n.site` iš tuščio aplanko, nepamirškite nukopijuoti `.i18n` demonstraciniame projekte į savo katalogą.

Šablonas pateiks turinio kontūrą pagal sugeneruotą `json` `Doc`

##### Išsamus Turinio Paaiškinimas

Turinys yra : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Lygiams Nurodyti Naudokite Įtrauką

`en/blog/TOC` `README.md` pirmoje eilutėje atitinka `i18n.site` žemiau esančiame paveikslėlyje, kuris yra projekto pavadinimas.

Kitos dvi eilutės yra tokios, kaip parodyta toliau esančioje ekrano kopijoje.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` atitinka `News` ,
`news/begin.md` atitinka `Our Product is Online !`

`TOC` su įtrauka nurodo kontūro hierarchinį ryšį ir palaiko kelių lygių įtrauką.

##### Tėvų Lygis Rašo Tik Pavadinimą, O Ne Turinį.

Kai yra keli įtraukos lygiai, pirminis lygis rašo tik pavadinimą, o ne turinį. Priešingu atveju tipografija bus sujaukta.

##### Projektas README.md 

Pavyzdžiui, galite rašyti turinį `en/demo2/README.md` `README.md`

Atkreipkite dėmesį, kad šio failo turinys nerodo turinio metmenų, todėl rekomenduojama apriboti ilgį ir parašyti trumpą įžangą.

###### Projekto Šūkis

Kaip matote `Deme Two` žemiau išskleidžiamojo meniu ir katalogo projekto pavadinimo yra projekto šūkis `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: atitinka pirmąją eilutę `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`README.md` Pirmojo lygio pavadinime esantis turinys po pirmojo dvitaškio `:` bus laikomas projekto šūkiu.

Naudotojai iš Kinijos, Japonijos ir Korėjos, atminkite, kad turite naudoti pusės pločio dvitaškį `:`

##### Kaip Perkelti TOC Urmu?

`TOC` turi būti įdėtas į šaltinio kalbos katalogą.

Pavyzdžiui, jei šaltinio kalba yra kinų, tada aukščiau yra `zh/blog/TOC` `TOC`

Jei šaltinio kalba yra pakeista, turite perkelti `TOC` tam tikra projekto kalba į kitą kalbą.

Galite kreiptis į šias komandas:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

`en/` ir `zh/` aukščiau esančioje komandoje savo kalbos kodą.


