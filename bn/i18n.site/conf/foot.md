# ফুটার

এখনও একটি উদাহরণ হিসাবে ডেমো প্রকল্প গ্রহণ, ওয়েবসাইটের ফুটার `md` সংজ্ঞায়িত করা `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

একটি টেমপ্লেট ভাষা যা `HTML` তৈরি করে [`pug`](https://pugjs.org)

[➔ এর ব্যাকরণ শিখতে এখানে ক্লিক করুন pug](https://pugjs.org)

**`css` এবং `js` লিখবেন `foot.pug`** , অন্যথায় ত্রুটি থাকবে।

অনুগ্রহ করে নিম্নলিখিতগুলি পড়ুন, শৈলীটি সংশ্লিষ্ট লেখায় `.css` এবং মিথস্ক্রিয়াটি ওয়েব উপাদান তৈরি করে অর্জন করা হয়।

## ফুটার শৈলী

ডেমো প্রকল্পে নিচে 3 `css` ফাইল আছে `md/.i18n/htm`

* পাদচরণ : `foot.css`
* পুরো সাইটের জন্য `i18n.site` : `import.css`
* ফুটার আইকন এবং : `conf.css`

### আইকন ফন্ট

পাদচরণ আইকন তৈরি করে iconfont.cn ( [ইংরেজি সংস্করণ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) নামের একটি ফন্ট তৈরি করে `F`

অনুগ্রহ করে প্রয়োজন অনুসারে আপনার নিজস্ব আইকন ফন্ট তৈরি করুন এবং : কনফিগারেশনটি প্রতিস্থাপন করুন `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ওয়েব উপাদান

যদি ইন্টারঅ্যাকশন প্রয়োজন হয়, `foot.pug` ওয়েব পেজ কম্পোনেন্ট কাস্টমাইজ `js` ।

আপনি [একটি ওয়েব উপাদান](https://www.freecodecamp.org/news/build-your-first-web-component/) সংজ্ঞায়িত করতে পারেন এবং তারপর `md/.i18n/htm/index.js` `foot.pug` কম্পোনেন্ট ব্যবহার করতে পারেন।

কাস্টম ট্যাগের মতো ওয়েব উপাদান তৈরি করা সহজ `<x-img>`

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

: মধ্যে কোডটি নিম্নরূপ `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` সংশ্লিষ্ট একটি `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

এই লেখার পদ্ধতির `${I18N.xxx}` ব্যবহার করে, `i18n.yml` এর সাথে মিলিত, আপনি ফুটারের বহু-ভাষা আন্তর্জাতিকীকরণ অর্জন করতে পারেন।

লিঙ্কটি `MarkDown` এ রূপান্তরিত হওয়া এড়াতে লিঙ্কে যোগ : `class="a"`
 [: `YAML` `HTML` লিঙ্কটিকে `Markdown` এ রূপান্তর করা থেকে বিরত রাখা যায়](/i18/qa#H2) ।