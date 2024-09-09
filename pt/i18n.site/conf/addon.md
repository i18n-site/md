# Plug-in

É possível configurar plug-ins no arquivo `.i18n/conf.yml`, como:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Oficial

* `i18n.addon/toc` : Índice do diretório
  Gerar o índice de diretório em `json` com base no `TOC`, habilitado por padrão

* `i18n.addon/mouse` : Efeitos de mouse

## Convenção de Nomes de Arquivos

Os plug-ins são todos pacotes `npm`.

O pacote correspondente a `i18n.addon/toc` é [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Por padrão, o plug-in usa a versão mais recente e verifica atualizações semanalmente.

Se desejar fixar uma versão, pode-se escrever `i18n.addon/toc@0.1.3`.

O comando de tradução `i18n.site` instalará o arquivo de convenção do pacote de plugin e, em seguida, executará.

Os nomes de arquivos padronizados são os seguintes

### htmIndex.js

`htmIndex.js` será injetado no final de `.i18n/htm/index.js`.

Onde `__CONF__` será substituído pelo nome da configuração atual (por exemplo, `dev` ou `ol`).

### afterTran.js

será chamado após a tradução ser concluída, e os parâmetros passados serão os seguintes.

* `lang_li` : Lista de idiomas, com o primeiro idioma sendo o idioma de origem
* `changed` : Arquivos alterados
* `root` : Diretório raiz do projeto

O valor de retorno será um dicionário, como

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

O tempo de execução `js` integrado é baseado em um desenvolvimento secundário do [boa](https://github.com/boa-dev/boa), com as seguintes funções embutidas:

* `wPath(path, txt)` : Escrever no arquivo
* `rTxt(path)` : Ler arquivo de texto
* `rBin(path)` : Ler arquivo binário
* `rDir(dirpath)` : Ler o diretório, retornando um array: lista de diretórios, lista de arquivos

## Guia de Desenvolvimento

O desenvolvimento de plugins pode ser referenciado em [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)