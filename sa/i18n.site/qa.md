# Faq

## आकस्मिकतया `.i18n/v` विलोपितम्, येन संकुल `npm` प्रकाशनं विफलम् अभवत्

संकुल `npm` द्वारा विमोचितं ऐतिहासिकं संस्करणं `.i18n/v/ol/v.hash` मध्ये रक्षितम् अस्ति |

यदि भवान् अकस्मात् `.i18n/v/ol` संकुलं `npm` न मुक्तं भविष्यति ।

अस्मिन् समये प्रथमं ! [npmjs.com](//npmjs.com) उदाहरणार्थं `0.1.9` मध्ये भवतः परियोजनायाः अन्तिमविमोचनसंस्करणस्य संस्करणसङ्ख्यां अन्वेष्टुम् ।

ततः सञ्चिकां निर्मातुं अधः `bash` पश्यन्तु ।

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

ध्यानं कुर्वन्तु यत् एतादृशरीत्या मरम्मतेन सञ्चिका-इतिहासः नष्टः भविष्यति, येन अग्रिम-विमोचनं क्रमेण अद्यतनीकरणं असम्भवं भवति, सर्वा सामग्री च एकवारं पुनः संकुलीकरणं अपलोड् च भविष्यति ।