# Ifooter

Usathatha iprojekthi yedemo njengomzekelo, i-footer yewebhusayithi `.i18n/htm/foot.pug` kwi `md` directory.

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) lulwimi lwetemplate oluvelisa `HTML` .

[➔ Cofa apha ukuze ufunde igrama ye pug](https://pugjs.org)

**Ungabhali `css` kunye ne- `js` `foot.pug`** , kungenjalo kuya kubakho iimpazamo.

Nceda ubhekisele koku kulandelayo, isitayela sibhalwe ngendlela ehambelanayo `.css` kwaye intsebenziswano ifezekiswa ngokudala amacandelo ewebhu.

## Isimbo Sasezantsi

`md/.i18n/htm` yedemo Kukho i-3 `css` iifayile ezingezantsi.

* `foot.css` :
* `import.css` : `i18n.site`
* `conf.css` :

### Ifonti Ye Icon

/ `F` [esemazantsi](https://www.iconfont.cn/?lang=en-us) yenziwe [ngu](https://www.iconfont.cn/?lang=zh) iconfont.cn

Nceda wenze eyakho ifonti ye icon njengoko kufuneka kwaye ubuyisele : olulandelayo kwi `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Amacandelo Ewebhu

`foot.pug` ayikwazi ukubhala `js` kuyo.

Ungachaza [icandelo lewebhu](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

Kulula ukwenza amacandelo ewebhu, njengeethegi eziqhelekileyo `<x-img>`

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

## Umbhalo Osemazantsi Weelwimi Ezininzi

Ikhowudi ekuyo imi ngolu hlobo : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` ehambelanayo iku `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Usebenzisa `${I18N.xxx}` nale ndlela yokubhala, idityaniswe ne `i18n.yml` , ungafikelela kwiilwimi ezininzi ezibhalwe phantsi.

Yongeza `class="a"` ukunqanda ukuguqulelwa kwekhonkco kwi `MarkDown` , yabona :
 [: Uyithintela `YAML` `HTML` yekhonkco ukuba iguqulwe ibe yi- `Markdown`](/i18/qa#H2) .