# Toshe

Ana iya saita plug-ins a cikin `.i18n/conf.yml` , kamar:

```yml
addon:
  - i18n.addon/toc
```

## Filogi Na Hukuma

* `i18n.addon/toc` :
  Ƙirƙirar fihirisar adireshi na `json` bisa `TOC` , an kunna ta ta tsohuwa

* `i18n.addon/mouse` :

## Yarjejeniyar Sunan Fayil

Plug-ins duk fakitin `npm` ne.

Kunshin da ya dace da `i18n.addon/toc` na sama shine [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin yana amfani da sabon sigar ta tsohuwa kuma yana bincika sabuntawa kowane mako.

Idan kuna son gyara sigar, zaku iya rubuta `i18n.addon/toc@0.1.3` .

Layin umarni na fassarar `i18n.site` zai shigar da fayil ɗin al'ada na fakitin plug-in sannan a aiwatar da shi.

Sunayen fayil ɗin da aka amince sune kamar haka

### htmIndex.js

`htmIndex.js` za a yi allurar har zuwa ƙarshen `.i18n/htm/index.js` .

Inda za a maye gurbin `__CONF__` tare da sunan daidaitawar yanzu (kamar `dev` ko `ol` ).

### afterTran.js

Za a kira shi bayan an gama fassarar, kuma sigogin da aka shiga sune kamar haka.

* `lang_li` : Jerin Harshe, harshen farko shine harshen tushen
* `changed` :
* `root` :

Ƙimar dawowa ƙamus ce, kamar

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` shine jerin fayilolin fitarwa, `path` shine hanyar fayil, kuma `txt` shine abun ciki na fayil.

## Ginannun Ayyuka

Ginin lokacin gudu na `js` yana dogara ne akan haɓaka na biyu na [boa](https://github.com/boa-dev/boa) kuma ginanniyar ayyukan sune kamar haka :

* `wPath(path, txt)` : zuwa fayil
* `rTxt(path)` Karanta fayil ɗin :
* `rBin(path)` Karanta fayil ɗin :
* `rDir(dirpath)` : Karanta kundin adireshi, ƙimar dawowa shine jeri : , jerin fayil

## Jagoran Ci Gaba

Ci gaban toshewa na iya zama tunani [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)