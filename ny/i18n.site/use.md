# Ikani &

## Chizindikiro Chosinthira

`i18n.site` `i18` [`i18`](/i18/use)

## Ikani

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Ntchito Yowonetsera

Tiyeni tiyambe ndi projekiti yowonera ndikuphunzira kugwiritsa ntchito `i18n.site`

Choyamba timagwirizanitsa malo owonetsera ndikuyendetsa lamulo motere:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Ogwiritsa ntchito ku China atha:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` `md` `docker`

### Masulira

`zh` , lowetsani `en` `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

`md` kuthamanga, mafayilo omasulira `git add . ` cache adzapangidwa.

### Chiwonetsero Chakumaloko

Ikani `docker` ( `MAC` amalimbikitsa kugwiritsa ntchito [orbstack](https://orbstack.dev) monga nthawi yoyendetsera `docker` ).

Kenako, lowetsani `docker` ndikuyendetsa `./up.sh` , ndiyeno [https://127.0.0.1](https://127.0.0.1) kuwonetsa kwanuko.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Lembani Zomwe Zili

`i18n.site` Imatengera kapangidwe [ka tsamba limodzi](https://developer.mozilla.org/docs/Glossary/SPA) , ndipo tsamba lolowera patsamba ndi zomwe zili patsamba zimatumizidwa paokha.

Pambuyo pomasulira pamwambapa, zolemba za `htm` ndi `v` zidzapangidwa mu bukhu la `md/out/dev`

Apa, `dev` kuti idamangidwa kutengera fayilo ya `.i18n/htm/dev.yml` .

Pansi : `dev`

`htm` pa chikwatucho pali tsamba lolowera patsamba.

`v`

Kuyang'ana kwanuko kudzakopera mafayilo onse ku bukhu la `out/dev/v/0.1.0`

Kuti atulutsidwe mwalamulo, mafayilo osinthidwa adzakopera ku chikwatu cha nambala yatsopano.

#### Gwiritsani Ntchito -c Kuti Mufotokozere Fayilo Yosintha

Mafayilo osinthika osiyanasiyana apanga maulalo ofananira pansi pa `out`

`out/ol` , `.i18n/htm/ol.yml`

`dev.yml` ndi `ol.yml` ndizosintha zosasintha.

`dev` ndi chidule cha `development` , chomwe chimayimira malo otukuka, chimagwiritsidwa ntchito powoneratu, komanso ndi fayilo yosasinthika.
`ol` ndi chidule cha `online` , chomwe chimayimira chilengedwe cha pa intaneti, chimagwiritsidwa ntchito kumasulidwa, komanso ndi fayilo yokhazikika pamene mukusindikiza ku `npm` pogwiritsa ntchito mzere wa lamulo `-n` .

Mutha kupanganso mafayilo ena osinthira `--htm_conf` ntchito pamzere wolamula kuti mufotokozere dzina la fayilo:

Mwachitsanzo:
```
i18n.site --htm_conf yourConfig --save
```

Apa `--save`

#### <a rel=id href="#npm" id="npm"></a> Sindikizani zomwe zili ku npmjs.com

Kusindikiza [zomwe](/i18n.site/feature#ha) zili ku [npmjs.com](//npmjs.com)

##### Kumasulidwa npm login &

Ikani `nodejs` gwiritsani ntchito `npm login` kulowa.

Sinthani `md/.i18n/htm/ol.yml` sinthani `i18n.site` mu `v: //unpkg.com/i18n.site` kukhala yanu `npm` dzina la phukusi.

Ingogwiritsani ntchito dzina la phukusi losagwiritsidwa ntchito pa [npmjs.com](//npmjs.com)

**`//unpkg.com/`** `i18n.site` `/.v` `v:` `npm`

Thamangani `i18n.site --npm` kapena `i18n.site -n` mu `md` kuti mumasulire ndi kufalitsa.

Ngati mumagwiritsa ntchito `~/.npmrc` ophatikizika mosalekeza kuti musindikize, palibe chifukwa choyiyika `nodejs`

Ngati musintha dzina la phukusili mu `v:` `ol.yml` , chonde **onetsetsani kuti mwachotsa `.i18n/v/ol` kaye** ndikusindikiza.

##### Seva Ya Proxy Yofalitsidwa Ndi npm

Ngati ogwiritsa ntchito aku China akumakumana ndi zovuta pamanetiweki ndipo sangathe kusindikiza phukusi `https_proxy` `npm`

Pongoganiza kuti doko la seva yanu ya proxy ndi `7890` mutha kulemba:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Zodzipangira Nokha

Ngati mukufuna kudzipangira nokha zomwe zili, choyamba, `md/.i18n/htm/ol.yml` ndikusintha `v: //unpkg.com/i18n.site` kukhala prefix yanu ya URL, monga `v: //i18n-v.xxx.com` .

Lowani `md` ndi kuthamanga

```
i18n.site --htm_conf ol --save
```

kapena chidule

```
i18n.site -c ol -s
```

Kenako, sinthani zomwe zili mu chikwatu `v:` `md/out/ol/v`

Pomaliza, **konzekerani nthawi ya cache ya njira `/.v` imathera ku `1s`** , apo ayi zomwe zangotulutsidwa kumene sizingapezeke nthawi yomweyo.

Nthawi ya cache ya njira zina ikhoza kukhazikitsidwa chaka chimodzi kapena kuposerapo kuti muchepetse zopempha zosafunikira.

##### Khazikitsani Zomwe Zili Ku s3

Kudzipangira nokha, kuwonjezera pakugwiritsa ntchito seva yanu, `CDN` ina yodziwika ndikugwiritsa + `S3`

`S3` kugwiritsa ntchito seva `S3` Login [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kumbukirani kukonza `CDN` kotero kuti nthawi ya cache ya njira yomwe imathera `/.v` ndi `1s` , apo ayi simudzatha kupeza zomwe zatulutsidwa kumene nthawi yomweyo.

### Sindikiza Tsamba

Tsambali litha kutumizidwa kulikonse [github page](https://pages.github.com) ndipo [cloudflare page](https://pages.cloudflare.com) ndi zosankha zabwino.

Chifukwa tsambalo limatengera kapangidwe ka [tsamba limodzi](https://developer.mozilla.org/docs/Glossary/SPA) , kumbukirani kulembanso njira ya URL `index.html` ilibe `. `

Tsamba lolowera webusayiti limangofunika kutumizidwa kamodzi, ndipo palibe chifukwa chotumiziranso tsamba lolowera patsambalo pazosintha zina.

#### Ikani Patsamba La github

Choyamba [dinani github kuti mupange bungwe](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Kenako pangani nyumba yosungiramo zinthu pansi pa `i18n-demo.github.io` (Chonde sinthani `i18n-demo` ndi dzina la bungwe lomwe mudapanga):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Mukasindikiza zomwe zili munkhani yapitayi, : `out/ol/htm`

```
ln -s index.html 404.html
```


Chifukwa `github page` sichigwirizana ndi kulembedwanso kwa njira ya URL, kotero `404.html` imagwiritsidwa ntchito m'malo mwake.

: yendetsani `i18n-demo/i18n-demo.github.io.git` ili mu bukhu la `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Mukakankhira code, dikirani kuti kutumizidwa kwa `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Patsamba lachiwonetsero chonde onani:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ikani Pa Tsamba La cloudflare

[cloudflare page](//pages.cloudflare.com) ndi `github page` imapereka njira yolemberanso ndipo ndi yabwino ku China ndipo ndiyosavuta kugwiritsa ntchito.

`cloudflare page` `github page`

Pangani projekiti ndikumanga zomwe zili pamwambapa `i18n-demo.github.io`

Njirayi ikuwonetsedwa pachithunzi pansipa:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Chonde `i18n-demo` `Add Account`

Ngati mwamanga nyumba yosungiramo katundu ya bungwe lina, mungafunike `Add Account` kawiri kuti muvomereze kawiri bungwe latsopanolo lisanawonetsedwe.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Kenako sankhani Nyumba yosungiramo `i18n-demo.github.io` , kenako dinani `Begin setup` , ndikugwiritsa ntchito zosintha zosasinthika pazotsatira.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Mukamanga koyamba, muyenera kudikirira mphindi zingapo musanayipeze.

Pambuyo potumiza, mutha kumangirira dzina lachidziwitso.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Mukamanga dzina lachidziwitso, chonde pitani ku domain name kuti mukonzenso njira yolemberanso tsamba limodzi, monga momwe zilili pansipa:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Malamulo omwe ali pachithunzi pamwambapa ali `i18n.site` .

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

Kuonjezera apo, chonde sungani malamulo a cache, monga momwe tawonetsera pansipa, ndipo ikani nthawi ya cache kwa mwezi umodzi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Chonde sinthani dzina laling'ono lofananira mu gawo lachiwiri pachithunzi pamwambapa kukhala dzina lachidabwi chomwe mwamanga.

#### Kupititsa Patsogolo Kutumizidwa Kwamasamba Ku Mainland China

Ngati mukufuna kukhala ndi mwayi wopezeka bwino pamanetiweki aku China, chonde [lembani dzina la domain](//beian.aliyun.com) kaye.

Kenako, gwiritsani ntchito kusungirako `out/ol/htm` kwa ogulitsa mitambo ku `CDN` +

Mutha kugwiritsa ntchito komputa yam'mphepete kuti mulembenso njira yosinthira ku mapulogalamu atsamba limodzi, monga [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Itha kukonzedwa motere:

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

`MX` zolemba ndi `CNAME` zolembedwa sizingakhalepo, ngati mukufuna kulandira maimelo a mayina nthawi imodzi, muyenera kugwirizana ndi `A` `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Kuphatikiza apo, chifukwa mtengo wamagalimoto akunja kwa ogulitsa mitambo ku China ndi okwera mtengo, ngati mukufuna kuwongolera ndalama, mutha kugwiritsa ntchito [Huawei Cloud DNS resolution yaulere](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ndi dzina lachidambo la [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (monga momwe tawonetsera pansipa) kuti mukwaniritse kusokoneza magalimoto──Magalimoto ku China Baidu Cloud `CDN` magalimoto apadziko lonse amapita cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Mayankho okhathamiritsa awa ndi ovuta kwambiri ndipo adzafotokozedwa m'mitu yosiyana mtsogolo.

#### Generic Domain Name Redirection

Ngati mugwiritsa `i18n.site` kuti mupange tsamba lanu ngati tsamba lanu lalikulu, nthawi zambiri mumafunika kukonza mayendedwe a pan-domain, ndiye kuti, kuwongoleranso `*.xxx.com` (kuphatikiza `www.xxx.com` ) kufikira `xxx.com` .

Chofunikirachi chitha kukwaniritsidwa mothandizidwa ndi `EdgeScript` Alibaba Cloud `CDN` [chikalata cha](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) [Chingerezi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) /

Onjezani dzina la domain mu [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ndikulozera dzina `*.xxx.com` domain ku Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Mwachitsanzo, kasinthidwe ka dzina la pan-domain pa chithunzi pamwambapa ndi `*.i18n.site` :

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Tumizani Ndi nginx

Chonde onjezani masinthidwe ofanana ndi awa `server` nginx pomwe `/root/i18n/md/out/ol/htm` chonde sinthani njira ya polojekiti yanu `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Kapangidwe Ka Kalozera

#### Anthu Onse

Mafayilo osasunthika awebusayiti, monga `favicon.ico` `robots.txt` , ndi zina.

Mafayilo azithunzi apa amatha kupangidwa ndi [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Pansi pa chikwatucho pali mafayilo osinthira a `i18n.site` , kache yomasulira, ndi zina zambiri `.i18n` Onani mutu wotsatira ["Kukonzekera"](/i18n.site/conf) kuti mumve zambiri.

#### en

Chikwatu cha chilankhulo choyambira, chogwirizana `.i18n/conf.yml` `fromTo` `en` mufayilo yosinthira

```yaml
i18n:
  fromTo:
    en: zh
```

Chonde onani kasinthidwe ka kumasulira [i18](/i18/use)

