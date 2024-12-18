# अक्सर पूछे जाने वाले प्रश्न

## अनुवाद की पंक्तियाँ जोड़ने या हटाने से अनुवाद में भ्रम उत्पन्न होता है

> [!WARN]
> याद रखें, **अनुवाद में पंक्तियों की संख्या मूल पाठ की पंक्तियों के अनुरूप होनी चाहिए** ।
> कहने का तात्पर्य यह है कि, अनुवाद को मैन्युअल रूप से समायोजित करते समय, **अनुवाद की पंक्तियों को जोड़ें या हटाएं नहीं** , अन्यथा अनुवाद और मूल पाठ के बीच मैपिंग संबंध अव्यवस्थित हो जाएगा।

यदि आप गलती से कोई पंक्ति जोड़ या हटा देते हैं, जिससे भ्रम पैदा होता है, तो कृपया संशोधन से पहले अनुवाद को संस्करण में पुनर्स्थापित करें, `i18` अनुवाद फिर से चलाएँ, और सही मैपिंग को फिर से कैश करें।

अनुवाद और मूल पाठ के बीच मैपिंग टोकन से बंधी है। [i18n.site/token](//i18n.site/token) `.i18h/hash` हटाएं, और भ्रमित मैपिंग को साफ़ करने के लिए फिर से अनुवाद करें (लेकिन इससे अनुवाद में सभी मैन्युअल समायोजन खो जाएंगे)।

## `YAML` : लिंक `HTML` `Markdown` में बदलने से कैसे बचें?

अनुवाद के लिए `YAML` का मान `MarkDown` माना जाता है।

कभी-कभी `HTML` → `MarkDown` से रूपांतरण वह नहीं होता जो हम चाहते हैं, जैसे `<a href="/">Home</a>` `[Home](/)` में परिवर्तित किया जाना।

`a` टैग में `href` के अलावा कोई भी विशेषता जोड़ने से, जैसे `<a class="A" href="/">Home</a>` , इस रूपांतरण से बचा जा सकता है।

## नीचे `./i18n/hash` फ़ाइल विरोध है

परस्पर विरोधी फ़ाइलें हटाएँ और `i18` अनुवाद पुनः चलाएँ।