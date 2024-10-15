# 1. Versione del Progetto

2. Esempio di progetto dimostrativo:

`en/demo2/v` è il numero di versione corrente del progetto, che apparirà sulla destra del nome del progetto nell'indice della barra laterale.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

4. Qui `en/` è il codice linguistico corrispondente alla lingua sorgente delle traduzioni configurate in `.i18n/conf.yml`.

5. Se la tua lingua sorgente non è l'inglese, il file `v` dovrebbe essere collocato nella directory del progetto relativa alla tua lingua sorgente.

6. La funzione di navigazione delle versioni storiche dei documenti è attualmente in fase di sviluppo.

7. Si consiglia di modificare il numero di versione del documento solo per rilasci di aggiornamenti significativi (come `v1`, `v2`) per evitare che un'eccessiva quantità di versioni porti a una dispersione delle pagine indicizzate nei motori di ricerca.

## 8. Utilizzare file `v` vuoti per separare gli indici dei file di progetti differenti

9. Nel progetto dimostrativo, oltre a `en/demo2/v`, è possibile osservare che ci sono file `v` vuoti nelle directory `en/blog` e `en/demo1`.

Uno `v` vuoto non verrà visualizzato nella struttura della barra laterale, ma finché è presente un file `v`, verrà generato un indice indipendente per i file nella directory e nelle sottodirectory.

11. Separando gli indici dei diversi progetti, si può evitare un ritardo nella navigazione causato dal caricamento simultaneo di tutti gli indici dei file del sito.

Ad esempio, il file indice corrispondente a `blog` nel progetto demo [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :