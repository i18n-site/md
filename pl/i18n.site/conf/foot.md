# Stopka

Wciąż biorąc za przykład projekt demonstracyjny, plik `.i18n/htm/foot.pug` w katalogu `md` definiuje stopkę strony internetowej.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) to język szablonów generujący `HTML`.

[➔ Kliknij tutaj, aby nauczyć się składni pug](https://pugjs.org)

**Nie pisz `css` i `js` w `foot.pug`**, w przeciwnym razie mogą wystąpić błędy.

Proszę odnieść się do poniższych informacji, styl jest zapisywany w odpowiednich plikach `.css`, a interakcję można zaimplementować poprzez tworzenie komponentów网页.

## Styl stopki

W projekcie demonstracyjnym znajdują się trzy pliki `css` w katalogu `md/.i18n/htm`.

* `foot.css`: styl stopki
* `import.css`: domyślne style dla całej strony `i18n.site`
* `conf.css`: ikony i czcionki w stopce

### Czcionka ikon

Ikony w stopce są tworzone za pomocą czcionki o nazwie `F` na stronie iconfont.cn ([wersja angielska](https://www.iconfont.cn/?lang=en-us) / [wersja chińska](https://www.iconfont.cn/?lang=zh)).

Proszę utworzyć własne ikony czcionki i zastąpić poniższe ustawienia w `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponenty网页

W `foot.pug` nie można pisać `js`. Jeśli potrzebujesz interakcji, utwórz własny komponent网页.

W `md/.i18n/htm/index.js` można zdefiniować [komponenty网页](https://www.freecodecamp.org/news/build-your-first-web-component/), a następnie użyć ich w `foot.pug`.

Tworzenie komponentów网页 jest proste, na przykład niestandardowy tag `<x-img>`.

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

## Wielojęzyczne stopki

W `.i18n/htm/foot.pug` znajduje się kod:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Tutaj `${I18N.C}` odpowiada treści w pliku `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Używając wzorca `${I18N.xxx}`, w połączeniu z plikiem `i18n.yml`, można osiągnąć wielojęzyczną internacjonalizację stopki strony.

Dodanie `class="a"` do linku zapobiega jego konwersji na format `Markdown`. Zobacz:
 [➔ `YAML`: Jak zapobiec konwersji linków `HTML` na `Markdown`](/i18/qa#H2).