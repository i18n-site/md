# .i18n/conf.yml

Profil konfiguracyjny dla `i18n.site` znajduje się w pliku `.i18n/conf.yml`.

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
```

Wśród nich, konfiguracja `upload` do `ext:` oznacza, że podczas publikacji będą przesyłane wyłącznie pliki `.md`.

## Górna nawigacja

`nav:` zawiera opcje konfiguracyjne odpowiadające menu nawigacyjnemu umieszczonemu na górze strony głównej.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Wśród nich, `i18n: home` odpowiada `home: Home` w pliku `en/i18n.yml`.

Plik `en/i18n.yml` zostanie przetłumaczony na wiele języków, np. `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po zakończeniu tłumaczenia można zmodyfikować wartości tłumaczeń w pliku `yml`, ale nie należy dodawać ani usuwać kluczy tłumaczeń `yml`.

### `use: Toc`, szablon pojedynczego pliku (z konturem)

W konfiguracji `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` oznacza renderowanie przy użyciu szablonu `Toc`, co oznacza renderowanie pojedynczego szablonu `Markdown`.

`TOC` to skrót od `Table of Contents`. Po wyrenderowaniu tego szablonu, kontur pliku `Markdown` będzie wyświetlany na pasku bocznym.

`url:` oznacza ścieżkę pliku `Markdown` ( `/` odpowiada katalogowi głównemu `/README.md` , ta nazwa pliku wymaga dużego i małego przedrostka).

### `use: Md`, szablon pojedynczego pliku (bez konturu)

Szablon `Md` jest podobny do szablonu `Toc` i służy do renderowania pojedynczych plików `Markdown`. Jednak szablon `Md` nie wyświetla konturu na pasku bocznym.

Można zmodyfikować `use: Toc` w powyższej konfiguracji na `use: Md`, ponownie uruchomić `i18n.site` w katalogu `md`, a następnie odwiedzić adres URL podglądu programowania, aby zaobserwować zmiany na stronie głównej.

### Domyślne ładowanie bez ścieżki konfiguracji

W przypadku uzyskania dostępu do określonej ścieżki, jeśli jej prefiks ścieżki nie jest skonfigurowany w `nav:`, plik `Markdown` odpowiadający ścieżce zostanie domyślnie załadowany i wyrenderowany przy użyciu szablonu `Md`.

Na przykład, jeśli uzyskano dostęp do `/test` i `nav:` nie jest skonfigurowane dla tej ścieżki, a językiem strony jest angielski (kod `en`), domyślnie zostanie załadowany i wyrenderowany plik `/en/test.md` przy użyciu szablonu `Md`.

W przypadku braku pliku `/en/test.md`, zostanie wyświetlona domyślna strona `404`.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc`, szablon wieloplikowy

W pliku konfiguracyjnym:

```
  - i18n: blog
    use: Doc
```

Wskazuje użycie `Doc` do renderowania szablonu.

Szablon `Doc` obsługuje integrację wielu plików `Markdown` w celu wygenerowania konspektów dokumentów dla jednego lub wielu projektów.

#### Pojedynczy projekt (wiele plików)

Powyższy `blog` jest trybem jednoelementowym `Doc`.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Gdy Adres url Jest Pusty, Domyślnie Przyjmuje Wartość i18n

W przypadku braku zapisania `url`, `url` przyjmuje wartość domyślną `i18n`. Ta reguła obowiązuje również dla innych szablonów.

Powyższa metoda zapisu jest równoważna `url: blog`, a odpowiadający jej plik to `en/blog/TOC`.

#### Wiele projektów

Konfiguracja `i18n:doc` w pliku `.i18n/conf.yml` to tryb wielu projektów.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Tutaj `menu: NB demo1,demo2` oznacza użycie szablonu `NB` do renderowania menu rozwijanego.

`NB`, skrót od `Name Brief`, oznacza, że w rozwijanym menu mogą być wyświetlone nazwa i slogan projektu.

Po `NB` następuje przekazany do niego parametr `demo1,demo2`.
Uwaga: **Nie powinno być spacji** przed i po przecinku `,` w `demo1,demo2`.

Odpowiedni plik indeksu katalogów dla powyższych parametrów to:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks spisu treści TOC

`i18n.site` uruchomi `js` wtyczkę `.i18n/hook/after.tran/TOC.js` w magazynie demonstracyjnym, aby odczytać plik indeksu `doc` katalogów odpowiadający konfiguracji szablonu `TOC` w celu wygenerowania zarysu `json` katalogów.

Jeśli używa się szablonu `doc`, musi się mieć tę wtyczkę.

Jeśli inicjuje się projekt `i18n.site` z pustego folderu, pamiętaj o skopiowaniu katalogu `.i18n` z repozytorium demonstracyjnego do swojego katalogu.

Szablon `Doc` wyrenderuje zarys spisu treści na podstawie wygenerowanego `json`.

##### Szczegółowe wyjaśnienie treści

`en/blog/TOC` wygląda następująco:

```
README.md

news/README.md
  news/begin.md
```

##### Użyj wcięć, aby wskazać poziomy

`README.md` w pierwszym wierszu `en/blog/TOC` powyżej odpowiada `i18n.site` na poniższym obrazku, która jest nazwą projektu.

Kolejne dwie linie są pokazane na zrzucie ekranu poniżej.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odpowiada `News`,
`news/begin.md` odpowiada `Our Product is Online !`

Plik `TOC` używa wcięć, aby wskazać hierarchiczną relację konspektu i wspiera wielopoziomowe wcięcie.

##### Poziom nadrzędny zapisuje tylko tytuł, a nie treść

W przypadku wielu poziomów wcięć, poziom nadrzędny zapisuje tylko tytuł, a nie treść. W przeciwnym razie typografia zostanie zaburzona.

##### Projekt README.md

Treść można zapisać w pliku `README.md`, np. `en/demo2/README.md`.

Należy pamiętać, że zawartość tego pliku nie przedstawia zarysu spisu treści, więc zaleca się ograniczenie długości i napisanie krótkiego wstępu.

###### Hasło projektu

Widoczne jest `Your Project slogan`, które `Deme Two` ma jako slogan projektu pod rozwijanym menu i nazwą projektu w katalogu:

![](https://p.3ti.site/1721276842.avif)

Odpowiada to pierwszemu wierszowi `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Treść po pierwszym dwukropku `:` tytułu projektu pierwszego poziomu `README.md` będzie traktowana jako hasło projektu.

Użytkownicy z Chin, Japonii i Korei powinni pamiętać, że zamiast dwukropka o pełnej szerokości należy używać dwukropka `:`.

##### Jak zbiorczo przenieść spis treści?

Plik `TOC` należy umieścić w katalogu języka źródłowego.

Na przykład, jeśli językiem źródłowym jest chiński, wówczas `TOC` powyżej to `zh/blog/TOC`.

W przypadku zmiany języka źródłowego, należy wsadowo przenieść pliki `TOC` określonego języka w projekcie do innego języka.

Można odwołać się do następujących poleceń:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Zmień `en/` i `zh/` w powyższym poleceniu na kod języka.