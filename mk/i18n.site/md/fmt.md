# i18n.сајт MarkDown Конвенција За Пишување

## Точка На Прицврстување

Традиционалните `MarkDown` точки за прицврстување се генерираат врз основа на текстуална содржина Во случај на повеќејазични, ова решение не е изводливо.

Решението за точка на прицврстување договорено со `i18n.site` е да се вметне текст сличен на `<a rel=id href="#xxx" id="xxx"></a>` во `MarkDown` за рачно да се креира точката за прицврстување за позиционирање.

`<a rel=id href="#xxx" id="xxx"></a>` , овде `rel=id` го дефинира стилот на страницата на точката за прицврстување, ве молиме заменете го `xxx` со вашата вистинска англиска кратенка за сидро.

Сидра обично се додаваат на насловот, како што се:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Ефектот на приказот е како што следува:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Напишете `HTML` Во `MarkDown`

`HTML` може да се вметне во `pug` код.

Содржините во `<pre>` елементи нема да бидат преведени.

Со комбинирање на овие две точки, можете лесно да напишете `HTML` во `MarkDown` за да постигнете различни ефекти на екранот.

[Кликнете овде за i18n.site Списокот со јазични кодови на почетната страница HTML е напишан](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , а кодот е како што :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Забележете дека `<style>` е дефинирано и во `<pre>` погоре.