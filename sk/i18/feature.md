# Vlastnosti Produktu

`i18` je nástroj príkazového riadka na preklad Markdown & Yaml

## Dokáže Dokonale Udržiavať Formát Markdown

Podporuje preklad tabuliek Markdown bez poškodenia formátu, neprekladá slová v matematických vzorcoch alebo odkazoch.

Podporuje preklad zmiešaného HTML Markdown , obsah značiek `<pre>` a `<code>` vložených do HTML `MarkDown` nie je preložený

## Dokáže Rozpoznať Matematické Vzorce a Preskočiť Preklad

Rozpoznajú sa matematické vzorce a preklad sa preskočí.

Informácie o písaní matematických vzorcov nájdete v časti [" Github O písaní matematických výrazov"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Schopnosť Prekladať Komentáre v Útržkoch Kódu

Vložený kód a úryvky kódu sa neprekladajú, ale komentáre v kóde sa preložiť dajú.

` ```rust ` komentároch k prekladu je potrebné uviesť jazyk po ` ``` ` , napríklad : .

V súčasnosti podporuje preklad anotácií v jazykoch `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [a ďalších jazykoch](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Ak chcete preložiť všetky neanglické znaky v kóde, označte segment kódu ` ```i18n ` .

Ak požadovaný programovací jazyk nie je k dispozícii, [kontaktujte nás](https://groups.google.com/g/i18n-site) .

## Priateľský K Príkazovému Riadku

Na správu prekladových dokumentov je k dispozícii veľa [ťažkých nástrojov](https://www.capterra.com/translation-management-software) .

Pre programátorov, ktorí poznajú `git` , `vim` a `vscode` , používanie týchto nástrojov na úpravu dokumentov a správu verzií nepochybne zvýši náklady na učenie.

`KISS` ( `Keep It Simple, Stupid` ) Medzi vyznávačmi princípov sú riešenia na podnikovej úrovni synonymom toho, že sú ťažkopádne, neefektívne a ťažko použiteľné.

Preklad by sa mal vykonávať zadaním príkazov a jeho dokončením jedným kliknutím. Nemali by existovať žiadne zložité závislosti od prostredia.

Nepridávajte entity, pokiaľ to nie je nevyhnutné.

## Bez Úprav, Bez Prekladu

Existujú aj niektoré nástroje na preklad príkazového riadku, ako napríklad [translate-shell](https://github.com/soimort/translate-shell)

Nepodporujú však identifikáciu úprav súborov a iba prekladajú upravené súbory, aby znížili náklady a zvýšili efektivitu.

## Preklad Je Možné Upravovať a Strojový Preklad Neprepíše Existujúce Úpravy.

Preklad je upraviteľný.

Upravte pôvodný text a znova ho strojovo preložte, ručné úpravy prekladu sa neprepíšu (ak tento odsek pôvodného textu nebol upravený).

## Najkvalitnejší Strojový Preklad

Vyvinuli sme novú generáciu prekladateľskej technológie, ktorá spája technické výhody tradičných modelov strojového prekladu a veľkých jazykových modelov, vďaka čomu sú preklady presné, hladké a elegantné.

Slepé testy ukazujú, že naša kvalita prekladov je výrazne lepšia v porovnaní s podobnými službami.

Na dosiahnutie rovnakej kvality je množstvo manuálnych úprav požadovaných službou Google Translate a `ChatGPT` `2.67` -krát a `3.15` -krát väčšie ako u nás.

## <a rel=id href="#price" id="price"></a> Mimoriadne konkurenčné ceny

|                                                                                   | USD/milión slov |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Kliknite sem, ak chcete autorizovať a automaticky i18n.site knižnicu github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) a **získať bonus $50** .

Poznámka: Počet účtovateľných znakov = [počet unicode](https://en.wikipedia.org/wiki/Unicode) v zdrojovom súbore × počet jazykov v preklade

## Podpora Prekladu `YAML`

Nástroj prekladá iba hodnoty slovníka na `YAML` , nie kľúče slovníka.

Na základe prekladu `YAML` môžete jednoducho zostaviť medzinárodné riešenia pre rôzne programovacie jazyky.

## Podpora Konfigurácie Hlavičky Prekladu `HOGO`

Podporuje konfiguráciu hlavičky statického blogu typu [HOGO](https://github.com/gohugoio/hugo) a prekladá iba polia `title` , `summary` , `brief` a `description` .

## Neprekladajte Názvy Premenných

`Markdown` sa používa ako šablóna e-mailu, `YAML` sa používa ako konfigurácia jazykového súboru a budú existovať variabilné parametre (napríklad: bolo prijaté dobitie `${amount}` ).

Názvy premenných ako `${varname}` sa nebudú považovať za anglické preklady.

## Optimalizácia Prekladov Pre Čínu, Japonsko a Kóreu

### Pri Preklade Do Angličtiny Je Prvé Písmeno Názvu Automaticky Veľké.

Čína, Japonsko a Kórea nemajú veľké a malé písmená, ale zvykom v anglických názvoch je veľké prvé písmeno.

`i18` dokáže rozpoznať názov v `MarkDown` a pri preklade do jazyka, v ktorom sa rozlišujú malé a veľké písmená, automaticky zmení prvé písmeno na veľké.

Napríklad `为阅读体验而优化` sa preloží na `Optimized for Reading Experience` .

### Anglické Výrazy v Čínštine, Japončine, Kórejčine a Čínštine Sa Neprekladajú

Dokumenty z Číny, Japonska a Kórey často obsahujú veľa anglických výrazov.

Strojový preklad čínštiny, japončiny a kórejčiny sa stal neanglickým jazykom a výrazy sa často prekladajú spoločne, ako napríklad nasledujúca čínska veta:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Ak používate Google alebo DeepL, oba nesprávne prekladajú anglické výrazy, ktoré by mali zostať pôvodné (vezmite si napríklad japončinu a francúzštinu).

### Google Translate

Preložené `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japončiny :

![](//p.3ti.site/1720199391.avif)

Preložené `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` francúzštiny :

`Falcon` sa preloží ako `faucon` a `Llama` sa preloží ako `lama` . Ako vlastné podstatné mená by sa nemali prekladať.

![](//p.3ti.site/1720199451.avif)

### DeepL Preklad

Preložené `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japončiny :

![](//p.3ti.site/1720199550.avif)

DeepL Preklad vyššie uvedeného do francúzštiny (aj prepísanie vlastných mien a pridanie nepárnej `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Preklad Stránky i18n

Preklad `i18` rozpozná anglické výrazy v čínskych, japonských a kórejských dokumentoch a ponechá výrazy nedotknuté.

Napríklad výsledok japonského prekladu vyššie je:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Francúzsky preklad je:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Iba ak je medzi anglickým slovom a čínskym, japonským a kórejským textom medzera alebo ak je anglická dĺžka väčšia ako 1, slovo sa bude považovať za výraz.

Napríklad: `C罗` sa preloží ako `Cristiano Ronaldo` .

## Dá Sa Kombinovať S Viac Ako `i18n.site` Jazykmi Na Vytvorenie Webovej Stránky

`i18` je integrovaný do nástroja príkazového riadka na vytváranie viacjazyčných webových stránok [`i18n.site`](/i18n.site) .

Podrobnosti nájdete v dokumentácii [`i18n.site`](/i18n.site) .

## Kód Open Source

Klient je úplne open source a na strane servera je otvorený zdroj 90 [Kliknutím sem zobrazíte zdrojový kód](/i18n.site/c/src) .

Hľadáme dobrovoľníkov, ktorí by sa podieľali na vývoji open source kódu a korektúrach preložených textov.

Ak máte záujem, prosím [→ Kliknite sem, vyplňte svoj profil](https://ggl.link/i18n) a potom sa pridajte do [zoznamu adresátov](https://groups.google.com/u/2/g/i18n-site) pre komunikáciu.

## Zostať v Kontakte

<button onclick="mailsub()">Kliknutím na tento e-mail sa prihlásite na odber aktualizácií produktu</button> a <button onclick="webpush()">povolíte push prehliadača</button> . Upozorníme vás, keď budú aktualizácie produktu vykonané.

Vitajte aj na / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) účtoch [X.COM: @i18nSite](https://x.com/i18nSite)