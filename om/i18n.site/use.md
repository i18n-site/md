# Install Bobbaasuu &

## Mallattoo Qindeessaa

Meeshaan `i18` hiikkaa ukkaamfameera, `i18n.site` [mallattoo qaqqabummaa qindeessuuf galmee `i18` ilaaluuf as tuqi](/i18/use) .

## Itti Fe'uu

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Pirojektii Agarsiisaa

Mee pirojektii demo irraa jalqabnee akkaataa itti fayyadamnu haa barannu `i18n.site`

Jalqaba kuusaa demoo clone goone ajaja akka armaan gadiitti hojjenna:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Fayyadamtoonni Chaayinaa guddittii keessa jiran:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Maqaan galmee kloonii bu'uura koodii `md` ta'uu qaba durtii naannoo `docker` wajjin haala mijeessuuf `demo.i18n.site`

### Hiikuu

Jalqaba, galmee `md` galchiiti `i18n.site` fiigi, kunis `en` gara `zh` tti hiika.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Erga hojjetamee booda, faayilii hiikkaa fi kaachota ni uumamu Maaloo gara kuusaa `git add . ` galmee `md`

### Durtii Naannoo

Fe'ii jalqabi `docker` ( `MAC` [orbstack](https://orbstack.dev) akka yeroo gaggeeffama `docker` fayyadamuu gorsu ).

