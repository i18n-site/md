# Vlastnosti Produktu

`i18` je nástroj příkazového řádku pro překlad Markdown & Yaml

## Dokáže Dokonale Udržovat Formát Markdown

Podporuje překlad tabulek Markdown bez poškození formátu, nepřekládá slova v matematických vzorcích nebo odkazech.

Podporuje překlad Markdown in mixed HTML `<pre>` HTML v `MarkDown` a obsah v `<code>` tagy nejsou přeloženy

## Dokáže Rozpoznat Matematické Vzorce a Přeskakovat Překlad

Matematické vzorce jsou rozpoznány a překlad je přeskočen.

Jak psát matematické vzorce, viz [" Github O psaní matematických výrazů"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Schopnost Překládat Komentáře Ve Fragmentech Kódu

Vložený kód a úryvky kódu se nepřekládají, ale komentáře v kódu lze přeložit.

Komentáře k překladu musí uvádět : ` ```rust ` ` ``` `

V současné době podporuje `coffee` komentářů `toml` jazycích , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` `java` `js` `python` , `bash` , `php` [a dalších](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Pokud požadovaný programovací jazyk není k dispozici, [kontaktujte nás](https://groups.google.com/g/i18n-site) .

## Přívětivý Příkazový Řádek

Pro správu překladových dokumentů je k dispozici mnoho [těžkých nástrojů](https://www.capterra.com/translation-management-software) .

Pro programátory, kteří `git` , `vim` , `vscode` , použití těchto nástrojů k úpravě dokumentů a správě verzí nepochybně zvýší náklady na učení.

`KISS` ( `Keep It Simple, Stupid` ) Mezi věřícími v tento princip jsou řešení na podnikové úrovni synonymem těžkopádnosti, neefektivnosti a obtížného použití.

Překlad by měl být proveden zadáním příkazů a jeho dokončením jedním kliknutím. Neměly by existovat žádné složité závislosti na prostředí.

Nepřidávejte entity, pokud to není nutné.

## Žádná Úprava, Žádný Překlad

Existují také některé nástroje pro překlad příkazového řádku, například [translate-shell](https://github.com/soimort/translate-shell)

Nepodporují však identifikaci úprav souborů a pouze překládají upravené soubory za účelem snížení nákladů a zvýšení efektivity.

## Překlad Lze Upravit a Strojový Překlad Nepřepíše Stávající Úpravy.

Překlad je upravitelný.

Upravte původní text a znovu jej strojově přeložte, ruční úpravy překladu nebudou přepsány (pokud tento odstavec původního textu nebyl upraven).

## Vysoce Kvalitní Překlad Xindaya

Vyvinuli jsme novou generaci překladatelské technologie, která integruje technické výhody tradičních modelů strojového překladu a velkých jazykových modelů, aby byly překlady přesné, hladké a elegantní.

Slepé testy ukazují, že naše kvalita překladu je výrazně lepší ve srovnání s podobnými službami.

Abychom dosáhli stejné kvality, množství ručních úprav vyžadované Překladačem Google a `ChatGPT` je `2.67` krát, respektive `3.15` krát naše.

## <a rel=id href="#price" id="price"></a> Extrémně konkurenceschopné ceny

|                                                                                   | USD/milion slov |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonka](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Poznámka: Počet zúčtovatelných znaků = [počet unicode](https://en.wikipedia.org/wiki/Unicode) ve zdrojovém souboru × počet jazyků v překladu

## Podporujte Překlad `YAML`

Nástroj překládá pouze hodnoty slovníku v `YAML` , nikoli klíče slovníku.

Na `YAML` překladu můžete snadno vytvářet mezinárodní řešení pro různé programovací jazyky.

## Podpora Překladu Konfigurace `HOGO`

Podporuje konfiguraci záhlaví statického blogu typu [HOGO](https://github.com/gohugoio/hugo) , překládají se `summary` `description` `title`

## Nepřekládejte Názvy Proměnných

`Markdown` Použije se jako šablona e-mailu, `YAML` jako konfigurace jazykového souboru, budou zde proměnné parametry (například: bylo přijato dobití `${amount}` ).

`${varname}` typ názvu proměnné nebude považován za anglický překlad.

## Optimalizace Překladů Pro Čínu, Japonsko a Koreu

### Při Překladu Do Angličtiny Je První Písmeno Názvu Automaticky Velké.

Čína, Japonsko a Korea nemají velká ani malá písmena, ale anglické názvy obvykle začínají velkým prvním písmenem.

`i18` dokáže rozpoznat názvy v `MarkDown` a při překladu do jazyka, v němž se rozlišují velká a malá písmena.

Například `为阅读体验而优化` bude přeloženo jako `Optimized for Reading Experience` .

### Anglické Výrazy v Čínštině, Japonštině, Korejštině a Čínštině Se Nepřekládají

Dokumenty z Číny, Japonska a Koreje často obsahují mnoho anglických výrazů.

Strojový překlad čínštiny, japonštiny a korejštiny se stal neanglickým jazykem a termíny se často překládají společně, jako například následující čínská věta:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Pokud používáte Google nebo DeepL, oba nesprávně překládají anglické výrazy, které by měly zůstat původní (vezměte si jako příklad japonštinu a francouzštinu).

### Google Překladač

Přeloženo do `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Přeloženo do `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` se překládá jako `faucon` a `Llama` se překládá jako `lama` . Jako vlastní podstatná jména by se neměla překládat.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Překlad

Přeloženo do `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Překlad výše uvedeného do francouzštiny (také přepsání vlastních jmen a přidání lichých `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Překlad

Překlad `i18` rozpozná anglické výrazy v čínských, japonských a korejských dokumentech a ponechá tyto výrazy nedotčené.

Například výše uvedený japonský překlad je:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Francouzský překlad je:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Pouze pokud je mezi anglickým slovem a čínským, japonským a korejským textem mezera nebo je anglická délka větší než 1, bude slovo považováno za termín.

Například: `C罗` bude přeloženo jako `Cristiano Ronaldo` .

## Lze `i18n.site` Vícejazyčné Webové Stránky

`i18` Je integrován do nástroje příkazového řádku pro vytváření vícejazyčných webových stránek [`i18n.site`](/i18n.site) .

Podrobnosti naleznete v dokumentaci [`i18n.site`](/i18n.site)

## Kód Open Source

Klient je zcela open source a na straně serveru je 90 kódu open source. [Kliknutím sem zobrazíte zdrojový kód](/i18n.site/src) .

Hledáme dobrovolníky, kteří by se podíleli na vývoji open source kódu a korekturách přeložených textů.

Máte-li zájem, prosím [→ Klikněte sem, vyplňte svůj profil](https://ggl.link/i18n) a poté se připojte [k mailing listu](https://groups.google.com/u/2/g/i18n-site) pro komunikaci.

## Zůstat v Kontaktu

<button onclick="mailsub()">Kliknutím na tento e-mail se přihlaste k odběru aktualizací produktu</button> a <button onclick="webpush()">povolte push prohlížeče</button> . O provedení aktualizací produktu vás budeme informovat.

/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) naše sociální účty [X.COM: @i18nSite](https://x.com/i18nSite)
