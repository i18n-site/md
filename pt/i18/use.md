# Instalar E Usar

## O windows Instala Primeiro O git bash

windows Sistema, [clique aqui para baixar e instalar primeiro `git bash`](https://git-scm.com/download/win)

Execute operações subsequentes em `git bash`

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurar Token De Tradução

Visite [i18n.site/token](//i18n.site/token) Clique para copiar o token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Crie `~/.config/i18n.site.yml` cole o conteúdo copiado nele, o conteúdo é o seguinte:

```
token: YOUR_API_TOKEN
```

Além disso, é necessário [i18n.site/payBill](//i18n.site/payBill) um cartão de crédito para pagamento (não é necessária recarga, o site deduzirá automaticamente as taxas de acordo com o uso, [veja preços na página inicial](/#price) ).

## Usar

### Projeto De Demonstração

Consulte o projeto de [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) para aprender a configuração da tradução `i18`

Os usuários na China podem clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Após a clonagem, entre no diretório e execute `i18`

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

O diretório `en` contém os arquivos de demonstração traduzidos, que são apenas um exemplo e podem ser excluídos.

### Executar Tradução

Entre no diretório e `i18` para traduzir.

### Adicione Arquivos Ao Repositório

Além da tradução, o programa também irá gerar os seguintes arquivos, adicione-os ao repositório.

```
.i18n/hash
.i18n/cache/.gitignore
```

Entre : , o conteúdo de `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Isso significa ignorar todos os arquivos no `.i18n/cache/.gitignore` `.i18n/cache/`

Se o seu software de controle de versão não for `git` , ignore-o de acordo com esta configuração.

## Arquivo De Configuração

`.i18n/conf.yml` É o arquivo de configuração da ferramenta de tradução de linha `i18`

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

No arquivo de configuração, os subordinados de `fromTo`

`en` é o idioma de origem, `zh ja ko de fr` é o idioma de destino da tradução.

Código do idioma veja [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Por exemplo, se você deseja traduzir o chinês para o inglês, reescreva esta linha `zh: en`

Se você quiser traduzir para todos os idiomas suportados, deixe em branco depois de `:` por exemplo

```
i18n:
  fromTo:
    en:
```

### Ignorar Arquivo

Por padrão, todos os arquivos que começam com `.md` `.yml` no diretório do idioma de origem serão traduzidos.

Se quiser ignorar determinados arquivos e não traduzi-los (como rascunhos inacabados), você pode usar a configuração do campo `ignore`

`ignore` Usa uma sintaxe semelhante a `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Por exemplo, no arquivo de configuração acima `_* ` que os arquivos que começam com `_` não serão traduzidos.

## Regras De Tradução

### Os Editores De Tradução Não Devem Adicionar Ou Excluir Linhas

A tradução é editável. Modifique o texto original e traduza-o automaticamente novamente, as modificações manuais na tradução não serão substituídas (se este parágrafo do texto original não tiver sido modificado).

Mas observe que as linhas da tradução e do texto original devem corresponder uma a uma. Ou seja, não adicione ou exclua linhas ao compilar a tradução. Caso contrário, causará confusão no cache de edição da tradução.

Se algo der errado, consulte [o FAQ para soluções.](/i18/qa#H1)

### `YAML` Traduzir

A ferramenta de linha de comando encontrará todos os arquivos que terminam com `.yml` no diretório do arquivo do idioma de origem e os traduzirá.

* Observe que o sufixo do nome `.yaml` arquivo deve ser `.yml`

A ferramenta traduz apenas os valores do dicionário `.yml` não as chaves do dicionário.

por exemplo `i18n/en/i18n.yml`

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

Com base no `YAML` Translation, você pode criar facilmente soluções internacionais para diversas linguagens de programação.

## Uso Avançado

### Subdiretório De Tradução

Contanto que você crie `.i18n/conf.yml` (não é necessário iniciar sempre com o modelo de projeto de demonstração), `i18` funcionará bem.

A ferramenta de linha de comando encontrará a configuração `.i18n/conf.yml`

Projetos que usam a arquitetura [monorepo](//monorepo.tools) podem dividir arquivos de linguagem em subdiretórios.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Diretório De Instalação Personalizado

Ele será instalado em `/usr/local/bin`

Se `/usr/local/bin` não tiver permissão de gravação, será instalado em `~/.bin` .

Definir variáveis ​​de `TO` Você pode definir o diretório de instalação, por exemplo :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
