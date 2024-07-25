```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Irehistro ti service worker kalpasan ti hard refresh
    https://stackoverflow.com/questions/51597231/agparehistro-ti-trabahador-ti-serbisio-kalpasan-ti-narigat-a-panag-refresh
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
