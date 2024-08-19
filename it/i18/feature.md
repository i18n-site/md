# Caratteristiche del Prodotto

`i18` è uno strumento di traduzione da riga di comando per Markdown & Yaml.

## Può mantenere perfettamente il formato di Markdown

Supporta la traduzione delle tabelle Markdown, senza alterare il formato; non traduce le parole nelle formule matematiche e nei collegamenti.

Supporta la traduzione di HTML Markdown misti, il contenuto dei tag `<pre>` e `<code>` incorporati in `Markdown` non viene tradotto

## Può riconoscere le formule matematiche e saltare la traduzione

Le formule matematiche vengono identificate e la traduzione viene saltata.

Per sapere come scrivere le formule matematiche, fare riferimento a [Github: Scrivere Espressioni Matematiche](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Permette di tradurre i commenti nei frammenti di codice

Il codice in linea e i frammenti di codice non vengono tradotti, ma i commenti nel codice possono essere tradotti.

La traduzione dei commenti richiede l'indicazione della lingua dopo ` ``` `, ad esempio: ` ```rust `.

Attualmente supporta la traduzione dei commenti in `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [e altre lingue](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Se il linguaggio di programmazione di cui hai bisogno non è supportato, [contattaci](https://groups.google.com/g/i18n-site).

## Interfaccia amichevole da riga di comando

Molti [strumenti potenti](https://www.capterra.com/translation-management-software) possono gestire documenti di traduzione.

Per i programmatori esperti in `git`, `vim`, `vscode`, l'uso di questi strumenti per modificare documenti e gestire le versioni potrebbe aumentare il costo di apprendimento.

I sostenitori del principio `KISS` (`Keep It Simple, Stupid`) considerano le soluzioni aziendali come ingombranti, inefficienti e difficili da usare.

La traduzione dovrebbe essere semplice: inserire un comando e fare clic, senza complesse dipendenze ambientali.

Non aggiungere entità se non strettamente necessario.

## nessuna modifica, nessuna traduzione

Altri strumenti di traduzione da riga di comando come [translate-shell](https://github.com/soimort/translate-shell) sono disponibili.

Ma non riconoscono le modifiche ai file e traducono solo i file modificati per ridurre i costi e aumentare l'efficienza.

## La traduzione può essere modificata e la traduzione automatica non sovrascriverà le modifiche esistenti

Il testo tradotto è modificabile.

Se modifichi il testo originale e lo traduci automaticamente, le modifiche manuali non verranno sovrascritte (se il paragrafo originale non è stato modificato).

## La miglior qualità di traduzione automatica

Abbiamo sviluppato una nuova tecnologia di traduzione che integra i vantaggi dei modelli di traduzione automatica tradizionali e dei grandi modelli linguistici, rendendo le traduzioni accurate, fluide ed eleganti.

Le prove cieche dimostrano che la nostra qualità di traduzione è significativamente migliore rispetto a quella dei servizi concorrenti.

Per ottenere la stessa qualità, Google Translate e `ChatGPT` richiedono rispettivamente `2.67` e `3.15` volte più modifiche manuali rispetto a noi.

## <a rel=id href="#price" id="price"></a> Prezzi estremamente competitivi

|                                                                                   | USD/milione di parole |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Clicca qui per autorizzare e seguire automaticamente i18n.site '# github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **ricevere $50 di bonus** .

Nota: il numero di caratteri fatturabili = [numero di caratteri Unicode](https://en.wikipedia.org/wiki/Unicode) nel file sorgente × numero di lingue nella traduzione

## Supporta La Traduzione `YAML`

Lo strumento traduce solo i valori del dizionario in `YAML` , non le chiavi del dizionario.

Basandosi su `YAML` traduzioni, puoi facilmente creare soluzioni internazionali per vari linguaggi di programmazione.

## Supporta La Configurazione Dell'intestazione Di Traduzione `HOGO`

Supporta la traduzione della configurazione dell'intestazione del blog statico di tipo [HUGO](https://github.com/gohugoio/hugo), traducendo solo i campi `title`, `summary` e `description`.

## Non tradurre i nomi delle variabili

`Markdown` viene utilizzato come modello di email, `YAML` viene utilizzato come configurazione del file di lingua e ci saranno parametri variabili (ad esempio: è stata ricevuta la ricarica `${amount}` ).

I nomi delle variabili come `${varname}` non vengono tradotti come inglesi.

## Optimizzazione della traduzione per Cina, Giappone e Corea

### Quando tradotto in inglese, il titolo viene automaticamente messo in maiuscolo

Cina, Giappone e Corea non distinguono tra maiuscole e minuscole, ma l'uso del titolo in inglese segue la convenzione di maiuscolare la prima lettera.

`i18` riconosce i titoli in `Markdown` e automaticamente mette in maiuscolo la prima lettera durante la traduzione in lingue che distinguono tra maiuscole e minuscole.

Ad esempio, `为阅读体验而优化` viene tradotto in `Optimized for Reading Experience`.

### Non tradurre i termini inglesi in Cina, Giappone e Corea

I documenti in Cina, Giappone e Corea spesso contengono molti termini inglesi.

La traduzione automatica in lingue diverse dall'inglese spesso traduce anche i termini, come nella seguente frase cinese:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Se si utilizzano Google o DeepL, entrambi traducono erroneamente i termini inglesi che dovrebbero rimanere invariati (ad esempio in giapponese e francese).

### Google Traduttore

Tradotto in giapponese: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Tradotto in francese: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` tradotto come `faucon`, `Llama` tradotto come `lama`. Come nomi propri, non dovrebbero essere tradotti.

![](//p.3ti.site/1720199451.avif)

### Traduzione DeepL

Tradotto in giapponese: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL ha tradotto il testo in francese (modificando anche i nomi propri e aggiungendo strani `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traduzione i18n.site

`i18` riconosce i termini inglesi nei documenti cinesi, giapponesi e coreani e li lascia invariati.

Ad esempio, il risultato della traduzione in giapponese è:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Il risultato della traduzione in francese è:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Solo quando c'è uno spazio tra la parola inglese e il testo cinese, giapponese o coreano, o la lunghezza inglese è maggiore di 1, la parola viene considerata un termine.

Ad esempio: `C罗` viene tradotto come `Cristiano Ronaldo`.

## Combinabile con `i18n.site` per creare siti Web multilingue

`i18` è integrato nello strumento a riga di comando per la creazione di siti Web multilingue [`i18n.site`](/i18n.site).

Consulta la documentazione di [`i18n.site`](/i18n.site) per ulteriori dettagli.

## Codice open source

Il client è completamente open source e il server è open source al 90%. [Clicca qui per visualizzare il codice sorgente](/i18n.site/src).

Cerchiamo volontari per partecipare allo sviluppo del codice open source e alla correzione delle bozze dei testi tradotti.

Se sei interessato, [→ Clicca qui per compilare il tuo profilo](https://ggl.link/i18n) e poi iscriviti [alla mailing list](https://groups.google.com/u/2/g/i18n-site) per la comunicazione.

## Rimani in contatto

Fai clic su <button onclick="mailsub()">questo pulsante email</button> per iscriverti agli aggiornamenti del prodotto e su <button onclick="webpush()">questo pulsante</button> per abilitare le notifiche push del browser. Ti informeremo quando verranno effettuati gli aggiornamenti del prodotto.

segui i nostri account social [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).