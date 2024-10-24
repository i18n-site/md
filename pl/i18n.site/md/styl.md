# Lista stylów

[Kliknij tutaj, aby przeglądać plik źródłowy tej strony](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md), aby zobaczyć, jak zapisano poniższy styl `MarkDown`.

## Podkreślenie & Przekreślenie & pogrubienie

To jest __podkreślenie__, ~~poniżej linii~~ oraz **pogrubienie** tekstu demonstracyjnego.

Zapisano to w następujący sposób:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Narzędzie do tworzenia stron `i18n.site` zoptymalizowało parser `MarkDown` pod kątem podkreśleń, przekreśleń i pogrubień, umożliwiając działanie tych funkcji bez konieczności umieszczania spacji przed i po znakach, co ułatwia tworzenie dokumentów w językach takich jak chiński, japoński i koreański, które nie używają spacji jako separatorów.

Rozszerzone czytanie: [Dlaczego czasami Markdown w GoldMinerze ( `**……**` ) nie działa poprawnie?](//juejin.cn/post/7064565848421171213)

## Cytat

### Cytat w jednej linijce

> Mam taką naturę, że moje talenty będą przydatne i wrócę, gdy wydadzą wszystkie moje pieniądze.
<p style="text-align:right">─ Li Bai</p>

### Cytaty wieloliniowe

> Jedną z unikalnych zalet science fiction jest jej niezwykle szeroki horyzont.
> „ Wojna i pokój ”, liczący setki tysięcy słów, opisuje tylko historię jednego regionu na przestrzeni kilku dziesięcioleci;
> Alors kuin powieść science fiction, jak „Ostateczna odpowiedź” Asimova, w zaledwie kilku tysiącach słów barwnie opisuje kilka miliardów lat historii wszechświata, w tym historię ludzi.
> Taka pojemność i odwaga są niedostępne dla tradycyjnej literatury.
<p style="text-align:right">── Liu Cixina</p>

### Wskazówka `> [!TIP]`

> [!TIP]
> Pamiętaj, aby sprawdzić ważność paszportu i wizy. Wygasłe dokumenty nie umożliwiają wjazdu ani wyjazdu z kraju.

Sformułowanie brzmi następująco

```
> [!TIP]
> your content
```

### Przypis `> [!NOTE]`

> [!NOTE]
> Jeśli wyślesz mi wiadomość, a ja odpowiem natychmiast, co to oznacza?
> Oznacza to, że naprawdę kocham używać telefonu.


### Ostrzeżenie `> [!WARN]`

> [!WARN]
> Podczas eksploracji dzikiej natury, upewnij się, że bierzesz pod uwagę swoje bezpieczeństwo.
> W zeszłym tygodniu grupa wspinaczy napotkała na burzę na połowie drogi, ponieważ nie sprawdzili prognozy pogody, i musiała zostać ewakuowana w trybie awaryjnym.
> Pamiętaj, że każda aktywność na łonie natury wymaga odpowiedniego przygotowania i uwagi do warunków pogodowych.

## Do zrobienia

- [x] Zaprojektuj prototyp produktu i listę funkcji
- [ ] Zdecyduj się na stos technologii i narzędzia deweloperskie
- [ ] Stwórz harmonogram i kamienie milowe dla rozwoju produktu

## Lista

### Lista uporządkowana

1. Bieganie
   1. Trzy razy w tygodniu po 5 kilometrów
   1. Uczestnicz w półmaratonie
1. Trening na siłowni
   1. Dwa razy w tygodniu po jednej godzinie
   1. Skieruj uwagę na trening mięśni核心

### Lista nieuporządkowana

* Spotkania towarzyskie
  - Uczestnicz w branżowych spotkaniach wymiany
    + Sesje dzielenia się wiedzą techniczną
    + Spotkania wymiany dla przedsiębiorców
  - Zorganizuj spotkanie z przyjaciółmi
    + Grill na świeżym powietrzu
    + Wieczór filmowy

## Tabela

| Myśliciel       | Główne osiągnięcia                           |
|--------------|------------------------------------|
| Konfucjusz         | Założyciel nurtu konfucjanizmu |
| Sokrates     | Ojciec zachodniej filozofii  |
| Nietzsche         | Filozofia nadczłowieka, krytyka tradycyjnej moralności i religii       |
| Marks       | Komunizm |

## Kod

### Kod w linii

W szerokim świecie języków programowania `Rust`, `Python`, `JavaScript` i `Go` zajmują unikalne pozycje.

### Wiele linii kodu

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```