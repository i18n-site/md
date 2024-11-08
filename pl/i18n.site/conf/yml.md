# .i18n/conf.yml

Plik konfiguracyjny dla `i18n.site` ma `.i18n/conf.yml` , a zawartość jest następująca :

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

Wśród nich `upload` do `ext:` elementu konfiguracji oznacza, że podczas publikowania zostaną przesłane tylko `.md` .

## Górna Nawigacja Nawigacyjna

`nav:` opcji konfiguracyjnych, odpowiadających menu nawigacyjnemu znajdującemu się na górze strony głównej.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Wśród nich `i18n: home` odpowiada `home: Home` w `en/i18n.yml` (gdzie `en` to język źródłowy tłumaczenia projektu).

Treść `en/i18n.yml` to tekst wyświetlany w menu nawigacyjnym, który w konfiguracji zostanie przetłumaczony zgodnie z `fromTo` , np. przetłumaczony na `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po zakończeniu tłumaczenia możesz zmodyfikować wartość tłumaczenia `yml` , ale nie dodawaj ani nie usuwaj klucza tłumaczenia `yml` .

### `use: Toc` Szablon Dokumentu Z Konspektem

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` oznacza renderowanie przy użyciu szablonu `Toc` , co oznacza renderowanie pojedynczego szablonu `Markdown` .

`TOC` to skrót od `Table of Contents` Po wyrenderowaniu tego szablonu kontur tego pliku `Markdown` zostanie wyświetlony na pasku bocznym.

`url:` oznacza ścieżkę pliku `Markdown` ( `/` odpowiada katalogowi głównemu `/README.md` , ta nazwa pliku wymaga dużego i małego przedrostka).

### `use: Md` Szablon Dokumentu Bez Konspektu

Szablon `Md` i szablon `Toc` są takie same i oba służą do renderowania pojedynczego pliku `Markdown` . Ale szablon `Md` nie pokazuje konturu na pasku bocznym.

Możesz zmodyfikować `use: Toc` w powyższej konfiguracji na `use: Md` , ponownie uruchomić `i18n.site` w katalogu `md` , a następnie odwiedzić adres URL podglądu programowania, aby obserwować zmiany na stronie głównej.

### `use: Blog` Szablony Blogów

Szablon bloga wyświetla listę artykułów (tytułów i abstraktów) według czasu publikacji.

[→ Kliknij tutaj, aby poznać konkretną konfigurację](/i18n.site/conf/blog)

### `use: Doc` Szablonów Dokumentów Plikowych

W pliku konfiguracyjnym:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Wskazuje użycie `Doc` do renderowania szablonu.

`Doc` obsługuje integrację wielu `MarkDown` w celu wygenerowania konspektów dokumentów dla jednego lub wielu projektów.

#### Wiele Projektów I Wiele Plików

Konfiguracja `.i18n/conf.yml` w `i18n:doc` to tryb renderowania wielu projektów i wielu plików.

Tutaj `menu: NB demo1,demo2` oznacza użycie szablonu `NB` do renderowania menu rozwijanego.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , czyli skrót od `Name Breif` , oznacza, że w rozwijanym menu może zostać wyświetlona nazwa i hasło projektu.

Po `NB` następuje przekazany do niego parametr `demo1,demo2` .

Uwaga : ** Nie powinno być spacji ** przed i po przecinku `,` w `demo1,demo2` .

Odpowiedni plik indeksu katalogów dla powyższych parametrów to:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Jeden Projekt, Wiele Plików

Jeśli masz tylko jeden projekt, możesz go skonfigurować w następujący sposób.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Pojedynczy projekt z wieloma plikami nie obsługuje konfigurowania `url` jako ścieżki głównej `/`
> Jeśli __conf.yml → nav:__ Nie skonfigurowano ścieżki głównej, podczas uzyskiwania dostępu do strony głównej witryny zostanie ona automatycznie przepisana na pierwszy adres URL w konfiguracji `nav:` .
> Projekt ten ma na celu lepsze rozróżnienie dokumentów projektu, blogów i innych treści poprzez katalogi.
> Zaleca się użycie jednego pliku i jednej strony jako strony głównej.

> [!TIP]
> Jeśli `url` nie zostanie zapisane, `url` przyjmuje wartość domyślną `i18n` Ta reguła obowiązuje również w przypadku innych szablonów.

