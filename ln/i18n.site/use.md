# Installez Déployer &

## Jeton Ya Configuration

`i18n.site` Esaleli ya `i18` bobongoli ekotisami, [finá awa mpo na kotala mokanda ya `i18` mpo na kobongisa elembo ya bokɔti](/i18/use) .

## Ko Installer

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projet Ya Démonstration

Tobanda na projet ya démonstration pe to yekola ndenge ya kosalela `i18n.site`

To cloner liboso dépôt ya démonstration pe to tambuisa commande ndenge elandi:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Ba usagers na Chine continent bakoki:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` Nkombo ya répertoire ya clone ya base ya code esengeli kozala `md` mpo na ko faciliter aperçu local na `docker` .

### Kobongola

Ya liboso, kota na répertoire `md` mpe tambuisa `i18n.site` , oyo ekobongola `en` na `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Sima ya kosala, ba fichiers ya traduction na cache ekosalema Svp kobosana te kobakisa yango na ebombelo `git add . ` na `md` .

### Aperçu Ya Esika Ya Mboka

Botia mpe kobanda `docker` ( `MAC` bapesaka toli ya kosalela [orbstack](https://orbstack.dev) lokola tango ya kosala ya `docker` ).

[https://127.0.0.1](https://127.0.0.1) sima, `./up.sh` na répertoire `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Poster Contenus

`i18n.site` adopter architecture [ya application ya page moko](https://developer.mozilla.org/docs/Glossary/SPA) , pe page ya entrée ya site internet na contenus ya site internet e déployé indépendamment.

Sima ya kosala traduction oyo ezali likolo, ba répertoires `htm` na `v` ekosalema na répertoire `md/out/dev`

Awa, `dev` elakisi ete etongami na kotalela fisyé `.i18n/htm/dev.yml` .

Na nse ya makambo oyo ezali : kati `dev`

`htm` Na se ya répertoire ezali na page ya entrée ya site internet.

`v` Annuaire ezali na makambo ya site internet na nimero ya version.

Aperçu local ekosala copie ya ba fichiers nionso na répertoire `out/dev/v/0.1.0`

Mpo na kobimisama ya officiel, ba fichiers oyo ebongwani ekozala copie na répertoire ya numéro ya version ya sika.

#### Salelá -c Mpo Na Kolakisa Fisyé Ya Bobongisi

Ba fichiers ya configuration ndenge na ndenge ekosala ba répertoires correspondants na se ya répertoire `out`

Ndakisa, `.i18n/htm/ol.yml` ekosala `out/ol` répertoire.

`dev.yml` na `ol.yml` ezali ba configurations par défaut.

`dev` `development`
`ol` `online` `-n` `npm`

Okoki mpe kosala ba fisyé mosusu ya bobongisi Salelá `--htm_conf`

Na ndakisa:
```
i18n.site --htm_conf yourConfig --save
```

Awa `--save`

#### <a rel=id href="#npm" id="npm"></a> Bimisa makambo na npmjs.com

Kobimisa makambo na [npmjs.com](//npmjs.com) ezali solution ya liboso oyo esengami (tala [Front-end High Disponibilité](/i18n.site/feature#ha) ).

##### npm login & Kobimisa

Install `nodejs` salela `npm login` mpo na kokota.

Bobongisi `md/.i18n/htm/ol.yml` bongola `i18n.site` na `v: //unpkg.com/i18n.site` na ya yo moko `npm` kombo ya paquet.

Salelá kaka kombo ya pakɛ oyo ezali na bato te na [npmjs.com](//npmjs.com)

Ntango `i18n.site` `/.v` na **`//unpkg.com/`** `v:` `npm`

Tambwisa `i18n.site --npm` to `i18n.site -n` na répertoire `md`

Soki osaleli environnement ya intégration continue pona kobimisa, esengeli te `~/.npmrc` installer yango `nodejs`

Soki obongoli kombo ya paquet na `v:` in `ol.yml` , **sala makasi olongola `.i18n/v/ol` liboso** mpe na sima obimisa yango.

##### Serveur Proxy Ebimisami Na npm

Soki basaleli na Chine continent bakutani na mikakatano ya réseau mpe bazali na makoki te ya kobimisa paquet `npm` , bakoki kotiya variable ya environnement `https_proxy` mpo na ko configurer serveur proxy.

Soki tokanisi ete port ya serveur proxy na yo ezali `7890` okoki kokoma:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenu Oyo Ezo Héberger Yango Moko

Soki olingi komiyamba makambo, yambo, bongisa `md/.i18n/htm/ol.yml` mpe bongola `v: //unpkg.com/i18n.site` na liboso ya URL na yo, lokola `v: //i18n-v.xxx.com` .

Kota na répertoire `md`

```
i18n.site --htm_conf ol --save
```

to bokuse

```
i18n.site -c ol -s
```

Na nsima, bongisá makambo oyo ezali na kati ya `v:` `md/out/ol/v`

Na suka, **configurer temps ya cache ya nzela oyo esukaka na `/.v` na `1s`** , soki te contenus oyo ebimi sika ekoki kozuama mbala moko te.

Ntango ya cache mpo na banzela mosusu ekoki kozala na mbula moko to koleka mpo na kokitisa masengi oyo ezali na ntina te.

##### Koyamba Makambo Na s3

Pona ko self-host contenus, en plus ya kosalela serveur na yo moko, option mosusu + emonanaka `CDN` ezali kosalela `S3`

Okoki `S3` [rclone](https://rclone.org) Login `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kobosana te ko configurer `CDN` po tango ya cache ya nzela oyo esukaka na `/.v` ezala `1s` , soki te okozala na makoki ya kozua mbala moko te na ba contenus oyo ebimi sika.

### Kobimisa Site Internet

Site internet ekoki kozala déployé partout [github page](https://pages.github.com) pe [cloudflare page](https://pages.cloudflare.com) ezali ba choix ya bien.

Lokola site internet e adopter architecture ya [application ya page moko](https://developer.mozilla.org/docs/Glossary/SPA) , kobosana te kokoma lisusu nzela ya URL oyo ezali na `. ` `index.html`

Lokasa ya bokotisi site internet esengeli bobele ko déployer mbala moko, mpe ezali na ntina te ya kozongisa lokasa ya bokotisi site internet mpo na ba mises à jour ya contenus oyo ekolanda.

#### Déployer Na page Ya github

Ya liboso [finá github mpo na kosala ebongiseli](https://github.com/account/organizations/new?plan=free) Nkombo oyo elandi ezali `i18n-demo`

Na sima sala entrepôt na se ya organisation `i18n-demo.github.io` (Svp remplacer `i18n-demo` na kombo ya organisation oyo osali):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Tango ozali kobimisa makambo oyo ezali na lisolo oyo eleki `out/ol/htm` esalemi Svp kota na répertoire oyo mpe kota :

```
ln -s index.html 404.html
```


Pamba te `github page` esimbaka te bokomi lisusu ya nzela ya URL, yango wana `404.html` esalelami na esika na yango.

Na sima sala commande oyo elandi na répertoire `htm` (kobosana te ko remplacer `i18n-demo/i18n-demo.github.io.git` na adresse ya entrepôt na yo moko) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Sima ya ko pousser code, zela déploiement ya `github page` ekende malamu (ndenge elakisami na se), et puis okoki ko accéder na yango.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pona page ya démonstration tala:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Déployer Na page Ya cloudflare

Soki tokokanisi `github page` na [cloudflare page](//pages.cloudflare.com)

`cloudflare page` Déploiement esalemaka mingi mingi na déploiement ya `github page` oyo ezali likolo.

Bosala projet pe bokanga entrepôt oyo ezali likolo `i18n-demo.github.io`

Ndenge ya kosala yango emonisami na elilingi oyo ezali awa na nse:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Svp bo `Add Account` pona kopesa accès na `i18n-demo` .

Soki okangaki depo ya ebongiseli mosusu, ekoki kosɛnga `Add Account` mbala mibale mpo na kopesa yango ndingisa mbala mibale liboso ete ebongiseli ya sika elakisama.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Na sima pona `i18n-demo.github.io` Warehouse, sima finá `Begin setup` , mpe salelá ba valeurs par défaut mpo na ba étapes oyo elandi.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nsima ya kokangisa mpo na mbala ya liboso, osengeli kozela mwa miniti liboso ete okoka kokɔta na yango.

Sima ya déploiement, okoki kokangisa kombo ya domaine personnalisé.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Sima ya kokangisa kombo ya domaine personnalisé, kende na kombo ya domaine pona ko configurer bokomi lisusu ya nzela ya application ya lokasa moko, ndenge elakisami awa na se:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Mibeko oyo ezali na elilingi oyo ezali awa na likoló ezali boye Svp bozongisa `i18n.site`

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

En plus, svp configurer mibeko ya cache, ndenge elakisami awa na se, pe tia durée ya cache na sanza moko.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Svp bongola kombo ya domaine oyo ekokani na étape ya mibale na elilingi oyo ezali likolo na kombo ya domaine oyo okangaki.

#### Optimiser Déploiement Ya Site Internet Na Chine Continent

Soki olingi kozwa performance ya accessibilité ya malamu koleka na environnement ya réseau ya Chine continent, svp [enregistrer nanu kombo ya domaine](//beian.aliyun.com) .

`out/ol/htm` nsima, salelá kobomba biloko ya batekisi ya lipata na `CDN` continent +

Okoki kosalela edge computing mpo na kokoma lisusu nzela mpo na ko s’adapter na ba applications ya page moko, lokola [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Ekoki kozala configuré boye:

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

`CNAME` `MX` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `A`

En plus, lokola ba frais ya trafic ya poto ya ba vendeurs ya cloud na Chine continent ezali relativement cher, soki olingi ko optimiser ba coûts, okoki kosalela [résolution géographique ya ofele ya Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) mpe kombo ya domaine personnalisé [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ’s (ndenge elakisami awa na se) pona kozua détournement ya trafic──Trafic na Chine continent Baidu Cloud `CDN` trafic international ekendaka cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Ba solutions oyo ya optimisation ya déploiement ezali complexe mingi pe eko kotisama na ba chapitres separates na mikolo ekoya.

#### Redirection Ya Kombo Ya Domaine Générique

`*.xxx.com` `www.xxx.com` `i18n.site` `xxx.com`

Esengeli oyo ekoki kokokisama na lisalisi ya `EdgeScript` ( [mokanda ya Lingelesi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Mokanda ya Chinois](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ya Alibaba Cloud `CDN`

Bakisa kombo ya domaine na [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) mpe lakisa `*.xxx.com` ya domaine na Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Ndakisa, configuration ya redirection ya kombo pan-domain ya `*.i18n.site` na elilingi oyo ezali likolo ezali boye:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Déployer Na nginx

`/root/i18n/md/out/ol/htm` bakisa configuration oyo ekokani na oyo elandi na `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Bokeli Ya Annuaire

#### Ya Bato Nyonso

Ba fichiers statiques ya site internet, lokola `favicon.ico` `robots.txt` , etc.

Ba fichiers ya icône awa ekoki kozala généré na [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Répertoire ya monoko ya source, oyo ekokani `.i18n/conf.yml` `fromTo` `en` na fichier ya configuration

```yaml
i18n:
  fromTo:
    en: zh
```

Svp tala configuration ya traduction [i18](/i18/use)

