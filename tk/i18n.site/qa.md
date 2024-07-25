# Umumy Mesele

## Tötänleýin Pozuldy, `Npm` Bukjanyň Çap Edilmezligine Sebäp Boldy `.i18n/V`

`npm` Paket goýberilişiniň taryhy wersiýasy ýatda saklanýar `.i18n/v/ol/v.hash`

Tötänleýin pozsaňyz `.i18n/v/ol` `npm` Paket çap edilmez.

Bu wagt `0.1.9` ilki bilen taslamaňyzyň soňky goýberilen wersiýasynyň wersiýa belgisini tapyň [npmjs.com](//npmjs.com)

Soňra aşakdaky `bash` Dörediň" faýlyna serediň.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Bu görnüşde abatlamak faýl taryhyny ýitirer, indiki goýberilişi yzygiderli täzeläp bolmaz we ähli mazmun bir gezek ýüklener we ýüklener.

