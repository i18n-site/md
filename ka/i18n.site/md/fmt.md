# i18n.site MarkDown Წერის Კონვენცია

## Წამყვანი Წერტილი

ტრადიციული `MarkDown` წამყვანი წერტილი გენერირდება ტექსტის შინაარსზე დაყრდნობით, მრავალენოვანის შემთხვევაში, ეს გამოსავალი არ არის შესაძლებელი.

`i18n.site` ზე შეთანხმებული ანკერის წერტილის გადაწყვეტა არის `<a rel=id href="#xxx" id="xxx"></a>` ში `MarkDown` ში მსგავსი ტექსტის ჩასმა, რათა ხელით შექმნათ პოზიციონირების წამყვანი წერტილი.

`<a rel=id href="#xxx" id="xxx"></a>` , აქ `rel=id` განსაზღვრავს წამყვანის წერტილის გვერდის სტილს, გთხოვთ შეცვალოთ `xxx` თქვენი ნამდვილი წამყვანი ინგლისური აბრევიატურა.

სათაურს ჩვეულებრივ ემატება წამყვანები, როგორიცაა:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ჩვენების ეფექტი შემდეგია:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Დაწერე `HTML` `MarkDown` Ში

`HTML` შეიძლება იყოს ჩასმული `pug` კოდში.

`<pre>` ელემენტის შინაარსი არ ითარგმნება.

ამ ორი წერტილის კომბინაციით, შეგიძლიათ მარტივად დაწეროთ `HTML` `MarkDown` -ში, რათა მიაღწიოთ სხვადასხვა დისპლეის ეფექტებს.

[დააწკაპუნეთ აქ i18n.site ენის კოდების სია მთავარ გვერდზე HTML არის დაწერილი](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) და კოდი არის შემდეგი :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

გაითვალისწინეთ, რომ `<style>` ასევე განსაზღვრულია `<pre>` -ში ზემოთ.