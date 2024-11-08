# Kohereza No Kumurongo

`i18n.site` ifata [urupapuro rumwe rwa porogaramu](https://developer.mozilla.org/docs/Glossary/SPA) yububiko, kandi urupapuro rwinjira kurubuga nibirimo kurubuga byoherejwe byigenga.

Nyuma yo gukora ibisobanuro byavuzwe haruguru, ububiko `htm` na `v` bizakorwa munsi yububiko `md/out/dev` .

Hano, `dev` bivuze ko yubatswe ishingiye kuri dosiye `.i18n/htm/dev.yml` iboneza.

`dev` ububiko :

Ububiko `htm` nurupapuro rwinjira kurubuga.

Ububiko `v` bukubiyemo ibiri kurubuga hamwe nimero ya verisiyo.

Ibibanza byibanze ntabwo byita kuri numero ya verisiyo kandi bizakoporora dosiye zose kuri `out/dev/v/0.1.0` diregiteri.

Kurekura kumugaragaro, dosiye zahinduwe zizimurwa kuri verisiyo nshya yububiko.

## Kugaragaza Dosiye Iboneza Hamwe Na `-c`

Amadosiye atandukanye azakora ububiko bujyanye nububiko `out` .

Kurugero, `.i18n/htm/main.yml` izakora `out/main` ububiko.

`dev.yml` na `main.yml` nibisanzwe byagenwe.

`dev` ni impfunyapfunyo ya `development` , yerekana ibidukikije byiterambere, ikoreshwa kubireba mbere, kandi ni na dosiye isanzwe iboneza.
`ol` ni impfunyapfunyo ya `online` , yerekana ibidukikije kumurongo, bikoreshwa mugusohora kumugaragaro Nibisanzwe kandi dosiye iboneza isanzwe iyo ukoresheje umurongo wumurongo `-n` kugeza `npm` kurekura.

Urashobora kandi gukora izindi dosiye ziboneza Koresha `--htm_conf` kumurongo wumurongo kugirango ugaragaze izina rya dosiye iboneza kugirango ukoreshe:

urugero:
```
i18n.site --htm_conf dist --save
```

Hano `--save` yerekana umubare wo gusohora verisiyo yo gusohora.

## <a rel=id href="#npm" id="npm"></a> Tangaza ibiri kuri npmjs.com

Gutangaza ibikubiyemo [npmjs.com](//npmjs.com) bisabwe igisubizo gisanzwe (reba [Imbere-Impera Yaboneka](/i18n.site/feature#ha) ).

### npm Kwinjira & Post

Shyiramo `nodejs` , injira hamwe na `npm login` .

Hindura `md/.i18n/htm/main.yml` hanyuma uhindure agaciro ka [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` nkuko izina ryawe bwite `npm` paki [npmjs.com](//npmjs.com)

Noneho hindura `md/.i18n/htm/main.package.json`

Koresha `i18n.site --npm` cyangwa `i18n.site -n` mububiko `md` kugirango uhindure kandi utangaze.

Niba ukoresha ibidukikije bihoraho kugirango utangaze, nta mpamvu yo gushiraho `nodejs` Gusa wandukure winjiye kandi utangaze uruhushya `~/.npmrc` kubidukikije.

Niba uhinduye izina rya paki ya `v:` kuri `main.yml` , nyamuneka **wemeze gusiba `.i18n/v/main` mbere** hanyuma ubitangaze.

#### Seriveri Ya Porokireri Yatangajwe Na npm

Niba abakoresha kumugabane wUbushinwa bahuye nibibazo byurusobe kandi ntibabashe gutangaza paki `npm` , barashobora gushiraho ibidukikije bihinduka `https_proxy` kugirango bagene seriveri ya porokisi.

Dufashe ko porokisi ya seriveri yawe ari `7890` , urashobora kwandika:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Kwiyakira Wenyine

Niba ushaka kwiyakira-ibirimo, banza uhindure `md/.i18n/htm/main.yml` hanyuma uhindure `v: //unpkg.com/i18n.site` kuri URL ibanziriza URL, nka `v: //i18n-v.xxx.com` .

Injira `md` ububiko hanyuma ukore

```
i18n.site --htm_conf ol --save
```

cyangwa mu magambo ahinnye

```
i18n.site -c ol -s
```

Noneho, shiraho ibiri mububiko `md/out/main/v` kuri URL ibanziriza inzira yashyizwe muri `v:` .

Hanyuma, **shiraho cache igihe cyinzira irangirira kuri `/.v` kugeza kuri `1s`** , bitabaye ibyo ibishya byasohotse ntibishobora kuboneka ako kanya.

Igihe cache yizindi nzira irashobora gushirwa kumwaka umwe cyangwa irenga kugirango ugabanye ibyifuzo bitari ngombwa.

## Kwakira Ibikubiyemo Kuri s3

Kwiyakira- `CDN` , usibye gukoresha seriveri yawe bwite, ubundi buryo busanzwe ni ugukoresha `S3` +

Urashobora gukoresha [rclone](https://rclone.org) winjire muri `S3` seriveri, hanyuma wohereze kandi uhindure inyandiko ikurikira, hanyuma wandukure gusa impinduka ziyongera kuri `S3` kuri buri gusohora.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Wibuke gushiraho `CDN` kugirango cache igihe cyinzira irangirira muri `/.v` ni `1s` , naho ubundi ibyasohotse vuba ntibishobora kuboneka ako kanya.

## Gutangaza Urubuga

Urubuga rushobora koherezwa ahantu hose [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) ni amahitamo meza!

Kuberako urubuga rukoresha [paji imwe yububiko](https://developer.mozilla.org/docs/Glossary/SPA) bwububiko, ibuka kwandika inzira ya URL idafite `. ` kugeza `index.html` .

Urupapuro rwinjira kurubuga rukeneye koherezwa rimwe gusa, kandi nta mpamvu yo gusubiramo urupapuro rwinjira kurubuga kugirango ruvugururwe.

### Kohereza Kurupapuro Rwa github

[Banza ukande github kugirango ushireho ishyirahamwe](https://github.com/account/organizations/new?plan=free) Izina ryumuryango rikurikira ni `i18n-demo` .

Noneho kora ububiko `i18n-demo.github.io` munsi yiri shyirahamwe (nyamuneka usimbuze `i18n-demo` nizina ryumuryango washizeho):

![](https://p.3ti.site/1721098657.avif)

Mugihe cyo gutangaza ibiri mu ngingo ibanza, `out/main/htm` byakozwe. Nyamuneka andika ubu bubiko hanyuma ukore :

```
ln -s index.html 404.html
```


Kuberako `github page` idashyigikiye URL inzira yandika, `404.html` ikoreshwa aho.

Noneho koresha itegeko rikurikira mububiko `htm` (ibuka gusimbuza `i18n-demo/i18n-demo.github.io.git` na aderesi yawe bwite) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nyuma yo gusunika kode, tegereza kohereza `github page` kugirango ikore neza (nkuko bigaragara hano) mbere yuko ubigeraho.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kurupapuro rwa demo nyamuneka reba:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Kohereza Kurupapuro Rwibicu

[cloudflare page](//pages.cloudflare.com) na `github page` , itanga inzira yo kwandika kandi irushijeho kuba inshuti kubushinwa kandi birashoboka cyane.

Kohereza `cloudflare page` mubisanzwe bishingiye kubyoherejwe `github page` hejuru.

Kora umushinga uhuze ububiko `i18n-demo.github.io` hejuru.

Inzira irerekanwa mumashusho hepfo:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Nyamuneka kanda `Add Account` kugirango wemererwe kwinjira mumuryango `i18n-demo` .

Niba warahambiriye ububiko bwundi muryango, urashobora gukanda `Add Account` inshuro ebyiri kugirango wemererwe kabiri mbere yuko ishyirahamwe rishya ryerekanwa.

![](https://p.3ti.site/1721118306.avif)

Ibikurikira, hitamo ububiko `i18n-demo.github.io` , hanyuma ukande `Begin setup` , hanyuma ukoreshe indangagaciro zintambwe zikurikira.

![](https://p.3ti.site/1721118490.avif)

Nyuma yo guhambira kunshuro yambere, ugomba gutegereza iminota mike mbere yuko ubigeraho.

Nyuma yo koherezwa, urashobora guhuza izina ryigenga.

![](https://p.3ti.site/1721119459.avif)

Nyuma yo guhuza izina ryigenga ryihariye, nyamuneka jya mwizina rya domaine kugirango ugene inzira yandika yurupapuro rumwe rwa porogaramu, nkuko bigaragara hano:

![](https://p.3ti.site/1721119320.avif)

Amategeko ari ku ishusho yavuzwe haruguru ni aya akurikira. Nyamuneka usimbuze `i18n.site` kumurongo wambere hepfo hamwe nizina rya domaine uhambiriye.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Wongeyeho, nyamuneka shiraho amategeko ya cache, nkuko bigaragara hano hepfo, hanyuma ushireho cache igihe cyukwezi.

![](https://p.3ti.site/1721125111.avif)

Nyamuneka hindura izina rya domaine rihuye nintambwe ya kabiri mwishusho hejuru kurizina rya domaine wahambiriye.

### Kunoza Uburyo Bwo Kohereza Urubuga Mubushinwa

Niba ushaka kubona imikorere myiza yimikorere mubidukikije byu Bushinwa, nyamuneka [iyandikishe izina rya domaine](//beian.aliyun.com) .

Noneho, koresha ikintu cyabitswe n'abacuruzi b'igicu ku mugabane w'Ubushinwa `CDN` Kohereza ibikurikira `out/main/htm` +

Urashobora gukoresha computing computing kugirango wandike inzira yo guhuza na page imwe ya porogaramu Urugero, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) irashobora gushyirwaho gutya:

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
  // Imitwe yo gusubiza irashobora gushyirwaho mugusohora ibyasohotse, nka hanze.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Kuberako andika `MX` kandi wandike `CNAME` ntishobora kubana, niba ushaka kwakira imeri yizina rya imeri icyarimwe, ugomba gufatanya [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) kugeza kurwego rwa `CNAME` mukwandika `A` !

Byongeye kandi, kubera ko amafaranga yo mu mahanga yinjira mu mahanga agurisha ibicuruzwa mu gihugu cy’Ubushinwa ahenze cyane, niba ushaka kunoza ibiciro, urashobora gukoresha igicu cya [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [DNS buntu](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) hamwe n’izina rya domeni (nkuko bigaragara hano) kugirango ubigereho kugendesha ibinyabiziga──Ibinyabiziga bigenda mu mugabane w'Ubushinwa Baidu Cloud `CDN` , traffic mpuzamahanga ijya cloudflare .

![](https://p.3ti.site/1721119788.avif)

Izi gahunda zo gukoresha neza ibisubizo biragoye kandi bizatangizwa mubice bitandukanye mugihe kizaza.

### Izina Rusange Ryerekanwe

Niba ukoresha `i18n.site` kugirango ubyare urubuga nkurubuga rwawe nyamukuru, mubisanzwe ugomba gushiraho pan-domain redirection, ni ukuvuga kohereza inzira kuri `*.xxx.com` (harimo `www.xxx.com` ) kugeza `xxx.com` .

Iki cyifuzo gishobora kugerwaho hifashishijwe Alibaba Cloud `CDN` `EdgeScript` ( [inyandiko yicyongereza](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Inyandiko yubushinwa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ongeraho izina rya domaine muri [Cloud ya CDN](https://cdn.console.aliyun.com/domain/list) hanyuma werekane izina rya domaine `*.xxx.com` `CNAME` muri Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Kurugero, pan-domaine izina ryerekanwe iboneza rya `*.i18n.site` mwishusho hejuru niyi ikurikira:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Kohereza Hamwe Na nginx

Nyamuneka ongeraho ibisa nkibi bikurikira mu gika cya `server` nginx Nyamuneka hindura `/root/i18n/md/out/main/htm` inzira yumushinga wawe `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Ukurikije `github action` Gukomeza Kwishyira Hamwe

Urashobora kwifashisha ibi bikurikira kugirango ugene `github action` :

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

Nkuko bigaragara muboneza, iyi mikorere iterwa mugihe usunika ishami `main` nishami `dist` .

Urupapuro rwakazi ruzakoresha dosiye iboneza ihuye nizina ryishami kugirango utangaze inyandiko Hano, `.i18n/htm/main.yml` na `.i18n/htm/dist.yml` bizakoreshwa nkibikoresho byo gutangaza.

Turasaba inama nziza zikurikira kubikorwa byo gusohora inyandiko:

Iyo impinduka zisunitswe kumashami `main` , inyandiko irashishikarizwa kubakwa no koherezwa kuri sitasiyo yo kureba (sitasiyo yo kureba irahari [github page](//pages.github.com) ).

Nyuma yo kwemeza ko inyandiko ari nziza kurubuga rwo kureba, kode izahuzwa hanyuma isunikwe ku ishami `dist` , kandi kubaka no kohereza bizajya kumurongo.

Nibyo, gushyira mubikorwa inzira yavuzwe haruguru bisaba kwandika byinshi.

Urashobora kwifashisha umushinga nyirizina [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` na `secrets.NPM_TOKEN` muburyo bugusaba kugena ibanga ryibanga muri code base.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` ni ikimenyetso cyo gutangaza paki `npm` muboneza. Sura [npmjs.com](//npmjs.com) ukore ikimenyetso gifite uburenganzira bwo gutangaza (nkuko bigaragara hano).

![](//p.3ti.site/1730969906.avif)


## Imiterere Yububiko

### `public`

Amadosiye ahamye yurubuga, nka `favicon.ico` , `robots.txt` , nibindi.

Agashusho dosiye hano irashobora kubyara hamwe [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Munsi yububiko `.i18n` harimo dosiye yiboneza, cache yubusobanuro, nibindi bya `i18n.site` Reba igice gikurikira ["Iboneza"](/i18n.site/conf) kubisobanuro birambuye.

### `en`

Ububiko bwururimi rwinkomoko, bihuye na `en` kuri `fromTo` muri `.i18n/conf.yml` dosiye iboneza

```yaml
i18n:
  fromTo:
    en: zh
```

Nyamuneka reba iboneza ry'ubuhinduzi [i18](/i18/use)