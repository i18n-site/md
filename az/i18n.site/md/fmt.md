# MarkDown Format Konvensiyası

## Anker Nöqtəsi

`MarkDown` lövbərlər mətn məzmunu əsasında yaradılır, çoxdilli halda bu həll mümkün deyil.

`i18n.site` Razılaşdırılmış lövbər həlli yerləşdirmə ankerini əl ilə yaratmaq üçün `MarkDown` -ə `<a rel=id href="#xxx" id="xxx"></a>` -a bənzər mətn daxil etməkdir.

`<a rel=id href="#xxx" id="xxx"></a>` , burada `rel=id` lövbər nöqtəsinin səhifə üslubunu müəyyən edir, lütfən, `xxx` öz ingiliscə lövbər abreviaturanızla əvəz edin.

Çapalar adətən başlığa əlavə olunur, məsələn:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ekran effekti aşağıdakı kimidir:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` `MarkDown`

`pug` `HTML` koda daxil edilə bilər.

`<pre>` elementindəki məzmun tərcümə edilməyəcək.

Bu iki nöqtəni birləşdirərək, müxtəlif ekran effektlərinə nail olmaq üçün asanlıqla `HTML` `MarkDown` edə bilərsiniz.

Tətbiqə müraciət edə bilərsiniz [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) kod aşağıdakı kimidir :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Qeyd edək ki, `<style>` yuxarıda `<pre>`
