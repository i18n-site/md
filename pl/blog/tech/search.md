---

brief: |
  i18n.site obsługuje teraz bezserwerowe wyszukiwanie pełnotekstowe.

  W tym artykule przedstawiono implementację czystej technologii wyszukiwania pełnotekstowego z przodu, w tym odwróconego indeksu zbudowanego przez IndexedDB, wyszukiwania prefiksów, optymalizacji segmentacji słów i obsługi wielu języków.

  W porównaniu z istniejącymi rozwiązaniami, wyszukiwanie pełnotekstowe w i18n.site jest niewielkie i szybkie, odpowiednie dla małych i średnich witryn internetowych, takich jak dokumenty i blogi, i jest dostępne w trybie offline.

---

# Odwrócone Wyszukiwanie Pełnotekstowe W Czystym Stylu Front-End

## Sekwencja

Po kilku tygodniach rozwoju, [i18n.site](//i18n.site) (czysto statyczne narzędzie do tworzenia stron internetowych markdown multilingualtranslation & ) obsługuje teraz wyłącznie wyszukiwanie pełnotekstowe w interfejsie użytkownika.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

W tym artykule opisano techniczną implementację wyszukiwania pełnotekstowego w `i18n.site` front-end. Odwiedź [i18n.site](//i18n.site) aby doświadczyć efektu wyszukiwania.

Kod open source : [Szukaj jądra](//github.com/i18n-site/ie/tree/main/qy) / [interaktywny interfejs](//github.com/i18n-site/plugin/tree/main/qy)

## Przegląd Rozwiązań Do Wyszukiwania Pełnotekstowego Bez Użycia Serwera

W przypadku małych i średnich, czysto statycznych witryn internetowych, takich jak dokumenty/blogi osobiste, zbudowanie samodzielnie zbudowanego zaplecza wyszukiwania pełnotekstowego jest zbyt skomplikowane i częstszym wyborem jest wyszukiwanie pełnotekstowe bez usług.

Bezserwerowe rozwiązania do wyszukiwania pełnotekstowego można podzielić na dwie szerokie kategorie:

Po [algolia.com](//algolia.com) , zewnętrzni dostawcy usług wyszukiwania udostępniają komponenty front-end do wyszukiwania pełnotekstowego.

Usługi takie wymagają płatności na podstawie liczby wyszukiwań i często są niedostępne dla użytkowników w Chinach kontynentalnych ze względu na problemy, takie jak zgodność witryny internetowej.

Nie można go używać w trybie offline, nie można go używać w intranecie i ma duże ograniczenia. Ten artykuł nie omawia zbyt wiele.

Drugie to wyszukiwanie pełnotekstowe w trybie front-end.

Obecnie popularne wyszukiwania pełnotekstowe wyłącznie w interfejsie użytkownika obejmują [lunrjs](//lunrjs.com) i [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (w oparciu o `lunrjs` rozwiązań wtórnych).

`lunrjs` ma dwa sposoby tworzenia indeksów, ale oba mają swoje wady.

1. Gotowe pliki indeksowe

   Ponieważ indeks zawiera słowa ze wszystkich dokumentów, jest on duży.
   Za każdym razem, gdy dokument jest dodawany lub modyfikowany, należy załadować nowy plik indeksu.
   Wydłuży to czas oczekiwania użytkownika i zajmie dużo przepustowości.

2. Ładuj dokumenty i twórz indeksy na bieżąco

   Tworzenie indeksu to zadanie wymagające dużej mocy obliczeniowej. Odbudowa indeksu przy każdym dostępie do niego spowoduje oczywiste opóźnienia i pogorszenie komfortu użytkowania.

---

Oprócz `lunrjs` istnieją inne rozwiązania do wyszukiwania pełnotekstowego, takie jak:

[fusejs](//www.fusejs.io) , oblicz podobieństwo między ciągami do przeszukania.

Wydajność tego rozwiązania jest wyjątkowo słaba i nie można go używać do wyszukiwania pełnotekstowego (patrz [Fuse.js Długie zapytanie zajmuje więcej niż 10 sekundy, jak to zoptymalizować?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , użyj filtru Bloom do wyszukiwania, nie można go używać do wyszukiwania prefiksów (na przykład wpisz `goo` , szukaj `good` , `google` ) i nie można uzyskać podobnego efektu automatycznego uzupełniania.

Z powodu wad istniejących rozwiązań, `i18n.site` opracowało nowe, w pełni front-endowe rozwiązanie do wyszukiwania pełnotekstowego, które cechuje się następującymi funkcjami:

1. Wspiera wielojęzyczne wyszukiwanie, jest małe w rozmiarze, a jego rdzeń wyszukiwania po spakowaniu `gzip` waży `6.9KB` (dla porównania, `lunrjs` waży `25KB`)
1. Zbuduj odwrócony indeks na podstawie `indexedb`, co pozwala na mniejsze zużycie pamięci oraz szybsze działanie
1. Kiedy dokumenty są dodawane/modyfikowane, ponownie indeksowane są tylko dodane lub zmodyfikowane dokumenty, co zmniejsza ilość obliczeń
1. Obsługuje wyszukiwanie prefiksowe, które może wyświetlać wyniki wyszukiwania w czasie rzeczywistym, gdy użytkownik pisze
1. Dostępne W Trybie Offline

Poniżej zostanie szczegółowo przedstawiona technologia implementacji `i18n.site`:

## Wielojęzyczna Segmentacja Słów

Segmentacja słów odbywa się za pomocą natywnej funkcji przeglądarki `Intl.Segmenter`, którą obsługują wszystkie popularne przeglądarki.

![](//p.3ti.site/1727667759.avif)

Kod segmentacji słów `coffeescript` jest następujący

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

W:

* `/\p{P}/` to wyrażenie regularne służące do dopasowywania znaków interpunkcyjnych. Wśród dopasowywanych symboli znajdują się: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } `.</p><ul><li> `split('.')` wynika z tego, że segmentacja słów w przeglądarce `Firefox` nie obejmuje segmentacji `. ` .</li>


## Budowa Indeksu

W `IndexedDB` utworzono pięć tabel obiektów:

* `word`: id - słowo
* `doc` : id - url - dokumentu Numer wersji dokumentu
* `docWord`: id dokumentu - tablica id słów
* `prefix`: prefix - tablica id słów
* `rindex`: id słowa - tablica id dokumentów: numer linii

Przekaż tablicę dokumentu `url` i numer wersji `ver` i sprawdź, czy dokument istnieje w tabeli `doc` Jeśli nie istnieje, utwórz odwrócony indeks. Jednocześnie usuń odwrócony indeks dla tych dokumentów, które nie zostały przekazane.

W ten sposób można osiągnąć indeksowanie przyrostowe i zmniejszyć ilość obliczeń.

Podczas interakcji z interfejsem użytkownika można wyświetlić pasek postępu ładowania indeksu, aby uniknąć opóźnień podczas ładowania po raz pierwszy. Zobacz „Pasek postępu z animacją, oparty na pojedynczej progress + Czystej css implementacji” [Angielski](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chiński](//juejin.cn/post/7413586285954154522) .

### IndexedDB Wysoki Poziom Jednoczesnego Zapisu

Projekt [idb](//www.npmjs.com/package/idb) jest w oparciu o asynchroniczną enkapsulację IndexedDB

Odczyty i zapisy w IndexedDB są asynchroniczne. Podczas tworzenia indeksu dokumenty będą ładowane jednocześnie w celu utworzenia indeksu.

Aby uniknąć częściowej utraty danych spowodowanej zapisem konkurencyjnym, możesz odwołać się do poniższego kodu `coffeescript` i dodać pamięć podręczną `ing` pomiędzy odczytem a zapisem, aby przechwycić konkurencyjne zapisy.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## Precyzja I Pamięć

Wyszukiwanie najpierw segmentuje słowa kluczowe wprowadzone przez użytkownika.

Zakładając, że po segmentacji mamy `N` słów, wyniki są zwracane najpierw z wszystkimi słowami kluczowymi, a następnie z `N-1`, `N-2`, ..., `1` słowami kluczowymi.

Wyniki wyszukiwania wyświetlane w pierwszej kolejności zapewniają trafność zapytania, a wyniki ładowane później (kliknij przycisk Załaduj więcej) zapewniają szybkość przypominania.

![](//p.3ti.site/1727684564.avif)

## Załaduj Na Żądanie

Aby poprawić szybkość odpowiedzi, wyszukiwanie wykorzystuje generator `yield` do implementowania ładowania na żądanie i powraca `limit` razem, gdy zapytanie o wynik.

Pamiętaj, że po każdym `yield` należy ponownie otworzyć transakcję zapytania do `IndexedDB`.

## Wyszukiwanie W Czasie Rzeczywistym Z Prefiksem

Aby wyświetlić wyniki wyszukiwania w miarę jak użytkownik wpisuje, na przykład, `wor`, wyświetlane są słowa zaczynające się na `wor`, takie jak `words` i `work`.

![](//p.3ti.site/1727684944.avif)

Jądro wyszukiwania użyje tabeli `prefix` do segmentacji ostatniego słowa po słowie, aby znaleźć wszystkie słowa z nią poprzedzone i wyszukać po kolei.

Funkcja przeciwwstrząsowa `debounce` jest również używana w interakcji z interfejsem użytkownika (zaimplementowana w następujący sposób) w celu zmniejszenia częstotliwości wprowadzania danych przez użytkownika wyzwalających wyszukiwania i zmniejszenia ilości obliczeń.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Dostępne W Trybie Offline

Tabela indeksowa nie przechowuje oryginalnego tekstu, tylko słowa, co zmniejsza ilość miejsca.

Podświetlanie wyników wyszukiwania wymaga ponownego załadowania oryginalnego tekstu, a dopasowanie `service worker` pozwala uniknąć powtarzających się żądań sieciowych.

Jednocześnie, ponieważ `service worker` buforuje wszystkie artykuły, po przeprowadzeniu wyszukiwania przez użytkownika cała witryna internetowa, łącznie z wyszukiwaniem, jest dostępna w trybie offline.

## Optymalizacja Wyświetlania Dokumentów MarkDown

Rozwiązanie do wyszukiwania na froncie `i18n.site` jest zoptymalizowane pod kątem dokumentów `Markdown`.

Podczas wyświetlania wyników wyszukiwania zostanie wyświetlona nazwa rozdziału, a kliknięcie umożliwi nawigację po rozdziale.

![](//p.3ti.site/1727686552.avif)

## Streszczać

Odwrócone wyszukiwanie pełnotekstowe zaimplementowane wyłącznie w interfejsie użytkownika, bez konieczności stosowania serwera. Jest bardzo odpowiedni dla małych i średnich stron internetowych, takich jak dokumenty i blogi osobiste.

`i18n.site` oferuje autorskie, w pełni front-endowe, otwarte rozwiązanie do wyszukiwania, które jest małe i szybkie, rozwiązując wiele problemów związanych z obecnymi rozwiązaniami do wyszukiwania pełnotekstowego na froncie, zapewniając lepsze doświadczenia użytkownika.