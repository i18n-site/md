# आम समस्या

## अनुवादक पाँति जोड़ब वा मेटाब, जकर परिणाम अनुवादमे भ्रम उत्पन्न होइत अछि

मोन राखू, **अनुवाद मे पाँतिक संख्या मूल पाठ मे पाँतिक अनुरूप हेबाक चाही** .

अर्थात अनुवाद के मैन्युअल रूप स समायोजित करबा काल **अनुवाद के लाइन नै जोड़ू या मेटाउ** , अन्यथा अनुवाद आ मूल पाठ के बीच मैपिंग संबंध अव्यवस्थित भ जायत।

यदि अहाँ गलती सँ कोनो पाँति जोड़ैत छी वा मेटाबैत छी, जाहि सँ भ्रम उत्पन्न होइत अछि, कृपया संशोधन सँ पहिने अनुवाद केँ संस्करण मे पुनर्स्थापित करू, अनुवाद केँ `i18` चलाउ , आओर सही मैपिंग केँ फेर सँ कैश करू.

अनुवाद आ मूल पाठक बीचक मैपिंग टोकनसँ बान्हल `.i18h/hash` [i18n.site/token](//i18n.site/token)

## `YAML` लिंक के `HTML` के `Markdown` में बदलय स : रोकल जाय

के मान के `MarkDown` अनुवाद के लेल मानल जायत `YAML`

कखनो काल `HTML` → `MarkDown` के रूपांतरण जे हम चाहैत छी से नहि होइत अछि, जेना `<a href="/">Home</a>` के `[Home](/)` .

`a` टैग मे `href` अलावा कोनो विशेषता जोड़ू, जेना `<a class="A" href="/">Home</a>` , एहि रूपांतरण सँ बचबाक लेल.

## `./I18n/Hash` निम्नलिखित फाइल टकराव करैत अछि

परस्पर विरोधी फाइल सभकेँ मेटा दियौ आ अनुवाद करू `i18`
