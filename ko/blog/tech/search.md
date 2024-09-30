# 순수 프런트엔드 역전체 텍스트 검색

## 순서

몇 주간의 개발 끝에 [i18n.site](//i18n.site) (순전히 정적인 markdown 다국어 번역 & 웹사이트 구축 도구)는 이제 순수한 프런트엔드 전체 텍스트 검색을 지원합니다.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

이 글에서는 `i18n.site`의 순수 프런트엔드 전체 텍스트 검색 기술 실현을 공유하고자 합니다. [i18n.site](//i18n.site)를 방문하여 검색 효과를 직접 체험해 보세요.

코드 공개: [검색 커널](//github.com/i18n-site/ie/tree/main/qy) / [인터랙티브 인터페이스](//github.com/i18n-site/plugin/tree/main/qy)

## 서버리스 전체 텍스트 검색 솔루션 개요

문서/개인 블로그와 같은 중소 규모의 순수 정적 웹 사이트의 경우 자체 구축된 전체 텍스트 검색 백엔드를 구축하는 것은 너무 무겁기 때문에 서비스가 필요 없는 전체 텍스트 검색이 더 일반적인 선택입니다.

무서버 전체 텍스트 검색 솔루션은 크게 두 가지로 나뉩니다

첫째, [algolia.com](//algolia.com)와 같은 제3자 검색 서비스 제공업체는 전체 텍스트 검색을 위한 프런트엔드 컴포넌트를 제공합니다.

이러한 서비스는 검색 횟수에 따라 비용이 부과되며, 웹사이트의 규정 준수 문제 등으로 인해 중국 본토 사용자가 사용할 수 없는 경우가 많습니다.

오프라인 사용이 불가능하고 인터넷 내망에서도 사용할 수 없으며 큰 제한이 있습니다. 이 기사에서는 이에 대해 많은 내용을 다루지 않습니다.

둘째, 순수 프런트엔드 전체 텍스트 검색입니다.

현재 일반적인 순수 프론트엔드 전체 텍스트 검색에는 [lunrjs](//lunrjs.com)와 [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) ( `lunrjs`를 기반으로 재개발된 것)이 있습니다.

`lunrjs`는 두 가지 방법으로 인덱스를 구축할 수 있지만, 모두 고유한 문제를 가지고 있습니다.

1. 사전 구축된 색인 파일

   색인에는 모든 문서의 단어가 포함되어 있으므로 크기가 큽니다.
   문서가 추가되거나 수정될 때마다 새 색인 파일을 로드해야 합니다.
   사용자의 대기 시간이 늘어나고 대역폭도 많이 소모됩니다.

2. 즉시 문서 로드 및 인덱스 구축

   인덱스 작성은 계산 집약적인 작업입니다. 액세스할 때마다 인덱스를 다시 작성하면 지연이 발생하고 사용자 경험을 저하시킵니다.

---

`lunrjs` 외에도 다른 전체 텍스트 검색 솔루션이 있습니다 :

[fusejs](//www.fusejs.io)는 문자열 간의 유사도를 계산하여 검색을 수행합니다.

이 방법은 성능이 매우 낮아 전체 텍스트 검색에 사용하기에 적합하지 않습니다. ( 참조: [Fuse.js의 긴 쿼리가 10초 이상 걸립니다. 어떻게 최적화할 수 있을까요?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) )

[TinySearch](//github.com/tinysearch/tinysearch)는 블룸 필터를 사용하여 검색하지만, 접두어 검색(예를 들어, `goo`를 입력하고 `good`나 `google`을 검색)이나 자동 완성 기능을 구현할 수 없습니다.

기존 솔루션의 여러 가지 단점을 보완하기 위해 `i18n.site`는 새로운 순수 프런트엔드 전체 텍스트 검색 솔루션을 자체 개발했습니다. 그 특징은 다음과 같습니다:

1. 다국어 검색을 지원하며 크기가 작습니다. `gzip` 패키징한 후 검색 커널의 크기는 `6.9KB`입니다(비교를 위해 `lunrjs`의 크기는 `25KB`입니다)
1. `indexedb` 기준으로 반전된 인덱스를 구축하면 메모리를 덜 차지하고 속도가 빨라집니다
1. 문서가 추가/수정되면 추가되거나 수정된 문서만 다시 인덱싱되므로 계산량이 줄어듭니다
1. 접두사 검색을 지원하고 사용자가 입력하는 동안 실시간으로 검색 결과를 표시할 수 있습니다
1. 오프라인으로 이용 가능

아래에서는 `i18n.site` 기술 구현 내용을 자세히 소개하겠습니다.

## 다국어 단어 분할

단어 분할은 브라우저의 기본 단어 분할 `Intl.Segmenter` 을 사용하며 모든 주류 브라우저는 이 인터페이스를 지원합니다.

![](//p.3ti.site/1727667759.avif)

단어 분할 `coffeescript` 코드는 다음과 같습니다

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

안에:

* `/\p{P}/` 은 구두점과 일치하는 정규식입니다. 특정 일치 기호는 다음과 같습니다. `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` `Firefox` 브라우저 단어 분할이 `.` 분할하지 않기 때문입니다.</li>


## 인덱스 구축

`IndexedDB` 에 5개의 객체 스토리지 테이블이 생성되었습니다

* `word` : id -
* `doc` : id - 문서 url - 문서 버전 번호
* `docWord` : 문서 id - 단어의 배열 id
* `prefix` : 접두어 - 단어의 배열 id
* `rindex` : Word id - 문서 id : 줄 번호 배열

문서 `url` 과 버전 번호 `ver` 의 배열을 전달하고 문서가 테이블 `doc` 에 존재하는지 검색합니다. 존재하지 않으면 반전된 인덱스를 생성합니다. 동시에 전달되지 않은 문서에 대한 반전된 인덱스를 제거합니다.

이런 방식으로 증분 인덱싱이 가능하고 계산량이 줄어듭니다.

프론트엔드 상호작용에서는, 첫 번째 로드 시 지연을 방지하기 위해 인덱스 로딩 진행 상황을 보여주는 프로그레스 바를 표시할 수 있습니다. '단일 progress + 순수 CSS로 구현된 애니메이션 진행 상황 표시줄'을 참조하세요. [영어](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [중국어](//juejin.cn/post/7413586285954154522).

### IndexedDB 고성능 동시 쓰기

이 프로젝트는 IndexedDB의 비동기적 래핑을 기반으로 [idb](//www.npmjs.com/package/idb)를 사용하여 개발되었습니다.

IndexedDB 읽기 및 쓰기는 비동기식입니다. 인덱스를 생성할 때 문서가 동시에 로드되어 인덱스가 생성됩니다.

경쟁적인 쓰기로 인한 부분적인 데이터 손실을 방지하기 위해 아래의 `coffeescript` 코드를 참조하고 읽기와 쓰기 사이에 `ing` 캐시를 추가하여 경쟁적인 쓰기를 차단할 수 있습니다.

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

## 접두어 실시간 검색

사용자가 입력하는 동안 검색 결과를 표시하기 위해, 예를 들어 `wor` 입력하면 `words` , `work` 와 같이 앞에 `wor` 붙는 단어가 표시됩니다.

![](//p.3ti.site/1727684944.avif)

검색 커널은 단어 분할 후 마지막 단어에 대해 `prefix` 테이블을 사용하여 접두사가 붙은 모든 단어를 찾고 순서대로 검색합니다.

손떨림 방지 기능 `debounce` 프런트 엔드 상호 작용(다음과 같이 구현됨)에도 사용되어 검색을 트리거하는 사용자 입력 빈도를 줄이고 계산량을 줄입니다.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## 정밀도와 재현율

검색은 먼저 사용자가 입력한 키워드를 분류합니다.

단어 분할 후 `N` 단어가 있다고 가정하면 결과를 반환할 때 모든 키워드가 포함된 결과가 먼저 반환되고 그 다음 `N-1` , `N-2` ,..., `1` 키워드가 포함된 결과가 반환됩니다.

먼저 표시되는 검색 결과는 쿼리의 정확성을 보장하고 이후에 로드되는 결과(더 보기 버튼 클릭)는 재현율을 보장합니다.

![](//p.3ti.site/1727684564.avif)

## 요청 시 로드

응답 속도를 향상시키기 위해 검색은 `yield` 생성기를 사용하여 온디맨드 로딩을 구현하고 결과가 쿼리될 때 `limit` 반환됩니다.

`yield` 이후에 다시 검색할 때마다 `IndexedDB`의 쿼리 트랜잭션을 다시 열어야 한다는 점에 유의하세요.

## 접두어 실시간 검색

사용자가 입력하는 동안 검색 결과를 표시하기 위해, 예를 들어 `wor` 입력하면 `words` , `work` 와 같이 앞에 `wor` 붙는 단어가 표시됩니다.

![](//p.3ti.site/1727684944.avif)

검색 커널은 단어 분할 후 마지막 단어에 대해 `prefix` 테이블을 사용하여 접두사가 붙은 모든 단어를 찾고 순서대로 검색합니다.

손떨림 방지 기능 `debounce` 프런트 엔드 상호 작용(다음과 같이 구현됨)에도 사용되어 검색을 트리거하는 사용자 입력 빈도를 줄이고 계산량을 줄입니다.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## 오프라인으로 이용 가능

인덱스 테이블에는 원본 텍스트가 아닌 단어만 저장되므로 저장량이 줄어듭니다.

검색 결과를 강조 표시하려면 원본 텍스트를 다시 로드해야 하며 `service worker` 과 일치하면 반복적인 네트워크 요청을 피할 수 있습니다.

동시에 `service worker` 모든 기사를 캐시하므로 사용자가 검색을 수행하면 검색을 포함한 전체 웹 사이트를 오프라인에서 사용할 수 있습니다.

## MarkDown 문서의 표시 최적화

`i18n.site`의 순수 프론트엔드 검색 솔루션은 `MarkDown` 문서에 최적화되어 있습니다.

검색 결과를 표시할 때 장 이름이 표시되며, 클릭하면 해당 장을 탐색합니다.

![](//p.3ti.site/1727686552.avif)

## 요약

순수 프런트엔드로 구현된 역전된 전체 텍스트 검색으로, 서버가 필요 없어 중소형 웹사이트에 매우 적합합니다.

`i18n.site`가 자체 개발한 오픈소스 순수 프런트엔드 검색은体积가 작고 응답이 빠르며, 현재의 순수 프런트엔드 전체 텍스트 검색의 여러 가지 단점을 해결하여 더 나은 사용자 경험을 제공합니다.