# Qidiruv Tizimini Optimallashtirish (Seo)

## Tamoyil

`i18n.site` yangilanmaydigan yagona sahifa arxitekturasini qabul qiladi, qidiruvni indekslashni osonlashtirish uchun brauzerlar skanerlashi uchun alohida statik sahifa va `sitemap.xml` yaratiladi.

Kirish so'rovining `User-Agent` qidiruv tizimi brauzeri tomonidan foydalanilganda, so'rov `302` orqali statik sahifaga yo'naltiriladi.

Statik sahifalarda ushbu sahifaning turli til versiyalariga havolalarni ko'rsatish uchun `link` foydalaning, masalan :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Mahalliy nginx Konfiguratsiyasi

Misol sifatida demo loyihasidagi `.i18n/htm/main.yml` konfiguratsiya faylini oling

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Iltimos, avval yuqoridagi `host:` qiymatini domen nomingizga o'zgartiring, masalan, `xxx.com` .

Keyin, `i18n.site -n` , statik sahifa `out/main/htm` katalogida hosil bo'ladi.

Albatta, siz boshqa konfiguratsiya fayllarini ham yoqishingiz mumkin, masalan, birinchi navbatda `.i18n/htm/dist.package.json` va `.i18n/htm/dist.yml` ni yaratish uchun `main` konfiguratsiyasiga murojaat qilish.

Keyin `i18n.site -n -c dist` ishga tushiring, shunda statik sahifa `out/dist/htm` ga yaratiladi.

