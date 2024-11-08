# Lista Stylów

[Kliknij tutaj, aby przeglądać plik źródłowy tej strony](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) i dowiedzieć się, jak zapisać `MarkDown` w następujących stylach.

## Złożony Blok

|+| Co to jest MarkDown?

    MarkDown to lekki język znaczników, który umożliwia użytkownikom tworzenie sformatowanych dokumentów w formacie zwykłego tekstu, który jest łatwy do odczytania i zapisu.

    Powszechnie używany do pisania dokumentacji, artykułów na blogach, e-booków, postów na forach itp.

    Ma następujące zalety:

    1. Łatwy do nauczenia
    1. Bardzo czytelny
    1. Przyjazny dla kontroli wersji

       Ponieważ dokumenty `MarkDown` są w formacie zwykłego tekstu, programiści mogą z łatwością włączyć je do systemów kontroli wersji (takich jak `git` ).

       Dzięki temu śledzenie zmian i współpraca są znacznie prostsze, zwłaszcza w zakresie rozwoju zespołu.

|-| Co to jest I18N?

    „I18N” to skrót od „internacjonalizacji”.

    Ponieważ słowo „internacjonalizacja” składa się z 18 liter pomiędzy „I” i „N”, w celu uproszczenia reprezentacji zastosowano „I18N”.

    W kategoriach laika oznacza to obsługę wielu języków.


Blok składany to rozszerzona składnia od `i18n.site` do `MarkDown` , zapisana w następujący sposób :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

z `|+| `或`|-| Linia rozpoczynająca się od ` wygeneruje blok składany, a zawartością bloku składającego będą kolejne wiersze o tym samym poziomie wcięcia (akapity oddzielane są pustymi liniami).

