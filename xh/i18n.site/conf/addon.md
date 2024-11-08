# Faka Iplagi

Ii-plug-ins zinokuqwalaselwa ku `.i18n/conf.yml` , ezifana:

```yml
addon:
  - i18n.addon/toc
```

## Iplagi Esemthethweni

* `i18n.addon/toc` :
  Yenza isalathiso sikavimba weefayili `json` esekwe ku `TOC` , senziwa ngokungagqibekanga

* `i18n.addon/mouse` : zempuku

## Ingqungquthela Yegama Lefayile

Iiplagi zizonke `npm` iipakethe.

Iphakheji ehambelana no `i18n.addon/toc` ngasentla [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

I-plugin isebenzisa inguqulelo yamva nje ngokungagqibekanga kwaye ijonga uhlaziyo lweveki.

Ukuba ufuna ukulungisa inguqulelo, ungabhala `i18n.addon/toc@0.1.3` .

Umgca womyalelo wokuguqulela ongu `i18n.site` uza kuhlohla ifayile yengqungquthela yeplagi-in ipakethe kwaye emva koko iphumeze.

Amagama eefayile ekuvunyelwene ngawo ngala alandelayo

### htmIndex.js

`htmIndex.js` iya kujovwa ukuya ekupheleni kwe `.i18n/htm/index.js` .

Apho `__CONF__` iya kutshintshwa ngegama lolungelelwaniso lwangoku (njenge `dev` okanye `ol` ).

### afterTran.js

Iya kubizwa emva kokuba uguqulelo lugqityiwe, kwaye iiparamitha ezigqithisiweyo zimi ngolu hlobo lulandelayo.

* `lang_li` Uluhlu : , ulwimi lokuqala lulwimi lwentsusa
* `changed` :
* `root` :

Ixabiso lembuyekezo sisichazimagama, esinje

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` luluhlu lwefayile yemveliso, `path` yindlela yefayile, kwaye `txt` ngumxholo wefayile.

## Imisebenzi Eyakhelwe-Ngaphakathi

Ixesha lokubaleka elakhelwe ngaphakathi eli- `js` lisekwe kuphuhliso lwesibini lwe [boa](https://github.com/boa-dev/boa) kwaye imisebenzi eyakhelweyo yile ilandelayo :

* `wPath(path, txt)` :
* `rTxt(path)` : ifayile yokubhaliweyo
* `rBin(path)` : ifayile yokubini
* `rDir(dirpath)` Funda uvimba weefayili : ixabiso lembuyekezo luludwe :

## Isikhokelo soPhuhliso

Uphuhliso lwe-plug-in lunokuba yireferensi [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)