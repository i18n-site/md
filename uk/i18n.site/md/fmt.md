# Угода про формат MarkDown

## Аanker

Традиційні аанкери `MarkDown` генеруються на основі текстового вмісту, але в багатомовних випадках це рішення непридатне.

Схема аanker, погоджена з `i18n.site`, полягає у вставленні в `MarkDown` тексту, подібного до `<a rel=id href="#xxx" id="xxx"></a>`, для ручного створення аankerів позиціонування.

`<a rel=id href="#xxx" id="xxx"></a>`, тут `rel=id` визначає стиль сторінки для аankerів, замініть `xxx` на вашу фактичну англійську абревіатуру аankerів.

Аanker зазвичай додається до заголовка, наприклад:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Візуальний ефект виглядає так:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Написання `HTML` у `MarkDown`

Код `pug` може містити `HTML`.

Вміст у елементах `<pre>` не буде перекладено.

Комбінуючи ці два моменти, можна легко写入 `HTML` у `MarkDown`, щоб досягти різних візуальних ефектів.

Можна звернутися до реалізації в [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) код виглядає так:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Зверніть увагу, що вище в `<pre>` також визначено `<style>`.