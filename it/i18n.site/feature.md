# Caratteristiche del Prodotto

## Traduzioni integrate di `i18`

Il programma integra le traduzioni di `i18`; per l'uso specifico, vedere [➔ Documentazione di `i18`](/i18).

## Abbinamento automatico della lingua del browser

La lingua predefinita del sito web verrà automaticamente abbinata alla lingua del browser.

Après che l'utente ha cambiato manualmente la lingua, la scelta dell'utente verrà memorizzata.

Codice correlato: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adattamento per dispositivi mobili

Una perfetta esperienza di lettura anche sui dispositivi mobili.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta disponibilità del front-end

`i18n.site` pubblicherà automaticamente il contenuto del sito su `npmjs.com`, utilizzando [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) e altri `CDN` per caricare il contenuto su `npm`.

Su questa base, sono state aggiunte fonti mirror dalla Cina continentale, permettendo agli utenti cinesi di accedere in modo stabile e garantendo **un'elevata disponibilità a livello front-end**.

Il principio è: utilizzare il [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) per intercettare le richieste, riprovare le richieste fallite su altri `CDN` e abilitare in modo adattivo la sorgente più veloce come sorgente di caricamento predefinita.

Codice correlato: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Applicazione a pagina singola, caricamento rapido

Il sito web utilizza un'architettura a pagina singola, con caricamento rapido e senza refresh durante il cambio di pagina.

## Optimizzato per l'esperienza di lettura

### Stile ben progettato

> La bellezza della semplicità è perfettamente rappresentata nel design del sito web.
> Abbandona le decorazioni superflue, presentando il contenuto nella sua forma più pura.
> Come una bella poesia, anche se breve, tocca il cuore.

<p style="text-align:right">── Autore di I18N.SITE</p>

[➔ Clicca qui per visualizzare un elenco di stili](/i18n.site/md/styl).

### Abbonamento `RSS` in più lingue

![](//p.3ti.site/1725541085.avif)

L'immagine mostrata sopra raffigura l'uso di un feed `RSS` multilingue con l'abbonamento a `i18n.site` tramite [inoreader.com](//inoreader.com).

### Caricamento di font online, supporto per il cinese

Il sito web utilizza per impostazione predefinita [Alimama Double Axis Variable Rectangle Font](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) e altri font online per uniformare l'esperienza di lettura degli utenti su diverse piattaforme.

Contemporaneamente, per migliorare la velocità di caricamento, i font sono suddivisi in base alla frequenza delle parole.

Codice correlato: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Navigazione superiore nascosta automaticamente

Scorrendo verso il basso, la navigazione superiore si nasconde automaticamente.

Scorrendo verso l'alto, la navigazione nascosta riappare.

Quando il mouse è fermo, la navigazione si dissolve.

Nella parte superiore della barra di navigazione, c'è un pulsante per la visualizzazione a schermo intero, creando un'esperienza di lettura documenti immersiva.

### Evidenziamento sincronizzato della sezione corrente

Quando si scorre il contenuto sulla destra, la sinistra evidenzia automaticamente la sezione corrente di lettura.

## Particolari accattivanti

### Effetti del mouse

Quando il mouse è posizionato sui pulsanti nella parte superiore della navigazione, si possono vedere effetti speciali accattivanti.

### Il piccolo fantasma del `404`

Il pagina `404` ha un piccolo fantasma fluttuante, i cui occhi seguono il mouse, [➔ Clicca qui per vedere](/404)

## Il codice è open source

Il codice è open source [➔](/i18n.site/src); se sei interessato a partecipare allo sviluppo, presentati sulla [mailing list](//groups.google.com/u/2/g/i18n-site).

Alcuni piccoli requisiti importanti ma non urgenti sono disponibili. Il team di sviluppo assegnerà compiti pratici in base alle tue competenze tecniche e migliorerà la documentazione di sviluppo assegnando i requisiti.