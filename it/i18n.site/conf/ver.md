# Versione Del Progetto

Prendiamo come esempio il progetto demo:

`en/demo2/v` è il numero di versione corrente del progetto, che verrà visualizzato a destra del nome del progetto nella struttura della barra laterale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ecco `en/` è il codice della lingua corrispondente alla `.i18n/conf.yml` lingua di origine della traduzione configurata.

Se la tua lingua di partenza non è l'inglese, il file `v` dovrebbe essere inserito nella directory del progetto della tua lingua di partenza. 

La possibilità di sfogliare le versioni storiche dei documenti è in fase di sviluppo.

Si consiglia di modificare il numero di versione del documento solo quando si rilasciano aggiornamenti importanti (come `v1` , `v2` ) per evitare di ingombrare le pagine indicizzate dai motori di ricerca a causa di troppi numeri di versione.

## Utilizza File `v` Vuoti Per Dividere Gli Indici Dei File Per Diversi Progetti

Nel progetto demo, oltre a `en/demo2/v` , puoi anche vedere che il contenuto delle directory `en/blog` e `en/demo1` è vuoto `v` files.

Vuoto `v` non verrà visualizzato nella struttura della barra laterale, ma finché esiste il file `v` , verrà generato un indice indipendente per i file nella directory e nelle sottodirectory.

Suddividendo gli indici di diversi progetti, puoi evitare un accesso lento causato dal caricamento simultaneo dell'indice di tutti i file nell'intero sito.

Ad esempio : nel progetto [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog`

