# i18n.site মাৰ্কডাউন লিখাৰ নিয়ম

## এংকৰ পইণ্ট

পৰম্পৰাগত `MarkDown` এংকৰ পইণ্ট লিখনী বিষয়বস্তুৰ ওপৰত ভিত্তি কৰি সৃষ্টি কৰা হয়।

`i18n.site` সৈতে একমত হোৱা এংকৰ পইণ্ট সমাধান হ'ল `MarkDown` ত `<a rel=id href="#xxx" id="xxx"></a>` ৰ দৰে লিখনী সন্নিবিষ্ট কৰা যাতে পজিচনিং এংকৰ পইণ্টটো হস্তচালিতভাৱে সৃষ্টি কৰিব পাৰি।

`<a rel=id href="#xxx" id="xxx"></a>` , ইয়াত `rel=id` এংকৰ পইণ্টৰ পৃষ্ঠা শৈলী সংজ্ঞায়িত কৰে, অনুগ্ৰহ কৰি `xxx` ৰ সলনি আপোনাৰ প্ৰকৃত এংকৰ ইংৰাজী সংক্ষিপ্তকৰণ কৰক।

সাধাৰণতে শিৰোনামত এংকৰ যোগ কৰা হয়, যেনে:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

প্ৰদৰ্শন প্ৰভাৱ তলত দিয়া ধৰণৰ:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` ৰ ভিতৰত `HTML` লিখক

`HTML` `pug` ক'ডত এম্বেড কৰিব পাৰি।

`<pre>` উপাদানত থকা বিষয়বস্তু অনুবাদ কৰা নহ'ব।

এই দুটা বিন্দু একত্ৰিত কৰি, আপুনি বিভিন্ন প্ৰদৰ্শন প্ৰভাৱ লাভ কৰিবলৈ সহজেই `MarkDown` ত `HTML` লিখিব পাৰে।

[i18n.site বাবে ইয়াত ক্লিক কৰক হোমপেজত ভাষা ক'ড তালিকা HTML লিখা হৈছে](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , আৰু ক'ডটো তলত দিয়া ধৰণৰ :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

মন কৰিব যে ওপৰত `<pre>` ত `<style>` ৰ সংজ্ঞাও দিয়া হৈছে।