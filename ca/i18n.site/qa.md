# Preguntes Freqüents

## S'ha Suprimit Accidentalment `.i18n/v` , Fet Que Fa Que El Paquet `npm` No Es Publiqui

La versió històrica publicada pel paquet `npm` es desa a `.i18n/v/ol/v.hash` .

Si suprimiu `.i18n/v/ol` el paquet `npm` no s'alliberarà.

En aquest moment, primer cerqueu el número de versió de l'última versió del vostre projecte a [npmjs.com](//npmjs.com) per exemple, `0.1.9` .

A continuació, consulteu `bash` a continuació per crear el fitxer.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Tingueu en compte que la reparació d'aquesta manera perdrà l'historial de fitxers, cosa que farà impossible actualitzar de manera incremental la següent versió, i tot el contingut es tornarà a empaquetar i es carregarà una vegada.