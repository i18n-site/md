# .i18n/conf.yml

Profiili `i18n.site` :lle on `.i18n/conf.yml`.

Lukuun ottamatta asetuksia [`i18`](/i18) , `ignore:` ja `i18n:` , konfigurointitiedosto on seuraava:

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

Niissä `upload`-osiossa `ext:`-kenttä tarkoittaa, että vain `.md`-tiedostot ladataan julkaisun yhteydessä.

## Ylävalikko navigointi

`nav:`-asetusvaihtoehdot vastaavat kotisivun yläreunassa olevaa navigointivalikkoa.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Niiden joukossa `i18n: home` vastaa `en/i18n.yml`-tiedostossa olevaa `home: Home`.

`en/i18n.yml` käännetään useille kielille, kuten `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Käännöksen valmistuttua voit muokata käännöksen `yml`-arvoja, mutta älä poista tai lisää `yml`-avaimia.

### `use: Toc`, yksittäisen tiedoston malli (sisältää sisällysluettelon)

`nav`-asetuksissa:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tarkoittaa, että käytetään `Toc`-mallia yksittäisen `Markdown`-tiedoston hahmontamiseen.

`TOC` on `Table of Contents`-sanasta lyhennetty, ja tämä malli luo sivupalkkiin kyseisen `Markdown`-tiedoston sisällysluettelon.

`url:` määrittää `Markdown`-tiedoston polun (esim. `/` vastaa juurikansiota `/README.md`, ja tiedostonimi vaatii suurten kirjainten käytön alussa ja pienten kirjainten käytön lopussa).

### `use: Md`, yksittäisen tiedoston malli (ei sisällysluetteloa)

`Md`-malli on samanlainen kuin `Toc`-malli ja molempia käytetään yksittäisen `Markdown`-tiedoston hahmontamiseen, mutta `Md`-malli ei näytä sivupalkissa sisällysluetteloa.

Voit muuttaa yllä olevassa asetuksessa `use: Toc`-arvon `use: Md`-arvoksi, suorittaa `i18n.site`-komennon uudelleen `md`-kansiossa ja tarkastella muutoksia kehitysympäristön esikatselussa.

### Oletusladataan ilman määritettyä polkua

Jos tiettyyn polkuun mentäessä sen polun etuliite ei ole määritetty `nav:`-asetuksissa, ladataan oletuksena kyseisen polun vastaava `Markdown`-tiedosto ja hahmennetaan se `Md`-mallin avulla.

Esim. jos mentäessä `/test`-polkuun `nav:`-asetukset eivät ole määritetty ja sivun kieli on englanti (koodi `en`), ladataan oletuksena `/en/test.md` ja hahmennetaan se `Md`-mallin avulla.

Jos `/en/test.md`-tiedostoa ei ole olemassa, näytetään oletus `404`-sivu.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, usean tiedoston malli

Konfigurointitiedostossa:

```
  - i18n: blog
    use: Doc
```

Tämä tarkoittaa `Doc`-mallin käyttöä hahmontamiseen.

`Doc`-malli tukee useiden `Markdown`-tiedostojen integrointia yksittäisen tai usean projektin dokumenttien sisällysluettelon luomiseksi.

#### Yksittäinen projekti (useita tiedostoja)

Yllä oleva `blog` on `Doc`-mallin yksittäinen projekti-tila.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kun url on Tyhjä, Sen Oletusarvo on i18n

Jos `url`-arvoa ei ole määritetty, `url` on oletusarvo `i18n`, mikä pätee myös muihin malleihin.

Yllä oleva merkintä vastaa `url: blog`, ja vastaava tiedosto on `en/blog/TOC`.

#### Useita projekteja

`.i18n/conf.yml`-tiedostossa `i18n:doc`-asetus on moniprojektitila.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Tässä `menu: NB demo1,demo2` tarkoittaa, että käytetään `NB`-mallia pudotusvalikon hahmontamiseen.

`NB` on `Name Brief`-sanasta lyhennetty, mikä tarkoittaa, että pudotusvalikko voi näyttää projektin nimen ja iskulauseen.

`NB`-mallin jälkeen on parametrit `demo1,demo2`.
Huomaa : ** pilkun `,` `demo1,demo2` ssa edessä ja jälkeen ei saa olla ** .

Yllä oleville parametreille vastaava hakemistotiedosto on:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC - Sisällysluettelo

`i18n.site` suorittaa esittelyvarastossa olevan `js`-lisäosan `.i18n/hook/after.tran/TOC.js` lukeakseen `doc`-mallin konfiguraatiota vastaavan `TOC`-hakemistotiedoston ja luodakseen `json`-muotoisen sisällysluettelon.

Jos käytät `doc`-mallia, sinulla on oltava tämä lisäosa.

Jos alustat `i18n.site`-projektin tyhjästä kansiosta, muista kopioida esittelyprojektin `.i18n`-kansio kansioosi.

`Doc`-malli luo sisällysluettelon generoidun `json`-tiedoston perusteella.

##### Yksityiskohtainen sisällön selitys

`en/blog/TOC`-tiedoston sisältö on seuraava:

```
README.md

news/README.md
  news/begin.md
```

##### Käytä sisennystä tasojen osoittamiseen

Yllä olevan `en/blog/TOC`-tiedoston ensimmäinen rivi, `README.md`, vastaa alla olevan kuvan `i18n.site`, joka on projektin nimi.

Seuraavat kaksi riviä ovat kuten alla olevassa kuvakaappauksessa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` vastaa `News`
`news/begin.md` vastaa `Our Product is Online !`

`TOC`-tiedostot käyttävät sisennystä osoittamaan sisällysluettelon hierarkkista suhdetta, tukevat monitasoista sisennystä ja rivikommentteja, jotka alkavat `#`-merkillä.

##### Vanhemmat tasot kirjoittavat vain otsikon, ei sisältöä

Kun on useita sisennystasoja, vanhemmat tasot kirjoittavat vain otsikon, ei sisältöä, muuten typografia saattaa järjestäytyä väärin.

##### Projektin README.md

Projektin `README.md`-tiedostoon, kuten `en/demo2/README.md`, voidaan kirjoittaa sisältöä.

Huomaa, että tämän tiedoston sisältö ei näytä sisällysluetteloa, joten on suositeltavaa pitää sisältö lyhyenä ja kirjoittaa vain lyhyen esittelyn.

###### Projektin iskulause

Näet `Your Project slogan`-iskulauseen `Deme Two`-projektin alapuolella pudotusvalikossa ja sisällysluettelossa.

![](https://p.3ti.site/1721276842.avif)

Tämä vastaa `en/demo2/README.md`-tiedoston ensimmäistä riviä:

```
# Demo Two : Your Project slogan
```

Projektin `README.md`-tiedoston ensimmäisen tason otsikon ensimmäisen kaksoispisteen `:` jälkeen olevaa sisältöä käsitellään projektin iskulauseena.

Kiinan, Japanin ja Korean käyttäjät, huomaa, että sinun tulee käyttää puolileveää kaksoispistettä `:` eikä täysleveää kaksoispistettä.

##### Kuinka siirtää TOC:ta irtotavarana?

`TOC`-tiedostoa on sijoitettava lähdekielen kansioon.

Esim. jos lähdekieli on kiina, yllä oleva `TOC` on `zh/blog/TOC`.

Jos lähdekieltä muutetaan, sinun on siirrettävä projektin tietyn kielen `TOC`-tiedostot erässä toiselle kielelle.

Voit viitata seuraaviin komentoihin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Muuta `en/` ja `zh/` yllä olevassa komennossa omilla kielikoodillasi.