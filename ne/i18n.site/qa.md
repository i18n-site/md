# FAQ

## संयोगवश `.i18n/v` मेटाइयो, प्याकेज `npm` प्रकाशित हुन असफल भएको कारण

प्याकेज `npm` द्वारा जारी गरिएको ऐतिहासिक संस्करण `.i18n/v/ol/v.hash` मा बचत गरिएको छ।

यदि तपाईंले गल्तिले `.i18n/v/ol` प्याकेज `npm` जारी गरिने छैन।

यस समयमा, पहिले तपाईंको परियोजनाको अन्तिम रिलीज संस्करणको संस्करण नम्बर फेला पार्नुहोस् [npmjs.com](//npmjs.com) उदाहरणका लागि, `0.1.9` ।

त्यसपछि फाइल सिर्जना गर्न तलको `bash` लाई सन्दर्भ गर्नुहोस्।

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

ध्यान दिनुहोस् कि यस तरिकाले मर्मत गर्दा फाइल इतिहास हराउनेछ, यसले अर्को रिलीजलाई बढ्दो रूपमा अद्यावधिक गर्न असम्भव बनाउँछ, र सबै सामग्री एक पटक पुन: प्याकेज र अपलोड गरिनेछ।