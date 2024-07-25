# Vlastnosti Produktu

`i18` je nástroj príkazového riadka na preklad Markdown & Yaml

## Dokáže Dokonale Udržiavať Formát Markdown

Podporuje preklad tabuliek Markdown bez poškodenia formátu, neprekladá slová v matematických vzorcoch alebo odkazoch.

Podporuje preklad Markdown v zmiešanom HTML `<pre>` HTML do `MarkDown` a obsah v `<code>` nie sú preložené

## Dokáže Rozpoznať Matematické Vzorce a Preskočiť Preklad

Rozpoznajú sa matematické vzorce a preklad sa preskočí.

Informácie o písaní matematických vzorcov nájdete v časti [" Github O písaní matematických výrazov"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Schopnosť Prekladať Komentáre v Útržkoch Kódu

Vložený kód a úryvky kódu sa neprekladajú, ale komentáre v kóde sa preložiť dajú.

` ```rust ` komentároch k prekladu je potrebné uviesť jazyk : ` ``` `

V súčasnosti podporuje preklad komentárov `toml` jazykoch , `yaml` , `json5` `coffee` `go` , `rust` , `c` , `cpp` `java` `js` `python` , `bash` , `php` [a ďalších](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Ak požadovaný programovací jazyk nie je k dispozícii, [kontaktujte nás](https://groups.google.com/g/i18n-site) .

## Priateľský K Príkazovému Riadku

Na správu prekladových dokumentov je k dispozícii veľa [ťažkých nástrojov](https://www.capterra.com/translation-management-software) .

Pre programátorov, ktorí `git` , `vim` , `vscode` , používanie týchto nástrojov na úpravu dokumentov a správu verzií nepochybne zvýši náklady na učenie.

( `Keep It Simple, Stupid` ) Medzi vyznávačmi princípu sú riešenia na podnikovej úrovni synonymom toho `KISS` že sú ťažkopádne, neefektívne a ťažko použiteľné.

Preklad by sa mal vykonávať zadaním príkazov a jeho dokončením jedným kliknutím. Nemali by existovať žiadne zložité závislosti od prostredia.

Nepridávajte entity, pokiaľ to nie je nevyhnutné.

## Bez Úprav, Bez Prekladu

Existujú aj niektoré nástroje na preklad príkazového riadku, ako napríklad [translate-shell](https://github.com/soimort/translate-shell)

Nepodporujú však identifikáciu úprav súborov a iba prekladajú upravené súbory, aby znížili náklady a zvýšili efektivitu.

## Preklad Je Možné Upravovať a Strojový Preklad Neprepíše Existujúce Úpravy.

Preklad je upraviteľný.

Upravte pôvodný text a znova ho strojovo preložte, ručné úpravy prekladu sa neprepíšu (ak tento odsek pôvodného textu nebol upravený).

## Xindayain Vysoko Kvalitný Preklad

Vyvinuli sme novú generáciu prekladateľskej technológie, ktorá integruje technické výhody tradičných modelov strojového prekladu a veľkých jazykových modelov, aby boli preklady presné, hladké a elegantné.

Slepé testy ukazujú, že naša kvalita prekladov je výrazne lepšia v porovnaní s podobnými službami.

Na `3.15` rovnakej kvality je množstvo manuálnych úprav vyžadované službou Google `2.67` a `ChatGPT`

## <a rel=id href="#price" id="price"></a> Mimoriadne konkurenčné ceny

|                                                                                   | USD/milión slov |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Poznámka: Počet účtovateľných znakov = [počet unicode](https://en.wikipedia.org/wiki/Unicode) v zdrojovom súbore × počet jazykov v preklade

## Podporte Preklad `YAML`

Nástroj prekladá iba hodnoty slovníka v `YAML` , nie kľúče slovníka.

Na základe `YAML` môžete ľahko vytvárať medzinárodné riešenia pre rôzne programovacie jazyky.

## `HOGO` Prekladu Konfigurácie Hlavičky

Podporuje konfiguráciu hlavičky statického blogu typu [HOGO](https://github.com/gohugoio/hugo) , prekladajú `description` iba `summary` `title`

## Neprekladajte Názvy Premenných

`Markdown` Používa sa ako šablóna e-mailu, `YAML` ako konfigurácia jazykového súboru, budú existovať variabilné parametre (napríklad: bolo prijaté dobitie `${amount}` ).

Tento druh názvu premennej sa nebude považovať za anglický preklad `${varname}`

## Optimalizácia Prekladov Pre Čínu, Japonsko a Kóreu

### Pri Preklade Do Angličtiny Je Prvé Písmeno Názvu Automaticky Veľké.

Čína, Japonsko a Kórea nemajú veľké ani malé písmená, ale v anglických názvoch sa zvyčajne začína veľké písmeno.

`i18` dokáže rozpoznať názvy v `MarkDown` a pri preklade do jazyka, v ktorom sa rozlišujú malé a veľké písmená, automaticky zmení prvé písmeno na veľké.

Napríklad `为阅读体验而优化` bude preložené ako `Optimized for Reading Experience` .

### Anglické Výrazy v Čínštine, Japončine, Kórejčine a Čínštine Sa Neprekladajú

Dokumenty z Číny, Japonska a Kórey často obsahujú veľa anglických výrazov.

Strojový preklad čínštiny, japončiny a kórejčiny sa stal neanglickým jazykom a výrazy sa často prekladajú spoločne, ako napríklad nasledujúca čínska veta:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Ak používate Google alebo DeepL, oba nesprávne prekladajú anglické výrazy, ktoré by mali zostať pôvodné (vezmite si napríklad japončinu a francúzštinu).

### Google Translate

Preložené do `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Preložené do `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` sa prekladá ako `faucon` a `Llama` sa prekladá ako `lama` . Ako vlastné podstatné mená by sa nemali prekladať.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Preklad

Preložené do `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Preklad vyššie uvedeného do francúzštiny (tiež prepísanie vlastných mien a pridanie nepárnych `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### Preklad Stránky i18n

Preklad `i18` rozpozná anglické výrazy v čínskych, japonských a kórejských dokumentoch a ponechá výrazy nedotknuté.

Napríklad výsledok japonského prekladu vyššie je:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Francúzsky preklad je:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Iba ak je medzi anglickým slovom a čínskym, japonským a kórejským textom medzera alebo ak je anglická dĺžka väčšia ako 1, slovo sa bude považovať za výraz.

Napríklad: `C罗` bude preložené ako `Cristiano Ronaldo` .

## Je Možné `i18n.site` Viacjazyčné Webové Stránky

`i18` Je integrovaný do nástroja príkazového riadka na vytváranie viacjazyčných webových stránok [`i18n.site`](/i18n.site) .

Podrobnosti nájdete v dokumentácii [`i18n.site`](/i18n.site)

## Kód Open Source

Klient je úplne open source a na strane servera je otvorený zdroj 90 [Kliknutím sem zobrazíte zdrojový kód](/i18n.site/src) .

Hľadáme dobrovoľníkov, ktorí by sa podieľali na vývoji open source kódu a korektúrach preložených textov.

Ak máte záujem, prosím [→ Kliknite sem, vyplňte svoj profil](https://ggl.link/i18n) a potom sa pridajte [do zoznamu adresátov](https://groups.google.com/u/2/g/i18n-site) pre komunikáciu.

## Zostať v Kontakte

<button onclick="mailsub()">Kliknutím na tento e-mail sa prihlásite na odber aktualizácií produktu</button> a <button onclick="webpush()">povolíte push prehliadača</button> . Upozorníme vás, keď budú aktualizácie produktu vykonané.

/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) na našich sociálnych účtoch [X.COM: @i18nSite](https://x.com/i18nSite)
