# Bloq Şablonu

`use: Blog` -dən `i18n/conf.yml` göstərilməsi üçün bloq şablonundan istifadə deməkdir.

Bloq yazısının `markdown` faylı meta məlumatı konfiqurasiya etməlidir.

Meta məlumat faylın əvvəlində `---` ilə başlayıb `---` ilə bitməlidir. Ortadakı konfiqurasiya məlumatının formatı `YAML` dir.

Demo faylının konfiqurasiyası aşağıdakı kimidir:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` blog indeksi səhifəsində göstəriləcək məzmun xülasəsini göstərir.

`YMAL` köməyi ilə | `Sintaksis, çox sətirli xülasələr yaza bilərsiniz.

Bloqun sağ tərəfindəki qovluq ağacının konfiqurasiyası da `TOC` fayldır (əvvəlki fəsildə yalnız `TOC` də sadalanan məqalələr bloqun əsas səhifəsi indeksində görünəcək).

Meta məlumatı olmayan məqalələr blogun ana səhifəsində görünməyəcək, lakin sağdakı kataloq ağacında görünə bilər.

## Müəllif Məlumatı

Müəllif məlumatı məqalənin meta məlumatında yazıla bilər, məsələn:

```yml
author: marlowe
```

Sonra mənbə dil kataloqunda `author.yml` redaktə edin və müəllif məlumatını əlavə edin, məsələn :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` və `title` hamısı isteğe bağlıdır. Əgər `name` təyin olunmayıbsa, açar adı (burada `marlowe` ) `name` kimi istifadə olunacaq.

Demo layihə [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) və [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) ə baxın

## Bağlanmış Məqalə

Məqaləni yuxarıya bərkitmək lazımdırsa, zəhmət olmasa `i18n.site` işə salın və `.i18n/data/blog` dən aşağı olan `xxx.yml` faylı redaktə edin və vaxt damğasını mənfi rəqəmə dəyişin (birdən çox mənfi ədəd böyükdən kiçiyə doğru sıralanacaq).