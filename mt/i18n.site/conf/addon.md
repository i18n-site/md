# Plug-In

Il-plug-ins jistgħu jiġu kkonfigurati `.i18n/conf.yml` , bħal:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Uffiċjali

* `i18n.addon/toc` : Indiċi tad-direttorju
  Iġġenera indiċi tad-direttorju ta' `json` ibbażat fuq `TOC` , attivat awtomatikament

* `i18n.addon/mouse` : Effetti tal-maws

## Konvenzjoni Tal-Isem Tal-Fajl

Il-plug-ins huma kollha `npm` pakketti.

Il-pakkett li jikkorrispondi għal `i18n.addon/toc` hawn fuq huwa [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Il-plugin juża l-aħħar verżjoni awtomatikament u jiċċekkja għal aġġornamenti kull ġimgħa.

Jekk trid tirranġa l-verżjoni, tista 'tikteb `i18n.addon/toc@0.1.3` .

Il-linja tal-kmand tat-traduzzjoni `i18n.site` se tinstalla l-fajl tal-konvenzjoni tal-pakkett tal-plug-in u mbagħad tesegwixxih.

L-ismijiet tal-fajls miftiehma huma kif ġej

### htmIndex.js

`htmIndex.js` se jiġi injettat sa l-aħħar ta `.i18n/htm/index.js` .

Fejn `__CONF__` se jiġi sostitwit bl-isem tal-konfigurazzjoni attwali (bħal `dev` jew `ol` ).

### afterTran.js

Se tissejjaħ wara li titlesta t-traduzzjoni, u l-parametri mgħoddija huma kif ġej.

* `lang_li` : Lista tal-lingwi, l-ewwel lingwa hija l-lingwa tas-sors
* `changed` : Fajls modifikati
* `root` : Direttorju tal-għeruq tal-proġett

Il-valur tar-ritorn huwa dizzjunarju, bħal

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` hija l-lista tal-fajl tal-ħruġ, `path` hija l-mogħdija tal-fajl, u `txt` hija l-kontenut tal-fajl.

## Funzjonijiet Integrati

Il-runtime `js` built-in huwa bbażat fuq żvilupp sekondarju ta [boa](https://github.com/boa-dev/boa) , u l-funzjonijiet built-in huma kif ġej :

* `wPath(path, txt)` : Ikteb fil-fajl
* `rTxt(path)` : Aqra l-fajl tat-test
* `rBin(path)` : Aqra l-fajl binarju
* `rDir(dirpath)` : Aqra d-direttorju, il-valur tar-ritorn huwa lista : , lista tal-fajls

## Gwida Għall-Iżvilupp

L-iżvilupp tal-plug-in jista 'jkun referenza [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)