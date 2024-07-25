# Komon Nga Problema

## Aksidente Nga Natangtang `.i18n/V` , Hinungdan Nga Ang `Npm` Package Napakyas Nga Mamantala

Ang makasaysayan nga bersyon sa `npm` pagpagawas sa pakete gitipigan sa `.i18n/v/ol/v.hash`

Kung wala ka tuyoa nga natangtang `.i18n/v/ol` ang `npm` package dili ma-publish.

Niining panahona, pangitaa una ang numero sa bersyon sa katapusang bersyon sa pagpagawas sa imong proyekto sa [npmjs.com](//npmjs.com) `0.1.9`

Dayon tan-awa ang `bash` Create file sa ubos.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Timan-i nga ang pag-ayo niining paagiha mawad-an sa kasaysayan sa payl, nga dili mahimo nga hinay-hinay nga i-update ang sunod nga pagpagawas, ug ang tanang sulod i-repack ug i-upload kausa.

