# Sakinisha &

## Tokeni Ya Usanidi

`i18n.site` ina zana `i18` ya kutafsiri iliyojengewa ndani Tafadhali [bofya hapa ili kurejelea hati `i18` ili kusanidi tokeni ya ufikiaji](/i18/use) .

## Sakinisha

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Mradi Wa Onyesho

Wacha tuanze na mradi wa onyesho ili tujifunze jinsi ya kutumia `i18n.site` .

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

Jina la saraka la kisanii `demo.i18n.site` cha msingi cha msimbo lazima liwe `md` ili kuwezesha onyesho la kuchungulia la ndani na `docker` .

### Kutafsiri

Kwanza, ingiza saraka `md` na uendesha `i18n.site` , ambayo itatafsiri `en` hadi `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Baada ya kuendesha, faili za tafsiri na kache zitatolewa. Tafadhali kumbuka `git add . ` kwenye hifadhi katika saraka `md` .

### Muhtasari Wa Ndani

Sakinisha na uanze `docker` ( Mtumiaji `MAC` anapendekeza kutumia [orbstack](https://orbstack.dev) kama muda wa utekelezaji wa `docker` ).

Kisha, ingiza saraka `docker` na uendeshe `./up.sh` , na kisha tembelea [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Chapisha Maudhui

`i18n.site` inachukua usanifu [wa programu ya ukurasa mmoja](https://developer.mozilla.org/docs/Glossary/SPA) , na ukurasa wa kuingilia wa tovuti na maudhui ya tovuti hutumwa kwa kujitegemea.

Baada ya kutekeleza tafsiri iliyo hapo juu, saraka `htm` na `v` zitatolewa chini ya saraka `md/out/dev` .

Hapa, `dev` inamaanisha kuwa imejengwa kulingana na faili `.i18n/htm/dev.yml` ya usanidi.

saraka `dev` :

Saraka `htm` ni ukurasa wa kuingilia wa tovuti.

Saraka `v` ina maudhui ya tovuti yenye nambari za toleo.

Onyesho la kukagua la ndani halijali nambari ya toleo na litanakili faili zote kwenye saraka `out/dev/v/0.1.0` .

Kwa toleo rasmi, faili zilizobadilishwa zitanakiliwa kwenye saraka ya nambari ya toleo jipya.

#### Tumia -c Kutaja Faili Ya Usanidi

Faili tofauti za usanidi zitaunda saraka zinazolingana katika saraka `out` .

Kwa mfano, `.i18n/htm/ol.yml` itaunda saraka `out/ol` .

`dev.yml` na `ol.yml` ni usanidi chaguo-msingi.

`dev` ni ufupisho wa `development` , inayoonyesha mazingira ya uendelezaji, inayotumiwa kwa uhakiki wa ndani, na pia ni faili ya usanidi chaguo-msingi.
`ol` ni kifupi cha `online` , kinachoonyesha mazingira ya mtandaoni, ambayo hutumiwa kwa ajili ya kutolewa rasmi Pia ni faili ya usanidi chaguo-msingi wakati wa kutumia vigezo vya mstari wa amri `-n` hadi `npm` ili kutolewa.

Unaweza pia kuunda faili zingine za usanidi Tumia `--htm_conf` kwenye mstari wa amri ili kutaja jina la faili la usanidi la kutumia:

kwa mfano:
```
i18n.site --htm_conf yourConfig --save
```

Hapa `--save` inawakilisha nambari ya toleo la toleo la sasisho.

#### <a rel=id href="#npm" id="npm"></a> Chapisha maudhui kwa npmjs.com

Kuchapisha [maudhui](/i18n.site/feature#ha) kwa [npmjs.com](//npmjs.com)

##### Kutolewa npm login &

Sakinisha `nodejs` , ingia na `npm login` .

Hariri `md/.i18n/htm/ol.yml` na ubadilishe `i18n.site` kati ya `v: //unpkg.com/i18n.site` hadi jina lako la kifurushi `npm` .

