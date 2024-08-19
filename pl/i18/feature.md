# Cechy Produktu

`i18` to narzędzie wiersza poleceń do tłumaczenia Markdown & Yaml

## Potrafi doskonale zachować format Markdown

Obsługuje tłumaczenie tabel Markdown, nie niszcząc ich formatu; nie tłumaczy wyrażeń matematycznych ani słów w linkach.

1	Obsługuje tłumaczenie mieszane HTML Markdown, zawartość znaczników `<pre>` i `<code>` HTML osadzonych w `MarkDown` nie jest tłumaczona

## Potrafi rozpoznać wzory matematyczne i pominąć ich tłumaczenie

Wzory matematyczne są rozpoznawane i pomijane w tłumaczeniu.

Instrukcje dotyczące pisania wzorów matematycznych można znaleźć w artykule [„Github o pisaniu wyrażeń matematycznych”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Możliwe jest tłumaczenie komentarzy w blokach kodu

Inne fragmenty kodu i wiersze kodu nie są tłumaczone, ale komentarze w kodzie mogą być przetłumaczone.

Komentarze do tłumaczenia muszą być oznaczone językiem po ` ``` `, na przykład: ` ```rust `.

Obecnie obsługuje tłumaczenie komentarzy w językach `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [i innych](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Jeśli potrzebujesz tłumaczenia w innym języku programowania, skontaktuj się [z nami](https://groups.google.com/g/i18n-site).

## Narzędzie przyjazne dla wiersza poleceń

Dostępnych jest wiele [zaawansowanych narzędzi](https://www.capterra.com/translation-management-software) do zarządzania dokumentami tłumaczeniowymi.

Dla programistów znających `git`, `vim`, `vscode` korzystanie z tych narzędzi do edycji dokumentów i zarządzania wersjami może zwiększyć koszty nauki.

`KISS` ( `Keep It Simple, Stupid` ) Wśród wyznawców zasad rozwiązania na poziomie przedsiębiorstwa są synonimem uciążliwości, nieefektywności i trudności w użyciu.

Tłumaczenie powinno być proste: wprowadzenie polecenia i jednym kliknięciem, bez skomplikowanych zależności środowiskowych.

Nie dodawaj elementów, jeśli nie są potrzebne.

## Brak modyfikacji oznacza brak tłumaczenia

Istnieją również narzędzia do tłumaczenia wiersza poleceń, takie jak [translate-shell](https://github.com/soimort/translate-shell).

Jednak nie identyfikują one modyfikacji plików, tylko tłumaczą zmodyfikowane pliki, aby obniżyć koszty i zwiększyć wydajność.

## Tłumaczenie można edytować, a maszynowe tłumaczenie nie nadpisze ręcznych modyfikacji

Tłumaczenie jest edytowalne.

Po modyfikacji oryginału i ponownym tłumaczeniu maszynowym, ręczne zmiany w tłumaczeniu nie zostaną nadpisane (jeśli dany fragment oryginału nie został zmodyfikowany).

## Oferujemy tłumaczenie maszynowe najwyższej jakości

Opracowaliśmy nową generację technologii tłumaczeń, łączącą zalety tradycyjnych modeli tłumaczeń maszynowych i dużych modeli językowych, aby zapewnić dokładność, płynność i elegancję tłumaczeń.

Ślepe testy pokazują, że nasza jakość tłumaczeń jest znacznie lepsza niż konkurencja.

Aby osiągnąć tę samą jakość, ilość ręcznej edycji wymagana przez Tłumacz Google i `ChatGPT` jest odpowiednio `2.67` i `3.15` razy większa niż nasza.

## <a rel=id href="#price" id="price"></a> Wyjątkowo konkurencyjne ceny

|                                                                                   | USD/milion słów |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Kliknij tutaj i18n.site aby autoryzować i automatycznie śledzić github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **otrzymać premię $50** .

Uwaga: Liczba płatnych znaków = [liczba unicode](https://en.wikipedia.org/wiki/Unicode) w pliku źródłowym × liczba języków w tłumaczeniu

## Tłumaczenie Pomocnicze `YAML`

7	Tłumaczenie `YAML`

8	Narzędzie tłumaczy wyłącznie wartości słownikowe w `YAML`, a nie klucze słownika.

## 9	W oparciu o tłumaczenie `YAML` można łatwo tworzyć międzynarodowe rozwiązania dla różnych języków programowania

Obsługuje konfigurację nagłówka statycznego bloga [HUGO](https://github.com/gohugoio/hugo), tłumacząc tylko pola `title`, `summary` i `description`.

## Nie tłumaczy nazw zmiennych

`Markdown` jest używany jako szablon wiadomości e-mail, `YAML` jako plik konfiguracyjny językowy, z parametrami, które są zmiennymi (np.: doładowanie `${amount}`).

Nazwy zmiennych, takie jak `${varname}`, nie są traktowane jako tłumaczenia na język angielski.

## Optymalizacja tłumaczeń dla Chin, Japonii i Korei

### Po przetłumaczeniu na język angielski, pierwsza litera tytułu jest automatycznie pisana wielką literą

W Chinach, Japonii i Korei nie ma rozróżnienia na wielkie i małe litery, ale konwencja tytułów angielskich zakłada, że pierwsza litera jest wielka.

`i18` rozpoznaje tytuły w `Markdown` i automatycznie zmienia pierwszą literę na wielką podczas tłumaczenia na języki rozróżniające wielkość liter.

Na przykład `为阅读体验而优化` zostanie przetłumaczone na `Optimized for Reading Experience`.

### Terminy angielskie w dokumentach chińskich, japońskich i koreańskich nie są tłumaczone

Dokumenty z Chin, Japonii i Korei często zawierają terminy w języku angielskim.

Tłumaczenie maszynowe z chińskiego, japońskiego i koreańskiego na inne języki niż angielski często łączy terminy z tłumaczeniem, na przykład to chińskie zdanie:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jeśli używasz Google lub DeepL, oba błędnie przetłumaczą terminy angielskie, które powinny pozostać w oryginale (na przykład w języku japońskim i francuskim).

### Tłumacz Google

Przetłumaczone na język japoński: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Przetłumaczone na język francuski: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` przetłumaczone na `faucon`, `Llama` przetłumaczone na `lama`. Jako rzeczowniki własne, nie powinny być tłumaczone.

![](//p.3ti.site/1720199451.avif)

### Tłumacz DeepL

Przetłumaczone na język japoński: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL przetłumaczone na język francuski (również zmiana nazw własnych i dodanie dziwnego `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Tłumaczenie strony i18n

Tłumaczenie `i18` rozpoznaje angielskie terminy w dokumentach chińskich, japońskich i koreańskich i pozostawia je nienaruszone.

Na przykład powyższy wynik tłumaczenia na język japoński to:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Tłumaczenie na język francuski brzmi:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Tylko wtedy, gdy między angielskim słowem a tekstem w języku chińskim, japońskim i koreańskim występuje spacja lub długość w języku angielskim jest większa niż 1, słowo będzie traktowane jako termin.

Na przykład: `C罗` zostanie przetłumaczone na `Cristiano Ronaldo`.

## Można łączyć z `i18n.site` do tworzenia wielojęzycznych stron internetowych

`i18` jest zintegrowany z wielojęzycznym narzędziem wiersza poleceń do tworzenia stron internetowych [`i18n.site`](/i18n.site).

Dla szczegółów zobacz dokumentację [`i18n.site`](/i18n.site).

## Kod jest otwarty

Klient jest w pełni open source, a 90% kodu po stronie serwera jest open source [kliknij tutaj, aby zobaczyć kod źródłowy](/i18n.site/src).

Poszukujemy wolontariuszy do participation w rozwijaniu kodu open source i korekcie tłumaczeń tekstowych.

Jeśli jesteś zainteresowany, wypełnij [→ kliknij tutaj, aby wypełnić swój profil](https://ggl.link/i18n) , a następnie dołącz do [listy mailingowej](https://groups.google.com/u/2/g/i18n-site) w celu komunikacji.

## Pozostań w kontakcie

<button onclick="mailsub()">Kliknij ten e-mail, aby subskrybować aktualizacje produktu</button> i <button onclick="webpush()">włącz funkcję push w przeglądarce</button>, aby być informowanym o aktualizacjach produktu.

/ również do śledzenia naszych kont [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)