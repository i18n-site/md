# Plug-in a Wɔde Hyɛ Mu

Wobetumi asiesie plug-ins wɔ `.i18n/conf.yml` mu, te sɛ:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in a Ɛyɛ Aban De

* `i18n.addon/toc` :
  Yɛ directory index a ɛyɛ `json` a egyina `TOC` so, a wɔahyɛ no den default so

* `i18n.addon/mouse` :

## Fael Din Nhyiam

Plug-ins nyinaa yɛ `npm` packages.

Pakete a ɛne `i18n.addon/toc` a ɛwɔ atifi hɔ no hyia ne [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin no de nea aba foforo no di dwuma default na ɛhwɛ sɛ ebia wɔayɛ foforo dapɛn biara.

Sɛ wopɛ sɛ wosiesie version no a, wubetumi akyerɛw `i18n.addon/toc@0.1.3` .

Nkyerɛaseɛ ahyɛdeɛ kwan `i18n.site` bɛhyehyɛ nhyiamu fael a ɛwɔ plug-in paket no mu na afei ayɛ no.

Fael din ahorow a wɔapene so no te sɛ nea edidi so yi

### htmIndex.js

`htmIndex.js` na wɔde bɛhyɛ `.i18n/htm/index.js` awiei.

Faako a wɔde mprempren nhyehyeɛ no din besi `__CONF__` ananmu (te sɛ `dev` anaa `ol` ).

### afterTran.js

Wɔbɛfrɛ no bere a wɔawie nkyerɛase no, na parameters a wɔde akɔ mu no te sɛ nea edidi so yi.

* `lang_li` : Kasa list, kasa a edi kan ne kasa a wofi mu
* `changed` : Fael ahorow a wɔasesa
* `root` : Project ntini kyerɛwtohɔ

Botae a wɔde san ba no yɛ nsɛm asekyerɛ nhoma, te sɛ

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` yɛ output fael list, `path` yɛ fael kwan, na `txt` yɛ fael no mu nsɛm.

## Dwumadi Ahorow a Wɔde Ahyɛ Mu

`js` runtime a wɔasisi no : nkɔso a ɛto so abien a ɛwɔ [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Twerɛ kɔ fael mu
* `rTxt(path)` : Kenkan nkyerɛwee fael
* `rBin(path)` : Kenkan fael a ɛwɔ afã abien
* `rDir(dirpath)` Kenkan kyerɛwtohɔ no : sanba botae no yɛ array : list, fael list

## Nkɔsoɔ Akwankyerɛ

Plug-in nkɔso betumi ayɛ nea wɔde gyina so [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)