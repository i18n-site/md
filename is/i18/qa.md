# Algengt Vandamál

## Að Bæta Við Eða Eyða Línum Þýðingarinnar, Sem Veldur Ruglingi Í Þýðingunni

Mundu **að fjöldi lína í þýðingunni verður að samsvara línunum í upprunalega textanum** .

Það er að segja, þegar þú stillir þýðinguna handvirkt **skaltu ekki bæta við eða eyða línum úr þýðingunni** , annars verður kortlagningarsambandið milli þýðingarinnar og upprunalega textans truflað.

Ef þú bætir við eða eyðir línu fyrir slysni, sem veldur ruglingi, vinsamlegast endurheimtu þýðinguna í útgáfuna fyrir breytinguna, keyrðu þýðinguna `i18` og geymdu rétta kortlagningu aftur.

Kortlagningin á milli [i18n.site/token](//i18n.site/token) `.i18h/hash` upprunalega textans er bundin við táknið.

## `YAML` : Á Að Koma Í Veg Fyrir `HTML` Tengilsins Sé Breytt Í `Markdown`

Verður farið með `YAML` sem `MarkDown` fyrir þýðingar.

Stundum er umbreytingin `HTML` → `MarkDown` ekki það sem við viljum, eins og að `<a href="/">Home</a>` sé breytt í `[Home](/)` .

Bættu öðrum eiginleikum en `href` við `a` , eins og `<a class="A" href="/">Home</a>` , til að forðast þessa umbreytingu.

## `./I18n/Hash` Eftirfarandi Skrár Stangast Á

Eyddu skrám sem stangast á og keyrðu Translate aftur `i18`