#### Indeks Spisu Treści TOC

Jeżeli w konfiguracji włączony jest szablon `use: Doc` , należy włączyć wtyczkę `i18n.addon/toc` w `.i18n/conf.yml` Konfiguracja wygląda następująco :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` automatycznie zainstaluje i uruchomi tę wtyczkę, odczyta `TOC` plik indeksu katalogu i wygeneruje `json` zarys katalogu.

Jeśli jest to pojedynczy projekt z wieloma plikami, katalog główny `TOC` jest katalogiem odpowiadającym `url:` w katalogu języka źródłowego. Na przykład, jeśli językiem źródłowym jest chiński: plik odpowiadający `url: flashduty` to `zh/flashduty/TOC` .

Jeśli jest to wiele projektów i wiele plików, nie ma potrzeby konfigurowania `url:` Katalog główny `TOC` jest katalogiem odpowiadającym wartości `i18n` .

##### Szczegółowe Wyjaśnienie Treści

`en/blog/TOC` jest następująca :

```
README.md

news/README.md
  news/begin.md
```

##### Użyj Wcięcia, Aby Wskazać Poziomy

`README.md` w pierwszym rzędzie liczby `en/blog/TOC` powyżej odpowiada cyfrze `i18n.site` na poniższym obrazku, która jest nazwą projektu.

Kolejne dwie linie są pokazane na zrzucie ekranu poniżej.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odpowiada `News` ,
`news/begin.md` odpowiada `Our Product is Online !`

`TOC` plików ma wcięcia, aby wskazać hierarchiczną relację konspektu, obsługują wielopoziomowe wcięcia i komentarze do linii zaczynające się od `# ` .

##### Poziom Nadrzędny Zapisuje Tylko Tytuł, a Nie Treść.

Jeśli istnieje wiele poziomów wcięć, poziom nadrzędny zapisuje tylko tytuł, a nie treść. W przeciwnym razie typografia zostanie zaburzona.

##### Projekt README.md

Treść można zapisać w pozycji `README.md` , np. `en/demo2/README.md` .

Należy pamiętać, że zawartość tego pliku nie przedstawia zarysu spisu treści, dlatego zaleca się ograniczenie długości i napisanie krótkiego wstępu.

###### Hasło Projektu

Możesz zobaczyć `Your Project slogan` że `Deme Two` ma swój slogan projektu pod rozwijanym menu i nazwą projektu w katalogu : .

![](https://p.3ti.site/1721276842.avif)

Odpowiada to pierwszemu wierszowi `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Treść po pierwszym dwukropku `:` tytułu projektu pierwszego poziomu `README.md` będzie traktowana jako hasło projektu.

Użytkownicy z Chin, Japonii i Korei powinni pamiętać, że zamiast dwukropka o pełnej szerokości należy używać dwukropka `:` .

##### Jak Zbiorczo Przenieść Spis Treści?

`TOC` plików należy umieścić w katalogu języka źródłowego.

Na przykład, jeśli językiem źródłowym jest chiński, wówczas `TOC` powyżej to `zh/blog/TOC` .

Jeśli język źródłowy zostanie zmodyfikowany, należy wsadowo przenieść `TOC` plików określonego języka w projekcie do innego języka.

Możesz odwołać się do następujących poleceń:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Zmodyfikuj `en/` i `zh/` w powyższym poleceniu na kod języka.

### Domyślne Ładowanie Bez Ścieżki Konfiguracji

W przypadku dostępu do określonej ścieżki, jeśli prefiks ścieżki nie jest skonfigurowany w `nav:` , plik `MarkDown` odpowiadający ścieżce zostanie domyślnie załadowany i wyrenderowany przy użyciu szablonu `Md` .

Na przykład, jeśli uzyskano dostęp `/test` i skonfigurowano `nav:` bez przedrostka tej ścieżki, a bieżącym językiem przeglądania jest angielski (kod `en` ), `/en/test.md` zostanie domyślnie załadowane i wyrenderowane przy użyciu szablonu `Md` .

Jeśli `/en/test.md` ten plik nie istnieje, zostanie wyświetlona domyślna strona `404` .

<img src="//p.3ti.site/1721184299.avif" style="width:360px">