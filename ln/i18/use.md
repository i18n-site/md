# Botia Mpe Bosalela

## windows Liboso E Installer git bash

windows , svp [cliquez awa pona ko télécharger pe ko installer liboso `git bash`](https://git-scm.com/download/win)

Tambwisa ba opérations oyo elandi na `git bash`

## Ko Installer

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurer Jeton Ya Libongoli

Visite [i18n.site/token](//i18n.site/token) Cliquez pona ko copier token

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Créer `~/.config/i18n.site.yml` coller contenus copié na kati, contenus ezali boye:

```
token: YOUR_API_TOKEN
```

En plus, esengeli [i18n.site/payBill](//i18n.site/payBill) carte de crédit pona kofuta (recharge esengeli te, site internet ekolongola automatiquement ba frais selon usage, [tala page d’accueil pona prix](/#price) ).

## Kosalela

### Projet Ya Démonstration

Svp tala projet ya démonstration [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) koyeba configuration ya traduction `i18`

Ba usagers na Chine bakoki ko cloner [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Sima ya clonage, kota na répertoire mpe tambuisa `i18`

### Bokeli Ya Annuaire

Structure ya répertoire ya entrepôt ya modèle ezali boye

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Annuaire `en` ezali na ba fichiers ya démonstration oyo ebongolami, oyo ezali kaka exemple mpe ekoki ko effacer.

### Tambwisa Libongoli

Kota na répertoire mpe tambuisa `i18`

### Bakisa Ba Fichiers Na Ebombelo

En plus ya traduction, programme ekosala pe ba fichiers oyo elandi, svp bakisa yango na dépôt.

```
.i18n/hash
.i18n/cache/.gitignore
```

Parmi : , contenus ya `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Yango elingi koloba koboya `.i18n/cache/.gitignore` fichiers nionso na répertoire `.i18n/cache/`

Soki logiciel na yo ya contrôle ya version ezali te `git` svp ignorer yango selon configuration oyo.

## Fisyé Ya Configuration

`.i18n/conf.yml` Ezali fisyé ya bobongisi ya esaleli ya bobongoli `i18`

Makambo oyo ezali na kati ezali boye:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Monoko Ya Liziba &

Na fichier ya configuration, ba sous-officiers ya `fromTo`

`en` `zh ja ko de fr`

Code ya monoko tala [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Ndakisa, soki olingi kobongola Chinois na Lingelesi, koma lisusu ligne oyo `zh: en`

Soki olingi kobongola na minoko nyonso oyo esungami, tika esika ya mpamba nsima ya `:` Na ndakisa

```
i18n:
  fromTo:
    en:
```

### Ignorer Fichier

Na ndenge ya libela, ba fichiers nionso oyo ebandi na `.md` na `.yml` na répertoire ya monoko ya source ekobongola.

Soki olingi koboya ba fichiers mosusu mpe kobongola yango te (lokola ba projets oyo esilaki te), okoki kosalela configuration ya champ `ignore`

Esalelaka syntaxe [globset](https://docs.rs/globset/latest/globset/#syntax) ekokani na `.gitignore` `ignore`

Ndakisa, na fichier ya configuration oyo ezali likolo `_* ` ete ba fichiers oyo ebandi na `_` ekobongola te.

## Mibeko Ya Kobongola

### Ba Éditeurs Ya Traduction Basengeli Te Kobakisa to Ko Supprimer Ba Lignes

Libongoli yango ekoki kobongisama. Bobongola makomi ya ebandeli mpe bobongola yango lisusu na masini, mbongwana ya maboko na libongoli ekokoma likolo te (soki paragrafe oyo ya makomi ya ebandeli ebongwani te).

Kasi tosɛngi bino bóyeba ete milɔngɔ ya libongoli mpe makomi ya ebandeli esengeli kokokana moko na moko. Elingi koloba, kobakisa to kolongola milɔngɔ te ntango ozali kosangisa libongoli. Soki te, ekosala mobulungano na cache ya bobongisi libongoli.

Soki likambo moko esali mabe, tala na [FAQ mpo na ba solutions.](/i18/qa#H1)

### `YAML` Kobongola

Esaleli ya molongo ya komande ekokuta ba fisyé nionso oyo ekosuka na `.yml` na répertoire ya ba fichiers ya monoko ya source mpe ekobongola yango.

* Yeba ete suffixe ya kombo ya fisyé esengeli kozala `.yml` ( `.yaml` te ).

Esaleli yango ebongoli kaka motuya ya diksionɛrɛ na `.yml` , kasi bafungola ya diksionɛrɛ te.

Na ndakisa `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ekobongolama lokola `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Bobongoli ya `YAML` ekoki mpe kobongisama na maboko (kasi kobakisa to kolongola bafungola to milɔngɔ te na libongoli).

Na kotalela `YAML`

## Kosalela Yango Na Ndenge Ya Liboso

### Sous-Répertoire Ya Libongoli

Tant `i18` osali `.i18n/conf.yml`

Esaleli ya ligne ya commande ekoluka configuration ya `.i18n/conf.yml` na ba sous-répertoires nionso pe ekobongola yango.

Ba projets oyo esalelaka architecture [monorepo](//monorepo.tools) ekoki kokabola ba fichiers ya langue na ba sous-répertoires.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Répertoire Ya Installation Personnalisée

Ekozala installé na `/usr/local/bin`

`~/.bin` `/usr/local/bin`

Set variables ya `TO` Okoki kolimbola répertoire ya installation, ndakisa :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
