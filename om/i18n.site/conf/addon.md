# Plug-in Kan Jedhu

Plug-ins `.i18n/conf.yml` keessatti qindaa'uu danda'a, kan akka:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Ofiisaa

* `i18n.addon/toc` : Indeeksii galmee
  Indeeksii galmee `json` `TOC` irratti hundaa'uun uumi, durtii dandeessifame

* `i18n.addon/mouse` : hantuutee

## Konveenshinii Maqaa Faayilii

Plug-ins hundi isaanii paakeejii `npm` dha.

Paakeejiin `i18n.addon/toc` armaan olii wajjin walsimu [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Ijaartuun durtiidhaan gosa isa haaraa fayyadama fi torbanitti fooyya'iinsa sakatta'a.

Yoo version sirreessuu barbaadde, `i18n.addon/toc@0.1.3` barreessuu dandeessa.

Sararri ajaja hiikkaa `i18n.site` faayilii walgahii paakeejii ifteessaa ni fe'a sana booda raawwata.

Maqaan faayilii waliigaltee irra gahe akka armaan gadiiti

### htmIndex.js

`htmIndex.js` hanga dhuma `.i18n/htm/index.js` ni lilmoodhaan ni kennama.

Bakka `__CONF__` maqaa qindeessaa ammaatiin bakka bu'u (kan akka `dev` ykn `ol` ).

### afterTran.js

Erga hiikni xumuramee booda ni waama, fi parameetaroota darban akka armaan gadiitti.

* `lang_li` Tarree : , afaan jalqabaa afaan madda
* `changed` : Faayilota fooyya'an
* `root` : hundee pirojektii

Gatiin deebi'u galmee jechootaa, kan akka

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` tarree faayilii baasaa, `path` daandii faayilii, fi `txt` qabiyyee faayilii ti.

## Faankishiniiwwan Ijaaraman

Yeroon gaggeeffama `js` ijaarame : sadarkaa lammaffaa kan [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : faayiliitti barreessi
* `rTxt(path)` : Faayila barruu dubbisi
* `rBin(path)` : Faayila baayinarii dubbisi
* `rDir(dirpath)` : Galmee dubbisi, gatii deebi'aa tarree : , tarree faayilii ti

## Qajeelfama Misooma

Guddinni plug-in wabii ta'uu danda'a [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)