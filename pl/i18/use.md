# Zainstaluj i używaj

## W systemie Windows najpierw zainstaluj Git Bash

windows System, [kliknij tutaj, aby najpierw pobrać i zainstalować `git bash`](https://git-scm.com/download/win) .

Wykonuj kolejne operacje w `git bash`.

## Instalacja

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Skonfiguruj token tłumaczenia

Odwiedź [i18n.site/token](//i18n.site/token) i skopiuj token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Utwórz plik `~/.config/i18n.site.yml`, wklejając skopiowaną treść, która powinna wyglądać następująco:

```
token: YOUR_API_TOKEN
```

Dodatkowo, w [i18n.site/payBill](//i18n.site/payBill) powiąż kartę kredytową do płatności (nie jest wymagane doładowanie, strona automatycznie obciąży koszty według zużycia, [zobacz stronę główną, aby zapoznać się z cenami](/#price)).

## Użycie

### Projekt demonstracyjny

Aby nauczyć się konfiguracji tłumaczenia `i18`, proszę zapoznać się z projektem demonstracyjnym [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18).

Użytkownicy z Chin mogą sklonować [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po sklonowaniu przejdź do katalogu i uruchom `i18`, aby zakończyć tłumaczenie.

### Struktura katalogów

Struktura katalogu szablonu magazynu wygląda następująco:

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Pliki demonstracyjne w katalogu `en` są tylko przykładem i mogą zostać usunięte.

### Uruchomienie tłumaczenia

Wejdź do katalogu i uruchom `i18`, aby przetłumaczyć.

Program wygeneruje również folder `.i18n/data`, który należy dodać do repozytorium.

Po przetłumaczeniu nowego pliku, w tym katalogu zostanie utworzony nowy plik danych. Pamiętaj, aby dodać go do repozytorium za pomocą `git add .`.

## Plik konfiguracyjny

`.i18n/conf.yml` to plik konfiguracyjny narzędzia do tłumaczenia wiersza poleceń `i18`

Treść wygląda następująco:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Źródłowy język & język tłumaczenia

W pliku konfiguracyjnym podrzędny `fromTo`:

`en` to język źródłowy, a `zh ja ko de fr` to języki docelowe tłumaczenia.

Kody języków można znaleźć na [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Na przykład, aby przetłumaczyć chiński na angielski, zmodyfikuj tę linię na `zh: en`.

Jeśli chcesz przetłumaczyć na wszystkie obsługiwane języki, pozostaw puste pole po `:`. Na przykład:

```
i18n:
  fromTo:
    en:
```

Możesz skonfigurować różne `fromTo` dla różnych podkatalogów / Demonstracja jest zapisana w następujący sposób :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

W tej konfiguracji, językiem źródłowym dla tłumaczenia katalogu `blog` jest `zh`, natomiast dla pliku `blog/your_file_name.md` językiem źródłowym jest `ja`.

### Ignorowanie plików

Domyślnie wszystkie pliki z rozszerzeniami `.md` i `.yml` w katalogu języka źródłowego zostaną przetłumaczone.

Jeśli chcesz zignorować niektóre pliki (np. niedokończone szkice), użyj pola `ignore` do konfiguracji.

`ignore` używa podobnej składni [globset](https://docs.rs/globset/latest/globset/#syntax) jak `.gitignore`.

Na przykład, `_*` w pliku konfiguracyjnym oznacza, że pliki zaczynające się na `_` nie zostaną przetłumaczone.

## Zasady tłumaczenia

### Redaktorzy tłumaczeń nie powinni dodawać ani usuwać wierszy

Tłumaczenie można edytować. Po zmodyfikowaniu oryginału i ponownym przetłumaczeniu maszynowym, ręczne zmiany w tłumaczeniu nie zostaną nadpisane (jeśli oryginalny tekst nie został zmodyfikowany).

> [!WARN]
> Wiersze tłumaczenia muszą odpowiadać wierszom tekstu oryginalnego. Oznacza to, że podczas tworzenia tłumaczenia nie można dodawać ani usuwać wierszy. W przeciwnym razie może to spowodować zamieszanie w pamięci podręcznej edycji tłumaczeń.

Jeśli wystąpią problemy, zapoznaj się z [rozwiązaniami w często zadawanych pytaniach](/i18/qa#H1)

### `YAML` Tłumaczeń

Narzędzie wiersza poleceń znajdzie wszystkie pliki kończące się na `.yml` w katalogu języka źródłowego i przetłumaczy je.

* Pamiętaj, że nazwa pliku musi kończyć się na `.yml` (a nie `.yaml`).

Narzędzie tłumaczy jedynie wartości słownikowe w `.yml`, a nie klucze.

Na przykład `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

zostanie przetłumaczone na `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Tłumaczenie `YAML` można również modyfikować ręcznie (ale nie należy dodawać ani usuwać kluczy ani linii w tłumaczeniu).

9	W oparciu o tłumaczenie `YAML` można łatwo tworzyć międzynarodowe rozwiązania dla różnych języków programowania.

## Zaawansowane użycie

### Tłumaczenie podkatalogów

Dopóki utworzysz `.i18n/conf.yml` (nie musisz za każdym razem zaczynać od szablonu projektu demonstracyjnego), `i18` będzie działać poprawnie.

Narzędzie wiersza poleceń znajdzie wszystkie konfiguracje `.i18n/conf.yml` w podkatalogach i przetłumaczy je.

Projekty korzystające z architektury [monorepo](//monorepo.tools) mogą dzielić pliki językowe na podkatalogi.

![](https://p.3ti.site/1719910016.avif)

### Niestandardowy katalog instalacyjny

Domyślnie zainstalowany na `/usr/local/bin`.

Jeśli `/usr/local/bin` nie ma uprawnień do zapisu, zostanie zainstalowany na `~/.bin`.

Ustawienie zmiennej środowiskowej `TO` może na przykład zdefiniować katalog instalacyjny:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```