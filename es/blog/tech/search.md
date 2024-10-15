---

brief: |
  i18n.site ahora admite búsqueda de texto completo sin servidor.

  Este artículo presenta la implementación de tecnología de búsqueda de texto completo frontal pura, incluyendo la creación de índices invertidos con IndexedDB, búsqueda de prefijos, optimización de segmentación de palabras y soporte multilingüe.

  En comparación con las soluciones existentes, la búsqueda de texto completo frontal pura de i18n.site es más ligera y rápida, adecuada para sitios web pequeños y medianos, como documentos y blogs, y es accesible sin conexión.

---

# Búsqueda pura de texto completo invertida en el front-end

## Secuencia

Después de varias semanas de desarrollo, [i18n.site](//i18n.site) (una herramienta de creación de sitios web de markdown traducción multilingüe y puramente estática) ahora admite búsqueda de texto completo en el front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Este artículo compartirá la implementación técnica de la búsqueda de texto completo frontal pura en `i18n.site`. [i18n.site](//i18n.site) Visite para experimentar los resultados de búsqueda!

Código fuente abierto: [Núcleo de búsqueda](//github.com/i18n-site/ie/tree/main/qy) / [Interfaz interactiva](//github.com/i18n-site/plugin/tree/main/qy)

## Una descripción general de las soluciones de búsqueda de texto completo sin servidor

Para sitios web pequeños y medianos puramente estáticos, como documentos/blogs personales, crear un backend de búsqueda de texto completo autoconstruido es demasiado pesado; la búsqueda de texto completo sin servicios es la opción más común.

Las soluciones de búsqueda de texto completo sin servidor se dividen en dos grandes categorías:

Primero, servicios de terceros de búsqueda de texto completo como [algolia.com](//algolia.com), que proporcionan componentes de interfaz para la búsqueda de texto completo.

Estos servicios requieren pago por volumen de búsqueda y, a menudo, no están disponibles para los usuarios en China continental debido a problemas de cumplimiento del sitio web.

No son accesibles sin conexión, no se pueden usar en la intranet y tienen muchas limitaciones. Este artículo no se detendrá mucho en ellas.

En segundo lugar, la búsqueda de texto completo puramente frontal.

En la actualidad, las búsquedas de texto completo de front-end puras comunes incluyen [lunrjs](//lunrjs.com) y [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (desarrollado sobre `lunrjs`).

`lunrjs` tiene dos métodos para construir índices, y ambos presentan problemas específicos.

1. Archivos de índice predefinidos

   Dado que el índice contiene todas las palabras de los documentos, es grande.
   Cada vez que se agrega o modifica un documento, se debe cargar un nuevo archivo de índice.
   Esto aumentará el tiempo de espera del usuario y consumirá mucho ancho de banda.

2. Cargar documentos y crear índices en tiempo real

   Crear un índice es una tarea intensiva en términos de procesamiento. Reconstruir el índice cada vez que se accede causará retrasos obvios y una mala experiencia del usuario.

---

Además de `lunrjs`, hay otras soluciones de búsqueda de texto completo, como:

[fusejs](//www.fusejs.io), que calcula la similitud entre las cadenas a buscar.

Esta solución tiene un rendimiento extremadamente deficiente y no se puede usar para búsquedas de texto completo (ver [Fuse.js: Cómo optimizar consultas largas que tardan más de 10 segundos](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), que utiliza un filtro Bloom para buscar, no se puede usar para la búsqueda de prefijos (por ejemplo, buscar `goo` para `good` o `google`) y no puede lograr un efecto de autocompletado similar.

Dado los inconvenientes de las soluciones actuales, `i18n.site` ha desarrollado una nueva solución de búsqueda de texto completo en frontend puro, con las siguientes características:

1. Soporta búsqueda multilingüe, es compacto, y su nucleo de búsqueda comprimido con `gzip` pesa `6.9KB` (para comparar, `lunrjs` pesa `25KB`)
1. Se construye un índice invertido basado en `IndexedDB`, ocupando menos memoria y siendo rápido
1. Cuando se agregan/modifican documentos, solo se vuelven a indexar los documentos agregados o modificados, lo que reduce la cantidad de cálculos
1. Soporta búsqueda de prefijos, lo que permite mostrar los resultados de búsqueda en tiempo real a medida que el usuario escribe
1. Disponible sin conexión

A continuación, se detallarán las implementaciones técnicas de `i18n.site`.

## Segmentación de palabras multilingüe

La segmentación de palabras utiliza el `Intl.Segmenter` nativo del navegador, que es compatible con la mayoría de los navegadores principales.

![](//p.3ti.site/1727667759.avif)

El código de segmentación de palabras en `coffeescript` es el siguiente:

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

En:

* `/\p{P}/` es una expresión regular que coincide con signos de puntuación. Los símbolos coincidentes específicos incluyen: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` se debe a que la segmentación de palabras del navegador `Firefox` no segmenta `. ` .</li>


## Constructión de índices

En `IndexedDB` se han creado 5 tablas de almacenamiento de objetos:

* `word`: id - palabra
* `doc` : id - URL del documento - Número de versión del documento
* `docWord`: id de documento - array de ids de palabras
* `prefix`: prefijo - array de ids de palabras
* `rindex`: id de palabra - array de ids de documento : números de línea

Pase la matriz del documento `url` y el número de versión `ver` , y busque si el documento existe en la tabla `doc` Si no existe, cree un índice invertido. Al mismo tiempo, elimine el índice invertido de aquellos documentos que no se pasaron.

De esta manera, se puede lograr una indexación incremental y se reduce la cantidad de cálculos.

En la interacción del front-end, se puede mostrar la barra de progreso de carga del índice para evitar retrasos al cargar por primera vez. Ver "Barra de progreso con animación, basada en una implementación única de progress + Pura css" [Inglés](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chino](//juejin.cn/post/7413586285954154522).

### Escritura concurrente de alta capacidad en IndexedDB

El proyecto se desarrolla utilizando la encapsulación asincrónica de IndexedDB, [idb](//www.npmjs.com/package/idb).

Las operaciones de lectura y escritura en IndexedDB son asincrónicas. Al crear un índice, los documentos se cargan simultáneamente para la creación del índice.

Para evitar la pérdida parcial de datos debido a la escritura competitiva, se puede consultar el código en `coffeescript` a continuación y agregar un caché `ing` entre la lectura y la escritura para interceptar la escritura competitiva.

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

## Precisión y recuperación

La búsqueda primero segmentará las palabras clave introducidas por el usuario.

Suponiendo que hay `N` palabras después de segmentar, al devolver los resultados, primero se mostrarán los que contienen todas las palabras clave, y luego los que contienen `N-1`, `N-2`, ..., `1` palabras clave.

Los resultados de búsqueda que se muestran primero garantizan la precisión de la consulta y los resultados cargados posteriormente (haciendo clic en el botón "Cargar más") garantizan la tasa de recuperación.

![](//p.3ti.site/1727684564.avif)

## Carga bajo demanda

Para mejorar la velocidad de respuesta, la búsqueda utiliza el generador `yield` para implementar la carga bajo demanda y regresa `limit` resultados cada vez que se realiza una consulta.

Es importante notar que después de usar `yield`, se debe abrir una nueva transacción de consulta en `IndexedDB` para cada nueva búsqueda.

## Búsqueda de prefijos en tiempo real

Para mostrar resultados de búsqueda en tiempo real mientras el usuario escribe, como cuando se escribe `wor`, se mostrarán palabras que comienzan con `wor` como `words` y `work`.

![](//p.3ti.site/1727684944.avif)

El núcleo de búsqueda utilizará la tabla `prefix` para la última palabra después de la segmentación de palabras para encontrar todas las palabras con prefijo y buscar en secuencia.

En la interacción del frontend, también se emplea la función de "anti-rebotes" (`debounce`), diseñada para reducir la frecuencia de las búsquedas desencadenadas por la entrada del usuario y minimizar la carga de cálculo.

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

La tabla de índice no almacena el texto original, solo las palabras, lo que reduce la cantidad de almacenamiento.

Para resaltar los resultados de la búsqueda, es necesario volver a cargar el texto original y usar `service worker` para evitar solicitudes de red repetidas.

Al mismo tiempo, debido a que `service worker` almacena en caché todos los artículos, una vez que el usuario realiza una búsqueda, todo el sitio web, incluida la búsqueda, está disponible sin conexión.

## Optimización de visualización de documentos Markdown

La solución de búsqueda en frontend puro de `i18n.site` está optimizada para documentos `Markdown`.

Al mostrar los resultados de la búsqueda, se mostrará el nombre del capítulo y se navegará al capítulo al hacer clic.

![](//p.3ti.site/1727686552.avif)

## Resumen

La búsqueda invertida de texto completo implementada exclusivamente en el front-end no requiere servidor. Es muy adecuada para sitios web pequeños y medianos, como documentos y blogs personales.

`i18n.site` ofrece una búsqueda puramente frontal de código abierto, de pequeño tamaño y rápida respuesta, que supera las deficiencias de las búsquedas frontales de texto completo actuales y proporciona una mejor experiencia de usuario.