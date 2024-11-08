# Plug-In

Plug-ins kunnen worden geconfigureerd in `.i18n/conf.yml` , zoals:

```yml
addon:
  - i18n.addon/toc
```

## Officiële Plug-In

* `i18n.addon/toc` : Directory-index
  Genereer directory-index van `json` op basis van `TOC` , standaard ingeschakeld

* `i18n.addon/mouse` : Muiseffecten

## Bestandsnaamconventie

Plug-ins zijn allemaal `npm` pakketten.

Het pakket dat overeenkomt met `i18n.addon/toc` hierboven is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

De plug-in gebruikt standaard de nieuwste versie en controleert wekelijks op updates.

Als u de versie wilt herstellen, kunt u `i18n.addon/toc@0.1.3` schrijven.

Vertaalopdrachtregel `i18n.site` installeert het conventiebestand van het plug-inpakket en voert het vervolgens uit.

De overeengekomen bestandsnamen zijn als volgt

### htmIndex.js

`htmIndex.js` wordt geïnjecteerd tot het einde van `.i18n/htm/index.js` .

Waarbij `__CONF__` wordt vervangen door de naam van de huidige configuratie (zoals `dev` of `ol` ).

### afterTran.js

Het wordt aangeroepen nadat de vertaling is voltooid en de doorgegeven parameters zijn als volgt.

* `lang_li` : Taallijst, de eerste taal is de brontaal
* `changed` : Gewijzigde bestanden
* `root` : Projecthoofdmap

De geretourneerde waarde is een woordenboek, zoals

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` is de lijst met uitvoerbestanden, `path` is het bestandspad en `txt` is de bestandsinhoud.

## Ingebouwde Functies

De ingebouwde `js` runtime is gebaseerd op de secundaire ontwikkeling van [boa](https://github.com/boa-dev/boa) , en de ingebouwde functies zijn als volgt :

* `wPath(path, txt)` : Schrijf naar bestand
* `rTxt(path)` : Tekstbestand lezen
* `rBin(path)` : Binair bestand lezen
* `rDir(dirpath)` : Lees de map, de retourwaarde is een array : , bestandslijst

## Ontwikkelingsgids

Plug-in-ontwikkeling kan een referentie zijn [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)