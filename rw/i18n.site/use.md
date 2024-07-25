# Shyiramo &

## Ikimenyetso

`i18n.site` `i18` [`i18`](/i18/use)

## Shyiramo

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Umushinga Wa Demo

Reka duhere kumushinga wa demo hanyuma twige gukoresha `i18n.site`

Twabanze dukoreshe ububiko bwa demo hanyuma dukore itegeko kuburyo bukurikira:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Abakoresha kumugabane wUbushinwa barashobora:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### Guhindura

Ubwa mbere, andika `md` hanyuma ukore `i18n.site` , izasobanura `en` kuri `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nyuma yo gukora, ubusemuzi na cache dosiye bizakorwa. Nyamuneka wibuke kubishyira mububiko `git add . ` `md` .

### Byibanze

Shyiramo kandi `docker` ( `MAC` barasaba gukoresha [orbstack](https://orbstack.dev) Nkigihe cyo `docker` ).

Noneho, andika `docker` hanyuma ukore `./up.sh` , hanyuma usure kugirango urebe imbere [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Kohereza Ibirimo

Kwemeza [urupapuro rumwe rukoreshwa](https://developer.mozilla.org/docs/Glossary/SPA) mububiko, kandi urupapuro rwinjira kurubuga hamwe nibirimo kurubuga rwoherejwe `i18n.site` .

Nyuma yo gukora ibisobanuro byavuzwe haruguru, `htm` na `v` ububiko buzabyara mububiko `md/out/dev`

Hano `dev` yerekana ko yubatswe hashingiwe kuri dosiye `.i18n/htm/dev.yml` !

: `dev`

`htm` yububiko ni page yinjira kurubuga.

Ububiko burimo ibiri kurubuga hamwe nimero ya verisiyo `v`

Ahantu hambere hazakoporora dosiye zose mububiko utitaye kumero ya verisiyo `out/dev/v/0.1.0`

Kurekura kumugaragaro, dosiye zahinduwe zizimurwa kuri verisiyo nshya yububiko.

#### Koresha -c Kugirango Ugaragaze Dosiye Iboneza

Amadosiye atandukanye azakora ububiko bujyanye nububiko `out`

Kurugero , `.i18n/htm/ol.yml` Bizakora `out/ol` ububiko.

na na `ol.yml` ni Ibisanzwe Iboneza `dev.yml`

`dev` `development`
`ol` `online` `-n` `npm`

Urashobora kandi gukora izindi dosiye ziboneza Koresha `--htm_conf`

urugero:
```
i18n.site --htm_conf yourConfig --save
```

`--save` herekana nimero yo gusohora verisiyo yo gusohora!

#### <a rel=id href="#npm" id="npm"></a> Tangaza ibiri kuri npmjs.com

Gutangaza ibikubiyemo [npmjs.com](//npmjs.com) bisabwe igisubizo gisanzwe (reba [Imbere-Impera Yaboneka](/i18n.site/feature#ha) ).

##### Kurekurwa npm login &

Shyiramo `nodejs` Koresha `npm login` kwinjira.

Hindura `md/.i18n/htm/ol.yml` Hindura `i18n.site` muri `v: //unpkg.com/i18n.site` kuriwe `npm` izina rya paki.

