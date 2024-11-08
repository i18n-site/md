# የምርት ባህሪያት

`i18` ለትርጉም የትእዛዝ መስመር መሳሪያ ነው Markdown & Yaml

## የማርክዳውን ቅርጸት በትክክል ማቆየት ይችላል።

ቅርጸቱን ሳይጎዳ የማርክዳውን ሠንጠረዦችን መተርጎሙን ይደግፋል፤ በሒሳብ ቀመሮች ወይም አገናኞች ውስጥ ቃላትን አይተረጎምም።

የተቀላቀለ ትርጉምን ይደግፋል HTML በ HTML `MarkDown` ውስጥ በ `<pre>` Markdown `<code>` ውስጥ ያለው ይዘት አልተተረጎመም።

## የሂሳብ ቀመሮችን ማወቅ እና ትርጉም መዝለል ይችላል።

የሂሳብ ቀመሮች ይታወቃሉ እና ትርጉም ተዘሏል.

የሂሳብ ቀመሮችን እንዴት እንደሚጽፉ፣ እባክዎን [" Github የሂሳብ መግለጫዎችን ስለመፃፍ"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) ይመልከቱ።

## በኮድ ቅንጥቦች ውስጥ አስተያየቶችን የመተርጎም ችሎታ

የውስጠ-መስመር ኮድ እና የኮድ ቅንጥቦች አልተተረጎሙም ፣ ግን በኮዱ ውስጥ ያሉ አስተያየቶች ሊተረጎሙ ይችላሉ።

የትርጉም አስተያየቶች ከ ` ``` ` በኋላ ቋንቋውን ማመልከት አለባቸው, ` ```rust ` :

በአሁኑ ጊዜ በ `toml` ፣ `yaml` ፣ `json5` ፣ `go` ፣ `rust` ፣ `c` ፣ `cpp` ፣ `java` ፣ `js` ፣ `coffee` ፣ `python` ፣ `bash` ፣ `php` [እና በሌሎች ቋንቋዎች](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) የማብራሪያ ትርጉምን ይደግፋል።

