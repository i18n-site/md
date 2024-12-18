# စိတ်ကြိုက်အောက်ခြေမှတ်

သရုပ်ပြပရောဂျက်ကို နမူနာအဖြစ် ယူနေသေးသည်၊ `md` လမ်းညွှန်တွင် `.i18n/htm/foot.pug` ဝဘ်ဆိုက်၏အောက်ခြေကို သတ်မှတ်သည်။

![](https://p.3ti.site/1721286077.avif)

## အောက်ခြေပုံစံ

သရုပ်ပြပရောဂျက်တွင် `md/.i18n/htm` အောက်တွင် `css` ဖိုင်သုံးခုရှိသည်။

* `foot.css` : ပုံစံ
* `import.css` : ဆိုက်တစ်ခုလုံးအတွက် `i18n.site` ပုံစံ
* `conf.css` အောက်ခြေအိုင်ကွန် : နှင့် ဖောင့်များ

### အိုင်ကွန်ဖောင့်

အောက်ခြေအိုင်ကွန်ကို iconfont.cn `F` [အင်္ဂလိပ်ဗားရှင်း](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ဖြင့် ဖန်တီးထားသည်။

ကျေးဇူးပြု၍ သင့်ကိုယ်ပိုင်အိုင်ကွန်ဖောင့်ကို လိုအပ်သလို ဖန်တီးပြီး `conf.css` တွင် အောက်ပါဖွဲ့စည်းပုံကို အစားထိုးပါ :

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

ကျေးဇူးပြု၍ iconfont.cn ၏ဖောင့်ဖိုင်ကို safari browser တွင်တင်၍မရသောကြောင့် တိုက်ရိုက်ကိုးကားခြင်းမပြုပါနှင့်။

## ဝဘ်အစိတ်အပိုင်းများ

သင်သည် `foot.pug` တွင် `js` ရေး၍ မရပါ။ အပြန်အလှန်တုံ့ပြန်မှု လိုအပ်ပါက၊ ကျေးဇူးပြု၍ ဝဘ်အစိတ်အပိုင်းကို စိတ်ကြိုက်ပြင်ဆင်ပါ။

[ဝဘ်အစိတ်အပိုင်းတစ်ခုကို](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` တွင် သတ်မှတ်နိုင်ပြီး `foot.pug` တွင် အသုံးပြုနိုင်သည်။

စိတ်ကြိုက် `<x-img>` ကဲ့သို့သော ဝဘ်အစိတ်အပိုင်းများကို ဖန်တီးရန် လွယ်ကူသည်။

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

## ဘာသာစုံ အောက်ခြေမှတ်စု

`.i18n/htm/foot.pug` မှာရှိတဲ့ ကုဒ်က အောက်ပါအတိုင်း ဖြစ်ပါတယ် :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ဤတွင် `${I18N.C}` `en/i18n.yml` နှင့် ကိုက်ညီပါသည် :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` နှင့် ပေါင်းစပ်ထားသော ဤ `${I18N.xxx}` ီရိယကို အသုံးပြု၍ အောက်ခြေမှတ်စု၏ ဘာသာစကားပေါင်းစုံ နိုင်ငံတကာသို့ ပြောင်းလဲခြင်းကို သင် ရရှိနိုင်ပါသည်။

လင့်ခ်သို့ `class="a"` ပေါင်းထည့်ခြင်းသည် လင့်ခ်ကို `MarkDown` အဖြစ်သို့ ပြောင်းလဲခြင်းမှ ကာကွယ်ရန်ဖြစ်သည်။ ကြည့်ပါ :
 [➔ `YAML` လင့်ခ် `HTML` `Markdown` သို့ပြောင်းလဲခြင်းမှ :](/i18/qa#H2) ။