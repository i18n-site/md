# Footer

Għadu qed tieħu l-proġett demo bħala eżempju, `.i18n/htm/foot.pug` fid-direttorju `md` jiddefinixxi l-footer tal-websajt.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) hija lingwa mudell li tiġġenera `HTML` 's.

[➔ Ikklikkja hawn biex titgħallem il-grammatika ta pug](https://pugjs.org)

**Tiktebx `css` u `js` `foot.pug`** , inkella jkun hemm żball.

Jekk jogħġbok irreferi għal dan li ġej, l-istil huwa miktub fis- `.css` korrispondenti, u l-interazzjoni tinkiseb billi jinħolqu komponenti tal-web.

## Stil Footer

Hemm tliet fajls `css` taħt `md/.i18n/htm` fil-proġett demo.

* `foot.css` : Stil tal-footer
* `import.css` : 1Stil `i18n.site` għas-sit kollu
* `conf.css` : Ikoni u fonts tal-footer

### Font Tal-Ikona

L-ikona tal-footer hija ġġenerata billi tinħoloq font bl-isem iconfont.cn ( [verżjoni bl-Ingliż](https://www.iconfont.cn/?lang=en-us) `F` /[版!](https://www.iconfont.cn/?lang=zh) ).

Jekk jogħġbok oħloq il-font tal-ikona tiegħek kif meħtieġ u ibdel il-konfigurazzjoni li ġejja `conf.css` :

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

Jekk jogħġbok tirreferix direttament il-fajl tat-tipa ta' iconfont.cn għax ma jistax jitgħabba fuq il-browser safari.

## Komponenti Tal-Web

Ma tistax tikteb `js` f'0 `foot.pug` Jekk l-interazzjoni hija meħtieġa, jekk jogħġbok ippersonalizza l-komponent tal-web.

[Komponent tal-web](https://www.freecodecamp.org/news/build-your-first-web-component/) jista' jiġi definit `md/.i18n/htm/index.js` u mbagħad jintuża `foot.pug` .

Huwa faċli li toħloq komponenti tal-web, bħal `<x-img>` personalizzati0 .

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

## Footer Multilingwi

Il-kodiċi `.i18n/htm/foot.pug` huwa kif ġej :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hawnhekk `${I18N.C}` jikkorrispondi għal `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Billi tuża `${I18N.xxx}` simili għal dan il-metodu ta 'kitba, flimkien ma' `i18n.yml` , tista 'tikseb internazzjonalizzazzjoni b'ħafna lingwi tal-footer.

Iż-żieda ta `class="a"` mal-link hija biex tevita li l-link tiġi kkonvertita għal `MarkDown` Ara :
 [➔ `YAML` : Kif tipprevjeni li l-link `HTML` tiġi kkonvertita għal `Markdown`](/i18/qa#H2) .