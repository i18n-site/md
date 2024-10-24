<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Soluciones de Internacionalización <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Herramienta de línea de comandos para Markdown y YAML, que le ayuda a construir sitios de documentos internacionales, compatible con [cientos de idiomas](/i18/LANG_CODE) ..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Prefacio

La red ha eliminado la distancia física, pero las diferencias lingüísticas siguen siendo una barrera para la unidad humana.

Aunque los navegadores ya incluyen traducción, los motores de búsqueda aún no pueden realizar búsquedas en múltiples idiomas.

Las redes sociales, el correo electrónico, todos están acostumbrados a centrarse en información en su lengua materna.

En una era de sobrecarga de información y mercados globales, **apoyar múltiples idiomas es una habilidad esencial**.

Incluso los proyectos de código abierto personales que buscan llegar a una audiencia más amplia deben elegir desde el principio tecnologías que soporten la internacionalización.

## <a rel=id href="#project" id="project"></a> Resumen del Proyecto

Actualmente, este sitio ofrece dos herramientas de línea de comandos de código abierto:

* [i18 : Herramienta de traducción de línea de comandos para Markdown](/i18/feature)
* [i18n.site : Generador de sitios estáticos multilingües](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18 : Herramienta de traducción de línea de comandos para Markdown

Una herramienta de línea de comandos ([código fuente](https://github.com/i18n-site/rust/tree/main/i18)) que traduce `Markdown` y `YAML` a varios idiomas.

Puede mantener perfectamente el formato de `Markdown`. Puede identificar modificaciones de archivos y solo traducir archivos modificados.

La traducción es editable.

Al modificar el texto original y volver a traducirlo automáticamente, las modificaciones manuales no se sobrescribirán (si el párrafo original no ha sido modificado).

> [!TIP]
> ¡Nos adherimos a la filosofía de `UNIX` "Todo es un archivo" y podemos gestionar traducciones en cientos de idiomas sin recurrir a soluciones complejas y onerosas a nivel empresarial.
> Puede editar la traducción de `Markdown` utilizando las herramientas más conocidas (sin poder agregar ni eliminar párrafos) y llevar a cabo el control de versiones de la manera más familiar.
> Se puede abrir una base de código para la creación de archivos de idioma, permitiendo a los usuarios globales participar en la mejora continua de las traducciones a través del proceso de `Pull Request`. ¡Ofrece una perfecta integración con [github](//github.com) y otras comunidades de código abierto.

[→ Guía de uso, lea la documentación del proyecto](/i18).

## La mejor calidad de traducción automática

Hemos desarrollado una nueva tecnología de traducción que combina las ventajas de los modelos tradicionales de traducción automática y los grandes modelos de lenguaje, para ofrecer traducciones precisas, fluidas y elegantes.

Las pruebas ciegas muestran que nuestra calidad de traducción es significativamente mejor que la de servicios similares.

Para lograr la misma calidad, la cantidad de edición manual requerida por Google Translate y `ChatGPT` es `2.67` y `3.15` veces mayor que la nuestra respectivamente.

#### <a rel=id href="#price" id="price"></a> Precios altamente competitivos

|                                                                                   | USD/millón de palabras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Haga clic aquí para autorizar y seguir automáticamente el repositorio de código abierto de i18n.site en GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **y reciba un bono de $50**.

Nota: La cantidad de caracteres facturables = [número de caracteres Unicode](https://en.wikipedia.org/wiki/Unicode) del archivo de origen × número de idiomas de la traducción

### i18n.site : Generador de sitios estáticos multilingües

Herramienta de línea de comandos ( [código fuente](https://github.com/i18n-site/rust/tree/main/i18n-site) ) para generar sitios estáticos multilingües.

Puramente estático, optimizado para la experiencia de lectura, integrado con la traducción de [i18](#i18), es la elección ideal para construir sitios de documentación de proyectos.

La arquitectura de front-end subyacente utiliza un enfoque de plugins completos, fácil de desarrollar secundariamente. Si es necesario, se pueden integrar funcionalidades de back-end.

Esta página se desarrolló basada en este marco, incluyendo funciones de usuario y pago ([fuente](/i18n.site/src)), y pronto se escribirá una guía detallada.

[→ Guía de uso, lea la documentación del proyecto](/i18n.site).

## Mantenerse en Contacto

Haga <button onclick="mailsub()">clic en este correo electrónico para suscribirse a las actualizaciones de productos</button> y <button onclick="webpush()">habilitar la inserción del navegador</button> . Le notificaremos cuando se actualicen los productos.

¡También bienvenido a seguir nuestras cuentas sociales [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .

Si tiene algún problema, [→ publíquelo en el foro de usuarios](https://groups.google.com/u/1/g/i18n).

## Sobre nosotros

> Ellos dijeron: "Ven, construyamos una torre que toque el cielo y demos a conocer la gloria de la humanidad".
>
> Yahvé vio esto y dijo: "La humanidad tiene una sola lengua y raza, y ahora que esto se ha cumplido, nada se les impedirá".
>
> Entonces descendió y confundió las lenguas de la humanidad, esparciéndolas por todo el mundo.

<p style="text-align:right">── Biblia, Génesis</p>

Queremos construir una Internet sin barreras lingüísticas.
Esperamos que la humanidad se una en torno a un sueño común.

La traducción de Markdown y la creación de sitios de documentación son solo el principio.
Sincronizar la publicación de contenido en redes sociales;
Soporte para comentarios bilingües y salas de chat;
Sistema de tickets multilingües con opción de recompensa;
Mercado de componentes front-end internacionalizados;
Tenemos muchos más proyectos en mente.

Creemos en el código abierto y nos encanta compartir
Bienvenidos a construir juntos un futuro sin fronteras.

> [!NOTE]
> Esperamos encontrar a personas con ideas afines en el vasto mundo.
> Buscamos voluntarios para participar en el desarrollo de código abierto y revisión de textos traducidos.
> Si está interesado, por favor [→ Haga clic aquí para completar su perfil](https://ggl.link/i18n) y luego únase [a la lista de correo](https://groups.google.com/u/2/g/i18n-site) para comunicarse.