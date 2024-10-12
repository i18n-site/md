---

brief: |
  i18n.site ya admite la búsqueda de texto completo sin servidor.

  El artículo presenta la implementación de la tecnología de búsqueda de texto completo puramente frontal, incluyendo el índice invertido construido con IndexedDB, la búsqueda de prefijos, la optimización de la segmentación de palabras y la compatibilidad con varios idiomas.

  En comparación con las soluciones actuales, la búsqueda de texto completo puramente frontal de i18n.site es compacta y rápida, adecuada para sitios web pequeños y medianos como documentos y blogs, y está disponible sin conexión.

---

# Búsqueda de texto completo invertido puramente frontal

## Introducción

Después de varias semanas de desarrollo, [i18n.site](//i18n.site) (herramienta de traducción y creación de sitios web estáticos de Markdown multilingüe) ahora admite la búsqueda de texto completo puramente frontal.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

El artículo compartirá la implementación técnica de la búsqueda de texto completo puramente frontal de `i18n.site`. Visite [i18n.site](//i18n.site) para experimentar el efecto de búsqueda.

Código fuente abierto: [Kernel de búsqueda](//github.com/i18n-site/ie/tree/main/qy) / [Interfaz interactiva](//github.com/i18n-site/plugin/tree/main/qy)

## Resumen de soluciones de búsqueda de texto completo sin servidor

Para sitios web pequeños y medianos puramente estáticos, como documentos/blogs personales, construir un backend de búsqueda de texto completo es demasiado oneroso; la búsqueda de texto completo sin servicios es la opción más común.

Las soluciones de búsqueda de texto completo sin servidor se dividen en dos grandes categorías:

Primero, servicios de búsqueda de terceros como [algolia.com](//algolia.com) que proporcionan componentes de búsqueda de texto completo para el frontend.

Estos servicios requieren pago por volumen de búsqueda y, a menudo, no están disponibles para usuarios en China continental debido a problemas de cumplimiento normativo del sitio web.

No se puede usar sin conexión, no se puede usar en redes internas, y tiene muchas limitaciones. Este artículo no los discutirá en profundidad.

En segundo lugar, la búsqueda de texto completo puramente frontal.

En la actualidad, las soluciones de búsqueda de texto completo puramente frontal más comunes son [lunrjs](//lunrjs.com) y [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (desarrollo secundario basado en `lunrjs`).

`lunrjs` tiene dos métodos para construir índices, y ambos tienen sus propios problemas.

1. Archivo de índice preconstruido

   Dado que el índice contiene todas las palabras de todos los documentos, es grande.
   Cada vez que se agrega o modifica un documento, se debe cargar un nuevo archivo de índice.
   Esto aumentará el tiempo de espera del usuario y consumirá mucha ancho de banda.

2. Cargar documentos y construir índices en tiempo real

   Construir índices es una tarea intensiva en cálculo, y reconstruir índices en cada acceso causará retrasos evidentes y una mala experiencia del usuario.

---

Además de `lunrjs`, hay otras soluciones de búsqueda de texto completo, como:

[fusejs](//www.fusejs.io), que calcula la similitud entre cadenas para buscar.

Esta solución tiene un rendimiento muy pobre y no se puede usar para la búsqueda de texto completo (consulte [Fuse.js: ¿Cómo optimizar las consultas largas que tardan más de 10 segundos?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), que utiliza filtros Bloom para buscar y no se puede usar para la búsqueda de prefijos (por ejemplo, ingresar `goo`, buscar `good`, `google`), y no puede lograr un efecto de autocompletado similar.

Debido a las deficiencias de las soluciones actuales, `i18n.site` ha desarrollado una nueva solución de búsqueda de texto completo puramente frontal con las siguientes características:

1. Soporte de búsqueda multilingüe, tamaño compacto, el kernel de búsqueda empaquetado con `gzip` tiene un tamaño de `6.9KB` (a modo de comparación, el tamaño de `lunrjs` es `25KB`)
1. Construcción de índice basada en `IndexedDB`, bajo consumo de memoria y alta velocidad
1. Cuando se agregan/modifican documentos, solo se vuelven a indexar los documentos agregados o modificados, lo que reduce la cantidad de cálculos
1. Soporte de búsqueda de prefijos, puede mostrar resultados de búsqueda en tiempo real mientras el usuario escribe
1. Disponible sin conexión

A continuación, se detallarán los detalles técnicos de implementación de `i18n.site`.

## Segmentación de palabras multilingüe

La segmentación de palabras utiliza el segmentador de palabras nativo del navegador `Intl.Segmenter`, que es compatible con todos los navegadores principales.

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


## Construcción de índice

Se crearon 5 tablas de almacenamiento de objetos en `IndexedDB` :

* `word` : id - palabra
* `doc` : id - URL del documento - número de versión del documento
* `docWord` : id del documento - matriz de id de palabras
* `prefix` : prefijo - matriz de id de palabras
* `rindex` : id de palabra - matriz de id de documento : número de línea

Al pasar la matriz de `url` y el número de versión `ver` del documento, se busca en la tabla `doc` para ver si el documento existe. Si no existe, se crea un índice invertido. Al mismo tiempo, se eliminan los índices invertidos de los documentos que no se pasaron.

De esta manera, se puede lograr una indexación incremental y reducir la cantidad de cálculos.

En la interacción del frontend, se puede mostrar una barra de progreso de carga del índice para evitar el retraso al cargar por primera vez. Consulte "Barra de progreso con animación, implementada con una sola progress y pura CSS" [en inglés](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [en chino](//juejin.cn/post/7413586285954154522).

### Escritura de alta concurrencia de IndexedDB

El proyecto se desarrolla basado en la encapsulación asíncrona de IndexedDB [idb](//www.npmjs.com/package/idb).

La lectura y escritura de IndexedDB son asíncronas. Al crear un índice, se cargarán documentos y se construirán índices de manera concurrente.

Para evitar la pérdida de datos parcial causada por escrituras competitivas, se puede referir al código `coffeescript` a continuación y agregar un caché `ing` entre lecturas y escrituras para interceptar escrituras competitivas.

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

## Búsqueda de prefijos en tiempo real

Para mostrar los resultados de búsqueda mientras el usuario escribe, por ejemplo, mostrar `words` y `work` con el prefijo `wor` cuando se ingresa `wor`.

![](//p.3ti.site/1727684944.avif)

El kernel de búsqueda buscará todas las palabras con el prefijo de la última palabra segmentada utilizando la tabla `prefix` y buscará en secuencia.

En la interacción del frontend, también se utiliza la función `debounce` (implementada de la siguiente manera) para reducir la frecuencia de búsqueda activada por la entrada del usuario y reducir la cantidad de cálculos.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precisión y exhaustividad

La búsqueda segmentará primero las palabras clave ingresadas por el usuario.

Supongamos que hay `N` palabras después de la segmentación de palabras. Al devolver resultados, se devolverán primero los resultados que contienen todas las palabras clave, y luego los resultados que contienen `N-1`, `N-2`, ..., `1` palabras clave.

La prioridad en la visualización de los resultados de búsqueda garantiza la precisión de la consulta, y los resultados cargados posteriormente (al hacer clic en el botón "Cargar más") garantizan la exhaustividad.

![](//p.3ti.site/1727684564.avif)

## Carga bajo demanda

Para mejorar la velocidad de respuesta, la búsqueda utiliza el generador `yield` para implementar la carga bajo demanda y devuelve `limit` resultados cada vez que se consulta.

Tenga en cuenta que después de cada `yield`, al buscar nuevamente, es necesario abrir una nueva transacción de consulta de `IndexedDB`.

## Búsqueda de prefijos en tiempo real

Para mostrar los resultados de búsqueda mientras el usuario escribe, por ejemplo, mostrar `words` y `work` con el prefijo `wor` cuando se ingresa `wor`.

![](//p.3ti.site/1727684944.avif)

El kernel de búsqueda buscará todas las palabras con el prefijo de la última palabra segmentada utilizando la tabla `prefix` y buscará en secuencia.

En la interacción del frontend, también se utiliza la función `debounce` (implementada de la siguiente manera) para reducir la frecuencia de búsqueda activada por la entrada del usuario y reducir la cantidad de cálculos.

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

Para resaltar los resultados de la búsqueda, es necesario volver a cargar el texto original y combinar `service worker` para evitar solicitudes de red repetidas.

Al mismo tiempo, dado que `service worker` almacena en caché todos los artículos, una vez que el usuario realiza una búsqueda, todo el sitio web, incluida la búsqueda, está disponible sin conexión.

## Optimización de la visualización de documentos MarkDown

La solución de búsqueda frontal pura de `i18n.site` está optimizada para documentos `MarkDown`.

Al mostrar los resultados de la búsqueda, se mostrará el nombre del capítulo y se navegará al capítulo al hacer clic.

![](//p.3ti.site/1727686552.avif)

## Conclusión

La implementación de la búsqueda de texto completo invertido puramente frontal no requiere servidor y es muy adecuada para sitios web pequeños y medianos como documentos y blogs.

La búsqueda frontal pura de `i18n.site` es de código abierto, de tamaño pequeño y respuesta rápida, resuelve las deficiencias de las soluciones actuales de búsqueda de texto completo puramente frontal y proporciona una mejor experiencia de usuario.