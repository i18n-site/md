# Plug-In

Pluginy lze konfigurovat v `.i18n/conf.yml` , jako například:

```yml
addon:
  - i18n.addon/toc
```

## Oficiální Plug-In

* `i18n.addon/toc` :
  Generovat index adresáře `json` na základě `TOC` , ve výchozím nastavení povoleno

* `i18n.addon/mouse` : myši

## Konvence Názvů Souborů

Zásuvné moduly jsou všechny balíčky `npm` .

Balíček odpovídající `i18n.addon/toc` výše je [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin ve výchozím nastavení používá nejnovější verzi a každý týden kontroluje aktualizace.

Pokud chcete verzi opravit, můžete napsat `i18n.addon/toc@0.1.3` .

Příkazový řádek překladu `i18n.site` nainstaluje soubor konvence balíčku zásuvného modulu a poté jej spustí.

Dohodnuté názvy souborů jsou následující

### htmIndex.js

`htmIndex.js` bude vstříknuta do konce `.i18n/htm/index.js` .

Kde `__CONF__` bude nahrazeno názvem aktuální konfigurace (například `dev` nebo `ol` ).

### afterTran.js

Zavolá se po dokončení překladu a předané parametry jsou následující.

* `lang_li` Seznam : , první jazyk je zdrojový jazyk
* `changed` : souborů
* `root` Kořenový adresář :

Návratovou hodnotou je slovník, jako např

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` je seznam výstupních souborů, `path` je cesta k souboru a `txt` je obsah souboru.

## Vestavěné Funkce

Vestavěné prostředí `js` je založeno na sekundárním vývoji [boa](https://github.com/boa-dev/boa) a vestavěné funkce jsou následující :

* `wPath(path, txt)` :
* `rTxt(path)` : textový soubor
* `rBin(path)` : binární soubor
* `rDir(dirpath)` : Přečtěte si adresář, návratová hodnota je pole : seznam adresářů, seznam souborů

## Průvodce Rozvojem

Vývoj plug-inů může být referencí [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)