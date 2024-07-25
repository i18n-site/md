# Arazo Arrunta

## Itzulpenaren Lerroak Gehitzea Edo Ezabatzea, Itzulpenean Nahasmena Sortuz

Gogoratu **itzulpeneko lerro kopurua jatorrizko testuko lerroekin bat etorri behar dela** .

Hau da, itzulpena eskuz doitzean, **ez gehitu edo ezabatu itzulpenaren lerroak** , bestela itzulpenaren eta jatorrizko testuaren arteko mapa-erlazioa desordenatuko da.

Nahiz eta ustekabean lerro bat gehitzen edo ezabatzen baduzu, nahasmena sortuz, mesedez itzuli itzulpena bertsiora aldatu baino lehen, exekutatu itzulpena `i18` eta gorde mapaketa zuzena berriro.

Itzulpenaren eta jatorrizko testuaren arteko mapak tokenarekin lotzen dira. Sortu token berri bat [i18n.site/token](//i18n.site/token) ezabatu `.i18h/hash` eta itzuli berriro mapa nahasia garbitzeko (baina horrek itzulpenaren eskuzko doikuntza guztiak galduko ditu).

## `YAML` : Saihestu Estekaren `HTML` `Markdown` -Ra Bihurtzea

`YAML` -ren balioa `MarkDown` gisa tratatuko da itzulpenerako.

Batzuetan `HTML` → `MarkDown` -ren bihurketa ez da nahi duguna, adibidez, `<a href="/">Home</a>` -ra `[Home](/)` .

Gehitu `href` ez den edozein atributu `a` , hala nola `<a class="A" href="/">Home</a>` , bihurketa hori saihesteko.

## `./I18n/Hash` Ondorengo Fitxategiak Gatazkan Daude

Ezabatu gatazkan dauden fitxategiak eta exekutatu `i18` Translate.
