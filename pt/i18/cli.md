# Explicação Detalhada dos Parâmetros da Linha de Comando

## `-p` para Limpeza de Arquivos

`-p` ou `--purge` irá limpar arquivos que existem em cada diretório de traduções, mas não estão presentes no diretório do idioma de origem.

Por que ao escrever documentos, os nomes dos arquivos Markdown são frequentemente ajustados, resultando em muitos arquivos antigos e desnecessários nos diretórios de traduções.

Utilize este parâmetro para limpar arquivos que deveriam ser excluídos em diretórios de outros idiomas.

## `-d` para Especificar o Diretório de Tradução

O diretório de tradução padrão é o diretório onde o arquivo atual está localizado.

`-d` ou `--workdir` pode ser usado para especificar o diretório de tradução, por exemplo:

```
i18 -d ~/i18n/md
```

## `-h` para Ver Ajuda

`-h` ou `--help` para visualizar a ajuda da linha de comando.