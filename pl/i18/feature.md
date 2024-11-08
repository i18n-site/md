# Cechy Produktu

`i18` to narzędzie wiersza poleceń do tłumaczenia Markdown & Yaml

## Potrafi Doskonale Zachować Format Markdown

Obsługuje tłumaczenie tabel Markdown bez niszczenia formatu, nie tłumaczy słów we wzorach matematycznych ani linkach.

Obsługuje tłumaczenie mieszane HTML Markdown , zawartość tagów `<pre>` i `<code>` osadzona w HTML `MarkDown` nie jest tłumaczona

## Potrafi Rozpoznać Wzory Matematyczne I Pominąć Tłumaczenie

Wzory matematyczne są rozpoznawane, a tłumaczenie jest pomijane.

Informacje na temat pisania wzorów matematycznych można znaleźć w artykule [„ Github O pisaniu wyrażeń matematycznych”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Możliwość Tłumaczenia Komentarzy We Fragmentach Kodu

Kod wbudowany i fragmenty kodu nie są tłumaczone, ale można przetłumaczyć komentarze w kodzie.

Komentarze do tłumaczenia muszą wskazywać język po ` ``` ` , np. : ` ```rust ` .

Obecnie obsługuje tłumaczenie adnotacji w [językach](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` i innych.

Jeśli chcesz przetłumaczyć wszystkie znaki inne niż angielskie w kodzie, zaznacz segment kodu cyfrą ` ```i18n ` .

Jeśli język programowania, którego potrzebujesz, nie jest dostępny, [skontaktuj się z nami](https://groups.google.com/g/i18n-site) .

## Przyjazny Dla Wiersza Poleceń

Dostępnych jest wiele [zaawansowanych narzędzi](https://www.capterra.com/translation-management-software) do zarządzania dokumentami tłumaczeniowymi.

Dla programistów znających `git` , `vim` i `vscode` używanie tych narzędzi do edycji dokumentów i zarządzania wersjami niewątpliwie zwiększy koszty nauki.

`KISS` ( `Keep It Simple, Stupid` ) Wśród wyznawców zasad rozwiązania na poziomie przedsiębiorstwa są synonimem uciążliwości, nieefektywności i trudności w użyciu.

Tłumaczenie powinno odbywać się poprzez wprowadzenie poleceń i wykonanie go jednym kliknięciem. Nie powinno być żadnych skomplikowanych zależności środowiskowych.

Nie dodawaj elementów, jeśli nie jest to konieczne.

## Żadnych Modyfikacji, Żadnego Tłumaczenia

Istnieją również narzędzia do tłumaczenia wiersza poleceń, takie jak [translate-shell](https://github.com/soimort/translate-shell) .

Nie obsługują one jednak identyfikacji modyfikacji plików i jedynie tłumaczą zmodyfikowane pliki, aby obniżyć koszty i zwiększyć wydajność.

## Tłumaczenie Można Edytować, a Tłumaczenie Maszynowe Nie Nadpisze Istniejących Modyfikacji.

Tłumaczenie jest edytowalne.

Zmodyfikuj oryginalny tekst i przetłumacz go ponownie maszynowo, ręczne zmiany w tłumaczeniu nie zostaną nadpisane (jeśli ten akapit oryginalnego tekstu nie został zmodyfikowany).

## Tłumaczenie Maszynowe Najwyższej Jakości

Opracowaliśmy nową generację technologii tłumaczeń, która łączy w sobie zalety techniczne tradycyjnych modeli tłumaczeń maszynowych i dużych modeli językowych, aby tłumaczenia były dokładne, płynne i eleganckie.

Ślepe testy pokazują, że jakość naszych tłumaczeń jest znacznie lepsza w porównaniu do podobnych usług.

Aby osiągnąć tę samą jakość, ilość ręcznej edycji wymagana przez Tłumacz Google i `ChatGPT` jest odpowiednio `2.67` i `3.15` razy większa niż nasza.

## <a rel=id href="#price" id="price"></a> Niezwykle konkurencyjne ceny

|                                                                                   | USD/milion słów |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoftu](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonka](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Kliknij tutaj github aby autoryzować i automatycznie śledzić bibliotekę i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **otrzymać premię $50** .

Uwaga: Liczba płatnych znaków = [liczba unicode](https://en.wikipedia.org/wiki/Unicode) w pliku źródłowym × liczba języków w tłumaczeniu

## Tłumaczenie Pomocnicze `YAML`

Narzędzie tłumaczy jedynie wartości słownikowe na `YAML` , a nie klucze słownika.

W oparciu o tłumaczenie `YAML` można łatwo budować międzynarodowe rozwiązania dla różnych języków programowania.

## Obsługa Konfiguracji Nagłówka Tłumaczenia `HOGO`

Obsługuje konfigurację nagłówka bloga statycznego typu [HOGO](https://github.com/gohugoio/hugo) i tłumaczy tylko pola `title` , `summary` , `brief` i `description` .

## Nie Tłumacz Nazw Zmiennych

`Markdown` jest używane jako szablon wiadomości e-mail, `YAML` jest używane jako konfiguracja pliku językowego, a parametry będą zmienne (na przykład: otrzymano doładowanie `${amount}` ).

Nazwy zmiennych, takie jak `${varname}` nie będą traktowane jako tłumaczenia na język angielski.

## Optymalizacja Tłumaczeń Dla Chin, Japonii I Korei

### Po Przetłumaczeniu Na Język Angielski Pierwsza Litera Tytułu Jest Automatycznie Pisana Wielką Literą.

W Chinach, Japonii i Korei nie ma wielkich i małych liter, ale konwencja dotycząca tytułów angielskich zakłada, że pierwsza litera jest wielka.

`i18` rozpoznaje tytuł w `MarkDown` i automatycznie zamienia pierwszą literę na wielką literę podczas tłumaczenia na język, w którym rozróżniana jest wielkość liter.

Na przykład `为阅读体验而优化` zostanie przetłumaczone na `Optimized for Reading Experience` .

### Terminy Angielskie W Języku Chińskim, Japońskim, Koreańskim I Chińskim Nie Są Tłumaczone

Dokumenty z Chin, Japonii i Korei często zawierają wiele terminów w języku angielskim.

Tłumaczenie maszynowe języków chińskiego, japońskiego i koreańskiego stało się językiem innym niż angielski, a terminy są często tłumaczone razem, jak na przykład następujące chińskie zdanie:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jeśli korzystasz z Google lub DeepL, oba błędnie tłumaczą angielskie terminy, które powinny pozostać oryginalne (jako przykłady weź japoński i francuski).

### Tłumacz Google

Przetłumaczone `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` język japoński :

![](//p.3ti.site/1720199391.avif)

Przetłumaczone `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` język francuski :

`Falcon` jest tłumaczone jako `faucon` , a `Llama` jest tłumaczone jako `lama` . Jako rzeczowniki własne nie należy ich tłumaczyć.

![](//p.3ti.site/1720199451.avif)

### Tłumaczenie DeepL

Przetłumaczone `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` język japoński :

![](//p.3ti.site/1720199550.avif)

DeepL Tłumaczenie powyższego na język francuski (również przepisanie nazw własnych i dodanie nieparzystego `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Tłumaczenie Witryny i18n

Tłumaczenie `i18` rozpoznaje angielskie terminy w dokumentach chińskich, japońskich i koreańskich i pozostawia je nienaruszone.

Na przykład powyższy wynik tłumaczenia na język japoński to:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Tłumaczenie francuskie brzmi:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Tylko wtedy, gdy między angielskim słowem a tekstem w języku chińskim, japońskim i koreańskim występuje spacja lub długość w języku angielskim jest większa niż 1, słowo będzie traktowane jako termin.

Na przykład: `C罗` zostanie przetłumaczone jako `Cristiano Ronaldo` .

## Można Go Łączyć Z Ponad `i18n.site` Językami, Aby Zbudować Stronę Internetową

`i18` jest zintegrowany z wielojęzycznym narzędziem wiersza poleceń do tworzenia stron internetowych [`i18n.site`](/i18n.site) .

Aby uzyskać szczegółowe informacje, zobacz dokumentację [`i18n.site`](/i18n.site) .

## Kod Open Source

Klient jest całkowicie open source, 90 % kodu po stronie serwera jest open source. [Kliknij tutaj, aby zobaczyć kod źródłowy](/i18n.site/c/src) .

Poszukujemy wolontariuszy do udziału w rozwoju kodu open source i korekcie tłumaczonych tekstów.

Jeśli jesteś zainteresowany, prosimy [→ Kliknij tutaj, aby wypełnić swój profil](https://ggl.link/i18n) , a następnie dołącz do [listy mailingowej](https://groups.google.com/u/2/g/i18n-site) w celu komunikacji.

## Kontaktować Się

<button onclick="mailsub()">Kliknij ten e-mail, aby subskrybować aktualizacje produktu</button> i <button onclick="webpush()">włączyć funkcję push w przeglądarce</button> . Powiadomimy Cię, gdy zostaną wprowadzone aktualizacje produktu.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) również do śledzenia naszych kont / [X.COM: @i18nSite](https://x.com/i18nSite)