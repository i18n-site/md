# Lista Tal-Istil

[Ikklikkja hawn biex tfittex il-fajl sors ta 'din il-paġna](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) biex tara kif tikteb `MarkDown` fl-istili li ġejjin.

## & &

__ huwa __ ,~~ strikethrough~~ u test ta' preżentazzjoni **b'tipa grassa** .

Huwa miktub kif ġej:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

L-parser `MarkDown` tal-għodda tal-bini tal-websajt `i18n.site` ottimizza s-sintassi tas-sottolinja, l-istrixxat, u l-tipa grassa Jista’ jidħol fis-seħħ mingħajr spazji qabel u wara l-marka, u jagħmilha aktar faċli biex tikteb dokumenti bħaċ-Ċina, il-Ġappun u l-Korea. li ma jużawx spazji bħala separaturi.

Qari : [Għaliex is-sintassi Markdown ta’ Nuggets ( `**……**` ) kultant ma tidħolx fis-seħħ?](//juejin.cn/post/7064565848421171213)

## Kwotazzjoni

### Kwotazzjoni Linja Waħda

> Hija n-natura tiegħi li t-talenti tiegħi se jkunu utli, u se niġi lura wara li l-flus kollha tiegħi jkunu intefqu.
<p style="text-align:right">─ Li Bai</p>

### Kwotazzjonijiet Multipli Linja

> Vantaġġ uniku ieħor tal-fantaxjenza huwa l-ambitu estremament wiesa 'tagħha.
> “Gwerra u Paċi”, b’miljun kelma, tiddeskrivi biss l-istorja ta’ reġjun għal diversi għexieren ta’ snin;
> U rumanzi ta’ fantaxjenza bħal “The Final Answer” ta’ Asimov jiddeskrivu b’mod ċar il-biljuni ta’ snin ta’ storja tal-univers kollu, inklużi l-bnedmin, fi ftit eluf ta’ kliem biss.
> Tali inklussività u kuraġġ huma impossibbli li jinkisbu fil-letteratura tradizzjonali.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Ftakar li tiċċekkja l-validità tal-passaport u l-viża tiegħek Id-dokumenti skaduti ma jistgħux jidħlu jew joħorġu mill-pajjiż.

Huwa miktub kif ġej

```
> [!TIP]
> your content
```

### Rimarka `> [!NOTE]`

> [!NOTE]
> Jekk tibgħatli messaġġ u nwieġeb istantanjament, xi jfisser?
> Dan juri li nħobb ħafna nilgħab bil-mowbajls.


### Twissija `> [!WARN]`

> [!WARN]
> Meta tmur għal avventura selvaġġa, huwa importanti li tibqa' sigura.
> Il-ġimgħa li għaddiet, grupp ta’ climbers iltaqgħu ma’ maltempata nofs il-muntanja u kellhom jevakwaw minħabba li naqsu milli jiċċekkjaw it-tbassir tat-temp.
> Ftakar, kwalunkwe attività fil-beraħ teħtieġ preparazzjoni adegwata u attenzjoni għat-temp.

## Lista Ta' Affarijiet Li Tagħmel

- [x] Disinn il-prototip tal-prodott u l-lista tal-karatteristiċi
- [ ] Iddetermina l-munzell tat-teknoloġija u l-għodod tal-iżvilupp
- [ ] Żviluppa skadenzi u tragwardi tal-iżvilupp tal-prodott

## Lista

### Lista Ordnata

1. ġiri
   1. Tliet darbiet fil-ġimgħa, 5 kilometri kull darba
   1. Mexxi nofs maratona
1. taħriġ fil-ġinnasju
   1. Darbtejn fil-ġimgħa, siegħa kull darba
   1. Iffoka fuq il-muskoli tal-qalba

### Lista Mhux Ordnata

* avvenimenti soċjali
  - Ipparteċipa fil-laqgħat tal-iskambju tal-industrija
    + Sessjoni ta' qsim tat-teknoloġija
    + Laqgħa ta' skambju ta' intraprenditorija
  - Organizza ġbir ta 'ħbieb
    + BBQ ta' barra
    + lejl tal-films

## Folja

| ħassieb       | Kontribuzzjonijiet ewlenin                           |
|--------------|------------------------------------|
| Konfuċju         | Fundatur tal-Konfuċjaniżmu |
| Sokrates     | missier il-filosofija tal-punent  |
| Nietzsche         | Filosofija Superman, li tikkritika l-moralità u r-reliġjon tradizzjonali       |
| marx       | komuniżmu |

## kodiċi

### Kodiċi Inline

Fid-dinja vasta tal-lingwi tal-ipprogrammar, `Rust` , `Python` , `JavaScript` u `Go` kull wieħed jokkupa pożizzjoni unika.

### Linji Multipli Ta 'kodiċi

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```