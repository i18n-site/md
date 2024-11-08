# I-Plug-In

Ama-plug-in angacushwa ku `.i18n/conf.yml` , njenge:

```yml
addon:
  - i18n.addon/toc
```

## I-Plug-in Esemthethweni

* `i18n.addon/toc` :
  Khiqiza inkomba yenkomba yoku `json` ngokusekelwe kokuthi `TOC` , enikwe amandla ngokuzenzakalela

* `i18n.addon/mouse` :

## Ingqungquthela Yegama Lefayela

Ama-plug-in wonke amaphakheji `npm` .

Iphakheji elihambisana no `i18n.addon/toc` ngenhla lithi [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

I-plugin isebenzisa inguqulo yakamuva ngokuzenzakalelayo futhi ihlola izibuyekezo masonto onke.

Uma ufuna ukulungisa inguqulo, ungabhala `i18n.addon/toc@0.1.3` .

Umugqa womyalo wokuhumusha ongu `i18n.site` uzofaka ifayela lomhlangano wephakheji ye-plug-in bese ulenza.

Amagama amafayela okuvunyelwene ngawo ami kanje

### htmIndex.js

`htmIndex.js` uzojovwa kuze kube sekupheleni kuka `.i18n/htm/index.js` .

Lapho `__CONF__` ezothathelwa indawo igama lokucushwa kwamanje (njengo `dev` noma `ol` ).

### afterTran.js

Izobizwa ngemva kokuqedwa kokuhumusha, futhi imingcele edlulisiwe ilandelayo.

* `lang_li` : Uhlu lolimi, ulimi lokuqala luwumthombo
* `changed` : ashintshiwe
* `root` :

Inani lokubuyisela liyisichazamazwi, njenge

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` uhlu lwamafayela aphumayo, `path` uyindlela yefayela, futhi `txt` ungukuqukethwe kwefayela.

## Imisebenzi Eyakhelwe Ngaphakathi

Isikhathi sokusebenza esakhelwe ngaphakathi esingu- `js` sisekelwe ekuthuthukisweni kwesibili kwe- [boa](https://github.com/boa-dev/boa) futhi imisebenzi eyakhelwe ngaphakathi imi kanje :

* `wPath(path, txt)` :
* `rTxt(path)` Funda : lombhalo
* `rBin(path)` Funda ifayela :
* `rDir(dirpath)` Funda uhla lwemibhalo : inani lokubuyisela liwuhlu lwemibhalo : , uhlu lwamafayela

## Umhlahlandlela Wokuthuthukisa

Ukuthuthukiswa kwe-plug-in kungaba ireferensi [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)