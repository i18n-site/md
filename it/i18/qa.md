# Domande Frequenti

## Inserimento o eliminazione di righe nella traduzione, causando disordine nel testo tradotto

> [!WARN]
> Ricorda, **le righe della traduzione devono corrispondere esattamente alle righe del testo originale**.
> Cioè, quando si aggiustano manualmente le traduzioni, **non aggiungere o rimuovere righe** della traduzione, altrimenti si perderà la corrispondenza tra traduzione e testo originale.

Se accidentalmente si aggiunge o rimuove una riga, causando disordine, ripristina la traduzione al versione precedente alla modifica ed esegui nuovamente il comando `i18` per ricaricare la mappatura corretta.

La mappatura tra traduzione e testo originale è legata ai token. Crea un nuovo token su [i18n.site/token](//i18n.site/token), elimina `.i18h/hash` e traduci di nuovo per pulire la mappatura disordinata (ma questo comporterà la perdita di tutte le modifiche manuali apportate).

## `YAML`: Come evitare che i collegamenti `HTML` vengano convertiti in `Markdown`

I valori `YAML` vengono considerati come `Markdown` per la traduzione.

A volte, la conversione da `HTML` a `Markdown` non è desiderata, ad esempio `<a href="/">Home</a>` viene trasformato in `[Home](/)`.

Aggiungi qualsiasi attributo diverso da `href` al tag `a`, come `<a class="A" href="/">Home</a>`, per evitare questa conversione.

## `./i18n/hash` - Conflitti tra file

Elimina i file in conflitto e ripeti il comando `i18` per tradurre nuovamente.