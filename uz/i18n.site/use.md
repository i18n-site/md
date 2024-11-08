# O'rnatish &

## O'rnatish

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfiguratsiya Belgisi

`i18n.site` da o'rnatilgan `i18` tarjima vositasi mavjud. [Kirish tokenini sozlash uchun `i18` hujjatga murojaat qiling](/i18/use) .

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

Ishlagandan so'ng, tarjima va kesh fayllari yaratiladi, ularni `md` `git add . ` omborga qo'shishni unutmang.

### Mahalliy Oldindan Ko'rish

`docker` o'rnating va ishga tushiring ( `MAC` foydalanuvchi `docker` uchun ish vaqti sifatida [orbstack](https://orbstack.dev) dan foydalanishni tavsiya qiladi).

Keyin `docker` katalogini kiriting va `./up.sh` ishga tushiring va keyin mahalliy ko'rish uchun tashrif buyuring [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">