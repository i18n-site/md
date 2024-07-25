# संस्थापनं कुर्वन्तु &

## विन्यास टोकन

`i18` अनुवादसाधनं एम्बेडेड् अस्ति, कृपया [अत्र क्लिक् कृत्वा प्रवेशटोकनं विन्यस्तुं `i18` दस्तावेजं सन्दर्भयन्तु](/i18/use) `i18n.site`

## प्रतिस्था

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## डेमो परियोजना

एकेन डेमो प्रोजेक्ट् इत्यनेन आरभ्य उपयोगं कथं कर्तव्यमिति ज्ञातव्यम् `i18n.site`

वयं प्रथमं demo repository इत्यस्य clone कृत्वा command इत्येतत् निम्नलिखितरूपेण चालयामः ।

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

मुख्यभूमिचीनदेशे उपयोक्तारः :

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` इत्यनेन सह स्थानीयपूर्वावलोकनस्य सुविधायै कोड आधारक्लोनस्य निर्देशिकानाम `md` भवितुमर्हति `demo.i18n.site`

### अनुवदति

प्रथमं `md` प्रविश्य `i18n.site` चालयन्तु, यत् `en` इत्यस्य अनुवादं `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

चालनस्य अनन्तरं अनुवादः, संग्रहणसञ्चिकाः च उत्पद्यन्ते, कृपया तान् निर्देशिकायां `git add . ` भण्डारे योजयितुं स्मर्यताम् `md`

### स्थानीय पूर्वावलोकन