በኮዱ ውስጥ ያሉትን ሁሉንም እንግሊዝኛ ያልሆኑ ቁምፊዎችን ለመተርጎም ከፈለጉ የኮድ ክፍሉን በ ` ```i18n ` ምልክት ያድርጉበት።

የሚያስፈልግህ የፕሮግራም አወጣጥ ቋንቋ ከሌለ፣እባክህ [አግኘን](https://groups.google.com/g/i18n-site) ።

## የትእዛዝ መስመር ተስማሚ

የትርጉም ሰነዶችን ለማስተዳደር ብዙ [ከባድ ክብደት ያላቸው መሳሪያዎች](https://www.capterra.com/translation-management-software) አሉ።

`git` ፣ `vim` እና `vscode` ን ለሚያውቁ ፕሮግራመሮች እነዚህን መሳሪያዎች ሰነዶችን ለማረም እና ስሪቶችን ለማስተዳደር መጠቀማቸው የመማሪያ ወጪን እንደሚጨምር ጥርጥር የለውም።

`KISS` ( `Keep It Simple, Stupid` ) በመርህ አማኞች መካከል፣ በድርጅት ደረጃ ያሉ መፍትሄዎች አስቸጋሪ፣ ውጤታማ ያልሆኑ እና ለመጠቀም አስቸጋሪ ከመሆን ጋር ተመሳሳይ ናቸው።

የትርጉም ሥራ የሚከናወነው ትዕዛዞችን በማስገባት እና በአንድ ጠቅታ በማጠናቀቅ ነው.

አስፈላጊ ካልሆነ በስተቀር አካላትን አይጨምሩ.

## ምንም ለውጥ የለም, ምንም ትርጉም የለም

እንዲሁም አንዳንድ የትዕዛዝ መስመር የትርጉም መሳሪያዎች አሉ, ለምሳሌ [translate-shell](https://github.com/soimort/translate-shell)

ነገር ግን፣ የፋይል ማሻሻያዎችን መለየትን አይደግፉም እና ወጪን ለመቀነስ እና ቅልጥፍናን ለመጨመር የተሻሻሉ ፋይሎችን ብቻ ይተረጉማሉ።

## ትርጉሙ ሊስተካከል ይችላል፣ እና የማሽን ትርጉም ነባር ማሻሻያዎችን አይተካም።

ትርጉሙ ሊስተካከል የሚችል ነው።

ዋናውን ጽሑፍ ይቀይሩ እና በማሽን ይተርጉሙት፣ በትርጉሙ ላይ የተደረጉ ማሻሻያዎች አይገለበጡም (ይህ የዋናው ጽሑፍ አንቀጽ ካልተቀየረ)።

## ምርጥ ጥራት ያለው ማሽን ትርጉም

ትርጉሞችን ትክክለኛ፣ ለስላሳ እና የሚያምር ለማድረግ ባህላዊ የማሽን የትርጉም ሞዴሎችን እና ትልቅ የቋንቋ ሞዴሎችን ቴክኒካል ጥቅሞችን በማጣመር አዲስ የትርጉም ቴክኖሎጂ አዘጋጅተናል።

የዓይነ ስውራን ሙከራዎች እንደሚያሳዩት የትርጉም ጥራታችን ከተመሳሳይ አገልግሎቶች ጋር ሲወዳደር በጣም የተሻለ ነው።

ተመሳሳዩን ጥራት ለማግኘት በጎግል ተርጓሚ እና `ChatGPT` የሚፈለገው የእጅ አርትዖት መጠን ከእኛ `2.67` ጊዜ እና `3.15` እጥፍ ይበልጣል።

## <a rel=id href="#price" id="price"></a> እጅግ በጣም ተወዳዳሪ ዋጋ

|                                                                                   | ዶላር/ሚሊዮን ቃላት |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [ማይክሮሶፍት](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [አማዞን](https://aws.amazon.com/translate/pricing)                                | 15            |
| [በጉግል መፈለግ](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ github Libraryን ለመፍቀድ እና ለመከታተል i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) **$50 ለመቀበል** እዚህ ጠቅ ያድርጉ።

ማሳሰቢያ፡ የሚከፈሉ ቁምፊዎች ብዛት = በምንጭ ፋይል ውስጥ [ያሉት unicode ብዛት](https://en.wikipedia.org/wiki/Unicode) × በትርጉሙ ውስጥ ያሉ የቋንቋዎች ብዛት

## ትርጉምን ይደግፉ `YAML`

መሳሪያው የመዝገበ-ቃላትን እሴቶቹን የሚተረጉመው በ `YAML` ውስጥ ብቻ ነው, የመዝገበ-ቃላት ቁልፎችን አይደለም.

በ `YAML` ትርጉም ላይ በመመስረት ለተለያዩ የፕሮግራም አወጣጥ ቋንቋዎች አለምአቀፍ መፍትሄዎችን በቀላሉ መገንባት ይችላሉ።

## የድጋፍ ትርጉም `HOGO` ራስጌ ውቅር

የማይንቀሳቀስ ብሎግ የሚለውን የራስጌ [HOGO](https://github.com/gohugoio/hugo) ይደግፋል፣ እና መስኮችን `title` ፣ `summary` ፣ `brief` እና `description` ብቻ ይተረጉማል።

## ተለዋዋጭ ስሞችን አትተርጉም።

`Markdown` እንደ ኢሜል አብነት ጥቅም ላይ ይውላል, `YAML` እንደ ቋንቋ ፋይል ውቅር ጥቅም ላይ ይውላል, እና ተለዋዋጭ መለኪያዎች ይኖራሉ (ለምሳሌ: መሙላት `${amount}` ደርሷል).

እንደ `${varname}` ያሉ ተለዋዋጭ ስሞች እንደ እንግሊዝኛ ትርጉም አይቆጠሩም።

## ለቻይና፣ ጃፓን እና ኮሪያ የትርጉም ማመቻቸት

### ወደ እንግሊዘኛ ሲተረጎም የርዕሱ የመጀመሪያ ፊደል በራስ-ሰር አቢይ ነው የሚሆነው።

ቻይና፣ ጃፓን እና ኮሪያ አቢይ ሆሄያት የላቸውም፣ ነገር ግን የእንግሊዘኛ አርእስቶች ኮንቬንሽኑ የመጀመሪያውን ፊደል አቢይ ሆሄ ማድረግ ነው።

`i18` ርዕሱን በ `MarkDown` ውስጥ ማወቅ ይችላል እና ወደ ኬዝ-ስሱ ቋንቋ ሲተረጎም የመጀመሪያውን ፊደል በራስ-ሰር ያዘጋጃል።

ለምሳሌ, `为阅读体验而优化` ወደ `Optimized for Reading Experience` ይተረጎማል.

### በቻይንኛ፣ በጃፓንኛ፣ በኮሪያ እና በቻይንኛ የእንግሊዝኛ ቃላት አልተተረጎሙም።

ከቻይና፣ ከጃፓን እና ከኮሪያ የሚመጡ ሰነዶች ብዙ ጊዜ የእንግሊዝኛ ቃላትን ይይዛሉ።

የቻይንኛ ፣ የጃፓን እና የኮሪያ ቋንቋዎች የማሽን ትርጉም እንግሊዝኛ ያልሆነ ቋንቋ ሆኗል ፣ እና ቃላቶች ብዙውን ጊዜ አንድ ላይ ይተረጎማሉ ፣ ለምሳሌ የሚከተለው የቻይንኛ ዓረፍተ ነገር።

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

ጎግልን ወይም DeepLን የምትጠቀም ከሆነ ሁለቱም ኦሪጅናል መሆን ያለባቸውን የእንግሊዝኛ ቃላት በስህተት ተርጉመዋል (ጃፓን እና ፈረንሳይኛን እንደ ምሳሌ ውሰድ)።

### የጉግል ትርጉም

ወደ ጃፓንኛ `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` ተተርጉሟል :

![](//p.3ti.site/1720199391.avif)

ወደ ፈረንሳይኛ `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` ተተርጉሟል :

`Falcon` እንደ `faucon` እና `Llama` እንደ `lama` ተተርጉሟል. እንደ ትክክለኛ ስሞች, መተርጎም የለባቸውም.

![](//p.3ti.site/1720199451.avif)

### DeepL ትርጉም

ወደ ጃፓንኛ `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` ተተርጉሟል :

![](//p.3ti.site/1720199550.avif)

ከላይ ወደ ፈረንሳይኛ DeepL (እንዲሁም ትክክለኛዎቹን ስሞች እንደገና መጻፍ እና ያልተለመደ `... ` ማከል)

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.ጣቢያ ትርጉም

`i18` 's ትርጉም የእንግሊዝኛ ቃላትን በቻይንኛ፣ጃፓንኛ እና ኮሪያኛ ሰነዶችን ይገነዘባል እና ቃላቶቹ ሳይበላሹ ይተዋቸዋል።

ለምሳሌ፣ ከላይ ያለው የጃፓን ትርጉም ውጤት፡-

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

የፈረንሳይኛ ትርጉም፡-

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

በእንግሊዘኛ ቃል እና በቻይንኛ ፣ በጃፓን እና በኮሪያ ጽሑፍ መካከል ክፍተት ሲኖር ወይም የእንግሊዘኛ ርዝመት ከ 1 በላይ ሲሆን ብቻ ቃሉ እንደ ቃል ይቆጠራል።

ለምሳሌ፡- `C罗` እንደ `Cristiano Ronaldo` ይተረጎማል።

## ድር ጣቢያ ለመገንባት ከ `i18n.site` በላይ ቋንቋዎች ሊጣመር ይችላል።

`i18` ወደ ባለብዙ ቋንቋ ድረ-ገጽ ግንባታ የትእዛዝ መስመር መሣሪያ [`i18n.site`](/i18n.site) ውስጥ ተካቷል.

ለዝርዝሮች የ [`i18n.site`](/i18n.site) ሰነዱን ይመልከቱ።

## ኮድ ክፍት ምንጭ

ደንበኛው ሙሉ በሙሉ ክፍት ነው, እና የአገልጋዩ ጎን % ክፍት 90 [ኮድ](/i18n.site/c/src) ነው.

በክፍት ምንጭ ኮድ ልማት እና የተተረጎሙ ጽሑፎችን በማረም ላይ ለመሳተፍ ፈቃደኛ ሠራተኞችን እንፈልጋለን።

ፍላጎት ካሎት እባክዎ [→ መገለጫዎን ለመሙላት እዚህ ጠቅ ያድርጉ](https://ggl.link/i18n) እና ለግንኙነት [የፖስታ ዝርዝሩን](https://groups.google.com/u/2/g/i18n-site) ይቀላቀሉ።

## አትጥፋ

<button onclick="mailsub()">ለምርት ዝመናዎች ለመመዝገብ</button> እና <button onclick="webpush()">የአሳሽ ግፊትን ለማንቃት</button> እባክዎ ይህንን ኢሜይል ጠቅ ያድርጉ የምርት ዝመናዎች ሲደረጉ እናሳውቅዎታለን።

እንዲሁም የእኛን ማህበራዊ / ለመከተል [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) ደህና መጡ [X.COM: @i18nSite](https://x.com/i18nSite)