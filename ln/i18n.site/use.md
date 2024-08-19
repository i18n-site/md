# Installez Déployer &

## Jeton Ya Configuration

`i18n.site` ezali na esaleli ya bobongoli `i18` oyo etongami na kati Svp [finá awa mpo na kotala mokanda `i18` mpo na kobongisa elembo ya bokɔti](/i18/use) .

## Ko Installer

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Projet Ya Démonstration

Tobanda na projet ya démonstration pona koyeba ndenge ya kosalela `i18n.site` .

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

Nkombo ya répertoire ya clone ya base ya code `demo.i18n.site` esengeli kozala `md` mpo na ko faciliter aperçu local na `docker` .

### Kobongola

Ya liboso, kotia répertoire `md` mpe tambuisa `i18n.site` , oyo ekobongola `en` na `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Sima ya kosala, ba fichiers ya traduction na cache ekosalema Svp kobosana te kobakisa `git add . ` na ebombelo na répertoire `md` .

### Aperçu Ya Esika Ya Mboka

Botia mpe kobanda `docker` ( mosaleli `MAC` apesi toli ya kosalela [orbstack](https://orbstack.dev) lokola tango ya kosala mpo na `docker` ).

Na sima, kota na répertoire `docker` mpe tambuisa `./up.sh` , mpe na sima kotala [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Poster Contenus

`i18n.site` e adopter architecture [ya application ya page moko](https://developer.mozilla.org/docs/Glossary/SPA) , mpe page ya entrée ya site internet na contenus ya site internet e déployé indépendamment.

Nsima ya kosala libongoli oyo ezali awa na likoló, ba répertoires `htm` mpe `v` ekosalema na nse ya répertoire `md/out/dev` .

Awa, `dev` elakisi ete etongami na kotalela fichier ya configuration `.i18n/htm/dev.yml` .

`dev` répertoire :

Annuaire `htm` ezali lokasa ya bokoti ya site internet.

Annuaire `v` ezali na makambo ya site internet na ba numéros ya version.

Aperçu local etali numéro ya version te mpe ekosala copie ya ba fichiers nionso na répertoire `out/dev/v/0.1.0` .

Mpo na kobimisama ya officiel, ba fichiers oyo ebongwani ekozala copie na répertoire ya numéro ya version ya sika.

#### Salelá -c Mpo Na Kolakisa Fisyé Ya Bobongisi

Ba fichiers ya configuration ndenge na ndenge ekosala ba répertoires correspondants na répertoire `out` .

Ndakisa, `.i18n/htm/ol.yml` ekosala répertoire `out/ol` .

`dev.yml` na `ol.yml` ezali ba configurations par défaut.

`dev` ezali mokuse ya `development` , oyo ezali kolakisa esika ya bokeli, esalelami mpo na botali liboso ya esika, mpe ezali mpe fisyé ya bobongisi ya liboso.
`ol` ezali mokuse ya `online` , oyo ezali kolakisa esika ya internet, oyo esalelamaka mpo na kobimisama ya officiel Ezali mpe fisyé ya bobongisi ya liboso ntango ozali kosalela ba paramètres ya ligne ya commande `-n` kino `npm` mpo na kobimisa.

Okoki mpe kosala ba fisyé mosusu ya bobongisi Salelá `--htm_conf` na molɔngɔ ya etinda mpo na kolakisa nkombo ya fisyé ya bobongisi oyo okosalela:

Na ndakisa:
```
i18n.site --htm_conf yourConfig --save
```

Awa `--save` ezali komonisa nimero ya version ya sortie ya mise à jour.

#### <a rel=id href="#npm" id="npm"></a> Bimisa makambo na npmjs.com

Kobimisa makambo na [npmjs.com](//npmjs.com) ezali solution ya liboso oyo esengami (tala [Front-end High Disponibilité](/i18n.site/feature#ha) ).

##### npm login & Kobimisa

Installez `nodejs` , kota na `npm login` .

Edit `md/.i18n/htm/ol.yml` pe changer `i18n.site` na `v: //unpkg.com/i18n.site` na kombo ya paquet na yo moko `npm` .

