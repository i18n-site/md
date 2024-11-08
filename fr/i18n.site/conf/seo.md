# Optimisation Des Moteurs De Recherche (Seo)

## Principe

`i18n.site` adopte une architecture de page unique sans actualisation Afin de faciliter l'indexation de la recherche, une page statique distincte et `sitemap.xml` seront générées pour que les robots puissent les explorer.

Lorsque `User-Agent` de la demande d'accès est utilisé par le robot du moteur de recherche, la demande sera redirigée vers la page statique via `302` .

Sur les pages statiques, utilisez `link` pour indiquer des liens vers différentes versions linguistiques de cette page, telles que :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Configuration Locale De nginx

Prenons l'exemple du fichier de configuration `.i18n/htm/main.yml` dans le projet de démonstration

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Veuillez d'abord modifier la valeur `host:` ci-dessus pour votre nom de domaine, par exemple `xxx.com` .

Ensuite, `i18n.site -n` , la page statique sera générée dans le répertoire `out/main/htm` .

Bien entendu, vous pouvez également activer d'autres fichiers de configuration, par exemple en vous référant d'abord à la configuration de `main` pour créer `.i18n/htm/dist.package.json` et `.i18n/htm/dist.yml` .

Exécutez ensuite `i18n.site -n -c dist` pour que la page statique soit générée sur `out/dist/htm` .

`nginx` peut être défini en se référant à la configuration ci-dessous.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Ne mettez pas en cache les scripts de travail du serveur trop longtemps
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Définir des temps de cache plus longs pour d'autres ressources statiques
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Définir le fichier statique que le robot utilise comme entrée de page d'accueil
location = / {
  # Si $botLang n'est pas vide, cela signifie l'accès et la redirection du robot selon le chemin de langue défini.
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Configuration de l'application sur une seule page
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configurer Le Stockage D'objets Pour Télécharger Des Fichiers Statiques

Les fichiers statiques peuvent être générés localement, mais une approche plus courante consiste à les télécharger vers le stockage objet.

Modifiez `out` configuré ci-dessus en :

```
out:
  - s3
```

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

Dans la configuration, veuillez remplacer `i18n.site` par la valeur `host:` in `.i18n/htm/main.yml` , plusieurs magasins d'objets peuvent être configurés sous `s3` et le champ `region` est facultatif (de nombreux magasins d'objets n'ont pas besoin de définir ce champ).

Exécutez ensuite `i18n.site -n` pour republier le projet.

Si vous avez modifié `~/.config/i18n.site.yml` et souhaitez télécharger à nouveau, veuillez utiliser la commande suivante dans le répertoire racine du projet pour vider le cache de téléchargement :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Configuration cloudflare

Nom de domaine hébergé sur [cloudflare](//www.cloudflare.com)

### Règles De Conversion

Ajoutez les règles de conversion comme indiqué ci-dessous :

![](//p.3ti.site/1725436822.avif)

Le code de la règle est le suivant, merci de modifier le code "i18n.site" par votre nom de domaine :

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Règles De Mise en Cache

Ajoutez des règles de cache comme suit :

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Règles De Redirection

Définissez les règles de redirection comme suit, veuillez modifier le code "i18n.site" en votre nom de domaine

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

`URL redirect` Sélectionnez la redirection dynamique, veuillez modifier `/en` dans le chemin de redirection `concat("/en",http.request.uri.path,".htm")` vers la langue par défaut que vous souhaitez que les moteurs de recherche incluent.

## Configuration Du Cloud Intelligent Baidu

Si vous devez fournir des services à la Chine continentale, vous pouvez utiliser [Baidu Smart Cloud](//cloud.baidu.com) .

Les données sont téléchargées sur Baidu Object Storage et liées au Baidu Content Distribution Network.

Créez ensuite le script dans [EdgeJS service Edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) comme suit

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

Cliquez sur `Debug` , puis cliquez sur Publier sur l'ensemble du réseau.

![](//p.3ti.site/1725437754.avif)

## Utilisation Avancée : Distribuez Le Trafic en Fonction De La Résolution Régionale

Si vous souhaitez fournir des services en Chine continentale et souhaitez également un trafic international gratuit `cloudflare` , vous pouvez en utiliser `DNS` avec une résolution régionale.

Par exemple, [Huawei Cloud DNS](https://www.huaweicloud.com) fournit une analyse régionale gratuite, avec laquelle le trafic de la Chine continentale peut passer par Baidu Smart Cloud et le trafic international peut passer par `cloudflare` .

Les pièges de la configuration `cloudflare` sont nombreux. Voici quelques points à noter :

### Le Nom De Domaine Est Hébergé Dans Un Autre `DNS` , Comment L'utiliser `cloudflare`

Liez d'abord un nom de domaine arbitraire à `cloudflare` , puis utilisez `SSL/TLS` → nom de domaine personnalisé pour associer le nom de domaine principal à ce nom de domaine.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` N'est Pas Accessible via Un Nom De Domaine Personnalisé

Étant donné que le stockage d'objets `cloudflare` `R2` n'est pas accessible par un nom de domaine personnalisé, un stockage d'objets tiers doit être utilisé pour placer les fichiers statiques.

Ici, nous prenons [backblaze.com](https://www.backblaze.com) comme exemple pour montrer comment lier des objets tiers à stocker à `cloudflare` .

Créez un compartiment à `backblaze.com` , téléchargez n'importe quel fichier, cliquez pour parcourir le fichier et obtenez le nom de domaine de `Friendly URL` , qui est `f003.backblazeb2.com` ici.

![](//p.3ti.site/1725440783.avif)

Changez le nom de domaine de `CNAME` à `f003.backblazeb2.com` à `cloudflare` et activez le proxy.

![](//p.3ti.site/1725440896.avif)

Modifier `cloudflare` sur `SSL` → mode de cryptage, défini sur `Full`

![](//p.3ti.site/1725438572.avif)

Ajoutez la règle de conversion comme indiqué ci-dessous, placez-la en premier (la première a la priorité la plus basse) :

![](//p.3ti.site/1725443232.avif)

`Rewrite to` sélectionnez dynamique et modifiez `your_bucketname` en `concat("/file/your_bucketname",http.request.uri.path)` en nom de votre bucket.

De plus, dans la règle de conversion `cloudflare` ci-dessus, `index.html` est remplacé par `file/your_bucketname/index.html` et les autres configurations restent les mêmes.

![](//p.3ti.site/1725441384.avif)