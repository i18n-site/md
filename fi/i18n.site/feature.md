# Tuotteen ominaisuudet

## Integroitu `i18`-käännös

Ohjelmassa on sisäänrakennettu `i18`-käännös, katso [➔ `i18`-dokumentti](/i18) erityisiä käyttöohjeita varten.

## Automaattinen selaimen kielten mukautus

Sivuston oletuskieli mukautetaan automaattisesti selaimen kieleen.

Kun käyttäjä vaihtaa kieltä manuaalisesti, valinta tallennetaan.

Relevantti koodi: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiililaitteiden mukautus

Käyttökokemus on täydellinen myös mobiililaitteilla.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Etupään korkea saatavuus

`i18n.site` julkaisee sivuston sisällön [jsdelivr.com](//jsdelivr.com) `npmjs.com` lle , [unpkg.com](//unpkg.com) ja muun `CDN` sisällön avulla, jotka on ladattu `npm` .

Tämän lisäksi on lisätty Manner-Kiinan peililähde, mahdollistaen kiinalaisten käyttäjien vakaan pääsyn ja **edistyneen käyttöliittymän**.

Periaate on: sieppaa pyynnöt arvolla [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , yritä uudelleen epäonnistuneita pyyntöjä muilla `CDN` ja ota mukautuvasti käyttöön nopeimmin reagoiva lähtöpaikka oletuslatauslähteeksi.

Relevantti koodi: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Yksisivuinen sovellus, nopea lataus

Sivusto käyttää yksisivuista sovellusarkkitehtuuria, jossa sivujen vaihto tapahtuu ilman päivitystä ja lataus on erittäin nopea.

## Optimoitu lukukokemukseen

### Tarkasti suunniteltu tyyli

> Yksinkertaisuuden kauneus tulkitaan täydellisesti tämän verkkosivuston suunnittelussa.
> Se hylkää tarpeettomat koristeet ja esittää sisällön puhtaimmassa muodossaan.
> Kuten lyhyt, mutta koskettava runo.

<p style="text-align:right">── I18N.SITE:n kirjoittaja</p>

[➔ Klikkaa tätä nähdäksesi tyylimallit](/i18n.site/md/styl).

### Monikielinen `RSS`-tilaus

![](//p.3ti.site/1725541085.avif)

Yllä olevassa kuvassa on monikielinen `i18n.site` tilauksella [inoreader.com](//inoreader.com) `RSS`

### Lataa verkkofontteja, tukee kiinaa

Sivusto käyttää oletusfontteina [Alimaman kaksiakselista muuttuvaa suorakulmaista](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) ja [MiSans](https://hyperos.mi.com/font/zh/download/) verkkofontteja, yhdenmukaistaen eri alustojen käyttäjien lukukokemuksen.

Samaan aikaan latausnopeuden parantamiseksi fontit on jaettu sanatiheyden perusteella.

Relevantti koodi: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Ylävalikko piilotetaan automaattisesti

Vieritä alas ja ylävalikko piilotetaan automaattisesti.

Vieritä ylös ja piilotettu valikko tulee jälleen näkyviin.

Kun hiiri ei liiku, valikko häviää.

Ylävalikon oikeassa yläkulmassa on koko näytön painike, joka tarjoaa upottavan asiakirjan lukukokemuksen.

### Nykyisen luvun synkronoitu alleviivaus

Kun vierität oikealla, vasen sivupalkki alleviivaa nykyisen luvun synkronoidusti.

## Hienoja yksityiskohtia

### Hiiritehosteet

Vie hiiri ylävalikon oikeassa laidassa olevan painikkeen päälle nähdäksesi upeita tehosteita.

### `404`-sivun pieni haamu

`404`-sivulla on suloinen kelluva haamu, jonka silmät seuraa hiirtä, [➔ Klikkaa tätä nähdäksesi](/404)

## Koodi on avointa lähdekoodia

[Koodi on avoimen lähdekoodin](/i18n.site/src). Jos olet kiinnostunut osallistumaan kehitykseen, esittele itsesi [postituslistalle](//groups.google.com/u/2/g/i18n-site).

On monia pieniä, mutta tärkeitä vaatimuksia, jotka eivät ole kiireellisiä. Kehitystiimi jakaa käytännön tehtäviä osaamiesi teknologioiden perusteella ja parantaa kehitysdokumentteja jaettujen vaatimusten mukaisesti.