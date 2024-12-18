# ပုံစံစာရင်း

အောက်ပါစတိုင်များဖြင့် `MarkDown` ရေးနည်းကိုကြည့်ရှုရန် [ဤစာမျက်နှာ၏အရင်းအမြစ်ဖိုင်ကိုကြည့်ရှုရန် ဤနေရာကိုနှိပ်ပါ](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) ။

## ဘလောက်ခေါက်

|+| MarkDown ဆိုတာ ဘာလဲ။

    MarkDown သည် အသုံးပြုသူများအား ဖတ်ရန်နှင့်ရေးရလွယ်ကူသော ရိုးရှင်းသော စာသားဖော်မတ်ဖြင့် ဖော်မတ်လုပ်ထားသော စာရွက်စာတမ်းများကို ဖန်တီးနိုင်စေသည့် ပေါ့ပါးသော markup ဘာသာစကားတစ်ခုဖြစ်သည်။

    စာတမ်းပြုစုခြင်း၊ ဘလော့ဂ် ဆောင်းပါးများ၊ အီးဘွတ်များ၊ ဖိုရမ် ပို့စ်များ စသည်တို့ကို ရေးသားရန် အသုံးများသည်။

    ၎င်းတွင်အောက်ပါအားသာချက်များရှိသည်။

    1. သင်ယူရန်လွယ်ကူသည်။
    1. အရမ်းဖတ်လို့ရတယ်။
    1. Version control ဆန်ဆန်

       `MarkDown` စာရွက်စာတမ်းများသည် ရိုးရိုးစာသားဖော်မတ်ဖြစ်သောကြောင့်၊ ပရိုဂရမ်မာများသည် ၎င်းတို့ကို ဗားရှင်းထိန်းချုပ်မှုစနစ်များ ( `git` ကဲ့သို့) တွင် အလွယ်တကူ ထည့်သွင်းနိုင်သည်။

       ၎င်းသည် အပြောင်းအလဲများကို ခြေရာခံခြင်းနှင့် ပူးပေါင်းဆောင်ရွက်ခြင်း၊ အထူးသဖြင့် အဖွဲ့ဖွံ့ဖြိုးတိုးတက်မှုတွင် ပိုမိုရိုးရှင်းစေသည်။

|-| I18N ဆိုတာဘာလဲ။

    "I18N" သည် "Internationalization" ၏ အတိုကောက်ဖြစ်သည်။

    "Internationalization" ဟူသော စကားလုံးသည် "I" နှင့် "N" အကြား စာလုံး 18 လုံး ပါရှိသောကြောင့် ကိုယ်စားပြုမှုကို ရိုးရှင်းစေရန်အတွက် "I18N" ကို အသုံးပြုပါသည်။

    လူပြိန်းစကားအရ၊ ဘာသာစကားများစွာကို ပံ့ပိုးပေးသည်ဟု ဆိုလိုသည်။


Folding block သည် `i18n.site` မှ `MarkDown` အထိ တိုးချဲ့ထားသော syntax တစ်ခုဖြစ်ပြီး အောက်ပါအတိုင်း ရေးသားထားသည် :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

`နှင့်အတူ|+| `或`|-| ` ဖြင့်စတင်သည့်စာကြောင်းသည် ခေါက်ဘလောက်တစ်ခုကို ထုတ်ပေးမည်ဖြစ်ပြီး၊ ခေါက်တုံး၏အကြောင်းအရာသည် တူညီသောအဆင့်ဖြင့် ရေးထိုးထားသော နောက်ဆက်တွဲစာကြောင်းများဖြစ်သည် (စာပိုဒ်များကို မျဉ်းအလွတ်များဖြင့် ပိုင်းခြားထားသည်)။

Pass`|-| `标记的折叠块默认展开，`|+| `တဂ်လုပ်ထားသော ပြိုကျသောလုပ်ကွက်များသည် မူရင်းအတိုင်း ပြိုကျပါသည်။

## မျဉ်းကြောင်း & Strikethrough &

__ __~~ ဖောက်~~ နှင့် **ရဲရင့်သော** တင်ပြချက်စာသား။

