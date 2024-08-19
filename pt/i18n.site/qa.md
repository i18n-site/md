# Perguntas Frequentes

## Remoção acidental de `.i18n/v`, resultando na impossibilidade de publicar o pacote `npm`

O histórico de versões publicadas do pacote `npm` é armazenado em `.i18n/v/ol/v.hash`

Se você remover acidentalmente `.i18n/v/ol`, o pacote `npm` não poderá ser publicado.

Neste caso, primeiramente encontre o número da versão da última publicação do seu projeto em [npmjs.com](//npmjs.com), por exemplo, `0.1.9`.

Em seguida, consulte o `bash` abaixo para criar o arquivo.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Atenção: corrigir dessa maneira resultará na perda do histórico do arquivo, impedindo a atualização incremental na próxima publicação, e todo o conteúdo será repackaged e carregado novamente.