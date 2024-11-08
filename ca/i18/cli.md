# Explicació Detallada Dels Paràmetres De La Línia D'ordres

## `-p` Els Fitxers

`-p` o `--purge` esborraran els fitxers que existeixen a cada directori de traducció però que no existeixen al directori de l'idioma font.

Perquè quan s'escriuen documents, sovint s'ajusten els noms dels fitxers Markdown, la qual cosa fa que hi hagi molts fitxers antics i abandonats al directori de traducció.

Utilitzeu aquest paràmetre per netejar els fitxers que s'han d'esborrar en directoris d'altres idiomes.

## `-d` Especifica El Directori De Traducció

El directori traduït per defecte és el directori on es troba el fitxer actual.

`-d` o `--workdir` poden especificar el directori de traducció, com ara:

```
i18 -d ~/i18n/md
```

## `-h` Veure Ajuda

`-h` o `--help` per veure l'ajuda de la línia d'ordres.