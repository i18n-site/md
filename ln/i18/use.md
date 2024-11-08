# Botia Mpe Bosalela

## windows Liboso E Installer git bash

windows , svp [cliquez awa pona ko télécharger pe ko installer `git bash` liboso](https://git-scm.com/download/win) .

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

En plus, esengeli okanga carte de crédit ya payement na [i18n.site/payBill](//i18n.site/payBill) (Rechargement esengeli te, site internet ekolongola automatiquement ba frais selon usage, [tala page d'accueil pona prix](/#price) ).

## Kosalela

### Projet Ya Démonstration

Svp tala projet ya démonstration [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) koyeba configuration ya `i18` traduction.

Ba usagers na Chine bakoki ko cloner [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Sima ya clonage, kota na répertoire pe tambuisa `i18` pona kosilisa traduction.

### Bokeli Ya Ba Répertoires

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

Sima ya kobongola fisyé ya sika, fisyé ya sika ya ba données ekosalema na répertoire oyo Kobosana te kobakisa `git add . ` .

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

Okoki ko configurer `fromTo` différents pona ba sous-répertoires / Démonstration moko ekomami boye :

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

Na tableau oyo ya configuration, monoko ya source ya traduction ya catalogue `blog` ezali `zh` , mpe monoko ya source ya traduction ya catalogue `blog/your_file_name.md` ezali `ja` .

### Bililingi/Ba Liens Ya Minoko Mingi

Tango ba URL oyo ezali na bilili mpe ba liens na `replace:` mpe `MarkDown` (mpe ba attributs `src` mpe `href` ya `HTML` intégré ) e configuré na `.i18n/conf.yml` na préfixe oyo, code ya langue source na URL eko remplacer na code ya langue ya traduction ( [langue liste ya ba code](/i18/LANG_CODE) ).

Ndakisa, configuration na yo ezali boye:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` ezali diksionɛrɛ, fungola ezali liboso ya URL oyo esengeli kozongisama, mpe motuya ezali mobeko ya kozongisa.

Ndimbola ya kozongisa mobeko `ko de uk>ru zh-TW>zh >en` oyo ezali likolo ezali ete `ko de` asalelaka elilingi ya code ya monoko na bango moko, `zh-TW` mpe `zh` basalelaka elilingi ya `zh` , `uk` basalelaka elilingi ya `ru` , mpe minoko mosusu (lokola `ja` ) esalela elilingi ya `en` na ndenge ya libela.

Ndakisa, fichier source ya français ( `fr` ) ya `MarkDown` ezali boye :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Fichier ya Anglais ( `en` ) oyo ebongolami pe esalemi ezali boye :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Awa, `/en/` na code ya langue source e remplacé na `/zh/` na langue cible.

Liyebisi : Esengeli kozala na `/` liboso mpe nsima ya code ya monoko ya makomi oyo ebongwani na URL.

> [!TIP]
> Soki `- /` e configuré na `url:` , kaka ba nzela ya relative nde eko correspondre, kasi ba URL oyo ebandi na `//` eko correspondre te.
>
> Soki ba liens mosusu ya kombo ya domaine elingi e remplacer mpe misusu elingi te e remplacer, okoki kosalela ba préfixes différents lokola `[x](//x.com/en/)` na `[x](https://x.com/en/)` pona kokesenisa yango.

### Ignorer Fichier

Na ndenge ya libela, ba fichiers nionso oyo ebandi na `.md` na `.yml` na répertoire ya langue source ekobongola.

Soki olingi koboya ba fichiers mosusu mpe kobongola yango te (lokola ba projets oyo esilaki te), okoki ko configurer yango na champ `ignore` .

`ignore` esalela syntaxe ndenge [globset](https://docs.rs/globset/latest/globset/#syntax) na fisyé `.gitignore` .

Ndakisa, `_* ` na fichier ya configuration oyo ezali likolo elakisi ete ba fichiers oyo ebandi na `_` ekobongola te.

## Mibeko Ya Kobongola

### Ba Éditeurs Ya Traduction Basengeli Te Kobakisa to Ko Supprimer Ba Lignes

Libongoli yango ekoki kobongisama. Bobongola makomi ya ebandeli mpe bobongola yango lisusu na masini, mbongwana ya maboko na libongoli ekokoma likolo te (soki paragrafe oyo ya makomi ya ebandeli ebongwani te).

> [!WARN]
> Esengeli kozala na boyokani moko na moko kati na milɔngɔ ya libongoli mpe makomi ya ebandeli. Elingi koloba, kobakisa to kolongola milɔngɔ te ntango ozali kosangisa libongoli. Soki te, ekosala mobulungano na cache ya bobongisi libongoli.

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