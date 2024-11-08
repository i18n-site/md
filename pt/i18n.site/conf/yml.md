# .i18n/conf.yml

O arquivo de configuração para `i18n.site` é `.i18n/conf.yml` e o conteúdo é o seguinte :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Entre eles, `upload` a `ext:` item de configuração significa que apenas `.md` serão carregados na publicação.

## Navegação Superior

`nav:` opções de configuração, correspondentes ao menu de navegação no topo da página inicial.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre eles, `i18n: home` corresponde a `home: Home` em `en/i18n.yml` (onde `en` é o idioma de origem da tradução do projeto).

Conteúdo `en/i18n.yml` é o texto exibido no menu de navegação, que será traduzido de acordo com `fromTo` na configuração, por exemplo, traduzido para `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Após a conclusão da tradução, você pode modificar o valor da tradução `yml` , mas não adicione ou exclua a chave da tradução `yml` .

### 0Modelo De Documento `use: Toc` Com Contorno

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` significa renderizar usando um modelo `Toc` , que renderiza um único modelo `Markdown` .

`TOC` é a abreviatura de `Table of Contents` Quando este modelo for renderizado, o contorno deste arquivo `Markdown` será exibido na barra lateral.

`url:` representa o caminho do arquivo `Markdown` ( `/` corresponde ao diretório raiz `/README.md` , este nome de arquivo requer um prefixo maiúsculo e um sufixo minúsculo).

### `use: Md` De Documento Único Sem Contorno

O modelo `Md` e o modelo `Toc` são iguais e ambos são usados para renderizar um único arquivo `Markdown` . Mas o modelo `Md` não mostra o contorno na barra lateral.

Você pode modificar `use: Toc` na configuração acima para `use: Md` , executar `i18n.site` no diretório `md` novamente e, em seguida, visitar o URL de visualização do desenvolvimento para observar as alterações na página inicial.

### `use: Blog` Modelos De Blog

O modelo de blog exibe uma lista de artigos (títulos e resumos) em ordem de publicação.

[→ Clique aqui para saber mais sobre a configuração específica](/i18n.site/conf/blog)

### `use: Doc` Modelos De Documentos De Arquivo

No arquivo de configuração:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indica o uso de `Doc` para renderização de modelo.

`Doc` suporta a integração de vários `MarkDown` para gerar contornos de documentos para projetos únicos ou múltiplos.

#### Vários Projetos E Vários Arquivos

A configuração de `.i18n/conf.yml` em `i18n:doc` é o modo de renderização de vários arquivos de vários projetos.

Aqui, `menu: NB demo1,demo2` significa usar o modelo `NB` para renderizar o menu suspenso.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , que é a abreviatura de `Name Breif` , significa que o menu suspenso pode exibir o nome e o slogan do projeto.

`NB` é seguido pelo parâmetro `demo1,demo2` passado para ele.

Nota : ** Não deve haver espaços ** antes e depois da vírgula `,` em `demo1,demo2` .

O arquivo de índice de diretório correspondente para os parâmetros acima é:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Projeto Único, Vários Arquivos

Se você tiver apenas um projeto, poderá configurá-lo da seguinte maneira.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Um único projeto com vários arquivos não suporta a configuração de `url` como caminho raiz `/`
> Se __conf.yml → nav:__ Nenhum caminho raiz estiver configurado, ao acessar a página inicial do site, ele será automaticamente reescrito para a primeira URL na configuração `nav:` .
> Esse design serve para distinguir melhor documentos de projetos, blogs e outros conteúdos por meio de diretórios.
> Recomenda-se usar um único arquivo e uma única página como página inicial.

> [!TIP]
> Se `url` não for escrito, `url` assume o valor padrão de `i18n` Esta regra também entra em vigor para outros modelos.

#### Índice Do Índice TOC

Se o modelo `use: Doc` estiver habilitado na configuração, habilite o plug-in `i18n.addon/toc` em `.i18n/conf.yml` A configuração é a seguinte :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` instalará e executará automaticamente este plug-in, lerá `TOC` o arquivo de índice do diretório e gerará `json` o esboço do diretório.

Se for um único projeto com vários arquivos, o diretório raiz `TOC` é o diretório correspondente a `url:` no diretório do idioma de origem. Por exemplo, se o idioma de origem for chinês: o arquivo correspondente a `url: flashduty` é `zh/flashduty/TOC` .

Se forem vários projetos e vários arquivos, não há necessidade de configurar `url:` O diretório raiz de `TOC` é o diretório correspondente ao valor de `i18n` .

##### Explicação Detalhada Do Conteúdo

`en/blog/TOC` conteúdo é o seguinte :

```
README.md

news/README.md
  news/begin.md
```

##### Use Recuo Para Indicar Níveis

`README.md` na primeira linha do `en/blog/TOC` acima corresponde ao `i18n.site` na imagem abaixo, que é o nome do projeto.

As próximas duas linhas são mostradas na imagem abaixo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News` ,
`news/begin.md` corresponde a `Our Product is Online !`

`TOC` são recuados para indicar o relacionamento hierárquico do esboço, suportam recuo de vários níveis e comentários de linha começando com `# ` .

##### O Nível Pai Escreve Apenas O Título, Não O Conteúdo.

Quando existem vários níveis de recuo, o nível pai grava apenas o título e não o conteúdo. Caso contrário, a tipografia ficará confusa.

##### Projeto README.md

O conteúdo pode ser escrito no item `README.md` , como `en/demo2/README.md` .

Observe que o conteúdo deste arquivo não mostra um resumo do índice, portanto, é recomendável limitar o comprimento e escrever uma breve introdução.

###### Lema Do Projeto

Você pode ver que `Deme Two` tem o slogan do projeto abaixo do menu suspenso e do nome do projeto do esboço do catálogo `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Isso corresponde à primeira linha de `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

O conteúdo após os primeiros dois pontos `:` do título de primeiro nível do projeto `README.md` será considerado o slogan do projeto.

Usuários da China, Japão e Coréia, observem que você deve usar dois pontos de meia largura `:` em vez de dois pontos de largura total.

##### Como Mover O TOC Em Massa?

`TOC` precisam ser colocados no diretório do idioma de origem.

Por exemplo, se o idioma de origem for chinês, o `TOC` acima será `zh/blog/TOC` .

Se o idioma de origem for modificado, você precisará mover em lote os arquivos `TOC` de um determinado idioma no projeto para outro idioma.

Você pode consultar os seguintes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` e `zh/` no comando acima para o código do seu idioma.

### Carregamento Padrão Sem Caminho De Configuração

Para um determinado caminho que está sendo acessado, caso o prefixo do caminho não esteja configurado em `nav:` , o arquivo `MarkDown` correspondente ao caminho será carregado por padrão e renderizado utilizando o template `Md` .

Por exemplo, se `/test` for acessado e `nav:` estiver configurado sem o prefixo deste caminho, e o idioma de navegação atual for o inglês (código `en` ), `/en/test.md` será carregado por padrão e renderizado usando o template `Md` .

Se `/en/test.md` este arquivo não existir, a página padrão `404` será exibida.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">