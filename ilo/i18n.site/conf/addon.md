# Plug-in Ti

Dagiti plug-in ket mabalin a maikonfigura iti `.i18n/conf.yml` , a kas ti:

```yml
addon:
  - i18n.addon/toc
```

## Opisial Nga Plug-In

* `i18n.addon/toc` : Indeks ti direktorio
  Mangpataud ti indeks ti direktorio ti `json` a naibatay iti `TOC` , a napalubosan babaen ti default

* `i18n.addon/mouse` : Dagiti epekto ti mouse

## Konbension Ti Nagan Ti File

Dagiti plug-in ket amin a `npm` a pakete.

Ti pakete a katupag ti `i18n.addon/toc` iti ngato ket [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Ti plugin ket agus-usar ti kaudian a bersion babaen ti default ken linawas a mangsukimat kadagiti panagpabaro.

No kayatmo nga ilinteg ti bersion, mabalinmo nga isurat ti `i18n.addon/toc@0.1.3` .

Ti linia ti bilin ti panagipatarus `i18n.site` ket mangikabil ti konbension a file ti pakete ti plug-in ken kalpasanna ipatungpalna daytoy.

Dagiti napagnunumuan a nagan ti file ket kastoy

### htmIndex.js

`htmIndex.js` ti mai-inject agingga iti ngudo ti `.i18n/htm/index.js` .

Saan a `__CONF__` ket masukatan iti nagan ti agdama a panagisaad (kas ti `dev` wenno `ol` ).

### afterTran.js

Maawagan daytoy kalpasan a malpas ti panagipatarus, ken dagiti parametro a naipasa ket kastoy.

* `lang_li` : Listaan ti pagsasao, ti umuna a pagsasao ket ti taudan a pagsasao
* `changed` : Nabaliwan a file
* `root` : Proyekto ti ramut a direktorio

Ti pateg ti panagsubli ket maysa a diksionario, kas ti

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ket ti listaan ti file ti rimmuar, `path` ket ti dalan ti file, ken `txt` ket ti linaon ti file.

## Dagiti Naibangon a Panagandar

Ti naibangon a `js` nga oras ti panagtaray ket naibatay iti sekondario a panagrang-ay ti [boa](https://github.com/boa-dev/boa) , ken dagiti naibangon a panagandar ket kas ti sumaganad :

* `wPath(path, txt)` : Agsurat iti file
* `rTxt(path)` : Basaen ti teksto a file
* `rBin(path)` : Basaen ti binary file
* `rDir(dirpath)` : Basaen ti direktorio, ti pateg ti panagsubli ket maysa nga array : list, file list

## Giya Ti Panagrang-Ay

Ti panagrang-ay ti plug-in ket mabalin a reperensia [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)