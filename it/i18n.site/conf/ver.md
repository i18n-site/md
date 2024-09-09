# Versione del progetto

Prendiamo come esempio il progetto dimostrativo:

`en/demo2/v` è il numero di versione corrente del progetto, che apparirà sulla destra del nome del progetto nell'indice della barra laterale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Qui `en/` è il codice della lingua corrispondente alla lingua sorgente delle traduzioni configurate in `.i18n/conf.yml`.

Se la tua lingua sorgente non è l'inglese, il file `v` dovrebbe essere collocato nella directory del progetto della tua lingua sorgente.

La funzione di navigazione delle versioni storiche dei documenti è attualmente in fase di sviluppo.

Si consiglia di modificare il numero di versione dei documenti solo per rilasci di aggiornamenti significativi (come `v1`, `v2`) per evitare che un'eccessiva quantità di numeri di versione porti a una confusione nelle pagine indicizzate dai motori di ricerca.

## Utilizza file `v` vuoti per separare gli indici dei file di diversi progetti

Nel progetto dimostrativo, oltre a `en/demo2/v`, è possibile osservare che ci sono file `v` vuoti nelle directory `en/blog` e `en/demo1`.

I file `v` vuoti non verranno visualizzati nella barra laterale della struttura, ma è sufficiente che un file `v` esista per generare un indice indipendente per i file nella directory e nelle sue sottodirectory.

Separando gli indici di diversi progetti, si può evitare che un caricamento unico di tutti gli indici dei file del sito porti a una lentezza nella navigazione.

Ad esempio, il file indice corrispondente a `blog` nel progetto dimostrativo è: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)