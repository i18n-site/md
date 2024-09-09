# O'rnatish &

## Konfiguratsiya Belgisi

`i18n.site` da o'rnatilgan `i18` tarjima vositasi mavjud. [Kirish tokenini sozlash uchun `i18` hujjatga murojaat qiling](/i18/use) .

## O'rnatish

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Loyihasi

`i18n.site` qanday foydalanishni o'rganish uchun demo loyihadan boshlaylik.

Biz birinchi navbatda demo omborini klonlaymiz va buyruqni quyidagicha bajaramiz:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Materik Xitoydagi foydalanuvchilar:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` bilan mahalliy oldindan ko'rishni osonlashtirish uchun `demo.i18n.site` kod bazasi klonining katalog nomi `md` bo'lishi kerak.

### Tarjima Qiling

Birinchidan, `md` katalogini kiriting va `i18n.site` ishga tushiring, bu `en` dan `zh` ga tarjima qilinadi.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ishlagandan so'ng, tarjima va kesh fayllari yaratiladi, `git add . ` `md` katalogidagi omborga qo'shishni unutmang.

### Mahalliy Oldindan Ko'rish

`docker` o'rnating va ishga tushiring ( `MAC` foydalanuvchi `docker` uchun ish vaqti sifatida [orbstack](https://orbstack.dev) dan foydalanishni tavsiya qiladi).

Keyin `docker` katalogini kiriting va `./up.sh` ishga tushiring va keyin mahalliy ko'rish uchun tashrif [https://127.0.0.1](https://127.0.0.1) .

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Kontenti

`i18n.site` [bir sahifali dastur](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasini qabul qiladi va veb-saytga kirish sahifasi va veb-sayt tarkibi mustaqil ravishda joylashtiriladi.

Yuqoridagi tarjimani bajargandan so'ng, `md/out/dev` katalogi ostida `htm` va `v` kataloglar hosil bo'ladi.

Bu erda `dev` `.i18n/htm/dev.yml` konfiguratsiya fayli asosida tuzilganligini bildiradi.

`dev` katalog :

`htm` katalogi veb-saytga kirish sahifasidir.

`v` katalogida versiya raqamlari bilan veb-sayt tarkibi mavjud.

Mahalliy oldindan ko'rish versiya raqamiga ahamiyat bermaydi va barcha fayllarni `out/dev/v/0.1.0` katalogiga ko'chiradi.

Rasmiy chiqarish uchun o'zgartirilgan fayllar yangi versiya raqamlari katalogiga ko'chiriladi.

#### Konfiguratsiya Faylini Belgilash Uchun -c Dan Foydalaning

Turli xil konfiguratsiya fayllari `out` katalogida mos keladigan kataloglarni yaratadi.

Masalan, `.i18n/htm/ol.yml` `out/ol` katalogini yaratadi.

`dev.yml` va `ol.yml` standart konfiguratsiyalardir.

`dev` `development` qisqartmasi bo'lib, ishlab chiqish muhitini ko'rsatadi, mahalliy oldindan ko'rish uchun ishlatiladi va shuningdek, standart konfiguratsiya faylidir.
`ol` - `online` ning qisqartmasi bo'lib, rasmiy nashr uchun foydalaniladi, bu shuningdek, chiqarish uchun `-n` dan `npm` gacha bo'lgan buyruq qatori parametrlarini ishlatganda standart konfiguratsiya faylidir.

Boshqa konfiguratsiya fayllarini ham yaratishingiz mumkin, foydalaniladigan konfiguratsiya fayli nomini belgilash uchun buyruq satrida `--htm_conf` foydalaning:

masalan:
```
i18n.site --htm_conf yourConfig --save
```

Bu yerda `--save` yangilanish reliz versiyasi raqamini bildiradi.

#### <a rel=id href="#npm" id="npm"></a> Tarkibni npmjs.com saytiga joylash

Kontentni nashr [npmjs.com](//npmjs.com) tavsiya etilgan standart yechimdir (qarang [: Yuqori darajadagi mavjudlik](/i18n.site/feature#ha) ).

##### Ozod npm login &

`nodejs` o'rnating, `npm login` bilan tizimga kiring.

`md/.i18n/htm/ol.yml` tahrirlang va `i18n.site` ni `v: //unpkg.com/i18n.site` o'zingizning `npm` paket nomiga o'zgartiring.

ga ega bo'lmagan paket nomidan foydalaning [npmjs.com](//npmjs.com) Paket nomi sifatida veb-sayt domenidan foydalanish yaxshi tanlovdir.

`npm` to'plami asosida nashr qilishda, yangi nashrlarni o'z vaqtida ko'rish uchun ushbu prefiks yo'li ostidagi `/.v` kesh vaqtini maxsus optimallashtirgan `v:` qiymati uchun 2 `i18n.site` **`//unpkg.com/`** .

Tarjima va nashr qilish uchun `md` katalogida `i18n.site --npm` yoki `i18n.site -n` ishga tushiring.

