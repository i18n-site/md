# Projek Weergawe

Neem die demo-projek as 'n voorbeeld:

`en/demo2/v` is die huidige weergawenommer van die projek, wat regs van die projeknaam in die sybalk-omtrek vertoon sal word.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Hier is `en/` die taalkode wat ooreenstem met die vertaalbrontaal wat deur `.i18n/conf.yml` gekonfigureer is.

As jou brontaal nie Engels is nie, moet die `v` lêer in die projekgids van jou brontaal geplaas word.

Die vermoë om deur historiese weergawes van dokumente te blaai, is onder ontwikkeling.

Dit word aanbeveel om slegs die weergawenommer van die dokument te wysig wanneer groot opdaterings vrygestel word (soos `v1` , `v2` ) om te veel weergawenommers te vermy wat rommel veroorsaak in die bladsye wat deur soekenjins geïndekseer word.

## Gebruik Leë `v` Lêers Om Die Lêerindekse Van Verskillende Projekte Te Verdeel

In die demo-projek, benewens `en/demo2/v` , kan jy ook sien dat daar leë `v` lêers in die `en/blog` en `en/demo1` gidse is.

'n Leë `v` sal nie in die sybalk-omtrek vertoon word nie, maar solank daar 'n `v` -lêer is, sal 'n onafhanklike indeks vir die lêers in die gids en subgidse gegenereer word.

Deur die indekse van verskillende projekte te verdeel, kan u stadige toegang vermy wat veroorsaak word deur die indeks van alle lêers op die hele webwerf gelyktydig te laai.

Byvoorbeeld, die indekslêer wat ooreenstem met `blog` in die demo-projek is [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :