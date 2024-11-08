# ಅಡಿಟಿಪ್ಪಣಿ

ಇನ್ನೂ ಡೆಮೊ ಪ್ರಾಜೆಕ್ಟ್ ಅನ್ನು ಉದಾಹರಣೆಯಾಗಿ ತೆಗೆದುಕೊಂಡರೆ, `md` ಡೈರೆಕ್ಟರಿಯಲ್ಲಿ `.i18n/htm/foot.pug` ವೆಬ್ಸೈಟ್ನ ಅಡಿಟಿಪ್ಪಣಿಯನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ಎಂಬುದು `HTML` ಗಳನ್ನು ಉತ್ಪಾದಿಸುವ ಟೆಂಪ್ಲೇಟ್ ಭಾಷೆಯಾಗಿದೆ.

[➔ ವ್ಯಾಕರಣವನ್ನು ಕಲಿಯಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ pug](https://pugjs.org)

**`foot.pug` ರಲ್ಲಿ `css` ಮತ್ತು `js` ಬರೆಯಬೇಡಿ** , ಇಲ್ಲದಿದ್ದರೆ ದೋಷವಿರುತ್ತದೆ.

ದಯವಿಟ್ಟು ಕೆಳಗಿನವುಗಳನ್ನು ಉಲ್ಲೇಖಿಸಿ, ಶೈಲಿಯನ್ನು ಅನುಗುಣವಾದ `.css` ಗೆ ಬರೆಯಲಾಗಿದೆ ಮತ್ತು ವೆಬ್ ಘಟಕಗಳನ್ನು ರಚಿಸುವ ಮೂಲಕ ಪರಸ್ಪರ ಕ್ರಿಯೆಯನ್ನು ಸಾಧಿಸಲಾಗುತ್ತದೆ.

## ಅಡಿಟಿಪ್ಪಣಿ ಶೈಲಿ

ಡೆಮೊ ಯೋಜನೆಯಲ್ಲಿ `md/.i18n/htm` ಅಡಿಯಲ್ಲಿ ಮೂರು `css` ಫೈಲ್ಗಳಿವೆ.

* `foot.css` :
* `import.css` : 1 ಸಂಪೂರ್ಣ ಸೈಟ್ಗಾಗಿ `i18n.site` ಶೈಲಿ
* `conf.css` : ಅಡಿಟಿಪ್ಪಣಿ ಐಕಾನ್ಗಳು ಮತ್ತು ಫಾಂಟ್ಗಳು

### ಐಕಾನ್ ಫಾಂಟ್

ಅಡಿಟಿಪ್ಪಣಿ ಐಕಾನ್ ಅನ್ನು iconfont.cn ಹೆಸರಿನ ಫಾಂಟ್ ರಚಿಸುವ ಮೂಲಕ ರಚಿಸಲಾಗಿದೆ `F` [ಇಂಗ್ಲಿಷ್ ಆವೃತ್ತಿ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

ದಯವಿಟ್ಟು ನಿಮ್ಮದೇ ಆದ ಐಕಾನ್ ಫಾಂಟ್ ಅನ್ನು ಅಗತ್ಯವಿರುವಂತೆ ರಚಿಸಿ ಮತ್ತು ಕೆಳಗಿನ ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು `conf.css` ನಲ್ಲಿ ಬದಲಾಯಿಸಿ :

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

ದಯವಿಟ್ಟು iconfont.cn ನ ಫಾಂಟ್ ಫೈಲ್ ಅನ್ನು ನೇರವಾಗಿ ಉಲ್ಲೇಖಿಸಬೇಡಿ ಏಕೆಂದರೆ ಅದನ್ನು ಸಫಾರಿ ಬ್ರೌಸರ್ನಲ್ಲಿ ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ.

## ವೆಬ್ ಘಟಕಗಳು

ನೀವು `foot.pug` ರಲ್ಲಿ `js` ಬರೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ. ಪರಸ್ಪರ ಕ್ರಿಯೆಯ ಅಗತ್ಯವಿದ್ದರೆ, ದಯವಿಟ್ಟು ವೆಬ್ ಘಟಕವನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ.

[ವೆಬ್ ಘಟಕವನ್ನು](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` ರಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು ಮತ್ತು ನಂತರ `foot.pug` ರಲ್ಲಿ ಬಳಸಬಹುದು.

ಕಸ್ಟಮ್ `<x-img>` ನಂತಹ ವೆಬ್ ಘಟಕಗಳನ್ನು ರಚಿಸುವುದು ಸುಲಭ.

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

`.i18n/htm/foot.pug` ರಲ್ಲಿನ ಕೋಡ್ ಈ ಕೆಳಗಿನಂತಿದೆ :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

ಇಲ್ಲಿ `${I18N.C}` `en/i18n.yml` ಗೆ ಅನುರೂಪವಾಗಿದೆ :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

ಈ ಬರವಣಿಗೆಯ ವಿಧಾನವನ್ನು ಹೋಲುವ `${I18N.xxx}` ಬಳಸಿ, `i18n.yml` ನೊಂದಿಗೆ ಸಂಯೋಜಿಸಿ, ನೀವು ಅಡಿಟಿಪ್ಪಣಿಯ ಬಹು-ಭಾಷಾ ಅಂತರಾಷ್ಟ್ರೀಕರಣವನ್ನು ಸಾಧಿಸಬಹುದು.

ಲಿಂಕ್ಗೆ `class="a"` ಸೇರಿಸುವುದು ಲಿಂಕ್ ಅನ್ನು `MarkDown` ಗೆ ಪರಿವರ್ತಿಸುವುದನ್ನು ತಡೆಯುತ್ತದೆ. ನೋಡಿ :
 [➔ `YAML` : ಲಿಂಕ್ `HTML` `Markdown` ಗೆ ಪರಿವರ್ತಿಸುವುದನ್ನು ತಡೆಯುವುದು ಹೇಗೆ](/i18/qa#H2) .