# Botia Mpe Bosalela

## windows Liboso E Installer git bash

windows Système, svp [cliquez awa pona ko télécharger pe ko installer `git bash`](https://git-scm.com/download/win) nanu.

Tambwisa ba opérations oyo elandi na `git bash` .

## Ko Installer

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Configurer Jeton Ya Libongoli

Visite [i18n.site/token](//i18n.site/token) Cliquez pona ko copier token

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Bosala `~/.config/i18n.site.yml` , bo coller ba contenus copiés na kati, contenus ezali boye:

```
token: YOUR_API_TOKEN
```

En plus, esengeli [i18n.site/payBill](//i18n.site/payBill) carte de crédit pona kofuta (recharge esengeli te, site internet ekolongola automatiquement ba frais selon usage, [tala page d’accueil pona prix](/#price) ).

## Kosalela

### Projet Ya Démonstration

Svp tala projet ya démonstration [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) koyeba configuration ya `i18` traduction.

Ba usagers na Chine bakoki ko cloner [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Sima ya clonage, kota na répertoire pe tambuisa `i18` pona kosilisa traduction.

### Bokeli Ya Ba Répertoire

Structure ya répertoire ya entrepôt ya modèle ezali boye

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Ba fichiers ya démonstration oyo ebongolami na répertoire `en` ezali kaka exemple mpe ekoki ko effacer.

### Tambwisa Libongoli

Kota na répertoire mpe tambuisa `i18` mpo na kobongola.

En plus ya traduction, programme eko produire pe dossier `.i18n/data` , svp bakisa yango na dépôt.

Sima ya kobongola fisyé ya sika, fisyé ya sika ya ba données ekosalema na répertoire oyo Kobosana te kobakisa `git add .` .

## Fisyé Ya Configuration

`.i18n/conf.yml` ezali fisyé ya bobongisi ya esaleli ya bobongoli ya molɔngɔ́ ya komande `i18`

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

Na fichier ya configuration, sous-officier ya `fromTo` :

`en` ezali monoko ya source, `zh ja ko de fr` ezali monoko ya cible ya libongoli.

Code ya monoko tala [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Na ndakisa, soki olingi kobongola Chinois na Lingelesi, koma lisusu molɔngɔ oyo `zh: en` .

Soki olingi kobongola na minoko nyonso oyo esungami, tika esika ya mpamba nsima ya `:` . Na ndakisa

```
i18n:
  fromTo:
    en:
```

Okoki ko configurer `fromTo` différents pona / sous-répertoires différents Démonstration moko ekomami boye :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Na tableau oyo ya configuration, monoko ya source ya traduction ya catalogue `blog` ezali `zh` , mpe monoko ya source ya traduction ya `blog/your_file_name.md` ezali `ja` .

### Ignorer Fichier

Na ndenge ya libela, ba fichiers nionso oyo ebandi na `.md` na `.yml` na répertoire ya langue source ekobongola.

Soki olingi koboya ba fichiers mosusu mpe kobongola yango te (lokola ba projets oyo esilaki te), okoki ko configurer yango na champ `ignore` .

`ignore` esalela [globset](https://docs.rs/globset/latest/globset/#syntax) ndenge moko na fisyé `.gitignore` .

Ndakisa, `_* ` na fichier ya configuration oyo ezali likolo elakisi ete ba fichiers oyo ebandi na `_` ekobongola te.

## Mibeko Ya Kobongola

### Ba Éditeurs Ya Traduction Basengeli Te Kobakisa to Ko Supprimer Ba Lignes

Libongoli yango ekoki kobongisama. Bobongola makomi ya ebandeli mpe bobongola yango lisusu na masini, mbongwana ya maboko na libongoli ekokoma likolo te (soki paragrafe oyo ya makomi ya ebandeli ebongwani te).

Kasi tosɛngi bino bóyeba ete milɔngɔ ya libongoli mpe makomi ya ebandeli esengeli kokokana moko na moko. Elingi koloba, kobakisa to kolongola milɔngɔ te ntango ozali kosangisa libongoli. Soki te, ekosala mobulungano na cache ya bobongisi libongoli.

Soki likambo moko esali mabe, tala na [FAQ mpo na ba solutions.](/i18/qa#H1)

### `YAML` Mabongoli

Esaleli ya molongo ya komande ekoluka ba fisyé nionso oyo ekosuka na `.yml` na répertoire ya ba fichiers ya monoko ya source mpe ekobongola yango.

* Yeba ete suffixe ya kombo ya fisyé esengeli kozala `.yml` ( `.yaml` te ).

Esaleli yango ebongoli kaka motuya ya diksionɛrɛ na `.yml` , kasi bafungola ya diksionɛrɛ te.

Ndakisa `i18n/en/i18n.yml`

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

Na kotalela `YAML` traduction, okoki kotonga ba solutions internationales na pete pona ba langues ya programmation ndenge na ndenge.

## Kosalela Yango Na Ndenge Ya Liboso

### Sous-Répertoire Ya Libongoli

Tant que `.i18n/conf.yml` esalemi (ntina ya kobanda na modèle ya projet ya démonstration te chaque fois), `i18` ekosala bien.

Esaleli ya ligne ya commande ekozwa ba configurations `.i18n/conf.yml` na ba sous-répertoires nionso mpe ekobongola yango.

Ba projets oyo esalelaka architecture [monorepo](//monorepo.tools) ekoki kokabola ba fichiers ya langue na ba sous-répertoires.

![](https://p.3ti.site/1719910016.avif)

### Répertoire Ya Installation Personnalisée

Ekozala installé na `/usr/local/bin` par défaut.

Soki `/usr/local/bin` ezali na ndingisa ya kokoma te ekozala installé na `~/.bin` .

Kobongisa variable ya environnement `TO` ekoki kolimbola répertoire ya installation, ndakisa :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```