# MarkDown ဖော်မတ်ကွန်ဗင်းရှင်း

## ကျောက်ဆူးပွိုင့်

ရိုးရာ `MarkDown` Anchors များသည် ဘာသာစကားပေါင်းစုံအတွက်၊ ဤဖြေရှင်းချက်သည် မဖြစ်နိုင်ပါ။

`i18n.site` သဘောတူထားသည့် ကျောက်ဆူးဖြေရှင်းချက်သည် နေရာချထားခြင်းဆိုင်ရာ ကျောက်ဆူးကို ကိုယ်တိုင်ဖန်တီးရန် `<a rel=id href="#xxx" id="xxx"></a>` တွင် `MarkDown` နှင့် ဆင်တူသော စာသားကို ထည့်သွင်းရန်ဖြစ်သည်။

`<a rel=id href="#xxx" id="xxx"></a>` ၊ ဤနေရာတွင် `rel=id` ကျောက်ဆူးအမှတ်၏ စာမျက်နှာပုံစံကို သတ်မှတ်သည်၊ ကျေးဇူးပြု၍ `xxx` သင်၏ကျောက်ဆူးအင်္ဂလိပ်အတိုကောက်ဖြင့် အစားထိုးပါ။

Anchors များကို များသောအားဖြင့် ခေါင်းစဉ်သို့ ပေါင်းထည့်ကြသည်၊

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ဖော်ပြမှုအကျိုးသက်ရောက်မှုသည်အောက်ပါအတိုင်းဖြစ်သည်။

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` ရေးပါ `MarkDown`

`pug` `HTML` ကုဒ်ကို ထည့်သွင်းနိုင်ပါတယ်။

`<pre>` ဒြပ်စင်အတွင်းရှိ အကြောင်းအရာကို ဘာသာပြန်မည်မဟုတ်ပါ။

ဤအချက်နှစ်ချက်ကိုပေါင်းစပ်ပြီး `HTML` ပြသမှုအကျိုးသက်ရောက်မှုများရရှိရန် `MarkDown`

[github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) ကုဒ်မှာ အောက်ပါအတိုင်းဖြစ်သည် :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

အထက်တွင် `<style>` ဟူ၍လည်း သတ်မှတ်ထားသည်ကို သတိပြုပါ `<pre>`
