# Tyylilista

[Napsauta tätä selaaksesi tämän sivun lähdetiedostoa](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) nähdäksesi, miten `MarkDown`-muotoilu näyttää.

## & &

Tämä on __alleviivaus__, ~~poistettu teksti~~ ja **lihavoitu** esimerkkitexti.

Kirjoitusasu on seuraava:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site`-sivuston rakennustyökalun `Markdown`-parseri on optimoinut alleviivauksen, yliviivauksen ja lihavoitun syntaksin. Nyt merkinnät toimivat ilman välilyöntejä niiden ympärillä, mikä tekee asiakirjojen kirjoittamisesta helpompaa kielille, kuten kiinalle, japanille ja korealle, jotka eivät käytä välilyöntejä erottimina.

Laajennettu lukeminen: [Miksi MarkDownin lihavoidun tekstin syntaksi (`**…**`) ei aina toimi?](//juejin.cn/post/7064565848421171213)

## Lainaus

### Yksirivinen lainaus

> Luonteeni on, että taidoistani on varmasti hyötyä, ja miljarditkin tuhoutuvat, mutta pääsen niitä takaisin.
<p style="text-align:right">─ Li Bai</p>

### Usean rivin lainaus

> Tieteiskirjallisuudella on toinen ainutlaatuinen etu: sen näkymä on erittäin laaja.
> "War and Peace", joka on täynnä miljoona sanaa, käsittelee vain yhden alueen usean vuosikymmenen historiaa;
> Kuitenkin tieteiskirjallisuus, kuten Asimovin "The Last Answer", kuvailee elävästi koko universumin, mukaan ihmiskunnan, miljardien vuosien historiaa vain muutamilla tuhansilla sanoin.
> Tällainen sisältö ja rohkeus on perinteiselle kirjallisuudelle mahdotonta saavuttaa.
<p style="text-align:right">── Liu Cixin</p>

### Vinkki `> [!TIP]`

> [!TIP]
> Muista tarkistaa passin ja viisumin voimassaoloaika. Vanhentuneilla asiakirjoilla ei ole pääsyä maahan tai ulos maasta.

Teksti on muotoiltu seuraavasti

```
> [!TIP]
> your content
```

### Huomio `> [!NOTE]`

> [!NOTE]
> Jos vastaan viesteesi välittömästi, mitä se kertoo?
> Tämä tarkoittaa, että todella rakastan puhelimen käyttöä.


### Varoitus `> [!WARN]`

> [!WARN]
> Kun suunnate wildin seikkailuun, varmista aina oma turvallisuutesi.
> Viime viikolla eräs kiipeilyryhmä kohtasi myrskyn vuorten rinteillä, koska he eivät tarkistaneet sääennustetta, ja heidän oli pakko evakuoitua kiireellisesti.
> Muista, että kaikki ulkoilutoiminnot vaativat riittävää valmistelua ja sään tarkkaa seuraamista.

## Tehtäväluettelo

- [x] Suunnittele tuotteen prototyyppi ja ominaisuusluettelo
- [ ] Määritä teknologiapino ja kehitystyökalut
- [ ] Luo tuotekehityksen aikataulu ja virstanpylväät

## Lista

### Järjestetty lista

1. Juokse
   1. Kolme kertaa viikossa, 5 kilometriä kerrallaan
   1. Osallistu puolimarathoniin
1. Kuntosaliharjoittelu
   1. Kaksi kertaa viikossa, tunti kerrallaan
   1. Keskity ydinlihaksiin

### Järjestämätön lista

* Sosiaaliset tapahtumat
  - Osallistu alan vaihtokokouksiin
    + Teknologian jakamiskerrat
    + Yrittäjyysvaihtokerrat
  - Järjestä ystävien tapaaminen
    + Ulkogrilli
    + Elokuva-ilta

## Taulukko

| Ajattelija       | Pääasialliset saavutukset                           |
|--------------|------------------------------------|
| Confucius         | Confucianismin perustaja |
| Sokrates     | Länsimaisen filosofian isä  |
| Nietzsche         | SUPERMIES-filosofia, joka haastaa perinteisen moraalin ja uskonnon       |
| Marx       | Communismi |

## Koodi

### Rivin sisäinen koodi

Ohjelmointikielten laajassa maailmassa `Rust`, `Python`, `JavaScript` ja `Go` jokaisella on oma ainutlaatuinen paikkansa.

### Useita koodirivejä

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```