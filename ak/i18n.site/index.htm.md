```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Kyerɛw ɔsom adwumayɛfo din wɔ hard refresh akyi
    https://stackoverflow.com/questions/51597231/register-service-adwuma-adwuma-a-wɔyɛ-san-yɛ-nsɛm
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
