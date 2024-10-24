# Style List

[Dzvanya pano kuti utarise iro faira repeji rino](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) kuti uone manyorerwo `MarkDown` mumataera anotevera.

## Underline & Strikethrough &

__ ndiyo Underscore __ ,~~ strikethrough~~ uye mashoko **akajeka** emharidzo.

Zvakanyorwa sezvinotevera:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Iyo `MarkDown` parser `i18n.site` yekuvaka webhusaiti chishandiso yakagonesa iyo underline, strikethrough, uye yakashinga syntax Inogona kushanda pasina nzvimbo pamberi uye mushure mechiratidzo, zvichiita kuti zvive nyore kunyora magwaro mumitauro yakaita seChina, Japan, neKorea. isingashandisi nzvimbo sezviparadzanisa.

Kuwedzera kuverenga : [Nei Nuggets ' Markdown syntax ( `**……**` ) dzimwe nguva isingaite?](//juejin.cn/post/7064565848421171213)

## Quote

### Single Line Quote

> Chimiro changu kuti zvipo zvangu zvichabatsira, uye ndichadzoka mari yangu yose yapera.
<p style="text-align:right">─ Li Bai</p>

### Multiple Line Quotes

> Imwe mukana wakasarudzika wesainzi ngano kuwanda kwayo kwakatambanuka zvakanyanya.
> "Hondo neRugare", ine miriyoni yemashoko, inongotsanangura nhoroondo yedunhu kwemakumi emakore akati wandei;
> Uye mabhuku enganonyorwa esainzi akadai saAsimov “Mhinduro Yokupedzisira” anotsanangura zvakajeka mabhiriyoni amakore enhau yechisiko chose, kubatanidza vanhu, muzviuru zvishomanene zvamashoko.
> Kubatanidzwa kwakadaro uye ushingi hazvibviri kuwana mumabhuku echinyakare.
<p style="text-align:right">── Liu Cixin</p>

### `> [!TIP]`

> [!TIP]
> Rangarira kutarisa chokwadi chepasipoti yako uye vhiza magwaro akapera nguva haigone kupinda kana kubuda munyika.

Zvakanyorwa sezvinotevera

```
> [!TIP]
> your content
```

### Chirevo `> [!NOTE]`

> [!NOTE]
> Kana mukanditumira meseji ndikapindura ipapo ipapo, zvinorevei?
> Izvi zvinoratidza kuti ndinoda chaizvo kutamba nenharembozha.


### Yambiro `> [!WARN]`

> [!WARN]
> Paunenge uchienda kune imwe nzvimbo yemusango, zvakakosha kuti ugare wakachengeteka.
> Svondo rapfuura, boka revanhu vakakwira vakasangana nedutu pakati pegomo uye vakatofanira kubuda nekuti vakatadza kutarisa mamiriro ekunze.
> Yeuka, basa ripi neripi rokunze rinoda gadziriro yakakwana uye ngwariro kumamiriro okunze.

## Zvekuita List

- [x] Dhizaina chigadzirwa prototype uye chinyorwa chinyorwa
- [ ] Sarudza tekinoroji stack uye maturusi ekuvandudza
- [ ] Gadzira nguva yekugadzirwa kwechigadzirwa uye zviitiko zvakakosha

## List

### Akaodha List

1. kumhanya
   1. Katatu pavhiki, makiromita mashanu nguva imwe neimwe
   1. Mhanyai hafu marathon
1. kurovedza muviri
   1. Kaviri pavhiki, 1 awa nguva imwe neimwe
   1. Tarisa pamhasuru dzepakati

### Unordered List

* zviitiko zvevanhu
  - Tora chikamu mumisangano yekuchinjana kwemaindasitiri
    + Tekinoroji yekugovana chikamu
    + Musangano wekuchinjana mabhizinesi
  - Ronga kuungana kweshamwari
    + Kunze BBQ
    + movie usiku

## Sheet

| thinker       | Mipiro mikuru                           |
|--------------|------------------------------------|
| Confucius         | Muvambi weConfucianism |
| Socrates     | baba veWestern philosophy  |
| Nietzsche         | Superman philosophy, kutsoropodza tsika dzechinyakare uye chitendero       |
| marx       | communism |

## Code

### Inline Code

Munyika yakakura yemitauro yekuronga, `Rust` , `Python` , `JavaScript` uye `Go` imwe neimwe inotora chinzvimbo chakasiyana.

### Mitsara Yakawanda Yekodhi

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```