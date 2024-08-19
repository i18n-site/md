# Instalação e Uso

## Windows deve instalar primeiro o Git Bash

Sistema Windows, [clique aqui para baixar e instalar o `git bash`](https://git-scm.com/download/win) primeiro.

Execute as operações subsequentes no `git bash`.

## Instalar

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configuração do Token de Tradução

Visite [i18n.site/token](//i18n.site/token) e clique para copiar o token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Crie `~/.config/i18n.site.yml`, colando o conteúdo copiado nele, como segue:

```
token: YOUR_API_TOKEN
```

Além disso, é necessário绑订 [i18n.site/payBill](//i18n.site/payBill) um cartão de crédito para pagamentos (sem necessidade de recarga, o site fará a cobrança automática com base no uso, [ver preços na página inicial](/#price)).

## Usar

### Projeto de Demonstração

Consulte o projeto demonstrativo [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) para aprender a configuração da tradução `i18`.

Os usuários da China podem clonar [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Após克隆, entre no diretório e execute `i18` para completar a tradução.

### Estrutura de Diretório

A estrutura de diretórios do repositório modelo é a seguinte:

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

### Adicionar Arquivos ao Repositório

O programa, além da tradução, também gerará os seguintes arquivos, que devem ser adicionados ao repositório.

```
.i18n/hash
.i18n/cache/.gitignore
```

Dentre eles, o conteúdo de `.i18n/cache/.gitignore` é o seguinte:

```
**/*
!**/.gitignore
```

Isso indica que todos os arquivos no diretório `.i18n/cache/` (exceto `.i18n/cache/.gitignore`) serão ignorados.

Se seu software de controle de versão não for `git`, configure-o conforme esta configuração.

## Arquivo de Configuração

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

### Idioma de Origem & Idioma de Tradução

No arquivo de configuração, o campo `fromTo` inclui:

`en` é o idioma de origem, enquanto `zh ja ko de fr` são os idiomas de tradução.

Os códigos de idioma podem ser encontrados em [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Por exemplo, para traduzir chinês para inglês, modifique a linha para `zh: en`.

Se desejar traduzir para todos os idiomas suportados, deixe em branco após `:`. Por exemplo:

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

Nesta tabela de configuração, o diretório `blog` tem `zh` como idioma de origem para tradução, enquanto `blog/your_file_name.md` tem `ja` como idioma de origem.

### Ignorar Arquivos

Por padrão, todos os arquivos com `.md` e `.yml` no diretório do idioma de origem serão traduzidos.

Se desejar ignorar alguns arquivos para que não sejam traduzidos (como rascunhos incompletos), configure-o com o campo `ignore`.

O campo `ignore` usa a mesma sintaxe [globset](https://docs.rs/globset/latest/globset/#syntax) que o arquivo `.gitignore`.

Por exemplo, `_*` no arquivo de configuração acima significa que arquivos começando com `_` não serão traduzidos.

## Regras de Tradução

### Os editores de tradução não devem adicionar ou excluir linhas

A tradução é editável. Ao modificar o texto original e traduzir novamente, as edições manuais na tradução não serão substituídas (a menos que o parágrafo original tenha sido modificado).

No entanto, é importante que as linhas da tradução correspondam às linhas do texto original. Não adicione ou exclua linhas na tradução, pois isso pode causar confusão no cache de edição da tradução.

Se houver algum problema, consulte [as soluções nas perguntas frequentes](/i18/qa#H1)

### Traduções de `YAML`

A ferramenta de linha de comando encontrará todos os arquivos que terminam em `.yml` no diretório do idioma de origem e os traduzirá.

* Note que o sufixo do nome do arquivo deve ser `.yml` (não `.yaml`).

A ferramenta traduz apenas os valores dos dicionários em `.yml`, não as chaves.

Por exemplo, `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

será traduzido para `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

A tradução de `YAML` também pode ser editada manualmente (mas não adicione ou exclua chaves ou linhas na tradução).

Com base nas traduções de `YAML`, você pode construir facilmente soluções internacionais para diversas linguagens de programação.

## Usos Avançados

### Tradução de Subdiretórios

Desde que `.i18n/conf.yml` seja criado (sem a necessidade de começar sempre a partir do modelo de projeto demonstrativo), `i18` funcionará corretamente.

A ferramenta de linha de comando encontrará todas as configurações `.i18n/conf.yml` nos subdiretórios e as traduzirá.

Projetos que utilizam a arquitetura [monorepo](//monorepo.tools) podem dividir os arquivos de idioma em subdiretórios.

![](https://p.3ti.site/1719910016.avif)

### Diretório de Instalação Personalizado

Por padrão, será instalado em `/usr/local/bin`.

Se `/usr/local/bin` não tiver permissão de gravação, será instalado em `~/.bin`.

Definir a variável de ambiente `TO` pode definir o diretório de instalação, por exemplo:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```