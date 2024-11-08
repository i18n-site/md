<h1 style="display:flex;justify-content:space-between">i18n.site Soluciones internacionales<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

¡Línea de comandos Markdown herramienta Yaml , que le ayuda a crear un sitio de documentos internacional, compatible con [cientos de idiomas](/i18/LANG_CODE) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Prefacio

Internet ha eliminado la distancia en el espacio físico, pero las diferencias lingüísticas aún obstaculizan la unidad humana.

Aunque el navegador tiene traducción incorporada, los motores de búsqueda aún no pueden realizar consultas en varios idiomas.

A través de las redes sociales y el correo electrónico, las personas están acostumbradas a centrarse en fuentes de información en su propia lengua materna.

Con la explosión de la información y el mercado global, para competir por la escasa atención, **admitir varios idiomas es una habilidad básica** .

Incluso si se trata de un proyecto personal de código abierto que quiere influir en un público más amplio, se debe hacer una selección de tecnología internacional desde el principio.

## <a rel=id href="#project" id="project"></a> Introducción del proyecto

Este sitio proporciona actualmente dos herramientas de línea de comandos de código abierto:

* [i18 : MarkDown Herramienta de traducción de línea de comando](/i18/feature)
* [i18n.site : Generador de sitios web estáticos en varios idiomas](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: herramienta de traducción de línea de comando MarkDown

Una herramienta de línea de comandos ( [código fuente](https://github.com/i18n-site/rust/tree/main/i18) ) que traduce `Markdown` y `YAML` a varios idiomas.

Puede mantener perfectamente el formato de `Markdown` . Puede identificar modificaciones de archivos y solo traducir archivos modificados.

La traducción es editable.

Modifica el texto original y vuelve a traducirlo automáticamente, las modificaciones manuales de la traducción no se sobrescribirán (si no se ha modificado este párrafo del texto original).

Puede utilizar las herramientas más familiares para editar `Markdown` traducción (pero no puede agregar ni eliminar párrafos) y utilizar la forma más familiar para realizar el control de versiones.

Se puede crear una base de código como código abierto para archivos de idioma y, con la ayuda de `Pull Request` procesos, los usuarios globales pueden participar en la optimización continua de las traducciones. ¡Conexión perfecta [github](//github.com) Y otras comunidades de código abierto.

> [!TIP]
> Adoptamos la filosofía UNIX de "todo es un archivo" y podemos gestionar traducciones a cientos de idiomas sin introducir soluciones empresariales complejas y engorrosas.

[→ Para obtener instrucciones de uso, lea la documentación del proyecto](/i18) .

## Traducción Automática De La Mejor Calidad

Hemos desarrollado una nueva generación de tecnología de traducción que combina las ventajas técnicas de los modelos tradicionales de traducción automática y los grandes modelos de lenguaje para realizar traducciones precisas, fluidas y elegantes.

Las pruebas ciegas muestran que nuestra calidad de traducción es significativamente mejor en comparación con servicios similares.

Para lograr la misma calidad, la cantidad de edición manual requerida por Google Translate y `ChatGPT` es `2.67` y `3.15` veces mayor que la nuestra respectivamente.

#### <a rel=id href="#price" id="price"></a> Precios extremadamente competitivos

|                                                                                   | USD/millón de palabras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonas](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Haga clic aquí para autorizar y seguir automáticamente i18n.site biblioteca github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) y **recibir un bono $50** .

Nota: La cantidad de caracteres facturables = [la cantidad de unicode](https://en.wikipedia.org/wiki/Unicode) en el archivo de origen × la cantidad de idiomas en la traducción

### i18n.site: Generador De Sitios Estáticos en Varios Idiomas

Herramienta de línea de comando ( [código fuente](https://github.com/i18n-site/rust/tree/main/i18n-site) ) para generar sitios estáticos en varios idiomas.

Puramente estático, optimizado para la experiencia de lectura, integrado con la traducción de [i18](#i18) es la mejor opción para crear un sitio de documentos de proyecto.

El marco de front-end subyacente adopta una arquitectura de complemento completa, que es fácil para el desarrollo secundario. Si es necesario, se pueden integrar funciones de back-end.

Este sitio web se desarrolla en base a este marco e incluye funciones de usuario, pago y otras ( [código fuente](/i18n.site/c/src) ). Se escribirá un tutorial detallado más adelante.

[→ Para obtener instrucciones de uso, lea la documentación del proyecto](/i18n.site) .

## Mantenerse en Contacto

Haga <button onclick="mailsub()">clic en este correo electrónico para suscribirse a las actualizaciones del producto</button> y <button onclick="webpush()">habilitar la inserción del navegador</button> . Le notificaremos cuando se realicen actualizaciones del producto.

¡También bienvenido a seguir nuestras cuentas sociales [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .

Si tiene problemas [→ publíquelo en el foro de usuarios](https://groups.google.com/u/1/g/i18n) .

## Sobre Nosotros

> Dijeron: Ven, construye una torre que llegue al cielo y haga famosa a la raza humana.
>
> El Señor vio esto y dijo: "Todos los seres humanos tenemos la misma lengua y la misma raza. Ahora que esto se ha cumplido, todo se hará".
>
> Luego vino, haciendo que los seres humanos fueran incapaces de entender el idioma de los demás y se dispersaran en varios lugares.

<p style="text-align:right">──Biblia·Génesis</p>

Queremos construir una Internet sin aislamiento de la comunicación lingüística.
Esperamos que toda la humanidad se una con un sueño común.

Los sitios de traducción y documentación de Markdown son solo el comienzo.
Sincronizar la publicación de contenido en las redes sociales;
Apoyar comentarios bilingües y salas de chat;
Un sistema de tickets multilingüe que puede pagar recompensas;
Un mercado de venta de componentes front-end internacionales;
Hay mucho más que queremos hacer.

Creemos en el código abierto y nos encanta compartir.
Bienvenidos a crear juntos un futuro sin fronteras.

> [!NOTE]
> Esperamos conocer personas con ideas afines en el vasto mar de personas.
> Buscamos voluntarios para participar en el desarrollo de código abierto y revisión de textos traducidos.
> Si está interesado, por favor [→ Haga clic aquí para completar su perfil](https://ggl.link/i18n) y luego únase [a la lista de correo](https://groups.google.com/u/2/g/i18n-site) para comunicarse.