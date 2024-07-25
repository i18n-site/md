# ফুটাৰ

তথাপিও ডেমো প্ৰকল্পটোক উদাহৰণ হিচাপে লৈ, ৱেবছাইটৰ ফুটাৰটো `md` সংজ্ঞায়িত কৰা `.i18n/htm/foot.pug` ।

<img alt="" src="https://p.3ti.site/1721286077.avif">

এটা সাঁচ ভাষা যিয়ে `HTML` সৃষ্টি কৰে [`pug`](https://pugjs.org)

[➔ ৰ ব্যাকৰণ শিকিবলৈ ইয়াত ক্লিক কৰক pug](https://pugjs.org)

**`css` আৰু `js` ত লিখিব `foot.pug`** , নহ'লে ভুল হ'ব।

অনুগ্ৰহ কৰি নিম্নলিখিত চাওক, শৈলী সংশ্লিষ্ট `.css` আৰু পাৰস্পৰিক ক্ৰিয়া ৱেব উপাদান সৃষ্টি কৰি লাভ কৰা হয়।

## ফুটাৰ শৈলী

ডেমো প্ৰজেক্টত তলত ৩ টা `css` ফাইল আছে `md/.i18n/htm`

* `foot.css` :
* গোটেই চাইটটোৰ বাবে `i18n.site` : `import.css`
* ফুটাৰ আইকন আৰু : `conf.css`

### আইকন ফন্ট

ফুটাৰ আইকনটো iconfont.cn ( [ইংৰাজী সংস্কৰণ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) দ্বাৰা সৃষ্টি কৰা হয় `F`

অনুগ্ৰহ কৰি প্ৰয়োজন অনুসৰি আপোনাৰ নিজৰ আইকন ফন্ট সৃষ্টি কৰক আৰু : বিন্যাস সলনি কৰক `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ৱেব উপাদানসমূহ

ইয়াত `js` লিখিব নোৱাৰিব `foot.pug`

আপুনি [এটা ৱেব উপাদান](https://www.freecodecamp.org/news/build-your-first-web-component/) সংজ্ঞায়িত কৰিব পাৰে আৰু তাৰ পিছত `foot.pug` ত উপাদান ব্যৱহাৰ কৰিব পাৰে `md/.i18n/htm/index.js`

ৱেব উপাদান সৃষ্টি কৰাটো সহজ, যেনে কাষ্টম টেগ `<x-img>`

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

ইয়াত থকা ক'ডটো তলত দিয়া : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: সংশ্লিষ্টটো `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

এই লিখা পদ্ধতিৰ `i18n.yml` মিল থকা `${I18N.xxx}`

লিংকটো `MarkDown` লৈ ৰূপান্তৰিত নহ'বলৈ লিংকত যোগ কৰক : চাওক `class="a"`
 [: `YAML` `HTML` `Markdown`](/i18/qa#H2)