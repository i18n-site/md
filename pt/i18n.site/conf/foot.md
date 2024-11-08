# Rodapé Personalizado

Ainda tomando como exemplo o projeto demo, `.i18n/htm/foot.pug` no diretório `md` define o rodapé do site.

![](https://p.3ti.site/1721286077.avif)

## Estilo De Rodapé

Existem três arquivos `css` abaixo de `md/.i18n/htm` no projeto de demonstração.

* `foot.css` : Estilo de rodapé
* `import.css` : 1Estilo `i18n.site` para todo o site
* `conf.css` : Ícones e fontes de rodapé

### Fonte Do Ícone

O ícone do rodapé é gerado criando uma fonte chamada `F` iconfont.cn ( [versão em inglês](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Crie sua própria fonte de ícone conforme necessário e substitua a seguinte configuração em `conf.css` :

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

Por favor, não faça referência direta ao arquivo de fonte iconfont.cn porque ele não pode ser carregado no navegador Safari.

## Componentes Da Web

Você não pode escrever `js` em `foot.pug` Se for necessária interação, personalize o componente da web.

[Um componente web](https://www.freecodecamp.org/news/build-your-first-web-component/) pode ser definido em `md/.i18n/htm/index.js` e então usado em `foot.pug` .

É fácil criar componentes da web, como `<x-img>` personalizadas0 .

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

O código em `.i18n/htm/foot.pug` é o seguinte :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Aqui `${I18N.C}` corresponde a `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usando `${I18N.xxx}` semelhante a este método de escrita, combinado com `i18n.yml` , você pode obter a internacionalização multilíngue do rodapé.

Adicionar `class="a"` ao link evita que o link seja convertido em `MarkDown` Veja :
 [➔ `YAML` : Como evitar que o link `HTML` seja convertido em `Markdown`](/i18/qa#H2) .