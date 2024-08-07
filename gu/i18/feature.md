# ઉત્પાદનના લક્ષણો

અનુવાદ માટે એક આદેશ વાક્ય સાધન Markdown & Yaml `i18`

## માર્કડાઉનનું ફોર્મેટ સંપૂર્ણ રીતે જાળવી શકે છે

ફોર્મેટને નુકસાન પહોંચાડ્યા વિના માર્કડાઉન કોષ્ટકોના અનુવાદને સમર્થન આપે છે તે ગાણિતિક સૂત્રો અથવા લિંક્સમાંના શબ્દોનો અનુવાદ કરતું નથી.

Markdown in mixed HTML ના અનુવાદને સપોર્ટ કરે છે `<pre>` `<code>` tags માં HTML કરેલ `MarkDown`

## ગાણિતિક સૂત્રો ઓળખી શકે છે અને અનુવાદ છોડી શકે છે

ગાણિતિક સૂત્રો ઓળખાય છે અને અનુવાદ છોડવામાં આવે છે.

ગાણિતિક સૂત્રો કેવી રીતે લખવા તે માટે, કૃપા કરીને [" Github ગાણિતિક અભિવ્યક્તિઓ લખવા વિશે"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) નો સંદર્ભ લો.

## કોડ સ્નિપેટ્સમાં ટિપ્પણીઓનો અનુવાદ કરવાની ક્ષમતા

ઇનલાઇન કોડ અને કોડ સ્નિપેટ્સનું ભાષાંતર કરવામાં આવતું નથી, પરંતુ કોડમાંની ટિપ્પણીઓનું ભાષાંતર કરી શકાય છે.

અનુવાદ ટિપ્પણીઓ પછીની ભાષા સૂચવવી જરૂરી છે ` ``` ` જેમ કે ` ```rust ` :

