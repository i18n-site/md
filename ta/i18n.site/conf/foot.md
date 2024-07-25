# அடிக்குறிப்பு

இன்னும் டெமோ ப்ராஜெக்டை எடுத்துக் கொண்டால், இணையதளத்தின் அடிக்குறிப்பு `md` `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) என்பது `HTML` உருவாக்கும் ஒரு டெம்ப்ளேட் மொழி.

[➔ இலக்கணத்தை அறிய இங்கே கிளிக் செய்யவும் pug](https://pugjs.org)

**`foot.pug` `css` மற்றும் `js` எழுத வேண்டாம்** , இல்லையெனில் பிழைகள் இருக்கும்.

தயவுசெய்து பின்வருவனவற்றைப் பார்க்கவும், பாணி தொடர்புடைய `.css` மேலும் இணைய கூறுகளை உருவாக்குவதன் மூலம் தொடர்பு அடையப்படுகிறது.

## அடிக்குறிப்பு நடை

`md/.i18n/htm` திட்டத்தில் கீழே 3 `css` கோப்புகள் உள்ளன.

* `foot.css` :
* முழு தளத்திற்கும் : `import.css` `i18n.site`
* `conf.css` மற்றும் :

### ஐகான் எழுத்துரு

அடிக்குறிப்பு ஐகான் உருவாக்கப்பட்டது ( [ஆங்கில பதிப்பு](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)`F` iconfont.cn

தேவைக்கேற்ப உங்கள் சொந்த ஐகான் எழுத்துருவை உருவாக்கி, : உள்ளமைவை ல் மாற்றவும் `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## வலை கூறுகள்

`foot.pug` அதில் `js` எழுத முடியாது.

`foot.pug` [ஒரு வலை கூறுகளை](https://www.freecodecamp.org/news/build-your-first-web-component/) வரையறுக்கலாம் `md/.i18n/htm/index.js`

தனிப்பயன் குறிச்சொற்கள் போன்ற வலை கூறுகளை உருவாக்குவது எளிது `<x-img>`

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

அதில் உள்ள குறியீடு : `.i18n/htm/foot.pug`

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

இந்த எழுத்து முறையைப் `${I18N.xxx}` , `i18n.yml` உடன் இணைந்து, நீங்கள் அடிக்குறிப்பின் பல மொழி சர்வதேசமயமாக்கலை அடையலாம்.

இணைப்பு `MarkDown` க்கு மாற்றப்படுவதைத் தவிர்க்க இணைப்பில் சேர்க்கவும் : பார்க்கவும் `class="a"`
 [: இணைப்பின் `HTML` `Markdown` ஆக மாற்றுவதை `YAML` தடுப்பது](/i18/qa#H2) .