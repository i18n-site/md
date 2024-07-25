# Footer

E ntse e nka morero oa demo e le mohlala, botlaaseng ba sebaka sa marang-rang `.i18n/htm/foot.pug` hlalosoa bukeng ea `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) ke puo ea template e hlahisang `HTML` .

[➔ Tobetsa mona ho ithuta sebōpeho-puo sa pug](https://pugjs.org)

**Se ke oa ngola `css` le `js` `foot.pug`** , ho seng joalo ho tla ba le liphoso.

Ka kopo sheba tse latelang, setaele se ngotsoe ka tsela e lumellanang `.css` 'me tšebelisano e finyelloa ka ho theha likarolo tsa marang-rang.

## Setaele Sa Maoto

Morerong oa `md/.i18n/htm` Ho na le lifaele tse 3 `css` ka tlase.

* `foot.css` :
* `import.css` : `i18n.site` sa sebaka sohle
* `conf.css` :

### Fonte Ea Letšoao

Letšoao [la](https://www.iconfont.cn/?lang=en-us) botlaaseng `F` [hlahisoa](https://www.iconfont.cn/?lang=zh) / iconfont.cn

Ka kopo iketsetse fonte ea hau ea setšoantšo kamoo ho hlokahalang 'me u nkele : e latelang ho `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Likarolo Tsa Webo

`foot.pug` ha e khone ho ngola `js` ho eona Haeba ho hlokahala, ka kopo iketsetse karolo ea leqephe la webo

O ka hlalosa [karolo ea webo](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Ho bonolo ho theha likarolo tsa tepo, joalo ka li-tag tsa tloaelo `<x-img>`

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

## Botlaaseng Ba Lipuo Tse Ngata

Khoutu : ho eona e tjena `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

E tsamaisanang : eona e ho `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

U sebelisa `${I18N.xxx}` o ts'oanang le mokhoa ona oa ho ngola, o kopantsoe le `i18n.yml` , o ka fihlella lipuo tse ngata tsa machaba tsa botlaaseng.

`class="a"` sehokelong ho qoba hore sehokelo se fetoloe ho `MarkDown` , bona :
 [: `YAML` oa ho thibela `HTML` ea sehokelo hore e se fetohele ho `Markdown`](/i18/qa#H2) .