အောက်ပါအတိုင်း ရေးသားထားသည်။

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` ဘ်ဆိုက်တည်ဆောက်ခြင်းတူးလ်၏ `MarkDown` parser သည် မျဉ်းသား၊ အကွက်ဖောက်ခြင်းနှင့် ရဲရင့်သော အထားအသိုကို အကောင်းဆုံးဖြစ်အောင် ပြုလုပ်ထားပြီး အမှတ်အသားမပြုမီနှင့် အပြီးတွင် နေရာလွတ်များမရှိဘဲ အကျိုးသက်ရောက်စေကာ တရုတ်၊ ဂျပန်နှင့် ကိုရီးယားကဲ့သို့သော ဘာသာစကားများဖြင့် စာရွက်စာတမ်းများကို ရေးရန် ပိုမိုလွယ်ကူစေသည်။ ခွဲထွက်များအဖြစ် space များကို မသုံးပါနှင့်။

တိုးချဲ့ဖတ်ရှုခြင်း : [Nuggets ၏ Markdown syntax ( `**……**` ) သည် တစ်ခါတစ်ရံတွင် အဘယ်ကြောင့် အကျိုးသက်ရောက်မှု မရှိသနည်း။](//juejin.cn/post/7064565848421171213)

## ကိုးကား

### တစ်ကြောင်းတည်းကိုးကား

> ငါ့အရည်အချင်းတွေ အသုံးဝင်လိမ့်မယ်၊ ငါ့ပိုက်ဆံတွေ အကုန်ကုန်ပြီးရင် ငါပြန်လာမယ် ငါ့ရဲ့အရည်အချင်းတွေက ငါ့သဘောသဘာဝပဲ။
<p style="text-align:right">─ လီဘိုင်</p>

### စာကြောင်းမျိုးစုံကိုးကား

> သိပ္ပံစိတ်ကူးယဉ်၏ နောက်ထပ်ထူးခြားသောအားသာချက်မှာ ၎င်း၏အလွန်ကျယ်ပြန့်သောနယ်ပယ်ဖြစ်သည်။
> စကားလုံးသန်းပေါင်းများစွာပါသော "စစ်ပွဲနှင့်ငြိမ်းချမ်းရေး" သည် ဆယ်စုနှစ်များစွာကြာ ဒေသတစ်ခု၏သမိုင်းကိုသာ ဖော်ပြပါသည်။
> Asimov ၏ "နောက်ဆုံးအဖြေ" ကဲ့သို့သော သိပ္ပံစိတ်ကူးယဉ်ဝတ္ထုများသည် လူသားများအပါအဝင် စကြဝဠာတစ်ခုလုံး၏ နှစ်ဘီလီယံချီသော သမိုင်းကြောင်းကို စကားလုံးထောင်ပေါင်းများစွာဖြင့် ကွက်ကွက်ကွင်းကွင်း ဖော်ပြသည်။
> ရိုးရာစာပေတွင် ထိုသို့သောပါဝင်နိုင်မှုနှင့် ရဲရင့်မှုတို့သည် မဖြစ်နိုင်ပေ။
<p style="text-align:right">── Liu Cixin</p>

### ထိပ်ဖျား `> [!TIP]`

> [!TIP]
> သင်၏နိုင်ငံကူးလက်မှတ်နှင့် ဗီဇာသက်တမ်းကုန်ဆုံးသွားသော စာရွက်စာတမ်းများ၏ တရားဝင်မှုကို စစ်ဆေးရန် မမေ့ပါနှင့်။

အောက်ပါအတိုင်း ရေးသားထားသည်။

```
> [!TIP]
> YOUR CONTENT
```

### မှတ်ချက် `> [!NOTE]`

> [!NOTE]
> မင်းငါ့ကို မက်ဆေ့ပို့ပြီး ငါချက်ချင်းပြန်ဖြေရင် အဲဒါ ဘာကိုဆိုလိုတာလဲ။
> ဒါက မိုဘိုင်းလ်ဖုန်းနဲ့ ကစားရတာကို တကယ်ကို နှစ်သက်တယ်ဆိုတာ ပြသပါတယ်။


### သတိပေးချက် `> [!WARN]`

> [!WARN]
> တောရိုင်းစွန့်စားခန်းကို သွားတဲ့အခါ ဘေးကင်းဖို့ အရေးကြီးပါတယ်။ ဤသည်မှာ အဓိက ဘေးကင်းရေး အကြံပြုချက် အချို့ဖြစ်သည်။
>
> - **မိုးလေဝသခန့်မှန်းချက်ကို စစ်ဆေးပါ** - လွန်ခဲ့သည့်အပတ်က တောင်တက်သမားတစ်စုသည် ရာသီဥတုခန့်မှန်းချက်ကို မစစ်ဆေးသောကြောင့် တောင်တက်လမ်းတစ်ဝက်တွင် မုန်တိုင်းတစ်ခုနှင့် ကြုံတွေ့ခဲ့ရပြီး အရေးပေါ် ကယ်ဆယ်ခဲ့ရသည်။
> - **လိုအပ်သောပစ္စည်းများကိုဆောင်ထားပါ** - အစားအစာ၊ ရေနှင့် ရှေးဦးသူနာပြုပစ္စည်းများ အလုံအလောက်ယူဆောင်လာပါ။
> - **မြေမျက်နှာသွင်ပြင်ကို နားလည်ပါ** - လမ်းပျောက်မသွားစေရန် စွန့်စားခန်း၏ မြေပြင်အနေအထားနှင့် လမ်းကြောင်းများကို ရင်းနှီးကျွမ်းဝင်အောင်ပြုလုပ်ပါ။
> - **ချိတ်ဆက်နေရန်** - ပြင်ပကမ္ဘာနှင့် ချိတ်ဆက်နေပြီး လူတိုင်း ဘေးကင်းစွာ ပြန်လာနိုင်ကြောင်း သေချာပါစေ။
>
> ဘေးကင်းရေးသည် အမြဲပထမဖြစ်သည်ကို သတိရပါ။

## လုပ်စရာစာရင်း

- [x] ထုတ်ကုန် နမူနာပုံစံနှင့် လုပ်ဆောင်ချက်စာရင်းကို ဒီဇိုင်းဆွဲပါ။
- [ ] နည်းပညာအစုအဝေးနှင့် ဖွံ့ဖြိုးတိုးတက်ရေးကိရိယာများကို ဆုံးဖြတ်ပါ။
- [ ] ထုတ်ကုန်ဖွံ့ဖြိုးတိုးတက်မှု အချိန်ဇယားနှင့် မှတ်တိုင်များကို ပြုစုပါ။

## စာရင်း

### အမိန့်စာရင်း

1. ပြေး
   1. တစ်ပတ်လျှင်သုံးကြိမ်၊ တစ်ကြိမ်လျှင် 5 ကီလိုမီတာ
   1. မာရသွန်တစ်ဝက်ပြေး
1. အားကစားရုံလေ့ကျင့်ရေး
   1. တစ်ပတ်လျှင် နှစ်ကြိမ်၊ တစ်ကြိမ်လျှင် ၁ နာရီ
   1. အဓိက ကြွက်သားတွေကို အာရုံစိုက်ပါ။

### အစီအစဥ်မရှိသောစာရင်း

* လူမှုရေးပွဲများ
  - စက်မှုလုပ်ငန်း နှီးနှောဖလှယ်ပွဲများတွင် ပါဝင်ပါ။
    + နည်းပညာမျှဝေခြင်းကဏ္ဍ
    + လုပ်ငန်းရှင်များ ဖလှယ်ရေး အစည်းအဝေး
  - သူငယ်ချင်းများစုဝေးရာကိုစီစဉ်ပါ။
    + ပြင်ပ BBQ
    + ရုပ်ရှင်ည

## စာရွက်

| တွေးခေါ်ရှင်       | အဓိကပံ့ပိုးမှုများ                           |
|--------------|------------------------------------|
| ကွန်ဖြူးရှပ်         | ကွန်ဖြူးရှပ်ဝါဒကို တည်ထောင်သူ |
| ဆိုကရေးတီး     | အနောက်တိုင်းဒဿနိကဗေဒ၏ဖခင်  |
| နစ်ရှေး         | စူပါမင်း အတွေးအခေါ်၊ ရိုးရာအကျင့်စာရိတ္တနှင့် ဘာသာရေးကို ဝေဖန်သည်။       |
| မာ့က်စ်       | ကွန်မြူနစ်ဝါဒ |

### ကြီးမားသော စားပွဲပေါ်တွင် ပိုမိုကောင်းမွန်အောင် ပြုလုပ်ခြင်း။

အတော်အတန်ကြီးသော ဇယားများအတွက်၊ display effect ကို ပိုကောင်းအောင်ပြုလုပ်ရန် အောက်ပါနည်းလမ်းများကို အသုံးပြုနိုင်ပါသည်။

1. သေးငယ်သောဖောင့်ကိုသုံးပါ။

   ဥပမာအားဖြင့်၊ ဇယားကို `<div style="font-size:14px">` နှင့် `</div>` ဖြင့် ခြုံပါ။

   `div` tag သည် ၎င်း၏ကိုယ်ပိုင်မျဉ်းကို သိမ်းပိုက်ရမည်ဖြစ်ပြီး ၎င်းမတိုင်မီနှင့် အပြီးတွင် မျဉ်းအလွတ်များကို ချန်ထားရမည်ဖြစ်သည်။
1. ဆဲလ်တစ်ခုအတွင်း ပိုရှည်သောစာသားအတွက်၊ လိုင်းကိုခြုံရန် `<br>` ထည့်ပါ။
1. ကော်လံတစ်ခုသည် အလွန်တိုနေပါက၊ အကျယ်ကိုချဲ့ရန် ခေါင်းစီးသို့ `<div style="width:100px">xxx</div>` ထည့်နိုင်ပြီး လိုင်းခွဲသည့်အနေအထားကို ထိန်းချုပ်ရန် [ခေါင်းစီးတွင် `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) ထည့်နိုင်သည်။

