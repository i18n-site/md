# i18n.site Конвенция За Писане На MarkDown

## Опорна Точка

Традиционните `MarkDown` опорни точки се генерират въз основа на текстово съдържание. В случай на многоезичност това решение не е осъществимо.

Решението за опорна точка, съгласувано с `i18n.site` е да се вмъкне текст, подобен на `<a rel=id href="#xxx" id="xxx"></a>` в `MarkDown` за да се създаде ръчно позициониращата опорна точка.

`<a rel=id href="#xxx" id="xxx"></a>` , тук `rel=id` дефинира стила на страницата на опорната точка, моля, заменете `xxx` с вашето действително съкращение на английски език.

Към заглавието обикновено се добавят котви, като например:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ефектът на дисплея е следният:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Напиши `HTML` Към `MarkDown`

`HTML` може да бъде вграден в `pug` код.

Съдържание в `<pre>` елемента няма да бъде преведено.

Комбинирайки тези две точки, можете лесно да напишете `HTML` в `MarkDown` за да постигнете различни ефекти на дисплея.

[Щракнете тук за справка i18n.site Списъкът с езикови кодове на началната HTML е написан](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , а кодът е както следва :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Обърнете внимание, че `<style>` също е дефинирано в `<pre>` по-горе.