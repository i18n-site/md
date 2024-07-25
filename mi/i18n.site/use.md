# Tāuta &

## Tohu Whirihoranga

`i18n.site` Kua mau te taputapu `i18` , [paatohia ki konei ki te titiro ki te tuhinga `i18` hei whirihora i te tohu uru](/i18/use) .

## Tāuta

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Kaupapa Demo

Me timata me te kaupapa demo ka ako me pehea te whakamahi `i18n.site`

Ko te tuatahi ka kati i te putunga demo ka whakahaere i te whakahau penei:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Ka taea e nga kaiwhakamahi i te tuawhenua o Haina:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ko te ingoa whaiaronga o te kiore turanga waehere me `md` kia pai ai te arokitenga o te rohe me `docker` `demo.i18n.site`

### Whakamaori

`zh` , tomohia `en` `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

I muri i te whakahaeretanga, ka hangaia nga konae keteroki me te taapiri ki te rehitatanga `git add . ` kei te raarangi `md`

### Arokite Rohe

`MAC` [orbstack](https://orbstack.dev) `docker` `docker`

Na, tomohia [https://127.0.0.1](https://127.0.0.1) `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Tuku Ihirangi

`i18n.site` Ka tango i te hoahoanga [tono wharangi kotahi](https://developer.mozilla.org/docs/Glossary/SPA) , a ko te wharangi tomokanga paetukutuku me nga ihirangi paetukutuku ka tohatoha takitahi.

Whai muri i te whakahaere i te whakamaoritanga i runga ake nei, ka hangaia nga raarangi `htm` me `v` ki te raarangi `md/out/dev`

I konei `dev` e tohu ana i hangaia i runga i te konae `.i18n/htm/dev.yml` .

`dev` :

`htm`

`v` Kei roto i te whaiaronga te ihirangi paetukutuku me te nama putanga.

Ka kapehia e te arokite a rohe nga konae katoa ki te raarangi `out/dev/v/0.1.0`

Mo te tuku mana, ka kapehia nga konae kua whakarereke ki te raarangi nama putanga hou.

#### Whakamahia Te -c Hei Tohu I Te Konae Whirihoranga

Ko nga konae whirihoranga rereke ka hanga i nga whaiaronga i raro i te raarangi `out`

Hei tauira, ka hanga `out/ol` `.i18n/htm/ol.yml`

`dev.yml` me `ol.yml` ko nga whirihoranga taunoa.

`dev` Ko te whakapoto o `development` , e tohu ana i te taiao whanaketanga, e whakamahia ana mo te arokite a-rohe, a ko te konae whirihoranga taunoa hoki.
`ol` Ko te whakapototanga o `online` , e tohu ana i te taiao ipurangi, ka whakamahia mo te tuku mana, a ko te konae whirihoranga taunoa hoki i te wa e whakaputa ana ki `npm` ma te whakamahi i te tawhā raina whakahau `-n` .

Ka taea hoki e koe te hanga i etahi atu konae whirihoranga Whakamahia `--htm_conf`

hei tauira:
```
i18n.site --htm_conf yourConfig --save
```

Kei konei `--save` e tohu ana i te nama putanga whakahou.

#### <a rel=id href="#npm" id="npm"></a> Whakaputa ihirangi ki npmjs.com

[Ko](/i18n.site/feature#ha) te whakaputa ihirangi ki [npmjs.com](//npmjs.com)

##### npm login &

Tāuta `nodejs` whakamahia `npm login` hei takiuru.

Whakatika `md/.i18n/htm/ol.yml` hurihia `i18n.site` i roto i `v: //unpkg.com/i18n.site` ki a koe ake `npm` ingoa mokihi.

Me whakamahi noa i te ingoa o te kete kaore i nohoia i runga [npmjs.com](//npmjs.com)

I te wa e whakaputa ana i runga i te kete `npm` , **kia mohio koe ki te whakamahi i `//unpkg.com/`** hei prefix o te uara `v:` Ko te wa keteroki `i18n.site` i raro i tenei ara prefix `/.v` kua tino whakatikaia kia taea ai te tiro i nga putanga hou.

Whakahaerehia `i18n.site --npm` me te `i18n.site -n` i roto i `md` whaiaronga hei whakamaori me te whakaputa.

Mena ka whakamahi koe i te `~/.npmrc` whakauru tonu ki te whakaputa, kaore he take ki te whakauru `nodejs`

Mena ka whakarereketia **`.i18n/v/ol`** koe te ingoa o te kete i roto i `v:` i roto i te `ol.yml`

##### Te Tūmau Takawaenga I Whakaputaina E npm

Mena ka raru nga kaiwhakamahi i te tuawhenua o Haina karekau e taea te whakaputa i te kete `npm` , ka taea e ratou te tautuhi i te taurangi taiao `https_proxy` hei whirihora i te tūmau takawaenga

Ki te whakaaro ko to tauranga tūmau takawaenga ko `7890` ka taea e koe te tuhi:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Ihirangi Manaaki-Whaiaro

Mena kei te pirangi koe ki te manaaki i nga ihirangi, tuatahi `md/.i18n/htm/ol.yml` whakatikahia `v: //unpkg.com/i18n.site` ki to mua URL, penei i `v: //i18n-v.xxx.com` .

Whakauruhia te raarangi `md`

```
i18n.site --htm_conf ol --save
```

whakapoto ranei

```
i18n.site -c ol -s
```

Na, whirihorahia nga ihirangi kei roto i te `v:` `md/out/ol/v`

Ka mutu, **whirihorahia te wa keteroki o te ara ka `/.v` ki te `1s`** , ki te kore e taea te uru atu ki nga mea hou.

Ko te wa keteroki mo etahi atu ara ka taea te whakarite ki te kotahi tau neke atu ranei hei whakaiti i nga tono kore.

##### Kaihautu Ihirangi Ki s3

Ki te ihirangi manaaki-whaiaro, i tua atu i te whakamahi i to ake tūmau, + `CDN` atu ko te whakamahi `S3`

Ka taea e koe te whakamahi i `S3` [rclone](https://rclone.org) Takiuru `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kia mahara ki te whirihora `CDN` na te wa keteroki o te ara e mutu ana ki te `/.v` he `1s` , ki te kore ka kore e taea e koe te uru atu ki nga ihirangi hou kua tukuna.

### Whakaputa Paetukutuku

Ka taea te tuku i te paetukutuku ki hea, [cloudflare page](https://pages.cloudflare.com) pai nga whiringa [github page](https://pages.github.com)

Na te mea ka whakamahia e te paetukutuku te hoahoanga o [te tono wharangi kotahi](https://developer.mozilla.org/docs/Glossary/SPA) , mahara ki te tuhi ano i te ara URL karekau kei `index.html` `. `

Ko te wharangi urunga paetukutuku me tuku kotahi anake, kaore he take ki te whakahou ano i te wharangi urunga paetukutuku mo nga whakahoutanga ihirangi ka whai ake.

#### Tukuna Ki Te Wharangi github

Tuatahi [paohia ki github hei hanga i tetahi whakahaere](https://github.com/account/organizations/new?plan=free) `i18n-demo` te ingoa whakahaere e whai ake nei hei tauira.

Na ka hanga he whare `i18n-demo` i raro i tenei whakahaere `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721098657.avif">

I te wa e whakaputa ana i nga korero i roto i te tuhinga o mua, kua hangaia Tena `out/ol/htm` uruhia tenei raarangi ka whakahaere :

```
ln -s index.html 404.html
```


Na te mea kaore e tautokohia `404.html` `github page`

Na ka whakahaere `i18n-demo/i18n-demo.github.io.git` te whakahau e : ake nei i roto i te raarangi `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Whai muri i te pana i te waehere, tatari kia rere pai te tukunga o `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Mo te wharangi whakaatu tirohia koa:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Tukuna Ki Te Wharangi cloudflare

Ka whakatauritea ki `github page` [cloudflare page](//pages.cloudflare.com) he huarahi tuhi, he pai ake ki te tuawhenua o Haina, he pai ake te whakamahi.

`cloudflare page` `github page`

Waihangahia he kaupapa ka herea te whare putunga `i18n-demo.github.io`

Ko te tukanga e whakaatuhia ana i te ahua i raro nei:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Tena koa pawhiria `Add Account` kia uru atu ki te `i18n-demo` .

Mena kua herea e koe te whare putunga o tetahi atu whakahaere, me paatoo `Add Account` koe kia rua nga wa hei whakamana i mua i te whakaaturanga o te whakahaere hou.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Paatohia te `i18n-demo.github.io` Warehouse, ka paato i te `Begin setup` , ka whakamahi i nga uara taunoa mo nga mahi ka whai ake.

<img alt="" src="https://p.3ti.site/1721118490.avif">

I muri i te here mo te wa tuatahi, me tatari koe mo etahi meneti ka taea e koe te uru atu.

I muri i te tukunga, ka taea e koe te here i tetahi ingoa rohe ritenga.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Whai muri i te herenga o te ingoa rohe ritenga, haere koa ki te ingoa rohe ki te whirihora i te ara tuhi ano i te tono wharangi kotahi, penei i te whakaaturanga i raro nei:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Ko nga ture kei te pikitia i runga ake nei e whai ake nei Tena koa `i18n.site` i te rarangi tuatahi i raro nei me te ingoa rohe kua herea ki a koe.

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

I tua atu, whirihora koa i nga ture keteroki, penei i raro nei, ka tautuhi i te roanga keteroki ki te marama kotahi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Tena koa hurihia te ingoa rohe e rite ana ki te taahiraa tuarua o te pikitia i runga ake nei ki te ingoa rohe kua herea e koe.

#### Te Whakapai Ake I Te Tuku Paetukutuku Ki Te Tuawhenua O Haina

Mena kei te pirangi koe kia pai ake te mahi urunga ki te taiao whatunga o te tuawhenua o Haina, tena koa [rehitatia he ingoa rohe](//beian.aliyun.com) i te tuatahi.

Na, whakamahia te rokiroki `out/ol/htm` o nga kaihoko kapua i te tuawhenua `CDN` Haina +

Ka taea e koe te whakamahi rorohiko mata ki te tuhi ano i te ara ki te urutau ki nga tono wharangi kotahi, penei i [te Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Ka taea te whirihora penei:

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

Na te mea kaore e taea e nga `MX` me nga `CNAME` rekoata te noho tahi, ki te hiahia koe ki te whiwhi i nga imeera ingoa rohe i te wa ano, me mahi tahi koe me `CNAME` tuhi `A` ki te [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

I tua atu, na te mea he tino utu nga utu hokohoko ki tawahi o nga kaihoko kapua i te tuawhenua o Haina, ki te hiahia koe ki te arotau i nga utu, ka taea e koe te whakamahi i [te whakataunga matawhenua kore utu DNS #](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) me te ingoa rohe ritenga a [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (e whakaatuhia ana i raro nei) ki te whakatutuki waka rererangi──Te waka i te tuawhenua o Haina Baidu Cloud `CDN` ka haere nga waka o te ao ki cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

He uaua ake enei otinga arotautanga tukunga, ka whakaurua ki roto i nga upoko motuhake a muri ake nei.

#### Ahuringa Ingoa Rohe Whānui

Mena ka whakamahi koe i te `i18n.site` ki te whakaputa i tetahi paetukutuku hei paetukutuku matua, me whirihora ano koe i te hurihanga rohe-pan, ara, te tuku atu `*.xxx.com` (tae atu ki `www.xxx.com` ) te uru ki `xxx.com` .

Ka taea tenei whakaritenga ma te awhina a Alibaba Cloud `CDN` `EdgeScript` ( [Tuhinga Ingarihi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Tuhinga Haina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Tāpirihia he ingoa rohe ki [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ka tohu `*.xxx.com` ingoa rohe ki Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Hei tauira, `*.i18n.site` te whirihoranga hurihanga ingoa-pan-rohe o te pikitia i runga ake nei:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Tukuna Me Te nginx

Tāpirihia he whirihoranga rite ki enei e whai ake nei i `server` nginx kei hea `/root/i18n/md/out/ol/htm` me huri ki te ara o to kaupapa ake `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Hanganga Whaiaronga

#### Tūmatanui

Ko nga konae pateko o te paetukutuku, penei i te `favicon.ico` `robots.txt` , aha atu.

Ka taea te hanga i nga konae icon me [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Kei raro i te whaiaronga ko nga konae whirihora a `i18n.site` , keteroki [whakamaori](/i18n.site/conf) , aha atu `.i18n`

#### en

Whaiaronga reo puna, e rite ana `.i18n/conf.yml` `fromTo` `en` i te konae whirihoranga

```yaml
i18n:
  fromTo:
    en: zh
```

Tena tirohia te whirihoranga o te whakamaoritanga [i18](/i18/use)

