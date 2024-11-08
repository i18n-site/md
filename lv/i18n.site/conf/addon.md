# Spraudnis

Spraudņus var konfigurēt `.i18n/conf.yml` , piemēram:

```yml
addon:
  - i18n.addon/toc
```

## Oficiālais Spraudnis

* `i18n.addon/toc` direktoriju :
  Ģenerējiet direktoriju indeksu `json` , pamatojoties uz `TOC` , pēc noklusējuma iespējots

* `i18n.addon/mouse` peles :

## Failu Nosaukumu Konvencija

Visi spraudņi ir `npm` pakotnes.

Pakete, kas atbilst `i18n.addon/toc` iepriekš ir [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Spraudnis pēc noklusējuma izmanto jaunāko versiju un katru nedēļu pārbauda atjauninājumus.

Ja vēlaties labot versiju, varat ierakstīt `i18n.addon/toc@0.1.3` .

Tulkošanas komandrinda `i18n.site` instalēs spraudņa pakotnes konvencijas failu un pēc tam to izpildīs.

Saskaņotie failu nosaukumi ir šādi

### htmIndex.js

`htmIndex.js` tiks injicēts līdz `.i18n/htm/index.js` beigām.

Kur `__CONF__` tiks aizstāts ar pašreizējās konfigurācijas nosaukumu (piemēram, `dev` vai `ol` ).

### afterTran.js

Tas tiks izsaukts pēc tulkojuma pabeigšanas, un ievadītie parametri ir šādi.

* `lang_li` : saraksts, pirmā valoda ir avota valoda
* `changed` : faili
* `root` Projekta saknes :

Atgriešanās vērtība ir vārdnīca, piemēram,

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ir izvades failu saraksts, `path` ir faila ceļš un `txt` ir faila saturs.

## Iebūvētās Funkcijas

Iebūvētais `js` izpildlaiks ir balstīts uz sekundāro attīstību [boa](https://github.com/boa-dev/boa) un iebūvētās funkcijas ir šādas :

* `wPath(path, txt)` : failā
* `rTxt(path)` : teksta failu
* `rBin(path)` Lasīt : failu
* `rDir(dirpath)` Izlasiet direktoriju : atgriešanas vērtība ir masīvs : saraksts, failu saraksts

## Attīstības Rokasgrāmata

Spraudņu izstrāde var būt atsauce [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)