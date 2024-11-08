# Akojọ Aṣa

[Tẹ ibi lati ṣawari faili orisun oju-iwe yii](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) lati wo bi o ṣe le kọ `MarkDown` ni awọn aṣa wọnyi.

## Ti Ṣe Pọ Àkọsílẹ

|+| Kini MarkDown?

    MarkDown jẹ ede isamisi iwuwo fẹẹrẹ ti o gba awọn olumulo laaye lati ṣẹda awọn iwe aṣẹ ti a ṣe akoonu ni ọna kika ọrọ itele ti o rọrun lati ka ati kọ.

    Ti a lo lati kọ iwe, awọn nkan bulọọgi, awọn iwe e-iwe, awọn ifiweranṣẹ apejọ, ati bẹbẹ lọ.

    O ni awọn anfani wọnyi:

    1. Rọrun lati kọ ẹkọ
    1. Gíga kika
    1. Version Iṣakoso ore

       Niwọn igba ti awọn iwe aṣẹ `MarkDown` wa ni ọna kika ọrọ itele, awọn pirogirama le ni irọrun ṣafikun wọn sinu awọn eto iṣakoso ẹya (bii `git` ).

       Eyi jẹ ki awọn iyipada ipasẹ ati ifọwọsowọpọ rọrun pupọ, paapaa ni idagbasoke ẹgbẹ.

|-| Kini I18N?

    "I18N" ni abbreviation ti "Internationalization".

    Níwọ̀n bí ọ̀rọ̀ “Internationalization” ti ní àwọn lẹ́tà méjìdínlógún láàárín “I” àti “N”, “I18N” ni a lò láti mú ìṣàpẹẹrẹ rọrùn.

    Ni awọn ofin layman, o tumọ si atilẹyin awọn ede pupọ.


Àkọsílẹ kika jẹ sintasi ti o gbooro ti `i18n.site` si `MarkDown` , ti a kọ bi atẹle :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

pẹlu `|+| `或`|-| Laini ti o bẹrẹ pẹlu ` yoo ṣe agbekalẹ bulọọki kika, ati akoonu ti bulọọki kika jẹ awọn laini ti o tẹle pẹlu ipele indentation kanna (awọn ìpínrọ ti pin nipasẹ awọn laini òfo).

Kọja'|-| `标记的折叠块默认展开，`|+| `Awọn bulọọki ti a fi aami si ti ṣubu lulẹ nipasẹ aiyipada.

## & &

__ jẹ __~~ idasesile~~ ati **bold** igbejade ọrọ.

O ti wa ni kikọ bi wọnyi:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Atọka `MarkDown` ti ohun elo ile oju opo wẹẹbu `i18n.site` ti ni iṣapeye labẹ laini, idasesile, ati sintasi igboya O le ni ipa laisi awọn aaye ṣaaju ati lẹhin ami naa, ti o jẹ ki o rọrun lati kọ awọn iwe aṣẹ ni awọn ede bii China, Japan, ati Koria. ma ṣe lo awọn alafo bi separators.

