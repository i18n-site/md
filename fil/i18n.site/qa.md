# Faq

## Aksidenteng Natanggal `.i18n/v` , Na Naging Dahilan Upang Mabigong Ma-Publish Ang Package `npm`

Ang makasaysayang bersyon na inilabas ng package `npm` ay naka-save sa `.i18n/v/ol/v.hash` .

Kung hindi mo sinasadyang matanggal `.i18n/v/ol` hindi ilalabas ang package `npm` .

Sa ngayon, hanapin muna ang numero ng bersyon ng huling bersyon ng paglabas ng iyong proyekto sa [npmjs.com](//npmjs.com) halimbawa, `0.1.9` .

Pagkatapos ay sumangguni sa `bash` sa ibaba upang gawin ang file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Tandaan na ang pag-aayos sa ganitong paraan ay mawawala ang kasaysayan ng file, na ginagawang imposibleng unti-unting i-update ang susunod na release, at ang lahat ng nilalaman ay ire-repack at ia-upload nang isang beses.