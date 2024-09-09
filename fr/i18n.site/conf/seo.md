# Optimisation des Moteurs de Recherche (SEO)

## Principe

`i18n.site` utilise une architecture de page unique sans rafraîchissement pour faciliter l'indexation par les moteurs de recherche, en générant des pages statiques distinctes et un `sitemap.xml` pour que les robots puissent les explorer.

Lorsque le `User-Agent` de la requête est celui d'un robot de moteur de recherche, la requête est redirigée vers une page statique via une redirection `302`.

Sur les pages statiques, utiliser des balises `link` pour indiquer les liens vers les différentes versions linguistiques de cette page, par exemple :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configurer le stockage d'objets pour le téléversement de fichiers statiques

Les fichiers statiques peuvent être générés localement, mais il est plus courant de les téléverser vers un stockage d'objets.

À titre d'exemple, le fichier de configuration `.i18n/htm/ol.yml` dans le projet de démonstration

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Veuillez d'abord modifier la valeur de `host:` pour votre domaine, par exemple `i18n.site`.

Ensuite, éditez `~/.config/i18n.site.yml` et ajoutez la configuration suivante :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Dans cette configuration, remplacez `i18n.site` par la valeur de `host:` dans `.i18n/htm/ol.yml`. Sous `s3`, vous pouvez configurer plusieurs stockages d'objets, et le champ `region` est facultatif (beaucoup de stockages d'objets ne nécessitent pas ce champ).

Ensuite, exécutez `i18n.site -n` pour republier le projet.

Si vous avez modifié `~/.config/i18n.site.yml` et que vous souhaitez téléverser à nouveau, utilisez la commande suivante dans le répertoire racine du projet pour nettoyer le cache de téléversement :

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Configuration Cloudflare

Nom de domaine hébergé chez [cloudflare](//www.cloudflare.com).

### Règles de conversion

Ajoutez les règles de conversion comme indiqué ci-dessous :

![](//p.3ti.site/1725436822.avif)

Le code de la règle est le suivant, veuillez modifier le code "i18n.site" par votre domaine :

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Règles de mise en cache

Ajoutez les règles de mise en cache comme suit :

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Règles de redirection

Définissez les règles de redirection comme suit, veuillez modifier le code "i18n.site" par votre domaine :

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

Choisissez la redirection dynamique `URL redirect`, et modifiez `/en` dans le chemin de redirection `concat("/en",http.request.uri.path,".htm")` pour correspondre à la langue par défaut que vous souhaitez que les moteurs de recherche indexent.

## Configuration du Cloud Intelligent Baidu

Si vous devez fournir des services en Chine continentale, vous pouvez utiliser [Baidu Intelligent Cloud](//cloud.baidu.com).

Les données sont téléversées vers le Baidu Object Storage et liées au Baidu Content Distribution Network.

Créez ensuite un script dans [EdgeJS service Edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) comme suit :

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
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

Cliquez sur `Debug` , puis cliquez sur Publier sur l'ensemble du réseau.

![](//p.3ti.site/1725437754.avif)

## Utilisation avancée : répartition du trafic basée sur l'analyse régionale

Si vous souhaitez fournir des services en Chine continentale tout en bénéficiant du trafic international gratuit de `cloudflare`, vous pouvez utiliser un `DNS` avec une fonction d'analyse régionale.

Par exemple, [Huawei Cloud DNS](https://www.huaweicloud.com) propose une analyse régionale gratuite, ce qui permet de diriger le trafic chinois continental vers Baidu Intelligent Cloud et le trafic international vers `cloudflare`.

Il y a beaucoup de pièges dans la configuration de `cloudflare`. Voici quelques points à noter :

### Comment utiliser `cloudflare` lorsque le nom de domaine est hébergé chez un autre `DNS` ?

Commencez par lier un domaine quelconque à `cloudflare`, puis utilisez `SSL/TLS` → domaine personnalisé pour associer le domaine principal à ce domaine.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` n'est pas accessible via un domaine personnalisé

2	Étant donné que `Cloudflare` ne permet pas l'accès personnalisé aux domaines pour son stockage d'objets `R2`, il est nécessaire d'utiliser un stockage d'objets tiers pour héberger les fichiers statiques.

Prenez [backblaze.com](https://www.backblaze.com) comme exemple pour montrer comment lier un stockage d'objets tiers à `cloudflare`.

Créez un compartiment sur `backblaze.com`, téléchargez n'importe quel fichier, cliquez pour parcourir les fichiers et obtenez le domaine `Friendly URL`, ici `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Changez le domaine `CNAME` vers `f003.backblazeb2.com` sur `cloudflare` et activez le proxy.

![](//p.3ti.site/1725440896.avif)

Modifiez `cloudflare` → `SSL` → mode de cryptage, réglé sur `Full`

![](//p.3ti.site/1725438572.avif)

Ajoutez la règle de conversion comme indiqué ci-dessous, placez-la en premier (la première règle a la priorité la plus basse) :

![](//p.3ti.site/1725443232.avif)

Choisissez `Rewrite to` en mode dynamique et modifiez `your_bucketname` dans `concat("/file/your_bucketname",http.request.uri.path)` par le nom de votre compartiment.

En outre, dans la règle de conversion `cloudflare` ci-dessus, remplacez `index.html` par `file/your_bucketname/index.html`, et conservez les autres configurations inchangées.

![](//p.3ti.site/1725441384.avif)