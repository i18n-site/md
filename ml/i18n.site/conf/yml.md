# .i18n/conf.yml

`i18n.site` എന്നതിനായുള്ള കോൺഫിഗറേഷൻ ഫയൽ `.i18n/conf.yml` ആണ്, ഉള്ളടക്കം ഇപ്രകാരമാണ് :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

അവയിൽ, `upload` മുതൽ `ext:` വരെയുള്ള കോൺഫിഗറേഷൻ ഇനം അർത്ഥമാക്കുന്നത് പ്രസിദ്ധീകരിക്കുമ്പോൾ `.md` മാത്രമേ അപ്ലോഡ് ചെയ്യപ്പെടുകയുള്ളൂ എന്നാണ്.

## ടോപ്പ് നാവിഗേഷൻ nav

`nav:` കോൺഫിഗറേഷൻ ഓപ്ഷനുകൾ, ഹോംപേജിൻ്റെ മുകളിലുള്ള നാവിഗേഷൻ മെനുവിനോട് യോജിക്കുന്നു.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

അവയിൽ, `i18n: home` `en/i18n.yml` -ൽ `home: Home` ന് തുല്യമാണ് (ഇവിടെ `en` എന്നത് പ്രോജക്റ്റ് വിവർത്തനത്തിൻ്റെ ഉറവിട ഭാഷയാണ്).

നാവിഗേഷൻ മെനുവിൽ പ്രദർശിപ്പിച്ചിരിക്കുന്ന വാചകമാണ് `en/i18n.yml` ഉള്ളടക്കം, അത് കോൺഫിഗറേഷനിലെ `fromTo` അനുസരിച്ച് വിവർത്തനം ചെയ്യപ്പെടും, ഉദാഹരണത്തിന്, `zh/i18n.yml` ലേക്ക് വിവർത്തനം ചെയ്യപ്പെടും.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

വിവർത്തനം പൂർത്തിയായ ശേഷം, നിങ്ങൾക്ക് വിവർത്തനം `yml` ൻ്റെ മൂല്യം പരിഷ്ക്കരിക്കാനാകും, എന്നാൽ വിവർത്തനം `yml` ൻ്റെ കീ ചേർക്കുകയോ ഇല്ലാതാക്കുകയോ ചെയ്യരുത്.

