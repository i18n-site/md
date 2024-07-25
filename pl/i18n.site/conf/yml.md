# .i18n/conf.yml

Plik konfiguracyjny to `.i18n/conf.yml` `i18n.site`

Z wyjątkiem ustawień `ignore:` i `i18n:` [`i18`](/i18) , plik konfiguracyjny wygląda następująco:

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

Wśród nich element konfiguracji `ext:` `upload` oznacza, że ​​podczas publikowania zostaną przesłane tylko `.md` .

## Górna Nawigacja Nawigacyjna

`nav:` opcje konfiguracji odpowiadające menu nawigacyjnemu znajdującemu się na górze strony głównej.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Wśród nich `i18n: home` odpowiada `en/i18n.yml`中`home: Home` .

`en/i18n.yml` zostanie przetłumaczone na wiele języków, np. `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po zakończeniu tłumaczenia możesz zmienić wartość `yml` w tłumaczeniu, ale nie dodawaj ani nie usuwaj klucza tłumaczenia `yml` .

### `use: Toc` , Szablon Pojedynczego Pliku (Z Konturem)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` oznacza użycie renderowania `Toc` , czyli renderowania pojedynczego szablonu `Markdown` .

`TOC` to skrót od `Table of Contents` . Po wyrenderowaniu tego szablonu na pasku bocznym zostanie wyświetlony kontur tego pliku `Markdown` .

`url:` reprezentuje ścieżkę pliku `Markdown` ( `/` odpowiada katalogowi głównemu `/README.md` , ta nazwa pliku wymaga dużego przedrostka i małego sufiksu).

### `use: Md` , Szablon Pojedynczego Pliku (Bez Konturu)

`Md` Szablon jest taki sam jak `Toc` , oba służą do renderowania pojedynczego pliku `Markdown` . Jednakże `Md` szablon nie wyświetla konturu na pasku bocznym.

Możesz zmodyfikować `use: Toc` w powyższej konfiguracji na `use: Md` , uruchomić `i18n.site` ponownie w katalogu `md` , a następnie odwiedzić adres URL podglądu rozwoju, aby obserwować zmiany na stronie głównej.

### Domyślne Ładowanie Bez Ścieżki Konfiguracji

Jeśli prefiks ścieżki, do której uzyskiwany jest dostęp, nie jest skonfigurowany w `nav:` plik `MarkDown` odpowiadający ścieżce zostanie domyślnie załadowany i wyrenderowany przy użyciu szablonu `Md` .

Na przykład, jeśli odwiedzisz `/test` i skonfigurowano `nav:` bez tej ścieżki, a językiem strony jest angielski (kod `en` ), szablon zostanie domyślnie załadowany `/en/test.md` i wyrenderowany przy użyciu `Md` .

Jeśli `/en/test.md` ten plik nie istnieje, zostanie wyświetlona domyślna `404` strona.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Szablon Wieloplikowy

W pliku konfiguracyjnym:

```
  - i18n: blog
    use: Doc
```

Wskazuje użycie `Doc` do renderowania szablonu.

`Doc` Szablon obsługuje integrację wielu `MarkDown` w celu wygenerowania konspektów dokumentów dla jednego lub wielu projektów.

#### Pojedynczy Projekt (Wiele Plików)

`blog` w powyższym jest trybem pojedynczego projektu `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Gdy Adres url Jest Pusty, Domyślnie Przyjmuje Wartość i18n

Jeśli nie wpiszesz `url` , `url` na wartość `i18n` . Ta reguła obowiązuje również dla innych szablonów.

Powyższa metoda zapisu jest równoznaczna z `url: blog` a odpowiadający jej plik to `en/blog/TOC` .

#### Wiele Projektów

`.i18n/conf.yml` Konfiguracja w `i18n:doc` to tryb wielu projektów.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Tutaj `menu: NB demo1,demo2` oznacza użycie `NB` do renderowania menu rozwijanego.

`NB` , to skrót od `Name Breif` , wskazujący, że w rozwijanym menu może zostać wyświetlona nazwa i hasło projektu.

Po `NB` następuje przekazywany do niego parametr `demo1,demo2` .
Uwaga : ** Nie powinno być spacji ** przed i po przecinku `,` w `demo1,demo2`

Dla powyższych parametrów odpowiadający plik indeksu katalogu to:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Indeks Spisu Treści TOC

`i18n.site` Uruchomi `js` wtyczkę `.i18n/hook/after.tran/TOC.js` w magazynie demonstracyjnym, aby odczytać plik indeksu katalogu `doc` odpowiadający konfiguracji szablonu `TOC` w celu wygenerowania `json` konspektu katalogu.

Jeśli używasz szablonu `doc` , musisz mieć tę wtyczkę.

Jeśli inicjujesz projekt `i18n.site` z pustego folderu, pamiętaj o skopiowaniu `.i18n` z projektu demonstracyjnego do swojego katalogu.

`Doc` wygeneruje spis treści w oparciu o wygenerowany `json` .

##### Szczegółowe Wyjaśnienie Treści

`en/blog/TOC` Treść jest następująca :

```
README.md

news/README.md
  news/begin.md
```

##### Użyj Wcięcia, Aby Wskazać Poziomy

`en/blog/TOC` `README.md` w pierwszej linii odpowiada `i18n.site` na poniższym obrazku, czyli nazwie projektu.

Kolejne dwie linie są pokazane na zrzucie ekranu poniżej.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` koresponduje z `News` ,
`news/begin.md` koresponduje z `Our Product is Online !`

`TOC` Plik ma wcięcie, aby wskazać hierarchiczną relację konturu i obsługuje wcięcia wielopoziomowe.

##### Poziom Nadrzędny Zapisuje Tylko Tytuł, a Nie Treść.

Jeśli istnieje wiele poziomów wcięć, poziom nadrzędny zapisuje tylko tytuł, a nie treść. W przeciwnym razie typografia zostanie zaburzona.

##### Projekt README.md 

`README.md` projektu, możesz na przykład napisać treść w `en/demo2/README.md` .

Należy pamiętać, że zawartość tego pliku nie zawiera spisu treści, dlatego zaleca się ograniczenie długości i napisanie krótkiego wstępu.

###### Hasło Projektu

Jak widać, `Deme Two` Poniżej rozwijanego menu i nazwy projektu w katalogu znajduje się jego hasło : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

Odpowiada : pierwszej linijce `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Projekt `README.md` Treść po pierwszym dwukropku `:` w tytule pierwszego poziomu będzie traktowana jako hasło projektu.

Użytkownicy z Chin, Japonii i Korei pamiętajcie, że zamiast dwukropka o pełnej szerokości należy używać dwukropka `:`

##### Jak Zbiorczo Przenieść Spis Treści?

`TOC` Plik należy umieścić w katalogu języka źródłowego.

Na przykład, jeśli językiem źródłowym jest chiński, wówczas `TOC` powyżej ma wartość `zh/blog/TOC` .

Jeśli język źródłowy zostanie zmodyfikowany, należy zbiorczo przenieść `TOC` z określonego języka w projekcie na inny język.

Możesz odwołać się do następujących poleceń:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Zmodyfikuj `en/` i `zh/` w powyższym poleceniu na swój kod języka.


