```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Tsarisa mutirhi wa vukorhokeri endzhaku ko phyuphyisa hi matimba
    https://stackoverflow.com/questions/51597231/tsarisa-mutirhi-wa-vukorhokeri-endzhaku-ku-pfuxeta hi matimba
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
