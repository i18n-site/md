# Stilu Saraksts

[Noklikšķiniet šeit, lai pārlūkotu šīs lapas avota failu,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) lai redzētu, kā rakstīt `MarkDown` šādos stilos.

## Salocīts Bloks

|+| Kas ir MarkDown?

    MarkDown ir viegla iezīmēšanas valoda, kas ļauj lietotājiem izveidot formatētus dokumentus vienkārša teksta formātā, ko ir viegli lasīt un rakstīt.

    Parasti izmanto, lai rakstītu dokumentāciju, emuāra rakstus, e-grāmatas, foruma ziņas utt.

    Tam ir šādas priekšrocības:

    1. Viegli iemācīties
    1. Ļoti lasāms
    1. Draudzīga versijas kontrolei

       Tā kā `MarkDown` dokumenti ir vienkārša teksta formātā, programmētāji tos var viegli iekļaut versiju kontroles sistēmās (piemēram, `git` ).

       Tas padara izmaiņu izsekošanu un sadarbību daudz vienkāršāku, īpaši komandas attīstībā.

|-| Kas ir I18N?

    "I18N" ir saīsinājums no "internacionalizācijas".

    Tā kā vārdam "internacionalizācija" ir 18 burti starp "I" un "N", attēlojuma vienkāršošanai tiek izmantots "I18N".

    Nespeciālista izteiksmē tas nozīmē vairāku valodu atbalstu.


Saliekamais bloks ir paplašināta sintakse no `i18n.site` līdz `MarkDown` , kas rakstīta šādi :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

ar `|+| `或`|-| Rinda, kas sākas ar `, ģenerēs locīšanas bloku, un salokāmā bloka saturs ir nākamās rindas ar tādu pašu atkāpes līmeni (rindkopas ir atdalītas ar tukšām rindām).

Iziet|-| `标记的折叠块默认展开，`|+| Atzīmētie sakļautie bloki pēc noklusējuma tiek sakļauti.

## & &

Tas ir pasvītrojums __ __~~ pārsvītrots~~ un **treknrakstā** prezentācijas tekstu.

Tas ir rakstīts šādi:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Vietņu veidošanas rīka `i18n.site` `MarkDown` ir optimizējis pasvītrojumu, pārsvītrojumu un treknrakstu. Tas var darboties bez atstarpēm pirms un pēc atzīmes, tādējādi atvieglojot dokumentu rakstīšanu tādās valodās kā Ķīna, Japāna un Koreja. neizmantojiet atstarpes kā atdalītājus.

