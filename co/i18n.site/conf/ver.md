# Versione Di Prughjettu

Pigliate u prughjettu demo per esempiu:

`en/demo2/v` hè u numeru di versione attuale di u prugettu, chì serà affissatu à a diritta di u nome di u prugettu in u schema di a barra laterale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Quì `en/` hè u codice di lingua chì currisponde à a lingua fonte di traduzzione cunfigurata da `.i18n/conf.yml` .

Se a vostra lingua fonte ùn hè micca l'inglese, allora u schedariu `v` deve esse piazzatu in u cartulare di u prughjettu di a vostra lingua fonte.

A capacità di cercà e versioni storichi di documenti hè in sviluppu.

Hè ricumandemu di mudificà solu u numeru di versione di u documentu quandu l'aghjurnamenti maiò sò liberati (cum'è `v1` , `v2` ) per evità troppu numeri di versione chì causanu l'ingaghjamentu in e pagine indexate da i mutori di ricerca.

## Aduprate I Fugliali `v` Vacanti Per Sparte L'indici Di File Di Diversi Prughjetti

In u prughjettu demo, in più di `en/demo2/v` , pudete ancu vede chì ci sò schedarii `v` vacanti in i repertorii `en/blog` è `en/demo1` .

Un `v` viotu ùn serà micca affissatu in a barra laterale, ma sempre chì ci hè un schedariu `v` , un indice indipendente serà generatu per i schedari in u cartulare è i subdirectorii.

Splitting l'indici di diversi prughjetti, pudete evitari l'accessu lento causatu da carica l'indici di tutti i schedari in tuttu u situ in una volta.

Per esempiu, u schedariu d'indici chì currisponde à `blog` in u prughjettu demo hè [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :