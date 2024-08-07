# ഇൻസ്റ്റാൾ ചെയ്യുക &

## കോൺഫിഗറേഷൻ ടോക്കൺ

`i18n.site` `i18` വിവർത്തന ഉപകരണം ഉൾച്ചേർത്തിരിക്കുന്നു, [ആക്സസ് ടോക്കൺ കോൺഫിഗർ ചെയ്യുന്നതിനായി `i18` ഡോക്യുമെൻ്റ് റഫർ ചെയ്യാൻ ഇവിടെ ക്ലിക്ക് ചെയ്യുക](/i18/use) .

## ഇൻസ്റ്റാൾ ചെയ്യുക

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## ഡെമോ പ്രോജക്റ്റ്

നമുക്ക് ഒരു ഡെമോ പ്രോജക്റ്റ് ഉപയോഗിച്ച് ആരംഭിക്കാം, എങ്ങനെ ഉപയോഗിക്കാമെന്ന് പഠിക്കാം `i18n.site`

ഞങ്ങൾ ആദ്യം ഡെമോ റിപ്പോസിറ്ററി ക്ലോൺ ചെയ്യുകയും കമാൻഡ് ഇനിപ്പറയുന്ന രീതിയിൽ പ്രവർത്തിപ്പിക്കുകയും ചെയ്യുന്നു:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

ചൈനയിലെ ഉപയോക്താക്കൾക്ക് ഇവ ചെയ്യാനാകും:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### വിവർത്തനം ചെയ്യുക

