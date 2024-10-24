# Preguntes Freqüents

## Afegir O Eliminar Línies De La Traducció, Donant Lloc a Confusió en La Traducció

> [!WARN]
> Recordeu que **el nombre de línies de la traducció ha de correspondre a les línies del text original** .
> És a dir, en ajustar manualment la traducció, **no afegiu ni suprimiu línies de la traducció** , en cas contrari la relació de mapeig entre la traducció i el text original es veurà desordenada.

Si afegiu o suprimiu una línia accidentalment, causant confusió, si us plau, restaurau la traducció a la versió abans de modificar-la, torneu a executar la traducció `i18` i torneu a guardar a la memòria cau el mapa correcte.

El mapeig entre la traducció i el text original està vinculat al testimoni Crea un nou testimoni a [i18n.site/token](//i18n.site/token) suprimeix `.i18h/hash` i torna a traduir per esborrar el mapa confús (però això farà que es perdin tots els ajustos manuals a la traducció).

## `YAML` : Com Evitar Que L'enllaç `HTML` Es Converteixi en `Markdown`

Un valor de `YAML` es tracta com `MarkDown` per a la traducció.

De vegades, la conversió de `HTML` → `MarkDown` no és el que volem, com ara `<a href="/">Home</a>` es converteix en `[Home](/)` .

Afegir qualsevol atribut que no sigui `href` a l'etiqueta `a` , com ara `<a class="A" href="/">Home</a>` , pot evitar aquesta conversió.

## `./i18n/hash` Conflictes De Fitxers a Continuació

Suprimeix els fitxers en conflicte i torna a executar `i18` traducció.