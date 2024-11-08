---

brief: |
  i18n.site agora admite a busca de texto completo sen servidor.

  Este artigo presenta a implementación da tecnoloxía de busca de texto completo de front-end pura, incluíndo índice invertido construído por IndexedDB, busca de prefixos, optimización de segmentación de palabras e soporte multilingüe.

  En comparación coas solucións existentes, a busca de texto completo de i18n.site é de pequeno tamaño e rápida, adecuada para sitios web pequenos e medianos, como documentos e blogs, e está dispoñible sen conexión.

---

# Busca De Texto Completo Invertida Puro Front-End

## Secuencia

Despois de varias semanas de desenvolvemento, [i18n.site](//i18n.site) (unha ferramenta de creación de sitios web & de tradución markdown puramente estática) agora admite a busca de texto completo de front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Este artigo compartirá a implementación técnica de `i18n.site` pura busca [i18n.site](//i18n.site) texto completo.

Código de código aberto : [Busca no núcleo](//github.com/i18n-site/ie/tree/main/qy) / [interface interactiva](//github.com/i18n-site/plugin/tree/main/qy)

## Unha Revisión Das Solucións De Busca De Texto Completo Sen Servidor

Para sitios web puramente estáticos de tamaño pequeno e mediano, como documentos/blogs persoais, a construción dun backend de busca de texto completo autoconstruído é demasiado pesado e a busca de texto completo sen servizo é a opción máis común.

As solucións de busca de texto completo sen servidor divídense en dúas grandes categorías:

En primeiro lugar [algolia.com](//algolia.com) os provedores de servizos de busca de terceiros ofrecen compoñentes front-end para a busca de texto completo.

Estes servizos requiren un pago en función do volume de busca e moitas veces non están dispoñibles para os usuarios da China continental debido a problemas como o cumprimento do sitio web.

Non se pode usar fóra de liña, non se pode usar na intranet e ten grandes limitacións. Este artigo non discute moito.

A segunda é a busca de texto completo de front-end.

Actualmente, as buscas de texto completo de front-end comúns inclúen [lunrjs](//lunrjs.com) e [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (baseadas en `lunrjs` desenvolvemento secundario).

`lunrjs` Hai dúas formas de construír índices, e ambas teñen os seus propios problemas.

1. Ficheiros de índice preconstruídos

   Como o índice contén palabras de todos os documentos, é de gran tamaño.
   Sempre que se engade ou modifique un documento, debe cargarse un novo ficheiro de índice.
   Aumentará o tempo de espera do usuario e consumirá moito ancho de banda.

2. Carga documentos e crea índices sobre a marcha

   Construír un índice é unha tarefa computacionalmente intensiva. Reconstruír o índice cada vez que acceda a el provocará atrasos evidentes e unha mala experiencia do usuario.

---

Ademais de `lunrjs` , hai outras solucións de busca de texto completo, como :

[fusejs](//www.fusejs.io) , calcula a semellanza entre as cadeas para buscar.

O rendemento desta solución é extremadamente pobre e non se pode usar para a busca de texto completo (consulta [Fuse.js A consulta longa leva máis de 10 segundos, como optimizala?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , use o filtro Bloom para buscar, non se pode usar para a busca de prefixos (por exemplo, introduza `goo` , busque `good` , `google` ) e non pode conseguir un efecto de finalización automática similar.

Debido ás deficiencias das solucións existentes, `i18n.site` desenvolveu unha nova solución de busca de texto completo front-end pura, que ten as seguintes características :

1. Admite a busca en varios idiomas e ten un tamaño pequeno O tamaño do núcleo de busca despois do empaquetado `gzip` é `6.9KB` (para comparación, o tamaño de `lunrjs` é `25KB` ).
1. Constrúe un índice invertido baseado en `indexedb` , que ocupa menos memoria e é rápido.
1. Cando se engaden/modifican documentos, só se reindexan os documentos engadidos ou modificados, reducindo a cantidade de cálculos.
1. Admite a busca de prefixos e pode mostrar os resultados da busca en tempo real mentres o usuario está escribindo.
1. Dispoñible sen conexión

A continuación, introduciranse en detalle `i18n.site` detalles técnicos de implementación.

## Segmentación De Palabras Multilingües

A segmentación de palabras usa a segmentación de palabras nativa do navegador `Intl.Segmenter` , e todos os navegadores principais admiten esta interface.

![](//p.3ti.site/1727667759.avif)

O código de segmentación de palabras `coffeescript` é o seguinte

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

* `/\p{P}/` é unha expresión regular que coincide con signos de puntuación. Os símbolos específicos de coincidencia inclúen: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` é porque `Firefox` segmentación de palabras do navegador non segmenta `. ` .</li>


## Edificio Do Índice

Creáronse 5 táboas de almacenamento de obxectos en `IndexedDB` :

* `word` : id -
* `doc` : id - Número de versión do url -
* `docWord` : Matriz do documento id - word id
* `prefix` : Matriz do prefixo - palabra id
* `rindex` : id - Documento id : Matriz de números de liña

Pasa a matriz do documento `url` e do número de versión `ver` e busca se o documento existe na táboa `doc` Se non existe, crea un índice invertido. Ao mesmo tempo, elimine o índice invertido para aqueles documentos que non se pasaron.

Deste xeito, pódese conseguir unha indexación incremental e redúcese a cantidade de cálculo.

Na interacción front-end, pódese mostrar a barra de progreso de carga do índice / evitar o atraso ao cargar por primeira vez Consulte "Barra de progreso con animación, baseada nunha progress + implementación [de](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) css puro ["](//juejin.cn/post/7413586285954154522) .

### Escritura Simultánea Alta De IndexedDB

O proxecto [idb](//www.npmjs.com/package/idb) baseándose na encapsulación asíncrona de IndexedDB

As lecturas e escrituras de IndexedDB son asíncronas. Ao crear un índice, os documentos cargaranse simultaneamente para crear o índice.

Para evitar a perda parcial de datos causada pola escritura competitiva, podes consultar o código `coffeescript` a continuación e engadir unha caché `ing` entre lectura e escritura para interceptar as escrituras competitivas.

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

## Precisión E Lembranza

A busca segmentará primeiro as palabras clave introducidas polo usuario.

Supoña que hai `N` palabras despois da segmentación de palabras Ao devolver resultados, devolveranse primeiro os resultados que conteñan todas as palabras clave e, a continuación, devolveranse os resultados que conteñan `N-1` , `N-2` ,..., `1` palabras clave.

Os resultados da busca que se mostran primeiro garanten a precisión da consulta e os resultados cargados posteriormente (faga clic no botón Cargar máis) garanten a taxa de recuperación.

![](//p.3ti.site/1727684564.avif)

## Carga Baixo Demanda

Para mellorar a velocidade de resposta, a busca usa o xerador `yield` para implementar a carga baixo demanda e volve `limit` vez que se consulta un resultado.

Teña en conta que cada vez que volva buscar despois de `yield` , cómpre volver abrir unha transacción de consulta de `IndexedDB` .

## Prefixo De Busca en Tempo Real

Para mostrar os resultados da busca mentres o usuario está escribindo, por exemplo, cando se introduce `wor` , móstranse palabras con prefixo `wor` como `words` e `work` .

![](//p.3ti.site/1727684944.avif)

O núcleo de busca usará a táboa `prefix` para a última palabra despois da segmentación de palabras para atopar todas as palabras que teñan o prefixo e buscar en secuencia.

A función antivibración `debounce` tamén se usa na interacción front-end (implementada do seguinte xeito) para reducir a frecuencia das buscas de entrada do usuario e reducir a cantidade de cálculo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Dispoñible Sen Conexión

A táboa de índice non almacena o texto orixinal, só as palabras, o que reduce a cantidade de almacenamento.

Para resaltar os resultados da busca, é necesario volver cargar o texto orixinal, e facer coincidir `service worker` pode evitar solicitudes repetidas de rede.

Ao mesmo tempo, porque `service worker` almacena na caché todos os artigos, unha vez que o usuario realiza unha busca, todo o sitio web, incluída a busca, está dispoñible sen conexión.

## Optimización De Visualización De Documentos MarkDown

A solución de busca frontal pura de `i18n.site` está optimizada para `MarkDown` documentos.

Ao mostrar os resultados da busca, amosarase o nome do capítulo e navegarase polo capítulo cando se faga clic.

![](//p.3ti.site/1727686552.avif)

## Resume

Busca de texto completo invertida implementada exclusivamente na interface, sen necesidade de servidor. É moi axeitado para sitios web pequenos e medianos como documentos e blogs persoais.

`i18n.site` A busca de front-end pura de código aberto, de pequeno tamaño e resposta rápida, resolve as deficiencias da busca de texto completo de front-end pura actual e ofrece unha mellor experiencia de usuario.