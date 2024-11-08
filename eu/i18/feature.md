# Produktuaren Ezaugarriak

`i18` itzultzeko komando lerroko tresna da Markdown & Yaml

## Markdown-en Formatua Ezin Hobeto Mantendu Dezake

Markdown taulen itzulpena onartzen du, formatua kaltetu gabe ez du hitzik itzultzen formula matematikoetan edo esteketan.

HTML mistoaren itzulpena onartzen du, HTML `MarkDown` -n txertatutako `<pre>` eta `<code>` etiketetako edukia ez Markdown itzuli

## Gai Da Formula Matematikoak Ezagutzen Eta Itzulpena Saltatzen Du

Formula matematikoak ezagutzen dira eta itzulpena saltatzen da.

Formula matematikoak nola idatzi jakiteko, ikusi [" Github Adierazpen matematikoak idazteari buruz"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Iruzkinak Kode Zatietan Itzultzeko Gaitasuna

Sareko kodea eta kode zatiak ez dira itzultzen, baina kodean iruzkinak itzul daitezke.

Itzulpen iruzkinek ` ``` ` ondoren hizkuntza adierazi behar dute, ` ```rust ` :

Gaur egun, oharpenen itzulpena onartzen du `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [eta beste hizkuntza](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) batzuetan.

Kodeko ingelesez ez diren karaktere guztiak itzuli nahi badituzu, markatu kode-segmentua ` ```i18n ` batekin.

Behar duzun programazio-lengoaia erabilgarri ez badago, jar zaitez [gurekin harremanetan](https://groups.google.com/g/i18n-site) .

## Komando-Lerroa Lagungarria

Itzulpen dokumentuak kudeatzeko [tresna astun](https://www.capterra.com/translation-management-software) asko daude eskuragarri.

`git` , `vim` eta `vscode` ezagutzen dituzten programatzaileentzat, tresna hauek dokumentuak editatzeko eta bertsioak kudeatzeko erabiltzeak ikaskuntza-kostua handituko du, dudarik gabe.

`KISS` ( `Keep It Simple, Stupid` ) Sinesmen nagusien artean, enpresa mailako soluzioak astunak, eraginkorrak eta erabiltzeko zailak izatearen sinonimo dira.

Itzulpena komandoak sartuz eta klik batekin osatuz egin behar da. Ez luke ingurune konplexurik egon behar.

Ez gehitu entitaterik beharrezkoa ez bada.

## Ez Dago Aldaketarik, Ez Itzulpenik

Komando-lerroko itzulpen-tresna batzuk ere badaude, adibidez [translate-shell](https://github.com/soimort/translate-shell)

Hala ere, ez dute onartzen fitxategien aldaketak identifikatzea eta aldatutako fitxategiak soilik itzultzen dituzte kostuak murrizteko eta eraginkortasuna areagotzeko.

## Itzulpena Edita Daiteke, Eta Itzulpen Automatikoak Ez Ditu Lehendik Dauden Aldaketak Gainidatziko.

Itzulpena editagarria da.

Aldatu jatorrizko testua eta itzuli automatikoki berriro, itzulpenaren eskuzko aldaketak ez dira gainidatziko (jatorrizko testuaren paragrafo hau aldatu ez bada).

## Kalitate Oneneko Itzulpen Automatikoa

Itzulpen-teknologiaren belaunaldi berri bat garatu dugu, itzulpen automatiko tradizionalen ereduen abantaila teknikoak eta hizkuntza-eredu handiak uztartzen dituena, itzulpenak zehatzak, leunak eta dotoreak izan daitezen.

Proba itsuek erakusten dute gure itzulpen-kalitatea nabarmen hobea dela antzeko zerbitzuekin alderatuta.

Kalitate bera lortzeko, Google Translate-k eta `ChatGPT` eskatzen duen eskuzko edizio-kopurua gurea baino `2.67` eta `3.15` aldiz handiagoa da, hurrenez hurren.

## <a rel=id href="#price" id="price"></a> Prezio oso lehiakorrak

|                                                                                   | USD/milioi hitz |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Egin klik hemen github Liburutegia baimentzeko eta automatikoki i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) eta **$50 bonus jasotzeko** .

Oharra: faktura daitezkeen karaktere kopurua = iturburu-fitxategiko [unicode kopurua](https://en.wikipedia.org/wiki/Unicode) × itzulpeneko hizkuntza kopurua

## Laguntza Itzulpena `YAML`

Tresnak hiztegiko balioak `YAML` n soilik itzultzen ditu, ez hiztegi-gakoak.

`YAML` itzulpenean oinarrituta, hainbat programazio-lengoaitarako nazioarteko irtenbideak erraz eraiki ditzakezu.

## Onartu Itzulpena `HOGO` Goiburuaren Konfigurazioa

Blog [HOGO](https://github.com/gohugoio/hugo) goiburuko konfigurazioa onartzen du eta `title` , `summary` , `brief` eta `description` eremuak soilik itzultzen ditu.

## Ez Itzuli Aldagaien Izenak

`Markdown` posta elektronikoaren txantiloi gisa erabiltzen da, `YAML` hizkuntza-fitxategiaren konfigurazio gisa erabiltzen da, eta parametro aldakorrak egongo dira (adibidez: karga `${amount}` jaso da).

`${varname}` bezalako aldagaien izenak ez dira ingelesezko itzulpen gisa hartuko.

## Itzulpen Optimizazioa Txina, Japonia Eta Korearako

### Ingelesera Itzultzean, Tituluaren Lehen Letra Automatikoki Letra Larriz Idazten Da.

Txinak, Japoniak eta Koreak ez dituzte letra larriak eta minuskulak, baina ingelesezko tituluen konbentzioa lehen letra larriz idaztea da.

`i18` izenburua `MarkDown` antzeman dezake, eta automatikoki idatziko du lehen letra maiuskulak eta minuskulak bereizten dituen hizkuntza batera itzultzean.

Adibidez, `为阅读体验而优化` `Optimized for Reading Experience` itzuliko da.

### Ingelesezko Terminoak Txinera, Japoniera, Koreera Eta Txineraz Ez Dira Itzuli

Txina, Japonia eta Koreako dokumentuek ingelesezko termino asko izaten dituzte.

Txinako, Japoniako eta Koreako hizkuntzen itzulpen automatikoa ingelesa ez den hizkuntza bihurtu da, eta terminoak batera itzultzen dira askotan, hala nola, txinera esaldi hau:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google edo DeepL erabiltzen baduzu, biek oker itzultzen dituzte jatorrizkoak izan beharko luketen ingelesezko terminoak (hartu japoniera eta frantsesa adibide gisa).

### Google Translate

Japonierara `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Frantsesera `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` `faucon` gisa itzultzen da eta `Llama` `lama` gisa itzultzen da. Izen propio gisa, ez dira itzuli behar.

![](//p.3ti.site/1720199451.avif)

### DeepL Itzulpena

Japonierara `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL Aurrekoaren itzulpena frantsesera (izen propioak berridatziz eta `... ` bakoitia gehituz):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Itzulpena

`i18` -ren itzulpenak ingelesezko terminoak ezagutuko ditu txinera, japoniera eta korear dokumentuetan eta terminoak oso-osorik utziko ditu.

Adibidez, goiko japonierazko itzulpenaren emaitza hau da:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Frantsesezko itzulpena hau da:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Ingelesezko hitzaren eta txinera, japoniera eta korear testuaren artean tarte bat dagoenean edo ingelesaren luzera 1 baino handiagoa denean bakarrik, hitza terminotzat hartuko da.

Adibidez: `C罗` `Cristiano Ronaldo` gisa itzuliko da.

## `i18n.site` Hizkuntza Baino Gehiagorekin Konbina Daiteke Webgune Bat Eraikitzeko

`i18` hizkuntza anitzeko webgunea eraikitzeko komando lerroko tresnan integratuta dago [`i18n.site`](/i18n.site) .

Ikus [`i18n.site`](/i18n.site) -ren dokumentazioa xehetasunetarako.

## Kode Irekia

Bezeroa guztiz irekia da, eta zerbitzariaren 90 kode irekia da. [Egin klik hemen iturburu-kodea ikusteko](/i18n.site/c/src) .

Iturburu irekiko kodearen garapenean eta itzulitako testuen zuzenketan parte hartzeko boluntarioen bila gabiltza.

Interesa baduzu, mesedez [→ Egin klik hemen zure profila betetzeko](https://ggl.link/i18n) eta gero sartu [posta-zerrendan](https://groups.google.com/u/2/g/i18n-site) komunikaziorako.

## Harremanetan Jarri

Mesedez <button onclick="mailsub()">, egin klik mezu elektroniko honetan produktuen eguneraketetara harpidetzeko</button> eta <button onclick="webpush()">arakatzailearen push gaitzeko</button> . Produktuaren eguneraketak egiten direnean jakinaraziko dizugu.

Ongi [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) ere gure kontu / jarraitzera [X.COM: @i18nSite](https://x.com/i18nSite)