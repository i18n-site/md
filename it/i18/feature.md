# Caratteristiche Del Prodotto

`i18` è lo strumento da riga di comando per la traduzione Markdown & Yaml

## Può Mantenere Perfettamente Il Formato Di Markdown

Supporta la traduzione delle tabelle Markdown senza danneggiare il formato; non traduce parole in formule matematiche o collegamenti.

Supporta la traduzione di mixed HTML Markdown , il contenuto dei tag `<pre>` e `<code>` incorporati in HTML `MarkDown` non è tradotto

## Può Riconoscere Formule Matematiche E Saltare La Traduzione

Le formule matematiche vengono riconosciute e la traduzione viene saltata.

Per sapere come scrivere formule matematiche, fare riferimento a [" Github Informazioni sulla scrittura di espressioni matematiche"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Possibilità Di Tradurre I Commenti in Frammenti Di Codice

Il codice in linea e i frammenti di codice non vengono tradotti, ma i commenti nel codice possono essere tradotti.

I commenti di traduzione devono indicare la lingua dopo ` ``` ` , ad ` ```rust ` :

Attualmente supporta la traduzione delle annotazioni in `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [e altre lingue](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Se desideri tradurre tutti i caratteri non inglesi nel codice, contrassegna il segmento di codice con ` ```i18n ` .

Se il linguaggio di programmazione di cui hai bisogno non è disponibile, [contattaci](https://groups.google.com/g/i18n-site) .

## Facile Da Riga Di Comando

Sono disponibili molti [strumenti pesanti](https://www.capterra.com/translation-management-software) per la gestione dei documenti di traduzione.

Per i programmatori che hanno familiarità con `git` , `vim` e `vscode` , l'utilizzo di questi strumenti per modificare documenti e gestire le versioni aumenterà senza dubbio il costo di apprendimento.

`KISS` ( `Keep It Simple, Stupid` ) Tra i sostenitori dei principi, le soluzioni a livello aziendale sono sinonimo di essere ingombranti, inefficienti e difficili da utilizzare.

La traduzione dovrebbe essere eseguita inserendo comandi e completandola con un clic. Non dovrebbero esserci dipendenze complesse dall'ambiente.

Non aggiungere entità se non necessario.

## Nessuna Modifica, Nessuna Traduzione

Esistono anche alcuni strumenti di traduzione della riga di comando, come [translate-shell](https://github.com/soimort/translate-shell)

Tuttavia, non supportano l'identificazione delle modifiche ai file e traducono solo i file modificati per ridurre i costi e aumentare l'efficienza.

## La Traduzione Può Essere Modificata E La Traduzione Automatica Non Sovrascriverà Le Modifiche Esistenti.

La traduzione è modificabile.

Modifica il testo originale e traducilo nuovamente automaticamente, le modifiche manuali alla traduzione non verranno sovrascritte (se questo paragrafo del testo originale non è stato modificato).

## Traduzione Automatica Della Migliore Qualità

Abbiamo sviluppato una nuova generazione di tecnologia di traduzione che combina i vantaggi tecnici dei tradizionali modelli di traduzione automatica e dei modelli linguistici di grandi dimensioni per rendere le traduzioni accurate, fluide ed eleganti.

I test ciechi mostrano che la qualità delle nostre traduzioni è significativamente migliore rispetto a servizi simili.

Per ottenere la stessa qualità, la quantità di modifiche manuali richieste da Google Translate e `ChatGPT` è rispettivamente `2.67` e `3.15` volte quella nostra.

## <a rel=id href="#price" id="price"></a> Prezzi estremamente competitivi

|                                                                                   | USD/milione di parole |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazzonia](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Clicca qui per autorizzare e seguire i18n.site la libreria github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **ricevere $50 bonus** .

Nota: il numero di caratteri fatturabili = [il numero di unicode](https://en.wikipedia.org/wiki/Unicode) nel file sorgente × il numero di lingue nella traduzione

## Supporta La Traduzione `YAML`

Lo strumento traduce solo i valori del dizionario in `YAML` , non le chiavi del dizionario.

Basandosi su `YAML` traduzioni, puoi facilmente creare soluzioni internazionali per vari linguaggi di programmazione.

## Supporta La Configurazione Dell'intestazione Di Traduzione `HOGO`

Supporta la configurazione dell'intestazione del blog statico di tipo [HOGO](https://github.com/gohugoio/hugo) e traduce solo i campi `title` , `summary` , `brief` e `description` .

## Non Tradurre I Nomi Delle Variabili

`Markdown` viene utilizzato come modello di email, `YAML` viene utilizzato come configurazione del file di lingua e ci saranno parametri variabili (ad esempio: è stata ricevuta la ricarica `${amount}` ).

I nomi di variabili come `${varname}` non verranno considerati traduzioni inglesi.

## Ottimizzazione Della Traduzione Per Cina, Giappone E Corea

### Quando Tradotto in Inglese, La Prima Lettera Del Titolo Viene Automaticamente Scritta in Maiuscolo.

Cina, Giappone e Corea non hanno lettere maiuscole e minuscole, ma la convenzione per i titoli inglesi prevede di scrivere in maiuscolo la prima lettera.

`i18` può riconoscere il titolo in `MarkDown` e metterà automaticamente in maiuscolo la prima lettera durante la traduzione in una lingua con distinzione tra maiuscole e minuscole.

Ad esempio, `为阅读体验而优化` verrà tradotto in `Optimized for Reading Experience` .

### I Termini Inglesi in Cinese, Giapponese, Coreano E Cinese Non Sono Tradotti

I documenti provenienti da Cina, Giappone e Corea spesso contengono molti termini inglesi.

La traduzione automatica delle lingue cinese, giapponese e coreana è diventata una lingua diversa dall'inglese e i termini vengono spesso tradotti insieme, come la seguente frase cinese:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Se utilizzi Google o DeepL, entrambi traducono erroneamente termini inglesi che dovrebbero rimanere originali (prendi come esempi il giapponese e il francese).

### Google Traduttore

Tradotto in `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Tradotto `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` francese :

`Falcon` viene tradotto come `faucon` e `Llama` viene tradotto come `lama` . In quanto nomi propri, non dovrebbero essere tradotti.

![](//p.3ti.site/1720199451.avif)

### Traduzione DeepL

Tradotto in `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL Traduzione di quanto sopra in francese (riscrivendo anche i nomi propri e aggiungendo lo `... ` dispari):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Traduzione i18n.site

`i18` riconoscerà i termini inglesi nei documenti cinesi, giapponesi e coreani e lascerà i termini intatti.

Ad esempio, il risultato della traduzione giapponese sopra è:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La traduzione francese è:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Solo quando c'è uno spazio tra la parola inglese e il testo cinese, giapponese e coreano o la lunghezza inglese è maggiore di 1, la parola verrà considerata un termine.

Ad esempio: `C罗` verrà tradotto come `Cristiano Ronaldo` .

## Può Essere Combinato Con Più Di `i18n.site` Lingue Per Creare Un Sito Web

`i18` è integrato nello strumento a riga di comando per la creazione di siti Web multilingue [`i18n.site`](/i18n.site) .

Vedere la documentazione di [`i18n.site`](/i18n.site) per i dettagli.

## Codice Open Source

Il client è completamente open source e il lato 90 è completamente open source. [Clicca qui per visualizzare il codice sorgente](/i18n.site/c/src) .

Cerchiamo volontari per partecipare allo sviluppo del codice open source e alla correzione di bozze dei testi tradotti.

Se sei interessato, [→ Clicca qui per compilare il tuo profilo](https://ggl.link/i18n) e poi iscriverti [alla mailing list](https://groups.google.com/u/2/g/i18n-site) per la comunicazione.

## Rimaniamo in Contatto

Fai <button onclick="mailsub()">clic su questa email per iscriverti agli aggiornamenti del prodotto</button> e <button onclick="webpush()">abilitare il push del browser</button> . Ti informeremo quando verranno effettuati gli aggiornamenti del prodotto.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) anche a seguire i nostri account / [X.COM: @i18nSite](https://x.com/i18nSite)