# Tyylilista

[Napsauta tätä selataksesi tämän sivun lähdetiedostoa](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) nähdäksesi kuinka kirjoittaa `MarkDown` seuraavissa tyyleissä.

## Taitettu Lohko

|+| Mikä on MarkDown?

    MarkDown on kevyt merkintäkieli, jonka avulla käyttäjät voivat luoda muotoiltuja asiakirjoja vain tekstimuodossa, jota on helppo lukea ja kirjoittaa.

    Käytetään yleisesti dokumenttien, blogiartikkelien, e-kirjojen, foorumiviestien jne. kirjoittamiseen.

    Sillä on seuraavat edut:

    1. Helppo oppia
    1. Erittäin luettava
    1. Versionhallinta ystävällinen

       Koska `MarkDown` asiakirjat ovat vain tekstimuodossa, ohjelmoijat voivat helposti sisällyttää ne versionhallintajärjestelmiin (kuten `git` ).

       Tämä tekee muutosten seurannasta ja yhteistyöstä paljon yksinkertaisempaa, etenkin tiimin kehittämisessä.

|-| Mikä on I18N?

    "I18N" on lyhenne sanoista "kansainvälistyminen".

    Koska sanassa "kansainvälistyminen" on 18 kirjainta "I":n ja "N:n" välissä, "I18N" käytetään esitystavan yksinkertaistamiseksi.

    Maallikon termein se tarkoittaa useiden kielten tukemista.


Taittolohko on laajennettu syntaksi `i18n.site` - `MarkDown` , joka on kirjoitettu seuraavasti :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

kanssa `|+| `或`|-| Kirjaimella ` alkava rivi luo taittolohkon, ja taittolohkon sisältö on seuraavat rivit, joilla on sama sisennys (kappaleet erotetaan tyhjillä viivoilla).

Pass'|-| `标记的折叠块默认展开，`|+| `Tagoidut kutistetut lohkot kutistetaan oletusarvoisesti.

## & &

Tämä on __ __ ,~~ yliviivattu~~ ja **lihavoitu** esitysteksti.

Se on kirjoitettu seuraavasti:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` verkkosivuston rakennustyökalun `MarkDown` jäsennys on optimoitu alleviivauksella, yliviivauksella ja lihavoitulla. Se voi toimia ilman välilyöntejä ennen ja jälkeen merkin, mikä helpottaa asiakirjojen kirjoittamista kielillä, kuten Kiina, Japani ja Korea. älä käytä välilyöntejä erottimina.

Laajennettu : [Miksi Nuggetsin Markdown syntaksi ( `**……**` ) ei toisinaan vaikuta?](//juejin.cn/post/7064565848421171213)

## Lainata

### Yhden Rivin Lainaus

> Luonteeni on, että taidoistani on hyötyä, ja tulen takaisin, kun kaikki rahani on käytetty.
<p style="text-align:right">─ Li Bai</p>

### Useita Rivejä Lainauksia

> Toinen tieteiskirjallisuuden ainutlaatuinen etu on sen erittäin laaja soveltamisala.
> "Sota ja rauha", jossa on miljoona sanaa, kuvaa vain alueen historiaa useiden vuosikymmenien ajan;
> Ja tieteiskirjallisuusromaanit, kuten Asimovin "The Final Answer", kuvaavat elävästi koko maailmankaikkeuden miljardeja vuosia, mukaan lukien ihmiset, vain muutamalla tuhannella sanalla.
> Sellaista osallisuutta ja rohkeutta on mahdoton saavuttaa perinteisessä kirjallisuudessa.
<p style="text-align:right">── Liu Cixin</p>

### Vinkki `> [!TIP]`

> [!TIP]
> Muista tarkistaa passisi ja viisumin voimassaolo. Vanhentuneet asiakirjat eivät voi tulla maahan tai poistua sieltä.

Se on kirjoitettu seuraavasti

```
> [!TIP]
> YOUR CONTENT
```

### Huomautus `> [!NOTE]`

> [!NOTE]
> Jos lähetät minulle viestin ja vastaan heti, mitä se tarkoittaa?
> Tämä osoittaa, että rakastan todella matkapuhelimilla pelaamista.


### Varoitus `> [!WARN]`

> [!WARN]
> Kun lähdet villiin seikkailuun, on tärkeää pysyä turvassa. Tässä on joitain tärkeitä turvallisuusvinkkejä:
>
> - **Tarkista sääennuste** : Viime viikolla joukko kiipeilijöitä kohtasi myrskyn puolivälissä vuorta, koska he eivät tarkistaneet sääennustetta ja heidän oli evakuoitava kiireellisesti.
> - **Ota mukaan tarvittavat varusteet** : Varmista, että otat mukaan riittävästi ruokaa, vettä ja ensiaputarvikkeita.
> - **Ymmärrä maasto** : Tutustu seikkailualueen maastoon ja reitteihin etukäteen, jotta et eksy.
> - **Pysy yhteydessä** : Pysy yhteydessä ulkomaailmaan ja varmista, että jokainen voi palata turvallisesti.
>
> Muista, turvallisuus on aina etusijalla!

## Tehtävälista

- [x] Suunnittele tuotteen prototyyppi ja ominaisuusluettelo
- [ ] Määritä teknologiapino ja kehitystyökalut
- [ ] Kehitä tuotekehityksen aikatauluja ja virstanpylväitä

## Lista

### Tilattu Lista

1. käynnissä
   1. Kolme kertaa viikossa, 5 kilometriä joka kerta
   1. Juokse puolimaraton
1. kuntosaliharjoittelu
   1. Kaksi kertaa viikossa, 1 tunti kerrallaan
   1. Keskity ydinlihaksiin

### Järjestämätön Lista

* sosiaalisia tapahtumia
  - Osallistu alan vaihtokokouksiin
    + Teknologian jakamisistunto
    + Yrittäjyysvaihtokokous
  - Järjestä ystävätapaaminen
    + Ulkogrilli
    + elokuva-ilta

## Arkki

| ajattelija       | Tärkeimmät panokset                           |
|--------------|------------------------------------|
| Konfutse         | Kungfutselaisuuden perustaja |
| Sokrates     | länsimaisen filosofian isä  |
| Nietzsche         | Superman-filosofia, joka kritisoi perinteistä moraalia ja uskontoa       |
| marx       | kommunismi |

### Suuren Taulukon Näytön Optimointi

Suhteellisen suurille taulukoille voidaan käyttää seuraavia menetelmiä näyttötehosteen optimoimiseksi:

1. Käytä pienempää fonttia

   Kääri taulukko esimerkiksi `<div style="font-size:14px">` ja `</div>` llä .

   Huomaa, että `div` tunnisteen on täytettävä oma rivinsä ja jätettävä tyhjät rivit ennen ja jälkeen.
1. Jos haluat pidempää tekstiä solussa, lisää rivi `<br>`
1. Jos saraketta puristetaan liian lyhyeksi, voit lisätä otsikkoon `<div style="width:100px">xxx</div>` leveyden laajentamiseksi, ja voit myös lisätä [otsikkoon `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) ohjataksesi rivinvaihdon sijaintia.

