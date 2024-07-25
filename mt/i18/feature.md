# Karatteristiċi Tal-Prodott

`i18` hija għodda tal - linja ta ' kmand għat - traduzzjoni Markdown & Yaml

## Jista 'jżomm Perfettament Il-Format Ta' Markdown

Jappoġġja t-traduzzjoni ta 'tabelli Markdown mingħajr ma jagħmel ħsara lill-format ma jittraduċix kliem f'formuli matematiċi jew links;

Jappoġġja t-traduzzjoni ta' Markdown f'imħallta HTML `<pre>` HTML u l-kontenut f `<code>` tags mhumiex `MarkDown`

## Jista' Jagħraf Formuli Matematiċi U Jaqbeż It-Traduzzjoni

Il-formuli matematiċi huma rikonoxxuti u t-traduzzjoni tinqabeż.

Għal kif tikteb formuli matematiċi, jekk jogħġbok irreferi għal [" Github Dwar il-Kitba ta' Espressjonijiet Matematiċi"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Kapaċità Li Tittraduċi Kummenti F'snippets Tal-Kodiċi

Il-kodiċi inline u s-snippets tal-kodiċi mhumiex tradotti, iżda l-kummenti fil-kodiċi jistgħu jiġu tradotti.

Il-kummenti tat-traduzzjoni jridu jindikaw il-lingwa wara ` ``` ` ` ```rust ` :

Bħalissa jappoġġja traduzzjoni ta' kummenti `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` `java` `js` , `coffee` `python` , `bash` , `php` [u lingwi oħra](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Jekk il-lingwa tal-ipprogrammar li għandek bżonn mhix disponibbli, jekk jogħġbok [ikkuntattjana](https://groups.google.com/g/i18n-site) .

## Linja Ta 'kmand Faċli

Hemm ħafna [għodod heavyweight](https://www.capterra.com/translation-management-software) disponibbli għall-ġestjoni tad-dokumenti tat-traduzzjoni.

Għal programmaturi li huma familjari ma `git` , `vim` , `vscode` , l-użu ta' dawn l-għodod biex jeditjaw dokumenti u jimmaniġġjaw verżjonijiet bla dubju se jżidu l-ispiża tat-tagħlim.

( `Keep It Simple, Stupid` ) Fost dawk li jemmnu fil-prinċipju, is-soluzzjonijiet fil-livell tal `KISS` intrapriża huma sinonimi li jkunu ingombranti, ineffiċjenti u diffiċli biex jintużaw.

It-traduzzjoni għandha ssir billi ddaħħal kmandi u timla bi klikk waħda. M'għandux ikun hemm dipendenzi ambjentali kumplessi.

Iżżidx entitajiet sakemm ma jkunx meħtieġ.

## L-Ebda Modifika, L-Ebda Traduzzjoni

Hemm ukoll xi għodod tat-traduzzjoni tal-linja tal-kmand, bħal [translate-shell](https://github.com/soimort/translate-shell)

Madankollu, ma jappoġġjawx l-identifikazzjoni tal-modifiki tal-fajl u jittraduċu biss fajls modifikati biex inaqqsu l-ispejjeż u jżidu l-effiċjenza.

## It-Traduzzjoni Tista' Tiġi Editjata, U T-Traduzzjoni Awtomatika Mhix Se Tissostitwixxi Modifiki Eżistenti.

It-traduzzjoni hija editjabbli.

Ibdel it-test oriġinali u erġa' tittraduċih bil-magna, il-modifiki manwali għat-traduzzjoni ma jinkitbux fuqu (jekk dan il-paragrafu tat-test oriġinali ma jkunx ġie modifikat).

## It-Traduzzjoni Ta’ Kwalità Għolja Ta’ Xindaya

Aħna żviluppajna ġenerazzjoni ġdida ta 'teknoloġija ta' traduzzjoni li tgħaqqad il-vantaġġi tekniċi ta 'mudelli tradizzjonali ta' traduzzjoni awtomatika u mudelli ta 'lingwa kbar biex it-traduzzjonijiet ikunu preċiżi, bla xkiel u eleganti.

It-testijiet blind juru li l-kwalità tat-traduzzjoni tagħna hija ferm aħjar meta mqabbla ma 'servizzi simili.

Biex tinkiseb l-istess kwalità, l-ammont ta' editjar manwali meħtieġ minn Google Translate `ChatGPT` huwa `2.67` darbiet u `3.15` darbiet tagħna rispettivament.

## <a rel=id href="#price" id="price"></a> Prezzijiet estremament kompetittivi

|                                                                                   | USD/miljun kelma |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

Nota: In-numru ta' karattri fatturati = [in-numru ta unicode](https://en.wikipedia.org/wiki/Unicode) fil-fajl tas-sors × in-numru ta' lingwi fit-traduzzjoni

## Appoġġ It-Traduzzjoni `YAML`

L-għodda tittraduċi biss il-valuri tad-dizzjunarju fi `YAML` mhux iċ-ċwievet tad-dizzjunarju.

Ibbażat fuq it `YAML` Traduzzjoni, tista' faċilment tibni soluzzjonijiet internazzjonali għal diversi lingwi ta' programmar.

## Appoġġ Traduzzjoni `HOGO`

Jappoġġja l-konfigurazzjoni tal-header tal `description` blog statiku tat `title` `summary` [HOGO](https://github.com/gohugoio/hugo)

## Tittraduċix Ismijiet Varjabbli

Użat bħala mudell ta `Markdown` email, `YAML` bħala konfigurazzjoni tal-fajl tal-lingwa, se jkun hemm parametri varjabbli (per eżempju: ġie riċevut `${amount}` recharge).

`${varname}` Dan it-tip ta' isem varjabbli mhux se jitqies bħala traduzzjoni bl-Ingliż.

## Ottimizzazzjoni Tat-Traduzzjoni Għaċ-Ċina, Il-Ġappun U L-Korea

### Meta Tradotta Għall-Ingliż, L-Ewwel Ittra Tat-Titlu Hija Awtomatikament Kapitalizzata.

Iċ-Ċina, il-Ġappun u l-Korea m'għandhomx ittri kbar jew żgħar, iżda t-titli bl-Ingliż ġeneralment jikkapitalizzaw l-ewwel ittra.

`i18` jista' jagħraf it-titli f' `MarkDown` , u awtomatikament se jikkapitalizza l-ewwel ittra meta tittraduċi f'lingwa li sensittiva għall-każ.

Per `为阅读体验而优化` se jiġi tradott bħala `Optimized for Reading Experience` .

### Termini Ingliżi Fiċ-Ċiniż, Ġappuniż, Korean U Ċiniż Mhumiex Tradotti

Dokumenti miċ-Ċina, il-Ġappun u l-Korea ħafna drabi jkun fihom ħafna termini bl-Ingliż.

It-traduzzjoni awtomatika tal-lingwi Ċiniżi, Ġappuniżi u Koreani saret lingwa mhux Ingliża, u t-termini spiss jiġu tradotti flimkien, bħas-sentenza Ċiniża li ġejja:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Jekk tuża Google jew DeepL, it-tnejn jittraduċu b'mod żbaljat termini Ingliżi li għandhom jibqgħu oriġinali (ħu l-Ġappuniż u l-Franċiż bħala eżempji).

### Google Translate

Tradott għall `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

<img alt="" src="//p.3ti.site/1720199391.avif">

Tradott għall `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` huwa tradott bħala `faucon` u `Llama` huwa tradott bħala `lama` . Bħala nomi proprji, m'għandhomx jiġu tradotti.

<img alt="" src="//p.3ti.site/1720199451.avif">

### Traduzzjoni DeepL

Tradott għall `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

<img alt="" src="//p.3ti.site/1720199550.avif">

DeepL Traduzzjoni ta' hawn fuq għall-Franċiż (kitba mill-ġdid ukoll tal-ismijiet proprji u żżid il-fard `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### Traduzzjoni i18n.site

It-traduzzjoni ta `i18` se tirrikonoxxi termini bl-Ingliż f'dokumenti Ċiniżi, Ġappuniżi u Koreani u tħalli t-termini intatti.

Pereżempju, ir-riżultat tat-traduzzjoni Ġappuniż hawn fuq huwa:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

It-traduzzjoni bil-Franċiż hija:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Huwa biss meta jkun hemm spazju bejn il-kelma Ingliża u t-test Ċiniż, Ġappuniż u Korean jew it-tul Ingliż ikun akbar minn 1, il-kelma titqies bħala terminu.

Pereżempju: `C罗` se jiġi tradott bħala `Cristiano Ronaldo` .

## Jista 'jiġi `i18n.site` Bini Ta' Websajt B'ħafna Lingwi

`i18` integrat fl-għodda tal-linja tal-kmand għall-bini ta' websajts b'ħafna lingwi [`i18n.site`](/i18n.site) .

Ara d-dokumentazzjoni ta' [`i18n.site`](/i18n.site)

## Kodiċi Sors Miftuħ

Il-klijent huwa sors kompletament miftuħ, u n-naħa tas- 90 % tal-kodiċi huwa sors miftuħ [Ikklikkja hawn biex tara l-kodiċi tas-sors](/i18n.site/src) .

Qegħdin infittxu voluntiera biex jipparteċipaw fl-iżvilupp ta’ kodiċi open source u qari tal-provi ta’ testi tradotti.

Jekk inti interessat, jekk jogħġbok [→ Ikklikkja hawn biex timla l-profil tiegħek](https://ggl.link/i18n) u mbagħad ingħaqad mal [-lista tal-posta](https://groups.google.com/u/2/g/i18n-site) għall-komunikazzjoni.

## Żomm Il-Kuntatt

Jekk jogħġbok <button onclick="mailsub()">ikklikkja din l-email biex tabbona għall-aġġornamenti tal-prodott</button> u <button onclick="webpush()">ppermettiet il-browser push</button> Aħna ninnotifikawk meta jsiru l-aġġornamenti tal-prodott.

Merħba ukoll issegwi l-kontijiet soċjali [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .
