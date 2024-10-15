# Mono-Mai

Ka taea te whirihora mono-mai ki `.i18n/conf.yml` , penei:

```yml
addon:
  - i18n.addon/toc
```

## Mono-Mai Mana

* `i18n.addon/toc` :
  Hangaia te taupū whaiaronga o `json` i runga i `TOC` , ka taea te taunoa

* `i18n.addon/mouse` :

## Huihuinga Ingoa Kōnae

Ko nga mono-mai he `npm` nga kohinga.

Ko te kete e rite ana ki `i18n.addon/toc` i runga ake nei ko [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Ka whakamahia e te mono te putanga hou ma te taunoa me te tirotiro mo nga whakahoutanga ia wiki.

Ki te hiahia koe ki te whakatika i te putanga, ka taea e koe te tuhi `i18n.addon/toc@0.1.3` .

Ko te rarangi whakahau whakamaori `i18n.site` ka whakauru i te konae huihuinga o te kete mono-mai ka mahia.

Ko nga ingoa kōnae kua whakaaetia e whai ake nei

### htmIndex.js

`htmIndex.js` ka werohia ki te mutunga o `.i18n/htm/index.js` .

Ko te `__CONF__` ka whakakapia ki te ingoa o te whirihoranga o naianei (penei i te `dev` , `ol` ranei).

### afterTran.js

Ka karangahia i muri i te otinga o te whakamaoritanga, ko nga tawhā ka tukuna ki roto ko enei e whai ake nei.

* `lang_li` : Rarangi reo, ko te reo tuatahi ko te reo puna
* `changed` :
* `root` :

Ko te uara whakahoki he papakupu, penei

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

Ko `file` te rarangi konae whakaputa, `path` te ara konae, `txt` te ihirangi konae.

## Mahi Hanga-I Roto

Ko te wa whakahaere `js` i hangaia : runga i te whanaketanga tuarua o [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : Tuhia ki te konae
* `rTxt(path)` :
* `rBin(path)` : Pānuihia te kōnae rua
* `rDir(dirpath)` : Pānuihia te whaiaronga, ko te uara whakahoki ko te rarangi : , rarangi konae

## Aratohu Whanaketanga

Ka taea e te whanaketanga mono-mai te tohutoro [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)