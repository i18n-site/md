# Sakinisha &

## Tokeni Ya Usanidi

`i18n.site` Zana ya `i18` ya kutafsiri imepachikwa, tafadhali [bofya hapa ili kurejelea hati ya `i18` ili kusanidi tokeni ya ufikiaji](/i18/use) .

## Sakinisha

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Mradi Wa Onyesho

Wacha tuanze na mradi wa onyesho na tujifunze jinsi ya kutumia `i18n.site`

Kwanza tunaunganisha hazina ya onyesho na kuendesha amri kama ifuatavyo:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Watumiaji nchini China Bara wanaweza:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` Jina la saraka la kisanii msingi wa msimbo lazima liwe `md` ili kuwezesha onyesho la kuchungulia la ndani na `docker` .

### Kutafsiri

Kwanza, ingiza `md` na uendeshe `i18n.site` , ambayo itatafsiri `en` kwa `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Baada ya kuendesha, faili za tafsiri na kache zitatolewa. Tafadhali kumbuka kuziongeza kwenye hifadhi `git add . ` katika `md` .

### Muhtasari Wa Ndani

Sakinisha na `docker` ( `MAC` wanapendekeza kutumia [orbstack](https://orbstack.dev) kama wakati wa kukimbia wa `docker` ).

Kisha, ingiza `docker` na uendeshe `./up.sh` , na kisha tembelea [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Chapisha Maudhui

`i18n.site` Inakubali usanifu [wa maombi ya ukurasa mmoja](https://developer.mozilla.org/docs/Glossary/SPA) , na ukurasa wa kuingilia wa tovuti na maudhui ya tovuti hutumwa kwa kujitegemea.

Baada ya kuendesha tafsiri hapo juu, saraka za `htm` na `v` zitatolewa kwenye `md/out/dev` .

Hapa, `dev` inaonyesha kuwa imejengwa kulingana na `.i18n/htm/dev.yml` .

Chini : yaliyomo `dev`

`htm` Chini ya saraka kuna ukurasa wa kuingilia wa tovuti.

`v` Saraka ina maudhui ya tovuti yenye nambari ya toleo.

Onyesho la kukagua la ndani litanakili faili zote kwenye `out/dev/v/0.1.0` bila kujali nambari ya toleo.

Kwa toleo rasmi, faili zilizobadilishwa zitanakiliwa kwenye saraka ya nambari ya toleo jipya.

#### Tumia -c Kutaja Faili Ya Usanidi

Faili tofauti za usanidi zitaunda saraka zinazolingana chini ya `out` .

Kwa mfano, `.i18n/htm/ol.yml` itaunda saraka `out/ol` .

`dev.yml` na `ol.yml` ndio usanidi chaguo-msingi.

`dev` ni ufupisho wa `development` , ambayo inawakilisha mazingira ya uendelezaji, hutumiwa kwa uhakiki wa ndani, na pia ni faili ya usanidi chaguo-msingi.
`ol` ni ufupisho wa `online` , ambayo inawakilisha mazingira ya mtandaoni, hutumiwa kwa ajili ya kutolewa rasmi, na pia ni faili ya usanidi chaguo-msingi wakati wa kuchapisha hadi `npm` kwa kutumia kigezo cha mstari wa amri `-n` .

Unaweza pia kuunda faili zingine za usanidi `--htm_conf` kwenye mstari wa amri ili kutaja jina la faili ya usanidi:

kwa mfano:
```
i18n.site --htm_conf yourConfig --save
```

`--save` inaonyesha nambari ya toleo la sasisho.

#### <a rel=id href="#npm" id="npm"></a> Chapisha maudhui kwa npmjs.com

Kuchapisha [maudhui](/i18n.site/feature#ha) kwa [npmjs.com](//npmjs.com)

##### Kutolewa npm login &

Sakinisha `nodejs` tumia `npm login` kuingia.

Hariri `md/.i18n/htm/ol.yml` badilisha `i18n.site` in `v: //unpkg.com/i18n.site` iwe yako mwenyewe `npm` jina la kifurushi.

Tumia tu jina la kifurushi kisicho na mtu kwenye [npmjs.com](//npmjs.com)

**`//unpkg.com/`** `i18n.site` `v:` `npm` `/.v`

Endesha `i18n.site --npm` au `i18n.site -n` katika `md` ili kutafsiri na kuchapisha.

Ikiwa unatumia mazingira ya ujumuishaji unaoendelea kuchapisha, hakuna haja ya kuisakinisha `nodejs` Nakili tu idhini iliyoingia na iliyochapishwa `~/.npmrc` kwa mazingira.

Ukibadilisha jina la kifurushi katika `v:` `ol.yml` , tafadhali **hakikisha kuwa umefuta `.i18n/v/ol` kwanza** kisha ukichapishe.

##### Seva Ya Proksi Iliyochapishwa Na npm

Iwapo watumiaji nchini China bara watakumbana na matatizo ya mtandao na hawawezi kuchapisha kifurushi cha `npm` , wanaweza kuweka kigezo cha mazingira `https_proxy` ili kusanidi seva mbadala.

Kwa kudhani kuwa bandari yako ya seva ya wakala ni `7890` unaweza kuandika:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Maudhui Ya Kujisimamia

Ikiwa unataka kupangisha maudhui yako, kwanza, `md/.i18n/htm/ol.yml` na ubadilishe `v: //unpkg.com/i18n.site` hadi kiambishi awali cha URL, kama vile `v: //i18n-v.xxx.com` .

Ingiza `md` na uendeshe

```
i18n.site --htm_conf ol --save
```

au ufupisho

```
i18n.site -c ol -s
```

Kisha, sanidi yaliyomo kwenye `md/out/ol/v` kwa njia ya kiambishi awali ya URL iliyowekwa kwenye `v:` .

Hatimaye, **sanidi muda wa kache wa njia inayoisha `/.v` `1s`** , vinginevyo maudhui mapya hayawezi kufikiwa mara moja.

Muda wa akiba kwa njia zingine unaweza kuwekwa hadi mwaka mmoja au zaidi ili kupunguza maombi yasiyo ya lazima.

##### Panga Maudhui Kwa s3

Kujipangia maudhui, pamoja na kutumia seva yako mwenyewe, + jingine `CDN` kawaida ni kutumia `S3`

Unaweza kutumia seva [rclone](https://rclone.org) `S3` , kisha urejelee na urekebishe hati iliyo hapa chini, na unakili mabadiliko ya ziada kwa `S3` kila wakati unapochapisha.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kumbuka kusanidi `CDN` ili muda wa kache wa njia inayoisha `/.v` ni `1s` , vinginevyo hutaweza kufikia maudhui mapya mara moja.

### Kuchapisha Tovuti

Tovuti inaweza kutumwa popote [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) ni chaguo nzuri.

Kwa sababu tovuti inachukua usanifu wa [programu ya ukurasa mmoja](https://developer.mozilla.org/docs/Glossary/SPA) , `index.html` kuandika upya njia ya URL ambayo haina `. `

Ukurasa wa ingizo la tovuti unahitaji kutumwa mara moja tu, na hakuna haja ya kupeleka upya ukurasa wa ingizo la tovuti kwa masasisho ya maudhui yanayofuata.

#### Tumia Kwenye Ukurasa Wa github

Kwanza [bofya github ili kuunda shirika](https://github.com/account/organizations/new?plan=free) Jina lifuatalo la shirika ni `i18n-demo`

Kisha unda ghala chini ya shirika hili `i18n-demo.github.io` (Tafadhali badilisha `i18n-demo` na jina la shirika ulilounda):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Wakati wa kuchapisha maudhui katika makala yaliyotangulia, yametolewa `out/ol/htm` Tafadhali ingiza saraka hii na uendeshe :

```
ln -s index.html 404.html
```


Kwa sababu `github page` haiauni uandikaji upya wa njia ya URL, kwa hivyo `404.html` inatumika badala yake.

Kisha endesha amri ifuatayo kwenye `htm` (kumbuka kubadilisha `i18n-demo/i18n-demo.github.io.git` na anwani yako ya ghala) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Baada ya kusukuma msimbo, subiri kupelekwa kwa `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kwa ukurasa wa onyesho tafadhali tazama:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Tumia Kwenye Ukurasa Wa cloudflare

[cloudflare page](//pages.cloudflare.com) Ikilinganishwa na `github page` inatoa njia ya kuandika upya na ni rafiki zaidi kwa China bara na inapendekezwa kutumia.

`cloudflare page` Usambazaji kwa kawaida hutegemea utumaji wa `github page` hapo juu.

Unda mradi na ufunge ghala hapo juu `i18n-demo.github.io`

Mchakato unaonyeshwa kwenye takwimu hapa chini:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Tafadhali `Add Account` ili kutoa ufikiaji kwa `i18n-demo` .

Ikiwa umefunga ghala la shirika lingine, unaweza kuhitaji `Add Account` mara mbili ili kuidhinisha mara mbili kabla ya shirika jipya kuonyeshwa.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Ifuatayo `i18n-demo.github.io` chagua Ghala, kisha ubofye `Begin setup` , na utumie maadili chaguo-msingi kwa hatua zinazofuata.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Baada ya kuifunga kwa mara ya kwanza, unahitaji kusubiri dakika chache kabla ya kuifikia.

Baada ya kupelekwa, unaweza kufunga jina la kikoa maalum.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Baada ya kufunga jina maalum la kikoa, tafadhali nenda kwa jina la kikoa ili kusanidi uandikaji upya wa njia ya programu ya ukurasa mmoja, kama inavyoonyeshwa hapa chini:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Sheria katika picha hapo juu ni kama ifuatavyo. Tafadhali `i18n.site` katika mstari wa kwanza hapa chini na jina la kikoa limefungwa kwako

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

Kwa kuongeza, tafadhali sanidi sheria za kache, kama inavyoonyeshwa hapa chini, na weka muda wa kache hadi mwezi mmoja.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Tafadhali badilisha jina la kikoa linalolingana katika hatua ya pili kwenye picha hapo juu hadi jina la kikoa ulilofunga.

#### Kuboresha Uwekaji Wa Tovuti Nchini China Bara

Iwapo ungependa kupata utendakazi bora wa ufikivu katika mazingira ya mtandao ya Uchina Bara, tafadhali [sajili jina la kikoa](//beian.aliyun.com) kwanza.

Kisha, tumia uhifadhi `CDN` vitu vya wachuuzi `out/ol/htm` wingu nchini Uchina +

Unaweza kutumia kompyuta makali kuandika upya njia ya kuendana na programu za ukurasa mmoja, kama vile [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Kwa `MX` rekodi na `CNAME` rekodi haziwezi kuwepo, ikiwa unataka kupokea barua pepe za jina la kikoa kwa wakati mmoja, unahitaji kushirikiana na [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ili kubana `CNAME` katika `A` rekodi.

Zaidi ya hayo, kwa sababu ada za trafiki za ng'ambo za wachuuzi wa wingu nchini Uchina ni ghali, ikiwa ungependa kuongeza gharama, unaweza kutumia [azimio la kijiografia la DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) na jina maalum la [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) la kikoa (kama inavyoonyeshwa hapa chini) ili kufanikiwa trafiki diversion──Trafiki katika China bara Baidu Cloud `CDN` trafiki kimataifa huenda cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Suluhu hizi za utumiaji bora ni ngumu zaidi na zitaanzishwa katika sura tofauti katika siku zijazo.

#### Uelekezaji Upya Wa Jina La Kikoa Cha Kawaida

Ikiwa unatumia `i18n.site` kutengeneza tovuti kama tovuti yako kuu, kawaida unahitaji kusanidi uelekezaji upya wa kikoa, yaani, kuelekeza upya `*.xxx.com` (pamoja na `www.xxx.com` ) ufikiaji wa `xxx.com` .

Sharti hili linaweza kufikiwa kwa usaidizi wa `EdgeScript` Alibaba Cloud `CDN` [hati ya Kiingereza](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Hati ya Kichina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ongeza jina la kikoa katika [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) na uelekeze `*.xxx.com` kikoa kwa Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Kwa mfano, usanidi wa uelekezaji upya wa jina la `*.i18n.site` kwenye picha hapo juu ni kama ifuatavyo.

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Sambaza Na nginx

Tafadhali ongeza usanidi sawa na ufuatao katika `server` nginx ambapo `/root/i18n/md/out/ol/htm` tafadhali ubadilishe hadi njia ya mradi wako `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Muundo Wa Saraka

#### Umma

Faili tuli za tovuti, kama vile `favicon.ico` `robots.txt` , nk.

Faili za ikoni hapa zinaweza kutengenezwa na [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Chini ya saraka kuna faili za usanidi za `i18n.site` , akiba ya tafsiri, n.k. Tazama sura inayofuata ["Usanidi"](/i18n.site/conf) kwa maelezo.

#### Sw

Saraka ya lugha ya asili, inayolingana `.i18n/conf.yml` `fromTo` `en` katika faili ya usanidi

```yaml
i18n:
  fromTo:
    en: zh
```

Tafadhali rejelea usanidi wa tafsiri [i18](/i18/use)

