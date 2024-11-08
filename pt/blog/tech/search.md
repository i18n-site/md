---

brief: |
  i18n.site agora suporta pesquisa de texto completo sem servidor.

  Este artigo apresenta a implementação de tecnologia de pesquisa de texto completo front-end pura, incluindo índice invertido construído por IndexedDB, pesquisa de prefixo, otimização de segmentação de palavras e suporte multilíngue.

  Em comparação com as soluções existentes, a pesquisa de texto completo de front-end puro do i18n.site é pequena e rápida, adequada para sites de pequeno e médio porte, como documentos e blogs, e está disponível offline.

---

# Pesquisa De Texto Completo Invertida De Front-End Puro

## Sequência

Após várias semanas de desenvolvimento, [i18n.site](//i18n.site) (uma ferramenta de construção de sites markdown multilingualtranslation & puramente estática) agora suporta pesquisa de texto completo de front-end pura.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Este artigo compartilhará a implementação técnica da pesquisa de texto completo `i18n.site` front-end puro. [i18n.site](//i18n.site) para experimentar o efeito de pesquisa.

Código de código aberto : [Pesquise no kernel](//github.com/i18n-site/ie/tree/main/qy) / [interface interativa](//github.com/i18n-site/plugin/tree/main/qy)

## Uma Revisão Das Soluções De Pesquisa De Texto Completo Sem Servidor

Para sites puramente estáticos de pequeno e médio porte, como documentos/blogs pessoais, construir um back-end de pesquisa de texto completo autoconstruído é muito pesado, e a pesquisa de texto completo sem serviço é a escolha mais comum.

As soluções de pesquisa de texto completo sem servidor se enquadram em duas categorias amplas:

Primeiro, provedores de serviços de pesquisa terceirizados [algolia.com](//algolia.com) fornecem componentes front-end para pesquisa de texto completo.

Esses serviços exigem pagamento com base no volume de pesquisa e muitas vezes não estão disponíveis para usuários na China continental devido a questões como a conformidade do site.

Não pode ser usado offline, não pode ser usado na intranet e tem grandes limitações. Este artigo não discute muito.

A segunda é a pesquisa de texto completo de front-end pura.

Atualmente, pesquisas comuns de texto completo de front-end incluem [lunrjs](//lunrjs.com) e [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (com base em `lunrjs` desenvolvimento secundário).

`lunrjs` Existem duas maneiras de construir índices e ambas têm seus próprios problemas.

1. Arquivos de índice pré-construídos

   Como o índice contém palavras de todos os documentos, ele é grande.
   Sempre que um documento é adicionado ou modificado, um novo arquivo de índice deve ser carregado.
   Isso aumentará o tempo de espera do usuário e consumirá muita largura de banda.

2. Carregue documentos e crie índices dinamicamente

   Construir um índice é uma tarefa computacionalmente intensa. Reconstruir o índice sempre que você acessá-lo causará atrasos óbvios e uma experiência ruim para o usuário.

---

Além de `lunrjs` , existem outras soluções de pesquisa de texto completo, como :

[fusejs](//www.fusejs.io) , calcule a semelhança entre as strings a serem pesquisadas.

O desempenho desta solução é extremamente ruim e não pode ser usada para pesquisa de texto completo (consulte [Fuse.js Consulta longa leva mais de 10 segundos, como otimizá-la?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , use o filtro Bloom para pesquisar, não pode ser usado para pesquisa de prefixo (por exemplo, insira `goo` , pesquise `good` , `google` ) e não pode obter efeito de conclusão automática semelhante.

Devido às deficiências das soluções existentes, `i18n.site` desenvolveu uma nova solução de pesquisa de texto completo de front-end puro, que possui as seguintes características :

1. Suporta pesquisa em vários idiomas e é pequeno. O tamanho do kernel de pesquisa após o empacotamento `gzip` é `6.9KB` (para comparação, o tamanho de `lunrjs` é `25KB` ).
1. Crie um índice invertido baseado em `indexedb` , que ocupa menos memória e é rápido.
1. Quando documentos são adicionados/modificados, apenas os documentos adicionados ou modificados são reindexados, reduzindo a quantidade de cálculos.
1. Suporta pesquisa de prefixo e pode exibir resultados de pesquisa em tempo real enquanto o usuário digita.
1. Disponível off-line

Abaixo, `i18n.site` detalhes técnicos de implementação serão apresentados em detalhes.

## Segmentação De Palavras Multilíngues

A segmentação de palavras usa a segmentação de palavras nativa `Intl.Segmenter` do navegador e todos os navegadores convencionais suportam essa interface.

![](//p.3ti.site/1727667759.avif)

O código de segmentação `coffeescript` da palavra é o seguinte

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

em:

* `/\p{P}/` é uma expressão regular que corresponde a sinais de pontuação. Os símbolos correspondentes específicos incluem: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` é porque a segmentação de palavras do navegador `Firefox` não segmenta `. ` .</li>


## Construção De Índice

5 tabelas de armazenamento de objetos foram criadas em `IndexedDB` :

* `word` : id - palavras
* `doc` : id - Documento url - Número da versão do documento
* `docWord` : Matriz do documento id - palavra id
* `prefix` : Matriz de prefixo - palavra id
* `rindex` : Word id - Documento id : Matriz de números de linha

Passe o array do documento `url` e o número da versão `ver` e pesquise se o documento existe na tabela `doc` Caso não exista, crie um índice invertido. Ao mesmo tempo, remova o índice invertido dos documentos que não foram transmitidos.

Desta forma, a indexação incremental pode ser alcançada e a quantidade de cálculo é reduzida.

Na interação front-end, a barra de progresso de carregamento do índice pode ser exibida para evitar o atraso ao carregar pela primeira vez. Consulte "Barra de progresso com animação, baseada em um único progress + Implementação css pura" [Inglês](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinês](//juejin.cn/post/7413586285954154522) .

### Escrita Simultânea Alta Do IndexedDB

O projeto é [idb](//www.npmjs.com/package/idb) com base no encapsulamento assíncrono de IndexedDB

As leituras e gravações do IndexedDB são assíncronas. Ao criar um índice, os documentos serão carregados simultaneamente para criar o índice.

Para evitar perda parcial de dados causada por gravação competitiva, você pode consultar o código `coffeescript` abaixo e adicionar um cache `ing` entre leitura e gravação para interceptar gravações concorrentes.

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

## Precisão E Recall

A pesquisa irá primeiro segmentar as palavras-chave inseridas pelo usuário.

Suponha que haja `N` palavras após a segmentação de palavras. Ao retornar resultados, os resultados contendo todas as palavras-chave serão retornados primeiro e, em seguida, os resultados contendo `N-1` , `N-2` ,..., `1` palavras-chave serão retornados.

Os resultados da pesquisa exibidos primeiro garantem a precisão da consulta, e os resultados carregados posteriormente (clique no botão carregar mais) garantem a taxa de recuperação.

![](//p.3ti.site/1727684564.avif)

## Carregar Sob Demanda

Para melhorar a velocidade de resposta, a busca utiliza o gerador `yield` para implementar o carregamento sob demanda e retorna `limit` que um resultado é consultado.

Observe que cada vez que você pesquisar novamente após `yield` , será necessário reabrir uma transação de consulta de `IndexedDB` .

## Pesquisa De Prefixo Em Tempo Real

Para exibir os resultados da pesquisa enquanto o usuário digita, por exemplo, quando `wor` é inserido, palavras prefixadas com `wor` , como `words` e `work` são exibidas.

![](//p.3ti.site/1727684944.avif)

O kernel de pesquisa usará a tabela `prefix` para a última palavra após a segmentação de palavras para encontrar todas as palavras prefixadas com ela e pesquisar em sequência.

A função anti-vibração `debounce` também é usada na interação front-end (implementada da seguinte forma) para reduzir a frequência de entradas do usuário que acionam pesquisas e reduzir a quantidade de cálculo.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponível Off-Line

A tabela de índice não armazena o texto original, apenas as palavras, o que reduz a quantidade de armazenamento.

Destacar os resultados da pesquisa requer recarregar o texto original, e combinar `service worker` pode evitar solicitações repetidas de rede.

Ao mesmo tempo, como `service worker` armazena em cache todos os artigos, assim que o usuário realiza uma pesquisa, todo o site, incluindo a pesquisa, fica disponível offline.

## Otimização De Exibição De Documentos MarkDown

A solução de pesquisa front-end pura do `i18n.site` é otimizada para documentos `MarkDown` .

Ao exibir os resultados da pesquisa, o nome do capítulo será exibido e o capítulo será navegado quando clicado.

![](//p.3ti.site/1727686552.avif)

## Resumir

Pesquisa invertida de texto completo implementada exclusivamente no front-end, sem necessidade de servidor. É muito adequado para sites de pequeno e médio porte, como documentos e blogs pessoais.

`i18n.site` A pesquisa de front-end pura autodesenvolvida de código aberto, pequena em tamanho e resposta rápida, resolve as deficiências da atual pesquisa de texto completo de front-end puro e fornece uma melhor experiência do usuário.