# Dostosowana Stopka

Wciąż biorąc za przykład projekt demonstracyjny, `.i18n/htm/foot.pug` w katalogu `md` definiuje stopkę strony internetowej.

![](https://p.3ti.site/1721286077.avif)

## Styl Stopki

W projekcie demonstracyjnym znajdują się trzy pliki `css` poniżej `md/.i18n/htm` .

* `foot.css` : Styl stopki
* `import.css` : `i18n.site` styl dla całej witryny
* `conf.css` : Ikony i czcionki stopki

### Czcionka Ikony

Ikona stopki jest generowana poprzez utworzenie czcionki o nazwie `F` iconfont.cn ( [wersja angielska](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

W razie potrzeby utwórz własną czcionkę ikon i zastąp poniższą konfigurację w `conf.css` :

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

Proszę nie odwoływać się bezpośrednio do pliku czcionki iconfont.cn, ponieważ nie można go załadować w przeglądarce Safari.

## Komponenty Sieciowe

Nie możesz zapisać `js` na `foot.pug` Jeśli wymagana jest interakcja, dostosuj komponent internetowy.

[Komponent sieciowy](https://www.freecodecamp.org/news/build-your-first-web-component/) można zdefiniować w `md/.i18n/htm/index.js` , a następnie użyć w `foot.pug` .

Tworzenie komponentów internetowych, takich jak niestandardowe `<x-img>` , jest łatwe.

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

## Stopka Wielojęzyczna

Kod w `.i18n/htm/foot.pug` jest następujący :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Tutaj `${I18N.C}` odpowiada `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Używając `${I18N.xxx}` podobnego do tej metody pisania, w połączeniu z `i18n.yml` , możesz osiągnąć wielojęzyczną internacjonalizację stopki.

Dodanie `class="a"` do łącza zapobiega konwersji łącza na `MarkDown` Zobacz :
 [➔ `YAML` : Jak zapobiec konwersji łącza `HTML` na `Markdown`](/i18/qa#H2) .