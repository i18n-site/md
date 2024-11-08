# എഡിറ്റർ ശുപാർശ

ഓരോരുത്തർക്കും അവരവരുടെ പ്രിയപ്പെട്ട എഡിറ്റർ ഉണ്ട്, ഇവിടെ ഞങ്ങൾ ഞങ്ങളുടെ `Markdown` മികച്ച സമ്പ്രദായങ്ങൾ പങ്കിടുന്നു.

എഴുതുമ്പോൾ തത്സമയം പ്രിവ്യൂ ചെയ്യുന്നതിന് `MarkDown` എഴുതാനും പ്ലഗ്-ഇൻ [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) ഇൻസ്റ്റാൾ ചെയ്യാനും ഞങ്ങൾ [vscode](https://code.visualstudio.com/) .

ചുവടെ കാണിച്ചിരിക്കുന്നതുപോലെ, പ്രിവ്യൂ വിൻഡോ തുറക്കാൻ എഡിറ്ററിൽ റൈറ്റ് ക്ലിക്ക് ചെയ്യുക.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

ഫയൽ `Markdown` തുറക്കാൻ `vscode` വിളിക്കാൻ കമാൻഡ് ലൈനിൽ `code xxx.md` നൽകുക.

ചിത്രങ്ങൾ അപ്ലോഡ് ചെയ്യാൻ [PicList](https://github.com/Kuingsmile/PicList) ഉപയോഗിക്കുക, അപ്ലോഡ് കുറുക്കുവഴി കീ സജ്ജീകരിക്കാനും സ്ക്രീൻഷോട്ട് ഒറ്റ ക്ലിക്കിൽ അപ്ലോഡ് ചെയ്യാനും ഓർമ്മിക്കുക.

അപ്ലോഡ് ചെയ്തതിനുശേഷം ഫയലിൻ്റെ പേര് സ്വയമേവ `Markdown` ഫോർമാറ്റിലേക്ക് പകർത്തുന്നതിനെ ഇത് പിന്തുണയ്ക്കുന്നു, ഇത് കാര്യക്ഷമതയെ വളരെയധികം മെച്ചപ്പെടുത്തുന്നു.

അതേ സമയം, നിങ്ങൾക്ക് ഇനിപ്പറയുന്ന കോൺഫിഗറേഷൻ റഫർ ചെയ്യാനും ഫയൽ പരിഷ്ക്കരിക്കാനും അപ്ലോഡ് ചെയ്ത ഫയൽ ഇമേജ് വലുപ്പം കുറയ്ക്കുന്നതിന് സ്വയമേവ `avif` ലേക്ക് കംപ്രസ് ചെയ്യുന്നതിനായി കോൺഫിഗർ ചെയ്യാനും കഴിയും.

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```