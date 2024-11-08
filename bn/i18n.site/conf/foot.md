# কাস্টমাইজড ফুটার

এখনও একটি উদাহরণ হিসাবে ডেমো প্রকল্প গ্রহণ, `md` ডিরেক্টরিতে `.i18n/htm/foot.pug` ওয়েবসাইটের ফুটার সংজ্ঞায়িত করে।

![](https://p.3ti.site/1721286077.avif)

## ফুটার শৈলী

ডেমো প্রজেক্টে `md/.i18n/htm` নিচে তিনটি `css` ফাইল রয়েছে।

* `foot.css` ফুটার শৈলী :
* `import.css` : 1 সম্পূর্ণ সাইটের জন্য `i18n.site` শৈলী
* `conf.css` : আইকন এবং ফন্ট

### আইকন ফন্ট

iconfont.cn ( [ইংরেজি সংস্করণ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) নামের একটি ফন্ট তৈরি করে ফুটার আইকন তৈরি `F` হয়।

প্রয়োজন অনুযায়ী আপনার নিজস্ব আইকন ফন্ট তৈরি করুন এবং নিম্নলিখিত কনফিগারেশনটি `conf.css` -তে প্রতিস্থাপন করুন :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

অনুগ্রহ করে iconfont.cn এর ফন্ট ফাইলটি সরাসরি উল্লেখ করবেন না কারণ এটি সাফারি ব্রাউজারে লোড করা যাবে না।

## ওয়েব উপাদান

আপনি `foot.pug` এর মধ্যে `js` লিখতে পারবেন না। ইন্টারঅ্যাকশনের প্রয়োজন হলে, অনুগ্রহ করে ওয়েব কম্পোনেন্ট কাস্টমাইজ করুন।

[একটি ওয়েব উপাদান](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` তে সংজ্ঞায়িত করা যেতে পারে এবং তারপর `foot.pug` এ ব্যবহার করা যেতে পারে।

ওয়েব কম্পোনেন্ট তৈরি করা সহজ, যেমন কাস্টম `<x-img>` 0।

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## বহুভাষিক ফুটার

`.i18n/htm/foot.pug` এর কোডটি নিম্নরূপ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

এখানে `${I18N.C}` এর সাথে `en/i18n.yml` মিল রয়েছে :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

এই লেখার পদ্ধতির অনুরূপ `${I18N.xxx}` ব্যবহার করে, `i18n.yml` এর সাথে মিলিত, আপনি ফুটারের বহু-ভাষা আন্তর্জাতিকীকরণ অর্জন করতে পারেন।

লিঙ্কে `class="a"` যোগ করা হল লিঙ্কটিকে `MarkDown` এ রূপান্তরিত হওয়া থেকে রক্ষা করা। দেখুন :
 [➔ `YAML` কিভাবে লিঙ্ক `HTML` `Markdown` এ রূপান্তর করা থেকে বিরত রাখা :](/i18/qa#H2) ।