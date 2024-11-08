# Zainstaluj I Używaj

## Najpierw Zainstaluj System windows git bash

windows System, [kliknij tutaj, aby najpierw pobrać i zainstalować `git bash`](https://git-scm.com/download/win) .

Uruchom kolejne operacje w `git bash` .

## Zainstalować

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Skonfiguruj Token Tłumaczenia

Odwiedź [i18n.site/token](//i18n.site/token) Kliknij, aby skopiować token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Utwórz `~/.config/i18n.site.yml` , wklej do niego skopiowaną treść, treść jest następująca:

```
token: YOUR_API_TOKEN
```

Ponadto musisz powiązać kartę płatniczą w [i18n.site/payBill](//i18n.site/payBill) (nie jest wymagane doładowanie, witryna automatycznie potrąci opłaty w zależności od wykorzystania, [ceny znajdziesz na stronie głównej](/#price) ).

## Używać

### Projekt Demonstracyjny

Aby zapoznać się z konfiguracją tłumaczenia `i18` , zapoznaj się z projektem demonstracyjnym [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Użytkownicy w Chinach mogą klonować [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Po sklonowaniu wejdź do katalogu i uruchom `i18` , aby zakończyć tłumaczenie.

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

Przetłumaczone pliki demonstracyjne w katalogu `en` stanowią jedynie przykład i można je usunąć.

### Uruchom Tłumaczenie

Wejdź do katalogu i uruchom `i18` , aby przetłumaczyć.

Oprócz tłumaczenia program wygeneruje także folder `.i18n/data` , prosimy o dodanie go do repozytorium.

Po przetłumaczeniu nowego pliku w tym katalogu zostanie wygenerowany nowy plik danych. Pamiętaj o dołączeniu `git add . ` .

## Plik Konfiguracyjny

`.i18n/conf.yml` to plik konfiguracyjny narzędzia do tłumaczenia wiersza poleceń `i18`

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

W pliku konfiguracyjnym podrzędny `fromTo` :

`en` to język źródłowy, `zh ja ko de fr` to język docelowy tłumaczenia.

Kod języka zobacz [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Na przykład, jeśli chcesz przetłumaczyć chiński na angielski, przepisz tę linię `zh: en` .

Jeśli chcesz przetłumaczyć na wszystkie obsługiwane języki, zostaw puste po `:` . Na przykład

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

W tej tabeli konfiguracyjnej językiem źródłowym tłumaczenia katalogu `blog` jest `zh` , a językiem źródłowym tłumaczenia katalogu `blog/your_file_name.md` jest `ja` .

### Wielojęzyczne Obrazy/Linki

Gdy adresy URL w obrazach i linkach w `replace:` i `MarkDown` (oraz atrybuty `src` i `href` osadzonego `HTML` ) są skonfigurowane na `.i18n/conf.yml` z tym przedrostkiem, kod języka źródłowego w adresie URL zostanie zastąpiony kodem języka tłumaczenia ( [język lista kodów](/i18/LANG_CODE) ).

Na przykład Twoja konfiguracja wygląda następująco:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` to słownik, klucz to prefiks adresu URL, który ma zostać zastąpiony, a wartość to reguła zastępowania.

Znaczenie zastąpienia reguły `ko de uk>ru zh-TW>zh >en` powyżej jest takie, że `ko de` używa obrazka własnego kodu języka, `zh-TW` i `zh` używa obrazka `zh` , `uk` używa obrazka `ru` , a inne języki (takie jak `ja` ) używają obrazka domyślnie `en` .

Na przykład francuski ( `fr` ) plik źródłowy o wartości `MarkDown` wygląda następująco :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Przetłumaczony i wygenerowany plik w języku angielskim ( `en` ) wygląda następująco :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Tutaj `/en/` w kodzie języka źródłowego są zastępowane `/zh/` w języku docelowym.

Uwaga : Przed i po kodzie języka zastępowanego tekstu w adresie URL musi znajdować się cyfra `/` .

> [!TIP]
> Jeśli `- /` jest skonfigurowane w `url:` , dopasowywane będą tylko ścieżki względne, ale adresy URL zaczynające się od `//` nie będą dopasowywane.
>
> Jeśli niektóre linki w nazwie domeny wymagają wymiany, a niektóre nie chcą zostać zastąpione, możesz użyć różnych przedrostków, takich jak `[x](//x.com/en/)` i `[x](https://x.com/en/)` , aby je rozróżnić.

### Zignorować Plik

Domyślnie przetłumaczone zostaną wszystkie pliki w katalogu języka źródłowego zaczynające się od `.md` i `.yml` .

Jeśli chcesz ignorować określone pliki i nie tłumaczyć ich (np. niedokończone wersje robocze), możesz skonfigurować to za pomocą pola `ignore` .

`ignore` używa tej samej składni [globset](https://docs.rs/globset/latest/globset/#syntax) co plik `.gitignore` .

Na przykład wartość `_* ` w powyższym pliku konfiguracyjnym oznacza, że pliki zaczynające się od `_` nie zostaną przetłumaczone.

## Zasady Tłumaczeń

### Redaktorzy Tłumaczeń Nie Powinni Dodawać Ani Usuwać Wierszy

Tłumaczenie jest edytowalne. Zmodyfikuj oryginalny tekst i przetłumacz go ponownie maszynowo, ręczne zmiany w tłumaczeniu nie zostaną nadpisane (jeśli ten akapit oryginalnego tekstu nie został zmodyfikowany).

> [!WARN]
> Musi istnieć zgodność między wierszami tłumaczenia a tekstem oryginalnym. Oznacza to, że nie dodawaj ani nie usuwaj wierszy podczas kompilowania tłumaczenia. W przeciwnym razie spowoduje to zamieszanie w pamięci podręcznej edycji tłumaczeń.

Jeśli coś pójdzie nie tak, zapoznaj się z [często zadawanymi pytaniami, aby znaleźć rozwiązania.](/i18/qa#H1)

### `YAML` Tłumaczeń

Narzędzie wiersza poleceń znajdzie wszystkie pliki kończące się na `.yml` w katalogu plików języka źródłowego i przetłumaczy je.

* Należy pamiętać, że przyrostek nazwy pliku musi wynosić `.yml` (a nie `.yaml` ).

Narzędzie tłumaczy jedynie wartości słownikowe na `.yml` , a nie klucze słownika.

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

Tłumaczenie `YAML` można również modyfikować ręcznie (ale nie należy dodawać ani usuwać kluczy ani linii w tłumaczeniu).

W oparciu o tłumaczenie `YAML` można łatwo budować międzynarodowe rozwiązania dla różnych języków programowania.

## Zaawansowane Użycie

### Podkatalog Tłumaczeń

Dopóki zostanie utworzone `.i18n/conf.yml` (nie trzeba za każdym razem zaczynać od szablonu projektu demonstracyjnego), `i18` będzie działać dobrze.

Narzędzie wiersza poleceń znajdzie `.i18n/conf.yml` konfiguracji we wszystkich podkatalogach i przetłumaczy je.

Projekty korzystające z architektury [monorepo](//monorepo.tools) mogą dzielić pliki językowe na podkatalogi.

![](https://p.3ti.site/1719910016.avif)

### Niestandardowy Katalog Instalacyjny

Domyślnie zostanie zainstalowany na `/usr/local/bin` .

Jeżeli `/usr/local/bin` nie ma uprawnień do zapisu, zostanie zainstalowane na `~/.bin` .

Ustawienie zmiennej środowiskowej `TO` może na przykład zdefiniować katalog instalacyjny :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```