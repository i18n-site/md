# Konwencje formatu Markdown

## Kotwica

Tradycyjne punkty kontrolne w `Markdown` generowane są na podstawie treści tekstowej. W przypadku wielojęzyczności takie rozwiązanie nie jest praktyczne.

Rozwiązanie punktów kontrolnych zgodne z `i18n.site` polega na wstawieniu tekstu w stylu `<a rel=id href="#xxx" id="xxx"></a>` do `Markdown`, aby ręcznie tworzyć punkty kontrolne pozycjonowania.

`<a rel=id href="#xxx" id="xxx"></a>`, gdzie `rel=id` definiuje styl kotwicy na stronie, zastąp `xxx` rzeczywistym angielskim skrótem kotwicy.

Kotwice zazwyczaj dodaje się do tytułów, na przykład:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Wygląd na ekranie:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Napisz `HTML` w `Markdown`

`HTML` można wpleść w kodzie `pug`.

Treść w elemencie `<pre>` nie zostanie przetłumaczona.

Łącząc te dwa aspekty, można z łatwością wpleść `HTML` do `Markdown`, aby osiągnąć różnorodne efekty wyświetlania.

Możesz sich odwołać do implementacji w [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), kod wygląda następująco:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Zwróć uwagę, że w powyższym `<pre>` zdefiniowano również `<style>`.