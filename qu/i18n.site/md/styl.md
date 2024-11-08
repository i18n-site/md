# Lista De Estilo

[Kaypi ñit'iy kay p'anqap pukyuta willañiqita qhawanaykipaq,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) `MarkDown` qatiq estilokunapi qillqanapaq.

## Bloque Doblado Nisqa

|+| ¿Imataq MarkDown?

    MarkDown nisqaqa llañu marka simim, chaymi llamk'achiqkunata formatoyuq qillqakunata llañu qillqa formatopi ruwayta atin, chaymi mana sasachu ñawirinapaq qillqanapaq.

    Aswanta llamk'achisqa qillqakunata qillqanapaq, blog qillqakunata, e-librokunata, foro qillqakunata, hukkunatapas.

    Kay allinkunayuqmi:

    1. Facil yachay
    1. Altamente leenapaq hina
    1. Versión control amigable

       `MarkDown` qillqakuna llañu qillqa formatopi kasqanrayku, programaqkuna mana sasachakuspalla laya kamachiy sistemakunaman ( `git` hina) churayta atinku.

       Kayqa tikraykunata qatiy chaymanta yanapanakuy aswan sasallawan ruwan, aswanta equipo wiñachiypi.

|-| ¿Imataq I18N?

    "I18N" nisqaqa "Internacionalización" nisqap pisichasqanmi.

    "Internacionalización" simiqa "I"wan "N"wan chawpipi 18 qillqayuq kasqanraykum, "I18N" nisqawan rikuchiyta pisiyachinapaq.

    Layqa rimaypiqa achka simikunata yanapaymi.


P'alta bloque nisqaqa `i18n.site` `MarkDown` mast'arisqa sintaxismi , kayhina qillqasqa :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

con `|+| `或`|-| ` nisqawan qallariq chiruqa huk p'alta bloque nisqatam paqarichinqa, p'alta bloquepa contenidonqa qatiqnin chirukunam kikin nivel de indentación nisqawan (parrafokunaqa ch'usaq chirukunawanmi rakisqa).

Pasa`|-| `标记的折叠块默认展开，`|+| `Etiquetado thuñisqa bloquekunaqa ñawpaqmantaraqmi thuñisqa.

## & &

Kayqa # Subrayar __ , __~~ huelga nisqawan~~ hinaspa **yana letrawan** presentacion texto.

Kayhinata qillqasqa kachkan:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` t'aqwiq `i18n.site` web kiti ruway yanapakuymanta allinchasqa subrayado, strikethrough, chaymanta yana sintaxis kaqwan ruway atikunman mana espaciokunayuq ñawpaq chaymanta qhipa marka, chaymanta aswan facil qillqakuna qillqay simikunapi China, Japón, chaymanta Corea hina ama espaciokunata t’aqaq hinachu apaykachana.

[Markdown `**……**`](//juejin.cn/post/7064565848421171213) :

## Cita

### Huk Chirulla Cita

> Naturalezaymi talentoykuna allin kanqa, kutimusaqtaqmi llapa qolqey tukusqaña kaqtin.
<p style="text-align:right">─ Li Bai sutiyuq runa</p>

### Achka Chirumanta Citakuna

> Ciencia ficción nisqapa huk sapaq allinninqa ancha hatun kayninmi.
> Huk "Guerra y Hawka", millon simikunawan, huk suyupa historianmanta achka chunka watakunallamanta willakun;
> Hinallataq Asimovpa "Qhipa kutichiy" nisqa hina ciencia ficción nisqa novelakunaqa, pisi waranqa simikunallapin sut'ita willan waranqa waranqa waranqa watakuna lliw teqsimuyuntinpa historianmanta, runakunapas, pisi waranqa simikunallapi.
> Chayna llapanpaq, mana manchakuq kayqa manam atikunchu ñawpaqmantaraq qillqakunapiqa.
<p style="text-align:right">── Liu Cixin sutiyuq runa</p>

### Yuyaychay `> [!TIP]`

> [!TIP]
> Yuyariy pasaporteykipa hinaspa visaykipa validezninta qawanaykipaq.

Kayhinata qillqasqa kachkan

```
> [!TIP]
> YOUR CONTENT
```

### Rimanakuy `> [!NOTE]`

> [!NOTE]
> Sichus huk mensajeta apachimuwanki hinaspa chay rato kutichini chayqa, ¿ima ninantaq chay?
> Kaymi qawachin celularkunawan pukllayta anchata kuyasqayta.


### Advertencia `> [!WARN]`

> [!WARN]
> Sallqa aventuraman rispaqa allinmi mana imamanta manchakuspa kay. Kaypi wakin llalliq seguridad yuyaychaykuna kachkan:
>
> - **Tiempomanta willakuy** : Qayna semanan huk t’aqa orqoman wichariqkuna urquq kuskanninpi wayra-parawan tuparqanku, pachaq willakuyninta mana qhawarisqankurayku, chaymi usqhaylla lloqsinanku karqan.
> - **Necesario equipokunata apay** : Aseguray mikhuykunata, yakuta, primeros auxilios nisqakunata ima apamunaykipaq.
> - **Terrenota entiendey** : Ñawpaqmantaraqmi allinta reqsinayki aventurapi kaq terrenota hinaspa ñanninkunata, chaynapi mana chinkanaykipaq.
> - **T'inkisqa kay** : Hawa pachawan tinkisqa kay hinaspa llapa runa mana imamanta manchakuspa kutimunankupaq qhaway.
>
> ¡Yuyariy, seguridadqa ñawpaqpipunim!

## Ruwanakuna Lista

- [x] Ruru prototipo chaymanta ruwanakuna lista ruway
- [ ] Tecnología pila chaymanta wiñachiy yanapakuykunata tanteay
- [ ] Rurukuna wiñachiy pachakunata chaymanta hatun ruwaykunata ruway

## Lista

### Kamachisqa Lista

1. paway
   1. Kimsa kutita semanapi, sapa kuti 5 kilómetro
   1. Kuska maratón nisqapi phaway
1. gimnasio nisqapi entrenamiento
   1. Semanapi iskay kutita, sapa kuti 1 hora
   1. Ukhupi aychakunapi yuyaykuy

### Mana Kamachisqa Lista

* eventos sociales nisqakuna
  - Industria intercambio huñunakuykunapi participay
    + Tecnología rakinakuy sesión
    + Emprendimiento Intercambio Huñunakuy
  - Amistadkunapa huñunakuyninta organizay
    + Barbacoa al aire libre
    + pelicula tuta

## Rapi

| yuyaysapa       | Hatun yanapakuykuna                           |
|--------------|------------------------------------|
| Confucio sutiyuq runa         | Confucianismo nisqap kamaqnin |
| Sócrates sutiyuq runa     | occidental filosofía nisqap taytan  |
| Nietzsche sutiyuq runa         | Superman filosofía, tradicional moralidadta, religiontapas k'amispa       |
| marx       | comunismo nisqa |

### Hatun Tabla Qhaway Allinchay

Aswan hatun tablakunapaq, kay ruwanakuna llamk'achiy atikunman qhaway ruway allinchaypaq:

1. Aswan huch’uy letrakunata utilizay

   Ejemplopaq, tablata `<div style="font-size:14px">` , `</div>` nisqawan k’uyuy.

   Reparay `div` etiquetaqa kikin chiruta hap'inan tiyan, ñawpaqninpipas qhipamanpas ch'usaq chirukunata saqispa.
1. Huk celdapi aswan unay qillqapaq, `<br>` churay chiruta k'uyunaykipaq
1. Huk sapaqchasqa ancha pisilla ñit'isqa kaptinqa, umalliqman `<div style="width:100px">xxx</div>` yapayta atinki anchunta mast'arinaykipaq, [umalliqmanpas `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) yapayta atinki chiru p'akisqa kayninta kamachinaykipaq.

