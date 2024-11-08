# उत्पादन सुविधाहरू

`i18` अनुवादको लागि कमाण्ड लाइन उपकरण हो Markdown & Yaml

## मार्कडाउनको ढाँचालाई पूर्ण रूपमा कायम राख्न सक्छ

ढाँचालाई हानी नगरी मार्कडाउन तालिकाहरूको अनुवादलाई समर्थन गर्दछ गणितीय सूत्र वा लिङ्कहरूमा शब्दहरू अनुवाद गर्दैन।

मिश्रित HTML Markdown अनुवाद समर्थन गर्दछ, HTML `MarkDown` मा सम्मिलित ट्याग `<pre>` र `<code>` मा सामग्री अनुवाद गरिएको छैन

## गणितीय सूत्रहरू पहिचान गर्न र अनुवाद छोड्न सक्छ

गणितीय सूत्रहरू पहिचान गरिएको छ र अनुवाद छोडिएको छ।

गणितीय सूत्रहरू कसरी लेख्ने भनेर, कृपया [" Github गणितीय अभिव्यक्ति लेख्ने बारे"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) हेर्नुहोस्।

## कोड स्निपेटहरूमा टिप्पणीहरू अनुवाद गर्ने क्षमता

इनलाइन कोड र कोड स्निपेटहरू अनुवाद गरिएको छैन, तर कोडमा टिप्पणीहरू अनुवाद गर्न सकिन्छ।

अनुवाद टिप्पणीहरू ` ``` ` पछिको भाषा संकेत गर्न आवश्यक छ, जस्तै ` ```rust ` :

हाल, यसले `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [र अन्य भाषाहरूमा](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) एनोटेसन अनुवादलाई समर्थन गर्दछ।

यदि तपाइँ कोडमा सबै गैर-अंग्रेजी क्यारेक्टरहरू अनुवाद गर्न चाहनुहुन्छ भने, ` ```i18n ` को साथ कोड खण्ड चिन्ह लगाउनुहोस्।

