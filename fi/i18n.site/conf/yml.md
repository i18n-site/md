# .i18n/conf.yml

Asetustiedosto arvolle `i18n.site` on `.i18n/conf.yml`, ja sisältö on seuraava:

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

Niissä `upload`-kohdassa `ext:`-asetus tarkoittaa, että vain `.md`-tiedostot lähetetään julkaisun yhteydessä.

## Ylä navigointi

`nav:`-asetusvaihtoehdot vastaavat kotisivun yläreunassa olevaa navigointivalikoa.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Niissä `i18n: home` vastaa `en/i18n.yml`-tiedostossa olevaa `home: Home` (jossa `en` on projektin käännöksen lähdekieli).

`en/i18n.yml`-tiedoston sisältö on navigointivalikossa näkyvä teksti, joka käännetään `fromTo`-asetuksen mukaisesti, esimerkiksi käännettynä `zh/i18n.yml`-tiedostoon.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kun käännös on valmis, voit muokata käännöksen arvoa `yml`-tiedostossa, mutta älä lisää tai poista käännösavainta `yml`-tiedostosta.

### `use: Toc`, yksittäisen tiedoston malli, jossa on sisällysluettelo

`nav`-asetuksessa:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tarkoittaa `Toc`-mallin käyttöä, mikä tarkoittaa yksittäisen `Markdown`-tiedoston renderöimistä.

`TOC` on `Table of Contents`-sanasta lyhennetty, ja tämä malli luo sivupalkkiin kyseisen `Markdown`-tiedoston sisällysluettelon.

`url:` määrittää `Markdown`-tiedoston polun (esim. `/` vastaa juurihakemistoa `/README.md`, ja tiedostonimi vaatii suurta alkukirjainta ja pientä pääteitä).

### `use: Md`, yksittäisen tiedoston malli ilman sisällysluetteloa

`Md`-malli ja `Toc`-malli ovat samanlaisia ja molempia käytetään yksittäisen `Markdown`-tiedoston renderöintiin. `Md`-malli ei kuitenkaan näytä sivupalkissa sisällysluetteloa.

Voit muuttaa yllä olevassa asetuksessa `use: Toc`-valinnan `use: Md`-valinnaksi, suorittaa `i18n.site`-komennon uudelleen `md`-hakemistossa ja sitten vierailla kehitys-esikatselun URL-osoitteessa nähdäksesi kotisivun muutokset.

### `use: Blog`, blogimalli

Blogimalli näyttää artikkelilistan (otsikot ja tiivistelmät) julkaisuajan mukaisesti.

[→ Napsauta tätä saadaksesi lisätietoja tietystä kokoonpanosta](/i18n.site/conf/blog)

### `use: Doc`, monitiedostoinen asiakirjamalli

Asetustiedostossa:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Tämä tarkoittaa `Doc`-mallin käyttöä renderöinnissä.

`Doc`-malli tukee useiden `Markdown`-tiedostojen integrointia yksittäisen tai useiden projektien dokumenttien ääriviivojen luomiseksi.

#### Useita projekteja ja useita tiedostoja

`.i18n/conf.yml`-tiedostossa `i18n:doc`-asetus on usean projektin ja usean tiedoston renderöintitila.

Tässä `menu: NB demo1,demo2` tarkoittaa `NB`-mallin käyttöä avattavan valikon renderöintiin.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` on `Name Brief`-sanasta lyhennetty, ja se tarkoittaa, että pudotusvalikko voi näyttää projektin nimen ja iskulauseen.

`NB`-parametrin jälkeen on annettu parametrit `demo1,demo2`.

Huomaa: ** `demo1,demo2`-listassa pilkut `,` eivät saa olla erossa toisistaan välilyönnillä**.

Yllä oleville parametreille vastaavat hakemistotiedostot ovat:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Yksi projekti ja useita tiedostoja

Jos sinulla on vain yksi projekti, voit määrittää sen seuraavasti.

```
  - i18n: xxx
    use: Doc
