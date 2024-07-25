# پاورقی

با این حال پروژه آزمایشی را به عنوان مثال در نظر می گیریم، `.i18n/htm/foot.pug` وب سایت در فهرست `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

زبان قالبی [`pug`](https://pugjs.org) که `HTML` را تولید می کند.

[➔ برای یادگیری گرامر اینجا را کلیک کنید pug](https://pugjs.org)

**`css` و `js` در `foot.pug` ننویسید** ، در غیر این صورت خطاهایی وجود خواهد داشت.

لطفا به موارد زیر مراجعه کنید، استایل به صورت متناظر نوشته شده است `.css` و تعامل با ایجاد اجزای وب حاصل می شود.

## سبک پاورقی

در `md/.i18n/htm` آزمایشی 3 `css` فایل در زیر وجود دارد.

* `foot.css` :
* : سبک `i18n.site` برای کل سایت `import.css`
* نمادها و فونت : پاورقی `conf.css`

### فونت آیکون

نماد پاورقی iconfont.cn ( [نسخه انگلیسی](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ایجاد یک فونت به نام `F`

لطفاً فونت آیکون خود را در صورت نیاز ایجاد کنید و : زیر را در `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## اجزای وب

اگر به تعامل نیاز است `foot.pug` لطفاً جزء صفحه وب `js` سفارشی کنید.

شما می توانید [یک کامپوننت وب](https://www.freecodecamp.org/news/build-your-first-web-component/) را `foot.pug` `md/.i18n/htm/index.js`

ایجاد اجزای وب، مانند برچسب های سفارشی، آسان است `<x-img>`

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

## فوتر چند زبانه

کد موجود در آن به شرح زیر : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

در اینجا مورد مربوطه در `en/i18n.yml` : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

با استفاده `i18n.yml` `${I18N.xxx}`

برای جلوگیری از تبدیل پیوند به `MarkDown` : به پیوند اضافه کنید `class="a"`
 [: `YAML` از تبدیل `HTML` پیوند به `Markdown` جلوگیری کنیم](/i18/qa#H2) .