# Karaniwang Problema

## Hindi Sinasadyang Natanggal `.i18n/V` , Na Naging Dahilan Upang Mabigong Ma-Publish Ang `Npm` Package

Ang makasaysayang bersyon ng `npm` release ng package ay naka-save sa `.i18n/v/ol/v.hash`

Kung hindi mo sinasadyang natanggal `.i18n/v/ol` hindi maipa-publish ang `npm` package.

Sa oras na ito, hanapin muna ang numero ng bersyon ng huling bersyon ng paglabas ng iyong proyekto sa [npmjs.com](//npmjs.com) `0.1.9`

Pagkatapos ay sumangguni sa `bash` Create file sa ibaba.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Tandaan na ang pag-aayos sa ganitong paraan ay mawawala ang kasaysayan ng file, na ginagawang imposibleng unti-unting i-update ang susunod na release, at ang lahat ng nilalaman ay ire-repackage at ia-upload nang isang beses.

