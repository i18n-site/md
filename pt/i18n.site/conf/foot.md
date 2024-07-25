# Rodapé

Ainda tomando como exemplo o projeto demo, o rodapé do site `.i18n/htm/foot.pug` definido no diretório `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) é uma linguagem de modelo que gera `HTML` .

[➔ Clique aqui para aprender a gramática de pug](https://pugjs.org)

**Não escreva `css` e `js` em `foot.pug`** Caso contrário, haverá erros.

Consulte o seguinte, o estilo está escrito no correspondente `.css` E a interação é obtida através da criação de componentes da web.

## Estilo De Rodapé

No projeto de `md/.i18n/htm` existem 3 `css` arquivos abaixo.

* Estilo : rodapé `foot.css`
* `import.css` : `i18n.site` para todo o site
* : Ícones e fontes de rodapé `conf.css`

### Fonte Do Ícone

O ícone do rodapé é gerado por iconfont.cn ( [versão em inglês](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) criando uma fonte chamada `F`

Crie sua própria fonte de ícone conforme necessário e substitua : seguinte configuração em `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Componentes Da Web

`foot.pug` não é possível escrever `js` nele. Se for necessária interação, personalize o componente da página da web.

Você pode definir [um componente da web](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

É fácil criar componentes web, como tags personalizadas `<x-img>`

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## Rodapé Multilíngue

`.i18n/htm/foot.pug` O código nele é o seguinte :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aqui `${I18N.C}` O correspondente está em `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usando `${I18N.xxx}` semelhante a este método de escrita, combinado com `i18n.yml` , você pode obter a internacionalização multilíngue do rodapé.

Adicione `class="a"` ao link para evitar que o link seja convertido em `MarkDown` , veja :
 [: `YAML` evitar que `HTML` do link seja convertido para `Markdown`](/i18/qa#H2) .