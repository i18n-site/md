# कमांड लाइन मापदंडों का विस्तृत विवरण

## `-p` फ़ाइलें साफ़ करें

`-p` या `--purge` उन फ़ाइलों को साफ़ कर देगा जो प्रत्येक अनुवाद निर्देशिका में मौजूद हैं लेकिन स्रोत भाषा निर्देशिका में मौजूद नहीं हैं।

क्योंकि दस्तावेज़ लिखते समय, मार्कडाउन फ़ाइल नामों को अक्सर समायोजित किया जाता है, जिससे अनुवाद निर्देशिका में कई पुरानी और परित्यक्त फ़ाइलें आ जाती हैं।

अन्य भाषा निर्देशिकाओं में हटाई जाने वाली फ़ाइलों को साफ़ करने के लिए इस पैरामीटर का उपयोग करें।

## `-d` अनुवाद निर्देशिका निर्दिष्ट करता है

अनुवादित निर्देशिका उस निर्देशिका पर डिफ़ॉल्ट होती है जहां वर्तमान फ़ाइल स्थित है।

`-d` या `--workdir` अनुवाद निर्देशिका निर्दिष्ट कर सकता है, जैसे:

```
i18 -d ~/i18n/md
```

## `-h` सहायता देखें

कमांड लाइन सहायता देखने के लिए `-h` या `--help` ।