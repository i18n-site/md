# Instalar &

## Configuración Nisqa Token

`i18n.site` `i18` [`i18`](/i18/use)

## Churay

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyecto Demostración Nisqa

¡Qallarisun huk proyecto demostración nisqawan hinaspa yachasun imayna utilizayta `i18n.site`

Ñawpaqtaqa demo waqaychasqata clonayku hinaspa kamachiyta kayhinata purichiyku:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

China hatun suyupi llamk'achiqkuna kayta atinku:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### Tikray

`i18n.site` `md` `en` `zh`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ruwasqamanta, tikray chaymanta waqaychasqa willañiqikuna paqarichisqa kanqa Ama hina kaspa, chaykunata `git add . ` waqaychanaman yapayta `md`

### Llaqtapi Ñawpaq Qhaway

`docker` `MAC` [orbstack](https://orbstack.dev) `docker`

[https://127.0.0.1](https://127.0.0.1) `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Contenidota Churay

`i18n.site` [Huk p'anqa ruwana](https://developer.mozilla.org/docs/Glossary/SPA) arquitecturata adoptan, chaymanta web kiti yaykuy p'anqa chaymanta web kitipi kaqnin sapanchasqa mast'arisqa.

Hawa tikrayta purichispa, `htm` chaymanta `v` sutiyuq qillqana mayt'ukuna `md/out/dev`

`.i18n/htm/dev.yml` , `dev`

`dev` Ukhupi contenidos :

`htm`

`v`

Llaqta ñawpaq qhawayqa llapa willañiqikunatam `out/dev/v/0.1.0`

Oficial kacharinapaq, tikrasqa willañiqikuna musuq laya yupay qillqana mayt'uman copiasqa kanqa.

#### -c Nisqawan Llamk'achiy Wakichisqa Willañiqita Willanaykipaq

Huk rikchaq wakichiy willañiqikuna tupaq willañiqikunata `out`

Ejemplopaq, `.i18n/htm/ol.yml` huk `out/ol` directorio nisqatam ruwanqa.

`dev.yml` `ol.yml` nisqakunaqa ñawpaqmanta churasqakunam.

`dev` `development`
`ol` `online` `-n` `npm`

Huk wakichiy willañiqikunatapas paqarichiyta atinkim kamachiy chirupi `--htm_conf`

kay hina:
```
i18n.site --htm_conf yourConfig --save
```

Kaypi `--save` musuqyachiy lluqsichiy laya yupayta rikuchin.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com nisqaman contenidota lluqsichiy

[npmjs.com](//npmjs.com)[​](/i18n.site/feature#ha)

##### npm login & Qispichiy

`nodejs` churay, `npm login` llamk'achiy yaykunaykipaq.

Llamk'apuy `md/.i18n/htm/ol.yml` `i18n.site` in `v: //unpkg.com/i18n.site` nisqata kikiykiman `npm` paquete sutiman) tikray.

Mana runayuq paquete sutita llamk'achiylla [npmjs.com](//npmjs.com) Web kitip kamachiy sutita llamk'achiyta paquete suti hina allin akllana.

`npm` `v:` **`//unpkg.com/`** `i18n.site` `/.v`

`i18n.site --npm` icha `i18n.site -n` nisqapi `md`

Sichus huk sapa kuti tinkinakuy pachata llamk'achinki qillqanapaq, mana churanaykichu tiyan `nodejs` Yaykusqa chaymanta lluqsisqa atiyta `~/.npmrc` pachaman copiaylla.

Sichus `v:` `ol.yml` nisqapi paquete sutita tikranki chayqa, **ama hina kaspa `.i18n/v/ol` ñawpaqta qulluy** , chaymantataq lluqsichiy.

##### Proxy Sirwiq npm Nisqap Lluqsichisqan

Sichus China hatun suyupi llamk'aqkuna `https_proxy` sasachakuykunawan tupanku chaymanta mana `npm`

Proxy servidor puertoyki `7890` qillqayta atikunki:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kikinmanta Qusqa Contenido

Sichus kikinmanta ruwasqa willayta munanki, ñawpaqta, `md/.i18n/htm/ol.yml` chaymanta `v: //unpkg.com/i18n.site` URL ñawpaq simiykiman tikray, ahinataq `v: //i18n-v.xxx.com` .

`md`

```
i18n.site --htm_conf ol --save
```

otaq pisichasqa simi

```
i18n.site -c ol -s
```

`v:` , `md/out/ol/v`

**`1s` , `/.v`**

Huk ñankunapaq waqaychasqa pachaqa huk wataman utaq aswanman churasqa kanman mana necesario mañakuykunata pisiyachinapaq.

##### Contenidota s3 Nisqaman Quy

`CDN` qunakuypaq, kikin sirwiqniyki llamk'achiyta, + común akllana llamk'achiyta `S3`

[rclone](https://rclone.org) `S3` `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Yuyariy `CDN` wakichiyta, chaymanta `/.v` kaqwan tukuq ñanpa waqaychasqa pachan `1s` kananpaq, mana hina kaqtinqa mana chaylla musuq lluqsisqa willaykunaman yaykuyta atikunkichu.

### Web Nisqapi Lluqsichiy

Web kitiqa maypipas churasqa kanman [github page](https://pages.github.com) chaymanta [cloudflare page](https://pages.cloudflare.com) allin akllanakuna kanku.

Imaraykuchus web kitiqa [huk p'anqayuq ruwanap](https://developer.mozilla.org/docs/Glossary/SPA) arquitecturata hap'in, yuyariy URL ñanta wakmanta qillqayta mayqinchus mana `. ` kaqmanchu kachkan `index.html`

Web kiti yaykuy p'anqa huk kutilla mast'arisqa kanan tiyan, chaymanta mana web kiti yaykuy p'anqata wakmanta mast'ariy tiyanchu qhipa ruwanakuna musuqyachiypaq.

#### github P'anqapi Mast'ariy

Ñawpaqta [github ñit'iy huk tantanakuyta ruwanaykipaq](https://github.com/account/organizations/new?plan=free) Kay qatiq tantanakuypa sutinmi huk rikch'anachiy hina `i18n-demo`

Chaymanta kay tantanakuypa uranpi huk almacén ruway `i18n-demo.github.io` (Ama hina kaspa, `i18n-demo` kamasqayki tantanakuy sutiwan tikray):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Ñawpaq qillqasqapi willayta lluqsichispaqa, paqarichisqañam kachkan Ama hina kaspa `out/ol/htm` kay qillqana mayt'uman yaykuy hinaspa purichiy :

```
ln -s index.html 404.html
```


Imaraykuchus `github page` mana URL ñanta wakmanta qillqayta yanapanchu, chayrayku `404.html` llamk'achisqa kachkan.

Chaymanta kay kamachiyta `htm` directoriopi purichiy (yuyariy `i18n-demo/i18n-demo.github.io.git` kikinpa almacén direccionninwan tikrayta) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Codigo tanqasqaykimanta, `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo p'anqapaq ama hina kaspa qhaway:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare P'anqapi Mast'ariy

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` `github page`

Huk proyectota ruway hinaspa hawapi kaq almacén nisqa watay `i18n-demo.github.io`

Chay ruwayqa kay urapi siqipim qawarisqa kachkan:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Ama hina kaspa `Add Account` ñit'iy `i18n-demo` organización nisqaman yaykuyta qunaykipaq.

Sichus huk organizacionpa almacénninta watarqanki, iskay kutita `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Chaymanta `i18n-demo.github.io` Almacén nisqapi akllay, chaymanta `Begin setup` ñit'iy, chaymanta qatiq llamkanakunapaq ñawpaqmanta churasqa chanikunata llamk'achiy.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Ñawpaq kutita watasqaykimanta, iskay kimsa minutota suyanayki tiyan manaraq chayman yaykuyta atispa.

Mastarisqamanta qhipaman, huk sapanchasqa kamachiy sutita watayta atikunki.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Sapanchasqa kamachiy sutita watasqamanta, ama hina kaspa kamachiy sutiman riy huk p'anqayuq ruwanapa ñan musuqmanta qillqayninta wakichinaykipaq, uraypi rikuchisqa hina:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Hawa siq'ipi kamachiykuna kayhina kanku Ama hina kaspa, uraypi ñawpaq chirupi `i18n.site`

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

Chaymantapas, ama hina kaspa, waqaychasqa kamachiykunata wakichiy, uraypi rikuchisqa hina, chaymanta waqaychasqa unayniyuq kayninta huk killaman churay.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Ama hina kaspa, hawa siq'ipi iskay ñiqin llamk'aypi kamachiy suti tupachiyta tikray, watasqayki kamachiy sutiman.

#### China Hatun Suyupi Web Kiti Mast'ariyta Allinchay

Sichus aswan allin yaykuy ruwayta China hatun suyu llika muyuriqpi tariyta munanki, ama hina kaspa ñawpaqta [huk dominio sutita qillqay](//beian.aliyun.com) .

`out/ol/htm` , `CDN` hatun suyupi puyu ranqhaqkunap objeto waqaychayninta llamk'achiy +

Kantu yupayta llamk'achiy atikunki ñanta wakmanta qillqanaykipaq huk p'anqayuq ruwanakunaman hina, ahinataq [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

Imaraykuchus `MX` registrokuna `CNAME` `CNAME` registrokuna mana kuska kawsayta atinkuchu, sichus huk pachallapi dominio suti correo electrónicos chaskiyta munanki, [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script kaqwan yanapanakunayki tiyan `A` grabación.

Chaymanta, imaraykuchus hawa llaqtakunapi t'ikray qullqikuna puyu ranqhaqkuna China hatunpi aswan chaninniyuq kanku, [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) qullqikuna allinchayta munanki, [Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) tráfico desviación──Tráfico China hatun suyupi Baidu Cloud `CDN` internacional tráfico rin cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Kay mastariy allinchay allichaykunaqa aswan sasachakuyniyuqmi, hamuq pachapi sapaq capitulokunapi riqsichisqa kanqa.

#### Genérico Dominio Suti Kutichiy

`*.xxx.com` `i18n.site` `www.xxx.com` `xxx.com`

Kay mañakuyqa Alibaba Cloud nisqap yanapayninwanmi hunt'akunman ( [Inglés qillqa](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) `EdgeScript` / [qillqa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) `CDN`

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kaqpi huk kamachiy sutita yapay chaymanta kamachiy `*.xxx.com` Alibaba Cloud `CDN` 's `CNAME` kaqman rikuchiy.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Ejemplopaq, `*.i18n.site` -pa pan-domain suti kutichiy wakichiyninqa kayhinam:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Nisqawan Mast'ariy

Ama `server` kayman rikch'akuq ruwayta yapay nginx maypichus `/root/i18n/md/out/ol/htm` ama hina kaspa, kikinpa llamk'anaykipa ñanninman tikray `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directorio Nisqapa Estructura Nisqa

#### Runapaq

Web kitip mana kuyukuq willañiqikuna, ahinataq `favicon.ico` `robots.txt` , hukkunapas.

Kaypi icono willañiqikunataqa [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` `i18n.site`[​](/i18n.site/conf)

#### en

Pukyu simi qillqana mayt'u, wakichisqa willañiqipi `fromTo` `en` `.i18n/conf.yml` tupaq

```yaml
i18n:
  fromTo:
    en: zh
```

Ama hina kaspa, tikraypa wakichiyninta qhaway [i18](/i18/use)

