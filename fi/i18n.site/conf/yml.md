# .i18n/conf.yml

Asetustiedosto on `.i18n/conf.yml` `i18n.site`

Lukuun ottamatta [`i18`](/i18) n `ignore:` ja `i18n:` -asetuksia, konfigurointitiedosto on seuraava:

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

`ext:` `.md` `upload`

## Ylhäällä Navigointinavigointi

`nav:` , jotka vastaavat kotisivun yläreunassa olevaa navigointivalikkoa.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Niiden joukossa `i18n: home` vastaa `en/i18n.yml`中`home: Home` .

käännetään useille kielille, kuten `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kun käännös on valmis, voit muokata käännöksen `yml` , mutta älä lisää tai poista käännösavainta `yml` .

### `use: Toc` Yhden Tiedoston Malli (Ääriviivat)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` tarkoittaa `Toc` renderöinnin käyttöä, joka on yhden `Markdown` -mallin renderöinti.

`TOC` on lyhenne `Markdown` `Table of Contents` .

`url:` edustaa tiedostopolkua `Markdown` ( `/` vastaa juurihakemistoa `/README.md` , tämä tiedoston nimi vaatii isojen kirjainten etuliitettä ja pientä päätettä).

### `use: Md` Yhden Tiedoston Malli (Ei Ääriviivaa)

Malli on sama `Toc` `Md` molempia käytetään yhden `Markdown` -tiedoston hahmontamiseen. Kuitenkin `Md` malli ei näytä ääriviivaa sivupalkissa.

Voit muuttaa yllä olevassa määrityksessä `use: Toc` :ksi `use: Md` , suorittaa `i18n.site` uudelleen hakemistossa `md` ja sitten käydä kehitysesikatselun URL-osoitteessa nähdäksesi muutokset kotisivulla.

### Oletuslataus Ilman Määrityspolkua

Jos tietyn käytettävän polun polun etuliitettä ei ole määritetty `nav:` polkua vastaava `MarkDown` -tiedosto ladataan oletuksena ja hahmonnetaan käyttämällä `Md` -mallia.

Jos esimerkiksi käyt `/test` , ja `nav:` on määritetty ilman tätä polkua ja sivun kieli on englanti (koodi `en` ), malli ladataan `/en/test.md` ja hahmonnetaan käyttämällä `Md` oletuksena.

Jos `/en/test.md` tiedostoa ei ole olemassa, oletusarvoinen `404` -sivu tulee näkyviin.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Usean Tiedoston Malli

Asetustiedostossa:

```
  - i18n: blog
    use: Doc
```

Osoittaa `Doc` n käyttöä mallin hahmontamiseen.

`Doc` `MarkDown`

#### Yksi Projekti (Useita Tiedostoja)

`blog` on yhden projektin tila `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Kun url on Tyhjä, Sen Oletusarvo on i18n

Jos et kirjoita `url` `url` on `i18n` Tämä sääntö koskee myös muita malleja.

Yllä oleva kirjoitustapa vastaa `url: blog` ja sitä vastaava tiedosto on `en/blog/TOC` .

#### Useita Projekteja

`.i18n/conf.yml` Konfigurointi kohdassa `i18n:doc` on moniprojektitila.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Tässä `menu: NB demo1,demo2` tarkoittaa `NB` käyttöä avattavan valikon näyttämiseen.

`NB` on lyhenne numerosta `Name Breif` , joka osoittaa, että avattava valikko voi näyttää projektin nimen ja iskulauseen.

`NB` -merkkiä seuraa sille välitetty parametri `demo1,demo2` .
Huomaa `demo1,demo2` että pilkun `,` edessä ja jälkeen ** saa olla välilyöntejä : **

Yllä oleville parametreille vastaava hakemistohakemistotiedosto on:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Sisällysluettelo

Suorittaa `js` -laajennuksen `.i18n/hook/after.tran/TOC.js` demovarastossa lukeakseen hakemistohakemistotiedoston `doc` vastaa mallin konfiguraatiota `TOC` hakemistorakenteen `json` n luomiseksi `i18n.site`

Jos käytät mallia `doc` , sinulla on oltava tämä laajennus.

Jos alustat `i18n.site` -projektin tyhjästä kansiosta, muista kopioida demoprojektin `.i18n` hakemistoosi.

Malli tekee sisällysluettelon luodun `json` : n perusteella `Doc`

##### Yksityiskohtainen Sisällön Selitys

Sisältö : seuraava `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Käytä Sisennystä Tasojen Osoittamiseen

Yllä `en/blog/TOC` Ensimmäisellä rivillä `README.md` vastaa alla olevan kuvan `i18n.site` , joka on projektin nimi.

Seuraavat kaksi riviä ovat kuten alla olevassa kuvakaappauksessa.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` vastaa `News` ,
`news/begin.md` vastaa `Our Product is Online !`

`TOC` on sisennetty osoittamaan ääriviivan hierarkkista suhdetta ja tukee monitasoista sisennystä.

##### Vanhempi Taso Kirjoittaa Vain Otsikon, Ei Sisältöä.

Kun sisennystasoja on useita, ylätaso kirjoittaa vain otsikon, ei sisältöä. Muuten typografia menee sekaisin.

##### Projekti README.md 

voit kirjoittaa sisältöä esimerkiksi `en/demo2/README.md` `README.md`

Huomaa, että tämän tiedoston sisältö ei näytä sisällysluetteloa, joten on suositeltavaa rajoittaa pituutta ja kirjoittaa lyhyt johdanto.

###### Projektin Slogan

Kuten näet `Deme Two` pudotusvalikon ja luettelon projektin nimen alla on sen iskulause `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: vastaa ensimmäistä riviä `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`README.md` Ensimmäisen tason otsikon ensimmäisen kaksoispisteen `:` jälkeen olevaa sisältöä pidetään projektin iskulauseena.

Kiinalaiset, japanilaiset ja korealaiset käyttäjät, ota huomioon, että sinun on käytettävä puolileveää kaksoispistettä täysleveän kaksoispisteen sijaan `:`

##### Kuinka Siirtää TOC:ta Irtotavarana?

`TOC` on sijoitettava lähdekielen hakemistoon.

Jos lähdekieli on esimerkiksi kiina, yllä on `zh/blog/TOC` `TOC`

Jos lähdekieltä muutetaan, sinun on siirrettävä tietyn kielen `TOC` projektissa eräälle toiselle kielelle.

Voit viitata seuraaviin komentoihin:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Muokkaa `en/` ja `zh/` yllä olevassa komennossa kielikoodiasi.


