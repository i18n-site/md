# Asenna &

## Määritystunnus

`i18n.site` sisältää sisäänrakennetun `i18`-käännösohjelman. [Napsauta tästä saadaksesi ohjeet `i18`-käännösohjelman käyttöoikeuden määrittämiseksi](/i18/use) .

## Asennus

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Näyttöprojekti

Aloitetaan esimerkkiprojektista, jossa käsitellään `i18n.site`-työkalun käyttöä.

Kloonataan ensin esimerkkivarasto ja suoritetaan seuraava komento:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Maanlaajuisen Kiinan käyttäjät voivat:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site`-koodin peruskloonin hakemistoksi on oltava `md`, jotta se voidaan yhdistää paikalliseen esikatseluun `docker`-työkalun kanssa.

### Käännä

Ensin siirry `md`-hakemistoon ja suorita `i18n.site`, joka kääntää `en`-kielestä `zh`-kieliin.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Suorituksen jälkeen luodaan käännökset ja välimuistitiedostot. Muista lisätä ne versionhallintaan `md` hakemistossa `git add .`.

### Paikallinen esikatselu

Asenna ja aloita `docker` ( `MAC` käyttäjä suosittelee [orbstack](https://orbstack.dev) n käyttöä `docker` :n suoritusaikana).

Siirry sitten `docker`-hakemistoon ja suorita `./up.sh`, ja katso paikallinen esikatselu osoitteessa [https://127.0.0.1](https://127.0.0.1).

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Lähetä sisältöä

`i18n.site` käyttää [yksisivuisen sovellusarkkitehtuurin](https://developer.mozilla.org/docs/Glossary/SPA), ja verkkosivuston sisäänkäyntisivu ja sisältö otetaan käyttöön erikseen.

Kun yllä oleva käännös on suoritettu, luodaan hakemistot `htm` ja `v` `md/out/dev`-hakemistoon.

Tässä `dev` tarkoittaa, että se on rakennettu `.i18n/htm/dev.yml`-määrittelytiedoston perusteella.

`dev`-hakemistosta:

`htm`-hakemisto sisältää verkkosivuston sisäänkäyntisivun.

`v`-hakemisto sisältää verkkosivuston sisällön versionumeroineen.

Paikallinen esikatselu ei huomioi versionumeroa ja kopioi kaikki tiedostot `out/dev/v/0.1.0`-hakemistoon.

Virallisessa julkaisussa muutetut tiedostot kopioidaan uuteen versionumerohakemistoon.

#### Määritä asetustiedosto painamalla -c

Eri asetustiedostot luovat vastaavat hakemistot `out`-hakemistoon.

Esimerkiksi `.i18n/htm/ol.yml` luo hakemiston `out/ol`.

`dev.yml` ja `ol.yml` ovat oletusasetukset.

`dev` on lyhenne `development`-sanasta, joka tarkoittaa kehitysympäristöä ja käytetään paikalliseen esikatseluun, sekä se on myös oletusasetustiedosto.
`ol` on lyhenne `online`-sanasta, joka tarkoittaa verkkoympäristöä ja käytetään virallisessa julkaisussa. Se on myös oletusasetustiedosto `npm`-komentoriviparametrin `-n` kanssa.

Voit myös luoda muita asetustiedostoja. Käytä komentorivillä `--htm_conf` määrittääksesi käytettävän kokoonpanotiedoston:

esimerkiksi:
```
i18n.site --htm_conf yourConfig --save
```

Tässä `--save` tarkoittaa versionumeron päivittämistä.

#### <a rel=id href="#npm" id="npm"></a> Julkaise sisältöä npmjs.com:lla

Sisällön julkaiseminen [npmjs.com](//npmjs.com) on suositeltu oletusratkaisu (katso [前端高可用](/i18n.site/feature#ha)).

##### npm login &

Asenna `nodejs` ja kirjaudu sisään käyttäen `npm login`.

Muokkaa `md/.i18n/htm/ol.yml` ja muuta `i18n.site`-arvo `v: //unpkg.com/i18n.site` omaksi `npm`-pakettinimesi.

