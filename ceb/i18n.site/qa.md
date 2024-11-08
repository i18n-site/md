# Faq

## Aksidenteng Natangtang `.i18n/v` , Hinungdan Nga Napakyas Ang Package `npm` Nga Mamantala

Ang makasaysayan nga bersyon nga gipagawas sa package `npm` gitipigan sa `.i18n/v/ol/v.hash` .

Kung wala nimo tuyoa nga matangtang `.i18n/v/ol` ang package `npm` dili ipagawas.

Niining panahona, pangitaa una ang numero sa bersyon sa katapusang bersyon sa pagpagawas sa imong proyekto sa [npmjs.com](//npmjs.com) pananglitan, `0.1.9` .

Dayon tan-awa ang `bash` sa ubos aron mahimo ang file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Timan-i nga ang pag-ayo niining paagiha mawad-an sa kasaysayan sa payl, nga dili mahimo nga hinay-hinay nga i-update ang sunod nga pagpagawas, ug ang tanang sulod i-repack ug i-upload kausa.