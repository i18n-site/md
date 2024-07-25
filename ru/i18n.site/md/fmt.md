# Соглашение О Формате MarkDown

## Точка Привязки

Традиционные привязки `MarkDown` создаются на основе текстового контента. В случае многоязычности такое решение невозможно.

`i18n.site` Согласованное решение привязки состоит в том, чтобы вставить текст, похожий на `<a rel=id href="#xxx" id="xxx"></a>` , в `MarkDown` , чтобы вручную создать привязку позиционирования.

`<a rel=id href="#xxx" id="xxx"></a>` , здесь `rel=id` определяет стиль страницы точки привязки, замените `xxx` фактическим английским сокращением привязки.

К заголовку обычно добавляются анкоры, например:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Эффект отображения следующий:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` В `MarkDown`

`pug` `HTML` может быть встроен в код.

Содержимое элемента `<pre>` не будет переведено.

Объединив эти два пункта, вы можете легко написать `HTML` в `MarkDown` для достижения различных эффектов отображения.

Вы можете обратиться к реализации в [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) код выглядит следующим образом :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Обратите внимание, что `<style>` также определен в `<pre>`
