# Instalar E Usar

## O windows Instala Primeiro O git bash

windows Sistema, [clique aqui para baixar e instalar `git bash` primeiro](https://git-scm.com/download/win) .

Execute operações subsequentes em `git bash` .

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurar Token De Tradução

Visite [i18n.site/token](//i18n.site/token) Clique para copiar o token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Crie `~/.config/i18n.site.yml` , cole o conteúdo copiado nele, o conteúdo é o seguinte:

```
token: YOUR_API_TOKEN
```

Além disso, você precisa vincular um cartão de crédito para [i18n.site/payBill](//i18n.site/payBill) (não é necessária recarga, o site deduzirá automaticamente as taxas de acordo com o uso, [consulte a página inicial para obter preços](/#price) ).

## Usar

### Projeto De Demonstração

Consulte o projeto de [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) para aprender a configuração da tradução `i18` .

Os usuários na China podem clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Após a clonagem, entre no diretório e execute `i18` para concluir a tradução.

### Estrutura De Diretório

A estrutura de diretórios do warehouse modelo é a seguinte

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Os arquivos de demonstração traduzidos no diretório `en` são apenas um exemplo e podem ser excluídos.

### Executar Tradução

Entre no diretório e execute `i18` para traduzir.

Além da tradução, o programa também irá gerar a pasta `.i18n/data` , adicione-a ao repositório.

Após traduzir o novo arquivo, um novo arquivo de dados será gerado neste diretório. Lembre-se de anexar `git add . ` .

## Arquivo De Configuração

`.i18n/conf.yml` é o arquivo de configuração da ferramenta de tradução de linha de comando `i18`

O conteúdo é o seguinte:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Idioma De Origem &

No arquivo de configuração, o subordinado de `fromTo` :

`en` é o idioma de origem, `zh ja ko de fr` é o idioma de destino da tradução.

Código do idioma veja [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Por exemplo, se você deseja traduzir o chinês para o inglês, reescreva esta linha `zh: en` .

Se você deseja traduzir para todos os idiomas suportados, deixe em branco após `:` . por exemplo

```
i18n:
  fromTo:
    en:
```

Você pode configurar diferentes `fromTo` para diferentes subdiretórios / Uma demonstração é escrita a seguir :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Nesta tabela de configuração, o idioma de origem da tradução do catálogo `blog` é `zh` e o idioma de origem da tradução do catálogo `blog/your_file_name.md` é `ja` .

### Imagens/Links Multilíngues

Quando os URLs nas imagens e links em `replace:` e `MarkDown` (e os atributos `src` e `href` do incorporado `HTML` ) são configurados em `.i18n/conf.yml` com este prefixo, o código do idioma fonte no URL será substituído pelo código do idioma da tradução ( [idioma lista de códigos](/i18/LANG_CODE) ).

Por exemplo, sua configuração é a seguinte:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` é um dicionário, a chave é o prefixo da URL a ser substituída e o valor é a regra de substituição.

O significado de substituir a regra `ko de uk>ru zh-TW>zh >en` acima é que `ko de` usa a imagem de seu próprio código de idioma, `zh-TW` e `zh` usam a imagem de `zh` , `uk` usa a imagem de `ru` e outros idiomas (como `ja` ) usam a imagem de `en` por padrão.

Por exemplo, o arquivo de origem francês ( `fr` ) de `MarkDown` é o seguinte :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

O arquivo em inglês ( `en` ) traduzido e gerado é o seguinte :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Aqui, `/en/` no código do idioma fonte são substituídos por `/zh/` no idioma alvo.

Nota : Deve haver `/` antes e depois do código do idioma do texto substituído no URL.

> [!TIP]
> Se `- /` estiver configurado em `url:` , apenas os caminhos relativos serão correspondidos, mas os URLs que começam com `//` não serão correspondidos.
>
> Se alguns links de um nome de domínio desejarem ser substituídos e outros não, você poderá usar prefixos diferentes, como `[x](//x.com/en/)` e `[x](https://x.com/en/)` para distingui-los.

### Ignorar Arquivo

Por padrão, todos os arquivos começando com `.md` e `.yml` no diretório do idioma de origem serão traduzidos.

Se quiser ignorar determinados arquivos e não traduzi-los (como rascunhos inacabados), você pode configurá-lo com o campo `ignore` .

`ignore` usa a mesma sintaxe [globset](https://docs.rs/globset/latest/globset/#syntax) do arquivo `.gitignore` .

Por exemplo, `_* ` no arquivo de configuração acima significa que os arquivos que começam com `_` não serão traduzidos.

## Regras De Tradução

### Os Editores De Tradução Não Devem Adicionar Ou Excluir Linhas

A tradução é editável. Modifique o texto original e traduza-o automaticamente novamente, as modificações manuais na tradução não serão substituídas (se este parágrafo do texto original não tiver sido modificado).

> [!WARN]
> Deve haver uma correspondência individual entre as linhas da tradução e o texto original. Ou seja, não adicione ou exclua linhas ao compilar a tradução. Caso contrário, causará confusão no cache de edição da tradução.

Se algo der errado, consulte [o FAQ para soluções.](/i18/qa#H1)

### `YAML` Traduções

A ferramenta de linha de comando encontrará todos os arquivos que terminam em `.yml` no diretório do arquivo do idioma de origem e os traduzirá.

* Observe que o sufixo do nome do arquivo deve ser `.yml` (não `.yaml` ).

A ferramenta traduz apenas os valores do dicionário em `.yml` , não as chaves do dicionário.

Por exemplo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

será traduzido como `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

A tradução de `YAML` também pode ser modificada manualmente (mas não adicione ou exclua chaves ou linhas na tradução).

Com base na tradução `YAML` , você pode construir facilmente soluções internacionais para diversas linguagens de programação.

## Uso Avançado

### Subdiretório De Tradução

Contanto que `.i18n/conf.yml` seja criado (não há necessidade de iniciar sempre a partir do modelo de projeto de demonstração), `i18` funcionará bem.

A ferramenta de linha de comando encontrará `.i18n/conf.yml` configurações em todos os subdiretórios e as traduzirá.

Projetos que usam a arquitetura [monorepo](//monorepo.tools) podem dividir arquivos de linguagem em subdiretórios.

![](https://p.3ti.site/1719910016.avif)

### Diretório De Instalação Personalizado

Ele será instalado em `/usr/local/bin` por padrão.

Se `/usr/local/bin` não tiver permissão de gravação, ele será instalado em `~/.bin` .

Definir a variável de ambiente `TO` pode definir o diretório de instalação, por exemplo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```