# Styl Lys

[Klik hier om deur die bronlêer van hierdie bladsy te blaai](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) om te sien hoe om `MarkDown` in die volgende style te skryf.

## Gevoude Blok

|+| Wat is MarkDown?

    MarkDown is 'n liggewig-opmaaktaal wat gebruikers toelaat om geformateerde dokumente in 'n gewone teksformaat te skep wat maklik is om te lees en te skryf.

    Word algemeen gebruik om dokumentasie, blogartikels, e-boeke, forumplasings, ens.

    Dit het die volgende voordele:

    1. Maklik om te leer
    1. Hoogs leesbaar
    1. Weergawebeheer vriendelik

       Aangesien `MarkDown` dokumente in gewone teksformaat is, kan programmeerders dit maklik in weergawebeheerstelsels inkorporeer (soos `git` ).

       Dit maak die dop van veranderinge en samewerking baie makliker, veral in spanontwikkeling.

|-| Wat is I18N?

    "I18N" is die afkorting van "Internationalization".

    Aangesien die woord "Internasionalisering" 18 letters tussen "I" en "N" het, word "I18N" gebruik om die voorstelling te vereenvoudig.

    In leek se terme beteken dit om verskeie tale te ondersteun.


Voublok is 'n uitgebreide sintaksis van `i18n.site` tot `MarkDown` , soos volg geskryf :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

met `|+| `或`|-| Die reël wat met ` begin, sal 'n voublok genereer, en die inhoud van die voublok is die daaropvolgende reëls met dieselfde vlak van inkeping (paragrawe word deur leë lyne geskei).

Slaag`|-| `标记的折叠块默认展开，`|+| `Gemerkte ingevoude blokke word by verstek ingevou.

## & &

__ is __~~ deurhaal~~ en **vet** aanbiedingsteks.

Dit is soos volg geskryf:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Die `MarkDown` ontleder van die `i18n.site` webwerfbou-nutsding het geoptimaliseerde onderstreep-, deurstreep- en vetsintaksis. Dit kan in werking tree sonder spasies voor en na die merk, wat dit makliker maak om dokumente in tale soos China, Japan en Korea te skryf. moenie spasies as skeiers gebruik nie.

