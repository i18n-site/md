# .i18n/conf.yml

`i18n.site` konfigūracijos failas yra `.i18n/conf.yml` , o turinys yra toks :

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

Tarp jų konfigūracijos elementas nuo `upload` iki `ext:` reiškia, kad paskelbiant bus įkelti tik `.md` .

## Viršutinė Navigacijos Navigacija

`nav:` konfigūracijos parinkčių, atitinkančių pagrindinio puslapio viršuje esantį naršymo meniu.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Tarp jų `i18n: home` atitinka `home: Home` `en/i18n.yml` (kur `en` yra projekto vertimo šaltinio kalba).

`en/i18n.yml` turinys yra tekstas, rodomas naršymo meniu, kuris konfigūracijoje bus išverstas pagal `fromTo` , pavyzdžiui, išverstas į `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kai vertimas bus baigtas, galite keisti vertimo reikšmę `yml` , bet nepridėkite ir neištrinkite `yml` vertimo rakto.

### `use: Toc` Dokumento Šablonas Su Kontūrais

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` reiškia atvaizdavimą naudojant `Toc` šabloną, tai yra vieno `Markdown` šablono atvaizdavimas.

`TOC` yra `Table of Contents` santrumpa. Pateikus šį šabloną, šio `Markdown` failo kontūrai bus rodomi šoninėje juostoje.

`url:` reiškia `Markdown` failo kelią ( `/` atitinka šakninį katalogą `/README.md` , šiam failo pavadinimui reikalingas didžiųjų raidžių priešdėlis ir mažųjų raidžių priesagas).

### `use: Md` Dokumento Šablonas Be Kontūro

Šablonai `Md` ir `Toc` yra vienodi ir abu naudojami vienam `Markdown` failui pateikti. Tačiau `Md` šablonas nerodo kontūro šoninėje juostoje.

Galite pakeisti `use: Toc` aukščiau pateiktoje konfigūracijoje į `use: Md` , dar kartą paleisti `i18n.site` kataloge `md` ir apsilankyti kūrimo peržiūros URL, kad pamatytumėte pakeitimus pagrindiniame puslapyje.

### `use: Blog` Dienoraščio Šablonų

Tinklaraščio šablone rodomas straipsnių sąrašas (pavadinimai ir santraukos) paskelbimo laiko tvarka.

[→ Norėdami sužinoti apie konkrečią konfigūraciją, spustelėkite čia](/i18n.site/conf/blog)

### `use: Doc` Failų Dokumentų Šablonai

Konfigūracijos faile:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Nurodo, kad šablono atvaizdavimui naudojamas `Doc` .

`Doc` šablonas palaiko kelių `MarkDown` integravimą, kad būtų generuojami vieno ar kelių projektų dokumentų kontūrai.

#### Keli Projektai Ir Keli Failai

Konfigūracija `.i18n/conf.yml` in `i18n:doc` yra kelių projektų kelių failų atvaizdavimo režimas.

Čia `menu: NB demo1,demo2` reiškia `NB` šablono naudojimą, kad būtų pateiktas išskleidžiamasis meniu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , kuris yra `Name Breif` santrumpa, reiškia, kad išskleidžiamajame meniu gali būti rodomas projekto pavadinimas ir šūkis.

Po `NB` eina jam perduotas parametras `demo1,demo2` .

: ** Neturi būti tarpų ** prieš ir po kablelio `,` iš `demo1,demo2` .

Atitinkamas pirmiau minėtų parametrų katalogo indekso failas yra:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Vieno Projekto Keli Failai

Jei turite tik vieną projektą, galite jį konfigūruoti taip.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Vienas projektas su keliais failais nepalaiko `url` konfigūravimo kaip `/` šakninio kelio
> nav:__ __conf.yml `nav:`
> Šis dizainas skirtas geriau atskirti projekto dokumentus, tinklaraščius ir kitą turinį per katalogus.
> Kaip pagrindinį puslapį rekomenduojama naudoti vieną failą ir vieną puslapį.

> [!TIP]
> Jei `url` neparašyta, `url` numatytoji reikšmė yra `i18n` Ši taisyklė galioja ir kitiems šablonams.

