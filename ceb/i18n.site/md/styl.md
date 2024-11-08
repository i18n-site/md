# Listahan Sa Estilo

[Pag-klik dinhi aron ma-browse ang gigikanan nga file sa kini nga panid](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) aron makita kung giunsa pagsulat `MarkDown` sa mga musunod nga istilo.

## Gipilo Nga Bloke

|+| Unsa ang MarkDown?

    Ang MarkDown usa ka gaan nga markup nga lengguwahe nga nagtugot sa mga tiggamit sa paghimo og giporma nga mga dokumento sa usa ka yano nga format sa teksto nga dali basahon ug isulat.

    Kasagarang gigamit sa pagsulat sa dokumentasyon, mga artikulo sa blog, e-libro, mga post sa forum, ug uban pa.

    Kini adunay mosunod nga mga bentaha:

    1. Sayon makat-on
    1. Mabasa kaayo
    1. Mahigalaon ang pagkontrol sa bersyon

       Tungod kay `MarkDown` nga mga dokumento anaa sa yano nga pormat sa teksto, ang mga programmer dali nga maapil kini sa mga sistema sa pagkontrol sa bersyon (sama sa `git` ).

       Kini naghimo sa mga pagbag-o sa pagsubay ug pagtinabangay nga mas simple, ilabi na sa pagpalambo sa team.

|-| Unsa ang I18N?

    Ang "I18N" mao ang minubo sa "Internasyonalisasyon".

    Tungod kay ang pulong nga "Internasyonalisasyon" adunay 18 ka letra tali sa "I" ug "N", ang "I18N" gigamit sa pagpasimple sa representasyon.

    Sa mga termino sa layko, nagpasabot kini sa pagsuporta sa daghang mga pinulongan.


Ang folding block kay usa ka extended syntax nga `i18n.site` ngadto sa `MarkDown` , gisulat sama sa mosunod :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

uban `|+| `或`|-| Ang linya nga nagsugod sa ` makamugna og usa ka folding block, ug ang sulod sa folding block mao ang sunod nga mga linya nga adunay parehas nga lebel sa indentation (ang mga parapo gibulag sa mga blangko nga linya).

Pasa`|-| `标记的折叠块默认展开，`|+| `Ang gi-tag nga nahugno nga mga bloke nahugno pinaagi sa default.

## Linyahi Ang & Strikethrough &

__ mao ang Underscore __ ,~~ strikethrough~~ ug **maisog** nga teksto sa presentasyon.

Kini gisulat ingon sa mosunod:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Ang `MarkDown` parser sa `i18n.site` nga himan sa paghimo sa website nag-optimize sa underline, strikethrough, ug bold nga syntax Mahimo kini nga epektibo nga wala’y mga espasyo sa wala pa ug pagkahuman sa marka, nga nagpadali sa pagsulat sa mga dokumento sa mga pinulongan sama sa China, Japan, ug Korea nga. ayaw gamita ang mga luna isip mga separator.

