# Cechy produktu

`i18` to narzędzie wiersza poleceń do tłumaczenia Markdown & Yaml.

## Doskonale zachowuje format Markdown

Obsługuje tłumaczenie tabel Markdown bez niszczenia formatu; nie tłumaczy słów we wzorach matematycznych ani w linkach.

1	Obsługuje tłumaczenie mieszane HTML Markdown, zawartość tagów `<pre>` i `<code>` osadzona w HTML `MarkDown` nie jest tłumaczona

## Rozpoznaje wzory matematyczne i pomija ich tłumaczenie

Wzory matematyczne są rozpoznawane i pomijane w tłumaczeniu.

Sposób zapisu wzorów matematycznych można znaleźć w artykule [„Github o pisaniu wyrażeń matematycznych”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Tłumaczy komentarze w fragmentach kodu

Nie tłumaczy wstawek kodu w tekście, ale tłumaczy komentarze w kodzie.

Aby przetłumaczyć komentarze, należy po ` ``` ` wskazać język, np. ` ```rust `.

Obecnie obsługuje tłumaczenie komentarzy w językach takich jak `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [i innych](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Jeśli brakuje obsługi dla Twojego języka programowania, [skontaktuj się z nami](https://groups.google.com/g/i18n-site).

## Przyjazny dla wiersza poleceń

Istnieje wiele [zaawansowanych narzędzi](https://www.capterra.com/translation-management-software) do zarządzania tłumaczeniami dokumentów.

Dla programistów, którzy są obeznani z `git`, `vim` i `vscode`, używanie tych narzędzi do edycji dokumentów i zarządzania wersjami zwiększa koszty nauki.

`KISS` ( `Keep It Simple, Stupid` ) Wśród wyznawców zasad rozwiązania na poziomie przedsiębiorstwa są synonimem uciążliwości, nieefektywności i trudności w użyciu.

Tłumaczenie powinno być proste: wprowadzenie polecenia i jedno kliknięcie, bez skomplikowanych zależności środowiskowych.

Nie dodawaj elementów, jeśli nie jest to konieczne.

## Bez modyfikacji, bez tłumaczenia

Istnieją również narzędzia do tłumaczenia wiersza poleceń, takie jak [translate-shell](https://github.com/soimort/translate-shell).

Jednak nie obsługują one identyfikacji modyfikacji plików, tylko tłumaczą zmodyfikowane pliki, aby obniżyć koszty i zwiększyć wydajność.

## Tłumaczenie można edytować, a ponowne tłumaczenie maszynowe nie nadpisze istniejących modyfikacji

Tłumaczenie jest edytowalne.

PO modyfikacji oryginału, przy ponownym tłumaczeniu maszynowym, ręczne zmiany nie zostaną nadpisane (jeśli oryginalny tekst nie został zmodyfikowany).

## Najlepszej jakości tłumaczenie maszynowe

Opracowaliśmy nową generację technologii tłumaczeń, łączącą zalety tradycyjnych modeli tłumaczeń maszynowych i dużych modeli językowych, co pozwala na dokładne, płynne i eleganckie tłumaczenia.

Ślepe testy pokazują, że nasze tłumaczenia są znacznie lepsze niż konkurencyjne usługi.

Aby osiągnąć tę samą jakość, ilość ręcznej edycji wymagana przez Tłumacz Google i `ChatGPT` jest odpowiednio `2.67` i `3.15` razy większa niż nasza.

## <a rel=id href="#price" id="price"></a> Wysoka konkurencyjność cenowa

|                                                                                   | USD/milion słów |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Kliknij tutaj github aby autoryzować i automatycznie śledzić i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **otrzymać premię $50** .

Uwaga: Liczba znaków do zapłaty = [liczba znaków Unicode](https://en.wikipedia.org/wiki/Unicode) w pliku źródłowym × liczba języków w tłumaczeniu

## 7	Tłumaczenie `YAML` jest dostępne jako dodatkowa funkcja

8	Narzędzie tłumaczy wyłącznie wartości słownikowe w `YAML`, nie przetłumaczając kluczy słownika.

9	W oparciu o tłumaczenie `YAML` można łatwo tworzyć międzynarodowe rozwiązania dla różnych języków programowania.

## 10	Obsługuje tłumaczenie konfiguracji nagłówka dla blogów statycznych typu `HOGO`

Obsługuje konfigurację nagłówka dla statycznego bloga typu [HOGO](https://github.com/gohugoio/hugo), transliterując wyłącznie pola `title`, `summary`, `brief` oraz `description`.

## Nie tłumaczy nazw zmiennych

`Markdown` jest używane jako szablon wiadomości e-mail, a `YAML` jako konfiguracja pliku językowego, zawierające zmienne (np. doładowanie `${amount}` zostało zaksięgowane).

Nazwy zmiennych, takie jak `${varname}`, nie będą tłumaczone jako angielskie.

## Optymalizacja tłumaczeń dla chińskiego, japońskiego i koreańskiego

### Po przetłumaczeniu na angielski, tytuły są automatycznie pisane z wielkiej litery

W chińskim, japońskim i koreańskim nie ma rozróżnienia na wielkie i małe litery, podczas gdy w angielskich tytułach jest to standard.

12	`i18` rozpoznaje tytuły w `Markdown` i automatycznie kapitalizuje pierwszą literę podczas tłumaczenia na języki, które różnicują wielkość liter.

Na przykład `为阅读体验而优化` zostanie przetłumaczone na `Optimized for Reading Experience`.

### Nie tłumaczy angielskich terminów w chińskich, japońskich i koreańskich dokumentach

Dokumenty w chińskim, japońskim i koreańskim często zawierają angielskie terminy.

Maszynowe tłumaczenie chińskiego, japońskiego i koreańskiego na inne języki często tłumaczy również terminy, na przykład:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jeśli użyjesz Google Translate lub DeepL, oba błędnie przetłumaczą angielskie terminy, które powinny pozostać oryginalne (np. w japońskim i francuskim).

### Google Translate

Przetłumaczone na japoński: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Przetłumaczone na francuski: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` przetłumaczone jako `faucon`, a `Llama` jako `lama`. Jako nazwy własne, nie powinny być tłumaczone.

![](//p.3ti.site/1720199451.avif)

### Tłumaczenie DeepL

Przetłumaczone na japoński: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL przetłumaczyło to na francuski (również zmieniło nazwy własne i dodało dziwne `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### 13	Tłumaczenie witryny i18n.site

Tłumaczenie `i18` rozpoznaje angielskie terminy w chińskich, japońskich i koreańskich dokumentach i pozostawia je nienaruszone.

Na przykład wynik tłumaczenia na japoński:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Tłumaczenie na francuski:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Tylko wtedy, gdy angielskie słowo i tekst w chińskim, japońskim i koreańskim są rozdzielone spacją lub długość angielskiego słowa jest większa niż 1, słowo jest traktowane jako termin.

Na przykład: `C罗` zostanie przetłumaczone jako `Cristiano Ronaldo`.

## Można go łączyć z `i18n.site` do tworzenia wielojęzycznych stron internetowych

`i18` jest zintegrowany z wielojęzycznym narzędziem wiersza poleceń do tworzenia stron internetowych [`i18n.site`](/i18n.site) .

Aby uzyskać szczegółowe informacje, zobacz dokumentację [`i18n.site`](/i18n.site) .

## Kod jest otwarty

Klient jest całkowicie otwarty, a 90% kodu po stronie serwera jest otwarty. [Kliknij tutaj, aby zobaczyć kod źródłowy](/i18n.site/src).

Poszukujemy wolontariuszy do pracy nad kodem open source i korektą tłumaczeń.

Jeśli jesteś zainteresowany, [→ wypełnij swój profil tutaj](https://ggl.link/i18n) i dołącz do [listy mailingowej](https://groups.google.com/u/2/g/i18n-site) w celu komunikacji.

## Kontakt

<button onclick="mailsub()">Kliknij tutaj, aby subskrybować aktualizacje produktów za pomocą e-maila</button> i <button onclick="webpush()">włączyć powiadomienia push w przeglądarce</button>, powiadomimy Cię o aktualizacjach produktów.

Śledź nasze konta: [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).