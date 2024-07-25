# Senna-Tɛgɛrɛ

Halibi ni demoporozɛ in ta misali ye, siti in senfɛ-sɛbɛn ɲɛfɔlen `.i18n/htm/foot.pug` `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

ye misalikan ye min bɛ `HTML` lawuli [`pug`](https://pugjs.org)

[➔ Aw ye nin yɔrɔ digi walasa ka daɲɛgafe dɔn pug](https://pugjs.org)

**Kana `css` ni `js` sɛbɛn `foot.pug`**

Aw ye ninnu lajɛ, cogoya sɛbɛnnen bɛ `.css` wa jɛɲɔgɔnya bɛ sɔrɔ ni ɛntɛrinɛti yɔrɔw dabɔli ye.

## Senfɛla Cogoya

Demo poroze kɔnɔ `css` file 3 bɛ yen `md/.i18n/htm`

* `foot.css` :
* : style ka ɲɛsin site bɛɛ `i18n.site` `import.css`
* `conf.css` :

### Taamasiyɛn Sɛbɛnnibolo

Senfɛla taamasiyɛn bɛ Dabɔ ni iconfont.cn ( [tubabukan na](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) sɛbɛnnibolo dɔ dabɔli ye min tɔgɔ ye ko `F`

Aw ye aw yɛrɛ ka taamasiyɛn sɛbɛnfura dilan i n' a fɔ aw mago bɛ cogo min na ani ka nin cogoya : bila a nɔ na `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Yɔrɔw

`foot.pug` `js`

Aw bɛ se ka [ɛntɛrinɛti yɔrɔ dɔ](https://www.freecodecamp.org/news/build-your-first-web-component/) `foot.pug` `md/.i18n/htm/index.js`

A ka nɔgɔn ka ɛntɛrinɛti yɔrɔw da, i n’a fɔ ladamu taamasiyɛnw `<x-img>`

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

## Kan Caman Senna-Tɛgɛrɛ

Kode min bɛ a kɔnɔ o ye nin : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

`en/i18n.yml` `${I18N.C}` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ni i bɛ baara kɛ `i18n.yml` `${I18N.xxx}`

`MarkDown` a : `class="a"`
 [: `YAML` na ka `HTML` in bali ka wuli ka kɛ `Markdown` ye](/i18/qa#H2) .