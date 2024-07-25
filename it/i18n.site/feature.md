# Caratteristica Del Prodotto

## Traduzione Integrata `I18`

Il programma ha una traduzione `i18` , vedere [➔ `i18`](/i18) per l'uso specifico.

## Abbina Automaticamente La Lingua Del Browser

La lingua predefinita del sito web corrisponderà automaticamente alla lingua del browser.

Dopo che l'utente ha cambiato manualmente la lingua, la scelta dell'utente verrà ricordata.

Codice correlato : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) .

## Adattamento Terminale Mobile

C'è anche un'esperienza di lettura perfetta sul cellulare.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Disponibilità elevata front-end

`i18n.site` Per impostazione predefinita, il contenuto del sito verrà pubblicato su `npmjs.com` , con l'aiuto di [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) e più contenuti `CDN` caricati su `npm` .

Su questa base, sono state aggiunte fonti mirror dalla Cina continentale per consentire agli utenti cinesi di avere un accesso stabile e ottenere **un'elevata disponibilità front-end** .

Il principio è: intercettare la richiesta con l'aiuto di [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , se la richiesta fallisce, riprovarla su un altro `CDN` e abilitare in modo adattivo la stazione di origine che risponde più velocemente come origine di caricamento predefinita.

Codice correlato : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) .

## Applicazione a Pagina Singola, Caricamento Estremamente Veloce

Il sito web adotta un'architettura applicativa a pagina singola, senza aggiornamento quando si cambia pagina e caricamento estremamente veloce.

## Ottimizzato Per L'esperienza Di Lettura

### Stile Ben Progettato

> La bellezza della semplicità è perfettamente interpretata nel web design di questo sito.
> Abbandona le decorazioni inutili e presenta il contenuto nella sua forma più pura.
> Come una bella poesia, anche se breve, tocca il cuore delle persone.

<p style="text-align:right">── I18N.SITE</p>

[➔ Fare clic qui per visualizzare un elenco di stili](/i18n.site/md/styl) .

### Carica Caratteri Online, Supporta Il Cinese

Per impostazione predefinita, [i caratteri rettangolari variabili a doppio asse Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) , [MiSans](https://hyperos.mi.com/font/zh/download/) e altri caratteri online sono abilitati sulla pagina Web per unificare l'esperienza di lettura degli utenti su piattaforme diverse.

Allo stesso tempo, per migliorare la velocità di caricamento, i caratteri vengono suddivisi in base alle statistiche sulla frequenza delle parole.

Codice correlato : [github.com/i18n-site/font](https://github.com/i18n-site/font) .

### Navigazione in Alto Automaticamente Nascosta

Scorri verso il basso e la navigazione in alto si nasconderà automaticamente.

Scorri verso l'alto e apparirà nuovamente la navigazione nascosta.

Scomparirà quando il mouse non si muove.

C'è un pulsante a schermo intero nell'angolo in alto a destra della barra di navigazione per creare un'esperienza coinvolgente di lettura dei documenti.

### Evidenziazione Sincronizzata Della Struttura Del Capitolo Corrente

Quando si scorre il contenuto a destra, il contorno a sinistra evidenzierà contemporaneamente il capitolo attualmente in lettura.

## Dettagli Interessanti

### Effetti Del Mouse

Passa il mouse sul pulsante sul lato destro della barra di navigazione in alto per vedere fantastici effetti speciali.

### `404` Il Piccolo Fantasma

`404` C'è un simpatico fantasmino fluttuante sulla pagina, i suoi occhi si muoveranno con il mouse, [➔ Clicca qui per vedere](/404) ,

## Codice Open Source

[Il codice è open source](/i18n.site/src) . Se sei interessato a partecipare allo sviluppo, presentati [alla mailing list](//groups.google.com/u/2/g/i18n-site) .

Ci sono molti piccoli requisiti che sono importanti ma non urgenti. Il team di sviluppo assegnerà attività pratiche in base alla tecnologia in cui sei bravo e migliorerà i documenti di sviluppo mentre assegna i requisiti.

