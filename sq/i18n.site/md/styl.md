# Lista E Stileve

[Klikoni këtu për të shfletuar skedarin burimor të kësaj faqeje](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) për të parë se si të shkruani `MarkDown` në stilet e mëposhtme.

## Bllok I Palosur

|+| Çfarë është MarkDown?

    MarkDown është një gjuhë e lehtë shënimi që lejon përdoruesit të krijojnë dokumente të formatuara në një format teksti të thjeshtë që është i lehtë për t'u lexuar dhe shkruar.

    Zakonisht përdoret për të shkruar dokumentacion, artikuj në blog, e-libra, postime në forum, etj.

    Ajo ka përparësitë e mëposhtme:

    1. Lehtë për t'u mësuar
    1. Shumë e lexueshme
    1. Kontrolli i versionit miqësor

       Meqenëse `MarkDown` dokumente janë në format teksti të thjeshtë, programuesit mund t'i inkorporojnë lehtësisht në sistemet e kontrollit të versioneve (si `git` ).

       Kjo e bën shumë më të thjeshtë ndjekjen e ndryshimeve dhe bashkëpunimin, veçanërisht në zhvillimin e ekipit.

|-| Çfarë është I18N?

    "I18N" është shkurtesa e "Internationalization".

    Meqenëse fjala "Internationalization" ka 18 shkronja midis "I" dhe "N", "I18N" përdoret për të thjeshtuar paraqitjen.

    Në terma laikë, do të thotë të mbështesësh shumë gjuhë.


Blloku i palosshëm është një sintaksë e zgjeruar prej `i18n.site` në `MarkDown` , e shkruar si më poshtë :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

me `|+| `或`|-| Rreshti që fillon me ` do të gjenerojë një bllok të palosshëm dhe përmbajtja e bllokut të palosshëm është rreshtat pasardhës me të njëjtin nivel dhëmbëzimi (paragrafët ndahen me rreshta bosh).

Kalim`|-| `标记的折叠块默认展开，`|+| `Blloqet e shembura të etiketuara shemben si parazgjedhje.

## & Strikethrough &

__ është Nënvizimi __ ,~~ grevë~~ dhe tekst prezantues **të guximshëm** .

Është shkruar si më poshtë:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Analisti `MarkDown` i veglës së ndërtimit të uebsajtit `i18n.site` ka optimizuar sintaksën e nënvizuar, gërmuese dhe të theksuara. Mund të hyjë në fuqi pa hapësira para dhe pas shenjës, duke e bërë më të lehtë shkrimin e dokumenteve në gjuhë të tilla si Kina, Japonia dhe Koreja. mos përdorni hapësira si ndarëse.

