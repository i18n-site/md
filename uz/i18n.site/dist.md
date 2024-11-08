# Joylashtirish Va Onlayn

`i18n.site` [bir sahifali dastur](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasini qabul qiladi va veb-saytga kirish sahifasi va veb-sayt tarkibi mustaqil ravishda joylashtiriladi.

Yuqoridagi tarjimani bajargandan so'ng, `md/out/dev` katalogi ostida `htm` va `v` kataloglar hosil bo'ladi.

Bu erda `dev` `.i18n/htm/dev.yml` konfiguratsiya fayli asosida tuzilganligini bildiradi.

`dev` katalog :

`htm` katalogi veb-saytga kirish sahifasidir.

`v` katalogida versiya raqamlari bilan veb-sayt tarkibi mavjud.

Mahalliy oldindan ko'rish versiya raqamiga ahamiyat bermaydi va barcha fayllarni `out/dev/v/0.1.0` katalogiga ko'chiradi.

Rasmiy chiqarish uchun o'zgartirilgan fayllar yangi versiya raqamlari katalogiga ko'chiriladi.

## Konfiguratsiya Faylini `-c` Bilan Belgilang

Turli xil konfiguratsiya fayllari `out` katalogida mos keladigan kataloglarni yaratadi.

Masalan, `.i18n/htm/main.yml` `out/main` katalogini yaratadi.

`dev.yml` va `main.yml` standart konfiguratsiyalardir.

`dev` `development` qisqartmasi bo'lib, ishlab chiqish muhitini ko'rsatadi, mahalliy oldindan ko'rish uchun ishlatiladi va shuningdek, standart konfiguratsiya faylidir.
`ol` `online` ning qisqartmasi bo'lib, rasmiy nashr uchun foydalaniladi, bu shuningdek, chiqarish uchun `-n` dan `npm` gacha bo'lgan buyruq qatori parametrlarini ishlatganda standart konfiguratsiya faylidir.

Boshqa konfiguratsiya fayllarini ham yaratishingiz mumkin, foydalaniladigan konfiguratsiya fayli nomini belgilash uchun buyruq satrida `--htm_conf` foydalaning:

masalan:
```
i18n.site --htm_conf dist --save
```

Bu yerda `--save` yangilanish reliz versiyasi raqamini bildiradi.

## <a rel=id href="#npm" id="npm"></a> Kontentni npmjs.com saytiga joylashtiring

Kontentni nashr [npmjs.com](//npmjs.com) tavsiya etilgan standart yechimdir (qarang [: Yuqori darajadagi mavjudlik](/i18n.site/feature#ha) ).

### npm Kirish & Post

`nodejs` o'rnating, `npm login` bilan tizimga kiring.

`md/.i18n/htm/main.yml` tahrirlang va [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` bo'lgan qiymatni o'zingizning `npm` paket nomi [npmjs.com](//npmjs.com) o'zgartiring.

Keyin `md/.i18n/htm/main.package.json` o'zgartiring

Tarjima va nashr qilish uchun `md` katalogida `i18n.site --npm` yoki `i18n.site -n` ishga tushiring.

Agar nashr qilish uchun uzluksiz integratsiya muhitidan foydalansangiz, `nodejs` oʻrnatishga hojat yoʻq. Atrof-muhitga tizimga kirgan va nashr qilish ruxsatnomalarini `~/.npmrc` nusxalash kifoya.

Agar siz `main.yml` `v:` paket nomini o'zgartirsangiz, **avval `.i18n/v/main` o'chirib, keyin uni nashr qilishni unutmang** .

#### npm Tomonidan Chop Etilgan Proksi-Server

Agar materik Xitoydagi foydalanuvchilar tarmoq muammolariga duch kelsa va `npm` ta paketni nashr eta olmasalar, proksi-serverni sozlash uchun `https_proxy` muhit o'zgaruvchisini o'rnatishlari mumkin.

Sizning proksi-server portingiz `7890` deb faraz qilsangiz, quyidagilarni yozishingiz mumkin:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## O'z-O'zidan Joylashtirilgan Kontent

Agar siz kontentni o'z-o'zidan joylashtirishni istasangiz, avval `md/.i18n/htm/main.yml` tahrirlang va `v: //unpkg.com/i18n.site` URL prefiksingizga o'zgartiring, masalan, `v: //i18n-v.xxx.com` .

`md` katalogini kiriting va ishga tushiring

```
i18n.site --htm_conf ol --save
```

yoki qisqartma

```
i18n.site -c ol -s
```

Keyin, `md/out/main/v` katalogidagi tarkibni `v:` da o'rnatilgan URL prefiks yo'liga sozlang.

Nihoyat, **`/.v` dan `1s` gacha bo'lgan yo'lning kesh vaqtini sozlang** , aks holda yangi chiqarilgan tarkibga darhol kirish mumkin emas.

Boshqa yo'llar uchun kesh vaqti keraksiz so'rovlarni kamaytirish uchun bir yil yoki undan ko'proq vaqtga o'rnatilishi mumkin.

## s3 Uchun Xost Tarkibi

O'z serveringizdan foydalanishdan tashqari, kontentni o'z-o'zidan joylashtirish uchun yana bir keng tarqalgan variant `S3` `CDN` foydalanishdir +

`S3` serveriga kirish uchun [rclone](https://rclone.org) foydalanishingiz mumkin, keyin quyidagi skriptga murojaat qilishingiz va o'zgartirishingiz mumkin va har bir versiya uchun faqat `S3` ga o'zgarishlarni ko'chirishingiz mumkin.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

`/.v` bilan tugaydigan yo'lning kesh vaqti `1s` bo'lishi uchun `CDN` sozlashni unutmang, aks holda yangi chiqarilgan tarkibga darhol kirish imkoni bo'lmaydi.

## Veb-Saytini Nashr Etish

Veb-sayt [github page](https://pages.github.com) joyda joylashtirilishi mumkin va [cloudflare page](https://pages.cloudflare.com) yaxshi tanlovdir.

Veb-sayt [bitta sahifali dastur](https://developer.mozilla.org/docs/Glossary/SPA) arxitekturasidan foydalanganligi sababli, `. ` dan `index.html` gacha bo'lgan URL yo'llarini qayta yozishni unutmang.

Veb-saytga kirish sahifasi faqat bir marta joylashtirilishi kerak va keyingi kontent yangilanishlari uchun veb-saytga kirish sahifasini qayta joylashtirishga hojat yo'q.

### github Sahifasida Joylashtirish

[Tashkilot yaratish uchun avval github yerni bosing](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Keyin ushbu tashkilot ostida `i18n-demo.github.io` omborini yarating (iltimos, `i18n-demo` siz yaratgan tashkilot nomi bilan almashtiring):

![](https://p.3ti.site/1721098657.avif)

Oldingi maqoladagi kontentni nashr qilishda `out/main/htm` hosil bo'ldi. Iltimos, ushbu katalogni kiriting va ishga tushiring :

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

### cloudflare Sahifasida Joylashtirish

`github page` bilan [cloudflare page](//pages.cloudflare.com) , u yo'lni qayta yozishni ta'minlaydi va materik Xitoy uchun qulayroqdir va undan foydalanish tavsiya etiladi.

`cloudflare page` ni joylashtirish odatda yuqoridagi `github page` ni joylashtirishga asoslanadi.

Loyiha yarating va yuqoridagi `i18n-demo.github.io` omborini bog'lang.

Jarayon quyidagi rasmda ko'rsatilgan:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Tashkilot `i18n-demo` ruxsat berish uchun `Add Account` tugmasini bosing.

Agar siz boshqa tashkilotning omborini bog'lagan bo'lsangiz, yangi tashkilot ko'rsatilishidan oldin ikki marta avtorizatsiya qilish uchun `Add Account` tugmasini ikki marta bosishingiz kerak bo'lishi mumkin.

![](https://p.3ti.site/1721118306.avif)

Keyin, ombor `i18n-demo.github.io` tanlang, so'ngra `Begin setup` bosing va keyingi qadamlar uchun standart qiymatlardan foydalaning.

![](https://p.3ti.site/1721118490.avif)

Birinchi marta bog'langandan so'ng, unga kirishdan oldin bir necha daqiqa kutishingiz kerak.

Joylashtirishdan so'ng siz maxsus domen nomini bog'lashingiz mumkin.

![](https://p.3ti.site/1721119459.avif)

Maxsus domen nomini bog'lagandan so'ng, quyida ko'rsatilganidek, bitta sahifali ilovaning yo'lini qayta yozishni sozlash uchun domen nomiga o'ting:

![](https://p.3ti.site/1721119320.avif)

Yuqoridagi rasmdagi qoidalar quyida `i18n.site` .

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

### Materik Xitoyda Veb-Saytlarni Joylashtirishni Optimallashtirish

Agar materik Xitoyning tarmoq muhitida foydalanish imkoniyatlarini yaxshilashni istasangiz, avval [domen nomini ro'yxatdan o'tkazing](//beian.aliyun.com) .

Keyin, materik Xitoyda bulutli sotuvchilarning ob'ekt saqlashidan foydalaning `CDN` Quyidagi tarkibni joylashtiring `out/main/htm` +

Bir sahifali ilovalarga moslashish uchun yo'lni qayta yozish uchun chekka hisoblashdan foydalanishingiz mumkin, masalan, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) quyidagicha sozlanishi mumkin:

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
  // Javob sarlavhalari chiqishni disk raskadrovka qilish uchun sozlanishi mumkin, masalan, out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

`MX` yozuvi va `CNAME` yozuvi bir vaqtning o'zida mavjud bo'lmasligi sababli, agar siz domen nomini bir vaqtning o'zida olishni istasangiz, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) bilan `CNAME` `A` rekordgacha hamkorlik qilishingiz kerak.

Bundan tashqari, materik Xitoyda bulut sotuvchilarining chet eldagi trafik toʻlovlari nisbatan qimmat boʻlgani uchun, agar siz xarajatlarni optimallashtirishni istasangiz, bunga erishish uchun [Huawei DNS ning bepul geografik oʻlchamlari](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) va [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ning maxsus domen nomidan foydalanishingiz mumkin trafikni o'zgartirish──Materik Xitoyda transport marshruti Baidu Cloud `CDN` , xalqaro trafik ketadi cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ushbu joylashtirishni optimallashtirish yechimlari murakkabroq va kelajakda alohida boblarda taqdim etiladi.

### Umumiy Domen Nomini Qayta Yo'naltirish

Agar siz veb-saytni asosiy veb-saytingiz sifatida yaratish uchun `i18n.site` foydalansangiz, odatda pan-domenni qayta yo'naltirishni sozlashingiz kerak, ya'ni kirishni `*.xxx.com` (shu jumladan `www.xxx.com` ) dan `xxx.com` ga yo'naltirish.

Bu talabga Alibaba Cloud `CDN` `EdgeScript` ( [inglizcha hujjat](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Xitoy hujjati](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) yordamida erishish mumkin.

[CDN Cloud](https://cdn.console.aliyun.com/domain/list) -da domen nomini qo'shing va Alibaba Cloud `CDN` da domen nomini `*.xxx.com` `CNAME` ko'rsating.

![](https://p.3ti.site/1721122000.avif)

Masalan, yuqoridagi rasmda pan-domen nomini qayta yo'naltirish konfiguratsiyasi `*.i18n.site` quyidagicha:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### nginx Bilan Tarqating

Iltimos, ! ning `server` `out/main/htm` o'xshash `/root/i18n/md/out/main/htm` qo'shing nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` Uzluksiz Integratsiyaga Asoslangan

`github action` ni sozlash uchun quyidagilarga murojaat qilishingiz mumkin:

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

Konfiguratsiyadan ko'rinib turibdiki, bu ish oqimi `main` va `dist` tarmoqqa bosilganda ishga tushiriladi.

Ish jarayoni hujjatni nashr qilish uchun filial nomiga mos keladigan konfiguratsiya faylidan foydalanadi, bu erda nashr qilish konfiguratsiyasi sifatida mos ravishda `.i18n/htm/main.yml` va `.i18n/htm/dist.yml` ishlatiladi.

Hujjatlarni chiqarish jarayoni uchun quyidagi eng yaxshi amaliyotlarni tavsiya qilamiz:

O'zgartirishlar `main` filialiga surilganda, hujjat qurish va oldindan ko'rish stantsiyasiga joylashtirish uchun ishga tushiriladi (oldindan ko'rish stantsiyasi mavjud [github page](//pages.github.com) ).

Hujjatning oldindan ko'rish saytida to'g'ri ekanligini tasdiqlaganingizdan so'ng, kod birlashtiriladi va `dist` filialiga suriladi va rasmiy qurish va joylashtirish onlayn rejimga o'tadi.

Albatta, yuqoridagi jarayonni amalga oshirish ko'proq konfiguratsiyalarni yozishni talab qiladi.

Ish jarayoni skripti uchun haqiqiy loyihaga murojaat qilishingiz mumkin [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

Konfiguratsiyadagi `secrets.I18N_SITE_TOKEN` va `secrets.NPM_TOKEN` kodlar bazasida maxfiy o'zgaruvchilarni sozlashni talab qiladi.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` konfiguratsiyadagi `npm` paketning nashr etish belgisidir [npmjs.com](//npmjs.com) nashr qilish ruxsati bilan token yarating (quyida ko'rsatilganidek).

![](//p.3ti.site/1730969906.avif)


## Katalog Tuzilishi

### `public`

Veb-saytning statik fayllari, masalan, `favicon.ico` , `robots.txt` , va hokazo.

Bu erda piktogramma fayllari yaratilishi mumkin [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` katalogi ostida `i18n.site` ning konfiguratsiya fayllari, tarjima keshi va boshqalar mavjud. Tafsilotlar uchun keyingi bo'lim ["Konfiguratsiya" ga](/i18n.site/conf) qarang.

### `en`

`.i18n/conf.yml` konfiguratsiya faylida `fromTo` tadan `en` tasiga mos keladigan manba til katalogi

```yaml
i18n:
  fromTo:
    en: zh
```

Iltimos, tarjima konfiguratsiyasiga qarang [i18](/i18/use)