သရုပ်ပြဥပမာမှာ အောက်ပါအတိုင်းဖြစ်သည်။

<div style="font-size:14px">

| လူမျိုး       | <div style="width:70px;margin:auto">တွေးခေါ်ရှင်အမည်</div> | ခေတ် | အဓိက အတွေးအခေါ် ပံ့ပိုးမှုများ                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| တရုတ်       | ကွန်ဖြူးရှပ်                                           | ၅၅၁-၄၇၉ ဘီစီ   | ကွန်ဖြူးရှပ်အယူဝါဒကို တည်ထောင်သူသည် "ကြင်နာမှု" နှင့် "သိက္ခာရှိမှု" ကဲ့သို့သော အဓိကသဘောတရားများကို အဆိုပြုခဲ့ပြီး ကိုယ်ကျင့်တရားဆိုင်ရာ ပြုစုပျိုးထောင်မှုနှင့် လူမှုရေးစည်းစိမ်များကို အလေးပေးခဲ့သည်။ |
| ရှေးဂရိ     | ဆိုကရေးတီး                                       | ဘီစီ ၄၆၉-၃၉၉   | ဒိုင်ယာလော့များနှင့် စကားနည်းများဖြင့် အမှန်တရားကို စူးစမ်းရှာဖွေခြင်းသည် "ကိုယ့်ကိုယ်ကို သိသည်" နှင့် ဆင်ခြင်တုံတရားရှိသော တွေးခေါ်မှုကို အလေးပေးဖော်ပြသည်         |
| ပြင်သစ်       | ဗော်တဲယား                                         | 1694-1778       | ဉာဏ်အလင်း၏ ကိုယ်စားပြုပုဂ္ဂိုလ်များသည် ကျိုးကြောင်းဆီလျော်မှု၊ လွတ်လပ်မှုနှင့် တန်းတူညီမျှမှုကို ထောက်ခံအားပေးကာ ဘာသာရေးအယူသီးမှုနှင့် အာဏာရှင်အုပ်ချုပ်ရေးကို ဝေဖန်ခဲ့သည်။   |
| ဂျာမနီ       | Kant                                           | 1724-1804       | "စင်ကြယ်သောအကြောင်းပြချက်၏ဝေဖန်ချက်" ကိုတင်ပြပါ။<br> အကျင့်စာရိတ္တ၊ လွတ်လပ်မှု၊ နှင့် အသိပညာတို့၏ အခြေခံအုတ်မြစ်များကို လက်တွေ့ကျကျ ဆင်ခြင်သုံးသပ်သည်။     |

