# Lisäosa

Lisäosat voidaan määrittää tiedostossa `.i18n/conf.yml`, kuten:

```yml
addon:
  - i18n.addon/toc
```

## V virallinen lisäosa

* `i18n.addon/toc`: Sisällysluettelo
  Luo hakemistoindeksi `json` `TOC`:n perusteella, oletuksena käytössä

* `i18n.addon/mouse` :

## Tiedoston nimeämiskäytäntö

Lisäosat ovat kaikissa `npm`-paketteja.

Yllä olevaa `i18n.addon/toc` -moduuliin vastaava paketti löytyy osoitteesta [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Lisäosa käyttää oletuksena uusinta versiota ja tarkistaa päivitykset viikoittain.

Jos haluat määrittää version, voit kirjoittaa `i18n.addon/toc@0.1.3`.

Käännöskomento `i18n.site` asentaa lisäosapaketin sopimustiedoston ja suorittaa sen sitten.

Sopimukseen perustuvat tiedostonimet ovat seuraavat

### htmIndex.js

`htmIndex.js` lisätään `.i18n/htm/index.js`-tiedoston loppuun.

Missä `__CONF__` korvataan nykyisen kokoonpanon nimellä (kuten `dev` tai `ol` ).

### afterTran.js

Sitä kutsutaan, kun käännös on valmis, ja siihen välitetyt parametrit ovat seuraavat.

* `lang_li`: Kiell luettelo, jossa ensimmäinen kieli on lähdekieli
* `changed`: Muokatut tiedostot
* `root`: Projektin juurikansio

Palautusarvo on sanakirja, kuten

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` on tulostettava tiedostoluettelo, `path` on tiedoston polku ja `txt` tiedoston sisältö.

## Sisäänrakennetut funktiot

Sisäänrakennettu `js` ajoaika perustuu [boa](https://github.com/boa-dev/boa) n toissijaiseen kehitykseen, ja sisäänrakennetut toiminnot ovat seuraavat :

* `wPath(path, txt)`: Kirjoittaa tekstiä tiedostoon
* `rTxt(path)`: Lukee tekstitiedoston
* `rBin(path)`: Lukee binääritiedoston
* `rDir(dirpath)` : lukee kansion, palauttaa taulukon: kansion lista, tiedostolista

## Kehittämisopas

Lisäosan kehitys voi viitata [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)