# Navegação Personalizada

Vamos pegar o site [i18n-demo.github.io](//i18n-demo.github.io) demonstração como exemplo para explicar como personalizar a navegação.

![](https://p.3ti.site/1731036697.avif)

Os arquivos correspondentes às áreas numeradas na figura acima são os seguintes:

1. Esquerda [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Certo [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) é uma linguagem de modelo que gera `HTML` 's.

[➔ Clique aqui para aprender a gramática de pug](https://pugjs.org)

A string de formato `${I18N.sponsor}` é usada no arquivo para implementar a internacionalização e seu conteúdo será substituído pelo texto correspondente em [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**Não escreva `css` e `js` em `pug`** , caso contrário ocorrerá um erro.

Os estilos são escritos em `css` e a interação é obtida através da criação de componentes da web.

Aqui, o arquivo correspondente ao estilo da barra de navegação é : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)