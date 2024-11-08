# Perguntas Frequentes

## Excluído Acidentalmente `.i18n/v` , Fazendo Com Que O Pacote `npm` Não Fosse Publicado

A versão histórica lançada pelo pacote `npm` é salva em `.i18n/v/ol/v.hash` .

Se você excluir acidentalmente `.i18n/v/ol` o pacote `npm` não será lançado.

Neste momento, primeiro encontre o número da última versão do seu projeto em [npmjs.com](//npmjs.com) por exemplo, `0.1.9` .

Em seguida, consulte `bash` abaixo para criar o arquivo.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Observe que reparar dessa forma perderá o histórico do arquivo, impossibilitando a atualização incremental da próxima versão, e todo o conteúdo será reempacotado e carregado uma vez.