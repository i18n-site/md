# Nodweddion Cynnyrch

Mae `i18` yn offeryn llinell orchymyn ar gyfer cyfieithu Markdown & Yaml

## Yn Gallu Cynnal Fformat Markdown Yn Berffaith

Yn cefnogi cyfieithu tablau Markdown heb niweidio'r fformat; nid yw'n cyfieithu geiriau mewn fformiwlâu neu ddolenni mathemategol.

Yn cefnogi cyfieithiad o Markdown mewn cymysg HTML `<pre>` `<code>` HTML yn `MarkDown`

## Yn Gallu Adnabod Fformiwlâu Mathemategol a Hepgor Cyfieithu

Mae fformiwlâu mathemategol yn cael eu hadnabod a chyfieithiad yn cael ei hepgor.

Am sut i ysgrifennu fformiwlâu mathemategol, cyfeiriwch at [" Github Am Ysgrifennu Mynegiadau Mathemategol "](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Y Gallu I Gyfieithu Sylwadau Mewn Pytiau Cod

Nid yw pytiau cod a chod mewnol yn cael eu cyfieithu, ond gellir cyfieithu sylwadau yn y cod.

Mae angen i sylwadau cyfieithu nodi'r iaith ar ôl ` ``` ` , ` ```rust ` :

Ar hyn o bryd yn cefnogi cyfieithu sylwadau `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` , `python` , `bash` , `php` [ac ieithoedd eraill](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Os nad yw'r iaith raglennu sydd ei hangen arnoch ar gael, [cysylltwch â ni](https://groups.google.com/g/i18n-site) .

## Cyfeillgar I'r Llinell Orchymyn

Mae llawer o [offer pwysau trwm](https://www.capterra.com/translation-management-software) ar gael ar gyfer rheoli dogfennau cyfieithu.

Ar gyfer rhaglenwyr sy'n gyfarwydd â `git` , `vim` , `vscode` , bydd defnyddio'r offer hyn i olygu dogfennau a rheoli fersiynau yn ddi-os yn cynyddu'r gost dysgu.

( `Keep It Simple, Stupid` ) Ymhlith credinwyr yn yr egwyddor, mae datrysiadau lefel menter yn gyfystyr â bod yn feichus, yn aneffeithlon ac yn anodd `KISS` defnyddio.

Dylid cyfieithu trwy fewnbynnu gorchmynion a'i gwblhau gydag un clic. Ni ddylai fod unrhyw ddibyniaethau amgylchedd cymhleth.

Peidiwch ag ychwanegu endidau oni bai bod angen.

## Dim Addasiad, Dim Cyfieithiad

Mae yna hefyd rai offer cyfieithu llinell orchymyn, fel [translate-shell](https://github.com/soimort/translate-shell)

Fodd bynnag, nid ydynt yn cefnogi nodi addasiadau ffeil a dim ond er mwyn lleihau costau a chynyddu effeithlonrwydd y maent yn cyfieithu ffeiliau wedi'u haddasu.

## Gellir Golygu'r Cyfieithiad, Ac Ni Fydd Cyfieithu Peirianyddol Yn Trosysgrifo'r Addasiadau Presennol.

Mae modd golygu'r cyfieithiad.

Addaswch y testun gwreiddiol a'i gyfieithu â pheiriant eto, ni fydd yr addasiadau â llaw i'r cyfieithiad yn cael eu trosysgrifo (os nad yw'r paragraff hwn o'r testun gwreiddiol wedi'i addasu).

## Cyfieithiad O Ansawdd Uchel Xindaya

Rydym wedi datblygu cenhedlaeth newydd o dechnoleg cyfieithu sy'n cyfuno manteision technegol modelau cyfieithu peirianyddol traddodiadol a modelau iaith mawr i wneud cyfieithiadau yn gywir, llyfn a chain.

Mae profion dall yn dangos bod ansawdd ein cyfieithu yn sylweddol well o gymharu â gwasanaethau tebyg.

Er mwyn cyflawni'r un ansawdd, mae angen golygu mwy `2.67` `3.15` ar Google Translate a `ChatGPT`

## <a rel=id href="#price" id="price"></a> Prisiau hynod gystadleuol

|                                                                                   | USD/miliwn o eiriau |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Nodyn: Nifer y nodau y gellir eu bilio = [nifer y unicode](https://en.wikipedia.org/wiki/Unicode) yn y ffeil ffynhonnell × nifer yr ieithoedd yn y cyfieithiad

## Cefnogwch Gyfieithu `YAML`

Mae'r teclyn ond yn cyfieithu gwerthoedd y geiriadur yn `YAML` , nid bysellau'r geiriadur.

Yn seiliedig ar `YAML` Cyfieithu, gallwch yn hawdd adeiladu atebion rhyngwladol ar gyfer ieithoedd rhaglennu amrywiol.

## Cefnogi Cyfluniad Pennawd `HOGO`

Yn cefnogi cyfluniad `description` `summary` statig `title` [HOGO](https://github.com/gohugoio/hugo)

## Peidiwch Â Chyfieithu Enwau Newidyn

Yn cael ei ddefnyddio fel templed e-bost, `YAML` fel ffurfweddiad ffeil iaith `Markdown` bydd paramedrau amrywiol (er enghraifft: mae ad-daliad `${amount}` wedi'i dderbyn).

`${varname}` fydd y math hwn o enw newidyn yn cael ei ystyried yn gyfieithiad Saesneg.

## Optimeiddio Cyfieithu Ar Gyfer Tsieina, Japan a Korea

### Pan Gaiff Ei Chyfieithu I'r Saesneg, Caiff Llythyren Gyntaf Y Teitl Ei Chyfalafu'n Awtomatig.

Nid oes gan Tsieina, Japan a Korea lythrennau mawr na llythrennau bach, ond mae teitlau Saesneg yn gyffredinol yn priflythrennu'r llythyren gyntaf.

`i18` yn gallu adnabod teitlau yn `MarkDown` , a bydd yn priflythrennu'r llythyren gyntaf yn awtomatig wrth gyfieithu i iaith sy'n sensitif i lythrennau.

Er `为阅读体验而优化` caiff ei gyfieithu fel `Optimized for Reading Experience` .

### Nid Yw Termau Saesneg Mewn Tsieinëeg, Japaneaidd, Corëeg a Tsieinëeg Yn Cael Eu Cyfieithu

Mae dogfennau o Tsieina, Japan a Korea yn aml yn cynnwys llawer o dermau Saesneg.

Mae cyfieithu peirianyddol o ieithoedd Tsieinëeg, Japaneaidd a Corea wedi dod yn iaith nad yw'n Saesneg, ac mae termau'n aml yn cael eu cyfieithu gyda'i gilydd, fel y frawddeg Tsieineaidd ganlynol:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Os ydych chi'n defnyddio Google neu DeepL, mae'r ddau ohonyn nhw'n cyfieithu'n anghywir dermau Saesneg a ddylai aros yn wreiddiol (cymerwch Japaneaidd a Ffrangeg fel enghreifftiau).

### Google Cyfieithu

Wedi'i gyfieithu i `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Wedi'i gyfieithu i'r `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` yn cael ei gyfieithu fel `faucon` a `Llama` yn cael ei gyfieithu fel `lama` . Fel enwau priod, ni ddylid eu cyfieithu.

<img alt="" src="//p.3ti.site/1720199451.avif">

### Cyfieithiad Dwfn

Wedi'i gyfieithu i `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### Cyfieithiad i18n.site

bydd cyfieithiad yn adnabod termau Saesneg mewn dogfennau Tsieinëeg `i18` Japaneaidd a Chorëeg ac yn gadael y termau yn gyfan.

Er enghraifft, y canlyniad cyfieithu Japaneaidd uchod yw:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Y cyfieithiad Ffrangeg yw:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Dim ond pan fydd bwlch rhwng y gair Saesneg a'r testun Tsieinëeg, Japaneaidd a Corea neu'r hyd Saesneg yn fwy nag 1, bydd y gair yn cael ei ystyried yn derm.

Er enghraifft `C罗` caiff ei gyfieithu fel `Cristiano Ronaldo` .

## Gellir `i18n.site` Adeiladu Gwefan Aml-Iaith

`i18` integreiddio i'r offeryn llinell orchymyn ar gyfer adeiladu gwefan aml-iaith [`i18n.site`](/i18n.site) .

Gweler dogfennaeth [`i18n.site`](/i18n.site)

## Cod Ffynhonnell Agored

Mae'r cleient yn ffynhonnell gwbl agored, ac 90 ochr y gweinydd % o'r cod yn ffynhonnell agored [Cliciwch yma i weld y cod ffynhonnell](/i18n.site/src) .

Rydym yn chwilio am wirfoddolwyr i gymryd rhan yn y gwaith o ddatblygu cod ffynhonnell agored a phrawfddarllen testunau a gyfieithwyd.

Os oes gennych ddiddordeb, os gwelwch yn dda [→ Cliciwch yma i lenwi eich proffil](https://ggl.link/i18n) ac yna ymuno â'r [rhestr bostio](https://groups.google.com/u/2/g/i18n-site) ar gyfer cyfathrebu.

## Cadw Mewn Cysylltiad

<button onclick="mailsub()">Cliciwch yr e-bost hwn i danysgrifio i ddiweddariadau cynnyrch</button> a <button onclick="webpush()">galluogi gwthio porwr</button> .

Croeso hefyd i ddilyn / [X.COM: @i18nSite](https://x.com/i18nSite) [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)
