# i18n.site MarkDown Yazı Konvensiyası

## Anker Nöqtəsi

Ənənəvi `MarkDown` lövbər nöqtələri mətn məzmunu əsasında yaradılır, çoxdilli halda bu həll mümkün deyil.

`i18n.site` ilə razılaşdırılmış anker nöqtəsi həlli yerləşdirmə anker nöqtəsini əl ilə yaratmaq üçün `<a rel=id href="#xxx" id="xxx"></a>` -də `MarkDown` -ə bənzər mətn daxil etməkdir.

`<a rel=id href="#xxx" id="xxx"></a>` , burada `rel=id` lövbər nöqtəsinin səhifə üslubunu müəyyən edir, lütfən, `xxx` faktiki lövbər ingilis abreviaturanızla əvəz edin.

Çapalar adətən başlığa əlavə edilir, məsələn:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ekran effekti aşağıdakı kimidir:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` -Da `HTML` Yazın

`HTML` `pug` koduna daxil edilə bilər.

`<pre>` elementdə olan məzmun tərcümə edilməyəcək.

Bu iki nöqtəni birləşdirərək, müxtəlif ekran effektlərinə nail olmaq üçün asanlıqla `MarkDown` -da `HTML` yaza bilərsiniz.

[HTML üçün bura i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Qeyd edək ki, `<style>` yuxarıda `<pre>` -da da müəyyən edilir.