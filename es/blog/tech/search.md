---

brief: |
  i18n.site ahora admite búsqueda de texto completo sin servidor.

  Este artículo presenta la implementación de tecnología de búsqueda de texto completo frontal pura, incluido el índice invertido creado por IndexedDB, la búsqueda de prefijos, la optimización de la segmentación de palabras y la compatibilidad con varios idiomas.

  En comparación con las soluciones existentes, la búsqueda de texto completo frontal pura de i18n.site es pequeña y rápida, adecuada para sitios web pequeños y medianos, como documentos y blogs, y está disponible sin conexión.

---

# Búsqueda Pura De Texto Completo Invertida en El Front-End

## Secuencia

Después de varias semanas de desarrollo, [i18n.site](//i18n.site) (una herramienta de creación de sitios web de markdown traducción multilingüe & puramente estática) ahora admite búsqueda de texto completo en el front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Este artículo compartirá la implementación técnica de `i18n.site` búsqueda de texto completo frontal pura. [i18n.site](//i18n.site) Visite para experimentar el efecto de búsqueda!

Código fuente abierta : [Buscar kernel](//github.com/i18n-site/ie/tree/main/qy) / [interfaz interactiva](//github.com/i18n-site/plugin/tree/main/qy)

## Una Revisión De Las Soluciones De Búsqueda De Texto Completo Sin Servidor

Para sitios web pequeños y medianos puramente estáticos, como documentos/blogs personales, crear un backend de búsqueda de texto completo autoconstruido es demasiado pesado, y la búsqueda de texto completo sin servicios es la opción más común.

Las soluciones de búsqueda de texto completo sin servidor se dividen en dos categorías amplias:

En primer lugar [algolia.com](//algolia.com) los proveedores de servicios de búsqueda de terceros similares proporcionan componentes de interfaz para la búsqueda de texto completo.

Dichos servicios requieren un pago basado en el volumen de búsqueda y, a menudo, no están disponibles para los usuarios en China continental debido a problemas como el cumplimiento del sitio web.

No se puede utilizar sin conexión, no se puede utilizar en la intranet y tiene grandes limitaciones. Este artículo no trata mucho.

El segundo es la búsqueda puramente frontal de texto completo.

En la actualidad, las búsquedas de texto completo de front-end puras comunes incluyen [lunrjs](//lunrjs.com) y [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (basado en `lunrjs` desarrollo secundario).

`lunrjs` Hay dos formas de crear índices y ambas tienen sus propios problemas.

1. Archivos de índice prediseñados

   Debido a que el índice contiene palabras de todos los documentos, es de gran tamaño.
   Cada vez que se agrega o modifica un documento, se debe cargar un nuevo archivo de índice.
   Aumentará el tiempo de espera del usuario y consumirá mucho ancho de banda.

2. Cargue documentos y cree índices sobre la marcha

   Crear un índice es una tarea computacional intensiva. Reconstruir el índice cada vez que accede provocará retrasos obvios y una mala experiencia del usuario.

---

Además de `lunrjs` , existen otras soluciones de búsqueda de texto completo, como :

[fusejs](//www.fusejs.io) , calcula la similitud entre las cadenas a buscar.

El rendimiento de esta solución es extremadamente pobre y no se puede utilizar para búsquedas de texto completo (consulte [Fuse.js Las consultas largas tardan más de 10 segundos, ¿cómo optimizarlas?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , use el filtro Bloom para buscar, no se puede usar para la búsqueda de prefijos (por ejemplo, ingrese `goo` , busque `good` , `google` ) y no puede lograr un efecto de finalización automática similar.

Debido a las deficiencias de las soluciones existentes, `i18n.site` desarrolló una nueva solución de búsqueda de texto completo frontal pura, que tiene las siguientes características :

1. Admite búsqueda en varios idiomas y es de tamaño pequeño. El tamaño del núcleo de búsqueda después del empaquetado `gzip` es `6.9KB` (a modo de comparación, el tamaño de `lunrjs` es `25KB` ).
1. Cree un índice invertido basado en `indexedb` , que ocupa menos memoria y es rápido.
1. Cuando se agregan/modifican documentos, solo se vuelven a indexar los documentos agregados o modificados, lo que reduce la cantidad de cálculos.
1. Admite la búsqueda de prefijos y puede mostrar los resultados de la búsqueda en tiempo real mientras el usuario escribe.
1. Disponible sin conexión

A continuación, se presentarán en detalle `i18n.site` detalles de implementación técnica.

## Segmentación De Palabras Multilingües

La segmentación de palabras utiliza la segmentación de palabras nativa del navegador `Intl.Segmenter` y todos los navegadores principales admiten esta interfaz.

![](//p.3ti.site/1727667759.avif)

El código de segmentación de palabras `coffeescript` es el siguiente

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

en:

* `/\p{P}/` es una expresión regular que coincide con signos de puntuación. Los símbolos coincidentes específicos incluyen: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` se debe a que la segmentación de palabras del navegador `Firefox` no segmenta `. ` .</li>


## Construcción De Índices

¡Se crearon 5 tablas de almacenamiento de objetos en `IndexedDB` :

* `word` : id -
* `doc` : id - Documento url - Número de versión del documento
* `docWord` : Matriz de documento id - palabra id
* `prefix` : Matriz de prefijo - palabra id
* `rindex` : Word id - Documento id : Matriz de números de línea

Pase la matriz del documento `url` y el número de versión `ver` , y busque si el documento existe en la tabla `doc` Si no existe, cree un índice invertido. Al mismo tiempo, elimine el índice invertido de aquellos documentos que no se pasaron.

De esta manera, se puede lograr una indexación incremental y se reduce la cantidad de cálculo.

En la interacción de front-end, la barra de progreso de carga del índice se puede mostrar para evitar el retraso cuando se carga por primera vez. Consulte "Barra de progreso con animación, basada en una implementación única progress + Pura css " [Inglés](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chino](//juejin.cn/post/7413586285954154522) .

### Escritura Concurrente Alta De IndexedDB

El proyecto se [idb](//www.npmjs.com/package/idb) en base a la encapsulación asincrónica de IndexedDB

Las lecturas y escrituras de IndexedDB son asincrónicas. Al crear un índice, los documentos se cargarán simultáneamente para crear el índice.

Para evitar la pérdida parcial de datos causada por la escritura competitiva, puede consultar el código `coffeescript` a continuación y agregar un caché `ing` entre lectura y escritura para interceptar escrituras competitivas.

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

## Precisión Y Recuperación

La búsqueda segmentará primero las palabras clave introducidas por el usuario.

Suponga que hay `N` palabras después de la segmentación de palabras. Al devolver resultados, se devolverán primero los resultados que contengan todas las palabras clave y luego los resultados que contengan `N-1` , `N-2` ,..., `1` palabras clave.

Los resultados de búsqueda que se muestran primero garantizan la precisión de la consulta y los resultados cargados posteriormente (haga clic en el botón cargar más) garantizan la tasa de recuperación.

![](//p.3ti.site/1727684564.avif)

## Carga Bajo Demanda

Para mejorar la velocidad de respuesta, la búsqueda utiliza el generador `yield` para implementar la carga bajo demanda y regresa `limit` vez que se consulta un resultado.

Tenga en cuenta que cada vez que vuelva a buscar después de `yield` , deberá volver a abrir una transacción de consulta de `IndexedDB` .

## Búsqueda De Prefijos en Tiempo Real

Para mostrar los resultados de la búsqueda mientras el usuario escribe, por ejemplo, cuando se ingresa `wor` , se muestran palabras con el prefijo `wor` como `words` y `work` .

![](//p.3ti.site/1727684944.avif)

El núcleo de búsqueda utilizará la tabla `prefix` para la última palabra después de la segmentación de palabras para encontrar todas las palabras con prefijo y buscar en secuencia.

La función antivibración `debounce` también se utiliza en la interacción front-end (implementada de la siguiente manera) para reducir la frecuencia de las entradas del usuario que activan búsquedas y reducir la cantidad de cálculo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponible Sin Conexión

La tabla de índice no almacena el texto original, sólo las palabras, lo que reduce la cantidad de almacenamiento.

Para resaltar los resultados de la búsqueda es necesario volver a cargar el texto original y hacer coincidir `service worker` puede evitar solicitudes de red repetidas.

Al mismo tiempo, debido a que `service worker` almacena en caché todos los artículos, una vez que el usuario realiza una búsqueda, todo el sitio web, incluida la búsqueda, está disponible sin conexión.

## Optimización De Visualización De Documentos MarkDown

La solución de búsqueda frontal pura de `i18n.site` está optimizada para `MarkDown` documentos.

Al mostrar los resultados de la búsqueda, se mostrará el nombre del capítulo y se navegará por el capítulo al hacer clic.

![](//p.3ti.site/1727686552.avif)

## Resumir

Búsqueda invertida de texto completo implementada exclusivamente en el front-end, no se requiere servidor. Es muy adecuado para sitios web pequeños y medianos, como documentos y blogs personales.

`i18n.site` La búsqueda frontal pura de desarrollo propio de código abierto, de tamaño pequeño y respuesta rápida, resuelve las deficiencias de la búsqueda frontal pura de texto completo actual y proporciona una mejor experiencia de usuario.