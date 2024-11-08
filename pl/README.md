<h1 style="display:flex;justify-content:space-between">i18n.site Rozwiązania międzynarodowe<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Wiersz poleceń Markdown narzędzie Yaml , pomaga zbudować międzynarodową witrynę z dokumentami, obsługującą [setki języków](/i18/LANG_CODE) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Przedmowa

Internet wyeliminował dystans w przestrzeni fizycznej, ale różnice językowe w dalszym ciągu utrudniają ludzką jedność.

Chociaż przeglądarka ma wbudowane tłumaczenie, wyszukiwarki nadal nie mogą wykonywać zapytań w różnych językach.

Za pośrednictwem mediów społecznościowych i poczty elektronicznej ludzie są przyzwyczajeni do skupiania się na źródłach informacji w swoim własnym języku ojczystym.

W obliczu eksplozji informacji i rynku globalnego, aby konkurować o rzadką uwagę, **obsługa wielu języków jest podstawową umiejętnością** .

Nawet jeśli jest to osobisty projekt open source, który chce wpłynąć na szerszą publiczność, powinien od początku dokonać międzynarodowej selekcji technologii.

## <a rel=id href="#project" id="project"></a> Wprowadzenie projektu

Ta witryna udostępnia obecnie dwa narzędzia wiersza poleceń typu open source:

* [Narzędzie do tłumaczenia wiersza i18 : MarkDown](/i18/feature)
* [i18n.site : generator statycznych stron internetowych](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: Narzędzie do tłumaczenia wiersza poleceń MarkDown

Narzędzie wiersza poleceń ( [kod źródłowy](https://github.com/i18n-site/rust/tree/main/i18) ), które tłumaczy `Markdown` i `YAML` na wiele języków.

Potrafi doskonale zachować format `Markdown` . Potrafi identyfikować modyfikacje plików i tłumaczyć tylko zmienione pliki.

Tłumaczenie jest edytowalne.

Zmodyfikuj oryginalny tekst i przetłumacz go ponownie maszynowo, ręczne zmiany w tłumaczeniu nie zostaną nadpisane (jeśli ten akapit oryginalnego tekstu nie został zmodyfikowany).

Możesz użyć najbardziej znanych narzędzi do edycji `Markdown` (ale nie możesz dodawać ani usuwać akapitów) i korzystać z najbardziej znanego sposobu kontroli wersji.

Bazę kodu można utworzyć jako open source dla plików językowych, a za pomocą `Pull Request` procesów użytkownicy globalni mogą uczestniczyć w ciągłej optymalizacji tłumaczeń. Bezproblemowe połączenie [github](//github.com) I inne społeczności open source.

> [!TIP]
> Wyznajemy filozofię UNIX „wszystko jest plikiem” i potrafimy zarządzać tłumaczeniami na setki języków bez wprowadzania skomplikowanych i uciążliwych rozwiązań dla przedsiębiorstw.

[→ Instrukcje użytkowania znajdują się w dokumentacji projektowej](/i18) .

## Tłumaczenie Maszynowe Najwyższej Jakości

Opracowaliśmy nową generację technologii tłumaczeń, która łączy w sobie zalety techniczne tradycyjnych modeli tłumaczeń maszynowych i dużych modeli językowych, aby tłumaczenia były dokładne, płynne i eleganckie.

Ślepe testy pokazują, że jakość naszych tłumaczeń jest znacznie lepsza w porównaniu do podobnych usług.

Aby osiągnąć tę samą jakość, ilość ręcznej edycji wymagana przez Tłumacz Google i `ChatGPT` jest odpowiednio `2.67` i `3.15` razy większa niż nasza.

#### <a rel=id href="#price" id="price"></a> Niezwykle konkurencyjne ceny

|                                                                                   | USD/milion słów |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoftu](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonka](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Kliknij tutaj github aby autoryzować i automatycznie śledzić bibliotekę i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) i **otrzymać premię $50** .

Uwaga: Liczba płatnych znaków = [liczba unicode](https://en.wikipedia.org/wiki/Unicode) w pliku źródłowym × liczba języków w tłumaczeniu

### i18n.site: Wielojęzyczny Generator Stron Statycznych

Narzędzie wiersza poleceń ( [kod źródłowy](https://github.com/i18n-site/rust/tree/main/i18n-site) ) do generowania wielojęzycznych stron statycznych.

Czysto statyczny, zoptymalizowany pod kątem czytania, zintegrowany z tłumaczeniem [i18](#i18) jest najlepszym wyborem do budowy witryny z dokumentami projektu.

Podstawowa struktura front-endu przyjmuje pełną architekturę wtyczek, która jest łatwa do dodatkowego rozwoju. W razie potrzeby można zintegrować funkcje back-endu.

Ta strona internetowa została opracowana w oparciu o ten framework i zawiera funkcje użytkownika, płatności i inne ( [kod źródłowy](/i18n.site/c/src) ). Szczegółowy tutorial zostanie napisany później.

[→ Instrukcje użytkowania znajdują się w dokumentacji projektowej](/i18n.site) .

## Kontaktować Się

<button onclick="mailsub()">Kliknij ten e-mail, aby subskrybować aktualizacje produktu</button> i <button onclick="webpush()">włączyć funkcję push w przeglądarce</button> . Powiadomimy Cię, gdy zostaną wprowadzone aktualizacje produktu.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) również do śledzenia naszych kont / [X.COM: @i18nSite](https://x.com/i18nSite)

Jeśli napotkasz problemy [→ napisz na forum użytkowników](https://groups.google.com/u/1/g/i18n) .

## O Nas

> Powiedzieli: Przyjdź, zbuduj wieżę sięgającą nieba i rozsław ludzkość.
>
> Pan to zobaczył i powiedział: „Wszyscy ludzie mają ten sam język i tę samą rasę. Teraz, gdy to się dokonało, wszystko się stanie”.
>
> Potem nadeszło, uniemożliwiając ludziom wzajemne zrozumienie języka i rozproszyło się w różnych miejscach.

<p style="text-align:right">──Biblia·Księga Rodzaju</p>

Chcemy budować Internet bez izolacji komunikacji językowej.
Mamy nadzieję, że cała ludzkość zjednoczy się we wspólnym marzeniu.

Witryny z tłumaczeniami i dokumentacją Markdown to dopiero początek.
Synchronizuj publikowanie treści w mediach społecznościowych;
Obsługa dwujęzycznych komentarzy i czatów;
Wielojęzyczny system biletów, który może wypłacać nagrody;
Rynek sprzedaży międzynarodowych komponentów front-end;
Chcielibyśmy zrobić o wiele więcej.

Wierzymy w open source i kochamy dzielenie się,
Zapraszamy do wspólnego tworzenia przyszłości bez granic.

> [!NOTE]
> Z niecierpliwością czekamy na spotkanie ludzi o podobnych poglądach w rozległym morzu ludzi.
> Poszukujemy wolontariuszy do udziału w rozwoju kodu open source i korekcie tłumaczonych tekstów.
> Jeśli jesteś zainteresowany, prosimy [→ Kliknij tutaj, aby wypełnić swój profil](https://ggl.link/i18n) , a następnie dołącz do [listy mailingowej](https://groups.google.com/u/2/g/i18n-site) w celu komunikacji.