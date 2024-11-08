# Stil Sanawy

Aşakdaky stillerde `MarkDown` ýazmagyň usullaryny görmek üçin [şu sahypanyň deslapky faýlyna göz aýlamak üçin şu ýere basyň](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) .

## Eplenen Blok

|+| MarkDown näme?

    MarkDown ulanyjylara okamak we ýazmak aňsat tekst görnüşinde formatlanan resminamalary döretmäge mümkinçilik berýän ýeňil bellik dilidir.

    Köplenç resminamalary, blog makalalaryny, elektron kitaplary, forum ýazgylaryny we ş.m. ýazmak üçin ulanylýar.

    Aşakdaky artykmaçlyklary bar:

    1. Öwrenmek aňsat
    1. Gaty okalýar
    1. Wersiýa gözegçilik dostlukly

       `MarkDown` resminama ýönekeý tekst görnüşinde bolany üçin, programmistler olary aňsatlyk bilen wersiýa dolandyryş ulgamlaryna goşup bilerler ( `git` ýaly).

       Bu üýtgeşmeleri yzarlamagy we hyzmatdaşlygy has ýönekeýleşdirýär, esasanam toparyň ösüşinde.

|-| I18N näme?

    "I18N" "Halkaralaşmagyň" gysgaltmasy.

    "Halkaralaşma" sözüniň "I" bilen "N" arasynda 18 harp barlygy sebäpli, "I18N" wekilçiligi ýönekeýleşdirmek üçin ulanylýar.

    Düzgüne görä, bu birnäçe dili goldamak diýmekdir.


Eplenýän blok, aşakdaky ýaly ýazylan `i18n.site` dan `MarkDown` çenli uzaldylan sintaksisdir :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

bilen|+| `或`|-| "Bilen başlaýan setir eplenýän blok döreder we bukulýan blokyň mazmuny şol bir derejedäki indentasiýa bilen indiki setirlerdir (abzaslar boş setirler bilen bölünýär).

Pass`|-| `标记的折叠块默认展开，`|+| "Bellikli ýykylan bloklar deslapky ýagdaýda ýykylýar.

## & &

__ Underscore __ ,!~~ iş taşlaýyş~~ we **batyrgaý** görkeziş teksti.

Aşakdaky ýaly ýazylýar:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` web sahypasyny gurmak guralynyň `MarkDown` synçysy, çyzgy, çyzgy we goýy sintaksis optimizirledi, bellikden öň we soň boş ýerler bolmazdan güýje girip biler, bu bolsa Hytaý, Japanaponiýa we Koreýa ýaly dillerde resminamalary ýazmagy aňsatlaşdyrar. boşluklary bölüji hökmünde ulanmaň.

