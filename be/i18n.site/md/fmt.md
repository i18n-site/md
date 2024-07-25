# Пагадненне Аб Фармаце MarkDown

## Апорная Кропка

`MarkDown` прывязкі генеруюцца на аснове тэкставага змесціва. У выпадку выкарыстання некалькіх моў гэта рашэнне немагчыма.

Узгодненае рашэнне прывязкі заключаецца ў тым `i18n.site` каб уставіць тэкст, падобны на `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` стварыць прывязку.

`<a rel=id href="#xxx" id="xxx"></a>` , тут `rel=id` вызначае стыль старонкі кропкі прывязкі, калі ласка, заменіце `xxx` сваім сапраўдным абрэвіятурай прывязкі.

Якары звычайна дадаюцца да загалоўка, напрыклад:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Эфект адлюстравання наступны:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Напішыце `HTML` `MarkDown`

`pug` `HTML` можа быць убудаваны ў код.

Змест элемента `<pre>` не будзе перакладацца.

Камбінуючы гэтыя два пункты, вы можаце лёгка напісаць `HTML` у `MarkDown`

Вы можаце звярнуцца да рэалізацыі ў [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) код наступны :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Звярніце ўвагу, што `<style>` таксама вызначаны ў `<pre>`
