# Asenna &

## Määritystunnus

`i18n.site` `i18` [`i18`](/i18/use)

## Asentaa

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo-Projekti

Aloitetaan demoprojektilla ja opetellaan käyttämään `i18n.site`

Kloonamme ensin esittelyvaraston ja suoritamme komennon seuraavasti:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Manner-Kiinan käyttäjät voivat:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### Kääntää

Syötä ensin hakemistoon `md` ja suorita `i18n.site` , joka muuttaa `en` muotoon `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Suorituksen jälkeen luodaan käännös- ja välimuistitiedostot. Muista lisätä ne arkistoon `git add . ` `md` .

### Paikallinen Esikatselu

Asenna ja aloita `docker` `MAC` suosittelevat [orbstack](https://orbstack.dev) n käyttöä `docker` n suoritusaikana).

Siirry sitten `docker` ja suorita `./up.sh` ja esikatsele sitten [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Lähetä Sisältöä

Ottaa käyttöön [yksisivuisen sovellusarkkitehtuurin](https://developer.mozilla.org/docs/Glossary/SPA) , ja verkkosivuston sisääntulosivu ja verkkosivuston sisältö otetaan käyttöön itsenäisesti `i18n.site`

Yllä olevan käännöksen suorittamisen jälkeen `md/out/dev` luodaan `htm` ja `v` hakemistot.

Tässä `dev` osoittaa, että se on rakennettu `.i18n/htm/dev.yml` määritystiedoston perusteella.

Sisällön : `dev`

`htm` alla on verkkosivuston sisäänkäyntisivu.

`v` sisältää verkkosivuston sisällön versionumeroineen.

Paikallinen esikatselu kopioi kaikki tiedostot `out/dev/v/0.1.0` versionumerosta riippumatta.

Virallista julkaisua varten muutetut tiedostot kopioidaan uuteen versionumerohakemistoon.

#### Määritä Asetustiedosto Painamalla -c

Eri kokoonpanotiedostot luovat vastaavat hakemistot hakemistoon `out`

Esimerkiksi `.i18n/htm/ol.yml` luo `out/ol` -hakemiston.

`dev.yml` ja `ol.yml` ovat oletuskokoonpanoja.

`dev` on lyhenne numerosta `development` , joka edustaa kehitysympäristöä, jota käytetään paikalliseen esikatseluun ja se on myös oletusasetustiedosto.
`ol` on lyhenne numerosta `online` , joka edustaa verkkoympäristöä, jota käytetään virallisessa julkaisussa, ja se on myös oletusasetustiedosto julkaistaessa `npm` komentoriviparametrilla `-n` .

Voit myös luoda muita asetustiedostoja. Käytä komentorivillä `--htm_conf`

esimerkiksi:
```
i18n.site --htm_conf yourConfig --save
```

`--save` ilmaisee päivityksen versionumeron.

#### <a rel=id href="#npm" id="npm"></a> Julkaise sisältöä osoitteessa npmjs.com

[Suositeltu](/i18n.site/feature#ha) oletusratkaisu on sisällön julkaiseminen [npmjs.com](//npmjs.com)

##### npm login &

Asenna `nodejs` kirjaudu sisään painamalla `npm login` .

Muokkaa `md/.i18n/htm/ol.yml` muuta `i18n.site` in `v: //unpkg.com/i18n.site` omaksi `npm` paketin nimi.