Giňeldilen : [näme üçin Nuggets ' Markdown sintaksis ( `**……**` ) käwagt güýje girmeýär?](//juejin.cn/post/7064565848421171213)

## Sitata

### Bir Setir Sitata

> Zehinlerimiň peýdaly boljakdygy meniň tebigatym, ähli pulum sarp edilenden soň gaýdyp gelerin.
<p style="text-align:right">─ Li Baý</p>

### Birnäçe Setir Sitata

> Ylmy fantastikaň ýene bir täsin artykmaçlygy, onuň örän giň gerimi.
> Million söz bilen "Uruş we Parahatçylyk" diňe bir sebitiň birnäçe onýyllyklaryň taryhyny suratlandyrýar;
> Asimowyň "Iň soňky jogap" ýaly ylmy fantastiki romanlar, tutuş älemiň milliardlarça ýyllyk taryhyny, şol sanda adamlary, birnäçe müň söz bilen aýdyň suratlandyrýar.
> Şeýle öz içine alyjylygy we batyrlygy adaty edebiýatda gazanyp bolmaýar.
<p style="text-align:right">U Liu Kixin</p>

### Maslahat `> [!TIP]`

> [!TIP]
> Pasportyňyzyň we wizanyňyzyň dogrudygyny barlamagy ýatdan çykarmaň, möhleti geçen resminamalar ýurda girip ýa-da çykyp bilmez.

Aşakdaky ýaly ýazylýar

```
> [!TIP]
> YOUR CONTENT
```

### Bellik `> [!NOTE]`

> [!NOTE]
> Maňa habar iberseň, derrew jogap bersem, munuň manysy näme?
> Bu, jübi telefonlary bilen oýnamagy gaty gowy görýändigimi görkezýär.


### Duýduryş `> [!WARN]`

> [!WARN]
> Wildabany başdan geçirmelere çykanyňyzda howpsuz bolmak möhümdir. Ine, käbir möhüm howpsuzlyk maslahatlary:
>
> - **Howanyň çaklamasyny barlaň** : Geçen hepde alpinistleriň bir topary dagyň ýarysynda tupana duş geldi, sebäbi howa maglumatyny barlamadylar we gyssagly ewakuasiýa etmeli boldular.
> - **Zerur enjamlary göteriň** : ýeterlik iýmit, suw we ilkinji kömek enjamlaryny getirýändigiňize göz ýetiriň.
> - **Theere düşüniň** : lostitirilmezlik üçin başdan geçirmeler meýdançasy we ugurlary bilen tanyşyň.
> - **Baglanyşykda boluň** : Daşarky dünýä bilen baglanyşykda boluň we her kimiň sag-aman gaýdyp biljekdigini üpjün ediň.
>
> Howpsuzlyk hemişe birinji ýerde durýar!

## Edilmeli Işleriň Sanawy

- [x] Önümiň prototipini we aýratynlyk sanawyny düzüň
- [ ] Tehnologiýa toplumyny we ösüş gurallaryny kesgitläň
- [ ] Önümi ösdürmegiň möhletlerini we ädimlerini düzüň

## Sanawy

### Sargyt Edilen Sanaw

1. ylgaýar
   1. Hepdede üç gezek, her gezek 5 km
   1. Halfarym marafon ylga
1. sport zaly
   1. Hepdede iki gezek, her gezek 1 sagat
   1. Esasy myşsalara üns beriň

### Tertipsiz Sanaw

* jemgyýetçilik wakalary
  - Senagat alyş-çalyş ýygnaklaryna gatnaşyň
    + Tehnologiýa paýlaşma sessiýasy
    + Telekeçilik alyş-çalyş ýygnagy
  - Dostlaryň ýygnagyny gurna
    + Daşarda BBQ
    + film gijesi

## Sahypa

| akyldar       | Esasy goşantlar                           |
|--------------|------------------------------------|
| Konfusiý         | Konfusianizmi esaslandyryjy |
| Sokrat     | günbatar pelsepesiniň atasy  |
| Nitşe         | Adaty ahlagy we dini tankytlaýan superman filosofiýasy       |
| Marks       | kommunizm |

### Uly Tablisanyň Optimizasiýasy

Has uly tablisalar üçin displeý effektini optimizirlemek üçin aşakdaky usullar ulanylyp bilner:

1. Has kiçi şrift ulanyň

   Mysal üçin, tablisany `<div style="font-size:14px">` we `</div>` bilen örtüň.

   `div` belligiň öz setirini eýelemelidigini we ondan öň we soň boş setirleri goýmalydygyny unutmaň.
1. Öýjükde has uzyn tekst üçin setiri örtmek üçin `<br>` goýuň
1. Sütün gaty gysga gysylsa, ini giňeltmek üçin sözbaşysyna `<div style="width:100px">xxx</div>` goşup bilersiňiz, setiriň arakesmesini dolandyrmak üçin [sözbaşysyna `<wbr>`](//developer.mozilla.org/docs/Web/HTML/Element/wbr) goşup bilersiňiz.

Görkeziş mysaly aşakdakylar:

<div style="font-size:14px">

| millet       | <div style="width:70px;margin:auto">akyldaryň ady</div> | Döwür | Esasy ideologiki goşantlar                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Hytaý       | Konfusiý                                           | Miladydan öňki 551-479-njy ýyllar   | Konfusianizmi esaslandyryjy "hoşniýetlilik" we "eýeçilik" ýaly esasy düşünjeleri teklip etdi we ahlak taýdan ösdürilmegini we jemgyýetçilik tertibini nygtady. |
| gadymy Gresiýa     | Sokrat                                       | Miladydan öňki 469-399-njy ýyllar   | Dialog we dialektika arkaly hakykaty öwrenmek "özüňizi tanamagy" teklip edýär we rasional pikirlenmäni nygtaýar         |
| Fransiýa       | Wolter                                         | 1694-1778       | Aňlatmanyň wekilleri rasionalizmi, erkinligi we deňligi goldaýardylar we dini yrymlary we awtoritar dolandyryşy tankytlaýardylar.   |
| Germaniýa       | Kant                                           | 1724-1804       | "Arassa sebäbiň tankytyny" öňe sürüň<br> Amaly sebäbine ünsi çekip, ahlagyň, erkinligiň we bilimiň esaslaryny öwrenýär     |

</div>

Aboveokardaky mysal üçin ýasama kod aşakdaky ýaly:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kody

### Giriş Kody

Programmirleme dilleriniň giň dünýäsinde `Rust` , `Python` , `JavaScript` we `Go` hersi özboluşly orny eýeleýär.

### Köp Setir Kody

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Abzasyň Içinde Setir Arakesmesi

Abzaslaryň içindäki setir arakesmelerine setirleriň arasynda boş setirler goşmazdan ýetip bolýar.
Abzaslaryň arasyndaky setir aralyklary, abzaslaryň arasyndaky aralykdan has kiçi.

meselem:

> Uly adam hökmünde ýaşa,
> Ölüm hem arwah gahrymanydyr.
> Men henizem Sýan Yuu küýseýärin,
> Jiangdongy geçmek islemeýär.
>
> Li Çinghao, Sýan Yuunyň pajygaly hekaýasyny Aýdym dinastiýasynyň ukypsyzlygyny görkezmek üçin ulandy.
> Uruşsyz boýun egendigi üçin imperiýa kazyýetine nägileligini bildirmek.