# Preguntas Frecuentes

## Agregar O Eliminar Líneas De La Traducción, Lo Que Genera Confusión en La Traducción.

> [!WARN]
> Recuerde, **el número de líneas de la traducción debe corresponder a las líneas del texto original** .
> Es decir, al ajustar manualmente la traducción, **no agregue ni elimine líneas de la traducción** , de lo contrario se desordenará la relación de mapeo entre la traducción y el texto original.

Si agrega o elimina accidentalmente una línea, lo que causa confusión, restaure la traducción a la versión anterior a la modificación, ejecute la traducción `i18` nuevamente y vuelva a almacenar en caché la asignación correcta.

La asignación entre la traducción y el texto original está vinculada al token. Cree un nuevo token en [i18n.site/token](//i18n.site/token) elimine `.i18h/hash` y traduzca nuevamente para eliminar la asignación confusa (pero esto hará que se pierdan todos los ajustes manuales de la traducción).

## `YAML` : Cómo Evitar Que El Enlace `HTML` Se Convierta en `Markdown`

Un valor de `YAML` se trata como `MarkDown` para la traducción.

A veces, la conversión de `HTML` → `MarkDown` no es lo que queremos, como por ejemplo, `<a href="/">Home</a>` se convierte en `[Home](/)` .

Agregar cualquier atributo que no sea `href` a la etiqueta `a` , como `<a class="A" href="/">Home</a>` , puede evitar esta conversión.

## `./i18n/hash` Conflictos De Archivos a Continuación

Elimine los archivos conflictivos y vuelva a ejecutar la traducción `i18` .