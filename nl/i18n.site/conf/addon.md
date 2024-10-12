# Plug-in

Plug-ins kunnen worden geconfigureerd in `.i18n/conf.yml`, zoals:

```yml
addon:
  - i18n.addon/toc
```

## Officiële plug-ins

* `i18n.addon/toc` : Inhoudsopgave-index
  Genereren van een inhoudsopgave-index in `json` op basis van `TOC`, standaard ingeschakeld

* `i18n.addon/mouse` : Muiscursoreffecten

## Bestandsnaamconventie

Alle plug-ins zijn `npm`-pakketten.

Het pakket dat overeenkomt met `i18n.addon/toc` hierboven is [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc).

De plug-in gebruikt standaard de nieuwste versie en controleert wekelijks op updates.

Als je een vaste versie wilt instellen, kun je `i18n.addon/toc@0.1.3` opgeven.

De vertaalopdrachtregel `i18n.site` installeert de overeengekomen bestanden van het plug-inpakket en voert deze vervolgens uit.

De overeengekomen bestandsnamen zijn als volgt:

### htmIndex.js

`htmIndex.js` wordt ingevoegd aan het einde van `.i18n/htm/index.js`.

Hiervoor wordt `__CONF__` vervangen door de naam van de huidige configuratie (bijvoorbeeld `dev` of `ol`).

### afterTran.js

Dit wordt aangeroepen na het voltooien van de vertaling, met de volgende parameters.

* `lang_li` : Lijst van talen, waarbij de eerste taal de brontaal is
* `changed` : Gewijzigde bestanden
* `root` : Hoofdmap van het project

De geretourneerde waarde is een dictionary, zoals:

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

De ingebouwde `js`-runtime is gebaseerd op de二次 ontwikkeling van [boa](https://github.com/boa-dev/boa), en de ingebouwde functies zijn:

* `wPath(path, txt)` : Schrijf naar een bestand
* `rTxt(path)` : Lees een tekstbestand
* `rBin(path)` : Lees een binair bestand
* `rDir(dirpath)` : Lees een directory, de retourwaarde is een array: lijst van directories, lijst van bestanden

## Ontwikkelingsgids

De ontwikkeling van plug-ins kan worden gerefereerd aan [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)