# Lista Tal-Istil

[Ikklikkja hawn biex tfittex il-fajl sors ta 'din il-paġna](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) biex tara kif tikteb `MarkDown` fl-istili li ġejjin.

## Blokka Mitwija

|+| X'inhu MarkDown?

    MarkDown huwa lingwaġġ ta' markup ħafif li jippermetti lill-utenti joħolqu dokumenti fformattjati f'format ta' test sempliċi li huwa faċli biex jinqara u jinkiteb.

    Użati komunement biex tikteb dokumentazzjoni, artikoli tal-blog, kotba elettroniċi, postijiet fil-forum, eċċ.

    Għandu l-vantaġġi li ġejjin:

    1. Faċli biex titgħallem
    1. Jinqara ħafna
    1. Kontroll tal-verżjoni faċli

       Peress li `MarkDown` dokumenti huma f'format ta 'test sempliċi, il-programmaturi jistgħu faċilment jinkorporawhom f'sistemi ta' kontroll tal-verżjoni (bħal `git` ).

       Dan jagħmel it-traċċar tal-bidliet u l-kollaborazzjoni ħafna aktar sempliċi, speċjalment fl-iżvilupp tat-tim.

|-| X'inhu I18N?

    "I18N" hija l-abbrevjazzjoni ta' "Internationalization".

    Peress li l-kelma "Internazzjonalizzazzjoni" għandha 18-il ittra bejn "I" u "N", "I18N" tintuża biex tissimplifika r-rappreżentazzjoni.

    F'termini ta 'layman's, dan ifisser appoġġ ta' lingwi multipli.


Blokk li jintwew huwa sintassi estiża ta `i18n.site` sa `MarkDown` , miktuba kif ġej :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

ma '|+| `或`|-| Il-linja li tibda b' ` se tiġġenera blokka li tiwi, u l-kontenut tal-blokka li tiwi huwa l-linji sussegwenti bl-istess livell ta 'indentazzjoni (il-paragrafi huma separati minn linji vojta).

Għaddi'|-| `标记的折叠块默认展开，`|+| `Blokki mġarrfa b'tikketta huma mġarrfa b'mod awtomatiku.

## & &

__ huwa __ ,~~ strikethrough~~ u test ta' preżentazzjoni **b'tipa grassa** .

Huwa miktub kif ġej:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Il-parser `MarkDown` tal-għodda tal-bini tal-websajt `i18n.site` ottimizza s-sintassi tas-sottolinja, barra u grassa Jista' jidħol fis-seħħ mingħajr spazji qabel u wara l-marka, u jagħmilha aktar faċli biex tikteb dokumenti bħaċ-Ċina, il-Ġappun u l-Korea li. tużax spazji bħala separaturi.

Qari : [Għaliex is-sintassi Markdown ta’ Nuggets ( `**……**` ) kultant ma tidħolx fis-seħħ?](//juejin.cn/post/7064565848421171213)

## Kwotazzjoni

### Kwotazzjoni Linja Waħda

> Hija n-natura tiegħi li t-talenti tiegħi se jkunu utli, u se nerġa' lura wara li l-flus kollha tiegħi jkunu intefqu.
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
> YOUR CONTENT
```

### Rimarka `> [!NOTE]`

> [!NOTE]
> Jekk tibgħatli messaġġ u nwieġeb istantanjament, xi jfisser?
> Dan juri li nħobb ħafna nilgħab bil-mowbajls.


### Twissija `> [!WARN]`

> [!WARN]
> Meta tmur għal avventura selvaġġa, huwa importanti li tibqa' sigura. Hawn huma xi suġġerimenti ewlenin dwar is-sigurtà:
>
> - **Iċċekkja t-tbassir tat-temp** : Il-ġimgħa li għaddiet, grupp ta 'climbers iltaqgħu ma' maltempata f'nofs il-muntanja minħabba li ma ċċekkjawx it-tbassir tat-temp u kellhom jevakwaw b'mod urġenti.
> - **Ġorr it-tagħmir meħtieġ** : Kun żgur li ġġib biżżejjed ikel, ilma u provvisti għall-ewwel għajnuna.
> - **Ifhem it-terren** : Iffamiljarizza ruħek mat-terren u r-rotot taż-żona tal-avventura bil-quddiem biex tevita li tintilef.
> - **Ibqa' Konness** : Ibqa' konness mad-dinja ta' barra u kun żgur li kulħadd jista' jirritorna mingħajr periklu.
>
> Ftakar, is-sigurtà dejjem tiġi l-ewwel!

## Lista Ta' Affarijiet Li Tagħmel

- [x] Disinn il-prototip tal-prodott u l-lista tal-karatteristiċi
- [ ] Iddetermina l-munzell tat-teknoloġija u l-għodod tal-iżvilupp
- [ ] Żviluppa skadenzi u tragwardi tal-iżvilupp tal-prodott

## Lista

### Lista Ordnata

1. running
   1. Tliet darbiet fil-ġimgħa, 5 kilometri kull darba
   1. Mexxi nofs maratona
1. taħriġ fil-ġinnasju
   1. Darbtejn fil-ġimgħa, siegħa kull darba
   1. Iffoka fuq il-muskoli tal-qalba

### Lista Mhux Ordnata

* avvenimenti soċjali
  - Ipparteċipa fil-laqgħat tal-iskambju tal-industrija
    + Sessjoni ta' qsim tat-teknoloġija
    + Laqgħa ta' Skambju ta' Intraprenditorija
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

### Ottimizzazzjoni Tal-Wiri Tal-Mejda Kbira

Għal tabelli relattivament kbar, il-metodi li ġejjin jistgħu jintużaw biex jiġi ottimizzat l-effett tal-wiri:

1. Uża font iżgħar

   Per eżempju, wrap it-tabella `<div style="font-size:14px">` u `</div>` .

   Innota li t-tikketta `div` trid tokkupa l-linja tagħha stess, u tħalli linji vojta qabel u wara.
1. Għal test itwal f'ċellula, daħħal `<br>` biex tkebbeb il-linja
1. Jekk kolonna tingħafas qasir wisq, tista 'żżid `<div style="width:100px">xxx</div>` mal-header biex tespandi l-wisa', u tista 'wkoll iżżid [`<wbr>` mal-header](//developer.mozilla.org/docs/Web/HTML/Element/wbr) biex tikkontrolla l-pożizzjoni tal-waqfa tal-linja.

Eżempju ta’ dimostrazzjoni huwa kif ġej:

<div style="font-size:14px">

| nazzjon       | <div style="width:70px;margin:auto">isem ħassieb</div> | Era | Kontribuzzjonijiet ideoloġiċi ewlenin                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Iċ-Ċina       | Konfuċju                                           | 551-479 QK   | Il-fundatur tal-Konfuċjaniżmu ppropona kunċetti ewlenin bħal "benevolenza" u "propjetà" u enfasizza l-kultivazzjoni morali u l-ordni soċjali. |
| il-greċja tal-qedem     | Sokrates                                       | 469-399 QK   | L-esplorazzjoni tal-verità permezz tad-djalogu u d-djalettika tipproponi "kun af lilek innifsek" u tenfasizza l-ħsieb razzjonali         |
| Franza       | Voltaire                                         | 1694-1778       | Figuri rappreżentattivi tal-Illuminiżmu kienu favur ir-razzjonalità, il-libertà u l-ugwaljanza, u kkritikaw is-superstizzjoni reliġjuża u l-ħakma awtoritarja.   |
| il-Ġermanja       | Kant                                           | 1724-1804       | Tressaq il-"Kritika tar-Raġuni Pura"<br> Jesplora l-pedamenti tal-moralità, il-libertà, u l-għarfien, filwaqt li jenfasizza r-raġuni prattika     |

</div>

Il-psewdokodiċi għall-eżempju ta 'hawn fuq huwa kif ġej:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kodiċi

### Kodiċi Inline

Fid-dinja vasta tal-lingwi tal-ipprogrammar, `Rust` , `Python` , `JavaScript` u `Go` kull wieħed jokkupa pożizzjoni unika.

### Linji Multipli Ta 'kodiċi

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Waqfa Tal-Linja Fi Ħdan Il-Paragrafu

Waqfiet tal-linji fi ħdan il-paragrafi jistgħu jinkisbu mingħajr ma jiżdiedu linji vojta bejn il-linji.
L-ispazjar bejn il-pawżi tal-linji fi ħdan il-paragrafi huwa iżgħar mill-ispazjar bejn il-paragrafi.

per eżempju:

> Għix bħala persuna kbira,
> Il-mewt hija wkoll eroj ghost.
> Għadni miss Xiang Yu,
> Riluttanti li jaqsmu Jiangdong.
>
> Li Qingzhao uża l-istorja traġika ta 'Xiang Yu biex jagħti ħjiel dwar l-inkompetenza tad-Dynasty Song.
> Esprimi nuqqas ta 'sodisfazzjon mal-qorti imperjali għall-konsenja mingħajr ġlieda.