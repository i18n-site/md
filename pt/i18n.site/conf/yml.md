# .i18n/conf.yml

`i18n.site` O arquivo de configuração é `.i18n/conf.yml` .

Exceto pelas configurações `ignore:` e `i18n:` de [`i18`](/i18) , o arquivo de configuração é o seguinte:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Entre eles, o item de configuração `ext:` de `upload` significa que apenas `.md` será carregado durante a publicação.

## Navegação Superior

`nav:` opções de configuração, correspondentes ao menu de navegação no topo da página inicial.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre eles, `i18n: home` corresponde a `en/i18n.yml`中`home: Home` .

`en/i18n.yml` será traduzido para vários idiomas, como `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Após a conclusão da tradução, você pode modificar o valor de `yml` na tradução, mas não adicione ou exclua a chave da tradução `yml` .

### `use: Toc` , Modelo De Arquivo Único (Com Contorno)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa usar a renderização `Toc` , que renderiza um único modelo `Markdown` .

`TOC` é a abreviatura de `Table of Contents` . Quando este modelo for renderizado, o contorno deste arquivo `Markdown` será exibido na barra lateral.

`url:` representa o caminho do arquivo de `Markdown` ( `/` corresponde ao diretório raiz `/README.md` , este nome de arquivo requer um prefixo maiúsculo e um sufixo minúsculo).

### `use: Md` , Modelo De Arquivo Único (Sem Estrutura De Tópicos)

`Md` Template é igual a `Toc` , ambos são usados ​​para renderizar um único arquivo `Markdown` . No entanto `Md` o modelo não mostra o contorno na barra lateral.

Você pode modificar `use: Toc` na configuração acima para `use: Md` , executar `i18n.site` no diretório `md` novamente e, em seguida, visitar o URL de visualização do desenvolvimento para observar as alterações na página inicial.

### Carregamento Padrão Sem Caminho De Configuração

Se o prefixo do caminho de um determinado caminho que está sendo acessado não estiver configurado em `nav:` o arquivo `MarkDown` correspondente ao caminho será carregado por padrão e renderizado usando `Md` template.

Por exemplo, se você visitar `/test` e `nav:` estiver configurado sem esse caminho e o idioma da página for inglês (código `en` ), o modelo será carregado `/en/test.md` e renderizado usando `Md` por padrão.

Se `/en/test.md` este arquivo não existir, a página `404` padrão será exibida.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Modelo De Vários Arquivos

No arquivo de configuração:

```
  - i18n: blog
    use: Doc
```

Indica o uso de `Doc` para renderização de modelo.

`Doc` O modelo suporta a integração de vários `MarkDown` para gerar contornos de documentos para projetos únicos ou múltiplos.

#### Projeto Único (Vários Arquivos)

`blog` acima é o modo de projeto único de `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Quando O url Está Vazio, O Valor Padrão É i18n

Se você não escrever `url` , `url` o valor de `i18n` . Esta regra também terá efeito para outros modelos.

O método de escrita acima é equivalente a ter `url: blog` e seu arquivo correspondente é `en/blog/TOC` .

#### Vários Projetos

`.i18n/conf.yml` A configuração em `i18n:doc` é o modo multiprojeto.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aqui, `menu: NB demo1,demo2` significa usar `NB` para renderizar o menu suspenso.

`NB` , é a abreviatura de `Name Breif` , indicando que o menu suspenso pode exibir o nome e o slogan do projeto.

`NB` é seguido pelo parâmetro `demo1,demo2` passado para ele.
Observe que não deve haver espaços ** antes `demo1,demo2` depois da vírgula `,` em : **

Para os parâmetros acima, o arquivo de índice de diretório correspondente é:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Índice Do Índice TOC

`i18n.site` Executará o `js` plugin `.i18n/hook/after.tran/TOC.js` no armazém de demonstração para ler o arquivo de índice do diretório `doc` correspondente à configuração do modelo `TOC` para gerar `json` do esboço do diretório.

Se você usar o modelo `doc` , deverá ter este plug-in.

Se você inicializar o projeto `i18n.site` a partir de uma pasta vazia, lembre-se de copiar `.i18n` do projeto demo para o seu diretório.

`Doc` O modelo renderizará o esboço do índice com base no `json` gerado.

##### Explicação Detalhada Do Conteúdo

`en/blog/TOC` O conteúdo é o seguinte :

```
README.md

news/README.md
  news/begin.md
```

##### Use Recuo Para Indicar Níveis

Acima `en/blog/TOC` `README.md` na primeira linha corresponde ao `i18n.site` na imagem abaixo, que é o nome do projeto.

As próximas duas linhas são mostradas na imagem abaixo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News` ,
`news/begin.md` corresponde a `Our Product is Online !`

`TOC` O arquivo é recuado para indicar o relacionamento hierárquico do contorno e oferece suporte ao recuo de vários níveis.

##### O Nível Pai Escreve Apenas O Título, Não O Conteúdo.

Quando existem vários níveis de recuo, o nível pai grava apenas o título e não o conteúdo. Caso contrário, a tipografia ficará confusa.

##### Projeto README.md 

`README.md` do projeto, por exemplo, você pode escrever conteúdo em `en/demo2/README.md` .

Observe que o conteúdo deste arquivo não mostra um resumo do índice, portanto, é recomendável limitar o comprimento e escrever uma breve introdução.

###### Lema Do Projeto

Como você pode ver, `Deme Two` Abaixo do menu suspenso e do nome do projeto do esboço do catálogo, está o slogan do projeto `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: corresponde à primeira linha `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projeto `README.md` O conteúdo após os primeiros dois pontos `:` no título de primeiro nível será considerado o slogan do projeto.

Usuários da China, Japão e Coréia, observem que você deve usar dois pontos de meia largura em vez de dois pontos de largura total `:`

##### Como Mover O TOC Em Massa?

`TOC` O arquivo precisa ser colocado no diretório do idioma de origem.

Por exemplo, se o idioma de origem for chinês, então `TOC` acima será `zh/blog/TOC` .

Se o idioma de origem for modificado, você precisará mover em lote `TOC` de um determinado idioma do projeto para outro idioma.

Você pode consultar os seguintes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` e `zh/` no comando acima para o código do seu idioma.


