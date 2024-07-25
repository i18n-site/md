# Produktaj Trajtoj

`i18` estas komandlinia ilo por traduki Markdown & Yaml

## Povas Perfekte Konservi La Formaton De Markdown

Subtenas tradukadon de Markdown-tabeloj sen damaĝi la formaton ne tradukas vortojn en matematikaj formuloj aŭ ligiloj;

Subtenas tradukon de Markdown en HTML `<pre>` HTML en kaj enhavo en `<code>` etikedoj ne estas tradukitaj `MarkDown`

## Kapablas Rekoni Matematikajn Formulojn Kaj Preterlasi Tradukon

Matematikaj formuloj estas rekonitaj kaj traduko estas preterlasita.

Por kiel skribi matematikajn formulojn, bonvolu raporti al [" Github Pri Skribo de Matematikaj Esprimoj "](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kapablo Traduki Komentojn en Kodaj Fragmentoj

Enlinia kodo kaj kodaj fragmentoj ne estas tradukitaj, sed komentoj en la kodo povas esti tradukitaj.

Tradukaj komentoj ` ```rust ` indiki la lingvon : ` ``` `

Nuntempe subtenas tradukon de komentoj `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` , `coffee` `python` , `bash` , `php` [kaj aliaj lingvoj](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Se la programlingvo, kiun vi bezonas, ne disponeblas, bonvolu [kontakti nin](https://groups.google.com/g/i18n-site) .

## Komandlinio Amika

Estas multaj [pezaj iloj](https://www.capterra.com/translation-management-software) haveblaj por administri tradukdokumentojn.

Por programistoj, kiuj konas `git` `vim` , `vscode` , uzi ĉi tiujn ilojn por redakti dokumentojn kaj administri versiojn sendube pliigos la lernkoston.

( `KISS` ) Inter kredantoj je la principo, entrepren-nivelaj solvoj estas sinonimoj de maloportunaj `Keep It Simple, Stupid` malefikaj kaj malfacile uzeblaj.

Tradukado devus esti farita per enigo de komandoj kaj kompletigante ĝin per unu klako Ne devus esti kompleksaj mediodependoj.

Ne aldonu entojn krom se necese.

## Neniu Modifo, Neniu Traduko

Estas ankaŭ kelkaj komandliniaj tradukiloj, kiel [translate-shell](https://github.com/soimort/translate-shell)

Tamen ili ne subtenas identigi dosierojn modifojn kaj nur tradukas modifitajn dosierojn por redukti kostojn kaj pliigi efikecon.

## La Traduko Povas Esti Redaktita, Kaj Maŝintradukado Ne Anstataŭigos Ekzistantajn Modifojn.

La traduko estas redaktebla.

Modifi la originalan tekston kaj maŝintraduku ĝin denove, la manaj modifoj al la traduko ne estos anstataŭitaj (se ĉi tiu alineo de la originala teksto ne estas modifita).

## La Altkvalita Traduko De Xindaya

Ni evoluigis novan generacion de tradukteknologio kiu kombinas la teknikajn avantaĝojn de tradiciaj maŝintradukaj modeloj kaj grandaj lingvomodeloj por fari tradukojn precizaj, glataj kaj elegantaj.

Blindaj testoj montras, ke nia tradukkvalito estas signife pli bona kompare kun similaj servoj.

Por atingi la saman `2.67` , la kvanto da mana `3.15` postulata de Google Translate kaj `ChatGPT`

## <a rel=id href="#price" id="price"></a> Ekstreme konkurenciva prezo

|                                                                                   | USD/miliono da vortoj |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Mikrosofto](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazono](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Guglo](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Noto: La nombro da faktureblaj signoj = [la nombro da unicode](https://en.wikipedia.org/wiki/Unicode) en la fontdosiero × la nombro da lingvoj en la traduko

## Subtenu Tradukon `YAML`

La ilo tradukas nur la vortarajn valorojn en `YAML` ne la vortarajn ŝlosilojn.

Surbaze de `YAML` Tradukado, vi povas facile konstrui internaciajn solvojn por diversaj programlingvoj.

## Subtenu Tradukon `HOGO`

Subtenas la kapan agordon de [HOGO](https://github.com/gohugoio/hugo) statika blogo, nur la `title` , `summary` kaj `description` estas tradukitaj.

## Ne Traduku Variablo-Nomojn

Uzite kiel retpoŝta ŝablono, `YAML` kiel lingvodosier `Markdown` agordo, estos variaj parametroj (ekzemple: reŝargo `${amount}` estis ricevita).

Ĉi tiu speco de variablo nomo ne estos rigardata kiel angla traduko `${varname}`

## Optimumigo De Tradukado Por Ĉinio, Japanio Kaj Koreio

### Tradukita en La Anglan, La Unua Litero De La Titolo Estas Aŭtomate Majuskla.

Ĉinio, Japanio kaj Koreio ne havas majusklojn aŭ minusklojn, sed anglaj titoloj ĝenerale majuskligis la unuan literon.

`i18` rekoni titolojn en `MarkDown` , kaj aŭtomate majuskligis la unuan literon kiam oni tradukas al majuskla lingvo.

Ekzemple `为阅读体验而优化` estos tradukita kiel `Optimized for Reading Experience` .

### Anglaj Terminoj en La Ĉina, Japana, Korea Kaj Ĉina Ne Estas Tradukitaj

Dokumentoj el Ĉinio, Japanio kaj Koreio ofte enhavas multajn anglajn terminojn.

Maŝina tradukado de ĉina, japana kaj korea lingvoj fariĝis ne-angla lingvo, kaj terminoj ofte estas tradukitaj kune, kiel la jena ĉina frazo:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Se vi uzas Guglon aŭ DeepL, ili ambaŭ malĝuste tradukas anglajn terminojn, kiuj devus resti originalaj (prenu la japanan kaj la francan kiel ekzemplojn).

### Google Translate

Tradukita en `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Tradukita en `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` estas tradukita kiel `faucon` kaj `Llama` estas tradukita kiel `lama` . Kiel propraj nomoj, ili ne estu tradukitaj.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Traduko

Tradukita en `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL de ĉi-supra en la francan (ankaŭ reverkante la proprajn nomojn kaj aldonante la strangan `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Traduko

`i18` traduko de anglaj terminoj rekonos en ĉinaj, japanaj kaj koreaj dokumentoj kaj lasos la terminojn nerompitaj.

Ekzemple, la japana tradukrezulto supre estas:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

La franca traduko estas:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Nur kiam estas spaco inter la angla vorto kaj la ĉina, japana kaj korea teksto aŭ la angla longo estas pli granda ol 1, la vorto estos rigardata kiel termino.

Ekzemple: `C罗` estos tradukita kiel `Cristiano Ronaldo` .

## Povas Esti Kombinita `i18n.site`

Estas integrita en la komandlinia ilo por plurlingva retejo-konstruado [`i18n.site`](/i18n.site) `i18`

Vidu la dokumentadon de [`i18n.site`](/i18n.site)

## Kodo Malferma Fonto

La kliento estas tute malferma fonto, kaj la 90 % de la kodo estas malfermfonta. [Klaku ĉi tie por vidi la fontkodon](/i18n.site/src) .

Ni serĉas volontulojn por partopreni en la evoluo de malfermfonta kodo kaj provlegado de tradukitaj tekstoj.

Se vi interesiĝas, bonvolu [→ Klaku ĉi tie por plenigi vian profilon](https://ggl.link/i18n) kaj poste aliĝi [al la dissendolisto](https://groups.google.com/u/2/g/i18n-site) por komunikado.

## Restu en Kontakto

Bonvolu <button onclick="mailsub()">klaki ĉi tiun retpoŝton por aboni produktajn ĝisdatigojn</button> kaj <button onclick="webpush()">ebligi retumilon push</button> Ni sciigos vin kiam produktaj ĝisdatigoj estos faritaj.

Ankaŭ bonvenon sekvi / [X.COM: @i18nSite](https://x.com/i18nSite) [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)
