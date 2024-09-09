# Plug-In

Pluginy lze konfigurovat v `.i18n/conf.yml`, jako například:

```yml
addon:
  - i18n.addon/toc
```

## Oficiální pluginy

* `i18n.addon/toc` : Index obsahu
  Generovat obsahový index `json` na základě `TOC`, výchozí nastavení zapnuto

* `i18n.addon/mouse`: Efekty myši

## Konvence názvů souborů

Pluginy jsou všechny balíčky `npm`.

Balíček odpovídající `i18n.addon/toc` výše je [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Pluginy ve výchozím nastavení používají nejnovější verzi a každý týden kontrolují aktualizace.

Pokud chcete fixovat verzi, můžete napsat `i18n.addon/toc@0.1.3`.

Překlad příkazového řádku `i18n.site` nainstaluje konvenční soubor balíčku zásuvného modulu a poté jej spustí.

Konvenční názvy souborů jsou následující

### htmIndex.js

`htmIndex.js` bude vložen do konce `.i18n/htm/index.js`.

Přitom `__CONF__` bude nahrazen aktuálním názvem konfigurace (např. `dev` nebo `ol`).

### afterTran.js

Bude voláno po dokončení překladu s následujícími parametry.

* `lang_li` : Seznam jazyků, první jazyk je zdrojový jazyk
* `changed` : Změněné soubory
* `root` : Kořenový adresář projektu

Návratová hodnota je slovník, například

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` je seznam výstupních souborů, `path` je cesta k souboru a `txt` je obsah souboru.

## Vestavěné funkce

Vestavěné prostředí `js` je založeno na sekundárním vývoji [boa](https://github.com/boa-dev/boa). Následují vestavěné funkce:

* `wPath(path, txt)` : Zapsat obsah do cesty
* `rTxt(path)` : Číst textový soubor
* `rBin(path)` : Číst binární soubor
* `rDir(dirpath)` : Číst adresář, návratová hodnota je pole: Seznam adresářů, Seznam souborů

## Příručka pro vývojáře

Vývoj pluginů může být konzultován na [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)