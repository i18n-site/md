# Суулгах, Ашиглах

## windows Эхлээд git bash Суулгана

Систем windows [энд дарж эхлээд `git bash` татаж суулгана](https://git-scm.com/download/win) уу.

Дараагийн үйлдлүүдийг `git bash` -д ажиллуулна.

## Суулгах

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Орчуулгын Токеныг Тохируулах

Токен хуулах бол зочилно уу [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` үүсгээд хуулсан агуулгыг нь оруулаад агуулга нь дараах байдалтай байна.

```
token: YOUR_API_TOKEN
```

Нэмж [i18n.site/payBill](//i18n.site/payBill) , та төлбөрийн кредит картыг уях хэрэгтэй (Цэнэглэх шаардлагагүй, вэбсайт ашиглалтаас хамааран хураамжийг автоматаар хасна, [үнийг үндсэн хуудаснаас үзнэ үү](/#price) ).

## Ашиглах

### Демо Төсөл

`i18` орчуулгын тохиргоог мэдэхийн тулд демо төслөөс үзнэ үү [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Хятад дахь хэрэглэгчид клон хийх боломжтой [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Клончлолын дараа директор руу ороод `i18` ажиллуулж орчуулгаа дуусгана.

### Лавлах Бүтэц

Загварын агуулахын лавлах бүтэц нь дараах байдалтай байна

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en` сан дахь орчуулсан демо файлууд нь зөвхөн жишээ бөгөөд устгаж болно.

### Орчуулга Ажиллуулах

Лавлах руу ороод орчуулахын тулд `i18` ажиллуулна уу.

Орчуулгаас гадна програм нь `.i18n/data` хавтас үүсгэх болно, үүнийг репозитор руу нэмнэ үү.

Шинэ файлыг орчуулсны дараа энэ директорт шинэ өгөгдлийн файл үүсэх болно `git add . ` .

## Тохиргооны Файл

`.i18n/conf.yml` нь `i18` командын мөрийн орчуулгын хэрэгслийн тохиргооны файл юм

Агуулга нь дараах байдалтай байна.

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Эх Хэл Орчуулгын Хэл &

Тохируулгын файлд `fromTo` -ийн дэд зүйл:

`en` нь эх хэл, `zh ja ko de fr` нь орчуулгын зорилтот хэл юм.

Хэлний кодыг үзнэ үү [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Жишээлбэл, хэрэв та хятад хэлийг англи хэл рүү хөрвүүлэхийг хүсвэл энэ мөрийг `zh: en` дахин бичнэ үү.

Хэрэв та дэмжигдсэн бүх хэл рүү орчуулахыг хүсвэл `:` дараа хоосон орхино уу. жишээ нь

```
i18n:
  fromTo:
    en:
```

Та өөр өөр файлуудын хувьд өөр `fromTo` тохируулж болно / Үзүүлэн дараах байдлаар бичнэ :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Энэ тохиргооны хүснэгтэд каталог `blog` орчуулгын эх хэл нь `zh` , каталог `blog/your_file_name.md` орчуулгын эх хэл нь `ja` байна.

### Олон Хэл Дээрх Зураг/Холбоос

`replace:` ба `MarkDown` дахь зураг, холбоосын URL-ууд (мөн суулгасан `HTML` -ын `src` ба `href` шинж чанарууд) энэ угтвараар `.i18n/conf.yml` -д тохируулагдсан бол URL дахь эх хэлний кодыг орчуулгын хэлний кодоор ( [хэл)](/i18/LANG_CODE) солино. [кодын жагсаалт](/i18/LANG_CODE) ).

Жишээлбэл, таны тохиргоо дараах байдалтай байна.

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` нь толь бичиг, түлхүүр нь солигдох URL угтвар, утга нь солих дүрэм юм.

Дээрх `ko de uk>ru zh-TW>zh >en` дүрмийг орлуулахын утга нь `ko de` өөрийн хэлний кодын зургийг, `zh-TW` ба `zh` нь `zh` -ийн зургийг, `uk` `ru` -ын зургийг, бусад хэл ( `ja` гэх мэт) зургийг ашигладаг. анхдагчаар `en` байна.

Жишээлбэл, франц ( `fr` ) эх файл нь `MarkDown` нь дараах байдалтай байна :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Орчуулсан болон үүсгэсэн англи ( `en` ) файл нь дараах байдалтай байна :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Энд эх хэлний код дахь `/en/` орчуулагч хэлний `/zh/` ээр сольсон.

Анхаарна `/` :

> [!TIP]
> Хэрэв `- /` `url:` -д тохируулсан бол зөвхөн харьцангуй замууд таарах боловч `//` оор эхэлсэн URL-ууд таарахгүй.
>
> Хэрэв домэйн нэрийн зарим холбоосыг солихыг хүсч, заримыг нь солихыг хүсэхгүй байгаа бол тэдгээрийг ялгахын тулд `[x](//x.com/en/)` , `[x](https://x.com/en/)` гэх мэт өөр өөр угтваруудыг ашиглаж болно.

### Файлыг Үл Тоомсорлох

Анхдагч байдлаар, эх хэлний лавлах дахь `.md` ба `.yml` ээр эхэлсэн бүх файлууд орчуулагдах болно.

Хэрэв та тодорхой файлуудыг үл тоомсорлож, орчуулахгүй байхыг хүсвэл (дуусаагүй ноорог гэх мэт) үүнийг `ignore` талбараар тохируулж болно.

`ignore` `.gitignore` файлтай [globset](https://docs.rs/globset/latest/globset/#syntax) синтаксийг ашигладаг.

Жишээлбэл, дээрх тохиргооны файлын `_* ` нь `_` -ээр эхэлсэн файлуудыг орчуулахгүй гэсэн үг юм.

## Орчуулгын Дүрэм

### Орчуулгын Редакторууд Мөр Нэмэх, Устгах Ёсгүй

Орчуулга нь засварлах боломжтой. Эх текстийг өөрчилж, машинаар дахин орчуулбал орчуулгад оруулсан гар аргаар хийсэн өөрчлөлтийг дарж бичихгүй (хэрэв эх текстийн энэ догол мөрийг өөрчлөөгүй бол).

> [!WARN]
> Орчуулгын мөр болон эх бичвэрийн хооронд нэг нэгээр нь захидал харилцаа байх ёстой. Өөрөөр хэлбэл, орчуулгыг эмхэтгэхдээ мөр нэмж, устгаж болохгүй. Үгүй бол энэ нь орчуулгын засварлах кэшэд төөрөгдөл үүсгэх болно.

Хэрэв ямар нэг зүйл буруу болвол [шийдлийг авахын тулд Түгээмэл асуултууд хэсгээс үзнэ үү.](/i18/qa#H1)

### `YAML` Орчуулга

Тушаалын мөрийн хэрэгсэл нь эх хэлний файлын лавлахаас `.yml` -ээр төгссөн бүх файлыг олж, орчуулах болно.

* Файлын нэрийн дагавар нь `.yml` ( `.yaml` биш) байх ёстойг анхаарна уу.

Энэ хэрэгсэл нь толь бичгийн түлхүүрүүдийг биш зөвхөн толь бичгийн утгыг `.yml` -д хөрвүүлдэг.

Жишээ нь `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

`i18n/zh/i18n.yml` гэж орчуулагдах болно

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` -ийн орчуулгыг гараар өөрчилж болно (гэхдээ орчуулгад түлхүүр эсвэл мөр нэмж, устгаж болохгүй).

`YAML` орчуулга дээр үндэслэн та янз бүрийн програмчлалын хэлнүүдийн олон улсын шийдлийг хялбархан бүтээх боломжтой.

## Дэвшилтэт Хэрэглээ

### Орчуулгын Дэд Лавлах

`.i18n/conf.yml` үүсгэсэн л бол (тухайлбал демо төслийн загвараас эхлэх шаардлагагүй) `i18` хэвийн ажиллах болно.

Тушаалын мөрийн хэрэгсэл нь бүх дэд лавлахаас `.i18n/conf.yml` тохиргоог олж, тэдгээрийг орчуулах болно.

[monorepo](//monorepo.tools) ашигладаг төслүүд хэлний файлуудыг дэд директоруудад хувааж болно.

![](https://p.3ti.site/1719910016.avif)

### Тусгай Суулгалтын Лавлах

Үүнийг анхдагчаар `/usr/local/bin` болгож суулгана.

Хэрэв `/usr/local/bin` бичих зөвшөөрөлгүй бол `~/.bin` рүү суулгана.

`TO` орчны хувьсагчийг тохируулах нь суулгацын лавлахыг тодорхойлж болно, жишээ нь :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```