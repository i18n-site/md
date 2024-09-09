# Ikani &

## Chizindikiro Chosinthira

`i18n.site` ili ndi chida chomasulira cha `i18` Chonde [dinani apa kuti muwone zolemba `i18` kuti mukonze chizindikiro chofikira](/i18/use) .

## Ikani

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Ntchito Yowonetsera

Tiyeni tiyambe ndi ntchito yowonetsera kuti tiphunzire kugwiritsa ntchito `i18n.site` .

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

Dzina lachikwatu la `demo.i18n.site` code base clone liyenera kukhala `md` kuti muthandizire kuwoneratu kwanuko ndi `docker` .

### Masulira

Choyamba, lowetsani bukhu la `md` ndikuyendetsa `i18n.site` , lomwe lidzamasulira `en` mpaka `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

`md` kuthamanga, `git add . ` omasulira ndi cache adzapangidwa.

### Chiwonetsero Chakumaloko

Ikani ndikuyamba `docker` ( `MAC` wosuta amalimbikitsa kugwiritsa ntchito [orbstack](https://orbstack.dev) monga nthawi yoyendetsera `docker` ).

Kenako, lowetsani chikwatu `docker` ndikuyendetsa `./up.sh` , ndiyeno [https://127.0.0.1](https://127.0.0.1) kuwonetsa kwanuko.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Lembani Zomwe Zili

`i18n.site` imatengera kapangidwe [ka tsamba limodzi](https://developer.mozilla.org/docs/Glossary/SPA) , ndipo tsamba lolowera webusayiti ndi zomwe zili patsamba zimayikidwa paokha.

Mukatha kumasulira pamwambapa, maupangiri `htm` ndi `v` adzapangidwa pansi pa chikwatu cha `md/out/dev` .

Apa, `dev` amatanthauza kuti idamangidwa kutengera fayilo ya `.i18n/htm/dev.yml` .

`dev` directory :

Chikwatu `htm` ndiye tsamba lolowera patsamba.

Chikwatu cha `v` chili ndi masamba awebusayiti okhala ndi manambala amtundu.

Kuwoneratu kwanuko sikusamala za nambala yamtunduwu ndipo kumatengera mafayilo onse ku `out/dev/v/0.1.0` .

Kuti amasulidwe, mafayilo osinthidwa adzakopera ku chikwatu cha nambala yatsopano.

#### Gwiritsani Ntchito -c Kuti Mufotokozere Fayilo Yosinthira

Mafayilo osinthika osiyanasiyana apanga maulalo ofananira mu chikwatu cha `out` .

Mwachitsanzo, `.i18n/htm/ol.yml` ipanga chikwatu cha `out/ol` .

`dev.yml` ndi `ol.yml` ndi masinthidwe osasinthika.

`dev` ndi chidule cha `development` , kusonyeza malo otukuka, omwe amagwiritsidwa ntchito poyang'ana m'deralo, komanso ndi fayilo yosasinthika.
`ol` ndi chidule cha `online` , `-n` malo a pa intaneti, omwe amagwiritsidwa ntchito kuti atulutsidwe `npm` .

Mutha kupanganso mafayilo ena osinthira Gwiritsani ntchito `--htm_conf` pamzere wolamula kuti mutchule dzina lafayilo yoti mugwiritse ntchito:

Mwachitsanzo:
```
i18n.site --htm_conf yourConfig --save
```

Apa `--save` ikuyimira nambala yosinthidwa yotulutsidwa.

#### <a rel=id href="#npm" id="npm"></a> Sindikizani zomwe zili ku npmjs.com

Kusindikiza [zomwe](/i18n.site/feature#ha) zili ku [npmjs.com](//npmjs.com)

##### Kumasulidwa npm login &

Ikani `nodejs` , lowani ndi `npm login` .

Sinthani `md/.i18n/htm/ol.yml` ndikusintha `i18n.site` mu `v: //unpkg.com/i18n.site` kukhala dzina lanu la phukusi `npm` .

