# Búsqueda pura de texto completo invertida en el front-end

## Secuencia

Después de varias semanas de desarrollo, [i18n.site](//i18n.site) (una herramienta de creación de sitios web de markdown multilingüe y puramente estática) ahora admite búsqueda de texto completo en el front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Este artículo compartirá la implementación técnica de la búsqueda de texto completo puramente frontal en `i18n.site`. Puedes visitar [i18n.site](//i18n.site) para experimentar el efecto de búsqueda.

Código abierto: [Núcleo de búsqueda](//github.com/i18n-site/ie/tree/main/qy) / [Interfaz de usuario](//github.com/i18n-site/plugin/tree/main/qy)

## Resumen de soluciones de búsqueda de texto completo sin servidor

Para sitios web pequeños y medianos puramente estáticos, como documentos/blogs personales, crear un backend de búsqueda de texto completo autoconstruido es demasiado pesado, y la búsqueda de texto completo sin servicios es la opción más común.

Las soluciones de búsqueda de texto completo sin servidor se dividen en dos grandes categorías:

La primera, como [algolia.com](//algolia.com), proveedores de servicios de búsqueda de terceros que ofrecen componentes front-end para la búsqueda de texto completo.

Este tipo de servicios requiere pago según el volumen de búsqueda y, a menudo, no están disponibles para los usuarios en China continental debido a problemas de cumplimiento del sitio web.

No se puede usar sin conexión, ni en la intranet, y tiene muchas limitaciones. Este artículo no los tratará en profundidad.

La segunda es la búsqueda de texto completo puramente frontal.

Los búsquedas de texto completo de front-end puras más comunes incluyen [lunrjs](//lunrjs.com) y [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (desarrollado a partir de `lunrjs`).

`lunrjs` tiene dos métodos para construir índices, y ambos presentan problemas específicos.

1. Archivos de índice preconstruidos

   Dado que el índice contiene todas las palabras de los documentos, es grande en tamaño.
   Cada vez que un documento se agrega o modifica, se debe cargar un nuevo archivo de índice.
   Esto aumentará el tiempo de espera del usuario y consumirá una gran cantidad de ancho de banda.

2. Cargar documentos y construir índices en tiempo real

   La construcción de índices es una tarea intensiva en cálculos, y reconstruir el índice cada vez que se accede puede causar retrasos evidentes y una mala experiencia de usuario.

---

Además de `lunrjs`, hay otras soluciones de búsqueda de texto completo, como:

[fusejs](//www.fusejs.io) calcula la similitud entre cadenas para efectuar la búsqueda.

Esta solución presenta un rendimiento muy deficiente y no es apta para búsquedas de texto completo (véase [Fuse.js: consultas largas superan los 10 segundos, ¿cómo optimizar?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch) utiliza un filtro Bloom para la búsqueda, pero no permite la búsqueda de prefijos (por ejemplo, al ingresar `goo`, no puede buscar `good` o `google`) ni tampoco ofrece un efecto de autocompletado similar.

Debido a las limitaciones de las soluciones actuales, `i18n.site` ha desarrollado una nueva solución de búsqueda de texto completo puramente frontal con las siguientes características:

1. Soporte para búsqueda multilingüe, pequeño en tamaño; el núcleo de búsqueda empacado con `gzip` tiene un tamaño de `6.9KB` (para comparar, `lunrjs` tiene un tamaño de `25KB`)
1. Se construye un índice invertido basado en `IndexedDB`, ocupando menos memoria y siendo rápido
1. Cuando se agregan/modifican documentos, solo se vuelven a indexar los documentos agregados o modificados, lo que reduce la cantidad de cálculos
1. Soporte para búsqueda de prefijos, permitiendo mostrar resultados de búsqueda en tiempo real mientras el usuario escribe
1. Disponible sin conexión

A continuación, se detallarán las implementaciones técnicas de `i18n.site`.

## Segmentación de palabras multilingües

La segmentación de palabras utiliza la segmentación nativa del navegador `Intl.Segmenter`, compatible con la mayoría de los navegadores principales.

![](//p.3ti.site/1727667759.avif)

El código de segmentación de palabras en `coffeescript` es el siguiente:

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

Donde:

* `/\p{P}/` es una expresión regular que coincide con signos de puntuación. Los símbolos coincidentes específicos incluyen: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `.</p><ul><li> `split('.')` se debe a que la segmentación de palabras del navegador `Firefox` no segmenta `.` .</li>


## Construction de índices

En `IndexedDB` se crearon cinco tablas de almacenamiento de objetos:

* `word`: id - palabra
* `doc`: id - URL del documento - número de versión del documento
* `docWord`: id del documento - array de ids de palabras
* `prefix`: prefijo - array de ids de palabras
* `rindex`: id de palabra - id de documento : array de números de línea

Se pasa un array con la `url` del documento y el número de versión `ver`, y se busca si el documento existe en la tabla `doc`. Si no existe, se crea un índice inverso. Al mismo tiempo, se eliminan los índices inversos de aquellos documentos que no se han proporcionado.

De esta manera, se logra una indexación incremental, reduciendo la cantidad de cálculos.

En el interfaz de usuario, se puede mostrar una barra de progreso para la carga del índice, lo que ayuda a evitar la sensación de tardanza durante la primera carga. Véase "Barra de progreso con animación, basada en una sola implementación de progress + CSS puro" [en inglés](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [en chino](//juejin.cn/post/7413586285954154522).

### Escritura de alta concurrencia en IndexedDB

El proyecto se desarrolla basado en la encapsulación asincrónica de IndexedDB, [idb](//www.npmjs.com/package/idb).

Las lecturas y escrituras en IndexedDB son asincrónicas. Al crear un índice, se carga simultáneamente el documento para crear el índice.

Para evitar la pérdida parcial de datos debido a la escritura competitiva, se puede agregar un caché `ing` entre la lectura y la escritura para interceptar la escritura competitiva, como se muestra en el siguiente código `coffeescript`.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## Búsqueda en tiempo real de prefijos

Para mostrar los resultados de búsqueda mientras el usuario escribe, por ejemplo, al escribir `wor`, se muestran palabras que comienzan con `wor` como `words` y `work`.

![](//p.3ti.site/1727684944.avif)

El núcleo de búsqueda utiliza la tabla `prefix` para encontrar todas las palabras que comienzan con la última palabra segmentada y busca secuencialmente.

La función `debounce` también se utiliza en la interfaz de usuario (implementada como se muestra a continuación) para reducir la frecuencia de las entradas del usuario que activan búsquedas y reducir la cantidad de cálculos.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precisión y cobertura

La búsqueda primero segmenta las palabras clave introducidas por el usuario.

Suponiendo que hay `N` palabras después de la segmentación, se devuelven primero los resultados que contienen todas las palabras clave, y luego los que contienen `N-1`, `N-2`, ..., `1` palabras clave.

Los primeros resultados de búsqueda garantizan la precisión de la consulta, mientras que los resultados posteriores (al hacer clic en el botón "Cargar más") garantizan la cobertura.

![](//p.3ti.site/1727684564.avif)

## Carga bajo demanda

Para mejorar la velocidad de respuesta, la búsqueda utiliza el generador `yield` para implementar la carga bajo demanda, devolviendo `limit` resultados por consulta.

Tenga en cuenta que después de `yield`, cada nueva búsqueda debe abrir una nueva transacción de consulta en `IndexedDB`.

## Búsqueda en tiempo real de prefijos

Para mostrar los resultados de búsqueda mientras el usuario escribe, por ejemplo, al escribir `wor`, se muestran palabras que comienzan con `wor` como `words` y `work`.

![](//p.3ti.site/1727684944.avif)

El núcleo de búsqueda utiliza la tabla `prefix` para encontrar todas las palabras que comienzan con la última palabra segmentada y busca secuencialmente.

La función `debounce` también se utiliza en la interfaz de usuario (implementada como se muestra a continuación) para reducir la frecuencia de las entradas del usuario que activan búsquedas y reducir la cantidad de cálculos.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponible sin conexión

La tabla de índice no almacena el texto original, solo las palabras, reduciendo así la cantidad de almacenamiento.

Para resaltar los resultados de la búsqueda, es necesario recargar el texto original, y al usar `service worker` se pueden evitar solicitudes de red repetidas.

Al mismo tiempo, dado que `service worker` almacena en caché todos los artículos, una vez que el usuario realiza una búsqueda, todo el sitio web, incluida la búsqueda, está disponible sin conexión.

## Optimización de la visualización de documentos Markdown

La solución de búsqueda frontal pura de `i18n.site` está optimizada específicamente para documentos de tipo `Markdown`.

Al mostrar los resultados de la búsqueda, se muestra el nombre del capítulo y, al hacer clic, se导航 al capítulo correspondiente.

![](//p.3ti.site/1727686552.avif)

## Resumen

Búsqueda de texto completo inversa implementada completamente en el front-end, sin necesidad de servidor. Es ideal para sitios web pequeños y medianos, como documentos y blogs personales.

`i18n.site` ofrece una búsqueda de texto completo front-end propia y de código abierto, de pequeño tamaño y rápida respuesta, que soluciona los problemas actuales de la búsqueda de texto completo front-end y proporciona una mejor experiencia de usuario.