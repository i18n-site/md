```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    ഹാർഡ് റിഫ്രഷ് ചെയ്ത ശേഷം സേവന തൊഴിലാളിയെ രജിസ്റ്റർ ചെയ്യുക
    https://stackoverflow.com/questions/51597231/register-service-worker-after-hard-refresh
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
