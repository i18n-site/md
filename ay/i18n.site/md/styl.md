# Estilo Ukan Listapa

[Aka pankan phuqhat qillqat uñakipañatakix aka tuqir ch’iqt’am,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) ukhamat kunjams `MarkDown` qillqt’añax aka estilos ukanakamp uñjañataki.

## Bloque Doblado Ukampi

|+| ¿Kunas MarkDown ukax?

    MarkDown ukax mä k’acha marka aruwa, ukax apnaqirinakaruw formato ukan qillqatanakap mä sanu qillqat formato ukan lurañapatak yanapt’i, ukax jasakiw ullart’añatakis qillqañatakisa.

    Jilapachax documentación, blog tuqin qillqatanaka, e-libro, foro ukan qillqatanaka, ukat juk’ampinaka qillqañatakiw apnaqasi.

    Ukajj aka askinakaniwa:

    1. Yatiqañax facilakiwa
    1. Wali liyt’añjamawa
    1. Versión control ukax wali askiwa

       Niyakixay `MarkDown` qillqatanakax formato de texto llano ukankchixa, programadores ukanakax sistemas de control de versión ukarux jasakiw uñt’ayasipxaspa ( `git` ukham).

       Ukax mayjt’awinak arknaqañax ukat yanapt’asiñx juk’amp jasakiw tukuyi, juk’ampis equipo desarrollo ukanx.

|-| ¿Kunas I18N ukaxa?

    "I18N" ukax "Internacionalización" uka abreviaturawa.

    Niyakixay "Internacionalización" uka arux "I" ukat "N" uka taypinx 18 qillqanakanïchixa, "I18N" ukax uñacht'äwinak jan ch'amäñapatakiw apnaqasi.

    Laiconakan arunakaparjamax walja arunakar yanapt’añ sañ muni.


Bloque plegado ukax mä sintaxis extendida `i18n.site` ukat `MarkDown` ukhamawa, ukax akham qillqt'atawa :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

ukat `|+| `或`|-| ` ukampi qalltata chiqaxa mä bloque plegable uñstayani, ukatxa bloque plegado ukaxa qhipa chimpunakaxa pachpa nivel de indentación ukampiwa (párrafos ukanakaxa ch’uqi chimpunakampi jaljatawa).

Pasa`|-| `标记的折叠块默认展开，`|+| `Etiquetado t’unjata bloques ukanakax t’unjatawa.

## & Helga Ukax & Ukampiw Uñt'ayasi

Akax __ __~~ striketh ukax mä juk’a pachanakanwa~~ ukat **chʼiyar chʼiyar** qellqat uñachtʼayañatak qellqata.

Ukax akham qillqatawa:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`MarkDown` parser de la herramienta de construcción de sitio web `i18n.site` ukax subrayado, strikethrough ukat sintaxis negrita ukanakaruw optimizado ukax jan espacios ukanakamp chikaw lurasispa, ukax China, Japón ukat Corea uka arunakan qillqañax juk’amp jasakiw janiwa chiqanakaxa jaljayirinakjama apnaqañakiti.