Käytä vain tyhjää paketin nimeä [npmjs.com](//npmjs.com) Verkkotunnuksen käyttäminen paketin nimenä on hyvä valinta.

Kun julkaiset paketin `npm` , **muista `//unpkg.com/`** `v:` -arvon etuliitettä. Välimuistin aika `i18n.site` tämän etuliitepolun alla `/.v` on erityisesti optimoitu mahdollistamaan uusien julkaisujen oikea-aikainen katselu.

Suorita `i18n.site --npm` tai `i18n.site -n` `md` kääntääksesi ja julkaistaksesi.

Jos käytät jatkuvaa integrointiympäristöä julkaisemiseen, sitä ei tarvitse asentaa `nodejs` Kopioi vain sisäänkirjautunut ja julkaistu käyttöoikeus `~/.npmrc` ympäristöön.

Jos muutat paketin nimeä `ol.yml` `v:` , **muista poistaa ensin `.i18n/v/ol`** ja julkaista se sitten.

##### Välityspalvelin Julkaisi npm

Jos käyttäjät Manner-Kiinassa kohtaavat verkkoongelmia eivätkä pysty julkaisemaan `npm` , he voivat määrittää välityspalvelimen ympäristömuuttujan `https_proxy` .

Olettaen, että välityspalvelimesi portti on `7890` voit kirjoittaa:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Itse Isännöity Sisältö

Jos haluat isännöidä sisältöä itse, muokkaa `md/.i18n/htm/ol.yml` ja muuta `v: //unpkg.com/i18n.site` URL-etuliitteeksi, kuten `v: //i18n-v.xxx.com` !

Syötä `md` ja suorita

```
i18n.site --htm_conf ol --save
```

tai lyhenne

```
i18n.site -c ol -s
```

Määritä sitten hakemiston sisältö URL `md/out/ol/v` etuliitepolkuun, joka on asetettu `v:` .

**Määritä lopuksi `/.v` `1s` päättyvän polun välimuistin aika** , muuten äskettäin julkaistua sisältöä ei voida käyttää välittömästi.

Muiden polkujen välimuistiaika voidaan asettaa yhdeksi vuodeksi tai pidemmäksi tarpeettomien pyyntöjen vähentämiseksi.

##### Isännöi Sisältöä S3:lle

Itse isännöimään `CDN` oman palvelimesi käytön lisäksi + yleinen vaihtoehto on käyttää `S3`

Voit käyttää [rclone](https://rclone.org) , katsoa ja muokata alla olevaa komentosarjaa ja kopioida vain vaiheittaiset muutokset `S3` joka kerta `S3` kun julkaiset.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Muista määrittää `CDN` jotta `/.v` -päätteisen polun välimuistin aika on `1s` , muuten et voi käyttää juuri julkaistua sisältöä heti.

### Julkaista Verkkosivustoa

Sivusto voidaan ottaa käyttöön missä tahansa [github page](https://pages.github.com) ja [cloudflare page](https://pages.cloudflare.com) ovat hyviä valintoja.

Koska verkkosivusto käyttää [yksisivuisen sovelluksen](https://developer.mozilla.org/docs/Glossary/SPA) arkkitehtuuria, muista kirjoittaa uudelleen URL-osoite `index.html` joka ei sisällä `. `

Verkkosivuston aloitussivu tarvitsee ottaa käyttöön vain kerran, eikä verkkosivuston aloitussivua tarvitse ottaa uudelleen käyttöön myöhempiä sisältöpäivityksiä varten.

#### Ota Käyttöön Github-Sivulla

[Napsauta ensin github luodaksesi](https://github.com/account/organizations/new?plan=free) organisaation esimerkkinä `i18n-demo`

Luo sitten varasto tämän organisaation `i18n-demo.github.io` (korvaa `i18n-demo` luomallasi organisaation nimellä):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Kun julkaiset edellisen artikkelin sisällön, se on luotu `out/ol/htm` Syötä tämä hakemisto ja suorita :

```
ln -s index.html 404.html
```


Koska `github page` ei tue URL-polun uudelleenkirjoittamista, joten sen sijaan käytetään `404.html`

Suorita sitten seuraava komento `htm` (muista korvata `i18n-demo/i18n-demo.github.io.git` omalla varastoosoitteellasi) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kun olet painanut koodia, odota, että `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Katso esittelysivu:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ota Käyttöön Cloudflare-Sivulla

`github page` [cloudflare page](//pages.cloudflare.com)

Käyttöönotto perustuu yleensä yllä olevaan `github page` käyttöön `cloudflare page`

Luo projekti ja sido yllä oleva varasto `i18n-demo.github.io`

Prosessi on esitetty alla olevassa kuvassa:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Myönnä pääsy `i18n-demo` napsauttamalla `Add Account`

Jos olet sitonut toisen organisaation varaston, sinun on ehkä valittava `Add Account` , ennen kuin uusi organisaatio tulee näkyviin.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Valitse `i18n-demo.github.io` Varasto, napsauta sitten `Begin setup` ja käytä oletusarvoja seuraavissa vaiheissa.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Kun olet sidonut ensimmäisen kerran, sinun on odotettava muutama minuutti, ennen kuin voit käyttää sitä.

Käyttöönoton jälkeen voit sitoa mukautetun toimialueen nimen.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Kun olet sitonut mukautetun verkkotunnuksen nimen, siirry verkkotunnuksen nimeen ja määritä yksisivuisen sovelluksen polun uudelleenkirjoitus alla olevan kuvan mukaisesti:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Yllä olevan kuvan säännöt ovat seuraavat, `i18n.site` ensimmäisellä rivillä sinulle sidottu verkkotunnus.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

Lisäksi määritä välimuistisäännöt alla olevan kuvan mukaisesti ja aseta välimuistin kestoksi yksi kuukausi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Vaihda yllä olevan kuvan toisessa vaiheessa vastaava verkkotunnus sitomaasi verkkotunnukseen.

#### Verkkosivustojen Käyttöönoton Optimointi Manner-Kiinassa

Jos haluat parantaa saavutettavuutta Manner-Kiinan verkkoympäristössä, [rekisteröi ensin verkkotunnus](//beian.aliyun.com) .

Käytä `CDN` Manner-Kiinan pilvitoimittajien objektivarastoa + Ota käyttöön `out/ol/htm` sisältö!

Voit käyttää reunalaskentaa polun uudelleenkirjoittamiseen yhden sivun sovelluksiin, kuten [Baidu Smart Cloudiin `CDN`](//cloud.baidu.com/product/cdn.html) Se voidaan määrittää seuraavasti:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

`MX` tietueet ja `CNAME` tietueet eivät voi olla rinnakkain, jos haluat vastaanottaa verkkotunnussähköposteja samanaikaisesti, sinun on tehtävä yhteistyötä [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) kanssa litistääksesi `CNAME` osaksi `A` tietue.

Lisäksi, koska pilvitoimittajien ulkomaiset liikennemaksut Manner-Kiinassa ovat suhteellisen kalliita, voit käyttää [Huawei Cloudin ilmaista maantieteellistä DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ja [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) :n mukautettua verkkotunnuksen nimeä (kuten alla)! liikenteen ohjaaminen──Liikenne Manner-Kiinassa Baidu Cloud `CDN` kansainvälinen liikenne menee cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Nämä käyttöönoton optimointiratkaisut ovat monimutkaisempia, ja ne esitellään erillisissä luvuissa tulevaisuudessa.

#### Yleinen Verkkotunnuksen Uudelleenohjaus

Jos käytät verkkosivuston luomiseen pääsivustoksi `i18n.site` , sinun on yleensä määritettävä yleisverkkotunnuksen uudelleenohjaus, toisin sanoen ohjattava `*.xxx.com` (mukaan lukien `www.xxx.com` ) pääsy kohteeseen `xxx.com` .

Tämä vaatimus voidaan saavuttaa Alibaba Cloudin `EdgeScript` ( [englanninkielinen asiakirja](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kiinalainen asiakirja](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) avulla `CDN`

Lisää verkkotunnuksen nimi [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ja osoita `*.xxx.com` nimi Alibaba Cloud `CDN` :n `CNAME` -kohtaan.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Esimerkiksi yllä olevan `*.i18n.site` yleisverkkotunnuksen uudelleenohjauskokoonpano on seuraava:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Ota Käyttöön Nginxillä

Lisää `/root/i18n/md/out/ol/htm` `out/ol/htm` `server` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Hakemistorakenne

#### Julkinen

Sivuston staattiset tiedostot, kuten `favicon.ico` `robots.txt` jne.

Tässä olevat kuvaketiedostot voidaan luoda [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### Fi

Lähdekielen hakemisto, joka vastaa asetustiedoston `fromTo` `en` `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Katso käännöksen asetukset [i18](/i18/use)

