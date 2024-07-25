```js
(async (D, S) => {
  S.register("/S.js");
  await S.ready
  /*
    হাৰ্ড ৰিফ্ৰেছৰ পিছত সেৱা কৰ্মী পঞ্জীয়ন কৰক
    https://stackoverflow.com/questions/51597231/কঠিন-সতেজ কৰাৰ পিছত-সেৱা-কৰ্মী-পঞ্জীয়ন কৰক
  */
  S.controller || location.reload()
  D.head.append(S = D.createElement('script'));
  S.src = '/_'
  console.log('done');
})(document, navigator.serviceWorker)
```