### 0 ഔട്ട്ലൈനോടുകൂടിയ `use: Toc` ഡോക്യുമെൻ്റ് ടെംപ്ലേറ്റ്

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` എന്നാൽ `Toc` ടെംപ്ലേറ്റ് ഉപയോഗിച്ച് റെൻഡർ ചെയ്യുന്നു, അത് ഒറ്റ `Markdown` ടെംപ്ലേറ്റ് റെൻഡർ ചെയ്യുന്നു.

`TOC` എന്നത് `Table of Contents` ൻ്റെ ചുരുക്കമാണ്. ഈ ടെംപ്ലേറ്റ് റെൻഡർ ചെയ്യുമ്പോൾ, ഈ `Markdown` ഫയലിൻ്റെ രൂപരേഖ സൈഡ്ബാറിൽ പ്രദർശിപ്പിക്കും.

`url:` `Markdown` ൻ്റെ ഫയൽ പാതയെ പ്രതിനിധീകരിക്കുന്നു ( `/` റൂട്ട് ഡയറക്ടറി `/README.md` യുമായി യോജിക്കുന്നു, ഈ ഫയലിൻ്റെ പേരിന് ഒരു വലിയക്ഷര പ്രിഫിക്സും ഒരു ചെറിയക്ഷര സഫിക്സും ആവശ്യമാണ്).

### 0 ഔട്ട്ലൈൻ ഇല്ലാതെ `use: Md` ഡോക്യുമെൻ്റ് ടെംപ്ലേറ്റ്

`Md` ടെംപ്ലേറ്റും `Toc` ടെംപ്ലേറ്റും ഒന്നുതന്നെയാണ്, രണ്ടും ഒരു `Markdown` ഫയൽ റെൻഡർ ചെയ്യാൻ ഉപയോഗിക്കുന്നു. എന്നാൽ `Md` ടെംപ്ലേറ്റ് സൈഡ്ബാറിൽ ഔട്ട്ലൈൻ കാണിക്കുന്നില്ല.

നിങ്ങൾക്ക് മുകളിലെ കോൺഫിഗറേഷനിലെ `use: Toc` `use: Md` ആയി പരിഷ്കരിക്കാം, `md` ഡയറക്ടറിയിൽ `i18n.site` വീണ്ടും പ്രവർത്തിപ്പിക്കുക, തുടർന്ന് ഹോംപേജിലെ മാറ്റങ്ങൾ നിരീക്ഷിക്കാൻ ഡെവലപ്മെൻ്റ് പ്രിവ്യൂ URL സന്ദർശിക്കുക.

### `use: Blog` ബ്ലോഗ് ടെംപ്ലേറ്റുകൾ

ബ്ലോഗ് ടെംപ്ലേറ്റ് പ്രസിദ്ധീകരണ സമയത്തിൻ്റെ ക്രമത്തിൽ ലേഖനങ്ങളുടെ (ശീർഷകങ്ങളും സംഗ്രഹങ്ങളും) ഒരു ലിസ്റ്റ് പ്രദർശിപ്പിക്കുന്നു.

[→ നിർദ്ദിഷ്ട കോൺഫിഗറേഷനെ കുറിച്ച് അറിയാൻ ഇവിടെ ക്ലിക്ക് ചെയ്യുക](/i18n.site/conf/blog)

### `use: Doc` ഫയൽ ഡോക്യുമെൻ്റ് ടെംപ്ലേറ്റുകൾ

കോൺഫിഗറേഷൻ ഫയലിൽ:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

ടെംപ്ലേറ്റ് റെൻഡറിങ്ങിനായി `Doc` ഉപയോഗിക്കുന്നത് സൂചിപ്പിക്കുന്നു.

ഒറ്റ അല്ലെങ്കിൽ ഒന്നിലധികം പ്രോജക്റ്റുകൾക്കായി ഡോക്യുമെൻ്റ് ഔട്ട്ലൈനുകൾ സൃഷ്ടിക്കുന്നതിന് ഒന്നിലധികം `MarkDown` സംയോജിപ്പിക്കുന്നതിനെ `Doc` ടെംപ്ലേറ്റ് പിന്തുണയ്ക്കുന്നു.

#### ഒന്നിലധികം പദ്ധതികളും ഒന്നിലധികം ഫയലുകളും

മൾട്ടി-പ്രോജക്റ്റ് മൾട്ടി-ഫയൽ റെൻഡറിംഗ് മോഡ് ആണ് `i18n:doc` -ൽ `.i18n/conf.yml` -ൻ്റെ കോൺഫിഗറേഷൻ.

ഇവിടെ, `menu: NB demo1,demo2` , ഡ്രോപ്പ്-ഡൗൺ മെനു റെൻഡർ ചെയ്യുന്നതിന് `NB` ടെംപ്ലേറ്റ് ഉപയോഗിക്കുന്നു എന്നാണ് അർത്ഥമാക്കുന്നത്.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , `Name Breif` ൻ്റെ ചുരുക്കെഴുത്താണ്, ഡ്രോപ്പ്-ഡൗൺ മെനുവിന് പ്രോജക്റ്റിൻ്റെ പേരും മുദ്രാവാക്യവും പ്രദർശിപ്പിക്കാൻ കഴിയും എന്നാണ്.

`NB` ന് ശേഷം `demo1,demo2` എന്ന പാരാമീറ്റർ അതിലേക്ക് കടന്നു.

`demo1,demo2` : ** `,` **

മുകളിലുള്ള പരാമീറ്ററുകൾക്കുള്ള അനുബന്ധ ഡയറക്ടറി സൂചിക ഫയൽ ഇതാണ്:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### ഒറ്റ പ്രൊജക്റ്റ് ഒന്നിലധികം ഫയലുകൾ

നിങ്ങൾക്ക് ഒരു പ്രോജക്റ്റ് മാത്രമേ ഉള്ളൂവെങ്കിൽ, നിങ്ങൾക്ക് അത് ഇനിപ്പറയുന്ന രീതിയിൽ ക്രമീകരിക്കാം.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> ഒന്നിലധികം ഫയലുകളുള്ള ഒറ്റ പ്രോജക്റ്റ്, റൂട്ട് പാത്ത് `/` ആയി `url` കോൺഫിഗർ ചെയ്യുന്നതിനെ പിന്തുണയ്ക്കുന്നില്ല
> __conf.yml nav:__ `nav:`
> ഡയറക്ടറികളിലൂടെ പ്രോജക്റ്റ് ഡോക്യുമെൻ്റുകൾ, ബ്ലോഗുകൾ, മറ്റ് ഉള്ളടക്കങ്ങൾ എന്നിവ നന്നായി വേർതിരിച്ചറിയുന്നതിനാണ് ഈ ഡിസൈൻ.
> ഒരു ഫയലും ഒരു പേജും ഹോം പേജായി ഉപയോഗിക്കാൻ ശുപാർശ ചെയ്യുന്നു.

> [!TIP]
> `url` എഴുതിയിട്ടില്ലെങ്കിൽ, `i18n` ൻ്റെ മൂല്യത്തിലേക്ക് `url` സ്ഥിരസ്ഥിതിയായി മാറുന്നു. മറ്റ് ടെംപ്ലേറ്റുകൾക്കും ഈ നിയമം പ്രാബല്യത്തിൽ വരും.

#### TOC ഉള്ളടക്ക സൂചിക

കോൺഫിഗറേഷനിൽ ടെംപ്ലേറ്റ് `use: Doc` പ്രവർത്തനക്ഷമമാക്കിയിട്ടുണ്ടെങ്കിൽ, ദയവായി `.i18n/conf.yml` -ൽ പ്ലഗ്-ഇൻ `i18n.addon/toc` പ്രവർത്തനക്ഷമമാക്കുക. കോൺഫിഗറേഷൻ ഇപ്രകാരമാണ് :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` ഈ പ്ലഗ്-ഇൻ സ്വയമേവ ഇൻസ്റ്റാൾ ചെയ്യുകയും എക്സിക്യൂട്ട് ചെയ്യുകയും ചെയ്യും, `TOC` ഡയറക്ടറി സൂചിക ഫയൽ വായിക്കുകയും `json` ഡയറക്ടറി ഔട്ട്ലൈൻ സൃഷ്ടിക്കുകയും ചെയ്യും.

