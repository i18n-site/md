# Gyakori Probléma

## Véletlenül Törölve `.i18n/V` Aminek Következtében a `Npm` Csomag Közzététele Nem Sikerült

A `npm` csomagkiadás történeti verziója elmentve `.i18n/v/ol/v.hash`

Ha véletlenül törli `.i18n/v/ol` a `npm` csomag nem kerül közzétételre.

Most először keresse meg projektje legutóbbi kiadásának verziószámát [npmjs.com](//npmjs.com) például `0.1.9`

Ezután olvassa el az alábbi `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Vegye figyelembe, hogy az ilyen módon végzett javítás elveszti a fájlelőzményeket, így lehetetlenné teszi a következő kiadás fokozatos frissítését, és minden tartalom egyszer újracsomagolásra és feltöltésre kerül.

