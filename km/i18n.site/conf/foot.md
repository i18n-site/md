# បាតកថា

នៅតែយកគម្រោងសាកល្បងជាឧទាហរណ៍ `.i18n/htm/foot.pug` ក្នុងបញ្ជី `md` កំណត់បាតកថានៃគេហទំព័រ។

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) គឺជាភាសាគំរូដែលបង្កើត `HTML` 's ។

[➔ ចុចទីនេះដើម្បីរៀនវេយ្យាករណ៍ pug](https://pugjs.org)

**កុំសរសេរ `css` និង `js` ក្នុង `foot.pug`** បើមិនដូច្នេះទេវានឹងមានកំហុស។

សូមយោងទៅខាងក្រោម រចនាប័ទ្មត្រូវបានសរសេរទៅក្នុង `.css` ដែលត្រូវគ្នា ហើយអន្តរកម្មត្រូវបានសម្រេចដោយការបង្កើតសមាសធាតុគេហទំព័រ។

## រចនាប័ទ្មបាតកថា

មានឯកសារ `css` ចំនួន 3 ក្រោម `md/.i18n/htm` នៅក្នុងគម្រោងសាកល្បង។

* `foot.css` :
* `import.css` : `i18n.site` សម្រាប់គេហទំព័រទាំងមូល
* `conf.css` : រូបតំណាងបាតកថា និងពុម្ពអក្សរ

### រូបតំណាងពុម្ពអក្សរ

រូបតំណាងបាតកថាត្រូវបានបង្កើតដោយការបង្កើតពុម្ពអក្សរដែលមានឈ្មោះ `F` iconfont.cn ( [កំណែជាភាសាអង់គ្លេស](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh))។

សូមបង្កើតពុម្ពអក្សររូបតំណាងផ្ទាល់ខ្លួនរបស់អ្នកតាមតម្រូវការ ហើយជំនួសការកំណត់ខាងក្រោមក្នុង `conf.css` :

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

សូមកុំយោងឯកសារពុម្ពអក្សររបស់ iconfont.cn ដោយផ្ទាល់ព្រោះវាមិនអាចត្រូវបានផ្ទុកនៅលើកម្មវិធីរុករកតាមអ៊ីនធឺណិត Safari ។

## សមាសធាតុបណ្តាញ

អ្នកមិនអាចសរសេរ `js` ក្នុង `foot.pug` ទេ។ ប្រសិនបើការឆ្លើយឆ្លងត្រូវបានទាមទារ សូមប្ដូរសមាសភាគបណ្ដាញតាមបំណង។

[សមាសធាតុបណ្តាញ](https://www.freecodecamp.org/news/build-your-first-web-component/) អាចត្រូវបានកំណត់ក្នុង `md/.i18n/htm/index.js` ហើយបន្ទាប់មកប្រើក្នុង `foot.pug` ។

វាងាយស្រួលក្នុងការបង្កើតសមាសធាតុគេហទំព័រ ដូចជា `<x-img>` ផ្ទាល់ខ្លួន0។

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

លេខកូដ `.i18n/htm/foot.pug` មានដូចខាងក្រោម :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

នៅទីនេះ `${I18N.C}` ត្រូវនឹង `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ដោយប្រើ `${I18N.xxx}` ស្រដៀងនឹងវិធីសាស្ត្រសរសេរនេះ រួមផ្សំជាមួយ `i18n.yml` អ្នកអាចសម្រេចបាននូវការធ្វើអន្តរកម្មពហុភាសានៃបាតកថា។

ការបន្ថែម `class="a"` ទៅក្នុងតំណគឺដើម្បីការពារតំណពីការបំប្លែងទៅជា `MarkDown` សូមមើល :
 [➔ `YAML` : របៀបការពារតំណ `HTML` ពីការបំប្លែងទៅជា `Markdown`](/i18/qa#H2)