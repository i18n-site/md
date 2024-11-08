# কাষ্টমাইজড ফুটাৰ

এতিয়াও ডেমো প্ৰকল্পক উদাহৰণ হিচাপে লৈ, `md` ডাইৰেকটৰীত `.i18n/htm/foot.pug` ৱেবছাইটৰ ফুটাৰ সংজ্ঞায়িত কৰে।

![](https://p.3ti.site/1721286077.avif)

## ফুটাৰ শৈলী

ডেমো প্ৰজেক্টত `md/.i18n/htm` তলত তিনিটা `css` ফাইল আছে।

* `foot.css` : ফুটাৰ শৈলী
* `import.css` : 1সমগ্ৰ চাইটৰ বাবে `i18n.site` শৈলী
* `conf.css` : ফুটাৰ আইকন আৰু ফন্ট

### আইকন ফন্ট

ফুটাৰ আইকনটো `F` iconfont.cn ( [ইংৰাজী সংস্কৰণ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) নামৰ এটা ফন্ট সৃষ্টি কৰি সৃষ্টি কৰা হয়।

অনুগ্ৰহ কৰি প্ৰয়োজন অনুসৰি আপোনাৰ নিজৰ আইকন আখৰ সৃষ্টি কৰক আৰু নিম্নলিখিত বিন্যাস `conf.css` ত সলনি কৰক :

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

অনুগ্ৰহ কৰি iconfont.cn ৰ ফন্ট ফাইলটো প্ৰত্যক্ষভাৱে উল্লেখ নকৰিব কাৰণ ইয়াক ছাফাৰী ব্ৰাউজাৰত লোড কৰিব নোৱাৰি।

## ৱেব উপাদানসমূহ

আপুনি `foot.pug` ত `js` লিখিব নোৱাৰে। যদি পাৰস্পৰিক ক্ৰিয়াৰ প্ৰয়োজন হয়, অনুগ্ৰহ কৰি ৱেব উপাদান স্বনিৰ্বাচিত কৰক।

[এটা ৱেব উপাদান](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` ত সংজ্ঞায়িত কৰিব পাৰি আৰু তাৰ পিছত `foot.pug` ত ব্যৱহাৰ কৰিব পাৰি ।

ৱেব উপাদান সৃষ্টি কৰাটো সহজ, যেনে স্বনিৰ্বাচিত `<x-img>` ।

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

## বহুভাষিক ফুটাৰ

`.i18n/htm/foot.pug` ত থকা ক'ডটো তলত দিয়া ধৰণৰ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ইয়াত `${I18N.C}` `en/i18n.yml` ৰ সৈতে মিল খায় :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

এই লিখা পদ্ধতিৰ সৈতে মিল থকা `${I18N.xxx}` ব্যৱহাৰ কৰি, `i18n.yml` সৈতে সংযুক্ত কৰি, আপুনি ফুটাৰৰ বহু-ভাষিক আন্তৰ্জাতিককৰণ লাভ কৰিব পাৰিব।

লিংকত `class="a"` যোগ কৰিলে লিংকটো `MarkDown` লৈ ৰূপান্তৰিত হোৱাত বাধা দিয়া হয়। চাওক :
 [➔ `YAML` লিংক `HTML` `Markdown` লৈ ৰূপান্তৰিত হোৱাত কেনেকৈ বাধা দিব :](/i18/qa#H2) .