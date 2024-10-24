# Stilių Sąrašas

[Spustelėkite čia, norėdami naršyti šio puslapio šaltinio failą](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) ir pamatyti, kaip rašyti `MarkDown` šiais stiliais.

## & &

Tai __ pabraukimas __ ,~~ perbrauktas~~ ir **paryškintas** pristatymo tekstas.

Tai parašyta taip:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` svetainių kūrimo įrankio `MarkDown` analizatorius optimizavo pabraukimą, perbraukimą ir paryškintą sintaksę. Jis gali veikti be tarpų prieš ir po ženklą, todėl lengviau rašyti dokumentus tokiomis kalbomis kaip Kinija, Japonija ir Korėja. kuriose tarpai nenaudojami kaip skyrikliai.

Išplėstinis : [Kodėl „Nuggets“ sintaksė Markdown ( `**……**` ) kartais neveikia?](//juejin.cn/post/7064565848421171213)

## Citata

### Vienos Eilutės Citata

> Mano prigimtis, kad mano gabumai bus naudingi, ir aš grįšiu, kai bus išleisti visi pinigai.
<p style="text-align:right">─ Li Bai</p>

### Kelių Eilučių Citatos

> Kitas išskirtinis mokslinės fantastikos privalumas – itin plati taikymo sritis.
> „Karas ir taika“ su milijonu žodžių apibūdina tik kelių dešimtmečių regiono istoriją;
> O mokslinės fantastikos romanai, tokie kaip Asimovo „Galutinis atsakymas“, vos keliais tūkstančiais žodžių vaizdžiai aprašo milijardus metų trukusią visos visatos, įskaitant žmones, istoriją.
> Tokio įtraukumo ir drąsos tradicinėje literatūroje pasiekti neįmanoma.
<p style="text-align:right">── Liu Ciksinas</p>

### Patarimas `> [!TIP]`

> [!TIP]
> Nepamirškite patikrinti savo paso galiojimo ir vizos, kurių galiojimo laikas pasibaigęs, negali įvažiuoti ar išvykti iš šalies.

Tai parašyta taip

```
> [!TIP]
> your content
```

### Pastaba `> [!NOTE]`

> [!NOTE]
> Jei atsiųsite man žinutę ir aš iškart atsakysiu, ką tai reiškia?
> Tai rodo, kad man labai patinka žaisti su mobiliaisiais telefonais.


### Įspėjimas `> [!WARN]`

> [!WARN]
> Leidžiantis į laukinius nuotykius, svarbu išlikti saugiems.
> Praėjusią savaitę grupė alpinistų susidūrė su audra pusiaukelėje į kalną ir turėjo evakuotis, nes nepavyko patikrinti orų prognozės.
> Atminkite, kad bet kokia veikla lauke reikalauja tinkamo pasiruošimo ir dėmesio oro sąlygoms.

## Užduočių Sąrašas

- [x] Dizaino gaminio prototipas ir funkcijų sąrašas
- [ ] Nustatykite technologijų krūvą ir kūrimo įrankius
- [ ] Sukurkite produktų kūrimo terminus ir gaires

## Sąrašą

### Užsakytas Sąrašas

1. bėgimas
   1. Tris kartus per savaitę, kaskart po 5 kilometrus
   1. Nubėgti pusmaratonį
1. treniruotės sporto salėje
   1. Du kartus per savaitę, po 1 val
   1. Sutelkite dėmesį į pagrindinius raumenis

### Netvarkingas Sąrašas

* socialiniai renginiai
  - Dalyvaukite pramonės mainų susitikimuose
    + Technologijų dalijimosi sesija
    + Verslumo mainų susitikimas
  - Organizuokite draugų susibūrimą
    + Lauko kepsninė
    + kino vakaras

## Lapas

| mąstytojas       | Pagrindiniai įnašai                           |
|--------------|------------------------------------|
| Konfucijus         | Konfucianizmo įkūrėjas |
| Sokratas     | Vakarų filosofijos tėvas  |
| Nietzsche         | Supermeno filosofija, kritikuojanti tradicinę moralę ir religiją       |
| marksas       | komunizmas |

## Kodas

### Eilutinis Kodas

Didžiuliame programavimo kalbų pasaulyje `Rust` , `Python` , `JavaScript` ir `Go` kiekvienas užima unikalią vietą.

### Kelios Kodo Eilutės

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```