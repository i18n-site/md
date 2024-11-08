# Versão Do Projeto

Veja o projeto de demonstração como exemplo:

`en/demo2/v` é o número da versão atual do projeto, que será exibido à direita do nome do projeto no contorno da barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Aqui `en/` é o código do idioma correspondente ao idioma de origem da tradução configurado por `.i18n/conf.yml` .

Se o seu idioma de origem não for o inglês, o arquivo `v` deverá ser colocado no diretório do projeto do seu idioma de origem.

A capacidade de navegar por versões históricas de documentos está em desenvolvimento.

Recomenda-se modificar o número da versão do documento apenas quando atualizações importantes forem lançadas (como `v1` , `v2` ) para evitar que muitos números de versão causem confusão nas páginas indexadas pelos mecanismos de pesquisa.

## Use Arquivos `v` Vazios Para Dividir Os Índices De Arquivos De Diferentes Projetos

No projeto de demonstração, além de `en/demo2/v` , você também pode ver que existem `v` arquivos vazios nos diretórios `en/blog` e `en/demo1` .

Um `v` vazio não será exibido no contorno da barra lateral, mas enquanto houver um arquivo `v` , um índice independente será gerado para os arquivos no diretório e subdiretórios.

Ao dividir os índices de diferentes projetos, você pode evitar o acesso lento causado pelo carregamento do índice de todos os arquivos do site inteiro de uma só vez.

Por exemplo, o arquivo de índice correspondente a `blog` no projeto de demonstração é [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :