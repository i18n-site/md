# Versão do Projeto

Veja o projeto de demonstração como exemplo:

`en/demo2/v` é o número da versão atual do projeto, que será exibido ao lado direito do nome do item no esboço da barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aqui `en/` é o código do idioma correspondente ao idioma de origem da tradução configurado em `.i18n/conf.yml`.

Se o seu idioma de origem não for o inglês, o arquivo `v` deve ser colocado no diretório do projeto correspondente ao seu idioma de origem.

A funcionalidade para navegar por versões históricas dos documentos está em desenvolvimento.

Recomenda-se modificar o número da versão do documento apenas em casos de atualizações significativas (como `v1`, `v2`), para evitar que uma excessiva quantidade de versões cause uma bagunça nas páginas indexadas pelos mecanismos de busca.

## Utilize arquivos `v` vazios para dividir os índices de arquivos de diferentes projetos

No projeto de demonstração, além de `en/demo2/v`, também é possível observar que há arquivos `v` vazios nos diretórios `en/blog` e `en/demo1`.

Arquivos `v` vazios não serão exibidos na barra lateral, mas, enquanto existir um arquivo `v`, um índice independente será gerado para os arquivos do diretório e seus subdiretórios.

Ao dividir os índices de diferentes projetos, é possível evitar a lentidão na navegação causada pelo carregamento de todos os índices de arquivos do site de uma vez.

Por exemplo, o arquivo de índice correspondente ao `blog` no projeto de demonstração é [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)