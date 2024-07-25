# Tuotteen Ominaisuus

## Integroitu `I18`

Ohjelmassa on `i18` käännös, katso lisätietoja kohdasta [➔ `i18`](/i18) .

## Vastaa Automaattisesti Selaimen Kieli

Sivuston oletuskieli vastaa automaattisesti selaimen kieltä.

Kun käyttäjä vaihtaa manuaalisesti kieltä, käyttäjän valinta muistetaan.

Aiheeseen liittyvä koodi : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Mobiilipäätteen Sovitus

Myös matkapuhelimella on täydellinen lukukokemus.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Etupään korkea saatavuus

Sivuston sisältö julkaistaan `npmjs.com` [unpkg.com](//unpkg.com) [jsdelivr.com](//jsdelivr.com) usean `CDN` sisällön avulla `npm` `i18n.site`

Tältä pohjalta lisättiin peililähteitä Manner-Kiinasta, jotta kiinalaisilla käyttäjillä olisi vakaa pääsy ja **korkea käyttöliittymä** .

Periaate on: siepata pyyntö [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) n avulla, jos pyyntö epäonnistuu, yritä uudelleen toisella `CDN` lla ja ota mukautuvasti käyttöön nopeimmin vastaava lähtöasema oletuslatauslähteeksi.

Aiheeseen liittyvä koodi : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Yksisivuinen Sovellus, Erittäin Nopea Lataus

Sivusto käyttää yksisivuista sovellusarkkitehtuuria, jossa ei päivitetä sivua vaihdettaessa ja latautuu erittäin nopeasti.

## Optimoitu Lukukokemukseen

### Hyvin Suunniteltu Tyyli

> Yksinkertaisuuden kauneus tulkitaan täydellisesti tämän verkkosivuston web-suunnittelussa.
> Se luopuu tarpeettomasta sisustuksesta ja esittää sisällön puhtaimmassa muodossaan.
> Kuten kaunis runo, vaikka se on lyhyt, se koskettaa ihmisten sydämiä.

<p style="text-align:right">── Kirjoittaja I18N.SITE</p>

[➔ Napsauta tätä nähdäksesi luettelon tyyleistä](/i18n.site/md/styl) .

### Lataa Online-Fontteja, Tue Kiinaa

Oletusarvoisesti [Alimaman kaksiakseliset muuttuvat suorakulmaiset fontit](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) ja muut online-kirjasimet ovat käytössä verkkosivulla yhdistämään käyttäjien lukukokemusta eri alustoilla.

Samanaikaisesti latausnopeuden parantamiseksi fontit leikataan sanatiheyden tilastojen mukaan.

Aiheeseen liittyvä koodi : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Ylänavigointi Piilotetaan Automaattisesti

Vieritä alas ja ylänavigointi piilotetaan automaattisesti.

Vieritä ylös ja piilotettu navigointi tulee jälleen näkyviin.

Se häviää, kun hiiri ei liiku.

Navigointipalkin oikeassa yläkulmassa on koko näytön painike, joka luo mukaansatempaavan asiakirjojen lukukokemuksen.

### Nykyisen Luvun Synkronoitu Ääriviivakorostus

Kun vierität sisältöä oikealla, vasemmalla oleva ääriviiva korostaa samanaikaisesti parhaillaan luettavan luvun.

## Hienoja Yksityiskohtia

### Hiiritehosteet

Vie hiiri ylänavigointipaneelin oikealla puolella olevan painikkeen päälle nähdäksesi upeita erikoistehosteita.

### Pieni `404`

`404` on söpö pieni kelluva aave, jonka silmät liikkuvat hiiren mukana, [➔ Klikkaa tästä nähdäksesi](/404) ,

## Koodi Avoimen Lähdekoodin

[Koodi on avoimen lähdekoodin](/i18n.site/src) , jos olet kiinnostunut osallistumaan kehittämiseen, esittele itsesi [postituslistalle](//groups.google.com/u/2/g/i18n-site) .

On monia pieniä vaatimuksia, jotka ovat tärkeitä, mutta eivät kiireellisiä. Kehitystiimi jakaa harjoittelutehtävät osaamasi tekniikan mukaan ja parantaa kehitysdokumentteja vaatimuksia määriteltäessä.

