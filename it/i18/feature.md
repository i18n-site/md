# Caratteristiche del Prodotto

`i18` è uno strumento di traduzione da riga di comando per Markdown & Yaml.

## Può mantenere perfettamente il formato di Markdown

Supporta la traduzione delle tabelle Markdown senza alterare il formato; non traduce le formule matematiche né le parole nei collegamenti.

Supporta la traduzione di mixed HTML Markdown , il contenuto dei tag `<pre>` e `<code>` incorporati in HTML `MarkDown` non è tradotto

## Può riconoscere le formule matematiche e saltare la traduzione

Lascerà le formule matematiche riconosciute e non le tradurrà.

Per la scrittura delle formule matematiche, fare riferimento a [Github su come scrivere espressioni matematiche](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Permette di tradurre i commenti nei frammenti di codice

Non traduce il codice in linea né i frammenti di codice, ma traduce i commenti nel codice.

La traduzione dei commenti richiede l'indicazione della lingua dopo ` ``` `, ad esempio: ` ```rust `.

Attualmente supporta la traduzione dei commenti in `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [e altre lingue](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Se non trovi il linguaggio di programmazione di cui hai bisogno, [contattaci](https://groups.google.com/g/i18n-site).

## Interfaccia amichevole da riga di comando

Molti [strumenti potenti](https://www.capterra.com/translation-management-software) possono gestire documenti di traduzione.

Per i programmatori esperti in `git`, `vim`, `vscode`, l'uso di questi strumenti per modificare documenti e gestire le versioni potrebbe aumentare il costo di apprendimento.

Nei sostenitori del principio `KISS` (`Keep It Simple, Stupid`), le soluzioni aziendali di alto livello sono considerate sinonimo di ingombranza, inefficienza e difficoltà d'uso.

La traduzione dovrebbe essere semplice: inserire un comando e fare clic, senza complesse dipendenze ambientali.

Non aggiungere entità se non strettamente necessario.

## Se non ci sono modifiche, non c'è traduzione

Altri strumenti di traduzione da riga di comando come [translate-shell](https://github.com/soimort/translate-shell) sono disponibili.

Ma non riconoscono le modifiche ai file, traducendo solo i file modificati per ridurre costi ed efficientare.

## La traduzione è modificabile e non sovrascrive le modifiche manuali esistenti, a meno che il testo originale non sia stato modificato

La traduzione è modificabile.

Se modifichi il testo originale e lo traduci automaticamente di nuovo, le modifiche manuali non verranno sovrascritte (se il paragrafo originale non è stato modificato).

## La miglior qualità di traduzione automatica

Abbiamo sviluppato una nuova tecnologia di traduzione che unisce i vantaggi dei modelli di traduzione automatica tradizionali e dei grandi modelli linguistici, rendendo le traduzioni accurate, fluide ed eleganti.

I test ciechi dimostrano che la nostra qualità di traduzione è significativamente migliore rispetto a quella dei servizi concorrenti.

Per raggiungere la stessa qualità, Google Translate e `ChatGPT` richiedono rispettivamente `2.67` e `3.15` volte più modifiche manuali rispetto a noi.

## <a rel=id href="#price" id="price"></a> Prezzi estremamente competitivi

|                                                                                   | USD/milione di parole |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Clicca qui per autorizzare e seguire i18n.site su GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **e ricevi $50**.

Nota: il numero di caratteri fatturabili = [numero di caratteri Unicode](https://en.wikipedia.org/wiki/Unicode) nel file sorgente × numero di lingue nella traduzione

## Supporta La Traduzione `YAML`

Lo strumento traduce solo i valori del dizionario in `YAML` , non le chiavi del dizionario.

Basandosi su `YAML` traduzioni, puoi facilmente creare soluzioni internazionali per vari linguaggi di programmazione.

## Supporta La Configurazione Dell'intestazione Di Traduzione `HOGO`

Supporta la traduzione delle configurazioni di intestazione per i blog statici di tipo [HUGO](https://github.com/gohugoio/hugo), traducendo solo i campi `title`, `summary`, `brief`, `description`.

## Non tradurre i nomi delle variabili

`Markdown` viene utilizzato come modello per le email, mentre `YAML` serve per la configurazione dei file linguistici, includendo parametri variabili (ad esempio: è stata ricevuta la ricarica `${amount}`).

I nomi delle variabili come `${varname}` non vengono tradotti come inglesi.

## Ottimizzazione della traduzione per Cina, Giappone e Corea

### Quando tradotto in inglese, il titolo viene automaticamente messo in maiuscolo

Cina, Giappone e Corea non distinguono tra maiuscole e minuscole, ma i titoli inglesi hanno la prima lettera maiuscola per convenzione.

`i18` riesce a riconoscere i titoli in `Markdown` e automaticamente capitalize la prima lettera durante la traduzione in una lingua che distingue tra maiuscole e minuscole.

Per esempio, `为阅读体验而优化` sarà tradotto in `Optimized for Reading Experience`.

### Non tradurre i termini inglesi nei testi cinesi, giapponesi e coreani

I documenti di Cina, Giappone e Corea spesso contengono molti termini inglesi.

La traduzione automatica di Cina, Giappone e Corea in altre lingue spesso traduce anche i termini, come nella seguente frase cinese:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Se si utilizzano Google o DeepL, entrambi tradurrebbero erroneamente i termini inglesi che dovrebbero rimanere invariati (ad esempio in giapponese e francese).

### Google Traduttore

Tradotto in giapponese: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Tradotto in francese: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` tradotto come `faucon`, `Llama` tradotto come `lama`. Come nomi propri, non dovrebbero essere tradotti.

![](//p.3ti.site/1720199451.avif)

### Traduzione DeepL

Tradotto in giapponese: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL ha tradotto in francese (modificando anche i nomi propri e aggiungendo strani `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traduzione i18n.site

`i18` riconosce i termini inglesi nei documenti di Cina, Giappone e Corea e li lascia invariati.

Ad esempio, il risultato della traduzione giapponese è:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Il risultato della traduzione francese è:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Solo quando c'è uno spazio tra la parola inglese e il testo cinese, giapponese o coreano, o la lunghezza inglese è maggiore di 1, la parola viene considerata un termine.

Ad esempio: `C罗` viene tradotto come `Cristiano Ronaldo`.

## Può essere combinato con `i18n.site` per creare siti web multilingue

`i18` è integrato nello strumento a riga di comando per la creazione di siti web multilingue [`i18n.site`](/i18n.site).

Consulta la documentazione di [`i18n.site`](/i18n.site) per ulteriori dettagli.

## Il codice è open source

Il client è completamente open source e il server è open source al 90%. [Clicca qui per visualizzare il codice sorgente](/i18n.site/src).

Cerchiamo volontari per partecipare allo sviluppo del codice open source e alla correzione delle traduzioni.

Se sei interessato, [clicca qui per compilare il tuo profilo](https://ggl.link/i18n) e poi unisciti alla [mailing list](https://groups.google.com/u/2/g/i18n-site) per discutere.

## Rimani in contatto

Fai clic <button onclick="mailsub()">qui per iscriverti agli aggiornamenti via email</button> e <button onclick="webpush()">abilita le notifiche del browser</button>, ti informeremo sugli aggiornamenti del prodotto.

segui anche i nostri account su [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).