# Vlastnosti Produktu

`i18` je nástroj příkazového řádku pro překlad Markdown & Yaml

## Dokáže Dokonale Udržovat Formát Markdown

Podporuje překlad tabulek Markdown bez poškození formátu, nepřekládá slova v matematických vzorcích nebo odkazech.

Podporuje překlad smíšeného HTML Markdown , obsah ve značkách `<pre>` a `<code>` vložených do HTML `MarkDown` není přeložen

## Dokáže Rozpoznat Matematické Vzorce a Přeskakovat Překlad

Matematické vzorce jsou rozpoznány a překlad je přeskočen.

Jak psát matematické vzorce, viz [" Github O psaní matematických výrazů"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Schopnost Překládat Komentáře Ve Fragmentech Kódu

Vložený kód a úryvky kódu se nepřekládají, ale komentáře v kódu lze přeložit.

Komentáře ` ```rust ` překladu musí uvádět jazyk po ` ``` ` , například : .

V současné době podporuje překlad anotací v `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [a dalších jazycích](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Pokud chcete přeložit všechny neanglické znaky v kódu, označte segment kódu ` ```i18n ` .

Pokud požadovaný programovací jazyk není k dispozici, [kontaktujte nás](https://groups.google.com/g/i18n-site) .

## Přívětivý Příkazový Řádek

Pro správu překladových dokumentů je k dispozici mnoho [těžkých nástrojů](https://www.capterra.com/translation-management-software) .

Pro programátory, kteří jsou obeznámeni s `git` , `vim` a `vscode` , použití těchto nástrojů k úpravě dokumentů a správě verzí nepochybně zvýší náklady na učení.

`KISS` ( `Keep It Simple, Stupid` ) Mezi zastánci zásad jsou řešení na podnikové úrovni synonymem toho, že jsou těžkopádná, neefektivní a obtížně použitelná.

Překlad by měl být proveden zadáním příkazů a jeho dokončením jedním kliknutím. Neměly by existovat žádné složité závislosti na prostředí.

Nepřidávejte entity, pokud to není nutné.

## Žádná Úprava, Žádný Překlad

Existují také některé nástroje pro překlad příkazového řádku, například [translate-shell](https://github.com/soimort/translate-shell)

Nepodporují však identifikaci úprav souborů a pouze překládají upravené soubory za účelem snížení nákladů a zvýšení efektivity.

## Překlad Lze Upravit a Strojový Překlad Nepřepíše Stávající Úpravy.

Překlad je upravitelný.

Upravte původní text a znovu jej strojově přeložte, ruční úpravy překladu nebudou přepsány (pokud tento odstavec původního textu nebyl upraven).

## Nejkvalitnější Strojový Překlad

Vyvinuli jsme novou generaci překladatelské technologie, která kombinuje technické výhody tradičních modelů strojového překladu a velkých jazykových modelů, aby překlady byly přesné, hladké a elegantní.

Slepé testy ukazují, že naše kvalita překladu je výrazně lepší ve srovnání s podobnými službami.

Abychom dosáhli stejné kvality, množství ručních úprav vyžadovaných Překladačem Google a `ChatGPT` je `2.67` a `3.15` větší než u nás.

## <a rel=id href="#price" id="price"></a> Extrémně konkurenční ceny

|                                                                                   | USD/milion slov |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazonka](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klikněte zde pro autorizaci a automatické i18n.site knihovny github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) a **získejte bonus $50** .

Poznámka: Počet zúčtovatelných znaků = [počet unicode](https://en.wikipedia.org/wiki/Unicode) ve zdrojovém souboru × počet jazyků v překladu

## Podpora Překladu `YAML`

Nástroj překládá pouze hodnoty slovníku v `YAML` , nikoli klíče slovníku.

Na základě překladu `YAML` můžete snadno vytvářet mezinárodní řešení pro různé programovací jazyky.

## Podpora Konfigurace Záhlaví Překladu `HOGO`

Podporuje konfiguraci záhlaví statického blogu typu [HOGO](https://github.com/gohugoio/hugo) a překládá pouze pole `title` , `summary` , `brief` a `description` .

## Nepřekládejte Názvy Proměnných

`Markdown` se používá jako šablona e-mailu, `YAML` se používá jako konfigurace jazykového souboru a budou zde proměnné parametry (například: dobití `${amount}` bylo přijato).

Názvy proměnných jako `${varname}` nebudou považovány za anglické překlady.

## Optimalizace Překladů Pro Čínu, Japonsko a Koreu

### Při Překladu Do Angličtiny Je První Písmeno Názvu Automaticky Velké.

Čína, Japonsko a Korea nemají velká a malá písmena, ale konvencí pro anglické názvy je velké první písmeno.

`i18` dokáže rozpoznat název v `MarkDown` a při překladu do jazyka, v němž se rozlišují velká a malá písmena, automaticky změní první písmeno na velké.

Například `为阅读体验而优化` bude přeložena na `Optimized for Reading Experience` .

### Anglické Výrazy v Čínštině, Japonštině, Korejštině a Čínštině Se Nepřekládají

Dokumenty z Číny, Japonska a Koreje často obsahují mnoho anglických výrazů.

Strojový překlad čínštiny, japonštiny a korejštiny se stal neanglickým jazykem a termíny se často překládají společně, jako například následující čínská věta:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Pokud používáte Google nebo DeepL, oba nesprávně překládají anglické výrazy, které by měly zůstat původní (vezměte si jako příklad japonštinu a francouzštinu).

### Překladač Google

Přeloženo `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japonštiny :

![](//p.3ti.site/1720199391.avif)

Přeloženo `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` francouzštiny :

`Falcon` je přeloženo jako `faucon` a `Llama` je přeloženo jako `lama` . Jako vlastní podstatná jména by se neměla překládat.

![](//p.3ti.site/1720199451.avif)

### DeepL Překlad

Přeloženo `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japonštiny :

![](//p.3ti.site/1720199550.avif)

DeepL Překlad výše uvedeného do francouzštiny (také přepsání vlastních jmen a přidání liché `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Překlad

Překlad `i18` rozpozná anglické výrazy v čínských, japonských a korejských dokumentech a ponechá výrazy nedotčené.

Například výše uvedený japonský překlad je:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Francouzský překlad je:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Pouze pokud je mezi anglickým slovem a čínským, japonským a korejským textem mezera nebo je anglická délka větší než 1, bude slovo považováno za termín.

Například: `C罗` bude přeloženo jako `Cristiano Ronaldo` .

## Lze Kombinovat S Více Než `i18n.site` Jazyky Pro Vytvoření Webu

`i18` je integrován do nástroje příkazového řádku pro vytváření vícejazyčných webových stránek [`i18n.site`](/i18n.site) .

Podrobnosti naleznete v dokumentaci [`i18n.site`](/i18n.site) .

## Kód Open Source

Klient je zcela open source a na straně 90 je % kódu open source. [Kliknutím sem zobrazíte zdrojový kód](/i18n.site/c/src) .

Hledáme dobrovolníky, kteří by se podíleli na vývoji open source kódu a korekturách přeložených textů.

Máte-li zájem, prosím [→ Klikněte sem, vyplňte svůj profil](https://ggl.link/i18n) a poté se připojte [k mailing listu](https://groups.google.com/u/2/g/i18n-site) pro komunikaci.

## Zůstat v Kontaktu

<button onclick="mailsub()">Kliknutím na tento e-mail se přihlaste k odběru aktualizací produktu</button> a <button onclick="webpush()">povolte push prohlížeče</button> . O provedení aktualizací produktu vás budeme informovat.

/ vítáme naše sociální [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) [X.COM: @i18nSite](https://x.com/i18nSite)