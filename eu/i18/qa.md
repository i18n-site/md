# Ohiko Galderak

## Itzulpenaren Lerroak Gehitzea Edo Ezabatzea, Itzulpenean Nahasmena Sortuz

> [!WARN]
> Gogoratu **itzulpeneko lerro kopurua jatorrizko testuko lerroekin bat etorri behar dela** .
> Hau da, itzulpena eskuz doitzean, **ez gehitu edo ezabatu itzulpenaren lerroak** , bestela itzulpenaren eta jatorrizko testuaren arteko mapa-erlazioa desordenatuko da.

Nahiz eta ustekabean lerro bat gehitzen edo ezabatzen baduzu, nahasmena sortuz, itzuli bertsiora aldatu aurretik, exekutatu berriro `i18` itzulpena eta gorde berriro mapaketa zuzena.

Itzulpenaren eta jatorrizko testuaren arteko mapa tokenarekin lotzen da. Sortu token berri bat [i18n.site/token](//i18n.site/token) ezabatu `.i18h/hash` eta itzuli berriro mapa nahasia garbitzeko (baina horrek itzulpenaren eskuzko doikuntza guztiak galduko ditu).

## `YAML` : Nola Saihestu Esteka `HTML` `Markdown` Izatera

`YAML` balio bat `MarkDown` gisa tratatzen da itzulpenerako.

Batzuetan `HTML` → `MarkDown` bihurtzea ez da nahi duguna, adibidez, `<a href="/">Home</a>` `[Home](/)` bihurtzea.

`a` etiketari `href` ez den edozein atributu gehitzeak, adibidez `<a class="A" href="/">Home</a>` , bihurketa hori saihestu dezake.

## `./i18n/hash` Fitxategi Gatazka Behean

Ezabatu gatazkan dauden fitxategiak eta exekutatu berriro `i18` itzulpena.