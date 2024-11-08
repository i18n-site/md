# Hoʻopili-I

Hiki ke hoʻonohonoho ʻia nā plug-ins ma `.i18n/conf.yml` , e like me:

```yml
addon:
  - i18n.addon/toc
```

## Pākuʻi Kūhelu

* `i18n.addon/toc` :
  E hana i ka papa kuhikuhi kuhikuhi o `json` e pili ana i ka `TOC` , i hoʻohana ʻia ma ka paʻamau

* `i18n.addon/mouse` :

## Hui Inoa Waihona

ʻO nā mea hoʻopili he `npm` mau pūʻolo.

ʻO ka pūʻolo e pili ana i ka `i18n.addon/toc` ma luna nei he [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Hoʻohana ka plugin i ka mana hou loa ma ka paʻamau a nānā i nā mea hou i kēlā me kēia pule.

Inā makemake ʻoe e hoʻoponopono i ka mana, hiki iā ʻoe ke kākau `i18n.addon/toc@0.1.3` .

E hoʻokomo ka laina kauoha unuhi `i18n.site` i ka faila hui o ka pūʻolo plug-in a laila e hoʻokō.

ʻO nā inoa faila i ʻaelike ʻia penei

### htmIndex.js

`htmIndex.js` e hoʻokomo ʻia a hiki i ka hopena o `.i18n/htm/index.js` .

Ma kahi e pani ʻia ai `__CONF__` me ka inoa o ka hoʻonohonoho o kēia manawa (e like me `dev` a i ʻole `ol` ).

### afterTran.js

E kāhea ʻia ia ma hope o ka pau ʻana o ka unuhi ʻana, a penei nā ʻāpana i hala.

* `lang_li` : Ka papa inoa o ka ʻōlelo, ʻo ka ʻōlelo mua ka ʻōlelo kumu
* `changed` :
* `root` :

He puke wehewehe ʻōlelo ka waiwai hoʻihoʻi, e like me

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

ʻO `file` ka papa inoa o nā faila, `path` ke ala faila, a ʻo `txt` ka waihona waihona.

## Nā Hana I Kūkulu ʻia

Hoʻokumu ʻia ka `js` runtime i kūkulu ʻia ma ke kūkulu lua ʻana o [boa](https://github.com/boa-dev/boa) a ʻo nā hana i kūkulu ʻia e like me kēia :

* `wPath(path, txt)` :
* `rTxt(path)` :
* `rBin(path)` :
* `rDir(dirpath)` : Heluhelu i ka papa kuhikuhi, ʻo ka waiwai hoʻihoʻi he papa kuhikuhi : , papa inoa waihona

## Alakaʻi Hoʻomohala

Hiki i ka hoʻomohala plug-in ke kuhikuhi [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)