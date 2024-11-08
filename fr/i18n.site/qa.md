# Faq

## Suppression Accidentelle De `.i18n/v` , Entraînant L'échec De La Publication Du Package `npm`

La version historique publiée par le package `npm` est enregistrée dans `.i18n/v/ol/v.hash` .

Si vous supprimez accidentellement `.i18n/v/ol` le package `npm` ne sera pas publié.

À ce stade, recherchez d’abord le numéro de version de la dernière version de votre projet dans [npmjs.com](//npmjs.com) par exemple `0.1.9` .

Référez-vous ensuite à `bash` ci-dessous pour créer le fichier.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Notez qu'une réparation de cette manière entraînera la perte de l'historique des fichiers, ce qui rendra impossible la mise à jour incrémentielle de la prochaine version, et tout le contenu sera reconditionné et téléchargé une seule fois.