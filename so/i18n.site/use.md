# Ku Rakib &

## Calaamadaha Qaabaynta

Qalabka tarjumaada `i18` waa ku dhexjiraa, fadlan halkan guji si `i18n.site` [u tixraacdo `i18` dokumentiga si aad u habayso calaamada gelitaanka](/i18/use) .

## Ku Rakib

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Mashruuca Demo

Aan ku bilowno mashruuc demo oo aan barano sida loo isticmaalo `i18n.site`

Waxaan marka hore xireynaa bakhaarka demo waxaana u maamulnaa amarka sida soo socota:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Isticmaalayaasha ku sugan dhul weynaha Shiinaha waxay karaan:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Magaca hagaha koodhka saldhiga koodhka waa inuu noqdaa `md` si loogu fududeeyo horudhac gudaha `docker` `demo.i18n.site`

### Turjun

`zh` `en` , geli `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Kadib orodka, faylalka tarjumaadda `git add . ` kaydinta ayaa la soo saari `md` .

### Muuqaal Deegaan

`MAC` rakib [orbstack](https://orbstack.dev) `docker` `docker`

Kadibna, gali tusaha `docker` orod `./up.sh` , kadibna booqo [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Qoraalada Dhaji

`i18n.site` qabataa qaab-dhismeedka [hal-bog](https://developer.mozilla.org/docs/Glossary/SPA) , iyo bogga gelitaanka shabakadda iyo waxa ku jira mareegaha ayaa si madax-bannaan loo hawlgeliyay.

Kadib socodsiinta tarjumaada sare, hagaha `htm` iyo `v` ayaa laga soo saari doonaa tusaha `md/out/dev`

Halkan, `dev` waxay ku tusaysaa in lagu dhisay faylka `.i18n/htm/dev.yml` .

Waxa ku : `dev`

`htm`

`v` waxa uu ka kooban yahay mareegaha oo leh nambarka nooca.

Horudhac maxalli ah ayaa koobi doona dhammaan faylasha tusaha `out/dev/v/0.1.0`

Siideynta rasmiga ah, faylasha la beddelay waxaa lagu koobiyeynayaa tusaha lambarka nooca cusub.

#### Isticmaal -c Si Aad U Qeexdo Faylka Qaabeynta

Faylasha qaabeynta ee kala duwan ayaa abuuri doona hagayaal u dhigma oo hoos yimaada tusaha `out`

Tusaale `out/ol` , `.i18n/htm/ol.yml`

`dev.yml` `ol.yml` waa habaynta caadiga ah.

`dev` waa soo-gaabista `development` , oo matalaysa deegaanka horumarinta, waxaana loo isticmaalaa dib-u-eegis maxalli ah, sidoo kale waa faylka qaabeynta.
`ol` waa soo gaabinta `online` , oo matalaysa deegaanka khadka tooska ah, waxaa loo isticmaalaa siideynta rasmiga ah, sidoo kale waa faylka qaabeynta caadiga ah marka la daabacayo `npm` iyadoo la adeegsanayo cabbirka khadka taliska `-n` .

Waxa kale oo aad samayn kartaa faylasha qaabeynta Isticmaalka `--htm_conf`

tusaale ahaan:
```
i18n.site --htm_conf yourConfig --save
```

Halkan `--save`

#### <a rel=id href="#npm" id="npm"></a> Ku daabac macluumaadka npmjs.com

Daabacaada [nuxurka](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

##### npm login & Daayo

Ku rakib `nodejs` isticmaal `npm login` si aad u gasho.

Wax ka beddel `md/.i18n/htm/ol.yml` u beddel `i18n.site` in `v: //unpkg.com/i18n.site` adigaa iska leh `npm` magaca xirmada.

