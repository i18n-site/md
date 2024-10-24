# Stil Sanawy

Aşakdaky stillerde `MarkDown` ýazmagyň usullaryny görmek üçin [şu sahypanyň deslapky faýlyna göz aýlamak üçin şu ýere basyň](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) .

## & &

__ Underscore __ ,!~~ iş taşlaýyş~~ we **batyrgaý** görkeziş teksti.

Aşakdaky ýaly ýazylýar:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` web sahypasyny gurmak guralynyň `MarkDown` derňewçisi, çyzgy, çyzgy we goýy sintaksis optimizirledi, bellikden öň we soň boş ýerler bolmazdan güýje girip biler, bu bolsa Hytaý, Japanaponiýa we Koreýa ýaly dillerde resminamalary ýazmagy aňsatlaşdyrar boşluklary bölüji hökmünde ulanmaýar.

: okamak [Näme üçin Nuggets ' Markdown sintaksis ( `**……**` ) käwagt güýje girmeýär?](//juejin.cn/post/7064565848421171213)

## Sitata

### Bir Setir Sitata

> Zehinlerimiň peýdaly boljakdygy meniň tebigatym, ähli pulum sarp edilenden soň gaýdyp gelerin.
<p style="text-align:right">─ Li Baý</p>

### Birnäçe Setir Sitata

> Ylmy fantastikaň ýene bir täsin artykmaçlygy, onuň örän giň gerimi.
> Million söz bilen "Uruş we Parahatçylyk" diňe bir sebitiň birnäçe onýyllyklaryň taryhyny suratlandyrýar;
> Asimowyň "Iň soňky jogap" ýaly ylmy fantastiki romanlar, tutuş älemiň milliardlarça ýyllyk taryhyny, şol sanda adamlary birnäçe müň söz bilen aýdyň suratlandyrýar.
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
> Wildabany başdan geçirmelere çykanyňyzda howpsuz bolmak möhümdir.
> Geçen hepde alpinistler topary dagyň ýarysynda tupana duçar boldular we howa maglumatyny barlap bilmedikleri üçin ewakuasiýa edilmeli boldular.
> Anyadyňyzdan çykarmaň, islendik açyk meýdanda howa ýeterlik taýýarlyk we üns berilmegini talap edýär.

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