<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Rozwiązania międzynarodowe <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Polecenia wierszowe Markdown, narzędzie Yaml, pomagają tworzyć międzynarodowe strony dokumentacyjne, obsługujące [setki języków](/i18/LANG_CODE)…

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Wstęp

Internet zlikwidował odległości w przestrzeni fizycznej, ale różnice językowe wciąż utrudniają ludzką jedność.

Chociaż przeglądarki mają wbudowane tłumaczenie, wyszukiwarki nadal nie potrafią przeprowadzać kereski w różnych językach.

Media społecznościowe, e-maile, ludzie przyzwyczaili się do skupiania na informacjach w swoim ojczystym języku.

W erze eksplozji informacji i globalnym rynku, aby walczyć o rzadką uwagę, **obsługa wielu języków jest podstawą**.

Nawet indywidualne projekty open source, które chcą dotrzeć do szerszej publiczności, powinny od początku wybrać odpowiednie technologie międzynarodowe.

## <a rel=id href="#project" id="project"></a> Wprowadzenie do projektu

Strona obecnie oferuje dwa narzędzia wiersza poleceń open source:

* [i18: Narzędzie do tłumaczenia Markdown wierszowe](/i18/feature)
* [i18n.site: Generator wielojęzycznych stron statycznych](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: Narzędzie do tłumaczenia wierszowe Markdown

Narzędzie wiersza poleceń ( [kod źródłowy](https://github.com/i18n-site/rust/tree/main/i18) ), które tłumaczy `Markdown` i `YAML` na wiele języków.

Potrafi idealnie zachować format `Markdown`, rozpoznawać zmiany w plikach i tłumaczyć tylko zmodyfikowane pliki.

Tłumaczenie można edytować.

Modyfikacja oryginalnego tekstu i ponowne tłumaczenie maszynowe nie nadpisze ręcznych modyfikacji w tłumaczeniu (jeśli oryginalny akapit nie został zmodyfikowany).

Wierzymy w filozofię `UNIX`: "Wszystko jest plikiem", co pozwala zarządzać tłumaczeniami na setki języków bez skomplikowanych rozwiązań korporacyjnych.

Możesz używać najbardziej znanych narzędzi do edycji `Markdown` (ale nie dodawać ani usuwać akapitów) oraz najbardziej znanego sposobu zarządzania wersjami.

Można utworzyć repozytorium z plikami językowymi jako open source, korzystając z procesu `Pull Request`, aby globalni użytkownicy mogli uczestniczyć w ciągłym doskonaleniu tłumaczeń. Łatwa integracja z [github](//github.com) i innymi społecznościami open source.

[→ Przewodnik użytkownika, przeczytaj dokumentację projektu](/i18).

## Najlepsza jakość tłumaczenia maszynowego

Opracowaliśmy nową generację technologii tłumaczeń, która łączy zalety tradycyjnych modeli tłumaczeń maszynowych i dużych modeli językowych, aby zapewnić dokładne, płynne i eleganckie tłumaczenia.

Testy pokazują, że jakość naszych tłumaczeń jest znacznie lepsza w porównaniu do podobnych usług.

Aby osiągnąć tę samą jakość, ilość ręcznej edycji wymagana przez Tłumacz Google i `ChatGPT` jest odpowiednio `2.67` i `3.15` razy większa niż nasza.

#### <a rel=id href="#price" id="price"></a> Konkurencyjne ceny

|                                                                                   | USD/milion słów |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Kliknij tutaj github aby autoryzować i automatycznie śledzić i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **otrzymać premię $50** .

Uwaga: Liczba płatnych znaków = [liczba unicode](https://en.wikipedia.org/wiki/Unicode) w pliku źródłowym × liczba języków w tłumaczeniu

### i18n.site: Generator wielojęzycznych stron statycznych

Narzędzie wiersza poleceń ( [kod źródłowy](https://github.com/i18n-site/rust/tree/main/i18n-site) ) do generowania wielojęzycznych stron statycznych.

Pure static, zoptymalizowany pod kątem czytelnictwa, zintegrowany z tłumaczeniami [i18](#i18), idealny do tworzenia dokumentacji projektów.

Architektura front-endu oparta na pełnych wtyczkach, łatwa do rozbudowy, z możliwością integracji z funkcjami back-end, jeśli to konieczne.

Strona została opracowana na tym frameworku, zawiera funkcje użytkownika, płatności itp. ([kod źródłowy](/i18n.site/src)), szczegółowy przewodnik zostanie opracowany później.

[→ Przewodnik użytkownika, przeczytaj dokumentację projektu](/i18n.site).

## Zachowaj kontakt

Proszę <button onclick="mailsub()">kliknąć tutaj, aby subskrybować aktualizacje produktów</button> i <button onclick="webpush()">włączyć powiadomienia w przeglądarce</button>, powiadomimy Cię o aktualizacjach produktów.

Zachęcamy również do śledzenia naszych kont [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

Jeśli masz problemy, [→ napisz na forum użytkowników](https://groups.google.com/u/1/g/i18n).

## O nas

> Powiedzieli: "Chodź, zbudujmy wieżę do nieba, aby rozsławiać ludzkość."
>
> Pan zobaczył to i powiedział: "Ludzie wszyscy mają jeden język, jedną rasę. Teraz, gdy to się stało, wszystko jest możliwe."
>
> Potem Pan zstąpił, sprawiając, że ludzie nie rozumieli się nawzajem, i rozproszył ich po całym świecie.

<p style="text-align:right">── Biblia, Księga Rodzaju</p>

Chcemy budować Internet bez barier językowych.
Mamy nadzieję, że cała ludzkość zjednoczy się wokół wspólnych marzeń.

Tłumaczenie Markdown i generowanie dokumentacji stron to dopiero początek.
Synchronizacja publikacji treści w mediach społecznościowych;
Wsparcie dla dwujęzycznych komentarzy i czatów;
System biletów wielojęzycznych z possibility wypłaty nagród;
Rynek sprzedaży komponentów front-end wielojęzycznych;
Chcemy zrobić znacznie więcej.

Czekamy na spotkanie z Tobą, drogi współtowarzyszu w rozległym morzu ludzi.
Poszukujemy wolontariuszy do udziału w rozwoju kodu open source i korekcie tłumaczonych tekstów.
Jeśli jesteś zainteresowany, prosimy [→ Kliknij tutaj, aby wypełnić swój profil](https://ggl.link/i18n), a następnie dołącz do [listy mailingowej](https://groups.google.com/u/2/g/i18n-site) w celu komunikacji.

Wierzymy w open source i kochamy dzielenie się,
Zapraszamy do wspólnego tworzenia przyszłości bez granic.