#### TOC Turinio Rodyklė

Jei konfigūracijoje įjungtas šablonas `use: Doc` , įgalinkite papildinį `i18n.addon/toc` `.i18n/conf.yml` Konfigūracija yra tokia :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` automatiškai įdiegs ir vykdys šį papildinį, perskaitys `TOC` katalogo indekso failą ir sugeneruos `json` katalogo kontūrą.

Jei tai vienas projektas su keliais failais, šakninis katalogas `TOC` yra katalogas, atitinkantis `url:` šaltinio kalbos kataloge. Pavyzdžiui, jei šaltinio kalba yra kinų: failas, atitinkantis `url: flashduty` yra `zh/flashduty/TOC` .

Jei tai keli projektai ir keli failai, nereikia konfigūruoti `url:` Šakninis `TOC` katalogas yra katalogas, atitinkantis `i18n` reikšmę.

##### Išsamus Turinio Paaiškinimas

`en/blog/TOC` yra toks :

```
README.md

news/README.md
  news/begin.md
```

##### Lygiams Nurodyti Naudokite Įtrauką

`README.md` pirmoje `en/blog/TOC` eilutėje atitinka `i18n.site` paveikslėlyje žemiau, kuris yra projekto pavadinimas.

Kitos dvi eilutės yra tokios, kaip parodyta toliau esančioje ekrano kopijoje.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` atitinka `News` ,
`news/begin.md` atitinka `Our Product is Online !`

`TOC` failų įtrauka nurodo kontūro hierarchinį ryšį, palaiko kelių lygių įtrauką ir eilučių komentarus, prasidedančius `# ` .

##### Tėvų Lygis Rašo Tik Pavadinimą, O Ne Turinį.

Kai yra keli įtraukos lygiai, pirminis lygis rašo tik pavadinimą, o ne turinį. Priešingu atveju tipografija bus sujaukta.

##### Projektas README.md

Turinys gali būti parašytas `README.md` punkte, pvz., `en/demo2/README.md` .

Atkreipkite dėmesį, kad šio failo turinys nerodo turinio metmenų, todėl rekomenduojama apriboti ilgį ir parašyti trumpą įžangą.

###### Projekto Šūkis

Matote `Your Project slogan` kad `Deme Two` yra projekto šūkis po išskleidžiamuoju meniu ir katalogo kontūro projekto pavadinimas : .

![](https://p.3ti.site/1721276842.avif)

Tai atitinka pirmąją `en/demo2/README.md` eilutę :

```
# Demo Two : Your Project slogan
```

Turinys, esantis po `README.md` projekto pirmojo lygio pavadinimo pirmojo dvitaškio `:` bus laikomas projekto šūkiu.

Naudotojai iš Kinijos, Japonijos ir Korėjos atminkite, kad turėtumėte naudoti pusės pločio dvitaškį `:` o ne viso pločio dvitaškį.

##### Kaip Perkelti TOC Urmu?

`TOC` failų reikia įdėti į šaltinio kalbos katalogą.

Pavyzdžiui, jei šaltinio kalba yra kinų, tada `TOC` aukščiau yra `zh/blog/TOC` .

Jei šaltinio kalba yra pakeista, turite perkelti `TOC` failų tam tikra kalba projekte į kitą kalbą.

Galite kreiptis į šias komandas:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Pakeiskite `en/` ir `zh/` aukščiau pateiktoje komandoje į savo kalbos kodą.

### Numatytasis Įkėlimas Be Konfigūracijos Kelio

Tam tikram pasiekiamam keliui, jei kelio priešdėlis nesukonfigūruotas `nav:` , pagal numatytuosius nustatymus bus įkeltas kelią atitinkantis `MarkDown` failas ir pateikiamas naudojant `Md` šabloną.

Pavyzdžiui, jei pasiekiamas `/test` ir `nav:` sukonfigūruotas be šio kelio priešdėlio, o dabartinė naršymo kalba yra anglų (kodas `en` ), `/en/test.md` bus įkeltas pagal numatytuosius nustatymus ir pateikiamas naudojant `Md` šabloną.

Jei `/en/test.md` šio failo nėra, bus rodomas numatytasis `404` puslapis.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">