Tumia tu jina la kifurushi kisicho na mtu kwenye [npmjs.com](//npmjs.com)

Unapochapisha kulingana na kifurushi `npm` , **hakikisha kuwa unatumia `//unpkg.com/` kwa** kiambishi awali cha `v:` thamani `i18n.site` imeboresha maalum wakati wa akiba ya `/.v` chini ya njia hii ya kiambishi awali ili kufikia utazamaji wa matoleo mapya kwa wakati.

Endesha `i18n.site --npm` au `i18n.site -n` katika saraka `md` ili kutafsiri na kuchapisha.

Ukitumia mazingira ya ujumuishaji unaoendelea kuchapisha, hakuna haja ya kusakinisha `nodejs` Nakili tu ruhusa za kuingia na kuchapisha `~/.npmrc` kwa mazingira.

Ukibadilisha jina la kifurushi cha `v:` kati ya `ol.yml` , tafadhali **hakikisha kuwa umefuta `.i18n/v/ol` kwanza** kisha uchapishe.

##### Seva Ya Proksi Iliyochapishwa Na npm

Iwapo watumiaji nchini Uchina Bara watakumbana na matatizo ya mtandao na hawawezi kuchapisha vifurushi `npm` , wanaweza kuweka kigezo cha `https_proxy` cha mazingira ili kusanidi seva mbadala.

Kwa kudhani kuwa bandari yako ya seva ya wakala ni `7890` , unaweza kuandika:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Maudhui Ya Kujisimamia

Ikiwa ungependa kupangisha maudhui yako mwenyewe, kwanza hariri `md/.i18n/htm/ol.yml` na ubadilishe `v: //unpkg.com/i18n.site` hadi kiambishi awali cha URL yako, kama vile `v: //i18n-v.xxx.com` .

Ingiza saraka `md` na uendeshe

```
i18n.site --htm_conf ol --save
```

au ufupisho

```
i18n.site -c ol -s
```

Kisha, sanidi yaliyomo kwenye saraka `md/out/ol/v` kwa njia ya kiambishi awali cha URL iliyowekwa `v:` .

Hatimaye, **sanidi muda wa kache wa njia inayoishia `/.v` hadi `1s`** , vinginevyo maudhui mapya hayawezi kufikiwa mara moja.

Muda wa akiba kwa njia zingine unaweza kuwekwa hadi mwaka mmoja au zaidi ili kupunguza maombi yasiyo ya lazima.

##### Panga Maudhui Kwa s3

Ili kujipatia maudhui, pamoja na kutumia seva yako mwenyewe, chaguo jingine `CDN` kawaida ni kutumia `S3` +

Unaweza kutumia [rclone](https://rclone.org) kuingia kwenye seva `S3` , kisha urejelee na urekebishe hati ifuatayo, na unakili mabadiliko ya nyongeza hadi `S3` kwa kila toleo.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kumbuka kusanidi `CDN` ili muda wa kache wa njia inayoishia `/.v` ni `1s` , vinginevyo maudhui mapya hayawezi kufikiwa mara moja.

### Kuchapisha Tovuti

Tovuti inaweza kutumwa popote [github page](https://pages.github.com) na [cloudflare page](https://pages.cloudflare.com) ni chaguo nzuri.

Kwa sababu tovuti hutumia usanifu [wa programu ya ukurasa mmoja](https://developer.mozilla.org/docs/Glossary/SPA) , kumbuka kuandika upya njia za URL ambazo hazina `. ` hadi `index.html` .

Ukurasa wa ingizo la tovuti unahitaji kutumwa mara moja tu, na hakuna haja ya kupeleka upya ukurasa wa ingizo la tovuti kwa masasisho ya maudhui yanayofuata.

#### Tumia Kwenye Ukurasa Wa github

Kwanza [bofya github ili kuunda shirika](https://github.com/account/organizations/new?plan=free) Jina lifuatalo la shirika ni `i18n-demo` kama mfano.

Kisha unda ghala `i18n-demo.github.io` chini ya shirika hili (tafadhali badilisha `i18n-demo` na jina la shirika ulilounda):

![](https://p.3ti.site/1721098657.avif)

Wakati wa kuchapisha maudhui katika makala yaliyotangulia, `out/ol/htm` imetolewa Tafadhali ingiza saraka hii na uendeshe :

```
ln -s index.html 404.html
```


Kwa sababu `github page` haitumii uandikaji upya wa njia ya URL, `404.html` inatumika badala yake.

Kisha endesha amri ifuatayo kwenye saraka `htm` (kumbuka kubadilisha `i18n-demo/i18n-demo.github.io.git` na anwani yako ya ghala) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Baada ya kusukuma msimbo, subiri utumaji wa `github page` uendeshwe kwa mafanikio (kama inavyoonyeshwa hapa chini) kabla ya kuufikia.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Kwa ukurasa wa onyesho tafadhali tazama:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Tumia Kwenye Ukurasa Wa cloudflare

[cloudflare page](//pages.cloudflare.com) Ikilinganishwa na `github page` , inatoa njia ya kuandika upya na ni rafiki zaidi kwa China bara na inapendekezwa kutumia.

Utumaji wa `cloudflare page` kwa kawaida hutegemea utumaji wa `github page` hapo juu.

Unda mradi na ufunge ghala `i18n-demo.github.io` hapo juu.

Mchakato unaonyeshwa kwenye takwimu hapa chini:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Tafadhali bofya `Add Account` ili kutoa idhini ya kufikia shirika `i18n-demo` .

Ikiwa umefunga ghala la shirika lingine, huenda ukahitajika kubofya `Add Account` mara mbili ili kuidhinisha mara mbili kabla ya shirika jipya kuonyeshwa.

![](https://p.3ti.site/1721118306.avif)

Ifuatayo, chagua ghala `i18n-demo.github.io` , kisha ubofye `Begin setup` , na utumie maadili chaguo-msingi kwa hatua zinazofuata.

![](https://p.3ti.site/1721118490.avif)

Baada ya kuifunga kwa mara ya kwanza, unahitaji kusubiri dakika chache kabla ya kuifikia.

Baada ya kupelekwa, unaweza kufunga jina la kikoa maalum.

![](https://p.3ti.site/1721119459.avif)

Baada ya kufunga jina maalum la kikoa, tafadhali nenda kwa jina la kikoa ili kusanidi uandikaji upya wa njia ya programu ya ukurasa mmoja, kama inavyoonyeshwa hapa chini:

![](https://p.3ti.site/1721119320.avif)

Sheria katika picha hapo juu ni kama ifuatavyo. Tafadhali badilisha `i18n.site` katika mstari wa kwanza hapa chini na jina la kikoa ulilofunga.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Kwa kuongeza, tafadhali sanidi sheria za kache, kama inavyoonyeshwa hapa chini, na weka muda wa kache hadi mwezi mmoja.

![](https://p.3ti.site/1721125111.avif)

Tafadhali badilisha jina la kikoa linalolingana katika hatua ya pili kwenye picha hapo juu hadi jina la kikoa ulilofunga.

#### Kuboresha Uwekaji Wa Tovuti Nchini China Bara

Iwapo ungependa kupata utendakazi bora wa ufikivu katika mazingira ya mtandao ya Uchina Bara, tafadhali [sajili jina la kikoa](//beian.aliyun.com) kwanza.

Kisha, tumia hifadhi ya kifaa cha wachuuzi wa wingu nchini + `CDN` Sambaza maudhui yafuatayo `out/ol/htm` .

Unaweza kutumia kompyuta makali kuandika upya njia ili kukabiliana na programu za ukurasa mmoja Kwa mfano, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) inaweza kusanidiwa kama hii:

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

Kwa sababu rekodi `MX` na rekodi `CNAME` haziwezi kuishi pamoja, ikiwa unataka kupokea barua pepe za jina la kikoa kwa wakati mmoja, unahitaji kushirikiana na [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) hadi kiwango cha `CNAME` kuwa rekodi ya `A` .

Zaidi ya hayo, kwa sababu ada za trafiki za ng'ambo za wachuuzi wa wingu nchini Uchina ni ghali, ikiwa ungependa kuongeza gharama, unaweza kutumia [azimio la kijiografia la DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) na jina maalum la [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) la kikoa (kama inavyoonyeshwa hapa chini) ili kufanikiwa trafiki diversion──Trafiki katika China Bara Baidu Cloud `CDN` , trafiki kimataifa huenda cloudflare .

![](https://p.3ti.site/1721119788.avif)

Suluhu hizi za utumiaji bora ni ngumu zaidi na zitaanzishwa katika sura tofauti katika siku zijazo.

#### Uelekezaji Upya Wa Jina La Kikoa Cha Kawaida

Ikiwa unatumia `i18n.site` kutengeneza tovuti kama tovuti yako kuu, kwa kawaida unahitaji kusanidi uelekezaji upya wa kikoa, yaani, kuelekeza ufikiaji wa `*.xxx.com` (pamoja na `www.xxx.com` ) hadi `xxx.com` .

Sharti hili linaweza kufikiwa kwa usaidizi wa Alibaba Cloud `CDN` `EdgeScript` ( [hati ya Kiingereza](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Hati ya Kichina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ongeza jina la kikoa katika [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) na uelekeze jina la kikoa `*.xxx.com` hadi `CNAME` kwenye Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Kwa mfano, usanidi wa uelekezaji upya wa jina la kikoa cha `*.i18n.site` kwenye picha hapo juu ni kama ifuatavyo.

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Sambaza Na nginx

Tafadhali ongeza usanidi sawa na ufuatao katika aya ya `server` ya nginx Tafadhali badilisha `/root/i18n/md/out/ol/htm` hadi njia ya mradi wako `out/ol/htm` :

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

#### `public`

Faili tuli za tovuti, kama vile `favicon.ico` , `robots.txt` , nk.

Faili za ikoni hapa zinaweza kutengenezwa na [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Chini ya saraka `.i18n` kuna faili za usanidi, akiba ya tafsiri, n.k. ya `i18n.site` Tazama sura inayofuata ["Usanidi"](/i18n.site/conf) kwa maelezo.

#### `en`

Saraka ya lugha ya asili, inayolingana na `en` kati ya `fromTo` kati ya faili `.i18n/conf.yml` ya usanidi

```yaml
i18n:
  fromTo:
    en: zh
```

Tafadhali rejelea usanidi wa tafsiri [i18](/i18/use)