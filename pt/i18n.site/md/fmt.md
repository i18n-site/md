# Convenção de Formato Markdown

## Ponto de Ancoragem

Os pontos de ancoragem tradicionais do `Markdown` são gerados com base no conteúdo do texto, mas essa solução não é viável em contextos multilíngues.

A solução de pontos de ancoragem acordada pelo `i18n.site` é inserir, no `Markdown`, textos semelhantes a `<a rel=id href="#xxx" id="xxx"></a>` para criar manualmente os pontos de ancoragem de navegação.

`<a rel=id href="#xxx" id="xxx"></a>`, onde `rel=id` define o estilo da página para o ponto de ancoragem, substitua `xxx` pela abreviatura em inglês do ponto de ancoragem real.

Os pontos de ancoragem são geralmente adicionados aos títulos, como:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

O resultado da exibição será o seguinte:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Escrever `HTML` em `Markdown`

É possível incorporar `HTML` no código `pug`.

O conteúdo dentro de elementos `<pre>` não será traduzido.

Combinando esses dois aspectos, é possível escrever `HTML` em `Markdown` de maneira simples, alcançando vários efeitos de exibição.

Você pode consultar a implementação em [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), o código é o seguinte:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Note que, no `<pre>` acima, também está definido `<style>`.