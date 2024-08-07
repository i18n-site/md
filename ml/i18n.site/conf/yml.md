# .i18n/conf.yml

കോൺഫിഗറേഷൻ ഫയൽ `.i18n/conf.yml` ആണ് `i18n.site`

[`i18`](/i18) എന്നതിൻ്റെ `ignore:` , `i18n:` ക്രമീകരണങ്ങൾ ഒഴികെ, കോൺഫിഗറേഷൻ ഫയൽ ഇപ്രകാരമാണ്:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

അവയിൽ, `upload` എന്നതിൻ്റെ `ext:` കോൺഫിഗറേഷൻ ഇനം പ്രസിദ്ധീകരിക്കുമ്പോൾ `.md` മാത്രമേ അപ്‌ലോഡ് ചെയ്യപ്പെടുകയുള്ളൂ എന്നാണ്.

## ടോപ്പ് നാവിഗേഷൻ nav

`nav:` കോൺഫിഗറേഷൻ ഓപ്ഷനുകൾ, ഹോം പേജിൻ്റെ മുകളിലുള്ള നാവിഗേഷൻ മെനുവിന് അനുയോജ്യമാണ്.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`en/i18n.yml` `home: Home` `i18n: home`

`zh/i18n.yml` പോലുള്ള ഒന്നിലധികം ഭാഷകളിലേക്ക് വിവർത്തനം ചെയ്യും `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

വിവർത്തനം പൂർത്തിയായ ശേഷം, നിങ്ങൾക്ക് വിവർത്തനത്തിലെ `yml` പരിഷ്‌ക്കരിക്കാനാകും, എന്നാൽ `yml` എന്നതിൻ്റെ കീ ചേർക്കുകയോ ഇല്ലാതാക്കുകയോ ചെയ്യരുത്.

### `use: Toc` സിംഗിൾ ഫയൽ ടെംപ്ലേറ്റ് (ഔട്ട്‌ലൈൻ സഹിതം)

കോൺഫിഗർ : `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` എന്നതിനർത്ഥം `Toc` റെൻഡറിംഗ് ഉപയോഗിക്കുന്നു, ഇത് ഒരു `Markdown` ടെംപ്ലേറ്റ് റെൻഡർ ചെയ്യുന്നു.

`TOC` `Table of Contents` ചുരുക്കെഴുത്താണ് ഈ ടെംപ്ലേറ്റ് റെൻഡർ ചെയ്യുമ്പോൾ, ഈ `Markdown` ഫയലിൻ്റെ രൂപരേഖ സൈഡ്‌ബാറിൽ പ്രദർശിപ്പിക്കും.

`url:` `Markdown` ഫയൽ പാതയെ പ്രതിനിധീകരിക്കുന്നു ( `/` റൂട്ട് ഡയറക്‌ടറിയുമായി യോജിക്കുന്നു `/README.md` , ഈ ഫയലിൻ്റെ പേരിന് ഒരു വലിയക്ഷര പ്രിഫിക്‌സും ചെറിയക്ഷര സഫിക്‌സും ആവശ്യമാണ്).

### `use: Md` സിംഗിൾ ഫയൽ ടെംപ്ലേറ്റ് (ഔട്ട്‌ലൈൻ ഇല്ല)

`Md` ടെംപ്ലേറ്റ് `Toc` സമാനമാണ്, രണ്ടും ഒരു `Markdown` ഫയൽ റെൻഡർ ചെയ്യാൻ ഉപയോഗിക്കുന്നു. എന്നിരുന്നാലും `Md` ടെംപ്ലേറ്റ് സൈഡ്‌ബാറിൽ ഔട്ട്‌ലൈൻ കാണിക്കുന്നില്ല.

നിങ്ങൾക്ക് മുകളിലെ കോൺഫിഗറേഷനിൽ `use: Md` എന്നതിലേക്ക് `use: Toc` `i18n.site` `md` ഡയറക്‌ടറിയിൽ വീണ്ടും പ്രവർത്തിക്കുക, തുടർന്ന് ഹോംപേജിലെ മാറ്റങ്ങൾ നിരീക്ഷിക്കുന്നതിന് ഡെവലപ്‌മെൻ്റ് പ്രിവ്യൂ URL സന്ദർശിക്കുക.

### കോൺഫിഗറേഷൻ പാത്ത് ഇല്ലാതെ ഡിഫോൾട്ട് ലോഡിംഗ്

ആക്‌സസ് ചെയ്യപ്പെടുന്ന ഒരു നിശ്ചിത പാതയുടെ പാത്ത് പ്രിഫിക്‌സ് `nav:` പാതയുമായി ബന്ധപ്പെട്ട `MarkDown` ഫയൽ ഡിഫോൾട്ടായി ലോഡ് ചെയ്യുകയും `Md` ടെംപ്ലേറ്റ് ഉപയോഗിച്ച് റെൻഡർ ചെയ്യുകയും ചെയ്യും.

`nav:` `/test` `en` `/en/test.md` `Md`

`/en/test.md` ഈ ഫയൽ നിലവിലില്ലെങ്കിൽ, ഡിഫോൾട്ട് `404` പേജ് പ്രദർശിപ്പിക്കും.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , മൾട്ടി-ഫയൽ ടെംപ്ലേറ്റ്

കോൺഫിഗറേഷൻ ഫയലിൽ:

```
  - i18n: blog
    use: Doc
