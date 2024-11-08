# Plug-in Rehegua

Umi plug-in ikatu oñemboheko `.i18n/conf.yml` -pe, haꞌeháicha:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Oficial Rehegua

* `i18n.addon/toc` : Índice Directorio rehegua
  Emoheñói índice directorio `json` rehegua oñemopyendáva `TOC` rehe, oñembohapéva por defecto

* `i18n.addon/mouse` :

## Convención Archivo Réra Rehegua

Umi plug-in haꞌehína opaite `npm` paquete.

Pe paquete okorrespondéva `i18n.addon/toc` yvateguápe haꞌehína [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Pe plugin oipuru versión ipyahuvéva por defecto ha ohecha umi ñembopyahu arapokõindy jave.

Emyatyrõséramo pe versión, ikatu rehai `i18n.addon/toc@0.1.3` .

Ñe’ẽmondo ñe’ẽmondo rape `i18n.site` omoĩta vore convención rehegua pe paquete plug-in rehegua ha upéi omoañetéta.

Umi archivo réra oñemoneĩva ha’e ko’ãva

### htmIndex.js

`htmIndex.js` oñeinyectáta `.i18n/htm/index.js` paha peve.

Oĩháme `__CONF__` oñemyengoviáta pe configuración koꞌag̃agua réra rehe (haꞌeháicha `dev` térã `ol` ).

### afterTran.js

Oñehenóita ojejapopa rire ñembohasa, ha umi parámetro oñembohasáva ha’e ko’ãva.

* `lang_li` : Ñe’ẽ ryru, ñe’ẽ peteĩha ha’e ñe’ẽ ypykue
* `changed` : Umi archivo oñemoambuéva
* `root` : Proyecto ypykue ryru

Pe valor jevy haꞌehína peteĩ ñeꞌeryru, haꞌeháicha

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` haꞌehína vore lista osëva, `path` haꞌehína vore rape, ha `txt` haꞌehína vore ryepy.

## Umi Tembiaporã Oñemboguapýva

Pe `js` jeguatarã oñemopyendavaꞌekue : secundario desarrollo rehegua [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Ehai archivo-pe
* `rTxt(path)` : Emoñe’ẽ archivo jehaipyre
* `rBin(path)` : Emoñe’ẽ archivo binario
* `rDir(dirpath)` : Emoñe’ẽ pe kundaha, pe mba’ekuaarã jevy ha’e peteĩ matriz : lista, vore lista

## Ñemboguatarã Ñemboguatarã

Plug-in ñemoheñói ikatu haꞌe peteĩ referencia [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)