# Listahan Ng Istilo

[Mag-click dito upang i-browse ang source file ng pahinang ito](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) upang makita kung paano magsulat `MarkDown` sa mga sumusunod na istilo.

## Nakatiklop Na Bloke

|+| Ano ang MarkDown?

    Ang MarkDown ay isang magaan na markup language na nagbibigay-daan sa mga user na lumikha ng mga naka-format na dokumento sa isang plain text na format na madaling basahin at isulat.

    Karaniwang ginagamit sa pagsulat ng dokumentasyon, mga artikulo sa blog, e-libro, mga post sa forum, atbp.

    Ito ay may mga sumusunod na pakinabang:

    1. Madaling matutunan
    1. Lubos na nababasa
    1. Version control friendly

       Dahil `MarkDown` na dokumento ay nasa plain text na format, madaling isama ng mga programmer ang mga ito sa mga version control system (tulad ng `git` ).

       Ginagawa nitong mas simple ang pagsubaybay sa mga pagbabago at pakikipagtulungan, lalo na sa pagbuo ng koponan.

|-| Ano ang I18N?

    Ang "I18N" ay ang abbreviation ng "Internationalization".

    Dahil ang salitang "Internationalization" ay may 18 letra sa pagitan ng "I" at "N", ang "I18N" ay ginagamit upang pasimplehin ang representasyon.

    Sa mga termino ng karaniwang tao, nangangahulugan ito ng pagsuporta sa maraming wika.


Ang folding block ay isang pinahabang syntax na `i18n.site` hanggang `MarkDown` , na nakasulat tulad ng sumusunod :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

kasama ang `|+| `或`|-| Ang linya na nagsisimula sa ` ay bubuo ng isang natitiklop na bloke, at ang nilalaman ng natitiklop na bloke ay ang mga kasunod na linya na may parehong antas ng indentasyon (ang mga talata ay pinaghihiwalay ng mga blangkong linya).

Pass`|-| `标记的折叠块默认展开，`|+| `Naka-collapse ang mga naka-tag na collapsed block bilang default.

## Salungguhitan & Strikethrough &

__ ay __~~ strikethrough~~ at **naka-bold** na teksto ng presentasyon.

Ito ay nakasulat tulad ng sumusunod:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Ang `MarkDown` parser ng tool sa pagbuo ng `i18n.site` website ay nag-optimize ng underline, strikethrough, at bold na syntax Maaari itong magkabisa nang walang mga puwang bago at pagkatapos ng marka, na ginagawang mas madali ang pagsulat ng mga dokumento sa mga wika tulad ng China, Japan, at Korea na. huwag gumamit ng mga puwang bilang mga separator.