ആദ്യം, `md` നൽകി `i18n.site` റൺ ചെയ്യുക, അത് `en` എന്നതിലേക്ക് വിവർത്തനം ചെയ്യും `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

പ്രവർത്തിപ്പിച്ചതിന് ശേഷം, വിവർത്തനവും `git add . ` ഫയലുകളും സൃഷ്ടിക്കപ്പെടും `md`

### പ്രാദേശിക പ്രിവ്യൂ

ഇൻസ്റ്റാൾ ചെയ്ത് `docker` ( `MAC` `docker` ൻ്റെ റൺടൈം ആയി [orbstack](https://orbstack.dev) ശുപാർശ ചെയ്യുന്നു).

തുടർന്ന്, `docker` നൽകി `./up.sh` റൺ ചെയ്യുക, തുടർന്ന് പ്രാദേശികമായി പ്രിവ്യൂ ചെയ്യാൻ [https://127.0.0.1](https://127.0.0.1) .

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### ഉള്ളടക്കം പോസ്റ്റ് ചെയ്യുക

`i18n.site` [ഒരൊറ്റ പേജ് ആപ്ലിക്കേഷൻ](https://developer.mozilla.org/docs/Glossary/SPA) ആർക്കിടെക്ചർ സ്വീകരിക്കുന്നു, കൂടാതെ വെബ്‌സൈറ്റ് പ്രവേശന പേജും വെബ്‌സൈറ്റ് ഉള്ളടക്കവും സ്വതന്ത്രമായി വിന്യസിച്ചിരിക്കുന്നു.

മുകളിലെ വിവർത്തനം പ്രവർത്തിപ്പിച്ചതിന് ശേഷം, `htm` , `v` ഡയറക്‌ടറികൾ `md/out/dev`

ഇവിടെ, `dev` ഇത് `.i18n/htm/dev.yml` ഫയലിനെ അടിസ്ഥാനമാക്കി നിർമ്മിച്ചതാണെന്ന് സൂചിപ്പിക്കുന്നു.

`dev` :

`htm` ഡയറക്‌ടറിക്ക് കീഴിൽ വെബ്‌സൈറ്റ് പ്രവേശന പേജ് ഉണ്ട്.

`v` ഡയറക്‌ടറിയിൽ പതിപ്പ് നമ്പറുള്ള വെബ്‌സൈറ്റ് ഉള്ളടക്കം അടങ്ങിയിരിക്കുന്നു.

പതിപ്പ് നമ്പർ പരിഗണിക്കാതെ തന്നെ ലോക്കൽ പ്രിവ്യൂ എല്ലാ ഫയലുകളും `out/dev/v/0.1.0` പകർത്തും.

ഔദ്യോഗിക റിലീസിനായി, മാറ്റിയ ഫയലുകൾ പുതിയ പതിപ്പ് നമ്പർ ഡയറക്‌ടറിയിലേക്ക് പകർത്തും.

#### കോൺഫിഗറേഷൻ ഫയൽ വ്യക്തമാക്കാൻ -c ഉപയോഗിക്കുക

വ്യത്യസ്ത കോൺഫിഗറേഷൻ ഫയലുകൾ `out`

ഉദാഹരണത്തിന്, `.i18n/htm/ol.yml` ഒരു `out/ol` ഡയറക്ടറി സൃഷ്ടിക്കും.

`dev.yml` `ol.yml` എന്നിവ ഡിഫോൾട്ട് കോൺഫിഗറേഷനുകളാണ്.

`dev` എന്നത് ഡെവലപ്‌മെൻ്റ് എൻവയോൺമെൻ്റിനെ പ്രതിനിധീകരിക്കുന്ന `development` എന്നതിൻ്റെ ചുരുക്കെഴുത്താണ്, ഇത് പ്രാദേശിക പ്രിവ്യൂവിനായി ഉപയോഗിക്കുന്നു, കൂടാതെ ഡിഫോൾട്ട് കോൺഫിഗറേഷൻ ഫയൽ കൂടിയാണ്.
`ol` `online` ചുരുക്കെഴുത്താണ്, ഇത് ഓൺലൈൻ പരിതസ്ഥിതിയെ പ്രതിനിധീകരിക്കുന്നു, ഇത് ഔദ്യോഗിക റിലീസിനായി ഉപയോഗിക്കുന്നു, കൂടാതെ `npm` `-n` കമാൻഡ് ലൈൻ പാരാമീറ്റർ ഉപയോഗിച്ച് പ്രസിദ്ധീകരിക്കുമ്പോൾ സ്ഥിരസ്ഥിതി കോൺഫിഗറേഷൻ ഫയലും ആണ്.

കോൺഫിഗറേഷൻ ഫയലിൻ്റെ പേര് വ്യക്തമാക്കുന്നതിന് `--htm_conf` മറ്റ് കോൺഫിഗറേഷൻ ഫയലുകളും സൃഷ്ടിക്കാൻ കഴിയും.

ഉദാഹരണത്തിന്:
```
i18n.site --htm_conf yourConfig --save
```

അപ്‌ഡേറ്റ് റിലീസ് പതിപ്പ് നമ്പർ `--save` സൂചിപ്പിക്കുന്നു.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com-ലേക്ക് ഉള്ളടക്കം പ്രസിദ്ധീകരിക്കുക

[npmjs.com](//npmjs.com) ഉള്ളടക്കം പ്രസിദ്ധീകരിക്കുന്നത് ശുപാർശ ചെയ്യുന്ന സ്ഥിരസ്ഥിതി പരിഹാരമാണ് ( [ഫ്രണ്ട്-എൻഡ് ഉയർന്ന ലഭ്യത](/i18n.site/feature#ha) കാണുക).

##### npm login & പ്രകാശനം

ഇൻസ്റ്റാൾ ചെയ്യുക `nodejs` ലോഗിൻ ചെയ്യാൻ `npm login` ഉപയോഗിക്കുക.

`v: //unpkg.com/i18n.site` `md/.i18n/htm/ol.yml` `i18n.site` `npm`