```

ടെംപ്ലേറ്റ് റെൻഡറിങ്ങിനായി ഉപയോഗിക്കുന്നത് സൂചിപ്പിക്കുന്നു `Doc`

ഒറ്റ അല്ലെങ്കിൽ ഒന്നിലധികം പ്രോജക്റ്റുകൾക്കായി ഡോക്യുമെൻ്റ് ഔട്ട്‌ലൈനുകൾ സൃഷ്ടിക്കുന്നതിന് ഒന്നിലധികം `MarkDown` സംയോജിപ്പിക്കുന്നതിനെ ടെംപ്ലേറ്റ് പിന്തുണയ്ക്കുന്നു `Doc`

#### ഒറ്റ പ്രോജക്റ്റ് (ഒന്നിലധികം ഫയലുകൾ)

`blog` `Doc` ൻ്റെ ഏക-പ്രോജക്റ്റ് മോഡ് ആണ്.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url ശൂന്യമായിരിക്കുമ്പോൾ, അത് i18n-ൻ്റെ മൂല്യത്തിലേക്ക് സ്ഥിരസ്ഥിതിയായി മാറുന്നു

`url` `url` `i18n`

മുകളിലുള്ള എഴുത്ത് രീതി `url: blog` അതിൻ്റെ അനുബന്ധ ഫയൽ `en/blog/TOC` ആണ്

#### ഒന്നിലധികം പദ്ധതികൾ

`.i18n/conf.yml` `i18n:doc` എന്നതിലെ കോൺഫിഗറേഷൻ മൾട്ടി-പ്രോജക്റ്റ് മോഡാണ്.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

ഇവിടെ, ഡ്രോപ്പ്-ഡൗൺ മെനു റെൻഡർ ചെയ്യാൻ `NB` ഉപയോഗിക്കുന്നു `menu: NB demo1,demo2` അർത്ഥമാക്കുന്നത്.

`NB` `Name Breif`

`NB` `demo1,demo2`
കോമയിൽ `,` മുമ്പും ശേഷവും ** ഉണ്ടാകരുത് എന്നത് `demo1,demo2` : **

മുകളിലുള്ള പരാമീറ്ററുകൾക്കായി, അനുബന്ധ ഡയറക്ടറി സൂചിക ഫയൽ ഇതാണ്:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC ഉള്ളടക്ക സൂചിക

ഡയറക്‌ടറി ഔട്ട്‌ലൈൻ `json` ജനറേറ്റുചെയ്യുന്നതിന് ഡയറക്‌ടറി ഇൻഡക്‌സ് ഫയൽ `doc` ടെംപ്ലേറ്റ് കോൺഫിഗറേഷന് അനുസരിച്ച് `TOC` വായിക്കാൻ ഡെമോ വെയർഹൗസിലെ `js` പ്ലഗിൻ `.i18n/hook/after.tran/TOC.js` എക്‌സിക്യൂട്ട് ചെയ്യും `i18n.site`

നിങ്ങൾ `doc` ഉപയോഗിക്കുകയാണെങ്കിൽ, നിങ്ങൾക്ക് ഈ പ്ലഗ്-ഇൻ ഉണ്ടായിരിക്കണം.

നിങ്ങൾ ഒരു ശൂന്യമായ ഫോൾഡറിൽ നിന്ന് `i18n.site` ആരംഭിക്കുകയാണെങ്കിൽ, ഡെമോ പ്രോജക്റ്റിലെ `.i18n` നിങ്ങളുടെ ഡയറക്ടറിയിലേക്ക് പകർത്താൻ ഓർക്കുക.

`Doc` `json`

##### വിശദമായ ഉള്ളടക്ക വിശദീകരണം

ഉള്ളടക്കം : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### ലെവലുകൾ സൂചിപ്പിക്കാൻ ഇൻഡൻ്റേഷൻ ഉപയോഗിക്കുക

മുകളിലുള്ള `en/blog/TOC` ആദ്യ വരിയിലെ `README.md` പ്രോജക്റ്റ് നാമമായ ചുവടെയുള്ള ചിത്രത്തിലെ `i18n.site` ന് സമാനമാണ്.

താഴെയുള്ള സ്ക്രീൻഷോട്ടിൽ കാണിച്ചിരിക്കുന്നതുപോലെയാണ് അടുത്ത രണ്ട് വരികൾ.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` യോജിക്കുന്നത് `News` ,
`news/begin.md` യോജിക്കുന്നത് `Our Product is Online !`

