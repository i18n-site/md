# Explicação Detalhada dos Parâmetros da Linha de Comando

## `-p` Limpeza de Arquivos

`-p` ou `--purge` limpará arquivos que existem em cada diretório de traduções, mas não estão presentes no diretório do idioma original.

Por que ao escrever documentos, os nomes dos arquivos Markdown são frequentemente ajustados, resultando em muitos arquivos antigos e obsoletos nos diretórios de traduções.

Utilize este parâmetro para limpar arquivos que deveriam ser excluídos em diretórios de outros idiomas.

## `-d` Especifica o Diretório de Tradução

O diretório de tradução é, por padrão, o diretório onde o arquivo atual está localizado.

`-d` ou `--workdir` podem especificar o diretório de tradução, por exemplo:

```
i18 -d ~/i18n/md
```

## `-h` Ver Ajuda

`-h` ou `--help` para visualizar a ajuda da linha de comando.