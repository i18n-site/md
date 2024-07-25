# Problema Comum

## Excluído Acidentalmente `.i18n/V` Fazendo Com Que O Pacote `Npm` Não Fosse Publicado.

`.i18n/v/ol/v.hash` A versão histórica do `npm` lançamento do pacote é salva em !

Se você excluir acidentalmente `.i18n/v/ol` o pacote `npm` não será publicado.

Neste momento, primeiro encontre o número da versão da última versão do seu projeto em [npmjs.com](//npmjs.com) por exemplo `0.1.9`

Em seguida, consulte o arquivo `bash` Criar abaixo.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Observe que reparar dessa forma perderá o histórico do arquivo, impossibilitando a atualização incremental da próxima versão, e todo o conteúdo será reempacotado e carregado uma vez.

