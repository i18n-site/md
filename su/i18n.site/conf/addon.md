# Plug-In

Plug-in tiasa dikonpigurasi dina `.i18n/conf.yml` , sapertos:

```yml
addon:
  - i18n.addon/toc
```

## Resmi Plug-In

* `i18n.addon/toc` : Indéks diréktori
  Ngahasilkeun indéks diréktori `json` dumasar kana `TOC` , diaktipkeun sacara standar

* `i18n.addon/mouse` : Pangaruh beurit

## Konvénsi Ngaran File

Plug-in sadayana `npm` bungkusan.

Paket anu cocog sareng `i18n.addon/toc` di luhur nyaéta [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin nganggo versi panganyarna sacara standar sareng pariksa apdet mingguan.

Upami anjeun hoyong ngalereskeun versi, anjeun tiasa nyerat `i18n.addon/toc@0.1.3` .

Baris paréntah tarjamahan `i18n.site` bakal masang file konvénsi pakét plug-in teras laksanakeun.

Ngaran koropak nu sapuk nyaéta kieu

### htmIndex.js

`htmIndex.js` bakal disuntik ka tungtung `.i18n/htm/index.js` .

Dimana `__CONF__` bakal diganti ku nami konfigurasi ayeuna (sapertos `dev` atanapi `ol` ).

### afterTran.js

Ieu bakal disebut sanggeus tarjamahan réngsé, sarta parameter diliwatan dina nyaéta kieu.

* `lang_li` : Daptar basa, basa munggaran nyaéta basa sumber
* `changed` : Dirobih file
* `root` : diréktori akar proyék

Nilai balik nyaéta kamus, sapertos

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` mangrupikeun daptar file kaluaran, `path` mangrupikeun jalur file, sareng `txt` mangrupikeun eusi file.

## Diwangun-Di Fungsi

Runtime `js` diwangun : kana pamekaran sekundér tina [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Tulis kana file
* `rTxt(path)` : Baca file téks
* `rBin(path)` : Baca file binér
* `rDir(dirpath)` : Baca diréktori, nilai balik mangrupa daptar : Asép Sunandar Sunarya, daptar file

## Guide Ngembangkeun

Pangwangunan plug-in tiasa janten rujukan [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)