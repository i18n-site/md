# 1. Stopka

2. Przykładowo, w projekcie demonstracyjnym, plik `.i18n/htm/foot.pug` w katalogu `md` definiuje stopkę strony.

![](https://p.3ti.site/1721286077.avif)

3. [`pug`](https://pugjs.org) to język szablonów, który generuje `HTML`.

4. [➔ Kliknij tutaj, aby nauczyć się składni pug](https://pugjs.org)

5. **Nie pisz `css` i `js` w `foot.pug`**, w przeciwnym razie mogą wystąpić błędy.

6. Proszę odnieść się do poniższych informacji, styl jest zapisywany w odpowiednich plikach `.css`, a interakcję można zaimplementować poprzez tworzenie komponentów internetowych.

## 7. Styl stopki

8. W projekcie demonstracyjnym znajdują się trzy pliki `css` w katalogu `md/.i18n/htm`.

* 9. `foot.css`: styl stopki
* 10. `import.css`: domyślne style dla całej strony `i18n.site`
* 11. `conf.css`: ikony i czcionki w stopce

### 12. Czcionka ikon

13. Ikony w stopce są generowane za pomocą czcionki o nazwie `F` stworzonej na iconfont.cn ([wersja angielska](https://www.iconfont.cn/?lang=en-us) / [wersja chińska](https://www.iconfont.cn/?lang=zh)).

14. Utwórz własne ikony czcionki według potrzeb i zastąp poniższą konfigurację w `conf.css`:

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

Proszę unikać bezpośredniego odwoływania się do plików czcionek z iconfont.cn, ponieważ nie mogą być załadowane w przeglądarce Safari.

## 15. Komponenty internetowe

16. Nie写入 `js` w `foot.pug`, jeśli potrzebujesz interakcji, utwórz własny komponent internetowy.

17. Możesz zdefiniować [komponent internetowy](https://www.freecodecamp.org/news/build-your-first-web-component/) w `md/.i18n/htm/index.js`, a następnie użyć go w `foot.pug`.

18. Tworzenie komponentów internetowych jest proste, na przykład niestandardowy tag `<x-img>`.

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

## 19. Wielojęzyczna stopka

20. W `.i18n/htm/foot.pug` znajduje się kod:

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

21. Tutaj `${I18N.C}` odpowiada `en/i18n.yml`:

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

22. Używając `${I18N.xxx}` w takim stylu, w połączeniu z `i18n.yml`, można osiągnąć wielojęzyczną internacjonalizację stopki.

23. Dodanie `class="a"` do linku zapobiega przekształceniu linku w `Markdown`, patrz:
 24. [➔ `YAML`: Jak zapobiec przekształceniu linku `HTML` w `Markdown`](/i18/qa#H2).