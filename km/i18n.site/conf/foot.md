# បាតកថា

នៅតែយកគម្រោងសាកល្បងជាឧទាហរណ៍ បាតកថានៃគេហទំព័រ `.i18n/htm/foot.pug` កំណត់នៅក្នុងថត `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) គឺជាភាសាគំរូដែលបង្កើត `HTML` ។

[➔ ចុចទីនេះដើម្បីរៀនវេយ្យាករណ៍ pug](https://pugjs.org)

**កុំសរសេរ `css` និង `js` នៅក្នុង `foot.pug`** បើមិនដូច្នេះទេនឹងមានកំហុស។

សូមយោងទៅខាងក្រោម រចនាប័ទ្មត្រូវបានសរសេរនៅក្នុងការដែលត្រូវគ្នា `.css` ហើយអន្តរកម្មត្រូវបានសម្រេចដោយការបង្កើតសមាសធាតុគេហទំព័រ។

## រចនាប័ទ្មបាតកថា

នៅក្នុងគម្រោងសាកល្បង `md/.i18n/htm` មានឯកសារ 3 `css` ខាងក្រោម។

* `foot.css` : បាតកថា
* `import.css` : រចនាប័ទ្ម `i18n.site` សម្រាប់គេហទំព័រទាំងមូល
* `conf.css` រូបតំណាងបាតកថា : ពុម្ពអក្សរ

### រូបតំណាងពុម្ពអក្សរ

រូបតំណាងបាតកថាត្រូវបានបង្កើតឡើងដោយ iconfont.cn ( [កំណែជាភាសាអង់គ្លេស](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) បង្កើតពុម្ពអក្សរឈ្មោះ `F`

សូមបង្កើតពុម្ពអក្សររូបតំណាងផ្ទាល់ខ្លួនរបស់អ្នកតាមតម្រូវការ ហើយជំនួស : ខាងក្រោមនៅក្នុង `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## សមាសធាតុបណ្តាញ

`foot.pug` មិនអាចសរសេរ `js` នៅក្នុងវាបានទេ ប្រសិនបើត្រូវការអន្តរកម្ម សូមប្តូរសមាសភាគទំព័របណ្តាញ។

អ្នកអាចកំណត់ [សមាសធាតុបណ្តាញ](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

វាងាយស្រួលក្នុងការបង្កើតសមាសធាតុគេហទំព័រ ដូចជាស្លាកផ្ទាល់ខ្លួន `<x-img>`

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

## បាតកថាពហុភាសា

`.i18n/htm/foot.pug`​ កូដ​ក្នុង​នោះ​មាន​ដូច​ខាង​ក្រោម :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`en/i18n.yml` `${I18N.C}` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

`i18n.yml` `${I18N.xxx}`

បន្ថែម `class="a"` ទៅ តំណ ដើម្បី ជៀសវាង តំណ ត្រូវ បាន បំប្លែង ទៅ `MarkDown` សូមមើល :
 [: `YAML` ការពារ `HTML` តំណភ្ជាប់មិនអោយប្តូរទៅជា `Markdown`](/i18/qa#H2) .