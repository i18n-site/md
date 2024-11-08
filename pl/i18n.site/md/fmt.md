# Konwencja Pisania i18n.site MarkDown

## Punkt Zakotwiczenia

Tradycyjne `MarkDown` punktów kontrolnych generowane jest na podstawie treści tekstowej. W przypadku wielojęzyczności takie rozwiązanie nie jest możliwe.

Rozwiązanie punktu kontrolnego uzgodnione z `i18n.site` polega na wstawieniu tekstu podobnego do `<a rel=id href="#xxx" id="xxx"></a>` w `MarkDown` aby ręcznie utworzyć punkt kontrolny pozycjonowania.

`<a rel=id href="#xxx" id="xxx"></a>` , tutaj `rel=id` definiuje styl strony punktu zakotwiczenia, zastąp `xxx` rzeczywistym skrótem kotwicy w języku angielskim.

Do tytułu zwykle dodawane są kotwice, takie jak:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Efekt wyświetlania jest następujący:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Napisz `HTML` Na `MarkDown`

`HTML` można osadzić w kodzie `pug` .

Treść w `<pre>` elementach nie zostanie przetłumaczona.

Łącząc te dwa punkty, możesz łatwo napisać `HTML` do `MarkDown` aby uzyskać różne efekty wyświetlania.

[Kliknij tutaj w celach i18n.site Lista kodów języków na stronie głównej HTML jest zapisana](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , a kod wygląda następująco: :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Należy zauważyć, że `<style>` jest również zdefiniowane w `<pre>` powyżej.