Sana booda [https://127.0.0.1](https://127.0.0.1) `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Qabiyyee Maxxansaa

`i18n.site`[​](https://developer.mozilla.org/docs/Glossary/SPA)

Hiikkaa armaan olii erga hojjettee booda, galmeewwan `htm` fi `v` galmee `md/out/dev`

`.i18n/htm/dev.yml` , `dev`

Qabiyyee : `dev`

`htm` Daayirektarii jalatti fuula seensaa weebsaayitii jira.

`v` Galmeen qabiyyee weebsaayitii lakkoofsa version qabu of keessaa qaba.

Durargii naannoo lakkoofsa gosa osoo hin ilaalin faayilii hunda gara galmee `out/dev/v/0.1.0`

Akka ofiisaatti gadhiifamuuf, faayiloota jijjiiraman gara galmee lakkoofsa gosa haaraatti ni waraabamu.

#### Faayilii Qindeessaa Ifteessuuf -c Fayyadami

Faayiloonni qindeessaa adda addaa galmeewwan walgitan galmee `out`

Fakkeenyaaf, `.i18n/htm/ol.yml` galmee `out/ol` ni uuma.

`dev.yml` fi `ol.yml` qindeessaa durtii ti.

`dev` `development`
gabaabduu `online` , kan naannoo toora interneetii bakka bu'u, gadhiifama ofiisaatiif fayyadama, akkasumas faayilii qindeessaa durtii yeroo gara `npm` parameetara sarara ajajaa `-n` fayyadamuun `ol`

Akkasumas faayilii qindeessaa biroo uumuu dandeessa sarara ajaja irratti `--htm_conf`

Fakkeenyaaf:
```
i18n.site --htm_conf yourConfig --save
```

Asitti `--save` lakkoofsa version gadhiifama update agarsiisa.

#### <a rel=id href="#npm" id="npm"></a> Qabiyyee gara npmjs.com maxxansaa

[Qabiyyee](/i18n.site/feature#ha) gara [npmjs.com](//npmjs.com)

##### npm login & Gad Dhiisuu

Install `nodejs` seenuuf `npm login` fayyadami.

Gulaali `md/.i18n/htm/ol.yml` `i18n.site` in `v: //unpkg.com/i18n.site` gara kan keetii `npm` maqaa paakeejii) jijjiiri.

Maqaa paakeejii hin qabamne qofa [npmjs.com](//npmjs.com) fayyadamuu Maqaa domeenii marsariitii akka maqaa paakeejiitti fayyadamuun filannoo gaarii dha.

`v:` **`//unpkg.com/`** `npm` `i18n.site` `/.v`

Hiikkaa fi maxxansuuf galmee `md` keessatti `i18n.site --npm` ykn `i18n.site -n` fiigi.

Yoo maxxansuuf naannoo walitti makamuu walitti fufiinsa qabu fayyadamte, fe'uun hin `nodejs` Hayyama seenee fi maxxanfame `~/.npmrc` naannoo sanatti waraabuu qofa.

Yoo maqaa paakeejii `v:` `ol.yml` keessatti fooyyessite, maaloo **dursitee `.i18n/v/ol` haquu kee mirkaneessi** .

##### Saarvarii Bakka Bu'aa Npm'n Maxxanfame

Yoo fayyadamtoonni Chaayinaa guddittii rakkoo networkii mudatanii fi paakeejii `npm` maxxansuu hin dandeenye, jijjiiramaa naannoo `https_proxy` sarvarii bakka bu'aa qindeessuuf saaguu danda'u.

Buufata sarvarii bakka bu'aa kee `7890` barreessuu dandeessa:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Qabiyyee Ofumaan Keessummeefame

Yoo qabiyyee ofumaan keessummeessuu barbaadde, jalqaba `md/.i18n/htm/ol.yml` gulaali fi `v: //unpkg.com/i18n.site` gara durtii URL keetii jijjiiri, kan akka `v: //i18n-v.xxx.com` .

Galmee `md`

```
i18n.site --htm_conf ol --save
```

ykn gabaabduu jechuudha

```
i18n.site -c ol -s
```

Sana booda, qabiyyee galmee `md/out/ol/v` keessa jiru gara daandii durtii URL `v:` keessatti saagameetti qindeessii.

Dhumarratti, **`1s` kaachota daandii `/.v`**

Yeroon kaachota daandii biroof gaaffii hin barbaachifne hir'isuuf waggaa tokkoo fi isaa ol saaguun ni danda'ama.

##### Qabiyyee Gara S3tti Keessummeessuu

Qabiyyee ofumaan keessummeessuuf, sarvarii mataa keetii fayyadamuu malees, `CDN` beekamaan + `S3`

[rclone](https://rclone.org) `S3` `S3`

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

`CDN` akka yeroon kaachota daandii `/.v` tiin xumuramu `1s` ta'uuf qindeessuu yaadadhu, yoo kana hin taane qabiyyee haaraa gadhiifame battalumatti argachuu hin dandeessu.

### Marsariitii Maxxansuu

Weebsaayitiin bakka fedhetti bobbaasuun ni danda'ama [github page](https://pages.github.com) akkasumas [cloudflare page](https://pages.cloudflare.com) filannoo gaarii dha.

Marsariitichi arkiteekcharii [aplikeeshinii fuula tokkoo](https://developer.mozilla.org/docs/Glossary/SPA) waan fudhatuuf, daandii URL `index.html` `. ` qabne irra deebi'ii barreessuu yaadadhu.

Fuulli galmee weebsaayitii al tokko qofa bobbaasuun kan barbaachisu yoo ta'u, fooyya'iinsa qabiyyee itti aanuuf fuula galmee weebsaayitii irra deebi'anii bobbaasuun hin barbaachisu.

#### Fuula github Irratti Bobbaasaa

Jalqaba as [github dhaabbata uumuuf](https://github.com/account/organizations/new?plan=free) maqaan dhaabbataa armaan gadii akka fakkeenyaatti `i18n-demo`

Sana booda dhaabbata kana jalatti mana kuusaa `i18n-demo.github.io` (Maaloo maqaa dhaabbata uumteen `i18n-demo` bakka buusi):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Qabiyyee barruu darbe keessa yeroo maxxansitu `out/ol/htm` uumameera Maaloo galmee kana galchiiti fiigi :

```
ln -s index.html 404.html
```


Sababni isaas `github page` irra deebi'amee barreessuu daandii URL hin deeggaru, kanaaf `404.html` bakka isaa fayyadama.

: booda ajaja `i18n-demo/i18n-demo.github.io.git` gadii galmee `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Erga koodii dhiibdee booda, bobba'iinsi `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Fuula demo'f mee ilaalaa:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Fuula cloudflare Irratti Bobbaasaa

[cloudflare page](//pages.cloudflare.com) `github page`

`cloudflare page` yeroo baayyee bobbii `github page` armaan olii irratti hundaa'a.

Pirojektii uumuun mana kuusaa armaan olii hidhuu `i18n-demo.github.io`

Adeemsi isaas fakkii armaan gadii irratti mul’ateera:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Maaloo `Add Account` `i18n-demo` akka seenan hayyamaa .

Yoo mana kuusaa dhaabbata biraa hidhatte, dhaabbati haaraan osoo hin mul'atin dura yeroo lama hayyamuuf `Add Account`

<img alt="" src="https://p.3ti.site/1721118306.avif">

Itti aansuudhaan `i18n-demo.github.io` Warehouse fili, sana booda `Begin setup` cuqaasi, fi gatiiwwan durtii tarkaanfiiwwan itti aanan fayyadami.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Yeroo jalqabaaf erga hidhattee booda, osoo itti hin argatin daqiiqaa muraasa eeguu qabda.

Erga bobbaa'ee booda, maqaa domeenii amala hidhuu dandeessa.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Erga maqaa domeenii amala hidhee booda, maaloo gara maqaa domeenii deemii irra deebi'anii barreessuu daandii aplikeeshinii fuula tokkoo qindeessi, akkuma armaan gadiitti:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Seerotni suuraa armaan olii irratti mul'atan akka armaan gadiitti sarara jalqabaa armaan gadii irratti maqaa domeenii sitti hidhamee bakka `i18n.site` .

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

Dabalataan, maaloo seera kaachota qindeessii, akkuma armaan gaditti mul'atu, fi yeroo kaachota ji'a tokkootti saagi.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Maaloo walsimsiisaa maqaa domeenii tarkaanfii lammaffaa suuraa armaan olii keessatti gara maqaa domeenii ati hidhetti jijjiiri.

#### Chaayinaa Guddittii Keessatti Bobbii Marsariitii Fooyyessuu

Naannoo networkii Chaayinaa guddittii keessatti raawwii dhaqqabummaa fooyya’aa argachuu yoo barbaaddan, maaloo dursa [maqaa domeenii galmeessaa](//beian.aliyun.com) .

`out/ol/htm` booda, kuusaa wantootaa daldaltoota duumessaa `CDN` guddittii keessatti fayyadamaa +

Karaa irra deebitee barreessuudhaaf shallaggii qarqara fayyadamuu dandeessa, kan akka [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Akkasitti qindaa'uu danda'a:

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

[cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` `MX` `CNAME` `A`

Dabalataanis, kaffaltiin tiraafikaa biyya alaa daldaltoota duumessaa Chaayinaa guddittii keessatti qaala'aa waan ta'eef, baasii fooyyessuu yoo barbaaddan, [Huawei DNS 's free geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) fi [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (akkuma armaan gadiitti mul'atu) fayyadamuun galmaan gahuu dandeessu tiraafikaa gara biraatti jijjiiruu──Tiraafikaa Chaayinaa guddittii Baidu Cloud `CDN` tiraafikaa idil-addunyaa cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Furmaatni bobbii fooyyessuu kunniin caalaatti walxaxaa waan ta’aniif gara fuulduraatti boqonnaa adda addaa keessatti kan dhiyaatan ta’a.

#### Qajeelfama Maqaa Domeenii Waliigalaa

`*.xxx.com` `i18n.site` `www.xxx.com` `xxx.com`

Ulaagaa kana gargaarsa Alibaba Cloud `CDN` s `EdgeScript` ( [sanada Ingiliffaa](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Sanada Chaayinaa](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) tiin galma gahuun ni danda'ama !

Maqaa domeenii [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) keessatti dabaliitii `*.xxx.com` domeenii gara Alibaba Cloud `CDN` 's `CNAME` tti akeeki.

<img alt="" src="https://p.3ti.site/1721122000.avif">

Fakkeenyaaf, qindeessaan kallattii jijjiirraa maqaa pan-domain kan `*.i18n.site`

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### nginx Waliin Bobbaasuu

`/root/i18n/md/out/ol/htm` qindeessaa kan armaan `out/ol/htm` `server` nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Caasaa Galmee

#### Uummata

Faayilota istaatiksii marsariitichaa, kan akka `favicon.ico` `robots.txt` , fi kkf.

Faayiloonni mallattoo asitti argaman [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n Jedhu

`.i18n` Galmee jalatti faayiloota qindeessaa `i18n.site` 's, kaachota hiikkaa fi kkf jiru.Bal'ina isaaf boqonnaa itti aanu ["Qindeessituu"](/i18n.site/conf) ilaali.

#### Om

Galmee afaan madda, kan `fromTo` `en` faayilii qindeessaa keessaa `.i18n/conf.yml` walsimu

```yaml
i18n:
  fromTo:
    en: zh
```

Mee qindeessaa hiikkaa ilaalaa [i18](/i18/use)

