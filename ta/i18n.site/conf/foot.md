# தனிப்பயனாக்கப்பட்ட அடிக்குறிப்பு

டெமோ ப்ராஜெக்ட்டை இன்னும் உதாரணமாக எடுத்துக் கொண்டால், `md` கோப்பகத்தில் உள்ள `.i18n/htm/foot.pug` இணையதளத்தின் அடிக்குறிப்பை வரையறுக்கிறது.

![](https://p.3ti.site/1721286077.avif)

## அடிக்குறிப்பு நடை

டெமோ திட்டத்தில் `md/.i18n/htm` இன் கீழ் மூன்று `css` கோப்புகள் உள்ளன.

* `foot.css` :
* `import.css` : 1முழு தளத்திற்கும் `i18n.site` நடை
* `conf.css` : அடிக்குறிப்புகள் மற்றும் எழுத்துருக்கள்

### ஐகான் எழுத்துரு

அடிக்குறிப்பு ஐகான் iconfont.cn `F` எழுத்துருவை உருவாக்குவதன் மூலம் உருவாக்கப்படுகிறது ( [ஆங்கில பதிப்பு](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

தேவைக்கேற்ப உங்கள் சொந்த ஐகான் எழுத்துருவை உருவாக்கவும் மற்றும் பின்வரும் உள்ளமைவை `conf.css` இல் மாற்றவும் :

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

iconfont.cn இன் எழுத்துருக் கோப்பை நேரடியாகக் குறிப்பிட வேண்டாம், ஏனெனில் அதை சஃபாரி உலாவியில் ஏற்ற முடியாது.

## வலை கூறுகள்

நீங்கள் `foot.pug` இல் `js` எழுத முடியாது. தொடர்பு தேவைப்பட்டால், இணைய கூறுகளைத் தனிப்பயனாக்கவும்.

[ஒரு வலை கூறு](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` இல் வரையறுக்கப்பட்டு பின்னர் `foot.pug` இல் பயன்படுத்தப்படலாம்.

தனிப்பயன் `<x-img>` போன்ற இணைய கூறுகளை உருவாக்குவது எளிது.

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

## பன்மொழி அடிக்குறிப்பு

`.i18n/htm/foot.pug` இல் உள்ள குறியீடு பின்வருமாறு :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

இங்கே `${I18N.C}` `en/i18n.yml` ஐ ஒத்துள்ளது :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

இந்த எழுதும் முறையைப் போன்ற `${I18N.xxx}` பயன்படுத்தி, `i18n.yml` உடன் இணைந்து, அடிக்குறிப்பின் பல மொழி சர்வதேசமயமாக்கலை நீங்கள் அடையலாம்.

இணைப்பில் `class="a"` சேர்ப்பது இணைப்பு `MarkDown` ஆக மாற்றப்படுவதைத் தடுக்கும். பார்க்க :
 [➔ `YAML` : இணைப்பு `HTML` `Markdown` ஆக மாற்றுவதை எவ்வாறு தடுப்பது](/i18/qa#H2) .