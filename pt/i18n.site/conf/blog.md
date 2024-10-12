# Modelo de Blog

`i18n/conf.yml` com `use: Blog` indica que o modelo de Blog será utilizado para a renderização.

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

Com a ajuda de `YMAL` '|`Sintaxe, você pode escrever resumos de várias linhas.

A configuração da árvore de diretórios no lado direito do blog também é feita por arquivos `TOC` (ver o capítulo anterior). Apenas os artigos listados no `TOC` serão exibidos no índice da página inicial do blog.

Artigos sem metadados não serão exibidos na página inicial do blog, mas podem aparecer na árvore de diretórios à direita.

Se você deseja destacar um artigo no topo, execute `i18n.site` e edite o arquivo `xxx.yml` localizado em `.i18n/data/blog`, alterando o timestamp para um número negativo (os números negativos serão ordenados do menor para o maior valor absoluto).