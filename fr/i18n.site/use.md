# Installer &

## Jeton De Configuration

`i18n.site` L'outil de traduction `i18` est intégré, veuillez [cliquer ici pour vous référer au document `i18` pour configurer le jeton d'accès](/i18/use) .

## Installer

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projet De Démonstration

Commençons par un projet de démonstration et apprenons à utiliser `i18n.site`

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

`demo.i18n.site` Le nom du répertoire du clone de base de code doit être `md` pour faciliter la prévisualisation locale avec `docker` .

### Traduire

Tout d’abord, entrez dans le répertoire `md` et exécutez `i18n.site` , ce qui traduira `en` en `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Après l'exécution, les fichiers de traduction et de cache seront générés. N'oubliez pas de les ajouter au référentiel `git add . ` dans le répertoire `md`

### Aperçu Local

Installez et démarrez `docker` ( `MAC` recommandent d'utiliser [orbstack](https://orbstack.dev) comme moteur d'exécution de `docker` ).

Ensuite, entrez dans le répertoire `docker` et exécutez `./up.sh` , puis visitez [https://127.0.0.1](https://127.0.0.1) pour prévisualiser localement.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Publier Un Contenu

`i18n.site` Adopte une architecture [d'application d'une seule page](https://developer.mozilla.org/docs/Glossary/SPA) , et la page d'entrée du site Web et le contenu du site Web sont déployés indépendamment.

Après avoir exécuté la traduction ci-dessus, les répertoires `htm` et `v` seront générés dans le répertoire `md/out/dev`

Ici, `dev` indique qu'il est construit sur la base du fichier `.i18n/htm/dev.yml` .

`dev` Sous contenu :

`htm` Sous l'annuaire se trouve la page d'entrée du site.

`v` Le répertoire contient le contenu du site Web avec le numéro de version.

L'aperçu local copiera tous les fichiers dans le répertoire `out/dev/v/0.1.0` quel que soit le numéro de version.

Pour la sortie officielle, les fichiers modifiés seront copiés dans le nouveau répertoire du numéro de version.

#### Utilisez -c Pour Spécifier Le Fichier De Configuration

Différents fichiers de configuration créeront des répertoires correspondants sous le répertoire `out`

Par exemple, `.i18n/htm/ol.yml` créera un répertoire `out/ol` .

`dev.yml` et `ol.yml` sont les configurations par défaut.

`dev` est l'abréviation de `development` , qui représente l'environnement de développement, est utilisée pour l'aperçu local et constitue également le fichier de configuration par défaut.
`ol` est l'abréviation de `online` , qui représente l'environnement en ligne, est utilisée pour la version officielle et est également le fichier de configuration par défaut lors de la publication sur `npm` à l'aide du paramètre de ligne de commande `-n` .

Vous pouvez également créer d'autres fichiers de configuration. Utilisez `--htm_conf` sur la ligne de commande pour spécifier le nom du fichier de configuration :

Par exemple:
```
i18n.site --htm_conf yourConfig --save
```

Ici `--save` indique le numéro de version de la mise à jour.

#### <a rel=id href="#npm" id="npm"></a> Publier du contenu sur npmjs.com

La publication de contenu sur [npmjs.com](//npmjs.com) est la solution par défaut recommandée (voir [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Libérer

Installez `nodejs` utilisez `npm login` pour vous connecter.

Modifiez `md/.i18n/htm/ol.yml` remplacez `i18n.site` dans `v: //unpkg.com/i18n.site` par le vôtre `npm` nom du package.

