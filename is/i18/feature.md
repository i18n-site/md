# Eiginleikar Vöru

`i18` er skipanalínutólið fyrir þýðingar Markdown & Yaml

## Getur Fullkomlega Viðhaldið Sniði Markdown

Styður þýðingar á Markdown töflum án þess að skemma sniðið.

`<pre>` `MarkDown` HTML Markdown HTML `<code>`

## Getur Þekkt Stærðfræðilegar Formúlur Og Sleppt Þýðingu

Stærðfræðilegar formúlur eru þekktar og þýðingu er sleppt.

Fyrir hvernig á að skrifa stærðfræðilegar formúlur, vinsamlegast skoðaðu [" Github Um að skrifa stærðfræðilegar tjáningar"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Geta Til Að Þýða Athugasemdir Í Kóðabútum

Innbyggður kóða og kóðabútar eru ekki þýddir, en hægt er að þýða athugasemdir í kóðanum.

Þýðingar athugasemdir þurfa að ` ```rust ` til kynna tungumálið á eftir ` ``` ` , svo sem : .

Eins og er styður það þýðing á skýringum á `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [og öðrum tungumálum](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Ef þú vilt þýða alla stafi sem ekki eru á ensku í kóðanum skaltu merkja kóðahlutann með ` ```i18n ` .

Ef forritunarmálið sem þú þarft er ekki tiltækt, vinsamlegast [hafðu samband við okkur](https://groups.google.com/g/i18n-site) .

## Stjórnlínuvæn

Það eru mörg [þungavigtartæki](https://www.capterra.com/translation-management-software) í boði til að stjórna þýðingarskjölum.

Fyrir forritara sem þekkja `git` , `vim` og `vscode` mun það án efa auka námskostnað að nota þessi verkfæri til að breyta skjölum og stjórna útgáfum.

`KISS` ( `Keep It Simple, Stupid` ) Meðal þeirra sem trúa meginreglunni eru lausnir á fyrirtækisstigi samheiti yfir því að vera fyrirferðarmiklar, óhagkvæmar og erfiðar í notkun.

Þýðing ætti að fara fram með því að slá inn skipanir og klára það með einum smelli. Það ætti ekki að vera flókið umhverfi.

Ekki bæta við einingum nema nauðsynlegt sé.

## Engar Breytingar, Engin Þýðing

Það eru líka nokkur skipanalínuþýðingartæki, svo sem [translate-shell](https://github.com/soimort/translate-shell)

Hins vegar styðja þeir ekki auðkenningu á skráarbreytingum og þýða aðeins breyttar skrár til að draga úr kostnaði og auka skilvirkni.

## Hægt Er Að Breyta Þýðingunni Og Vélþýðing Mun Ekki Skrifa Yfir Núverandi Breytingar.

Þýðingin er breytanleg.

Breyttu upprunalega textanum og þýddu hann aftur í vél, handvirkum breytingum á þýðingunni verður ekki skrifað yfir (ef þessari málsgrein upprunalega textans hefur ekki verið breytt).

## Hágæða Vélþýðing

Við höfum þróað nýja kynslóð þýðingartækni sem sameinar tæknilega kosti hefðbundinna vélþýðingalíkana og stórra tungumálalíkana til að gera þýðingar nákvæmar, sléttar og glæsilegar.

Blindpróf sýna að þýðingargæði okkar eru umtalsvert betri miðað við svipaða þjónustu.

Til að ná sömu gæðum er magn handvirkrar klippingar sem krafist er af Google Translate og `ChatGPT` `2.67` sinnum og `3.15` sinnum meira en okkar.

## <a rel=id href="#price" id="price"></a> Einstaklega samkeppnishæf verð

|                                                                                   | USD/milljón orð |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Smelltu hér til að heimila og fylgja i18n.site github Library](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) og **fá bónus $50** .

Athugið: Fjöldi reikningshæfra stafa = [fjöldi unicode](https://en.wikipedia.org/wiki/Unicode) í frumskránni × fjöldi tungumála í þýðingunni

## Stuðningur Við Þýðingu `YAML`

Tólið þýðir aðeins orðabókargildin í `YAML` , ekki orðabókarlyklana.

Byggt á `YAML` þýðingu geturðu auðveldlega smíðað alþjóðlegar lausnir fyrir ýmis forritunarmál.

## Stuðningur Við Þýðingar `HOGO` Hausstillingar

Styður uppsetningu [HOGO](https://github.com/gohugoio/hugo) á kyrrstæðum bloggi og þýðir aðeins reiti `title` , `summary` , `brief` og `description` .

## Ekki Þýða Breytuheiti

`Markdown` er notað sem tölvupóstsniðmát, `YAML` er notað sem tungumálaskráarstillingar og það verða breytilegir breytur (til dæmis: endurhlaða `${amount}` hefur borist).

Breytuheiti eins og `${varname}` verða ekki litið á sem enskar þýðingar.

## Hagræðing Þýðingar Fyrir Kína, Japan Og Kóreu

### Þegar Hann Er Þýddur Á Ensku Er Fyrsti Stafurinn Í Titlinum Sjálfkrafa Hástafaður.

Kína, Japan og Kórea eru ekki með hástöfum og lágstöfum, en venjan fyrir enska titla er að setja fyrsta stafinn með hástöfum.

`i18` getur borið kennsl á titilinn í `MarkDown` og mun sjálfkrafa skrifa fyrsta stafinn með hástöfum þegar hann er þýddur yfir á hástafanæmt tungumál.

Til dæmis verður `为阅读体验而优化` þýtt í `Optimized for Reading Experience` .

### Ensk Hugtök Á Kínversku, Japönsku, Kóresku Og Kínversku Eru Ekki Þýdd

Skjöl frá Kína, Japan og Kóreu innihalda oft mörg ensk hugtök.

Vélþýðing á kínversku, japönsku og kóresku er orðin að ensku og hugtök eru oft þýdd saman, eins og eftirfarandi kínverska setning:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Ef þú notar Google eða DeepL þýða þau bæði ensk hugtök sem ættu að vera upprunaleg (tökum japönsku og frönsku sem dæmi).

### Google Translate

Þýtt `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` japönsku :

![](//p.3ti.site/1720199391.avif)

Þýtt `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` frönsku :

`Falcon` er þýtt sem `faucon` og `Llama` er þýtt sem `lama` . Sem sérnöfn ætti ekki að þýða þau.

![](//p.3ti.site/1720199451.avif)

### DeepL Þýðing

Þýtt `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` japönsku :

![](//p.3ti.site/1720199550.avif)

Þýðing á ofangreindu yfir á frönsku (einnig endurskrifa eiginnöfn og bæta við staku `... ` ) DeepL

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.síðuþýðing

Þýðing `i18` mun þekkja ensk hugtök í kínverskum, japönskum og kóreskum skjölum og skilja hugtökin óbreytt.

Til dæmis er japanska þýðingarniðurstaðan hér að ofan:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Franska þýðingin er:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Aðeins þegar bil er á milli enska orðsins og kínverska, japanska og kóreska textans eða enska lengdin er stærri en 1, verður litið á orðið sem hugtak.

Til dæmis: `C罗` verður þýtt sem `Cristiano Ronaldo` .

## Hægt Að Sameina Með Fleiri en `i18n.site` Tungumálum Til Að Byggja Upp Vefsíðu

`i18` er samþætt í skipanalínutólið til að byggja upp vefsíður á mörgum tungumálum [`i18n.site`](/i18n.site) .

Sjá skjöl [`i18n.site`](/i18n.site) fyrir frekari upplýsingar.

## Kóði Opinn Uppspretta

Biðlarinn er algjörlega opinn og 90 % af kóðanum [Smelltu hér til að skoða frumkóðann](/i18n.site/c/src) .

Við leitum að sjálfboðaliðum til að taka þátt í þróun opins frumkóða og prófarkalestur á þýddum texta.

Ef þú hefur áhuga, vinsamlegast [→ Smelltu hér til að fylla út prófílinn þinn](https://ggl.link/i18n) og skráðu þig síðan á [póstlistann](https://groups.google.com/u/2/g/i18n-site) fyrir samskipti.

## Haltu Sambandi

Vinsamlegast <button onclick="mailsub()">smelltu á þennan tölvupóst til að gerast áskrifandi að vöruuppfærslum</button> og <button onclick="webpush()">virkja vafrapush</button> . Við munum láta þig vita þegar vöruuppfærslur eru gerðar.

Einnig velkomið að fylgjast með [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) reikningum / [X.COM: @i18nSite](https://x.com/i18nSite)