ഒന്നിലധികം ഫയലുകളുള്ള ഒരു പ്രൊജക്റ്റ് ആണെങ്കിൽ, സോഴ്സ് ലാംഗ്വേജ് ഡയറക്ടറിയിലെ `url:` ന് അനുയോജ്യമായ ഡയറക്ടറിയാണ് റൂട്ട് ഡയറക്ടറി `TOC` , ഉദാഹരണത്തിന്, സോഴ്സ് ഭാഷ ചൈനീസ് ആണെങ്കിൽ: `url: flashduty` -ന് അനുയോജ്യമായ ഫയൽ `zh/flashduty/TOC` ആണ്.

ഒന്നിലധികം പ്രൊജക്റ്റുകളും ഒന്നിലധികം ഫയലുകളുമാണെങ്കിൽ, `url:` കോൺഫിഗർ ചെയ്യേണ്ട ആവശ്യമില്ല. `TOC` ൻ്റെ റൂട്ട് ഡയറക്ടറി `i18n` ൻ്റെ മൂല്യവുമായി ബന്ധപ്പെട്ട ഡയറക്ടറിയാണ്.

##### വിശദമായ ഉള്ളടക്ക വിശദീകരണം

`en/blog/TOC` ഉള്ളടക്കം ഇപ്രകാരമാണ് :

```
README.md

news/README.md
  news/begin.md
```

##### ലെവലുകൾ സൂചിപ്പിക്കാൻ ഇൻഡൻ്റേഷൻ ഉപയോഗിക്കുക

മുകളിലുള്ള `en/blog/TOC` -ൻ്റെ ആദ്യ വരിയിലെ `README.md` ചുവടെയുള്ള ചിത്രത്തിലെ `i18n.site` മായി യോജിക്കുന്നു, അത് പ്രോജക്റ്റ് നാമമാണ്.

താഴെയുള്ള സ്ക്രീൻഷോട്ടിൽ കാണിച്ചിരിക്കുന്നതുപോലെയാണ് അടുത്ത രണ്ട് വരികൾ.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` ന് യോജിക്കുന്നു,
`news/begin.md` `Our Product is Online !` ന് തുല്യമാണ്

`TOC` ഫയലുകൾ ഔട്ട്ലൈനിൻ്റെ ശ്രേണിപരമായ ബന്ധം സൂചിപ്പിക്കാൻ ഇൻഡൻ്റ് ചെയ്തിരിക്കുന്നു, മൾട്ടി-ലെവൽ ഇൻഡൻ്റേഷനെ പിന്തുണയ്ക്കുക, `# ` ൽ ആരംഭിക്കുന്ന ലൈൻ കമൻ്റുകൾ.

##### പാരൻ്റ് ലെവൽ ശീർഷകം മാത്രമേ എഴുതുകയുള്ളൂ, ഉള്ളടക്കമല്ല.

ഒന്നിലധികം തലത്തിലുള്ള ഇൻഡൻ്റേഷൻ ഉള്ളപ്പോൾ, പാരൻ്റ് ലെവൽ ശീർഷകം മാത്രമേ എഴുതുകയുള്ളൂ, ഉള്ളടക്കമല്ല. അല്ലെങ്കിൽ, ടൈപ്പോഗ്രാഫി കുഴപ്പത്തിലാകും.

##### പ്രോജക്റ്റ് README.md

`en/demo2/README.md` പോലെയുള്ള ഇനം `README.md` ൽ ഉള്ളടക്കം എഴുതാം.

