# Karakteristikat E Produktit

`i18` një mjet i linjës komanduese për përkthim Markdown & Yaml

## Mund Të Ruajë Në Mënyrë Të Përsosur Formatin E Markdown

Mbështet përkthimin e tabelave Markdown pa dëmtuar formatin nuk përkthen fjalë në formula ose lidhje matematikore.

Mbështet përkthimin e Markdown në të HTML `<pre>` HTML `MarkDown` dhe përmbajtja në etiketat `<code>` nuk përkthehet

## Mund Të Njohë Formulat Matematikore Dhe Të Kapërcejë Përkthimin

Formulat matematikore njihen dhe përkthimi anashkalohet.

Për mënyrën e shkrimit të formulave matematikore, ju lutemi referojuni [" Github Rreth shkrimit të shprehjeve matematikore"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Aftësia Për Të Përkthyer Komentet Në Copa Kodi

Kodi i brendshëm dhe copat e kodit nuk përkthehen, por komentet në kod mund të përkthehen.

Komentet e përkthimit duhet të tregojnë gjuhën pas ` ``` ` ` ```rust ` :

Aktualisht mbështet përkthimin e komenteve `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` , `python` , `bash` , `php` [dhe gjuhë të tjera](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Nëse gjuha e programimit që ju nevojitet nuk është e disponueshme, ju lutemi [na kontaktoni](https://groups.google.com/g/i18n-site) .

## Linja E Komandës Miqësore

Ka shumë [mjete me peshë të rëndë](https://www.capterra.com/translation-management-software) në dispozicion për menaxhimin e dokumenteve të përkthimit.

Për programuesit që janë të njohur me `git` `vim` , `vscode` , përdorimi i këtyre mjeteve për të redaktuar dokumentet dhe për të menaxhuar versionet do të rrisë padyshim koston e të mësuarit.

( `Keep It Simple, Stupid` ) Ndër besimtarët në parim, zgjidhjet e nivelit të ndërmarrjes janë sinonim i të qenit i rëndë, joefikas dhe i vështirë për `KISS` përdorur.

Përkthimi duhet të bëhet duke futur komanda dhe duke e plotësuar me një klikim Nuk duhet të ketë varësi komplekse mjedisore.

Mos shtoni entitete nëse nuk është e nevojshme.

## Asnjë Modifikim, Pa Përkthim

Ekzistojnë gjithashtu disa mjete përkthimi të linjës së komandës, si [translate-shell](https://github.com/soimort/translate-shell)

Megjithatë, ata nuk mbështesin identifikimin e modifikimeve të skedarëve dhe përkthejnë vetëm skedarë të modifikuar për të ulur kostot dhe për të rritur efikasitetin.

## Përkthimi Mund Të Modifikohet Dhe Përkthimi Me Makinë Nuk Do Të Mbishkruaj Modifikimet Ekzistuese.

Përkthimi është i modifikueshëm.

Ndryshoni tekstin origjinal dhe përkthejeni përsëri me makinë, modifikimet manuale të përkthimit nuk do të mbishkruhen (nëse ky paragraf i tekstit origjinal nuk është modifikuar).

## Përkthimi Me Cilësi Të Lartë I Xindaya

Ne kemi zhvilluar një gjeneratë të re të teknologjisë së përkthimit që kombinon avantazhet teknike të modeleve tradicionale të përkthimit me makinë dhe modeleve të mëdha gjuhësore për t'i bërë përkthimet të sakta, të buta dhe elegante.

Testet e verbër tregojnë se cilësia jonë e përkthimit është dukshëm më e mirë në krahasim me shërbime të ngjashme.

Për të arritur të njëjtën cilësi, sasia `3.15` redaktimit manual që kërkohet nga Google `2.67` dhe `ChatGPT`

## <a rel=id href="#price" id="price"></a> Çmime jashtëzakonisht konkurruese

|                                                                                   | USD/milion fjalë |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Shënim: Numri i karaktereve të faturueshme = [numri i unicode](https://en.wikipedia.org/wiki/Unicode) në skedarin burimor × numri i gjuhëve në përkthim

## Mbështet Përkthimin `YAML`

Mjeti përkthen vetëm vlerat e fjalorit në `YAML` jo çelësat e fjalorit.

Bazuar `YAML` Translation, ju mund të ndërtoni lehtësisht zgjidhje ndërkombëtare për gjuhë të ndryshme programimi.

## `HOGO` Përkthimin Konfigurimin E Kokës

Mbështet konfigurimin e kokës së blogut të tipit [HOGO](https://github.com/gohugoio/hugo) , `summary` `description` `title`

## Mos I Përktheni Emrat E Variablave

`Markdown` si një shabllon emaili, `YAML` si një konfigurim i skedarit gjuhësor, do të ketë parametra të ndryshueshëm (për shembull: rimbushja `${amount}` është marrë).

Ky lloj emri variabli nuk do të konsiderohet si përkthim në anglisht `${varname}`

## Optimizimi I Përkthimit Për Kinën, Japoninë Dhe Korenë

### Kur Përkthehet Në Anglisht, Shkronja E Parë E Titullit Shkruhet Automatikisht.

Kina, Japonia dhe Koreja nuk kanë shkronja të mëdha ose të vogla, por titujt në anglisht në përgjithësi e kanë shkronjën e parë.

`i18` mund të njohë titujt në `MarkDown` , dhe do të shkrojë automatikisht shkronjën e parë kur përkthehet në një gjuhë të ndjeshme ndaj shkronjave.

Për shembull `为阅读体验而优化` do të përkthehet si `Optimized for Reading Experience` .

### Termat Anglisht Në Gjuhën Kineze, Japoneze, Koreane Dhe Kineze Nuk Përkthehen

Dokumentet nga Kina, Japonia dhe Koreja shpesh përmbajnë shumë terma anglisht.

Përkthimi makinerik i gjuhëve kineze, japoneze dhe koreane është bërë një gjuhë jo-anglisht, dhe termat shpesh përkthehen së bashku, siç është fjalia e mëposhtme kineze:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Nëse përdorni Google ose DeepL, ata të dy përkthejnë gabimisht termat anglezë që duhet të mbeten origjinale (merrni si shembuj japonisht dhe frëngjisht).

### Google Translate

Përkthyer në `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Përkthyer në `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` përkthehet si `faucon` dhe `Llama` përkthehet si `lama` . Si emra të përveçëm, ata nuk duhet të përkthehen.

<img alt="" src="//p.3ti.site/1720199451.avif">

### Përkthimi I Thellë

Përkthyer në `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL i sa më sipër në frëngjisht (duke rishkruar edhe emrat e duhur dhe duke shtuar tek `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.përkthimi I Faqes

`i18`

Për shembull, rezultati i përkthimit japonez të mësipërm është:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Përkthimi në frëngjisht është:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Vetëm kur ka një hapësirë midis fjalës angleze dhe tekstit kinez, japonez dhe korean ose gjatësia në anglisht është më e madhe se 1, fjala do të konsiderohet si një term.

Për shembull `C罗` do të përkthehet si `Cristiano Ronaldo` .

## Mund Të `i18n.site` Ndërtimi Shumëgjuhësh I Faqes Në Internet

`i18` integruar në mjetin e linjës së komandës për ndërtimin e uebsajtit shumëgjuhësh [`i18n.site`](/i18n.site) .

Shikoni dokumentacionin e [`i18n.site`](/i18n.site)

## Kodi Me Burim Të Hapur

Klienti është plotësisht me burim të hapur, dhe ana e serverit është [me](/i18n.site/src) burim të hapur 90

Ne po kërkojmë vullnetarë për të marrë pjesë në zhvillimin e kodit me burim të hapur dhe korrigjimin e teksteve të përkthyera.

Nëse jeni të interesuar, ju lutemi [→ Klikoni këtu për të plotësuar profilin tuaj](https://ggl.link/i18n) dhe më pas bashkohuni [në listën e postimeve](https://groups.google.com/u/2/g/i18n-site) për komunikim.

## Mbani Kontakte

Ju lutemi <button onclick="mailsub()">, klikoni këtë email për t'u abonuar në përditësimet e produktit</button> dhe <button onclick="webpush()">për të aktivizuar shtytjen e shfletuesit</button> Ne do t'ju njoftojmë kur të bëhen përditësimet e produktit.

[i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) , / mirëpresim të ndiqni llogaritë tona sociale [X.COM: @i18nSite](https://x.com/i18nSite)
