---

brief: |
  i18n.site agora suporta pesquisa de texto completo sem servidor.

  Este artigo descreve a implementação de uma tecnologia de pesquisa de texto completo front-end pura, incluindo índice invertido construído com IndexedDB, pesquisa de prefixo, otimização de segmentação de palavras e suporte multilíngue.

  Em comparação com as soluções existentes, a pesquisa de texto completo de front-end puro do i18n.site é pequena e rápida, adequada para sites de pequeno e médio porte, como documentos e blogs, e está disponível offline.

---

# Pesquisa de texto completo invertida de front-end puro

## Introdução

Após várias semanas de desenvolvimento, [i18n.site](//i18n.site) (uma ferramenta de construção de sites markdown multilíngue e de tradução puramente estática) agora suporta pesquisa de texto completo de front-end pura.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Este artigo compartilhará a implementação técnica da pesquisa de texto completo `i18n.site` front-end puro. Acesse [i18n.site](//i18n.site) para experimentar o efeito de pesquisa.

Código aberto: [Kernel de pesquisa](//github.com/i18n-site/ie/tree/main/qy) / [Interface interativa](//github.com/i18n-site/plugin/tree/main/qy)

## Uma visão geral das soluções de pesquisa de texto completo sem servidor

Para sites puramente estáticos de pequeno e médio porte, como documentos/blogs pessoais, construir um back-end de pesquisa de texto completo autoconstruído é muito pesado, e a pesquisa de texto completo sem serviço é a escolha mais comum.

As soluções de pesquisa de texto completo sem servidor se dividem em duas grandes categorias:

Primeiro, serviços de pesquisa de terceiros como [algolia.com](//algolia.com), que fornecem componentes front-end para pesquisa de texto completo.

Esses serviços requerem pagamento com base no volume de pesquisa e muitas vezes não estão disponíveis para usuários na China continental devido a questões de conformidade do site.

Eles não podem ser usados offline, não podem ser usados em redes internas e têm muitas limitações. Este artigo não discutirá isso em detalhes.

Em segundo lugar, a pesquisa de texto completo de front-end pura.

Atualmente, as soluções de pesquisa de texto completo de front-end mais comuns incluem [lunrjs](//lunrjs.com) e [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (desenvolvido com base em `lunrjs`).

`lunrjs` tem duas maneiras de construir índices, cada uma com seus próprios problemas.

1. Arquivos de índice pré-construídos

   Como o índice contém todas as palavras dos documentos, ele é grande.
   Sempre que um documento é adicionado ou modificado, um novo arquivo de índice deve ser carregado.
   Isto aumenta o tempo de espera do usuário e consome muita largura de banda.

2. Carregar documentos e construir índices dinamicamente

   Construir um índice é uma tarefa intensiva em cálculos, e reconstruir o índice a cada acesso causará atrasos visíveis e uma má experiência do usuário.

---

Além de `lunrjs`, existem outras soluções de pesquisa de texto completo, como:

[fusejs](//www.fusejs.io), que calcula a similaridade entre strings para pesquisa.

Essa solução tem desempenho muito ruim e não pode ser usada para pesquisa de texto completo (veja [Fuse.js Consulta longa leva mais de 10 segundos, como otimizá-la?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), que usa filtros Bloom para pesquisa, não pode ser usado para pesquisa de prefixo (por exemplo, inserir `goo` para pesquisar `good` e `google`), e não pode implementar um efeito de preenchimento automático semelhante.

Devido às deficiências das soluções existentes, `i18n.site` desenvolveu uma nova solução de pesquisa de texto completo de front-end puro, com as seguintes características:

1. Suporte a pesquisa multilíngue, tamanho pequeno, com o kernel de pesquisa empacotado em `gzip` com tamanho de `6.9KB` (para comparação, o tamanho de `lunrjs` é `25KB`)
1. Construção de índice invertido baseada em `IndexedDB`, com baixo uso de memória e alta velocidade
1. Quando documentos são adicionados/modificados, apenas os documentos adicionados ou modificados são reindexados, reduzindo a quantidade de cálculos
1. Suporte a pesquisa de prefixo, permitindo a exibição em tempo real de resultados de pesquisa enquanto o usuário digita
1. Disponível offline

Abaixo, detalharemos a implementação técnica do `i18n.site`.

## Segmentação de palavras multilíngue

A segmentação de palavras usa a segmentação de palavras nativa `Intl.Segmenter` do navegador, que é suportada por todos os navegadores principais.

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

onde:

* `/\p{P}/` é uma expressão regular que corresponde a sinais de pontuação, incluindo: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `.</p><ul><li> `split('.')` é porque a segmentação de palavras do navegador `Firefox` não segmenta `.` .</li>


## Construção de índice

No `IndexedDB`, são criadas 5 tabelas de armazenamento de objetos:

* `word`: id - palavra
* `doc`: id - URL do documento - versão do documento
* `docWord`: id do documento - array de id de palavras
* `prefix`: prefixo - array de id de palavras
* `rindex`: id de palavra - array de id de documento: números de linha

Passar o array de `url` do documento e a versão `ver` para verificar se o documento existe na tabela `doc`. Se não existir, criar um índice invertido. Ao mesmo tempo, remover o índice invertido dos documentos que não foram passados.

Desta forma, é possível implementar indexação incremental, reduzindo a quantidade de cálculos.

Na interação front-end, é possível exibir uma barra de progresso de carregamento do índice para evitar atrasos ao carregar pela primeira vez. Veja "Barra de progresso com animação, baseada em um único progress + Implementação CSS pura" [em inglês](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [em chinês](//juejin.cn/post/7413586285954154522).

### Escrita simultânea alta do IndexedDB

O projeto é desenvolvido com base no encapsulamento assíncrono de IndexedDB [idb](//www.npmjs.com/package/idb).

As leituras e gravações no IndexedDB são assíncronas. Ao criar índices, os documentos são carregados simultaneamente para a criação dos índices.

Para evitar a perda de dados causada por gravações concorrentes, você pode usar o código `coffeescript` abaixo para adicionar um cache `ing` entre leitura e gravação para interceptar gravações concorrentes.

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

Para exibir resultados de pesquisa enquanto o usuário digita, por exemplo, ao inserir `wor`, exibir palavras que começam com `wor`, como `words` e `work`.

![](//p.3ti.site/1727684944.avif)

O kernel de pesquisa usa a tabela `prefix` para encontrar todas as palavras que começam com a última palavra após a segmentação de palavras e pesquisar em sequência.

A função anti-vibração `debounce` é utilizada na interação front-end (implementada da seguinte forma) para reduzir a frequência das entradas do usuário que acionam buscas, minimizando a quantidade de cálculos.

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

A pesquisa primeiro segmenta as palavras-chave inseridas pelo usuário.

Suponha que haja `N` palavras após a segmentação de palavras. Ao retornar resultados, primeiro são retornados os resultados que contêm todas as palavras-chave, seguidos pelos resultados que contêm `N-1`, `N-2`, ..., `1` palavras-chave.

Os resultados de pesquisa exibidos primeiro garantem a precisão da consulta, e os resultados carregados posteriormente (ao clicar no botão "Carregar mais") garantem a taxa de recall.

![](//p.3ti.site/1727684564.avif)

## Carregamento sob demanda

Para melhorar a velocidade de resposta, a pesquisa utiliza o gerador `yield` para implementar o carregamento sob demanda, retornando `limit` resultados a cada consulta.

Observe que, após cada `yield`, é necessário reabrir uma transação de consulta do `IndexedDB`.

## Pesquisa de prefixo em tempo real

Para exibir resultados de pesquisa enquanto o usuário digita, por exemplo, ao inserir `wor`, exibir palavras que começam com `wor`, como `words` e `work`.

![](//p.3ti.site/1727684944.avif)

O kernel de pesquisa usa a tabela `prefix` para encontrar todas as palavras que começam com a última palavra após a segmentação de palavras e pesquisar em sequência.

A função anti-vibração `debounce` é utilizada na interação front-end (implementada da seguinte forma) para reduzir a frequência das entradas do usuário que acionam buscas, minimizando a quantidade de cálculos.

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

## Otimização de exibição de documentos Markdown

A solução de busca front-end do `i18n.site` é otimizada para documentos `Markdown`.

Ao exibir resultados de pesquisa, o nome do capítulo é exibido e o capítulo é navegado ao clicar nele.

![](//p.3ti.site/1727686552.avif)

## Conclusão

A implementação de pesquisa de texto completo invertida de front-end pura, sem necessidade de servidor, é muito adequada para sites de pequeno e médio porte, como documentos e blogs pessoais.

A pesquisa de front-end pura autodesenvolvida e aberta do `i18n.site` é pequena em tamanho e rápida em resposta, solucionando as deficiências das soluções de pesquisa de texto completo de front-end puras atuais e fornecendo uma melhor experiência do usuário.