# Convenção De Formato MarkDown

## Ponto De Ancoragem

As âncoras `MarkDown` tradicionais são geradas com base no conteúdo de texto. No caso de multilíngue, esta solução não é viável.

`i18n.site` A solução de âncora acordada é inserir um texto semelhante a `<a rel=id href="#xxx" id="xxx"></a>` em `MarkDown` para criar manualmente a âncora de posicionamento.

`<a rel=id href="#xxx" id="xxx"></a>` , aqui `rel=id` define o estilo da página do ponto de ancoragem, substitua `xxx` pela abreviatura real da âncora em inglês.

Âncoras geralmente são adicionadas ao título, como:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

O efeito de exibição é o seguinte:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Em `MarkDown`

`pug` `HTML` pode ser incorporado no código.

O conteúdo do elemento `<pre>` não será traduzido.

Combinando esses dois pontos, você pode escrever `HTML` `MarkDown` para obter vários efeitos de exibição.

Você pode consultar a implementação em [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) o código é o seguinte :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Observe que `<style>` também está definido em `<pre>`
