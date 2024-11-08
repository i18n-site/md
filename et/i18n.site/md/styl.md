# Stiilide Loend

[Selle lehe lähtefaili sirvimiseks klõpsake siin,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) et näha, kuidas kirjutada `MarkDown` järgmistes stiilides.

## Volditud Plokk

|+| Mis on MarkDown?

    MarkDown on kerge märgistuskeel, mis võimaldab kasutajatel luua vormindatud dokumente lihttekstivormingus, mida on lihtne lugeda ja kirjutada.

    Tavaliselt kasutatakse dokumentide, ajaveebiartiklite, e-raamatute, foorumipostituste jms kirjutamiseks.

    Sellel on järgmised eelised:

    1. Lihtne õppida
    1. Väga loetav
    1. Versioonikontrolli sõbralik

       Kuna `MarkDown` dokumendid on lihtteksti vormingus, saavad programmeerijad need hõlpsasti lisada versioonihaldussüsteemidesse (nagu `git` ).

       See muudab muudatuste jälgimise ja koostöö palju lihtsamaks, eriti meeskonna arendamisel.

|-| Mis on I18N?

    "I18N" on lühend sõnast "Internationalization".

    Kuna sõna "rahvusvahelistumine" on "I" ja "N" vahel 18 tähte, kasutatakse esituse lihtsustamiseks "I18N".

    Tavapäraselt tähendab see mitme keele toetamist.


Voltimisplokk on laiendatud süntaks `i18n.site` kuni `MarkDown` , mis on kirjutatud järgmiselt :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

koos `|+| `或`|-| Märgiga ` algav rida genereerib voltimisploki ja voltimisploki sisuks on järgmised sama taandega read (lõigud on eraldatud tühjade ridadega).

Läbida`|-| `标记的折叠块默认展开，`|+| `Märgistatud ahendatud plokid ahendatakse vaikimisi.

## & &

See __ __~~ läbikriipsutatud~~ ja **paks** esitlustekst.

See on kirjutatud järgmiselt:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` loomise tööriista `MarkDown` parser on optimeeritud allakriipsutamise, läbikriipsutamise ja paksus kirjas süntaksi. See võib toimida ilma tühikuteta märgi ees ja järel, muutes dokumentide kirjutamise lihtsamaks sellistes keeltes nagu Hiina, Jaapan ja Korea. ärge kasutage eraldajatena tühikuid.

Pikendatud : [Miks Nuggetsi Markdown süntaks ( `**……**` ) mõnikord ei kehti?](//juejin.cn/post/7064565848421171213)

## Tsiteeri

### Üherealine Tsitaat

> Minu olemus on, et mu anded tulevad kasuks ja ma tulen tagasi, kui kogu oma raha on kulutatud.
<p style="text-align:right">─ Li Bai</p>

### Mitu Rida Tsitaate

> Ulmekirjanduse teine ainulaadne eelis on selle äärmiselt lai ulatus.
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
> Metsikule seiklusele minnes on oluline olla ohutu. Siin on mõned peamised ohutusnõuanded:
>
> - **Kontrollige ilmateadet** : Eelmisel nädalal tabas grupp mägironijaid poolel teel tormi, sest nad ei kontrollinud ilmateadet ja pidid kiiresti evakueeruma.
> - **Kandke kaasas vajalikke varustust** : võtke kindlasti kaasa piisavalt toitu, vett ja esmaabivahendeid.
> - **Maastiku mõistmine** : eksimise vältimiseks tutvuge seiklusala maastiku ja marsruutidega eelnevalt.
> - **Püsige ühenduses** : püsige välismaailmaga ühenduses ja tagage, et kõik saavad turvaliselt tagasi pöörduda.
>
> Pidage meeles, ohutus on alati esikohal!

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
    + Ettevõtlusvahetuse koosolek
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

### Suure Tabeli Kuva Optimeerimine

Suhteliselt suurte tabelite puhul saab kuvaefekti optimeerimiseks kasutada järgmisi meetodeid.

1. Kasutage väiksemat fonti

   Näiteks mähitage tabel `<div style="font-size:14px">` ja `</div>` .

   Pange tähele, et silt `div` peab hõivama oma rea ja jätma tühjad read enne ja pärast seda.
1. Lahtris pikema teksti jaoks sisestage rea murdmiseks `<br>`
1. Kui veerg on liiga lühikeseks pigistatud, saate laiuse suurendamiseks lisada päisesse `<div style="width:100px">xxx</div>` ja reavahetuse positsiooni reguleerimiseks lisada [päisele ka `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) .

Näidisnäide on järgmine:

<div style="font-size:14px">

| rahvus       | <div style="width:70px;margin:auto">mõtleja nimi</div> | Ajastu | Peamised ideoloogilised panused                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Hiina       | Konfutsius                                           | 551-479 eKr   | Konfutsianismi rajaja pakkus välja sellised põhimõisted nagu "heatahtlikkus" ja "sobivus" ning rõhutas moraalset kasvatamist ja sotsiaalset korda. |
| Vana-Kreeka     | Sokrates                                       | 469-399 eKr   | Tõe uurimine dialoogi ja dialektika kaudu pakub "tundma ennast" ja rõhutab ratsionaalset mõtlemist         |
| Prantsusmaa       | Voltaire                                         | 1694-1778       | Valgustusajastu esindustegelased propageerisid ratsionaalsust, vabadust ja võrdsust ning kritiseerisid usulist ebausku ja autoritaarset valitsemist.   |
| Saksamaa       | Kant                                           | 1724-1804       | Esitage "Puhta mõistuse kriitika"<br> Uurib moraali, vabaduse ja teadmiste aluseid, rõhutades praktilist mõistust     |

</div>

Ülaltoodud näite pseudokood on järgmine:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

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

## Reavahetus Lõigu Sees

Lõikesiseseid reavahetusi saab saavutada ilma ridade vahele tühje ridu lisamata.
Reavahetuste vahed lõikude sees on väiksemad kui lõikude vahe.

näiteks:

> Elage suurepärase inimesena,
> Surm on ka kummituskangelane.
> Ma igatsen endiselt Xiang Yud,
> Ei soovi Jiangdongi ületada.
>
> Li Qingzhao kasutas Xiang Yu traagilist lugu, et vihjata Songi dünastia ebakompetentsusele.
> Rahulolematuse väljendamine keiserliku õukonnaga võitluseta allaandmise pärast.