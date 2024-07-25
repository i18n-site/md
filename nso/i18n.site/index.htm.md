```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Ngwadiša mošomi wa tirelo ka morago ga go hlabolla ka thata
    https://stackoverflow.com/questions/51597231/ngwadiša-mošomi-tšebelelo-ka morago ga-go hlabolla ka thata
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
