<h1 style="justify-content:space-between">3Ti.Site · Piensa sin fronteras<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generador de sitios estáticos, puede traducir Markdown automáticamente a [más de cien idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Algunas personas pueden preguntarse, dado que todos los navegadores tienen funciones de traducción, ¿es innecesario internacionalizar el sitio web?

Me gustaría decir que **solo los sitios web que generan traducciones estáticas pueden admitir la búsqueda de texto completo en el sitio multilingüe y la optimización de motores de búsqueda** .

## Introducción

La novela de ciencia ficción &quot;Three-Body&quot; (pronunciación china: `3Ti` ) ficcionaliza una civilización extraterrestre que se comunica a través de ondas electromagnéticas, no tiene barreras idiomáticas y es tecnológicamente próspera.

Biblia · Génesis :

> En esa época, las voces y palabras de todo lo que había bajo los cielos eran una sola.
>
> Construyeron una torre que llegaba hasta el cielo, tocando las puertas de Dios, uniendo corazones y alardeando de su gloria.
>
> El Señor proclamó: Cuando las personas comparten lengua y linaje, se convierten en una tribu singular. La torre no es más que el comienzo; En los días venideros, no habrá nada que no logren.
>
> Así, Él descendió, haciendo que la gente se dispersara por todas partes, y sus idiomas ahora eran ininteligibles entre sí.
>
> A partir de entonces, los conflictos fueron interminables y el mundo no vio más torres que tocaran el cielo.

Espero crear herramientas para que los habitantes de la tierra puedan ser como personas de tres cuerpos, comunicarse sin estar limitados por el lenguaje y toda la humanidad pueda volver a unirse.

Entonces, estaba [`3Ti.Site`](//3Ti.Site) .

## Tutorial

## Introducción A La Función

### Mantener Formato De Rebajas

### Modificar Traducción

Después de modificar la traducción, debe volver a ejecutar `./i18n.sh` para actualizar el caché.

### Notas De Traducción

Los comentarios de traducción deben indicar el idioma después de \```, como ` ```rust` .

Actualmente admite la traducción de comentarios para Rust, C, CPP, Java, JS, Coffee, Python y Bash.

Edite [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) para agregar soporte de traducción para comentarios en más idiomas.

### Configurar Proxy

La configuración de las siguientes variables de entorno permite que las llamadas a la API de Google Translate pasen por el proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Incrustación De Variables

```
test:测试变量<br 0>嵌入
```

### Vaciar El Caché

```bash
rm -rf .i18n/.cache
```
