# Problema Común

## Engadir Ou Eliminar Liñas Da Tradución, O Que Provoca Confusión Na Tradución

Lembra **que o número de liñas da tradución debe corresponder ás liñas do texto orixinal** .

É dicir, ao axustar manualmente a tradución, **non engada ou elimine liñas da tradución** , se non, a relación de mapeo entre a tradución e o texto orixinal estará desordenada.

Se accidentalmente engades ou eliminas unha liña, causando confusión, restaura a tradución á versión antes da modificación, executa a tradución `i18` e volve gardar a asignación correcta na caché.

A asignación entre a tradución e o texto orixinal está ligada ao token Crea un novo token en [i18n.site/token](//i18n.site/token) borra `.i18h/hash`

## : Evitar `YAML` `HTML` Da Ligazón Se Converta a `Markdown`

O valor de `YAML` tratarase como `MarkDown` para a tradución.

Ás veces, a conversión de `HTML` → `MarkDown` non é o que queremos, como que `<a href="/">Home</a>` se converta en `[Home](/)` .

Engade calquera atributo que non sexa `href` á etiqueta `a` , como `<a class="A" href="/">Home</a>` , para evitar esta conversión.

## `./I18n/Hash` Os Seguintes Ficheiros Entran en Conflito

Elimina os ficheiros en conflito e volve executar `i18` Traducido.
