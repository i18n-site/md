# Stopka

Wciąż biorąc za przykład projekt demonstracyjny, plik `.i18n/htm/foot.pug` w katalogu `md` definiuje stopkę strony internetowej.

![](https://p.3ti.site/1721286077.avif)

[`pug`](https://pugjs.org) to język szablonów generujący `HTML`.

[➔ Kliknij tutaj, aby nauczyć się składni pug](https://pugjs.org)

**Nie pisz `css` i `js` w `foot.pug`**, w przeciwnym razie mogą wystąpić błędy.

Proszę odnieść się do poniższych informacji, styl jest zapisywany w odpowiednich plikach `.css`, a interakcję można zaimplementować poprzez tworzenie komponentów internetowych.

## Styl stopki

W projekcie demonstracyjnym znajdują się trzy pliki `css` w katalogu `md/.i18n/htm`.

* `foot.css`: styl stopki
* `import.css`: domyślne style dla całej strony `i18n.site`
* `conf.css`: ikony i czcionki w stopce

### Czcionka ikon

Ikony w stopce są generowane za pomocą czcionki o nazwie `F` stworzonej na iconfont.cn ([wersja angielska](https://www.iconfont.cn/?lang=en-us) / [wersja chińska](https://www.iconfont.cn/?lang=zh)).

Proszę utworzyć własne ikony czcionki i zastąpić poniższe ustawienia w `conf.css`:

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponenty internetowe

`foot.pug` nie powinien zawierać `js`. Jeśli potrzebujesz interakcji, utwórz własny komponent internetowy.

Komponent [sieciowy](https://www.freecodecamp.org/news/build-your-first-web-component/) można zdefiniować w pliku `md/.i18n/htm/index.js`, a następnie użyć go w pliku `foot.pug`.

Tworzenie komponentów internetowych jest proste, na przykład niestandardowy tag `<x-img>`.

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

## Wielojęzyczność stopki

W `.i18n/htm/foot.pug` znajduje się kod:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

W tym kontekście `${I18N.C}` odpowiada sekcji `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Stosując `${I18N.xxx}` w ten sposób, w połączeniu z `i18n.yml`, można osiągnąć wielojęzyczną internacjonalizację stopki.

Dodanie `class="a"` do linku zapobiega jego konwersji na format `Markdown`. Zobacz:
 [➔ `YAML`: Jak zapobiec konwersji linku `HTML` na `Markdown`](/i18/qa#H2)