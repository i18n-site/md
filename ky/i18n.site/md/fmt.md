# i18n.site MarkDown Жазуу Конвенциясы

## Анкердик Чекит

Салттуу `MarkDown` бирдик чекиттери тексттин мазмунуна жараша түзүлөт, көп тилде болсо, бул чечим мүмкүн эмес.

`i18n.site` менен макулдашылган якорь чекитинин чечими `<a rel=id href="#xxx" id="xxx"></a>` -де `MarkDown` окшош текстти жайгаштыруу анкердик чекитин кол менен түзүү.

`<a rel=id href="#xxx" id="xxx"></a>` , бул жерде `rel=id` анкердик чекиттин бет стилин аныктайт, сураныч, `xxx` өзүңүздүн чыныгы казык англисче аббревиатураңыз менен алмаштырыңыз.

Анкерлер, адатта, аталышка кошулат, мисалы:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Дисплей эффектиси төмөнкүдөй:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` `HTML` Жаз

`HTML` `pug` кодуна кыстарылышы мүмкүн.

`<pre>` элементтеги мазмун которулбайт.

Бул эки пунктту бириктирип, ар кандай дисплей эффекттерине жетүү үчүн `HTML` `MarkDown` оңой жаза аласыз.

Сиз ишке ашырууга кайрыла аласыз [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) код төмөнкүдөй :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Белгилей кетсек, `<style>` да жогоруда `<pre>` менен аныкталган.


## Сүрөттөр/Видеолор/Шилтемелер Бир Нече Тилде

`MarkDown` `HTML` айландырылгандан кийин `src` жана `href` атрибуттарындагы `$LANG` учурдагы [тил коду](/i18/LANG_CODE) менен алмаштырылат.

Бул өзгөрмө менен сиз сүрөттөрдүн/видеолордун/шилтемелердин көп тилдүү болушуна жетише аласыз.