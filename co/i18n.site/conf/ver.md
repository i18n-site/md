# Versione Di Prughjettu

Pigliate u prughjettu demo per esempiu:

`en/demo2/v` hè u numeru di versione attuale di u prugettu, chì serà affissatu à a diritta di u nome di u prugettu in u cuntornu di a barra laterale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` u codice di lingua chì currisponde à a lingua fonte di traduzzione `.i18n/conf.yml` .

Se a vostra lingua fonte ùn hè micca l'inglese, allora u schedariu `v` 

A capacità di cercà e versioni storichi di documenti hè in sviluppu.

Hè ricumandemu di mudificà solu u numeru di versione di u documentu quandu si liberanu l'aghjurnamenti maiò (cum'è `v1` , `v2` ) per evità di ingombra e pagine indexate da i mutori di ricerca per via di troppu numeri di versione.

## Aduprate I Fugliali `v` Per Sparte L'indici Di I Schedarii Per Diversi Prughjetti

In u prughjettu demo, in più di `en/demo2/v` , pudete ancu vede chì u cuntenutu di `en/blog` è `en/demo1` sò vioti `v` fichi.

Empty `v` ùn serà micca affissatu in a barra laterale, ma finu à chì u schedariu `v` esiste, un indice indipendente serà generatu per i schedarii in u cartulare è i subdirectorii.

Splitting l'indici di diversi prughjetti, pudete evità l'accessu lento causatu da carica l'indici di tutti i schedari in tuttu u situ in una volta.

Per [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) , in u prughjettu demo `blog` u schedariu d'indici currispundente hè :