Uitgebreide leeswerk : [tree Nuggets Markdown -sintaksis ( `**……**` ) soms nie in werking nie?](//juejin.cn/post/7064565848421171213)

## Haal Aan

### Enkele Reël Kwotasie

> Dit is my aard dat my talente nuttig sal wees, en ek sal terugkom nadat al my geld bestee is.
<p style="text-align:right">─ Li Bai</p>

### Veelvuldige Reël Aanhalings

> Nog 'n unieke voordeel van wetenskapfiksie is die uiters breë omvang daarvan.
> ’n “Oorlog en Vrede”, met ’n miljoen woorde, beskryf net die geskiedenis van ’n streek vir etlike dekades;
> En wetenskapfiksie-romans soos Asimov se "The Final Answer" beskryf die miljarde jare se geskiedenis van die hele heelal, insluitend mense, lewendig in net 'n paar duisend woorde.
> Sulke inklusiwiteit en vrymoedigheid is onmoontlik om in tradisionele literatuur te bereik.
<p style="text-align:right">── Liu Cixin</p>

### Wenk `> [!TIP]`

> [!TIP]
> Onthou om die geldigheid van jou paspoort en visum na te gaan. Verstreke dokumente kan nie die land binnekom of verlaat nie.

Dit is soos volg geskryf

```
> [!TIP]
> YOUR CONTENT
```

### Opmerking `> [!NOTE]`

> [!NOTE]
> As jy vir my 'n boodskap stuur en ek antwoord dadelik, wat beteken dit?
> Dit wys dat ek baie daarvan hou om met selfone te speel.


### Waarskuwing `> [!WARN]`

> [!WARN]
> Wanneer jy op 'n wilde avontuur gaan, is dit belangrik om veilig te bly. Hier is 'n paar belangrike veiligheidswenke:
>
> - **Gaan die weervoorspelling na** : Verlede week het 'n groep klimmers 'n storm halfpad teen die berg teëgekom omdat hulle nie die weervoorspelling nagegaan het nie en dringend moes ontruim.
> - **Dra die nodige toerusting** : Maak seker dat jy genoeg kos, water en noodhulp-voorrade saambring.
> - **Verstaan die terrein** : Vergewis jouself vooraf van die terrein en roetes van die avontuurarea om te verhoed dat jy verdwaal.
> - **Bly verbind** : Bly verbind met die buitewêreld en verseker dat almal veilig kan terugkeer.
>
> Onthou, veiligheid kom altyd eerste!

## To-Do List

- [x] Ontwerp produk prototipe en kenmerklys
- [ ] Bepaal tegnologiestapel en ontwikkelingsinstrumente
- [ ] Ontwikkel produkontwikkelingtydlyne en mylpale

## Lys

### Bestelde Lys

1. hardloop
   1. Drie keer per week, 5 kilometer elke keer
   1. Hardloop 'n halfmarathon
1. gimnasium opleiding
   1. Twee keer per week, 1 uur elke keer
   1. Fokus op kernspiere

### Ongeordende Lys

* sosiale geleenthede
  - Neem deel aan bedryfsuitruilvergaderings
    + Tegnologie deel sessie
    + Entrepreneurskap-uitruilvergadering
  - Organiseer 'n byeenkoms van vriende
    + Buitelug BBQ
    + fliekaand

## Blad

| denker       | Hoofbydraes                           |
|--------------|------------------------------------|
| Confucius         | Stigter van Confucianisme |
| Sokrates     | vader van Westerse filosofie  |
| Nietzsche         | Superman-filosofie, wat tradisionele moraliteit en godsdiens kritiseer       |
| marx       | kommunisme |

### Groot Tafel Vertoon Optimering

Vir relatief groot tabelle kan die volgende metodes gebruik word om die vertooneffek te optimaliseer:

1. Gebruik kleiner lettertipes

   Draai byvoorbeeld die tabel toe met `<div style="font-size:14px">` en `</div>` .

   Let daarop dat die `div` merker sy eie reël moet beslaan, en leë reëls voor en na dit moet laat.
1. Vir langer teks in 'n sel, voeg `<br>` in om die reël te draai
1. As 'n kolom te kort gedruk word, kan jy `<div style="width:100px">xxx</div>` by die kopskrif voeg om die breedte uit te brei, en jy kan ook [`<wbr>` by die kopskrif](//developer.mozilla.org/docs/Web/HTML/Element/wbr) voeg om die lynbreekposisie te beheer.

'n Demonstrasievoorbeeld is soos volg:

<div style="font-size:14px">

| nasie       | <div style="width:70px;margin:auto">denker naam</div> | Era | Vernaamste ideologiese bydraes                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucius                                           | 551-479 vC   | Die stigter van Confucianisme het kernbegrippe soos "welwillendheid" en "behoorlikheid" voorgestel en beklemtoon morele kultivering en sosiale orde. |
| antieke Griekeland     | Sokrates                                       | 469-399 vC   | Om die waarheid te verken deur dialoog en dialektiek stel "ken jouself" voor en beklemtoon rasionele denke         |
| Frankryk       | Voltaire                                         | 1694-1778       | Verteenwoordigende figure van die Verligting het rasionaliteit, vryheid en gelykheid voorgestaan, en godsdienstige bygeloof en outoritêre heerskappy gekritiseer.   |
| Duitsland       | Kant                                           | 1724-1804       | Stel die "Critique of Pure Reason" voor<br> Verken die grondslae van moraliteit, vryheid en kennis, met die klem op praktiese rede     |

</div>

Die pseudokode vir bogenoemde voorbeeld is soos volg:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kode

### Inlyn Kode

In die groot wêreld van programmeertale beklee `Rust` , `Python` , `JavaScript` en `Go` elk 'n unieke posisie.

### Veelvuldige Reëls Kode

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Reëlbreuk Binne Paragraaf

Reëlbreuke binne paragrawe kan verkry word sonder om leë lyne tussen lyne by te voeg.
Die spasiëring tussen reëlbreuke binne paragrawe is kleiner as die spasiëring tussen paragrawe.

byvoorbeeld:

> Leef as 'n groot mens,
> Die dood is ook 'n spookheld.
> Ek mis steeds Xiang Yu,
> Huiwerig om Jiangdong oor te steek.
>
> Li Qingzhao het Xiang Yu se tragiese verhaal gebruik om te dui op die onbevoegdheid van die Song-dinastie.
> Uiting van ontevredenheid met die keiserlike hof omdat hy sonder 'n geveg oorgegee het.