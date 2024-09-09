# Caratteristiche del prodotto

## Traduzioni integrate `i18`

Il programma integra le traduzioni `i18`; per l'uso specifico, vedere [➔ Documentazione `i18`](/i18).

## Abbinamento automatico della lingua del browser

La lingua predefinita del sito web verrà automaticamente abbinata alla lingua del browser.

After che l'utente ha manualmente cambiato la lingua, la scelta dell'utente verrà memorizzata.

Codice correlato: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adattamento mobile

Una perfetta esperienza di lettura anche sui dispositivi mobili.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Alta disponibilità del front-end

`i18n.site` pubblicherà automaticamente il contenuto del sito su `npmjs.com`, utilizzando [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) e altri `CDN` per caricare i contenuti su `npm`.

Sulla base di questo, sono stati aggiunti mirror cinesi continentali per garantire un accesso stabile agli utenti cinesi, realizzando una **alta disponibilità del front-end**.

Il principio è: utilizzare il [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) per intercettare le richieste, riprovare le richieste fallite su altri `CDN` e abilitare automaticamente la sorgente più veloce come sorgente di caricamento predefinita.

Codice correlato: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Applicazione a pagina singola, caricamento rapido

Il sito web utilizza un'architettura a pagina singola, con caricamento rapido e senza refresh durante il cambio di pagina.

## Optimizzato per l'esperienza di lettura

### Stile ben progettato

> La bellezza della semplicità è perfettamente rappresentata nel design del sito web.
> Abbandona le decorazioni superflue, presentando il contenuto nella sua forma più pura.
> Come una breve poesia, tocca il cuore delle persone.

<p style="text-align:right">── Autore di I18N.SITE</p>

[➔ Clicca qui per visualizzare un elenco di stili](/i18n.site/md/styl).

### `RSS`

![](//p.3ti.site/1725541085.avif)

L'immagine soprastante mostra l'abbonamento multilingue `RSS` a `i18n.site` tramite [inoreader.com](//inoreader.com).

### Caricamento di font online, supporto per il cinese

Il sito web utilizza per impostazione predefinita i font [Alimama Double Axis Variable Rectangle](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) e altri font online per uniformare l'esperienza di lettura degli utenti su diverse piattaforme.

Contemporaneamente, per migliorare la velocità di caricamento, i font sono stati suddivisi in base alla frequenza delle parole.

Codice correlato: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Navigazione superiore nascosta automaticamente

Scorrendo verso il basso, la navigazione superiore si nasconde automaticamente.

Scorrendo verso l'alto, la navigazione nascosta riappare.

Quando il mouse è fermo, la navigazione si dissolve.

Nella parte superiore destra della barra di navigazione c'è un pulsante per la visualizzazione a schermo intero, creando un'esperienza di lettura documenti immersiva.

### Evidenziamento sincronizzato della struttura del capitolo corrente

Quando si scorre il contenuto sulla destra, la struttura a sinistra evidenzia automaticamente il capitolo corrente.

## Particolari accattivanti

### Effetti del mouse

Passando il mouse sopra i pulsanti nella parte superiore destra della navigazione, si possono vedere effetti speciali accattivanti.

### Il piccolo fantasma del `404`

Il pagina `404` ha un piccolo fantasma sospeso, i cui occhi seguono il mouse, [➔ Clicca qui per vedere](/404)

## Codice open source

Il codice è open source [➔](/i18n.site/src); se sei interessato a partecipare allo sviluppo, presentati nella [mailing list](//groups.google.com/u/2/g/i18n-site).

Ci sono molti piccoli requisiti importanti ma non urgenti. Il team di sviluppo assegnerà compiti pratici in base alle tue competenze tecniche e migliorerà la documentazione di sviluppo assegnando i requisiti.