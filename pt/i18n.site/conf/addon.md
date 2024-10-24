# Plug-in

Plug-ins podem ser configurados em `.i18n/conf.yml`, como:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Oficial

* `i18n.addon/toc`: Índice de conteúdo
  gera um índice de conteúdo em `json` com base em `TOC`, habilitado por padrão

* `i18n.addon/mouse`: Efeitos de Mouse

## Convenção de Nomes de Arquivos

Os plugins são todos pacotes `npm`.

O pacote correspondente a `i18n.addon/toc` é [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Por padrão, o plug-in usa a versão mais recente e verifica atualizações semanalmente.

Se desejar fixar uma versão, pode-se escrever `i18n.addon/toc@0.1.3`.

O comando de tradução `i18n.site` instalará o pacote de plug-in conforme a convenção e, em seguida, o executará.

Os nomes de arquivos conforme a convenção são os seguintes

### htmIndex.js

`htmIndex.js` será injetado no final de `.i18n/htm/index.js`.

Onde `__CONF__` será substituído pelo nome da configuração atual (por exemplo, `dev` ou `ol`).

### afterTran.js

Este será chamado após a tradução ser concluída, e os parâmetros passados serão os seguintes.

* `lang_li`: Lista de idiomas, com o primeiro idioma sendo o idioma de origem
* `changed`: Arquivos que foram modificados
* `root`: Diretório raiz do projeto

O valor de retorno é um dicionário, como

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` é a lista de arquivos de saída, `path` é o caminho do arquivo e `txt` é o conteúdo do arquivo.

## Funções Integradas

O tempo de execução `js` integrado é baseado em [boa](https://github.com/boa-dev/boa), com desenvolvimento secundário

* `wPath(path, txt)`: Escreve no arquivo
* `rTxt(path)`: Lê arquivo de texto
* `rBin(path)`: Lê arquivo binário
* `rDir(dirpath)`: Lê o diretório, retornando um array: lista de diretórios, lista de arquivos

## Guia de Desenvolvimento

O desenvolvimento de plug-ins pode ser referenciado em [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)