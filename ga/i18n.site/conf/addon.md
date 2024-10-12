# Breiseán Isteach

Is féidir breiseán a chumrú in `.i18n/conf.yml` , mar:

```yml
addon:
  - i18n.addon/toc
```

## Breiseán Oifigiúil

* `i18n.addon/toc` : Innéacs eolaire
  Gin innéacs eolaire de `json` bunaithe ar `TOC` , cumasaithe de réir réamhshocraithe

* `i18n.addon/mouse` :

## Coinbhinsiún Ainm Comhaid

Is ionann breiseán agus `npm` pacáiste.

Is é an pacáiste a fhreagraíonn do `i18n.addon/toc` thuas ná [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Úsáideann an breiseán an leagan is déanaí de réir réamhshocraithe agus seiceálann sé nuashonruithe seachtainiúla.

Más mian leat an leagan a dheisiú, is féidir leat `i18n.addon/toc@0.1.3` .

Suiteálfaidh líne ordaithe aistriúcháin `i18n.site` an comhad coinbhinsiúin den phacáiste breiseán agus ansin é a fhorghníomhú.

Is iad seo a leanas na hainmneacha comhaid comhaontaithe

### htmIndex.js

instealladh `htmIndex.js` go dtí deireadh `.i18n/htm/index.js` .

Nuair a chuirfear `__CONF__` in ionad ainm na cumraíochta reatha (amhail `dev` nó `ol` ).

### afterTran.js

Glaofar é tar éis don aistriúchán a bheith críochnaithe, agus is iad seo a leanas na paraiméadair a ritheadh isteach.

* `lang_li` : Liosta teanga, is í an chéad teanga an teanga foinse
* `changed` : Comhaid modhnaithe
* `root` : Eolaire fréimhe an tionscadail

Is foclóir é an luach tuairisceáin, mar

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

Is é `file` an liosta comhad aschuir, is é `path` an cosán comhaid, agus is é `txt` ábhar an chomhaid.

## Feidhmeanna Ionsuite

Tá an t-am rite ionsuite `js` bunaithe : fhorbairt thánaisteach ar [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Scríobh chuig an gcomhad
* `rTxt(path)` : Léigh an téacschomhad
* `rBin(path)` : Léigh an comhad dénártha
* `rDir(dirpath)` : Léigh an t-eolaire, is é an luach tuairisceáin liosta : eolaire, liosta comhad

## Treoir Forbartha

Is féidir le forbairt breiseán a bheith ina thagairt [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)