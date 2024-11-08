# Plug-In

Dodaci se mogu konfigurirati u `.i18n/conf.yml` , kao što su:

```yml
addon:
  - i18n.addon/toc
```

## Službeni Dodatak

* `i18n.addon/toc` : Indeks imenika
  Generiraj indeks imenika `json` na temelju `TOC` , omogućeno prema zadanim postavkama

* `i18n.addon/mouse` : Efekti miša

## Konvencija Naziva Datoteke

Svi dodaci su `npm` paketa.

Paket koji odgovara `i18n.addon/toc` iznad je [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Dodatak prema zadanim postavkama koristi najnoviju verziju i provjerava ažuriranja svaki tjedan.

Ako želite popraviti verziju, možete napisati `i18n.addon/toc@0.1.3` .

Naredbeni redak prijevoda `i18n.site` će instalirati datoteku konvencije paketa dodataka i zatim je izvršiti.

Dogovoreni nazivi datoteka su sljedeći

### htmIndex.js

`htmIndex.js` će biti ubrizgan do kraja `.i18n/htm/index.js` .

Gdje će `__CONF__` biti zamijenjeno nazivom trenutne konfiguracije (kao što je `dev` ili `ol` ).

### afterTran.js

Bit će pozvan nakon završetka prijevoda, a proslijeđeni parametri su sljedeći.

* `lang_li` Popis : , prvi jezik je izvorni jezik
* `changed` : Izmijenjene datoteke
* `root` : Korijenski direktorij projekta

Povratna vrijednost je rječnik, kao što je

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` je popis izlaznih datoteka, `path` je put datoteke, a `txt` je sadržaj datoteke.

## Ugrađene Funkcije

Ugrađeno vrijeme izvođenja `js` temelji se na sekundarnom razvoju [boa](https://github.com/boa-dev/boa) , a ugrađene funkcije su sljedeće :

* `wPath(path, txt)` : Zapiši u datoteku
* `rTxt(path)` : Pročitaj tekstualnu datoteku
* `rBin(path)` : Pročitajte binarnu datoteku
* `rDir(dirpath)` : Pročitajte direktorij, povratna vrijednost je niz : list, file list

## Vodič Za Razvoj

Razvoj dodataka može biti referenca [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)