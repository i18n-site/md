```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    कठिनताजीकरणानन्तरं सेवाकर्मचारिणः पञ्जीकरणं कुर्वन्तु
    https://stackoverflow.com/questions/51597231/पञ्जीकरण-सेवा-कार्यकर्ता-कठिन-ताजगी-पश्चात्
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
