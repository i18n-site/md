# Tuotteen ominaisuudet

## Integroitu `i18`-käännös

Ohjelmassa on sisäänrakennettu `i18`-käännös, katso [➔ `i18`-asiakirja](/i18) erityistä käyttöä varten.

## Automaattinen sopusointu selaimen kielten kanssa

Sivuston oletuskieli mukautuu automaattisesti selaimen kieleen.

Kun käyttäjä vaihtaa kielen manuaalisesti, valinta tallennetaan muistiin.

liittyvä koodi: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Mobiililaitteiden mukauttaminen

Mobiililaitteilla on myös täydellinen lukukokemus.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Etuuripuolen korkea saatavuus

`i18n.site` julkaisee sivuston sisällön oletuksena `npmjs.com`-sivustolle, käyttäen [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) ja muita `CDN`-palveluita, jotka ovat ladanneet `npm`-sisällön.

Tämän lisäksi on lisätty Manner-Kiinan peililähde, jotta kiinalaiset käyttäjät voivat käyttää sitä sujuvasti, ja on saavutettu **eturipuolen korkea saatavuus**.

Periaate on: käyttää [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) sieppaamaan pyynnöt, tehdä uudelleenyrityksiä epäonnistuneille pyynnöille muilla `CDN`-palveluilla ja valita mukautuvasti nopeimmin vastaava lähde oletuslähdekksi.

liittyvä koodi: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Yksisivuinen sovellus, nopea lataus

Sivusto käyttää yksisivuista sovellusarkkitehtuuria, jossa sivujen vaihtaminen tapahtuu ilman päivitystä ja lataus on erittäin nopea.

## Optimoitu lukukokemukselle

### Tyylit on suunniteltu huolellisesti

> Yksinkertaisuuden kauneus tulkitaan täydellisesti tämän verkkosivuston suunnittelussa.
> Se hylkää tarpeettoman koristelun ja esittää sisällön puhtaimmassa muodossaan.
> Kuten lyhyt, mutta koskettava runo.

<p style="text-align:right">── I18N.SITE:n kirjoittaja</p>

[➔ Klikkaa tätä nähdäksesi tyylimallit](/i18n.site/md/styl).

### Lataa verkkokirjasimia, tukee kiinaa

Oletusarvoisesti [Alimaman kaksiakseliset muuttuvat suorakulmaiset fontit](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) ja muut verkkokirjasimet ovat käytössä verkkosivulla, yhdenmukaistaen eri alustojen käyttäjien lukukokemuksen.

Samaan aikaan latausnopeuden parantamiseksi fontit on jaettu sanatiheyden mukaan.

liittyvä koodi: [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Ylänavigointi piilotetaan automaattisesti

Kun vieritetään alas, ylänavigointi piilotetaan automaattisesti.

Kun vieritetään ylös, piilotettu navigointi tulee jälleen näkyviin.

Kun hiiri ei liiku, se häviää.

Navigointipalkin oikeassa yläkulmassa on kokonäyttöpainike, joka tarjoaa upottavan asiakirjan lukukokemuksen.

### Nykyisen luvun synkronoitu ääriviivakorostus

Kun vieritetään oikealle, vasen ääriviiva korostaa samanaikaisesti nykyistä lukua.

## Hienoja yksityiskohtia

### Hiiritehosteet

Kun hiiri on ylänavigoinnin oikealla puolella olevan painikkeen päällä, näytetään upeita tehosteita.

### `404` pieni haamu

`404`-sivulla on söpö pieni kelluva haamu, jonka silmät seuraa hiirtä, [➔ Klikkaa tätä nähdäksesi](/404)

## Koodi avoimen lähdekoodin

[Koodi on avoimen lähdekoodin](/i18n.site/src). Jos olet kiinnostunut osallistumaan kehitykseen, esittele itsesi [postituslistalle](//groups.google.com/u/2/g/i18n-site).

On monia pieniä, mutta tärkeitä vaatimuksia, jotka eivät ole kiireellisiä. Kehitystiimi jakaa harjoittelutehtävät osaamasi tekniikan perusteella ja parantaa kehitysdokumentteja vaatimusten määrittämisen aikana.