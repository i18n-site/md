# Deploy &

## Ðoɖowɔɖi Ƒe Dzesi

`i18n.site` `i18` [`i18`](/i18/use)

## Ɖoe Anyi

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demo Dɔa Wɔwɔ

Mina míadze egɔme kple demo project eye míasrɔ̃ alesi woazãe `i18n.site`

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

Ele be kɔda ƒe gɔmeɖoanyi ƒe klonu ƒe ŋkɔ nanye `md` be wòana teƒea ƒe ŋgɔdonya nanɔ bɔbɔe kple `docker` `demo.i18n.site`

### Ɖe Gbe Gɔme

Gbã `zh` , `en` `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ne ewɔ dɔ vɔ la, woawɔ gbegɔmeɖeɖe kple cache faɛlwo Taflatse ɖo ŋku edzi nàtsɔ wo akpe ɖe nudzraɖoƒe `git add . ` le `md`

### Nutoa Me Ƒe Ŋgɔdonya

De eme eye nàdze `docker` ( `MAC` kafui be nàzã [orbstack](https://orbstack.dev) abe `docker` ƒe dɔwɔwɔ ƒe ɣeyiɣi ene ).

Emegbe [https://127.0.0.1](https://127.0.0.1) ge `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Ðo Nyatakakawo Ɖe Afima

`i18n.site` Exɔa [axa ɖeka ƒe dɔwɔɖoɖo ƒe](https://developer.mozilla.org/docs/Glossary/SPA) ɖoɖo, eye wozãa nyatakakadzraɖoƒea ƒe gege ɖe eme ƒe axa kple nyatakakadzraɖoƒea me nyawo le wo ɖokui si.

Ne èwɔ gbegɔmeɖeɖe si le etame vɔ la, woawɔ `htm` kple `v` nyatakakadzraɖoƒewo le `md/out/dev`

Le afisia la, `dev` fia be wotue ɖe `.i18n/htm/dev.yml` faɛl dzi.

`dev` :

`htm`

`v` Nyatakakadzraɖoƒea ƒe nyatakakawo le agbalẽdzraɖoƒea kple eƒe tɔtrɔ ƒe xexlẽdzesi.

Teƒea ƒe ŋgɔdonya awɔ kɔpi na faɛlwo katã ɖe `out/dev/v/0.1.0`

Be woaɖee ɖe go le se nu la, woawɔ kɔpi na faɛl siwo wotrɔ la ɖe version number directory yeyea me.

#### Zã -c Nàtsɔ Agblɔ Ɖoɖowɔɖi Ƒe Faɛl

Ðoɖowɔɖi ƒe faɛl vovovowo awɔ nyatakakadzraɖoƒe siwo sɔ ɖe enu le `out`

Le kpɔɖeŋu me, `.i18n/htm/ol.yml` awɔ `out/ol` agbalẽdzraɖoƒe.

`dev.yml` kple `ol.yml` nye ɖoɖowɔɖi gbãtɔwo.

`dev` `development`
`ol` `online` `-n` `npm`

Àteŋu awɔ ɖoɖowɔɖi ƒe faɛl bubuwo hã Zã `--htm_conf`

Le kpɔɖeŋu me:
```
i18n.site --htm_conf yourConfig --save
```

Afisia `--save` fia update release version xexlẽdzesi.

#### <a rel=id href="#npm" id="npm"></a> Ta nyatakakawo ɖe npmjs.com

Nyatakakawo [tata](/i18n.site/feature#ha) ɖe [npmjs.com](//npmjs.com)

##### npm login & Ɖe Asi Le

De `nodejs` zã `npm login` tsɔ ge ɖe eme.

Trɔ asi le `md/.i18n/htm/ol.yml` trɔ `i18n.site` le `v: //unpkg.com/i18n.site` me wòzu tɔwò `npm` package ŋkɔ.

Zã agbalẽvi si me ame aɖeke mele o ko le [npmjs.com](//npmjs.com)

`/.v` `i18n.site` `v:` **`//unpkg.com/`** `npm`

Ƒu du `i18n.site --npm` alo `i18n.site -n` le `md`

Ne èzãa ƒoƒo ɖekae ƒe nɔnɔme si yia edzi tsɔ taa nu la, mehiã be nàdae ɖe wò kɔmpiuta `~/.npmrc` o `nodejs`

Ne ètrɔ **`.i18n/v/ol`** le agbalẽvi ƒe ŋkɔ ŋu le `v:` in `ol.yml`

##### Proxy Server Si npm Ta

Ne zãla siwo le China-nyigba gã dzi do go network kuxiwo eye wometeŋu `https_proxy` `npm`

Ne míetsɔe be wò proxy server port nye `7890` àte ŋu aŋlɔ be:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Nyatakaka Siwo Ame Ŋutɔ Ŋlɔ

Ne èdi be ye ŋutɔ yeaxɔ emenyawo la, gbã `v: //i18n-v.xxx.com` , trɔ `v: //unpkg.com/i18n.site` le `md/.i18n/htm/ol.yml`

Ge ɖe `md`

```
i18n.site --htm_conf ol --save
```

alo kpukpui

```
i18n.site -c ol -s
```

Emegbe, ɖo nya siwo `v:` `md/out/ol/v`

Mlɔeba la, **`1s` mɔ si wu enu ɖe `/.v`**

Woateŋu aɖo cache time na mɔ bubuwo ɖe ƒe ɖeka alo esi wu nenema be woaɖe biabia siwo mehiã o dzi akpɔtɔ.

##### Host Content to s3

Be nàxɔ nyatakakawo le ɖokuiwò si `CDN` , tsɔ kpe ɖe wò ŋutɔ wò server zazã ŋu + , tiatia bubu si bɔ enye be nàzã `S3`

Àteŋu azã [rclone](https://rclone.org) `S3` `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ðo ŋku edzi nàɖo `CDN` ale be mɔ si wu enu kple `/.v` ƒe cache ɣeyiɣi nanye `1s` , ne menye nenema o la, màte ŋu akpɔ nyatakaka yeye siwo woɖe ɖe go la enumake o.

### Ta Nyatakakadzraɖoƒe

Woateŋu aɖo nyatakakadzraɖoƒea ɖe afisiafi [github page](https://pages.github.com) eye [cloudflare page](https://pages.cloudflare.com) nye tiatia nyuiwo.

Esi nyatakakadzraɖoƒea xɔa [axa ɖeka ƒe dɔwɔwɔ](https://developer.mozilla.org/docs/Glossary/SPA) ƒe xɔtuɖaŋu ta la, ɖo ŋku edzi nàgbugbɔ aŋlɔ URL mɔ si me mele o `. ` ɖe `index.html` .

Zi ɖeka koe wòle be woatsɔ nyatakakadzraɖoƒea ƒe axaa ade dɔwɔwɔ me, eye mehiã be woagbugbɔ nyatakakadzraɖoƒea ƒe axaa ade dɔwɔwɔ me hena nyatakakawo ƒe yeyewɔwɔ emegbe o.

#### Deploy Le github Ƒe Axa Dzi

Gbã la [github zi afisia dzi be nàwɔ habɔbɔ aɖe](https://github.com/account/organizations/new?plan=free) ƒe ŋkɔ si gbɔna la nye `i18n-demo`

Emegbe wɔ nudzraɖoƒe le habɔbɔ sia te `i18n-demo.github.io` (Taflatse tsɔ habɔbɔ ƒe ŋkɔ si nèwɔ la ɖɔ li `i18n-demo` ):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Ne èle nyatakaka siwo le nyati si do ŋgɔ me tam la, wowɔe `out/ol/htm` ŋlɔ agbalẽdzraɖoƒe sia eye nàƒu du :

```
ln -s index.html 404.html
```


Elabena `github page` medoa alɔ URL mɔ gbugbɔŋlɔ o, eyata wozãa `404.html` ɖe eteƒe.

Emegbe nàwɔ sedede `i18n-demo/i18n-demo.github.io.git` gbɔna : `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ne ètutu kɔdasia vɔ la, lala be `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Ne èdi demo page la, taflatse kpɔ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy Le cloudflare Ƒe Axa Dzi

[cloudflare page](//pages.cloudflare.com) Ne wotsɔe sɔ kple `github page`

`cloudflare page` Zi geɖe la, wotua dɔwɔwɔ ɖe `github page` si le etame ƒe dɔwɔwɔ dzi.

Wɔ dɔ aɖe eye nàbla nudzraɖoƒe si le etame `i18n-demo.github.io`

Woɖe alesi wowɔa dɔae fia le nɔnɔmetata si le ete me:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` zi `Add Account`

Ne èbla habɔbɔ bubu ƒe nudzraɖoƒea la, ahiã be nàzi `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Eyome tia `i18n-demo.github.io` Warehouse, emegbe nàzi `Begin setup` dzi, eye nàzã asixɔxɔ gbãtɔwo na afɔɖeɖe siwo akplɔe ɖo.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Ne èblae zi gbãtɔ vɔ la, ele be nàlala aɖabaƒoƒo ʋɛ aɖewo hafi nàte ŋu akpɔe.

Le dɔwɔwɔ vɔ megbe la, àte ŋu abla domenyiŋusẽfianu ƒe ŋkɔ si nèdi.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Ne èbla domenyiŋusẽfianu ƒe ŋkɔ tɔxɛa vɔ la, taflatse yi domenyiŋkɔa gbɔ be nàɖo mɔ si dzi woagbugbɔ aŋlɔ axa ɖeka ƒe dɔwɔwɔ la ɖo, abe alesi woɖee fia le ete ene:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Se siwo le nɔnɔmetata si le etame la le ale: Taflatse tsɔ domenyiŋusẽfianu ƒe ŋkɔ si wobla ɖe ŋuwò ɖɔ li `i18n.site`

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

Tsɔ kpe ɖe eŋu la, taflatse ɖo cache ƒe sewo, abe alesi woɖee fia le ete ene, eye nàɖo cache ƒe ɣeyiɣi didime ɖe ɣleti ɖeka dzi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Taflatse trɔ domenyiŋkɔ si sɔ le afɔɖeɖe evelia me le nɔnɔmetata si le etame me ɖe domenyiŋkɔ si nèbla la ŋu.

#### Nyatakakadzraɖoƒewo Zazã Nyuie Wu Le China-Nyigba Gã Dzi

Ne èdi be yeakpɔ mɔɖeɖe ƒe dɔwɔwɔ nyuie wu le China-nyigba gã ƒe network nɔnɔme me la, taflatse [ŋlɔ domenyiŋusẽfianu ŋkɔ](//beian.aliyun.com) gbã.

Emegbe, zã `out/ol/htm` si le alilikpo me le China-nyigba gã `CDN` +

Àteŋu azã edge computing atsɔ agbugbɔ aŋlɔ mɔa be wòatrɔ ɖe axa ɖeka ƒe dɔwɔwɔwo ŋu, abe [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Elabena `MX` nuŋlɔɖiwo kple `CNAME` nuŋlɔɖiwo mateŋu anɔ anyi ɖekae o, ne èdi be yeaxɔ domenyiŋkɔ ƒe e-mailwo le ɣeyiɣi ɖeka me `A` , ele be nàwɔ `CNAME` aduadu kple [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Tsɔ kpe ɖe eŋu la, esi wònye be alilikpo dzrala siwo le China-nyigba gã dzi [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) duta ʋuɖoɖo ƒe fewo xɔ asi ŋutɔ ta la, ne èdi be yeawɔ gazazãwo wòanyo wu la, àte ŋu azã [Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ʋuwo ƒe tɔtrɔ──Ʋuwo ƒe zɔzɔ le China-nyigba gã dzi Baidu Cloud `CDN` dukɔwo dome ʋuwo ƒe zɔzɔ yi cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Deployment optimization solutions siawo sesẽ wu eye woaɖe wo ɖe go le ta vovovowo me le etsɔme.

#### Generic Domain Ŋkɔ Ƒe Tɔtrɔ

`*.xxx.com` `www.xxx.com` `i18n.site` `xxx.com`

Woateŋu aɖo nudidi sia gbɔ to Alibaba Cloud ƒe `EdgeScript` ( [Eŋlisigbe me nuŋlɔɖi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinagbe me nuŋlɔɖi](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) ƒe kpekpeɖeŋu me `CDN`

Tsɔ domenyiŋusẽfianu ŋkɔ kpe ɖe [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) me eye nàfia asi `*.xxx.com` ɖe Alibaba Alilikpo `CDN` ƒe `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Le kpɔɖeŋu me, pan-domain ŋkɔ tɔtrɔ ƒe ɖoɖo si nye `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Deploy Kple nginx

`/root/i18n/md/out/ol/htm` tsɔ ɖoɖo si sɔ kple esi gbɔna le `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Nyatakakadzraɖoƒe Ƒe Dɔwɔɖoɖo

#### Amedome

Nyatakakadzraɖoƒea ƒe faɛl siwo meʋãna o, abe `favicon.ico` `robots.txt` , kple bubuawo ene.

Woateŋu awɔ dzesi ƒe faɛl siwo le afisia kple [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Dzɔtsoƒe gbegbɔgblɔ ƒe nuŋlɔɖi, si sɔ `.i18n/conf.yml` `fromTo` `en` le ɖoɖowɔɖi ƒe faɛl me

```yaml
i18n:
  fromTo:
    en: zh
```

Taflatse kpɔ gbegɔmeɖeɖe ƒe ɖoɖowɔwɔ [i18](/i18/use)

