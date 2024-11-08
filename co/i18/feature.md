# Caratteristiche Di U Produttu

`i18` hè u strumentu di linea di cummanda per a traduzzione Markdown & Yaml

## Pò Mantene Perfettamente U Furmatu Di Markdown

Supporta a traduzzione di e tabelle Markdown senza dannà u furmatu ùn traduce parole in formule matematiche o ligami.

Supporta a traduzzione di HTML Markdown , u cuntenutu in tag `<pre>` è `<code>` incrustati in HTML `MarkDown` ùn hè micca traduttu

## Pò Ricunnosce E Formule Matematiche È Saltà a Traduzzione

E formule matematiche sò ricunnisciute è a traduzzione hè saltata.

Per cumu scrive formule matematiche, fate un riferimentu à [" Github À propositu di a scrittura di l'espressioni matematiche "](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Capacità Di Traduce Cumenti in Frammenti Di Codice

U codice in linea è i frammenti di codice ùn sò micca tradutti, ma i cumenti in u codice ponu esse tradutti.

I cumenti ` ```rust ` traduzzione anu da indicà a lingua dopu à ` ``` ` , cum'è : .

Attualmente, supporta a traduzzione di l'annotazione in `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [è altre lingue](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Se vulete traduce tutti i caratteri non inglesi in u codice, marcate u segmentu di codice cù ` ```i18n ` .

Se a lingua di prugrammazione chì avete bisognu ùn hè micca dispunibule, per piacè [cuntattateci](https://groups.google.com/g/i18n-site) .

## Amichevule À a Linea Di Cummanda

Ci hè parechje [strumenti di pesu pesu](https://www.capterra.com/translation-management-software) dispunibule per a gestione di documenti di traduzzione.

Per i programatori chì sò familiarizati cù `git` , `vim` è `vscode` , l'usu di sti strumenti per edità documenti è gestisce e versioni senza dubbitu aumenterà u costu di l'apprendimentu.

`KISS` ( `Keep It Simple, Stupid` ) Trà i credenti di principiu, i suluzioni à u livellu di l'impresa sò sinonimi di esse ingombranti, inefficienti è difficiuli d'utilizà.

A traduzzione deve esse fatta da l'inputing cumandamenti è cumpletu cù un clicu Ùn deve esse micca dipendenze di l'ambiente cumplessu.

Ùn aghjunghje micca entità, salvu micca necessariu.

## Nisuna Mudificazione, Nè Traduzzione

Ci hè ancu alcuni strumenti di traduzzione in linea di cummanda, cum'è [translate-shell](https://github.com/soimort/translate-shell)

Tuttavia, ùn supportanu micca l'identificazione di mudificazioni di u schedariu è traduce solu i schedari mudificati per riduce i costi è aumentà l'efficienza.

## A Traduzzione Pò Esse Editata, È a Traduzzione Automatica Ùn Soprascrive Micca E Mudificazioni Esistenti.

A traduzzione hè editabile.

Mudificà u testu uriginale è traduzzione in macchina di novu, e mudificazioni manuali di a traduzzione ùn saranu micca soprascritti (se stu paràgrafu di u testu originale ùn hè micca statu mudificatu).

## Traduzzione Automatica Di Megliu Qualità

Avemu sviluppatu una nova generazione di tecnulugia di traduzzione chì combina i vantaghji tecnichi di i mudelli tradiziunali di traduzzione automatica è di i grandi mudelli di lingua per fà e traduzioni precise, fluide è eleganti.

I testi in ciechi mostranu chì a nostra qualità di traduzzione hè significativamente megliu cumparatu cù servizii simili.

Per ottene a listessa qualità, a quantità di editazione manuale necessaria da Google Translate è `ChatGPT` hè `2.67` volte è `3.15` volte quella di a nostra rispettivamente.

## <a rel=id href="#price" id="price"></a> Prezzi estremamente cumpetitivi

|                                                                                   | USD / milioni di parolle |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Cliccate quì per autorizà è seguità i18n.site a Biblioteca github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) è **riceve bonus $50** .

Nota: U numeru di caratteri fatturabili = [u numeru di unicode](https://en.wikipedia.org/wiki/Unicode) in u schedariu fonte × u numeru di lingue in a traduzzione

## Supporta a Traduzzione `YAML`

L'uttellu traduce solu i valori di u dizziunariu in `YAML` , micca e chjave di u dizziunariu.

Basatu nantu à `YAML` traduzzione, pudete facilmente custruisce suluzioni internaziunali per diverse lingue di prugrammazione.

## Supporta a Traduzzione `HOGO` Cunfigurazione Di L'intestazione

Supporta a cunfigurazione di l' [HOGO](https://github.com/gohugoio/hugo) di u blog static, è traduce solu i campi `title` , `summary` , `brief` è `description` .

## Ùn Traduce Micca I Nomi Di Variàbili

`Markdown` hè utilizatu cum'è un mudellu di email, `YAML` hè utilizatu cum'è una cunfigurazione di u schedariu di lingua, è ci saranu parametri variabili (per esempiu: recharge `${amount}` hè statu ricevutu).

I nomi di variabile cum'è `${varname}` ùn saranu micca cunsiderati cum'è traduzzioni in inglese.

## Ottimisazione Di a Traduzzione Per a Cina, U Giappone È a Corea

### Quandu Hè Traduttu in Inglese, a Prima Lettera Di U Titulu Hè Automaticamente Capitalizata.

Cina, Giappone è Corea ùn anu micca lettere maiuscule è minuscule, ma a cunvenzione per i tituli inglesi hè di capitalizà a prima lettera.

`i18` pò ricunnosce u tìtulu in `MarkDown` , è mette automaticamente in maiuscula a prima lettera quandu traduce in una lingua sensible à u casu.

Per esempiu, `为阅读体验而优化` serà traduttu in `Optimized for Reading Experience` .

### I Termini Inglesi in Cinese, Giapponese, Coreanu È Cinese Ùn Sò Micca Tradutti

I ducumenti da Cina, Giappone è Corea spessu cuntenenu assai termini inglesi.

A traduzzione automatica di e lingue cinese, giapponese è coreana hè diventata una lingua non-inglese, è i termini sò spessu tradotti inseme, cum'è a seguente frase cinese:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Sè vo aduprate Google o DeepL, i dui traducanu in modu incorrectu i termini inglesi chì devenu esse originali (pigliate u giapponese è u francese cum'è esempi).

### Google Traduttore

Traduttu in `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Traduttu `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` francese :

`Falcon` hè traduttu cum'è `faucon` è `Llama` hè traduttu cum'è `lama` . Cum'è nomi propiu, ùn deve micca esse traduttu.

![](//p.3ti.site/1720199451.avif)

### Traduzzione DeepL

Traduttu in `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL di u sopra in francese (riscrive ancu i nomi propiu è aghjunghjendu u disparu `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Traduzzione

A traduzzione di `i18` ricunnosce i termini inglesi in i ducumenti cinese, giapponese è coreanu è lasciarà i termini intatti.

Per esempiu, u risultatu di a traduzzione giapponese sopra hè:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

A traduzzione francese hè:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Solu quandu ci hè un spaziu trà a parolla inglesa è u testu cinese, giapponese è coreanu o a lunghezza inglese hè più grande di 1, a parolla serà cunsiderata cum'è un termini.

Per esempiu: `C罗` serà traduttu cum'è `Cristiano Ronaldo` .

## Pò Esse Cumminati Cù Più Di `i18n.site` Lingue Per Custruisce Un Situ Web

`i18` hè integrata in l'uttellu di linea di cumanda di custruzzione di siti web multilingua [`i18n.site`](/i18n.site) .

Vede a documentazione di [`i18n.site`](/i18n.site) per i dettagli.

## Codice Open Source

U cliente hè completamente apertu, è u latu di u servitore hè un codice 90 [Clicca quì per vede u codice fonte](/i18n.site/c/src) .

Cerchemu vuluntarii per participà à u sviluppu di u codice open source è a correzione di testi tradutti.

Sè site interessatu, per piacè [→ Cliccate quì per compie u vostru prufilu](https://ggl.link/i18n) è dopu unisci [à a lista di mailing](https://groups.google.com/u/2/g/i18n-site) per a cumunicazione.

## Stemu in Cuntattu

Per piacè <button onclick="mailsub()">cliccate nantu à questu email per abbonate à l'aghjurnamenti di u produttu</button> è <button onclick="webpush()">attivà u push di u navigatore</button> .

Benvenuti ancu à seguità i nostri cunti suciale / [X.COM: @i18nSite](https://x.com/i18nSite) [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)