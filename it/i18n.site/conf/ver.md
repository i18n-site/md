# Versione Del Progetto

Prendiamo come esempio il progetto demo:

`en/demo2/v` è il numero di versione corrente del progetto, che verrà visualizzato a destra del nome del progetto nella struttura della barra laterale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Qui `en/` è il codice della lingua corrispondente alla lingua di origine della traduzione configurata da `.i18n/conf.yml` .

Se la tua lingua di partenza non è l'inglese, il file `v` dovrebbe essere inserito nella directory del progetto della tua lingua di partenza.

La possibilità di sfogliare le versioni storiche dei documenti è in fase di sviluppo.

Si consiglia di modificare il numero di versione del documento solo quando vengono rilasciati aggiornamenti importanti (come `v1` , `v2` ) per evitare che troppi numeri di versione causino confusione nelle pagine indicizzate dai motori di ricerca.

## Utilizza File `v` Vuoti Per Dividere Gli Indici Dei File Di Diversi Progetti

Nel progetto demo, oltre a `en/demo2/v` , puoi anche vedere che ci sono `v` file vuoti nelle directory `en/blog` e `en/demo1` .

Uno `v` vuoto non verrà visualizzato nella struttura della barra laterale, ma finché è presente un file `v` , verrà generato un indice indipendente per i file nella directory e nelle sottodirectory.

Suddividendo gli indici di diversi progetti, puoi evitare un accesso lento causato dal caricamento simultaneo dell'indice di tutti i file nell'intero sito.

Ad esempio, il file indice corrispondente a `blog` nel progetto demo [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :