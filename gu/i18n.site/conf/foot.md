# કસ્ટમાઇઝ ફૂટર

હજુ પણ ડેમો પ્રોજેક્ટને ઉદાહરણ તરીકે લેતા, `md` ડિરેક્ટરીમાં `.i18n/htm/foot.pug` વેબસાઇટના ફૂટરને વ્યાખ્યાયિત કરે છે.

![](https://p.3ti.site/1721286077.avif)

## ફૂટર શૈલી

ડેમો પ્રોજેક્ટમાં `md/.i18n/htm` હેઠળ ત્રણ `css` ફાઇલો છે.

* `foot.css` : શૈલી
* `import.css` : 1 સમગ્ર સાઇટ માટે `i18n.site` શૈલી
* `conf.css` : ચિહ્નો અને ફોન્ટ્સ

### આઇકન ફોન્ટ

ફૂટર આઇકોન iconfont.cn નામનો ફોન્ટ બનાવીને જનરેટ થાય છે `F` [અંગ્રેજી સંસ્કરણ](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

મહેરબાની કરીને તમારા પોતાના આઇકોન ફોન્ટને જરૂર મુજબ બનાવો અને નીચેના રૂપરેખાંકનને `conf.css` માં બદલો :

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

કૃપા કરીને iconfont.cn ની ફોન્ટ ફાઇલનો સીધો સંદર્ભ ન આપો કારણ કે તે સફારી બ્રાઉઝર પર લોડ કરી શકાતી નથી.

## વેબ ઘટકો

તમે `foot.pug` માં `js` લખી શકતા નથી. જો ક્રિયાપ્રતિક્રિયા જરૂરી હોય, તો કૃપા કરીને વેબ ઘટકને કસ્ટમાઇઝ કરો.

[વેબ ઘટકને](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` માં વ્યાખ્યાયિત કરી શકાય છે અને પછી `foot.pug` માં ઉપયોગ કરી શકાય છે.

વેબ ઘટકો બનાવવાનું સરળ છે, જેમ કે કસ્ટમ `<x-img>` .

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

`.i18n/htm/foot.pug` માં કોડ નીચે મુજબ છે :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

અહીં `${I18N.C}` `en/i18n.yml` ને અનુલક્ષે છે :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

આ લેખન પદ્ધતિની સમાન `${I18N.xxx}` ઉપયોગ કરીને, `i18n.yml` સાથે જોડીને, તમે ફૂટરનું બહુ-ભાષા આંતરરાષ્ટ્રીયકરણ પ્રાપ્ત કરી શકો છો.

લિંકમાં `class="a"` ઉમેરવું એ લિંકને `MarkDown` માં રૂપાંતરિત થતી અટકાવવા માટે છે. જુઓ :
 [➔ `YAML` : લિંક `HTML` `Markdown` માં રૂપાંતરિત થવાથી કેવી રીતે અટકાવવું](/i18/qa#H2) .