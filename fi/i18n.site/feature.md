# Tuotteen Ominaisuudet

## `i18` Integroitua Käännöstä

Ohjelmassa on sisäänrakennettu `i18` käännös, katso [➔ `i18` asiakirja](/i18) erityistä käyttöä varten.

## Vastaa Automaattisesti Selaimen Kieli

Sivuston oletuskieli vastaa automaattisesti selaimen kieltä.

Kun käyttäjä vaihtaa manuaalisesti kieltä, käyttäjän valinta muistetaan.

Aiheeseen [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Mobiilipäätteen Sovitus

Myös matkapuhelimella on täydellinen lukukokemus.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Etupään korkea saatavuus

`i18n.site` julkaisee sivuston sisällön [jsdelivr.com](//jsdelivr.com) `npmjs.com` lle , [unpkg.com](//unpkg.com) ja muun `CDN` sisällön avulla, jotka on ladattu `npm` .

Tältä pohjalta lisättiin peililähteitä Manner-Kiinasta, jotta kiinalaisilla käyttäjillä olisi vakaa pääsy ja **korkea käyttöliittymä** .

Periaate on: sieppaa pyynnöt arvolla [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , yritä uudelleen epäonnistuneita pyyntöjä muilla `CDN` ja ota mukautuvasti käyttöön nopeimmin reagoiva lähtöpaikka oletuslatauslähteeksi.

Aiheeseen [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Yksisivuinen Sovellus, Erittäin Nopea Lataus

Sivusto käyttää yhden sivun sovellusarkkitehtuuria, jossa ei päivitetä sivua vaihdettaessa ja latautuu erittäin nopeasti.

## Optimoitu Lukukokemukseen

### Hyvin Suunniteltu Tyyli

> Yksinkertaisuuden kauneus tulkitaan täydellisesti tämän verkkosivuston web-suunnittelussa.
> Se luopuu tarpeettomasta sisustuksesta ja esittää sisällön puhtaimmassa muodossaan.
> Kuten kaunis runo, vaikka se on lyhyt, se koskettaa ihmisten sydämiä.

<p style="text-align:right">I18N.SITE Kirjoittaja</p>

[➔ Napsauta tätä nähdäksesi luettelon tyyleistä](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Yllä olevassa kuvassa on monikielinen `i18n.site` tilauksella [inoreader.com](//inoreader.com) `RSS`

### Lataa Online-Fontteja, Tue Kiinaa

Oletusarvoisesti [Alimaman kaksiakseliset muuttuvat suorakulmaiset](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) fontit [MiSans](https://hyperos.mi.com/font/zh/download/) muut online-kirjasimet ovat käytössä verkkosivulla yhdistämään käyttäjien lukukokemusta eri alustoilla.

Samanaikaisesti latausnopeuden parantamiseksi fontit leikataan sanatiheyden tilastojen mukaan.

Aiheeseen [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Ylänavigointi Piilotetaan Automaattisesti

Vieritä alas ja ylänavigointi piilotetaan automaattisesti.

Vieritä ylös ja piilotettu navigointi tulee jälleen näkyviin.

Se häviää, kun hiiri ei liiku.

Navigointipalkin oikeassa yläkulmassa on koko näytön painike, joka luo mukaansatempaavan asiakirjan lukukokemuksen.

### Nykyisen Luvun Synkronoitu Ääriviivakorostus

Kun vierität sisältöä oikealla, vasemmalla oleva ääriviiva korostaa samanaikaisesti parhaillaan luettavan luvun.

## Hienoja Yksityiskohtia

### Hiiritehosteet

Vie hiiri ylänavigointipaneelin oikealla puolella olevan painikkeen päälle nähdäksesi upeita erikoistehosteita.

### `404` Pieni Haamu

`404` sivulla on söpö pieni kelluva haamu, jonka silmät liikkuvat hiiren mukana, [➔ Klikkaa tästä nähdäksesi](/404) ,

## Koodi Avoin Lähdekoodi

[Koodi on avoimen lähdekoodin](/i18n.site/c/src) , jos olet kiinnostunut osallistumaan kehittämiseen, esittele itsesi [postituslistalle](//groups.google.com/u/2/g/i18n-site) .

On monia pieniä vaatimuksia, jotka ovat tärkeitä, mutta eivät kiireellisiä. Kehitystiimi antaa käytännön tehtäviä osaamiesi teknologioiden perusteella ja parantaa kehitysdokumentteja vaatimuksia määrittäessään.