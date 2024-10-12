# Ploge Nan

Plug-ins yo ka configuré nan `.i18n/conf.yml` , tankou:

```yml
addon:
  - i18n.addon/toc
```

## Plòg Ofisyèl

* `i18n.addon/toc` : Endis Anyè
  Jenere endèks anyè `json` ki baze sou `TOC` , aktive pa default

* `i18n.addon/mouse` : Efè sourit

## Konvansyon Non Dosye

Plug-ins yo tout `npm` pakè.

Pake ki koresponn ak `i18n.addon/toc` pi wo a se [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin a sèvi ak dènye vèsyon an pa default epi tcheke pou mizajou chak semèn.

Si ou vle ranje vèsyon an, ou ka ekri `i18n.addon/toc@0.1.3` .

Liy kòmand tradiksyon `i18n.site` pral enstale dosye konvansyon pakè ploge nan epi egzekite li.

Non dosye yo te dakò yo se jan sa a

### htmIndex.js

`htmIndex.js` pral enjekte nan fen `.i18n/htm/index.js` .

Ki kote `__CONF__` pral ranplase ak non konfigirasyon aktyèl la (tankou `dev` oswa `ol` ).

### afterTran.js

Li pral rele apre tradiksyon an fini, ak paramèt yo pase nan yo jan sa a.

* `lang_li` : Lis lang, premye lang se lang sous la
* `changed` : modifye
* `root` : Anyè rasin pwojè

Valè a retounen se yon diksyonè, tankou

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` se lis dosye pwodiksyon an, `path` se chemen dosye a, ak `txt` se kontni fichye a.

## Fonksyon Entegre

Egzekisyon `js` entegre a baze sou devlopman segondè nan [boa](https://github.com/boa-dev/boa) ak fonksyon entegre yo jan sa a :

* `wPath(path, txt)` : Ekri nan dosye
* `rTxt(path)` : Li dosye tèks
* `rBin(path)` : Li dosye binè
* `rDir(dirpath)` : Li anyè a, valè a retounen se yon lis : tablo, lis dosye

## Gid Devlopman

Plug-in devlopman ka yon referans [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)