: i zgjeruar [Pse sintaksa Markdown ( `**……**` ) e Nuggets ndonjëherë nuk hyn në fuqi?](//juejin.cn/post/7064565848421171213)

## Citim

### Citat Me Një Rresht

> Është natyra ime që talentet e mia do të jenë të dobishme dhe unë do të kthehem pasi të jenë shpenzuar të gjitha paratë e mia.
<p style="text-align:right">─ Li Bai</p>

### Kuotat E Shumë Rreshtave

> Një tjetër avantazh unik i fantashkencës është shtrirja e tij jashtëzakonisht e gjerë.
> Një "Lufta dhe Paqja", me një milion fjalë, përshkruan vetëm historinë e një rajoni për disa dekada;
> Dhe romanet fantastiko-shkencore si "Përgjigjja përfundimtare" e Asimov përshkruajnë gjallërisht historinë miliarda vjeçare të të gjithë universit, duke përfshirë qeniet njerëzore, me vetëm disa mijëra fjalë.
> Një gjithëpërfshirje dhe guxim i tillë është i pamundur të arrihet në letërsinë tradicionale.
<p style="text-align:right">── Liu Cixin</p>

### Këshilla `> [!TIP]`

> [!TIP]
> Mos harroni të kontrolloni vlefshmërinë e pasaportës dhe vizës suaj Dokumentet e skaduara nuk mund të hyjnë ose të dalin nga vendi.

Është shkruar si më poshtë

```
> [!TIP]
> YOUR CONTENT
```

### Vërejtje `> [!NOTE]`

> [!NOTE]
> Nëse më dërgoni një mesazh dhe unë përgjigjem menjëherë, çfarë do të thotë?
> Kjo tregon se më pëlqen shumë të luaj me celularë.


### Paralajmërim `> [!WARN]`

> [!WARN]
> Kur shkoni në një aventurë të egër, është e rëndësishme të qëndroni të sigurt. Këtu janë disa këshilla kryesore të sigurisë:
>
> - **Kontrolloni parashikimin e motit** : Javën e kaluar, një grup alpinistësh hasën në një stuhi në gjysmë të rrugës së malit, sepse nuk e kontrolluan parashikimin e motit dhe duhej të evakuoheshin urgjentisht.
> - **Mbani pajisjet e nevojshme** : Sigurohuni që të keni me vete ushqime, ujë dhe mjete të mjaftueshme të ndihmës së parë.
> - **Kuptoni terrenin** : Njihuni me terrenin dhe rrugët e zonës së aventurës paraprakisht për të shmangur humbjen.
> - **Qëndroni të lidhur** : Qëndroni të lidhur me botën e jashtme dhe sigurohuni që të gjithë të kthehen të sigurt.
>
> Mos harroni, siguria është gjithmonë e para!

## Lista E Detyrave

- [x] Dizajnoni prototipin e produktit dhe listën e veçorive
- [ ] Përcaktoni grupin e teknologjisë dhe mjetet e zhvillimit
- [ ] Zhvilloni afatet kohore dhe pikat e zhvillimit të produktit

## Listë

### Lista E Porositur

1. vrapimi
   1. Tre herë në javë, 5 kilometra çdo herë
   1. Vraponi një gjysmë maratonë
1. stërvitje në palestër
   1. Dy herë në javë, 1 orë çdo herë
   1. Përqendrohuni në muskujt e bazës

### Lista E Parenditur

* ngjarje sociale
  - Merrni pjesë në takimet e shkëmbimit të industrisë
    + Sesioni i ndarjes së teknologjisë
    + Takimi i Shkëmbimit të Sipërmarrjes
  - Organizoni një mbledhje miqsh
    + BBQ në natyrë
    + nata e filmit

## Fletë

| mendimtar       | Kontributet kryesore                           |
|--------------|------------------------------------|
| Konfuci         | Themeluesi i Konfucianizmit |
| Sokrati     | babai i filozofisë perëndimore  |
| Niçe         | Filozofia e Supermenit, duke kritikuar moralin dhe fenë tradicionale       |
| marks       | komunizmit |

### Optimizimi I Ekranit Të Tabelës Së Madhe

Për tabela relativisht të mëdha, metodat e mëposhtme mund të përdoren për të optimizuar efektin e ekranit:

1. Përdorni font më të vogël

   Për shembull, mbështilleni tabelën me `<div style="font-size:14px">` dhe `</div>` .

   Vini re se etiketa `div` duhet të zërë rreshtin e vet dhe të lërë linja bosh para dhe pas saj.
1. Për tekst më të gjatë në një qelizë, futni `<br>` për të mbështjellë rreshtin
1. Nëse një kolonë është e shtrydhur shumë e shkurtër, mund të shtoni `<div style="width:100px">xxx</div>` në kokë për të zgjeruar gjerësinë, dhe gjithashtu mund të shtoni [`<wbr>` në kokë](//developer.mozilla.org/docs/Web/HTML/Element/wbr) për të kontrolluar pozicionin e ndërprerjes së linjës.

Një shembull demonstrimi është si më poshtë:

<div style="font-size:14px">

| kombi       | <div style="width:70px;margin:auto">emër mendimtari</div> | Epoka | Kontributet kryesore ideologjike                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kinë       | Konfuci                                           | 551-479 para Krishtit   | Themeluesi i konfucianizmit propozoi koncepte thelbësore si "dashamirësia" dhe "përshtatshmëria" dhe theksoi kultivimin moral dhe rendin shoqëror. |
| Greqia e lashtë     | Sokrati                                       | 469-399 para Krishtit   | Eksplorimi i së vërtetës përmes dialogut dhe dialektikës propozon "njoh veten" dhe thekson të menduarit racional         |
| Franca       | Volteri                                         | 1694-1778       | Figura përfaqësuese të Iluminizmit mbrojtën racionalitetin, lirinë dhe barazinë dhe kritikuan bestytnitë fetare dhe sundimin autoritar.   |
| Gjermania       | Kanti                                           | 1724-1804       | Parashtroni "Kritikën e arsyes së pastër"<br> Eksploron themelet e moralit, lirisë dhe dijes, duke theksuar arsyen praktike     |

</div>

Pseudokodi për shembullin e mësipërm është si më poshtë:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kodi

### Kodi Inline

Në botën e madhe të gjuhëve të programimit, `Rust` , `Python` , `JavaScript` dhe `Go` secila zë një pozicion unik.

### Linja Të Shumta Kodi

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Ndarja E Rreshtit Brenda Paragrafit

Ndërprerjet e rreshtave brenda paragrafëve mund të arrihen pa shtuar rreshta bosh midis rreshtave.
Hapësira ndërmjet ndërprerjeve të rreshtave brenda paragrafëve është më e vogël se hapësira ndërmjet paragrafëve.

për shembull:

> Jetoni si një person i madh,
> Vdekja është gjithashtu një hero fantazmë.
> Më mungon ende Xiang Yu,
> Nuk dëshiron të kalojë Jiangdong.
>
> Li Qingzhao përdori historinë tragjike të Xiang Yu për të lënë të kuptohet paaftësia e dinastisë Song.
> Duke shprehur pakënaqësi ndaj oborrit perandorak për dorëzimin pa luftë.