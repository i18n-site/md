# Explicació Detallada Dels Paràmetres De La Línia D'ordres

## Netegeu `-P` Fitxers

`-p` `--purge` netejarà els fitxers que hi ha a cada directori de traducció però que no existeixen al directori de l'idioma font.

Perquè quan s'escriuen documents, sovint s'ajusten els noms dels fitxers Markdown, la qual cosa fa que hi hagi molts fitxers antics i abandonats al directori de traducció.

Utilitzeu aquest paràmetre per netejar fitxers d'altres directoris d'idiomes que s'han d'eliminar.

## `-D` Especifiqueu El Directori De Traducció

El directori traduït per defecte és el directori on es troba el fitxer actual.

`-d` `--workdir` pot especificar el directori de traducció, com ara:

```
i18 -d ~/i18n/md
```

## `-H` Veure Ajuda

`-h` `--help` veure l'ajuda de la línia d'ordres.