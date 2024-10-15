# Modelo de Blog

`i18n/conf.yml` com `use: Blog` indica o uso do modelo de blog para a renderização.

O arquivo `markdown` do artigo do blog precisa ser configurado com metadados.

Os metadados devem estar no início do arquivo, começando com `---` e terminando com `---`, com o formato de configuração no meio em `YAML`.

Um exemplo de configuração de arquivo é o seguinte:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` representa o resumo do conteúdo, que será exibido na página de índice do blog.

Com a ajuda de `YMAL` ' | `Sintaxe, você pode escrever resumos de várias linhas.

A configuração da árvore de conteúdo no lado direito do blog também é feita através de arquivos `TOC` (veja o capítulo anterior). Apenas os artigos listados no `TOC` aparecerão no índice da página inicial do blog.

Artigos sem metadados não serão exibidos na página inicial do blog, mas poderão aparecer na árvore de conteúdo à direita.

## Informações do Autor

As informações do autor podem ser incluídas nas metainformações do artigo, como:

```yml
author: marlowe
```

Em seguida, edite o arquivo `author.yml` no diretório da língua de origem e adicione as informações do autor, por exemplo:

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name`, `url` e `title` são opcionais. Se `name` não for definido, o nome da chave (neste caso `marlowe`) será utilizado como `name`.

Consulte o projeto de demonstração [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) e [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Artigo em Destaque

Se precisar destacar um artigo no topo, execute `i18n.site` e edite o arquivo `xxx.yml` sob `.i18n/data/blog`, alterando o timestamp para um número negativo (os números negativos serão ordenados do maior para o menor).