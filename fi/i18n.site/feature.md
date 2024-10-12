# Tuotteen ominaisuudet

## Integroitu `i18`-käännös

Ohjelmassa on sisäänrakennettu `i18`-käännös, katso [➔ `i18`-dokumentti](/i18) erityisiä käyttöohjeita varten.

## Automaattinen selaimen kielimatchaus

Sivuston oletuskieli määrittyy automaattisesti selaimen kielestä.

Kun käyttäjä vaihtaa kielen manuaalisesti, valinta tallennetaan.

Relevantti koodi: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiililaitteiden mukauttaminen

Käyttökokemus on täydellinen myös mobiililaitteilla.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Frontendin korkea saatavuus

`i18n.site` julkaisee sivuston sisällön [jsdelivr.com](//jsdelivr.com) `npmjs.com` lle , [unpkg.com](//unpkg.com) ja muun `CDN` sisällön avulla, jotka on ladattu `npm` .

Tämän lisäksi on lisätty Manner-Kiinan peililähde, jotta kiinalaiset käyttäjät voivat käyttää sivustoa vakaasti, ja tämä mahdollistaa **frontendin korkean saatavuuden**.

Periaate on: `service worker` [➔](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) sieppaa pyynnöt ja yrittää uudelleen epäonnistuneita pyyntöjä muilla `CDN`-palveluilla, ja valitsee mukautuvasti nopeimmin vastaavan lähteen oletuslähdeksi.

Relevantti koodi: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Yksisivuinen sovellus, nopea lataus

Sivusto käyttää yksisivuista sovellusarkkitehtuuria, jossa sivujen vaihtaminen tapahtuu ilman uudelleenlatausta ja on erittäin nopea.

## Optimoitu lukukokemukseen

### Tarkasti suunniteltu tyyli

> Yksinkertaisuuden kauneus tulkitaan täydellisesti tämän verkkosivuston suunnittelussa.
> Se hylkää tarpeettomat koristeet ja esittää sisällön puhtaimmessa muodossaan.
> Kuten lyhyt, mutta koskettava runo.

<p style="text-align:right">── I18N.SITE:n kirjoittaja</p>

[➔ Klikkaa tätä nähdäksesi tyylimallit](/i18n.site/md/styl).

### `RSS`

![](//p.3ti.site/1725541085.avif)

Yllä olevassa kuvassa on esimerkki [inoreader.com](//inoreader.com) -palvelun monikielisestä `RSS`-tilauksesta `i18n.site`-sivustolle.

### Lataa verkkofontteja, tukee kiinaa

Oletusarvoisesti [Alimaman kaksiakselinen muuttuva suorakulmafontti](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) ja [MiSans](https://hyperos.mi.com/font/zh/download/) muiden verkkofonttien avulla yhdenmukaistetaan eri alustojen käyttäjien lukukokemus.

Samaan aikaan latausnopeuden parantamiseksi fontit on jaettu sanatiheyden mukaan.

Relevantti koodi: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Ylävalikko piilotetaan automaattisesti

Vieritä alas ja ylävalikko piilotetaan automaattisesti.

Vieritä ylös ja piilotettu valikko tulee jälleen näkyviin.

Kun hiiri ei liiku, valikko häviää.

Ylävalikon oikeassa yläkulmassa on kokonäyttöpainike, joka tarjoaa upottavan asiakirjan lukukokemuksen.

### Nykyisen luvun synkronoitu alleviivaus

Kun vieritetään oikealle, vasen sivupalkki alleviivaa nykyisen luvun synkronoidusti.

## Hienoja yksityiskohtia

### Hiiritehosteet

Vie hiiri ylävalikon oikeassa laidassa olevan painikkeen päälle nähdäksesi upeita tehosteita.

### `404`-sivun pieni haamu

`404`-sivulla on suloinen kelluva haamu, jonka silmät seuraa hiirtä, [➔ Klikkaa tätä nähdäksesi](/404)

## Koodi on avoimen lähdekoodin

[Koodi on avoimen lähdekoodin](/i18n.site/src). Jos olet kiinnostunut osallistumaan kehitykseen, esittele itsesi [postituslistalle](//groups.google.com/u/2/g/i18n-site).

On monia pieniä, mutta tärkeitä vaatimuksia, ja kehitystiimi jakaa tehtäviä osaamasi teknologioiden perusteella ja parantaa kehitysdokumentteja jaettujen vaatimusten mukaisesti.