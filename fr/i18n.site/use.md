# Installer &

## Déployer

`i18n.site` intègre l'outil de traduction `i18n`. Veuillez [cliquer ici pour consulter la documentation `i18n` et configurer le jeton d'accès](/i18/use).

## Installation

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projet de démonstration

Commencez par le projet de démonstration pour apprendre à utiliser `i18n.site`.

Clonez d'abord le dépôt de démonstration avec la commande suivante :

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Les utilisateurs en Chine continentale peuvent :

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Le répertoire de clone du dépôt `demo.i18n.site` doit être nommé `md` pour faciliter l'aperçu local avec `docker`.

### Traduction

Accédez au répertoire `md` et lancez `i18n.site` pour traduire du `en` vers le `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Après l'exécution, des fichiers de traduction et de cache seront générés. N'oubliez pas d'ajouter ces fichiers au dépôt avec `git add .` dans le répertoire `md`.

### Aperçu local

Installez et démarrez `docker` (l'utilisateur `MAC` est recommandé d'utiliser [orbstack](https://orbstack.dev) comme runtime pour `docker`).

Accédez au répertoire `docker` et lancez `./up.sh`, puis visitez [https://127.0.0.1](https://127.0.0.1) pour prévisualiser localement.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publier du contenu

`i18n.site` utilise une architecture [single-page application](https://developer.mozilla.org/docs/Glossary/SPA), où la page d'entrée et le contenu du site sont déployés séparément.

Après la traduction, des répertoires `htm` et `v` seront générés dans `md/out/dev`.

`dev` indique qu'ils sont construits à partir du fichier de configuration `.i18n/htm/dev.yml`.

Contenu du répertoire `dev` :

Le répertoire `htm` contient la page d'entrée du site.

Le répertoire `v` contient le contenu du site avec des numéros de version.

Pour l'aperçu local, les fichiers seront copiés dans `out/dev/v/0.1.0` sans se soucier du numéro de version.

Pour la publication officielle, les fichiers modifiés seront copiés dans un nouveau répertoire de numéro de version.

#### Spécifier un fichier de configuration avec -c

Des fichiers de configuration différents créeront des répertoires correspondants dans le répertoire `out`.

Par exemple, `.i18n/htm/ol.yml` créera le répertoire `out/ol`.

`dev.yml` et `ol.yml` sont les configurations par défaut.

`dev` est l'abréviation de `development`, indiquant l'environnement de développement pour l'aperçu local, et est également le fichier de configuration par défaut.
`ol` est l'abréviation de `online`, indiquant l'environnement en ligne pour la publication officielle, et est également le fichier de configuration par défaut pour la publication via la ligne de commande `-n` vers `npm`.

Vous pouvez également créer d'autres fichiers de configuration. Utilisez `--htm_conf` sur la ligne de commande pour spécifier le nom du fichier de configuration à utiliser :

Par exemple :
```
i18n.site --htm_conf yourConfig --save
```

Ici, `--save` signifie mettre à jour le numéro de version de publication.

#### <a rel=id href="#npm" id="npm"></a> Publier du contenu sur npmjs.com

La publication sur [npmjs.com](//npmjs.com) est la méthode recommandée par défaut (voir [High Availability Front-end](/i18n.site/feature#ha)).

##### Connexion npm et publication

Installez `nodejs` et connectez-vous avec `npm login`.

Modifiez `md/.i18n/htm/ol.yml` et remplacez `i18n.site` dans `v: //unpkg.com/i18n.site` par votre propre nom de package `npm`.