Huk demostración ejemplon kay hina:

<div style="font-size:14px">

| nación       | <div style="width:70px;margin:auto">yuyaysapa suti</div> | Era | Principal contribuciones ideológicas nisqakuna                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucio sutiyuq runa                                           | 551-479 watakunapi manaraq Kristup hamusqan pacha   | Confucianismo nisqap kamaqninqa "sumaq kay" , "propiedad" nisqa hatun yuyaykunatam yuyaycharqan, chaymantataqmi aswanta rimarirqan tarpuy moral nisqapi, orden social nisqapipas. |
| ñawpa griego     | Sócrates sutiyuq runa                                       | 469-399 watakunapi manaraq Cristo hamushaqtin   | Rimanakuywan, dialécticawan chiqap kaqta maskayqa "kikiykita riqsikuy" nisqatam yuyaychakun, chaynallataqmi racional yuyayta kallpanchan         |
| Francia suyupi       | Voltaire sutiyuq runa                                         | 1694-1778       | K'anchay pachamanta representante figuras nisqakunaqa racionalidad, libre kayta, kaqlla kayta ima rimarirqanku, religioso superstición nisqakunata, autoritario kamachiytapas k'amirqanku.   |
| Alemania nacion       | Kant                                           | 1724-1804       | "Crítica de la Razón Pura" nisqata ñawpaqman churay.<br> Allin kawsaypa, libre kaypa, yachaypa teqsinkunatan t’aqwin, chaypin aswanta rimarin razon práctica nisqamanta     |

</div>

Hawa ejemplopaq pseudocódigo nisqa kayhinam:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Código Nisqa

### Inline Codigo Nisqa

Programación simikunap hatun pachanpiqa, `Rust` , `Python` , `JavaScript` , `Go` sapankanku huk sapalla posiciónta hap'inku.

### Achka Chirukuna Codigo

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Parrafo Ukhupi Chirukuna Pakiy

Parrafokuna ukhupi chirukuna pakiyqa atikunmanmi mana chirukunapura ch’usaq chirukunata yapaspa.
Parrafokuna ukupi chiru pakisqakuna karupi kasqanqa aswan uchuyllam parrafokunapa chawpinpi karunchakusqanmantaqa.

kay hina:

> Hatun runa hina kawsay, .
> Wañuyqa fantasma heroepas.
> Kunankamapas Xiang Yuta, 1999 watapi faltakuni.
> Jiangdong llaqtata mana chimpayta munaspa.
>
> Li Qingzhaoqa Xiang Yupa llakikuypaq willakuynintam llamk'achirqan, Song Dinastía nisqap mana yachayniyuq kayninta rikuchinanpaq.
> Corte imperialwan mana kusisqa kayninta qawachispa, mana maqanakuspa entregakusqanmanta.