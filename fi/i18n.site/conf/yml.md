# .i18n/conf.yml

Asetustiedosto arvolle `i18n.site` on `.i18n/conf.yml` ja sisältö on seuraava :

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

Niistä `upload` määrityskohde tarkoittaa `.md` `ext:` julkaisun yhteydessä.

## Ylhäällä Navigointinavigointi

`nav:` asetusvaihtoehtoa, jotka vastaavat kotisivun yläreunassa olevaa navigointivalikkoa.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Niistä `i18n: home` vastaa `home: Home` in `en/i18n.yml` (jossa `en` on projektin käännöksen lähdekieli).

`en/i18n.yml` sisältö on navigointivalikossa näkyvä teksti, joka käännetään konfiguraatiossa `fromTo` mukaan, esimerkiksi käännettynä `zh/i18n.yml` :ksi.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kun käännös on valmis, voit muokata käännöksen arvoa `yml` , mutta älä lisää tai poista käännösavainta `yml` .

### `use: Toc` Asiakirjamalli Ääriviivalla

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tarkoittaa hahmontamista `Toc` mallin avulla, mikä tarkoittaa yhden `Markdown` -mallin renderöimistä.

`TOC` on lyhenne luvusta `Table of Contents` Kun tämä malli hahmonnetaan, tämän `Markdown` tiedoston ääriviivat näytetään sivupalkissa.

`url:` edustaa tiedoston `Markdown` polkua ( `/` vastaa juurihakemistoa `/README.md` , tämä tiedostonimi edellyttää isojen kirjainten etuliitettä ja pientä päätettä).

### `use: Md` Asiakirjamalli Ilman Ääriviivoja

`Md` -malli ja `Toc` -malli ovat samat, ja molempia käytetään yhden `Markdown` tiedoston hahmontamiseen. Mutta `Md` malli ei näytä ääriviivaa sivupalkissa.

Voit muuttaa yllä olevan kokoonpanon `use: Toc` arvoksi `use: Md` , suorittaa `i18n.site` uudelleen hakemistossa `md` ja sitten käydä kehityksen esikatselun URL-osoitteessa nähdäksesi muutokset kotisivulla.

### `use: Blog` Blogimallia

Blogimallissa näkyy luettelo artikkeleista (otsikot ja tiivistelmät) julkaisuajan mukaan.

[→ Napsauta tätä saadaksesi lisätietoja tietystä kokoonpanosta](/i18n.site/conf/blog)

### `use: Doc` Tiedostomalleja

Asetustiedostossa:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Osoittaa `Doc` käyttöä mallin hahmontamiseen.

`Doc` malli tukee useiden `MarkDown` integrointia dokumenttien ääriviivojen luomiseksi yksittäisille tai useille projekteille.

#### Useita Projekteja Ja Useita Tiedostoja

`.i18n/conf.yml` in `i18n:doc` -kokoonpano on usean projektin usean tiedoston renderöintitila.

Tässä `menu: NB demo1,demo2` tarkoittaa `NB` -mallin käyttöä avattavan valikon hahmontamiseen.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , joka on lyhenne luvusta `Name Breif` , tarkoittaa, että pudotusvalikosta voi näyttää projektin nimen ja iskulauseen.

`NB` :ta seuraa sille välitetty parametri `demo1,demo2` .

Huomaa : ** pilkun `,` : `demo1,demo2` :ssa edessä ja jälkeen ei saa olla ** .

Vastaava hakemistohakemistotiedosto ylläoleville parametreille on:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Yksi Projekti Useita Tiedostoja

Jos sinulla on vain yksi projekti, voit määrittää sen seuraavasti.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Yksi projekti, jossa on useita tiedostoja, ei tue `url` määrittämistä juuripoluksi `/`
> Jos __conf.yml → nav:__ Pääpolkua ei ole määritetty, kun siirryt verkkosivuston kotisivulle, se kirjoitetaan automaattisesti ensimmäiseksi URL-osoitteeksi `nav:` konfiguraation alla.
> Tämän suunnittelun tarkoituksena on erottaa paremmin projektiasiakirjat, blogit ja muu sisältö hakemistojen kautta.
> Kotisivuna on suositeltavaa käyttää yhtä tiedostoa ja yhtä sivua.

