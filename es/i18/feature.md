# Características del producto

`i18` es una herramienta de línea de comandos para la traducción de Markdown y YAML.

## Puede mantener perfectamente el formato de Markdown

Admite la traducción de tablas en Markdown sin dañar el formato; no traduce palabras en fórmulas matemáticas ni enlaces.

Admite traducción de mixto HTML Markdown , el contenido de las etiquetas `<pre>` y `<code>` de HTML incrustadas en `MarkDown` no está traducido

## Puede identificar fórmulas matemáticas y omitir su traducción

Las fórmulas matemáticas se identifican y se omiten en la traducción.

Para la escritura de fórmulas matemáticas, consulte [la guía de Github sobre la escritura de expresiones matemáticas](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Capacidad para traducir comentarios en bloques de código

No traduce el código en línea ni los bloques de código, pero sí los comentarios del código.

Para traducir comentarios, debe especificar el lenguaje después de ` ``` `, como en ` ```rust `.

Actualmente admite la traducción de comentarios en `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [y otros idiomas](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Si no encuentra el lenguaje de programación que necesita, [contáctenos](https://groups.google.com/g/i18n-site).

## Amigable con la línea de comandos

Existen muchas [ herramientaspesadas](https://www.capterra.com/translation-management-software) para gestionar documentos de traducción.

Para los programadores familiarizados con `git`, `vim`, `vscode`, usar estas herramientas para editar documentos y gestionar versiones incrementa el costo de aprendizaje.

Entre los principales seguidores del principio `KISS` ( `Manténlo Simple, Estúpido` ), las soluciones empresariales son sinónimo de pesadas, ineficientes y difíciles de usar.

La traducción debería ser tan simple como ingresar un comando y hacer clic; no debería depender de un entorno complejo.

No añadas entidades innecesarias.

## Sin modificaciones, no hay traducción

También hay herramientas de traducción en línea, como [translate-shell](https://github.com/soimort/translate-shell).

Pero estas herramientas no reconocen las modificaciones en los archivos, solo traducen archivos que han sido modificados para reducir costos y aumentar la eficiencia.

## La traducción es editable y no sobrescribe las modificaciones manuales existentes en la traducción

La traducción es editable.

Al modificar el original y traducir nuevamente, las modificaciones manuales no se sobrescribirán (si el texto original no ha sido modificado).

## La mejor calidad de traducción automática

Hemos desarrollado una nueva tecnología de traducción que combina los modelos tradicionales de traducción automática y los grandes modelos de lenguaje, para obtener traducciones precisas, fluidas y elegantes.

Las pruebas a ciegas muestran que nuestra calidad de traducción es significativamente mejor en comparación con otros servicios.

Para lograr la misma calidad, la cantidad de edición manual requerida por Google Translate y `ChatGPT` es `2.67` y `3.15` veces mayor que la nuestra respectivamente.

## <a rel=id href="#price" id="price"></a> Precios altamente competitivos

|                                                                                   | USD/millón de palabras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Haga clic aquí para autorizar y seguir automáticamente i18n.site github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) y **recibir un bono de $50** .

Nota: La cantidad de caracteres facturables = [cantidad de caracteres Unicode](https://en.wikipedia.org/wiki/Unicode) del archivo de origen × número de idiomas de la traducción

## Traducción De Soporte `YAML`

La herramienta solo traduce los valores del diccionario en `YAML` , no las claves del diccionario.

Basado en traducción `YAML` , puede crear fácilmente soluciones internacionales para varios lenguajes de programación.

## Soporte De Configuración De Encabezado De Traducción `HOGO`

Admite la traducción de la configuración de encabezado para blogs estáticos de tipo [HUGO](https://github.com/gohugoio/hugo), solo para los campos `title`, `summary` y `description`.

## No traducir nombres de variables

`Markdown` se utiliza para plantillas de correo electrónico, `YAML` como configuración de archivos de idioma, y habrá parámetros variables (por ejemplo: el depósito `${amount}` se ha registrado).

Los nombres de variables como `${varname}` no se traducirán.

## Optimización de la traducción para China, Japón y Corea

### Al traducir al inglés, los títulos se escriben automáticamente con la primera letra en mayúscula

China, Japón y Corea no tienen distinción de mayúsculas y minúsculas, pero la costumbre en los títulos en inglés es escribir la primera letra en mayúscula.

`i18` puede reconocer el título en `MarkDown` y automáticamente pondrá en mayúscula la primera letra al traducir a un idioma que distinga entre mayúsculas y minúsculas.

Por ejemplo, `为阅读体验而优化` se traducirá como `Optimized for Reading Experience`.

### No traducir términos en inglés en chino, japonés y coreano

Los documentos en chino, japonés y coreano a menudo contienen muchos términos en inglés.

La traducción automática de chino, japonés y coreano a otros idiomas no es inglés, y los términos a menudo se traducen junto con el texto

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Si se usa Google o DeepL, ambos traducen incorrectamente términos en inglés que deberían permanecer sin traducir (tomando el japonés y el francés como ejemplos).

### Google Translate

Traducido al japonés: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Traducido al francés: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` se traduce como `faucon` y `Llama` como `lama`. Como nombres propios, no deben traducirse.

![](//p.3ti.site/1720199451.avif)

### DeepL Translate

Traducido al japonés: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL Traducción de lo anterior al francés (también reescribiendo los nombres propios y añadiendo los `... ` impares):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traducción del sitio i18n

La traducción de `i18` reconoce los términos en inglés en documentos chino, japonés y coreano y los mantiene sin cambios.

Por ejemplo, el resultado de la traducción al japonés es:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La traducción al francés es:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Solo cuando la palabra en inglés y el texto en chino, japonés y coreano tienen un espacio o la longitud en inglés es mayor que 1, se considerará la palabra como un término.

Por ejemplo: `C罗` se traducirá como `Cristiano Ronaldo`.

## Compatible con la creación de sitios web multilingües con `i18n.site`

`i18` está integrado en la herramienta de línea de comandos para la creación de sitios web multilingües [`i18n.site`](/i18n.site).

Consulte la documentación de [`i18n.site`](/i18n.site) para más detalles.

## Código fuente abierto

El cliente es completamente de código abierto y el 90% del código del servidor es de código abierto. [Haga clic aquí para ver el código fuente](/i18n.site/src) .

Reynolds  Estamos buscando voluntarios para participar en el desarrollo de código abierto y en la revisión de textos traducidos.

Reynolds  Si está interesado, por favor [→ Haga clic aquí para completar su perfil](https://ggl.link/i18n) y luego únase [a la lista de correo](https://groups.google.com/u/2/g/i18n-site) para comunicarse.

## Mantente en contacto

Haga clic en <button onclick="mailsub()">este enlace para suscribirse por correo electrónico a las actualizaciones del producto</button> y <button onclick="webpush()">active las notificaciones del navegador</button>, le informaremos de las actualizaciones del producto.

También puede seguir nuestras redes sociales [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).