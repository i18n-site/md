# Конвенция За Формат MarkDown

## Опорна Точка

`MarkDown` анкери се генерират въз основа на текстово съдържание. В случай на многоезичност, това решение не е осъществимо.

`i18n.site` Договореното решение за закрепване е да вмъкнете текст, подобен на `<a rel=id href="#xxx" id="xxx"></a>` в `MarkDown` за да създадете ръчно закрепването за позициониране.

`<a rel=id href="#xxx" id="xxx"></a>` , тук `rel=id` определя стила на страницата на опорната точка, моля, заменете `xxx` с вашето действително съкращение на английски език.

Към заглавието обикновено се добавят котви, като например:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ефектът на дисплея е следният:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` В `MarkDown`

`pug` `HTML` може да бъде вграден в кода.

Съдържанието в елемента `<pre>` няма да бъде преведено.

Комбинирайки тези две точки, можете лесно да напишете `HTML` в `MarkDown` , за да постигнете различни ефекти на дисплея.

Можете да се обърнете към внедряването в [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) кодът е както следва :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Обърнете внимание, че `<style>` също е дефиниран в `<pre>`
