# Algengar Spurningar

## Eyddi Óvart `.i18n/v` , Sem Veldur Því Að Pakki `npm` Mistókst Að Birta

Söguleg útgáfa sem gefin var út af pakka `npm` er vistuð í `.i18n/v/ol/v.hash` .

Ef þú eyðir `.i18n/v/ol` óvart verður pakki `npm` ekki gefinn út.

Á þessum tíma skaltu fyrst finna útgáfunúmer síðustu útgáfuútgáfu verkefnisins þíns í [npmjs.com](//npmjs.com) til dæmis `0.1.9` .

Vísaðu síðan til `bash` hér að neðan til að búa til skrána.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Athugaðu að með því að gera við á þennan hátt tapast skráarferillinn, sem gerir það ómögulegt að uppfæra næstu útgáfu í skrefum og öllu efni verður endurpakkað og hlaðið upp einu sinni.