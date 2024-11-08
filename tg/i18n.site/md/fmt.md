# Конвенсияи Навиштани i18n.site MarkDown

## Нуқтаи Лангар

Нуқтаҳои лангари анъанавии `MarkDown` дар асоси мундариҷаи матн тавлид карда мешаванд, дар ҳолати бисёрзабонӣ, ин ҳалли имконпазир нест.

Ҳалли нуқтаи лангар, ки бо `i18n.site` мувофиқа шудааст, ворид кардани матни шабеҳи `<a rel=id href="#xxx" id="xxx"></a>` дар `MarkDown` барои дастӣ сохтани нуқтаи лангари ҷойгиршавӣ мебошад.

`<a rel=id href="#xxx" id="xxx"></a>` , дар ин ҷо `rel=id` услуби саҳифаи нуқтаи лангарро муайян мекунад, лутфан `xxx` бо ихтисораи лангари воқеии англисӣ иваз кунед.

Одатан лангарҳо ба унвон илова карда мешаванд, масалан:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Таъсири намоиш чунин аст:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Дар `MarkDown` Нависед

`HTML` метавонад дар коди `pug` ворид карда шавад.

Мундариҷа дар `<pre>` элемент тарҷума карда намешавад.

Якҷоя кардани ин ду нукта, шумо метавонед ба осонӣ `HTML` дар `MarkDown` нависед, то эффектҳои гуногуни намоишро ба даст оред.

[Барои i18n.site ин ҷо клик кунед Рӯйхати рамзи забонҳо дар саҳифаи хонагӣ HTML навишта шудааст](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) ва рамзи зерин : аст

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Дар хотир доред, ки `<style>` инчунин дар `<pre>` дар боло муайян карда шудааст.