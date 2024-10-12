# Asenna & Määritystunnus

## Määritystunnus

`i18n.site` sisältää sisäänrakennetun `i18`-käännöstyökalun. [Napsauta tästä saadaksesi ohjeet `i18`-työkalun käyttötunnuksen määrittämiseksi](/i18/use) .

## Asenna

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo projekti

Aloitetaan esittelyprojektilla, jotta voimme oppia `i18n.site`-työkalun käyttöä.

Kloonataan ensin esittelyvarasto, ja suoritetaan seuraava komento:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Manner-Kiinan käyttäjät voivat:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site`-koodin peruskloonin hakemistonimen on oltava `md`, jotta se voidaan yhdistää paikalliseen esikatseluun `docker`-työkalun kanssa.

### Käännös

Ensiksi siirry `md`-hakemistoon ja suorita `i18n.site`, joka kääntää `en`-kielen `zh`-kieliksi.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Suorituksen jälkeen luodaan käännökset ja välimuistitiedostot. Muista lisätä ne versionhallintaan `md`-hakemistossa `git add .` -komentolla.

### Paikallinen esikatselu

Asenna ja käynnistä `docker` (`MAC`-käyttäjille suositellaan [orbstack](https://orbstack.dev) -työkalun käyttöä `docker`-työkalun suorittamiseen).

Suoritaan sitten `docker`-hakemistossa `./up.sh` ja katso paikallisesti osoitteessa [https://127.0.0.1](https://127.0.0.1).

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Lähetä sisältöä

`i18n.site` käyttää [yksisivuista sovellusarkkitehtuuria](https://developer.mozilla.org/docs/Glossary/SPA), ja verkkosivuston sisääntulosivu sekä sisältö otetaan käyttöön erikseen.

Kun yllä oleva käännös on suoritettu, luodaan hakemistot `htm` ja `v` `md/out/dev`-hakemistoon.

Tässä `dev` tarkoittaa, että se on rakennettu `.i18n/htm/dev.yml`-määrittäytiedoston perusteella.

`dev`-hakemistosta:

`htm`-hakemisto sisältää verkkosivuston sisääntulosivun.

`v`-hakemisto sisältää verkkosivuston sisällön versionumeroineen.

Paikallinen esikatselu ei huomioi versionumeroa ja kopioi kaikki tiedostot `out/dev/v/0.1.0`-hakemistoon.

Virallista julkaisua varten muutetut tiedostot kopioidaan uuteen versionumerohakemistoon.

#### Määritä asetustiedosto painamalla -c

Eri asetustiedostot luovat vastaavat hakemistot `out`-hakemistoon.

Esimerkiksi `.i18n/htm/ol.yml` luo hakemiston `out/ol`.

`dev.yml` ja `ol.yml` ovat oletuskokoonpanot.

`dev` on lyhenne `development`-sanasta, joka tarkoittaa kehitysympäristöä ja jota käytetään paikalliseen esikatseluun, ja se on myös oletusasetustiedosto.
`ol` on lyhenne `online`-sanasta, joka tarkoittaa verkkoympäristöä ja jota käytetään virallisessa julkaisussa. Se on myös oletusasetustiedosto `npm`-komentoriviparametrin `-n` kanssa.

Voit myös luoda muita asetustiedostoja. Käytä komentorivillä `--htm_conf` määrittääksesi käytettävän kokoonpanotiedoston:

esimerkiksi:
```
i18n.site --htm_conf yourConfig --save
```

Tässä `--save` tarkoittaa versionumeron päivittämistä.

#### <a rel=id href="#npm" id="npm"></a> Julkaise sisältöä npmjs.com

[Suositeltu](/1) oletusratkaisu on sisällön julkaiseminen [npmjs.com](/0)

##### npm login &

Asenna `nodejs` ja kirjaudu sisään `npm login` -komentolla.

Muokkaa `md/.i18n/htm/ol.yml` ja muuta `i18n.site`-arvo `v: //unpkg.com/i18n.site` omaksi `npm`-pakettinimesi.

