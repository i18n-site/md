# Deploy &

## Ɖoe Anyi

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Ðoɖowɔɖi Ƒe Dzesi

`i18n.site` ƒe gbegɔmeɖeɖedɔwɔnu `i18` si wotu ɖe eme [Taflatse zi afisia dzi be nàkpɔ nuŋlɔɖi `i18` la atsɔ aɖo mɔɖeɖe ƒe dzesi](/i18/use) .

## Demo Dɔa Wɔwɔ

Mina míadze egɔme kple wɔwɔfiadɔ aɖe be míasrɔ̃ alesi woazã `i18n.site` .

Míewɔa clone na demo repository la gbã eye míewɔa sededea abe alesi gbɔna ene:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Zãla siwo le China-nyigba gã dzi ate ŋu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Ele be `demo.i18n.site` code base clone ƒe directory ŋkɔ nanye `md` be local preview nanɔ bɔbɔe kple `docker` .

### Ɖe Gbe Gɔme

Gbã la, ge ɖe `md` ƒe nyatakakadzraɖoƒea eye nàwɔ `i18n.site` , si aɖe `en` gɔme wòazu `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ne ewɔ dɔ vɔ la, woawɔ gbegɔmeɖeɖe kple cache faɛlwo Taflatse ɖo ŋku edzi nàtsɔ wo akpe ɖe nudzraɖoƒe si le `md` `git add . ` ŋu.

### Nutoa Me Ƒe Ŋgɔdonya

De `docker` eye nàdze egɔme ( `MAC` zãla kafui be nàzã [orbstack](https://orbstack.dev) abe dɔwɔwɔ ƒe ɣeyiɣi na `docker` ene ).

Emegbe, ŋlɔ `docker` ƒe nyatakakadzraɖoƒe eye nàƒu du `./up.sh` , eye emegbe nàyi [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Ðo Nyatakakawo Ɖe Afima

`i18n.site` xɔa [axa ɖeka ƒe dɔwɔwɔ ƒe](https://developer.mozilla.org/docs/Glossary/SPA) ɖoɖo, eye wozãa nyatakakadzraɖoƒea ƒe gege ɖe eme ƒe axa kple nyatakakadzraɖoƒea me nyawo le wo ɖokui si.

Ne èwɔ gbegɔmeɖeɖe si le etame vɔ la, woawɔ nyatakakadzraɖoƒe `htm` kple `v` le `md/out/dev` ƒe nyatakakadzraɖoƒe te.

Le afisia la, `dev` fia be wotue ɖe ɖoɖowɔɖi ƒe faɛl `.i18n/htm/dev.yml` dzi.

`dev` agbalẽdzraɖoƒe :

`htm` ƒe agbalẽdzraɖoƒea nye nyatakakadzraɖoƒea ƒe gege ɖe eme ƒe axa.

`v` ƒe nyatakakadzraɖoƒe la me nyatakakadzraɖoƒea me nyawo le kple woƒe tɔtrɔ ƒe xexlẽdzesiwo.

Local preview metsɔ ɖeke le version xexlẽdzesi me o eye awɔ kɔpi na faɛlwo katã ɖe `out/dev/v/0.1.0` directory la me.

Be woaɖee ɖe go le se nu la, woawɔ kɔpi na faɛl siwo wotrɔ la ɖe version number directory yeyea me.

#### Tsɔ Ɖoɖowɔɖi Ƒe Faɛl Kple `-c`

Ðoɖowɔɖi ƒe faɛl vovovowo awɔ nyatakakadzraɖoƒe siwo sɔ ɖe enu le `out` ƒe agbalẽdzraɖoƒea.

Le kpɔɖeŋu me, `.i18n/htm/ol.yml` awɔ `out/ol` agbalẽdzraɖoƒea.

`dev.yml` kple `ol.yml` nye ɖoɖowɔɖi siwo woɖo ɖi.

`dev` nye `development` ƒe kpukpui, si fia ŋgɔyiyi ƒe nɔnɔme, si wozãna na teƒea ƒe ŋgɔdonya, eye wònye ɖoɖowɔɖi ƒe faɛl gbãtɔ hã.
`ol` nye `online` ƒe kpukpui, si fia internet dzi nɔnɔme, si wozãna hena asiɖeɖe le eŋu le se nu Enye ɖoɖowɔɖi ƒe faɛl si woɖo ɖi hã ne wole sedede ƒe nɔnɔmetata `-n` vaseɖe `npm` zãm tsɔ ɖe asi le eŋu.

Àteŋu awɔ ɖoɖowɔɖi ƒe faɛl bubuwo hã Zã `--htm_conf` le sedede ƒe fli dzi atsɔ agblɔ ɖoɖowɔɖi ƒe faɛl ŋkɔ si nàzã:

Le kpɔɖeŋu me:
```
i18n.site --htm_conf yourConfig --save
```

Le afisia la, `--save` tsi tre ɖi na update release version xexlẽdzesi.

#### <a rel=id href="#npm" id="npm"></a> Ta nyatakakawo ɖe npmjs.com

Nyatakakawo [tata](/i18n.site/feature#ha) ɖe [npmjs.com](//npmjs.com)

##### npm login & Ɖe Asi Le

De `nodejs` , ge ɖe eme kple `npm login` .

Trɔ asi le `md/.i18n/htm/ol.yml` ŋu [npmjs.com](//npmjs.com) nàtrɔ asixɔxɔ si le [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) ŋu `YOUR_NPM_PACKAGE` abe wò ŋutɔ wò `npm` ƒe agbalẽvi ƒe ŋkɔ ene.

Emegbe nàtrɔ asi le `md/.i18n/htm/ol.package.json` ŋu

Ƒu du `i18n.site --npm` alo `i18n.site -n` le `md` ƒe nyatakakadzraɖoƒe be nàɖe egɔme ahatae.

Ne èzã ƒoƒo ɖekae ƒe nɔnɔme si yia edzi tsɔ taa nu la, mehiã be nàde `nodejs` o, ɖeko nàŋlɔ mɔɖeɖe `~/.npmrc` si ge ɖe eme kple tata 1 la ɖe nutoa me.

Ne ètrɔ asi le agbalẽvi ƒe ŋkɔ si nye `v:` le `ol.yml` me ŋu la, taflatse **kpɔ egbɔ be yetutu `.i18n/v/ol` gbã** eye emegbe yeatae.

##### Proxy Server Si npm Ta

Ne zãla siwo le China-nyigba gã dzi do go network kuxiwo eye womete ŋu ta `npm` packages o la, woateŋu aɖo environment variable `https_proxy` be wòaɖo proxy server la.

Ne míetsɔe be wò proxy server port nye `7890` la, àte ŋu aŋlɔ be:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Nyatakaka Siwo Ame Ŋutɔ Ŋlɔ

Ne èdi be ye ŋutɔ yeaxɔ nyatakakaawo la, trɔ asi le `md/.i18n/htm/ol.yml` ŋu gbã eye nàtrɔ `v: //unpkg.com/i18n.site` ɖe wò URL ƒe ŋgɔdonya ŋu, abe `v: //i18n-v.xxx.com` ene.

