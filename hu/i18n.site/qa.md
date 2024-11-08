# Gyik

## Véletlenül Törölték `.i18n/v` , Aminek Következtében Az `npm` Csomag Közzététele Nem Sikerült

Az `npm` csomag által kiadott történeti verzió `.i18n/v/ol/v.hash` -ban van elmentve.

Ha véletlenül törli `.i18n/v/ol` az `npm` csomag nem kerül kiadásra.

Ekkor először keresse meg projektje utolsó kiadásának verziószámát a [npmjs.com](//npmjs.com) például `0.1.9` .

Ezután tekintse meg a lenti `bash` t a fájl létrehozásához.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Vegye figyelembe, hogy az ilyen módon végzett javítás elveszti a fájlelőzményeket, így lehetetlenné teszi a következő kiadás fokozatos frissítését, és minden tartalom egyszer újracsomagolásra és feltöltésre kerül.