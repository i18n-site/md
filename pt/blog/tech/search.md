# Pesquisa de texto completo invertida de front-end puro

## Sequência

Após várias semanas de desenvolvimento, [i18n.site](//i18n.site) (ferramenta de tradução multilíngue de Markdown e construção de sites puramente estáticos) agora suporta pesquisa de texto completo de front-end puro.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Este artigo compartilhará a implementação técnica da pesquisa de texto completo do `i18n.site` com front-end puro. Acesse [i18n.site](//i18n.site) para experimentar o efeito da pesquisa.

O código é开源: [Kernel de pesquisa](//github.com/i18n-site/ie/tree/main/qy) / [Interface interativa](//github.com/i18n-site/plugin/tree/main/qy)

## Visão geral das soluções de pesquisa de texto completo sem servidor

Para sites puramente estáticos de pequeno e médio porte, como documentos/blogs pessoais, construir um back-end de pesquisa de texto completo autoconstruído é muito pesado, e a pesquisa de texto completo sem serviço é a escolha mais comum.

As soluções de pesquisa de texto completo sem servidor se dividem em duas grandes categorias:

A primeira, serviços de pesquisa de terceiros como [algolia.com](//algolia.com), que fornecem componentes front-end para pesquisa de texto completo.

Este tipo de serviço requer pagamento com base na quantidade de buscas e frequentemente não está disponível para usuários na China continental devido a questões de conformidade do site.

Eles não podem ser usados offline ou em redes internas, com muitas limitações. Este artigo não entrará em detalhes.

A segunda categoria é a pesquisa de texto completo puramente front-end.

Atualmente, as pesquisas de texto completo comuns no front-end incluem [lunrjs](//lunrjs.com) e [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (baseado em um desenvolvimento secundário do `lunrjs`).

O `lunrjs` possui duas maneiras de construir índices, ambas com suas próprias limitações.

1. Índices pré-construídos

   Como os índices contêm todas as palavras dos documentos, são grandes.
   Quando os documentos são adicionados ou modificados, novos arquivos de índice devem ser carregados.
   Isto aumenta o tempo de espera do usuário e consome muita largura de banda.

2. Carregamento de documentos e construção de índices em tempo real

   Construir índices é uma tarefa intensiva em cálculos, e reconstruir índices a cada acesso resulta em atrasos visíveis e uma má experiência do usuário.

---

Além de `lunrjs`, existem outras soluções de pesquisa de texto completo, como:

[fusejs](//www.fusejs.io) calcula a similaridade entre strings para realizar buscas.

Este método possui um desempenho muito ruim e não é adequado para buscas de texto completo (ver [Fuse.js: consulta longa demora mais de 10 segundos, como otimizar?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch) utiliza um filtro Bloom para buscas, mas não pode ser empregado em buscas por prefixo (por exemplo, ao inserir `goo`, não é possível buscar `good` ou `google`), também não conseguindo proporcionar um efeito de autocompletar.

Devido às desvantagens das soluções atuais, `i18n.site` desenvolveu uma nova solução de pesquisa de texto completo puramente front-end, com as seguintes características:

1. Suporte a pesquisa em vários idiomas, com tamanho pequeno; o kernel de pesquisa empacotado com `gzip` tem um tamanho de `6.9KB` (para comparação, o tamanho do `lunrjs` é `25KB`)
1. Construção de índices invertidos baseada em `IndexedDB`, com baixo uso de memória e alta velocidade
1. Quando documentos são adicionados/modificados, apenas os documentos adicionados ou modificados são reindexados, reduzindo a quantidade de cálculos
1. Suporte a pesquisa de prefixo, que pode exibir resultados de pesquisa em tempo real enquanto o usuário digita
1. Disponível offline

Abaixo, detalharemos a implementação técnica do `i18n.site`.

## Segmentação de palavras multilíngue

A segmentação de palavras usa a segmentação de palavras nativa `Intl.Segmenter` do navegador, que é suportada por todos os principais navegadores.

![](//p.3ti.site/1727667759.avif)

O código de segmentação `coffeescript` é o seguinte:

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

Onde:

* `/\p{P}/` é uma expressão regular que corresponde a sinais de pontuação. Os símbolos correspondentes específicos incluem: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `.</p><ul><li> `split('.')` é porque a segmentação de palavras do navegador `Firefox` não segmenta `.` .</li>


## Construção de índice

No `IndexedDB`, são criadas 5 tabelas de armazenamento de objetos:

* `word`: id - palavra
* `doc`: id - URL do documento - número da versão do documento
* `docWord`: id do documento - array de id das palavras
* `prefix`: prefixo - array de id das palavras
* `rindex`: id da palavra - array de id do documento: números de linha

Passando o array de `url` do documento e o número da versão `ver`, verifica-se na tabela `doc` se o documento existe. Se não existir, cria-se um índice invertido. Ao mesmo tempo, remove-se o índice invertido dos documentos não transmitidos.

Desta forma, é possível implementar indexação incremental, reduzindo a quantidade de cálculo.

Na interação do front-end, é possível exibir uma barra de progresso para o carregamento do índice, a fim de evitar a sensação de engasgamento na primeira carga. Veja "Barra de progresso com animação, baseada em uma única implementação com progress + CSS puro" [em inglês](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [em chinês](//juejin.cn/post/7413586285954154522).

### Escrita simultânea alta do IndexedDB

O projeto é desenvolvido com base no encapsulamento assíncrono de IndexedDB, [idb](//www.npmjs.com/package/idb).

As operações de leitura e gravação do IndexedDB são assíncronas. Ao criar índices, os documentos são carregados simultaneamente para criar índices.

Para evitar a perda de dados causada por gravações concorrentes, pode-se usar o código `coffeescript` abaixo para adicionar um cache `ing` entre leituras e gravações para interceptar gravações concorrentes.

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

## Pesquisa de prefixo em tempo real

Para exibir resultados de pesquisa enquanto o usuário digita, por exemplo, ao digitar `wor`, exibir palavras que começam com `wor`, como `words` e `work`.

![](//p.3ti.site/1727684944.avif)

O kernel de pesquisa usa a tabela `prefix` para encontrar todas as palavras que começam com a última palavra segmentada e pesquisar sequencialmente.

A função anti-vibração `debounce` é utilizada na interação front-end (implementada da seguinte forma) para reduzir a frequência de acionamentos de pesquisa por parte do usuário e minimizar a quantidade de cálculos.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Precisão e recall

A pesquisa segmenta primeiro as palavras-chave inseridas pelo usuário.

Suponha que haja `N` palavras após a segmentação. Ao retornar resultados, primeiro são retornados os resultados que contêm todas as palavras-chave, seguidos pelos resultados que contêm `N-1`, `N-2`, ..., `1` palavras-chave.

Os resultados de pesquisa exibidos primeiro garantem a precisão da consulta, enquanto os resultados carregados posteriormente (ao clicar no botão "Carregar mais") garantem o recall.

![](//p.3ti.site/1727684564.avif)

## Carregamento sob demanda

Para melhorar a velocidade de resposta, a pesquisa usa o gerador `yield` para implementar o carregamento sob demanda, retornando resultados a cada `limit` consultas.

Observe que, após cada `yield`, é necessário reabrir uma transação de consulta do `IndexedDB`.

## Pesquisa de prefixo em tempo real

Para exibir resultados de pesquisa enquanto o usuário digita, por exemplo, ao digitar `wor`, exibir palavras que começam com `wor`, como `words` e `work`.

![](//p.3ti.site/1727684944.avif)

O kernel de pesquisa usa a tabela `prefix` para encontrar todas as palavras que começam com a última palavra segmentada e pesquisar sequencialmente.

A função anti-vibração `debounce` é utilizada na interação front-end (implementada da seguinte forma) para reduzir a frequência de acionamentos de pesquisa por parte do usuário e minimizar a quantidade de cálculos.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponível offline

A tabela de índice não armazena o texto original, apenas as palavras, reduzindo o uso de armazenamento.

Para destacar os resultados da pesquisa, é necessário recarregar o texto original. Combinar com `service worker` pode evitar solicitações de rede repetidas.

Ao mesmo tempo, como o `service worker` armazena em cache todos os artigos, assim que o usuário realiza uma pesquisa, todo o site, incluindo a pesquisa, fica disponível offline.

## Optimização de exibição de documentos Markdown

A solução de pesquisa front-end pura do `i18n.site` está otimizada para documentos `Markdown`.

Ao exibir resultados de pesquisa, o nome do capítulo é exibido e o capítulo é navegado ao clicar nele.

![](//p.3ti.site/1727686552.avif)

## Resumo

Implementação de pesquisa de texto completo invertida puramente no front-end, sem a necessidade de um servidor. Ideal para sites de pequeno e médio porte, como documentos e blogs pessoais.

A pesquisa de front-end pura e开源 desenvolvida por `i18n.site` é compacta, responde rapidamente e resolve os problemas da pesquisa de texto completo puramente front-end atual, oferecendo uma melhor experiência ao usuário.