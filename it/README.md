<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Soluzioni internazionali<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

Riga di comando Markdown, Yaml per traduzione, strumento per costruire siti documentali internazionali, supporta [centinaia di lingue](/i18/LANG_CODE) ..

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Prefazione

Internet ha azzerato le distanze fisiche, ma le differenze linguistiche continuano a ostacolare l'unità umana.

Nonostante i browser offrano traduzioni integrate, i motori di ricerca non possono ancora effettuare ricerche tra lingue diverse.

I social media, l'email: le persone sono abituate a concentrarsi sulle informazioni nella loro lingua madre.

Con l'esplosione delle informazioni e il mercato globale, per conquistare l'attenzione scarsa, **supportare più lingue è essenziale**.

Anche un progetto open source personale, per avere un impatto su un pubblico più ampio, dovrebbe iniziare con una scelta tecnologica internazionale.

## <a rel=id href="#project" id="project"></a> Introduzione al progetto

Questo sito offre due strumenti open source per la riga di comando:

* [i18 : Strumento di traduzione Markdown da riga di comando](/i18/feature)
* [i18n.site : Generatore di siti statici multilingue](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: Strumento di traduzione Markdown da riga di comando

Strumento per tradurre `Markdown` e `YAML` in più lingue da riga di comando ( [codice sorgente](https://github.com/i18n-site/rust/tree/main/i18) ).

Conserva il formato `Markdown` e riconosce le modifiche ai file, traducendo solo quelli aggiornati.

Il testo tradotto è modificabile.

Se modifichi il testo originale e lo traduci automaticamente, le modifiche manuali non verranno sovrascritte (se il paragrafo originale non è stato modificato).

Abbracciamo la filosofia di `UNIX`: "Tutto è un file", gestendo traduzioni in centinaia di lingue senza soluzioni aziendali complesse.

Utilizza strumenti familiari per modificare la `Markdown` (senza aggiungere o rimuovere paragrafi) e il controllo della versione in modo congeniale.

Crea un repository open source per i file linguistici e, tramite `Pull Request`, coinvolgi utenti globali nell'ottimizzazione continua delle traduzioni. Integrazione fluida con [github](//github.com) e altre comunità open source.

[→ Guida all'uso, leggi la documentazione del progetto](/i18).

## La miglior qualità di traduzione automatica

Abbiamo sviluppato una nuova tecnologia di traduzione che integra i vantaggi dei modelli di traduzione automatica tradizionali e dei grandi modelli linguistici, rendendo le traduzioni accurate, fluide ed eleganti.

Le prove cieche dimostrano che la nostra qualità di traduzione è significativamente migliore rispetto a quella dei servizi concorrenti.

Per ottenere la stessa qualità, Google Translate e `ChatGPT` richiedono rispettivamente `2.67` e `3.15` volte più modifiche manuali rispetto a noi.

#### <a rel=id href="#price" id="price"></a> Prezzi estremamente competitivi

|                                                                                   | USD/milione di parole |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Clicca qui per autorizzare e seguire automaticamente i18n.site '# github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **ricevere $50 di bonus** .

Nota: il numero di caratteri fatturabili = [numero di caratteri Unicode](https://en.wikipedia.org/wiki/Unicode) nel file sorgente × numero di lingue nella traduzione

### i18n.site: Generatore di siti statici multilingue

Strumento per generare siti statici multilingue da riga di comando ( [codice sorgente](https://github.com/i18n-site/rust/tree/main/i18n-site) ).

Puro e statico, ottimizzato per la lettura, integrato con la traduzione di [i18](#i18), è la scelta ideale per creare siti documentali di progetto.

Il framework front-end utilizza un'architettura a plugin completa, facilitando lo sviluppo secondario e permettendo l'integrazione di funzionalità back-end se necessario.

Questo sito è sviluppato su questo framework, includendo funzionalità come utenti e pagamenti ( [codice sorgente](/i18n.site/src) ), con una guida dettagliata che seguirà.

[→ Guida all'uso, leggi la documentazione del progetto](/i18n.site).

## Rimani in contatto

Fai clic su <button onclick="mailsub()">questo pulsante email</button> per iscriverti agli aggiornamenti del prodotto e su <button onclick="webpush()">questo pulsante</button> per abilitare le notifiche push del browser. Ti informeremo quando verranno effettuati gli aggiornamenti del prodotto.

segui i nostri account social [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

Se hai problemi, [→ pubblicali nel forum degli utenti](https://groups.google.com/u/1/g/i18n).

## Chi siamo

> Dicono: "Vieni, costruiamo una torre che raggiunge il cielo e rendiamo famosa la razza umana".
>
> Il Signore vide e disse: "La razza umana è una, e ora che hanno questo, nulla sarà impossibile".
>
> Allora intervenne, rendendo gli uomini incapaci di comprendere le lingue degli altri e disperdendo loro in ogni angolo della terra.

<p style="text-align:right">── Bibbia, Genesi</p>

Vogliamo creare un Internet senza barriere linguistiche.
Speriamo che l'umanità si unisca per un sogno comune.

La traduzione e la documentazione Markdown sono solo l'inizio.
Sincronizza i contenuti sui social media;
Supporta commenti bilingui e chat room;
Un sistema di ticket multilingue con ricompense;
Un mercato per componenti front-end internazionali;
Ci sono molte altre cose che vogliamo fare.

Non vediamo l'ora di incontrare persone con idee simili nel vasto mare di individui.
Cerchiamo volontari per partecipare allo sviluppo del codice open source e alla correzione delle bozze dei testi tradotti.
Se sei interessato, [→ Clicca qui per compilare il tuo profilo](https://ggl.link/i18n) e poi iscriviti [alla mailing list](https://groups.google.com/u/2/g/i18n-site) per la comunicazione.

Crediamo nell'open source e amiamo la condivisione,
Benvenuti a costruire un futuro senza confini insieme.