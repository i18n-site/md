# پاورقی

هنوز پروژه دمو را به عنوان مثال در نظر می گیریم، `.i18n/htm/foot.pug` در فهرست `md` پاورقی وب سایت را مشخص می کند.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) یک زبان قالب‌سازی است که `HTML` تولید می‌کند.

[➔ اینجا کلیک کنید تا گرامر pug را یاد بگیرید](https://pugjs.org)

**در `foot.pug` نباید `css` و `js` بنویسید**، در غیر این صورت خطا رخ می‌دهد.

لطفاً به مطالب زیر مراجعه کنید، استایل‌ها در فایل‌های `.css` مربوطه نوشته می‌شوند و تعاملات از طریق ایجاد اجزای وب انجام می‌شوند.

## سبک پاورقی

در پروژه نمونه، سه فایل `css` زیر پوشه `md/.i18n/htm` وجود دارد.

* `foot.css`: سبک پاورقی
* `import.css`: سبک پیش‌فرض برای کل سایت `i18n.site`
* `conf.css`: نمادها و فونت‌های پاورقی

### فونت آیکون

آیکون‌های پاورقی از طریق ایجاد یک فونت به نام `F` در iconfont.cn ( [نسخه انگلیسی](https://www.iconfont.cn/?lang=en-us) / [نسخه چینی](https://www.iconfont.cn/?lang=zh)) ساخته می‌شوند.

لطفاً فونت آیکون خود را بر اساس نیاز ایجاد کنید و پیکربندی‌های زیر را در `conf.css` جایگزین کنید:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## اجزای وب

در `foot.pug` نباید `js` بنویسید، اگر نیاز به تعامل دارید، لطفاً یک جزء وب سفارشی ایجاد کنید.

[یک جزء وب](https://www.freecodecamp.org/news/build-your-first-web-component/) را می‌توان در `md/.i18n/htm/index.js` تعریف کرد و سپس در `foot.pug` از آن استفاده کرد.

ایجاد یک جزء وب بسیار ساده است، به عنوان مثال، ایجاد تگ سفارشی `<x-img>`.

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

## چندزبانه‌سازی پاورقی

کدی در `.i18n/htm/foot.pug` به شرح زیر است:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

در اینجا `${I18N.C}` معادل بخشی در `en/i18n.yml` است:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

با استفاده از `${I18N.xxx}` به روش مشابه و در کنار `i18n.yml`، می‌توانید چندزبانه‌سازی پاورقی را پیاده‌سازی کنید.

اضافه کردن `class="a"` به لینک‌ها برای جلوگیری از تبدیل به قالب `Markdown` است، ببینید:
 [➔ `YAML`: چگونه از تبدیل لینک‌های `HTML` به `Markdown` جلوگیری کنیم](/i18/qa#H2).