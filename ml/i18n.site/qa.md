# പതിവുചോദ്യങ്ങൾ

## ആകസ്മികമായി ഇല്ലാതാക്കിയ `.i18n/v` , പാക്കേജ് `npm` പ്രസിദ്ധീകരിക്കുന്നതിൽ പരാജയപ്പെടുന്നതിന് കാരണമാകുന്നു

പാക്കേജ് `npm` പുറത്തിറക്കിയ ചരിത്ര പതിപ്പ് `.i18n/v/ol/v.hash` ൽ സംരക്ഷിച്ചിരിക്കുന്നു.

നിങ്ങൾ അബദ്ധത്തിൽ `.i18n/v/ol` പാക്കേജ് `npm` റിലീസ് ചെയ്യില്ല.

ഈ സമയത്ത്, നിങ്ങളുടെ പ്രോജക്റ്റിൻ്റെ അവസാന പതിപ്പിൻ്റെ പതിപ്പ് നമ്പർ ആദ്യം കണ്ടെത്തുക [npmjs.com](//npmjs.com) ഉദാഹരണത്തിന്, `0.1.9` .

ഫയൽ സൃഷ്ടിക്കാൻ ചുവടെയുള്ള `bash` റഫർ ചെയ്യുക.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

ഈ രീതിയിൽ റിപ്പയർ ചെയ്യുന്നത് ഫയൽ ചരിത്രം നഷ്ടപ്പെടുത്തുമെന്നത് ശ്രദ്ധിക്കുക, അടുത്ത പതിപ്പ് വർദ്ധിപ്പിച്ച് അപ്ഡേറ്റ് ചെയ്യുന്നത് അസാധ്യമാക്കുന്നു, കൂടാതെ എല്ലാ ഉള്ളടക്കവും വീണ്ടും പാക്കേജ് ചെയ്ത് ഒരിക്കൽ അപ്ലോഡ് ചെയ്യപ്പെടും.