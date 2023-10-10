<h1 style="justify-content:space-between">3Ti.Site · No pienses en fronteras<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, un generador de sitios estáticos en varios idiomas, puede traducir automáticamente Markdown a [más de cien idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Es posible que algunas personas quieran preguntar, ahora que los navegadores tienen funciones de traducción integradas, ¿es innecesario internacionalizar el sitio web?

Quiero decir que **solo internacionalizando todo el sitio podremos admitir la búsqueda de texto completo en el sitio en varios idiomas y la optimización de motores de búsqueda** .

## Secuencia

"Biblia · Génesis":

> En la antigüedad, cuando el idioma era uno, la humanidad nacía orgullosa. Buscaban construir un edificio imponente, una torre que tocara el cielo.
>
> Sin embargo, la Divinidad, disgustada por su arrogancia, hizo que la gente se dispersara por la tierra, haciendo que sus lenguas fueran ininteligibles entre sí.
>
> A partir de entonces, la humanidad luchó por comunicarse, surgieron conflictos sin fin y el mundo ya no vio una torre que alcanzara los cielos.

La novela de ciencia ficción &quot;Three-Body&quot; (pronunciación china: `3Ti` ) ficcionaliza una civilización extraterrestre que se comunica a través de ondas electromagnéticas, no tiene barreras idiomáticas y es tecnológicamente próspera.

Espero que con la ayuda de esta herramienta, la gente de la tierra sea como gente de tres cuerpos, la comunicación no esté restringida por el lenguaje y toda la humanidad vuelva a estar unida.

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
