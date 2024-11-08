# Déploiement Et en Ligne

`i18n.site` adopte une architecture [d'application d'une seule page](https://developer.mozilla.org/docs/Glossary/SPA) , et la page d'entrée du site Web et le contenu du site Web sont déployés indépendamment.

Après avoir exécuté la traduction ci-dessus, les répertoires `htm` et `v` seront générés sous le répertoire `md/out/dev` .

Ici, `dev` signifie qu'il est construit sur la base du `.i18n/htm/dev.yml` fichier de configuration.

`dev` répertoire :

Le répertoire `htm` est la page d’entrée du site.

Le répertoire `v` contient le contenu du site Web avec les numéros de version.

L'aperçu local ne se soucie pas du numéro de version et copiera tous les fichiers dans le répertoire `out/dev/v/0.1.0` .

Pour la sortie officielle, les fichiers modifiés seront copiés dans le nouveau répertoire du numéro de version.

## Spécifiez Le Fichier De Configuration Avec `-c`

Différents fichiers de configuration créeront des répertoires correspondants dans le répertoire `out` .

Par exemple, `.i18n/htm/main.yml` créera le répertoire `out/main` .

`dev.yml` et `main.yml` sont les configurations par défaut.

`dev` est l'abréviation de `development` , indiquant l'environnement de développement, utilisé pour l'aperçu local, et constitue également le fichier de configuration par défaut.
`ol` est l'abréviation de `online` , indiquant l'environnement en ligne, qui est utilisé pour la version officielle. Il s'agit également du fichier de configuration par défaut lors de l'utilisation des paramètres de ligne de commande `-n` à `npm` pour la publication.

Vous pouvez également créer d'autres fichiers de configuration. Utilisez `--htm_conf` sur la ligne de commande pour spécifier le nom du fichier de configuration à utiliser :

Par exemple:
```
i18n.site --htm_conf dist --save
```

Ici, `--save` représente le numéro de version de la mise à jour.

## <a rel=id href="#npm" id="npm"></a> Publier du contenu sur npmjs.com

La publication de contenu sur [npmjs.com](//npmjs.com) est la solution par défaut recommandée (voir [Front-end High Availability](/i18n.site/feature#ha) ).

### npm Connexion & Message

Installez `nodejs` , connectez-vous avec `npm login` .

Modifiez `md/.i18n/htm/main.yml` et changez la valeur de [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` comme votre propre nom de `npm` . Tout nom de package inoccupé sur [npmjs.com](//npmjs.com)

Puis modifiez `md/.i18n/htm/main.package.json`

Exécutez `i18n.site --npm` ou `i18n.site -n` dans le répertoire `md` pour traduire et publier.

Si vous utilisez un environnement d'intégration continue pour publier, il n'est pas nécessaire d'installer `nodejs` Copiez simplement les autorisations de connexion et de publication `~/.npmrc` dans l'environnement.

Si vous modifiez le nom du package de `v:` en `main.yml` , assurez-vous **d'abord de supprimer `.i18n/v/main`** , puis de le publier.

#### Serveur Proxy Publié Par npm

Si les utilisateurs de Chine continentale rencontrent des problèmes de réseau et ne parviennent pas à publier `npm` package, ils peuvent définir la variable d'environnement `https_proxy` pour configurer le serveur proxy.

En supposant que le port de votre serveur proxy est `7890` , vous pouvez écrire :

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Contenu Auto-Hébergé

Si vous souhaitez auto-héberger le contenu, modifiez d'abord `md/.i18n/htm/main.yml` et remplacez `v: //unpkg.com/i18n.site` par le préfixe de votre URL, par exemple `v: //i18n-v.xxx.com` .

Entrez le répertoire `md` et exécutez

```
i18n.site --htm_conf ol --save
```

ou abréviation

```
i18n.site -c ol -s
```

Ensuite, configurez le contenu du répertoire `md/out/main/v` sur le chemin du préfixe URL défini dans `v:` .

Enfin, **configurez le temps de cache du chemin se terminant par `/.v` à `1s`** , sinon le contenu nouvellement publié ne sera pas accessible immédiatement.

La durée du cache pour les autres chemins peut être définie sur un an ou plus afin de réduire les requêtes inutiles.

## Héberger Du Contenu Sur s3

Pour auto-héberger du contenu, en plus d' `CDN` votre propre serveur, une autre option courante consiste à utiliser `S3` + .

Vous pouvez utiliser [rclone](https://rclone.org) pour vous connecter au serveur `S3` , puis vous référer et modifier le script suivant, et copier uniquement les modifications incrémentielles sur `S3` pour chaque version.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

N'oubliez pas de configurer `CDN` pour que le temps de cache du chemin se terminant par `/.v` soit `1s` , sinon le contenu nouvellement publié ne sera pas accessible immédiatement.

## Publier Un Site Web

Le site Web peut être déployé n'importe où [github page](https://pages.github.com) et [cloudflare page](https://pages.cloudflare.com) sont de bons choix.

Le site Web utilisant une architecture [d'application monopage](https://developer.mozilla.org/docs/Glossary/SPA) , n'oubliez pas de réécrire les chemins d'URL qui ne contiennent pas de `. ` à `index.html` .

La page d'entrée du site Web ne doit être déployée qu'une seule fois et il n'est pas nécessaire de redéployer la page d'entrée du site Web pour les mises à jour de contenu ultérieures.

### Déployer Sur La page github

[Cliquez d'abord ici github pour créer une organisation](https://github.com/account/organizations/new?plan=free) . Le nom de l'organisation suivante est `i18n-demo` à titre d'exemple.

Créez ensuite l'entrepôt `i18n-demo.github.io` sous cette organisation (veuillez remplacer `i18n-demo` par le nom de l'organisation que vous avez créé) :

![](https://p.3ti.site/1721098657.avif)

Lors de la publication du contenu de l'article précédent, `out/main/htm` a été généré. Veuillez entrer dans ce répertoire et exécuter :

```
ln -s index.html 404.html
```


Étant donné que `github page` ne prend pas en charge la réécriture du chemin d'URL, `404.html` est utilisé à la place.

Exécutez ensuite la commande suivante dans le répertoire `htm` (n'oubliez pas de remplacer `i18n-demo/i18n-demo.github.io.git` par votre propre adresse d'entrepôt) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Après avoir poussé le code, attendez que le déploiement de `github page` s'exécute avec succès (comme indiqué ci-dessous) avant de pouvoir y accéder.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pour la page de démonstration, veuillez consulter :

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Déployer Sur La page cloudflare

[cloudflare page](//pages.cloudflare.com) Par rapport à `github page` , il fournit une réécriture de chemin, est plus convivial pour la Chine continentale et est plus accessible. Son utilisation est recommandée.

Le déploiement de `cloudflare page` est généralement basé sur le déploiement de `github page` ci-dessus.

Créez un projet et liez l'entrepôt `i18n-demo.github.io` ci-dessus.

Le processus est illustré dans la figure ci-dessous :
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Veuillez cliquer sur `Add Account` pour accorder l'accès à l'organisation `i18n-demo` .

Si vous avez lié l'entrepôt d'une autre organisation, vous devrez peut-être cliquer deux fois sur `Add Account` pour autoriser deux fois avant que la nouvelle organisation ne s'affiche.

![](https://p.3ti.site/1721118306.avif)

Ensuite, sélectionnez l'entrepôt `i18n-demo.github.io` , puis cliquez sur `Begin setup` et utilisez les valeurs par défaut pour les étapes suivantes.

![](https://p.3ti.site/1721118490.avif)

Après la première liaison, vous devez attendre quelques minutes avant de pouvoir y accéder.

Après le déploiement, vous pouvez lier un nom de domaine personnalisé.

![](https://p.3ti.site/1721119459.avif)

Après avoir lié le nom de domaine personnalisé, accédez au nom de domaine pour configurer la réécriture du chemin de l'application monopage, comme indiqué ci-dessous :

![](https://p.3ti.site/1721119320.avif)

Les règles dans l'image ci-dessus sont les suivantes. Veuillez remplacer `i18n.site` dans la première ligne ci-dessous par le nom de domaine que vous avez lié.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

De plus, veuillez configurer les règles de cache, comme indiqué ci-dessous, et définir la durée du cache sur un mois.

![](https://p.3ti.site/1721125111.avif)

Veuillez remplacer le nom de domaine correspondant à la deuxième étape dans l'image ci-dessus par le nom de domaine que vous avez lié.

### Optimiser Le Déploiement De Sites Web en Chine Continentale

Si vous souhaitez obtenir de meilleures performances d'accessibilité dans l'environnement réseau de la Chine continentale, veuillez d'abord [enregistrer un nom de domaine](//beian.aliyun.com) .

Ensuite, utilisez le stockage objet des fournisseurs de cloud en + continentale `CDN` Déployez le contenu suivant `out/main/htm` .

Vous pouvez utiliser l'informatique de pointe pour réécrire le chemin afin de l'adapter aux applications d'une seule page. Par exemple, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) peut être configuré comme ceci :

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Les en-têtes de réponse peuvent être définis pour déboguer la sortie, telle que out.XXX = 'MSG' ;
})
```

![](https://p.3ti.site/1721121273.avif)

Étant donné que l'enregistrement `MX` et l'enregistrement `CNAME` ne peuvent pas coexister, si vous souhaitez recevoir des e-mails de nom de domaine en même temps, vous devez coopérer avec le script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) pour passer au niveau `CNAME` dans l'enregistrement `A` .

De plus, étant donné que les frais de trafic à l'étranger des fournisseurs de cloud en Chine continentale sont relativement élevés, si vous souhaitez optimiser les coûts, vous pouvez utiliser [la résolution géographique gratuite de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) et le nom de domaine personnalisé de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (comme indiqué ci-dessous) pour y parvenir. détournement du trafic──Acheminement du trafic en Chine continentale Baidu Cloud `CDN` , le trafic international va en cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ces solutions d'optimisation du déploiement sont plus complexes et seront présentées dans des chapitres séparés à l'avenir.

### Redirection De Nom De Domaine Générique

Si vous utilisez `i18n.site` pour générer un site Web comme site Web principal, vous devez généralement configurer la redirection pan-domaine, c'est-à-dire rediriger l'accès vers `*.xxx.com` (y compris `www.xxx.com` ) vers `xxx.com` .

Cette exigence peut être réalisée avec l'aide d'Alibaba Cloud `CDN` `EdgeScript` ( [Document anglais](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Document chinois](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ajoutez le nom de domaine dans [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) et pointez le nom de domaine `*.xxx.com` `CNAME` dans Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Par exemple, la configuration de redirection de nom pan-domaine de `*.i18n.site` dans l'image ci-dessus est la suivante :

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Déployer Avec nginx

Veuillez ajouter une configuration similaire à celle suivante dans le paragraphe `server` de nginx Veuillez remplacer `/root/i18n/md/out/main/htm` par le chemin de votre propre projet `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Basé Sur `github action` Intégration Continue

Vous pouvez vous référer à ce qui suit pour configurer votre `github action` :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Comme on peut le voir dans la configuration, ce workflow est déclenché lors de la poussée vers la branche `main` et la branche `dist` .

Le workflow utilisera le fichier de configuration correspondant au nom de la branche pour publier le document. Ici, `.i18n/htm/main.yml` et `.i18n/htm/dist.yml` seront utilisés respectivement comme configuration de publication.

Nous recommandons les bonnes pratiques suivantes pour le processus de publication de documents :

Lorsque les modifications sont poussées vers la branche `main` , la construction et le déploiement du document sont déclenchés vers la station de prévisualisation (la station de prévisualisation est disponible [github page](//pages.github.com) ).

Après avoir confirmé que le document est correct sur le site de prévisualisation, le code sera fusionné et poussé vers la branche `dist` , et la version et le déploiement officiels seront mis en ligne.

Bien entendu, la mise en œuvre du processus ci-dessus nécessite l’écriture de davantage de configurations.

Vous pouvez vous référer au projet réel [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) pour les scripts de workflow.

`secrets.I18N_SITE_TOKEN` et `secrets.NPM_TOKEN` dans la configuration nécessitent que vous configuriez des variables secrètes dans la base de code.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` est le jeton de publication du package `npm` dans la configuration. Visitez [npmjs.com](//npmjs.com) et créez un jeton avec les autorisations de publication (comme indiqué ci-dessous).

![](//p.3ti.site/1730969906.avif)


## Structure Du Répertoire

### `public`

Fichiers statiques du site Web, tels que `favicon.ico` , `robots.txt` , etc.

Les fichiers d'icônes ici peuvent être générés avec [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Sous le répertoire `.i18n` se trouvent les fichiers de configuration, le cache de traduction, etc. de `i18n.site` Voir le chapitre suivant [« Configuration »](/i18n.site/conf) pour plus de détails.

### `en`

Répertoire de langue source, correspondant à `en` fichiers de configuration `fromTo` sur `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Veuillez vous référer à la configuration de la traduction [i18](/i18/use)