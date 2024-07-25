# Produktuaren Ezaugarriak

`i18` itzultzeko komando lerroko tresna da Markdown & Yaml

## Markdown-en Formatua Ezin Hobeto Mantendu Dezake

Markdown taulen itzulpena onartzen du, formatua kaltetu gabe ez du hitzik itzultzen formula matematikoetan edo esteketan.

Onartzen du Markdown in mistoa HTML `<pre>` HTML eta `<code>` etiketak ez dira itzultzen `MarkDown`

## Gai Da Formula Matematikoak Ezagutzen Eta Itzulpena Saltatzen Du

Formula matematikoak ezagutzen dira eta itzulpena saltatzen da.

Formula matematikoak nola idatzi jakiteko, ikusi [" Github Adierazpen matematikoak idazteari buruz"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Iruzkinak Kode Zatietan Itzultzeko Gaitasuna

Sareko kodea eta kode zatiak ez dira itzultzen, baina kodean iruzkinak itzul daitezke.

Itzulpenen iruzkinek ondorengo hizkuntza adierazi behar dute ` ``` ` ` ```rust ` :

Gaur egun, iruzkinak `toml` `yaml` , `json5` , `go` , `rust` , `c` , `cpp` `java` `js` `coffee` `python` , `bash` , `php` [eta beste hizkuntza batzuetan](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) itzultzen ditu.

Behar duzun programazio-lengoaia erabilgarri ez badago, jar zaitez [gurekin harremanetan](https://groups.google.com/g/i18n-site) .

## Komando-Lerroa Lagungarria

Itzulpen dokumentuak kudeatzeko [tresna astun](https://www.capterra.com/translation-management-software) asko daude eskuragarri.

, `vim` , `vscode` `git` duten programatzaileentzat, tresna hauek dokumentuak editatzeko eta bertsioak kudeatzeko erabiltzeak ikaskuntza kostua handituko du, zalantzarik gabe.

( `Keep It Simple, Stupid` ) Printzipioan sinesten dutenen artean, enpresa mailako soluzioak astunak, eraginkorrak eta `KISS` zailak izatearen sinonimo dira.

Itzulpena komandoak sartuz eta klik batekin osatuz egin behar da. Ez luke ingurune konplexurik egon behar.

Ez gehitu entitaterik beharrezkoa ez bada.

## Ez Dago Aldaketarik, Ez Itzulpenik

Komando-lerroko itzulpen-tresna batzuk ere badaude, adibidez [translate-shell](https://github.com/soimort/translate-shell)

Hala ere, ez dute onartzen fitxategien aldaketak identifikatzea eta aldatutako fitxategiak soilik itzultzen dituzte kostuak murrizteko eta eraginkortasuna areagotzeko.

## Itzulpena Edita Daiteke, Eta Itzulpen Automatikoak Ez Ditu Lehendik Dauden Aldaketak Gainidatziko.

Itzulpena editagarria da.

Aldatu jatorrizko testua eta itzuli automatikoki berriro, itzulpenaren eskuzko aldaketak ez dira gainidatziko (jatorrizko testuaren paragrafo hau aldatu ez bada).

## Xindaya-Ren Kalitate Handiko Itzulpena

Itzulpen-teknologiaren belaunaldi berri bat garatu dugu, itzulpen automatiko tradizionalen ereduen abantaila teknikoak eta hizkuntza-eredu handiak uztartzen dituena, itzulpenak zehatzak, leunak eta dotoreak izan daitezen.

Proba itsuek erakusten dute gure itzulpen-kalitatea nabarmen hobea dela antzeko zerbitzuekin alderatuta.

Kalitate bera lortzeko, Google Translate-k eta `ChatGPT` -k eskatzen duen eskuzko edizio-kopurua gurea da, hurrenez hurren, `2.67` aldiz eta `3.15` aldiz.

## <a rel=id href="#price" id="price"></a> Prezio oso lehiakorrak

|                                                                                   | USD / milioi hitz |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Oharra: faktura daitezkeen karaktere kopurua = iturburu-fitxategiko [unicode kopurua](https://en.wikipedia.org/wiki/Unicode) × itzulpeneko hizkuntza kopurua

## Laguntza Itzulpena `YAML`

Tresnak hiztegiko balioak soilik itzultzen ditu `YAML` ez hiztegi-gakoak.

`YAML` oinarrituta, hainbat programazio-lengoaitarako nazioarteko soluzioak erraz eraiki ditzakezu.

## Onartu Itzulpena `HOGO`

[HOGO](https://github.com/gohugoio/hugo) motako blogaren goiburuko konfigurazioa onartzen du, `title` , `summary` eta `description` eremuak soilik itzultzen dira.

## Ez Itzuli Aldagaien Izenak

Posta elektronikoko `Markdown` gisa erabilita, `YAML` hizkuntza-fitxategiaren konfigurazio gisa, parametro aldakorrak izango dira (adibidez: `${amount}` kargatu da).

`${varname}` Izen aldagai mota hau ez da ingelesezko itzulpen gisa hartuko.

## Itzulpen Optimizazioa Txina, Japonia Eta Korearako

### Ingelesera Itzultzean, Tituluaren Lehen Letra Automatikoki Letra Larriz Idazten Da.

Txinak, Japoniak eta Koreak ez dituzte letra larriak edo minuskulak, baina ingelesezko tituluek, oro har, letra larriz jartzen dute lehen letra.

Izenburuak `MarkDown` ezagut `i18` , eta automatikoki idatziko du lehen letra maiuskulak bereizten diren hizkuntza batera itzultzean.

Adibidez `为阅读体验而优化` `Optimized for Reading Experience` gisa itzuliko da.

### Ingelesezko Terminoak Txinera, Japoniera, Koreera Eta Txinera Ez Dira Itzuli

Txina, Japonia eta Koreako dokumentuek askotan ingelesezko termino asko dituzte.

Txinako, Japoniako eta Koreako hizkuntzen itzulpen automatikoa ingelesa ez den hizkuntza bihurtu da, eta terminoak batera itzultzen dira askotan, hala nola, txinera esaldi hau:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Google edo DeepL erabiltzen baduzu, biek oker itzultzen dituzte jatorrizkoak izan beharko luketen ingelesezko terminoak (hartu japoniera eta frantsesa adibide gisa).

### Google Itzultzailea

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` itzulita :

<img alt="" src="//p.3ti.site/1720199391.avif">

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` itzulia :

`Falcon` `faucon` gisa itzultzen da eta `Llama` gisa `lama` . Izen propioak direnez, ez dira itzuli behar.

<img alt="" src="//p.3ti.site/1720199451.avif">

### DeepL Itzulpena

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` itzulita :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Aurrekoaren itzulpena frantsesera (izen propioak berridatziz eta bakoitiak `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site Itzulpena

`i18` -ren itzulpenak ingelesezko terminoak ezagutuko ditu txinera, japoniera eta korear dokumentuetan eta terminoak oso-osorik utziko ditu.

Adibidez, goiko japonierazko itzulpenaren emaitza hau da:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Frantsesezko itzulpena hau da:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Ingelesezko hitzaren eta txinera, japoniera eta korear testuaren artean tarte bat dagoenean edo ingelesaren luzera 1 baino handiagoa denean bakarrik, hitza terminotzat hartuko da.

Adibidez: `C罗` `Cristiano Ronaldo` gisa itzuliko da.

## Konbinatu `i18n.site` Hizkuntza Anitzeko Webgunea

`i18` Hizkuntza anitzeko webgunea eraikitzeko komando lerroko tresnan integratuta dago [`i18n.site`](/i18n.site) .

Ikusi [`i18n.site`](/i18n.site) -ren dokumentazioa xehetasunetarako.

## Kode Irekia

Bezeroa guztiz irekia da, eta zerbitzariaren aldea kode irekia da 90 [Egin klik hemen iturburu-kodea ikusteko](/i18n.site/src) .

Iturburu irekiko kodearen garapenean eta itzulitako testuen zuzenketan parte hartzeko boluntarioen bila gabiltza.

Interesa baduzu, mesedez [→ Egin klik hemen zure profila betetzeko](https://ggl.link/i18n) eta gero sartu [posta-zerrendan](https://groups.google.com/u/2/g/i18n-site) komunikaziorako.

## Kontaktua Mantendu

Mesedez, <button onclick="mailsub()">egin klik mezu elektroniko honetan produktuen eguneraketetara harpidetzeko</button> eta <button onclick="webpush()">arakatzailearen push gaitzeko</button> . Produktuaren eguneraketak egiten direnean jakinaraziko dizugu.

/ [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) ere gure kontu sozialak jarraitzera [X.COM: @i18nSite](https://x.com/i18nSite)
