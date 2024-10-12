# .i18n/conf.yml

O arquivo de configuração para `i18n.site` é `.i18n/conf.yml`, com o seguinte conteúdo:

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

Entre eles, a configuração `upload` com `ext:` indica que apenas arquivos `.md` serão enviados durante a publicação.

## Navegação superior

As opções de configuração `nav:` correspondem ao menu de navegação no topo da página inicial.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre eles, `i18n: home` corresponde a `home: Home` em `en/i18n.yml` (onde `en` é o idioma de origem das traduções do projeto).

O conteúdo de `en/i18n.yml` é o texto exibido no menu de navegação, que será traduzido conforme a configuração `fromTo`, por exemplo, traduzido para `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Após a tradução, é possível modificar os valores das traduções em `yml`, mas não se deve adicionar ou remover chaves das traduções em `yml`.

### `use: Toc`, modelo de arquivo único com sumário

Na configuração `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` indica que deve-se usar o modelo `Toc` para renderizar, que é para um único arquivo `Markdown`.

`TOC` é a abreviatura de `Table of Contents`. Quando este modelo é renderizado, o sumário do arquivo `Markdown` será exibido na barra lateral.

`url:` representa o caminho do arquivo `Markdown` (com `/` correspondendo ao diretório raiz `/README.md`, onde o nome do arquivo deve ter prefixo maiúsculo e sufixo minúsculo).

### `use: Md`, modelo de arquivo único sem sumário

O modelo `Md` é semelhante ao `Toc`, ambos usados para renderizar um único arquivo `Markdown`. No entanto, o modelo `Md` não exibe o sumário na barra lateral.

Você pode alterar `use: Toc` para `use: Md` na configuração acima, executar `i18n.site` novamente no diretório `md` e, em seguida, visitar o URL de pré-visualização do desenvolvimento para observar as mudanças na página inicial.

### `use: Blog`, modelo de blog

O modelo de blog exibe uma lista de artigos (títulos e resumos) em ordem de publicação.

[→ Clique aqui para saber mais sobre a configuração específica](/i18n.site/conf/blog)

### `use: Doc`, modelo de documento multifile

Na configuração do arquivo:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Indica o uso de `Doc` para renderizar o modelo.

O modelo `Doc` suporta a integração de múltiplos arquivos `Markdown` para gerar um sumário de documentos para um ou mais projetos.

#### Múltiplos projetos e múltiplos arquivos

A configuração `.i18n/conf.yml` para `i18n:doc` é o modo de renderização multifile para múltiplos projetos.

Aqui, `menu: NB demo1,demo2` significa usar o modelo `NB` para renderizar o menu suspenso.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` é a abreviatura de `Name Brief`, significando que o menu suspenso pode exibir o nome e o slogan do projeto.

`NB` é seguido pelo parâmetro `demo1,demo2`.

Nota: ** Não deve haver espaços ** antes e depois da vírgula `,` em `demo1,demo2`.

Os parâmetros acima correspondem ao arquivo de índice de diretório:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Projeto único, múltiplos arquivos

Se você tiver apenas um projeto, pode configurar da seguinte maneira.

```
  - i18n: xxx
    use: Doc
```

##### Quando O url Está Vazio, O Valor Padrão É i18n

Se `url` não for escrito, `url` assume o valor padrão de `i18n` Esta regra também entra em vigor para outros modelos.

Esse método de escrita é equivalente a `url: xxx`, e o arquivo correspondente é `en/xxx/TOC`.

#### Índice Do Índice TOC

`i18n.site` executará o plugin `js` `.i18n/hook/after.tran/TOC.js` no repositório de demonstração para ler o arquivo de índice `TOC` correspondente à configuração do modelo `doc` para gerar o sumário em `json`.

Se você usar o modelo `doc`, deve ter esse plugin.

Se você inicializar o projeto `i18n.site` a partir de uma pasta vazia, lembre-se de copiar o `.i18n` do projeto de demonstração para o seu diretório.

O modelo `Doc` renderizará o sumário do índice com base no `json` gerado.

##### Explicação detalhada do conteúdo

O conteúdo de `en/blog/TOC` é o seguinte:

```
README.md

news/README.md
  news/begin.md
```

##### Use recuo para indicar níveis

A primeira linha de `en/blog/TOC`, `README.md`, corresponde ao `i18n.site` na imagem abaixo, que é o nome do projeto.

As próximas duas linhas são como mostrado na imagem abaixo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News`
`news/begin.md` corresponde a `Our Product is Online !`

O arquivo `TOC` usa recuo para indicar a hierarquia do sumário, suportando recuo de vários níveis e linhas de comentário iniciadas por `#`.

##### O nível pai deve conter apenas o título, sem o conteúdo

Quando há vários níveis de recuo, o nível pai deve conter apenas o título, sem o conteúdo, para evitar distorções no layout.

##### Projeto README.md

É possível escrever conteúdo no arquivo `README.md` do projeto, como em `en/demo2/README.md`.

Observe que o conteúdo deste arquivo não exibe um sumário do índice, portanto, recomenda-se controlar o comprimento e escrever uma breve introdução.

###### Slogan do projeto

É possível ver que `Deme Two` tem o slogan do projeto abaixo do menu suspenso e do nome do projeto no sumário do catálogo: `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Isso corresponde à primeira linha de `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

O conteúdo após os dois pontos `:` do primeiro título do `README.md` do projeto será considerado o slogan do projeto.

Usuários da China, Japão e Coreia, note que deve-se usar o caractere de dois pontos de meia largura `:` em vez do caractere de dois pontos de largura total.

##### Como mover o TOC em massa?

O `TOC` deve ser colocado no diretório do idioma de origem.

Por exemplo, se o idioma de origem for chinês, o `TOC` acima será `zh/blog/TOC`.

Se o idioma de origem for alterado, será necessário mover em lote os arquivos `TOC` de um idioma específico para outro idioma no projeto.

Você pode consultar os seguintes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` e `zh/` no comando acima para o código do seu idioma.

### Carregamento padrão sem caminho de configuração

Para um caminho específico que está sendo acessado, se o prefixo do caminho não estiver configurado em `nav:`, o arquivo `Markdown` correspondente ao caminho será carregado por padrão e renderizado usando o modelo `Md`.

Por exemplo, se `/test` for acessado e `nav:` não tiver o prefixo configurado para este caminho, e o idioma de navegação atual for inglês (código `en`), `/en/test.md` será carregado por padrão e renderizado usando o modelo `Md`.

Se `/en/test.md` não existir, a página padrão `404` será exibida.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">