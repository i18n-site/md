```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    हार्ड रिफ्रेश केल्यानंतर सर्व्हिस वर्करची नोंदणी करा
    https://stackoverflow.com/questions/51597231/register-service-worker-after-hard-refresh
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
