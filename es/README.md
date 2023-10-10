<h1 style="justify-content:space-between">3Ti.Site · No pienses en fronteras<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generador de sitios estáticos en varios idiomas, puede traducir automáticamente Markdown a [más de cien idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Es posible que algunas personas quieran preguntar, ahora que los navegadores tienen funciones de traducción integradas, ¿es innecesario internacionalizar el sitio web?

Quiero decir que **solo internacionalizando todo el sitio podremos admitir la búsqueda de texto completo en el sitio en varios idiomas y la optimización de motores de búsqueda** .

## Introducción

Biblia · Génesis :

> En la antigüedad, cuando los idiomas eran uno, la humanidad construyó una torre que llegaba a los cielos, un portal al dominio de Dios, proclamando el poder de la humanidad.
>
> Dios declaró: "Los hombres se unen como una tribu, con una lengua compartida, y esta torre no es más que un prólogo. Ahora logran su deseo y no quedará ninguna reverencia".
>
> Así, Dios descendió, esparciendo a la gente en diferentes rincones, usando diferentes idiomas.
>
> A partir de entonces, la comunicación humana se volvió desafiante, las disputas interminables, y ya no hubo una torre que tocara el cielo.

La novela de ciencia ficción &quot;Three-Body&quot; (pronunciación china: `3Ti` ) ficcionaliza una civilización extraterrestre que se comunica a través de ondas electromagnéticas, no tiene barreras idiomáticas y es tecnológicamente próspera.

Espero crear una herramienta que permita a la gente de la Tierra ser como personas de tres cuerpos, comunicarse sin estar atados por el lenguaje y unir a toda la humanidad nuevamente.

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
test: 测试变量<br 0>嵌入
```

### Vaciar El Caché

```bash
rm -rf .i18n/.cache
```
