# Problema Comum

## Adicionar Ou Excluir Linhas Da Tradução, Resultando Em Confusão Na Tradução

Lembre-se, **o número de linhas da tradução deve corresponder ao número de linhas do texto original** .

Ou seja, ao ajustar manualmente a tradução, **não adicione ou exclua linhas da tradução** , caso contrário a relação de mapeamento entre a tradução e o texto original ficará desordenada.

Se você acidentalmente adicionar ou excluir uma linha, causando confusão, restaure a tradução para a versão anterior à modificação, execute a tradução `i18` e armazene novamente em cache o mapeamento correto.

O mapeamento entre a tradução e o texto original está vinculado ao token. Crie um novo token em [i18n.site/token](//i18n.site/token) , exclua `.i18h/hash` e traduza novamente para limpar o mapeamento confuso (mas isso fará com que todos os ajustes manuais na tradução sejam perdidos).

## `YAML` : Evitar Que `HTML` Do Link Seja Convertido Para `Markdown`

O valor de `YAML` será tratado como `MarkDown` para tradução.

Às vezes a conversão de `HTML` → `MarkDown` não é o que queremos, como `<a href="/">Home</a>` sendo convertido para `[Home](/)` .

Adicione qualquer atributo diferente de `href` à tag `a` , como `<a class="A" href="/">Home</a>` , para evitar essa conversão.

## `./I18n/Hash` Os Seguintes Arquivos Entram Em Conflito

Exclua os arquivos conflitantes e execute novamente `i18` Translate.
