# Karakteristikat E Produktit

`i18` është mjeti i linjës së komandës për përkthim Markdown & Yaml

## Mund Të Ruajë Në Mënyrë Të Përsosur Formatin E Markdown

Mbështet përkthimin e tabelave Markdown pa dëmtuar formatin nuk përkthen fjalë në formula ose lidhje matematikore.

Mbështet Markdown HTML përmbajtja në etiketat `<pre>` dhe `<code>` të ngulitura në `MarkDown` HTML nuk përkthehet

## Mund Të Njohë Formulat Matematikore Dhe Të Kapërcejë Përkthimin

Formulat matematikore njihen dhe përkthimi anashkalohet.

Për mënyrën e shkrimit të formulave matematikore, ju lutemi referojuni [" Github Rreth shkrimit të shprehjeve matematikore"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Aftësia Për Të Përkthyer Komentet Në Copa Kodi

Kodi i brendshëm dhe copat e kodit nuk përkthehen, por komentet në kod mund të përkthehen.

Komentet e përkthimit duhet të tregojnë gjuhën pas ` ``` ` , si : ` ```rust ` .

Aktualisht, ai mbështet përkthimin e shënimeve në `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [dhe gjuhë të tjera](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Nëse dëshironi të përktheni të gjitha karakteret jo anglisht në kod, shënoni segmentin e kodit me ` ```i18n ` .

Nëse gjuha e programimit që ju nevojitet nuk është e disponueshme, ju lutemi [na kontaktoni](https://groups.google.com/g/i18n-site) .

## Linja E Komandës Miqësore

Ka shumë [mjete me peshë të rëndë](https://www.capterra.com/translation-management-software) në dispozicion për menaxhimin e dokumenteve të përkthimit.

Për programuesit që janë të njohur me `git` , `vim` dhe `vscode` , përdorimi i këtyre mjeteve për të redaktuar dokumentet dhe për të menaxhuar versionet padyshim që do të rrisë koston e mësimit.

`KISS` ( `Keep It Simple, Stupid` ) Ndër besimtarët parimorë, zgjidhjet e nivelit të ndërmarrjes janë sinonim i të qenit të rëndë, joefikas dhe të vështirë për t'u përdorur.

Përkthimi duhet të bëhet duke futur komanda dhe duke e plotësuar atë me një klikim Nuk duhet të ketë varësi komplekse mjedisore.

Mos shtoni entitete nëse nuk është e nevojshme.

## Asnjë Modifikim, Pa Përkthim

Ekzistojnë gjithashtu disa mjete përkthimi të linjës së komandës, si [translate-shell](https://github.com/soimort/translate-shell)

Megjithatë, ata nuk mbështesin identifikimin e modifikimeve të skedarëve dhe përkthen vetëm skedarë të modifikuar për të ulur kostot dhe për të rritur efikasitetin.

## Përkthimi Mund Të Modifikohet Dhe Përkthimi Me Makinë Nuk Do Të Mbishkruaj Modifikimet Ekzistuese.

Përkthimi është i modifikueshëm.

Ndryshoni tekstin origjinal dhe përkthejeni përsëri me makinë, modifikimet manuale të përkthimit nuk do të mbishkruhen (nëse ky paragraf i tekstit origjinal nuk është modifikuar).

## Përkthimi Makineri I Cilësisë Më Të Mirë

Ne kemi zhvilluar një gjeneratë të re të teknologjisë së përkthimit që kombinon avantazhet teknike të modeleve tradicionale të përkthimit me makinë dhe modeleve të mëdha gjuhësore për t'i bërë përkthimet të sakta, të buta dhe elegante.

Testet e verbër tregojnë se cilësia jonë e përkthimit është dukshëm më e mirë në krahasim me shërbime të ngjashme.

Për të arritur të njëjtën cilësi, sasia e redaktimit manual që kërkohet nga Google Translate dhe `ChatGPT` është përkatësisht `2.67` herë dhe `3.15` herë më e madhe se e jona.

## <a rel=id href="#price" id="price"></a> Çmime jashtëzakonisht konkurruese

|                                                                                   | USD/milion fjalë |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Klikoni këtu për të autorizuar dhe ndjekur i18n.site Bibliotekën github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) dhe **për të marrë bonus $50** .

Shënim: Numri i karaktereve të faturueshme = [numri i unicode](https://en.wikipedia.org/wiki/Unicode) në skedarin burimor × numri i gjuhëve në përkthim

## Mbështet Përkthimin `YAML`

Mjeti përkthen vetëm vlerat e fjalorit në `YAML` , jo çelësat e fjalorit.

Bazuar në përkthimin `YAML` , mund të ndërtoni lehtësisht zgjidhje ndërkombëtare për gjuhë të ndryshme programimi.

## Mbështet Konfigurimin E Titullit Të Përkthimit `HOGO`

Mbështet konfigurimin e kokës së blogut të tipit [HOGO](https://github.com/gohugoio/hugo) dhe përkthen vetëm fushat `title` , `summary` , `brief` dhe `description` .

## Mos I Përktheni Emrat E Variablave

`Markdown` përdoret si shabllon emaili, `YAML` përdoret si konfigurim i skedarit të gjuhës dhe do të ketë parametra të ndryshueshëm (për shembull: është marrë rimbushja `${amount}` ).

Emrat e variablave si `${varname}` nuk do të konsiderohen si përkthime në anglisht.

## Optimizimi I Përkthimit Për Kinën, Japoninë Dhe Korenë

### Kur Përkthehet Në Anglisht, Shkronja E Parë E Titullit Shkruhet Automatikisht.

Kina, Japonia dhe Koreja nuk kanë shkronja të mëdha dhe të vogla, por konventa për titujt në anglisht është që shkronja e parë të bëhet me shkronja të mëdha.

`i18` mund të njohë titullin në `MarkDown` dhe do të shkrojë automatikisht shkronjën e parë kur përkthehet në një gjuhë të ndjeshme ndaj shkronjave.

Për shembull, `为阅读体验而优化` do të përkthehet në `Optimized for Reading Experience` .

### Termat Anglisht Në Gjuhën Kineze, Japoneze, Koreane Dhe Kineze Nuk Përkthehen

Dokumentet nga Kina, Japonia dhe Koreja shpesh përmbajnë shumë terma anglisht.

Përkthimi makinerik i gjuhëve kineze, japoneze dhe koreane është bërë një gjuhë jo-anglisht, dhe termat shpesh përkthehen së bashku, siç është fjalia e mëposhtme kineze:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Nëse përdorni Google ose DeepL, ata të dy përkthejnë gabimisht termat anglezë që duhet të mbeten origjinale (merrni si shembuj japonisht dhe frëngjisht).

### Google Translate

Përkthyer `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japonisht :

![](//p.3ti.site/1720199391.avif)

Përkthyer `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` frëngjisht :

`Falcon` përkthehet si `faucon` dhe `Llama` përkthehet si `lama` . Si emra të përveçëm, ato nuk duhet të përkthehen.

![](//p.3ti.site/1720199451.avif)

### Përkthimi I Thellë

Përkthyer `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japonisht :

![](//p.3ti.site/1720199550.avif)

DeepL i sa më sipër në frëngjisht (duke rishkruar edhe emrat e duhur dhe duke shtuar tek `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.përkthimi I Faqes

Përkthimi i `i18` do të njohë termat anglisht në dokumentet kineze, japoneze dhe koreane dhe do t'i lërë të paprekura termat.

Për shembull, rezultati i përkthimit japonez të mësipërm është:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Përkthimi në frëngjisht është:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Vetëm kur ka një hapësirë midis fjalës angleze dhe tekstit kinez, japonez dhe korean ose gjatësia në anglisht është më e madhe se 1, fjala do të konsiderohet si një term.

Për shembull: `C罗` do të përkthehet si `Cristiano Ronaldo` .

## Mund Të Kombinohet Me Më Shumë Se `i18n.site` Gjuhë Për Të Ndërtuar Një Faqe Interneti

`i18` është integruar në mjetin e linjës së komandës [`i18n.site`](/i18n.site) të ndërtimit të uebsajtit shumëgjuhësh.

Shikoni dokumentacionin e [`i18n.site`](/i18n.site) për detaje.

## Kodi Me Burim Të Hapur

Klienti është plotësisht me burim të hapur, dhe ana e 90 është me burim [të](/i18n.site/c/src) hapur.

Ne po kërkojmë vullnetarë për të marrë pjesë në zhvillimin e kodit me burim të hapur dhe korrigjimin e teksteve të përkthyera.

Nëse jeni të interesuar, ju lutemi [→ Klikoni këtu për të plotësuar profilin tuaj](https://ggl.link/i18n) dhe më pas bashkohuni [në listën e postimeve](https://groups.google.com/u/2/g/i18n-site) për komunikim.

## Mbani Kontakte

Ju lutemi <button onclick="mailsub()">, klikoni këtë email për t'u abonuar në përditësimet e produktit</button> dhe <button onclick="webpush()">për të aktivizuar shtytjen e shfletuesit</button> Ne do t'ju njoftojmë kur të bëhen përditësimet e produktit.

Gjithashtu, ju [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) të ndiqni llogaritë tona / [X.COM: @i18nSite](https://x.com/i18nSite)