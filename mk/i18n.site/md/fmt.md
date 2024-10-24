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

Можете да се повикате на имплементацијата во [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) кодот е како што следува :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Забележете дека `<style>` е исто така дефинирано во `<pre>` погоре.


## Слики/Видеа/Врски На Повеќе Јазици

Откако `MarkDown` ќе се претвори во `HTML` , `$LANG` во атрибутите `src` и `href` ќе се заменат со тековниот [јазичен код](/i18/LANG_CODE) .

Со оваа променлива, можете да постигнете повеќејазичност на слики/видеа/врски.