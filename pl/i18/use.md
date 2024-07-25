# Zainstaluj I Używaj

## Najpierw Zainstaluj System windows git bash

windows System, [kliknij tutaj, aby najpierw pobrać i zainstalować `git bash`](https://git-scm.com/download/win)

Uruchom kolejne operacje w `git bash`

## Zainstalować

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Skonfiguruj Token Tłumaczenia

Odwiedź [i18n.site/token](//i18n.site/token) Kliknij, aby skopiować token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Utwórz `~/.config/i18n.site.yml` wklej do niego skopiowaną treść, treść jest następująca:

```
token: YOUR_API_TOKEN
```

Ponadto musisz [i18n.site/payBill](//i18n.site/payBill) kartę kredytową w celu płatności (nie jest wymagane doładowanie, witryna automatycznie potrąci opłaty w zależności od wykorzystania, [zobacz stronę główną, aby zapoznać się z cenami](/#price) ).

## Używać

### Projekt Demonstracyjny

Aby poznać konfigurację tłumaczenia `i18` zapoznaj się z projektem demonstracyjnym [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Użytkownicy w Chinach mogą klonować [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po sklonowaniu wejdź do katalogu i uruchom `i18` , aby dokończyć tłumaczenie.

### Struktura Katalogów

Struktura katalogu magazynu szablonów jest następująca

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Katalog `en` zawiera przetłumaczone pliki demonstracyjne, które stanowią tylko przykład i można je usunąć.

### Uruchom Tłumaczenie

Wejdź do katalogu i uruchom `i18` , aby przetłumaczyć.

### Dodaj Pliki Do Repozytorium

Oprócz tłumaczenia program wygeneruje również następujące pliki, prosimy o dodanie ich do repozytorium.

```
.i18n/hash
.i18n/cache/.gitignore
```

Wśród : zawartość `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Oznacza to ignorowanie wszystkich plików w katalogu `.i18n/cache/` (z wyjątkiem `.i18n/cache/.gitignore` ).

Jeśli Twoje oprogramowanie do kontroli wersji nie jest `git` , zignoruj ​​je zgodnie z tą konfiguracją.

## Plik Konfiguracyjny

`.i18n/conf.yml` Jest to plik konfiguracyjny narzędzia do tłumaczenia wiersza `i18`

Treść jest następująca:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Język Źródłowy & Język Tłumaczenia

W pliku konfiguracyjnym podrzędne `fromTo`

`en` to język źródłowy, `zh ja ko de fr` to język docelowy tłumaczenia.

Kod języka zobacz [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Na przykład, jeśli chcesz przetłumaczyć chiński na angielski, przepisz tę linię `zh: en`

Jeśli chcesz przetłumaczyć na wszystkie obsługiwane języki, zostaw puste pole po `:` Na przykład

```
i18n:
  fromTo:
    en:
```

### Zignoruj ​​Plik

Domyślnie wszystkie pliki zaczynające się od `.md` i `.yml` w katalogu języka źródłowego zostaną przetłumaczone.

Jeśli chcesz zignorować określone pliki i nie tłumaczyć ich (np. niedokończone wersje robocze), możesz użyć konfiguracji pola `ignore` .

`ignore` Używa składni podobnej do `.gitignore` [globset](https://docs.rs/globset/latest/globset/#syntax)

Przykładowo w powyższym pliku konfiguracyjnym `_* ` oznacza, że ​​pliki zaczynające się od `_` nie będą tłumaczone.

## Zasady Tłumaczeń

### Redaktorzy Tłumaczeń Nie Powinni Dodawać Ani Usuwać Wierszy

Tłumaczenie jest edytowalne. Zmodyfikuj oryginalny tekst i przetłumacz go ponownie maszynowo, ręczne zmiany w tłumaczeniu nie zostaną nadpisane (jeśli ten akapit oryginalnego tekstu nie został zmodyfikowany).

Należy jednak pamiętać, że linie tłumaczenia i tekstu oryginalnego muszą odpowiadać jednemu. Oznacza to, że nie dodawaj ani nie usuwaj wierszy podczas kompilowania tłumaczenia. W przeciwnym razie spowoduje to zamieszanie w pamięci podręcznej edycji tłumaczeń.

Jeśli coś pójdzie nie tak, zapoznaj się z [często zadawanymi pytaniami, aby znaleźć rozwiązania.](/i18/qa#H1)

### `YAML` Tłumaczyć

Narzędzie wiersza poleceń znajdzie wszystkie pliki kończące się na `.yml` w katalogu plików języka źródłowego i przetłumaczy je.

* Pamiętaj, że przyrostkiem nazwy pliku musi być `.yml` (a nie `.yaml` ).

Narzędzie tłumaczy tylko wartości słownikowe w `.yml` , a nie klucze słownika.

Na przykład `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

zostanie przetłumaczone jako `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Tłumaczenie `YAML` można także modyfikować ręcznie (ale nie należy dodawać ani usuwać kluczy ani linii w tłumaczeniu).

W oparciu o `YAML` Translation możesz łatwo budować międzynarodowe rozwiązania dla różnych języków programowania.

## Zaawansowane Użycie

### Podkatalog Tłumaczeń

Tak długo, jak tworzysz `.i18n/conf.yml` (nie musisz za każdym razem zaczynać od szablonu projektu demonstracyjnego), `i18` będzie działać dobrze.

Narzędzie wiersza poleceń znajdzie konfigurację `.i18n/conf.yml` we wszystkich podkatalogach i przetłumaczy ją.

Projekty korzystające z architektury [monorepo](//monorepo.tools) mogą dzielić pliki językowe na podkatalogi.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Niestandardowy Katalog Instalacyjny

Domyślnie zostanie zainstalowany `/usr/local/bin`

Jeśli `/usr/local/bin` nie ma uprawnień do zapisu , zostanie zainstalowany na `~/.bin` .

Ustaw zmienne środowiskowe `TO` Możesz na przykład zdefiniować katalog instalacyjny :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
