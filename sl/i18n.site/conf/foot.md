# Noga

Če še vedno vzamemo za primer demo projekt, `.i18n/htm/foot.pug` noga spletnega mesta definirana v imeniku `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) je jezik predloge, ki generira `HTML` .

[➔ Kliknite tukaj, če želite izvedeti slovnico pug](https://pugjs.org)

**Ne pišite `css` in `js` `foot.pug`** , sicer bo prišlo do napak.

Glejte naslednje, slog je napisan v ustreznem `.css` interakcija pa je dosežena z ustvarjanjem spletnih komponent.

## Slog Noge

V predstavitvenem `md/.i18n/htm` so 3 `css` datoteke spodaj.

* `foot.css` Slog :
* `import.css` : `i18n.site` slog za celotno spletno mesto
* `conf.css` Ikone in pisave : nogi

### Pisava Ikon

Ikona v nogi je ustvarjena z iconfont.cn ( [angleška različica](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) ustvarjanjem pisave z imenom `F`

Po potrebi ustvarite lastno pisavo ikon in zamenjajte : konfiguracijo v `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Spletne Komponente

`foot.pug` vanj ne morete napisati `js` Če je potrebna interakcija, prilagodite komponento spletne strani.

[Spletno komponento](https://www.freecodecamp.org/news/build-your-first-web-component/) lahko definirate v `md/.i18n/htm/index.js` in jo nato uporabite v `foot.pug` .

Preprosto je ustvariti spletne komponente, kot so oznake po meri `<x-img>`

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

`.i18n/htm/foot.pug` Koda v njem je naslednja :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`${I18N.C}` je ustrezen v `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Z uporabo `${I18N.xxx}` , ki je podoben tej metodi pisanja, lahko v kombinaciji z `i18n.yml` dosežete večjezično internacionalizacijo noge.

Dodajte `class="a"` na povezavo, da preprečite pretvorbo povezave v `MarkDown` , glejte :
 [: `YAML` preprečiti pretvorbo `HTML` povezave v `Markdown`](/i18/qa#H2) .