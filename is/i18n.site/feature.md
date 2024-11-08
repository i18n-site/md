# Eiginleikar Vöru

## `i18` Þýðingar Samþættar

Forritið hefur innbyggða `i18` þýðingu, vinsamlegast sjáðu [➔ `i18` skjal](/i18) fyrir sérstaka notkun.

## Passa Sjálfkrafa Við Tungumál Vafrans

Sjálfgefið tungumál vefsíðunnar mun sjálfkrafa passa við tungumál vafrans.

Eftir að notandinn hefur skipt um tungumál handvirkt mun val notandans verða minnst.

Tengdur kóði : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Aðlögun Farsímaútstöðvar

Það er líka fullkomin lestrarupplifun í farsímanum.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Framhlið mikið framboð

`i18n.site` mun sjálfgefið birta innihald síðunnar í `npmjs.com` , með hjálp [jsdelivr.com](//jsdelivr.com) [unpkg.com](//unpkg.com) og annað `CDN` innihald sem er hlaðið á `npm` .

Á þessum grundvelli var speglauppsprettum frá meginlandi Kína bætt við til að gera kínverskum notendum kleift að hafa stöðugan aðgang og ná **háu framhliðarframboði** .

Meginreglan er: Hleraðu beiðnir með [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , reyndu aftur misheppnaðar beiðnir á öðrum `CDN` , og virkjaðu með aðlögunarhæfni upprunasíðuna sem svarar hraðast sem sjálfgefna hleðslugjafa.

Tengdur kóði : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Forrit Á Einni Síðu, Mjög Hröð Hleðsla

Vefsíðan tekur upp einnar síðu forritaarkitektúr, án endurnýjunar þegar skipt er um síður og mjög hröð hleðsla.

## Fínstillt Fyrir Lestrarupplifun

### Vel Hannaður Stíll

> Fegurð einfaldleikans er fullkomlega túlkuð í vefhönnun þessarar vefsíðu.
> Það yfirgefur óþarfa skraut og sýnir efni í sinni hreinustu mynd.
> Eins og fallegt ljóð, þótt stutt sé, snertir það hjörtu fólks.

<p style="text-align:right">── I18N.SITE</p>

[➔ Smelltu hér til að sjá lista yfir stíla](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Myndin hér að ofan sýnir fjöltungumál `RSS` með [inoreader.com](//inoreader.com) `i18n.site` .

### Hlaða Letur Á Netinu, Styðja Kínverska

Sjálfgefið er [að Alimama tvíása breytileg rétthyrnd](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) leturgerð, [MiSans](https://hyperos.mi.com/font/zh/download/) og önnur leturgerðir á netinu eru virkjuð á vefsíðunni til að sameina lestrarupplifun notenda á mismunandi kerfum.

Á sama tíma, til að bæta hleðsluhraða, eru leturgerðir sneiddar í samræmi við tölfræði orðatíðni.

Tengdur kóði : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Efsta Leiðsögn Sjálfkrafa Falin

Skrunaðu niður og efsta flakkið mun sjálfkrafa fela sig.

Skrunaðu upp og falin leiðsögn birtist aftur.

Það mun hverfa út þegar músin hreyfist ekki.

Það er hnappur á öllum skjánum í efra hægra horninu á yfirlitsstikunni til að búa til yfirgripsmikla upplifun á lestri skjala.

### Samstilltur Yfirlitsaukning Núverandi Kafla

Þegar efnið er skrunað til hægri mun útlínan til vinstri samtímis auðkenna þann kafla sem er að lesa.

## Flott Smáatriði

### Músaráhrif

Haltu músinni yfir hnappinn hægra megin á efstu flakkinu til að sjá flottar tæknibrellur.

### `404` Lítill Draugur

Það er lítill sætur fljótandi draugur á `404` síðunni, sem augu hans munu hreyfast með músinni, [➔ Smelltu hér til að skoða](/404) ,

## Kóði Opinn Uppspretta

[Kóðinn er opinn](/i18n.site/c/src) ef þú hefur áhuga á að taka þátt í þróun, vinsamlegast kynntu þig fyrir [póstlistanum](//groups.google.com/u/2/g/i18n-site) .

Það eru margar litlar kröfur sem eru mikilvægar en ekki aðkallandi. Þróunarteymið mun úthluta verkefnum sem byggjast á tækninni sem þú ert góður í og bæta þróunarskjölin á meðan þau úthluta kröfunum.