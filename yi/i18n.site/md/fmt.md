# i18n.site MarkDown שרייבן קאַנווענשאַן

## אַנקער פונט

טראַדיציאָנעל `MarkDown` אַנקער ווייזט זענען דזשענערייטאַד באזירט אויף טעקסט אינהאַלט אין דעם פאַל פון מאַלטי-שפּראַך, דעם לייזונג איז ניט פיזאַבאַל.

די אַנקער פונט לייזונג מסכים מיט `i18n.site` איז צו אַרייַנלייגן טעקסט ענלעך צו `<a rel=id href="#xxx" id="xxx"></a>` אין `MarkDown` צו מאַניואַלי מאַכן די פּאַזישאַנינג אַנקער פונט.

`<a rel=id href="#xxx" id="xxx"></a>` , דאָ `rel=id` דיפיינז די בלאַט נוסח פון די אַנקער פונט, ביטע פאַרבייַטן `xxx` מיט דיין פאַקטיש אַנקער ענגליש אַבריווייישאַן.

אַנגקערז זענען יוזשאַוואַלי צוגעגעבן צו דעם טיטל, אַזאַ ווי:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

די אַרויסווייַזן ווירקונג איז ווי גייט:

<img src="//p.3ti.site/1721381136.avif" width="350">

## שרייב `HTML` אין `MarkDown`

`HTML` קענען זיין עמבעדיד אין `pug` קאָד.

אינהאַלט אין `<pre>` עלעמענטן וועט ניט זיין איבערגעזעצט.

קאַמביינינג די צוויי פונקטן, איר קענען לייכט שרייַבן `HTML` אין `MarkDown` צו דערגרייכן פאַרשידן אַרויסווייַזן יפעקץ.

[דריקט דאָ פֿאַר i18n.site די שפּראַך קאָד רשימה אויף די האָמעפּאַגע HTML איז געשריבן](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , און די קאָד איז ווי גייט :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

באַמערקונג אַז `<style>` איז אויך דיפיינד אין `<pre>` אויבן.