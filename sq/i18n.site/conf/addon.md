# Plug-In

Shtojcat mund të konfigurohen në `.i18n/conf.yml` , si p.sh.

```yml
addon:
  - i18n.addon/toc
```

## Shtojca Zyrtare

* `i18n.addon/toc` :
  Gjeneroni indeksin e drejtorisë prej `json` bazuar në `TOC` , i aktivizuar si parazgjedhje

* `i18n.addon/mouse` Efektet : miut

## Konventa E Emrit Të Skedarit

Shtojcat janë të gjitha `npm` paketa.

Paketa që korrespondon me `i18n.addon/toc` më sipër është [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Shtojca përdor versionin më të fundit si parazgjedhje dhe kontrollon përditësimet çdo javë.

Nëse dëshironi të rregulloni versionin, mund të shkruani `i18n.addon/toc@0.1.3` .

Linja e komandës së përkthimit `i18n.site` do të instalojë skedarin e konventës së paketës plug-in dhe më pas do ta ekzekutojë atë.

Emrat e skedarëve të rënë dakord janë si më poshtë

### htmIndex.js

`htmIndex.js` do të injektohet deri në fund të `.i18n/htm/index.js` .

Ku `__CONF__` do të zëvendësohet me emrin e konfigurimit aktual (si p.sh. `dev` ose `ol` ).

### afterTran.js

Ai do të thirret pasi të përfundojë përkthimi dhe parametrat e transmetuar janë si më poshtë.

* `lang_li` Lista : gjuhëve, gjuha e parë është gjuha burimore
* `changed` Skedarët e :
* `root` :

Vlera e kthyer është një fjalor, si p.sh

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` është lista e skedarëve dalës, `path` është shtegu i skedarit dhe `txt` është përmbajtja e skedarit.

## Funksionet E Integruara

Koha e integruar `js` bazohet në zhvillimin sekondar të [boa](https://github.com/boa-dev/boa) dhe funksionet e integruara janë si më poshtë :

* `wPath(path, txt)` Shkruani në :
* `rTxt(path)` : Lexoni skedarin e tekstit
* `rBin(path)` : Lexo skedarin binar
* `rDir(dirpath)` : Lexoni direktoriumin, vlera e kthimit është një listë : , listë skedarësh

## Udhëzues Zhvillimi

Zhvillimi i plug-in mund të jetë një referencë [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)