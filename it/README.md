<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Soluzioni di internazionalizzazione <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Strumento da riga di comando per Markdown e YAML, aiuta a creare siti di documentazione internazionali, supportando [centinaia di lingue](/i18/LANG_CODE) ..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Prefazione

Internet ha abolito le distanze fisiche, ma le differenze linguistiche continuano a ostacolare l'unità umana.

Nonostante i browser offrano traduzioni integrate, i motori di ricerca non possono ancora eseguire ricerche tra lingue diverse.

I social media e l'email portano le persone a concentrarsi sulle informazioni nella loro lingua madre.

Con l'esplosione dell'informazione e il mercato globale, per competere per l'attenzione rara, **supportare più lingue è una competenza fondamentale**.

Anche i progetti open source personali che ambiscono a raggiungere un pubblico più ampio dovrebbero adottare sin dall'inizio una strategia tecnologica internazionale.

## <a rel=id href="#project" id="project"></a> Introduzione al progetto

Questo sito offre attualmente due strumenti open source da riga di comando:

* [i18 : Strumento di traduzione da riga di comando per Markdown](/i18/feature)
* [i18n.site : Generatore di siti statici multilingue](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: Strumento di traduzione da riga di comando per Markdown

Uno strumento da riga di comando ( [codice sorgente](https://github.com/i18n-site/rust/tree/main/i18) ) che traduce `Markdown` e `YAML` in più lingue.

Può mantenere perfettamente il formato `Markdown`. Può identificare le modifiche ai file e tradurre solo i file modificati.

La traduzione è modificabile.

Se modifichi il testo originale e lo traduci automaticamente di nuovo, le modifiche manuali non verranno sovrascritte (se il paragrafo originale non è stato modificato).

Sottoscriviamo la filosofia di `UNIX` "Tutto è un file" e possiamo gestire traduzioni in centinaia di lingue senza introdurre soluzioni complesse e ingombranti di livello enterprise.

Puoi utilizzare gli strumenti più familiari per modificare la traduzione `Markdown` (ma non puoi aggiungere o eliminare paragrafi) e utilizzare il modo più familiare per eseguire il controllo della versione.

È possibile creare una repository open source per i file di lingua e, con l'aiuto dei processi di `Pull Request`, gli utenti globali possono partecipare all'ottimizzazione continua delle traduzioni. Offre una connessione perfetta con [github](//github.com) e altre comunità open source.

[→ Guida all'uso, leggi la documentazione del progetto](/i18).

## La miglior qualità di traduzione automatica

Abbiamo sviluppato una nuova tecnologia di traduzione che unisce i vantaggi dei modelli di traduzione automatica tradizionali e dei grandi modelli linguistici, rendendo le traduzioni accurate, fluide ed eleganti.

I test ciechi dimostrano che la nostra qualità di traduzione è significativamente migliore rispetto a quella dei servizi concorrenti.

Per raggiungere la stessa qualità, Google Translate e `ChatGPT` richiedono rispettivamente `2.67` e `3.15` volte più modifiche manuali rispetto a noi.

#### <a rel=id href="#price" id="price"></a> Prezzi estremamente competitivi

|                                                                                   | USD/milione di parole |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Clicca qui per autorizzare e seguire i18n.site su GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **e ricevi $50**.

Nota: il numero di caratteri fatturabili = [numero di caratteri Unicode](https://en.wikipedia.org/wiki/Unicode) nel file sorgente × numero di lingue nella traduzione

### i18n.site: Generatore di siti statici multilingue

Strumento da riga di comando ( [codice sorgente](https://github.com/i18n-site/rust/tree/main/i18n-site) ) per creare siti statici multilingue.

Puramente statico, ottimizzato per la lettura, integrato con la traduzione di [i18](#i18), è la scelta ideale per creare siti di documentazione di progetto.

Il framework front-end utilizzato adotta un'architettura a plugin completa, è facile da sviluppare ulteriormente e, se necessario, può integrare funzionalità back-end.

Questo sito è stato sviluppato utilizzando questo framework e include funzionalità come utenti e pagamenti ([codice sorgente](/i18n.site/src)). Un tutorial dettagliato sarà disponibile a breve.

[→ Guida all'uso, leggi la documentazione del progetto](/i18n.site).

## Rimani in contatto

Fai clic <button onclick="mailsub()">qui per iscriverti agli aggiornamenti via email</button> e <button onclick="webpush()">abilita le notifiche del browser</button>, ti informeremo sugli aggiornamenti del prodotto.

segui anche i nostri account su [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

Se hai problemi, [→ pubblica un post nel forum degli utenti](https://groups.google.com/u/1/g/i18n).

## Chi siamo

> Dicono: "Vieni, costruiamo una torre che raggiunge il cielo e rendiamo famosa la razza umana."
>
> Il Signore vide e disse: "La razza umana è una, e ora che hanno una lingua comune, nulla sarà impossibile."
>
> Allora intervenne, rendendo gli esseri umani incapaci di comprendere le lingue degli altri e disperdendo loro in vari luoghi.

<p style="text-align:right">── Bibbia, Genesi</p>

Vogliamo creare un Internet senza barriere linguistiche.
Speriamo che l'umanità possa unirsi intorno a un sogno comune.

Il traduttore Markdown e il sito di documentazione sono solo l'inizio.
Sincronizza i contenuti sui social media;
Supporta commenti bilingui e chat room;
Un sistema di ticket multilingue che offre premi;
Un mercato per la vendita di componenti front-end internazionali;
Ci sono molte altre cose che vogliamo fare.

Non vediamo l'ora di incontrare persone con idee simili nel vasto mare di persone.
Cerchiamo volontari per partecipare allo sviluppo del codice open source e alla correzione delle traduzioni.
Se sei interessato, [clicca qui per compilare il tuo profilo](https://ggl.link/i18n) e poi unisciti alla [mailing list](https://groups.google.com/u/2/g/i18n-site) per discutere.

Crediamo nell'open source e amiamo la condivisione,
Benvenuti a costruire insieme un futuro senza confini.