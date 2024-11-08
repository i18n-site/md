# Características Del Producto

`i18` es la herramienta de línea de comando para la traducción Markdown & Yaml

## Puede Mantener Perfectamente El Formato De Markdown.

Admite la traducción de tablas Markdown sin dañar el formato; no traduce palabras en fórmulas matemáticas o enlaces.

Admite traducción de mixto HTML Markdown , el contenido de las etiquetas `<pre>` y `<code>` incrustadas en HTML `MarkDown` no está traducido

## Puede Reconocer Fórmulas Matemáticas Y Saltarse La Traducción.

Se reconocen fórmulas matemáticas y se omite la traducción.

Para saber cómo escribir fórmulas matemáticas, consulte [" Github Acerca de la escritura de expresiones matemáticas"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Capacidad Para Traducir Comentarios en Fragmentos De Código

El código en línea y los fragmentos de código no se traducen, pero los comentarios del código se pueden traducir.

Los comentarios de traducción deben indicar el idioma después de ` ``` ` , como por ` ```rust ` :

Actualmente, admite la traducción de anotaciones en `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [y otros idiomas](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Si desea traducir todos los caracteres que no están en inglés en el código, marque el segmento de código con ` ```i18n ` .

Si el lenguaje de programación que necesita no está disponible, [contáctenos](https://groups.google.com/g/i18n-site) .

## Compatible Con Línea De Comando

Hay muchas [herramientas pesadas](https://www.capterra.com/translation-management-software) disponibles para gestionar documentos de traducción.

Para los programadores que están familiarizados con `git` , `vim` y `vscode` , el uso de estas herramientas para editar documentos y administrar versiones sin duda aumentará el costo de aprendizaje.

`KISS` ( `Keep It Simple, Stupid` ) Entre los principales creyentes, las soluciones a nivel empresarial son sinónimo de engorrosas, ineficientes y difíciles de usar.

La traducción debe realizarse ingresando comandos y completándola con un clic. No debe haber dependencias de entorno complejas.

No agregue entidades a menos que sea necesario.

## Sin Modificación, Sin Traducción

También existen algunas herramientas de traducción de línea de comandos, como [translate-shell](https://github.com/soimort/translate-shell)

Sin embargo, no admiten la identificación de modificaciones de archivos y solo traducen archivos modificados para reducir costos y aumentar la eficiencia.

## La Traducción Se Puede Editar Y La Traducción Automática No Sobrescribirá Las Modificaciones Existentes.

La traducción es editable.

Modifica el texto original y vuelve a traducirlo automáticamente, las modificaciones manuales de la traducción no se sobrescribirán (si no se ha modificado este párrafo del texto original).

## Traducción Automática De La Mejor Calidad

Hemos desarrollado una nueva generación de tecnología de traducción que combina las ventajas técnicas de los modelos tradicionales de traducción automática y los grandes modelos de lenguaje para realizar traducciones precisas, fluidas y elegantes.

Las pruebas ciegas muestran que nuestra calidad de traducción es significativamente mejor en comparación con servicios similares.

Para lograr la misma calidad, la cantidad de edición manual requerida por Google Translate y `ChatGPT` es `2.67` y `3.15` veces mayor que la nuestra respectivamente.

## <a rel=id href="#price" id="price"></a> Precios extremadamente competitivos

|                                                                                   | USD/millón de palabras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonas](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Haga clic aquí para autorizar y seguir automáticamente i18n.site biblioteca github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) y **recibir un bono $50** .

Nota: La cantidad de caracteres facturables = [la cantidad de unicode](https://en.wikipedia.org/wiki/Unicode) en el archivo de origen × la cantidad de idiomas en la traducción

## Traducción De Soporte `YAML`

La herramienta solo traduce los valores del diccionario en `YAML` , no las claves del diccionario.

Basado en traducción `YAML` , puede crear fácilmente soluciones internacionales para varios lenguajes de programación.

## Soporte De Configuración De Encabezado De Traducción `HOGO`

Admite la configuración de encabezado de blog estático de tipo [HOGO](https://github.com/gohugoio/hugo) y solo traduce los campos `title` , `summary` , `brief` y `description` .

## No Traducir Nombres De Variables

`Markdown` se usa como plantilla de correo electrónico, `YAML` se usa como configuración de archivo de idioma y habrá parámetros variables (por ejemplo: se ha recibido la recarga `${amount}` ).

Los nombres de variables como `${varname}` no se considerarán traducciones al inglés.

## Optimización De La Traducción Para China, Japón Y Corea

### Cuando Se Traduce Al Inglés, La Primera Letra Del Título Se Escribe Automáticamente en Mayúscula.

China, Japón y Corea no tienen letras mayúsculas ni minúsculas, pero la convención para los títulos en inglés es poner en mayúscula la primera letra.

`i18` puede reconocer el título en `MarkDown` y automáticamente pondrá en mayúscula la primera letra al traducir a un idioma que distinga entre mayúsculas y minúsculas.

Por ejemplo, `为阅读体验而优化` se traducirá en `Optimized for Reading Experience` .

### Los Términos en Inglés en Chino, Japonés, Coreano Y Chino No Están Traducidos.

Los documentos de China, Japón y Corea suelen contener muchos términos en inglés.

La traducción automática de los idiomas chino, japonés y coreano se ha convertido en un idioma distinto del inglés y los términos a menudo se traducen juntos, como la siguiente oración en chino:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Si utiliza Google o DeepL, ambos traducen incorrectamente términos en inglés que deberían permanecer originales (tome el japonés y el francés como ejemplos).

### Google Translate

Traducido al `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` al francés :

`Falcon` se traduce como `faucon` y `Llama` se traduce como `lama` . Como nombres propios, no deben traducirse.

![](//p.3ti.site/1720199451.avif)

### Traducción Profunda

Traducido al `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL Traducción de lo anterior al francés (también reescribiendo los nombres propios y añadiendo los `... ` impares):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traducción Del Sitio i18n.

La traducción de `i18` reconocerá términos en inglés en documentos chinos, japoneses y coreanos y los dejará intactos.

Por ejemplo, el resultado de la traducción japonesa anterior es:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La traducción francesa es:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Sólo cuando haya un espacio entre la palabra en inglés y el texto en chino, japonés y coreano o la longitud en inglés sea mayor que 1, la palabra se considerará un término.

Por ejemplo: `C罗` se traducirá como `Cristiano Ronaldo` .

## Se Puede Combinar Con Más De `i18n.site` Idiomas Para Crear Un Sitio Web.

`i18` está integrado en la herramienta de línea de comandos de creación de sitios web en varios idiomas [`i18n.site`](/i18n.site) .

Consulte la documentación de [`i18n.site`](/i18n.site) para obtener más detalles.

## Código Fuente Abierto

El cliente es completamente de código abierto y el % del código del lado del 90 es de código abierto. [Haga clic aquí para ver el código fuente](/i18n.site/c/src) .

Buscamos voluntarios para participar en el desarrollo de código abierto y revisión de textos traducidos.

Si está interesado, por favor [→ Haga clic aquí para completar su perfil](https://ggl.link/i18n) y luego únase [a la lista de correo](https://groups.google.com/u/2/g/i18n-site) para comunicarse.

## Mantenerse en Contacto

Haga <button onclick="mailsub()">clic en este correo electrónico para suscribirse a las actualizaciones del producto</button> y <button onclick="webpush()">habilitar la inserción del navegador</button> . Le notificaremos cuando se realicen actualizaciones del producto.

¡También bienvenido a seguir nuestras cuentas sociales [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .