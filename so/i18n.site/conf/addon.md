# Ku Xidhid

Plug-ins waxaa lagu habeyn karaa `.i18n/conf.yml` , sida:

```yml
addon:
  - i18n.addon/toc
```

## Furaha Rasmiga Ah

* `i18n.addon/toc` :
  Samee tusaha tusaha `json` ee ku salaysan `TOC` , oo si caadi ah loo awooday

* `i18n.addon/mouse` :

## Heshiiska Magaca Faylka

Plug-insku waa `npm` baakadood.

Xirmada u dhiganta `i18n.addon/toc` ee sare waa [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin waxa ay isticmaashaa nooca ugu dambeeyay asbuuc walba waxa ay hubisaa wixii cusub.

Haddii aad rabto inaad hagaajiso nooca, waxaad qori kartaa `i18n.addon/toc@0.1.3` .

Tamarta tarjumaadda `i18n.site` ayaa ku rakibi doonta faylka heshiiska xirmada fur-in ka dibna wuu fulin doonaa.

Magacyada faylka lagu heshiiyey waa sidan

### htmIndex.js

`htmIndex.js` ayaa lagu duri doonaa dhamaadka `.i18n/htm/index.js` .

Halka `__CONF__` lagu beddeli doono magaca qaabeynta hadda (sida `dev` ama `ol` ).

### afterTran.js

Waxaa la wici doonaa marka turjumaada la dhammeeyo, cabirrada la soo gudbiyayna waa sida soo socota.

* `lang_li` Liistada luqadda : luqadda koowaad waa luqadda isha
* `changed` :
* `root` :

Qiimaha soo celinta waa qaamuus, sida

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` waa liiska faylka wax soo saarka, `path` waa dariiqa faylka, `txt` waa nuxurka faylka.

## Hawlaha La Dhisay

`js` runtime-ku-ku-saleysan wuxuu ku salaysan yahay horumarinta labaad ee [boa](https://github.com/boa-dev/boa) iyo hawlaha la dhisay waa sida soo socota :

* `wPath(path, txt)` : si aad u fayl garaysato
* `rTxt(path)` : faylka qoraalka
* `rBin(path)` :
* `rDir(dirpath)` : Akhri tusaha, qiimaha soo laabashadu waa liis : , liiska faylka

## Hagaha Horumarinta

Horumarinta fur-ku-gudbinta waxay noqon kartaa tixraac [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)