Agar nashr qilish uchun uzluksiz integratsiya muhitidan foydalansangiz, `nodejs` oʻrnatishga hojat yoʻq. Atrof-muhitga tizimga kirgan va nashr qilish ruxsatnomalarini `~/.npmrc` nusxalash kifoya.

Agar siz `ol.yml` `v:` paket nomini o'zgartirsangiz, **avval `.i18n/v/ol` o'chirib, keyin uni nashr qilishni unutmang** .

##### npm Tomonidan Chop Etilgan Proksi-Server

Agar materik Xitoydagi foydalanuvchilar tarmoq muammolariga duch kelsa va `npm` paketni nashr eta olmasalar, proksi-serverni sozlash uchun `https_proxy` muhit o'zgaruvchisini o'rnatishlari mumkin.

Sizning proksi-server portingiz `7890` deb faraz qilsangiz, quyidagilarni yozishingiz mumkin:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### O'z-O'zidan Joylashtirilgan Kontent

Agar siz kontentni o'z-o'zidan joylashtirishni istasangiz, avval `md/.i18n/htm/ol.yml` tahrirlang va `v: //unpkg.com/i18n.site` URL prefiksingizga o'zgartiring, masalan, `v: //i18n-v.xxx.com` .

`md` katalogini kiriting va ishga tushiring

```
i18n.site --htm_conf ol --save
```

yoki qisqartma

```
i18n.site -c ol -s
```

Keyin, `md/out/ol/v` katalogidagi tarkibni `v:` da o'rnatilgan URL prefiks yo'liga sozlang.

Nihoyat, **`/.v` dan `1s` gacha bo'lgan yo'lning kesh vaqtini sozlang** , aks holda yangi chiqarilgan tarkibga darhol kirish mumkin emas.

Boshqa yo'llar uchun kesh vaqti keraksiz so'rovlarni kamaytirish uchun bir yil yoki undan ko'proq vaqtga o'rnatilishi mumkin.

##### s3 Uchun Xost Tarkibi

O'z serveringizdan foydalanishdan tashqari, kontentni o'z-o'zidan joylashtirish uchun yana bir keng tarqalgan variant `S3` `CDN` +

