# Plug-In

Dodaci se mogu konfigurirati u `.i18n/conf.yml` , kao što su:

```yml
addon:
  - i18n.addon/toc
```

## Zvanični Plug-In

* `i18n.addon/toc` :
  Generirajte indeks direktorija od `json` na osnovu `TOC` , omogućeno po defaultu

* `i18n.addon/mouse` :

## Konvencija Imena Datoteke

Dodaci su svih `npm` paketa.

Paket koji odgovara `i18n.addon/toc` gore je [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Dodatak koristi najnoviju verziju prema zadanim postavkama i provjerava ažuriranja svake sedmice.

Ako želite popraviti verziju, možete napisati `i18n.addon/toc@0.1.3` .

Komandna linija za prevođenje `i18n.site` će instalirati konvencijsku datoteku plug-in paketa i zatim je izvršiti.

Dogovoreni nazivi datoteka su sljedeći

### htmIndex.js

`htmIndex.js` će se ubaciti do kraja `.i18n/htm/index.js` .

Gdje će `__CONF__` biti zamijenjeno imenom trenutne konfiguracije (kao što je `dev` ili `ol` ).

### afterTran.js

Biće pozvan nakon što se prevod završi, a parametri koji se prosleđuju su sledeći.

* `lang_li` Lista jezika : prvi jezik je izvorni jezik
* `changed` :
* `root` :

Povratna vrijednost je rječnik, kao što je

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` je lista izlaznih datoteka, `path` je putanja datoteke, a `txt` je sadržaj datoteke.

## Ugrađene Funkcije

Ugrađeno vrijeme izvođenja `js` temelji se na sekundarnom razvoju [boa](https://github.com/boa-dev/boa) a ugrađene funkcije su sljedeće :

* `wPath(path, txt)` :
* `rTxt(path)` :
* `rBin(path)` :
* `rDir(dirpath)` Pročitajte direktorij : povratna vrijednost je niz : list, file list

## Vodič Za Razvoj

Razvoj dodataka može biti referenca [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)