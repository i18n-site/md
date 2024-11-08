# Voetskrif

Neem steeds die demo-projek as 'n voorbeeld, `.i18n/htm/foot.pug` in die `md` gids definieer die voetskrif van die webwerf.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) is 'n sjabloontaal wat `HTML` genereer.

[➔ Klik hier om die grammatika van pug](https://pugjs.org)

**Moenie `css` en `js` in `foot.pug` skryf nie** , anders sal daar 'n fout wees.

Verwys asseblief na die volgende, die styl word in die ooreenstemmende `.css` geskryf, en die interaksie word verkry deur webkomponente te skep.

## Voetskrif Styl

Daar is drie `css` -lêers onder `md/.i18n/htm` in die demo-projek.

* `foot.css` : Footer styl
* `import.css` : `i18n.site` Standaardstyl vir die hele webwerf
* `conf.css` : Voettekst ikone en lettertipes

### Ikoon Lettertipe

Die voetskrif-ikoon word gegenereer deur 'n lettertipe `F` iconfont.cn skep ( [Engelse weergawe](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Skep asseblief jou eie ikoonlettertipe soos nodig en vervang die volgende konfigurasie in `conf.css` :

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

Moet asseblief nie direk na die fontlêer van iconfont.cn verwys nie, want dit kan nie op die safari-blaaier gelaai word nie.

## Webkomponente

Jy kan nie `js` in `foot.pug` skryf nie. As interaksie vereis word, pasmaak asseblief die webkomponent.

['n Webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) kan in `md/.i18n/htm/index.js` gedefinieer word en dan in `foot.pug` gebruik word.

Dit is maklik om webkomponente te skep, soos pasgemaakte `<x-img>` .

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

## Veeltalige Voetskrif

Die kode in `.i18n/htm/foot.pug` is soos volg :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Hier stem `${I18N.C}` ooreen met `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Deur `${I18N.xxx}` soortgelyk aan hierdie skryfmetode te gebruik, gekombineer met `i18n.yml` , kan jy meertalige internasionalisering van die voetskrif bereik.

Om `class="a"` by die skakel te voeg, is om te verhoed dat die skakel na `MarkDown` omgeskakel word. Sien :
 [➔ `YAML` : om te verhoed dat skakel `HTML` na `Markdown` omgeskakel word](/i18/qa#H2) .