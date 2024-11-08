# Plug-in Oyo Ezali Na Kati

Ba plug-ins ekoki kozala configuré na `.i18n/conf.yml` , lokola:

```yml
addon:
  - i18n.addon/toc
```

## Plug-in Ya Officiel

* `i18n.addon/toc` : Index ya répertoire
  Générer index ya répertoire ya `json` sur la base ya `TOC` , activé par défaut

* `i18n.addon/mouse` Ba effets : soso

## Convention Ya Kombo Ya Fichier

Ba plug-ins ezali nionso `npm` paquets.

Paquet oyo ekokani na `i18n.addon/toc` oyo ezali likolo ezali [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Plugin esalela version ya sika na ndenge ya libela mpe etalaka soki ezali na ba mises à jour poso na poso.

Soki olingi kobongisa version, okoki kokoma `i18n.addon/toc@0.1.3` .

Line ya commande ya traduction `i18n.site` eko installer fichier ya convention ya forfait plug-in et puis eko exécuter yango.

Ba kombo ya ba fichiers oyo bayokani ezali boye

### htmIndex.js

`htmIndex.js` eko injecter tii na suka ya `.i18n/htm/index.js` .

Epayi wapi `__CONF__` ekozwa esika ya kombo ya configuration ya lelo (lokola `dev` to `ol` ).

### afterTran.js

Ekobenga sima ya bobongoli esili, mpe ba paramètres oyo elekisami ezali boye.

* `lang_li` Liste : monoko, monoko ya liboso ezali monoko ya source
* `changed` : Ba fichiers oyo ebongwani
* `root` : Annuaire ya misisa ya projet

Valeur ya retour ezali dictionnaire, lokola

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` ezali liste ya ba fichiers ya sortie, `path` ezali nzela ya fichier, mpe `txt` ezali contenus ya fichier.

## Misala Oyo Etongami Na Kati

Tango ya kosala `js` oyo etongami na kati : na développement secondaire ya [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : na dossier
* `rTxt(path)` : Tanga fisyé ya makomi
* `rBin(path)` : Tanga fichier binaire
* `rDir(dirpath)` : Tanga répertoire, valeur ya retour ezali liste ya array : , liste ya ba fichiers

## Buku Ya Bokoli

Développement ya plug-in ekoki kozala référence [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)