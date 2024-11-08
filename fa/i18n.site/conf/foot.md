# فوتر سفارشی شده

هنوز پروژه دمو را به عنوان مثال در نظر می گیریم، `.i18n/htm/foot.pug` در فهرست `md` پاورقی وب سایت را مشخص می کند.

![](https://p.3ti.site/1721286077.avif)

## سبک پاورقی

سه فایل `css` زیر `md/.i18n/htm` در پروژه آزمایشی وجود دارد.

* `foot.css` : پاورقی
* `import.css` : سبک `i18n.site` برای کل سایت
* `conf.css` نمادها و فونت : پاورقی

### فونت آیکون

نماد پاورقی با ایجاد یک فونت `F` iconfont.cn می شود ( [نسخه انگلیسی](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

لطفاً فونت آیکون خود را در صورت نیاز ایجاد کنید و پیکربندی زیر را در `conf.css` جایگزین کنید :

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

لطفاً مستقیماً به فایل فونت iconfont.cn مراجعه نکنید زیرا نمی توان آن را در مرورگر سافاری بارگذاری کرد.

## اجزای وب

شما نمی توانید `js` در `foot.pug` بنویسید. در صورت نیاز به تعامل، لطفاً مؤلفه وب را سفارشی کنید.

[یک کامپوننت وب را](https://www.freecodecamp.org/news/build-your-first-web-component/) می توان در `md/.i18n/htm/index.js` تعریف کرد و سپس در `foot.pug` استفاده کرد.

ایجاد اجزای وب، مانند `<x-img>` سفارشی0، آسان است.

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

کد در `.i18n/htm/foot.pug` به شرح زیر است :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

در اینجا `${I18N.C}` مربوط به `en/i18n.yml` است :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

با استفاده از `${I18N.xxx}` مشابه این روش نوشتن، همراه با `i18n.yml` ، می توانید به بین المللی سازی چند زبانه فوتر برسید.

افزودن `class="a"` به لینک برای جلوگیری از تبدیل لینک به `MarkDown` است. ببینید :
 [➔ `YAML` : از تبدیل شدن لینک `HTML` به `Markdown` جلوگیری کنیم](/i18/qa#H2) .