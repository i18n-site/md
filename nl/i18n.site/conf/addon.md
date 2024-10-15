# Plug-in

Plug-ins kunnen worden geconfigureerd in `.i18n/conf.yml`, zoals:

```yml
addon:
  - i18n.addon/toc
```

## Officiële plug-ins

* `i18n.addon/toc`: inhoudsopgave
  Genereren van een inhaltsverzeichnis in `json` op basis van `TOC`, standaard ingeschakeld

* `i18n.addon/mouse`: Muiseffecten

## Bestandsnaamconventie

Plugins zijn allemaal `npm`-pakketten.

De bijbehorende package voor `i18n.addon/toc` is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

De plug-in gebruikt standaard de nieuwste versie en controleert wekelijks op updates.

Als je een vaste versie wilt instellen, kun je `i18n.addon/toc@0.1.3` gebruiken.

De vertaalopdracht `i18n.site` installeert het pakketbestand van de plug-in volgens de afspraak en voert het vervolgens uit.

De afspraakbestanden zijn als volgt:

### htmIndex.js

`htmIndex.js` wordt ingevoegd aan het einde van `.i18n/htm/index.js`.

Hiervoor wordt `__CONF__` vervangen door de naam van de huidige configuratie (bijvoorbeeld `dev` of `ol`).

### afterTran.js

Dit wordt aangeroepen nadat de vertaling is voltooid, en de doorgegeven parameters zijn als volgt:

* `lang_li`: lijst van talen, de eerste taal is de brontaal
* `changed`: gewijzigde bestanden
* `root`: de rootmap van het project

De geretourneerde waarde is een woordenboek, zoals:

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` is de lijst met uitvoerbestanden, `path` is het pad naar het bestand en `txt` is de inhoud van het bestand.

## Ingebouwde functies

De ingebouwde `js`-runtime is gebaseerd op een二次 ontwikkeling van [boa](https://github.com/boa-dev/boa) en biedt de volgende ingebouwde functies:

* `wPath(path, txt)`: schrijf naar een bestand
* `rTxt(path)`: lees een tekstbestand
* `rBin(path)`: lees een binair bestand
* `rDir(dirpath)`: Lees een directory en retourneer een array: lijst van directories, lijst van bestanden

## Ontwikkelingsgids

De ontwikkeling van plug-ins kan worden gerefereerd aan [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)