Käytä vain vapaana olevaa pakettinimeä [npmjs.com](//npmjs.com), ja verkkotunnuksen käyttäminen pakettinimeksi on hyvä valinta.

Kun `/.v` paketin `npm` perusteella, **muista käyttää `//unpkg.com/`** `i18n.site` `v:` eteen.

Suorita `i18n.site --npm` tai `i18n.site -n` hakemistossa `md` kääntääksesi ja julkaisemaan.

Jos käytät jatkuvaa integrointiympäristöä julkaisuun, `nodejs` ei tarvitse asentaa. Kopioi vain sisäänkirjautumis- ja julkaisuoikeudet `~/.npmrc` ympäristöön.

Jos muutat paketin nimeä `v:`-arvossa `ol.yml`-tiedostossa, **muista poistaa ensin `.i18n/v/ol`** ja julkaise sitten.

##### npm-julkaisun välityspalvelin

Jos Manner-Kiinan käyttäjät kohtaavat verkkovirtoja, eivätkä pysty julkaisemaan `npm`-pakettia, he voivat määrittää välityspalvelimen ympäristömuuttujan `https_proxy`.

Olettaen, että välityspalvelimesi portti on `7890`, voit kirjoittaa seuraavasti:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Itseisännöity sisältö

Jos haluat isännöidä sisältöä itse, muokkaa ensin arvoa `md/.i18n/htm/ol.yml` ja vaihda `v: //unpkg.com/i18n.site` URL-etuliitteeksi, kuten `v: //i18n-v.xxx.com` .

Syötä `md`-hakemistoon ja suorita

```
i18n.site --htm_conf ol --save
```

tai lyhenne

```
i18n.site -c ol -s
```

Määritä sitten `md/out/ol/v`-hakemiston sisältö `v:`-arvon määrittämään verkkotunnuksen polkuun.

Lopuksi **määritä välimuistin aika polulle, joka päättyy `1s` `/.v`-tiedostoon**, muuten äskettäin julkaistua sisältöä ei voida käyttää heti.

Muiden polkujen välimuistiaika voidaan asettaa yhdeksi vuodeksi tai pidemmäksi vähentääkseen tarpeettomien pyyntöjen määrää.

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

Muista konfiguroida `CDN`, jotta polut, jotka päättyvät `/.v`, ovat välimuistissa `1s`, muuten äskettäin julkaistua sisältöä ei voida käyttää heti.

### Julkaise verkkosivustoa

Verkkosivusto voidaan ottaa käyttöön missä tahansa, [github page](https://pages.github.com) ja [cloudflare page](https://pages.cloudflare.com) ovat hyviä valintoja.

Koska verkkosivusto käyttää [yksisivuista sovellusarkkitehtuuria](https://developer.mozilla.org/docs/Glossary/SPA), muista kirjoittaa uudelleen URL-polut, jotka eivät sisällä `.`, `index.html`-tiedostoon.

Verkkosivuston aloitussivu tarvitsee ottaa käyttöön vain kerran, eikä sitä tarvitse ottaa uudelleen käyttöön myöhempien sisältöpäivitysten vuoksi.

#### Ota käyttöön GitHub-sivulla

[Luo ensin GitHub-organisaatio](https://github.com/account/organizations/new?plan=free), ja seuraava organisaation nimi on `i18n-demo`.

Luo sitten varasto `i18n-demo.github.io` kyseiselle organisaatiolle (korvaa `i18n-demo` luomallasi organisaation nimellä)

![](https://p.3ti.site/1721098657.avif)

Kun olet julkaissut edellisen artikkelin sisältöä, `out/ol/htm` on luotu. Syötä tämä hakemisto ja suorita:

```
ln -s index.html 404.html
```


Koska `github page` ei tue URL-polun uudelleenkirjoittamista, käytetään sen sijaan `404.html`.

Suorita sitten seuraava komento `htm`-hakemistossa (muista korvata `i18n-demo/i18n-demo.github.io.git` omalla varastoosoitteellasi):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kun olet painanut koodia, odota, että `github page`-kustannus onnistuu (kuten alla on kuvattu), ennen kuin voit käyttää sitä.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Katso esittelysivu:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ota käyttöön Cloudflare-sivulla

[cloudflare page](//pages.cloudflare.com) on `github page`-aikaisempi vaihtoehto, se tarjoaa polun uudelleenkirjoituksen ja on ystävällisempi Manner-Kiinalle, ja sitä suositellaan käyttämään.

`cloudflare page`-kustannuksen käyttöönotto perustuu yleensä yllä olevan `github page`-kustannuksen käyttöön.

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

#### Verkkosivustojen käyttöönoton optimointi Manner-Kiinassa

Jos haluat parantaa saavutettavuutta Manner-Kiinan verkkoympäristössä, [rekisteröi ensin verkkotunnus](//beian.aliyun.com).

Käytä sitten Manner-Kiinan pilvitoimittajien objektivarastoa ja `CDN` ottaaksesi käyttöön seuraavaa sisältöä `out/ol/htm`.

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

Koska tietue `MX` ja tietue `CNAME` eivät voi olla rinnakkain, jos haluat vastaanottaa verkkotunnussähköposteja samanaikaisesti, sinun on tehtävä yhteistyötä [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) -skriptin kanssa, jotta `CNAME`-tietueet tasotetaan `A`-tietueiksi.

Lisäksi, koska pilvitoimittajien ulkomaiset liikennemaksut Manner-Kiinassa ovat suhteellisen kalliita, voit käyttää [Huawei Cloudin ilmaista maantieteellistä DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ja [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) -palvelun mukautettua verkkotunnuksen nimeä (kuten alla)! liikenteen ohjaaminen ── Manner-Kiinan liikenne menee Baidu Cloud `CDN`:hen, kansainvälinen liikenne menee Cloudflareen.

![](https://p.3ti.site/1721119788.avif)

Nämä käyttöönoton optimointiratkaisut ovat monimutkaisempia, ja ne esitellään jatkossa erillisissä luvuissa.

#### Yleinen verkkotunnuksen uudelleenohjaus

Jos käytät `i18n.site`-työkalua pääsivuston luomiseen, sinun on yleensä määritettävä koko verkkotunnuksen uudelleenohjaus, eli uudelleenohjata pääsy osoitteeseen `*.xxx.com` (mukaan lukien `www.xxx.com`) osoitteeseen `xxx.com`.

Tämä vaatimus voidaan saavuttaa Alibaba Cloud `CDN`-työkalun `EdgeScript`-ominaisuuden avulla ( [englanninkielinen dokumentti](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kiinalainen dokumentti](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Lisää verkkotunnuksen nimi [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ja osoita verkkotunnus `*.xxx.com` Alibaba Cloud `CDN`-työkalun `CNAME`-tietueeseen.

![](https://p.3ti.site/1721122000.avif)

Esimerkiksi yleisverkkotunnuksen uudelleenohjauskonfiguraatio `*.i18n.site` yllä olevassa kuvassa on seuraava:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Ota käyttöön Nginxillä

Lisää seuraavanlainen konfiguraatio `server`-kappaleeseen Nginx:hen. Muuta `/root/i18n/md/out/ol/htm` omalla projektisi poluksi `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Hakemiston rakenne

#### `public`

Verkkosivuston staattiset tiedostot, kuten `favicon.ico`, `robots.txt` jne.

Tässä olevat kuvaketiedostot voidaan luoda [realfavicongenerator.net](https://realfavicongenerator.net).

#### `.i18n`

`.i18n`-kansiossa ovat `i18n.site`-asetustiedostot, käännösvälimuisti ja muut, katso yksityiskohtaiset tiedot seuraavasta luvusta [“Asetukset”](/i18n.site/conf).

#### `en`

Lähdekielikansio, joka vastaa `.i18n/conf.yml`-asetustiedostossa määriteltyä `fromTo` `en`

```yaml
i18n:
  fromTo:
    en: zh
```

Käännöksen asetukset löydät [i18](/i18/use).