Esittelyesimerkki on seuraava:

<div style="font-size:14px">

| kansakunta       | <div style="width:70px;margin:auto">ajattelijan nimi</div> | Aikakausi | Tärkeimmät ideologiset panokset                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kiina       | Konfutse                                           | 551-479 eaa   | Kungfutselaisuuden perustaja ehdotti ydinkäsitteitä, kuten "hyväntahtoisuus" ja "sopivuus" ja korosti moraalista viljelyä ja yhteiskuntajärjestystä. |
| muinainen kreikka     | Sokrates                                       | 469-399 eaa   | Totuuden tutkiminen dialogin ja dialektiikan avulla ehdottaa "tunne itsesi" ja korostaa rationaalista ajattelua         |
| Ranska       | Voltaire                                         | 1694-1778       | Valistuksen edustavat hahmot puolsivat rationaalisuutta, vapautta ja tasa-arvoa sekä kritisoivat uskonnollista taikauskoa ja autoritaarista hallintoa.   |
| Saksa       | Kant                                           | 1724-1804       | Esitä "puhtaan järjen kritiikki"<br> Tutkii moraalin, vapauden ja tiedon perusteita ja korostaa käytännön järkeä     |

</div>

Yllä olevan esimerkin pseudokoodi on seuraava:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Koodi

### Sisäinen Koodi

Ohjelmointikielten valtavassa maailmassa `Rust` , `Python` , `JavaScript` ja `Go` ovat kullakin ainutlaatuisella paikalla.

### Useita Koodirivejä

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Rivinvaihto Kappaleen Sisällä

Rivinvaihdot kappaleiden sisällä voidaan tehdä lisäämättä tyhjiä rivejä rivien väliin.
Kappaleiden rivinvaihtoväli on pienempi kuin kappaleiden välinen etäisyys.

esimerkiksi:

> Elä suurena ihmisenä,
> Kuolema on myös kummitussankari.
> Kaipaan edelleen Xiang Yua,
> Haluton ylittämään Jiangdongin.
>
> Li Qingzhao käytti Xiang Yun traagista tarinaa vihjatakseen Song-dynastian epäpätevyydestä.
> Ilmaisee tyytymättömyytensä keisarilliseen hoviin, koska se antautui ilman taistelua.