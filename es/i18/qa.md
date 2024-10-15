# Preguntas Frecuentes

## Errores por agregar o eliminar líneas en la traducción, lo que resulta en un desorden

Recuerde, **el número de líneas de la traducción debe coincidir exactamente con el número de líneas del texto original**.

Esto significa que al ajustar manualmente la traducción, **no debe añadir ni eliminar líneas**, ya que esto causaría un desorden en la correspondencia entre la traducción y el original.

Si accidentalmente añade o elimina líneas, provocando un desorden, vuelva a la versión anterior de la traducción, ejecute nuevamente la traducción `i18` y actualice la cache de la asignación correcta.

La correspondencia entre la traducción y el original está ligada a los tokens. Cree un nuevo token en [i18n.site/token](//i18n.site/token), elimine `.i18h/hash` y realice una nueva traducción para limpiar la asignación errónea (pero esto borrará todos los ajustes manuales realizados en la traducción).

## `YAML`: Cómo prevenir que los enlaces en `HTML` se conviratan a `Markdown`

Los valores en `YAML` se consideran como `Markdown` para la traducción.

Ocasionalmente, la conversión de `HTML` a `Markdown` no es el resultado deseado, como por ejemplo, `<a href="/">Home</a>` se convierte en `[Home](/)`.

Añadir cualquier atributo distinto de `href` a la etiqueta `a`, como `<a class="A" href="/">Home</a>`, puede evitar esta conversión.

## Conflictos en los archivos bajo `./i18n/hash`

Elimine los archivos en conflicto y ejecute de nuevo la traducción `i18`.