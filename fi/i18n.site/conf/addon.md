# Laajennus

Laajennukset voidaan määrittää arvolla `.i18n/conf.yml` , kuten:

```yml
addon:
  - i18n.addon/toc
```

## Virallinen Laajennus

* `i18n.addon/toc` :
  Luo hakemistoindeksi `json` arvon `TOC` perusteella, oletuksena käytössä

* `i18n.addon/mouse` :

## Tiedoston Nimisopimus

Laajennukset ovat kaikki `npm` paketteja.

Yllä olevaa `i18n.addon/toc` :a vastaava paketti on [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Laajennus käyttää oletuksena uusinta versiota ja tarkistaa päivitykset viikoittain.

Jos haluat korjata version, voit kirjoittaa `i18n.addon/toc@0.1.3` .

Käännöskomentorivi `i18n.site` asentaa laajennuspaketin sopimustiedoston ja suorittaa sen sitten.

Sovitut tiedostonimet ovat seuraavat

### htmIndex.js

`htmIndex.js` pistetään `.i18n/htm/index.js` :n loppuun.

Missä `__CONF__` korvataan nykyisen kokoonpanon nimellä (kuten `dev` tai `ol` ).

### afterTran.js

Sitä kutsutaan, kun käännös on valmis, ja siihen välitetyt parametrit ovat seuraavat.

* `lang_li` : , ensimmäinen kieli on lähdekieli
* `changed` : tiedostoja
* `root` : juurihakemisto

Palautusarvo on sanakirja, kuten

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` on tulostiedostoluettelo, `path` on tiedoston polku ja `txt` on tiedoston sisältö.

## Sisäänrakennetut Toiminnot

Sisäänrakennettu `js` ajoaika perustuu [boa](https://github.com/boa-dev/boa) n toissijaiseen kehitykseen, ja sisäänrakennetut toiminnot ovat seuraavat :

* `wPath(path, txt)` : tiedostoon
* `rTxt(path)` Lue :
* `rBin(path)` Lue :
* `rDir(dirpath)` Lue hakemisto : palautusarvo on taulukko : , tiedostolista

## Kehittämisopas

Plug-in kehitys voi olla viittaus [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)