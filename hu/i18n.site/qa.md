# Gyik

## Véletlenül törölték `.i18n/v`, ami miatt az `npm` csomag nem publikálható

A `.i18n/v/ol/v.hash` fájlban tárolják az `npm` csomag kiadási előzményeit.

Ha véletlenül törlik `.i18n/v/ol`, az `npm` csomag nem lesz publikálható.

Ekkor először keressék meg a projekt utolsó kiadásának verziószámát a [npmjs.com](//npmjs.com) oldalon, például `0.1.9`.

Ezután kövessék a lentebeli `bash` parancsot a fájl létrehozásához.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Vegyék figyelembe, hogy ez a javítási mód elvész a fájlok előzményei, így a következő kiadásnál nem lehet fokozatos frissítést végezni, minden tartalom újra lesz csomagolva és feltöltve.