# પ્લગ-ઇન

પ્લગ-ઇન્સ `.i18n/conf.yml` માં ગોઠવી શકાય છે, જેમ કે:

```yml
addon:
  - i18n.addon/toc
```

## સત્તાવાર પ્લગ-ઇન

* `i18n.addon/toc` : ડિરેક્ટરી ઇન્ડેક્સ
  `TOC` ના આધારે `json` ની ડિરેક્ટરી ઇન્ડેક્સ જનરેટ કરો, ડિફોલ્ટ રૂપે સક્ષમ

* `i18n.addon/mouse` :

## ફાઇલ નામ સંમેલન

પ્લગ-ઇન્સ બધા `npm` પેકેજો છે.

ઉપરોક્ત `i18n.addon/toc` ને અનુરૂપ પેકેજ છે [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

પ્લગઇન મૂળભૂત રીતે નવીનતમ સંસ્કરણનો ઉપયોગ કરે છે અને સાપ્તાહિક અપડેટ્સ માટે તપાસે છે.

જો તમે સંસ્કરણને ઠીક કરવા માંગતા હો, તો તમે `i18n.addon/toc@0.1.3` લખી શકો છો.

અનુવાદ કમાન્ડ લાઇન `i18n.site` પ્લગ-ઇન પેકેજની કન્વેન્શન ફાઇલને ઇન્સ્ટોલ કરશે અને પછી તેને એક્ઝિક્યુટ કરશે.

સંમત ફાઇલના નામ નીચે મુજબ છે

### htmIndex.js

`.i18n/htm/index.js` ના અંત સુધી `htmIndex.js` ઇન્જેક્ટ કરવામાં આવશે.

જ્યાં `__CONF__` વર્તમાન રૂપરેખાંકનના નામ સાથે બદલવામાં આવશે (જેમ કે `dev` અથવા `ol` ).

### afterTran.js

અનુવાદ પૂર્ણ થયા પછી તેને બોલાવવામાં આવશે, અને પાસ થયેલા પરિમાણો નીચે મુજબ છે.

* `lang_li` : ભાષાની સૂચિ, પ્રથમ ભાષા એ સ્રોત ભાષા છે
* `changed` : ફાઇલો
* `root` પ્રોજેક્ટ રૂટ :

વળતર મૂલ્ય એ શબ્દકોશ છે, જેમ કે

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` એ આઉટપુટ ફાઇલ સૂચિ છે, `path` ફાઇલ પાથ છે, અને `txt` ફાઇલ સામગ્રી છે.

## બિલ્ટ-ઇન કાર્યો

બિલ્ટ-ઇન `js` રનટાઇમ [boa](https://github.com/boa-dev/boa) ના ગૌણ વિકાસ પર આધારિત છે, અને બિલ્ટ-ઇન કાર્યો નીચે મુજબ છે :

* `wPath(path, txt)` ફાઇલમાં :
* `rTxt(path)` ટેક્સ્ટ ફાઇલ :
* `rBin(path)` : ફાઇલ વાંચો
* `rDir(dirpath)` : ડાયરેક્ટરી વાંચો, રીટર્ન વેલ્યુ એરે : યાદી, ફાઇલ યાદી છે

## વિકાસ માર્ગદર્શિકા

પ્લગ-ઇન વિકાસ એક સંદર્ભ હોઈ શકે છે [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)