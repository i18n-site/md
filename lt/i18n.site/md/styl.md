# Stilių Sąrašas

[Spustelėkite čia, norėdami naršyti šio puslapio šaltinio failą](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) ir pamatyti, kaip rašyti `MarkDown` šiais stiliais.

## Sulankstytas Blokas

|+| Kas yra MarkDown?

    MarkDown yra lengva žymėjimo kalba, leidžianti vartotojams kurti suformatuotus dokumentus paprasto teksto formatu, kurį lengva skaityti ir rašyti.

    Paprastai naudojamas dokumentams, tinklaraščio straipsniams, elektroninėms knygoms, forumo įrašams ir kt.

    Jis turi šiuos privalumus:

    1. Lengva išmokti
    1. Labai skaitomas
    1. Patogus versijos valdymui

       Kadangi `MarkDown` dokumentų yra paprasto teksto formatu, programuotojai gali lengvai įtraukti juos į versijų valdymo sistemas (pvz., `git` ).

       Tai leidžia stebėti pokyčius ir bendradarbiauti daug paprasčiau, ypač kuriant komandą.

|-| Kas yra I18N?

    „I18N“ yra „Internationalization“ santrumpa.

    Kadangi žodį „Internacionalizacija“ sudaro 18 raidžių tarp „I“ ir „N“, „I18N“ naudojamas vaizdavimui supaprastinti.

    Žodžiu, tai reiškia kelių kalbų palaikymą.


Sulankstomas blokas yra išplėstinė sintaksė nuo `i18n.site` iki `MarkDown` , parašyta taip :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

su `|+| `或`|-| Eilutė, prasidedanti raide `, sukurs sulankstomą bloką, o sulankstomo bloko turinys yra tolesnės eilutės su tuo pačiu įtraukos lygiu (pastraipos atskirtos tuščiomis eilutėmis).

Praleisti“.|-| `标记的折叠块默认展开，`|+| „Pažymėti sutraukti blokai yra sutraukiami pagal numatytuosius nustatymus.

## & &

Tai __ pabraukimas __ ,~~ perbrauktas~~ ir **paryškintas** pristatymo tekstas.

Tai parašyta taip:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` svetainių kūrimo įrankio `MarkDown` analizatorius optimizavo pabraukimą, perbraukimą ir paryškintą sintaksę. Jis gali veikti be tarpų prieš ir po ženklo, todėl lengviau rašyti dokumentus tokiomis kalbomis kaip Kinija, Japonija ir Korėja. nenaudokite tarpų kaip skyriklių.

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
> Nepamirškite patikrinti savo paso galiojimo ir vizos, kurių galiojimo laikas pasibaigęs, negali įvažiuoti ar išvažiuoti iš šalies.

Tai parašyta taip

```
> [!TIP]
> YOUR CONTENT
```

### Pastaba `> [!NOTE]`

> [!NOTE]
> Jei atsiųsite man žinutę ir aš iškart atsakysiu, ką tai reiškia?
> Tai rodo, kad man labai patinka žaisti su mobiliaisiais telefonais.


### Įspėjimas `> [!WARN]`

> [!WARN]
> Leidžiantis į laukinius nuotykius, svarbu išlikti saugiems. Štai keletas pagrindinių saugos patarimų:
>
> - **Patikrinkite orų prognozę** : Praėjusią savaitę alpinistų grupė susidūrė su audra pusiaukelėje į kalną, nes nepatikrino orų prognozės ir turėjo skubiai evakuotis.
> - **Su savimi turėkite reikiamą įrangą** : Įsitikinkite, kad turite pakankamai maisto, vandens ir pirmosios pagalbos priemonių.
> - **Supraskite reljefą** : iš anksto susipažinkite su nuotykių zonos reljefu ir maršrutais, kad nepasiklystumėte.
> - **Palaikykite ryšį** : palaikykite ryšį su išoriniu pasauliu ir užtikrinkite, kad visi galėtų saugiai grįžti.
>
> Atminkite, kad saugumas visada yra pirmoje vietoje!

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

### Didelės Lentelės Ekrano Optimizavimas

Santykinai didelėms lentelėms galima naudoti šiuos metodus rodymo efektui optimizuoti:

1. Naudokite mažesnį šriftą

   Pavyzdžiui, apvyniokite lentelę su `<div style="font-size:14px">` ir `</div>` .

   Atminkite, kad `div` žyma turi užimti savo eilutę ir palikti tuščias eilutes prieš ir po jos.
1. Jei langelyje yra ilgesnis tekstas, įterpkite `<br>` kad aptrauktumėte eilutę
1. Jei stulpelis suspaustas per trumpai, galite pridėti `<div style="width:100px">xxx</div>` prie antraštės, kad padidintumėte plotį, taip pat galite pridėti [`<wbr>` prie antraštės](//developer.mozilla.org/docs/Web/HTML/Element/wbr) , kad valdytumėte eilutės lūžio padėtį.

Demonstravimo pavyzdys yra toks:

<div style="font-size:14px">

| tauta       | <div style="width:70px;margin:auto">mąstytojo vardas</div> | Era | Pagrindinis ideologinis indėlis                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kinija       | Konfucijus                                           | 551-479 m.pr.Kr   | Konfucianizmo įkūrėjas pasiūlė pagrindines sąvokas, tokias kaip „geranoriškumas“ ir „padorumas“, ir pabrėžė moralinį ugdymą bei socialinę tvarką. |
| senovės Graikija     | Sokratas                                       | 469-399 m.pr.Kr   | Tiesos tyrinėjimas per dialogą ir dialektiką siūlo „pažinti save“ ir pabrėžia racionalų mąstymą         |
| Prancūzija       | Volteras                                         | 1694-1778       | Švietimo epochos atstovai pasisakė už racionalumą, laisvę ir lygybę, kritikavo religinius prietarus ir autoritarinį valdymą.   |
| Vokietija       | Kantas                                           | 1724-1804       | Pateikite „Gryno proto kritiką“<br> Tyrinėja moralės, laisvės ir žinių pagrindus, pabrėždamas praktinį protą     |

</div>

Pirmiau pateikto pavyzdžio pseudokodas yra toks:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

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

## Eilutės Lūžis Pastraipoje

Eilučių pertraukas pastraipose galima padaryti nepridedant tuščių eilučių tarp eilučių.
Tarpai tarp eilučių lūžių pastraipose yra mažesni nei tarpai tarp pastraipų.

pavyzdžiui:

> Gyvenk kaip puikus žmogus,
> Mirtis taip pat yra vaiduoklis herojus.
> Aš vis dar pasiilgau Xiang Yu,
> Nenori kirsti Dziangdongo.
>
> Li Qingzhao pasinaudojo tragiška Xiang Yu istorija, kad užsimintų apie Song dinastijos nekompetenciją.
> Išreiškia nepasitenkinimą imperatoriškuoju dvaru dėl pasidavimo be kovos.