Kaliya isticmaal magaca xirmada ee aan ku jirin [npmjs.com](//npmjs.com)

Markaad `i18n.site` ku salaysan xirmada `npm` `/.v` **hubso inaad isticmaasho `//unpkg.com/`** horgalaha qiimaha `v:` .

Ku socodsii `i18n.site --npm` ama `i18n.site -n` tusaha `md`

Haddii aad isticmaasho jawi is-dhexgal joogto ah si aad u daabacdo, looma baahna `~/.npmrc` lagu rakibo `nodejs`

Haddii aad wax ka bedesho magaca xirmada gudaha `v:` `ol.yml` , fadlan **hubi inaad marka hore tirtirto `.i18n/v/ol`** ka dibna daabac.

##### Server-Ka Wakiilku Waxa Daabacay npm

Haddii isticmaalayaasha ku sugan dhul weynaha Shiinaha ay la kulmaan dhibaatooyin shabakadeed oo ay awoodi waayaan inay daabacaan `npm` , waxay dejin karaan doorsoomiyaha deegaanka `https_proxy` si ay u habeeyaan server-ka wakiilnimada

Haddii aad u malaynayso in deked server-kaagu ay tahay `7890` waxaad qori kartaa:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Waxyaabo Is-Martigeliyay

Haddii aad rabto in aad is-martigeliso waxa ku jira, marka hore `md/.i18n/htm/ol.yml` wax ka `v: //unpkg.com/i18n.site` oo u beddel URL kaaga horgale, sida `v: //i18n-v.xxx.com` .

Geli `md` oo orod

```
i18n.site --htm_conf ol --save
```

ama soo gaabinta

```
i18n.site -c ol -s
```

Kadibna, u habbee waxa ku jira `v:` `md/out/ol/v`

Ugu dambayntii, **habee wakhtiga kaydinta ee dariiqa ku `/.v` `1s`** , haddii kale waxa cusub ee la sii daayay isla markiiba lama heli karo.

Wakhtiga kaydinta ee wadooyinka kale waxa loo dejin karaa hal sano ama ka badan si loo yareeyo codsiyada aan loo baahnayn.

##### Waxyaabaha Martida Loo Yahay s3

Si aad is-martigeliso, marka lagu daro isticmaalka serverkaaga, ikhtiyaar kale `CDN` caadi ah ayaa ah inaad isticmaasho + `S3`

`S3` isticmaali `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Xusuusnow inaad habayso `CDN` si wakhtiga kaydka dariiqa ku dhamaanayo `/.v` uu yahay `1s` , haddii kale ma awoodid inaad isla markiiba gasho macluumaadka cusub ee la sii daayay.

### Daabac Website

Mareegta waxaa la geyn karaa meel kasta [github page](https://pages.github.com) iyo [cloudflare page](https://pages.cloudflare.com) waa doorashooyin wanaagsan.

Sababtoo ah shabakadu waxay qabataa qaab dhismeedka [hal bog](https://developer.mozilla.org/docs/Glossary/SPA) , xasuuso inaad dib u qorto dariiqa URL ee aan ku `. ` `index.html` .

Bogga gelitaanka mareegta waxa kaliya oo loo baahan yahay in la geeyo hal mar, mana jirto baahi loo qabo in dib loo habeeyo bogga gelitaanka mareegta wixii xog cusub ah ee soo socda.

#### Geli Bogga github

Marka hore [github guji si aad u abuurto urur](https://github.com/account/organizations/new?plan=free) magaca soo socda `i18n-demo`

Kadib samee bakhaar hoos yimaada `i18n-demo.github.io` (Fadlan `i18n-demo` beddel magaca ururka aad abuurtay):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Marka la daabacayo waxa ku jira maqaalkii hore, waa : soo saaray `out/ol/htm`

```
ln -s index.html 404.html
```


Sababtoo `404.html` `github page`

Ka dib `i18n-demo/i18n-demo.github.io.git` socodsii amarka soo socda : `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ka dib markaad riixdo koodka, sug in la soo diro `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Bogga demo fadlan eeg:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Geli Bogga cloudflare

[cloudflare page](//pages.cloudflare.com) la barbar dhigo `github page` waxay bixisaa dariiqa dib u qorida oo aad bay ugu saaxiibtinimo badan tahay Shiinaha waxaana lagu talinayaa in la isticmaalo.

Hawlgalinta `cloudflare page` badan waxay ku salaysan tahay meelaynta `github page` sare.

Abuur mashruuc oo xidh bakhaarka kore `i18n-demo.github.io`

Habka ayaa lagu muujiyay sawirka hoose:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Fadlan `Add Account` si aad u hesho `i18n-demo` .

Haddii aad xidhay bakhaarka urur kale, waxa laga yaabaa inaad u baahato `Add Account` gujiso laba jeer si aad u ogolaato laba jeer ka hor inta aan ururka cusub la soo bandhigin.

<img alt="" src="https://p.3ti.site/1721118306.avif">

`Begin setup` xigta dooro `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721118490.avif">

Ka dib markaad xidho markii ugu horeysay, waxaad u baahan tahay inaad sugto dhowr daqiiqo ka hor intaadan helin.

Ka dib markii la geeyo, waxaad xidhi kartaa magac domain gaar ah.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Kadib xidhidhiyaha magaca domainka gaarka ah, fadlan tag magaca domainka si aad u habayso dariiqa dib u qorida codsiga hal bog, sida hoos ku cad:

<img alt="" src="https://p.3ti.site/1721119320.avif">

`i18n.site` sawirka kore waa kuwan soo socda

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

Intaa waxaa dheer, fadlan habee xeerarka kaydinta, sida hoos ku cad, oo u dhig muddada kaydinta ilaa hal bil.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Fadlan u beddel magaca domainka ee u dhigma tallaabada labaad ee sawirka kore oo u beddel magaca domainka aad xidhay.

#### Hagaajinta Dirida Shabakadaha Ee Dhul Weynaha Shiinaha

Haddii aad rabto in aad hesho wax qabad ka wanaagsan oo gelitaan ka ah deegaanka shabakadda ee dhul weynaha Shiinaha, fadlan marka hore [diwaangeli magaca domain](//beian.aliyun.com) .

`out/ol/htm` dib, adeegso kaydinta shayga daruuraha `CDN` dhul weynaha Shiinaha +

Waxaad isticmaali kartaa xisaabinta cidhifka ah si aad dib ugu qorto dariiqa aad ula qabsato codsiyada hal bog ah, sida [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html)

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

`CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `MX` `A`

Intaa waxaa dheer, sababtoo ah khidmadaha taraafikada dibadda ee iibiyaasha daruuraha ee dhul weynaha Shiinaha waa qaali, haddii aad rabto inaad kor u qaaddo kharashyada, waxaad isticmaali kartaa [Huawei DNS xallinta juqraafiyeed ee bilaashka ah](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) iyo magaca domainka gaarka [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (sida hoos ku cad) si aad u gaarto leexinta gaadiidka──Taraafikada ee dhul weynaha Shiinaha Baidu Cloud `CDN` Taraafikada caalamiga ah ayaa maraysa cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Xalalkan wanaajinta hawlgelinta ayaa aad u adag waxaana lagu soo bandhigi doonaa cutubyo kala duwan mustaqbalka.

#### Dib U Habeynta Magaca Domainka Guud

Haddii aad isticmaasho `i18n.site` si aad u abuurto degel ahaan sida mareegahaaga ugu muhiimsan, waxa aad inta badan u baahan tahay in aad habayso dib u habaynta domainka, taas oo ah, dib u habayn `*.xxx.com` (ay ku jirto `www.xxx.com` ) gelitaanka `xxx.com` .

Shuruuddan waxaa lagu gaari karaa iyadoo la kaashanayo Alibaba Cloud `CDN` `EdgeScript` ( [dukumeenti Ingiriis](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) [ah](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) /

Ku dar magac domain gudaha [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) oo tilmaan `*.xxx.com` domain Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Tusaale ahaan, qaabaynta magac-wareejinta pan-domain `*.i18n.site` sawirka kore waa sida soo socota:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Ku Dheji nginx

Fadlan ku dar qaabayn la mid ah kuwan soo socda ee `server` nginx halkaas oo `/root/i18n/md/out/ol/htm` fadlan ku beddel jidka mashruucaaga `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Qaab Dhismeedka Hagaha

#### Dadweynaha

Faylasha joogtada ah ee shabakada, sida `favicon.ico` `robots.txt` , iwm.

Faylasha astaanta halkan waxaa lagu soo saari karaa [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` waxa ku hoos jira `i18n.site` faylasha qaabaynta, kaydka tarjumaada, iwm. [Faahfaahinta](/i18n.site/conf) ka eeg cutubka xiga

#### en

Tusaha luqadda isha, oo `.i18n/conf.yml` dhiganta `fromTo` `en` ee faylka qaabeynta

```yaml
i18n:
  fromTo:
    en: zh
```

Fadlan tixraac habaynta tarjumaada [i18](/i18/use)

