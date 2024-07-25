```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Региструјте сервисера након напорног освежавања
    хттпс://стацковерфлов.цом/куестионс/51597231/регистер-сервице-воркер-афтер-хард-рефресх
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
