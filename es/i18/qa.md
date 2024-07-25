# Problema Comun

## Agregar O Eliminar Líneas De La Traducción, Lo Que Genera Confusión en La Traducción.

Recuerde, **el número de líneas de la traducción debe corresponder a las líneas del texto original** .

Es decir, al ajustar manualmente la traducción, **no agregue ni elimine líneas de la traducción** , de lo contrario se desordenará la relación de mapeo entre la traducción y el texto original.

Si agrega o elimina accidentalmente una línea, lo que genera confusión, restaure la traducción a la versión anterior a la modificación, ejecute la traducción `i18` y vuelva a almacenar en caché la asignación correcta.

La asignación entre la traducción y el texto original está vinculada al token. Cree un nuevo token en [i18n.site/token](//i18n.site/token) , ¡elimine `.i18h/hash` y traduzca nuevamente para eliminar la asignación confusa (pero esto hará que se pierdan todos los ajustes manuales de la traducción).

## `YAML` : Evitar Que `HTML` Del Enlace Se Convierta a `Markdown`

El valor de `YAML` se tratará como `MarkDown` para la traducción.

A veces la conversión de `HTML` → `MarkDown` no es lo que queremos, como por ejemplo `<a href="/">Home</a>` que se convierte a `[Home](/)` .

Agregue cualquier atributo que no sea `href` a la etiqueta `a` , como `<a class="A" href="/">Home</a>` , para evitar esta conversión.

## `./I18n/Hash` Los Siguientes Archivos Entran en Conflicto

Elimine los archivos conflictivos y vuelva a `i18` Traducir.
