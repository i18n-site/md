# Girêdan

Plug-in dikarin di `.i18n/conf.yml` de bêne mîheng kirin, wek:

```yml
addon:
  - i18n.addon/toc
```

## Fermî Plug-In

* `i18n.addon/toc` :
  Indeksa pelrêça `json` -ê li ser bingeha `TOC` biafirîne, ku ji hêla xwerû ve hatî çalak kirin

* `i18n.addon/mouse` :

## Peymana Navê Pelê

Plug-in hemî `npm` pakêt in.

Pakêta ku li jor `i18n.addon/toc` ye [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pêvek ji hêla xwerû ve guhertoya herî dawî bikar tîne û her hefte nûvekirinan kontrol dike.

Heke hûn dixwazin guhertoyê rast bikin, hûn dikarin `i18n.addon/toc@0.1.3` binivîsin.

Rêza fermanê ya werger `i18n.site` dê pelê peymanê ya pakêta pêvekê saz bike û dûv re wê bicîh bike.

Navên pelên lihevkirî wiha ne

### htmIndex.js

`htmIndex.js` dê heta dawiya `.i18n/htm/index.js` ê were derzî kirin.

Li ku derê `__CONF__` dê bi navê veavakirina heyî (wek `dev` an `ol` ) were guheztin.

### afterTran.js

Piştî ku werger qediya, ew ê were gazî kirin, û pîvanên ku tê de derbas bûne wiha ne.

* `lang_li` Lîsteya ziman : zimanê yekem zimanê çavkanî ye
* `changed` : hatine guherandin
* `root` :

Nirxa vegera ferhengek e, wek

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` navnîşa pelê encam e, `path` riya pelê ye, û `txt` naveroka pelê ye.

## Fonksiyonên Çêkirî

Demjimêra `js` -ya çêkirî li ser bingeha pêşkeftina duyemîn e [boa](https://github.com/boa-dev/boa) û fonksiyonên çêkirî wiha ne :

* `wPath(path, txt)` :
* `rTxt(path)` :
* `rBin(path)` :
* `rDir(dirpath)` : :

## Guide Pêşveçûn

Pêşveçûna pêvekê dikare bibe referans [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)