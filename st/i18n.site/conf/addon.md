# Plug-In

Li-plug-ins li ka hlophisoa ho `.i18n/conf.yml` , joalo ka:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Ea Semmuso

* `i18n.addon/toc` :
  Hlahisa index ea lethathamo la `json` ho latela `TOC` , e nolofalitsoeng ke kamehla

* `i18n.addon/mouse` :

## Kopano Ea Lebitso La Faele

Li-plug-ins kaofela ke liphutheloana `npm` .

Sephutheloana se lumellanang le `i18n.addon/toc` ka holimo ke [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin e sebelisa mofuta oa morao-rao ka mokhoa o ikhethileng 'me e sheba lintlafatso beke le beke.

Haeba u batla ho lokisa phetolelo, u ka ngola `i18n.addon/toc@0.1.3` .

Mohala oa taelo ea phetolelo `i18n.site` o tla kenya faele ea kopano ea sephutheloana sa plug-in ebe o e phetha.

Mabitso a faele a lumellanoeng ke a latelang

### htmIndex.js

`htmIndex.js` tla entwa ho fihlela qetellong ea `.i18n/htm/index.js` .

Moo `__CONF__` e tla nkeloa sebaka ke lebitso la tlhophiso ea hajoale (joalo ka `dev` kapa `ol` ).

### afterTran.js

E tla bitsoa ka mor'a hore phetolelo e phethoe, 'me mekhahlelo e fetisitsoeng ke e latelang.

* `lang_li` :
* `changed` Lifaele : fetotsoeng
* `root` :

Boleng ba ho khutlisa ke bukantswe, joalo ka

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ke lenane la lifaele tse hlahisoang, `path` ke tsela ea faele, 'me `txt` ke litaba tsa faele.

## Mesebetsi E Hahiloeng

Nako ea ho sebetsa ea `js` e hahelletsoeng e ipapisitse le nts'etsopele ea bobeli ea [boa](https://github.com/boa-dev/boa) mme mesebetsi e hahelletsoeng ke e latelang :

* `wPath(path, txt)` :
* `rTxt(path)` :
* `rBin(path)` :
* `rDir(dirpath)` Bala lenane, boleng : ho khutla ke lenane la : , lenane la lifaele

## Tataiso Ea Ntlafatso

Nts'etsopele ea plug-in e ka ba litšupiso [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)