De `md` agbalẽdzraɖoƒea eye nàƒu du

```
i18n.site --htm_conf ol --save
```

alo kpukpui aɖe

```
i18n.site -c ol -s
```

Emegbe, ɖo nya siwo le `md/out/ol/v` ƒe nyatakakadzraɖoƒea ɖe URL ƒe ŋgɔdonya mɔ si woɖo ɖe `v:` me la nu.

Mlɔeba la, **ɖo mɔ si wu enu kple `/.v` va ɖo `1s` ƒe cache ɣeyiɣi** , ne menye nenema o la, womate ŋu akpɔ nyatakaka yeye siwo woɖe ɖe go la enumake o.

Woateŋu aɖo cache time na mɔ bubuwo ɖe ƒe ɖeka alo esi wu nenema be woaɖe biabia siwo mehiã o dzi akpɔtɔ.

##### Host Content to s3

Be nàxɔ nyatakakawo le ɖokuiwò si la, tsɔ kpe ɖe wò ŋutɔ wò server zazã ŋu la, tiatia bubu si `CDN` enye be nàzã `S3` +

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ðo ŋku edzi nàɖo `CDN` ale be mɔ si wu enu kple `/.v` ƒe cache time nanye `1s` , ne menye nenema o la, womate ŋu akpɔ nyatakaka yeye siwo woɖe ɖe go la enumake o.

### Ta Nyatakakadzraɖoƒe

