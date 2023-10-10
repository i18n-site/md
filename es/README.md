<h1 style="justify-content:space-between">3Ti.Site · Pensamientos sin fronteras<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site，多语言的静态站点生成器，能将 Markdown 自动翻译为 [一百多种不同的语言](https://github.com/i18n-site/node/blob/main/lang/src/index.js) 。

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Es posible que algunas personas quieran preguntar, ahora que los navegadores tienen funciones de traducción integradas, ¿es innecesario internacionalizar el sitio web?

Quiero decir que **solo internacionalizando todo el sitio podremos admitir la búsqueda de texto completo en el sitio en varios idiomas y la optimización de motores de búsqueda** .

## Secuencia

"Biblia · Génesis":

> Los antiguos no distinguían entre lenguas. Nacieron con orgullo y querían construir una torre alta cuya cima llegara al cielo.
> <blockquote><p>Dios estaba disgustado con la arrogancia del hombre, por lo que dispersó a todos los seres vivientes en varios lugares, incapaces de entenderse unos a otros.</p></blockquote>
> <blockquote><p>Desde entonces, a los humanos les ha resultado difícil comunicarse, las disputas han continuado y no existe la Torre de Babel en el mundo.</p></blockquote>

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
