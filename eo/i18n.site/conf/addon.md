# Aldonaĵo

Kromaĵoj povas esti agorditaj en `.i18n/conf.yml` , kiel ekzemple:

```yml
addon:
  - i18n.addon/toc
```

## Oficiala Kromprogramo

* `i18n.addon/toc` : Indekso de dosierujo
  Generu dosierujon de `json` surbaze de `TOC` , ebligita defaŭlte

* `i18n.addon/mouse` : Musefikoj

## Dosiernomo-Konvencio

Kromaĵoj estas ĉiuj `npm` pakaĵoj.

La pako responda al `i18n.addon/toc` supre estas [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

La kromaĵo uzas la lastan version defaŭlte kaj kontrolas ĝisdatigojn ĉiusemajne.

Se vi volas ripari la version, vi povas skribi `i18n.addon/toc@0.1.3` .

Traduka komandlinio `i18n.site` instalos la kongresdosieron de la aldonaĵa pako kaj poste ekzekutos ĝin.

La interkonsentitaj dosiernomoj estas kiel sekvas

### htmIndex.js

`htmIndex.js` estos injektita ĝis la fino de `.i18n/htm/index.js` .

Kie `__CONF__` estos anstataŭigita per la nomo de la nuna agordo (kiel ekzemple `dev` aŭ `ol` ).

### afterTran.js

Ĝi estos vokita post kiam la traduko estas finita, kaj la parametroj transdonitaj estas kiel sekvas.

* `lang_li` : Lingvolisto, la unua lingvo estas la fontlingvo
* `changed` : dosieroj
* `root` : Projekta radika dosierujo

La revena valoro estas vortaro, kiel ekz

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` estas la eligdosierlisto, `path` estas la dosiervojo, kaj `txt` estas la dosierenhavo.

## Enkonstruitaj Funkcioj

La enkonstruita `js` rultempo estas bazita sur sekundara evoluo de [boa](https://github.com/boa-dev/boa) kaj la enkonstruitaj funkcioj estas jenaj :

* `wPath(path, txt)` : al dosiero
* `rTxt(path)` : Legu tekstdosieron
* `rBin(path)` : Legu binaran dosieron
* `rDir(dirpath)` Legu la dosierujon : la revena valoro estas tabelo : , dosierlisto

## Evoluiga Gvidilo

Aldonaĵo-disvolviĝo povas esti referenco [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)