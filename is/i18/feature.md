# Eiginleikar Vöru

`i18` er skipanalínutól til að þýða Markdown & Yaml

## Getur Fullkomlega Viðhaldið Sniði Markdown

Styður þýðingar á Markdown töflum án þess að skemma sniðið.

Styður þýðingu á Markdown í blandað HTML `<pre>` HTML in og innihald í `<code>` merkjum er ekki þýtt `MarkDown`

## Getur Þekkt Stærðfræðilegar Formúlur Og Sleppt Þýðingu

Stærðfræðilegar formúlur eru þekktar og þýðingu er sleppt.

Fyrir hvernig á að skrifa stærðfræðilegar formúlur, vinsamlegast skoðaðu [" Github Um að skrifa stærðfræðilegar tjáningar"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Geta Til Að Þýða Athugasemdir Í Kóðabútum

Innbyggður kóða og kóðabútar eru ekki þýddir, en hægt er að þýða athugasemdir í kóðanum.

Þýðingar athugasemdir þurfa að gefa til kynna tungumálið á eftir ` ``` ` svo sem ` ```rust ` :

Styður nú þýðingar á athugasemdum `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` , `python` , `bash` , `php` [og öðrum tungumálum](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Ef forritunarmálið sem þú þarft er ekki tiltækt, vinsamlegast [hafðu samband við okkur](https://groups.google.com/g/i18n-site) .

## Stjórnlínuvæn

Það eru mörg [þungavigtartæki](https://www.capterra.com/translation-management-software) í boði til að stjórna þýðingarskjölum.

Fyrir forritara sem þekkja `git` `vim` , `vscode` , mun það án efa auka námskostnaðinn að nota þessi verkfæri til að breyta skjölum og stjórna útgáfum.

`KISS` ( `Keep It Simple, Stupid` ) Meðal þeirra sem trúa á meginregluna eru lausnir á fyrirtækisstigi samheiti við að vera fyrirferðarmiklar, óhagkvæmar og erfiðar í notkun.

Þýðing ætti að fara fram með því að setja inn skipanir og klára það með einum smelli. Það ætti ekki að vera flókið umhverfi.

Ekki bæta við einingum nema nauðsynlegt sé.

## Engar Breytingar, Engin Þýðing

Það eru líka nokkur skipanalínuþýðingartæki, svo sem [translate-shell](https://github.com/soimort/translate-shell)

Hins vegar styðja þeir ekki auðkenningu á skráarbreytingum og þýða aðeins breyttar skrár til að draga úr kostnaði og auka skilvirkni.

## Hægt Er Að Breyta Þýðingunni Og Vélþýðing Mun Ekki Skrifa Yfir Núverandi Breytingar.

Þýðingin er breytanleg.

Breyttu upprunalega textanum og þýddu hann aftur í vél, handvirkum breytingum á þýðingunni verður ekki skrifað yfir (ef þessari málsgrein upprunalega textans hefur ekki verið breytt).

## Hágæða Þýðing Xindaya

Við höfum þróað nýja kynslóð þýðingartækni sem sameinar tæknilega kosti hefðbundinna vélþýðingalíkana og stórra tungumálalíkana til að gera þýðingar nákvæmar, sléttar og glæsilegar.

Blindpróf sýna að þýðingargæði okkar eru umtalsvert betri miðað við svipaða þjónustu.

Til að ná sömu gæðum er magn handvirkrar breytinga sem krafist er af Google `ChatGPT` `2.67` sinnum og `3.15` sinnum okkar.

## <a rel=id href="#price" id="price"></a> Einstaklega samkeppnishæf verð

|                                                                                   | USD/milljón orð |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Athugið: Fjöldi reikningshæfra stafa = [fjöldi unicode](https://en.wikipedia.org/wiki/Unicode) í frumskránni × fjöldi tungumála í þýðingunni

## Stuðningur Við Þýðingar `YAML`

Tólið þýðir aðeins orðabókargildin `YAML` , ekki orðabókarlyklana.

Byggt á `YAML` geturðu auðveldlega smíðað alþjóðlegar lausnir fyrir ýmis forritunarmál.

## Stuðningur Við Þýðingu `HOGO`

Styður hausstillingu [HOGO](https://github.com/gohugoio/hugo) kyrrstætt blogg, aðeins `title` , `summary` og `description` reitirnir eru þýddir.

## Ekki Þýða Breytuheiti

`Markdown` Notað sem tölvupóstsniðmát, `YAML` sem tungumálaskráarstillingar, það verða breytilegir breytur (til dæmis: endurhlaða `${amount}` hefur verið móttekið).

`${varname}` Svona breytuheiti verður ekki litið á sem enska þýðingu.

## Hagræðing Þýðingar Fyrir Kína, Japan Og Kóreu

### Þegar Hann Er Þýddur Á Ensku Er Fyrsti Stafurinn Í Titlinum Sjálfkrafa Hástafaður.

Kína, Japan og Kórea eru ekki með hástöfum eða lágstöfum, en enskir titlar hafa venjulega stóran fyrsta staf.

`i18` getur borið kennsl á titla í `MarkDown` og skrifar fyrsta stafinn sjálfkrafa þegar hann er þýddur yfir á hástafanæmt tungumál.

Til `为阅读体验而优化` verður þýtt sem `Optimized for Reading Experience` .

### Ensk Hugtök Á Kínversku, Japönsku, Kóresku Og Kínversku Eru Ekki Þýdd

Skjöl frá Kína, Japan og Kóreu innihalda oft mörg ensk hugtök.

Vélræn þýðing á kínversku, japönsku og kóresku er orðin að ekki ensku og hugtök eru oft þýdd saman, svo sem eftirfarandi kínverska setning:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Ef þú notar Google eða DeepL þýða þau bæði ensk hugtök sem ættu að vera upprunaleg (tökum japönsku og frönsku sem dæmi).

### Google Þýðing

Þýtt á `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Þýtt á `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` er þýtt sem `faucon` og `Llama` er þýtt sem `lama` . Sem sérnöfn ætti ekki að þýða þau.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Þýðing

Þýtt á `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL á ofangreindu yfir á frönsku (einnig endurskrifa eiginnöfnin og bæta við skrýtnu `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.síðuþýðing

Þýðing `i18` mun þekkja ensk hugtök í kínverskum, japönskum og kóreskum skjölum og skilja hugtökin óbreytt.

Til dæmis er japanska þýðingarniðurstaðan hér að ofan:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Franska þýðingin er:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Aðeins þegar bil er á milli enska orðsins og kínverska, japanska og kóreska textans eða enska lengdin er stærri en 1, verður litið á orðið sem hugtak.

Til dæmis: `C罗` verður þýtt sem `Cristiano Ronaldo` .

## Hægt Að Sameina Bygging `i18n.site` Mörgum Tungumálum

`i18` Er samþætt í skipanalínutólið fyrir byggingu á mörgum tungumálum [`i18n.site`](/i18n.site) .

Sjá skjöl [`i18n.site`](/i18n.site)

## Kóði Opinn Uppspretta

Biðlarinn er algjörlega opinn og 90 % af kóðanum [Smelltu hér til að skoða frumkóðann](/i18n.site/src) .

Við leitum að sjálfboðaliðum til að taka þátt í þróun opins frumkóða og prófarkalestur á þýddum texta.

Ef þú hefur áhuga, vinsamlegast [→ Smelltu hér til að fylla út prófílinn þinn](https://ggl.link/i18n) og skráðu þig síðan á [póstlistann](https://groups.google.com/u/2/g/i18n-site) fyrir samskipti.

## Vertu Í Sambandi

Vinsamlegast <button onclick="mailsub()">smelltu á þennan tölvupóst til að gerast áskrifandi að vöruuppfærslum</button> og <button onclick="webpush()">virkja vafrapush</button> . Við munum láta þig vita þegar vöruuppfærslur eru gerðar.

Einnig velkomið að fylgjast með / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) okkar [X.COM: @i18nSite](https://x.com/i18nSite)
