# Lisäosa

`.i18n/conf.yml`-tiedostossa voidaan määrittää lisäosia, kuten:

```yml
addon:
  - i18n.addon/toc
```

## V virallinen lisäosa

* `i18n.addon/toc` :
  Luo hakemistoindeksi `json` `TOC`:n perusteella, oletuksena käytössä

* `i18n.addon/mouse` :

## Tiedoston nimeämissäntö

Lisäosat ovat kaikissa `npm`-paketteja.

Yllä olevaa `i18n.addon/toc` vastaava paketti löytyy [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Lisäosa käyttää oletuksena uusinta versiota ja tarkistaa päivitykset viikoittain.

Jos haluat määrittää version, voit kirjoittaa `i18n.addon/toc@0.1.3`.

Käännöskomento `i18n.site` asentaa lisäosapaketin sopimustiedoston ja suorittaa sen sitten.

Sopimustiedoston nimet ovat seuraavat

### htmIndex.js

`htmIndex.js` lisätään `.i18n/htm/index.js`-tiedoston loppuun.

Jossa `__CONF__` korvataan nykyisen konfiguraation nimellä (esim. `dev` tai `ol`).

### afterTran.js

Sitä kutsutaan käännöksen valmistuttua, ja siihen välitetyt parametrit ovat seuraavat.

* `lang_li` : kielilista, jossa ensimmäinen kieli on lähdekieli
* `changed` : muokatut tiedostot
* `root` : projektin juurikansio

Palautusarvo on sanakirja, kuten

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

Sisäänrakennettu `js`-ajonaika perustuu [boa](https://github.com/boa-dev/boa) -alustan toissijaiseen kehitykseen, ja sisäänrakennetut funktiot ovat seuraavat:

* `wPath(path, txt)` : kirjoittaa tiedostoon
* `rTxt(path)` : lukee tekstitiedoston
* `rBin(path)` : lukee binääritiedoston
* `rDir(dirpath)` : lukee hakemiston, palauttaa taulukon: hakemistolista, tiedostolista

## Kehittämisopas

Lisäosan kehitys voi viitata [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)