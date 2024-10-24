# நிறுவு &

## நிறுவவும்

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## கட்டமைப்பு டோக்கன்

`i18n.site` இல் உள்ளமைக்கப்பட்ட `i18` மொழிபெயர்ப்புக் கருவி உள்ளது, [அணுகல் டோக்கனை உள்ளமைக்க `i18` ஆவணத்தைப் பார்க்க இங்கே கிளிக் செய்யவும்](/i18/use) .

## டெமோ திட்டம்

`i18n.site` எவ்வாறு பயன்படுத்துவது என்பதை அறிய ஒரு டெமோ திட்டத்துடன் ஆரம்பிக்கலாம்.

நாங்கள் முதலில் டெமோ களஞ்சியத்தை குளோன் செய்து கட்டளையை பின்வருமாறு இயக்குகிறோம்:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

சீனாவின் பிரதான பகுதியில் உள்ள பயனர்கள்:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` உடன் உள்ளூர் மாதிரிக்காட்சியை எளிதாக்க `demo.i18n.site` குறியீடு அடிப்படை குளோனின் கோப்பகத்தின் பெயர் `md` ஆக இருக்க வேண்டும்.

### மொழிபெயர்க்க

முதலில், `md` கோப்பகத்தை உள்ளிட்டு `i18n.site` இயக்கவும், இது `en` முதல் `zh` வரை மொழிபெயர்க்கும்.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

இயங்கிய பிறகு, மொழிபெயர்ப்பு மற்றும் கேச் கோப்புகள் உருவாக்கப்படும், அவற்றை `md` `git add . ` உள்ள களஞ்சியத்தில் சேர்க்க நினைவில் கொள்க.

### உள்ளூர் முன்னோட்டம்

`docker` நிறுவி தொடங்கவும் ( `MAC` பயனர் [orbstack](https://orbstack.dev) `docker` க்கான இயக்க நேரமாக பயன்படுத்த பரிந்துரைக்கிறார்).

பின்னர், `docker` கோப்பகத்தை உள்ளிட்டு `./up.sh` இயக்கவும், பின்னர் உள்ளூரில் முன்னோட்டமிட [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### உள்ளடக்கத்தை இடுகையிடவும்

`i18n.site` [ஒற்றை-பக்க பயன்பாட்டு](https://developer.mozilla.org/docs/Glossary/SPA) கட்டமைப்பை ஏற்றுக்கொள்கிறது, மேலும் இணையதள நுழைவுப் பக்கமும் இணையதள உள்ளடக்கமும் தனித்தனியாக வரிசைப்படுத்தப்படும்.

மேலே உள்ள மொழிபெயர்ப்பை இயக்கிய பிறகு, கோப்பகங்கள் `htm` மற்றும் `v` `md/out/dev` கோப்பகத்தின் கீழ் உருவாக்கப்படும்.

இங்கே, `dev` என்பது `.i18n/htm/dev.yml` உள்ளமைவு கோப்பின் அடிப்படையில் கட்டப்பட்டது என்று பொருள்.

`dev` அடைவு :

`htm` அடைவு என்பது இணையதள நுழைவுப் பக்கமாகும்.

`v` கோப்பகத்தில் பதிப்பு எண்கள் கொண்ட இணையதள உள்ளடக்கம் உள்ளது.

உள்ளூர் மாதிரிக்காட்சியானது பதிப்பு எண்ணைப் பற்றி கவலைப்படுவதில்லை மற்றும் எல்லா கோப்புகளையும் `out/dev/v/0.1.0` கோப்பகத்திற்கு நகலெடுக்கும்.

அதிகாரப்பூர்வ வெளியீட்டிற்கு, மாற்றப்பட்ட கோப்புகள் புதிய பதிப்பு எண் கோப்பகத்தில் நகலெடுக்கப்படும்.

#### `-c` உடன் உள்ளமைவு கோப்பைக் குறிப்பிடவும்

வெவ்வேறு உள்ளமைவு கோப்புகள் `out` கோப்பகத்தில் தொடர்புடைய கோப்பகங்களை உருவாக்கும்.

எடுத்துக்காட்டாக, `.i18n/htm/ol.yml` `out/ol` கோப்பகத்தை உருவாக்கும்.

`dev.yml` மற்றும் `ol.yml` ஆகியவை இயல்புநிலை உள்ளமைவுகள்.

`dev` என்பது `development` இன் சுருக்கமாகும், இது உள்ளூர் மாதிரிக்காட்சிக்கு பயன்படுத்தப்படும் வளர்ச்சி சூழலைக் குறிக்கிறது, மேலும் இது இயல்புநிலை உள்ளமைவு கோப்பாகும்.
`ol` என்பது `online` இன் சுருக்கமாகும், இது அதிகாரப்பூர்வ வெளியீட்டிற்குப் பயன்படுத்தப்படுகிறது, இது `-n` முதல் `npm` வரையிலான கட்டளை வரி அளவுருக்களைப் பயன்படுத்தும் போது இயல்புநிலை உள்ளமைவு கோப்பாகும்.

நீங்கள் மற்ற கட்டமைப்பு கோப்புகளை உருவாக்கலாம் கட்டளை வரியில் `--htm_conf` பயன்படுத்தவும்.

உதாரணமாக:
```
i18n.site --htm_conf yourConfig --save
```

இங்கே `--save` புதுப்பிப்பு வெளியீட்டு பதிப்பு எண்ணைக் குறிக்கிறது.

#### <a rel=id href="#npm" id="npm"></a> உள்ளடக்கத்தை npmjs.com இல் வெளியிடவும்

[npmjs.com](//npmjs.com) உள்ளடக்கத்தை வெளியிடுவது பரிந்துரைக்கப்படும் இயல்புநிலை தீர்வாகும் ( [முன்-இறுதியில் அதிக கிடைக்கும் தன்மையைப்](/i18n.site/feature#ha) பார்க்கவும்).

##### npm login &

`nodejs` நிறுவவும், `npm login` உடன் உள்நுழையவும்.

`md/.i18n/htm/ol.yml` [npmjs.com](//npmjs.com) , [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) இன் மதிப்பை `YOUR_NPM_PACKAGE` உங்கள் சொந்த `npm` தொகுப்புப் பெயராக மாற்றவும்.

பின்னர் `md/.i18n/htm/ol.package.json` மாற்றவும்

மொழிபெயர்த்து வெளியிட, `md` கோப்பகத்தில் `i18n.site --npm` அல்லது `i18n.site -n` இயக்கவும்.

நீங்கள் வெளியிடுவதற்கு தொடர்ச்சியான ஒருங்கிணைப்பு சூழலைப் பயன்படுத்தினால், `nodejs` நிறுவ வேண்டிய அவசியமில்லை, உள்நுழைந்த மற்றும் வெளியிடும் அனுமதி `~/.npmrc` சூழலுக்கு நகலெடுக்கவும்.

`ol.yml` இல் `v:` இன் தொகுப்பின் பெயரை நீங்கள் மாற்றினால், **முதலில் `.i18n/v/ol` நீக்கி பின்னர் அதை வெளியிடுவதை உறுதி செய்யவும்** .

##### npm ஆல் வெளியிடப்பட்ட ப்ராக்ஸி சர்வர்

சீனாவின் மெயின்லேண்டில் உள்ள பயனர்கள் நெட்வொர்க் பிரச்சனைகளை எதிர்கொண்டு `npm` தொகுப்புகளை வெளியிட முடியாவிட்டால், அவர்கள் ப்ராக்ஸி சர்வரை உள்ளமைக்க சூழல் மாறி `https_proxy` அமைக்கலாம்.

உங்கள் ப்ராக்ஸி சர்வர் போர்ட் `7890` என்று வைத்துக் கொண்டு, நீங்கள் எழுதலாம்:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### சுயமாக ஹோஸ்ட் செய்யப்பட்ட உள்ளடக்கம்

நீங்கள் உள்ளடக்கத்தை சுயமாக ஹோஸ்ட் செய்ய விரும்பினால், முதலில் `md/.i18n/htm/ol.yml` ஐத் திருத்தி, `v: //i18n-v.xxx.com` போன்ற உங்கள் URL முன்னொட்டுக்கு `v: //unpkg.com/i18n.site` மாற்றவும்.

