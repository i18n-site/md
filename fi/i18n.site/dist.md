# Käyttöönotto Ja Verkossa

`i18n.site` käyttää [yksisivuista sovellusarkkitehtuuria](https://developer.mozilla.org/docs/Glossary/SPA) , ja verkkosivuston sisääntulosivu ja verkkosivuston sisältö otetaan käyttöön itsenäisesti.

Kun yllä oleva käännös on suoritettu, hakemistot `htm` ja `v` luodaan `md/out/dev` hakemiston alle.

Tässä `dev` tarkoittaa, että se on rakennettu `.i18n/htm/dev.yml` määritystiedoston perusteella.

`dev` hakemistosta :

`htm` -hakemisto on verkkosivuston sisäänkäyntisivu.

`v` -hakemisto sisältää verkkosivuston sisällön versionumeroineen.

Paikallinen esikatselu ei välitä versionumerosta ja kopioi kaikki tiedostot `out/dev/v/0.1.0` hakemistoon.

Virallista julkaisua varten muutetut tiedostot kopioidaan uuteen versionumerohakemistoon.

## Määritä Asetustiedosto Arvolla `-c`

Eri asetustiedostot luovat vastaavat hakemistot `out` hakemistoon.

Esimerkiksi `.i18n/htm/main.yml` luo hakemiston `out/main` .

`dev.yml` ja `main.yml` ovat oletuskokoonpanot.

`dev` on lyhenne luvusta `development` , joka ilmaisee kehitysympäristön ja jota käytetään paikalliseen esikatseluun, ja se on myös oletusasetustiedosto.
`ol` on lyhenne luvusta `online` , joka ilmaisee verkkoympäristön, jota käytetään virallisessa julkaisussa. Se on myös oletusasetustiedosto `npm` `-n`

Voit myös luoda muita asetustiedostoja. Käytä komentorivillä `--htm_conf` määrittääksesi käytettävän kokoonpanotiedoston:

esimerkiksi:
```
i18n.site --htm_conf dist --save
```

Tässä `--save` edustaa päivityksen versionumeroa.

## <a rel=id href="#npm" id="npm"></a> Julkaise sisältöä osoitteessa npmjs.com

[Suositeltu](/i18n.site/feature#ha) oletusratkaisu on sisällön julkaiseminen [npmjs.com](//npmjs.com)

### Kirjaudu npm & Viesti

Asenna `nodejs` , kirjaudu sisään tunnuksella `npm login` .

Muokkaa `md/.i18n/htm/main.yml` ja muuta arvoksi [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) omaksi `npm` `YOUR_NPM_PACKAGE` nimeksi [npmjs.com](//npmjs.com)

Muokkaa sitten `md/.i18n/htm/main.package.json`

Suorita `i18n.site --npm` tai `i18n.site -n` hakemistossa `md` kääntääksesi ja julkaistaksesi.

Jos käytät julkaisuun jatkuvaa integrointiympäristöä, `nodejs` ei tarvitse asentaa. Kopioi vain sisäänkirjautumis- ja julkaisuoikeudet `~/.npmrc` ympäristöön.

Jos muutat paketin nimeä `v:` in `main.yml` , **muista poistaa ensin `.i18n/v/main`** ja julkaista se sitten.

#### Välityspalvelin Julkaisi npm

Jos käyttäjät Manner-Kiinassa kohtaavat verkkoongelmia eivätkä pysty julkaisemaan `npm` pakettia, he voivat määrittää välityspalvelimen ympäristömuuttujan `https_proxy` .

Olettaen, että välityspalvelimesi portti on `7890` , voit kirjoittaa:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Itse Isännöity Sisältö

Jos haluat isännöidä sisältöä itse, muokkaa ensin arvoa `md/.i18n/htm/main.yml` ja vaihda `v: //unpkg.com/i18n.site` URL-etuliitteeksi, kuten `v: //i18n-v.xxx.com` .

Syötä `md` -hakemisto ja suorita

```
i18n.site --htm_conf ol --save
```

tai lyhenne

```
i18n.site -c ol -s
```

Määritä sitten `md/out/main/v` -hakemiston sisältö kohdassa `v:` asetettuun URL-etuliitepolkuun.

Lopuksi **määritä välimuistin aika polulle, joka päättyy `1s` `/.v`** , muuten äskettäin julkaistua sisältöä ei voida käyttää heti.

Muiden polkujen välimuistiaika voidaan asettaa yhdeksi vuodeksi tai pidemmäksi tarpeettomien pyyntöjen vähentämiseksi.

## Isännöi Sisältöä S3:lle

Sisällön itseisännöintiin oman palvelimen käytön lisäksi toinen yleinen vaihtoehto on käyttää `CDN` `S3` +

`S3` kirjautua sisään `S3` -palvelimeen käyttämällä [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Muista määrittää `CDN` siten, että numeroon `/.v` päättyvän polun välimuistiaika on `1s` , muuten äskettäin julkaistuun sisältöön ei pääse heti käsiksi.

## Julkaista Verkkosivustoa

Sivusto voidaan ottaa käyttöön missä tahansa [github page](https://pages.github.com) ja [cloudflare page](https://pages.cloudflare.com) ovat hyviä valintoja.

Koska verkkosivusto käyttää [yksisivuista sovellusarkkitehtuuria](https://developer.mozilla.org/docs/Glossary/SPA) , muista kirjoittaa uudelleen URL-polut, jotka eivät sisällä `. ` - `index.html` .

Verkkosivuston aloitussivu tarvitsee ottaa käyttöön vain kerran, eikä verkkosivuston aloitussivua tarvitse ottaa uudelleen käyttöön myöhempiä sisältöpäivityksiä varten.

### Ota Käyttöön Github-Sivulla

[Napsauta ensin github luodaksesi organisaation](https://github.com/account/organizations/new?plan=free) . Seuraava organisaation nimi on `i18n-demo` .

Luo sitten varasto `i18n-demo.github.io` tälle organisaatiolle (korvaa `i18n-demo` luomallasi organisaation nimellä):

![](https://p.3ti.site/1721098657.avif)

Kun julkaiset edellisen artikkelin sisältöä, `out/main/htm` on luotu. Syötä tämä hakemisto ja suorita :

```
ln -s index.html 404.html
```


Koska `github page` ei tue URL-polun uudelleenkirjoittamista, sen sijaan käytetään `404.html` .

Suorita sitten seuraava komento hakemistossa `htm` (muista korvata `i18n-demo/i18n-demo.github.io.git` omalla varastoosoitteellasi) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kun olet painanut koodia, odota, että `github page` :n käyttöönotto onnistuu (kuten alla on kuvattu), ennen kuin voit käyttää sitä.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Katso esittelysivu:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Ota Käyttöön Cloudflare-Sivulla

[cloudflare page](//pages.cloudflare.com) `github page` aan, se tarjoaa polun uudelleenkirjoituksen ja on ystävällisempi Manner-Kiinalle ja on suositeltavaa käyttää.

`cloudflare page` :n käyttöönotto perustuu yleensä yllä olevan `github page` :n käyttöön.

Luo projekti ja sido yllä oleva `i18n-demo.github.io` varasto.

Prosessi on esitetty alla olevassa kuvassa:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Napsauta `Add Account` myöntääksesi käyttöoikeudet organisaatiolle `i18n-demo` .

Jos olet sitonut toisen organisaation varaston, sinun on ehkä napsautettava `Add Account` kahdesti valtuuttaaksesi kaksi kertaa, ennen kuin uusi organisaatio tulee näkyviin.

![](https://p.3ti.site/1721118306.avif)

Valitse seuraavaksi varasto `i18n-demo.github.io` , napsauta sitten `Begin setup` ja käytä oletusarvoja seuraavissa vaiheissa.

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

Vaihda yllä olevan kuvan toisessa vaiheessa vastaava verkkotunnus sitomaasi verkkotunnukseen.

### Verkkosivustojen Käyttöönoton Optimointi Manner-Kiinassa

Jos haluat parantaa saavutettavuutta Manner-Kiinan verkkoympäristössä, [rekisteröi ensin verkkotunnus](//beian.aliyun.com) .

Käytä sitten Manner + Kiinan pilvitoimittajien objektivarastoa `CDN` Ota käyttöön seuraava sisältö `out/main/htm` .

Voit käyttää reunalaskentaa polun uudelleenkirjoittamiseen yhden sivun sovelluksiin mukautumiseksi. Esimerkiksi [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) voidaan määrittää seuraavasti:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Vastausotsikot voidaan asettaa virheenkorjaustuloksi, kuten out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Koska tietue `MX` ja tietue `CNAME` eivät voi olla rinnakkain, jos haluat vastaanottaa verkkotunnussähköposteja samanaikaisesti, sinun on tehtävä yhteistyötä [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) kanssa tasolle `CNAME` tietueeseen `A` .

Lisäksi, koska pilvitoimittajien ulkomaiset liikennemaksut Manner-Kiinassa ovat suhteellisen kalliita, voit käyttää [Huawei Cloudin ilmaista maantieteellistä DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ja [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) :n mukautettua verkkotunnuksen nimeä (kuten alla)! liikenteen ohjaaminen──Liikenteen reititys Manner-Kiinassa Baidu Cloud `CDN` , kansainvälinen liikenne menee cloudflare .

![](https://p.3ti.site/1721119788.avif)

Nämä käyttöönoton optimointiratkaisut ovat monimutkaisempia, ja ne esitellään jatkossa erillisissä luvuissa.

### Yleinen Verkkotunnuksen Uudelleenohjaus

Jos käytät `i18n.site` verkkosivuston luomiseen pääsivustoksi, sinun on yleensä määritettävä koko verkkotunnuksen uudelleenohjaus eli uudelleenohjattava pääsy osoitteeseen `*.xxx.com` (mukaan lukien `www.xxx.com` ) `xxx.com` :een.

Tämä vaatimus voidaan saavuttaa Alibaba Cloud `CDN` `EdgeScript` :n avulla ( [englanninkielinen dokumentti](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [kiinalainen asiakirja](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Lisää verkkotunnuksen nimi [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ja osoita verkkotunnus `*.xxx.com` `CNAME` Alibaba Cloud `CDN` ssä.

![](https://p.3ti.site/1721122000.avif)

Esimerkiksi yleisverkkotunnuksen uudelleenohjauskonfiguraatio `*.i18n.site` yllä olevassa kuvassa on seuraava:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Ota Käyttöön Nginxillä

Lisää seuraavanlainen konfiguraatio !:n `server` kappaleeseen nginx Muuta `/root/i18n/md/out/main/htm` oman projektisi poluksi `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Perustuu `github action` Jatkuvaan Integrointiin

Voit määrittää `github action` n seuraavasti:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Kuten kokoonpanosta voidaan nähdä, tämä työnkulku käynnistyy, kun työnnetään haaraan `main` ja haaraan `dist` .

Työnkulku käyttää haaran nimeä vastaavaa määritystiedostoa asiakirjan julkaisemiseen. Tässä julkaisukokoonpanona käytetään arvoa `.i18n/htm/main.yml` ja `.i18n/htm/dist.yml` .

Suosittelemme seuraavia parhaita käytäntöjä asiakirjan julkaisuprosessissa:

Kun muutokset työnnetään haaraan `main` , asiakirja käynnistyy rakennettavaksi ja otettu käyttöön esikatseluasemassa (esikatseluasema on käytettävissä [github page](//pages.github.com) ).

Kun esikatselusivustolla on vahvistettu, että asiakirja on oikea, koodi yhdistetään ja työnnetään haaraan `dist` , ja virallinen koontiversio ja käyttöönotto siirtyvät verkkoon.

Tietenkin yllä olevan prosessin toteuttaminen vaatii enemmän konfiguraatioita.

Voit viitata varsinaiseen projektiin työnkulun komentosarjaa varten [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` ja `secrets.NPM_TOKEN` kokoonpanossa edellyttävät salaisten muuttujien määrittämistä koodipohjaan.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` on kokoonpanon paketin `npm` julkaisutunnus [npmjs.com](//npmjs.com) ja luo julkaisuoikeudet (kuten alla).

![](//p.3ti.site/1730969906.avif)


## Hakemiston Rakenne

### `public`

Sivuston staattiset tiedostot, kuten `favicon.ico` , `robots.txt` jne.

Tässä olevat kuvaketiedostot voidaan luoda [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` -hakemiston alla ovat `i18n.site` :n asetustiedostot, käännösvälimuisti jne. Katso lisätietoja seuraavasta luvusta ["Asetukset"](/i18n.site/conf) .

### `en`

Lähdekielen hakemisto, joka vastaa `fromTo` `en` `.i18n/conf.yml` määritystiedostoa

```yaml
i18n:
  fromTo:
    en: zh
```

Katso käännöksen asetukset [i18](/i18/use)