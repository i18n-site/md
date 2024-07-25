# ಅಡಿಟಿಪ್ಪಣಿ

ಇನ್ನೂ ಡೆಮೊ ಪ್ರಾಜೆಕ್ಟ್ ಅನ್ನು ಉದಾಹರಣೆಯಾಗಿ ತೆಗೆದುಕೊಂಡರೆ, ವೆಬ್‌ಸೈಟ್‌ನ ಅಡಿಟಿಪ್ಪಣಿ `md` `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ಎಂಬುದು ಟೆಂಪ್ಲೇಟ್ ಭಾಷೆಯಾಗಿದ್ದು ಅದು `HTML` ಉತ್ಪಾದಿಸುತ್ತದೆ.

[➔ ವ್ಯಾಕರಣವನ್ನು ಕಲಿಯಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ pug](https://pugjs.org)

**`css` ಮತ್ತು `js` `foot.pug`** , ಇಲ್ಲದಿದ್ದರೆ ದೋಷಗಳು ಕಂಡುಬರುತ್ತವೆ.

ದಯವಿಟ್ಟು ಕೆಳಗಿನವುಗಳನ್ನು ಉಲ್ಲೇಖಿಸಿ, ಶೈಲಿಯನ್ನು ಅನುಗುಣವಾದ `.css` ನಲ್ಲಿ ಬರೆಯಲಾಗಿದೆ ಮತ್ತು ವೆಬ್ ಘಟಕಗಳನ್ನು ರಚಿಸುವ ಮೂಲಕ ಪರಸ್ಪರ ಕ್ರಿಯೆಯನ್ನು ಸಾಧಿಸಲಾಗುತ್ತದೆ.

## ಅಡಿಟಿಪ್ಪಣಿ ಶೈಲಿ

ಡೆಮೊ `md/.i18n/htm` ಕೆಳಗೆ 3 `css` ಫೈಲ್‌ಗಳಿವೆ.

* : ಶೈಲಿ `foot.css`
* `import.css` ಸಂಪೂರ್ಣ : `i18n.site` ಶೈಲಿ
* `conf.css` : ಐಕಾನ್‌ಗಳು ಮತ್ತು ಫಾಂಟ್‌ಗಳು

### ಐಕಾನ್ ಫಾಂಟ್

ಅಡಿಟಿಪ್ಪಣಿ ಐಕಾನ್ `F` ( [ಇಂಗ್ಲಿಷ್ ಆವೃತ್ತಿ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ಎಂಬ ಹೆಸರಿನಿಂದ ರಚಿಸಲಾಗಿದೆ iconfont.cn

ದಯವಿಟ್ಟು ನಿಮ್ಮದೇ ಆದ ಐಕಾನ್ ಫಾಂಟ್ ಅನ್ನು ಅಗತ್ಯವಿರುವಂತೆ ರಚಿಸಿ ಮತ್ತು : ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು ರಲ್ಲಿ ಬದಲಾಯಿಸಿ `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## ವೆಬ್ ಘಟಕಗಳು

`foot.pug` ಇದರಲ್ಲಿ `js` ಬರೆಯಲಾಗುವುದಿಲ್ಲ.

ನೀವು [ವೆಬ್ ಘಟಕವನ್ನು](https://www.freecodecamp.org/news/build-your-first-web-component/) ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು `md/.i18n/htm/index.js` ನಂತರ `foot.pug` ನಲ್ಲಿ ಘಟಕವನ್ನು ಬಳಸಬಹುದು.

ಕಸ್ಟಮ್ ಟ್ಯಾಗ್‌ಗಳಂತಹ ವೆಬ್ ಘಟಕಗಳನ್ನು ರಚಿಸುವುದು ಸುಲಭ `<x-img>`

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

## ಬಹುಭಾಷಾ ಅಡಿಟಿಪ್ಪಣಿ

ಅದರಲ್ಲಿರುವ ಕೋಡ್ : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

: ಸಂವಾದಿಯಾದದ್ದು `en/i18n.yml` ನಲ್ಲಿದೆ `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ಈ ಬರವಣಿಗೆಯ ವಿಧಾನವನ್ನು ಬಳಸಿಕೊಂಡು, `${I18N.xxx}` ಜೊತೆಗೆ `i18n.yml` ನೀವು ಅಡಿಟಿಪ್ಪಣಿಯ ಬಹು-ಭಾಷಾ ಅಂತರಾಷ್ಟ್ರೀಯತೆಯನ್ನು ಸಾಧಿಸಬಹುದು.

ಲಿಂಕ್ ಅನ್ನು `MarkDown` ಗೆ ಪರಿವರ್ತಿಸುವುದನ್ನು ತಪ್ಪಿಸಲು ಲಿಂಕ್‌ಗೆ `class="a"` , ನೋಡಿ :
 [: ಲಿಂಕ್‌ನ `HTML` `Markdown` ಗೆ ಪರಿವರ್ತಿಸುವುದನ್ನು ತಡೆಯುವುದು `YAML`](/i18/qa#H2) .