Ingogwiritsani ntchito dzina la phukusi losagwiritsidwa ntchito pa [npmjs.com](//npmjs.com)

Mukasindikiza potengera phukusi `npm` , **onetsetsani kuti mwagwiritsa ntchito `//unpkg.com/` pachiyambi** cha `v:` mtengo `i18n.site` mwakonza mwapadera nthawi yosungiramo `/.v` pansi panjira iyi kuti mukwaniritse zotulutsa zatsopano.

Thamangani `i18n.site --npm` kapena `i18n.site -n` mu chikwatu `md` kuti mumasulire ndi kufalitsa.

Ngati mumagwiritsa ntchito malo ophatikizika mosalekeza kuti musindikize, palibe chifukwa choyikira `nodejs` Ingotengerani zilolezo zolowa ndikusindikiza `~/.npmrc` ku chilengedwe.

Ngati musintha dzina la phukusi la `v:` mu `ol.yml` , chonde **onetsetsani kuti mwachotsa `.i18n/v/ol` kaye** kenako ndikusindikiza.

##### Seva Ya Proxy Yosindikizidwa Ndi npm

Ngati ogwiritsa ntchito ku China akumakumana ndi zovuta pamanetiweki ndipo akulephera kusindikiza ma phukusi `npm` , atha kuyika kusintha kwa chilengedwe `https_proxy` kuti akonze seva ya proxy.

Pongoganiza kuti doko la seva yanu ya proxy ndi `7890` , mutha kulemba:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Zodzipangira Nokha

Ngati mukufuna kudzipangira nokha zomwe zili, choyamba sinthani `md/.i18n/htm/ol.yml` ndikusintha `v: //unpkg.com/i18n.site` kukhala prefix yanu ya URL, monga `v: //i18n-v.xxx.com` .

Lowetsani chikwatu `md` ndikuyendetsa

```
i18n.site --htm_conf ol --save
```

kapena chidule

```
i18n.site -c ol -s
```

Kenako, sinthani zomwe zili mu bukhu la `md/out/ol/v` kupita ku njira yachiyambi ya URL yokhazikitsidwa mu `v:` .

Pomaliza, **konzekerani nthawi ya cache ya njira yomwe imathera `/.v` mpaka `1s`** , apo ayi zomwe zangotulutsidwa kumene sizingapezeke nthawi yomweyo.

Nthawi ya cache ya njira zina ikhoza kukhazikitsidwa chaka chimodzi kapena kuposerapo kuti muchepetse zopempha zosafunikira.

##### Khazikitsani Zomwe Zili Ku s3

Kudzipangira nokha, kuwonjezera pa kugwiritsa ntchito seva yanu, njira ina yodziwika ndikugwiritsa `CDN` `S3` + .

Mutha kugwiritsa ntchito [rclone](https://rclone.org) kuti mulowe ku seva ya `S3` , kenako tchulani ndikusintha script yotsatirayi, ndikungotengera zosinthazo ku `S3` pakumasulidwa kulikonse.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Kumbukirani kukonza `CDN` kuti nthawi ya cache ya njira yomwe imathera mu `/.v` ndi `1s` , mwinamwake zomwe zangotulutsidwa kumene sizingapezeke mwamsanga.

### Sindikiza Tsamba

Tsambali litha kutumizidwa kulikonse [github page](https://pages.github.com) ndipo [cloudflare page](https://pages.cloudflare.com) ndi zosankha zabwino.

Chifukwa tsambalo limagwiritsa ntchito kapangidwe [ka tsamba limodzi](https://developer.mozilla.org/docs/Glossary/SPA) , kumbukirani kulembanso njira za URL zomwe zilibe `. ` mpaka `index.html` .

Tsamba lolowera patsamba limangofunika kutumizidwa kamodzi, ndipo palibe chifukwa chotumiziranso tsamba lolowera webusayiti kuti lizisinthidwanso.

#### Ikani Patsamba La github

Choyamba [dinani github kuti mupange bungwe](https://github.com/account/organizations/new?plan=free) Dzina lotsatirali ndi `i18n-demo` monga chitsanzo.

Kenako pangani nyumba yosungiramo `i18n-demo.github.io` pansi pa bungwe ili (chonde sinthani `i18n-demo` ndi dzina la bungwe lomwe mudapanga):

![](https://p.3ti.site/1721098657.avif)

Mukasindikiza zomwe zili m'nkhani yapitayi, `out/ol/htm` yapangidwa :

```
ln -s index.html 404.html
```


Chifukwa `github page` sichigwirizana ndi njira yolemberanso URL, `404.html` imagwiritsidwa ntchito m'malo mwake.

Kenako yendetsani lamulo ili m'ndandanda wa `htm` (kumbukirani kusintha `i18n-demo/i18n-demo.github.io.git` ndi adilesi yanu yosungiramo zinthu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Mukakankhira kachidindo, dikirani kuti kutumizidwa kwa `github page` kuyende bwino (monga momwe tawonetsera pansipa) musanayipeze.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Patsamba lachiwonetsero chonde onani:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Ikani Pa Tsamba La cloudflare

[cloudflare page](//pages.cloudflare.com) ndi `github page` , imapereka njira yolemberanso ndipo ndi yabwino kwambiri ku China ndipo imapezeka mosavuta.

Kutumiza kwa `cloudflare page` nthawi zambiri kumatengera kutumizidwa kwa `github page` pamwambapa.

Pangani projekiti ndikumanga nyumba yosungiramo `i18n-demo.github.io` pamwambapa.

Njirayi ikuwonetsedwa pachithunzi pansipa:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Chonde dinani `Add Account` kuti mupereke mwayi ku bungwe `i18n-demo` .

Ngati mwamanga nyumba yosungiramo katundu ya bungwe lina, mungafunike kudina `Add Account` kawiri kuti muvomereze kawiri bungwe latsopanoli lisanawonetsedwe.

![](https://p.3ti.site/1721118306.avif)

Kenako, sankhani nyumba yosungiramo katundu `i18n-demo.github.io` , kenako dinani `Begin setup` , ndipo gwiritsani ntchito zikhalidwe zosasinthika pazotsatira.

![](https://p.3ti.site/1721118490.avif)

Mukamanga kwa nthawi yoyamba, muyenera kudikirira mphindi zingapo musanayipeze.

Pambuyo potumiza, mutha kumangirira dzina lachidziwitso.

![](https://p.3ti.site/1721119459.avif)

Mukamanga dzina lachidziwitso, chonde pitani ku domain name kuti mukonzenso njira yolemberanso tsamba limodzi, monga momwe zilili pansipa:

![](https://p.3ti.site/1721119320.avif)

`i18n.site` omwe ali pachithunzi pamwambapa ali motere.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Kuonjezera apo, chonde sungani malamulo a cache, monga momwe tawonetsera pansipa, ndipo ikani nthawi ya cache kwa mwezi umodzi.

![](https://p.3ti.site/1721125111.avif)

Chonde sinthani dzina laling'ono lofananira mu gawo lachiwiri pachithunzi pamwambapa kukhala dzina lamalo omwe mwamanga.

#### Kupititsa Patsogolo Kutumizidwa Kwamasamba Ku Mainland China

Ngati mukufuna kukhala ndi mwayi wopezeka bwino pamanetiweki aku China, chonde [lembani dzina la domain](//beian.aliyun.com) kaye.

Kenako, gwiritsani ntchito kusungirako zinthu kwa ogulitsa mitambo ku + `CDN` Gwiritsani ntchito zotsatirazi `out/ol/htm` .

Mutha kugwiritsa ntchito komputa yam'mphepete kuti mulembenso njira kuti mugwirizane ndi mapulogalamu atsamba limodzi Mwachitsanzo, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) ikhoza kukhazikitsidwa motere:

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

Chifukwa mbiri `MX` ndi mbiri `CNAME` sizingakhalepo, ngati mukufuna kulandira maimelo a mayina amtundu nthawi imodzi, muyenera kugwirizana ndi [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) mpaka `CNAME` kukhala mbiri `A` .

Kuphatikiza apo, chifukwa mtengo wamagalimoto akunja kwa ogulitsa mitambo ku China ndi okwera mtengo, ngati mukufuna kuwongolera ndalama, mutha kugwiritsa ntchito [Huawei Cloud DNS resolution yaulere](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ndi dzina lachidambo la [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (monga momwe tawonetsera pansipa) kuti mukwaniritse kusokoneza magalimoto──Magalimoto ku China Baidu Cloud `CDN` , magalimoto apadziko lonse amapita cloudflare .

![](https://p.3ti.site/1721119788.avif)

Mayankho okhathamiritsa awa ndi ovuta kwambiri ndipo adzafotokozedwa m'mitu yosiyana mtsogolo.

#### Generic Domain Name Redirection

Ngati mumagwiritsa ntchito `i18n.site` kuti mupange tsamba lanu ngati tsamba lanu lalikulu, nthawi zambiri mumayenera kukonza kuwongolera kwa pan-domain, ndiko kuti, kulozeranso mwayi wopita ku `*.xxx.com` (kuphatikiza `www.xxx.com` ) mpaka `xxx.com` .

Izi zitha kukwaniritsidwa mothandizidwa ndi Alibaba Cloud `CDN` `EdgeScript` ( [Chikalata cha Chingerezi](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chikalata cha Chitchaina](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Onjezani dzina la domain mu [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) ndikulozera dzina lachidziwitso `*.xxx.com` mpaka `CNAME` mu Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Mwachitsanzo, kasinthidwe ka dzina la pan-domain redirection la `*.i18n.site` pachithunzi pamwambapa ndi motere:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Tumizani Ndi nginx

Chonde onjezani masinthidwe ofanana ndi `/root/i18n/md/out/ol/htm` mu ndime `server` `out/ol/htm` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Kapangidwe Ka Ndandanda

#### `public`

Mafayilo osasunthika awebusayiti, monga `favicon.ico` , `robots.txt` , ndi zina.

Mafayilo azithunzi apa amatha kupangidwa ndi [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Pansi pa chikwatu cha `.i18n` pali mafayilo osinthira, kache yomasulira, ndi zina zambiri za `i18n.site` Onani mutu wotsatira ["Kukonzekera"](/i18n.site/conf) kuti mudziwe zambiri.

#### `en`

Chikwatu cha chilankhulo chochokera, chofanana ndi `en` mwa `fromTo` mu fayilo yosinthira `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Chonde onani kasinthidwe ka kumasulira [i18](/i18/use)