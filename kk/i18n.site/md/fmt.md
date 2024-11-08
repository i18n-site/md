# i18n.site MarkDown Жазу Конвенциясы

## Бекіту Нүктесі

Дәстүрлі `MarkDown` тірек нүктелері мәтін мазмұны негізінде жасалады, көп тілді жағдайда бұл шешім мүмкін емес.

`i18n.site` мен келісілген бекіту нүктесінің шешімі - орналасу тірек нүктесін қолмен жасау үшін `MarkDown` -де `<a rel=id href="#xxx" id="xxx"></a>` ге ұқсас мәтінді кірістіру.

`<a rel=id href="#xxx" id="xxx"></a>` , мұнда `rel=id` бекіту нүктесінің бет стилін анықтайды, `xxx` нақты анкерлік ағылшын аббревиатурасымен ауыстырыңыз.

Анкерлер әдетте тақырыпқа қосылады, мысалы:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Дисплей әсері келесідей:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` -Ден `HTML` Деп Жаз

`HTML` `pug` кодқа енгізуге болады.

`<pre>` элементтегі мазмұн аударылмайды.

Осы екі нүктені біріктіре отырып, әртүрлі дисплей әсерлеріне қол жеткізу үшін `MarkDown` -ден `HTML` оңай жаза аласыз.

[HTML алу үшін мына жерді i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` жоғарыда `<pre>` -де анықталғанын ескеріңіз.