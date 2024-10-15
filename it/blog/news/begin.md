---

brief: |
  Attualmente sono stati implementati due strumenti da riga di comando open source: i18 (strumento di traduzione da riga di comando Markdown) e i18n.site (generatore di siti di documenti statici multilingue)

---


# i18n.site · Strumento di traduzione e creazione di siti web Markdown ora disponibile online!

Dopo più di sei mesi di sviluppo, [https://i18n.site](//i18n.site)

Attualmente sono stati implementati due strumenti da riga di comando open source:

* `i18`: Strumento di traduzione da riga di comando per Markdown
* `i18n.site`: Generatore di siti statici multilingue, **ottimizzato per una migliore esperienza di lettura**

La traduzione può mantenere perfettamente il formato `Markdown` . Può identificare le modifiche ai file e tradurre solo i file con modifiche.

La traduzione è modificabile; se si modifica il testo originale, una nuova traduzione automatica non sovrascriverà le modifiche manuali (a meno che il paragrafo originale non sia stato modificato).

[Clicca qui per autorizzare e seguire i18n.site su GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **e ricevi $50**.

## Origine

Nell'era di Internet, il mercato è globale e il multilinguismo e la localizzazione sono competenze fondamentali.

Gli strumenti di gestione delle traduzioni esistenti sono troppo complessi per i programmatori che utilizzano `git` per la gestione delle versioni, i quali preferiscono strumenti da riga di comando.

Quindi, ho sviluppato lo strumento di traduzione `i18` e, basandomi su questo, ho creato il generatore di siti statici multilingue `i18n.site`.

![](https://p.3ti.site/1723777556.avif)

Questo è solo l'inizio, c'è ancora molto che voglio fare.

Ad esempio, integrare i siti statici con i social media e le newsletter per raggiungere gli utenti in modo tempestivo quando vengono rilasciati aggiornamenti.

Ad esempio, creare forum e sistemi di ticket multilingue che possano essere integrati in qualsiasi pagina web, permettendo agli utenti di comunicare senza barriere.

## Open Source

I [codici front-end, back-end e della riga di comando sono tutti open source](https://i18n.site/i18n.site/c/src) (il modello di traduzione non è ancora open source).

Lo stack tecnologico utilizzato è il seguente:

Frontend: [Svelte](https://svelte.dev), [Stylus](https://stylus-lang.com), [Pug](https://github.com/pugjs/pug), [Vite](https://github.com/vitejs/vite)

Il backend e la riga di comando sono sviluppati in Rust.

Back-end: [Axum](https://github.com/tokio-rs/axum), [Tower-http](https://github.com/tower-rs/tower-http/releases).

Riga di comando: [Motore JavaScript incorporato boa_engine](https://docs.rs/boa_engine), [Database incorporato fjall](https://github.com/fjall-rs/fjall).

Servizio VPS: [Contabo](https://my.contabo.com)

Basi di dati: [Kvrocks](https://kvrocks.apache.org), [MariaDB](https://mariadb.org).

Inviare email tramite SMTP personalizzato [Chasquid](https://github.com/albertito/chasquid).

## Contattaci

Con il lancio di nuovi prodotti, è inevitabile che si verifichino problemi.

Non esitate a contattarci tramite il forum di Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :