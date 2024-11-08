# Installa &

## Installa

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Di Cunfigurazione

`i18n.site` hà un strumentu di traduzzione integratu `i18` Per piacè [cliccate quì per riferite à u documentu `i18` per cunfigurà u token d'accessu](/i18/use) .

## Prughjettu Demo

Cuminciamu cù un prughjettu demo per amparà cumu utilizà `i18n.site` .

Prima clonemu u repository demo è eseguimu u cumandamentu cusì:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

L'utilizatori in Cina continentale ponu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

U nome di u repertoriu di u clone di basa di codice `demo.i18n.site` deve esse `md` per facilità a preview locale cù `docker` .

### Traduce

Prima, entre in u cartulare `md` è eseguite `i18n.site` , chì traduce da `en` à `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Dopu l'esecuzione, i fugliali di traduzzione `git add . ` cache seranu generati `md`

### Preview Locale

Installa è principia `docker` ( `MAC` utilizatore ricumanda di utilizà [orbstack](https://orbstack.dev) cum'è runtime per `docker` ).

Dopu, entre in u repertoriu `docker` è eseguite `./up.sh` , è dopu [https://127.0.0.1](https://127.0.0.1) per vede in u locu.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">