`nginx` quyidagi konfiguratsiyaga murojaat qilish orqali o'rnatish mumkin.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Server ishchi skriptlarini uzoq vaqt keshlamang
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Boshqa statik resurslar uchun uzoqroq kesh vaqtlarini belgilang
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Brauzer bosh sahifa yozuvi sifatida qaysi statik fayldan foydalanishini belgilang
location = / {
  # Agar $botLang bo'sh bo'lmasa, bu o'rnatilgan til yo'liga ko'ra brauzer orqali kirish va qayta yo'naltirishni anglatadi
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Bir sahifali dastur konfiguratsiyasi
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Statik Fayllarni Yuklash Uchun Ob'ekt Xotirasini Sozlang

Statik fayllar mahalliy sifatida yaratilishi mumkin, ammo keng tarqalgan yondashuv ularni ob'ekt xotirasiga yuklashdir.

Yuqorida sozlangan `out` ga o'zgartiring :

```
out:
  - s3
```

Keyin `~/.config/i18n.site.yml` tahrirlang va quyidagi konfiguratsiyani qo'shing :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Konfiguratsiyada `i18n.site` `.i18n/htm/main.yml` `host:` qiymatiga o'zgartiring, `s3` ostida bir nechta ob'ektlar do'konlari sozlanishi mumkin va `region` maydoni ixtiyoriy (ko'p ob'ektlar do'konlarida bu maydonni o'rnatish shart emas).

Keyin loyihani qayta nashr qilish uchun `i18n.site -n` ishga tushiring.

Agar siz `~/.config/i18n.site.yml` o'zgartirgan bo'lsangiz va qayta yuklamoqchi bo'lsangiz, yuklash keshini tozalash uchun loyihaning ildiz katalogidagi quyidagi buyruqdan foydalaning :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## cloudflare Konfiguratsiyasi

Domen nomi joylashtirilgan [cloudflare](//www.cloudflare.com)

### Konvertatsiya Qilish Qoidalari

Quyida ko'rsatilgandek aylantirish qoidalarini qo'shing:

![](//p.3ti.site/1725436822.avif)

Qoida kodi quyidagicha, iltimos "i18n.site" kodini domen nomingizga o'zgartiring:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Keshlash Qoidalari

Kesh qoidalarini quyidagi tarzda qo'shing:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Qayta Yo'naltirish Qoidalari

Qayta yo'naltirish qoidalarini quyidagicha o'rnating, iltimos, "i18n.site" kodini domen nomingizga o'zgartiring.

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` Dinamik qayta yoʻnaltirishni tanlang, iltimos, `concat("/en",http.request.uri.path,".htm")` qayta yoʻnaltirish yoʻlidagi `/en` qidiruv tizimlari kiritmoqchi boʻlgan standart tilga oʻzgartiring.

## Baidu Intelligent Cloud Configuration

Agar siz materik Xitoyga xizmat ko'rsatishingiz kerak bo'lsa, [Baidu Smart Cloud-dan](//cloud.baidu.com) foydalanishingiz mumkin.

Ma'lumotlar Baidu Object Storage-ga yuklanadi va Baidu Content Distribution Network bilan bog'lanadi.

Keyin skriptni [EdgeJS xizmatida](//console.bce.baidu.com/cdn/#/cdn/ejs/list) quyidagicha yarating

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

`Debug` bosing, so'ngra butun tarmoqqa nashr qilish tugmasini bosing.

![](//p.3ti.site/1725437754.avif)

## Kengaytirilgan Foydalanish: Mintaqaviy Ruxsat Asosida Trafikni Taqsimlang

Agar siz Xitoyning materik hududida xizmatlarni taqdim qilmoqchi bo'lsangiz va `cloudflare` bepul xalqaro trafikni istasangiz, mintaqaviy ruxsat bilan `DNS` foydalanishingiz mumkin.

Masalan, [Huawei DNS](https://www.huaweicloud.com) bepul mintaqaviy tahlilni taqdim etadi, uning yordamida materik Xitoy trafiki Baidu Smart Cloud orqali, xalqaro trafik esa `cloudflare` dan o'tishi mumkin.

`cloudflare` konfiguratsiyasida ko'plab tuzoqlar mavjud. Bu erda bir nechta fikrlarni e'tiborga olish kerak :

### Domen Nomi Boshqa `DNS` Da Joylashtirilgan, `cloudflare` Qanday Foydalanish Kerak

Avval ixtiyoriy domen nomini `cloudflare` ga bog'lang, so'ngra asosiy domen nomini ushbu domen nomi bilan bog'lash uchun `SSL/TLS` → maxsus domen nomidan foydalaning.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Maxsus Domen Nomi Orqali Kirish Mumkin Emas

`cloudflare` ob'ekt xotirasiga `R2` moslashtirilgan domen nomi orqali kirish mumkin emasligi sababli, statik fayllarni joylashtirish uchun uchinchi tomon ob'ekt xotirasidan foydalanish kerak.

[backblaze.com](https://www.backblaze.com) erda biz `cloudflare` da saqlanadigan uchinchi tomon ob'ektlarini qanday bog'lashni ko'rsatish uchun misol keltiramiz.

`backblaze.com` da chelak yarating, istalgan faylni yuklang, faylni ko‘rib chiqish uchun bosing va bu yerda `f003.backblazeb2.com` bo‘lgan `Friendly URL` domen nomini oling.

![](//p.3ti.site/1725440783.avif)

Domen nomini `cloudflare` da `CNAME` dan `f003.backblazeb2.com` o'zgartiring va proksi-serverni yoqing.

![](//p.3ti.site/1725440896.avif)

`cloudflare` / `SSL` ni o'zgartiring → shifrlash rejimi, `Full` ga o'rnating

![](//p.3ti.site/1725438572.avif)

Quyida ko'rsatilgandek aylantirish qoidasini qo'shing, uni birinchi o'ringa qo'ying (birinchisi eng past ustuvorlikka ega):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` dinamikni tanlang va paqir nomiga `your_bucketname` dan `concat("/file/your_bucketname",http.request.uri.path)` o'zgartiring.

Bundan tashqari, yuqoridagi `cloudflare` o'tkazish qoidasida `index.html` `file/your_bucketname/index.html` ga o'zgartiriladi va boshqa konfiguratsiyalar bir xil bo'lib qoladi.

![](//p.3ti.site/1725441384.avif)