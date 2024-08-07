# &

## Կազմաձևման Նշան

`i18` թարգմանության գործիքը ներկառուցված է, խնդրում ենք սեղմել այստեղ `i18n.site` [մուտքի նշանը կարգավորելու համար `i18` փաստաթուղթը կարգավորելու համար](/i18/use) :

## Տեղադրեք

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Դեմո Նախագիծ

Եկեք սկսենք ցուցադրական նախագծից և սովորենք, թե ինչպես օգտագործել `i18n.site`

Մենք նախ կլոնավորում ենք ցուցադրական պահոցը և գործարկում ենք հրամանը հետևյալ կերպ.

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Մայրցամաքային Չինաստանում օգտագործողները կարող են.

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Կոդի բազային կլոնի գրացուցակի անունը պետք է լինի `md` `demo.i18n.site` որպեսզի հեշտացվի տեղական նախադիտումը `docker` -ով:

### Թարգմանել

Նախ, մուտքագրեք `md` և գործարկեք `i18n.site` , որը կթարգմանի `en` -ը `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Գործարկումից հետո կստեղծվեն թարգմանության `git add . ` քեշի `md` :

### Տեղական Նախադիտում

Տեղադրեք և սկսեք `docker` `MAC` խորհուրդ են տալիս օգտագործել [orbstack](https://orbstack.dev) որպես `docker` գործարկման ժամանակ):

Այնուհետև մուտքագրեք `docker` և գործարկեք `./up.sh` , այնուհետև այցելեք [https://127.0.0.1](https://127.0.0.1) նախադիտելու համար:

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Տեղադրեք Բովանդակություն

Ընդունում `i18n.site` [մեկ էջանոց հավելվածի](https://developer.mozilla.org/docs/Glossary/SPA) ճարտարապետություն, և կայքի մուտքի էջը և կայքի բովանդակությունը տեղադրվում են ինքնուրույն:

Վերոնշյալ թարգմանությունը գործարկելուց հետո `md/out/dev` կստեղծվեն `htm` և `v` գրացուցակներ:

Այստեղ, `dev` ցույց է տալիս, որ այն կառուցված է `.i18n/htm/dev.yml` կոնֆիգուրացիայի ֆայլի հիման վրա:

: տակ `dev`

`htm` տակ գտնվում է կայքի մուտքի էջը:

`v` պարունակում է կայքի բովանդակություն տարբերակի համարով:

Տեղական նախադիտումը կպատճի բոլոր ֆայլերը `out/dev/v/0.1.0` ՝ անկախ տարբերակի համարից:

Պաշտոնական թողարկման համար փոխված ֆայլերը կպատճենվեն նոր տարբերակի համարների գրացուցակում:

#### Կազմաձևման Ֆայլը Նշելու Համար Օգտագործեք -c

Տարբեր կազմաձևման ֆայլերը կստեղծեն համապատասխան դիրեկտորիաներ `out` տակ:

Օրինակ, `.i18n/htm/ol.yml` կստեղծի `out/ol` գրացուցակ:

`dev.yml` և `ol.yml` լռելյայն կազմաձևերն են:

`dev` -ը `development` -ի հապավումն է, որը ներկայացնում է զարգացման միջավայրը, օգտագործվում է տեղային նախադիտման համար և նաև հանդիսանում է կանխադրված կազմաձևման ֆայլը:
`ol` -ը `online` -ի հապավումն է, որը ներկայացնում է առցանց միջավայրը, օգտագործվում է պաշտոնական թողարկման համար և նաև հանդիսանում է լռելյայն կազմաձևման ֆայլը `npm` օգտագործելով `-n` հրամանի տող.

Կարող եք նաև ստեղծել այլ կազմաձևման ֆայլեր հրամանի տողում `--htm_conf` որպեսզի նշեք կազմաձևման ֆայլի անունը.

օրինակ:
```
i18n.site --htm_conf yourConfig --save
```

`--save` նշվում է թարմացման թողարկման տարբերակի համարը:

#### <a rel=id href="#npm" id="npm"></a> Հրապարակեք բովանդակությունը npmjs.com կայքում

[npmjs.com](//npmjs.com) հրապարակումը առաջարկվող լռելյայն լուծումն է (տե՛ս [Front-end High Availability](/i18n.site/feature#ha) ):

##### npm login &

Տեղադրեք `nodejs` ​​մուտք գործելու համար օգտագործեք `npm login` :

Խմբագրել `md/.i18n/htm/ol.yml` փոխեք `i18n.site` `v: //unpkg.com/i18n.site` -ում ձեր սեփականի `npm` փաթեթի անունը.

Պարզապես օգտագործեք չզբաղեցրած փաթեթի անունը [npmjs.com](//npmjs.com)

`npm` `/.v` վրա `i18n.site` **համոզվեք, որ օգտագործեք `//unpkg.com/`** որպես `v:` արժեքի նախածանց:

Գործարկեք `i18n.site --npm` կամ `i18n.site -n` `md` ՝ թարգմանելու և հրապարակելու համար:

Եթե ​​դուք օգտագործում եք շարունակական ինտեգրման միջավայր՝ այն տեղադրելու կարիք չկա `nodejs` պարզապես մուտքագրված և հրապարակված թույլտվությունը `~/.npmrc` պատճենեք միջավայրում:

Եթե ​​դուք փոփոխում եք փաթեթի անունը `v:` in `ol.yml` խնդրում ենք **համոզվեք, որ նախ ջնջեք `.i18n/v/ol`** , ապա հրապարակեք այն:

##### Պրոքսի Սերվեր, Որը Հրապարակվել Է Npm-Ի Կողմից

Եթե ​​մայրցամաքային Չինաստանում օգտատերերը բախվում են ցանցային խնդիրների և չեն կարողանում հրապարակել `npm` , նրանք կարող են սահմանել `https_proxy` միջավայրի փոփոխականը՝ պրոքսի սերվերը կարգավորելու համար:

Ենթադրելով, որ ձեր պրոքսի սերվերի պորտը `7890` կարող եք գրել.

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Ինքնահոսթինգային Բովանդակություն

Եթե ​​ցանկանում եք ինքնուրույն հյուրընկալել բովանդակությունը, նախ `md/.i18n/htm/ol.yml` և փոխեք `v: //unpkg.com/i18n.site` ձեր URL նախածանցով, օրինակ՝ `v: //i18n-v.xxx.com` :

Մուտքագրեք `md` և գործարկեք

```
i18n.site --htm_conf ol --save
```

կամ հապավում

```
i18n.site -c ol -s
```

Այնուհետև կարգավորեք `md/out/ol/v` բովանդակությունը `v:` -ում սահմանված URL-ի նախածանցի ճանապարհին:

Վերջապես, **կարգավորեք ուղու քեշի ժամանակը, որը ավարտվում `/.v` `1s` -ով** , հակառակ դեպքում նոր թողարկված բովանդակությունը հնարավոր չէ անմիջապես մուտք գործել:

Այլ ուղիների քեշի ժամանակը կարող է սահմանվել մեկ կամ ավելի տարի՝ ավելորդ հարցումները նվազեցնելու համար:

##### Հյուրընկալել Բովանդակությունը S3-Ում

Ինքնահոսթինգի բովանդակությունը, բացի ձեր սեփական սերվերից օգտվելուց, + այլ `CDN` տարբերակ է օգտագործել `S3`

Դուք կարող `S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Հիշեք կարգավորել `CDN` որ `/.v` -ով ավարտվող ճանապարհի քեշի ժամանակը լինի `1s` , հակառակ դեպքում դուք չեք կարողանա անմիջապես մուտք գործել նոր թողարկված բովանդակություն:

### Հրապարակել Կայքը

Կայքը կարող է տեղակայվել ցանկացած վայրում [github page](https://pages.github.com) և [cloudflare page](https://pages.cloudflare.com) լավ ընտրություններ են:

Քանի որ վեբկայքն ընդունում է [մեկ էջանոց հավելվածի](https://developer.mozilla.org/docs/Glossary/SPA) ճարտարապետությունը, հիշեք `index.html` `. `

Կայքի մուտքի էջը պետք է տեղադրվի միայն մեկ անգամ, և բովանդակության հետագա թարմացումների համար կայքի մուտքի էջը վերատեղակայելու կարիք չկա:

#### Տեղադրեք github Էջում

Սկզբում [կտտացրեք այստեղ github կազմակերպություն ստեղծելու համար](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Այնուհետև ստեղծեք պահեստ այս `i18n-demo.github.io` ներքո (Խնդրում ենք `i18n-demo` փոխարինել ձեր ստեղծած կազմակերպության անունով):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Նախորդ հոդվածում բովանդակությունը հրապարակելիս այն ստեղծվել է `out/ol/htm` Խնդրում ենք մուտքագրել այս գրացուցակը և գործարկել :

```
ln -s index.html 404.html
```


Քանի որ `github page` չի աջակցում URL-ի ուղու վերագրանցմանը, ուստի փոխարենը օգտագործվում է `404.html` :

Այնուհետև գործարկեք հետևյալ հրամանը `htm` (հիշեք, որ `i18n-demo/i18n-demo.github.io.git` փոխարինեք ձեր սեփական պահեստի հասցեով) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Կոդը սեղմելուց հետո սպասեք, որ `github page` -ի տեղադրումը հաջողությամբ գործարկվի (ինչպես ցույց է տրված ստորև), այնուհետև կարող եք մուտք գործել այն:

<img src="//p.3ti.site/1721116586.avif" width="350px">

Դեմո էջի համար տես՝

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Տեղադրեք cloudflare Էջում

Համեմատած [cloudflare page](//pages.cloudflare.com) `github page` հետ, այն ապահովում է ուղու վերաշարադրում և ավելի բարեկամական է մայրցամաքային Չինաստանի համար և խորհուրդ է տրվում օգտագործել:

`cloudflare page` սովորաբար հիմնված է վերևում `github page` -ի տեղակայման վրա:

Ստեղծեք նախագիծ և կապեք վերը նշված պահեստը `i18n-demo.github.io`

Գործընթացը ներկայացված է ստորև բերված նկարում.
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Խնդրում ենք սեղմել `Add Account` `i18n-demo` կազմակերպություն մուտք գործելու համար:

Եթե ​​դուք կապել եք մեկ այլ կազմակերպության պահեստը, կարող է անհրաժեշտ լինել երկու անգամ `Add Account` այն երկու անգամ լիազորելու համար, մինչև նոր կազմակերպությունը կցուցադրվի:

<img alt="" src="https://p.3ti.site/1721118306.avif">

Հաջորդը ընտրեք `i18n-demo.github.io` , ապա սեղմեք `Begin setup` և օգտագործեք լռելյայն արժեքները հետագա քայլերի համար:

<img alt="" src="https://p.3ti.site/1721118490.avif">

Առաջին անգամ կապելուց հետո դուք պետք է սպասեք մի քանի րոպե, նախքան դրան մուտք գործեք:

Տեղակայումից հետո դուք կարող եք կապել հատուկ տիրույթի անուն:

<img alt="" src="https://p.3ti.site/1721119459.avif">

Պատվերով տիրույթի անունը կապելուց հետո, խնդրում ենք գնալ դոմենի անուն՝ մեկ էջանոց հավելվածի ուղու վերագրումը կարգավորելու համար, ինչպես ցույց է տրված ստորև.

<img alt="" src="https://p.3ti.site/1721119320.avif">

Վերևի նկարում ներկայացված կանոնները հետևյալն են `i18n.site`

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

Բացի այդ, խնդրում ենք կարգավորել քեշի կանոնները, ինչպես ցույց է տրված ստորև, և սահմանել քեշի տևողությունը մեկ ամիս:

<img alt="" src="https://p.3ti.site/1721125111.avif">

Խնդրում ենք վերևի նկարի երկրորդ քայլին համապատասխանող տիրույթի անունը փոխեք ձեր կապած տիրույթի անունով:

#### Կայքերի Տեղակայման Օպտիմիզացում Մայրցամաքային Չինաստանում

Եթե ​​ցանկանում եք ավելի լավ հասանելիություն ձեռք բերել մայրցամաքային Չինաստանի ցանցային միջավայրում, խնդրում ենք նախ [գրանցել տիրույթի անուն](//beian.aliyun.com) :

Այնուհետև օգտագործեք ամպային վաճառողների `out/ol/htm` պահեստավորումը մայրցամաքային `CDN` +

Դուք կարող եք օգտագործել edge computing՝ մեկ էջանոց հավելվածներին հարմարվելու ճանապարհը վերաշարադրելու համար, ինչպիսին է [Baidu Smart Cloud-ը `CDN`](//cloud.baidu.com/product/cdn.html) Այն կարող է կարգավորվել այսպես.

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

Քանի որ `MX` գրառումները և `CNAME` գրառումները չեն կարող գոյակցել, եթե դուք ցանկանում եք միաժամանակ ստանալ տիրույթի անուն, դուք պետք է համագործակցեք սկրիպտի հետ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` մեջ `A` գրառում.

Բացի այդ, քանի որ մայրցամաքային Չինաստանում ամպային վաճառողների արտասահմանյան երթևեկության վճարները համեմատաբար թանկ են, եթե ցանկանում եք օպտիմալացնել ծախսերը, կարող եք օգտագործել [Huawei Cloud-ի անվճար աշխարհագրական DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) և [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) -ի հատուկ տիրույթի անունը (ինչպես ցույց է տրված ստորև): երթևեկության շեղում──Երթևեկությունը մայրցամաքային Չինաստանում Baidu Cloud `CDN` միջազգային երթևեկությունը գնում է cloudflare :

<img alt="" src="https://p.3ti.site/1721119788.avif">

Տեղակայման օպտիմալացման այս լուծումներն ավելի բարդ են և ապագայում կներկայացվեն առանձին գլուխներում:

#### Ընդհանուր Տիրույթի Անվան Վերահղում

Եթե ​​դուք օգտագործում եք `i18n.site` -ն վեբկայք ստեղծելու համար որպես ձեր հիմնական կայք, սովորաբար անհրաժեշտ է կարգավորել համատիրույթի վերահղումը, այսինքն՝ վերահղել `*.xxx.com` (ներառյալ `www.xxx.com` ) մուտքը `xxx.com` .

Այս պահանջին կարելի է հասնել Alibaba Cloud-ի `EdgeScript` `CDN` [անգլերեն փաստաթուղթ](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [չինական փաստաթուղթ](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ավելացրեք տիրույթի անուն [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ում և նշեք տիրույթի `*.xxx.com` Alibaba Cloud `CDN` -ի `CNAME` -ին:

<img alt="" src="https://p.3ti.site/1721122000.avif">

Օրինակ, համատիրույթի անվան վերահղման կոնֆիգուրացիան վերևի նկարում `*.i18n.site` է.

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Տեղադրեք Nginx-Ով

Խնդրում ենք ավելացնել հետևյալի նման կազմաձևը `server` nginx որտեղ `/root/i18n/md/out/ol/htm` խնդրում ենք փոխել այն ձեր սեփական `out/ol/htm` նախագծի ուղու վրա.

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Տեղեկատուի Կառուցվածքը

#### Հանրային

Կայքի ստատիկ ֆայլեր, ինչպիսիք են `favicon.ico` `robots.txt` և այլն:

Պատկերակների ֆայլերը կարող են ստեղծվել այստեղ [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` տակ կան `i18n.site` -ի կազմաձևման ֆայլեր, թարգմանության քեշը և այլն: Մանրամասների համար տե՛ս [«Կազմաձևում»](/i18n.site/conf) հաջորդ գլուխը:

#### en

Աղբյուրի լեզվի գրացուցակը, որը համապատասխանում է կազմաձևման ֆայլի `fromTo` `en` `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Խնդրում ենք ծանոթանալ թարգմանության կազմաձևին [i18](/i18/use)

