# .i18n/conf.yml

Profil dla `i18n.site` to `.i18n/conf.yml`.

Z wyjątkiem ustawień [`i18`](/i18) , `ignore:` i `i18n:` , plik konfiguracyjny wygląda następująco:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
addon:
  - i18n.addon/toc
```

Wśród nich, `upload` z `ext:` oznacza, że podczas publikacji będą wysyłane tylko pliki `.md`.

## Górna nawigacja:

`nav:` odpowiada konfiguracji menu nawigacyjnego na górze strony głównej.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Wśród nich, `i18n: home` odpowiada `home: Home` w `en/i18n.yml`.

`en/i18n.yml` zostanie przetłumaczone na wiele języków, np. `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po zakończeniu tłumaczenia można zmodyfikować wartości w pliku `yml`, ale nie należy dodawać ani usuwać kluczy tłumaczenia w pliku `yml`.

### `use: Toc`, szablon pojedynczego pliku (z wykazem treści):

W konfiguracji `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` oznacza, że szablon `Toc` będzie używany do renderowania, co dotyczy pojedynczego szablonu `Markdown`.

`TOC` to skrót od `Table of Contents`; po wyrenderowaniu szablonu, kontur pliku `Markdown` będzie wyświetlany na pasku bocznym.

`url:` oznacza ścieżkę do pliku `Markdown` ( `/` odpowiada głównemu katalogowi `/README.md`, nazwa pliku powinna być zaczynana dużą literą i kończona małą).

### `use: Md`, szablon pojedynczego pliku (bez wykazu treści):

Szablon `Md` jest identyczny z szablonem `Toc`, oba służą do renderowania pojedynczego pliku `Markdown`, ale `Md` nie wyświetla konturu na pasku bocznym.

Możesz zmienić `use: Toc` na `use: Md` w powyższej konfiguracji, uruchomić `i18n.site` w katalogu `md` i odwiedzić adres URL podglądu, aby zaobserwować zmiany na stronie głównej.

### Domyślne ładowanie bez skonfigurowanej ścieżki:

Jeśli dostępna jest ścieżka, której prefiks nie jest skonfigurowany w `nav:`, domyślnie załaduje się plik `Markdown` odpowiadający tej ścieżce i wyrenderuje go za pomocą szablonu `Md`.

Na przykład, jeśli dostępne jest `/test`, a `nav:` nie jest skonfigurowane dla tej ścieżki, a językiem strony jest angielski (kod `en`), domyślnie załaduje się `/en/test.md` i wyrenderuje go za pomocą szablonu `Md`.

Jeśli `/en/test.md` nie istnieje, wyświetli się domyślna strona `404`.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, szablon wieloplikowy:

W pliku konfiguracyjnym:

```
  - i18n: blog
    use: Doc
```

Oznacza to użycie `Doc` do renderowania szablonu.

Szablon `Doc` obsługuje integrację wielu plików `Markdown` w celu generowania spisu treści dla jednego lub wielu projektów.

#### Pojedynczy projekt (wiele plików):

Powyższe `blog` jest trybem jednoelementowym `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Gdy Adres url Jest Pusty, Domyślnie Przyjmuje Wartość i18n

Jeśli `url` nie zostanie zapisane, `url` przyjmuje wartość domyślną `i18n` Ta reguła obowiązuje również w przypadku innych szablonów.

Powyższa metoda zapisu jest równoważna z `url: blog`, a odpowiadający plik to `en/blog/TOC`.

#### Wiele projektów:

Konfiguracja `i18n:doc` w `.i18n/conf.yml` to tryb wielu projektów.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Tutaj `menu: NB demo1,demo2` oznacza użycie szablonu `NB` do renderowania rozwijanego menu.

`NB` to skrót od `Name Brief`, co oznacza, że rozwijane menu może wyświetlać nazwę i slogan projektu.

Po `NB` podane są parametry `demo1,demo2`.
Uwaga: **W `demo1,demo2` nie powinno być spacji przed i po przecinku`,`**.

Dla powyższych parametrów odpowiadający plik indeksu katalogu to:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks Spisu Treści TOC

`i18n.site` uruchomi wtyczkę `js` `.i18n/hook/after.tran/TOC.js` w magazynie demonstracyjnym, aby odczytać plik indeksu `TOC` odpowiadający konfiguracji szablonu `doc`, generując `json` zarysu katalogów.

Jeśli używasz szablonu `doc`, musisz mieć tę wtyczkę.

Jeśli inicjujesz projekt `i18n.site` z pustego folderu, skopiuj `.i18n` z projektu demonstracyjnego do swojego katalogu.

Szablon `Doc` wyrenderuje spis treści na podstawie wygenerowanego `json`.

##### Szczegółowe wyjaśnienie treści:

`en/blog/TOC` zawiera:

```
README.md

news/README.md
  news/begin.md
```

##### Użyj wcięć, aby wskazać poziomy

`README.md` w pierwszym wierszu katalogu `en/blog/TOC` odpowiada `i18n.site` na poniższym obrazku, co jest nazwą projektu.

Kolejne dwa rzędy, jak pokazano na zrzucie ekranu poniżej.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odpowiada `News`
`news/begin.md` odpowiada `Our Product is Online!`

`TOC` plików używa wcięć, aby wskazać hierarchię spisu treści, obsługuje wielopoziomowe wcięcia i komentarze do linii zaczynających się od `#`.

##### Poziomy nadrzędne zapisują tylko tytuły, bez treści

W przypadku wielu poziomów wcięć, poziomy nadrzędne zapisują tylko tytuły, bez treści, aby uniknąć zaburzeń w układzie.

##### Projekt README.md

W projekcie `README.md`, np. `en/demo2/README.md`, można wpisać treść.

Pamiętaj, że zawartość tego pliku nie jest wyświetlana w spisie treści, więc zaleca się krótkie i zwięzłe wprowadzenie.

###### Project slogan:

Widoczny jest slogan projektu `Your Project slogan` pod nazwą projektu `Deme Two` w rozwijanym menu i w katalogu.

![](https://p.3ti.site/1721276842.avif)

Odpowiada to pierwszemu wierszowi `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Treść po pierwszym dwukropku `:` w tytule pierwszego poziomu `README.md` jest traktowana jako slogan projektu.

Użytkownicy z Chin, Japonii i Korei powinni używać dwukropka `:` zamiast pełnego dwukropka.

##### Jak zbiorczo przenieść spis treści?

`TOC` pliki powinny być umieszczone w katalogu języka źródłowego.

Na przykład, jeśli językiem źródłowym jest chiński, `TOC` powyżej to `zh/blog/TOC`.

Jeśli zmienisz język źródłowy, musisz zbiorczo przenieść `TOC` pliki danego języka do innego języka.

Możesz użyć następujących poleceń:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Zmodyfikuj `en/` i `zh/` w powyższym poleceniu na odpowiedni kod języka.