`S3` serveriga kirish uchun [rclone](https://rclone.org) dan foydalanishingiz mumkin, keyin quyidagi skriptga murojaat qilishingiz va o'zgartirishingiz mumkin va har bir versiya uchun faqat `S3` ga o'zgarishlarni ko'chirishingiz mumkin.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v` bilan tugaydigan yo'lning kesh vaqti `1s` bo'lishi uchun `CDN` sozlashni unutmang, aks holda yangi chiqarilgan tarkibga darhol kirish imkoni bo'lmaydi.

### Veb-Saytini Nashr Etish

Veb-sayt istalgan [github page](https://pages.github.com) joylashtirilishi mumkin va [cloudflare page](https://pages.cloudflare.com) yaxshi tanlovdir.

Veb-sayt [bitta sahifali dastur](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasidan foydalanganligi sababli, `. ` dan `index.html` gacha bo'lgan URL yo'llarini qayta yozishni unutmang.

Veb-saytga kirish sahifasi faqat bir marta joylashtirilishi kerak va keyingi kontent yangilanishlari uchun veb-saytga kirish sahifasini qayta joylashtirishga hojat yo'q.

#### github Sahifasida Joylashtirish

[Tashkilot yaratish uchun avval bu yerni github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Keyin ushbu tashkilot ostida `i18n-demo.github.io` omborini yarating (iltimos, `i18n-demo` siz yaratgan tashkilot nomi bilan almashtiring):

![](https://p.3ti.site/1721098657.avif)

Oldingi maqoladagi kontentni nashr qilishda `out/ol/htm` hosil bo'ldi. Iltimos, ushbu katalogni kiriting va ishga tushiring :

```
ln -s index.html 404.html
```


`github page` URL yo'lini qayta yozishni qo'llab-quvvatlamasligi sababli, uning o'rniga `404.html` ishlatiladi.

Keyin `htm` katalogida quyidagi buyruqni bajaring ( `i18n-demo/i18n-demo.github.io.git` o'zingizning ombor manzilingiz bilan almashtirishni unutmang) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kodni bosgandan so'ng, unga kirishdan oldin `github page` ni muvaffaqiyatli ishga tushirishni kuting (quyida ko'rsatilgandek).

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo sahifasi uchun qarang:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Sahifasida Joylashtirish

`github page` bilan [cloudflare page](//pages.cloudflare.com) , u yo'lni qayta yozishni ta'minlaydi va materik Xitoy uchun qulayroqdir va undan foydalanish tavsiya etiladi.

`cloudflare page` ni joylashtirish odatda yuqoridagi `github page` ni joylashtirishga asoslanadi.

Loyiha yarating va yuqoridagi `i18n-demo.github.io` omborini bog'lang.

Jarayon quyidagi rasmda ko'rsatilgan:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Tashkilot `i18n-demo` ruxsat berish uchun `Add Account` tugmasini bosing.

Agar siz boshqa tashkilotning omborini bog'lagan bo'lsangiz, yangi tashkilot ko'rsatilishidan oldin ikki marta avtorizatsiya qilish uchun `Add Account` tugmasini ikki marta bosishingiz kerak bo'lishi mumkin.

![](https://p.3ti.site/1721118306.avif)

Keyin, ombor `i18n-demo.github.io` tanlang, so'ng `Begin setup` bosing va keyingi qadamlar uchun standart qiymatlardan foydalaning.

![](https://p.3ti.site/1721118490.avif)

Birinchi marta bog'langandan so'ng, unga kirishdan oldin bir necha daqiqa kutishingiz kerak.

Joylashtirishdan so'ng siz maxsus domen nomini bog'lashingiz mumkin.

![](https://p.3ti.site/1721119459.avif)

Maxsus domen nomini bog'lagandan so'ng, quyida ko'rsatilganidek, bitta sahifali ilovaning yo'lini qayta yozishni sozlash uchun domen nomiga o'ting:

![](https://p.3ti.site/1721119320.avif)

Yuqoridagi rasmdagi `i18n.site` quyida keltirilgan.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Bundan tashqari, quyida ko'rsatilganidek, kesh qoidalarini sozlang va kesh muddatini bir oyga o'rnating.

![](https://p.3ti.site/1721125111.avif)

Iltimos, yuqoridagi rasmdagi ikkinchi bosqichda mos keladigan domen nomini bog'lagan domen nomiga o'zgartiring.

#### Materik Xitoyda Veb-Saytlarni Joylashtirishni Optimallashtirish

Agar materik Xitoyning tarmoq muhitida foydalanish imkoniyatlarini yaxshilashni istasangiz, avval [domen nomini ro'yxatdan o'tkazing](//beian.aliyun.com) .

Keyin, materik Xitoyda bulutli sotuvchilarning ob'ekt saqlashidan foydalaning + Quyidagi tarkibni joylashtiring `CDN` `out/ol/htm`

Bir sahifali ilovalarga moslashish uchun yo'lni qayta yozish uchun chekka hisoblashdan foydalanishingiz mumkin, masalan, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) quyidagicha sozlanishi mumkin:

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

`MX` yozuvi va `CNAME` yozuvi bir vaqtning o'zida mavjud bo'lmasligi sababli, agar siz domen nomini bir vaqtning o'zida olishni istasangiz, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) bilan `CNAME` `A` rekordgacha hamkorlik qilishingiz kerak.

Bundan tashqari, materik Xitoyda bulut sotuvchilarining chet eldagi trafik toʻlovlari nisbatan qimmat boʻlgani uchun, agar siz xarajatlarni optimallashtirishni istasangiz, bunga erishish uchun [Huawei DNS ning bepul geografik oʻlchamlari](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) va [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ning maxsus domen nomidan foydalanishingiz mumkin trafikni o'zgartirish──Materik Xitoyda trafik Baidu Cloud `CDN` , xalqaro trafik ketadi cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ushbu joylashtirishni optimallashtirish yechimlari murakkabroq va kelajakda alohida boblarda taqdim etiladi.

#### Umumiy Domen Nomini Qayta Yo'naltirish

Agar siz asosiy veb-sayt sifatida veb-sayt yaratish uchun `i18n.site` foydalansangiz, odatda pan-domenni qayta yo'naltirishni sozlashingiz kerak, ya'ni kirishni `*.xxx.com` (shu jumladan `www.xxx.com` ) dan `xxx.com` gacha yo'naltirish.

Bu talabga Alibaba Cloud `CDN` `EdgeScript` ( [inglizcha hujjat](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Xitoy hujjati](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) yordamida erishish mumkin.

[Alibaba Cloud CDN da](https://cdn.console.aliyun.com/domain/list) domen nomini qo'shing va Alibaba Cloud `CDN` -da domen nomini `*.xxx.com` dan `CNAME` gacha ko'rsating.

![](https://p.3ti.site/1721122000.avif)

Masalan, yuqoridagi rasmda pan-domen nomini qayta yo'naltirish konfiguratsiyasi `*.i18n.site` quyidagicha:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### nginx Bilan Tarqating

Iltimos `/root/i18n/md/out/ol/htm` `out/ol/htm` ning `server` paragrafiga o'xshash konfiguratsiyani qo'shing nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Katalog Tuzilishi

#### `public`

Veb-saytning statik fayllari, masalan, `favicon.ico` , `robots.txt` , va hokazo.

Bu erda piktogramma fayllari yaratilishi mumkin [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

`.i18n` katalogi ostida `i18n.site` ning konfiguratsiya fayllari, tarjima keshi va boshqalar mavjud. Tafsilotlar uchun keyingi bo'lim ["Konfiguratsiya" ga](/i18n.site/conf) qarang.

#### `en`

`.i18n/conf.yml` konfiguratsiya faylida `fromTo` tadan `en` tasiga mos keladigan manba til katalogi

```yaml
i18n:
  fromTo:
    en: zh
```

Iltimos, tarjima konfiguratsiyasiga qarang [i18](/i18/use)