Pinahabang pagbabasa : [Bakit minsan hindi nagkakabisa ang Markdown syntax ( `**……**` ) ng Nuggets?](//juejin.cn/post/7064565848421171213)

## Quote

### Isang Linyang Quote

> Ito ay aking likas na katangian na ang aking mga talento ay magiging kapaki-pakinabang, at ako ay babalik pagkatapos ng lahat ng aking pera ay magastos.
<p style="text-align:right">─ Li Bai</p>

### Maramihang Linyang Quotes

> Ang isa pang natatanging bentahe ng science fiction ay ang napakalawak nitong saklaw.
> Ang isang "Digmaan at Kapayapaan", na may isang milyong salita, ay naglalarawan lamang ng kasaysayan ng isang rehiyon sa loob ng ilang dekada;
> At ang mga nobelang science fiction tulad ng "The Final Answer" ni Asimov ay malinaw na naglalarawan sa bilyun-bilyong taon ng kasaysayan ng buong sansinukob, kabilang ang mga tao, sa ilang libong salita lamang.
> Ang ganitong pagiging inklusibo at katapangan ay imposibleng makamit sa tradisyonal na panitikan.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Tandaan na suriin ang validity ng iyong pasaporte at visa ay hindi maaaring pumasok o lumabas sa bansa.

Ito ay nakasulat tulad ng sumusunod

```
> [!TIP]
> YOUR CONTENT
```

### Puna `> [!NOTE]`

> [!NOTE]
> Kung padadalhan mo ako ng mensahe at tumugon ako kaagad, ano ang ibig sabihin nito?
> Ito ay nagpapakita na ako ay talagang mahilig maglaro ng mga mobile phone.


### Babala `> [!WARN]`

> [!WARN]
> Kapag nagpapatuloy sa isang ligaw na pakikipagsapalaran, mahalagang manatiling ligtas. Narito ang ilang mahahalagang tip sa kaligtasan:
>
> - **Suriin ang taya ng panahon** : Noong nakaraang linggo, isang grupo ng mga umaakyat ang nakatagpo ng bagyo sa kalagitnaan ng bundok dahil hindi nila sinuri ang taya ng panahon at kailangang lumikas kaagad.
> - **Magdala ng mga kinakailangang gamit** : Siguraduhing magdala ka ng sapat na pagkain, tubig at mga supply ng pangunang lunas.
> - **Unawain ang terrain** : Maging pamilyar sa terrain at mga ruta ng lugar ng pakikipagsapalaran nang maaga upang maiwasan ang maligaw.
> - **Manatiling Konektado** : Manatiling konektado sa labas ng mundo at tiyaking makakabalik nang ligtas ang lahat.
>
> Tandaan, laging nauuna ang kaligtasan!

## Listahan Ng Gagawin

- [x] Idisenyo ang prototype ng produkto at listahan ng tampok
- [ ] Tukuyin ang stack ng teknolohiya at mga tool sa pag-unlad
- [ ] Bumuo ng mga timeline at milestone sa pagbuo ng produkto

## Listahan

### Iniutos Na Listahan

1. tumatakbo
   1. Tatlong beses sa isang linggo, 5 kilometro bawat oras
   1. Magpatakbo ng kalahating marathon
1. pagsasanay sa gym
   1. Dalawang beses sa isang linggo, 1 oras bawat oras
   1. Tumutok sa mga pangunahing kalamnan

### Hindi Ayos Na Listahan

* mga kaganapang panlipunan
  - Makilahok sa mga pagpupulong ng palitan ng industriya
    + Sesyon ng pagbabahagi ng teknolohiya
    + Entrepreneurship Exchange Meeting
  - Ayusin ang isang pagtitipon ng mga kaibigan
    + Panlabas na BBQ
    + gabi ng pelikula

## Sheet

| palaisip       | Pangunahing kontribusyon                           |
|--------------|------------------------------------|
| Confucius         | Tagapagtatag ng Confucianism |
| Socrates     | ama ng pilosopiyang kanluranin  |
| Nietzsche         | Pilosopiya ng Superman, pinupuna ang tradisyonal na moralidad at relihiyon       |
| si marx       | komunismo |

### Pag-Optimize Ng Display Ng Malaking Talahanayan

Para sa medyo malalaking talahanayan, maaaring gamitin ang mga sumusunod na pamamaraan upang i-optimize ang epekto ng pagpapakita:

1. Gumamit ng mas maliit na font

   Halimbawa, balutin ang talahanayan ng `<div style="font-size:14px">` at `</div>` .

   Tandaan na ang tag `div` ay dapat sumakop sa sarili nitong linya, at mag-iwan ng mga blangkong linya bago at pagkatapos nito.
1. Para sa mas mahabang text sa isang cell, maglagay ng `<br>` para balutin ang linya
1. Kung masyadong maikli ang isang column, maaari kang magdagdag `<div style="width:100px">xxx</div>` sa header upang palawakin ang lapad, at maaari ka ring magdagdag [`<wbr>` sa header](//developer.mozilla.org/docs/Web/HTML/Element/wbr) upang makontrol ang posisyon ng line break.

Ang isang halimbawa ng pagpapakita ay ang mga sumusunod:

<div style="font-size:14px">

| bansa       | <div style="width:70px;margin:auto">pangalan ng nag-iisip</div> | Era | Mga pangunahing kontribusyon sa ideolohiya                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Tsina       | Confucius                                           | 551-479 BC   | Ang tagapagtatag ng Confucianism ay nagmungkahi ng mga pangunahing konsepto tulad ng "benevolence" at "propriety" at binigyang diin ang moral cultivation at panlipunang kaayusan. |
| sinaunang greece     | Socrates                                       | 469-399 BC   | Ang pagtuklas sa katotohanan sa pamamagitan ng diyalogo at dialectics ay nagmumungkahi ng "kilalanin ang iyong sarili" at binibigyang-diin ang makatuwirang pag-iisip         |
| France       | Voltaire                                         | 1694-1778       | Ang mga kinatawan ng mga figure ng Enlightenment ay nagtaguyod ng pagkamakatuwiran, kalayaan at pagkakapantay-pantay, at pinuna ang pamahiin sa relihiyon at awtoridad na pamamahala.   |
| Alemanya       | Kant                                           | 1724-1804       | Isulong ang "Critique of Pure Reason"<br> Sinasaliksik ang mga pundasyon ng moralidad, kalayaan, at kaalaman, na nagbibigay-diin sa praktikal na katwiran     |

</div>

Ang pseudocode para sa halimbawa sa itaas ay ang mga sumusunod:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Inline Na Code

Sa malawak na mundo ng mga programming language, `Rust` , `Python` , `JavaScript` at `Go` ang bawat isa ay sumasakop sa isang natatanging posisyon.

### Maraming Linya Ng Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Line Break Sa Loob Ng Talata

Maaaring makamit ang mga line break sa loob ng mga talata nang hindi nagdaragdag ng mga blangkong linya sa pagitan ng mga linya.
Ang espasyo sa pagitan ng mga line break sa loob ng mga talata ay mas maliit kaysa sa pagitan ng mga talata.

halimbawa:

> Mabuhay bilang isang dakilang tao,
> Ang kamatayan ay isa ring bayani ng multo.
> Miss ko pa rin si Xiang Yu,
> Nag-aatubili na tumawid sa Jiangdong.
>
> Ginamit ni Li Qingzhao ang kalunos-lunos na kuwento ni Xiang Yu upang ipahiwatig ang kawalan ng kakayahan ng Dinastiyang Song.
> Pagpapahayag ng kawalang-kasiyahan sa imperial court sa pagsuko nang walang laban.