Utilisez simplement le nom du package inoccupé sur [npmjs.com](//npmjs.com) Utiliser le nom de domaine du site Web comme nom du package est un bon choix.

Lors de la publication basée sur le package `npm` , **assurez-vous d'utiliser `//unpkg.com/`** comme préfixe de la valeur `v:` . Le temps de cache `i18n.site` sous ce chemin de préfixe `/.v` a été spécialement optimisé pour permettre une visualisation rapide des nouvelles versions.

Exécutez `i18n.site --npm` ou `i18n.site -n` dans le répertoire `md` pour traduire et publier.

Si vous utilisez un environnement d'intégration continue pour publier, il n'est pas nécessaire de l'installer `nodejs` Copiez simplement le `~/.npmrc` d'autorisation de connexion et de publication dans l'environnement.

Si vous modifiez le nom du package dans `v:` in `ol.yml` , assurez-vous **d'abord de supprimer `.i18n/v/ol`** , puis de le publier.

##### Serveur Proxy Publié Par npm

Si les utilisateurs de Chine continentale rencontrent des problèmes de réseau et ne parviennent pas à publier le package `npm` , ils peuvent définir la variable d'environnement `https_proxy` pour configurer le serveur proxy.

En supposant que le port de votre serveur proxy soit `7890` vous pouvez écrire :

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenu Auto-Hébergé

Si vous souhaitez auto-héberger le contenu, commencez par modifier `md/.i18n/htm/ol.yml` et remplacez `v: //unpkg.com/i18n.site` par le préfixe de votre URL, tel que `v: //i18n-v.xxx.com` .

Entrez dans le répertoire `md` et exécutez

```
i18n.site --htm_conf ol --save
```

ou abréviation

```
i18n.site -c ol -s
```

Ensuite, configurez le contenu du répertoire `md/out/ol/v` sur le chemin du préfixe d'URL défini dans `v:` .

Enfin, **configurez la durée de cache du chemin se terminant par `/.v` sur `1s`** , sinon le contenu nouvellement publié ne sera pas accessible immédiatement.

La durée du cache pour les autres chemins peut être définie sur un an ou plus afin de réduire les requêtes inutiles.

##### Héberger Du Contenu Sur s3

Pour auto-héberger `CDN` contenu, en plus d'utiliser votre propre serveur, une autre option courante consiste à + `S3`

Vous pouvez utiliser le serveur [rclone](https://rclone.org) Login `S3` , puis vous référer et modifier le script ci-dessous, et copier uniquement les modifications incrémentielles dans `S3` à chaque fois que vous publiez.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

N'oubliez pas de configurer `CDN` pour que le temps de cache du chemin se terminant par `/.v` soit `1s` , sinon vous ne pourrez pas accéder immédiatement au contenu nouvellement publié.

### Publier Un Site Web

Le site Web peut être déployé n'importe où [github page](https://pages.github.com) et [cloudflare page](https://pages.cloudflare.com) sont de bons choix.

Parce que le site Web adopte l'architecture d' [une application monopage](https://developer.mozilla.org/docs/Glossary/SPA) , pensez à réécrire le chemin de l'URL qui ne contient pas `index.html` `. `

La page d'entrée du site Web ne doit être déployée qu'une seule fois et il n'est pas nécessaire de redéployer la page d'entrée du site Web pour les mises à jour de contenu ultérieures.

#### Déployer Sur La page github

[Cliquez d'abord ici github pour créer une organisation](https://github.com/account/organizations/new?plan=free) . Le nom de l'organisation suivant est `i18n-demo`

Créez ensuite un entrepôt sous cette `i18n-demo.github.io` (Veuillez remplacer `i18n-demo` par le nom de l'organisation que vous avez créée) :

<img alt="" src="https://p.3ti.site/1721098657.avif">

Lors de la publication du contenu de l'article précédent, il a été généré `out/ol/htm` Veuillez entrer dans ce répertoire et exécuter :

```
ln -s index.html 404.html
```


Parce que `github page` ne prend pas en charge la réécriture du chemin d'URL, donc `404.html` est utilisé à la place.

Exécutez ensuite la commande suivante dans le répertoire `htm` (n'oubliez pas de remplacer `i18n-demo/i18n-demo.github.io.git` par votre propre adresse d'entrepôt) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Après avoir poussé le code, attendez que le déploiement de `github page` s'exécute avec succès (comme indiqué ci-dessous), puis vous pourrez y accéder.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pour la page de démonstration, veuillez consulter :

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Déployer Sur La page cloudflare

[cloudflare page](//pages.cloudflare.com) Comparé à `github page` , il fournit une réécriture de chemin et est plus convivial pour la Chine continentale et son utilisation est recommandée.

`cloudflare page` Le déploiement est généralement basé sur le déploiement de `github page` ci-dessus.

Créez un projet et liez l'entrepôt ci-dessus `i18n-demo.github.io`

Le processus est illustré dans la figure ci-dessous :
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Veuillez cliquer `Add Account` pour accorder l'accès à l' `i18n-demo` .

Si vous avez lié l'entrepôt d'une autre organisation, vous devrez peut-être cliquer deux fois sur `Add Account` pour l'autoriser deux fois avant que la nouvelle organisation ne s'affiche.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Sélectionnez ensuite `i18n-demo.github.io` Entrepôt, puis cliquez sur `Begin setup` et utilisez les valeurs par défaut pour les étapes suivantes.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Après la première liaison, vous devez attendre quelques minutes avant de pouvoir y accéder.

Après le déploiement, vous pouvez lier un nom de domaine personnalisé.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Après avoir lié le nom de domaine personnalisé, accédez au nom de domaine pour configurer la réécriture du chemin de l'application monopage, comme indiqué ci-dessous :

<img alt="" src="https://p.3ti.site/1721119320.avif">

Les règles dans l'image ci-dessus sont les suivantes. Veuillez remplacer `i18n.site` dans la première ligne ci-dessous par le nom de domaine qui vous est lié.

```
(http.host in {"i18n.site"}) and not (
ends_with(http.request.uri.path,".html") or
ends_with(http.request.uri.path,".htm") or
ends_with(http.request.uri.path,".ico") or
ends_with(http.request.uri.path,".js") or
ends_with(http.request.uri.path,".avif") or
ends_with(http.request.uri.path,".css") or
ends_with(http.request.uri.path,".json") or
ends_with(http.request.uri.path,".png") or
ends_with(http.request.uri.path,".svg") or
ends_with(http.request.uri.path,".txt") or
ends_with(http.request.uri.path,".webmanifest") or
ends_with(http.request.uri.path,".xml")
)
```

De plus, veuillez configurer les règles de cache, comme indiqué ci-dessous, et définir la durée du cache sur un mois.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Veuillez remplacer le nom de domaine correspondant à la deuxième étape dans l'image ci-dessus par le nom de domaine que vous avez lié.

#### Optimiser Le Déploiement De Sites Web en Chine Continentale

Si vous souhaitez obtenir de meilleures performances d'accessibilité dans l'environnement réseau de la Chine continentale, veuillez d'abord [enregistrer un nom de domaine](//beian.aliyun.com) .

Alors, utilisez le stockage objet des fournisseurs de cloud en `CDN` `out/ol/htm` +

Vous pouvez utiliser l'edge computing pour réécrire le chemin afin de vous adapter aux applications monopage, telles que [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Il peut être configuré comme ceci :

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
<img alt="" src="https://p.3ti.site/1721121273.avif">

Étant donné que les enregistrements `MX` et `CNAME` ne peuvent pas coexister, si vous souhaitez recevoir des e-mails de nom de domaine en même temps, vous devez coopérer avec le script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) pour aplatir `CNAME` dans `A` enregistrement.

De plus, étant donné que les frais de trafic à l'étranger des fournisseurs de cloud en Chine continentale sont relativement élevés, si vous souhaitez optimiser les coûts, vous pouvez utiliser [la résolution géographique gratuite de Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) et le nom de domaine personnalisé de [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (comme indiqué ci-dessous) pour y parvenir. détournement du trafic──Trafic en Chine continentale Baidu Cloud `CDN` le trafic international passe à cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ces solutions d'optimisation du déploiement sont plus complexes et seront présentées dans des chapitres séparés à l'avenir.

#### Redirection De Nom De Domaine Générique

Si vous utilisez `i18n.site` pour générer un site Web comme site Web principal, vous devez généralement configurer la redirection pan-domaine, c'est-à-dire rediriger l'accès `*.xxx.com` (y compris `www.xxx.com` ) vers `xxx.com` .

Cette exigence peut être satisfaite à l'aide du `EdgeScript` d'Alibaba Cloud `CDN` [document anglais](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [document chinois](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Ajoutez un nom de domaine dans [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) et pointez `*.xxx.com` nom de domaine vers `CNAME` `CDN` Alibaba Cloud.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Par exemple, la configuration de redirection de nom de domaine de `*.i18n.site` dans l'image ci-dessus est la suivante :

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Déployer Avec nginx

Veuillez ajouter une configuration similaire à celle suivante dans `server` nginx où `/root/i18n/md/out/ol/htm` veuillez la remplacer par le chemin de votre propre projet `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Structure Du Répertoire

#### Publique

Fichiers statiques du site Web, tels que `favicon.ico` `robots.txt` , etc.

Les fichiers d'icônes ici peuvent être générés avec [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Sous le répertoire se trouvent les fichiers de configuration de `i18n.site` , le cache de traduction, etc. Voir le chapitre suivant ["Configuration"](/i18n.site/conf) pour plus de détails.

#### Fr

Répertoire de la langue source, correspondant `.i18n/conf.yml` `fromTo` `en` dans le fichier de configuration

```yaml
i18n:
  fromTo:
    en: zh
```

Veuillez vous référer à la configuration de la traduction [i18](/i18/use)

