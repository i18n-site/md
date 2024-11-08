# & Үзэх

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