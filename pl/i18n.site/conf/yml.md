# .i18n/conf.yml

Plik konfiguracyjny dla `i18n.site` to `.i18n/conf.yml`, a jego zawartość przedstawia się następująco:

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

Wśród nich, opcja `upload` z `ext:` oznacza, że podczas publikacji będą wysyłane tylko pliki `.md`.

## Górna nawigacja

Opcje konfiguracyjne `nav:` odpowiadają górnemu menu nawigacyjnemu na stronie głównej.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Wśród nich `i18n: home` odpowiada `home: Home` w pliku `en/i18n.yml` (gdzie `en` jest językiem źródłowym projektu).

Treść pliku `en/i18n.yml` to tekst wyświetlany w menu nawigacyjnym, który zostanie przetłumaczony zgodnie z konfiguracją `fromTo`, na przykład na `zh/i18n.yml`.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Po zakończeniu tłumaczenia można zmodyfikować wartości w pliku `yml`, ale nie należy dodawać ani usuwać kluczy `yml`.

### `use: Toc` – szablon jednego pliku z tabelą treści

W konfiguracji `nav`:

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` oznacza, że szablon `Toc` będzie używany do renderowania, co oznacza renderowanie pojedynczego pliku `Markdown`.

`TOC` to skrót od `Table of Contents` – po wyrenderowaniu szablonu, kontur pliku `Markdown` będzie wyświetlany w panelu bocznym.

`url:` oznacza ścieżkę do pliku `Markdown` ( `/` odpowiada głównemu katalogowi `/README.md`, nazwa pliku powinna mieć dużą literę na początku i małą na końcu).

### `use: Md` – szablon jednego pliku bez tabeli treści

Szablon `Md` jest podobny do szablonu `Toc`, oba służą do renderowania pojedynczego pliku `Markdown`, ale szablon `Md` nie wyświetla tabeli treści w panelu bocznym.

Można zmienić `use: Toc` na `use: Md` w powyższej konfiguracji, uruchomić `i18n.site` ponownie w katalogu `md` i odwiedzić adres URL podglądu, aby zaobserwować zmiany na stronie głównej.

### `use: Blog` — szablon blogu

Szablon bloga wyświetla listę artykułów (tytuły i abstrakty) uporządkowaną według daty publikacji.

[→ Kliknij tutaj, aby dowiedzieć się więcej o konfiguracji](/i18n.site/conf/blog)

### `use: Doc` – szablon dokumentu wieloplikowego

W pliku konfiguracyjnym:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Wskazuje użycie `Doc` do renderowania szablonu.

Szablon `Doc` obsługuje integrację wielu plików `Markdown`, aby generować spis treści dla jednego lub wielu projektów.

#### Wiele projektów i wiele plików

Konfiguracja `.i18n/conf.yml` w `i18n:doc` dotyczy trybu renderowania wielu projektów i wielu plików.

Tutaj `menu: NB demo1,demo2` oznacza, że szablon `NB` będzie używany do renderowania rozwijanego menu.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` to skrót od `Name Brief`, co oznacza, że rozwijane menu może wyświetlać nazwę i slogan projektu.

`NB` jest followed by the parameter `demo1,demo2`.

Uwaga: **Nie powinno być spacji** przed i po przecinku `,` w `demo1,demo2`.

Dla powyższych parametrów odpowiednik pliku indeksu katalogu to:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Jeden projekt i wiele plików

Jeśli masz tylko jeden projekt, możesz go skonfigurować w następujący sposób.

```
  - i18n: xxx
    use: Doc
```

##### Gdy Adres url Jest Pusty, Domyślnie Przyjmuje Wartość i18n

Jeśli `url` nie zostanie zapisane, `url` przyjmuje wartość domyślną `i18n` Ta reguła obowiązuje również w przypadku innych szablonów.

Powyższy zapis jest równoważny z `url: xxx`, a odpowiednik pliku to `en/xxx/TOC`.

#### Indeks Spisu Treści TOC

`i18n.site` uruchomi wtyczkę `js` `.i18n/hook/after.tran/TOC.js` w demonstracyjnym magazynie, aby odczytać plik indeksu `TOC` odpowiadający konfiguracji szablonu `doc`, aby wygenerować `json` spisu treści katalogów.

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

Pierwszy rząd `README.md` w `en/blog/TOC` odpowiada `i18n.site` na poniższym obrazku, co jest nazwą projektu.

Dwa kolejne rzędy, jak pokazano na zrzucie ekranu poniżej.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` odpowiada `News`
`news/begin.md` odpowiada `Our Product is Online !`

Plik `TOC` używa wcięć, aby przedstawić hierarchię elementów konspektu, obsługując wielopoziomowe wcięcia oraz linie zaczynające się od `# ` jako komentarze.

##### Poziomy nadrzędne zapisują tylko tytuły, nie zaś treści

W przypadku wielu poziomów wcięć, poziomy nadrzędne zapisują tylko tytuły, aby uniknąć zamieszania w układzie.

##### Projekt README.md

W pliku `README.md` projektu, takim jak `en/demo2/README.md`, można wpisać treść.

Pamiętaj, że zawartość tego pliku nie wyświetla spisu treści, więc zaleca się krótkie wprowadzenie.

###### Slogan projektu

Widać, że `Deme Two` ma slogan projektu `Your Project slogan` pod rozwijanym menu i nazwą projektu w spisie treści.

![](https://p.3ti.site/1721276842.avif)

Odpowiada to pierwszemu wierszowi `en/demo2/README.md`:

```
# Demo Two : Your Project slogan
```

Treść po pierwszym dwukropku `:` w tytule pierwszego poziomu `README.md` będzie traktowana jako slogan projektu.

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

Zmodyfikuj `en/` i `zh/` w powyższym poleceniu na swój kod języka.

### Domyślne ładowanie bez ścieżki konfiguracji

Jeśli dostęp do określonej ścieżki nie ma skonfigurowanego prefiksu w `nav:`, domyślnie załaduje i wyrenderuje plik `Markdown` odpowiadający ścieżce za pomocą szablonu `Md`.

Na przykład, jeśli uzyskasz dostęp do `/test`, a `nav:` nie ma skonfigurowanego prefiksu dla tej ścieżki, a bieżącym językiem przeglądania jest angielski (kod `en`), domyślnie załaduje `/en/test.md` i wyrenderuje go za pomocą szablonu `Md`.

Jeśli plik `/en/test.md` nie istnieje, wyświetli domyślną stronę `404`.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">