# Algengar Spurningar

## Að Bæta Við Eða Eyða Línum Þýðingarinnar, Sem Veldur Ruglingi Í Þýðingunni

> [!WARN]
> Mundu að **fjöldi lína í þýðingunni verður að samsvara línunum í upprunalega textanum** .
> Það er að segja, þegar þú stillir þýðinguna handvirkt **skaltu ekki bæta við eða eyða línum úr þýðingunni** , annars verður kortlagningarsambandið milli þýðingarinnar og upprunalega textans truflað.

Ef þú bætir við eða eyðir línu fyrir slysni, sem veldur ruglingi, vinsamlegast endurheimtu þýðinguna í útgáfuna áður en þú breytir henni, keyrðu `i18` þýðingu aftur og vistaðu rétta kortlagningu aftur.

Kortlagningin á milli þýðingarinnar og upprunalega textans er bundin við táknið. Búðu til nýtt tákn í [i18n.site/token](//i18n.site/token) eyddu `.i18h/hash` , og þýddu aftur til að hreinsa ruglingslega kortlagningu (en þetta mun valda því að allar handvirkar breytingar á þýðingunni glatast).

## `YAML` : Hvernig Á Að Forðast Að Hlekk `HTML` Sé Breytt Í `Markdown`

Gildi `YAML` er meðhöndlað sem `MarkDown` fyrir þýðingar.

Stundum er umbreytingin frá `HTML` → `MarkDown` ekki það sem við viljum, eins og `<a href="/">Home</a>` er breytt í `[Home](/)` .

Með því að bæta öðrum eiginleikum en `href` við `a` merkið, eins og `<a class="A" href="/">Home</a>` , er hægt að forðast þessa umbreytingu.

## `./i18n/hash` Skráarárekstrar Hér Að Neðan

Eyddu skrám sem stangast á og endurræstu `i18` þýðingu.