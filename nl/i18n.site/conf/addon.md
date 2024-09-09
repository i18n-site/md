# Plug-in

Plug-ins kunnen worden geconfigureerd in `.i18n/conf.yml`, zoals:

```yml
addon:
  - i18n.addon/toc
```

## Officiële plug-ins

* `i18n.addon/toc` : Inhoudsopgave-index
  Based on `TOC`, gegenereer een inhoudsopgave-index in `json`, standaard ingeschakeld

* `i18n.addon/mouse` : Muiscursoreffecten

## Naamconventie voor bestanden

Plug-ins zijn allemaal `npm`-pakketten.

Het pakket dat overeenkomt met `i18n.addon/toc` hierboven is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

Plug-ins gebruiken standaard de nieuwste versie en controleren wekelijks op updates.

Als u een specifieke versie wilt vastzetten, kunt u `i18n.addon/toc@0.1.3` schrijven.

De vertaalopdrachtregel `i18n.site` installeert het standaardbestand van het plug-inpakket en voert deze vervolgens uit.

De standaard bestandsnamen zijn als volgt

### htmIndex.js

`htmIndex.js` wordt geïnjecteerd aan het einde van `.i18n/htm/index.js`.

Waarbij `__CONF__` wordt vervangen door de naam van de huidige configuratie (bijvoorbeeld `dev` of `ol`).

### afterTran.js

Dit wordt aangeroepen nadat de vertaling is voltooid, met de volgende parameters.

* `lang_li` : Lijst van talen, de eerste taal is de brontaal
* `changed` : Gewijzigde bestanden
* `root` : Hoofdmap van het project

De geretourneerde waarde is een woordenboek, zoals

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` voor de lijst van uitvoerbestanden, `path` voor het bestandspad en `txt` voor de inhoud van het bestand.

## Ingebouwde functies

De ingebouwde `js`-runtime is ontwikkeld op basis van een secundaire ontwikkeling van [boa](https://github.com/boa-dev/boa), en de ingesloten functies zijn als volgt:

* `wPath(path, txt)` : Schrijf naar bestand
* `rTxt(path)` : Lees een tekstbestand
* `rBin(path)` : Lees een binair bestand
* `rDir(dirpath)` : Lees een map, de retourwaarde is een array: lijst van mappen, lijst van bestanden

## Ontwikkelingsgids

De ontwikkeling van plug-ins kan worden gerefereerd aan [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)