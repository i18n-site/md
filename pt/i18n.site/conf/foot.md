# Rodapé

Ainda usando o projeto de demonstração como exemplo, o arquivo `.i18n/htm/foot.pug` no diretório `md` define o rodapé do site.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) é uma linguagem de template que gera `HTML`.

[➔ Clique aqui para aprender a gramática do pug](https://pugjs.org)

**Não insira `css` e `js` no `foot.pug`**, caso contrário ocorrerá um erro.

Consulte o texto a seguir; o estilo deve ser escrito no arquivo `.css` correspondente, e a interação deve ser implementada através da criação de componentes web.

## Estilo do Rodapé

No projeto de demonstração, sob `md/.i18n/htm`, há três arquivos `css`.

* `foot.css`: Estilo do rodapé
* `import.css`: Estilo padrão para todo o site `i18n.site`
* `conf.css`: Ícones e fontes do rodapé

### Fonte de Ícones

O ícone do rodapé é gerado por meio da criação de uma fonte chamada `F` em iconfont.cn ([versão em inglês](https://www.iconfont.cn/?lang=en-us) / [versão em chinês](https://www.iconfont.cn/?lang=zh)).

Crie sua própria fonte de ícones conforme necessário e substitua as seguintes configurações no `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Componentes Web

`foot.pug` não deve conter `js`; se houver necessidade de interação, crie um componente web personalizado.

Defina um [componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) em `md/.i18n/htm/index.js` e utilize-o em `foot.pug`.

Criar um componente web é simples, como a tag personalizada `<x-img>`.

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

O código em `.i18n/htm/foot.pug` é o seguinte:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aqui, `${I18N.C}` corresponde ao que está em `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usando `${I18N.xxx}` de maneira semelhante, em conjunto com `i18n.yml`, é possível alcançar a internacionalização multilíngue do rodapé.

Adicionar `class="a"` ao link evita que o link seja convertido em `MarkDown` Veja :
 [➔ `YAML`: Como evitar que links em `HTML` sejam convertidos em `Markdown`](/i18/qa#H2).