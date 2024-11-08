# Faq

## Agghiuncennu O Sguassate Linee Di a Traduzzione, Risultatu in Cunfusione in a Traduzzione

> [!WARN]
> Ricurdativi, **u numeru di linii in a traduzzione deve currisponde à e linee in u testu originale** .
> Vale à dì, quandu aghjustate manualmente a traduzzione, **ùn aghjunghje micca o sguassate linee di a traduzzione** , altrimenti a relazione di mappatura trà a traduzzione è u testu originale serà disordinata.

Se accidentalmente aghjunghje o sguassate una linea, causandu cunfusione, per piacè restituite a traduzzione à a versione prima di mudificà, eseguite `i18` traduzzione di novu, è cache di novu a mappatura curretta.

A mappatura trà a traduzzione è u testu uriginale hè ligata à u token Crea un novu token in [i18n.site/token](//i18n.site/token) sguassate `.i18h/hash` , è traduce dinò per sguassate a mappatura cunfusa (ma questu farà persu tutti l'aghjustamenti manuali di a traduzzione).

## `YAML` : Cumu Evità Chì U Ligame `HTML` Sia Cunvertitu in `Markdown`

Un valore di `YAML` hè trattatu cum'è `MarkDown` per a traduzzione.

Calchì volta a cunversione da `HTML` → `MarkDown` ùn hè micca ciò chì vulemu, cum'è `<a href="/">Home</a>` esse cunvertiti à `[Home](/)` .

Adding any attribute other than `href` to the `a` tag, such as `<a class="A" href="/">Home</a>` , pò evità sta cunversione.

## `./i18n/hash` Cunflitti Di Schedari Sottu

Sguassate i fugliali cunflitti è ripigliate a traduzzione `i18` .