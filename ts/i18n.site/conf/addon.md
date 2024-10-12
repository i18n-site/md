# Xihlanganisi Xa Plug-In

Ti plug-in ti nga lulamisiwa eka `.i18n/conf.yml` , ku fana na:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Ya Ximfumo

* `i18n.addon/toc` : Xikombo xa xikombo
  Endla index ya directory ya `json` leyi sekeriweke eka `TOC` , leyi pfuriweke hi ku tiyimisela

* `i18n.addon/mouse` : Switandzhaku swa mbeva

## Ntwanano Wa Mavito Ya Fayili

Ti plug-ins hinkwato i `npm` wa tiphasela.

Phasela leri fambelanaka na `i18n.addon/toc` laha henhla i [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin yi tirhisa vuhundzuluxeri bya sweswinyana hi ku tiyimisela naswona yi kambela ku pfuxetiwa vhiki na vhiki.

Loko u lava ku lulamisa vuhundzuluxeri, u nga tsala `i18n.addon/toc@0.1.3` .

Layini ya xileriso xa vuhundzuluxi `i18n.site` yi ta nghenisa fayili ya ntwanano ya phasela ra plug-in ivi yi yi tirhisa.

Mavito ya tifayela lama pfumelelaniweke hi lawa ya landzelaka

### htmIndex.js

`htmIndex.js` yi ta cheriwa ku ya fika emakumu ka `.i18n/htm/index.js` .

Laha `__CONF__` yi nga ta siviwa hi vito ra xivumbeko xa sweswi (ku fana na `dev` kumbe `ol` ).

### afterTran.js

Yi ta vitaniwa endzhaku ka loko vuhundzuluxeri byi hetiwile, naswona tipharamitha leti hundziseriweke hi leti landzelaka.

* `lang_li` Nxaxamelo : tindzimi, ririmi ro sungula i ririmi ra xihlovo
* `changed` : Tifayili leti cinciweke
* `root` : Xikombo xa timitsu ta phurojeke

Nhlayo ya mbuyelo i xihlamusela-marito, ku fana na

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` i nxaxamelo wa fayili ya vuhumelerisi, `path` i ndlela ya fayili, naswona `txt` i nhundzu ya fayili.

## Mintirho Leyi Akiweke Endzeni

Nkarhi wo famba wa `js` lowu akiweke wu sekeriwe eka nhluvukiso wa vumbirhi wa [boa](https://github.com/boa-dev/boa) , naswona mintirho leyi akiweke hi leyi landzelaka :

* `wPath(path, txt)` : Tsala eka fayili
* `rTxt(path)` : Hlaya fayili ya tsalwa
* `rBin(path)` : Hlaya fayili ya binary
* `rDir(dirpath)` : Hlaya xikombo, ntikelo wo vuyela i nxaxamelo wa array : , nxaxamelo wa fayili

## Nkongomiso Wa Nhluvukiso

Nhluvukiso wa ti plug-in wu nga va xikombo [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)