Salelá kaka kombo ya pakɛ oyo ezali na bato te na [npmjs.com](//npmjs.com)

Ntango ozali kobimisa na kotalela paquet `npm` , **sala makasi osalela `//unpkg.com/` mpo na** préfixe ya `v:` valeur `i18n.site` a optimisé spécialement temps ya cache ya `/.v` na se ya nzela ya préfixe oyo mpo na kozua vue na tango ya ba sorties ya sika.

Tambwisa `i18n.site --npm` to `i18n.site -n` na répertoire `md` mpo na kobongola mpe kobimisa.

Soki osaleli environnement ya intégration continue pona kobimisa, ezali na besoin te ya ko installer `nodejs` Kopi kaka ba permissions ya bokɔti pe ya kobimisa `~/.npmrc` na environnement.

Soki obongoli kombo ya paquet ya `v:` na `ol.yml` , **sala makasi olongola liboso `.i18n/v/ol`** mpe na sima obimisa yango.

##### Serveur Proxy Ebimisami Na npm

Soki basaleli na Chine continent bakutani na mikakatano ya réseau mpe bazali na makoki te ya kobimisa `npm` forfaits, bakoki kotya variable ya environnement `https_proxy` mpo na ko configurer serveur proxy.

Soki tokanisi ete port ya serveur proxy na yo ezali `7890` , okoki kokoma:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenu Oyo Ezo Héberger Yango Moko

Soki olingi komiyamba yo moko makambo oyo ezali na kati, bongisa liboso `md/.i18n/htm/ol.yml` mpe bongolá `v: //unpkg.com/i18n.site` na liboso ya URL na yo, na ndakisa `v: //i18n-v.xxx.com` .

Kota na répertoire `md` mpe kosala

```
i18n.site --htm_conf ol --save
```

to mokuse ya maloba

```
i18n.site -c ol -s
```

Na nsima, bongisá makambo oyo ezali na répertoire `md/out/ol/v` na nzela ya liboso ya URL oyo etyami na `v:` .

Na suka, **configurer temps ya cache ya nzela oyo esukaka na `/.v` à `1s`** , soki te ba contenus oyo ebimi sika ekoki kozuama mbala moko te.

Ntango ya cache mpo na banzela mosusu ekoki kozala na mbula moko to koleka mpo na kokitisa masengi oyo ezali na ntina te.

##### Koyamba Makambo Na s3

Pona ko auto-hoster contenus, en `CDN` ya kosalela serveur na yo moko, option mosusu oyo emonanaka mingi ezali kosalela `S3` +

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kobosana te ko configurer `CDN` po tango ya cache ya nzela oyo esukaka na `/.v` ezala `1s` , soki te ba contenus oyo ebimi sika ekoki kozuama mbala moko te.

### Kobimisa Site Internet

Site internet ekoki kozala déployé partout [github page](https://pages.github.com) pe [cloudflare page](https://pages.cloudflare.com) ezali ba choix ya bien.

Lokola site Internet esalela architecture [ya application ya lokasa moko](https://developer.mozilla.org/docs/Glossary/SPA) , kobosana te kokoma lisusu banzela ya URL oyo ezali na `. ` kino `index.html` te.

Lokasa ya bokotisi site internet esengeli bobele ko déployer mbala moko, mpe ezali na ntina te ya kozongisa lokasa ya bokotisi site internet mpo na ba mises à jour ya contenus oyo ekolanda.

#### Déployer Na page Ya github

Ya liboso [finá github mpo na kosala ebongiseli](https://github.com/account/organizations/new?plan=free) Nkombo ya ebongiseli oyo elandi ezali `i18n-demo` lokola ndakisa .

Na sima sala entrepôt `i18n-demo.github.io` na se ya organisation oyo (svp remplacer `i18n-demo` na kombo ya organisation oyo osali):

![](https://p.3ti.site/1721098657.avif)

Tango ozali kobimisa makambo oyo ezali na lisolo oyo eleki, `out/ol/htm` esalemi Svp kotisa répertoire oyo mpe kosala :

```
ln -s index.html 404.html
```


Lokola `github page` esungaka te bokomi lisusu ya nzela ya URL, `404.html` esalelami na esika na yango.

Na sima sala commande oyo elandi na répertoire `htm` (kobosana te ko remplacer `i18n-demo/i18n-demo.github.io.git` na adresse ya entrepôt na yo moko) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Sima ya ko pousser code, zela déploiement ya `github page` ekende malamu (ndenge elakisami na se) avant o accéder na yango.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Pona page ya démonstration tala:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Déployer Na page Ya cloudflare

[cloudflare page](//pages.cloudflare.com) `github page`

Déploiement ya `cloudflare page` esalemaka mingi mingi na déploiement ya `github page` likolo.

Bosala projet pe bokanga entrepôt `i18n-demo.github.io` oyo ezali likolo.

Ndenge ya kosala yango emonisami na elilingi oyo ezali awa na nse:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Svp finá `Add Account` mpo na kopesa nzela ya kokɔta na ebongiseli `i18n-demo` .

Soki okangaki depo ya ebongiseli mosusu, ekoki kosɛnga obɛta `Add Account` mbala mibale mpo na kopesa ndingisa mbala mibale liboso ete ebongiseli ya sika elakisama.

![](https://p.3ti.site/1721118306.avif)

Na nsima, poná entrepôt `i18n-demo.github.io` , na nsima finá `Begin setup` , mpe salelá motuya ya liboso mpo na makambo oyo okolanda.

![](https://p.3ti.site/1721118490.avif)

Nsima ya kokangisa mpo na mbala ya liboso, osengeli kozela mwa miniti liboso ete okoka kokɔta na yango.

Sima ya déploiement, okoki kokangisa kombo ya domaine personnalisé.

![](https://p.3ti.site/1721119459.avif)

Sima ya kokangisa kombo ya domaine personnalisé, kende na kombo ya domaine pona ko configurer bokomi lisusu ya nzela ya application ya lokasa moko, ndenge elakisami awa na se:

![](https://p.3ti.site/1721119320.avif)

Mibeko oyo ezali na elilingi oyo ezali awa na likoló ezali boye Svp zongisa `i18n.site` oyo ezali na molɔngɔ ya liboso oyo ezali awa na nse na nkombo ya domaine oyo okangaki.

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

![](https://p.3ti.site/1721125111.avif)

Svp bongola kombo ya domaine oyo ekokani na étape ya mibale na elilingi oyo ezali likolo na kombo ya domaine oyo okangaki.

#### Optimiser Déploiement Ya Site Internet Na Chine Continent

Soki olingi kozwa performance ya accessibilité ya malamu koleka na environnement ya réseau ya Chine continent, svp [enregistrer nanu kombo ya domaine](//beian.aliyun.com) .

Na sima, salela stockage `out/ol/htm` objet ya ba vendeurs ya cloud na Chine continent + Déployer contenus oyo elandi `CDN` .

Okoki kosalela edge computing mpo na kokoma lisusu nzela mpo na ko s’adapter na ba applications ya page moko Ndakisa, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ekoki kozala configuré boye:

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

Lokola enregistrement `MX` na enregistrement `CNAME` ekoki kozala `A` `CNAME` te, soki olingi ozua ba emails ya kombo ya domaine en même temps, esengeli o coopérer na script ya [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

En plus, lokola ba frais ya trafic ya poto ya ba vendeurs ya cloud na Chine continent ezali relativement cher, soki olingi ko optimiser ba coûts, okoki kosalela [résolution géographique ya ofele ya Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) mpe kombo ya domaine personnalisé [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ’s (ndenge elakisami awa na se) pona kozua détournement ya trafic──Trafic na Chine continent Baidu Cloud `CDN` , trafic international ekendaka cloudflare .

![](https://p.3ti.site/1721119788.avif)

Ba solutions oyo ya optimisation ya déploiement ezali complexe mingi pe eko kotisama na ba chapitres separates na mikolo ekoya.

#### Redirection Ya Kombo Ya Domaine Générique

Soki osaleli `i18n.site` mpo na kobimisa site internet lokola site na yo ya monene, mbala mingi osengeli ko configurer redirection pan-domain, elingi koloba ko redirectionner accès na `*.xxx.com` (y compris `www.xxx.com` ) na `xxx.com` .

Esengeli oyo ekoki kokokisama na lisalisi ya Alibaba Cloud `CDN` `EdgeScript` ( [mokanda ya Lingelesi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Mokanda ya Chinois](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) .

Bakisa kombo ya domaine na [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) mpe lakisa kombo ya domaine `*.xxx.com` na `CNAME` na Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Ndakisa, configuration ya redirection ya kombo pan-domain ya `*.i18n.site` na elilingi oyo ezali likolo ezali boye:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Déployer Na nginx

Svp bakisa configuration oyo ekokani na oyo elandi na `server` paragraphe ya nginx Svp changer `/root/i18n/md/out/ol/htm` na nzela ya projet na yo moko `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Bokeli Ya Ba Répertoire

#### `public`

Ba fichiers statiques ya site internet, lokola `favicon.ico` , `robots.txt` , etc.

Ba fichiers ya icône awa ekoki kozala généré na [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Na se ya répertoire `.i18n` ezali na ba fichiers ya configuration, cache ya traduction, etc. ya `i18n.site` Tala chapitre oyo elandi ["Configuration"](/i18n.site/conf) pona ba détails.

#### `en`

Répertoire ya monoko ya source, oyo ekokani na `en` ya `fromTo` na `.i18n/conf.yml` fichier ya configuration

```yaml
i18n:
  fromTo:
    en: zh
```

Svp tala configuration ya traduction [i18](/i18/use)