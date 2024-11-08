# Installer &

## Installer

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Jeton De Configuration

`i18n.site` dispose d'un outil de traduction `i18` intégré. Veuillez [cliquer ici pour vous référer au document `i18` pour configurer le jeton d'accès](/i18/use) .

## Projet De Démonstration

Commençons par un projet de démonstration pour apprendre à utiliser `i18n.site` .

Nous clonons d'abord le référentiel de démonstration et exécutons la commande comme suit :

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Les utilisateurs en Chine continentale peuvent :

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Le nom du répertoire du clone de base de code `demo.i18n.site` doit être `md` pour faciliter l'aperçu local avec `docker` .

### Traduire

Tout d’abord, entrez dans le répertoire `md` et exécutez `i18n.site` , ce qui traduira `en` en `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Après l'exécution, les fichiers de traduction et de cache seront générés. N'oubliez pas de les ajouter au référentiel dans le `git add . ` `md` .

### Aperçu Local

Installez et démarrez `docker` ( `MAC` utilisateur recommande d'utiliser [orbstack](https://orbstack.dev) comme moteur d'exécution pour `docker` ).

Ensuite, entrez dans le répertoire `docker` et exécutez `./up.sh` , puis visitez [https://127.0.0.1](https://127.0.0.1) pour prévisualiser localement.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">