# Pistikprogramm

Pistikprogramme saab konfigureerida väärtusega `.i18n/conf.yml` , näiteks:

```yml
addon:
  - i18n.addon/toc
```

## Ametlik Pistikprogramm

* `i18n.addon/toc` : indeks
  Loo kataloogi indeks `json` `TOC` alusel, vaikimisi lubatud

* `i18n.addon/mouse` :

## Failinimede Kokkulepe

Pistikprogrammid on kõik `npm` paketid.

`i18n.addon/toc` -le vastav pakett on [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pistikprogramm kasutab vaikimisi uusimat versiooni ja kontrollib värskendusi kord nädalas.

Kui soovite versiooni parandada, võite kirjutada `i18n.addon/toc@0.1.3` .

Tõlke käsurida `i18n.site` installib lisandmooduli paketi kokkuleppefaili ja käivitab selle.

Kokkulepitud failinimed on järgmised

### htmIndex.js

`htmIndex.js` süstitakse `.i18n/htm/index.js` lõpuni.

Kus `__CONF__` asendatakse praeguse konfiguratsiooni nimega (nt `dev` või `ol` ).

### afterTran.js

Seda kutsutakse välja pärast tõlke lõppu ja sisestatud parameetrid on järgmised.

* `lang_li` : loend, esimene keel on lähtekeel
* `changed` : failid
* `root` projekti :

Tagastusväärtus on sõnastik, nt

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` on väljundfailide loend, `path` on faili tee ja `txt` on faili sisu.

## Sisseehitatud Funktsioonid

Sisseehitatud `js` käitusaeg : [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : faili
* `rTxt(path)` Lugege :
* `rBin(path)` : lugemine
* `rDir(dirpath)` Lugege kataloogi : tagastusväärtus on massiiv : , faililoend

## Arendusjuhend

Pistikprogrammi arendus võib olla viide [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)