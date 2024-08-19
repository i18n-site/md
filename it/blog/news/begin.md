# i18n.site · Strumento di traduzione e creatore di siti MarkDown ora online!

Dopo più di sei mesi di sviluppo, [https://i18n.site](//i18n.site) è online.

Attualmente, sono stati implementati due strumenti da riga di comando open source:

* `i18` : strumento di traduzione MarkDown da riga di comando
* `i18n.site` : generatore di siti statici multilingue, **ottimizzato per l'esperienza di lettura**

La traduzione riesce a mantenere perfettamente il formato `Markdown`. Riesce a identificare le modifiche ai file e tradurre solo i file modificati.

Le traduzioni sono modificabili; se si modificano il testo originale e si esegue una nuova traduzione automatica, le modifiche manuali non verranno sovrascritte (se il paragrafo originale non è stato modificato).

[Clicca qui per autorizzare e seguire automaticamente i18n.site '# github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **ricevere $50 di bonus** .

## Origine

Nell'era di Internet, il mercato è globale e il multilinguismo e la localizzazione sono competenze fondamentali.

Gli strumenti di gestione delle traduzioni esistenti sono troppo complessi per i programmatori che utilizzano `git` per la gestione delle versioni, preferendo strumenti da riga di comando.

Pertanto, ho sviluppato lo strumento di traduzione `i18` e, basandomi su questo, ho creato il generatore di siti statici multilingue `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Questo è solo l'inizio, c'è ancora molto da fare.

Ad esempio, integrare i siti statici con i social media e i servizi di订阅邮件, permettendo di raggiungere gli utenti in tempo reale con gli aggiornamenti.

Ad esempio, implementare forum e sistemi di ticketing multilingue che possano essere integrati in qualsiasi pagina web, facilitando la comunicazione senza barriere.

## Fonte Aperta

Il codice per il frontend, il backend e la riga di comando è [tutto open source](https://i18n.site/i18n.site/c/src) (il modello di traduzione non è ancora open source).

Lo stack tecnologico utilizzato è il seguente:

Frontend [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

La riga di comando e il backend sono sviluppati in Rust.

Backend [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Riga di comando [motore JS embedded boa_engine](https://docs.rs/boa_engine), [database embedded fjall](https://github.com/fjall-rs/fjall).

Server VPS [contabo](https://my.contabo.com)

Database [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

Invio email tramite SMTP [chasquid](https://github.com/albertito/chasquid).

## Contattaci

Con il lancio di nuovi prodotti, è inevitabile che si verifichino problemi.

Siete benvenuti a contattarci tramite il forum Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)