यदि तपाईंलाई आवश्यक प्रोग्रामिङ भाषा उपलब्ध छैन भने, कृपया [हामीलाई सम्पर्क गर्नुहोस्](https://groups.google.com/g/i18n-site) ।

## कमाण्ड लाइन अनुकूल

अनुवाद कागजातहरू प्रबन्ध गर्नका लागि धेरै [हेवीवेट उपकरणहरू](https://www.capterra.com/translation-management-software) उपलब्ध छन्।

`git` , `vim` , र `vscode` सँग परिचित प्रोग्रामरहरूका लागि, कागजातहरू सम्पादन गर्न र संस्करणहरू प्रबन्ध गर्न यी उपकरणहरू प्रयोग गर्दा निस्सन्देह सिक्ने लागत बढ्नेछ।

`KISS` ( `Keep It Simple, Stupid` ) सिद्धान्त विश्वासीहरू बीच, उद्यम-स्तर समाधानहरू बोझिलो, अकुशल र प्रयोग गर्न गाह्रो हुने पर्यायवाची हुन्।

अनुवाद आदेशहरू इनपुट गरेर र यसलाई एक क्लिकमा पूरा गरेर कुनै जटिल वातावरण निर्भरता हुनु हुँदैन।

आवश्यक नभएसम्म संस्थाहरू थप नगर्नुहोस्।

## कुनै परिमार्जन, अनुवाद छैन

त्यहाँ केही आदेश रेखा अनुवाद उपकरणहरू पनि छन्, जस्तै [translate-shell](https://github.com/soimort/translate-shell)

यद्यपि, तिनीहरूले फाइल परिमार्जनहरू पहिचान गर्न समर्थन गर्दैनन् र लागत घटाउन र दक्षता बढाउन परिमार्जित फाइलहरू मात्र अनुवाद गर्छन्।

## अनुवाद सम्पादन गर्न सकिन्छ, र मेसिन अनुवादले अवस्थित परिमार्जनहरूलाई अधिलेखन गर्दैन।

अनुवाद सम्पादन योग्य छ।

मूल पाठ परिमार्जन गर्नुहोस् र मेसिन-यसलाई फेरि अनुवाद गर्नुहोस्, अनुवादमा म्यानुअल परिमार्जनहरू ओभरराइट हुने छैनन् (यदि मूल पाठको यो अनुच्छेद परिमार्जन गरिएको छैन)।

## उत्तम गुणस्तर मेसिन अनुवाद

हामीले अनुवाद प्रविधिको नयाँ पुस्ताको विकास गरेका छौं जसले अनुवादहरूलाई सही, सहज र सुन्दर बनाउन परम्परागत मेसिन अनुवाद मोडेलहरू र ठूला भाषा मोडेलहरूको प्राविधिक फाइदाहरू संयोजन गर्दछ।

ब्लाइन्ड परीक्षणहरूले समान सेवाहरूको तुलनामा हाम्रो अनुवादको गुणस्तर उल्लेखनीय रूपमा राम्रो भएको देखाउँछ।

समान गुणस्तर प्राप्त गर्न, Google अनुवादक र `ChatGPT` लाई आवश्यक म्यानुअल सम्पादनको मात्रा क्रमशः हाम्रो भन्दा `2.67` गुणा र `3.15` गुणा हो।

## <a rel=id href="#price" id="price"></a> अत्यधिक प्रतिस्पर्धी मूल्य निर्धारण

|                                                                                   | USD/मिलियन शब्दहरू |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [माइक्रोसफ्ट](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [अमेजन](https://aws.amazon.com/translate/pricing)                                | 15            |
| [गुगल](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ को github Library लाई प्राधिकृत गर्न र स्वचालित रूपमा पालना i18n.site यहाँ क्लिक गर्नुहोस्](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) र **बोनस $50 प्राप्त गर्नुहोस्** ।

नोट: बिल योग्य क्यारेक्टरहरूको संख्या = स्रोत फाइलमा [unicode संख्या](https://en.wikipedia.org/wiki/Unicode) × अनुवादमा भाषाहरूको संख्या

## समर्थन अनुवाद `YAML`

उपकरणले `YAML` मा शब्दकोश मानहरू मात्र अनुवाद गर्छ, शब्दकोश कुञ्जीहरू होइन।

`YAML` अनुवादको आधारमा, तपाइँ सजिलैसँग विभिन्न प्रोग्रामिङ भाषाहरूको लागि अन्तर्राष्ट्रिय समाधानहरू निर्माण गर्न सक्नुहुन्छ।

## समर्थन अनुवाद `HOGO` हेडर कन्फिगरेसन

स्ट्याटिक ब्लग [HOGO](https://github.com/gohugoio/hugo) हेडर कन्फिगरेसनलाई समर्थन गर्दछ, र `title` , `summary` , `brief` , र `description` मात्र अनुवाद गर्दछ।

## चर नामहरू अनुवाद नगर्नुहोस्

`Markdown` लाई इमेल टेम्प्लेटको रूपमा प्रयोग गरिन्छ, `YAML` भाषा फाइल कन्फिगरेसनको रूपमा प्रयोग गरिन्छ, र त्यहाँ चर प्यारामिटरहरू हुनेछन् (उदाहरणका लागि: रिचार्ज `${amount}` प्राप्त भएको छ)।

`${varname}` जस्ता चर नामहरूलाई अंग्रेजी अनुवादको रूपमा मानिने छैन।

## चीन, जापान र कोरियाको लागि अनुवाद अनुकूलन

### अङ्ग्रेजीमा अनुवाद गर्दा, शीर्षकको पहिलो अक्षर स्वतः क्यापिटल हुन्छ।

चीन, जापान र कोरियामा अपरकेस र लोअरकेस अक्षरहरू छैनन्, तर अङ्ग्रेजी शीर्षकहरूका लागि पहिलो अक्षरलाई क्यापिटल गर्नु पर्छ।

`i18` `MarkDown` मा शीर्षक पहिचान गर्न सक्छ, र केस-संवेदनशील भाषामा अनुवाद गर्दा स्वचालित रूपमा पहिलो अक्षर क्यापिटलाइज हुनेछ।

उदाहरण को लागी, `为阅读体验而优化` `Optimized for Reading Experience` मा अनुवाद गरिनेछ।

### चिनियाँ, जापानी, कोरियाली र चिनियाँ भाषामा अंग्रेजी शब्दहरू अनुवाद गरिएको छैन

चीन, जापान र कोरियाका कागजातहरूमा प्रायः धेरै अंग्रेजी शब्दहरू हुन्छन्।

चिनियाँ, जापानी र कोरियाली भाषाहरूको मेसिन अनुवाद एक गैर-अंग्रेजी भाषा भएको छ, र सर्तहरू प्राय: सँगै अनुवाद गरिन्छ, जस्तै निम्न चिनियाँ वाक्य:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

यदि तपाइँ Google वा DeepL प्रयोग गर्नुहुन्छ भने, तिनीहरू दुवैले गलत रूपमा अंग्रेजी सर्तहरू अनुवाद गर्छन् जुन मौलिक रहनुपर्छ (उदाहरणको रूपमा जापानी र फ्रान्सेली लिनुहोस्)।

### गुगल अनुवाद

जापानी `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` मा अनुवादित :

![](//p.3ti.site/1720199391.avif)

फ्रान्सेली `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` मा अनुवादित :

`Falcon` `faucon` को रूपमा अनुवाद गरिएको छ र `Llama` `lama` को रूपमा अनुवाद गरिएको छ। उचित संज्ञाहरूको रूपमा, तिनीहरू अनुवाद गर्नु हुँदैन।

![](//p.3ti.site/1720199451.avif)

### DeepL अनुवाद

जापानी `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` मा अनुवादित :

![](//p.3ti.site/1720199550.avif)

माथिको फ्रेन्चमा DeepL (उचित नामहरू पनि पुन: लेख्दै र अजीब `... ` थप्दै):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site अनुवाद

`i18` को अनुवादले चिनियाँ, जापानी र कोरियाली कागजातहरूमा अङ्ग्रेजी सर्तहरू पहिचान गर्नेछ र सर्तहरूलाई यथावत छोड्नेछ।

उदाहरणका लागि, माथिको जापानी अनुवाद परिणाम हो:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

फ्रान्सेली अनुवाद हो:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

अङ्ग्रेजी शब्द र चिनियाँ, जापानी र कोरियाली पाठ वा अङ्ग्रेजी लम्बाइ १ भन्दा बढी भएमा मात्र उक्त शब्दलाई पद मानिनेछ।

उदाहरण को लागी: `C罗` `Cristiano Ronaldo` को रूपमा अनुवाद गरिनेछ।

## वेबसाइट निर्माण गर्न `i18n.site` भन्दा बढी भाषाहरूसँग जोड्न सकिन्छ

`i18` बहु-भाषा वेबसाइट निर्माण कमाण्ड लाइन उपकरण [`i18n.site`](/i18n.site) मा एकीकृत छ।

विवरणहरूको लागि [`i18n.site`](/i18n.site) को कागजात हेर्नुहोस्।

## कोड खुला स्रोत

क्लाइन्ट पूर्ण रूपमा खुला स्रोत हो, र सर्भर साइड 90 स्रोत हो [स्रोत कोड हेर्न यहाँ क्लिक गर्नुहोस्](/i18n.site/c/src) ।

हामी खुला स्रोत कोडको विकास र अनुवादित पाठहरूको प्रूफरीडिङमा सहभागी हुन स्वयंसेवकहरू खोजिरहेका छौं।

यदि तपाइँ इच्छुक हुनुहुन्छ भने, कृपया [→ आफ्नो प्रोफाइल भर्न यहाँ क्लिक गर्नुहोस्](https://ggl.link/i18n) र त्यसपछि संचारको लागि [मेलिङ सूचीमा](https://groups.google.com/u/2/g/i18n-site) सामेल हुनुहोस्।

## सम्पर्कमा रहनुहोस्

<button onclick="mailsub()">उत्पादन अपडेटहरूको सदस्यता लिन</button> र <button onclick="webpush()">ब्राउजर पुश सक्षम गर्नको</button> लागि कृपया यो इमेलमा क्लिक गर्नुहोस् जब उत्पादन अद्यावधिकहरू बनाइन्छ हामी तपाईंलाई सूचित गर्नेछौं।

हाम्रो / खाताहरू पालना गर्न [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) स्वागत छ [X.COM: @i18nSite](https://x.com/i18nSite)