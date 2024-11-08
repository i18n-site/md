# Plug-in (Dakun) Min Bɛ Don a Kɔnɔ

Plug-ins bɛ se ka labɛn `.i18n/conf.yml` kɔnɔ, i n’a fɔ:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Ofisiyali

* `i18n.addon/toc` :
  A ye `json` ka ɲɛbilasɛbɛnw dilan ka da `TOC` kan, min bɛ se ka baara kɛ ka kɛɲɛ ni a daminɛ ye

* `i18n.addon/mouse` Sosɛti :

## Filen Tɔgɔw Bɛnkan

Plug-ins bɛɛ ye `npm` pakew ye.

foroko min bɛ bɛn `i18n.addon/toc` ma sanfɛ , o ye [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin bɛ baara kɛ ni version laban ye a daminɛ na ani a bɛ updates lajɛ dɔgɔkun o dɔgɔkun.

N’i b’a fɛ ka version (fɔcogo) labɛn, i bɛ se ka `i18n.addon/toc@0.1.3` sɛbɛn.

Bamanankan baarakɛcogo `i18n.site` bɛna plug-in pake ka convention file in sigi ka sɔrɔ k’a kɛ.

Bɛn kɛlenw ka dosiye tɔgɔw ye ninnu ye

### htmIndex.js

`htmIndex.js` bɛna pikiri kɛ ka se `.i18n/htm/index.js` laban ma .

Yɔrɔ min na `__CONF__` bɛna bila sisan sigicogo tɔgɔ nɔ na (i n’a fɔ `dev` walima `ol` ).

### afterTran.js

A bɛna Weele bamanankan bamanankan baara bannen kɔ, wa paramɛtɛrɛ minnu bɛ Tɛmɛ olu ye ninnu ye.

* `lang_li` : lisɛli, kan fɔlɔ ye bɔyɔrɔkan ye
* `changed` :
* `root` : jusigilan ɲɛbilasɛbɛn

Segin nafa ye daɲɛgafe ye, i n’a fɔ

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ye bɔli dosiye lisɛli ye, `path` ye dosiye sira ye, `txt` ye dosiye kɔnɔkow ye.

## Baarakɛcogo Minnu Bɛ Don a Kɔnɔ

`js` boli waati min : don a kɔnɔ o sinsinnen bɛ yiriwali filanan kan [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : kɛ ka dosiye
* `rTxt(path)` : Sɛbɛnni filen kalan
* `rBin(path)` : Aw ye binary file kalan
* `rDir(dirpath)` : :

## Yiriwali Gafe

Plug-in yiriwali bɛ se ka kɛ ɲɛfɔli ye [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)