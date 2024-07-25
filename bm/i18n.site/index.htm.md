```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    Baarakɛla min ye baarakɛla ye, o tɔgɔ sɛbɛn refresh gɛlɛn kɔfɛ
    https://stackoverflow.com/questions/51597231/sɔgɔsɔgɔ-sɛbɛn-baarakɛla-la-ko-kɔrɔ-ko-kɔrɔ
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
