<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Soluzioni internazionali <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Strumento da riga di comando Markdown e YAML per la traduzione, aiutandoti a costruire un sito di documentazione internazionale, supportando [centinaia di lingue](/i18/LANG_CODE) ..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Prefazione

Internet ha abolito le distanze fisiche, ma le differenze linguistiche continuano a ostacolare l'unità umana.

Nonostante i browser offrano già funzioni di traduzione, i motori di ricerca non riescono ancora a effettuare ricerche in lingue diverse.

I social media e l'email portano le persone a concentrarsi sulle informazioni nella loro lingua madre.

Nell'era dell'informazione esplosiva e del mercato globale, per competere per l'attenzione limitata, **supportare più lingue è essenziale**.

Anche un progetto open source personale che vuole raggiungere un pubblico più ampio dovrebbe iniziare con una scelta tecnologica internazionale.

## <a rel=id href="#project" id="project"></a> Introduzione al progetto

Questo sito offre attualmente due strumenti open source da riga di comando:

* [i18 : Strumento di traduzione da riga di comando per Markdown](/i18/feature)
* [i18n.site : Generatore di siti statici multilingue](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: Strumento di traduzione da riga di comando per Markdown

1	Uno strumento da riga di comando ( [codice sorgente](https://github.com/i18n-site/rust/tree/main/i18) ) che traduce `Markdown` e `YAML` in più lingue.

2	Può mantenere perfettamente il formato `Markdown` . Può identificare le modifiche ai file e tradurre solo i file modificati.

Le traduzioni sono modificabili.

Quando si modifica il testo originale e si esegue una nuova traduzione automatica, le modifiche manuali non vengono sovrascritte (se il testo originale non è stato modificato).

3	Sottoscriviamo la filosofia di `UNIX` "Tutto è un file" e possiamo gestire traduzioni in centinaia di lingue senza ricorrere a soluzioni enterprise complesse e ingombranti.

4	Puoi utilizzare gli strumenti più familiari per editare la traduzione di `Markdown` (ma non puoi aggiungere o eliminare paragrafi) e adottare il metodo più noto per il controllo delle versioni.

5	È possibile rendere la creazione dei file di lingua un progetto open source, permettendo agli utenti di tutto il mondo di contribuire all'ottimizzazione continua delle traduzioni tramite il processo di `Pull Request`. Offre una connessione senza interruzioni con [github](//github.com) e altre comunità open source.

[→ Consulta la guida utente leggendo la documentazione del progetto](/i18).

## Traduzione automatica di alta qualità

Abbiamo sviluppato una nuova tecnologia di traduzione che unisce i vantaggi dei modelli di traduzione automatica tradizionali e dei grandi modelli linguistici, rendendo le traduzioni accurate, fluide ed eleganti.

Le prove cieche dimostrano che la nostra qualità di traduzione è significativamente superiore rispetto a quella dei servizi concorrenti.

6	Per raggiungere la stessa qualità, la quantità di modifiche manuali necessarie con Google Translate e `ChatGPT` sono rispettivamente `2.67` e `3.15` volte maggiore rispetto a quelle del nostro strumento.

#### <a rel=id href="#price" id="price"></a> Prezzi estremamente competitivi

|                                                                                   | 7	USD/milione di parole |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Clicca qui per autorizzare e seguire i18n.site l' github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **ricevere $50 di bonus** .

Nota: il numero di caratteri fatturabili = [numero di caratteri Unicode](https://en.wikipedia.org/wiki/Unicode) nel file sorgente × numero di lingue nella traduzione

### i18n.site: Generatore di siti statici multilingue

Strumento da riga di comando ( [codice sorgente](https://github.com/i18n-site/rust/tree/main/i18n-site) ) per creare siti statici multilingue.

Puramente statico, ottimizzato per la lettura, integrato con la traduzione di [i18](#i18), è la scelta ideale per creare siti di documentazione di progetto.

Il framework front-end utilizzato adotta un'architettura a plugin completa, facile da personalizzare. Se necessario, può integrare funzionalità back-end.

Il sito è sviluppato su questo framework e include funzionalità come utente e pagamento ([codice sorgente](/i18n.site/src)). Un tutorial dettagliato sarà disponibile a breve.

[→ Per la guida utente, leggi la documentazione del progetto](/i18n.site).

## Rimani in contatto

<button onclick="mailsub()">Clicca qui per iscriverti via email agli aggiornamenti del prodotto</button> e <button onclick="webpush()">abilita le notifiche del browser</button>, ti informeremo sugli aggiornamenti.

Follow our social accounts [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

Se hai problemi, [→ pubblica un post nel forum degli utenti](https://groups.google.com/u/1/g/i18n).

## Chi siamo

> Dicono: "Vieni, costruiamo una torre che raggiunge il cielo e rendiamo famosa la razza umana".
>
> Il Signore vide e disse: "La razza umana è una, e ora che hanno questa capacità, nulla sarà impossibile".
>
> Allora intervenne, rendendo gli esseri umani incapaci di comprendere la lingua degli altri e disperdendo loro in tutto il mondo.

<p style="text-align:right">── Bibbia, Genesi</p>

Vogliamo creare un Internet senza barriere linguistiche.
Speriamo che l'umanità possa unirsi attraverso un sogno comune.

Il traduttore Markdown e il sito di documentazione sono solo l'inizio.
Sincronizza i contenuti sui social media;
Supporta commenti bilingui e chat room;
Un sistema di ticket multilingue con premi in denaro;
Un mercato per la vendita di componenti front-end internazionali;
Ci sono molte altre cose che vogliamo fare.

Non vediamo l'ora di incontrare persone con idee simili nel vasto mondo.
Cerchiamo volontari per sviluppare il codice open source e per la revisione dei testi tradotti.
Se sei interessato, [→ clicca qui per compilare il tuo profilo](https://ggl.link/i18n) e poi unisciti alla [mailing list](https://groups.google.com/u/2/g/i18n-site) per discutere.

Crediamo nell'open source e amiamo condividere,
Benvenuti a costruire insieme un futuro senza confini.