`md` கோப்பகத்தை உள்ளிட்டு இயக்கவும்

```
i18n.site --htm_conf ol --save
```

அல்லது சுருக்கம்

```
i18n.site -c ol -s
```

பின்னர், `md/out/ol/v` கோப்பகத்தில் உள்ள உள்ளடக்கத்தை `v:` இல் அமைக்கப்பட்ட URL முன்னொட்டு பாதையில் உள்ளமைக்கவும்.

இறுதியாக, **`/.v` முதல் `1s` வரை முடிவடையும் பாதையின் தற்காலிக சேமிப்பு நேரத்தை உள்ளமைக்கவும்** , இல்லையெனில் புதிதாக வெளியிடப்பட்ட உள்ளடக்கத்தை உடனடியாக அணுக முடியாது.

தேவையற்ற கோரிக்கைகளைக் குறைக்க, பிற பாதைகளுக்கான தற்காலிக சேமிப்பு நேரத்தை ஒரு வருடம் அல்லது அதற்கும் அதிகமாக அமைக்கலாம்.

##### உள்ளடக்கத்தை s3க்கு ஹோஸ்ட் செய்யவும்

சுய-ஹோஸ்ட் உள்ளடக்கத்திற்கு, உங்கள் சொந்த சர்வரைப் பயன்படுத்துவதற்கு கூடுதலாக, மற்றொரு `CDN` விருப்பம் `S3` +

