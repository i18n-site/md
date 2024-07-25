# Problema Comú

## S'ha Suprimit Accidentalment `.i18n/V` Provocant Que El Paquet `Npm` No Es Publiqui

S'ha desat la versió històrica del llançament de `npm` paquet `.i18n/v/ol/v.hash`

Si suprimiu `.i18n/v/ol` el paquet `npm` no es publicarà.

En aquest moment, primer cerqueu el número de versió de l'última versió del vostre projecte [npmjs.com](//npmjs.com) , per exemple `0.1.9`

A continuació, consulteu el fitxer `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Tingueu en compte que la reparació d'aquesta manera perdrà l'historial de fitxers, cosa que farà impossible actualitzar de manera incremental la següent versió, i tot el contingut es tornarà a empaquetar i es carregarà una vegada.

