# ફૂટર

હજુ પણ ડેમો પ્રોજેક્ટને ઉદાહરણ તરીકે લઈ રહ્યા છીએ, વેબસાઇટનું `md` ડિરેક્ટરીમાં વ્યાખ્યાયિત થયેલ `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

એક ટેમ્પલેટ ભાષા [`pug`](https://pugjs.org) જે `HTML` જનરેટ કરે છે.

[➔ નું વ્યાકરણ શીખવા માટે અહીં ક્લિક કરો pug](https://pugjs.org)

**`css` અને `js` માં લખશો `foot.pug`** , અન્યથા ભૂલો હશે.

કૃપા કરીને નીચેનાનો સંદર્ભ લો, શૈલી અનુરૂપમાં લખાયેલ છે `.css` અને ક્રિયાપ્રતિક્રિયા વેબ ઘટકો બનાવીને પ્રાપ્ત થાય છે.

## ફૂટર શૈલી

ડેમો `md/.i18n/htm` નીચે 3 `css` ફાઇલો છે.

* : શૈલી `foot.css`
* સમગ્ર સાઇટ `import.css` `i18n.site` :
* : ચિહ્નો અને ફોન્ટ્સ `conf.css`

### આઇકોન ફોન્ટ

ફૂટર આઇકોન iconfont.cn ( [અંગ્રેજી સંસ્કરણ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) નામનો ફોન્ટ બનાવીને જનરેટ થાય છે `F`

કૃપા કરીને તમારા પોતાના આઇકોન ફોન્ટને જરૂર મુજબ બનાવો અને : રૂપરેખાંકનને માં બદલો `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## વેબ ઘટકો

જો ક્રિયાપ્રતિક્રિયા જરૂરી હોય તો તેમાં `js` લખી શકતા `foot.pug` , કૃપા કરીને વેબ પૃષ્ઠ ઘટકને કસ્ટમાઇઝ કરો.

તમે [વેબ ઘટકને](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` વ્યાખ્યાયિત કરી શકો છો અને પછી `foot.pug` માં ઘટકનો ઉપયોગ કરી શકો છો.

વેબ ઘટકો બનાવવાનું સરળ છે, જેમ કે કસ્ટમ ટૅગ્સ `<x-img>`

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

## બહુભાષી ફૂટર

તેમાંનો કોડ નીચે મુજબ : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

અહીં અનુરૂપ એક `en/i18n.yml` માં : `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

આ લેખન પદ્ધતિની જેમ `${I18N.xxx}` ઉપયોગ કરીને, `i18n.yml` સાથે મળીને, તમે ફૂટરનું બહુભાષી આંતરરાષ્ટ્રીયકરણ પ્રાપ્ત કરી શકો છો.

લિંકને `MarkDown` માં રૂપાંતરિત ન થાય તે માટે લિંકમાં ઉમેરો : જુઓ `class="a"`
 [: `YAML` `HTML` લિંકને `Markdown` માં રૂપાંતરિત થતા અટકાવવી](/i18/qa#H2) .