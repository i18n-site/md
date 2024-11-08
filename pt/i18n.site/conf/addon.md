# Plug-In

Plug-ins podem ser configurados em `.i18n/conf.yml` , como:

```yml
addon:
  - i18n.addon/toc
```

## Plugin Oficial

* `i18n.addon/toc` : Índice do diretório
  Gerar índice de diretório de `json` com base em `TOC` , habilitado por padrão

* `i18n.addon/mouse` : Efeitos do mouse

## Convenção De Nome De Arquivo

Plug-ins são todos pacotes `npm` .

O pacote correspondente a `i18n.addon/toc` acima é [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

O plugin usa a versão mais recente por padrão e verifica atualizações semanalmente.

Se quiser corrigir a versão, você pode escrever `i18n.addon/toc@0.1.3` .

A linha de comando de tradução `i18n.site` instalará o arquivo de convenção do pacote de plug-in e o executará.

Os nomes dos arquivos acordados são os seguintes

### htmIndex.js

`htmIndex.js` será injetado no final de `.i18n/htm/index.js` .

Onde `__CONF__` será substituído pelo nome da configuração atual (como `dev` ou `ol` ).

### afterTran.js

Ele será chamado após a conclusão da tradução e os parâmetros passados são os seguintes.

* `lang_li` : Lista de idiomas, o primeiro idioma é o idioma de origem
* `changed` : Arquivos modificados
* `root` : Diretório raiz do projeto

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

O tempo de execução `js` integrado é : no desenvolvimento secundário de [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Gravar no arquivo
* `rTxt(path)` : Ler arquivo de texto
* `rBin(path)` : Ler arquivo binário
* `rDir(dirpath)` : Leia o diretório, o valor de retorno é uma matriz : de diretórios, lista de arquivos

## Guia De Desenvolvimento

O desenvolvimento de plug-ins pode ser uma referência [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)