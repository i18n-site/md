# .i18n/conf.yml

O arquivo de configuração para `i18n.site` é `.i18n/conf.yml`.

Exceto pelas configurações de `ignore:` e `i18n:` no [`i18n`](/i18), o arquivo de configuração é o seguinte:

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

Onde `upload` com a configuração `ext:` indica que apenas arquivos `.md` serão enviados durante a publicação.

## Navegação superior

`nav:` opções de configuração, correspondentes ao menu de navegação no topo da página inicial.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Dentre elas, `i18n: home` equivale a `home: Home` em `en/i18n.yml`.

O `en/i18n.yml` será traduzido para vários idiomas, como `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Após a tradução, é possível ajustar os valores das traduções em `yml`, mas não se deve adicionar ou remover chaves das traduções `yml`.

### `use: Toc`, modelo de arquivo único (com estrutura de tópicos)

Within the `nav` configuration:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` indica que o modelo deve ser renderizado usando o template `Toc`, que processa um único arquivo `Markdown`.

`TOC` é a abreviatura de `Table of Contents`. Este modelo, quando renderizado, exibe a estrutura do tópico do arquivo `Markdown` na barra lateral.

`url:` representa o caminho do arquivo `Markdown` (onde `/` corresponde ao diretório raiz `/README.md`, e o nome do arquivo deve ter prefixo maiúsculo e sufixo minúsculo).

### `use: Md`, modelo de arquivo único (sem estrutura de tópicos)

O modelo `Md` é semelhante ao `Toc`, ambos usados para renderizar um único arquivo `Markdown`. No entanto, o modelo `Md` não exibe a estrutura do tópico na barra lateral.

Você pode alterar `use: Toc` para `use: Md` na configuração acima, executar `i18n.site` novamente no diretório `md` e visitar o endereço de pré-visualização do desenvolvimento para observar as mudanças na página inicial.

### Carregamento padrão sem configuração de caminho

Se um caminho acessado não tiver seu prefixo configurado em `nav:`, o arquivo `Markdown` correspondente ao caminho será carregado por padrão e renderizado usando o modelo `Md`.

Como, por exemplo, ao acessar `/test`, se `nav:` não estiver configurado para esse caminho e o idioma da página for inglês (código `en`), `/en/test.md` será carregado por padrão e renderizado usando o modelo `Md`.

Se `/en/test.md` não existir, uma página padrão `404` será exibida.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, modelo de múltiplos arquivos

No arquivo de configuração:

```
  - i18n: blog
    use: Doc
```

Indica o uso de `Doc` para a renderização do modelo.

O modelo `Doc` suporta a integração de múltiplos arquivos `Markdown` para gerar estruturas de tópicos para projetos únicos ou múltiplos.

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

Aqui, `menu: NB demo1,demo2` indica que o menu suspenso deve ser renderizado usando o modelo `NB`.

`NB` é a abreviatura de `Name Brief`, significando que o menu suspenso pode exibir o nome e o slogan do projeto.

`NB` é seguido pelo parâmetro `demo1,demo2`.
Nota: ** Não deve haver espaços ** antes e depois da vírgula `,` em `demo1,demo2`.

O arquivo de índice de diretório correspondente aos parâmetros acima é:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Índice Do Índice TOC

`i18n.site` executará o plugin `js` `.i18n/hook/after.tran/TOC.js` no repositório de demonstração para ler o arquivo de índice `TOC` correspondente à configuração do modelo `doc` para gerar a estrutura de tópicos em `json`.

Se você estiver usando o modelo `doc`, deve ter este plugin.

Se você inicializar o projeto `i18n.site` a partir de uma pasta vazia, lembre-se de copiar o repositório de demonstração `.i18n` para o seu diretório.

O modelo `Doc` renderizará a estrutura de tópicos com base no `json` gerado.

##### Explicação detalhada do conteúdo

O conteúdo de `en/blog/TOC` é o seguinte:

```
README.md

news/README.md
  news/begin.md
```

##### Use recuos para indicar níveis de hierarquia

A primeira linha de `en/blog/TOC`, `README.md`, corresponde ao `i18n.site` na imagem abaixo, que é o nome do projeto.

As próximas duas linhas são como mostrado na imagem abaixo.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` corresponde a `News`
`news/begin.md` corresponde a `Our Product is Online !`

O `TOC` usa recuos para indicar a relação hierárquica do tópico e suporta recuos em múltiplos níveis.

##### O nível pai deve conter apenas o título, sem o conteúdo

Quando houver múltiplos níveis de recuo, o nível pai deve conter apenas o título, sem o conteúdo, para evitar confusão na formatação.

##### Projeto README.md

É possível escrever conteúdo no arquivo `README.md` do projeto, como em `en/demo2/README.md`.

Observe que o conteúdo deste arquivo não exibe a estrutura de tópicos, portanto, é recomendável manter o texto curto e escrever uma breve introdução.

###### Slogan do projeto

Como pode ser visto, `Deme Two` tem o slogan do projeto abaixo do menu suspenso e do nome do projeto no esboço do catálogo: `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Isso corresponde à primeira linha em `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

O conteúdo após os dois pontos `:` no título de nível um do `README.md` do projeto será considerado o slogan do projeto.

Os usuários da China, Japão e Coreia devem notar que deve-se usar os dois pontos de meia largura `:` em vez dos dois pontos de largura total.

##### Como mover o TOC em massa?

O `TOC` deve ser colocado no diretório do idioma de origem.

Como, por exemplo, se o idioma de origem for chinês, o `TOC` acima será `zh/blog/TOC`.

Se o idioma de origem for alterado, será necessário mover em massa os arquivos `TOC` de um idioma específico no projeto para outro idioma.

Você pode consultar os seguintes comandos:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Modifique `en/` e `zh/` no comando acima para o código do seu idioma.