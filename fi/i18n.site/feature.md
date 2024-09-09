# Tuotteen ominaisuudet

## Integroitu `i18`-käännös

Ohjelmassa on sisäänrakennettu `i18`-käännös, katso [➔ `i18`-asiakirja](/i18) erityistä käyttöä varten.

## Automaattinen yhteensopivuus selaimen kieleen

Sivuston oletuskieli mukautetaan automaattisesti selaimen kieleen.

Kun käyttäjä vaihtaa kieltä manuaalisesti, valinta tallennetaan.

Asiaankuuluva koodi: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Mobiililaitteiden mukauttaminen

Käyttökokemus on täydellinen myös mobiililaitteilla.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Etupään korkea saatavuus

`i18n.site` julkaisee sivuston sisällön oletuksena [jsdelivr.com](//jsdelivr.com) `npmjs.com` , [unpkg.com](//unpkg.com) ja muun usean `CDN` sisällön avulla, joka on ladattu `npm` .

Tämän lisäksi on lisätty Kiinan manneralueen peililähde, jotta kiinalaiset käyttäjät voivat käyttää sivustoa vakaasti, ja tämä mahdollistaa **etupään korkean saatavuuden**.

Periaate on: sieppaa pyynnöt arvolla [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , yritä uudelleen epäonnistuneita pyyntöjä muilla `CDN` ja ota mukautuvasti käyttöön nopeimmin reagoiva lähtöpaikka oletuslatauslähteeksi.

Asiaankuuluva koodi: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Yksisivuinen sovellus, nopea lataus

Sivusto käyttää yksisivuista sovellusarkkitehtuuria, jossa sivujen vaihtaminen tapahtuu ilman uudelleenlatausta ja on erittäin nopea.

## Optimoitu lukukokemukseen

### Tarkasti suunniteltu tyyli

> Yksinkertaisuuden kauneus on täydellisesti tulkittu tämän verkkosivuston suunnittelussa.
> Se hylkää tarpeettomat koristeet ja esittää sisällön puhtaimmassa muodossaan.
> Kuten lyhyt, mutta koskettava runo.

<p style="text-align:right">── I18N.SITE:n kirjoittaja</p>

[➔ Klikkaa tätä nähdäksesi tyylimallit](/i18n.site/md/styl).

### Monikielinen `RSS`-tilaus

![](//p.3ti.site/1725541085.avif)

Yllä olevassa kuvassa on esimerkki `i18n.site`-sivuston monikielisestä `RSS`-tilauksesta [inoreader.com](//inoreader.com).

### Lataa verkkokirjasimia, tukee kiinaa

Sivusto käyttää oletuksena [Alimaman kaksiakselisia muuttuvia suorakulmaisia kirjasimia](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) ja [MiSans](https://hyperos.mi.com/font/zh/download/) sekä muita verkkokirjasimia, jotta eri alustoilla olevien käyttäjien lukukokemus olisi yhtenäinen.

Samaan aikaan latausnopeuden parantamiseksi kirjasimet on jaettu sanatiheyden perusteella.

Asiaankuuluva koodi: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Ylävalikko piilotetaan automaattisesti

Vieritä alas, ja ylävalikko piilotetaan automaattisesti.

Vieritä ylös, ja piilotettu valikko tulee jälleen näkyviin.

Kun hiiri ei liiku, valikko häviää.

Ylävalikon oikeassa yläkulmassa on kokonäyttöpainike, joka tarjoaa upottavan asiakirjan lukukokemuksen.

### Nykyisen luvun synkronoitu korostus

Kun vierität oikeaa sisältöä, vasen ääriviiva korostaa samanaikaisesti nykyistä lukua.

## Hienoja yksityiskohtia

### Hiiritehosteet

Vie hiiri ylävalikon oikeassa laidassa olevan painikkeen päälle nähdäksesi upeita tehosteita.

### `404`-pikkahaamu

`404`-sivulla on suloinen pikkahaamu, jonka silmät seuraa hiirtä, [➔ Klikkaa tätä nähdäksesi](/404)

## Koodi on avoimen lähdekoodin

[Koodi on avoimen lähdekoodin](/i18n.site/src). Jos olet kiinnostunut osallistumaan kehitykseen, esittele itsesi [postituslistalle](//groups.google.com/u/2/g/i18n-site).

On monia pieniä, mutta tärkeitä vaatimuksia. Kehitystiimi jakaa käytännön tehtäviä osaamiesi teknologioiden perusteella ja parantaa kehitysdokumentteja vaatimusten määrittämisessä.