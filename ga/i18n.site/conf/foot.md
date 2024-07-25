# Buntásc

Agus an tionscadal taispeána á ghlacadh fós mar shampla, `.i18n/htm/foot.pug` buntásc an tsuímh ghréasáin sainmhínithe san eolaire `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

Is teanga theimpléad `HTML` [`pug`](https://pugjs.org)

[➔ Cliceáil anseo chun gramadach na pug](https://pugjs.org)

**Ná scríobh `css` agus `js` `foot.pug`** , nó beidh earráidí ann.

Déan tagairt do na nithe seo a leanas le do thoil, tá an stíl scríofa sa chomhfhreagrach `.css` agus baintear amach an t-idirghníomhú trí chomhpháirteanna gréasáin a chruthú.

## Stíl Buntásc

Sa tionscadal taispeána `md/.i18n/htm` Tá 3 `css` chomhad thíos.

* `foot.css` :
* `import.css` : #Stíl `i18n.site` don suíomh ar fad
* `conf.css` :

### Cló Deilbhín

Gintear íocón an bhuntásc ag iconfont.cn ( [leagan Béarla](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ag cruthú cló darb ainm `F`

Cruthaigh do chló deilbhín féin de réir mar is gá agus cuir : chumraíocht seo a leanas ina áit in `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Comhpháirteanna Gréasáin

`foot.pug` `js`

Is féidir leat [comhpháirt gréasáin](https://www.freecodecamp.org/news/build-your-first-web-component/) a shainiú `foot.pug` `md/.i18n/htm/index.js`

Tá sé éasca comhpháirteanna gréasáin a chruthú, cosúil le clibeanna saincheaptha `<x-img>`

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

## Buntásc Ilteangach

: é seo a leanas an cód ann `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Anseo `${I18N.C}` Tá an ceann comhfhreagrach in `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ag baint úsáide as `${I18N.xxx}` cosúil leis an modh scríbhneoireachta seo, in éineacht le `i18n.yml` , is féidir leat idirnáisiúnú iltheanga an bhuntásc a bhaint amach.

`class="a"` leis an nasc chun an nasc a thiontú go `MarkDown` a sheachaint , féach :
 [: `YAML` `HTML` an nasc a chosc ó thiontú go `Markdown`](/i18/qa#H2) .