Jach’a uñakipaña : [¿Kunatsa Nuggets’ Markdown sintaxis ( `**……**` ) ukax awisax jan phuqhaskiti?](//juejin.cn/post/7064565848421171213)

## Chanichaña

### Mä Sapa Chimpumpiw Uñt’ayasi

> Nayan naturalezajawa, talentonakajax askïniwa, ukat taqi qullqix tukusxipanx kutt’anxarakïwa.
<p style="text-align:right">─ Li Bai ukat juk’ampinaka</p>

### Walja Chimpunak Uñt’ayaña

> Ciencia ficción ukan yaqha askipax wali jach’awa.
> Mä "Ch'axwawi ukhamarak Sumankäwi", mä millón arunakampi, mä suyun sarnaqäwip walja tunka maranakan sarnaqäwip uñt'ayi;
> Ukat Asimov chachan “Qhipa jaysäwi” ukham novelas de ciencia ficción ukanakax mä qawqha waranq arunakampikiw taqpach universo ukan waranqa waranqa maranakan sarnaqäwip uñt’ayi, jaqinakas ukhamaraki.
> Ukham taqinir uñt’ayasiña ukat jan axsart’irïñax janiw nayra qillqatanakanx jikxataskaspati.
<p style="text-align:right">── Liu Cixin ukat juk’ampinaka</p>

### Iwxt’awi `> [!TIP]`

> [!TIP]
> Amtañani pasaporte ukatxa visa ukaxa chiqapa jani walt’awinaka uñakipaña.

Ukax akham qillqt’atawa

```
> [!TIP]
> YOUR CONTENT
```

### Uñakipt’aña `> [!NOTE]`

> [!NOTE]
> Mä mensaje apayanipxita ukat nayax jankʼakiw jaystʼista ukhaxa, ¿kun sañs muni?
> Ukaw celularanakampi anattʼañ wal munasitaj uñachtʼayi.


### Uñt’ayawi `> [!WARN]`

> [!WARN]
> Kunawsatix mä sallqa aventura ukar sarktan ukhax wali askiw jan kuna usun qhiparañaxa. Akax mä qawqha jach’a seguridad tuqit iwxt’awinakawa:
>
> - **Pacha uñt’ayawi uñakipt’aña** : Pasïr semananx mä tama qullu pataruw qullu patat chika thakinx mä thayampiw jikisipxäna kunatix janiw pacha uñakipapkänti ukat jank’akiw yaqha chiqar sarxapxañapäna.
> - **Wakisir yänaka apasiña** : Manq’añanaka, uma ukat nayrïr yanapt’äwinak apaniñaw wakisi.
> - **Terreno amuyt’aña** : Janïr chhaqhayañatakix terreno ukat rutas de la zona de aventura ukanakat yatxatañamawa.
> - **Uñt’ayasiña** : Anqa pachampi chikt’atäña ukat taqiniw jan kuna usun kutt’anipxañapatak uñjañama.
>
> ¡Amtañäni, ¡jan kuna jan waltʼäwin uñjasiñaw nayrankañapa!

## Luräwinakat Lista

- [x] Diseño de producto prototipo ukatxa lista de características ukanaka
- [ ] Pila tecnológica ukatxa desarrollo herramientas ukanaka amtaña
- [ ] Producto desarrollo pachanaka ukhamaraki jach’a lurawinakapa uñstayaña

## Lista

### Ordenado Lista Ukaxa

1. jalaña
   1. Kimsa kuti semananxa, 5 kilómetros sapa kuti
   1. Chika maratón t’ijt’aña
1. gimnasio ukan yatichäwipa
   1. Semanan pä kuti, sapa kuti 1 hora
   1. Musculos núcleos ukanakaruw chuym churaña

### Jan Ordenatäki Uka Lista

* eventos sociales ukanaka
  - Industria ukan intercambio tantachäwinakan chikanchasiña
    + Tecnología ukan chikancht’asiñ sesión
    + Emprendimiento Intercambio Tantachäwi
  - Amigunakan tantachasiñap wakichtʼañamawa
    + Anqax BBQ ukaw utji
    + pelicula arumax uñacht’ayaña

## Laphi

| amuyt’iri       | Jilïr yanapt’awinaka                           |
|--------------|------------------------------------|
| Confucio sat jilata         | Confucianismo sat yatichäwi uttʼayiriwa |
| Sócrates sat chachajja     | occidental filosofía ukan awkipa  |
| Nietzsche sat jilataw ukham luräna         | Filosofía superman, tradicional moralidad ukat religión ukanak k’umiña       |
| marx       | comunismo ukat juk’ampinaka |

### Jach’a Tabla Uñacht’ayaña Optimización

Mä juk’a jach’a tablanakatakixa, aka lurawinakampiwa uñacht’ayaña efectos ukanaka suma uñjañatakixa apnaqasispa:

1. Jisk’a qillqatanaka apnaqaña

   Amuyt’añataki, tabla ukarux `<div style="font-size:14px">` ukat `</div>` ukanakampiw ch’uqt’añama.

   Qhanacht’añatakix `div` chimpux jupan chimpup apnaqañapawa, ukatx ch’uqi chimpunak nayraqata ukat qhipa jaytañapawa.
1. Mä celulan juk’amp jaya qillqañatakix, `<br>` chimpumpiw chimpuntañatakix uchañama
1. Mä columna sinti jisk’a ch’allt’ata ukhaxa, `<div style="width:100px">xxx</div>` p’iqinchiriruxa yapxatasirakispawa ancho jach’anchayañataki, ukatxa [`<wbr>` p’iqiru](//developer.mozilla.org/docs/Web/HTML/Element/wbr) yapxatasirakispawa línea p’akjaña posición controlañataki.

Mä uñacht’äwi uñacht’äwix akhamawa:

<div style="font-size:14px">

| marka       | <div style="width:70px;margin:auto">amuyt’iri suti</div> | Era | Jilïr aportaciones ideológicas ukanaka                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China markanxa       | Confucio sat jilata                                           | 551-479 nayrïr pacha maranakanwa   | Confucianismo ukan utt’ayiripax “benevolencia” ukat “propiedad” ukham jach’a amuyunakaruw uñt’ayi ukatx cultivo moral ukat orden social ukanakaruw jach’anchayi. |
| nayra grecia marka     | Sócrates sat chachajja                                       | 469-399 nayrïr pacha maranakanwa   | Chiqa yatichäwinak aruskipäwimp dialéctica ukamp yatxatañax "juma pachpaw uñt'asiñama" sasaw amuyt'ayi ukatx racional amuyt'awiruw ch'amancharaki         |
| Francia markanxa       | Voltaire sat chachajj ukhamänwa                                         | 1694-1778       | Iluminación ukan representante jaqinakax racionalidad, libertad ukat igualdad ukanak arxatapxäna, ukat religioso superstición ukat autoritario apnaqañ tuqitx k’umipxäna.   |
| Alemania markanxa       | Kant                                           | 1724-1804       | "Crítica de la Razón Pura" uka nayrar sartayaña.<br> Suma sarnaqaña, qhispiyasiña ukat yatiñan cimientonakapat yatxati, ukat razonamiento práctico ukar ch’amanchasa     |

</div>

Aka uñacht’awix pseudocódigo ukax akhamawa:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Ukax Mä Chimpuwa

### Inline Ukax Mä Chimpuwa

Programación arunakan jach’a uraqpachanx `Rust` , `Python` , `JavaScript` ukat `Go` ukanakax sapa mayniw mä sapa chiqan jikxatasipxi.

### Walja Líneas De Codigo Ukanakaw Utji

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Línea T’aqa T’aqa Taypinxa

T’aqa taypin chimpunak t’unjañax jan ch’uqi chimpunak chimpunak taypin yapxatasax phuqhasispawa.
T’aqanak taypin chimpunak t’aqanuqt’atanakan chikanchawipax t’aqanak taypin chimpunakapat sipanx juk’amp jisk’akiwa.

ukhama:

> Jach’a jaqirjama jakañani, .
> Jiwañax mä heroe fantasma ukhamarakiwa.
> Nayax Xiang Yu, 1999 maran walpun munasta.
> Jiangdong markar makhatañ jan munkänti.
>
> Li Qingzhao jupax Xiang Yu jupan llaki sarnaqäwip apnaqatayna, Dinastía Song ukan jan yatiñap uñacht’ayañataki.
> Corte imperial ukar jan ch’axwañamp katuyasitapat jan satisfacción uñacht’ayaña.