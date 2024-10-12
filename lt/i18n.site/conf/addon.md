# Papildinys

Papildinius galima konfigūruoti `.i18n/conf.yml` , pvz.:

```yml
addon:
  - i18n.addon/toc
```

## Oficialus Papildinys

* `i18n.addon/toc` Katalogų :
  Sukurti katalogo indeksą `json` remiantis `TOC` , įgalinta pagal numatytuosius nustatymus

* `i18n.addon/mouse` Pelės :

## Failų Pavadinimo Konvencija

Visi papildiniai yra `npm` paketų.

Paketas, atitinkantis `i18n.addon/toc` aukščiau, yra [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Papildinys pagal numatytuosius nustatymus naudoja naujausią versiją ir kas savaitę tikrina, ar nėra naujinimų.

Jei norite pataisyti versiją, galite parašyti `i18n.addon/toc@0.1.3` .

Vertimo komandinė eilutė `i18n.site` įdiegs papildinio paketo susitarimo failą ir jį vykdys.

Suderinti failų pavadinimai yra tokie

### htmIndex.js

`htmIndex.js` bus sušvirkščiama iki `.i18n/htm/index.js` pabaigos.

Kur `__CONF__` bus pakeistas dabartinės konfigūracijos pavadinimu (pvz., `dev` arba `ol` ).

### afterTran.js

Jis bus iškviestas baigus vertimą, o perduoti parametrai yra tokie.

* `lang_li` : sąrašas, pirmoji kalba yra šaltinio kalba
* `changed` : failų
* `root` : šakninis katalogas

Grąžinama reikšmė yra žodynas, pvz

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` yra išvesties failų sąrašas, `path` yra failo kelias ir `txt` yra failo turinys.

## Įmontuotos Funkcijos

Integruotas `js` vykdymo laikas yra : antriniu [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : į failą
* `rTxt(path)` : tekstinį failą
* `rBin(path)` : dvejetainį failą
* `rDir(dirpath)` Skaitykite katalogą : grąžinama reikšmė yra masyvas : list, failų sąrašas

## Vystymo Vadovas

Papildinių kūrimas gali būti nuoroda [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)