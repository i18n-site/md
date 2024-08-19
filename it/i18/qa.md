# Domande Frequenti

## Aggiunta o eliminazione di righe della traduzione, che porta a una confusione del testo tradotto

Ricorda, **le righe della traduzione devono corrispondere esattamente alle righe del testo originale**

Cioè, quando si aggiusta manualmente la traduzione, **non aggiungere o eliminare righe**, altrimenti si perderà la corrispondenza tra traduzione e testo originale

Se accidentalmente aggiungi o elimini una riga, causando una confusione, ripristina la traduzione al versione precedente, esegui di nuovo `i18` per ricreare la mappatura corretta

La mappatura tra traduzione e testo originale è legata ai token. Crea un nuovo token su [i18n.site/token](//i18n.site/token), elimina `.i18h/hash`, e traduci di nuovo per pulire la mappatura confusa (ma perderai tutte le modifiche manuali)

## `YAML`: Come evitare che i collegamenti `HTML` vengano convertiti in `Markdown`

I valori `YAML` vengono considerati come `Markdown` per la traduzione

A volte, la conversione da `HTML` a `Markdown` non è desiderata, ad esempio `<a href="/">Home</a>` viene trasformato in `[Home](/)`

Aggiungi qualsiasi attributo diverso da `href` al tag `a`, come `<a class="A" href="/">Home</a>`, per evitare questa conversione

## Conflict dei file in `./i18n/hash`

Elimina i file in conflitto e ripeti la traduzione con `i18`