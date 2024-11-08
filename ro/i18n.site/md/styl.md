# Lista De Stiluri

[Faceți clic aici pentru a răsfoi fișierul sursă al acestei pagini](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) pentru a vedea cum să scrieți `MarkDown` în următoarele stiluri.

## Bloc Pliat

|+| Ce este MarkDown?

    MarkDown este un limbaj de marcare ușor care permite utilizatorilor să creeze documente formatate într-un format de text simplu, ușor de citit și scris.

    Folosit în mod obișnuit pentru a scrie documentație, articole de blog, cărți electronice, postări pe forum etc.

    Are următoarele avantaje:

    1. Usor de invatat
    1. Foarte lizibil
    1. Controlul versiunilor prietenos

       Deoarece `MarkDown` documente sunt în format text simplu, programatorii le pot încorpora cu ușurință în sistemele de control al versiunilor (cum ar fi `git` ).

       Acest lucru face ca urmărirea modificărilor și colaborarea să fie mult mai simplă, în special în dezvoltarea echipei.

|-| Ce este I18N?

    „I18N” este abrevierea de la „Internationalization”.

    Întrucât cuvântul „Internaționalizare” are 18 litere între „I” și „N”, „I18N” este folosit pentru a simplifica reprezentarea.

    În termeni profani, înseamnă sprijinirea mai multor limbi.


Folding block este o sintaxă extinsă de la `i18n.site` la `MarkDown` , scrisă după cum urmează :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

cu `|+| `或`|-| Linia care începe cu ` va genera un bloc de pliere, iar conținutul blocului de pliere este liniile ulterioare cu același nivel de indentare (paragrafele sunt separate prin linii goale).

Treci`|-| `标记的折叠块默认展开，`|+| `Blocurile restrânse etichetate sunt restrânse implicit.

## Subliniați & Barat &

Acesta este sublinierea __ __~~ barat~~ și text de prezentare **aldine** .

Este scris astfel:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Analizatorul `MarkDown` al instrumentului de creare a site-ului web `i18n.site` are sintaxa optimizată de subliniere, baraj și aldine. Poate avea efect fără spații înainte și după marcaj, facilitând scrierea documentelor în limbi precum China, Japonia și Coreea. nu folosiți spații ca separatori.

