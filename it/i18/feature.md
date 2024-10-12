# Caratteristiche del Prodotto

`i18` è uno strumento di traduzione da riga di comando per Markdown & Yaml.

## Può mantenere perfettamente il formato di Markdown

Supporta la traduzione delle tabelle Markdown, senza alterare il formato; non traduce le formule matematiche o le parole nei collegamenti.

1	Supporta la traduzione di HTML misti Markdown, il contenuto dei tag HTML `<pre>` e `<code>` incorporati in `Markdown` non viene tradotto

## Può riconoscere le formule matematiche e saltare la traduzione

Le formule matematiche vengono identificate e la traduzione viene saltata.

Per la scrittura delle formule matematiche, fare riferimento a [Github: Scrivere Espressioni Matematiche](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Permette di tradurre i commenti nei frammenti di codice

Il codice in linea e i frammenti di codice non vengono tradotti, ma i commenti nel codice possono essere tradotti.

La traduzione dei commenti richiede l'indicazione della lingua dopo ` ``` `, ad esempio: ` ```rust `.

Attualmente supporta la traduzione dei commenti in `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [e altre lingue](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Se non trovi il linguaggio di programmazione di cui hai bisogno, [contattaci](https://groups.google.com/g/i18n-site).

## Interfaccia amichevole da riga di comando

Molti [strumenti potenti](https://www.capterra.com/translation-management-software) possono gestire documenti di traduzione.

Per i programmatori esperti in `git`, `vim`, `vscode`, l'uso di questi strumenti per modificare documenti e gestire le versioni potrebbe aumentare il costo di apprendimento.

I sostenitori del principio `KISS` (`Keep It Simple, Stupid`) vedono le soluzioni aziendali come ingombranti, inefficienti e difficili da usare.

La traduzione dovrebbe essere semplice: inserire un comando e fare clic, senza complesse dipendenze ambientali.

Non aggiungere entità se non strettamente necessario.

## Se non ci sono modifiche, non c'è traduzione

Altri strumenti di traduzione da riga di comando come [translate-shell](https://github.com/soimort/translate-shell) sono disponibili.

Ma non riconoscono le modifiche ai file, traducendo solo i file modificati per ridurre i costi e aumentare l'efficienza.

## La traduzione è modificabile e non sovrascrive le modifiche manuali esistenti, a meno che il testo originale non sia stato modificato

La traduzione è modificabile.

2	Modifica il testo originale e traducilo nuovamente automaticamente; le modifiche manuali alla traduzione non verranno sovrascritte (se questo paragrafo del testo originale non è stato modificato).

## La miglior qualità di traduzione automatica

Abbiamo sviluppato una nuova tecnologia di traduzione che combina i vantaggi dei modelli di traduzione automatica tradizionali e dei grandi modelli linguistici, rendendo le traduzioni accurate, fluide ed eleganti.

Le prove cieche dimostrano che la nostra qualità di traduzione è significativamente migliore rispetto a quella dei servizi concorrenti.

Per ottenere la stessa qualità, Google Translate e `ChatGPT` richiedono rispettivamente `2.67` e `3.15` volte più modifiche manuali rispetto a noi.

## <a rel=id href="#price" id="price"></a> Prezzi estremamente competitivi

|                                                                                   | 3	USD/milione di parole |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Clicca qui per autorizzare e seguire i18n.site su GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **e ricevi $50**.

Nota: il numero di caratteri fatturabili = [numero di caratteri Unicode](https://en.wikipedia.org/wiki/Unicode) del file sorgente × numero di lingue nella traduzione

## Supporta La Traduzione `YAML`

Lo strumento traduce solo i valori del dizionario in `YAML` , non le chiavi del dizionario.

Basandosi su `YAML` traduzioni, puoi facilmente creare soluzioni internazionali per vari linguaggi di programmazione.

## Supporta La Configurazione Dell'intestazione Di Traduzione `HOGO`

Supporta la configurazione dell'intestazione per blog statici di tipo [HOGO](https://github.com/gohugoio/hugo), traducendo solo i campi `title`, `summary`, `brief` e `description`.

## Non tradurre i nomi delle variabili

`Markdown` viene utilizzato come modello di email, `YAML` viene utilizzato come configurazione del file di lingua e ci saranno parametri variabili (ad esempio: è stata ricevuta la ricarica `${amount}` ).

I nomi delle variabili come `${varname}` non vengono tradotti come inglesi.

## Ottimizzazione della traduzione per Cina, Giappone e Corea

### Quando tradotto in inglese, il titolo viene automaticamente messo in maiuscolo

Cina, Giappone e Corea non distinguono tra maiuscole e minuscole, ma i titoli in inglese seguono la convenzione di maiuscolare la prima lettera.

`i18` può riconoscere il titolo in `MarkDown` e metterà automaticamente in maiuscolo la prima lettera durante la traduzione in una lingua con distinzione tra maiuscole e minuscole.

Ad esempio, `为阅读体验而优化` viene tradotto in `Optimized for Reading Experience`.

### Non tradurre i termini inglesi nei testi cinesi, giapponesi e coreani

I documenti in cinese, giapponese e coreano spesso contengono molti termini inglesi.

La traduzione automatica di questi linguaggi in una lingua diversa dall'inglese spesso traduce anche i termini, come nella seguente frase cinese:

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

DeepL ha tradotto il testo in francese (modificando anche i nomi propri e aggiungendo strani `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traduzione i18n.site

`i18` riconosce i termini inglesi nei documenti cinesi, giapponesi e coreani e li lascia invariati.

Ad esempio, il risultato della traduzione in giapponese è:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La traduzione in francese è:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Solo quando c'è uno spazio tra la parola inglese e il testo cinese, giapponese o coreano, o la lunghezza inglese è maggiore di 1, la parola viene considerata un termine.

Ad esempio: `C罗` viene tradotto come `Cristiano Ronaldo`.

## Combinabile con `i18n.site` per creare siti web multilingue

`i18` è integrato nello strumento a riga di comando per la creazione di siti web multilingue [`i18n.site`](/i18n.site).

Consultare la documentazione di [`i18n.site`](/i18n.site) per ulteriori dettagli.

## Codice open source

Il client è completamente open source e il server è open source al 90%. [Clicca qui per visualizzare il codice sorgente](/i18n.site/src).

Cerchiamo volontari per lo sviluppo del codice open source e per la revisione dei testi tradotti.

Se sei interessato, [clicca qui per compilare il tuo profilo](https://ggl.link/i18n) e poi unisciti [alla mailing list](https://groups.google.com/u/2/g/i18n-site) per discutere.

## Rimani in contatto

10	Fai clic su <button onclick="mailsub()">questo pulsante email</button> per iscriverti agli aggiornamenti del prodotto e su <button onclick="webpush()">questo pulsante</button> per abilitare le notifiche push del browser. Ti informeremo quando i prodotti verranno aggiornati.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) anche a seguire i nostri account / [X.COM: @i18nSite](https://x.com/i18nSite)