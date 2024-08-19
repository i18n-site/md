# Preguntas Frecuentes

## Errores al agregar o eliminar líneas en la traducción, lo que resulta en un desorden

Recuerde, **el número de líneas de la traducción debe coincidir exactamente con el número de líneas del texto original**.

Esto significa que al ajustar manualmente la traducción, **no debe añadir ni eliminar líneas**, ya que esto causaría un desajuste en la correspondencia entre la traducción y el texto original.

Si accidentalmente añade o elimina líneas, provocando un desorden, vuelva a la versión anterior de la traducción, ejecute nuevamente la traducción `i18` y actualice nuevamente la cache de la correspondencia correcta.

La correspondencia entre la traducción y el texto original está ligada a los tokens. Cree un nuevo token en [i18n.site/token](//i18n.site/token), elimine `.i18h/hash` y realice una nueva traducción para limpiar la correspondencia errónea (pero esto borrará todos los ajustes manuales realizados en la traducción).

## `YAML`: Cómo evitar que los enlaces en `HTML` se conviratan a `Markdown`

Los valores en `YAML` se consideran como `Markdown` para la traducción.

A veces, la conversión de `HTML` a `Markdown` no es el resultado deseado, por ejemplo, `<a href="/">Home</a>` se convierte en `[Home](/)`.

Para evitar esta conversión, añada cualquier atributo adicional a la etiqueta `a` besides `href`, como `<a class="A" href="/">Home</a>`.

## Conflictos en los archivos bajo `./i18n/hash`

Para resolver los conflictos, elimine los archivos en conflicto y ejecute de nuevo la traducción `i18`.