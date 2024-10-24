# Listaan Ti Estilo

[I-klik ditoy tapno ag-browse ti taudan a file daytoy a panid](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) tapno makita no kasano ti agsurat `MarkDown` kadagiti sumaganad nga estilo.

## & -Underline &

Daytoy ti I-underscore __ , __~~ strikethrough ti panag-strikethrough~~ **ken nalukmeg** a teksto ti presentasion.

Kastoy ti pannakaisuratna:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Ti `MarkDown` a parser ti `i18n.site` a ramit ti panagbangon ti website ket nang-optimize ti underline, strikethrough, ken bold a sintaksis Daytoy ket mabalin nga epektibo nga awan dagiti espasio sakbay ken kalpasan ti marka, a mangpalaka ti panagsurat kadagiti dokumento kadagiti pagsasao a kas ti Tsina, Hapon, ken Korea a saan nga agusar kadagiti espasio kas separator.

Napalawa a panagbasa : [Apay a saan nga epektibo no dadduma ti Markdown syntax ( `**……**` ) ti Nuggets?](//juejin.cn/post/7064565848421171213)

## Adawen

### Maymaysa a Linia a Sitas

> Nakaisigudko a makagunggona dagiti talentok, ket agsubliak kalpasan a nabusbos amin a kuartak.
<p style="text-align:right">─ Ni Li Bai</p>

### Adu a Linia a Sitas

> Ti sabali pay a naisangsangayan a pagimbagan ti science fiction ket ti nalawa unay a sakupna.
> Ti maysa a "Gubat ken Kappia", nga addaan iti maysa a milion a balikas, ket mangiladawan laeng ti pakasaritaan ti maysa a rehion iti sumagmamano a dekada;
> Ket dagiti nobela ti science fiction a kas iti "Ti Maudi a Sungbat" ni Asimov ket nalawag a mangiladawan kadagiti binilion a tawen a pakasaritaan ti intero nga uniberso, agraman dagiti tattao, iti sumagmamano laeng a ribu a sasao.
> Imposible a maragpat ti kasta a pannakairaman ken kinatured iti tradisional a literatura.
<p style="text-align:right">── Ni Liu Cixin nga</p>

### Tip `> [!TIP]` Tip

> [!TIP]
> Laglagipem a kitaen ti kinaumiso ti pasaporte ken visa dagiti napalabasen a dokumento ket saan a makastrek wenno makaruar iti pagilian.

Kastoy ti pannakaisuratna

```
> [!TIP]
> your content
```

### Remark `> [!NOTE]`

> [!NOTE]
> No mangipatulodka kaniak iti mensahe ket dagus a sumungbatak, ania ti kayat a sawen dayta?
> Ipakita daytoy a talaga a pagay-ayatko ti agay-ayam kadagiti mobile phone.


### Pakdaar `> [!WARN]`

> [!WARN]
> No mapan iti wild adventure, napateg ti agtalinaed a natalged.
> Idi napan a lawas, nasabat ti maysa a grupo dagiti agsaksakay iti bagyo iti kagudua ti bantay ket masapul nga agbakwit gapu ta dida kitaen ti forecast ti paniempo.
> Laglagipem nga aniaman nga aktibidad iti ruar kasapulanna ti umdas a panagsagana ken panangasikaso iti paniempo.

## Listaan Dagiti Aramiden

- [x] Idisenio ti prototype ti produkto ken listaan ti tampok
- [ ] Ikeddeng ti technology stack ken dagiti ramit ti panagdur-as
- [ ] Mangbukel kadagiti timeline ken milestones ti panagdur-as ti produkto

## Listaan

### Naurnos a Listaan

1. panagtaray
   1. Mamitlo iti makalawas, 5 a kilometro iti tunggal gundaway
   1. Agtaray iti kagudua a marathon
1. panagsanay iti gym
   1. Mamindua iti makalawas, 1 nga oras iti tunggal gundaway
   1. Ipamaysam dagiti core muscles

### Di Naurnos a Listaan

* dagiti sosial a pasamak
  - Makiraman kadagiti miting ti panagsinnukat ti industria
    + Sesion ti panagbingay ti teknolohia
    + Miting ti panagsinnukat ti negosiante
  - Mangorganisar iti panagtitipon dagiti gagayyem
    + BBQ iti ruar
    + rabii ti pelikula

## Paset

| managpanunot       | Kangrunaan a kontribusion                           |
|--------------|------------------------------------|
| Ni Konfusio         | Nangipasdek iti Confucianismo |
| Ni Socrates     | ama ti pilosopia ti laud  |
| Nietzsche nga         | Pilosopia ti Superman, a mangbabalaw iti tradisional a moralidad ken relihion       |
| marx       | komunismo |

## Kodigo

### Kodigo Ti Inline

Iti nalawa a lubong dagiti pagsasao ti panagprograma, `Rust` , `Python` , `JavaScript` ken `Go` ket tunggal maysa ket mangsakup ti naisangsangayan a saad.

### Adu a Linia Ti Kodigo

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```