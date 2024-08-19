# Zainstaluj i używaj

## Najpierw zainstaluj na systemie Windows Git Bash

System Windows: [kliknij tutaj, aby najpierw pobrać i zainstalować `git bash`](https://git-scm.com/download/win).

Uruchom kolejne operacje w `git bash`.

## Instalacja

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Skonfiguruj token tłumaczenia

Odwiedź [i18n.site/token](//i18n.site/token) i kliknij, aby skopiować token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Utwórz plik `~/.config/i18n.site.yml`, wklejając do niego skopiowaną treść, która powinna wyglądać następująco:

```
token: YOUR_API_TOKEN
```

Ponadto, w [i18n.site/payBill](//i18n.site/payBill) zablokuj kartę kredytową do płatności (nie jest wymagane doładowanie, strona automatycznie obciąży koszty według zużycia, [ceny na stronie głównej](/#price)).

## Użycie

### Projekt demonstracyjny

Aby nauczyć się konfiguracji tłumaczenia `i18`, odnieś się do projektu demonstracyjnego [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18).

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

### Uruchom tłumaczenie

Przejdź do katalogu i uruchom `i18`, aby przetłumaczyć.

### Dodaj pliki do repozytorium

Program wygeneruje również następujące pliki, które należy dodać do repozytorium.

```
.i18n/hash
.i18n/cache/.gitignore
```

Zawartość pliku `.i18n/cache/.gitignore` wygląda następująco:

```
**/*
!**/.gitignore
```

Oznacza to, że wszystkie pliki w katalogu `.i18n/cache/` (z wyjątkiem `.i18n/cache/.gitignore`) są ignorowane.

Jeśli Twoje oprogramowanie do kontroli wersji nie jest `git`, skonfiguruj je zgodnie z tą konfiguracją.

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

`en` to język źródłowy, `zh ja ko de fr` to języki docelowe tłumaczenia.

Kody języków zobacz na [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE).

Na przykład, aby przetłumaczyć chiński na angielski, zmodyfikuj tę linię na `zh: en`.

Jeśli chcesz przetłumaczyć na wszystkie obsługiwane języki, pozostaw puste po `:`. Na przykład:

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

W tej tabeli konfiguracyjnej językiem źródłowym tłumaczenia katalogu `blog` jest `zh`, a językiem źródłowym tłumaczenia `blog/your_file_name.md` jest `ja`.

### Ignorowanie plików

Domyślnie przetłumaczone zostaną wszystkie pliki w katalogu języka źródłowego zakończone na `.md` i `.yml`.

Jeśli chcesz zignorować niektóre pliki i nie przetłumaczyć ich (np. niedokończone szkice), możesz to skonfigurować za pomocą pola `ignore`.

`ignore` używa podobnej składni [globset](https://docs.rs/globset/latest/globset/#syntax) jak `.gitignore`.

Na przykład, `_*` oznacza, że pliki zaczynające się na `_` nie będą przetłumaczone.

## Zasady tłumaczenia

### Redaktorzy tłumaczeń nie powinni dodawać ani usuwać wierszy

Tłumaczenie można edytować. Po zmodyfikowaniu oryginalnego tekstu i ponownym przetłumaczeniu maszynowym, ręczne zmiany w tłumaczeniu nie zostaną nadpisane (jeśli oryginalny tekst tego akapitu nie został zmodyfikowany).

Jednakże, tłumaczenie i oryginalny tekst muszą być wierszami odpowiednikami. Oznacza to, że nie dodawaj ani nie usuwaj wierszy podczas tłumaczenia. W przeciwnym razie może to spowodować zamieszanie w pamięci podręcznej edycji tłumaczeń.

Jeśli wystąpią problemy, odnieś się do [często zadawanych pytań, aby znaleźć rozwiązania](/i18/qa#H1)

### Tłumaczenie `YAML`

Narzędzie wiersza poleceń znajdzie wszystkie pliki kończące się na `.yml` w katalogu języka źródłowego i przetłumaczy je.

* Należy pamiętać, że przyrostek nazwy pliku musi być `.yml` (a nie `.yaml`).

Narzędzie tłumaczy jedynie wartości słownikowe w `.yml`, a nie klucze słownika.

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

Tłumaczenia `YAML` można również ręcznie modyfikować (ale nie należy dodawać ani usuwać kluczy ani linii w tłumaczeniu).

8	Narzędzie tłumaczy wyłącznie wartości słownikowe w `YAML`, a nie klucze słownika.

## Tłumaczenie podkatalogów

### Podkatalogi tłumaczeń

Dopóki zostanie utworzony plik `.i18n/conf.yml` (nie jest wymagane, aby zawsze zaczynać od szablonu projektu demonstracyjnego), `i18` będzie działał poprawnie.

Narzędzie wiersza poleceń znajdzie pliki konfiguracyjne `.i18n/conf.yml` we wszystkich podkatalogach i przetłumaczy je.

Projekty z architekturą [monorepo](//monorepo.tools) mogą przechowywać pliki językowe w podkatalogach.

![](https://p.3ti.site/1719910016.avif)

### Niestandardowy katalog instalacyjny

Domyślnie zostanie zainstalowany w `/usr/local/bin`.

W przypadku braku uprawnień do zapisu w `/usr/local/bin`, zostanie zainstalowany w `~/.bin`.

Ustawienie zmiennej środowiskowej `TO` może na przykład zdefiniować katalog instalacyjny:

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```