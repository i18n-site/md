# Суулгах &

## Суулгах

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Тохиргооны Токен

`i18n.site` `i18` орчуулгын хэрэгсэлтэй. [Энд дарж хандалтын токеныг тохируулахын тулд `i18` баримтыг үзнэ үү](/i18/use) .

## Демо Төсөл

`i18n.site` хэрхэн ашиглах талаар сурахын тулд демо төслөөс эхэлцгээе.

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

Орон нутгийн урьдчилан харахыг `docker` оор хөнгөвчлөхийн тулд `demo.i18n.site` кодын үндсэн клоны лавлах нэр нь `md` байх ёстой.

### Орчуулах

Эхлээд `md` сан руу ороод `i18n.site` ажиллуулж `en` оос `zh` руу хөрвүүлнэ.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ажилласны дараа орчуулга болон кэш файлууд үүснэ. `md` `git add . ` дахь репозиторыг нэмнэ үү.

### Орон Нутгийн Урьдчилан Үзэх

`docker` суулгаж эхлүүлнэ ( `MAC` хэрэглэгч [orbstack](https://orbstack.dev) `docker` ын ажиллах хугацаа болгон ашиглахыг зөвлөж байна).

Дараа нь `docker` лавлахыг оруулаад `./up.sh` ажиллуулж, дараа нь локал байдлаар үзэхийн тулд зочилно [https://127.0.0.1](https://127.0.0.1) .

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Нийтлэлийн Контент

`i18n.site` [нэг хуудас програмын](https://developer.mozilla.org/docs/Glossary/SPA) архитектурыг ашигладаг бөгөөд вэбсайтын нэвтрэх хуудас болон вэбсайтын агуулгыг бие даасан байдлаар байрлуулдаг.

Дээрх орчуулгыг ажиллуулсны дараа `md/out/dev` лавлах дор `htm` ба `v` лавлахууд үүснэ.

Энд `dev` гэдэг нь `.i18n/htm/dev.yml` тохиргооны файл дээр тулгуурлан бүтээгдсэн гэсэн үг.

`dev` лавлах :

`htm` лавлах нь вэб хуудас руу орох хуудас юм.

`v` лавлах нь хувилбарын дугаар бүхий вэбсайтын агуулгыг агуулдаг.

Орон нутгийн урьдчилан үзэх нь хувилбарын дугаарыг үл тоомсорлож, бүх файлыг `out/dev/v/0.1.0` сан руу хуулах болно.

Албан ёсны хувилбар гаргахын тулд өөрчлөгдсөн файлуудыг шинэ хувилбарын дугаарын лавлах руу хуулна.

#### Тохируулгын Файлыг `-c` -Ээр Зааж Өгнө Үү

Өөр өөр тохиргооны файлууд нь `out` директорт харгалзах сангуудыг үүсгэнэ.

Жишээлбэл, `.i18n/htm/ol.yml` `out/ol` санг үүсгэнэ.

`dev.yml` ба `ol.yml` нь анхдагч тохиргоо юм.

`dev` нь `development` -ийн товчлол бөгөөд хөгжүүлэлтийн орчныг илэрхийлдэг бөгөөд локал урьдчилан үзэхэд ашигладаг бөгөөд мөн анхдагч тохиргооны файл юм.
`ol` нь `online` гэсэн товчлол бөгөөд албан ёсны хувилбарыг гаргахад ашигладаг бөгөөд энэ нь мөн `-n` оос `npm` хүртэлх командын мөрийн параметрүүдийг гаргахад өгөгдмөл тохиргооны файл юм.

Та мөн ашиглах тохиргооны файлын нэрийг зааж өгөхийн тулд тушаалын мөрөнд `--htm_conf` ашиглан бусад тохиргооны файлуудыг үүсгэж болно.

жишээ нь:
```
i18n.site --htm_conf yourConfig --save
```

Энд `--save` шинэчлэлтийн хувилбарын дугаарыг илэрхийлнэ.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com дээр контент нийтлэх

[npmjs.com](//npmjs.com) агуулгыг нийтлэх нь санал болгож буй өгөгдмөл шийдэл юм ( [Front end High Availability-г](/i18n.site/feature#ha) үзнэ үү).

##### Суллах npm login &

`nodejs` суулгаад `npm login` ээр нэвтэрнэ үү.

`md/.i18n/htm/ol.yml` [npmjs.com](//npmjs.com) , [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` -ын утгыг өөрийн `npm` багцын нэрээр өөрчилнө.

Дараа нь `md/.i18n/htm/ol.package.json` өөрчил

Орчуулах, нийтлэхийн тулд `md` лавлахаас `i18n.site --npm` эсвэл `i18n.site -n` ажиллуул.

Хэрэв та нийтлэхийн тулд тасралтгүй интеграцийн орчин ашигладаг бол `nodejs` суулгах шаардлагагүй, нэвтэрсэн болон нийтлэх зөвшөөрлийг `~/.npmrc` орчинд хуулж авахад хангалттай.

Хэрэв та `ol.yml` -д `v:` гэсэн багцын нэрийг өөрчилсөн бол **эхлээд `.i18n/v/ol` устгаад дараа нь нийтлэхээ мартуузай** .

##### npm Нийтэлсэн Прокси Сервер

Эх газрын Хятад дахь хэрэглэгчид сүлжээний асуудалтай тулгараад `npm` багцыг нийтлэх боломжгүй бол тэд прокси серверийг тохируулахын тулд орчны хувьсагч `https_proxy` тохируулж болно.

Таны прокси серверийн порт `7890` байна гэж үзвэл та дараахийг бичиж болно:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Өөрөө Байршуулсан Контент

Хэрэв та агуулгыг өөрөө байршуулахыг хүсвэл эхлээд `md/.i18n/htm/ol.yml` засаад `v: //unpkg.com/i18n.site` URL угтвар болгон өөрчил, жишээ нь `v: //i18n-v.xxx.com` .

`md` лавлахыг оруулаад ажиллуулна уу

```
i18n.site --htm_conf ol --save
```

эсвэл товчлол

```
i18n.site -c ol -s
```

Дараа нь `md/out/ol/v` лавлах дахь контентыг `v:` -д тохируулсан URL угтварын замд тохируулна уу.

Эцэст нь **`/.v` ээс `1s` ээр төгссөн замын кэш цагийг тохируулна уу** , эс тэгвээс шинээр гаргасан контентод шууд хандах боломжгүй.

Шаардлагагүй хүсэлтийг багасгахын тулд бусад замуудын кэш хугацааг нэг жил эсвэл түүнээс дээш хугацаагаар тохируулж болно.

##### S3-Д Агуулгыг Байршуулах

Өөрийн серверийг ашиглахаас гадна өөр нэг нийтлэг сонголт бол `S3` `CDN` + явдал юм.

Та `S3` серверт нэвтэрч, дараа нь дараах скриптийг лавлаж, өөрчлөх боломжтой бөгөөд хувилбар бүрд зөвхөн нэмэгдүүлсэн өөрчлөлтийг `S3` болгож хуулж [rclone](https://rclone.org) .

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v` -ээр төгссөн замын кэш хугацаа `1s` байхаар `CDN` тохируулахаа бүү мартаарай, эс бөгөөс шинээр гаргасан контент руу шууд хандах боломжгүй.

### Вэб Сайт Нийтлэх

Вэбсайтыг хаана ч байршуулах боломжтой [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) нь сайн сонголт юм.

Вэбсайт нь [нэг хуудас програмын](https://developer.mozilla.org/docs/Glossary/SPA) архитектурыг ашигладаг тул `. ` -ээс `index.html` агуулаагүй URL замыг дахин бичихээ бүү мартаарай.

Вэбсайтад нэвтрэх хуудсыг зөвхөн нэг удаа байршуулах шаардлагатай бөгөөд дараагийн агуулгын шинэчлэлтийн хувьд вэб сайтын нэвтрэх хуудсыг дахин байршуулах шаардлагагүй.

#### github Хуудсан Дээр Байршуулах

[Байгууллага үүсгэхийн тулд эхлээд энд дарна github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Дараа нь энэ байгууллагын доор агуулах `i18n-demo.github.io` үүсгэнэ үү ( `i18n-demo` үүсгэсэн байгууллагын нэрээр солино уу):

![](https://p.3ti.site/1721098657.avif)

Өмнөх нийтлэл дэх агуулгыг нийтлэх үед `out/ol/htm` үүсгэсэн байна. Энэ лавлахыг оруулаад ажиллуулна уу :

```
ln -s index.html 404.html
```


`github page` URL замыг дахин бичихийг дэмждэггүй тул оронд нь `404.html` ашигладаг.

Дараа нь `htm` санд дараах командыг ажиллуулна уу ( `i18n-demo/i18n-demo.github.io.git` өөрийн агуулахын хаягаар солихыг санаарай) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Кодыг дарсны дараа `github page` -г амжилттай ажиллуулахыг хүлээнэ үү (доор үзүүлсэн шиг).

<img src="//p.3ti.site/1721116586.avif" width="350px">

Демо хуудаснаас үзнэ үү:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Хуудсан Дээр Байршуулах

`github page` тэй [cloudflare page](//pages.cloudflare.com) энэ нь замыг дахин бичих боломжийг олгодог бөгөөд эх газрын Хятадад илүү ээлтэй бөгөөд ашиглахыг зөвлөж байна.

`cloudflare page` -ийн байршуулалт нь ихэвчлэн дээрх `github page` -ийн байршуулалт дээр суурилдаг.

Төсөл үүсгээд дээрх `i18n-demo.github.io` агуулахыг холбоно уу.

Үйл явцыг доорх зурагт үзүүлэв.
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Байгууллага `i18n-demo` д хандах эрх олгохын тулд `Add Account` дээр дарна уу.

Хэрэв та өөр байгууллагын агуулахыг хүлээсэн бол шинэ байгууллага гарч ирэхээс өмнө `Add Account` хоёр удаа дарж зөвшөөрөл өгөх шаардлагатай.

![](https://p.3ti.site/1721118306.avif)

Дараа нь агуулах `i18n-demo.github.io` сонгоод `Begin setup` дээр товшоод дараагийн алхмуудад анхдагч утгуудыг ашиглана уу.

![](https://p.3ti.site/1721118490.avif)

Эхний удаад холбогдсоны дараа та нэвтрэхийн өмнө хэдэн минут хүлээх хэрэгтэй.

Байршуулсаны дараа та захиалгат домэйн нэрийг холбож болно.

![](https://p.3ti.site/1721119459.avif)

Захиалгат домэйн нэрийг холбосны дараа доор үзүүлсэн шиг нэг хуудас програмын замыг дахин бичихийг тохируулахын тулд домэйн нэр рүү очно уу.

![](https://p.3ti.site/1721119320.avif)

Дээрх зурган дээрх дүрмүүд нь доорх эхний мөрөнд байгаа `i18n.site` өөрийн холбосон домэйн нэрээр солино уу.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Нэмж дурдахад кэшийн дүрмийг доор үзүүлсэн шиг тохируулж, кэш үргэлжлэх хугацааг нэг сар болгож тохируулна уу.

![](https://p.3ti.site/1721125111.avif)

Дээрх зурган дээрх хоёр дахь алхамд тохирох домэйн нэрийг өөрийн холбосон домэйн нэр болгон өөрчилнө үү.

#### Эх Газрын Хятадад Вэбсайт Байршуулалтыг Оновчтой Болгох

Хэрэв та эх газрын Хятадын сүлжээний орчинд илүү сайн хүртээмжтэй ажиллахыг хүсвэл эхлээд [домэйн нэрээ бүртгүүлнэ үү](//beian.aliyun.com) .

Дараа нь эх газрын + дахь үүлэн борлуулагчдын объектын санг ашигла `CDN` Дараах контентыг байрлуул `out/ol/htm` .

Та нэг хуудасны програмуудад дасан зохицох замыг дахин бичихийн тулд захын тооцооллыг ашиглаж болно. Жишээлбэл, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) дараах байдлаар тохируулж болно.

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

`MX` бичлэг болон `CNAME` бичлэг зэрэг нь зэрэгцэн орших боломжгүй тул хэрэв та домэйн нэрийн имэйлийг нэгэн зэрэг хүлээн авахыг хүсвэл `CNAME` `A` скрипттэй хамтран [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) хэрэгтэй.

Нэмж дурдахад, эх газрын Хятад дахь үүлэн борлуулагчдын хилийн чанад дахь замын хөдөлгөөний төлбөр харьцангуй өндөр байдаг тул та зардлаа оновчтой болгохыг хүсвэл [Huawei Cloud DNS ийн үнэ төлбөргүй газарзүйн нягтаршил](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) болон [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) хувийн домэйн нэрийг (доор үзүүлсэн шиг) ашиглаж болно замын хөдөлгөөнийг өөрчлөх──Эх газрын Хятад дахь замын хөдөлгөөн Baidu Cloud `CDN` , олон улсын урсгал cloudflare .

![](https://p.3ti.site/1721119788.avif)

Эдгээр байршуулалтыг оновчтой болгох шийдлүүд нь илүү төвөгтэй бөгөөд ирээдүйд тусдаа бүлгүүдэд танилцуулагдах болно.

#### Ерөнхий Домэйн Нэрийг Дахин Чиглүүлэх

Хэрэв та вэбсайтаа үндсэн вэбсайтаа үүсгэхийн тулд `i18n.site` ашигладаг бол ихэвчлэн pan-domain дахин чиглүүлэлт, өөрөөр хэлбэл `*.xxx.com` ээс ( `www.xxx.com` оруулаад) `xxx.com` руу дахин чиглүүлэх хандалтыг тохируулах хэрэгтэй.

Энэ шаардлагыг Alibaba Cloud `CDN` `EdgeScript` ( [Англи баримт бичиг](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Хятад баримт бичиг](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) -ийн тусламжтайгаар хийж болно.

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) -д домэйн нэрийг нэмж, Alibaba Cloud `CDN` -д `*.xxx.com` `CNAME` ыг зааж өгнө үү.

![](https://p.3ti.site/1721122000.avif)

Жишээлбэл, дээрх зурган дээрх пан домэйн нэрийг дахин чиглүүлэх `*.i18n.site` тохиргоо дараах байдалтай байна.

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Nginx-Ээр Байрлуулна

nginx -ийн `server` `out/ol/htm` мөрөнд `/root/i18n/md/out/ol/htm` төстэй тохиргоог нэмнэ үү.

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

#### `public`

`favicon.ico` , `robots.txt` гэх мэт вэбсайтын статик файлууд.

Энд байгаа дүрс бүхий файлуудыг [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

`.i18n` лавлах дор `i18n.site` ийн тохиргооны файлууд, орчуулгын кэш гэх мэт байдаг. Дэлгэрэнгүйг дараагийн бүлгээс ["Тохиргоо"-оос](/i18n.site/conf) үзнэ үү.

#### `en`

`.i18n/conf.yml` тохиргооны файлын `fromTo` -ийн `en` -т тохирох эх хэлний лавлах

```yaml
i18n:
  fromTo:
    en: zh
```

Орчуулгын тохиргооноос харна уу [i18](/i18/use)