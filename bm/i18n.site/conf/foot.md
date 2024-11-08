# Senna-Tɛgɛrɛ

Halibi ka demo porozɛ ta misali la, `.i18n/htm/foot.pug` min bɛ `md` ɲɛbilasɛbɛn kɔnɔ, o bɛ siti in senfɛ-sɛbɛn ɲɛfɔ.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) ye jatebɔkan ye min bɛ `HTML` 'w Bɔ.

[➔ Aw ye nin yɔrɔ digi walasa ka daɲɛgafe dɔn pug](https://pugjs.org)

**Aw kana `css` ni `js` sɛbɛn `foot.pug` kɔnɔ** , n’o tɛ fili bɛna kɛ.

Aw ye ninnu lajɛ, cogoya sɛbɛnnen bɛ `.css` bɛnnin kɔnɔ, wa jɛɲɔgɔnya bɛ sɔrɔ ni ɛntɛrinɛti yɔrɔw dabɔli ye.

## Senfɛla Cogoya

`css` file saba bɛ `md/.i18n/htm` jukɔrɔ demo porozɛ kɔnɔ.

* `foot.css` : cogoya
* `import.css` : `i18n.site`
* `conf.css` : Senfɛla taamasiyɛnw ni sɛbɛnnibolow

### Taamasiyɛn Sɛbɛnnibolo

Senfɛla taamasiyɛn bɛ Sɔrɔ ni sɛbɛnnibolo dɔ dabɔli ye min tɔgɔ ye ko `F` iconfont.cn ( [tubabukan na](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Aw ye aw yɛrɛ ka taamasiyɛn sɛbɛnfura dilan i n' a fɔ aw mago bɛ cogo min na ani ka nin cogoya in bila `conf.css` nɔ na :

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

Aw kana iconfont.cn ka sɛbɛnnibolo filen ɲɛfɔ k’a ɲɛsin a ma bawo a tɛ se ka don safari navigatɛri kan.

## Web Yɔrɔw

I tɛ se ka `js` sɛbɛn `foot.pug` kɔnɔ.Ni jɛɲɔgɔnya wajibiyalen don, i ka ɛntɛrinɛti yɔrɔ labɛn ka kɛɲɛ ni i yɛrɛ sago ye.

[ɛntɛrinɛti yɔrɔ dɔ](https://www.freecodecamp.org/news/build-your-first-web-component/) bɛ se ka ɲɛfɔ `md/.i18n/htm/index.js` kɔnɔ ka sɔrɔ ka baara kɛ ni a ye `foot.pug` kɔnɔ .

A ka nɔgɔn ka ɛntɛrinɛti yɔrɔw dilan, i n’a fɔ custom `<x-img>` .

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

Kode min bɛ `.i18n/htm/foot.pug` kɔnɔ o ye nin ye :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Yan `${I18N.C}` bɛ bɛn `en/i18n.yml` ma :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ni i bɛ baara Kɛ ni `${I18N.xxx}` min ni nin sɛbɛnnikɛcogo in bɛ Taa ɲɔgɔn fɛ, n’o ni `i18n.yml` Fàra ɲɔgɔn kan, i bɛ Se ka sennasanbara in kan caman Kɛ diɲɛnatigɛ la.

`class="a"` farali jɛgɛnsira kan, o ye ka jɛgɛnsira bali ka wuli ka kɛ `MarkDown` ye.A’ ye :
 [➔ `YAML` cogo min na , jɛgɛnsira `HTML` kana wuli ka kɛ `Markdown` :](/i18/qa#H2) !