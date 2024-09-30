# Wyszukiwanie pełnotekstowe w czystym stylu front-end

## Sekwencja

Po kilku tygodniach rozwoju, [i18n.site](//i18n.site) (czysto statyczne narzędzie do tłumaczenia markdown wielojęzycznego i tworzenia stron internetowych) teraz obsługuje wyszukiwanie pełnotekstowe na poziomie front-end.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

W tym artykule podzielę się techniczną implementacją pełnotekstowego wyszukiwania na `i18n.site` z poziomu front-end. Odwiedź [i18n.site](//i18n.site), aby doświadczyć efektu wyszukiwania.

Kod jest open source: [Kern serca wyszukiwania](//github.com/i18n-site/ie/tree/main/qy) / [Interaktywny interfejs](//github.com/i18n-site/plugin/tree/main/qy)

## Przegląd rozwiązań do wyszukiwania pełnotekstowego bez serwera

W przypadku małych i średnich, czysto statycznych witryn internetowych, takich jak dokumenty/blogi osobiste, zbudowanie samodzielnego zaplecza wyszukiwania pełnotekstowego jest zbyt skomplikowane, a częstszym wyborem jest pełnotekstowe wyszukiwanie bez konieczności korzystania z usług.

Bezserwerowe rozwiązania do wyszukiwania pełnotekstowego dzielą się na dwie główne kategorie:

Pierwsza to zewnętrzni dostawcy usług wyszukiwania, tacy jak [algolia.com](//algolia.com), którzy oferują komponenty front-end do pełnotekstowego wyszukiwania.

Tego rodzaju usługi wymagają opłat w zależności od liczby wyszukiwań i często są niedostępne dla użytkowników z Chin kontynentalnych ze względu na problemy z zgodnością strony.

Nie można ich używać offline ani w sieciach wewnętrznych, co jest dużym ograniczeniem. W tym artykule nie będziemy się nimi zajmować.

Druga kategoria to pełnotekstowe wyszukiwanie z poziomu front-end.

Powszechnie używane wyszukiwania pełnotekstowe typu front-end obejmują [lunrjs](/0) i [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` oferuje dwa sposoby tworzenia indeksów, oba z własnymi problemami.

1. Gotowe pliki indeksowe

   Ponieważ indeks zawiera wszystkie słowa z dokumentów, jest duży.
   Za każdym razem, gdy dokument jest dodawany lub modyfikowany, należy załadować nowy plik indeksu.
   To wydłuża czas oczekiwania użytkowników i zużywa dużo przepustowości.

2. Ładuj dokumenty i buduj indeksy w czasie rzeczywistym

   Budowanie indeksu jest zadaniem obliczeniowo intensywnym. Odbudowa indeksu za każdym razem, gdy uzyskujesz do niego dostęp, powoduje zauważalne opóźnienia i pogarsza jakość użytkowania.

---

Oprócz `lunrjs` istnieją inne rozwiązania do wyszukiwania pełnotekstowego, takie jak:

[fusejs](https://www.fusejs.io), który oblicza podobieństwo między ciągami do przeszukiwania.

To rozwiązanie ma bardzo słabą wydajność i nie nadaje się do wyszukiwania pełnotekstowego (patrz [Fuse.js Długie zapytanie zajmuje więcej niż 10 sekund, jak to zoptymalizować?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](https://github.com/tinysearch/tinysearch), który używa filtra Bloom do wyszukiwania, nie nadaje się do wyszukiwania prefiksów (np. wpisz `goo`, szukaj `good`, `google`), nie można uzyskać efektu automatycznego uzupełniania.

Ponieważ istniejące rozwiązania mają swoje wady, `i18n.site` opracował nowe, w pełni front-endowe rozwiązanie do pełnotekstowego wyszukiwania, które wyróżnia się następującymi cechami:

1. Obsługuje wyszukiwanie wielojęzyczne, jest mały i po spakowaniu `gzip` ma rozmiar `6.9KB` (porównaj z `lunrjs`, który ma `25KB`)
1. Buduje odwrócony indeks na podstawie `indexedb`, co zajmuje mniej pamięci i jest szybkie
1. Kiedy dokumenty są dodawane/modyfikowane, ponownie indeksowane są tylko te, co zmniejsza obciążenie obliczeniowe
1. Obsługuje wyszukiwanie prefiksowe i może wyświetlać wyniki wyszukiwania w czasie rzeczywistym, gdy użytkownik wpisuje tekst
1. Dostępne offline

Poniżej szczegółowo omówię implementację techniczną `i18n.site`.

## Wielojęzyczna segmentacja słów

Segmentacja słów wykorzystuje natywną funkcję przeglądarki `Intl.Segmenter`, która jest obsługiwana przez wszystkie główne przeglądarki.

![](https://p.3ti.site/1727667759.avif)

Kod segmentacji słów w `coffeescript` wygląda następująco:

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

W:

* `/\p{P}/` to wyrażenie regularne pasujące do znaków interpunkcyjnych. Konkretnie, pasujące symbole to: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } `.</p><ul><li> `split('.')` wynika z tego, że segmentacja słów w przeglądarce `Firefox` nie obejmuje segmentacji `.` .</li>


## Budowa indeksu

W `IndexedDB` utworzono 5 tabel do przechowywania obiektów:

* `word`: id - słowo
* `doc`: id - url dokumentu - numer wersji dokumentu
* `docWord`: id dokumentu - tablica id słów
* `prefix`: prefiks - tablica id słów
* `rindex`: id słowa - tablica id dokumentów: numer linii

Przekaż tablicę `url` dokumentu i numer wersji `ver`, sprawdź, czy dokument istnieje w tabeli `doc`. Jeśli nie istnieje, utwórz odwrócony indeks. Jednocześnie usuń odwrócony indeks dla tych dokumentów, które nie zostały przekazane.

W ten sposób można osiągnąć indeksowanie przyrostowe i zmniejszyć ilość obliczeń.

W interakcji z interfejsem użytkownika można wyświetlić pasek postępu ładowania indeksu, aby uniknąć opóźnień podczas pierwszego ładowania. Zobacz „Pasek postępu z animacją, oparty na pojedynczej progress + Czystej css implementacji” [Angielski](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Chiński](https://juejin.cn/post/7413586285954154522).

### IndexedDB Wysoki Poziom Jednoczesnego Zapisu

Projekt jest rozwijany na podstawie asynchronicznej enkapsulacji IndexedDB [idb](https://www.npmjs.com/package/idb).

Odczyty i zapisy w IndexedDB są asynchroniczne. Tworzenie indeksu jest wykonywane jednocześnie dla załadowanych dokumentów.

Aby uniknąć częściowej utraty danych spowodowanej zapisem konkurencyjnym, można dodać pamięć podręczną `ing` między odczytem a zapisem, aby przechwycić konkurencyjne zapisy. Można to zobaczyć w poniższym kodzie `coffeescript`:

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

## Wyszukiwanie w czasie rzeczywistym z prefiksem

Aby wyświetlić wyniki wyszukiwania, gdy użytkownik wpisuje np. `wor`, wyświetlane są słowa zaczynające się na `wor`, takie jak `words` i `work`.

![](https://p.3ti.site/1727684944.avif)

Jądro wyszukiwania użyje tabeli `prefix` do znalezienia wszystkich słów zaczynających się na ostatnie słowo po segmentacji i przeszuka je po kolei.

Funkcja `debounce` jest stosowana w interakcji z interfejsem użytkownika (zaimplementowana w następujący sposób) w celu zmniejszenia częstotliwości wywoływania wyszukiwań i obniżenia obciążenia obliczeniowego.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Dokładność i pełność

Wyszukiwanie najpierw segmentuje słowa kluczowe wprowadzone przez użytkownika.

Załóżmy, że po segmentacji jest `N` słów. Podczas zwracania wyników najpierw zostaną zwrócone wyniki zawierające wszystkie słowa kluczowe, a następnie wyniki zawierające `N-1`, `N-2`, ..., `1` słowo kluczowe.

Wyniki wyszukiwania wyświetlane w pierwszej kolejności zapewniają dokładność zapytania, a wyniki ładowane później (po kliknięciu przycisku „Załaduj więcej”) zapewniają pełność.

![](https://p.3ti.site/1727684564.avif)

## Ładowanie na żądanie

Aby poprawić szybkość odpowiedzi, wyszukiwanie wykorzystuje generator `yield` do implementowania ładowania na żądanie i zwraca wyniki po osiągnięciu `limit`.

Pamiętaj, że za każdym razem, gdy będziesz szukać ponownie po `yield`, musisz ponownie otworzyć transakcję zapytania do `IndexedDB`.

## Wyszukiwanie w czasie rzeczywistym z prefiksem

Aby wyświetlić wyniki wyszukiwania, gdy użytkownik wpisuje np. `wor`, wyświetlane są słowa zaczynające się na `wor`, takie jak `words` i `work`.

![](https://p.3ti.site/1727684944.avif)

Jądro wyszukiwania użyje tabeli `prefix` do znalezienia wszystkich słów zaczynających się na ostatnie słowo po segmentacji i przeszuka je po kolei.

Funkcja `debounce` jest stosowana w interakcji z interfejsem użytkownika (zaimplementowana w następujący sposób) w celu zmniejszenia częstotliwości wywoływania wyszukiwań i obniżenia obciążenia obliczeniowego.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Dostępne offline

Tabela indeksowa nie przechowuje oryginalnego tekstu, tylko słowa, co zmniejsza ilość miejsca.

Podświetlanie wyników wyszukiwania wymaga ponownego załadowania oryginalnego tekstu, a dopasowanie `service worker` pozwala uniknąć powtarzających się żądań sieciowych.

Jednocześnie, ponieważ `service worker` buforuje wszystkie artykuły, po przeprowadzeniu wyszukiwania przez użytkownika cała witryna internetowa, łącznie z wyszukiwaniem, jest dostępna w trybie offline.

## Optymalizacja wyświetlania dokumentów Markdown

Rozwiązanie do wyszukiwania wyłącznie z przodu `i18n.site` jest zoptymalizowane pod kątem dokumentów `MarkDown`.

Podczas wyświetlania wyników wyszukiwania zostanie wyświetlona nazwa rozdziału, a po kliknięciu można nawigować do tego rozdziału.

![](https://p.3ti.site/1727686552.avif)

## Podsumowanie

Pełnotekstowe wyszukiwanie z odwróconą indeksacją zaimplementowane w pełni na poziomie front-end, bez potrzeby serwera. Idealne dla małych i średnich stron, takich jak dokumenty i blogi osobiste.

`i18n.site` oferuje otwarte, samodzielnie opracowane wyszukiwanie front-end, które jest małe i szybkie, rozwiązując problemy obecnego pełnotekstowego wyszukiwania front-end, oferując lepsze doświadczenie użytkownika.