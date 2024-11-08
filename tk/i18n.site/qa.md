# Sorag-Jogap

## Tötänleýin `.i18n/v` Pozuldy, `npm` Bukjanyň Çap Edilmezligine Sebäp Boldy

`npm` paket tarapyndan çykarylan taryhy wersiýa `.i18n/v/ol/v.hash` -da saklanýar.

Eger tötänleýin `.i18n/v/ol` `npm` bukja çykmaz.

Bu wagt ilki bilen taslamaňyzyň soňky goýberilen wersiýasynyň nomerini tapyň [npmjs.com](//npmjs.com) Mysal üçin `0.1.9` .

Soňra faýly döretmek üçin aşakdaky `bash` -a serediň.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Bu görnüşde abatlamak faýl taryhyny ýitirer, indiki goýberilişi yzygiderli täzeläp bolmaz we ähli mazmun bir gezek ýüklener we ýüklener.