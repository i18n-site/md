# Lista Di Stili

[Cliccate quì per cercà u schedariu fonte di sta pagina](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) per vede cumu scrive `MarkDown` in i seguenti stili.

## Bloccu Plegatu

|+| Cosa hè MarkDown?

    MarkDown hè una lingua di marcatura ligera chì permette à l'utilizatori di creà documenti furmatu in un furmatu di testu chjaru chì hè faciule da leghje è scrive.

    Comu cumunimenti usatu per scrive documentazioni, articuli di blog, e-libri, posti di foru, etc.

    Hà i seguenti vantaghji:

    1. Facile à amparà
    1. Altamente leggibile
    1. Amichevule di cuntrollu di versione

       Siccomu i documenti `MarkDown` sò in formatu di testu chjaru, i programatori ponu facilmente incorpore in sistemi di cuntrollu di versione (cum'è `git` ).

       Questu rende u seguimentu di i cambiamenti è a cullaburazione assai più simplice, in particulare in u sviluppu di a squadra.

|-| Cosa hè I18N?

    "I18N" hè l'abbreviazione di "Internazionalizazione".

    Siccomu a parolla "Internazionalizazione" hà 18 lettere trà "I" è "N", "I18N" hè aduprata per simplificà a rapprisintazioni.

    In termini laici, significa sustene parechje lingue.


Folding block hè una sintassi allargata da `i18n.site` à `MarkDown` , scritta cum'è seguita :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

cun `|+| `或`|-| A linea chì principia cù ` generarà un bloccu plegable, è u cuntenutu di u bloccu plegable hè e linee successive cù u listessu livellu di indentazione (i paragrafi sò siparati da linee in biancu).

Pass'|-| `标记的折叠块默认展开，`|+| `I blocchi colapsati taggati sò colapsati per difettu.

## & &

__ hè u underscore __ ,~~ battutu~~ è testu di presentazione **in grassu** .

Hè scrittu cusì:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

L'analizzatore `MarkDown` di l'uttellu di creazione di u situ web `i18n.site` hà ottimizatu a sintassi di sottolineatura, strisciata è grassa pò esse effettue senza spazii prima è dopu à a marca, facendu più faciule per scrive documenti in lingue cum'è Cina, Giappone è Corea. Ùn aduprate micca spazii cum'è separatori.

Lettura : [Perchè a sintassi Markdown di Nuggets ( `**……**` ) a volte ùn hè micca efficace?](//juejin.cn/post/7064565848421171213)

## Citazione

### Citazione Una Sola Linea

> Hè a mo natura chì i mo talenti seranu utili, è torneraghju dopu chì tutti i mo soldi sò stati spesi.
<p style="text-align:right">─ Li Bai</p>

### Citazioni Di Più Linee

> Un altru vantaghju unicu di a fantascienza hè u so scopu estremamente largu.
> Una "Guerra è Pace", cù un milione di parolle, discrive solu a storia di una regione dapoi parechji decennii ;
> E rumanzi di scenza cum'è "A Risposta Finale" d'Asimov descrizanu vividly i miliardi d'anni di storia di l'universu sanu, cumpresi l'omu, in pochi milla parolle.
> Tali inclusività è audacia sò impussibili di ottene in a literatura tradiziunale.
<p style="text-align:right">── Liu Cixin</p>

### Cunsigliu `> [!TIP]`

> [!TIP]
> Ricurdatevi di verificà a validità di u vostru passaportu è a visa.

Hè scrittu cusì

```
> [!TIP]
> YOUR CONTENT
```

### Nota `> [!NOTE]`

> [!NOTE]
> Se mi mandate un missaghju è rispondu istantaneamente, chì significa?
> Questu mostra chì mi piace veramente ghjucà cù i telefoni cellulari.


### Avvertimentu `> [!WARN]`

> [!WARN]
> Quandu andà in una avventura salvatica, hè impurtante per stà sicuru. Eccu alcuni cunsiglii chjave di sicurezza:
>
> - **Verificate e previsioni di u clima** : A settimana passata, un gruppu di alpinisti hà scontru una tempesta à mità di a muntagna perchè ùn anu micca cuntrollatu e previsioni di u tempu è anu da evacuà urgente.
> - **Purtate l'attrezzatura necessaria** : Assicuratevi di portà abbastanza cibo, acqua è materiale di primu aiuti.
> - **Capisce u terrenu** : Familiarizàvi cù u terrenu è e rotte di l'area di l'avventura in anticipu per evità di perde.
> - **Stà cunnessu** : Mantene cunnessu cù u mondu esternu è assicuratevi chì tutti ponu vultà in modu sicuru.
>
> Ricurdativi, a sicurità hè sempre prima!

## Lista Da Fà

- [x] Disegnu prototipu di produttu è lista di funziunalità
- [ ] Determinate a pila di tecnulugia è e strumenti di sviluppu
- [ ] Sviluppà tempi è tappe di sviluppu di produttu

## Lista

### Lista Urdinata

1. corsa
   1. Trè volte à settimana, 5 chilometri ogni volta
   1. Corri una meza maratona
1. furmazione di palestra
   1. Duie volte à settimana, 1 ora ogni volta
   1. Focus nantu à i musculi core

### Lista Senza Ordine

* avvenimenti suciali
  - Participà à riunioni di scambiu di l'industria
    + Sessione di spartera di tecnulugia
    + Reunione di scambiu di l'imprenditorialità
  - Organizà una riunione d'amichi
    + BBQ à l'esterno
    + notte di cinema

## Foglia

| pensatore       | Cuntribuzioni principali                           |
|--------------|------------------------------------|
| Cunfuciu         | Fundatore di u Confucianismu |
| Socrate     | babbu di a filusufìa uccidintali  |
| Nietzsche         | Filosofia di Superman, critica a moralità tradiziunale è a religione       |
| marx       | cumunisimu |

### Grande Ottimisazione Di a Visualizazione Di a Tavola

Per tavule relativamente grande, i seguenti metudi ponu esse utilizati per ottimisà l'effettu di visualizazione:

1. Aduprate fonti più chjucu

   Per esempiu, imbulighjate a tavula cù `<div style="font-size:14px">` è `</div>` .

   Nota chì l'etichetta `div` deve occupà a so propria linea, è lasciate linee in biancu prima è dopu.
1. Per un testu più longu in una cellula, inserite `<br>` per imbulighjà a linea
1. Se una colonna hè spremita troppu corta, pudete aghjunghje `<div style="width:100px">xxx</div>` à l'intestazione per allargà a larghezza, è pudete ancu aghjunghje [`<wbr>` à l'intestazione](//developer.mozilla.org/docs/Web/HTML/Element/wbr) per cuntrullà a pusizione di ruttura di linea.

Un esempiu di dimostrazione hè u seguente:

<div style="font-size:14px">

| nazione       | <div style="width:70px;margin:auto">nome di pensatore</div> | Era | Principali cuntributi ideologichi                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Cina       | Cunfuciu                                           | 551-479 aC   | U fundatore di u Confucianismu hà prupostu cuncetti core cum'è "benevolenza" è "proprietà" è hà enfatizatu a cultura morale è l'ordine suciale. |
| a Grecia antica     | Socrate                                       | 469-399 aC   | L'esplorazione di a verità à traversu u dialogu è a dialettica prupone "cunnosci sè stessu" è enfatizeghja u pensamentu raziunale         |
| Francia       | Voltaire                                         | 1694-1778       | Figuri rapprisentanti di l'Illuminismu favurivanu a razionalità, a libertà è l'ugualità, è criticavanu a superstizione religiosa è u regnu autoritariu.   |
| Alemagna       | Kant                                           | 1724-1804       | Presentate a "Critica di a Ragione Pura"<br> Esplora i fundamenti di a moralità, a libertà è a cunniscenza, enfatizendu a ragione pratica     |

</div>

U pseudocode per l'esempiu sopra hè u seguitu:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Codice

### Codice in Linea

In u vastu mondu di i linguaggi di prugrammazione, `Rust` , `Python` , `JavaScript` è `Go` ognunu occupanu una pusizioni unica.

### Parechje Linee Di Codice

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Interruzzione Di Linea in U Paràgrafu

L'interruzioni di linea in i paragrafi ponu esse ottenute senza aghjunghje linee vuote trà e linee.
A spaziatura trà i paragrafi in i paragrafi hè più chjuca di a spaziatura trà i paragrafi.

per esempiu:

> Vive cum'è una grande persona,
> A morte hè ancu un eroe fantasma.
> Mi manca sempre Xiang Yu,
> Riluttante à attraversà Jiangdong.
>
> Li Qingzhao hà utilizatu a storia tragica di Xiang Yu per insinuà l'incompetenza di a dinastia Song.
> Espristendu insatisfazione cù a corte imperiale per a rendizione senza lotta.