Przepustka|-| `标记的折叠块默认展开，`|+| `Oznaczone zwinięte bloki są domyślnie zwinięte.

## Podkreśl & Przekreślenie &

To jest __ Podkreślenie __ ,~~ przekreślenie~~ i **pogrubiony** tekst prezentacji.

Jest napisane w następujący sposób:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parser `MarkDown` narzędzia do tworzenia witryn internetowych `i18n.site` ma zoptymalizowaną składnię podkreśleń, przekreśleń i pogrubień. Może działać bez spacji przed i po znaku, co ułatwia pisanie dokumentów w językach takich jak Chiny, Japonia i Korea. nie używaj spacji jako separatorów.

Dłuższe czytanie : [Dlaczego składnia Markdown Nuggetsa ( `**……**` ) czasami nie działa?](//juejin.cn/post/7064565848421171213)

## Cytat

### Cytat W Jednej Linijce

> Mam taką naturę, że moje talenty będą przydatne i wrócę, gdy wydadzą wszystkie moje pieniądze.
<p style="text-align:right">─ Li Bai</p>

### Cytaty Z Wielu Linii

> Kolejną wyjątkową zaletą science fiction jest jej niezwykle szeroki zakres.
> „Wojna i pokój” w milionie słów opisuje jedynie historię regionu na kilka dziesięcioleci;
> A powieści science fiction, takie jak „Ostateczna odpowiedź” Asimova, żywo opisują miliardy lat historii całego wszechświata, w tym istot ludzkich, w zaledwie kilku tysiącach słów.
> Takiej inkluzywności i śmiałości nie da się osiągnąć w tradycyjnej literaturze.
<p style="text-align:right">── Liu Cixina</p>

### Wskazówka `> [!TIP]`

> [!TIP]
> Pamiętaj, aby sprawdzić ważność paszportu i wizy. Dokumenty, które utraciły ważność, nie mogą wjechać ani wyjechać z kraju.

Jest napisane w następujący sposób

```
> [!TIP]
> YOUR CONTENT
```

### Uwaga `> [!NOTE]`

> [!NOTE]
> Jeśli wyślesz mi wiadomość, a ja natychmiast odpowiem, co to oznacza?
> To pokazuje, że naprawdę kocham bawić się telefonami komórkowymi.


### Ostrzeżenie `> [!WARN]`

> [!WARN]
> Wybierając się na dziką przygodę, ważne jest, aby zachować bezpieczeństwo. Oto kilka kluczowych wskazówek dotyczących bezpieczeństwa:
>
> - **Sprawdź prognozę pogody** : W zeszłym tygodniu grupę wspinaczy napotkała burza w połowie góry, ponieważ nie sprawdzili prognozy pogody i musieli pilnie się ewakuować.
> - **Noś niezbędny sprzęt** : Upewnij się, że masz ze sobą wystarczającą ilość żywności, wody i środków pierwszej pomocy.
> - **Zrozumienie terenu** : Zapoznaj się z terenem i trasami obszaru przygód z wyprzedzeniem, aby uniknąć zgubienia się.
> - **Pozostań w kontakcie** : pozostań w kontakcie ze światem zewnętrznym i upewnij się, że wszyscy mogą bezpiecznie wrócić.
>
> Pamiętaj, że bezpieczeństwo jest zawsze na pierwszym miejscu!

## Lista Rzeczy Do Zrobienia

- [x] Zaprojektuj prototyp produktu i listę funkcji
- [ ] Określ stos technologii i narzędzia programistyczne
- [ ] Opracuj harmonogramy i kamienie milowe rozwoju produktu

## Lista

### Uporządkowana Lista

1. działanie
   1. Trzy razy w tygodniu po 5 kilometrów
   1. Przebiegnij półmaraton
1. trening na siłowni
   1. Dwa razy w tygodniu po 1 godzinie za każdym razem
   1. Skoncentruj się na mięśniach rdzenia

### Lista Nieuporządkowana

* wydarzenia towarzyskie
  - Weź udział w spotkaniach wymiany branżowej
    + Sesja dzielenia się technologią
    + Spotkanie Wymiany Przedsiębiorczości
  - Zorganizuj spotkanie przyjaciół
    + Grill na świeżym powietrzu
    + wieczór filmowy

## Arkusz

| myśliciel       | Główne wkłady                           |
|--------------|------------------------------------|
| Konfucjusz         | Założyciel konfucjanizmu |
| Sokrates     | ojciec filozofii zachodniej  |
| Nietzschego         | Filozofia Supermana, krytykująca tradycyjną moralność i religię       |
| Marks       | komunizm |

### Optymalizacja Wyświetlania Dużych Stołów

W przypadku stosunkowo dużych tabel można zastosować następujące metody optymalizacji efektu wyświetlania:

1. Użyj mniejszej czcionki

   Na przykład zawiń tabelę `<div style="font-size:14px">` i `</div>` .

   Pamiętaj, że znacznik `div` musi zajmować oddzielną linię, a przed i po nim pozostawić puste linie.
1. W przypadku dłuższego tekstu w komórce wstaw `<br>` , aby zawinąć linię
1. Jeśli kolumna jest zbyt krótka, możesz dodać `<div style="width:100px">xxx</div>` do nagłówka, aby zwiększyć szerokość, ale możesz także dodać [`<wbr>` do nagłówka](//developer.mozilla.org/docs/Web/HTML/Element/wbr) , aby kontrolować położenie podziału wiersza.

Przykład demonstracyjny jest następujący:

<div style="font-size:14px">

| naród       | <div style="width:70px;margin:auto">imię myśliciela</div> | Era | Główne wkłady ideologiczne                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Chiny       | Konfucjusz                                           | 551-479 p.n.e   | Założyciel konfucjanizmu zaproponował podstawowe pojęcia, takie jak „życzliwość” i „przyzwoitość”, a także położył nacisk na kultywację moralności i porządek społeczny. |
| starożytna Grecja     | Sokrates                                       | 469-399 p.n.e   | Zgłębianie prawdy poprzez dialog i dialektykę proponuje „poznać siebie” i kładzie nacisk na racjonalne myślenie         |
| Francja       | Wolter                                         | 1694-1778       | Reprezentatywne postacie Oświecenia opowiadały się za racjonalnością, wolnością i równością oraz krytykowały przesądy religijne i rządy autorytarne.   |
| Niemcy       | Kanta                                           | 1724-1804       | Przedstaw „Krytykę czystego rozumu”<br> Bada podstawy moralności, wolności i wiedzy, kładąc nacisk na rozum praktyczny     |

</div>

Pseudokod powyższego przykładu wygląda następująco:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kod

### Kod Wbudowany

W rozległym świecie języków programowania liczby `Rust` , `Python` , `JavaScript` i `Go` zajmują unikalną pozycję.

### Wiele Linii Kodu

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Podział Wiersza W Akapicie

Podziały wierszy w akapitach można uzyskać bez dodawania pustych wierszy między wierszami.
Odstępy między podziałami wierszy w akapitach są mniejsze niż odstępy między akapitami.

Na przykład:

> Żyj jak wspaniały człowiek,
> Śmierć jest także bohaterem-duchem.
> Wciąż tęsknię za Xiang Yu,
> Niechętny do przekroczenia Jiangdong.
>
> Li Qingzhao wykorzystał tragiczną historię Xiang Yu, aby zasygnalizować niekompetencję dynastii Song.
> Wyrażając niezadowolenie z dworu cesarskiego za poddanie się bez walki.