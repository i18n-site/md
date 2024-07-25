# Problema Comú

## Afegir O Eliminar Línies De La Traducció, Donant Lloc a Confusió en La Traducció

Recordeu que **el nombre de línies de la traducció ha de correspondre a les línies del text original** .

És a dir, en ajustar manualment la traducció, **no afegiu ni suprimiu línies de la traducció** , en cas contrari la relació de mapeig entre la traducció i el text original es veurà desordenada.

Si afegiu o suprimiu una línia accidentalment, causant confusió, si us plau, restaurau la traducció a la versió abans de la modificació, `i18` a executar-la i torneu a guardar a la memòria cau el mapa correcte.

El mapeig entre la traducció i el text original està vinculat al testimoni Crea un nou testimoni a [i18n.site/token](//i18n.site/token) `.i18h/hash` i torna a traduir per esborrar el mapa confús (però això farà que es perdin tots els ajustaments manuals a la traducció).

## : Evitar `YAML` `HTML` De L'enllaç Es Converteixi a `Markdown`

El valor de `YAML` es tractarà com a `MarkDown` per a la traducció.

De vegades, la conversió de `HTML` → `MarkDown` no és el que volem, com ara `<a href="/">Home</a>` que es converteixen a `[Home](/)` .

Afegiu qualsevol atribut que no sigui `href` a `a` etiqueta, com ara `<a class="A" href="/">Home</a>` , per evitar aquesta conversió.

## `./I18n/Hash` Els Fitxers Següents Entren en Conflicte

Suprimeix els fitxers en conflicte i torna a executar `i18` Traductor.