: [idi ti Nuggets' Markdown syntax ( `**……**` ) ko ni ipa nigba miiran?](//juejin.cn/post/7064565848421171213)

## Sọ

### Nikan Ila Ń

> Iseda mi ni pe talenti mi yoo wulo, ati pe Emi yoo pada wa lẹhin ti gbogbo owo mi ti lo.
<p style="text-align:right">─ Li Bai</p>

### Awọn Agbasọ Ila Pupọ

> Anfani alailẹgbẹ miiran ti itan-akọọlẹ imọ-jinlẹ jẹ iwọn gbooro pupọ rẹ.
> "Ogun ati Alaafia", pẹlu awọn ọrọ miliọnu kan, ṣe apejuwe itan-akọọlẹ agbegbe kan fun ọpọlọpọ awọn ewadun;
> Ati awọn iwe itan-akọọlẹ imọ-jinlẹ bii “Idahun Ikẹhin” ti Asimov ṣapejuwe kedere awọn ọkẹ àìmọye ọdun ti itan-akọọlẹ gbogbo agbaye, pẹlu awọn ẹda eniyan, ni awọn ọrọ ẹgbẹrun diẹ.
> Iru ifaramọ ati igboya ko ṣee ṣe lati ṣaṣeyọri ninu awọn iwe ibile.
<p style="text-align:right">── Liu Cixin</p>

### Imọran `> [!TIP]`

> [!TIP]
> Ranti lati ṣayẹwo iwulo iwe irinna rẹ ati iwe iwọlu ti pari ko le wọle tabi jade kuro ni orilẹ-ede naa.

O ti wa ni kikọ bi wọnyi

```
> [!TIP]
> YOUR CONTENT
```

### Akiyesi `> [!NOTE]`

> [!NOTE]
> Ti o ba fi ifiranṣẹ ranṣẹ si mi ati pe Mo dahun lẹsẹkẹsẹ, kini iyẹn tumọ si?
> Eyi fihan pe Mo nifẹ pupọ pẹlu awọn foonu alagbeka.


### Ikilo `> [!WARN]`

> [!WARN]
> Nigbati o ba n lọ lori ìrìn egan, o ṣe pataki lati wa ni ailewu. Eyi ni diẹ ninu awọn imọran aabo bọtini:
>
> - **Ṣayẹwo awọn asọtẹlẹ oju-ọjọ** : Ni ọsẹ to kọja, ẹgbẹ kan ti awọn oke nla pade iji kan ni agbedemeji oke nitori wọn ko ṣayẹwo asọtẹlẹ oju-ọjọ ati pe wọn ni lati jade kuro ni iyara.
> - **Gbe jia pataki** : Rii daju pe o mu ounjẹ to to, omi ati awọn ipese iranlọwọ akọkọ.
> - **Loye ilẹ** : Mọ ara rẹ pẹlu ilẹ ati awọn ipa-ọna ti agbegbe ìrìn ni ilosiwaju lati yago fun sisọnu.
> - **Duro Sopọ** : Duro ni asopọ si agbaye ita ati rii daju pe gbogbo eniyan le pada wa lailewu.
>
> Ranti, ailewu nigbagbogbo wa ni akọkọ!

## Akojọ Iṣẹ-Ṣiṣe

- [x] Apẹrẹ ọja apẹrẹ ati atokọ ẹya
- [ ] Ṣe ipinnu akopọ imọ-ẹrọ ati awọn irinṣẹ idagbasoke
- [ ] Dagbasoke awọn akoko idagbasoke ọja ati awọn iṣẹlẹ pataki

## Akojọ

### Akojọ Paṣẹ

1. nṣiṣẹ
   1. Ni igba mẹta ni ọsẹ, awọn kilomita 5 ni igba kọọkan
   1. Ṣiṣe kan idaji marathon
1. ikẹkọ idaraya
   1. Lẹẹmeji ni ọsẹ kan, wakati 1 ni igba kọọkan
   1. Fojusi lori awọn iṣan mojuto

### Unordered Akojọ

* awujo iṣẹlẹ
  - Kopa ninu awọn ipade paṣipaarọ ile-iṣẹ
    + Technology pinpin igba
    + Ipade paṣipaarọ Iṣowo
  - Ṣeto apejọ awọn ọrẹ
    + Ita gbangba BBQ
    + movie night

## Dì

| onimọran       | Awọn ilowosi akọkọ                           |
|--------------|------------------------------------|
| Confucius         | Oludasile ti Confucianism |
| Sócrates     | baba ti oorun imoye  |
| Nietzsche         | Superman imoye, lodi si ibile iwa ati esin       |
| Marx       | communism |

### Ti O Tobi Tabili Àpapọ Iṣapeye

Fun awọn tabili ti o tobi pupọ, awọn ọna atẹle le ṣee lo lati mu ipa ifihan pọ si:

1. Lo fonti kekere

   Fun apẹẹrẹ, fi ipari si tabili pẹlu `<div style="font-size:14px">` ati `</div>` .

   Ṣe akiyesi pe tag `div` gbọdọ gba laini tirẹ, ki o fi awọn laini ofo silẹ ṣaaju ati lẹhin rẹ.
1. Fun ọrọ to gun ninu sẹẹli, fi `<br>` sii lati fi ipari si ila naa
1. Ti iwe kan ba kuru ju, o le ṣafikun `<div style="width:100px">xxx</div>` si akọsori lati faagun iwọn, ati pe o tun le ṣafikun [`<wbr>` si akọsori](//developer.mozilla.org/docs/Web/HTML/Element/wbr) lati ṣakoso ipo fifọ laini.

Apeere ifihan jẹ bi atẹle:

<div style="font-size:14px">

| orílẹ̀-èdè       | <div style="width:70px;margin:auto">oruko ero</div> | Akoko | Awọn ilowosi arojinle akọkọ                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucius                                           | Ọdun 551-479 BC   | Oludasile ti Confucianism dabaa awọn imọran pataki gẹgẹbi "oore" ati "ohun-ini" ati tẹnumọ ogbin iwa ati ilana awujọ. |
| Giriki atijọ     | Sócrates                                       | Ọdun 469-399 BC   | Ṣiṣayẹwo otitọ nipasẹ ijiroro ati awọn asọye ni imọran “mọ ararẹ” ati tẹnumọ ironu onipin         |
| France       | Voltaire                                         | 1694-1778       | Awọn aṣoju aṣoju ti Enlightenment ṣe agbero ironu, ominira ati dọgbadọgba, ati ṣofintoto ohun asán ti ẹsin ati ofin alaṣẹ.   |
| Jẹmánì       | Kant                                           | 1724-1804       | Fi “Idiyesi Idi Mimọ” siwaju siwaju<br> Ṣawari awọn ipilẹ ti iwa, ominira, ati imọ, ti n tẹnuba idi ti o wulo     |

</div>

Awọn pseudocode fun apẹẹrẹ loke jẹ bi atẹle:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Koodu

### Opopo Koodu

Ninu agbaye ti awọn ede siseto, `Rust` , `Python` , `JavaScript` ati `Go` kọọkan wa ni ipo alailẹgbẹ.

### Ọpọ Ila Ti Koodu

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Line Bireki Laarin Ìpínrọ

Awọn fifọ laini laarin awọn paragira le ṣee ṣe laisi fifi awọn laini ofo kun laarin awọn ila.
Aaye laarin awọn fifọ laini laarin awọn paragira kere ju aaye laarin awọn paragira.

fun apere:

> Gbe bi eniyan nla,
> Iku tun jẹ akọni iwin.
> Mo tun padanu Xiang Yu,
> Lọra lati sọdá Jiangdong.
>
> Li Qingzhao lo itan-akọọlẹ buburu ti Xiang Yu lati tọka si ailagbara ti Oba Orin.
> Ti n ṣalaye ainitẹlọrun pẹlu ile-ẹjọ ijọba fun ifarabalẹ laisi ija.