`TOC` ഔട്ട്‌ലൈനിൻ്റെ ശ്രേണിപരമായ ബന്ധം സൂചിപ്പിക്കാൻ ഫയൽ ഇൻഡൻ്റ് ചെയ്‌തിരിക്കുന്നു കൂടാതെ മൾട്ടി ലെവൽ ഇൻഡൻ്റേഷനെ പിന്തുണയ്ക്കുന്നു.

##### പാരൻ്റ് ലെവൽ ശീർഷകം മാത്രമേ എഴുതുകയുള്ളൂ, ഉള്ളടക്കമല്ല.

ഒന്നിലധികം തലത്തിലുള്ള ഇൻഡൻ്റേഷൻ ഉള്ളപ്പോൾ, പാരൻ്റ് ലെവൽ ശീർഷകം മാത്രമേ എഴുതുകയുള്ളൂ, ഉള്ളടക്കമല്ല. അല്ലെങ്കിൽ, ടൈപ്പോഗ്രാഫി കുഴപ്പത്തിലാകും.

##### പ്രോജക്റ്റ് README.md 

പ്രോജക്റ്റിൻ്റെ `README.md` , ഉദാഹരണത്തിന്, നിങ്ങൾക്ക് `en/demo2/README.md` എന്നതിൽ ഉള്ളടക്കം എഴുതാം.

ഈ ഫയലിൻ്റെ ഉള്ളടക്കം ഒരു ഉള്ളടക്ക പട്ടിക കാണിക്കുന്നില്ലെന്നത് ശ്രദ്ധിക്കുക, അതിനാൽ ദൈർഘ്യം പരിമിതപ്പെടുത്താനും ഒരു ചെറിയ ആമുഖം എഴുതാനും ശുപാർശ ചെയ്യുന്നു.

###### പദ്ധതി മുദ്രാവാക്യം

`Your Project slogan` കാണാനാകുന്നതുപോലെ : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ആദ്യ വരിയുമായി യോജിക്കുന്നു `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

പ്രൊജക്റ്റ് `README.md` ഒന്നാം ലെവൽ ശീർഷകത്തിലെ ആദ്യ കോളൻ `:` ന് ശേഷമുള്ള ഉള്ളടക്കം പ്രോജക്റ്റ് മുദ്രാവാക്യമായി കണക്കാക്കും.

ചൈന, ജപ്പാൻ, കൊറിയ എന്നിവിടങ്ങളിൽ നിന്നുള്ള ഉപയോക്താക്കൾ, പൂർണ്ണ വീതിയുള്ള കോളണിന് പകരം നിങ്ങൾ പകുതി വീതിയുള്ള കോളൻ ഉപയോഗിക്കണമെന്ന് ദയവായി ശ്രദ്ധിക്കുക `:`

##### TOC ബൾക്ക് ആയി എങ്ങനെ നീക്കാം?

`TOC` ഫയൽ ഉറവിട ഭാഷയുടെ ഡയറക്ടറിയിൽ സ്ഥാപിക്കേണ്ടതുണ്ട്.

ഉദാഹരണത്തിന്, ഉറവിട ഭാഷ ചൈനീസ് ആണെങ്കിൽ, മുകളിലുള്ളത് `zh/blog/TOC` `TOC`

ഉറവിട ഭാഷ പരിഷ്‌ക്കരിച്ചിട്ടുണ്ടെങ്കിൽ, പ്രോജക്‌റ്റിലെ ഒരു പ്രത്യേക ഭാഷയിലുള്ള `TOC` മറ്റൊരു ഭാഷയിലേക്ക് മാറ്റേണ്ടതുണ്ട്.

നിങ്ങൾക്ക് ഇനിപ്പറയുന്ന കമാൻഡുകൾ റഫർ ചെയ്യാം:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

നിങ്ങളുടെ ഭാഷാ കോഡിലേക്ക് മുകളിലുള്ള കമാൻഡിൽ `zh/` പരിഷ്‌ക്കരിക്കുക `en/`


