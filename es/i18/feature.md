# Características del producto

`i18` es una herramienta de línea de comandos para la traducción de Markdown y YAML.

## Puede mantener perfectamente el formato de Markdown

Admite la traducción de tablas en Markdown sin dañar el formato; no traduce palabras en fórmulas matemáticas ni en enlaces.

Admite traducción de HTML mixtos , el contenido de HTML `<pre>` y `<code>` incrustadas en `MarkDown` no Markdown traducen

## Puede identificar fórmulas matemáticas y omitir su traducción

Las fórmulas matemáticas se identifican y se omiten en la traducción.

Consulte [“Github sobre la escritura de expresiones matemáticas”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) para saber cómo escribir fórmulas matemáticas.

## Puede traducir comentarios en fragmentos de código

El código en línea y los bloques de código no se traducen, pero sí los comentarios del código.

Para traducir comentarios, debe especificar el lenguaje después de ` ``` `, como ` ```rust `.

Actualmente admite la traducción de comentarios en `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [y otros idiomas](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Si no encuentra el lenguaje de programación que necesita, [contáctenos](https://groups.google.com/g/i18n-site).

## Amigable con la línea de comandos

Hay muchas [ herramientaspesadas](https://www.capterra.com/translation-management-software) que pueden gestionar documentos de traducción.

Para los programadores familiarizados con `git`, `vim` y `vscode`, usar estas herramientas para editar documentos y gestionar versiones puede aumentar el costo de aprendizaje.

`KISS` ( `Keep It Simple, Stupid` ) Entre los principales creyentes, las soluciones a nivel empresarial son sinónimo de engorrosas, ineficientes y difíciles de usar.

La traducción debería ser tan simple como ingresar un comando y hacer clic, sin dependencias de entorno complejas.

No añada entidades si no es necesario.

## Sin modificaciones, no hay traducción

Hay también otras herramientas de traducción en línea de comandos, como [translate-shell](https://github.com/soimort/translate-shell).

Pero estas herramientas no reconocen modificaciones en los archivos, solo traducen archivos que han sido modificados para reducir costos y aumentar la eficiencia.

## La traducción es editable y la traducción automática no sobrescribirá las modificaciones manuales existentes

La traducción es editable.

Al modificar el texto original y volverse a traducirlo automáticamente, las modificaciones manuales de la traducción no se sobrescribirán (si el párrafo original no ha sido modificado).

## La mejor calidad de traducción automática

Hemos desarrollado una nueva generación de tecnología de traducción que combina las ventajas de los modelos tradicionales de traducción automática y los grandes modelos de lenguaje, para ofrecer traducciones precisas, fluidas y elegantes.

Las pruebas ciegas muestran que nuestra calidad de traducción es significativamente mejor en comparación con servicios similares.

Para lograr la misma calidad, la cantidad de edición manual requerida por Google Translate y `ChatGPT` es `2.67` y `3.15` veces mayor que la nuestra respectivamente.

## <a rel=id href="#price" id="price"></a> Precios altamente competitivos

|                                                                                   | USD/millón de palabras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Haga clic aquí para autorizar y seguir automáticamente el repositorio de código abierto de i18n.site en GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **y reciba un bono de $50**.

Nota: La cantidad de caracteres facturables = [número de caracteres Unicode](https://en.wikipedia.org/wiki/Unicode) del archivo de origen × número de idiomas de la traducción

## Traducción De Soporte `YAML`

La herramienta solo traduce los valores del diccionario en `YAML` , no las claves del diccionario.

Basado en traducción `YAML` , puede crear fácilmente soluciones internacionales para varios lenguajes de programación.

## Soporte De Configuración De Encabezado De Traducción `HOGO`

Soporta la configuración de encabezado para blogs estáticos de tipo [HOGO](https://github.com/gohugoio/hugo), traduciendo únicamente los campos `title`, `summary`, `brief` y `description`.

## No traducir nombres de variables

`Markdown` se usa como plantilla de correo electrónico, `YAML` se usa como configuración de archivo de idioma y habrá parámetros variables (por ejemplo: se ha recibido la recarga `${amount}` ).

Los nombres de variables como `${varname}` no se traducirán.

## Optimización de la traducción para China, Japón y Corea

### Cuando se traduce al inglés, los títulos se escriben automáticamente con la primera letra en mayúscula

China, Japón y Corea no tienen distinción de mayúsculas y minúsculas, pero la convención en inglés es escribir la primera letra del título en mayúscula.

`i18` puede reconocer el título en `MarkDown` y automáticamente pondrá en mayúscula la primera letra al traducir a un idioma que distinga entre mayúsculas y minúsculas.

Por ejemplo, `为阅读体验而优化` se traducirá como `Optimized for Reading Experience`.

### No traducir términos en inglés en China, Japón y Corea

Los documentos en chino, japonés y coreano a menudo contienen muchos términos en inglés.

La traducción automática de chino, japonés y coreano a otros idiomas no ingleses a menudo traduce también los términos

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Si se usa Google o DeepL, ambos traducen incorrectamente los términos en inglés que deberían permanecer en su forma original (tomando como ejemplo el japonés y el francés).

### Google Translate

Traducido al japonés: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Traducido al francés: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` se traduce como `faucon` y `Llama` como `lama`. Como nombres propios, no deben traducirse.

![](//p.3ti.site/1720199451.avif)

### DeepL Translate

Traducido al japonés: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL traduce lo anterior al francés (también reescribe los nombres propios y añade los `... ` impares):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traducción por i18n.site

La traducción de `i18` identificará los términos en inglés en los documentos chino, japonés y coreano y los dejará sin cambios.

Por ejemplo, el resultado de la traducción al japonés es:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La traducción al francés es:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Only when an English word and the Chinese, Japanese, or Korean text have a space or the English word is longer than one character will it be considered a term.

Por ejemplo: `C罗` se traducirá como `Cristiano Ronaldo`.

## Se puede combinar con la creación de sitios web multilingües de `i18n.site`

`i18` está integrado en la herramienta de línea de comandos para la creación de sitios web multilingües [`i18n.site`](/i18n.site).

Consulte la documentación de [`i18n.site`](/i18n.site) para más detalles.

## Código fuente abierto

El cliente es completamente de código abierto y el servidor tiene el 90% del código abier to. [Haga clic aquí para ver el código fuente](/i18n.site/src).

Estamos buscando voluntarios para participar en el desarrollo del código abierto y en la revisión de textos traducidos.

Si está interesado, primero [haga clic aquí para completar su perfil](https://ggl.link/i18n) y luego únase [a la lista de correo](https://groups.google.com/u/2/g/i18n-site) para comunicarse.

## Mantener el contacto

<button onclick="mailsub()">Haga clic aquí para suscribirse a las actualizaciones de productos por correo electrónico</button> y <button onclick="webpush()">active las notificaciones del navegador</button>, le notificaremos cuando se actualicen los productos.

Also follow our social media accounts [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).