Extended reading : [Ngano nga ang Nuggets’ Markdown syntax ( `**……**` ) usahay dili mu-epekto?](//juejin.cn/post/7064565848421171213)

## Kinutlo

### Usa Ka Linya Nga Kinutlo

> Kini mao ang akong kinaiya nga ang akong mga talento mahimong mapuslanon, ug ako mobalik human sa tanan nga akong salapi nga nagasto.
<p style="text-align:right">─ Li Bai</p>

### Daghang Mga Kinutlo Sa Linya

> Ang laing talagsaong bentaha sa science fiction mao ang hilabihan ka lapad nga kasangkaran niini.
> Usa ka "Gubat ug Kalinaw", nga adunay usa ka milyon nga mga pulong, naghulagway lamang sa kasaysayan sa usa ka rehiyon sulod sa pipila ka mga dekada;
> Ug ang mga nobela sa science fiction sama sa "The Final Answer" ni Asimov klaro nga naghulagway sa binilyon ka tuig nga kasaysayan sa tibuok uniberso, lakip ang mga tawo, sa pipila lang ka libo nga mga pulong.
> Ang ingon nga pagka-inklusibo ug kaisog imposible nga makab-ot sa tradisyonal nga literatura.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Hinumdumi nga susihon ang pagkabalido sa imong pasaporte ug ang mga expired nga dokumento dili makasulod o makagawas sa nasud.

Kini gisulat ingon sa mosunod

```
> [!TIP]
> YOUR CONTENT
```

### Pahinumdom `> [!NOTE]`

> [!NOTE]
> Kung padad-an ko nimo og mensahe ug mo-reply dayon ko, unsay buot ipasabot?
> Kini nagpakita nga ganahan kaayo ko magdula og mga cellphone.


### Pahimangno `> [!WARN]`

> [!WARN]
> Kung moadto sa usa ka ihalas nga adventure, hinungdanon nga magpabilin nga luwas. Ania ang pipila ka mahinungdanong mga tip sa kaluwasan:
>
> - **Susihon ang forecast sa panahon** : Sa miaging semana, usa ka grupo sa mga tigkatkat ang nakasugat og bagyo sa tungatunga sa bukid tungod kay wala nila susihon ang forecast sa panahon ug kinahanglan nga mobakwit dayon.
> - **Pagdala sa gikinahanglang gamit** : Siguroha nga magdala ka ug igo nga pagkaon, tubig ug mga suplay sa first aid.
> - **Sabta ang terrain** : Pag-pamilyar sa imong kaugalingon sa terrain ug mga ruta sa adventure area nga abante aron malikayan nga mawala.
> - **Magpabilin nga Konektado** : Magpabilin nga konektado sa gawas nga kalibutan ug siguroha nga ang tanan makabalik nga luwas.
>
> Hinumdomi, ang kaluwasan kanunay nga nag-una!

## Listahan Sa Buhaton

- [x] Pagdesinyo sa prototype sa produkto ug lista sa bahin
- [ ] Tinoa ang stack sa teknolohiya ug mga himan sa pagpalambo
- [ ] Pagpalambo sa mga timeline sa pag-uswag sa produkto ug mga milestone

## Listahan

### Gi-Order Nga Lista

1. nagdagan
   1. Tulo ka beses sa usa ka semana, 5 ka kilometro matag higayon
   1. Pagdagan og tunga nga marathon
1. pagbansay sa gym
   1. Kaduha sa usa ka semana, 1 ka oras matag higayon
   1. Pag-focus sa core muscles

### Dili Han-Ay Nga Listahan

* sosyal nga mga panghitabo
  - Apil sa mga miting sa pagbayloay sa industriya
    + Sesyon sa pagpaambit sa teknolohiya
    + Miting sa Entrepreneurship Exchange
  - Pag-organisar ug panagtapok sa mga higala
    + BBQ sa gawas
    + gabii sa sine

## Panid

| tighunahuna       | Pangunang kontribusyon                           |
|--------------|------------------------------------|
| Confucius         | Nagtukod sa Confucianism |
| Socrates     | amahan sa pilosopiya sa kasadpan  |
| Nietzsche         | Ang pilosopiya sa Superman, nagsaway sa tradisyonal nga moralidad ug relihiyon       |
| marx       | komunismo |

### Dako Nga Lamesa Display Optimization

Alang sa medyo dako nga mga lamesa, ang mga mosunud nga pamaagi mahimong magamit aron ma-optimize ang epekto sa pagpakita:

1. Gamit ug gamay nga font

   Pananglitan, ibutang ang lamesa nga adunay `<div style="font-size:14px">` ug `</div>` .

   Timan-i nga ang `div` tag kinahanglang mag-okupar sa kaugalingon nga linya, ug ibilin ang mga blangko nga linya sa wala pa ug pagkahuman niini.
1. Para sa mas taas nga teksto sa cell, isulod ang `<br>` aron maputos ang linya
1. Kung ang usa ka kolum gipislit nga mubo ra, mahimo nimong idugang `<div style="width:100px">xxx</div>` sa header aron mapalapad ang gilapdon, ug mahimo usab nimo idugang ang [`<wbr>` sa header](//developer.mozilla.org/docs/Web/HTML/Element/wbr) aron makontrol ang posisyon sa pagkaputol sa linya.

Ang usa ka pananglitan sa demonstrasyon mao ang mosunod:

<div style="font-size:14px">

| nasud       | <div style="width:70px;margin:auto">ngalan sa panghunahuna</div> | Era | Pangunang ideolohikal nga kontribusyon                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucius                                           | 551-479 BC   | Ang magtutukod sa Confucianism misugyot sa kinauyokan nga mga konsepto sama sa "pagkamaayo" ug "pagkaangayan" ug gipasiugda ang moral nga pagtikad ug sosyal nga kahusay. |
| karaang greece     | Socrates                                       | 469-399 BC   | Ang pagsuhid sa kamatuoran pinaagi sa dayalogo ug dialectics nagsugyot og "ila sa imong kaugalingon" ug nagpasiugda sa makatarunganon nga panghunahuna         |
| France       | Voltaire                                         | 1694-1778       | Ang mga representante nga mga numero sa Enlightenment nagpasiugda sa pagkamakatarunganon, kagawasan ug pagkaparehas, ug gisaway ang relihiyosong patuotuo ug awtoridad nga pagmando.   |
| Alemanya       | Kant                                           | 1724-1804       | Ibutang ang "Kritika sa Putli nga Rason"<br> Gisusi ang mga pundasyon sa moralidad, kagawasan, ug kahibalo, nagpasiugda sa praktikal nga katarungan     |

</div>

Ang pseudocode alang sa panig-ingnan sa ibabaw mao ang mosunod:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kodigo

### Inline Nga Code

Sa halapad nga kalibutan sa mga programming language, `Rust` , `Python` , `JavaScript` ug `Go` ang matag usa nag-okupar sa usa ka talagsaon nga posisyon.

### Daghang Linya Sa Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Pagputol Sa Linya Sulod Sa Paragraph

Ang mga linya sa linya sulod sa mga paragraph mahimong makab-ot nga walay pagdugang og blangko nga mga linya tali sa mga linya.
Ang gilay-on tali sa mga linya sa linya sulod sa mga paragraph mas gamay kaysa sa gilay-on tali sa mga paragraph.

pananglitan:

> Pagkinabuhi ingon usa ka bantugan nga tawo,
> Ang kamatayon usa usab ka bayani sa multo.
> Gimingaw gihapon ko kang Xiang Yu,
> Nagpanuko sa pagtabok sa Jiangdong.
>
> Gigamit ni Li Qingzhao ang makapasubo nga istorya ni Xiang Yu aron ipaila ang kawalay katakus sa Dinastiyang Song.
> Nagpahayag ug kawalay katagbawan sa korte sa imperyal sa pagsurender nga walay away.