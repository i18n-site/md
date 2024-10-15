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

Niissä `upload`-kohdassa `ext:`-asetus tarkoittaa, että vain `.md`-tiedostot上传 during julkaisua.

## Ylä navigointi

`nav:`-asetusvaihtoehdot vastaavat kotisivun yläreunassa olevaa navigointivalikoa.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Niistä `i18n: home` vastaavat `home: Home` `en/i18n.yml`-tiedostossa (missä `en` on projektin käännöksen alkuperäiskieli).

`en/i18n.yml` tiedoston sisältö on navigointivalikossa näkyvä teksti, joka käännetään `fromTo`-asetusten mukaisesti, esimerkiksi käännettynä `zh/i18n.yml` muotoon.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kun käännös on valmis, voit muokata käännöksen arvoa `yml`:ssä, mutta älä lisää tai poista käännösavainta `yml`.

### `use: Toc`, yksittäisen tiedoston malli, jossa on sisällysluettelo

`nav`-asetuksessa:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tarkoittaa, että käytetään `Toc`-mallia, mikä tarkoittaa yksittäisen `Markdown`-tiedoston renderöimistä.

`TOC` on `Table of Contents`-sanasta lyhennetty, ja kun tämä malli renderöidään, sivupalkissa näytetään kyseisen `Markdown`-tiedoston sisällysluettelo.

`url:` määrittää `Markdown`-tiedoston polun ( `/` vastaa juurihakemistoa `/README.md`, ja tiedostonimi vaatii suurten kirjainten etuliitteen ja pienten kirjainten päättymisen).

### `use: Md`, yksittäisen tiedoston malli ilman sisällysluetteloa

`Md`-malli ja `Toc`-malli ovat samanlaisia ja molempia käytetään yksittäisen `Markdown`-tiedoston renderöimiseen, mutta `Md`-malli ei näytä sisällysluetteloa sivupalkissa.

Voit muuttaa yllä olevassa asetuksessa `use: Toc`-valinnan `use: Md`:ksi, suorittaa `i18n.site` uudelleen `md`-hakemistossa ja sitten vierailla kehityksen esikatselun URL-osoitteessa nähdäksesi kotisivun muutokset.

### `use: Blog` blogimallia

Blogimalli näyttää artikkelilistan (otsikot ja tiivistelmät) julkaisujärjestyksessä.

[→ Napsauta tätä saadaksesi lisätietoja tietystä kokoonpanosta](/i18n.site/conf/blog)

### `use: Doc`, monitiedostoinen asiakirjamalli

Asetustiedostossa:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Tämä tarkoittaa `Doc`-mallin käyttöä renderöinnissä.

`Doc`-malli tukee useiden `Markdown`-tiedostojen integrointia yksittäisen tai useiden projektien asiakirja-ääriviivojen luomiseksi.

#### Useita projekteja ja useita tiedostoja

`.i18n/conf.yml`:ssä `i18n:doc`-asetus on usean projektin ja usean tiedoston renderöintitila.

Tässä `menu: NB demo1,demo2` tarkoittaa `NB`-mallin käyttöä avattavan valikon renderöinnissä.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` on `Name Brief`-sanasta lyhennetty, mikä tarkoittaa, että pudotusvalikko voi näyttää projektin nimen ja iskulauseen.

`NB`:ta seuraa sille välitetty parametri `demo1,demo2`.

Huomaa: **`demo1,demo2`-tunnisteissa ei saa olla välilyöntiä pilkulla`,` edessä tai jälkeen**.

Yllä oleville parametreille vastaavat hakemistotiedostot ovat:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Yksi projekti ja useita tiedostoja

Jos sinulla on vain yksi projekti, voit määrittää sen seuraavasti.

```
  - i18n: xxx
    use: Doc
```

##### Kun url on Tyhjä, Sen Oletusarvo on i18n

Jos `url`:ia ei kirjoiteta, `url` on oletusarvo `i18n`, tämä sääntö koskee myös muita malleja.

Yllä oleva kirjoitustapa vastaa `url: xxx`, ja vastaava tiedosto on `en/xxx/TOC`.

#### TOC-sisällysluettelo

`i18n.site` suorittaa esittelyvarastossa olevan `js`-lisäosan `.i18n/hook/after.tran/TOC.js`, joka lukee `TOC`-hakemiston indeksitiedoston, joka vastaa `doc`-mallin konfiguraatiota, ja luo `json`-hakemistorakenteen.

Jos käytät `doc`-mallia, sinulla on oltava tämä lisäosa.

Jos alustat projektin `i18n.site` tyhjästä kansiosta, muista kopioida esittelyprojektin `.i18n`-hakemisto.

`Doc`-malli luo sisällysluettelon generoidun `json`-tiedoston perusteella.

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

`TOC` tiedostot käyttävät sisennystä esittääkseen sisällysluettelon hierarkkisia suhteita, tukevat useita sisennystasoja ja käyttävät `# ` merkillä alkavia rivejä kommentteina.

##### Vanhemmat tasot kirjoittavat vain otsikon, ei sisältöä

Kun on useita sisennystasoja, vanhemmat tasot kirjoittavat vain otsikon, ei sisältöä, muuten typografia menee sekaisin.

##### Projekti README.md

Projektin sisältö voidaan kirjoittaa `README.md`-tiedostoon, esimerkiksi `en/demo2/README.md`.

Huomaa, että tämän tiedoston sisältö ei näytä sisällysluetteloa, joten on suositeltavaa rajoittaa pituutta ja kirjoittaa lyhyt johdanto.

###### Projektin iskulause

Näet, että `Deme Two` on pudotusvalikossa ja projektin nimen alla on sen iskulause `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Tämä vastaa `en/demo2/README.md`-tiedoston ensimmäistä riviä:

```
# Demo Two : Your Project slogan
```

Projektin `README.md`-tiedoston ensimmäisen tason otsikon ensimmäisen kaksoispisteen `:` jälkeistä sisältöä pidetään projektin iskulauseena.

Kiinan, Japanin ja Korean käyttäjät, huomaa, että sinun tulee käyttää puolileveää kaksoispistettä `:` täysleveän kaksoispisteen sijaan.

##### Kuinka siirtää TOC?

`TOC`-tiedostoa on sijoitettava lähdekielen hakemistoon.

Jos lähdekieli on esimerkiksi kiina, yllä oleva `TOC` on `zh/blog/TOC`.

Jos lähdekieltä muutetaan, sinun on siirrettävä tietyn kielen `TOC`-tiedostot erässä projektissa toiselle kielelle.

Voit viitata seuraaviin komentoihin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Muuta `en/` ja `zh/` yllä olevassa komennossa omalla kielikoodillasi.

### Oletuslataus ilman määrityspolkua

Jos polun etuliitettä ei ole määritetty `nav:`-asetuksessa, polkua vastaava `Markdown`-tiedosto ladataan oletuksena ja renderöidään `Md`-mallin avulla.

Esimerkiksi, jos käytetään arvoa `/test` ja `nav:`-asetuksessa ei ole määritetty tätä polun etuliitettä ja nykyinen selauskieli on englanti (koodi `en`), `/en/test.md` ladataan oletuksena ja renderöidään `Md`-mallin avulla.

Jos `/en/test.md`-tiedostoa ei ole olemassa, näytetään oletusarvoinen `404`-sivu.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">