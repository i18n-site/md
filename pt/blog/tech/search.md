---

brief: |
  i18n.site agora suporta pesquisa de texto completo sem servidor.

  Este artigo apresenta a implementação de tecnologia de pesquisa de texto completo puramente front-end, incluindo a construção de índice invertido com IndexedDB, pesquisa de prefixo, otimização de segmentação de palavras e suporte multilíngue.

  Em comparação com as soluções existentes, a pesquisa de texto completo puramente front-end do i18n.site é menor e mais rápida, adequada para sites de pequeno e médio porte, como documentos e blogs, e está disponível offline.

---

# Pesquisa de texto completo invertida puramente front-end

## Resumo

Após várias semanas de desenvolvimento, [i18n.site](//i18n.site) (ferramenta de construção de sites estáticos e multilíngue para markdown) agora suporta pesquisa de texto completo puramente front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Este artigo compartilha a implementação técnica da pesquisa de texto completo `i18n.site` puramente front-end. Acesse [i18n.site](//i18n.site) para experimentar o efeito da pesquisa.

Código aberto: [Núcleo de pesquisa](//github.com/i18n-site/ie/tree/main/qy) / [Interface interativa](//github.com/i18n-site/plugin/tree/main/qy)

## Visão geral das soluções de pesquisa de texto completo sem servidor

Para sites puramente estáticos de pequeno e médio porte, como documentos/blogs pessoais, construir um back-end de pesquisa de texto completo autoconstruído é muito pesado, e a pesquisa de texto completo sem serviço é a escolha mais comum.

As soluções de pesquisa de texto completo sem servidor podem ser divididas em duas grandes categorias:

Primeiro, provedores de serviços de pesquisa terceirizados, como [algolia.com](//algolia.com), oferecem componentes front-end para pesquisa de texto completo.

Esses serviços cobram por volume de pesquisa e muitas vezes não estão disponíveis para usuários na China continental devido a questões de conformidade do site.

Não são usáveis off-line e não podem ser usadas na rede interna, o que limita muito. Este artigo não entrará em detalhes.

A segunda é a pesquisa de texto completo puramente front-end.

Atualmente, as soluções comuns de pesquisa de texto completo front-end incluem [lunrjs](//lunrjs.com) e [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (desenvolvido a partir do `lunrjs`).

`lunrjs` possui duas maneiras de construir índices, ambas com seus próprios problemas.

1. Arquivos de índice pré-construídos

   Como o índice contém palavras de todos os documentos, ele é grande.
   Quando um documento é adicionado ou modificado, um novo arquivo de índice deve ser carregado.
   Isto aumentará o tempo de espera do usuário e consumirá muita largura de banda.

2. Carregar documentos e criar índices dinamicamente

   A criação de índices é uma tarefa intensiva em termos de computação. A reconstrução do índice sempre que acessado causará atrasos óbvios e uma má experiência do usuário.

---

Além do `lunrjs`, há outras soluções de busca de texto completo, como:

[fusejs](//www.fusejs.io), que calcula a semelhança entre strings a serem pesquisadas.

A performance dessa solução é extremamente ruim e não pode ser usada para pesquisa de texto completo (veja [Como otimizar a consulta longa do Fuse.js que leva mais de 10 segundos?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](//github.com/tinysearch/tinysearch), que usa o filtro Bloom para pesquisa, não pode ser usado para pesquisa de prefixo (por exemplo, inserir `goo` e pesquisar `good`, `google`) e não pode implementar efeitos de conclusão automática semelhantes.

Por causa das limitações das soluções disponíveis, o `i18n.site` desenvolveu uma nova solução de busca de texto completo de front-end puro, com as seguintes características:

1. Suporta busca em múltiplos idiomas, tem um tamanho reduzido e, após compactação com `gzip`, o kernel de busca pesa `6.9KB` (para comparação, o `lunrjs` pesa `25KB`)
1. Utiliza a construção de índice invertido baseada em `IndexedDB`, ocupando menos memória e com alta velocidade
1. Quando documentos são adicionados/modificados, apenas os documentos adicionados ou modificados são reindexados, reduzindo a quantidade de cálculos
1. Suporta pesquisa de prefixo, exibindo resultados de pesquisa em tempo real enquanto o usuário digita
1. Disponível off-line

Abaixo, detalharemos as implementações técnicas do `i18n.site`.

## Segmentação de palavras multilíngue

A segmentação de palavras utiliza a função nativa `Intl.Segmenter` do navegador, compatível com a maioria dos navegadores主流.

![](//p.3ti.site/1727667759.avif)

O código de segmentação `coffeescript` é o seguinte:

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

Entre outras coisas:

* `/\p{P}/` é uma expressão regular que identifica sinais de pontuação. Os símbolos específicos incluem: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` é porque a segmentação de palavras do navegador `Firefox` não segmenta `. ` .</li>


## Construção de índice

Foram criadas cinco tabelas de objeto de armazenamento em `IndexedDB`:

* `word`: id - palavra
* `doc` : id - URL do documento - versão do documento
* `docWord`: id do documento - array de ids de palavras
* `prefix`: prefixo - array de ids de palavras
* `rindex`: id de palavra - array de ids de documentos : números de linha

É passado um array de `url` do documento e o número da versão `ver`, e é verificado se o documento existe na tabela `doc`. Se não existir, é criado um índice invertido. Ao mesmo tempo, são removidos os índices invertidos dos documentos não transmitidos.

Desta forma, é alcançada a indexação incremental, reduzindo a quantidade de cálculos.

No interação front-end, pode ser exibida uma barra de progresso de carregamento do índice para evitar o atraso ao carregar pela primeira vez. Veja "Barra de progresso com animação, baseada em um único progress + Implementação css pura" [Inglês](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chinês](//juejin.cn/post/7413586285954154522).

### Escrita simultânea alta do IndexedDB

O projeto é [idb](//www.npmjs.com/package/idb) com base no encapsulamento assíncrono de IndexedDB

As leituras e gravações do IndexedDB são assíncronas. Ao criar um índice, os documentos serão carregados simultaneamente para criar o índice.

Para evitar perda parcial de dados devido à escrita competitiva, você pode consultar o código `coffeescript` abaixo e adicionar um cache `ing` entre leitura e gravação para interceptar escritas concorrentes.

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

## Precisão e recall

A pesquisa primeiramente segmenta as palavras-chave inseridas pelo usuário.

Suponha que após a segmentação existam `N` palavras; ao retornar os resultados, primeiramente são exibidos os que contêm todas as palavras-chave, seguidos pelos que contêm `N-1`, `N-2`, ..., `1` palavras-chave.

Os resultados da pesquisa exibidos primeiro garantem a precisão da consulta, e os resultados carregados posteriormente (ao clicar no botão "Carregar mais") garantem a taxa de recuperação.

![](//p.3ti.site/1727684564.avif)

## Carregamento sob demanda

Para melhorar a velocidade de resposta, a busca utiliza o gerador `yield` para implementar o carregamento sob demanda e retorna `limit` resultados consultados.

Atenção: após cada `yield`, uma nova transação de consulta `IndexedDB` deve ser aberta para nova busca.

## Pesquisa de prefixo em tempo real

Para mostrar os resultados da busca em tempo real enquanto o usuário digita, por exemplo, ao inserir `wor`, são exibidas palavras que começam com `wor`, como `words` e `work`.

![](//p.3ti.site/1727684944.avif)

O kernel de pesquisa usará a tabela `prefix` para a última palavra após a segmentação de palavras para encontrar todas as palavras com esse prefixo e pesquisar em sequência.

A função anti-vibração `debounce` também é usada na interação front-end (implementada da seguinte forma) para reduzir a frequência de entradas do usuário que acionam pesquisas e reduzir a quantidade de cálculos.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Disponível off-line

A tabela de índice não armazena o texto original, apenas as palavras, o que reduz a quantidade de armazenamento.

Destacar os resultados da pesquisa requer recarregar o texto original, e combinar `service worker` pode evitar solicitações repetidas de rede.

Ao mesmo tempo, como `service worker` armazena em cache todos os artigos, assim que o usuário realizar uma pesquisa, todo o site, incluindo a pesquisa, fica disponível off-line.

## Otimização de exibição de documentos Markdown

A solução de busca de front-end puro do `i18n.site` foi otimizada para documentos `Markdown`.

Ao exibir os resultados da pesquisa, o nome do capítulo será exibido e o capítulo será navegado ao clicar.

![](//p.3ti.site/1727686552.avif)

## Resumo

Pesquisa invertida de texto completo implementada exclusivamente no front-end, sem necessidade de servidor. É muito adequada para sites de pequeno e médio porte, como documentos e blogs pessoais.

O `i18n.site` oferece uma busca de front-end puro, autodesenvolvida e de código aberto, que é compacta e rápida, solucionando diversas limitações das buscas de front-end puro existentes e proporcionando uma melhor experiência ao usuário.