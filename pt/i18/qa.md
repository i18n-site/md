# Perguntas Frequentes

## Inserir ou excluir linhas da tradução, resultando em uma tradução confusa

Lembre-se, **o número de linhas da tradução deve corresponder exatamente ao número de linhas do texto original**

Ou seja, ao ajustar manualmente a tradução, **não adicione ou exclua linhas**, pois isso causará uma desorganização no mapeamento entre a tradução e o texto original

Se, por acidente, adicionar ou excluir linhas, ocasionando uma confusão, restaure a tradução para a versão anterior e execute novamente o `i18` para rearmazenar o mapeamento correto

O mapeamento entre a tradução e o texto original está vinculado ao token. Crie um novo token em [i18n.site/token](//i18n.site/token), exclua `.i18h/hash` e traduza novamente para limpar o mapeamento confuso (mas isso resultará na perda de todas as alterações manuais feitas na tradução)

## `YAML`: Como evitar que links em `HTML` sejam convertidos para `Markdown`

Os valores `YAML` são considerados como `Markdown` para tradução

Às vezes, a conversão de `HTML` para `Markdown` não é o que desejamos, como `<a href="/">Home</a>` sendo convertido para `[Home](/)`

Adicionar qualquer atributo diferente de `href` à tag `a`, como `<a class="A" href="/">Home</a>`, pode evitar essa conversão

## Conflictos de arquivos sob `./i18n/hash`

Exclua os arquivos em conflito e execute novamente a tradução `i18`