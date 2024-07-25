```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Sinchi musuqyachiymanta qhipaman servicio llamk'aq qillqay
    https://stackoverflow.com/questions/51597231/qillqakuy-servicio-llamk'aq-sinchi-musuqchay-qhipa
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
