# Stiilide Loend

[Selle lehe lähtefaili sirvimiseks klõpsake siin,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) et näha, kuidas kirjutada `MarkDown` järgmistes stiilides.

## & &

See __ __~~ läbikriipsutatud~~ ja **paks** esitlustekst.

See on kirjutatud järgmiselt:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` loomise tööriista `MarkDown` parser on optimeerinud allakriipsutamist, läbikriipsutamist ja paksus kirjas süntaksit. See võib toimida ilma tühikuteta märgi ees ja järel, muutes dokumentide kirjutamise lihtsamaks sellistes keeltes nagu Hiina, Jaapan ja Korea. mis ei kasuta eraldajatena tühikuid.

Pikendatud : [Miks Nuggetsi Markdown süntaks ( `**……**` ) mõnikord ei kehti?](//juejin.cn/post/7064565848421171213)

## Tsiteeri

### Üherealine Tsitaat

> Minu olemus on, et mu anded tulevad kasuks ja ma tulen tagasi, kui kogu oma raha on kulutatud.
<p style="text-align:right">─ Li Bai</p>

### Mitu Rida Tsitaate

> Teine ulme ainulaadne eelis on selle äärmiselt lai ulatus.
> Miljoni sõnaga "Sõda ja rahu" kirjeldab vaid ühe piirkonna ajalugu mitme aastakümne jooksul;
> Ja ulmeromaanid nagu Asimovi "Lõplik vastus" kirjeldavad ilmekalt kogu universumi, sealhulgas inimeste, miljardite aastate pikkust ajalugu vaid mõne tuhande sõnaga.
> Sellist kaasatust ja julgust on traditsioonilises kirjanduses võimatu saavutada.
<p style="text-align:right">── Liu Cixin</p>

### Vihje `> [!TIP]`

> [!TIP]
> Ärge unustage kontrollida oma passi ja viisa kehtivust. Aegunud dokumendid ei saa riiki siseneda ega riigist lahkuda.

See on kirjutatud järgmiselt

```
> [!TIP]
> YOUR CONTENT
```

### Märkus `> [!NOTE]`

> [!NOTE]
> Kui saadate mulle sõnumi ja ma vastan kohe, mida see tähendab?
> See näitab, et mulle väga meeldib mobiiltelefonidega mängida.


### Hoiatus `> [!WARN]`

> [!WARN]
> Metsikule seiklusele minnes on oluline olla turvaline.
> Eelmisel nädalal tabas grupp mägironijaid poolel teel tormi ja pidi evakueeruma, kuna ei suutnud ilmateadet kontrollida.
> Pidage meeles, et igasugune välitegevus nõuab piisavat ettevalmistust ja ilmastikule tähelepanu pööramist.

## Ülesannete Nimekiri

- [x] Disaini toote prototüüp ja funktsioonide loend
- [ ] Tehnoloogia virna ja arendustööriistade määramine
- [ ] Töötage välja tootearenduse ajakavad ja verstapostid

## Nimekirja

### Tellitud Nimekiri

1. jooksmine
   1. Kolm korda nädalas, iga kord 5 kilomeetrit
   1. Jookse poolmaraton
1. jõusaali treeningud
   1. Kaks korda nädalas, iga kord 1 tund
   1. Keskenduge süvalihastele

### Järjestamata Nimekiri

* seltskondlikud üritused
  - Osalege tööstuse vahetuskohtumistel
    + Tehnoloogia jagamise seanss
    + Ettevõtlusvahetuskohtumine
  - Korraldage sõprade kokkusaamine
    + Väljas BBQ
    + filmiõhtu

## Leht

| mõtleja       | Peamised panused                           |
|--------------|------------------------------------|
| Konfutsius         | Konfutsianismi rajaja |
| Sokrates     | lääne filosoofia isa  |
| Nietzsche         | Supermani filosoofia, mis kritiseerib traditsioonilist moraali ja religiooni       |
| marx       | kommunism |

## Kood

### Tekstisisene Kood

Programmeerimiskeelte tohutus maailmas on `Rust` , `Python` , `JavaScript` ja `Go` ainulaadne koht.

### Mitu Rida Koodi

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```