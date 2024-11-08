# Правілы Запісу MarkDown На i18n.site

## Апорная Кропка

Традыцыйныя `MarkDown` апорных кропак ствараюцца на аснове тэкставага змесціва. У выпадку шматмоўнасці гэта рашэнне немагчыма.

Рашэнне апорнай кропкі, узгодненае з `i18n.site` заключаецца ва ўстаўцы тэксту, падобнага да `<a rel=id href="#xxx" id="xxx"></a>` у `MarkDown` каб уручную стварыць апорную кропку пазіцыянавання.

`<a rel=id href="#xxx" id="xxx"></a>` , тут `rel=id` вызначае стыль старонкі кропкі прывязкі, калі ласка, заменіце `xxx` сваім сапраўдным абрэвіятурай прывязкі на англійскай мове.

Якары звычайна дадаюцца да загалоўка, напрыклад:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Эфект адлюстравання наступны:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Напішыце `HTML` З `MarkDown`

`HTML` можа быць убудаваны ў код `pug` .

Змесціва ў элементах `<pre>` не будзе перакладацца.

Камбінуючы гэтыя два пункты, вы можаце лёгка напісаць `HTML` у `MarkDown` для дасягнення розных эфектаў адлюстравання.

[Націсніце тут для даведкі i18n.site Спіс кодаў моў на галоўнай HTML напісаны](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) наступным чынам: :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Звярніце ўвагу, што `<style>` таксама вызначана ў `<pre>` вышэй.