```

##### Kun url on tyhjä, sen oletusarvo on i18n:n arvo

Jos `url` ei ole määritelty, `url` on oletusarvo `i18n`, tämä sääntö pätee myös muihin malleihin.

Yllä oleva kirjoitustapa vastaa `url: xxx`-muotoa, ja vastaava tiedosto on `en/xxx/TOC`.

#### TOC-sisällysluettelo

`i18n.site` suorittaa `js`-lisäosan `.i18n/hook/after.tran/TOC.js` lukeakseen `TOC`-hakemiston indeksitiedoston, joka vastaa `doc`-mallin konfiguraatiota, ja luodakseen `json`-muotoisen sisällysluettelon.

Jos käytät `doc`-mallia, sinulla on oltava tämä lisäosa.

Jos alustat `i18n.site`-projektin tyhjästä kansiosta, muista kopioida esittelyprojektin `.i18n`-hakemisto kansioosi.

`Doc`-malli luo sisällysluettelon `json`-muodossa.

##### Sisällön yksityiskohtainen selitys

`en/blog/TOC`-tiedoston sisältö on seuraava:

```
README.md

news/README.md
  news/begin.md
```

##### Käytä sisennystä tasojen osoittamiseen

Yllä olevan `en/blog/TOC`-tiedoston ensimmäisellä rivillä `README.md` vastaa alla olevan kuvan `i18n.site`, joka on projektin nimi.

Seuraavat kaksi riviä ovat kuten alla olevassa kuvakaappauksessa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` vastaa `News`
`news/begin.md` vastaa `Our Product is Online !`

`TOC`-tiedostot on sisennetty osoittamaan sisällysluettelon hierarkkista suhdetta, tukemaan monitasoisia sisennuksia ja rivikommentteja, jotka alkavat `#`-merkillä.

##### Vanhemmat tasot kirjoittavat vain otsikon, ei sisältöä

Kun on useita sisennystasoja, vanhemmat tasot kirjoittavat vain otsikon, ei sisältöä, muuten typografia saattaa järjestäytyä väärin.

##### Projektin README.md

Projektin `README.md`-tiedostoon, kuten `en/demo2/README.md`, voidaan kirjoittaa sisältöä.

Huomaa, että tämän tiedoston sisältö ei näytä sisällysluetteloa, joten on suositeltavaa rajoittaa sen pituutta ja kirjoittaa lyhyt esittely.

###### Projektin iskulause

Näet, että `Deme Two` on pudotusvalikossa ja projektin nimen alla on sen iskulause `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Tämä vastaa `en/demo2/README.md`-tiedoston ensimmäistä riviä:

```
# Demo Two : Your Project slogan
```

Projektin `README.md`-tiedoston ensimmäisen tason otsikon ensimmäisen kaksoispisteen `:` jälkeen oleva sisältö muodostaa projektin iskulauseen.

Kiinan, Japanin ja Korean käyttäjät, huomaa, että sinun tulee käyttää puolileveää kaksoispistettä `:` eikä täysleveää kaksoispistettä.

##### Kuinka siirtää TOC erillisenä?

`TOC`-tiedostoa on sijoitettava lähdekielen hakemistoon.

Jos lähdekieli on esimerkiksi kiina, yllä oleva `TOC` on `zh/blog/TOC`.

Jos lähdekieltä muutetaan, on siirrettävä projektin tietyn kielen `TOC`-tiedostot toiselle kielelle.

Voit viitata seuraaviin komentoihin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Muuta `en/` ja `zh/` yllä olevassa komennossa omalla kielikoodillasi.

### Oletuslataus ilman määrityspolkua

Jos polun etuliite ei ole määritelty `nav:`-asetuksessa, polkua vastaava `Markdown`-tiedosto ladataan ja renderöidään oletuksena `Md`-mallin avulla.

Esimerkiksi, jos käytetään arvoa `/test` ja `nav:`-asetuksessa ei ole määritelty tätä polun etuliitettä, ja nykyinen selauskieli on englanti (koodi `en`), `/en/test.md` ladataan ja renderöidään `Md`-mallin avulla.

Jos `/en/test.md`-tiedostoa ei ole olemassa, näytetään oletusarvoinen `404`-sivu.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">