Käytä vain vapaana olevaa pakettinimeä [npmjs.com](//npmjs.com), ja verkkotunnuksen käyttäminen pakettinimeksi on hyvä valinta.

Kun `/.v` paketin `npm` perusteella, **muista käyttää `//unpkg.com/`** `i18n.site` `v:` eteen.

Suorita `i18n.site --npm` tai `i18n.site -n` hakemistossa `md` kääntääksesi ja julkaisemaan.

Jos käytät jatkuvaa integrointiympäristöä julkaisuun, `nodejs` ei tarvitse asentaa. Kopioi vain sisäänkirjautumisen ja julkaisuluvan `~/.npmrc` ympäristömuuttujat kyseiseen ympäristöön.

Jos muutat paketin nimeä `v:`-arvossa `ol.yml`-tiedostossa, **muista poistaa ensin `.i18n/v/ol`** ennen julkaisua.

##### npm-julkaisun välityspalvelin

Jos manner-Kiinan käyttäjät kohtaavat verkkovirtoja, jotka estävät `npm`-paketin julkaisun, he voivat määrittää välityspalvelimen ympäristömuuttujan `https_proxy`.

Olettaen, että välityspalvelimesi portti on `7890`, voit kirjoittaa seuraavasti:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Itseisännöity sisältö

Jos haluat isännöidä sisältöä itsellesi, muokkaa ensin `md/.i18n/htm/ol.yml` ja muuta `v: //unpkg.com/i18n.site` omaksi verkkotunnuksesi alkuosaksi, kuten `v: //i18n-v.xxx.com`.

Siirry `md`-hakemistoon ja suorita

```
i18n.site --htm_conf ol --save
```

tai lyhenne

```
i18n.site -c ol -s
```

Määritä sitten `md/out/ol/v`-hakemiston sisältö `v:`-arvon määrittämän URL-etuliitteen polkuun.

Lopuksi **määritä välimuistin aika polulle, joka päättyy `1s` `/.v`**. Muuten äskettäin julkaistu sisältö ei ole heti saatavilla.

Muiden polkujen välimuistiaika voidaan asettaa yhdeksi vuodeksi tai pidemmäksi vähentääkseen tarpeettomia pyyntöjä.

##### Isännöi sisältöä S3:lle

Itseisännöity sisältöä voi isännöidä myös käyttämällä `S3`+`CDN`.

`S3` kirjautua sisään `S3` -palvelimeen käyttämällä [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Muista määrittää `CDN` siten, että polku, joka päättyy `/.v`, on välimuistissa `1s`. Muuten äskettäin julkaistuun sisältöön ei pääse heti käsiksi.

### Julkaise verkkosivusto

Sivusto voidaan julkaista missä tahansa, [github page](https://pages.github.com) ja [cloudflare page](https://pages.cloudflare.com) ovat hyviä vaihtoehtoja.

Koska sivusto käyttää [yksisivuisen sovellusarkkitehtuurin](https://developer.mozilla.org/docs/Glossary/SPA), muista kirjoittaa uudelleen URL-polut, jotka eivät sisällä `. `, `index.html`-tiedostoon.

Verkkosivuston sisäänkäyntisivu otetaan käyttöön vain kerran, eikä sitä tarvitse ottaa uudelleen käyttöön myöhempien sisältöpäivitysten vuoksi.

#### Deployoi GitHub-sivulle

[Napsauta ensin GitHub luodaksesi organisaation](https://github.com/account/organizations/new?plan=free). Esimerkkinen organisaation nimi on `i18n-demo`.

Luo sitten varasto `i18n-demo.github.io` kyseiselle organisaatiolle (korvaa `i18n-demo` luomallasi organisaation nimellä)

![](https://p.3ti.site/1721098657.avif)

Kun olet julkaissut edellisen artikkelin sisältöä, `out/ol/htm` on luotu. Siirry tähän hakemistoon ja suorita:

```
ln -s index.html 404.html
```


Koska `github page` ei tue URL-polun uudelleenkirjoittamista, käytetään sen sijaan `404.html`.

Suorita sitten seuraava komento hakemistossa `htm` (korvaa `i18n-demo/i18n-demo.github.io.git` omalla varastoosoitteellasi):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kun olet painanut koodia, odota, että `github page`-ympäristön käyttöönotto onnistuu (kuten alla on kuvattu), ennen kuin voit käyttää sitä.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Katso esittelysivu:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deployoi Cloudflare-sivulle

[cloudflare page](//pages.cloudflare.com) on `github page`-aikaisempi ja tarjoaa polun uudelleenkirjoituksen sekä on ystävällisempi Kiinassa ja suositeltavaa käyttää.

`cloudflare page`-ympäristön käyttöönotto perustuu yleensä `github page`-ympäristöön.

Luo projekti ja sido yllä oleva `i18n-demo.github.io`-varasto.

Prosessi on esitetty alla olevassa kuvassa:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Napsauta `Add Account` myöntääksesi käyttöoikeudet organisaatiolle `i18n-demo`.

Jos olet sitonut toisen organisaation varaston, sinun on ehkä napsautettava `Add Account` kahdesti valtuuttaaksesi kaksi kertaa, ennen kuin uusi organisaatio tulee näkyviin.

![](https://p.3ti.site/1721118306.avif)

Valitse seuraavaksi varasto `i18n-demo.github.io`, napsauta sitten `Begin setup` ja käytä oletusarvoja seuraavissa vaiheissa.

![](https://p.3ti.site/1721118490.avif)

Kun olet sidonut ensimmäisen kerran, sinun on odotettava muutama minuutti, ennen kuin voit käyttää sitä.

Käyttöönoton jälkeen voit sitoa mukautetun toimialueen nimen.

![](https://p.3ti.site/1721119459.avif)

Kun olet sitonut mukautetun verkkotunnuksen nimen, siirry verkkotunnuksen nimeen ja määritä yksisivuisen sovelluksen polun uudelleenkirjoitus alla olevan kuvan mukaisesti:

![](https://p.3ti.site/1721119320.avif)

Yllä olevan kuvan säännöt ovat seuraavat. Korvaa ensimmäisellä rivillä `i18n.site` sitomallasi verkkotunnuksella.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Lisäksi määritä välimuistisäännöt alla olevan kuvan mukaisesti ja aseta välimuistin kestoksi yksi kuukausi.

![](https://p.3ti.site/1721125111.avif)

Vaihda yllä olevan kuvan toisessa vaiheessa vastaava verkkotunnus sitomaasi verkkotunnukselle.

#### Verkkosivustojen käyttöönoton optimointi Kiinassa

Jos haluat parantaa saavutettavuutta Kiinan verkkoympäristössä, [rekisteröi ensin verkkotunnus](//beian.aliyun.com).

Käytä sitten Kiinan pilvitoimittajien objektivarastoa ja `CDN` ottaaksesi käyttöön seuraavaa sisältöä `out/ol/htm`.

Voit käyttää reunalaskentaa polun uudelleenkirjoittamiseen yhden sivun sovelluksiin mukautumiseksi. Esimerkiksi [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) voidaan määrittää seuraavasti:

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
![](https://p.3ti.site/1721121273.avif)

Koska tietue `MX` ja tietue `CNAME` eivät voi olla rinnakkain, jos haluat vastaanottaa verkkotunnussähköposteja samanaikaisesti, sinun on tehtävä yhteistyötä [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) -skriptin kanssa ja muutetaan `CNAME`-tietue `A`-tietueeksi.

Lisäksi, koska pilvitoimittajien ulkomaiset liikennemaksut Kiinassa ovat suhteellisen kalliita, voit käyttää [Huawei Cloudin ilmaista maantieteellistä DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ja [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) -palvelun mukautettua verkkotunnuksen nimeä (kuten alla)! Liikenne ohjataan ─ Kiinan liikenne Baidu Cloud `CDN`-kautta, kansainvälinen liikenne menee Cloudflareen.

![](https://p.3ti.site/1721119788.avif)

Nämä käyttöönoton optimointiratkaisut ovat monimutkaisempia, ja ne esitellään jatkossa erillisissä luvuissa.

#### Yleinen verkkotunnuksen uudelleenohjaus

Jos käytät `i18n.site`-työkalua pääsivuston luomiseen, sinun on yleensä määritettävä koko verkkotunnuksen uudelleenohjaus, eli ohjata pääsy osoitteeseen `*.xxx.com` (mukaan lukien `www.xxx.com`) osoitteeseen `xxx.com`.

Tämä vaatimus voidaan saavuttaa Alibaba Cloud `CDN`-työkalun `EdgeScript`-avulla ( [englanninkielinen dokumentti](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kiinalainen asiakirja](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Lisää verkkotunnuksen nimi [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ja osoita verkkotunnus `*.xxx.com` Alibaba Cloud `CDN`-palvelimen `CNAME`-tietueeseen.

![](https://p.3ti.site/1721122000.avif)

Esimerkiksi yleisverkkotunnuksen uudelleenohjauskonfiguraatio `*.i18n.site` yllä olevassa kuvassa on seuraava:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Deployoi Nginx:llä

Lisää seuraavanlainen konfiguraatio `server`-kappaleeseen Nginx:ään. Muuta `/root/i18n/md/out/ol/htm` omalla projektisi poluksi `out/ol/htm`:

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

#### `public`

Sivuston staattiset tiedostot, kuten `favicon.ico`, `robots.txt` jne.

Tässä olevat kuvaketiedostot voidaan luoda [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

`.i18n`-kansiossa ovat `i18n.site`-asetustiedostot, käännösvälimuisti ja muut, katso yksityiskohtaiset tiedot seuraavasta luvusta [“Asetukset”](/i18n.site/conf).

#### `en`

Lähdekielen kansio, joka vastaa `.i18n/conf.yml`-asetustiedostossa määriteltyä `fromTo`-kentän `en`-arvoa

```yaml
i18n:
  fromTo:
    en: zh
```

Käännöksen asetukset löydät [i18](/i18/use)-sivulta.