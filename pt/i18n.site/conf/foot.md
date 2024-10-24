# Rodapé

Ainda usando o exemplo do projeto de demonstração, o arquivo `.i18n/htm/foot.pug` no diretório `md` define o rodapé do site.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) é uma linguagem de template que gera `HTML`.

[➔ Clique aqui para aprender a gramática do pug](https://pugjs.org)

**Não insira `css` e `js` no `foot.pug`**, caso contrário ocorrerá um erro.

Consulte o texto a seguir; o estilo deve ser escrito no arquivo `.css` correspondente, e a interação é implementada através da criação de componentes web.

## Estilo do Rodapé

No projeto de demonstração, sob `md/.i18n/htm`, há três arquivos `css`.

* `foot.css`: Estilo do rodapé
* `import.css`: Estilo padrão do site `i18n.site`
* `conf.css`: Ícones e fontes do rodapé

### Fonte de Ícones

O ícone do rodapé é gerado por meio da criação de uma fonte chamada `F` em iconfont.cn ([versão em inglês](https://www.iconfont.cn/?lang=en-us) / [versão em chinês](https://www.iconfont.cn/?lang=zh)).

Crie sua própria fonte de ícones conforme necessário e substitua as seguintes configurações no `conf.css`:

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

Por favor, não faça referência direta ao arquivo de fontes do iconfont.cn, pois ele não pode ser carregado no navegador Safari.

## Componentes Web

`foot.pug` não deve conter `js`; se houver necessidade de interação, crie componentes web personalizados.

Você pode definir um [componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) em `md/.i18n/htm/index.js` e usá-lo em `foot.pug`.

Criar componentes web é simples, como a tag personalizada `<x-img>`.

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

Usando `${I18N.xxx}` dessa forma, combinado com `i18n.yml`, é possível alcançar a internacionalização multilíngue do rodapé.

Adicionar `class="a"` ao link evita que o link seja convertido em `MarkDown` Veja :
 [➔ `YAML`: Como evitar que links em `HTML` sejam convertidos em `Markdown`](/i18/qa#H2).