# पूछल जाए वाला सवाल

## अनुवाद के लाइन जोड़ल भा हटावल, जवना के परिणामस्वरूप अनुवाद में भ्रम पैदा हो जाला

> [!WARN]
> याद राखीं कि **अनुवाद में लाइन के संख्या मूल पाठ में लाइनन के अनुरूप होखे के चाहीं** .
> मतलब कि अनुवाद के मैन्युअल रूप से समायोजित करत घरी **अनुवाद के लाइन ना जोड़ल भा हटाईं** , ना त अनुवाद आ मूल पाठ के बीच के मैपिंग संबंध अव्यवस्थित हो जाई.

अगर गलती से कौनों लाइन जोड़ल भा हटाईं, जेह से भ्रम पैदा हो जाव, कृपया संशोधन से पहिले अनुवाद के संस्करण में बहाल करीं, `i18` अनुवाद के दोबारा चलाईं आ सही मैपिंग के दोबारा कैश करीं।

अनुवाद आ मूल पाठ के बीच के मैपिंग `.i18h/hash` से बान्हल बा [i18n.site/token](//i18n.site/token)

## `YAML` : लिंक `HTML` `Markdown` में बदले से कइसे बची

अनुवाद खातिर `YAML` के मान के `MarkDown` मानल जाला।

कई बेर `HTML` → `MarkDown` से रूपांतरण हमनी के चाहत ना होला, जइसे कि `<a href="/">Home</a>` `[Home](/)` में बदलल जाला।

`a` टैग में `href` के अलावा कौनों अउरी बिसेसता जोड़ल, जइसे कि `<a class="A" href="/">Home</a>` , एह रूपांतरण से बचावल जा सके ला।

## नीचे `./i18n/hash` फाइल टकराव बा

परस्पर विरोधी फाइल सभ के हटाईं आ `i18` अनुवाद के दोबारा चलाईं।