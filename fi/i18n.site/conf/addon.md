# Lisäosa

`.i18n/conf.yml`-tiedostossa voidaan määrittää lisäosia, kuten:

```yml
addon:
  - i18n.addon/toc
```

## Virallinen lisäosa

* `i18n.addon/toc` : Hakemistoindeksin luominen
  Tuottaa `json`-muotoisen hakemistoindeksin `TOC`:n perusteella, oletuksena käytössä

* `i18n.addon/mouse` : Hiiren erikoisefektit

## Tiedoston nimen konventio

Lisäosat ovat kaikissa `npm`-paketteja.

Yllä olevaa `i18n.addon/toc` vastaava paketti löytyy [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Lisäosa käyttää oletuksena uusinta versiota ja tarkistaa päivitykset viikoittain.

Jos haluat määrittää version, voit kirjoittaa `i18n.addon/toc@0.1.3`.

Käännöskomentorivi `i18n.site` asentaa laajennuspaketin sopimustiedoston ja sen jälkeen suorittaa sen.

Sopimustiedostojen nimet ovat seuraavat

### htmIndex.js

`htmIndex.js` lisätään `.i18n/htm/index.js` tiedoston loppuun.

Jossa `__CONF__` korvataan nykyisen konfiguraation nimeksi (esim. `dev` tai `ol`).

### afterTran.js

Tätä kutsutaan käännöksen valmistuttua, ja seuraavat parametrit välitetään sille.

* `lang_li` : Kielloista, ensimmäinen kieli on lähdekieli
* `changed` : Muokatut tiedostot
* `root` : Projektin juurikansio

Palauttaa sanakirjan, esimerkiksi

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` on tulostettavien tiedostojen luettelo, `path` on tiedoston polku ja `txt` tiedoston sisältö.

## Sisäänrakennetut funktiot

Sisäänrakennettu `js`-ajonaikaisuus perustuu [Boa](https://github.com/boa-dev/boa)-alustan toissijaiseen kehitykseen, ja sisäänrakennetut funktiot ovat seuraavat:

* `wPath(path, txt)` : Kirjoittaa tiedostoon
* `rTxt(path)` : Lukee tekstitiedoston
* `rBin(path)` : Lukee binääritiedoston
* `rDir(dirpath)` : Lukee kansion, palauttaa taulukon: Kansiolista, tiedostolista

## Kehitysohjeet

Lisäosan kehitys voi viitata [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)