Citire : [De ce uneori sintaxa Markdown a lui Nuggets ( `**……**` ) nu are efect?](//juejin.cn/post/7064565848421171213)

## Citat

### Citat Unic

> Este natura mea ca talentele mele să fie de folos și mă voi întoarce după ce mi-au fost cheltuiți toți banii.
<p style="text-align:right">─ Li Bai</p>

### Citate Cu Mai Multe Rânduri

> Un alt avantaj unic al science fiction-ului este domeniul de aplicare extrem de larg.
> Un „Război și pace”, cu un milion de cuvinte, descrie doar istoria unei regiuni de câteva decenii;
> Iar romane științifico-fantastice precum „Răspunsul final” al lui Asimov descriu în mod viu miliardele de ani de istorie a întregului univers, inclusiv a ființelor umane, în doar câteva mii de cuvinte.
> O astfel de incluziune și îndrăzneală sunt imposibil de realizat în literatura tradițională.
<p style="text-align:right">── Liu Cixin</p>

### Sfat `> [!TIP]`

> [!TIP]
> Nu uitați să verificați valabilitatea pașaportului și a vizei. Documentele expirate nu pot intra sau ieși din țară.

Este scris astfel

```
> [!TIP]
> YOUR CONTENT
```

### Observatie `> [!NOTE]`

> [!NOTE]
> Dacă îmi trimiți un mesaj și răspund instantaneu, ce înseamnă asta?
> Asta arată că îmi place foarte mult să mă joc cu telefoanele mobile.


### Avertisment `> [!WARN]`

> [!WARN]
> Când mergi într-o aventură sălbatică, este important să fii în siguranță. Iată câteva sfaturi cheie de siguranță:
>
> - **Verificați prognoza meteo** : Săptămâna trecută, un grup de alpiniști s-a confruntat cu o furtună la jumătatea muntelui deoarece nu au verificat prognoza meteo și au fost nevoiți să evacueze urgent.
> - **Purtați echipamentul necesar** : asigurați-vă că aduceți suficientă mâncare, apă și materiale de prim ajutor.
> - **Înțelegeți terenul** : Familiarizați-vă cu terenul și traseele zonei de aventură în avans pentru a evita să vă pierdeți.
> - **Rămâneți conectat** : rămâneți conectat cu lumea exterioară și asigurați-vă că toată lumea se poate întoarce în siguranță.
>
> Amintiți-vă, siguranța este întotdeauna pe primul loc!

## Lista De Lucruri De Făcut

- [x] Proiectați prototipul de produs și lista de caracteristici
- [ ] Determinați stiva de tehnologie și instrumentele de dezvoltare
- [ ] Dezvoltați termenele și etapele de dezvoltare a produselor

## Listă

### Lista Ordonata

1. funcţionare
   1. De trei ori pe săptămână, câte 5 kilometri de fiecare dată
   1. Alergați un semimaraton
1. antrenament la sală
   1. De două ori pe săptămână, câte 1 oră de fiecare dată
   1. Concentrați-vă pe mușchii de bază

### Lista Neordonata

* evenimente sociale
  - Participați la întâlnirile de schimb din industrie
    + Sesiune de partajare a tehnologiei
    + Întâlnire de schimb de antreprenoriat
  - Organizați o adunare de prieteni
    + Grătar în aer liber
    + seara de film

## Foaie

| gânditor       | Principalele contribuții                           |
|--------------|------------------------------------|
| Confucius         | Fondatorul confucianismului |
| Socrate     | părintele filosofiei occidentale  |
| Nietzsche         | Filosofia Superman, criticând morala tradițională și religia       |
| marx       | comunism |

### Optimizarea Afișajului De Masă Mare

Pentru tabele relativ mari, se pot folosi următoarele metode pentru a optimiza efectul de afișare:

1. Utilizați font mai mic

   De exemplu, înfășurați tabelul cu `<div style="font-size:14px">` și `</div>` .

   Rețineți că eticheta `div` trebuie să ocupe propria linie și să lase linii goale înainte și după ea.
1. Pentru text mai lung într-o celulă, introduceți `<br>` pentru a încheia linia
1. Dacă o coloană este strânsă prea scurt, puteți adăuga `<div style="width:100px">xxx</div>` la antet pentru a extinde lățimea și, de asemenea, puteți adăuga [`<wbr>` la antet](//developer.mozilla.org/docs/Web/HTML/Element/wbr) pentru a controla poziția întreruperii de linie.

Un exemplu demonstrativ este următorul:

<div style="font-size:14px">

| naţiune       | <div style="width:70px;margin:auto">numele gânditorului</div> | Eră | Principalele contribuții ideologice                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucius                                           | 551-479 î.Hr   | Fondatorul confucianismului a propus concepte de bază precum „binevoința” și „proprietatea” și a subliniat cultivarea morală și ordinea socială. |
| grecia antica     | Socrate                                       | 469-399 î.Hr   | Explorarea adevărului prin dialog și dialectică propune „cunoaște-te pe tine însuți” și subliniază gândirea rațională         |
| Franţa       | Voltaire                                         | 1694-1778       | Figuri reprezentative ale Iluminismului au susținut raționalitatea, libertatea și egalitatea și au criticat superstiția religioasă și conducerea autoritarică.   |
| Germania       | Kant                                           | 1724-1804       | Propune „Critica rațiunii pure”<br> Explorează bazele moralității, libertății și cunoașterii, subliniind rațiunea practică     |

</div>

Pseudocodul pentru exemplul de mai sus este următorul:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Cod

### Cod Inline

În lumea vastă a limbajelor de programare, `Rust` , `Python` , `JavaScript` și `Go` ocupă fiecare o poziție unică.

### Mai Multe Linii De Cod

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Spărtură De Linie În Paragraf

Întrerupțiile de rând în paragrafe pot fi realizate fără a adăuga linii goale între rânduri.
Distanța dintre rupturile de rând în cadrul paragrafelor este mai mică decât distanța dintre paragrafe.

de exemplu:

> Trăiește ca o persoană grozavă,
> Moartea este, de asemenea, un erou fantomă.
> Încă mi-e dor de Xiang Yu,
> Reticent să traverseze Jiangdong.
>
> Li Qingzhao a folosit povestea tragică a lui Xiang Yu pentru a sugera incompetența dinastiei Song.
> Exprimând nemulțumirea față de curtea imperială pentru capitularea fără luptă.