હાલમાં , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` `js` `coffee` `python` , `bash` , `php` [અને અન્ય ભાષાઓમાં](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) ટિપ્પણીઓના અનુવાદને સમર્થન આપે છે `toml`

જો તમને જોઈતી પ્રોગ્રામિંગ ભાષા ઉપલબ્ધ ન હોય, તો કૃપા કરીને [અમારો સંપર્ક કરો](https://groups.google.com/g/i18n-site) .

## કમાન્ડ લાઇન મૈત્રીપૂર્ણ

અનુવાદ દસ્તાવેજોનું સંચાલન કરવા માટે ઘણા [હેવીવેઇટ સાધનો](https://www.capterra.com/translation-management-software) ઉપલબ્ધ છે.

પ્રોગ્રામરો જેઓ `git` , `vim` , `vscode` થી પરિચિત છે, દસ્તાવેજોને સંપાદિત કરવા અને સંસ્કરણોનું સંચાલન કરવા માટે આ સાધનોનો ઉપયોગ નિઃશંકપણે શીખવાની કિંમતમાં વધારો કરશે.

( `Keep It Simple, Stupid` ) સિદ્ધાંતમાં વિશ્વાસ કરનારાઓમાં, એન્ટરપ્રાઇઝ-લેવલ સોલ્યુશન્સ બોજારૂપ, બિનકાર્યક્ષમ અને ઉપયોગમાં લેવા માટે મુશ્કેલ હોવાના `KISS` છે.

કમાન્ડને ઇનપુટ કરીને અને તેને એક ક્લિકથી પૂર્ણ કરીને અનુવાદ થવો જોઈએ.

જ્યાં સુધી જરૂરી ન હોય ત્યાં સુધી સંસ્થાઓ ઉમેરશો નહીં.

## કોઈ ફેરફાર નથી, કોઈ અનુવાદ નથી

કેટલાક આદેશ વાક્ય અનુવાદ સાધનો પણ છે, જેમ કે [translate-shell](https://github.com/soimort/translate-shell)

જો કે, તેઓ ફાઇલ ફેરફારોને ઓળખવા માટે સપોર્ટ કરતા નથી અને ખર્ચ ઘટાડવા અને કાર્યક્ષમતા વધારવા માટે માત્ર સંશોધિત ફાઇલોનું ભાષાંતર કરે છે.

## અનુવાદ સંપાદિત કરી શકાય છે, અને મશીન અનુવાદ હાલના ફેરફારોને ઓવરરાઈટ કરશે નહીં.

અનુવાદ સંપાદનયોગ્ય છે.

મૂળ લખાણમાં ફેરફાર કરો અને મશીન-તેનો ફરીથી અનુવાદ કરો, અનુવાદમાં મેન્યુઅલ ફેરફારો ફરીથી લખવામાં આવશે નહીં (જો મૂળ ટેક્સ્ટના આ ફકરામાં ફેરફાર કરવામાં આવ્યો નથી).

## Xindaya નો ઉચ્ચ-ગુણવત્તાનો અનુવાદ

અમે અનુવાદ તકનીકની નવી પેઢી વિકસાવી છે જે અનુવાદને સચોટ, સરળ અને ભવ્ય બનાવવા માટે પરંપરાગત મશીન અનુવાદ મોડલ અને મોટા ભાષાના મોડલના તકનીકી ફાયદાઓને જોડે છે.

અંધ પરીક્ષણો દર્શાવે છે કે સમાન સેવાઓની તુલનામાં અમારા અનુવાદની ગુણવત્તા નોંધપાત્ર રીતે સારી છે.

સમાન ગુણવત્તા હાંસલ કરવા માટે, Google Translate અને `ChatGPT` દ્વારા મેન્યુઅલ એડિટિંગની સંખ્યા અનુક્રમે `2.67` ગણી અને `3.15` ગણી છે.

## <a rel=id href="#price" id="price"></a> અત્યંત સ્પર્ધાત્મક ભાવ

|                                                                                   | USD/મિલિયન શબ્દો |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [માઈક્રોસોફ્ટ](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [એમેઝોન](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

નોંધ: બિલપાત્ર અક્ષરોની સંખ્યા = સ્રોત ફાઇલમાં [unicode સંખ્યા](https://en.wikipedia.org/wiki/Unicode) × અનુવાદમાં ભાષાઓની સંખ્યા

## અનુવાદને સપોર્ટ કરો `YAML`

ટૂલ માત્ર ડિક્શનરીના મૂલ્યોનું ભાષાંતર કરે છે `YAML` ડિક્શનરી કીનો નહીં.

`YAML` આધારે, તમે વિવિધ પ્રોગ્રામિંગ ભાષાઓ માટે સરળતાથી આંતરરાષ્ટ્રીય ઉકેલો બનાવી શકો છો.

## હેડર રૂપરેખાંકનને સપોર્ટ `HOGO`

સ્ટેટિક બ્લોગના હેડર કન્ફિગરેશનને સપોર્ટ કરે [HOGO](https://github.com/gohugoio/hugo) , ફક્ત `title` , `summary` અને `description` ફીલ્ડ્સનું ભાષાંતર થાય છે.

## ચલ નામોનો અનુવાદ કરશો નહીં

ઈમેલ ટેમ્પલેટ તરીકે ઉપયોગ થાય `Markdown` , `YAML` ભાષા ફાઈલ રૂપરેખાંકન તરીકે, ત્યાં વેરીએબલ પરિમાણો હશે (ઉદાહરણ તરીકે: રિચાર્જ `${amount}` પ્રાપ્ત થયું છે).

આ પ્રકારના ચલ નામને અંગ્રેજી અનુવાદ તરીકે ગણવામાં આવશે `${varname}` .

## ચાઇના, જાપાન અને કોરિયા માટે અનુવાદ ઑપ્ટિમાઇઝેશન

### જ્યારે અંગ્રેજીમાં અનુવાદિત થાય છે, ત્યારે શીર્ષકનો પ્રથમ અક્ષર આપમેળે કેપિટલાઇઝ થાય છે.

ચીન, જાપાન અને કોરિયામાં અપરકેસ અથવા લોઅરકેસ અક્ષરો નથી, પરંતુ અંગ્રેજી શીર્ષકો સામાન્ય રીતે પ્રથમ અક્ષરને કેપિટલાઇઝ કરે છે.

`i18` `MarkDown` શીર્ષકો ઓળખી શકે છે, અને જ્યારે કેસ-સંવેદનશીલ ભાષામાં અનુવાદ કરવામાં આવે ત્યારે આપમેળે પ્રથમ અક્ષરને કેપિટલાઇઝ કરશે.

ઉદાહરણ તરીકે `Optimized for Reading Experience` તરીકે અનુવાદિત કરવામાં આવશે `为阅读体验而优化`

### ચાઇનીઝ, જાપાનીઝ, કોરિયન અને ચાઇનીઝમાં અંગ્રેજી શબ્દોનો અનુવાદ કરવામાં આવતો નથી

ચીન, જાપાન અને કોરિયાના દસ્તાવેજોમાં ઘણી વખત અંગ્રેજી શબ્દો હોય છે.

ચાઇનીઝ, જાપાનીઝ અને કોરિયન ભાષાઓનું મશીન ટ્રાન્સલેશન એ બિન-અંગ્રેજી ભાષા બની ગયું છે, અને શબ્દો ઘણીવાર એકસાથે અનુવાદિત થાય છે, જેમ કે નીચેના ચાઇનીઝ વાક્ય:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

જો તમે Google અથવા DeepL નો ઉપયોગ કરો છો, તો તે બંને અંગ્રેજી શબ્દોનો ખોટી રીતે અનુવાદ કરે છે જે મૂળ રહેવો જોઈએ (ઉદાહરણ તરીકે જાપાનીઝ અને ફ્રેન્ચ લો).

### ગૂગલ અનુવાદ

`ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` અનુવાદિત :

<img alt="" src="//p.3ti.site/1720199391.avif">

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` અનુવાદિત :

