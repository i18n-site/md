# Versione del progetto

Prendiamo come esempio il progetto dimostrativo:

`en/demo2/v` è il numero di versione corrente del progetto, che verrà visualizzato a destra del nome del progetto nell'indice laterale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Qui `en/` è il codice linguistico corrispondente alla lingua sorgente configurata in `.i18n/conf.yml`.

Se la tua lingua sorgente non è l'inglese, il file `v` dovrebbe essere collocato nella directory del progetto della tua lingua sorgente.

La funzione per navigare le versioni storiche dei documenti è attualmente in fase di sviluppo.

Si consiglia di modificare il numero di versione del documento solo per rilasci di aggiornamenti significativi (come `v1`, `v2`) per evitare che un'eccessiva quantità di versioni porti a una frammentazione nelle pagine indicizzate dai motori di ricerca.

## Utilizza file `v` vuoti per separare gli indici dei file di progetti differenti

Nel progetto dimostrativo, oltre a `en/demo2/v`, è possibile osservare che ci sono file `v` vuoti nelle directory `en/blog` e `en/demo1`.

I file `v` vuoti non verranno visualizzati nell'indice laterale, ma è sufficiente che esista un file `v` per generare un indice indipendente per i file nella directory e nelle sue sottodirectory.

Separando gli indici di progetti differenti, si può evitare che il caricamento dell'indice di tutti i file del sito porti a una lentezza nella navigazione.

Ad esempio, il file indice corrispondente a `blog` nel progetto dimostrativo è: [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json)