`S3` சர்வரில் `S3` நீங்கள் [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`/.v` இல் முடிவடையும் பாதையின் தற்காலிக சேமிப்பு நேரம் `1s` ஆக `CDN` உள்ளமைக்க நினைவில் கொள்ளுங்கள், இல்லையெனில் புதிதாக வெளியிடப்பட்ட உள்ளடக்கத்தை உடனடியாக அணுக முடியாது.

### இணையதளத்தை வெளியிடுங்கள்

வலைத்தளம் எங்கும் பயன்படுத்தப்படலாம் [github page](https://pages.github.com) மேலும் [cloudflare page](https://pages.cloudflare.com) நல்ல தேர்வுகள்.

இணையதளம் [ஒற்றைப் பக்க பயன்பாட்டுக்](https://developer.mozilla.org/docs/Glossary/SPA) கட்டமைப்பைப் பயன்படுத்துவதால், `. ` முதல் `index.html` வரை இல்லாத URL பாதைகளை மீண்டும் எழுத நினைவில் கொள்ளுங்கள்.

இணையதள நுழைவுப் பக்கம் ஒருமுறை மட்டுமே பயன்படுத்தப்பட வேண்டும், மேலும் அடுத்தடுத்த உள்ளடக்க புதுப்பிப்புகளுக்கு இணையதள நுழைவுப் பக்கத்தை மீண்டும் பயன்படுத்த வேண்டிய அவசியமில்லை.

#### கிதுப் பக்கத்தில் வரிசைப்படுத்து

[ஒரு நிறுவனத்தை உருவாக்க முதலில் github கிளிக் செய்யவும்](https://github.com/account/organizations/new?plan=free) `i18n-demo`

இந்த அமைப்பின் கீழ் கிடங்கு `i18n-demo.github.io` உருவாக்கவும் (தயவுசெய்து `i18n-demo` நீங்கள் உருவாக்கிய நிறுவனத்தின் பெயருடன் மாற்றவும்):

![](https://p.3ti.site/1721098657.avif)

முந்தைய கட்டுரையில் உள்ள உள்ளடக்கத்தை வெளியிடும் போது, `out/ol/htm` ஆனது இந்த கோப்பகத்தை உள்ளிட்டு இயக்கவும் :

```
ln -s index.html 404.html
```


URL பாதையை மீண்டும் எழுதுவதை `github page` ஆதரிக்காததால், அதற்கு பதிலாக `404.html` பயன்படுத்தப்படுகிறது.

பின்னர் பின்வரும் கட்டளையை `htm` கோப்பகத்தில் இயக்கவும் (உங்கள் சொந்த கிடங்கு முகவரியுடன் `i18n-demo/i18n-demo.github.io.git` மாற்றுவதை நினைவில் கொள்க) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

குறியீட்டை அழுத்திய பிறகு, அதை அணுகுவதற்கு முன், `github page` இன் வரிசைப்படுத்தல் வெற்றிகரமாக (கீழே காட்டப்பட்டுள்ளபடி) இயங்கும் வரை காத்திருக்கவும்.

<img src="//p.3ti.site/1721116586.avif" width="350px">

டெமோ பக்கத்திற்கு பார்க்கவும்:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### கிளவுட்ஃப்ளேர் பக்கத்தில் பயன்படுத்தவும்

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` இன் வரிசைப்படுத்தல் பொதுவாக மேலே உள்ள `github page` வரிசைப்படுத்தலை அடிப்படையாகக் கொண்டது.

ஒரு திட்டத்தை உருவாக்கி மேலே உள்ள `i18n-demo.github.io` கிடங்கை பிணைக்கவும்.

செயல்முறை கீழே உள்ள படத்தில் காட்டப்பட்டுள்ளது:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

அமைப்பு `i18n-demo` க்கு அணுகலை வழங்க `Add Account` கிளிக் செய்யவும்.

வேறொரு நிறுவனத்தின் கிடங்கை நீங்கள் பிணைத்திருந்தால், புதிய நிறுவனம் காண்பிக்கப்படுவதற்கு முன் இரண்டு முறை அங்கீகரிக்க `Add Account` இரண்டு முறை கிளிக் செய்ய வேண்டியிருக்கும்.

![](https://p.3ti.site/1721118306.avif)

அடுத்து, கிடங்கு `i18n-demo.github.io` தேர்ந்தெடுத்து, `Begin setup` ஐக் கிளிக் செய்து, அடுத்த படிகளுக்கு இயல்புநிலை மதிப்புகளைப் பயன்படுத்தவும்.

![](https://p.3ti.site/1721118490.avif)

முதல் முறையாக பிணைக்கப்பட்ட பிறகு, அதை அணுகுவதற்கு சில நிமிடங்கள் காத்திருக்க வேண்டும்.

வரிசைப்படுத்திய பிறகு, நீங்கள் தனிப்பயன் டொமைன் பெயரை இணைக்கலாம்.

![](https://p.3ti.site/1721119459.avif)

தனிப்பயன் டொமைன் பெயரைப் பிணைத்த பிறகு, கீழே காட்டப்பட்டுள்ளபடி, ஒற்றைப் பக்க பயன்பாட்டின் பாதையை மீண்டும் எழுதுவதை உள்ளமைக்க டொமைன் பெயருக்குச் செல்லவும்:

![](https://p.3ti.site/1721119320.avif)

மேலே உள்ள படத்தில் உள்ள விதிகள் கீழே உள்ள முதல் வரியில் உள்ள `i18n.site` நீங்கள் பிணைத்த டொமைன் பெயருடன் மாற்றவும்.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

கூடுதலாக, கீழே காட்டப்பட்டுள்ளபடி, கேச் விதிகளை உள்ளமைத்து, கேச் காலத்தை ஒரு மாதமாக அமைக்கவும்.

![](https://p.3ti.site/1721125111.avif)

மேலே உள்ள படத்தில் இரண்டாவது படியில் பொருந்தக்கூடிய டொமைன் பெயரை நீங்கள் பிணைத்த டொமைன் பெயருக்கு மாற்றவும்.

#### சீனாவின் பிரதான நிலப்பரப்பில் இணையதள வரிசைப்படுத்தலை மேம்படுத்துதல்

சீனாவின் மெயின்லேண்ட் நெட்வொர்க் சூழலில் சிறந்த அணுகல்தன்மை செயல்திறனைப் பெற விரும்பினால், முதலில் [ஒரு டொமைன் பெயரைப் பதிவு செய்யவும்](//beian.aliyun.com) .

பிறகு, + உள்ள கிளவுட் விற்பனையாளர்களின் பொருள் சேமிப்பகத்தைப் பயன்படுத்தவும் `CDN` பின்வரும் உள்ளடக்கத்தை வரிசைப்படுத்தவும் `out/ol/htm` .

ஒற்றை-பக்க பயன்பாடுகளுக்கு ஏற்ப பாதையை மாற்றியமைக்க நீங்கள் எட்ஜ் கம்ப்யூட்டிங்கைப் பயன்படுத்தலாம் எடுத்துக்காட்டாக, [Baidu Smart Cloud `CDN` ஐ](//cloud.baidu.com/product/cdn.html) இவ்வாறு கட்டமைக்க முடியும்:

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

ரெக்கார்ட் `MX` மற்றும் ரெக்கார்ட் `CNAME` ஆகியவை இணைந்து செயல்பட முடியாது என்பதால், நீங்கள் ஒரே நேரத்தில் டொமைன் பெயர் மின்னஞ்சல்களைப் பெற விரும்பினால், [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ஸ்கிரிப்ட் `CNAME` க்கு ஒத்துழைக்க வேண்டும் `A`

கூடுதலாக, சீனாவில் உள்ள கிளவுட் விற்பனையாளர்களின் வெளிநாட்டு போக்குவரத்து கட்டணங்கள் ஒப்பீட்டளவில் விலை உயர்ந்தவை என்பதால், நீங்கள் செலவுகளை மேம்படுத்த விரும்பினால், நீங்கள் [DNS Cloud இன் இலவச புவியியல் தீர்மானம்](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) மற்றும் [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) இன் தனிப்பயன் டொமைன் பெயரை (கீழே காட்டப்பட்டுள்ளது) பயன்படுத்தலாம் போக்குவரத்து திசைதிருப்பல்──பிரதான சீனா பைடு கிளவுட் `CDN` இல் போக்குவரத்து, சர்வதேச போக்குவரத்து cloudflare செல்கிறது.

![](https://p.3ti.site/1721119788.avif)

இந்த வரிசைப்படுத்தல் தேர்வுமுறை தீர்வுகள் மிகவும் சிக்கலானவை மற்றும் எதிர்காலத்தில் தனித்தனி அத்தியாயங்களில் அறிமுகப்படுத்தப்படும்.

#### பொதுவான டொமைன் பெயர் திசைதிருப்பல்

உங்கள் முக்கிய வலைத்தளமாக ஒரு வலைத்தளத்தை உருவாக்க `i18n.site` பயன்படுத்தினால், நீங்கள் வழக்கமாக பான்-டொமைன் திசைதிருப்பலை உள்ளமைக்க வேண்டும், அதாவது `*.xxx.com` ( `www.xxx.com` உட்பட) முதல் `xxx.com` க்கு அணுகலைத் திருப்பிவிட வேண்டும்.

இந்த தேவையை அலிபாபா கிளவுட் `CDN` `EdgeScript` ( [ஆங்கில ஆவணம்](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [சீன ஆவணம்](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) உதவியுடன் அடையலாம்.

[அலிபாபா CDN](https://cdn.console.aliyun.com/domain/list) டொமைன் பெயரைச் சேர்த்து, அலிபாபா கிளவுட் `CDN` இல் டொமைன் பெயரை `*.xxx.com` `CNAME` குறிப்பிடவும்.

![](https://p.3ti.site/1721122000.avif)

எடுத்துக்காட்டாக, மேலே உள்ள படத்தில் `*.i18n.site` இன் பான்-டொமைன் பெயர் திசைதிருப்பல் உள்ளமைவு பின்வருமாறு:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### nginx உடன் வரிசைப்படுத்தவும்

nginx `server` `/root/i18n/md/out/ol/htm` `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### அடைவு அமைப்பு

#### `public`

`favicon.ico` , `robots.txt` , போன்ற வலைத்தளத்தின் நிலையான கோப்புகள்.

ஐகான் கோப்புகளை உருவாக்க முடியும் [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

`.i18n` கோப்பகத்தின் கீழ் `i18n.site` இன் உள்ளமைவு கோப்புகள், மொழிபெயர்ப்பு தற்காலிக சேமிப்பு போன்றவை உள்ளன. விவரங்களுக்கு அடுத்த அத்தியாயமான ["உள்ளமைவு" ஐப்](/i18n.site/conf) பார்க்கவும்.

#### `en`

மூல மொழி கோப்பகம், `.i18n/conf.yml` உள்ளமைவு கோப்பில் `fromTo` இல் `en` உடன் தொடர்புடையது

```yaml
i18n:
  fromTo:
    en: zh
```

மொழிபெயர்ப்பின் உள்ளமைவைப் பார்க்கவும் [i18](/i18/use)