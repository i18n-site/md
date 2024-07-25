```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    ހާޑް ރިފްރެޝް އަށް ފަހު ސާވިސް ވޯކަރ ރަޖިސްޓްރީ ކުރުން
    https://stackoverflow.com/questions/51597231/ރަޖިސްޓްރީ-ސާވިސް-ވޯކަރ-އަށްފަހު-ހާޑް-ރިފްރެޝް
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