</div>

အထက်ပါ ဥပမာအတွက် pseudocode သည် အောက်ပါအတိုင်းဖြစ်သည် ။

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## ကုဒ်

### အတွင်းကုဒ်

ပရိုဂရမ်းမင်းဘာသာစကားများ၏ကျယ်ပြန့်သောကမ္ဘာကြီးတွင် `Rust` ၊ `Python` ၊ `JavaScript` နှင့် `Go` တို့သည် ထူးခြားသောအနေအထားတစ်ခုစီရှိသည်။

### ကုဒ်လိုင်းများစွာ

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## စာပိုဒ်အတွင်း လိုင်းချိုးခြင်း။

စာပိုဒ်များအတွင်း မျဉ်းကြောင်းများ ဖြတ်တောက်မှုများကို မျဉ်းကြောင်းများကြားတွင် မျဉ်းလွတ်များ မထည့်ဘဲ အောင်မြင်နိုင်သည်။
စာပိုဒ်များအတွင်း စာကြောင်းခွဲများကြားအကွာအဝေးသည် စာပိုဒ်များကြားအကွာအဝေးထက် သေးငယ်သည်။

ဥပမာအားဖြင့်:

> ကြီးမြတ်သော ပုဂ္ဂိုလ်အဖြစ် နေထိုင်၊
> မရဏသည် တစ္ဆေသူရဲကောင်းတစ်ဦးလည်းဖြစ်သည်။
> Xiang Yu ကို လွမ်းနေတုန်းပဲ၊
> Jiangdong ကို ဖြတ်ကျော်ရန် ဝန်လေးသည်။
>
> Li Qingzhao သည် Song မင်းဆက်၏ အရည်အချင်းမရှိမှုကို အရိပ်အမြွက်ဖော်ပြရန်အတွက် Xiang Yu ၏ ကြေကွဲဖွယ်ဇာတ်လမ်းကို အသုံးပြုခဲ့သည်။
> ရန်ပွဲမရှိဘဲ လက်နက်ချမှုအတွက် နယ်ချဲ့တရားရုံးကို မကျေနပ်ကြောင်း ဖော်ပြသည်။