# Plug-In

Ny plug-in dia azo amboarina amin'ny `.i18n/conf.yml` , toy ny:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Ofisialy

* `i18n.addon/toc` :
  Mamorona fanondro lahatahiry `json` mifototra amin'ny `TOC` , alefa amin'ny alàlan'ny default

* `i18n.addon/mouse` :

## Fifanarahana Anarana

Ny plug-in dia fonosana `npm` avokoa.

Ny fonosana mifanaraka amin'ny `i18n.addon/toc` etsy ambony dia [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc) .

Ny plugin dia mampiasa ny kinova farany amin'ny alàlan'ny default ary manamarina ny fanavaozana isan-kerinandro.

Raha te hanamboatra ny dikan-teny ianao dia afaka manoratra `i18n.addon/toc@0.1.3` .

Ny baikon'ny fandikan-teny `i18n.site` dia hametraka ny rakitra fivoriambe amin'ny fonosana plug-in ary avy eo dia manatanteraka izany.

Ny anaran'ny rakitra nifanarahana dia toy izao manaraka izao

### htmIndex.js

`htmIndex.js` dia tsindrona hatramin'ny faran'ny `.i18n/htm/index.js` .

Aiza no hosoloina `__CONF__` amin'ny anaran'ny fandrindrana ankehitriny (toy ny `dev` na `ol` ).

### afterTran.js

Hantsoina izy io rehefa vita ny fandikan-teny, ary toy izao manaraka izao ny mari-pamantarana nampidirina.

* `lang_li` : Lisitry ny fiteny, ny fiteny voalohany dia ny fiteny loharano
* `changed` :
* `root` :

Ny sanda miverina dia rakibolana, toy ny

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ny lisitry ny rakitra vokarina, `path` ny lalan'ny rakitra, ary `txt` ny votoatin'ny rakitra.

## Naorina-in Asa

Ny : `js` naorina dia mifototra amin'ny fivoarana faharoa an'ny [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Soraty amin'ny rakitra
* `rTxt(path)` :
* `rBin(path)` : Vakio ny rakitra binary
* `rDir(dirpath)` : Vakio ny lahatahiry, ny sanda miverina dia lisitry ny : , lisitry ny rakitra

## Torolàlana Momba Ny Fampandrosoana

Ny fampandrosoana plug-in dia mety ho fanondroana [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)