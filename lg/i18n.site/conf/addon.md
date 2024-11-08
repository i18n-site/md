# Plug-in (Okugiteeka Mu Nkola

Plug-ins zisobola okuteekebwateekebwa mu `.i18n/conf.yml` , nga:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Entongole

* `i18n.addon/toc` : Omuwendo gwa dayirekita
  Okukola omuwendo gwa dayirekita ogwa `json` okusinziira ku `TOC` , nga gusobozeseddwa nga bwe guli

* `i18n.addon/mouse` : Ebikolwa bya Mouse

## Enkola Y'erinnya Lya Fayiro

Plug-ins zonna za package `npm` .

Ekipapula ekikwatagana ne `i18n.addon/toc` waggulu kiri [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin ekozesa enkyusa eyasembyeyo mu butonde era ekebera ebipya buli wiiki.

Bw'oba oyagala okutereeza enkyusa, osobola okuwandiika `i18n.addon/toc@0.1.3` .

Ennyiriri z'ekiragiro ky'okuvvuunula `i18n.site` ejja kuteeka fayiro y'enkolagana ya plug-in package n'oluvannyuma n'egikola.

Amannya ga fayiro agakkaanyiziddwaako ge gano wammanga

### htmIndex.js

`htmIndex.js` ejja kufukibwa okutuuka ku nkomerero ya `.i18n/htm/index.js` .

Awali `__CONF__` ejja kukyusibwa n'erinnya ly'ensengeka eriwo kati (nga `dev` oba `ol` ).

### afterTran.js

Kijja kuyitibwa nga okuvvuunula kuwedde, era parameters eziyisiddwamu ze zino wammanga.

* `lang_li` : lw'olulimi, olulimi olusooka lwe lulimi olusibuka
* `changed` : Fayiro ezikyusiddwa
* `root` : Ekikolo kya pulojekiti

Omuwendo oguddayo ye nkuluze, nga

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ye lukalala lwa fayiro efuluma, `path` ye kkubo lya fayiro, ate `txt` ye biri mu fayiro.

## Emirimu Egyazimbibwamu

Ekiseera ky'okudduka ekizimbibwamu `js` : ku nkulaakulana ey'okubiri eya [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : mu fayiro
* `rTxt(path)` : Soma fayiro y'ebiwandiiko
* `rBin(path)` : Soma fayiro ya binary
* `rDir(dirpath)` : Soma dayirekita, omuwendo oguddayo ye lukalala lwa array : , olukalala lwa fayiro

## Ekitabo Ekikwata Ku Nkulaakulana

Enkulaakulana ya plug-in eyinza okuba eky'okujuliza [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)