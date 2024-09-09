# Nkwụnye

Enwere ike ịhazi nkwụnye n'ime `.i18n/conf.yml` , dịka:

```yml
addon:
  - i18n.addon/toc
```

## Nkwụnye Official

* `i18n.addon/toc` :
  Mepụta ndekọ ndekọ aha nke `json` dabere na `TOC` , enyere ya na ndabara

* `i18n.addon/mouse` : òké

## Mgbakọ Aha Faịlụ

Plug-ins bụ ngwugwu `npm` niile.

Ngwungwu dabara na `i18n.addon/toc` n'elu bụ [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Ngwa mgbakwunye na-eji ụdị kachasị ọhụrụ na ndabara yana nlele maka mmelite kwa izu.

Ọ bụrụ na ịchọrọ idozi ụdị ahụ, ị nwere ike dee `i18n.addon/toc@0.1.3` .

Ahịrị iwu ntụgharị asụsụ `i18n.site` ga-etinye faịlụ mgbakọ nke ngwungwu nkwụnye wee mebie ya.

Aha faịlụ ekwekọrịtara bụ ndị a

### htmIndex.js

`htmIndex.js` a ga-agbanye ruo na njedebe nke `.i18n/htm/index.js` .

Ebe a ga-eji aha nhazi ugbu a dochie `__CONF__` (dị ka `dev` ma ọ bụ `ol` ).

### afterTran.js

A ga-akpọ ya ka emechara ntụgharị asụsụ, na paramita ndị agafere bụ ndị a.

* `lang_li` : Ndepụta asụsụ, asụsụ mbụ bụ asụsụ isi mmalite
* `changed` :
* `root` :

Uru nloghachi bụ akwụkwọ ọkọwa okwu, dịka

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` bụ ndepụta faịlụ mmepụta, `path` bụ ụzọ faịlụ, na `txt` bụ ọdịnaya faịlụ.

## Arụrụ Arụ Ọrụ

Oge ojiri gaa n'ime `js` dabere na mmepe nke abụọ nke [boa](https://github.com/boa-dev/boa) yana ọrụ arụnyere bụ ndị a :

* `wPath(path, txt)` : na faịlụ
* `rTxt(path)` : faịlụ ederede
* `rBin(path)` Gụọ faịlụ ọnụọgụ :
* `rDir(dirpath)` Gụọ akwụkwọ ndekọ : , uru nlọghachi bụ array : list, file list

## Ntuziaka Mmepe

Mmepe nkwụnye nwere ike ịbụ ntụnye aka [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)