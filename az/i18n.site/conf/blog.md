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

`YMAL` köməyi ilə|`Sintaksis, çox sətirli xülasələr yaza bilərsiniz.

Bloqun sağ tərəfindəki qovluq ağacının konfiqurasiyası da `TOC` fayldır (əvvəlki fəsildə yalnız `TOC` də sadalanan məqalələr bloqun əsas səhifəsi indeksində görünəcək).

Meta məlumatı olmayan məqalələr blogun ana səhifəsində görünməyəcək, lakin sağdakı kataloq ağacında görünə bilər.

Məqaləni yuxarıya bağlamaq lazımdırsa, zəhmət olmasa, `i18n.site` işə salın və `.i18n/data/blog` dən aşağı olan `xxx.yml` faylı redaktə edin və vaxt damgasını mənfi rəqəmə dəyişin (bir çox mənfi ədədlər mütləq dəyərdə kiçikdən böyüyə sıralanacaq).