> [!TIP]
> Jos `url` ei kirjoiteta, `url` on oletusarvo `i18n` Tämä sääntö koskee myös muita malleja.

#### TOC Sisällysluettelo

Jos malli `use: Doc` on käytössä määrityksessä, ota plug-in `i18n.addon/toc` in `.i18n/conf.yml` käyttöön. Kokoonpano on seuraava :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` asentaa ja suorittaa tämän laajennuksen automaattisesti, lukee `TOC` hakemistohakemistotiedoston ja luo `json` hakemistorakenteen.

Jos kyseessä on yksi projekti, jossa on useita tiedostoja, juurihakemisto `TOC` on hakemisto, joka vastaa numeroa `url:` lähdekielen hakemistossa. Jos lähdekieli on esimerkiksi kiina: tiedostoa `url: flashduty` vastaava tiedosto on `zh/flashduty/TOC` .

Jos kyseessä on useita projekteja ja useita tiedostoja, arvoa `url:` ei tarvitse määrittää. Kohteen `TOC` juurihakemisto on `i18n` :n arvoa vastaava hakemisto.

##### Yksityiskohtainen Sisällön Selitys

`en/blog/TOC` Sisältö on seuraava :

```
README.md

news/README.md
  news/begin.md
```

##### Käytä Sisennystä Tasojen Osoittamiseen

Yllä olevan `en/blog/TOC` :n ensimmäisellä rivillä `README.md` vastaa alla olevan kuvan numeroa `i18n.site` , joka on projektin nimi.

Seuraavat kaksi riviä ovat kuten alla olevassa kuvakaappauksessa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` vastaa `News` ,
`news/begin.md` vastaa `Our Product is Online !`

`TOC` tiedostot on sisennetty osoittamaan ääriviivan hierarkkista suhdetta, tukemaan monitasoista sisennystä ja rivikommentteja, jotka alkavat `# ` llä.

##### Vanhempi Taso Kirjoittaa Vain Otsikon, Ei Sisältöä.

Kun sisennystasoja on useita, ylätaso kirjoittaa vain otsikon, ei sisältöä. Muuten typografia menee sekaisin.

##### Projekti README.md

Sisältö voidaan kirjoittaa kohtaan `README.md` , esimerkiksi `en/demo2/README.md` .

Huomaa, että tämän tiedoston sisältö ei näytä sisällysluetteloa, joten on suositeltavaa rajoittaa pituutta ja kirjoittaa lyhyt johdanto.

###### Projektin Slogan

Näet, että `Deme Two` on projektin tunnuslause alasvetovalikon ja `Your Project slogan` projektin nimen alla :

![](https://p.3ti.site/1721276842.avif)

Tämä vastaa ensimmäistä riviä `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Projektin `README.md` ensimmäisen tason otsikon ensimmäisen kaksoispisteen `:` jälkeistä sisältöä pidetään projektin iskulauseena.

Käyttäjät Kiinasta, Japanista ja Koreasta, huomaa, että sinun tulee käyttää puolileveää kaksoispistettä `:` täysleveän kaksoispisteen sijaan.

##### Kuinka Siirtää TOC:ta Irtotavarana?

`TOC` tiedostoa on sijoitettava lähdekielen hakemistoon.

Jos lähdekieli on esimerkiksi kiina, yllä oleva `TOC` on `zh/blog/TOC` .

Jos lähdekieltä muutetaan, sinun on siirrettävä tietyn kielen `TOC` tiedostot erässä projektissa toiselle kielelle.

Voit viitata seuraaviin komentoihin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Muuta `en/` ja `zh/` yllä olevassa komennossa kielikoodiasi.

### Oletuslataus Ilman Määrityspolkua

Jos polun etuliitettä ei ole määritetty arvoon `nav:` , polkua vastaava `MarkDown` tiedosto ladataan oletuksena ja renderöidään käyttämällä `Md` -mallia.

Jos esimerkiksi käytetään arvoa `/test` ja `nav:` on määritetty ilman tämän polun etuliitettä ja nykyinen selauskieli on englanti (koodi `en` ), `/en/test.md` ladataan oletuksena ja hahmonnetaan mallin `Md` avulla.

Jos `/en/test.md` tätä tiedostoa ei ole olemassa, oletusarvoinen `404` sivu näytetään.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">