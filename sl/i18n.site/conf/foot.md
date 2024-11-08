# Noga

Če še vedno vzamemo demo projekt kot primer, `.i18n/htm/foot.pug` v imeniku `md` določa nogo spletnega mesta.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) je predlogni jezik, ki generira `HTML` .

[➔ Kliknite tukaj, če želite izvedeti slovnico pug](https://pugjs.org)

**Ne pišite `css` in `js` v `foot.pug`** , sicer bo prišlo do napake.

Glejte naslednje, slog je zapisan v ustrezno `.css` , interakcija pa je dosežena z ustvarjanjem spletnih komponent.

## Slog Noge

V predstavitvenem projektu so tri datoteke `css` pod `md/.i18n/htm` .

* `foot.css` : Slog noge
* `import.css` : `i18n.site` slog za celotno spletno mesto
* `conf.css` Ikone in pisave : nogi

### Pisava Ikon

Ikona noge se ustvari z ustvarjanjem pisave z imenom `F` iconfont.cn ( [angleška različica](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Po potrebi ustvarite lastno pisavo ikon in zamenjajte naslednjo konfiguracijo v `conf.css` :

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

Ne sklicujte se neposredno na datoteko pisave iconfont.cn, ker je ni mogoče naložiti v brskalniku safari.

## Spletne Komponente

Ne morete napisati `js` v `foot.pug` Če je potrebna interakcija, prilagodite spletno komponento.

[Spletno komponento](https://www.freecodecamp.org/news/build-your-first-web-component/) je mogoče definirati v `md/.i18n/htm/index.js` in nato uporabiti v `foot.pug` .

Preprosto je ustvariti spletne komponente, kot so `<x-img>` po meri0.

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

## Večjezična Noga

Koda v `.i18n/htm/foot.pug` je naslednja :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Tukaj `${I18N.C}` ustreza `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Z uporabo `${I18N.xxx}` podobnem tej metodi pisanja, v kombinaciji z `i18n.yml` lahko dosežete večjezično internacionalizacijo noge.

Če povezavi dodate `class="a"` , preprečite pretvorbo povezave v `MarkDown` Glej :
 [➔ `YAML` : Kako preprečiti pretvorbo povezave `HTML` v `Markdown`](/i18/qa#H2) .