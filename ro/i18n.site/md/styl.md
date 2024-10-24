# Lista De Stiluri

[Faceți clic aici pentru a răsfoi fișierul sursă al acestei pagini](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) pentru a vedea cum să scrieți `MarkDown` în următoarele stiluri.

## Subliniați & Barat &

Acesta este __ __~~ barat~~ și text de prezentare **aldine** .

Este scris astfel:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Analizatorul `MarkDown` al instrumentului de creare a site-ului `i18n.site` a optimizat sublinierea, bararea și sintaxa aldine. Poate avea efect fără spații înainte și după marcaj, facilitând scrierea documentelor în limbi precum China, Japonia și Coreea. care nu folosesc spații ca separatori.

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
> your content
```

### Observatie `> [!NOTE]`

> [!NOTE]
> Dacă îmi trimiți un mesaj și răspund instantaneu, ce înseamnă asta?
> Asta arată că îmi place foarte mult să mă joc cu telefoanele mobile.


### Avertisment `> [!WARN]`

> [!WARN]
> Când mergi într-o aventură sălbatică, este important să fii în siguranță.
> Săptămâna trecută, un grup de alpiniști s-a confruntat cu o furtună la jumătatea muntelui și a fost nevoit să evacueze deoarece nu au reușit să verifice prognoza meteo.
> Amintiți-vă, orice activitate în aer liber necesită o pregătire adecvată și atenție la vreme.

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