എന്നതിലെ ഉപയോഗശൂന്യമായ പാക്കേജ് നാമം ഉപയോഗിക്കുക [npmjs.com](//npmjs.com)

`npm` പാക്കേജിനെ അടിസ്ഥാനമാക്കി പ്രസിദ്ധീകരിക്കുമ്പോൾ, `v:` മൂല്യത്തിൻ്റെ പ്രിഫിക്‌സായി **`//unpkg.com/` ഉപയോഗിക്കുന്നത് ഉറപ്പാക്കുക** `i18n.site` ഈ പ്രിഫിക്‌സ് പാതയ്ക്ക് കീഴിൽ `/.v` പുതിയ റിലീസുകൾ സമയബന്ധിതമായി കാണുന്നതിന് പ്രത്യേകം ഒപ്റ്റിമൈസ് ചെയ്‌തിരിക്കുന്നു.

വിവർത്തനം ചെയ്യാനും പ്രസിദ്ധീകരിക്കാനും `md` `i18n.site --npm` അല്ലെങ്കിൽ `i18n.site -n` റൺ ചെയ്യുക.

പ്രസിദ്ധീകരിക്കാൻ നിങ്ങൾ ഒരു തുടർച്ചയായ സംയോജന അന്തരീക്ഷം ഉപയോഗിക്കുകയാണെങ്കിൽ, അത് ഇൻസ്റ്റാൾ ചെയ്യേണ്ട `nodejs` ലോഗിൻ ചെയ്തതും പ്രസിദ്ധീകരിച്ചതുമായ അനുമതി `~/.npmrc` പരിസ്ഥിതിയിലേക്ക് പകർത്തുക.

നിങ്ങൾ `v:` `ol.yml` പാക്കേജിൻ്റെ പേര് പരിഷ്‌ക്കരിക്കുകയാണെങ്കിൽ, **ആദ്യം `.i18n/v/ol` ഇല്ലാതാക്കി അത് പ്രസിദ്ധീകരിക്കുന്നത് ഉറപ്പാക്കുക** .

##### npm പ്രസിദ്ധീകരിച്ച പ്രോക്സി സെർവർ

ചൈനയിലെ ഉപയോക്താക്കൾക്ക് നെറ്റ്‌വർക്ക് പ്രശ്‌നങ്ങൾ `https_proxy` `npm`

നിങ്ങളുടെ പ്രോക്‌സി സെർവർ പോർട്ട് `7890` നിങ്ങൾക്ക് എഴുതാം:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### സ്വയം ഹോസ്റ്റ് ചെയ്ത ഉള്ളടക്കം

നിങ്ങൾക്ക് ഉള്ളടക്കം സ്വയം-ഹോസ്‌റ്റ് ചെയ്യണമെങ്കിൽ, ആദ്യം എഡിറ്റ് `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` നിങ്ങളുടെ URL പ്രിഫിക്‌സിലേക്ക് മാറ്റുക, ഉദാഹരണത്തിന് `v: //i18n-v.xxx.com` .

`md` നൽകി പ്രവർത്തിപ്പിക്കുക

```
i18n.site --htm_conf ol --save
```

അല്ലെങ്കിൽ ചുരുക്കെഴുത്ത്

```
i18n.site -c ol -s
```

തുടർന്ന്, `v:` എന്നതിൽ സജ്ജീകരിച്ചിരിക്കുന്ന URL പ്രിഫിക്‌സ് പാതയിലേക്ക് `md/out/ol/v` ഉള്ളടക്കം കോൺഫിഗർ ചെയ്യുക.

അവസാനമായി, **`1s` `/.v` അവസാനിക്കുന്ന പാതയുടെ കാഷെ സമയം ക്രമീകരിക്കുക** , അല്ലാത്തപക്ഷം പുതുതായി പുറത്തിറക്കിയ ഉള്ളടക്കം ഉടനടി ആക്സസ് ചെയ്യാൻ കഴിയില്ല.

അനാവശ്യ അഭ്യർത്ഥനകൾ കുറയ്ക്കുന്നതിന് മറ്റ് പാതകൾക്കായുള്ള കാഷെ സമയം ഒരു വർഷമോ അതിൽ കൂടുതലോ ആയി സജ്ജീകരിക്കാവുന്നതാണ്.

##### s3-ലേക്ക് ഉള്ളടക്കം ഹോസ്റ്റ് ചെയ്യുക

സ്വന്തം സെർവർ ഉപയോഗിക്കുന്നതിന് `CDN` , സ്വയം ഹോസ്റ്റ് ചെയ്യുന്നതിനുള്ള + ഓപ്ഷൻ `S3`

`S3` `S3` ചെയ്യാവുന്നതാണ് [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

കോൺഫിഗർ ചെയ്യാൻ ഓർമ്മിക്കുക `CDN` അതുവഴി `/.v` എന്നതിൽ അവസാനിക്കുന്ന പാതയുടെ കാഷെ സമയം `1s` ആണ്, അല്ലാത്തപക്ഷം നിങ്ങൾക്ക് പുതുതായി റിലീസ് ചെയ്ത ഉള്ളടക്കം ഉടനടി ആക്സസ് ചെയ്യാൻ കഴിയില്ല.

### വെബ്സൈറ്റ് പ്രസിദ്ധീകരിക്കുക

വെബ്‌സൈറ്റ് എവിടെയും വിന്യസിക്കാൻ കഴിയും [github page](https://pages.github.com) കൂടാതെ [cloudflare page](https://pages.cloudflare.com) നല്ല ചോയ്‌സുകളാണ്.

വെബ്‌സൈറ്റ് [ഒരൊറ്റ പേജ് ആപ്ലിക്കേഷൻ്റെ](https://developer.mozilla.org/docs/Glossary/SPA) ആർക്കിടെക്ചർ സ്വീകരിക്കുന്നതിനാൽ, `index.html` `. ` ഉൾപ്പെടാത്ത URL പാത്ത് വീണ്ടും എഴുതാൻ ഓർമ്മിക്കുക.

വെബ്‌സൈറ്റ് എൻട്രി പേജ് ഒരിക്കൽ മാത്രം വിന്യസിക്കേണ്ടതുണ്ട്, തുടർന്നുള്ള ഉള്ളടക്ക അപ്‌ഡേറ്റുകൾക്കായി വെബ്‌സൈറ്റ് എൻട്രി പേജ് വീണ്ടും വിന്യസിക്കേണ്ടതില്ല.

#### ഗിത്തബ് പേജിൽ വിന്യസിക്കുക

[ഒരു സ്ഥാപനം സൃഷ്ടിക്കാൻ ആദ്യം ഇവിടെ ക്ലിക്ക് github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

തുടർന്ന് ഈ `i18n-demo.github.io` കീഴിൽ ഒരു വെയർഹൗസ് സൃഷ്‌ടിക്കുക (നിങ്ങൾ സൃഷ്‌ടിച്ച സ്ഥാപനത്തിൻ്റെ പേര് ഉപയോഗിച്ച് `i18n-demo` മാറ്റിസ്ഥാപിക്കുക):

<img alt="" src="https://p.3ti.site/1721098657.avif">

മുമ്പത്തെ ലേഖനത്തിലെ ഉള്ളടക്കം പ്രസിദ്ധീകരിക്കുമ്പോൾ, : ജനറേറ്റുചെയ്തു `out/ol/htm`

```
ln -s index.html 404.html
```


`404.html` `github page`

തുടർന്ന് താഴെ പറയുന്ന കമാൻഡ് `htm` പ്രവർത്തിപ്പിക്കുക (നിങ്ങളുടെ സ്വന്തം വെയർഹൗസ് വിലാസം ഉപയോഗിച്ച് `i18n-demo/i18n-demo.github.io.git` മാറ്റിസ്ഥാപിക്കാൻ ഓർക്കുക) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

കോഡ് അമർത്തിയാൽ, `github page` എന്നതിൻ്റെ വിന്യാസം വിജയകരമായി പ്രവർത്തിക്കുന്നതിനായി കാത്തിരിക്കുക (ചുവടെ കാണിച്ചിരിക്കുന്നതുപോലെ), തുടർന്ന് നിങ്ങൾക്ക് അത് ആക്സസ് ചെയ്യാൻ കഴിയും.

<img src="//p.3ti.site/1721116586.avif" width="350px">

ഡെമോ പേജിനായി ദയവായി കാണുക:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### ക്ലൗഡ്ഫ്ലെയർ പേജിൽ വിന്യസിക്കുക

[cloudflare page](//pages.cloudflare.com) എന്നതുമായി താരതമ്യപ്പെടുത്തുമ്പോൾ `github page` ഇത് പാത്ത് റീറൈറ്റിംഗ് നൽകുന്നു, ഇത് ചൈനയുമായി കൂടുതൽ സൗഹൃദപരമാണ്, ഇത് ഉപയോഗിക്കാൻ ശുപാർശ ചെയ്യുന്നു.

`cloudflare page` വിന്യാസം സാധാരണയായി മുകളിലുള്ള `github page` വിന്യാസത്തെ അടിസ്ഥാനമാക്കിയുള്ളതാണ്.

ഒരു പ്രോജക്റ്റ് സൃഷ്‌ടിച്ച് മുകളിലുള്ള `i18n-demo.github.io` ബന്ധിപ്പിക്കുക.

പ്രക്രിയ ചുവടെയുള്ള ചിത്രത്തിൽ കാണിച്ചിരിക്കുന്നു:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` ഓർഗനൈസേഷനിലേക്ക് പ്രവേശനം അനുവദിക്കുന്നതിന് ദയവായി ക്ലിക്ക് ചെയ്യുക `Add Account`

നിങ്ങൾ മറ്റൊരു ഓർഗനൈസേഷൻ്റെ വെയർഹൗസ് ബന്ധിപ്പിച്ചിട്ടുണ്ടെങ്കിൽ, പുതിയ ഓർഗനൈസേഷൻ പ്രദർശിപ്പിക്കുന്നതിന് മുമ്പ് രണ്ട് തവണ അത് അംഗീകരിക്കുന്നതിന് നിങ്ങൾ രണ്ട് തവണ ക്ലിക്ക് ചെയ്യേണ്ടതായി വന്നേക്കാം `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

അടുത്തതായി `i18n-demo.github.io` തിരഞ്ഞെടുക്കുക, തുടർന്ന് `Begin setup` ക്ലിക്ക് ചെയ്യുക, തുടർന്നുള്ള ഘട്ടങ്ങൾക്കായി സ്ഥിരസ്ഥിതി മൂല്യങ്ങൾ ഉപയോഗിക്കുക.

<img alt="" src="https://p.3ti.site/1721118490.avif">

ആദ്യമായി ബൈൻഡിംഗിന് ശേഷം, അത് ആക്‌സസ് ചെയ്യുന്നതിന് കുറച്ച് മിനിറ്റ് കാത്തിരിക്കേണ്ടതുണ്ട്.

വിന്യാസത്തിന് ശേഷം, നിങ്ങൾക്ക് ഒരു ഇഷ്‌ടാനുസൃത ഡൊമെയ്ൻ നാമം ബൈൻഡ് ചെയ്യാം.

<img alt="" src="https://p.3ti.site/1721119459.avif">

ഇഷ്‌ടാനുസൃത ഡൊമെയ്ൻ നാമം ബൈൻഡ് ചെയ്‌ത ശേഷം, ചുവടെ കാണിച്ചിരിക്കുന്നതുപോലെ സിംഗിൾ-പേജ് ആപ്ലിക്കേഷൻ്റെ പാത്ത് റീറൈറ്റിംഗ് കോൺഫിഗർ ചെയ്യുന്നതിന് ദയവായി ഡൊമെയ്ൻ നാമത്തിലേക്ക് പോകുക:

<img alt="" src="https://p.3ti.site/1721119320.avif">

മുകളിലുള്ള ചിത്രത്തിലെ നിയമങ്ങൾ ചുവടെയുള്ള ആദ്യ വരിയിൽ നിങ്ങൾക്ക് ബന്ധിപ്പിച്ചിരിക്കുന്ന ഡൊമെയ്ൻ നാമം ഉപയോഗിച്ച് `i18n.site` .

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

കൂടാതെ, ചുവടെ കാണിച്ചിരിക്കുന്നതുപോലെ കാഷെ നിയമങ്ങൾ കോൺഫിഗർ ചെയ്യുക, കൂടാതെ കാഷെ ദൈർഘ്യം ഒരു മാസമായി സജ്ജമാക്കുക.

<img alt="" src="https://p.3ti.site/1721125111.avif">

മുകളിലെ ചിത്രത്തിലെ രണ്ടാം ഘട്ടത്തിലെ ഡൊമെയ്ൻ നാമം നിങ്ങൾ ബന്ധിപ്പിച്ച ഡൊമെയ്ൻ നാമത്തിലേക്ക് മാറ്റുക.

#### ചൈനയിലെ മെയിൻലാൻഡ് വെബ്‌സൈറ്റ് വിന്യാസം ഒപ്റ്റിമൈസ് ചെയ്യുന്നു

ചൈനയിലെ മെയിൻലാൻഡ് നെറ്റ്‌വർക്ക് പരിതസ്ഥിതിയിൽ നിങ്ങൾക്ക് മികച്ച പ്രവേശനക്ഷമത പ്രകടനം നേടണമെങ്കിൽ, ആദ്യം [ഒരു ഡൊമെയ്ൻ പേര് രജിസ്റ്റർ ചെയ്യുക](//beian.aliyun.com) .

`out/ol/htm` `CDN` ചൈനയിലെ ക്ലൗഡ് വെണ്ടർമാരുടെ ഒബ്ജക്റ്റ് സംഭരണം ഉപയോഗിക്കുക +

[Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) പോലെയുള്ള സിംഗിൾ-പേജ് ആപ്ലിക്കേഷനുകളിലേക്ക് പാത്ത് മാറ്റിയെഴുതാൻ നിങ്ങൾക്ക് എഡ്ജ് കമ്പ്യൂട്ടിംഗ് ഉപയോഗിക്കാം:

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
<img alt="" src="https://p.3ti.site/1721121273.avif">

കാരണം `MX` റെക്കോർഡുകളും `CNAME` റെക്കോർഡുകളും ഒരുമിച്ച് നിലനിൽക്കില്ല, നിങ്ങൾക്ക് ഒരേ സമയം ഡൊമെയ്ൻ നെയിം ഇമെയിലുകൾ ലഭിക്കണമെങ്കിൽ, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `A` ഫ്ലാറ്റ് `CNAME` നിങ്ങൾ സഹകരിക്കേണ്ടതുണ്ട്.

കൂടാതെ, ചൈനയിലെ ക്ലൗഡ് വെണ്ടർമാരുടെ വിദേശ ട്രാഫിക് ചാർജ്ജ് താരതമ്യേന ചെലവേറിയതാണ്, നിങ്ങൾക്ക് ചെലവ് ഒപ്റ്റിമൈസ് ചെയ്യണമെങ്കിൽ, നിങ്ങൾക്ക് [Huawei DNS ൻ്റെ സൗജന്യ ഭൂമിശാസ്ത്രപരമായ റെസല്യൂഷനും](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ൻ്റെ ഇഷ്ടാനുസൃത ഡൊമെയ്ൻ നാമവും (ചുവടെ കാണിച്ചിരിക്കുന്നത് പോലെ) ഉപയോഗിക്കാം ഗതാഗതം വഴിതിരിച്ചുവിടൽ──ചൈന ബൈദു ക്ലൗഡിലെ `CDN` അന്താരാഷ്ട്ര ട്രാഫിക് cloudflare പോകുന്നു.

<img alt="" src="https://p.3ti.site/1721119788.avif">

ഈ വിന്യാസ ഒപ്റ്റിമൈസേഷൻ സൊല്യൂഷനുകൾ കൂടുതൽ സങ്കീർണ്ണവും ഭാവിയിൽ പ്രത്യേക അധ്യായങ്ങളിൽ അവതരിപ്പിക്കപ്പെടുന്നതുമാണ്.

#### പൊതുവായ ഡൊമെയ്ൻ നാമം റീഡയറക്ഷൻ

നിങ്ങളുടെ പ്രധാന വെബ്‌സൈറ്റായി ഒരു വെബ്‌സൈറ്റ് സൃഷ്‌ടിക്കാൻ നിങ്ങൾ `i18n.site` , നിങ്ങൾ സാധാരണയായി പാൻ-ഡൊമെയ്ൻ റീഡയറക്ഷൻ കോൺഫിഗർ ചെയ്യേണ്ടതുണ്ട്, അതായത്, ( `www.xxx.com` ഉൾപ്പെടെ) `*.xxx.com` റീഡയറക്‌ട് `xxx.com` .

ആലിബാബ ക്ലൗഡിൻ്റെ `EdgeScript` ( [ഇംഗ്ലീഷ് ഡോക്യുമെൻ്റ്](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ചൈനീസ് പ്രമാണം](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) സഹായത്തോടെ ഈ ആവശ്യകത കൈവരിക്കാനാകും `CDN`

[ആലിബാബ CDN](https://cdn.console.aliyun.com/domain/list) ഒരു ഡൊമെയ്ൻ നാമം ചേർക്കുകയും `*.xxx.com` നാമം അലിബാബ ക്ലൗഡ് `CDN` ൻ്റെ `CNAME` ലേക്ക് പോയിൻ്റ് ചെയ്യുകയും ചെയ്യുക.

<img alt="" src="https://p.3ti.site/1721122000.avif">

ഉദാഹരണത്തിന്, മുകളിലെ ചിത്രത്തിലെ `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx ഉപയോഗിച്ച് വിന്യസിക്കുക

`server` ഇനിപ്പറയുന്നതുപോലുള്ള ഒരു കോൺഫിഗറേഷൻ ചേർക്കുക nginx ഇവിടെ `/root/i18n/md/out/ol/htm` നിങ്ങളുടെ സ്വന്തം പ്രോജക്റ്റിൻ്റെ പാതയിലേക്ക് മാറ്റുക `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### ഡയറക്ടറി ഘടന

#### പൊതു

വെബ്‌സൈറ്റിൻ്റെ സ്റ്റാറ്റിക് ഫയലുകൾ, `favicon.ico` `robots.txt` , മുതലായവ.

ഇവിടെയുള്ള ഐക്കൺ ഫയലുകൾ ഉപയോഗിച്ച് സൃഷ്ടിക്കാൻ കഴിയും [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` ഡയറക്‌ടറിക്ക് കീഴിൽ `i18n.site` ൻ്റെ കോൺഫിഗറേഷൻ ഫയലുകൾ, വിവർത്തന കാഷെ തുടങ്ങിയവയുണ്ട്. വിശദാംശങ്ങൾക്ക് അടുത്ത അധ്യായം ["കോൺഫിഗറേഷൻ"](/i18n.site/conf) കാണുക.

#### en

കോൺഫിഗറേഷൻ ഫയലിലെ `fromTo` `en` `.i18n/conf.yml` അനുയോജ്യമായ ഉറവിട ഭാഷാ ഡയറക്ടറി

```yaml
i18n:
  fromTo:
    en: zh
```

വിവർത്തനത്തിൻ്റെ കോൺഫിഗറേഷൻ പരിശോധിക്കുക [i18](/i18/use)

