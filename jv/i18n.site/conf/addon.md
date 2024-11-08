# Plug-In

Plug-in bisa dikonfigurasi ing `.i18n/conf.yml` , kayata:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Resmi

* `i18n.addon/toc` : direktori
  Ngasilake indeks direktori `json` adhedhasar `TOC` , diaktifake kanthi gawan

* `i18n.addon/mouse` : mouse

## Konvensi Jeneng Berkas

Plug-in iku kabeh `npm` paket.

Paket sing cocog karo `i18n.addon/toc` ing ndhuwur yaiku [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin nggunakake versi paling anyar kanthi standar lan mriksa nganyari saben minggu.

Yen sampeyan pengin ndandani versi, sampeyan bisa nulis `i18n.addon/toc@0.1.3` .

Baris perintah terjemahan `i18n.site` bakal nginstal file konvensi saka paket plug-in lan banjur nglakokake.

Jeneng berkas sing disepakati kaya ing ngisor iki

### htmIndex.js

`htmIndex.js` bakal disuntikake nganti pungkasan `.i18n/htm/index.js` .

Where `__CONF__` bakal diganti karo jeneng konfigurasi saiki (kayata `dev` utawa `ol` ).

### afterTran.js

Bakal diarani sawise terjemahan rampung, lan paramèter sing diterusake kaya ing ngisor iki.

* `lang_li` : Dhaptar basa, basa pisanan yaiku basa sumber
* `changed` : File sing diowahi
* `root` : Direktori root proyek

Nilai bali minangka kamus, kayata

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` minangka dhaptar file output, `path` minangka path file, lan `txt` minangka isi file.

## Fungsi Built-In

Runtime `js` sing dibangun : pangembangan sekunder saka [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Tulis menyang file
* `rTxt(path)` : Maca file teks
* `rBin(path)` : Waca file binar
* `rDir(dirpath)` : Waca direktori, nilai bali minangka dhaptar : , dhaptar file

## Pandhuan Pangembangan

Pangembangan plug-in bisa dadi referensi [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)