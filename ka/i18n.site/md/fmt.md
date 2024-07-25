# MarkDown Ფორმატის Კონვენცია

## Წამყვანი Წერტილი

ტრადიციული `MarkDown` წამყვანები იქმნება ტექსტის შინაარსზე დაყრდნობით.

შეთანხმებული წამყვანი გამოსავალი არის `<a rel=id href="#xxx" id="xxx"></a>` მსგავსი ტექსტის ჩასმა `MarkDown` -ში `i18n.site` რათა ხელით შექმნათ პოზიციონირების წამყვანი.

`<a rel=id href="#xxx" id="xxx"></a>` აქ `rel=id` განსაზღვრავს წამყვანის წერტილის გვერდის სტილს, გთხოვთ შეცვალოთ `xxx` თქვენი ნამდვილი წამყვანი ინგლისურით.

სათაურს ჩვეულებრივ ემატება წამყვანები, როგორიცაა:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ჩვენების ეფექტი ასეთია:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Ჩაწერეთ `HTML` `MarkDown`

`pug` `HTML` იყოს ჩასმული კოდში.

`<pre>` ელემენტის შინაარსი არ ითარგმნება.

ამ ორი პუნქტის კომბინაციით, შეგიძლიათ მარტივად დაწეროთ `HTML` in `MarkDown`

შეგიძლიათ მიმართოთ განხორციელებას [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) კოდი არის შემდეგი :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

გაითვალისწინეთ, რომ `<style>` ასევე განსაზღვრულია ზემოთ `<pre>`
