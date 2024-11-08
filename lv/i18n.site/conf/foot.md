# Pielāgota Kājene

Joprojām par piemēru ņemot demonstrācijas projektu, `.i18n/htm/foot.pug` direktorijā `md` nosaka vietnes kājeni.

![](https://p.3ti.site/1721286077.avif)

## Kājenes Stils

Demonstrācijas projektā ir trīs `css` faili, kas ir zem `md/.i18n/htm` .

* `foot.css` : stils
* `import.css` `i18n.site` stils : vietnei
* `conf.css` : ikonas un fonti

### Ikonas Fonts

Kājenes ikona tiek ģenerēta `F` iconfont.cn [angļu valodas versija](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Lūdzu, izveidojiet savu ikonas fontu pēc vajadzības un aizstājiet tālāk norādīto konfigurāciju `conf.css` :

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

Lūdzu, neatsaucieties tieši uz ikonfont.cn fonta failu, jo to nevar ielādēt pārlūkprogrammā Safari.

## Tīmekļa Komponenti

Jūs nevarat ierakstīt `js` no `foot.pug` Ja ir nepieciešama mijiedarbība, lūdzu, pielāgojiet tīmekļa komponentu.

[Tīmekļa komponentu](https://www.freecodecamp.org/news/build-your-first-web-component/) var definēt `md/.i18n/htm/index.js` un pēc tam izmantot `foot.pug` .

Ir viegli izveidot tīmekļa komponentus, piemēram, pielāgotus `<x-img>` .

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

## Daudzvalodu Kājene

Kods `.i18n/htm/foot.pug` ir šāds :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Šeit `${I18N.C}` atbilst `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Izmantojot `${I18N.xxx}` kas ir līdzīga šai rakstīšanas metodei, apvienojumā ar `i18n.yml` , jūs varat panākt kājenes internacionalizāciju vairākās valodās.

Pievienojot saitei `class="a"` , tiek novērsta saites pārvēršana par `MarkDown` Skatiet :
 [➔ `YAML` : novērst `HTML` saites pārveidošanu par `Markdown`](/i18/qa#H2) .