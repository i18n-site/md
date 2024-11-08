---

brief: |
  Attualmente sono stati implementati due strumenti da riga di comando open source: i18 (strumento di traduzione da riga di comando MarkDown) e i18n.site (generatore di siti di documenti statici multilingue)

---


# i18n.site · Lo Strumento Di Traduzione E Creazione Di Siti Web MarkDown È Ora Online!

Dopo più di sei mesi di sviluppo, [https://i18n.site](//i18n.site)

Attualmente sono implementati due strumenti da riga di comando open source:

* `i18` : MarkDown Strumento di traduzione della riga di comando
* `i18n.site` : Generatore di siti di documenti statici multilingue, **ottimizzato per l'esperienza di lettura**

La traduzione può mantenere perfettamente il formato `Markdown` . Può identificare le modifiche ai file e tradurre solo i file con modifiche.

La traduzione è modificabile; se si modifica il testo originale e lo si traduce nuovamente automaticamente, le modifiche manuali alla traduzione non verranno sovrascritte (se questo paragrafo del testo originale non è stato modificato).

[➤ Clicca qui per autorizzare e seguire i18n.site la libreria github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **ricevere $50 bonus** .

## Origine

Nell’era di Internet, il mondo intero è un mercato e il multilinguismo e la localizzazione sono competenze fondamentali.

Gli strumenti di gestione delle traduzioni esistenti sono troppo pesanti per i programmatori che si affidano alla gestione della versione `git` , preferiscono ancora la riga di comando.

Quindi, ho sviluppato uno strumento di traduzione `i18` e creato un generatore di siti statici multilingue `i18n.site` basato sullo strumento di traduzione.

![](https://p.3ti.site/1723777556.avif)

Questo è solo l’inizio, c’è ancora molto da fare.

Ad esempio, collegando il sito di documenti statici ai social media e agli abbonamenti e-mail, gli utenti possono essere raggiunti in tempo quando vengono rilasciati gli aggiornamenti.

Ad esempio, forum multilingue e sistemi di ordini di lavoro possono essere incorporati in qualsiasi pagina web, consentendo agli utenti di comunicare senza barriere.

## Fonte Aperta

I [codici front-end, back-end e della riga di comando sono tutti open source](https://i18n.site/i18n.site/c/src) (il modello di traduzione non è ancora open source).

Lo stack tecnologico utilizzato è il seguente:

Frontend [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

La riga di comando e il backend sono sviluppati sulla base di Rust.

estremità posteriore [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Riga di comando [incorporata js Motore boa_engine](https://docs.rs/boa_engine) , [database incorporato fjall](https://github.com/fjall-rs/fjall) .

servitore VPS [contabo](https://my.contabo.com)

banca dati [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

Invia [chasquid](https://github.com/albertito/chasquid) SMTP

## Contattaci

Quando vengono lanciati nuovi prodotti, i problemi sono inevitabili.

Non esitate a contattarci tramite il forum di Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :