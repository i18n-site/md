# Explicação Detalhada Dos Parâmetros Da Linha De Comando

## `-p` Arquivos

`-p` ou `--purge` limpará os arquivos que existem em cada diretório de tradução, mas não existem no diretório do idioma de origem.

Porque ao escrever documentos, os nomes dos arquivos Markdown são frequentemente ajustados, o que leva a muitos arquivos antigos e abandonados no diretório de tradução.

Use este parâmetro para limpar arquivos que devem ser excluídos em diretórios de outros idiomas.

## `-d` Especifica O Diretório De Tradução

O diretório traduzido é padronizado como o diretório onde o arquivo atual está localizado.

`-d` ou `--workdir` podem especificar o diretório de tradução, como:

```
i18 -d ~/i18n/md
```

## `-h` Ver Ajuda

`-h` ou `--help` para visualizar a ajuda da linha de comando.