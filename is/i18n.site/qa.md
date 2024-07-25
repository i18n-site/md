# Algengt Vandamál

## Eytt Fyrir Slysni `.i18n/V` Sem Veldur Því Að `Npm` Pakki Mistókst

Söguleg útgáfa af `npm` pakkaútgáfu er vistuð í `.i18n/v/ol/v.hash`

Ef þú eyðir óvart `.i18n/v/ol` verður `npm` pakkinn ekki birtur.

Á þessum tíma skaltu fyrst finna útgáfunúmer síðustu útgáfu af verkefninu þínu í [npmjs.com](//npmjs.com) til dæmis `0.1.9`

Vísaðu síðan `bash` búa til skrána hér að neðan.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Athugaðu að með því að gera við á þennan hátt tapast skráarferillinn, sem gerir það ómögulegt að uppfæra næstu útgáfu í skrefum og öllu efni verður endurpakkað og hlaðið upp einu sinni.