Utilisez un nom de package non utilisé sur [npmjs.com](//npmjs.com), par exemple, utilisez le nom de domaine du site Web.

En publiant sur la base d'un package `npm`, assurez-vous d'utiliser **le préfixe `//unpkg.com/`** pour `v:`. `i18n.site` a optimisé spécifiquement le temps de cache de `/.v` sous ce préfixe de chemin pour permettre une visualisation rapide des nouvelles versions.

Exécutez `i18n.site --npm` ou `i18n.site -n` dans le répertoire `md` pour traduire et publier.

Si vous utilisez un environnement d'intégration continue pour publier, il n'est pas nécessaire d'installer `nodejs`. Copiez simplement les autorisations de connexion et de publication de `~/.npmrc` dans l'environnement.

Si vous modifiez le nom du package de `v:` dans `ol.yml`, **supprimez d'abord `.i18n/v/ol`** avant de publier.

##### Proxy serveur pour la publication npm

Les utilisateurs en Chine continentale peuvent configurer une variable d'environnement `https_proxy` pour configurer un serveur proxy si des problèmes de réseau empêchent la publication du package `npm`.

Si le port de votre serveur proxy est `7890`, vous pouvez configurer ainsi :

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenu auto-hébergé

Si vous souhaitez héberger le contenu vous-même, modifiez `md/.i18n/htm/ol.yml` et remplacez `v: //unpkg.com/i18n.site` par le préfixe de votre URL, par exemple `v: //i18n-v.xxx.com`.

Accédez au répertoire `md` et exécutez :

```
i18n.site --htm_conf ol --save
```

Ou en abrégé :

```
i18n.site -c ol -s
```

Configurez ensuite le contenu du répertoire `md/out/ol/v` sur le chemin du préfixe URL défini dans `v`.

Enfin, **configurez le temps de cache du chemin se terminant par `/.v` à `1s`**. Sinon, le contenu récemment publié ne sera pas accessible immédiatement.

Le temps de cache pour les autres chemins peut être défini sur un an ou plus pour réduire les requêtes inutiles.

##### Héberger du contenu sur S3

En plus de l'hébergement sur votre propre serveur, une autre option courante pour héberger du contenu est d'utiliser `S3` + `CDN`.

Vous pouvez utiliser [rclone](https://rclone.org) pour vous connecter au serveur `S3` et modifier le script suivant pour copier uniquement les modifications incrémentielles sur `S3` à chaque publication.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

N'oubliez pas de configurer `CDN` pour que le temps de cache pour les chemins se terminant par `/.v` soit `1s` pour accéder immédiatement au contenu nouvellement publié.

### Publier un site Web

Le site Web peut être déployé sur n'importe quelle plateforme, [GitHub Pages](https://pages.github.com) et [Cloudflare Pages](https://pages.cloudflare.com) sont des choix recommandés.

Comme le site utilise une architecture [single-page application](https://developer.mozilla.org/docs/Glossary/SPA), n'oubliez pas de réécrire les chemins d'URL qui ne contiennent pas `. ` vers `index.html`.

La page d'entrée du site Web doit être déployée une seule fois, et il n'est pas nécessaire de redéployer la page d'entrée pour les mises à jour de contenu ultérieures.

#### Déployer sur GitHub Pages

Cliquez [ici](https://github.com/account/organizations/new?plan=free) pour créer une organisation GitHub. Utilisons `i18n-demo` comme exemple de nom d'organisation.

Créez ensuite le dépôt `i18n-demo.github.io` sous cette organisation (remplacez `i18n-demo` par le nom de votre organisation)

![](https://p.3ti.site/1721098657.avif)

Après avoir publié le contenu, vous avez généré `out/ol/htm`. Accédez à ce répertoire et exécutez :

```
ln -s index.html 404.html
```


Étant donné que `github page` ne supporte pas la réécriture des chemins d'URL, utilisez `404.html` à la place.

Accédez au répertoire `htm` et exécutez la commande suivante (remplacez `i18n-demo/i18n-demo.github.io.git` par votre propre adresse de dépôt) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Après avoir poussé le code, attendez que le déploiement de `github page` soit réussi (comme indiqué ci-dessous) avant de pouvoir y accéder.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Voir la page de démonstration :

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Déployer sur Cloudflare Pages

[page cloudflare](//pages.cloudflare.com) offre, par rapport à `github page`, une réécriture de chemins, une convivialité accrue pour la Chine continentale et une meilleure accessibilité. Il est recommandé d'utiliser.

Le déploiement de `cloudflare page` est généralement basé sur le déploiement de `github page` ci-dessus.

Créez un projet et liez le dépôt `i18n-demo.github.io`.

Le processus est illustré dans l'image ci-dessous :
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Cliquez sur `Add Account` pour accorder l'accès à l'organisation `i18n-demo`.

Si vous avez déjà lié des dépôts d'autres organisations, vous devrez peut-être cliquer deux fois sur `Add Account` pour autoriser deux fois avant que la nouvelle organisation ne s'affiche.

![](https://p.3ti.site/1721118306.avif)

Sélectionnez le dépôt `i18n-demo.github.io`, puis cliquez sur `Begin setup` et utilisez les valeurs par défaut pour les étapes suivantes.

![](https://p.3ti.site/1721118490.avif)

Après la première liaison, vous devez attendre quelques minutes avant de pouvoir y accéder.

Après le déploiement, vous pouvez lier un nom de domaine personnalisé.

![](https://p.3ti.site/1721119459.avif)

Configurez la réécriture d'URL pour l'application monopage sous le nom de domaine personnalisé, comme indiqué ci-dessous :

![](https://p.3ti.site/1721119320.avif)

Les règles dans l'image ci-dessus sont les suivantes. Remplacez `i18n.site` dans la première ligne ci-dessous par le nom de domaine que vous avez lié.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Configurez également les règles de cache, comme indiqué ci-dessous, et définissez la durée du cache sur un mois.

![](https://p.3ti.site/1721125111.avif)

Remplacez le nom de domaine correspondant dans la deuxième étape de l'image ci-dessus par le nom de domaine que vous avez lié.

#### Optimiser le déploiement de sites Web en Chine continentale

Pour obtenir de meilleures performances d'accessibilité dans l'environnement réseau de la Chine continentale, veuillez d'abord [enregistrer un nom de domaine](//beian.aliyun.com).

Ensuite, utilisez le stockage objet des fournisseurs de cloud en Chine continentale + `CDN` pour héberger le contenu de `out/ol/htm`.

Vous pouvez utiliser l'informatique de pointe pour réécrire le chemin afin de l'adapter aux applications monopage. Par exemple, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) peut être configuré comme suit :

```js
var uri=r.uri,p=uri.lastIndexOf('.');
if(
  p<0 || !'|avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml|'.includes('|'+uri.slice(p+1)+'|')
){
  r.uri='/index.html'
}
r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})
})
```
![](https://p.3ti.site/1721121273.avif)

Étant donné que les enregistrements `MX` et `CNAME` ne peuvent pas coexister, si vous souhaitez recevoir des e-mails de domaine, utilisez le script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) pour convertir le `CNAME` en un enregistrement `A`.

De plus, vu que les coûts de trafic à l'étranger des fournisseurs de cloud en Chine continentale sont relativement élevés, pour optimiser les coûts, vous pouvez utiliser [la résolution géographique gratuite de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) et le nom de domaine personnalisé de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (comme indiqué ci-dessous) pour réaliser le分流 du trafic ── le trafic en Chine continentale passe par Baidu Cloud `CDN`, et le trafic international par Cloudflare.

![](https://p.3ti.site/1721119788.avif)

Ces solutions d'optimisation du déploiement sont complexes et seront détaillées dans des chapitres séparés à l'avenir.

#### Redirection de nom de domaine générique

Si vous utilisez `i18n.site` pour générer un site Web principal, configurez généralement la redirection de nom de domaine générique pour rediriger `*.xxx.com` (y compris `www.xxx.com`) vers `xxx.com`.

Cette exigence peut être réalisée avec l'aide d'Alibaba Cloud `CDN` `EdgeScript` ([Documentation anglaise](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documentation chinoise](https://help.aliyun.com/zh/cdn/developer-reference/edgescript))

Ajoutez le nom de domaine dans [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) et pointez `*.xxx.com` vers le `CNAME` d'Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

Par exemple, la configuration de redirection de nom de domaine générique pour `*.i18n.site` est la suivante :

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Déployer avec nginx

Ajoutez une configuration similaire dans le bloc `server` de nginx, en remplaçant `/root/i18n/md/out/ol/htm` par le chemin de votre propre répertoire `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Structure du répertoire

#### `public`

Fichiers statiques du site Web, tels que `favicon.ico`, `robots.txt`, etc.

Vous pouvez utiliser [realfavicongenerator.net](https://realfavicongenerator.net) pour générer les fichiers d'icône.

#### `.i18n`

Le répertoire `.i18n` contient les fichiers de configuration et le cache de traduction de `i18n.site`. Pour plus de détails, voir le chapitre suivant [« Configuration »](/i18n.site/conf).

#### `en`

Répertoire de la langue source, correspondant à `en` dans la configuration `fromTo` de `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Consultez la configuration de traduction [i18n](/i18/use).