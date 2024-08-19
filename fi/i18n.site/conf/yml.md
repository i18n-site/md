# .i18n/conf.yml

Profiilin `i18n.site` konfiguraatio on `.i18n/conf.yml` .

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
```

`upload`-asetuksessa `ext:` tarkoittaa, että vain `.md`-tiedostot ladataan julkaisun yhteydessä.

## Ylivalikko navigointi

`nav:`-asetukset vastaavat kotisivun ylivalikon navigointivalikkoa.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Sisällä näistä `i18n: home` vastaa `en/i18n.yml` -tiedostossa olevaa `home: Home`.

`en/i18n.yml` käännetään useille kielille, kuten `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kun käännös on valmis, voit muokata käännöksen arvoa `yml`-tiedostossa, mutta älä lisää tai poista käännösavainta `yml`.

### `use: Toc`, Yhden tiedoston malli (Ääriviivoilla)

`nav`-konfiguraatiossa:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tarkoittaa, että käytetään `Toc`-mallia renderöimiseen, mikä on yksittäisen `Markdown`-mallin renderöinti.

`TOC` on lyhenne `Table of Contents`-sanasta. Kun tämä malli renderöidään, `Markdown`-tiedoston ääriviivat näytetään sivupalkissa.

`url:` edustaa `Markdown`-tiedoston polkua (`/` vastaa juurihakemistoa `/README.md`, ja tiedostonimi edellyttää isojen kirjainten etuliitettä ja pieniä kirjaimia).

### `use: Md`, Yhden tiedoston malli (Ei ääriviivoja)

`Md`-malli ja `Toc`-malli ovat samat, ja molemmat käytetään yksittäisen `Markdown`-tiedoston renderöintiin. Mutta `Md`-malli ei näytä ääriviivoja sivupalkissa.

Voit muuttaa yllä olevan konfiguraation `use: Toc`-arvon `use: Md`-arvoksi, suorittaa `i18n.site` uudelleen hakemistossa `md` ja sitten käydä kehityksen esikatselun URL-osoitteessa nähdäksesi muutokset kotisivulla.

### Epätietoisen polun oletuslataus

Jos käytetään tiettyä polkua ja sen polun etuliitettä ei ole määritetty `nav:`-arvoon, polkua vastaava `Markdown`-tiedosto ladataan oletuksena ja renderöidään `Md`-mallin avulla.

Esimerkiksi, jos käytetään arvoa `/test` ja `nav:`-konfiguraatiossa ei ole määritetty tätä polkua, ja sivun kieli on englanti (koodi `en`), `/en/test.md` ladataan oletuksena ja renderöidään `Md`-mallin avulla.

Jos `/en/test.md`-tiedostoa ei ole olemassa, näytetään oletusarvoinen `404`-sivu.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, Useiden tiedostojen malli

Asetustiedostossa:

```
  - i18n: blog
    use: Doc
```

Se osoittaa, että käytetään `Doc`-mallia renderöintiin.

`Doc`-malli tukee useiden `Markdown`-tiedostojen integrointia dokumenttien ääriviivojen luomiseksi yksittäisille tai useille projekteille.

#### Yksi projekti (Useita tiedostoja)

Yllä oleva `blog` on `Doc`-mallin yhden projektin tila.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kun url on Tyhjä, Sen Oletusarvo on i18n

Jos `url`-arvoa ei kirjoiteta, `url` on oletusarvo `i18n`. Tämä sääntö koskee myös muita malleja.

Yllä oleva kirjoitustapa vastaa `url: blog`-arvoa ja sitä vastaava tiedosto on `en/blog/TOC`.

#### Useita projekteja

`.i18n/conf.yml`-tiedoston `i18n:doc`-konfiguraatio on moniprojektitila.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Tässä `menu: NB demo1,demo2` tarkoittaa, että käytetään `NB`-mallia avattavan valikon renderöintiin.

`NB`, joka on lyhenne `Name Brief`-sanasta, tarkoittaa, että pudotusvalikosta voi näyttää projektin nimen ja iskulauseen.

`NB`-arvon jälkeen on annettu parametri `demo1,demo2`.
Huomaa : ** pilkun `,` `demo1,demo2` ssa edessä ja jälkeen ei saa olla ** .

Yllä oleville parametreille vastaavat hakemistotiedostot ovat:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC-sisällysluettelo

`i18n.site` suorittaa `js`-laajennuksen `.i18n/hook/after.tran/TOC.js` esittelyvarastossa lukeakseen `doc`-hakemiston hakemistotiedoston, joka vastaa `TOC`-mallin konfiguraatiota, luodakseen `json`-hakemistorakenteen.

Jos käytät `doc`-mallia, sinulla on oltava tämä laajennus.

Jos alustat projektin `i18n.site` tyhjästä kansiosta, muista kopioida esittelyprojektin `.i18n`-hakemisto projektiisi.

`Doc`-malli tekee sisällysluettelon luonnoksen luodun `json`-tiedoston perusteella.

##### Yksityiskohtainen sisällön selitys

`en/blog/TOC`-tiedoston sisältö on seuraava:

```
README.md

news/README.md
  news/begin.md
```

##### Käytä sisennystä tasojen osoittamiseen

Yllä olevan `en/blog/TOC`-tiedoston ensimmäisellä rivillä oleva `README.md` vastaa alla olevan kuvan `i18n.site`, joka on projektin nimi.

Seuraavat kaksi riviä ovat kuten alla olevassa kuvakaappauksessa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` vastaa `News`,
`news/begin.md` vastaa `Our Product is Online !`

`TOC`-tiedostot sisennetään osoittamaan ääriviivan hierarkkista suhdetta ja tukeakseen monitasoista sisennystä.

##### Vanhempi taso kirjoittaa vain otsikon, ei sisältöä

Kun sisennystasoja on useita, ylätaso kirjoittaa vain otsikon, ei sisältöä. Muuten typografia menee sekaisin.

##### Projektin README.md

Sisältö voidaan kirjoittaa `README.md`-tiedostoon, esimerkiksi `en/demo2/README.md`.

Huomaa, että tämän tiedoston sisältö ei näytä sisällysluetteloa, joten on suositeltavaa rajoittaa pituutta ja kirjoittaa lyhyt johdanto.

###### Projektin iskulause

`Your Project slogan`, joka näkyy `Deme Two`-projektin tunnuslauseena alasvetovalikon ja luettelon projektin nimen alla:

![](https://p.3ti.site/1721276842.avif)

Tämä vastaa ensimmäistä riviä `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Projektin `README.md` ensimmäisen tason otsikon ensimmäisen kaksoispisteen `:` jälkeen oleva sisältö pidetään projektin iskulauseena.

Kiinalaisille, japanilaisille ja korealaisille käyttäjille huomaa, että sinun tulee käyttää puolileveää kaksoispistettä `:` täysleveän kaksoispisteen sijaan.

##### Kuinka siirtää TOC:ta irtotavarana?

`TOC`-tiedoston on sijoitettava lähdekielen hakemistoon.

Jos lähdekieli on esimerkiksi kiina, yllä oleva `TOC` on `zh/blog/TOC`.

Jos lähdekieltä muutetaan, sinun on siirrettävä tietyn kielen `TOC`-tiedostot erässä projektissa toiselle kielelle.

Voit viitata seuraaviin komentoihin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Muuta `en/` ja `zh/` yllä olevassa komennossa kielikoodiasi.