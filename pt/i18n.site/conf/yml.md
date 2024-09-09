# .i18n/conf.yml

O perfil para `i18n.site` é `.i18n/conf.yml`.

Exceto pelas configurações de [`i18`](/i18), `ignore:` e `i18n:`, o arquivo de configuração é o seguinte:

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
addon:
  - i18n.addon/toc
```

Entre eles, a configuração `upload` com `ext:` indica que apenas arquivos `.md` serão carregados durante a publicação.

## Navegação superior

As opções de configuração `nav:` correspondem ao menu de navegação no topo da página inicial.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Entre elas, `i18n: home` corresponde a `home: Home` em `en/i18n.yml`.

`en/i18n.yml` será traduzido para vários idiomas, como `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Após a tradução, pode-se modificar os valores das traduções `yml`, mas não se deve adicionar ou excluir chaves das traduções `yml`.

### `use: Toc`, modelo de arquivo único (com estrutura de tópicos)

Na configuração `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` indica que deve-se usar o modelo `Toc` para renderizar, o qual processa um único arquivo `Markdown`.

`TOC` é a abreviatura de `Table of Contents`; quando este modelo é renderizado, o sumário do arquivo `Markdown` será exibido na barra lateral.

`url:` representa o caminho do arquivo `Markdown` (o `/` corresponde ao diretório raiz `/README.md`, e o nome do arquivo deve ter prefixo maiúsculo e sufixo minúsculo).

### `use: Md`, modelo de arquivo único (sem estrutura de tópicos)

O modelo `Md` é semelhante ao modelo `Toc`, ambos usados para renderizar um único arquivo `Markdown`. No entanto, o modelo `Md` não exibe o sumário na barra lateral.

Você pode alterar `use: Toc` para `use: Md` na configuração acima, executar `i18n.site` novamente no diretório `md`, e depois acessar o endereço de pré-visualização do desenvolvimento para observar as mudanças na página inicial.

### Carregamento padrão sem configuração de caminho

Se um caminho acessado não tiver seu prefixo configurado em `nav:`, o arquivo `Markdown` correspondente ao caminho será carregado automaticamente e renderizado usando o modelo `Md`.

Por exemplo, ao acessar `/test`, se o caminho não estiver configurado em `nav:`, e o idioma da página for inglês (código `en`), `/en/test.md` será carregado automaticamente e renderizado usando o modelo `Md`.

Se `/en/test.md` não existir, uma página padrão `404` será exibida.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, modelo de múltiplos arquivos

No arquivo de configuração:

```
  - i18n: blog
    use: Doc
```

Indica o uso do `Doc` para a renderização de modelos.

O modelo `Doc` suporta a integração de vários arquivos `Markdown` para gerar sumários de documentos para projetos únicos ou múltiplos.

#### Projeto único (múltiplos arquivos)

O `blog` mencionado acima é o modo de projeto único do `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Quando O url Está Vazio, O Valor Padrão É i18n

Se `url` não for escrito, `url` assume o valor padrão de `i18n` Esta regra também entra em vigor para outros modelos.

A escrita acima é equivalente a `url: blog`, e o arquivo correspondente é `en/blog/TOC`.

#### Múltiplos projetos

A configuração `i18n:doc` em `.i18n/conf.yml` é para o modo de múltiplos projetos.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Aqui, `menu: NB demo1,demo2` indica que se deve usar o modelo `NB` para renderizar o menu suspenso.

`NB` é a abreviatura de `Name Brief`, significando que o menu suspenso pode exibir o nome e o slogan do projeto.

`NB` é seguido pelo parâmetro `demo1,demo2`.
Nota: ** Não deve haver espaços ** antes e depois da vírgula `,` em `demo1,demo2`.

Para os parâmetros acima, o arquivo de índice correspondente é:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Índice Do Índice TOC

`i18n.site` executará o plugin `js` `.i18n/hook/after.tran/TOC.js` no repositório de demonstração para ler o arquivo de índice `TOC` correspondente à configuração do modelo `Doc` para gerar o sumário em `json`.

Se você usar o modelo `Doc`, deve ter este plugin.

Se inicializar o projeto `i18n.site` a partir de uma pasta vazia, lembre-se de copiar o `.i18n` do projeto de demonstração para o seu diretório.

O modelo `Doc` renderizará o sumário com base no `json` gerado.

##### Explicação detalhada do conteúdo

O conteúdo de `en/blog/TOC` é o seguinte:

```
README.md

news/README.md
  news/begin.md
```

##### Use recuo para indicar níveis de hierarquia

O `README.md` na primeira linha do `en/blog/TOC` acima corresponde ao `i18n.site` na imagem abaixo, que é o nome do projeto.

As próximas duas linhas são como mostrado na figura abaixo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News`
`news/begin.md` corresponde a `Our Product is Online!`

O arquivo `TOC` usa recuo para indicar a hierarquia do sumário, suportando recuo em vários níveis e comentários iniciados por `#`.

##### O nível pai deve conter apenas o título, sem o conteúdo

Quando houver vários níveis de recuo, o nível pai deve conter apenas o título, sem o conteúdo, para evitar distorções no layout.

##### Projeto README.md

É possível escrever conteúdo no arquivo `README.md` do projeto, como em `en/demo2/README.md`.

Note que o conteúdo deste arquivo não exibe um sumário, portanto, é recomendável manter o texto curto e escrever uma breve introdução.

###### Slogan do projeto

É possível ver que `Deme Two` tem o slogan do projeto abaixo do menu suspenso e do nome do projeto no sumário do catálogo: `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Isso corresponde à primeira linha de `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

O conteúdo após os dois pontos `:` no primeiro título do `README.md` do projeto será considerado o slogan do projeto.

Os usuários da China, Japão e Coreia devem notar que deve-se usar os dois pontos de meia largura `:` em vez dos dois pontos de largura total.

##### Como mover o TOC em massa?

O `TOC` deve ser colocado no diretório do idioma de origem.

Por exemplo, se o idioma de origem for chinês, o `TOC` acima será `zh/blog/TOC`.

Se o idioma de origem for alterado, será necessário mover em massa os arquivos `TOC` de um idioma específico para outro idioma no projeto.

Referência aos seguintes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` e `zh/` no comando acima para o código do seu idioma.