```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    ድሕሪ ሓያል ምሕዳስ ሰራሕተኛ ኣገልግሎት ምምዝጋብ
    https://stackoverflow.com/questions/51597231/ድሕሪ-ጽኑዕ-ምሕዳስ-ሰራሕተኛ-ኣገልግሎት-ምምዝጋብ
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
