# Stopka

Wciąż biorąc za przykład projekt demonstracyjny, stopka strony internetowej `.i18n/htm/foot.pug` zdefiniowana w katalogu `md` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) to język szablonów, który generuje `HTML` .

[➔ Kliknij tutaj, aby poznać gramatykę pug](https://pugjs.org)

**Nie wpisuj `css` i `js` w `foot.pug`** , w przeciwnym razie wystąpią błędy.

Proszę zapoznać się z poniższymi informacjami, styl jest zapisany w odpowiednim `.css` a interakcję osiąga się poprzez tworzenie komponentów sieciowych.

## Styl Stopki

W projekcie demonstracyjnym `md/.i18n/htm` znajdują się 3 `css` pliki.

* : stopki `foot.css`
* `import.css` : `i18n.site` styl dla całej witryny
* Ikony i czcionki w : `conf.css`

### Czcionka Ikony

Ikona stopki jest generowana przez iconfont.cn ( [wersja angielska](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) tworząc czcionkę o nazwie `F`

W razie potrzeby utwórz własną czcionkę ikon i zastąp : konfigurację w `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Komponenty Sieciowe

`foot.pug` nie można w nim wpisać `js` . Jeśli wymagana jest interakcja, dostosuj komponent strony internetowej.

Możesz zdefiniować [komponent sieciowy](https://www.freecodecamp.org/news/build-your-first-web-component/) w `md/.i18n/htm/index.js` , a następnie użyć go w `foot.pug` .

Tworzenie komponentów internetowych, takich jak niestandardowe tagi, jest łatwe `<x-img>`

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

Kod w nim : następujący `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Tutaj `${I18N.C}` Odpowiedni jest w `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Używając `${I18N.xxx}` podobnego do tej metody pisania, w połączeniu z `i18n.yml` , możesz osiągnąć wielojęzyczną internacjonalizację stopki.

Dodaj `class="a"` do linku , aby uniknąć konwersji linku na `MarkDown` , zobacz :
 [: `YAML` zapobiec konwersji `HTML` linku na `Markdown`](/i18/qa#H2) .