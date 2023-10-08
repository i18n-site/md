# I18N.SITE · Idioma Sin Fronteras<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, un generador de sitios estáticos en varios idiomas, puede traducir automáticamente Markdown a [más de cien idiomas diferentes](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="http://s-cd-3653-i18n-img.oss.dogecdn.com/i18n.lang.webp" alt="" />

Es posible que algunas personas quieran preguntar, ahora que los navegadores tienen funciones de traducción integradas, ¿es innecesario internacionalizar el sitio web?

Quiero decir que **solo internacionalizando todo el sitio podremos admitir la búsqueda de texto completo en el sitio en varios idiomas y la optimización de motores de búsqueda** .

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