संस्थाप्य आरभत `docker` ( `MAC` `docker` इत्यस्य रनटाइम्रूपेण [orbstack](https://orbstack.dev) इत्यस्य उपयोगं अनुशंसन्ति) ।

ततः, `docker` निर्देशिकां प्रविश्य `./up.sh` चालयन्तु, ततः स्थानीयरूपेण पूर्वावलोकनार्थं [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### सामग्री पोस्ट करें

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

उपर्युक्तं अनुवादं चालयित्वा, `htm` तथा `v` निर्देशिकाः `md/out/dev`

अत्र, `dev` `.i18n/htm/dev.yml` सञ्चिकायाः ​​आधारेण निर्मितम् इति सूचयति ।

`dev` :

`htm` निर्देशिकायाः ​​अधः जालपुटस्य प्रवेशपृष्ठम् अस्ति ।

`v` निर्देशिकायां संस्करणसङ्ख्यासहितं वेबसाइट् सामग्री अस्ति ।

स्थानीयपूर्वावलोकनं संस्करणसङ्ख्यां न कृत्वा सर्वाणि सञ्चिकानि `out/dev/v/0.1.0`

आधिकारिकविमोचनार्थं परिवर्तिताः सञ्चिकाः नूतनसंस्करणसङ्ख्यानिर्देशिकायां प्रतिलिपिताः भविष्यन्ति ।

#### विन्याससञ्चिकां निर्दिष्टुं -c इत्यस्य उपयोगं कुर्वन्तु

विभिन्नाः विन्याससञ्चिकाः निर्देशिकायाः ​​अधः तत्सम्बद्धानि निर्देशिकाः निर्मास्यन्ति `out`

`out/ol` , `.i18n/htm/ol.yml`

`dev.yml` `ol.yml` च पूर्वनिर्धारितविन्यासाः सन्ति ।

`dev` `development`
`online` इत्यस्य संक्षिप्तनाम `ol` , यत् ऑनलाइन वातावरणं प्रतिनिधियति, आधिकारिकविमोचनार्थं उपयुज्यते, तथा च `npm` आदेशपङ्क्तिपैरामीटर् `-n` उपयोगेन) प्रकाशने पूर्वनिर्धारितविन्याससञ्चिका अपि अस्ति ।

अन्याः विन्याससञ्चिकाः अपि निर्मातुं शक्नुवन्ति विन्याससञ्चिकानाम निर्दिष्टुं आदेशपङ्क्तौ `--htm_conf`

उदाहरणतया:
```
i18n.site --htm_conf yourConfig --save
```

अत्र `--save` अद्यतनविमोचनसंस्करणसङ्ख्यां सूचयति ।

#### <a rel=id href="#npm" id="npm"></a> npmjs.com इत्यत्र सामग्रीं प्रकाशयन्तु

[npmjs.com](//npmjs.com)[​](/i18n.site/feature#ha)

##### npm login & मोचनम्‌

`nodejs` प्रवेशार्थं `npm login` इत्यस्य उपयोगं कुर्वन्तु ।

सम्पादयन्तु `md/.i18n/htm/ol.yml` `v: //unpkg.com/i18n.site` मध्ये `i18n.site` स्वस्य `npm` संकुलनाम) परिवर्तयन्तु ।

केवलं रिक्तं संकुलनामस्य उपयोगं कुर्वन्तु संकुलनामरूपेण वेबसाइट् डोमेननामस्य उपयोगः उत्तमः विकल्पः अस्ति [npmjs.com](//npmjs.com)

`npm` `/.v` आधारेण `i18n.site` कुर्वन्, `v:` मूल्यस्य उपसर्गरूपेण **`//unpkg.com/` उपयोगं अवश्यं कुर्वन्तु** ।

अनुवादं प्रकाशयितुं च `md` निर्देशिकायां `i18n.site --npm` अथवा `i18n.site -n` चालयन्तु ।

यदि भवान् प्रकाशनार्थं निरन्तरं एकीकरणवातावरणस्य उपयोगं करोति तर्हि तस्य संस्थापनस्य आवश्यकता नास्ति केवलं लॉग-इन-प्रकाशित-अनुमतिम् `~/.npmrc` वातावरणे प्रतिलिख्यताम् `nodejs`

यदि भवान् `v:` in `ol.yml` संकुलनाम परिवर्तयति तर्हि **प्रथमं `.i18n/v/ol` अवश्यं विलोपयतु** ततः प्रकाशयतु ।

##### npm द्वारा प्रकाशितः प्रॉक्सी सर्वरः

यदि मुख्यभूमिचीनदेशे उपयोक्तारः संजालसमस्यानां सामनां कुर्वन्ति तथा च `npm` संकुलं प्रकाशयितुं असमर्थाः सन्ति तर्हि ते प्रॉक्सीसर्वरं विन्यस्तुं वातावरणचरं `https_proxy` सेट् कर्तुं शक्नुवन्ति ।

भवतः प्रॉक्सी सर्वर पोर्ट् `7890` इति कल्पयित्वा भवान् लिखितुं शक्नोति:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### स्वयमेव आतिथ्यं कृत्वा सामग्री

यदि भवान् सामग्रीं स्वयमेव आतिथ्यं कर्तुम् इच्छति तर्हि प्रथमं `md/.i18n/htm/ol.yml` तथा च `v: //unpkg.com/i18n.site` परिवर्तनं स्वस्य URL उपसर्गं प्रति, यथा `v: //i18n-v.xxx.com` ।

`md` निर्देशिकां प्रविश्य चालयन्तु

```
i18n.site --htm_conf ol --save
```

संक्षेपः वा

```
i18n.site -c ol -s
```

ततः, `md/out/ol/v` निर्देशिकायां सामग्रीं `v:` मध्ये सेट् कृतं URL उपसर्गमार्गं प्रति विन्यस्यताम् ।

**`1s` , `/.v`**

अन्यमार्गाणां कृते सञ्चयसमयः एकवर्षं वा अधिकं वा सेट् कर्तुं शक्यते यत् अनावश्यकं अनुरोधं न्यूनीकर्तुं शक्यते ।

##### s3 कृते सामग्रीं होस्ट् कुर्वन्तु

सामग्रीं `CDN` होस्ट् कर्तुं + स्वस्य सर्वरस्य उपयोगस्य अतिरिक्तं, अन्यः सामान्यः विकल्पः अस्ति `S3`

`S3` [rclone](https://rclone.org) `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`CDN` विन्यस्तुं स्मर्यताम्, येन `/.v` इत्यनेन समाप्तस्य मार्गस्य संग्रहसमयः `1s` भवति, अन्यथा भवन्तः तत्क्षणमेव नवविमोचितसामग्रीम् अभिगन्तुं न शक्नुवन्ति ।

### वेबसाइट प्रकाशित करें

वेबसाइट् कुत्रापि नियोजितुं शक्यते, तथा च [cloudflare page](https://pages.cloudflare.com) उत्तमाः विकल्पाः सन्ति [github page](https://pages.github.com)

यतः वेबसाइट् [एकपृष्ठीयस्य अनुप्रयोगस्य](https://developer.mozilla.org/docs/Glossary/SPA) आर्किटेक्चरं स्वीकुर्वति , यत् URL मार्गं पुनः लिखितुं स्मर्यताम् यस्मिन् `index.html` इति `. `

वेबसाइट् प्रविष्टिपृष्ठं केवलं एकवारं परिनियोजितुं आवश्यकं भवति, अनन्तरं सामग्री-अद्यतनार्थं वेबसाइट्-प्रविष्टि-पृष्ठस्य पुनः परिनियोजनस्य आवश्यकता नास्ति ।

#### github पृष्ठे परिनियोजयन्तु

प्रथमं [संस्थां निर्मातुं अत्र क्लिक् github](https://github.com/account/organizations/new?plan=free) `i18n-demo`

ततः अस्य संस्थायाः अन्तर्गतं गोदामं रचयन्तु `i18n-demo.github.io` (कृपया भवता निर्मितस्य संस्थायाः नामेन `i18n-demo` प्रतिस्थापयन्तु):

<img alt="" src="https://p.3ti.site/1721098657.avif">

पूर्वलेखे सामग्रीं प्रकाशयन्ते सति, सा उत्पन्ना `out/ol/htm` कृपया एतत् निर्देशिकां प्रविश्य चालयन्तु :

```
ln -s index.html 404.html
```


यतः `github page` URL मार्गपुनर्लेखनस्य समर्थनं न करोति, अतः तस्य स्थाने `404.html` इत्यस्य उपयोगः भवति ।

ततः `htm` निर्देशिकायां निम्नलिखितम् आदेशं चालयन्तु ( `i18n-demo/i18n-demo.github.io.git` इत्यस्य स्थाने स्वस्य गोदामपतेः स्थापयितुं स्मर्यताम्) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

कोडं धक्काय, `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

डेमो पृष्ठस्य कृते कृपया पश्यन्तु:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### cloudflare पृष्ठे परिनियोजयन्तु

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` परिनियोजनं प्रायः उपरि `github page` इत्यस्य परिनियोजनस्य आधारेण भवति ।

एकं परियोजनां रचयन्तु तथा उपर्युक्तं गोदामं बन्धयन्तु `i18n-demo.github.io`

प्रक्रिया अधोलिखिते चित्रे दर्शिता अस्ति : १.
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

`i18n-demo` संस्थायां प्रवेशं दातुं कृपया क्लिक् कुर्वन्तु `Add Account`

यदि भवान् अन्यस्य संस्थायाः गोदामस्य बाध्यं कृतवान् अस्ति तर्हि नूतनसङ्गठनस्य प्रदर्शनात् पूर्वं द्विवारं अधिकृत्य `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

तदनन्तरं `i18n-demo.github.io` Warehouse इति चिनोतु, ततः `Begin setup` नुदतु, अनन्तरं चरणानां कृते पूर्वनिर्धारितमूल्यानां उपयोगं कुर्वन्तु ।

<img alt="" src="https://p.3ti.site/1721118490.avif">

प्रथमवारं बन्धनस्य अनन्तरं भवन्तः तत् प्राप्तुं शक्नुवन्ति ततः पूर्वं कतिपयानि निमेषाणि प्रतीक्षितुम् अर्हन्ति ।

परिनियोजनानन्तरं भवान् कस्टम् डोमेन् नाम बाइण्ड् कर्तुं शक्नोति ।

<img alt="" src="https://p.3ti.site/1721119459.avif">

कस्टम् डोमेन् नाम बाइण्ड् कृत्वा, कृपया एकपृष्ठीय-अनुप्रयोगस्य मार्ग-पुनर्लेखनं विन्यस्तुं डोमेन्-नाम प्रति गच्छन्तु, यथा अधः दर्शितम् अस्ति:

<img alt="" src="https://p.3ti.site/1721119320.avif">

उपरि चित्रे नियमाः निम्नलिखितरूपेण सन्ति `i18n.site`

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

तदतिरिक्तं, कृपया अधः दर्शितवत्, सञ्चयनियमान् विन्यस्यताम्, सञ्चयस्य अवधिं च एकमासम् इति सेट् कुर्वन्तु ।

<img alt="" src="https://p.3ti.site/1721125111.avif">

कृपया उपरि चित्रे द्वितीयपदे डोमेननाममेलनं भवता बाध्यं डोमेननाम परिवर्तयन्तु ।

#### मुख्यभूमिचीनदेशे वेबसाइट् परिनियोजनस्य अनुकूलनं

यदि भवान् मुख्यभूमिचीनस्य संजालवातावरणे उत्तमं सुलभताप्रदर्शनं प्राप्तुम् इच्छति तर्हि प्रथमं [डोमेननाम पञ्जीकरणं कुर्वन्तु](//beian.aliyun.com) ।

ततः `CDN` मुख्यभूमिचीनदेशे मेघविक्रेतृणां `out/ol/htm` उपयोगं कुर्वन्तु +

एकपृष्ठीय-अनुप्रयोगानाम् अनुकूलतायै मार्गं पुनः लिखितुं भवान् एज-गणनायाः उपयोगं कर्तुं शक्नोति, यथा [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

तदतिरिक्तं, यतोहि मुख्यभूमिचीनदेशे क्लाउड्विक्रेतृणां विदेशेषु यातायातशुल्कं तुल्यकालिकरूपेण महत् भवति, यदि भवान् व्ययस्य अनुकूलनं कर्तुम् इच्छति तर्हि भवान् [Huawei DNS स्य निःशुल्कं भौगोलिकसंकल्पं](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) तथा [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's कस्टम् डोमेननाम (यथा अधः दर्शितम्) उपयोक्तुं शक्नोति traffic diversion──मुख्यभूमि चीन Baidu मेघे यातायात `CDN` अन्तर्राष्ट्रीय यातायात cloudflare गच्छति .

<img alt="" src="https://p.3ti.site/1721119788.avif">

एते परिनियोजन-अनुकूलन-समाधानाः अधिकजटिलाः सन्ति, भविष्ये पृथक्-पृथक् अध्यायेषु प्रवर्तयिष्यन्ते ।

#### सामान्य डोमेन नाम पुनर्निर्देशन

`*.xxx.com` `www.xxx.com` `i18n.site` `xxx.com`

अलीबाबा क्लाउड् इत्यस्य `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) इत्यस्य साहाय्येन एषा आवश्यकता प्राप्तुं शक्यते `CDN`

[अलीबाबा CDN](https://cdn.console.aliyun.com/domain/list) मध्ये डोमेन् नाम योजयन्तु तथा च `*.xxx.com` नाम अलीबाबा क्लाउड् `CDN` इत्यस्य `CNAME` मध्ये सूचयन्तु ।

<img alt="" src="https://p.3ti.site/1721122000.avif">

यथा, उपरि चित्रे `*.i18n.site` इत्यस्य pan-domain name redirection configuration इत्येतत् निम्नलिखितम् अस्ति ।

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx इत्यनेन सह परिनियोजयन्तु

`server` nginx `/root/i18n/md/out/ol/htm` `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### निर्देशिका संरचना

#### सार्वजनिक

जालस्थलस्य स्थिरसञ्चिकाः, यथा `favicon.ico` `robots.txt` , इत्यादयः ।

अत्र चिह्नसञ्चिकाः [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` निर्देशिकायाः ​​अधः `i18n.site` 's विन्याससञ्चिकाः, अनुवादसञ्चयः इत्यादयः सन्ति विस्तरेण अग्रिमप्रकरणं ["विन्यासः"](/i18n.site/conf) पश्यन्तु ।

#### एन्

स्रोतभाषानिर्देशिका, विन्याससञ्चिकायां `fromTo` `en` `.i18n/conf.yml` अनुरूपम्

```yaml
i18n:
  fromTo:
    en: zh
```

कृपया अनुवादस्य विन्यासं पश्यन्तु [i18](/i18/use)

