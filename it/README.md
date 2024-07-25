<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Soluzioni internazionali<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Riga di comando Markdown #strumento Yaml , ti aiuta a costruire un sito di documenti internazionale, supportando [centinaia di lingue](/i18/LANG_CODE) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Prefazione

Internet ha eliminato le distanze nello spazio fisico, ma le differenze linguistiche ostacolano ancora l’unità umana.

Sebbene il browser abbia una traduzione integrata, i motori di ricerca non riescono ancora a eseguire query tra lingue diverse.

Attraverso i social media e la posta elettronica le persone sono abituate a concentrarsi su fonti di informazione nella propria lingua madre.

Con l’esplosione dell’informazione e il mercato globale, per competere per la scarsa attenzione, **supportare più lingue è una competenza fondamentale** .

Anche se si tratta di un progetto open source personale che vuole influenzare un pubblico più ampio, dovrebbe fare fin dall'inizio una selezione tecnologica internazionale.

## <a rel=id href="#project" id="project"></a> descrizione del progetto

Questo sito attualmente fornisce due strumenti da riga di comando open source:

* [i18 : MarkDown Strumento di traduzione della riga di comando](/i18/feature)
* [i18n.site : Generatore di siti web statici multilingue](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: strumento di traduzione della riga di comando MarkDown

Traduci `Markdown` e `YAML` in uno strumento da riga di comando ( [codice sorgente](https://github.com/i18n-site/rust/tree/main/i18) ) in più lingue.

Può mantenere perfettamente il formato di `Markdown` Può identificare le modifiche ai file e tradurre solo i file modificati.

La traduzione è modificabile.

Modifica il testo originale e traducilo nuovamente automaticamente, le modifiche manuali alla traduzione non verranno sovrascritte (se questo paragrafo del testo originale non è stato modificato).

Condividiamo " filosofia `UNIX` is a File " e possiamo gestire traduzioni in centinaia di lingue senza introdurre soluzioni complesse e ingombranti di livello enterprise.

Puoi utilizzare gli strumenti più familiari per `Markdown` la traduzione (ma non puoi aggiungere o eliminare paragrafi) e utilizzare il modo più familiare per eseguire il controllo della versione.

È possibile creare una base di codice come open source per i file di lingua e, con l'aiuto del processo di `Pull Request` , gli utenti globali possono partecipare all'ottimizzazione continua delle traduzioni. Connessione perfetta [github](//github.com) E altre comunità open source.

[→ Per la guida per l'utente, leggere la documentazione del progetto](/i18) .

## La Traduzione Di Alta Qualità Di Xindaya

Abbiamo sviluppato una nuova generazione di tecnologie di traduzione che integra i vantaggi tecnici dei tradizionali modelli di traduzione automatica e dei modelli linguistici di grandi dimensioni per rendere le traduzioni accurate, fluide ed eleganti.

I test ciechi mostrano che la qualità delle nostre traduzioni è significativamente migliore rispetto a servizi simili.

Per ottenere la stessa qualità, la quantità di modifiche manuali richieste da Google Translate e `ChatGPT` è rispettivamente `2.67` volte e `3.15` volte nostre.

#### <a rel=id href="#price" id="price"></a> Prezzi estremamente competitivi

|                                                                                   | USD/milione di parole |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazzonia](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Nota: il numero di caratteri fatturabili = [il numero di unicode](https://en.wikipedia.org/wiki/Unicode) nel file sorgente × il numero di lingue nella traduzione

### i18n.site: Generatore Di Siti Statici Multilingua

Strumento da riga di comando ( [codice sorgente](https://github.com/i18n-site/rust/tree/main/i18n-site) ) per generare siti statici multilingue.

Puramente statico, ottimizzato per l'esperienza di lettura e integrato con la traduzione di [i18](#i18) è la scelta migliore per costruire un sito di documenti di progetto.

Il framework front-end sottostante adotta un'architettura plug-in completa, che è facile per lo sviluppo secondario. Se necessario, è possibile integrare funzioni back-end.

Questo sito Web è sviluppato sulla base di questo framework e include funzioni utente, di pagamento e altre ( [codice sorgente](/i18n.site/src) ). Un tutorial dettagliato verrà scritto in seguito.

[→ Per la guida per l'utente, leggere la documentazione del progetto](/i18n.site) .

## Rimaniamo in Contatto

Fai <button onclick="mailsub()">clic su questa email per iscriverti agli aggiornamenti del prodotto</button> e <button onclick="webpush()">abilitare il push del browser</button> . Ti informeremo quando verranno effettuati gli aggiornamenti del prodotto.

/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) a seguire i nostri account social [X.COM: @i18nSite](https://x.com/i18nSite)

Se riscontri problemi [→ pubblicalo nel forum degli utenti](https://groups.google.com/u/1/g/i18n) .

## Chi Siamo

> Dissero: Vieni, costruisci una torre che arrivi al cielo e rendi famosa la razza umana.
>
> Il Signore vide ciò e disse: "Tutti gli esseri umani hanno la stessa lingua e la stessa razza. Ora che questo è stato compiuto, tutto sarà fatto".
>
> Poi è arrivata, rendendo gli esseri umani incapaci di comprendere la lingua dell'altro e dispersi in vari luoghi.

<p style="text-align:right">──Bibbia·Genesi</p>

Vogliamo costruire un Internet senza isolamento della comunicazione linguistica.
Ci auguriamo che tutta l’umanità si unisca con un sogno comune.

I siti di traduzione e documentazione Markdown sono solo l'inizio.
Sincronizzare la pubblicazione di contenuti sui social media;
Supporta commenti bilingue e chat room;
Un sistema di biglietti multilingue in grado di pagare premi;
Un mercato di vendita per componenti front-end internazionali;
C'è molto altro che vogliamo fare.

Non vediamo l'ora di incontrare persone che la pensano allo stesso modo nel vasto mare di persone.
Cerchiamo volontari per partecipare allo sviluppo del codice open source e alla correzione di bozze dei testi tradotti.
Se sei interessato, [→ Clicca qui per compilare il tuo profilo](https://ggl.link/i18n) e poi iscriverti [alla mailing list](https://groups.google.com/u/2/g/i18n-site) per la comunicazione.

Crediamo nell'open source e amiamo la condivisione,
Benvenuti a creare insieme un futuro senza confini.
