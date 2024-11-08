# Nodweddion Cynnyrch

`i18` yw'r offeryn llinell orchymyn ar gyfer cyfieithu Markdown & Yaml

## Yn Gallu Cynnal Fformat Markdown Yn Berffaith

Yn cefnogi cyfieithu tablau Markdown heb niweidio'r fformat; nid yw'n cyfieithu geiriau mewn fformiwlâu neu ddolenni mathemategol.

`MarkDown` HTML `<pre>` Markdown HTML `<code>`

## Yn Gallu Adnabod Fformiwlâu Mathemategol a Hepgor Cyfieithu

Mae fformiwlâu mathemategol yn cael eu hadnabod a chyfieithiad yn cael ei hepgor.

Am sut i ysgrifennu fformiwlâu mathemategol, cyfeiriwch at [" Github Am Ysgrifennu Mynegiadau Mathemategol "](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Y Gallu I Gyfieithu Sylwadau Mewn Pytiau Cod

Nid yw pytiau cod a chod mewnol yn cael eu cyfieithu, ond gellir cyfieithu sylwadau yn y cod.

Mae angen i sylwadau cyfieithu nodi'r iaith ar ôl ` ``` ` , ` ```rust ` :

Ar hyn o bryd, mae'n cefnogi cyfieithu anodiadau mewn `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [ac ieithoedd eraill](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Os ydych chi am gyfieithu'r holl nodau nad ydynt yn Saesneg yn y cod, marciwch y segment cod gyda ` ```i18n ` .

Os nad yw'r iaith raglennu sydd ei hangen arnoch ar gael, [cysylltwch â ni](https://groups.google.com/g/i18n-site) .

## Cyfeillgar I'r Llinell Orchymyn

Mae llawer [o offer pwysau trwm](https://www.capterra.com/translation-management-software) ar gael ar gyfer rheoli dogfennau cyfieithu.

Ar gyfer rhaglenwyr sy'n gyfarwydd â `git` , `vim` , a `vscode` , bydd defnyddio'r offer hyn i olygu dogfennau a rheoli fersiynau heb os yn cynyddu'r gost dysgu.

`KISS` ( `Keep It Simple, Stupid` ) Ymhlith y prif gredinwyr, mae datrysiadau lefel menter yn gyfystyr â bod yn feichus, yn aneffeithlon, ac yn anodd eu defnyddio.

Dylid cyfieithu trwy fewnbynnu gorchmynion a'i gwblhau gydag un clic. Ni ddylai fod unrhyw ddibyniaethau amgylchedd cymhleth.

Peidiwch ag ychwanegu endidau oni bai bod angen.

## Dim Addasiad, Dim Cyfieithiad

Mae yna hefyd rai offer cyfieithu llinell orchymyn, fel [translate-shell](https://github.com/soimort/translate-shell)

Fodd bynnag, nid ydynt yn cefnogi nodi addasiadau ffeil a dim ond er mwyn lleihau costau a chynyddu effeithlonrwydd y maent yn cyfieithu ffeiliau wedi'u haddasu.

## Gellir Golygu'r Cyfieithiad, Ac Ni Fydd Cyfieithu Peirianyddol Yn Trosysgrifo'r Addasiadau Presennol.

Mae modd golygu'r cyfieithiad.

Addaswch y testun gwreiddiol a'i gyfieithu â pheiriant eto, ni fydd yr addasiadau â llaw i'r cyfieithiad yn cael eu trosysgrifo (os nad yw'r paragraff hwn o'r testun gwreiddiol wedi'i addasu).

## Cyfieithu Peirianyddol O'r Ansawdd Gorau

Rydym wedi datblygu cenhedlaeth newydd o dechnoleg cyfieithu sy'n cyfuno manteision technegol modelau cyfieithu peirianyddol traddodiadol a modelau iaith mawr i wneud cyfieithiadau yn gywir, llyfn a chain.

Mae profion dall yn dangos bod ansawdd ein cyfieithu yn sylweddol well o gymharu â gwasanaethau tebyg.

Er mwyn cyflawni'r un ansawdd, mae maint y golygu â llaw sydd ei angen ar Google Translate a `ChatGPT` `2.67` gwaith a `3.15` gwaith yn fwy na'n rhai ni yn y drefn honno.

## <a rel=id href="#price" id="price"></a> Prisiau hynod gystadleuol

|                                                                                   | USD/miliwn o eiriau |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Cliciwch yma i awdurdodi a dilyn yn i18n.site Lyfrgell github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) a **derbyn bonws $50** .

Nodyn: Nifer y nodau y gellir eu bilio = [nifer y unicode](https://en.wikipedia.org/wiki/Unicode) yn y ffeil ffynhonnell × nifer yr ieithoedd yn y cyfieithiad

## Cefnogi Cyfieithu `YAML`

Mae'r teclyn ond yn cyfieithu gwerthoedd y geiriadur yn `YAML` , nid bysellau'r geiriadur.

Yn seiliedig ar `YAML` cyfieithiad, gallwch yn hawdd adeiladu atebion rhyngwladol ar gyfer ieithoedd rhaglennu amrywiol.

## Cefnogi Cyfluniad Pennyn Cyfieithu `HOGO`

Yn cefnogi cyfluniad pennawd blog statig teipiwch [HOGO](https://github.com/gohugoio/hugo) , a dim ond yn cyfieithu meysydd `title` , `summary` , `brief` , a `description` .

## Peidiwch Â Chyfieithu Enwau Newidyn

Defnyddir `Markdown` fel templed e-bost, defnyddir `YAML` fel ffurfweddiad ffeil iaith, a bydd paramedrau amrywiol (er enghraifft: mae ad-daliad `${amount}` wedi'i dderbyn).

Ni fydd enwau amrywiol fel `${varname}` yn cael eu hystyried yn gyfieithiadau Saesneg.

## Optimeiddio Cyfieithu Ar Gyfer Tsieina, Japan a Korea

### Pan Gaiff Ei Chyfieithu I'r Saesneg, Caiff Llythyren Gyntaf Y Teitl Ei Chyfalafu'n Awtomatig.

Nid oes gan Tsieina, Japan a Korea lythrennau mawr a llythrennau bach, ond y confensiwn ar gyfer teitlau Saesneg yw priflythrennu'r llythyren gyntaf.

Gall `i18` adnabod y teitl yn `MarkDown` , a bydd yn priflythrennu'r llythyren gyntaf yn awtomatig wrth gyfieithu i iaith sy'n sensitif i achos.

Er enghraifft, bydd `为阅读体验而优化` yn cael ei gyfieithu i `Optimized for Reading Experience` .

### Nid Yw Termau Saesneg Mewn Tsieinëeg, Japaneaidd, Corëeg a Tsieinëeg Yn Cael Eu Cyfieithu

Mae dogfennau o Tsieina, Japan a Korea yn aml yn cynnwys llawer o dermau Saesneg.

Mae cyfieithu peirianyddol o ieithoedd Tsieinëeg, Japaneaidd a Corea wedi dod yn iaith nad yw'n Saesneg, ac mae termau'n aml yn cael eu cyfieithu gyda'i gilydd, fel y frawddeg Tsieineaidd ganlynol:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Os ydych chi'n defnyddio Google neu DeepL, mae'r ddau ohonyn nhw'n cyfieithu'n anghywir dermau Saesneg a ddylai aros yn wreiddiol (cymerwch Japaneaidd a Ffrangeg fel enghreifftiau).

### Google Cyfieithu

Wedi ei gyfieithu i Japaneg : `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Wedi ei gyfieithu i'r Ffrangeg : `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

Mae `Falcon` yn cael ei gyfieithu fel `faucon` a `Llama` yn cael ei gyfieithu fel `lama` . Fel enwau priod, ni ddylid eu cyfieithu.

![](//p.3ti.site/1720199451.avif)

### Cyfieithiad Dwfn

Wedi ei gyfieithu i Japaneg : `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL `... `

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Cyfieithiad i18n.site

Bydd cyfieithiad `i18` yn adnabod termau Saesneg mewn dogfennau Tsieinëeg, Japaneaidd a Chorëeg ac yn gadael y termau yn gyfan.

Er enghraifft, y canlyniad cyfieithu Japaneaidd uchod yw:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Y cyfieithiad Ffrangeg yw:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Dim ond pan fydd bwlch rhwng y gair Saesneg a'r testun Tsieinëeg, Japaneaidd a Corea neu'r hyd Saesneg yn fwy nag 1, bydd y gair yn cael ei ystyried yn derm.

Er enghraifft: bydd `C罗` yn cael ei gyfieithu fel `Cristiano Ronaldo` .

## Gellir Ei Gyfuno Â Mwy Na `i18n.site` Iaith I Adeiladu Gwefan

`i18` wedi'i integreiddio i'r offeryn llinell orchymyn adeiladu gwefan aml-iaith [`i18n.site`](/i18n.site) .

Gweler dogfennaeth [`i18n.site`](/i18n.site) am fanylion.

## Cod Ffynhonnell Agored

Mae'r cleient yn ffynhonnell gwbl agored, ac mae ochr y 90 % o'r cod yn ffynhonnell agored [Cliciwch yma i weld y cod ffynhonnell](/i18n.site/c/src) .

Rydym yn chwilio am wirfoddolwyr i gymryd rhan yn y gwaith o ddatblygu cod ffynhonnell agored a phrawfddarllen testunau a gyfieithwyd.

Os oes gennych ddiddordeb, os gwelwch yn dda [→ Cliciwch yma i lenwi eich proffil](https://ggl.link/i18n) ac yna ymuno â'r [rhestr bostio](https://groups.google.com/u/2/g/i18n-site) ar gyfer cyfathrebu.

## Cadw Mewn Cysylltiad

<button onclick="mailsub()">Cliciwch yr e-bost hwn i danysgrifio i ddiweddariadau cynnyrch</button> a <button onclick="webpush()">galluogi gwthio porwr</button> .

Croeso hefyd i ddilyn ein cyfrifon [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .