# Cechy produktu

`i18` to narzędzie wiersza poleceń do tłumaczenia Markdown & Yaml.

## Doskonale zachowuje format Markdown

Obsługuje tłumaczenie tabel Markdown, nie naruszając formatu; nie tłumaczy wyrażeń matematycznych ani słów w linkach.

1	Obsługuje tłumaczenie mieszane HTML Markdown, zawartość tagów `<pre>` i `<code>` osadzona w HTML `MarkDown` nie jest tłumaczona

## Rozpoznaje wyrażenia matematyczne i pomija je w tłumaczeniu

Wyrażenia matematyczne są rozpoznawane i pomijane w tłumaczeniu.

Sposób zapisu wyrażeń matematycznych można znaleźć w artykule [„Github o pisaniu wyrażeń matematycznych”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Tłumaczy komentarze w fragmentach kodu

Nie tłumaczy wbudowanego kodu ani fragmentów kodu, ale tłumaczy komentarze w kodzie.

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

Istnieją również inne narzędzia do tłumaczenia wiersza poleceń, takie jak [translate-shell](https://github.com/soimort/translate-shell).

Jednakże, nie obsługują one identyfikacji zmian w plikach i tłumaczą jedynie zmodyfikowane pliki, aby obniżyć koszty i zwiększyć wydajność.

## Tłumaczenie można edytować, a ponowne tłumaczenie maszynowe nie nadpisze istniejących modyfikacji

Tłumaczenie można edytować.

Modyfikacja oryginalnego tekstu i ponowne tłumaczenie maszynowe nie nadpisze ręcznych modyfikacji w tłumaczeniu (jeśli oryginalny akapit nie został zmodyfikowany).

## Najlepsza jakość tłumaczenia maszynowego

Opracowaliśmy nową generację technologii tłumaczeń, która łączy zalety tradycyjnych modeli tłumaczeń maszynowych i dużych modeli językowych, aby zapewnić dokładne, płynne i eleganckie tłumaczenia.

Testy pokazują, że jakość naszych tłumaczeń jest znacznie lepsza w porównaniu do podobnych usług.

Aby osiągnąć tę samą jakość, ilość ręcznej edycji wymagana przez Tłumacz Google i `ChatGPT` jest odpowiednio `2.67` i `3.15` razy większa niż nasza.

## <a rel=id href="#price" id="price"></a> Konkurencyjne ceny

|                                                                                   | USD/milion słów |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Kliknij tutaj github aby autoryzować i automatycznie śledzić i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **otrzymać premię $50** .

Uwaga: Liczba płatnych znaków = [liczba unicode](https://en.wikipedia.org/wiki/Unicode) w pliku źródłowym × liczba języków w tłumaczeniu

## 7	Tłumaczenie plików `YAML`

8	Narzędzie tłumaczy wyłącznie wartości słownikowe w `YAML`, nie przetłumaczając kluczy słownikowych.

9	W oparciu o tłumaczenie `YAML` można łatwo tworzyć międzynarodowe rozwiązania dla różnych języków programowania.

## 10	Obsługa konfiguracji nagłówków dla `HOGO`

Obsługuje konfigurację nagłówka bloga statycznego typu [HOGO](https://github.com/gohugoio/hugo) i tłumaczy tylko pola `title` , `summary` , `brief` i `description` .

## Nie tłumaczy nazw zmiennych

`Markdown` używane do szablonów e-maili, `YAML` jako konfiguracja pliku językowego, zawiera zmienne parametry (np. doładowanie `${amount}` zostało zaksięgowane).

Nazwy zmiennych takie jak `${varname}` nie są tłumaczone na angielski.

## Optymalizacja tłumaczeń dla chińskiego, japońskiego i koreańskiego

### Tłumaczenie na angielski automatycznie kapitalizuje pierwszą literę tytułu

W chińskim, japońskim i koreańskim nie ma rozróżnienia na wielkie i małe litery, podczas gdy w angielskich tytułach pierwsza litera jest zazwyczaj wielka.

`i18` rozpoznaje nagłówki w `Markdown` i automatycznie kapitalizuje pierwszą literę podczas tłumaczenia na języki o wrażliwej wielkości liter.

Na przykład fraza `为阅读体验而优化` zostanie przetłumaczona na `Optimized for Reading Experience`.

### Nie tłumaczy angielskich terminów w chińskich, japońskich i koreańskich dokumentach

Dokumenty w chińskim, japońskim i koreańskim często zawierają wiele angielskich terminów.

Maszynowe tłumaczenie chińskiego, japońskiego i koreańskiego na inne języki często tłumaczy również terminy, na przykład:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jeśli użyjesz Google Translate lub DeepL, oba błędnie przetłumaczą angielskie terminy, które powinny pozostać oryginalne (np. w japońskim i francuskim).

### Google Translate

Przetłumaczone na japoński: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Przetłumaczone na francuski: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` przetłumaczone na `faucon`, a `Llama` przetłumaczone na `lama`. Jako nazwy własne, nie powinny być tłumaczone.

![](//p.3ti.site/1720199451.avif)

### Tłumaczenie DeepL

Przetłumaczone na japoński: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL przetłumaczyło to na francuski (również zmieniło nazwy własne i dodało dziwne `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### 13	Tłumaczenie strony i18n.site

Tłumaczenie `i18` rozpoznaje angielskie terminy w chińskich, japońskich i koreańskich dokumentach i pozostawia je nienaruszone.

Na przykład wynik tłumaczenia na japoński to:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Tłumaczenie na francuski to:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Tylko wtedy, gdy angielskie słowo i tekst w chińskim, japońskim i koreańskim są rozdzielone spacją lub długość angielskiego słowa jest większa niż 1, słowo jest traktowane jako termin.

Na przykład: `C罗` zostanie przetłumaczone na `Cristiano Ronaldo`.

## Można je łączyć z `i18n.site` do tworzenia wielojęzycznych stron internetowych

`i18` jest zintegrowane z narzędziem wiersza poleceń do tworzenia wielojęzycznych stron internetowych [`i18n.site`](/i18n.site).

Szczegółowe informacje można znaleźć w dokumentacji [`i18n.site`](/i18n.site).

## Kod jest otwarty

Klient jest całkowicie otwarty, 90% kodu po stronie serwera jest otwarty. [Kliknij tutaj, aby zobaczyć kod źródłowy](/i18n.site/src).

Poszukujemy wolontariuszy do udziału w rozwoju kodu open source i korekcie tłumaczonych tekstów.

Jeśli jesteś zainteresowany, prosimy [→ Kliknij tutaj, aby wypełnić swój profil](https://ggl.link/i18n), a następnie dołącz do [listy mailingowej](https://groups.google.com/u/2/g/i18n-site) w celu komunikacji.

## Zachowaj kontakt

Proszę <button onclick="mailsub()">kliknąć tutaj, aby subskrybować aktualizacje produktów</button> i <button onclick="webpush()">włączyć powiadomienia w przeglądarce</button>, powiadomimy Cię o aktualizacjach produktów.

Zachęcamy również do śledzenia naszych kont [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).