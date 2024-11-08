# Convenção De Escrita MarkDown i18n.site

## Ponto De Ancoragem

Os pontos de ancoragem tradicionais `MarkDown` são gerados com base no conteúdo do texto. No caso de multilíngue, esta solução não é viável.

A solução de ponto de ancoragem acordada com `i18n.site` é inserir texto semelhante a `<a rel=id href="#xxx" id="xxx"></a>` em `MarkDown` para criar manualmente o ponto de ancoragem de posicionamento.

`<a rel=id href="#xxx" id="xxx"></a>` , aqui `rel=id` define o estilo de página do ponto de ancoragem, substitua `xxx` pela abreviatura real da âncora em inglês.

Âncoras geralmente são adicionadas ao título, como:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

O efeito de exibição é o seguinte:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Escreva `HTML` Em `MarkDown`

`HTML` pode ser incorporado no código `pug` .

O conteúdo em `<pre>` elementos não será traduzido.

Combinando esses dois pontos, você pode escrever facilmente `HTML` em `MarkDown` para obter vários efeitos de exibição.

[Clique aqui para referência i18n.site A lista de códigos de idiomas na página inicial HTML está escrita](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) e o código é o seguinte: :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Observe que `<style>` também é definido em `<pre>` acima.