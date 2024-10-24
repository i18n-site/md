# Buntásc

Agus an tionscadal taispeána á ghlacadh fós mar shampla, sainmhíníonn `.i18n/htm/foot.pug` san eolaire `md` buntásc an láithreáin ghréasáin.

![](https://p.3ti.site/1721286077.avif)

Is teanga teimpléid [`pug`](https://pugjs.org) a ghineann `HTML` ′s.

[➔ Cliceáil anseo chun gramadach na pug](https://pugjs.org)

**Ná scríobh `css` agus `js` as `foot.pug`** , nó beidh earráid ann.

Déan tagairt do na nithe seo a leanas, tá an stíl scríofa isteach sa `.css` comhfhreagrach, agus baintear amach an t-idirghníomhú trí chomhpháirteanna gréasáin a chruthú.

## Stíl Buntásc

Tá trí chomhad `css` faoi `md/.i18n/htm` sa tionscadal taispeána.

* `foot.css` :
* `import.css` : 1Stíl `i18n.site` don suíomh iomlán
* `conf.css` : Deilbhíní buntásc agus clónna

### Cló Deilbhín

Gintear íocón an bhuntásc trí chló darb ainm `F` iconfont.cn ( [leagan Béarla](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) a chruthú.

Cruthaigh do chló deilbhín féin de réir mar is gá agus cuir an chumraíocht seo a leanas in ionad `conf.css` :

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

Ná déan tagairt go díreach do chlóchomhad iconfont.cn mar ní féidir é a lódáil ar an mbrabhsálaí safari.

## Comhpháirteanna Gréasáin

Ní féidir leat `js` as `foot.pug` a scríobh. Má tá idirghníomhú ag teastáil, saincheap an chomhpháirt gréasáin le do thoil.

Is féidir [comhpháirt gréasáin](https://www.freecodecamp.org/news/build-your-first-web-component/) a shainiú in `md/.i18n/htm/index.js` agus ansin é a úsáid in `foot.pug` .

Tá sé éasca comhpháirteanna gréasáin a chruthú, mar `<x-img>` saincheaptha0 .

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

Is é seo a leanas an cód i `.i18n/htm/foot.pug` :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Freagraíonn `${I18N.C}` do `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ag baint úsáide as `${I18N.xxx}` cosúil leis an modh scríbhneoireachta seo, in éineacht le `i18n.yml` , is féidir leat idirnáisiúnú iltheangach an bhuntásc a bhaint amach.

Má chuirtear `class="a"` leis an nasc is féidir an nasc a chosc ó thiontú go `MarkDown` Féach :
 [`HTML` `YAML` : `Markdown`](/i18/qa#H2)