Koresha izina rya pake idakoreshwa kuri [npmjs.com](//npmjs.com) Ukoresheje izina ryurubuga nkizina rya paki.

Mugihe `i18n.site` gutangaza `npm` paki `/.v` **menya neza gukoresha `//unpkg.com/`** nkibibanziriza `v:` agaciro.

Koresha `i18n.site --npm` cyangwa `i18n.site -n` mububiko bwo guhindura no gutangaza `md`

Niba ukoresha ibidukikije bihoraho kugirango utangaze, nta mpamvu yo `nodejs` Gusa wandukure winjiye kandi watangajwe uruhushya `~/.npmrc` kubidukikije.

Niba uhinduye izina rya pake muri `v:` `ol.yml` , nyamuneka **wemeze gusiba `.i18n/v/ol` mbere** hanyuma ubitangaze.

##### Seriveri Ya Porokireri Yatangajwe Na npm

Niba abakoresha mugihugu cyubushinwa bahuye nibibazo byurusobe kandi ntibabashe gutangaza `npm` , barashobora gushiraho ibidukikije bihinduka `https_proxy` kugirango bagene seriveri.

Dufashe ko porokisi ya seriveri yawe ari `7890` Urashobora kwandika:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kwiyakira Wenyine

Niba ushaka kwiyakira-ibirimo, ubanza, `md/.i18n/htm/ol.yml` kandi uhindure `v: //unpkg.com/i18n.site` kuri URL yawe yambere, nka `v: //i18n-v.xxx.com` .

Injira `md` hanyuma ukore

```
i18n.site --htm_conf ol --save
```

cyangwa mu magambo ahinnye

```
i18n.site -c ol -s
```

Noneho, shiraho ibiri mububiko bwa URL inzira yambere yashyizwe muri `v:` `md/out/ol/v`

Hanyuma, **shiraho cache igihe cyinzira irangirira `/.v` `1s`** , bitabaye ibyo ibyasohotse vuba ntibishobora kuboneka ako kanya!

Igihe cache yizindi nzira irashobora gushirwa kumwaka umwe cyangwa irenga kugirango ugabanye ibyifuzo bitari ngombwa.

##### Kwakira Ibikubiyemo Kuri s3

Kwiyakira-ibirimo, usibye gukoresha seriveri yawe bwite, ubundi `CDN` busanzwe ni ugukoresha `S3` +

Urashobora gukoresha `S3` [rclone](https://rclone.org) , hanyuma ukoreshe kandi uhindure inyandiko hepfo, hanyuma wandukure gusa impinduka ziyongera kuri `S3` burigihe utangaje.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Wibuke gushiraho `CDN` Kugirango cache igihe cyinzira irangirira kuri `/.v` ni `1s` , naho ubundi ntushobora kubona ibintu bishya byasohotse ako kanya.

### Gutangaza Urubuga

Urubuga rushobora koherezwa ahantu hose [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) ni amahitamo meza!

Kuberako urubuga rwemeza imyubakire [yimpapuro imwe](https://developer.mozilla.org/docs/Glossary/SPA) , ibuka kwandika inzira ya URL itarimo `index.html` `. `

Urupapuro rwinjira kurubuga rukeneye koherezwa rimwe gusa, kandi nta mpamvu yo gusubiramo urupapuro rwinjira kurubuga kugirango ruvugururwe.

#### Kohereza Kurupapuro Rwa github

Banza [ukande github kugirango ushireho ishyirahamwe](https://github.com/account/organizations/new?plan=free) Izina ryumuryango rikurikira ni `i18n-demo`

Noneho kora ububiko munsi `i18n-demo.github.io` shyirahamwe (Nyamuneka usimbuze `i18n-demo` nizina ryumuryango washizeho):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Mugihe cyo gutangaza ibiri mu ngingo ibanziriza iyi, byakozwe `out/ol/htm` Nyamuneka andika ubu bubiko hanyuma ukore :

```
ln -s index.html 404.html
```


Kuberako `github page` ntabwo ishyigikiye inzira ya URL yandika, so `404.html` ikoreshwa aho.

Noneho koresha itegeko rikurikira `htm` (wibuke gusimbuza `i18n-demo/i18n-demo.github.io.git` na aderesi yawe bwite) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Nyuma yo gusunika kode, tegereza `github page` yo gukora neza (nkuko bigaragara hano), hanyuma urashobora kuyigeraho!

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kurupapuro rwa demo nyamuneka reba:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Kohereza Kurupapuro Rwibicu

[cloudflare page](//pages.cloudflare.com) na `github page` itanga inzira yo kwandika kandi irangwa ninshuti kubushinwa kandi birashoboka cyane.

Koherezwa `cloudflare page` bishingiye kubyoherejwe `github page` hejuru.

Kora umushinga uhuze ububiko bwavuzwe haruguru `i18n-demo.github.io`

Inzira irerekanwa mumashusho hepfo:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Nyamuneka `Add Account` kugirango utange uburenganzira kuri `i18n-demo` organisation!

Niba warahambiriye ububiko bwundi muryango, urashobora gukanda `Add Account` kugirango ubyemerere kabiri mbere yuko ishyirahamwe rishya ryerekanwa.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ibikurikira `i18n-demo.github.io` ububiko, hanyuma ukande `Begin setup` , hanyuma ukoreshe indangagaciro zintambwe zikurikira.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nyuma yo guhambira kunshuro yambere, ugomba gutegereza iminota mike mbere yuko ubigeraho.

Nyuma yo koherezwa, urashobora guhuza izina ryigenga.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Nyuma yo guhuza izina ryigenga ryihariye, nyamuneka jya mwizina rya domaine kugirango ugene inzira yandika yurupapuro rumwe rwa porogaramu, nkuko bigaragara hano:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Amategeko ari ku ishusho hejuru ni aya akurikira. Nyamuneka usimbuze `i18n.site`

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

Wongeyeho, nyamuneka shiraho amategeko ya cache, nkuko bigaragara hano hepfo, hanyuma ushireho cache igihe cyukwezi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Nyamuneka hindura izina rya domaine rihuye nintambwe ya kabiri mwishusho hejuru kurizina rya domaine wahambiriye.

#### Kunoza Uburyo Bwo Kohereza Urubuga Mubushinwa

Niba ushaka kubona imikorere myiza yimikorere mubidukikije byu Bushinwa, nyamuneka [iyandikishe izina rya domaine](//beian.aliyun.com) .

Noneho `CDN` koresha `out/ol/htm` cyabitswe n'abacuruzi b'igicu mugihugu cy'Ubushinwa +

Urashobora gukoresha computing computing kugirango wandike inzira yo guhuza na page imwe ya porogaramu, nka [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Irashobora gushyirwaho gutya:

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

`MX` inyandiko na `CNAME` inyandiko zidashobora kubana, niba ushaka kwakira imeri yizina rya imeri icyarimwe, ugomba gufatanya [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) kugirango uhindure `CNAME` muri `A` inyandiko!

Byongeye kandi, kubera ko amafaranga yo mu mahanga yinjira mu mahanga agurisha ibicuruzwa mu gihugu cy’Ubushinwa ahenze cyane, niba ushaka kunoza ibiciro, urashobora gukoresha [igicu cya DNS ku buntu](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) n’izina rya domeni (nkuko bigaragara hano) kugirango ubigereho kugendesha ibinyabiziga──Ibinyabiziga byo ku mugabane w'Ubushinwa Baidu Igicu `CDN` traffic mpuzamahanga igenda cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Izi gahunda zo gukoresha neza ibisubizo biragoye kandi bizatangizwa mubice bitandukanye mugihe kizaza.

#### Izina Rusange Ryerekanwe

Niba `i18n.site` kugirango ubyare urubuga nkurubuga rwawe nyamukuru, mubisanzwe ugomba gushiraho pan-domain redirection, ni ukuvuga, redirect `*.xxx.com` (harimo `www.xxx.com` ) kwinjira kuri `xxx.com` .

Iki cyifuzo gishobora kugerwaho hifashishijwe `EdgeScript` cya Alibaba `CDN` ( [inyandiko yicyongereza](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Inyandiko yubushinwa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ongeraho izina rya domaine muri [CDN ya Alibaba](https://cdn.console.aliyun.com/domain/list) hanyuma werekane izina `*.xxx.com` domaine kuri `CNAME` `CDN` Alibaba.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Kurugero, pan-domaine izina ryo kwerekera iboneza `*.i18n.site` shusho hejuru ni nkibi bikurikira:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Kohereza Hamwe Na nginx

Nyamuneka ongeraho iboneza risa n'ibi bikurikira mu `server` nginx aho `/root/i18n/md/out/ol/htm` nyamuneka uhindure inzira y'umushinga wawe `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Imiterere y'Ubuyobozi

#### Rusange

Amadosiye ahamye yurubuga, nka `favicon.ico` `robots.txt` , Nibindi.

Agashusho dosiye hano irashobora kubyara hamwe [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Ububiko bwururimi rwinkomoko, bihuye `.i18n/conf.yml` `fromTo` `en` muri dosiye iboneza

```yaml
i18n:
  fromTo:
    en: zh
```

Nyamuneka reba iboneza ry'ubuhinduzi [i18](/i18/use)

