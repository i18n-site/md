```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    ลงทะเบียนพนักงานบริการหลังจากการรีเฟรชอย่างหนัก
    https://stackoverflow.com/questions/51597231/register-service-worker-after-hard-refresh
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
