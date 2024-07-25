# O'rnatish &

## Konfiguratsiya Belgisi

`i18` tarjima vositasi oʻrnatilgan `i18n.site` [kirish tokenini sozlash uchun `i18` hujjatiga murojaat qilish uchun shu yerni bosing](/i18/use) .

## O'rnatish

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Loyihasi

Keling, demo loyihadan boshlaylik va qanday foydalanishni o'rganamiz `i18n.site`

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

`docker` bilan mahalliy oldindan ko'rishni osonlashtirish uchun kod bazasi klonining katalog nomi `md` bo'lishi kerak `demo.i18n.site`

### Tarjima Qiling

Birinchidan, `md` kiriting va `i18n.site` ishga tushiring, bu `en` ga tarjima qilinadi `zh` !

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ishlagandan so'ng, tarjima va kesh fayllari yaratiladi, ularni `md` `git add . ` omboriga qo'shishni unutmang.

### Mahalliy Oldindan Ko'rish

`MAC` `docker` [orbstack](https://orbstack.dev) `docker`

Keyin, `docker` kiriting va `./up.sh` ishga tushiring va keyin mahalliy sifatida ko'rish uchun tashrif [https://127.0.0.1](https://127.0.0.1) .

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Kontenti

`i18n.site` [Bir sahifali dastur](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasini qabul qiladi va veb-saytga kirish sahifasi va veb-sayt tarkibi mustaqil ravishda joylashtiriladi.

Yuqoridagi tarjimani bajarganingizdan so'ng, `md/out/dev` `htm` va `v` kataloglari hosil bo'ladi.

Bu yerda, `dev` `.i18n/htm/dev.yml` fayli asosida tuzilganligini bildiradi.

Tarkib : `dev`

`htm` ostida veb-saytga kirish sahifasi joylashgan.

`v` versiya raqami bilan veb-sayt tarkibi mavjud.

Mahalliy oldindan ko'rish, versiya raqamidan qat'i nazar, barcha fayllarni `out/dev/v/0.1.0`

Rasmiy chiqarish uchun o'zgartirilgan fayllar yangi versiya raqamlari katalogiga ko'chiriladi.

#### Konfiguratsiya Faylini Belgilash Uchun -c Dan Foydalaning

Turli xil konfiguratsiya fayllari `out` ostida tegishli kataloglarni yaratadi.

Masalan `.i18n/htm/ol.yml` `out/ol` katalog yaratadi.

`dev.yml` va `ol.yml` - standart konfiguratsiyalar.

`dev` — `development` ning qisqartmasi boʻlib, u ishlab chiqish muhitini ifodalaydi, mahalliy oldindan koʻrish uchun ishlatiladi va shuningdek, standart konfiguratsiya faylidir.
`ol` - bu onlayn muhitni ifodalovchi `online` qisqartmasi bo'lib, rasmiy nashr uchun ishlatiladi va shuningdek, nashr qilishda standart konfiguratsiya fayli hisoblanadi `npm` `-n` buyruq qatori parametri yordamida.

Bundan tashqari, konfiguratsiya fayli nomini belgilash uchun buyruq satrida `--htm_conf` dan foydalaning.

masalan:
```
i18n.site --htm_conf yourConfig --save
```

Bu `--save` yangilanish versiyasi raqami ko'rsatilgan.

#### <a rel=id href="#npm" id="npm"></a> Kontentni npmjs.com saytiga joylashtiring

Kontentni nashr [npmjs.com](//npmjs.com) tavsiya etilgan standart yechimdir (qarang [: Yuqori darajadagi mavjudlik](/i18n.site/feature#ha) ).

##### Ozod npm login &

O'rnating `nodejs` tizimga kirish uchun `npm login` foydalaning.

Tahrirlash `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` dagi `i18n.site` oʻzingizga oʻzgartiring `npm` paket nomi.

ga ega bo'lmagan paket nomidan foydalaning [npmjs.com](//npmjs.com) Paket nomi sifatida veb-sayt domenidan foydalanish yaxshi tanlovdir.

`npm` to'plamiga asoslangan nashr qilishda, `v:` qiymatining prefiksi sifatida **`//unpkg.com/` unutmang** kesh vaqti `i18n.site` bu prefiks yo'li ostida `/.v` yangi nashrlarni o'z vaqtida ko'rish uchun maxsus optimallashtirilgan.

Tarjima va nashr qilish uchun `md` `i18n.site --npm` yoki `i18n.site -n` ishga tushiring.

Agar siz nashr qilish uchun uzluksiz integratsiya muhitidan foydalansangiz, uni o'rnatishning hojati yo'q `nodejs` shunchaki tizimga kirgan va nashr etilgan ruxsatnomani `~/.npmrc` muhitga nusxalash kifoya.

Agar siz paket nomini `v:` `ol.yml` o'zgartirsangiz, **avval `.i18n/v/ol` o'chirib tashlang** va keyin uni nashr qiling.

##### npm Tomonidan Chop Etilgan Proksi-Server

Agar materik Xitoydagi foydalanuvchilar tarmoq muammolariga duch kelsa va `npm` nashr eta olmasalar, proksi-serverni sozlash uchun `https_proxy` muhit o'zgaruvchisini o'rnatishlari mumkin.

Proksi-server portingiz `7890` quyidagilarni yozishingiz mumkin:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### O'z-O'zidan Joylashtirilgan Kontent

Agar siz kontentni o'zingizga joylashtirmoqchi bo'lsangiz, avval tahrir `md/.i18n/htm/ol.yml` va `v: //unpkg.com/i18n.site` URL prefiksiga o'zgartiring, masalan, `v: //i18n-v.xxx.com` .

`md` kiriting va ishga tushiring

```
i18n.site --htm_conf ol --save
```

yoki qisqartma

```
i18n.site -c ol -s
```

Keyin, `md/out/ol/v` kontentni `v:` da o'rnatilgan URL prefiks yo'liga sozlang.

Nihoyat, **`1s` bilan `/.v` yo'lning kesh vaqtini sozlang** , aks holda yangi chiqarilgan tarkibga darhol kirish mumkin emas.

Boshqa yo'llar uchun kesh vaqti keraksiz so'rovlarni kamaytirish uchun bir yil yoki undan ko'proq vaqtga o'rnatilishi mumkin.

##### s3 Uchun Xost Tarkibi

O'z serveringizdan foydalanishdan tashqari, kontentni o'z-o'zidan joylashtirish `CDN` `S3` +

[rclone](https://rclone.org) `S3` foydalanishingiz mumkin, keyin quyidagi skriptga murojaat qiling va o'zgartiring va har safar nashr qilganingizda faqat o'zgarishlarni `S3` ga ko'chiring.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v` bilan tugaydigan yo'lning kesh vaqti `1s` bo'lishi uchun `CDN` ni sozlashni unutmang, aks holda siz yangi chiqarilgan tarkibga darhol kira olmaysiz.

### Veb-Saytini Nashr Etish

Veb-sayt istalgan [github page](https://pages.github.com) joylashtirilishi mumkin va [cloudflare page](https://pages.cloudflare.com) yaxshi tanlovdir.

Veb-sayt [bitta sahifali ilova](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasini qabul qilganligi sababli, `index.html` ga `. ` URL yo'lini qayta yozishni unutmang.

Veb-saytga kirish sahifasi faqat bir marta joylashtirilishi kerak va keyingi kontent yangilanishlari uchun veb-saytga kirish sahifasini qayta joylashtirishga hojat yo'q.

#### github Sahifasida Joylashtirish

[Tashkilot yaratish uchun avval bu yerni github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Keyin ushbu tashkilot ostida ombor yarating (Iltimos `i18n-demo.github.io` `i18n-demo` siz yaratgan tashkilot nomi bilan almashtiring):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Oldingi maqoladagi tarkibni nashr etayotganda, u yaratilgan `out/ol/htm` Iltimos, ushbu katalogga kiring va ishga tushiring :

```
ln -s index.html 404.html
```


Chunki `github page` URL yoʻlini qayta yozishni qoʻllab-quvvatlamaydi, shuning uchun uning oʻrniga `404.html` ishlatiladi.

Keyin `htm` quyidagi buyruqni bajaring ( `i18n-demo/i18n-demo.github.io.git` o'z ombor manzilingiz bilan almashtirishni unutmang) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kodni bosgandan so'ng, muvaffaqiyatli `github page` tushirishni kuting (quyida ko'rsatilganidek) va keyin siz unga kirishingiz mumkin.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Namoyish sahifasi uchun qarang:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare Sahifasida Joylashtirish

[cloudflare page](//pages.cloudflare.com) `github page` solishtirganda, u materik Xitoyga nisbatan qulayroq va undan foydalanish tavsiya etiladi.

`cloudflare page` O'rnatish odatda yuqoridagi `github page` ni joylashtirishga asoslanadi.

Loyiha yarating va `i18n-demo.github.io` omborni bog'lang.

Jarayon quyidagi rasmda ko'rsatilgan:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` ruxsat berish uchun bosing `Add Account`

Agar siz boshqa tashkilotning omborini bog'lagan bo'lsangiz, yangi tashkilot ko'rsatilishidan oldin uni `Add Account` marta bosishingiz kerak bo'ladi.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Keyin Ombor `i18n-demo.github.io` tanlang, keyin `Begin setup` bosing va keyingi qadamlar uchun standart qiymatlardan foydalaning.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Birinchi marta bog'langandan so'ng, unga kirishdan oldin bir necha daqiqa kutishingiz kerak.

Joylashtirishdan so'ng siz maxsus domen nomini bog'lashingiz mumkin.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Maxsus domen nomini bog'lagandan so'ng, quyida ko'rsatilganidek, bitta sahifali ilovaning yo'lini qayta yozishni sozlash uchun domen nomiga o'ting:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Yuqoridagi rasmdagi qoidalar quyida keltirilgan birinchi qatorni sizga bog'langan domen nomi bilan `i18n.site` .

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

Bundan tashqari, quyida ko'rsatilganidek, kesh qoidalarini sozlang va kesh muddatini bir oyga o'rnating.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Iltimos, yuqoridagi rasmdagi ikkinchi bosqichda mos keladigan domen nomini bog'lagan domen nomiga o'zgartiring.

#### Materik Xitoyda Veb-Saytlarni Joylashtirishni Optimallashtirish

Agar materik Xitoyning tarmoq muhitida foydalanish imkoniyatlarini yaxshilashni istasangiz, avval [domen nomini ro'yxatdan o'tkazing](//beian.aliyun.com) .

Keyin, `out/ol/htm` Xitoydagi bulutli sotuvchilardan `CDN` +

[Baidu Smart Cloud kabi bir sahifali ilovalarga moslashish yo'lini qayta yozish uchun chekka hisoblashdan foydalanishingiz mumkin `CDN`](//cloud.baidu.com/product/cdn.html) Uni quyidagicha sozlash mumkin:

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

`MX` va `CNAME` yozuvlar bir vaqtning o'zida mavjud bo'lolmaydi, agar siz domen nomini bir vaqtning o'zida olishni istasangiz, `CNAME` `A` uchun [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) bilan hamkorlik qilishingiz kerak.

Bundan tashqari, materik Xitoyda bulut sotuvchilarining chet eldagi trafik toʻlovlari nisbatan qimmat boʻlgani uchun, agar siz xarajatlarni optimallashtirishni istasangiz, bunga erishish uchun [Huawei DNS ning bepul geografik oʻlchamlari](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) va [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ning maxsus domen nomidan foydalanishingiz mumkin trafikni o'zgartirish──Materik Xitoyda trafik Baidu Cloud `CDN` xalqaro trafik ketadi cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ushbu joylashtirishni optimallashtirish yechimlari murakkabroq va kelajakda alohida boblarda taqdim etiladi.

#### Umumiy Domen Nomini Qayta Yo'naltirish

Agar siz veb-saytni asosiy veb-saytingiz sifatida yaratish uchun `i18n.site` `www.xxx.com` foydalansangiz, odatda pan-domenni qayta yo'naltirishni sozlashingiz kerak, ya'ni `xxx.com` `*.xxx.com`

Bu talabni Alibaba Cloud `EdgeScript` ( [inglizcha hujjat](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Xitoy hujjati](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) yordamida amalga oshirish mumkin `CDN`

[Alibaba CDN -ga](https://cdn.console.aliyun.com/domain/list) domen nomini qo'shing va `*.xxx.com` nomini Alibaba Cloud `CDN` `CNAME` ga yo'naltiring.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Masalan, yuqoridagi rasmda pan-domen nomini qayta yo'naltirish konfiguratsiyasi `*.i18n.site` :

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Bilan Tarqating

Iltimos, `server` o'xshash konfiguratsiyani qo'shing nginx bu erda `/root/i18n/md/out/ol/htm` uni o'z loyihangiz yo'liga o'zgartiring `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Katalog Tuzilmasi

#### Ommaviy

Veb-saytning statik fayllari, masalan `favicon.ico` `robots.txt` va boshqalar.

Bu erda piktogramma fayllari yaratilishi mumkin [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Katalog ostida `i18n.site` ning konfiguratsiya fayllari, tarjima keshi va boshqalar mavjud. Tafsilotlar uchun keyingi ["Konfiguratsiya"](/i18n.site/conf) bo'limiga qarang.

#### Uz

Konfiguratsiya faylidagi `fromTo` `en` `.i18n/conf.yml` mos keladigan manba til katalogi

```yaml
i18n:
  fromTo:
    en: zh
```

Iltimos, tarjima konfiguratsiyasiga qarang [i18](/i18/use)