`Falcon` `faucon` તરીકે અનુવાદિત થાય છે અને `Llama` ભાષાંતર `lama` . યોગ્ય સંજ્ઞાઓ તરીકે, તેઓનું ભાષાંતર ન કરવું જોઈએ.

<img alt="" src="//p.3ti.site/1720199451.avif">

### ડીપએલ અનુવાદ

`ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` અનુવાદિત :

<img alt="" src="//p.3ti.site/1720199550.avif">

ઉપરોક્તનો ફ્રેન્ચમાં DeepL (યોગ્ય નામો પણ ફરીથી લખવા અને વિચિત્ર ઉમેરો `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

<img alt="" src="//p.3ti.site/1720199603.avif">

### i18n.site અનુવાદ

`i18` અનુવાદ ચાઈનીઝ, જાપાનીઝ અને કોરિયન દસ્તાવેજોમાં અંગ્રેજી શબ્દોને ઓળખશે અને શરતોને અકબંધ રાખશે.

ઉદાહરણ તરીકે, ઉપરના જાપાનીઝ અનુવાદનું પરિણામ છે:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

ફ્રેન્ચ અનુવાદ છે:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

જ્યારે અંગ્રેજી શબ્દ અને ચાઈનીઝ, જાપાનીઝ અને કોરિયન લખાણ વચ્ચે જગ્યા હોય અથવા અંગ્રેજી લંબાઈ 1 કરતા વધારે હોય ત્યારે જ શબ્દને શબ્દ તરીકે ગણવામાં આવશે.

ઉદાહરણ તરીકે: `C罗` `Cristiano Ronaldo` અનુવાદિત કરવામાં આવશે.

## મલ્ટી-લેંગ્વેજ વેબસાઇટ બિલ્ડિંગને જોડી શકાય `i18n.site`

બહુભાષી વેબસાઇટ બિલ્ડીંગ [`i18n.site`](/i18n.site) માટે કમાન્ડ લાઇન ટૂલમાં સંકલિત છે `i18`

[`i18n.site`](/i18n.site) માટે દસ્તાવેજીકરણ જુઓ.

## કોડ ઓપન સોર્સ

ક્લાયંટ સંપૂર્ણપણે ઓપન સોર્સ છે, અને કોડનો % ઓપન સોર્સ છે 90 [સોર્સ કોડ જોવા માટે અહીં ક્લિક કરો](/i18n.site/src) .

અમે ઓપન સોર્સ કોડના વિકાસ અને અનુવાદિત ગ્રંથોના પ્રૂફરીડિંગમાં ભાગ લેવા માટે સ્વયંસેવકોની શોધમાં છીએ.

જો તમને રસ હોય, તો કૃપા કરીને [→ તમારી પ્રોફાઇલ ભરવા માટે અહીં ક્લિક કરો](https://ggl.link/i18n) અને પછી સંદેશાવ્યવહાર માટે [મેઇલિંગ સૂચિમાં](https://groups.google.com/u/2/g/i18n-site) જોડાઓ.

## સંપર્કમાં રહો

<button onclick="mailsub()">ઉત્પાદન અપડેટ્સ પર સબ્સ્ક્રાઇબ કરવા માટે કૃપા કરીને આ ઇમેઇલ પર ક્લિક કરો</button> અને <button onclick="webpush()">બ્રાઉઝર પુશને સક્ષમ કરો</button> જ્યારે ઉત્પાદન અપડેટ કરવામાં આવશે ત્યારે અમે તમને સૂચિત કરીશું.

અમારા સામાજિક એકાઉન્ટને અનુસરવા માટે [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) / છે [X.COM: @i18nSite](https://x.com/i18nSite)
