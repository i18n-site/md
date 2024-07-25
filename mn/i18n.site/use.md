# Суулгах &

## Тохиргооны Токен

`i18` орчуулгын хэрэгсэл суулгагдсан байгаа `i18n.site` [хандалтын токеныг тохируулахын тулд энд дарна `i18`](/i18/use) .

## Суулгах

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Демо Төсөл

Демо төслөөс эхэлж, хэрхэн ашиглахыг сурцгаая `i18n.site`

Бид эхлээд демо агуулахыг хуулбарлаж, дараах тушаалыг ажиллуулна:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Эх газрын Хятад дахь хэрэглэгчид:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` -оор локал урьдчилан харахыг хөнгөвчлөхийн тулд кодын үндсэн клоны лавлах нэр нь `md` байх ёстой `demo.i18n.site`

### Орчуулах

Эхлээд `md` руу ороод `i18n.site` ажиллуулснаар `en` `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ажилласны дараа орчуулга болон кэш `git add . ` үүснэ `md`

### Орон Нутгийн Урьдчилан Үзэх

Суулгаж эхлүүлнэ `docker` ( `MAC` [orbstack](https://orbstack.dev) `docker` ажиллах хугацаа болгон ашиглахыг зөвлөж байна).

Дараа нь `docker` оруулаад `./up.sh` ажиллуулж, дараа нь локал [https://127.0.0.1](https://127.0.0.1) орж үзээрэй.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Нийтлэлийн Контент

[Нэг хуудас програмын](https://developer.mozilla.org/docs/Glossary/SPA) архитектурыг нэвтрүүлж, `i18n.site` сайтын нэвтрэх хуудас болон вэбсайтын агуулгыг бие даан байрлуулдаг.

Дээрх орчуулгыг ажиллуулсны дараа `md/out/dev` `htm` болон `v` сангууд үүснэ.

Энд, `dev` нь `.i18n/htm/dev.yml` файл дээр тулгуурлан бүтээгдсэн болохыг харуулж байна.

Агуулга : `dev`

`htm` доор вэб хуудас руу орох боломжтой.

Лавлах нь хувилбарын дугаартай вэбсайтын агуулгыг агуулдаг `v`

Орон нутгийн урьдчилан харах нь хувилбарын дугаараас үл хамааран бүх файлыг `out/dev/v/0.1.0`

Албан ёсны хувилбар гаргахын тулд өөрчлөгдсөн файлуудыг шинэ хувилбарын дугаарын лавлах руу хуулна.

#### -c Командыг Ашиглан Тохиргооны Файлыг Зааж Өгнө

Өөр өөр тохиргооны файлууд нь `out`

Жишээ `out/ol` , `.i18n/htm/ol.yml`

`dev.yml` болон `ol.yml` нь анхдагч тохиргоо юм.

`dev` нь хөгжүүлэлтийн орчныг илэрхийлдэг `development` -ийн товчлол бөгөөд локал урьдчилан үзэхэд ашиглагддаг бөгөөд мөн анхдагч тохиргооны файл юм.
`ol` гэдэг нь онлайн орчныг илэрхийлдэг `online` -ийн товчлол бөгөөд албан ёсны хувилбарт хэрэглэгддэг бөгөөд `npm` командын мөрийн параметрийг ашиглан `-n` .

Та мөн тохиргооны файлын нэрийг зааж өгөхийн тулд командын мөрөнд `--htm_conf` болно.

Жишээлбэл:
```
i18n.site --htm_conf yourConfig --save
```

`--save` шинэчлэлтийн хувилбарын дугаарыг заана.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com дээр контент нийтлэх

[npmjs.com](//npmjs.com) агуулгыг нийтлэх нь санал болгож буй өгөгдмөл шийдэл юм ( [Front end High Availability](/i18n.site/feature#ha) -г үзнэ үү).

##### Суллах npm login &

Суулгах `nodejs` нэвтрэхийн тулд `npm login` ашиглана уу.

Засварлах `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` доторх `i18n.site` өөрийн болгож өөрчил `npm` багцын нэр.

Зөвхөн дээр ашиглагдаагүй багцын нэрийг ашиглана уу [npmjs.com](//npmjs.com)

`npm` багцад тулгуурлан нийтлэхдээ шинэ хувилбаруудыг цаг тухайд `v:` үзэх боломжтой болгохын тулд кэшийн цагийг `i18n.site` энэ угтвар замын дагуу `/.v` тусгайлан тохируулсан байх **`//unpkg.com/`** .

Орчуулах, нийтлэхийн тулд `md` `i18n.site --npm` эсвэл `i18n.site -n` ажиллуулна уу.

Хэрэв та нийтлэхийн тулд тасралтгүй интеграцийн орчин ашигладаг бол үүнийг суулгах шаардлагагүй болно `nodejs` Зүгээр л нэвтэрсэн болон нийтэлсэн зөвшөөрлийг `~/.npmrc` орчинд хуулна уу!

Хэрэв та багцын нэрийг `v:` `ol.yml` -д өөрчилсөн бол **эхлээд `.i18n/v/ol` устгаад дараа нь нийтлэхээ мартуузай** .

##### npm Нийтэлсэн Прокси Сервер

Эх газрын Хятад дахь хэрэглэгчид сүлжээний асуудалтай тулгараад `npm` нийтлэх боломжгүй бол тэд прокси серверийг тохируулахын тулд `https_proxy` орчны хувьсагчийг тохируулж болно.

Таны прокси серверийн порт `7890` гэж үзвэл та дараах зүйлийг бичиж болно.

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Өөрөө Байршуулсан Контент

Хэрэв та контентыг өөрөө байршуулахыг хүсвэл эхлээд `v: //i18n-v.xxx.com` гэх мэт URL-н угтварыг засаад `v: //unpkg.com/i18n.site` болгон өөрчилнө `md/.i18n/htm/ol.yml` .

`md` руу ороод ажиллуул

```
i18n.site --htm_conf ol --save
```

эсвэл товчлол

```
i18n.site -c ol -s
```

Дараа нь `md/out/ol/v` дахь контентыг `v:` -д тохируулсан URL угтварын замд тохируулна уу.

Эцэст нь, **`1s` `/.v` төгссөн замын кэш цагийг тохируулна уу** , эс бөгөөс шинээр гаргасан контентод шууд хандах боломжгүй.

Шаардлагагүй хүсэлтийг багасгахын тулд бусад замуудын кэш хугацааг нэг жил ба түүнээс дээш хугацаагаар тохируулж болно.

##### S3-Д Агуулгыг Байршуулах

Өөрийн серверийг ашиглахаас гадна `CDN` нэг нийтлэг сонголт бол `S3` +

[rclone](https://rclone.org) `S3` ашиглаад доорх скриптийг үзэж, өөрчлөх боломжтой бөгөөд нийтлэх бүртээ зөвхөн нэмэлт өөрчлөлтүүдийг `S3` болно.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v` -ээр төгссөн замын кэш хугацаа нь `1s` байхаар тохируулахаа бүү мартаарай `CDN` эс тэгвээс та шинээр гаргасан контент руу шууд хандах боломжгүй болно.

### Вэб Сайт Нийтлэх

Вэбсайтыг хаана [github page](https://pages.github.com) байршуулах боломжтой бөгөөд [cloudflare page](https://pages.cloudflare.com) нь сайн сонголт юм.

Вэбсайт нь [нэг хуудастай програмын](https://developer.mozilla.org/docs/Glossary/SPA) архитектурыг ашигладаг тул `index.html` -д агуулаагүй URL замыг дахин бичихээ бүү мартаарай `. `

Вэбсайтад нэвтрэх хуудсыг зөвхөн нэг удаа байршуулах шаардлагатай бөгөөд дараагийн агуулгын шинэчлэлтийн хувьд вэбсайтын нэвтрэх хуудсыг дахин байршуулах шаардлагагүй.

#### github Хуудсан Дээр Байршуулах

[Байгууллага үүсгэхийн тулд эхлээд энд дарна github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Дараа нь энэ байгууллагын дор агуулах үүсгэнэ `i18n-demo.github.io` ( `i18n-demo` үүсгэсэн байгууллагынхаа нэрээр солино уу):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Өмнөх нийтлэл дэх агуулгыг нийтлэх үед энэ нь үүсгэгдсэн байна `out/ol/htm` Энэ лавлахыг оруулаад ажиллуулна уу :

```
ln -s index.html 404.html
```


Учир нь `github page` нь URL замыг дахин бичихийг дэмждэггүй тул оронд нь `404.html` ашигладаг.

Дараа нь `htm` дараах тушаалыг ажиллуулна уу ( `i18n-demo/i18n-demo.github.io.git` өөрийн агуулахын хаягаар солихыг санаарай) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Кодыг дарсны дараа `github page` -г амжилттай ажиллуулахыг хүлээнэ үү (доор үзүүлсэн шиг), дараа нь та үүнд хандах боломжтой.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демо хуудаснаас үзнэ үү:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Хуудсан Дээр Байршуулах

[cloudflare page](//pages.cloudflare.com) `github page` харьцуулахад энэ нь эх газрын Хятадад илүү ээлтэй бөгөөд ашиглахыг зөвлөж байна.

`cloudflare page` Байрлуулалт нь ихэвчлэн дээрх `github page` байршуулалт дээр суурилдаг.

Төсөл үүсгэж, дээрх агуулахыг холбоно уу `i18n-demo.github.io`

Үйл явцыг доорх зурагт үзүүлэв.
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` хандах эрх олгохын тулд дарна уу `Add Account`

Хэрэв та өөр байгууллагын агуулахыг холбосон бол шинэ байгууллагыг харуулахаас өмнө хоёр удаа дарж зөвшөөрөл өгөх шаардлагатай `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Дараа `i18n-demo.github.io` агуулахыг сонгоод, дараа нь `Begin setup` дээр товшоод дараагийн алхмуудад өгөгдмөл утгуудыг ашиглана уу.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Эхний удаад холбогдсоны дараа та нэвтрэхийн өмнө хэдэн минут хүлээх хэрэгтэй.

Байршуулсаны дараа та өөрчлөн домэйн нэрийг холбож болно.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Захиалгат домэйн нэрийг холбосны дараа доор үзүүлсэн шиг нэг хуудас програмын замыг дахин бичихийг тохируулахын тулд домэйн нэр рүү очно уу.

<img alt="" src="https://p.3ti.site/1721119320.avif">

Дээрх зурган дээрх дүрмүүд нь доорх эхний мөрөнд байгаа домэйн нэрээр солино `i18n.site` .

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

Нэмж дурдахад кэшийн дүрмийг доор үзүүлсэн шиг тохируулж, кэш үргэлжлэх хугацааг нэг сар болгож тохируулна уу.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Дээрх зурган дээрх хоёр дахь алхамд тохирох домэйн нэрийг өөрийн холбосон домэйн нэр болгон өөрчилнө үү.

#### Эх Газрын Хятадад Вэбсайт Байршуулалтыг Оновчтой Болгох

Хэрэв та эх газрын Хятадын сүлжээний орчинд илүү сайн хүртээмжтэй ажиллахыг хүсвэл эхлээд [домэйн нэрээ бүртгүүлнэ](//beian.aliyun.com) үү.

`out/ol/htm` нь эх газрын Хятад дахь үүлэн борлуулагчдын объектын агуулахыг ашиглана `CDN` +

Та [Baidu Smart Cloud зэрэг нэг хуудасны програмуудад дасан зохицох замыг дахин бичихийн тулд захын тооцооллыг ашиглаж болно `CDN`](//cloud.baidu.com/product/cdn.html) Үүнийг дараах байдлаар тохируулж болно.

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

`MX` болон `CNAME` бичлэгүүд зэрэгцэн орших боломжгүй тул хэрэв та домэйн нэрийн имэйлийг нэгэн зэрэг хүлээн авахыг `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) хамтран ажиллах хэрэгтэй `A`

Нэмж дурдахад, эх газрын Хятад дахь үүлэн борлуулагчдын хилийн чанад дахь замын хөдөлгөөний төлбөр харьцангуй өндөр байдаг тул та зардлаа оновчтой болгохыг хүсвэл [Huawei Cloud DNS ийн үнэ төлбөргүй газарзүйн нягтаршил](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) болон [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) хувийн домэйн нэрийг (доор үзүүлсэн шиг) ашиглаж болно замын хөдөлгөөнийг өөрчлөх──Эх газрын Хятад дахь замын хөдөлгөөн Байду үүл `CDN` олон улсын урсгал cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Эдгээр байршуулалтыг оновчтой болгох шийдлүүд нь илүү төвөгтэй бөгөөд ирээдүйд тусдаа бүлгүүдэд танилцуулагдах болно.

#### Ерөнхий Домэйн Нэрийг Дахин Чиглүүлэх

Хэрэв та вэбсайтаа үндсэн вэб сайт болгохын тулд `i18n.site` `*.xxx.com` ашигладаг бол та ихэвчлэн pan-domain дахин чиглүүлэлт хийх, өөрөөр хэлбэл `xxx.com` `www.xxx.com`

Энэ шаардлагыг Alibaba Cloud-ын `EdgeScript` ( [Англи баримт бичиг](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Хятад баримт бичгийн](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) тусламжтайгаар биелүүлж болно `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) -д домэйн нэр нэмээд `*.xxx.com` нэрийг Alibaba Cloud `CDN` -н `CNAME` руу чиглүүлнэ үү.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Жишээ нь, дээрх зурган дээрх pan-domain нэрийг дахин чиглүүлэх тохиргоо дараах байдалтай байна `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Nginx-Ээр Байрлуулна

`server` дараахтай төстэй тохиргоог нэмнэ үү nginx энд `/root/i18n/md/out/ol/htm` үүнийг өөрийн төслийн `out/ol/htm` руу өөрчилнө үү:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Лавлах Бүтэц

#### Олон Нийтийн

`favicon.ico` `robots.txt` гэх мэт вэбсайтын статик файлууд.

Энд байгаа дүрс бүхий файлуудыг [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Лавлах доор `i18n.site` тохиргооны файлууд, орчуулгын кэш гэх мэт зүйлс байна `.i18n` Дэлгэрэнгүйг ["Тохиргоо"](/i18n.site/conf) гэсэн бүлгээс үзнэ үү.

#### en

Тохируулгын файл дахь `fromTo` `en` `.i18n/conf.yml` харгалзах эх хэлний лавлах

```yaml
i18n:
  fromTo:
    en: zh
```

Орчуулгын тохиргооноос харна уу [i18](/i18/use)

