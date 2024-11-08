# i18n.site တွင် MarkDown ကွန်ဗင်းရှင်းရေးသားခြင်း။

## ကျောက်ဆူးပွိုင့်

ဘာသာစကားပေါင်းစုံအတွက်၊ ဤဖြေရှင်းချက်သည် စာသားအကြောင်းအရာအပေါ်အခြေခံ၍ ရိုးရာ `MarkDown` မျိုးရိုးအမှတ်များကို ထုတ်ပေးပါသည်။

`i18n.site` နှင့် သဘောတူညီထားသည့် ကျောက်ဆူးအမှတ်ဖြေရှင်းချက်သည် နေရာချထားရေးကျောက်ဆူးအမှတ်ကို ကိုယ်တိုင်ဖန်တီးရန်အတွက် `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` နှင့် ဆင်တူသော စာသားကို ထည့်သွင်းရန်ဖြစ်သည်။

`<a rel=id href="#xxx" id="xxx"></a>` ၊ ဤနေရာတွင် `rel=id` ကျောက်ဆူးအမှတ်၏ စာမျက်နှာပုံစံကို သတ်မှတ်သည်၊ ကျေးဇူးပြု၍ `xxx` သင်၏ တကယ့်ကျောက်ဆူးအင်္ဂလိပ်အတိုကောက်ဖြင့် အစားထိုးပါ။

Anchors များကို များသောအားဖြင့် ခေါင်းစဉ်သို့ ပေါင်းထည့်ကြသည်၊

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ဖော်ပြမှုအကျိုးသက်ရောက်မှုသည်အောက်ပါအတိုင်းဖြစ်သည်။

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` တွင် `HTML` ရေးပါ။

`HTML` `pug` ကုဒ်တွင် ထည့်သွင်းနိုင်သည်။

`<pre>` အစိတ်အပိုင်းများတွင်ပါသော အကြောင်းအရာကို ဘာသာပြန်မည်မဟုတ်ပါ။

ဤအချက်နှစ်ချက်ကို ပေါင်းစပ်ပြီး အမျိုးမျိုးသောပြသမှုဆိုင်ရာသက်ရောက်မှုများရရှိရန် `MarkDown` တွင် `HTML` အလွယ်တကူရေးနိုင်သည်။

[ကိုးကားရန်အတွက် ဤနေရာကိုနှိပ်ပါ i18n.site ပင်မစာမျက်နှာ HTML တွင် ဘာသာစကားကုဒ်စာရင်းကို ရေးသားထားပြီး](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) ကုဒ်မှာ အောက်ပါအတိုင်း : ဖြစ်သည်။

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

`<style>` ကို အပေါ်က `<pre>` မှာလည်း သတ်မှတ်ကြောင်း သတိပြုပါ။