Woateŋu aɖo nyatakakadzraɖoƒea ɖe afisiafi [github page](https://pages.github.com) eye [cloudflare page](https://pages.cloudflare.com) nye tiatia nyuiwo.

Esi nyatakakadzraɖoƒea zãa [axa ɖeka ƒe dɔwɔɖoɖo ƒe](https://developer.mozilla.org/docs/Glossary/SPA) xɔtuɖoɖo ta la, ɖo ŋku edzi nàgbugbɔ aŋlɔ URL mɔ siwo me `. ` va ɖo `index.html` mele o.

Zi ɖeka koe wòle be woatsɔ nyatakakadzraɖoƒea ƒe axaa ade dɔwɔwɔ me, eye mehiã be woagbugbɔ nyatakakadzraɖoƒea ƒe axaa ade dɔwɔwɔ me hena nyatakakawo ƒe yeyewɔwɔ emegbe o.

#### Deploy Le github Ƒe Axa Dzi

Gbã la, zi afisia dzi `i18n-demo` [github habɔbɔ aɖe](https://github.com/account/organizations/new?plan=free) .

Emegbe wɔ nudzraɖoƒe `i18n-demo.github.io` le habɔbɔ sia te (taflatse tsɔ habɔbɔ ƒe ŋkɔ si nèwɔ ɖɔ li `i18n-demo` ):

![](https://p.3ti.site/1721098657.avif)

Ne èle nyatakaka siwo le nyati si do ŋgɔ me tam la, wowɔ `out/ol/htm` Taflatse ŋlɔ agbalẽdzraɖoƒe sia eye nàƒu du :

```
ln -s index.html 404.html
```


Esi `github page` medoa alɔ URL mɔ gbugbɔŋlɔ o ta la, wozãa `404.html` ɖe eteƒe.

Emegbe nàwɔ sedede si gbɔna le `htm` ƒe nyatakakadzraɖoƒea (ɖo ŋku edzi nàtsɔ wò ŋutɔ wò nudzraɖoƒe ƒe adrɛs aɖɔli `i18n-demo/i18n-demo.github.io.git` ) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ne ètu kɔda la vɔ la, lala be `github page` ƒe dɔwɔwɔ nawɔ dɔ dzidzedzetɔe (abe alesi woɖee fia le ete ene) hafi nàte ŋu age ɖe eme.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ne èdi demo page la, taflatse kpɔ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy Le cloudflare Ƒe Axa Dzi

[cloudflare page](//pages.cloudflare.com) `github page`

Zi geɖe la, wotua `cloudflare page` ƒe dɔwɔwɔ ɖe `github page` ƒe dɔwɔwɔ ɖe etame dzi.

Wɔ dɔ aɖe eye nàbla `i18n-demo.github.io` nudzraɖoƒe si le etame.

Woɖe alesi wowɔa dɔae fia le nɔnɔmetata si le ete me:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Taflatse zi `Add Account` dzi be nàna mɔnukpɔkpɔ habɔbɔ `i18n-demo` .

Ne èbla habɔbɔ bubu ƒe nudzraɖoƒea la, ahiã be nàzi `Add Account` dzi zi eve be nàɖe mɔ na wò zi eve hafi woaɖe habɔbɔ yeyea afia.

![](https://p.3ti.site/1721118306.avif)

Eyome, tia nudzraɖoƒe `i18n-demo.github.io` , emegbe nàzi `Begin setup` dzi, eye nàzã asixɔxɔ siwo woɖo ɖi na afɔɖeɖe siwo akplɔe ɖo.

![](https://p.3ti.site/1721118490.avif)

Ne èblae zi gbãtɔ vɔ la, ele be nàlala aɖabaƒoƒo ʋɛ aɖewo hafi nàte ŋu akpɔe.

Le dɔwɔwɔ vɔ megbe la, àte ŋu abla domenyiŋusẽfianu ƒe ŋkɔ si nèdi.

![](https://p.3ti.site/1721119459.avif)

Ne èbla domenyiŋusẽfianu ƒe ŋkɔ tɔxɛa vɔ la, taflatse yi domenyiŋkɔa gbɔ be nàɖo mɔ si dzi woagbugbɔ aŋlɔ axa ɖeka ƒe dɔwɔwɔ la ɖo, abe alesi woɖee fia le ete ene:

![](https://p.3ti.site/1721119320.avif)

Se siwo le nɔnɔmetata si le etame la le ale: Taflatse tsɔ domenyiŋkɔ si nèbla la ɖɔ li `i18n.site` le fli gbãtɔ si le ete.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Tsɔ kpe ɖe eŋu la, taflatse ɖo cache ƒe sewo, abe alesi woɖee fia le ete ene, eye nàɖo cache ƒe ɣeyiɣi didime ɖe ɣleti ɖeka.

![](https://p.3ti.site/1721125111.avif)

Taflatse trɔ domenyiŋusẽfianu ƒe ŋkɔ si sɔ le afɔɖeɖe evelia me le nɔnɔmetata si le etame me ɖe domenyiŋkɔ si nèbla la ŋu.

#### Nyatakakadzraɖoƒewo Zazã Nyuie Wu Le China-Nyigba Gã Dzi

Ne èdi be yeakpɔ mɔɖeɖe ƒe dɔwɔwɔ nyuie wu le China-nyigba gã ƒe network nɔnɔme me la, taflatse [ŋlɔ domenyiŋusẽfianu ŋkɔ](//beian.aliyun.com) gbã.

Emegbe, zã nudzraɖoƒe si le alilikpo me nudzralawo `CDN` + the following content `out/ol/htm` .

Àteŋu azã edge computing atsɔ agbugbɔ aŋlɔ mɔa be wòatrɔ ɖe axa ɖeka ƒe dɔwɔwɔwo ŋu Le kpɔɖeŋu me, woateŋu aɖo [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ale:

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

Esi wònye be nuŋlɔɖi `MX` kple nuŋlɔɖi `CNAME` mate ŋu anɔ anyi ɖekae o ta la, ne èdi be `CNAME` domenyiŋkɔ ƒe e-mailwo le ɣeyiɣi `A` me la, ele be nàwɔ nu aduadu kple [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Tsɔ kpe ɖe eŋu la, esi wònye be alilikpo dzrala siwo le China-nyigba gã dzi ƒe duta ʋuɖoɖo ƒe fewo xɔ asi ŋutɔ ta la, [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) èdi be yeawɔ gazazãwo wòanyo wu la, àte ŋu azã [Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ʋuwo ƒe tɔtrɔ──Ʋuwo ƒe zɔzɔ le China-nyigba gã dzi Baidu Cloud `CDN` , dukɔwo dome ʋuwo yi cloudflare .

![](https://p.3ti.site/1721119788.avif)

Deployment optimization solutions siawo sesẽ wu eye woaɖe wo ɖe go le ta vovovowo me le etsɔme.

#### Generic Domain Ŋkɔ Ƒe Tɔtrɔ

Ne èzã `i18n.site` tsɔ wɔ nyatakakadzraɖoƒe abe wò nyatakakadzraɖoƒe vevitɔ ene la, zi geɖe la, ahiã be nàtrɔ asi le pan-domain redirection ŋu, si fia be nàtrɔ mɔ si dzi nàto ayi `*.xxx.com` ( `www.xxx.com` hã le eme) ayi `xxx.com` dzi.

Woate ŋu aɖo nudidi sia gbɔ to Alibaba Cloud `CDN` `EdgeScript` ( [Eŋlisigbe me nuŋlɔɖi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinagbe me nuŋlɔɖi](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ƒe kpekpeɖeŋu me .

Tsɔ domenyiŋusẽfianu ŋkɔ kpe ɖe eŋu le [Alibaba CDN me](https://cdn.console.aliyun.com/domain/list) eye nàfia asi domenyinyi ŋkɔ `*.xxx.com` `CNAME` le Alibaba Alilikpo `CDN` me .

![](https://p.3ti.site/1721122000.avif)

Le kpɔɖeŋu me, pan-domain ŋkɔ tɔtrɔ ƒe ɖoɖo si nye `*.i18n.site` le nɔnɔmetata si le etame la le ale:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Deploy Kple nginx

Taflatse tsɔ ɖoɖo si sɔ kple `/root/i18n/md/out/ol/htm` gbɔna le `server` memama si le nginx `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Nyatakakadzraɖoƒe Ƒe Ɖoɖo

#### `public`

Nyatakakadzraɖoƒea ƒe faɛl siwo meʋãna o, abe `favicon.ico` , `robots.txt` , kple bubuawo ene.

Woateŋu awɔ dzesi ƒe faɛl siwo le afisia kple [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Le `.i18n` ƒe agbalẽdzraɖoƒea te la, ɖoɖowɔɖi ƒe faɛlwo, gbegɔmeɖeɖe ƒe nudzraɖoƒe, kple bubuawo le `i18n.site` Kpɔ ta si kplɔe ɖo ["Dɔwɔwɔ"](/i18n.site/conf) hena numeɖeɖe tsitotsito.

#### `en`

Dzɔtsoƒe gbegbɔgblɔ ƒe nyatakakadzraɖoƒe, si sɔ kple `en` le `fromTo` me le `.i18n/conf.yml` me ɖoɖowɔɖi faɛl

```yaml
i18n:
  fromTo:
    en: zh
```

Taflatse kpɔ gbegɔmeɖeɖe ƒe ɖoɖowɔwɔ [i18](/i18/use)