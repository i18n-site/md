# Faq

## Engadir Ou Eliminar Liñas Da Tradución, O Que Provoca Confusión Na Tradución

> [!WARN]
> Lembra que **o número de liñas da tradución debe corresponder ás liñas do texto orixinal** .
> É dicir, ao axustar manualmente a tradución, **non engada ou elimine liñas da tradución** , se non, a relación de mapeo entre a tradución e o texto orixinal estará desordenada.

Se accidentalmente engades ou eliminas unha liña, causando confusión, restaura a tradución á versión antes da modificación, executa a tradución `i18` de novo e volve gardar a asignación correcta na caché.

A asignación entre a tradución e o texto orixinal está ligada ao token Crea un novo token en [i18n.site/token](//i18n.site/token) elimina `.i18h/hash` e traduce de novo para borrar a confusa asignación (pero isto fará que se perdan todos os axustes manuais da tradución).

## `YAML` : Como Evitar Que a Ligazón `HTML` Se Converta en `Markdown`

Un valor de `YAML` trátase como `MarkDown` para a tradución.

Ás veces, a conversión de `HTML` → `MarkDown` non é o que queremos, como `<a href="/">Home</a>` se converte en `[Home](/)` .

Engadir calquera atributo que non sexa `href` á etiqueta `a` , como `<a class="A" href="/">Home</a>` , pode evitar esta conversión.

## `./i18n/hash` Conflitos De Ficheiros a Continuación

Elimina os ficheiros en conflito e volve executar `i18` tradución.