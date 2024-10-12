# Plug-in

É possível configurar plug-ins no arquivo `.i18n/conf.yml`, como:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Oficial

* `i18n.addon/toc` : Índice de Conteúdo
  gera um índice de conteúdo em `json` com base em `TOC`, habilitado por padrão

* `i18n.addon/mouse` : Efeitos de Mouse

## Convenção de Nomes de Arquivos

Os plug-ins são todos pacotes `npm`.

O pacote correspondente a `i18n.addon/toc` é [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Por padrão, o plug-in usa a versão mais recente e verifica atualizações semanalmente.

Se desejar fixar uma versão, pode-se escrever `i18n.addon/toc@0.1.3`.

O comando de tradução `i18n.site` instalará o pacote de plug-in conforme a convenção de arquivos e, em seguida, o executará.

Os nomes dos arquivos conforme a convenção são os seguintes:

### htmIndex.js

`htmIndex.js` será injetado no final de `.i18n/htm/index.js`.

Onde `__CONF__` será substituído pelo nome da configuração atual (por exemplo, `dev` ou `ol`).

### afterTran.js

Este será chamado após a tradução ser concluída, e os parâmetros passados serão os seguintes.

* `lang_li` : Lista de idiomas, onde o primeiro idioma é o idioma de origem
* `changed` : Arquivos modificados
* `root` : Diretório raiz do projeto

O valor de retorno é um dicionário, como:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` para a lista de arquivos de saída, `path` para o caminho do arquivo e `txt` para o conteúdo do arquivo.

## Funções Integradas

O tempo de execução `js` integrado é baseado em uma二次开发 de [boa](https://github.com/boa-dev/boa), com as seguintes funções integradas:

* `wPath(path, txt)` : Escreve no arquivo
* `rTxt(path)` : Lê arquivo de texto
* `rBin(path)` : Lê arquivo binário
* `rDir(dirpath)` : Lê o diretório, retornando um array: lista de diretórios, lista de arquivos

## Guia de Desenvolvimento

O desenvolvimento de plug-ins pode ser referenciado em [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)