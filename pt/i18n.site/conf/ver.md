# Versão Do Projeto

Veja o projeto de demonstração como exemplo:

`en/demo2/v` é o número da versão atual do projeto, que será exibido à direita do nome do projeto no contorno da barra lateral.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` está o código do idioma correspondente ao idioma de origem da tradução `.i18n/conf.yml` .

Se o seu idioma de origem não for o inglês, o arquivo `v` deverá ser colocado no diretório do projeto do seu idioma de origem. 

A capacidade de navegar por versões históricas de documentos está em desenvolvimento.

Recomenda-se modificar o número da versão do documento apenas ao lançar atualizações importantes (como `v1` , `v2` ) para evitar sobrecarregar as páginas indexadas pelos motores de busca devido a muitos números de versão.

## Use Arquivos Vazios `v` Para Dividir Índices De Arquivos Para Projetos Diferentes

No projeto de demonstração, além de `en/demo2/v` , você também pode ver que o conteúdo dos diretórios `en/blog` e `en/demo1` está vazio `v` arquivos.

Vazio `v` não será exibido no contorno da barra lateral, mas enquanto o arquivo `v` existir, um índice independente será gerado para os arquivos no diretório e subdiretórios.

Ao dividir os índices de diferentes projetos, você pode evitar o acesso lento causado pelo carregamento do índice de todos os arquivos do site inteiro de uma só vez.

Por exemplo, no projeto de demonstração `blog` o arquivo de índice correspondente é [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :

