# Instalar &

## Configuración Nisqa Token

`i18n.site` huk ruwasqa `i18` tikray yanapakuyniyuqmi Ama hina kaspa [kaypi ñit'iy `i18` qillqaman yaykuna token wakichinaykipaq](/i18/use) .

## Churay

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proyecto Demostración Nisqa

Huk demo proyectowan qallarisun `i18n.site` llamk'achiyta yachanapaq.

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

`demo.i18n.site` codigo base clonpa directorio sutinqa `md` kanan tiyan `docker` kaqwan kiti ñawpaq qhawayta yanapanapaq.

### Tikray

Ñawpaqtaqa `md` qillqana mayt'uman yaykuspa `i18n.site` purichiy, chaymi `en` nisqamanta `zh` nisqaman tikranqa.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Ruwasqamanta, tikray chaymanta waqaychasqa willañiqikuna paqarichisqa kanqa Ama hina kaspa, yuyariy `md` `git add . ` waqaychasqaman yapayta.

### Llaqtapi Ñawpaq Qhaway

`docker` churay chaymanta qallariy ( `MAC` llamk'achiq [orbstack](https://orbstack.dev) llamk'achiyta yuyaychakun `docker` kaqpaq purichiy pacha hina ).

Chaymanta, `docker` directorioman yaykuy hinaspa `./up.sh` purichiy, chaymanta [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Contenidota Churay

`i18n.site` [huk p'anqalla ruwana](https://developer.mozilla.org/docs/Glossary/SPA) arquitectura kaqmanta hapin, chaymanta web kiti yaykuy p'anqa chaymanta web kitip kaqnin sapallamanta mast'arisqa.

Hawa tikrayta purichisqamanta, `htm` , `v` directoriokuna `md/out/dev` directorio urapi paqarichisqa kanqa.

Kaypiqa, `dev` niyta munan, `.i18n/htm/dev.yml` wakichiy willañiqipi sayasqa ruwasqa kasqanmanta.

`dev` qillqana mayt'u :

`htm` sutiyuq qillqana mayt'uqa web kitiman yaykuy p'anqam.

`v` sutiyuq qillqana mayt'uqa web kitip willayninkunayuqmi, laya yupaykunawan.

Llaqta ñawpaq qhawayqa manam laya yupaymanta llakikunchu, llapa willañiqikunatam `out/dev/v/0.1.0` willañiqiman qillqanqa.

Oficial kacharinapaq, tikrasqa willañiqikuna musuq laya yupay qillqana mayt'uman copiasqa kanqa.

#### -c Llamk'achiy Wakichisqa Willañiqita Willanaykipaq

Hukhina wakichiy willañiqikunaqa `out` willañiqipi tupaq willañiqikunatam ruranqa.

Ejemplopaq, `.i18n/htm/ol.yml` `out/ol` directorio nisqatam paqarichinqa.

`dev.yml` chaymanta `ol.yml` ñawpaqmanta ruwasqa ruwanakuna kanku.

`dev` nisqaqa `development` nisqap pisichasqanmi, wiñachiy pachata rikuchiq, llaqta ñawpaq qhawaypaq llamk'achisqa, chaymantataqmi ñawpaqmanta churasqa wakichiy willañiqipas.
`ol` nisqaqa `online` nisqap pisichasqa kayninmi, internetpi pachata rikuchispa, chaytaq oficial kacharinapaq llamk'achisqa kachkan, kamachiy chiru parámetros `-n` kaqmanta `npm` kaqkama kacharinapaq llamk'achkaspa.

Huk wakichiy willañiqikunatapas rurayta atinkim Kamachiy chirupi `--htm_conf` llamk'achiyta llamk'achinapaq wakichiy willañiqi sutita willanaykipaq:

kay hina:
```
i18n.site --htm_conf yourConfig --save
```

Kaypi `--save` musuqyachiy lluqsichiy laya yupayta rikuchin.

#### <a rel=id href="#npm" id="npm"></a> npmjs.com nisqaman contenidota lluqsichiy

[npmjs.com](//npmjs.com)[](/i18n.site/feature#ha)

##### npm login & Qispichiy

`nodejs` churay, `npm login` nisqawan yaykuy.

`md/.i18n/htm/ol.yml` llamk'apuy chaymanta `i18n.site` `v: //unpkg.com/i18n.site` kaqpi kikin `npm` paquete sutiykiman tikray.

Mana runayuq paquete sutita llamk'achiylla [npmjs.com](//npmjs.com) Web kitip kamachiy sutita llamk'achiyta paquete suti hina allin akllana.

`npm` paquete kaqpi sayasqa qillqachkaptiyki, 2 `v:` chaninpa ñawpaqninpaq **`//unpkg.com/` qhaway** `i18n.site` kay ñawpaq simi ñanpi `/.v` kaqpa waqaychasqa pachanta aswan allinchasqa musuq kacharisqakuna pachanpi qhawayta aypanapaq.

`md` directoriopi `i18n.site --npm` utaq `i18n.site -n` purichiy tikrayta chaymanta lluqsichinapaq.

Sichus huk sapa kuti tinkinakuy pachata llamk'achkanki qillqanapaq, mana `nodejs` churayta munankichu, yaykusqa chaymanta lluqsichiy atiyta `~/.npmrc` muyuriqman copiaylla.

Sichus `v:` `ol.yml` kaqpi paquete sutita tikranki, ama **hina kaspa ñawpaqta `.i18n/v/ol` qulluy** chaymanta lluqsichiy.

##### Proxy Sirwiq npm Nisqap Lluqsichisqan

Sichus China hatun suyupi llamk'aqkuna llika sasachakuykunawan tupanku chaymanta mana `npm` paquetekunata lluqsichiyta atinkuchu, paykunaqa `https_proxy` muyuriq tikraq churayta atinku proxy sirwiqta ruwanapaq.

Proxy servidor puertoyki `7890` kaqta hapispa, qillqayta atikunki:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kikinmanta Qusqa Contenido

Sichus kikinmanta ruwasqa willayta quyta munanki, ñawpaqta `md/.i18n/htm/ol.yml` llamk'achiy chaymanta `v: //unpkg.com/i18n.site` URL ñawpaq simiykiman tikray, ahinataq `v: //i18n-v.xxx.com` .

`md` sutiyuq qillqana mayt'uman yaykuy hinaspa purichiy

```
i18n.site --htm_conf ol --save
```

otaq pisichasqa simi

```
i18n.site -c ol -s
```

Chaymanta, `md/out/ol/v` willañiqipi kaq kaqninta URL ñawpaq simi ñanman `v:` kaqpi churasqa ruway.

Tukuchanapaq, **`/.v` `1s` tukukuq ñanpa waqaychasqa pachanta wakichiy** , mana hina kaqtinqa, musuq lluqsisqa willaykunamanqa manam chaylla yaykuyta atikunmanchu.

Huk ñankunapaq waqaychasqa pachaqa huk wataman utaq aswanman churasqa kanman mana necesario mañakuykunata pisiyachinapaq.

##### Contenidota s3 Nisqaman Quy

Kikinmanta qunakuypaq, kikin sirwiqniyki llamk'achisqaykimanta `CDN` , huk común akllana `S3` +

[rclone](https://rclone.org) `S3` `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Yuyariy `CDN` wakichiyta, `/.v` kaqpi tukuq ñanpa waqaychasqa pachan `1s` kananpaq, mana hina kaqtinqa, musuq lluqsisqa willaykunamanqa manam chaylla yaykuyta atikunmanchu.

### Web Nisqapi Lluqsichiy

Web kitiqa maypipas churasqa kanman, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) allin akllanakuna kanku.

Imaraykuchus web kiti [huk p'anqayuq ruwana](https://developer.mozilla.org/docs/Glossary/SPA) arquitectura llamk'achin, yuyariy URL ñankunata wakmanta qillqayta mayqinkunachus mana `. ` kaqmanta `index.html` kaqkamachu.

Web kiti yaykuy p'anqa huk kutilla mast'arisqa kanan tiyan, chaymanta mana web kiti yaykuy p'anqata wakmanta mast'ariy tiyanchu qhipa ruwanakuna musuqyachiypaq.

#### github P'anqapi Mast'ariy

Ñawpaqta [github ñit'iy huk tantanakuyta kamanaykipaq](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Chaymanta kay tantanakuypa urayninpi `i18n-demo.github.io` almacén nisqa ruway (ama hina kaspa, `i18n-demo` kamasqayki tantanakuy sutiwan tikray):

![](https://p.3ti.site/1721098657.avif)

Ñawpaq qillqasqapi willayta lluqsichispa, `out/ol/htm` paqarichisqaña Ama hina kaspa, kay qillqana mayt'uman yaykuy hinaspa purichiy :

```
ln -s index.html 404.html
```


`github page` URL ñan musuqmanta qillqayta mana yanapasqanrayku, `404.html` rantinpi llamk'achisqa.

Chaymanta kay kamachiyta `htm` qillqana mayt'upi purichiy (yuyariy `i18n-demo/i18n-demo.github.io.git` kikiykipa almacén direccionninwan tikrayta) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Codigo tanqasqaykimanta, `github page` mast'ariy allinta purinanta suyay (urapi rikuchisqa hina) manaraq chayman yaykuyta atichkaspa.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Demo p'anqapaq ama hina kaspa qhaway:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare P'anqapi Mast'ariy

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` kaqpa mast'ariyninqa aswanta `github page` patamanta mast'ariypi sayasqa.

Huk proyectota ruway hinaspa `i18n-demo.github.io` almacén nisqa hawapi watay.

Chay ruwayqa kay urapi siqipim qawarisqa kachkan:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Ama hina kaspa, `Add Account` ñit'iy `i18n-demo` tantanakuyman yaykuyta qunaykipaq.

Sichus huk tantanakuypa almacénninta watarqanki, iskay kutita `Add Account` ñit'inayki tiyan iskay kutita kamachiypaq manaraq musuq tantanakuy rikuchisqa kachkaptin.

![](https://p.3ti.site/1721118306.avif)

Chaymanta, almacén `i18n-demo.github.io` akllay, chaymanta `Begin setup` ñit'iy, chaymanta qatiq llamkanakunapaq ñawpaqmanta chanikunata llamk'achiy.

![](https://p.3ti.site/1721118490.avif)

Ñawpaq kutita encuadernasqayki qhepamanmi iskay kinsa minutokunata suyanayki manaraq chayman haykushaspa.

Mastarisqamanta qhipaman, huk sapanchasqa kamachiy sutita watayta atikunki.

![](https://p.3ti.site/1721119459.avif)

Sapanchasqa kamachiy sutita watasqamanta, ama hina kaspa kamachiy sutiman riy huk p'anqayuq ruwanap ñan musuqmanta qillqayninta wakichinaykipaq, uraypi rikuchisqa hina:

![](https://p.3ti.site/1721119320.avif)

Hawa siq'ipi kamachiykuna kayhinam, ama hina kaspa, uraypi ñawpaq chirupi `i18n.site` watasqayki kamachiy sutiwan tikray.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Chaymantapas, ama hina kaspa, waqaychasqa kamachiykunata wakichiy, uraypi rikuchisqa hina, chaymanta waqaychasqa unayniyuq kayninta huk killaman churay.

![](https://p.3ti.site/1721125111.avif)

Ama hina kaspa, hawa siq'ipi iskay ñiqin llamk'aypi kamachiy suti tupachiyta tikray, watasqayki kamachiy sutiman.

#### China Hatun Suyupi Web Kiti Mast'ariyta Allinchay

Sichus aswan allin yaykuy ruwayta China hatun suyu llika muyuriqpi tariyta munanki, ama hina kaspa ñawpaqta [huk dominio sutita qillqay](//beian.aliyun.com) .

Chaymanta, + hatun suyupi puyu ranqhaqkunap objeto waqaychayninta llamk'achiy `CDN` Kay qatiq willayta mast'ariy `out/ol/htm` .

Kantu yupayta llamk'achiy atikunki ñanta wakmanta qillqanapaq huk p'anqayuq ruwanakunaman hina ruwanapaq Ejemplopaq, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kayhinata ruwasqa kanman:

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

Imaraykuchus registro `MX` chaymanta registro `CNAME` `A` kuska kawsayta atinkuchu, sichus huk pachallapi dominio suti correo electrónicos chaskiyta munanki `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Chaymanta, imaraykuchus hawa llaqtakunapi t'ikray qullqikuna puyu ranqhaqkuna China hatunpi aswan chaninniyuq kanku, sichus qullqikuna allinchayta munanki, [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) [Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) trafico desviación──Tráfico China hatun suyupi Baidu Cloud `CDN` , internacional tráfico rin cloudflare .

![](https://p.3ti.site/1721119788.avif)

Kay mastariy allinchay allichaykunaqa aswan sasachakuyniyuqmi, hamuq pachapi sapaq capitulokunapi riqsichisqa kanqa.

#### Genérico Dominio Suti Kutichiy

Sichus `i18n.site` llamk'achkanki huk web kitita ruwanapaq hatun web kitiyki hina, aswanta pan-domain kutichiyta wakichinayki tiyan, chaytaq, yaykuyta `*.xxx.com` kaqman ( `www.xxx.com` kaqpi) `xxx.com` kaqman kutichiyta munanki.

Kay mañakuyqa Alibaba Cloud `CDN` `EdgeScript` ( [inglés qillqa](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chino qillqa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) yanapayninwanmi hunt'akunman .

[Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kaqpi kamachiy sutita yapay chaymanta Alibaba Cloud `CDN` kaqpi `*.xxx.com` `CNAME` kamachiy sutita rikuchiy.

![](https://p.3ti.site/1721122000.avif)

Ejemplopaq, pan-dominio suti kutichiy wakichiy `*.i18n.site` kaqmanta kay pata siq'ipi kayhina kachkan:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### nginx Nisqawan Mast'ariy

Ama hina kaspa `out/ol/htm` `server` `/root/i18n/md/out/ol/htm` ruwayta yapay nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Directorio Nisqapa Ruwaynin

#### `public`

Web kitip mana kuyukuq willañiqikuna, ahinataq `favicon.ico` , `robots.txt` , hukkunapas.

Kaypi icono willañiqikunataqa [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

`.i18n` willañiqip urayninpiqa `i18n.site` kaqpa wakichiy willañiqikuna, tikray waqaychasqa, hukkunapas kachkan.Qhaway qatiq rakita ["Wakichiy"](/i18n.site/conf) sut'inchaypaq.

#### `en`

Pukyu simi qillqana mayt'u, `en` `fromTo` `.i18n/conf.yml` wakichiy willañiqiman tupaq

```yaml
i18n:
  fromTo:
    en: zh
```

Ama hina kaspa, tikraypa wakichiyninta qhaway [i18](/i18/use)