```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    हार्ड रिफ्रेश के बाद सर्विस वर्कर के रजिस्टर करीं
    https://stackoverflow.com/questions/51597231/रजिस्टर-सेवा-कार्यकर्ता-कठिन-ताज़ा कइला के बाद
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
