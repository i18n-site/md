```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    ခက်ခဲစွာ ပြန်လည်စတင်ပြီးနောက် ဝန်ဆောင်မှုလုပ်သားကို မှတ်ပုံတင်ပါ။
    https://stackoverflow.com/questions/51597231/register-service-worker-after-hard-refresh
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
