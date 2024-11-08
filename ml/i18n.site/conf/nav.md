# ഇഷ്ടാനുസൃത നാവിഗേഷൻ

നാവിഗേഷൻ ഇഷ്ടാനുസൃതമാക്കുന്നത് എങ്ങനെയെന്ന് വിശദീകരിക്കാൻ നമുക്ക് ഡെമോ സൈറ്റ് എടുക്കാം [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

മുകളിലെ ചിത്രത്തിലെ അക്കമിട്ട പ്രദേശങ്ങളുമായി ബന്ധപ്പെട്ട ഫയലുകൾ ഇപ്രകാരമാണ്:

1. ഇടത് [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. വലത് [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) എന്നത് `HTML` 's സൃഷ്ടിക്കുന്ന ഒരു ടെംപ്ലേറ്റ് ഭാഷയാണ്.

[➔ എന്നതിൻ്റെ വ്യാകരണം പഠിക്കാൻ ഇവിടെ ക്ലിക്ക് ചെയ്യുക pug](https://pugjs.org)

അന്താരാഷ്ട്രവൽക്കരണം നടപ്പിലാക്കുന്നതിനായി ഫയലിൽ ഫോർമാറ്റ് സ്ട്രിംഗ് `${I18N.sponsor}` ഉപയോഗിക്കുന്നു, കൂടാതെ അതിൻ്റെ ഉള്ളടക്കം ഉറവിട ഭാഷാ ഡയറക്ടറിയിലെ അനുബന്ധ [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) ഉപയോഗിച്ച് മാറ്റിസ്ഥാപിക്കും.

**`pug` ൽ `css` ഉം `js` എഴുതരുത്** , അല്ലെങ്കിൽ ഒരു പിശക് ഉണ്ടാകും.

ശൈലികൾ `css` ആയി എഴുതിയിരിക്കുന്നു, കൂടാതെ വെബ് ഘടകങ്ങൾ സൃഷ്ടിക്കുന്നതിലൂടെ ഇടപെടൽ നേടുന്നു.

ഇവിടെ, [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) ബാറിൻ്റെ ശൈലിയുമായി ബന്ധപ്പെട്ട ഫയൽ :