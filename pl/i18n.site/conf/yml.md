# .i18n/conf.yml

Plik konfiguracyjny dla `i18n.site` ma `.i18n/conf.yml`, a jego zawartość wygląda następująco:

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Wśród nich, `upload` z `ext:` oznacza, że podczas publikacji będą wysyłane tylko pliki `.md`.

## Górna Nawigacja Nawigacyjna

`nav:` to opcje konfiguracyjne, które odpowiadają górnemu menu nawigacyjnemu na stronie głównej.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Wśród nich `i18n: home` odpowiada `home: Home` w `en/i18n.yml` (gdzie `en` jest językiem źródłowym projektu).

Treść `en/i18n.yml` to tekst wyświetlany w menu nawigacyjnym, który zostanie przetłumaczony zgodnie z `fromTo`, na przykład na `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po zakończeniu tłumaczenia możesz zmodyfikować wartości w `yml`, ale nie dodawaj ani nie usuwaj kluczy `yml`.

### `use: Toc` - szablon jednego pliku z tabelą treści

W konfiguracji `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` oznacza, że szablon `Toc` będzie używany do renderowania, co oznacza renderowanie pojedynczego pliku `Markdown`.

`TOC` to skrót od `Table of Contents`; po wyrenderowaniu szablonu, kontur tego pliku `Markdown` będzie wyświetlany w panelu bocznym.

`url:` oznacza ścieżkę do pliku `Markdown` ( `/` odpowiada głównemu katalogowi `/README.md`, nazwa pliku powinna mieć dużą literę na początku i małą na końcu).

### `use: Md` - szablon jednego pliku bez tabeli treści

Szablon `Md` jest taki sam jak szablon `Toc`, oba służą do renderowania pojedynczego pliku `Markdown`, ale szablon `Md` nie wyświetla tabeli treści w panelu bocznym.

Możesz zmienić `use: Toc` na `use: Md` w powyższej konfiguracji, uruchomić ponownie `i18n.site` w katalogu `md` i odwiedzić adres URL podglądu, aby zaobserwować zmiany na stronie głównej.

### `use: Blog` - szablon bloga

Szablon bloga wyświetla listę artykułów (tytuły i abstrakty) w porządku chronologicznym.

[→ Kliknij tutaj, aby dowiedzieć się więcej o konfiguracji](/i18n.site/conf/blog)

### `use: Doc` - szablon dokumentu wieloplikowego

W pliku konfiguracyjnym:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Oznacza to użycie `Doc` do renderowania szablonu.

Szablon `Doc` obsługuje integrację wielu plików `Markdown`, aby tworzyć spis treści dla jednego lub wielu projektów.

#### Wiele projektów, wiele plików

Konfiguracja `.i18n/conf.yml` dla `i18n:doc` to tryb renderowania wielu projektów i wielu plików.

Tutaj `menu: NB demo1,demo2` oznacza użycie szablonu `NB` do renderowania rozwijanego menu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` to skrót od `Name Brief`, co oznacza, że rozwijane menu może wyświetlać nazwę i slogan projektu.

`NB` jest followed by the parameter `demo1,demo2`.

Uwaga: **W `demo1,demo2` nie powinno być spacji przed ani po przecinku`,`**.

Dla powyższych parametrów odpowiedni plik indeksu katalogu to:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Jeden projekt, wiele plików

Jeśli masz tylko jeden projekt, możesz go skonfigurować w następujący sposób.

```
  - i18n: xxx
    use: Doc
```

##### Gdy Adres url Jest Pusty, Domyślnie Przyjmuje Wartość i18n

Jeśli `url` nie zostanie podane, `url` domyślnie przyjmuje wartość `i18n`, co obowiązuje również dla innych szablonów.

Powyższy zapis jest równoważny `url: xxx`, a odpowiedni plik to `en/xxx/TOC`.

#### Indeks Spisu Treści TOC

`i18n.site` uruchomi wtyczkę `js` `.i18n/hook/after.tran/TOC.js` w demonstracyjnym magazynie, aby odczytać plik indeksu `TOC` odpowiadający konfiguracji szablonu `doc`, aby wygenerować `json` spisu treści.

Jeśli używasz szablonu `doc`, musisz mieć tę wtyczkę.

Jeśli inicjujesz projekt `i18n.site` z pustego folderu, pamiętaj o skopiowaniu `.i18n` z projektu demonstracyjnego do swojego katalogu.

Szablon `Doc` wyrenderuje spis treści na podstawie wygenerowanego `json`.

##### Szczegółowe wyjaśnienie treści

`en/blog/TOC` zawiera:

```
README.md

news/README.md
  news/begin.md
```

##### Użyj wcięć, aby wskazać poziomy

`README.md` w pierwszym wierszu katalogu `en/blog/TOC` odpowiada `i18n.site` na poniższym obrazku, co jest nazwą projektu.

Kolejne dwa wiersze są pokazane na zrzucie ekranu poniżej.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odpowiada `News`
`news/begin.md` odpowiada `Our Product is Online!`

Plik `TOC` używa wcięć, aby wskazać hierarchię spisu treści, obsługuje wielopoziomowe wcięcia i komentarze do linii zaczynających się od `#`.

##### Poziomy nadrzędne zapisują tylko tytuły, nie zaś treści

W przypadku wielu poziomów wcięć, poziomy nadrzędne zapisują tylko tytuły, aby uniknąć zakłóceń w układzie.

##### Projekt README.md

W pliku `README.md` projektu, takim jak `en/demo2/README.md`, można wpisać treść.

Pamiętaj, że zawartość tego pliku nie zawiera spisu treści, więc zaleca się krótkie wprowadzenie.

###### Slogan projektu

Widać, że `Deme Two` ma swój slogan projektu poniżej rozwijanego menu i nazwy projektu w spisie treści: `Your Project slogan`.

![](https://p.3ti.site/1721276842.avif)

Odpowiada to pierwszemu wierszowi `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Treść po pierwszym dwukropku `:` w tytule pierwszego poziomu `README.md` jest traktowana jako slogan projektu.

Użytkownicy z Chin, Japonii i Korei powinni używać dwukropka `:` zamiast pełnego dwukropka.

##### Jak zbiorczo przenieść spis treści?

Plik `TOC` powinien być umieszczony w katalogu języka źródłowego.

Na przykład, jeśli językiem źródłowym jest chiński, to `TOC` powyżej to `zh/blog/TOC`.

Jeśli zmienisz język źródłowy, musisz zbiorczo przenieść `TOC` pliki danego języka do innego języka.

Możesz użyć następujących poleceń:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Zmodyfikuj `en/` i `zh/` w powyższym poleceniu na odpowiedni kod języka.

### Domyślne ładowanie bez konfiguracji ścieżki

W przypadku dostępu do określonej ścieżki, jeśli prefiks ścieżki nie jest skonfigurowany w `nav:`, domyślnie załaduje się plik `Markdown` odpowiadający ścieżce i wyrenderuje go za pomocą szablonu `Md`.

Na przykład, jeśli uzyskasz dostęp do `/test`, a `nav:` nie jest skonfigurowane dla tego prefiksu ścieżki, a bieżącym językiem przeglądania jest angielski (kod `en`), domyślnie załaduje się `/en/test.md` i wyrenderuje go za pomocą szablonu `Md`.

Jeśli `/en/test.md` nie istnieje, wyświetli się domyślna strona `404`.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">