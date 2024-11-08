# Domande Frequenti

## Aggiunta O Eliminazione Di Righe Della Traduzione, Con Conseguente Confusione Nella Traduzione

> [!WARN]
> Ricorda, **il numero di righe della traduzione deve corrispondere alle righe del testo originale** .
> Vale a dire, quando si modifica manualmente la traduzione, **non aggiungere o eliminare righe della traduzione** , altrimenti il rapporto di mappatura tra la traduzione e il testo originale risulterà disordinato.

Se aggiungi o elimini accidentalmente una riga, causando confusione, ripristina la traduzione alla versione prima della modifica, esegui nuovamente la traduzione `i18` e memorizza nuovamente nella cache la mappatura corretta.

La mappatura tra la traduzione e il testo originale è legata al token. Crea un nuovo token in [i18n.site/token](//i18n.site/token) elimina `.i18h/hash` e traduci di nuovo per eliminare la mappatura confusa (ma ciò causerà la perdita di tutte le modifiche manuali alla traduzione).

## `YAML` : Come Evitare Che Il Collegamento `HTML` Venga Convertito in `Markdown`

Un valore pari a `YAML` viene trattato come `MarkDown` per la traduzione.

A volte la conversione da `HTML` → `MarkDown` non è ciò che vogliamo, ad esempio `<a href="/">Home</a>` viene convertito in `[Home](/)` .

L'aggiunta di qualsiasi attributo diverso da `href` al tag `a` , come `<a class="A" href="/">Home</a>` , può evitare questa conversione.

## `./i18n/hash` Conflitti Di File Di Seguito

Elimina i file in conflitto ed esegui nuovamente la traduzione `i18` .