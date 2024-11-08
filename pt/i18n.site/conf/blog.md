# Modelo De Blog

`i18n/conf.yml` de `use: Blog` significa usar o modelo de blog para renderização.

O arquivo `markdown` da postagem do blog precisa configurar metainformações.

As meta informações devem estar no início do arquivo, começando com `---` e terminando com `---` O formato das informações de configuração no meio é `YAML` .

A configuração de um arquivo de demonstração é a seguinte:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` indica o resumo do conteúdo, que será exibido na página de índice do blog.

Com a ajuda de `YMAL` ' | `Sintaxe, você pode escrever resumos de várias linhas.

A configuração da árvore de diretórios no lado direito do blog também é de `TOC` arquivos (veja o capítulo anterior). Apenas os artigos listados em `TOC` aparecerão no índice da página inicial do blog.

Os artigos que não contêm metainformações não aparecerão na página inicial do blog, mas podem aparecer na árvore de diretórios à direita.

## Informações Do Autor

As informações do autor podem ser escritas nas metainformações do artigo, como:

```yml
author: marlowe
```

Em seguida, edite `author.yml` no diretório do idioma de origem e adicione informações do autor, como :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` e `title` são todos opcionais. Se `name` não estiver definido, o nome da chave (aqui `marlowe` ) será usado como `name` .

Veja o projeto de demonstração [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) e [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artigo Fixado

Se você precisar fixar o artigo no topo, execute `i18n.site` e edite os `xxx.yml` arquivos abaixo de `.i18n/data/blog` e altere o carimbo de data / hora para um número negativo (vários números negativos serão classificados do maior para o menor).