ഈ ഫയലിൻ്റെ ഉള്ളടക്കം ഒരു ഉള്ളടക്ക പട്ടിക കാണിക്കുന്നില്ലെന്നത് ശ്രദ്ധിക്കുക, അതിനാൽ ദൈർഘ്യം പരിമിതപ്പെടുത്താനും ഒരു ചെറിയ ആമുഖം എഴുതാനും ശുപാർശ ചെയ്യുന്നു.

###### പദ്ധതി മുദ്രാവാക്യം

ഡ്രോപ്പ്-ഡൗൺ മെനുവും കാറ്റലോഗ് ഔട്ട്ലൈൻ പ്രോജക്റ്റ് നാമവും `Your Project slogan` ന് താഴെ `Deme Two` പ്രോജക്റ്റ് ടാഗ്ലൈൻ ഉണ്ടെന്ന് നിങ്ങൾക്ക് കാണാൻ കഴിയും :

![](https://p.3ti.site/1721276842.avif)

ഇത് `en/demo2/README.md` ൻ്റെ ആദ്യ വരിയുമായി യോജിക്കുന്നു :

```
# Demo Two : Your Project slogan
```

പ്രോജക്റ്റ് `README.md` ൻ്റെ ആദ്യ തലത്തിലെ ആദ്യ കോളൻ `:` ന് ശേഷമുള്ള ഉള്ളടക്കം പ്രോജക്റ്റ് മുദ്രാവാക്യമായി കണക്കാക്കും.

ചൈന, ജപ്പാൻ, കൊറിയ എന്നിവിടങ്ങളിൽ നിന്നുള്ള ഉപയോക്താക്കൾ, പൂർണ്ണ വീതിയുള്ള കോളണിന് പകരം പകുതി വീതിയുള്ള കോളൻ `:` ഉപയോഗിക്കണമെന്ന് ദയവായി ശ്രദ്ധിക്കുക.

##### TOC ബൾക്ക് ആയി എങ്ങനെ നീക്കാം?

ഉറവിട ഭാഷയുടെ ഡയറക്ടറിയിൽ `TOC` ഫയലുകൾ സ്ഥാപിക്കേണ്ടതുണ്ട്.

ഉദാഹരണത്തിന്, ഉറവിട ഭാഷ ചൈനീസ് ആണെങ്കിൽ, മുകളിലുള്ള `TOC` `zh/blog/TOC` ആണ്.

ഉറവിട ഭാഷ പരിഷ്ക്കരിച്ചിട്ടുണ്ടെങ്കിൽ, പ്രോജക്റ്റിലെ ഒരു പ്രത്യേക ഭാഷയുടെ `TOC` ഫയലുകൾ മറ്റൊരു ഭാഷയിലേക്ക് നിങ്ങൾ ബാച്ച് നീക്കേണ്ടതുണ്ട്.

നിങ്ങൾക്ക് ഇനിപ്പറയുന്ന കമാൻഡുകൾ റഫർ ചെയ്യാം:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

മുകളിലുള്ള കമാൻഡിലെ `en/` , `zh/` നിങ്ങളുടെ ഭാഷാ കോഡിലേക്ക് മാറ്റുക.

### കോൺഫിഗറേഷൻ പാത്ത് ഇല്ലാതെ ഡിഫോൾട്ട് ലോഡിംഗ്

ഒരു നിശ്ചിത പാത്ത് ആക്സസ് ചെയ്യുന്നതിനായി, `nav:` -ൽ പാത്ത് പ്രിഫിക്സ് ക്രമീകരിച്ചിട്ടില്ലെങ്കിൽ, പാതയുമായി ബന്ധപ്പെട്ട `MarkDown` ഫയൽ ഡിഫോൾട്ടായി ലോഡ് ചെയ്യുകയും `Md` ടെംപ്ലേറ്റ് ഉപയോഗിച്ച് റെൻഡർ ചെയ്യുകയും ചെയ്യും.

ഉദാഹരണത്തിന്, ഈ പാതയുടെ പ്രിഫിക്സ് ഇല്ലാതെ `/test` ആക്സസ് ചെയ്യുകയും `nav:` കോൺഫിഗർ ചെയ്യുകയും ചെയ്തിട്ടുണ്ടെങ്കിൽ, നിലവിലെ ബ്രൗസിംഗ് ഭാഷ ഇംഗ്ലീഷ് (കോഡ് `en` ) ആണെങ്കിൽ, `/en/test.md` സ്ഥിരസ്ഥിതിയായി ലോഡുചെയ്യുകയും ടെംപ്ലേറ്റ് `Md` ഉപയോഗിച്ച് റെൻഡർ ചെയ്യുകയും ചെയ്യും.

`/en/test.md` ഈ ഫയൽ നിലവിലില്ലെങ്കിൽ, സ്ഥിരസ്ഥിതി `404` പേജ് പ്രദർശിപ്പിക്കും.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">