Paplašināta : [Kāpēc Nuggets Markdown sintakse ( `**……**` ) dažkārt nedarbojas?](//juejin.cn/post/7064565848421171213)

## Citāts

### Vienas Rindas Citāts

> Man ir raksturīgi, ka mani talanti noderēs, un es atgriezīšos, kad visa mana nauda būs iztērēta.
<p style="text-align:right">─ Li Bai</p>

### Vairāku Rindiņu Citāti

> Vēl viena unikāla zinātniskās fantastikas priekšrocība ir tās ārkārtīgi plašais apjoms.
> "Karš un miers" ar miljoniem vārdu tikai apraksta reģiona vēsturi vairāku gadu desmitu garumā;
> Un tādi zinātniskās fantastikas romāni kā Asimova "Galīgā atbilde" tikai dažos tūkstošos vārdu spilgti apraksta visa Visuma, tostarp cilvēku, miljardu gadu vēsturi.
> Tradicionālajā literatūrā tādu iekļautību un drosmi nav iespējams sasniegt.
<p style="text-align:right">── Liu Čiksins</p>

### Padoms `> [!TIP]`

> [!TIP]
> Neaizmirstiet pārbaudīt pases derīgumu, un dokumenti, kuriem beidzies derīguma termiņš, nevar ieceļot vai izbraukt no tās.

Tas ir rakstīts šādi

```
> [!TIP]
> YOUR CONTENT
```

### Piezīme `> [!NOTE]`

> [!NOTE]
> Ja jūs nosūtāt man ziņojumu un es uzreiz atbildu, ko tas nozīmē?
> Tas parāda, ka man ļoti patīk spēlēties ar mobilajiem tālruņiem.


### Brīdinājums `> [!WARN]`

> [!WARN]
> Dodoties mežonīgā piedzīvojumā, ir svarīgi saglabāt drošību. Šeit ir daži galvenie drošības padomi:
>
> - **Pārbaudiet laika prognozi** : Pagājušajā nedēļā alpīnistu grupa pusceļā kalnā saskārās ar vētru, jo viņi nepārbaudīja laika prognozi un bija steidzami jāevakuējas.
> - **Nēsājiet līdzi nepieciešamo aprīkojumu** : pārliecinieties, ka esat paņēmis līdzi pietiekami daudz pārtikas, ūdens un pirmās palīdzības piederumu.
> - **Izprotiet reljefu** : iepriekš iepazīstieties ar piedzīvojumu zonas reljefu un maršrutiem, lai nepazustu.
> - **Saglabājiet sakarus** : uzturiet sakarus ar ārpasauli un nodrošiniet, lai ikviens varētu droši atgriezties.
>
> Atcerieties, ka drošība vienmēr ir pirmajā vietā!

## Darāmo Darbu Saraksts

- [x] Dizaina produkta prototips un funkciju saraksts
- [ ] Noteikt tehnoloģiju kaudzi un izstrādes rīkus
- [ ] Izstrādājiet produktu izstrādes termiņus un atskaites punktus

## Sarakstu

### Pasūtītais Saraksts

1. skrienot
   1. Trīs reizes nedēļā, katru reizi 5 kilometri
   1. Noskrien pusmaratonu
1. trenažieru zāles treniņš
   1. Divas reizes nedēļā, katru reizi 1 stunda
   1. Koncentrējieties uz galvenajiem muskuļiem

### Nesakārtots Saraksts

* saviesīgi pasākumi
  - Piedalīties nozares apmaiņas sanāksmēs
    + Tehnoloģiju apmaiņas sesija
    + Uzņēmējdarbības apmaiņas sanāksme
  - Organizējiet draugu salidojumu
    + Āra BBQ
    + filmu vakars

## Lapa

| domātājs       | Galvenie ieguldījumi                           |
|--------------|------------------------------------|
| Konfūcijs         | Konfūcisma dibinātājs |
| Sokrāts     | Rietumu filozofijas tēvs  |
| Nīče         | Supermena filozofija, kritizējot tradicionālo morāli un reliģiju       |
| marx       | komunisms |

### Liela Galda Displeja Optimizācija

Salīdzinoši lielām tabulām displeja efekta optimizēšanai var izmantot šādas metodes:

1. Izmantojiet mazāku fontu

   Piemēram, aplauziet tabulu ar `<div style="font-size:14px">` un `</div>` .

   Ņemiet vērā, ka atzīmei `div` ir jāaizņem sava rindiņa un pirms un pēc tā jāatstāj tukšas rindiņas.
1. Garākam tekstam šūnā ievietojiet `<br>` , lai aplauztu rindu
1. Ja kolonna ir saspiesta pārāk īsa, varat pievienot `<div style="width:100px">xxx</div>` galvenei, lai paplašinātu platumu, un varat arī pievienot [galvenei `<wbr>` ,](//developer.mozilla.org/docs/Web/HTML/Element/wbr) lai kontrolētu rindiņas pārtraukuma pozīciju.

Demonstrācijas piemērs ir šāds:

<div style="font-size:14px">

| tauta       | <div style="width:70px;margin:auto">domātāja vārds</div> | Laikmets | Galvenie ideoloģiskie ieguldījumi                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Ķīna       | Konfūcijs                                           | 551-479 pirms mūsu ēras   | Konfūcisma dibinātājs ierosināja tādus pamatjēdzienus kā "labvēlība" un "pieklājība" un uzsvēra morālo pilnveidošanos un sociālo kārtību. |
| senā Grieķija     | Sokrāts                                       | 469-399 pirms mūsu ēras   | Patiesības izpēte caur dialogu un dialektiku ierosina "pazīsti sevi" un uzsver racionālu domāšanu         |
| Francija       | Voltērs                                         | 1694-1778       | Apgaismības laikmeta pārstāvji iestājās par racionalitāti, brīvību un vienlīdzību, kā arī kritizēja reliģisko māņticību un autoritāro varu.   |
| Vācija       | Kants                                           | 1724-1804       | Izvirziet "tīra prāta kritiku"<br> Izpēta morāles, brīvības un zināšanu pamatus, akcentējot praktisko saprātu     |

</div>

Iepriekš minētā piemēra pseidokods ir šāds:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Kodu

### Iekļauts Kods

Plašajā programmēšanas valodu pasaulē `Rust` , `Python` , `JavaScript` un `Go` katra ieņem unikālu vietu.

### Vairākas Koda Rindiņas

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Rindas Pārtraukums Rindkopas Ietvaros

Rindiņu pārtraukumus rindkopās var panākt, nepievienojot tukšas rindiņas starp rindām.
Atstarpe starp rindu pārtraukumiem rindkopās ir mazāka nekā atstarpe starp rindkopām.

piemēram:

> Dzīvo kā lielisks cilvēks,
> Nāve ir arī spoku varonis.
> Man joprojām pietrūkst Xiang Yu,
> Nelabprāt šķērsoja Dzjandugu.
>
> Li Qingzhao izmantoja Sjan Ju traģisko stāstu, lai dotu mājienu uz Song dinastijas nekompetenci.
> Izsakot neapmierinātību ar imperatora galmu par padošanos bez cīņas.