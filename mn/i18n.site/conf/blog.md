# Блогын Загвар

`use: Blog` -ээс `i18n/conf.yml` гэдэг нь блогийн загварыг буулгахад ашиглахыг хэлнэ.

Блог нийтлэлийн `markdown` файл нь мета мэдээллийг тохируулах шаардлагатай.

Мета мэдээлэл нь файлын эхэнд `---` -ээр эхэлж `---` -ээр төгссөн байх ёстой. Дунд хэсэгт байгаа тохиргооны мэдээллийн формат `YAML` байна.

Демо файлын тохиргоо дараах байдалтай байна.

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` агуулгын хураангуйг илэрхийлдэг бөгөөд энэ нь блогын индексийн хуудсан дээр харагдах болно.

`YMAL` -ийн тусламжтайгаар | `Синтакс, та олон мөрт хураангуйг бичиж болно.

Блогын баруун талд байгаа лавлах модны тохиргоо нь мөн `TOC` файл байна (Өмнөх бүлгийг зөвхөн `TOC` -т жагсаасан нийтлэлүүд блогын нүүр хуудасны индекст харагдана).

Мета мэдээлэл агуулаагүй нийтлэлүүд блогын нүүр хуудсанд харагдахгүй, харин баруун талд байгаа лавлах модонд гарч болно.

## Зохиогчийн Мэдээлэл

Зохиогчийн мэдээллийг нийтлэлийн мета мэдээлэлд бичиж болно, тухайлбал:

```yml
author: marlowe
```

Дараа нь эх хэлний лавлах хэсэгт `author.yml` засварлаж, зохиогчийн мэдээлэл, тухайлбал :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` , `title` нь бүгд сонголттой. Хэрэв `name` тохируулаагүй бол түлхүүрийн нэрийг (энд `marlowe` ) `name` гэж ашиглана.

Демо төсөл [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ба [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) үзнэ үү

## Хавсаргасан Нийтлэл

Хэрэв та өгүүллийн дээд талд байрлуулах шаардлагатай бол `i18n.site` ажиллуулж `.i18n/data/blog` ээс доош `xxx.yml` файлыг засаж, цагийн тэмдгийг сөрөг тоо болгон өөрчилнө үү (олон тооны сөрөг тоог томоос жижиг рүү эрэмбэлнэ).