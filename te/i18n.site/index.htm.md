```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    హార్డ్ రిఫ్రెష్ తర్వాత సర్వీస్ వర్కర్‌ని నమోదు చేయండి
    https://stackoverflow.com/questions/51597231/register-service-worker-after-hard-refresh
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
