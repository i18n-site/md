# Características del producto

`i18` es una herramienta de línea de comandos para la traducción de Markdown y YAML.

## Puede mantener perfectamente el formato de Markdown

Admite la traducción de tablas de Markdown sin dañar el formato; no traduce palabras en fórmulas matemáticas ni enlaces.

Admite traducción de mixto HTML Markdown, el contenido de las etiquetas `<pre>` y `<code>` incrustadas en HTML `MarkDown` no está traducido

## Puede identificar fórmulas matemáticas y omitir su traducción

Las fórmulas matemáticas se identifican y se omite su traducción.

Consulte [“Github sobre la escritura de expresiones matemáticas”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) para saber cómo escribir fórmulas matemáticas.

## Puede traducir comentarios en fragmentos de código

El código en línea y los bloques de código no se traducen, pero sí los comentarios del código.

Para traducir comentarios, debe especificar el idioma después de ` ``` `, como en ` ```rust `.

Actualmente admite la traducción de comentarios en `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [y otros idiomas](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Si no encuentra el lenguaje de programación que necesita, [contáctenos](https://groups.google.com/g/i18n-site).

## Amigable con la línea de comandos

Hay muchas [ herramientaspesadas](https://www.capterra.com/translation-management-software) que pueden gestionar documentos de traducción.

Para los programadores familiarizados con `git`, `vim`, `vscode`, usar estas herramientas para editar documentos y gestionar versiones puede aumentar el costo de aprendizaje.

`KISS` ( `Keep It Simple, Stupid` ) Entre los principales creyentes, las soluciones de nivel empresarial son sinónimo de engorrosas, ineficientes y difíciles de usar.

La traducción debería ser tan simple como ingresar un comando y hacer clic, sin dependencias de entorno complejas.

No añadir entidades si no es necesario.

## Sin modificaciones, no hay traducción

También hay herramientas de traducción de línea de comandos como [translate-shell](https://github.com/soimort/translate-shell).

Pero estas herramientas no reconocen modificaciones en los archivos, solo traducen archivos modificados para reducir costos y aumentar la eficiencia.

## La traducción es editable y la traducción automática no sobrescribe las modificaciones manuales existentes

La traducción es editable.

Al modificar el texto original y volver a traducirlo automáticamente, las modificaciones manuales no se sobrescribirán (si el párrafo original no ha sido modificado).

## La mejor calidad de traducción automática

Hemos desarrollado una nueva tecnología de traducción que combina las ventajas de los modelos tradicionales de traducción automática y los grandes modelos de lenguaje, para ofrecer traducciones precisas, fluidas y elegantes.

Las pruebas ciegas muestran que nuestra calidad de traducción es significativamente mejor que la de servicios similares.

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

Admite la configuración de encabezado de blogs estáticos de tipo [HOGO](https://github.com/gohugoio/hugo), traduciendo solo los campos `title`, `summary`, `brief`, `description`.

## No traducir nombres de variables

`Markdown` se usa como plantilla de correo electrónico, `YAML` como configuración de archivo de idioma, y habrá parámetros variables (por ejemplo: el depósito `${amount}` se ha recibido).

Los nombres de variables como `${varname}` no se traducirán.

## Optimización de la traducción para China, Japón y Corea

### Cuando se traduce al inglés, los títulos se escriben automáticamente con la primera letra en mayúscula

China, Japón y Corea no tienen distinción entre mayúsculas y minúsculas, pero los títulos en inglés suelen escribirse con la primera letra en mayúscula.

`i18` puede identificar los títulos en `Markdown` y automáticamente capitaliza la primera letra al traducir a un idioma que distinga entre mayúsculas y minúsculas.

Por ejemplo, `为阅读体验而优化` se traducirá como `Optimizado para la Experiencia de Lectura`.

### No traducir términos en inglés en documentos de China, Japón y Corea

Los documentos de China, Japón y Corea a menudo contienen muchos términos en inglés.

La traducción automática de China, Japón y Corea a idiomas no ingleses a menudo traduce también los términos, como en la siguiente frase en chino:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Si se usa Google o DeepL, ambos traducen incorrectamente los términos en inglés que deberían permanecer en su forma original (tomando como ejemplo el japonés y el francés).

### Google Translate

Traducido al `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` al francés :

`Falcon` se traduce como `faucon` y `Llama` se traduce como `lama` . Como nombres propios, no deben traducirse.

![](//p.3ti.site/1720199451.avif)

### DeepL Translate

Traducido al `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL Traducción de lo anterior al francés (también reescribiendo los nombres propios y añadiendo los `... ` impares):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traducción del sitio i18n

La traducción de `i18` reconoce los términos en inglés en documentos de China, Japón y Corea y los mantiene sin cambios.

Por ejemplo, el resultado de la traducción al japonés es:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La traducción al francés es:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Only when an English word and the Chinese, Japanese, or Korean text have a space between them, or the English word is longer than one character, will the word be considered a term.

Por ejemplo: `C罗` se traducirá como `Cristiano Ronaldo` .

## Se puede combinar con la creación de sitios web multilingües de `i18n.site`

`i18` está integrado en la herramienta de línea de comandos para la creación de sitios web multilingües [`i18n.site`](/i18n.site).

Consulte la documentación de [`i18n.site`](/i18n.site) para obtener más detalles.

## Código fuente abierto

El cliente es completamente de código abierto y el lado del servidor 90 El % del código es de código abierto. [Haga clic aquí para ver el código fuente](/i18n.site/src) .

Buscamos voluntarios para participar en el desarrollo de código abierto y revisión de textos traducidos.

Si está interesado, por favor [→ Haga clic aquí para completar su perfil](https://ggl.link/i18n) y luego únase [a la lista de correo](https://groups.google.com/u/2/g/i18n-site) para comunicarse.

## Mantenerse en Contacto

Haga <button onclick="mailsub()">clic en este correo electrónico para suscribirse a las actualizaciones de productos</button> y <button onclick="webpush()">habilitar la inserción del navegador</button> . Le notificaremos cuando se actualicen los productos.

¡También bienvenido a seguir nuestras cuentas sociales [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .