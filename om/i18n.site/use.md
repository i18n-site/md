# Install Bobbaasuu &

## Mallattoo Qindeessaa

`i18n.site` meeshaa hiikkaa `i18` keessaa qaba [Maaloo mallattoo qaqqabummaa qindeessuuf galmee `i18` ilaaluuf as tuqi](/i18/use) .

## Itti Fe'uu

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Pirojektii Agarsiisaa

Mee akkaataa itti `i18n.site` fayyadamnu baruuf pirojektii demo irraa haa jalqabnu.

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

Maqaan galmee kloonii bu'uuraa koodii `demo.i18n.site` `md` ta'uu qaba durtii naannoo `docker` waliin haala mijeessuudhaaf.

### Hiikuu

Jalqaba, galmee `md` galchiiti `i18n.site` fiigi, kunis `en` gara `zh` hiika.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Erga hojjetamee booda, faayilii hiikkaa fi kaachota ni uumamu Maaloo gara kuusaa `git add . ` `md` keessatti dabaluu hin dagatin.

### Durtii Naannoo

`docker` fe'ii jalqabi ( fayyadamaan `MAC` [orbstack](https://orbstack.dev) akka yeroo gaggeeffamaa `docker` fayyadamuu gorsa ).

Sana booda, galmee `docker` galchiiti `./up.sh` fiigi, sana booda naannootti dursitee ilaaluuf [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Qabiyyee Maxxansaa

`i18n.site` arkiteekcharii [aplikeeshinii fuula tokkoo](https://developer.mozilla.org/docs/Glossary/SPA) kan fudhatu yoo ta'u, fuula seensaa weebsaayitii fi qabiyyeen weebsaayitii of danda'ee bobbaafama.

Hiikkaa armaan olii erga hojjettee booda galmeewwan `htm` fi `v` galmee `md/out/dev` jalatti ni uumamu.

Asitti, `dev` faayilii qindeessaa `.i18n/htm/dev.yml` irratti hundaa'uun ijaarame jechuudha.

`dev` galmee :

Galmeen `htm` fuula seensaa weebsaayitii ti.

Galmeen `v` qabiyyee weebsaayitii lakkoofsa version qabu of keessaa qaba.

Durargii naannoo lakkoofsa gosa hin dhimmamu fi faayilii hunda gara galmee `out/dev/v/0.1.0` waraaba.

Akka ofiisaatti gadhiifamuuf, faayiloota jijjiiraman gara galmee lakkoofsa gosa haaraatti ni waraabamu.

#### Faayilii Qindeessaa Ifteessuuf -c Fayyadami

Faayiloonni qindeessaa adda addaa galmeewwan walgitan galmee `out` keessatti ni uumu.

Fakkeenyaaf, `.i18n/htm/ol.yml` galmee `out/ol` ni uuma.

`dev.yml` fi `ol.yml` qindeessaa durtii ti.

`dev` gabaabduu `development` ti, naannoo guddinaa agarsiisa, durtii naannoodhaaf kan fayyadamu, akkasumas faayilii qindeessaa durtii ti.
`ol` gabaabduu `online` ti, naannoo toora interneetii agarsiisa, kunis gadhiifamuu ofiisaatiif kan fayyadamu yeroo gadhiisuuf qajoojiiwwan sarara ajajaa `-n` hanga `npm` fayyadamtu.

Akkasumas faayilii qindeessaa biroo uumuu dandeessa sarara ajaja irratti `--htm_conf` fayyadamii maqaa faayilii qindeessaa fayyadamuuf ifteessi:

Fakkeenyaaf:
```
i18n.site --htm_conf yourConfig --save
```

Asitti `--save` lakkoofsa gosa gadhiifama fooyya'iinsaa bakka bu'a.

#### <a rel=id href="#npm" id="npm"></a> Qabiyyee gara npmjs.com maxxansaa

Qabiyyee [gara](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

##### npm login & Gad Dhiisuu

`nodejs` fe'i , `npm login` waliin seeni .

`md/.i18n/htm/ol.yml` gulaaliitii `v: //unpkg.com/i18n.site` keessaa `i18n.site` gara maqaa paakeejii `npm` mataa keetii jijjiiri.

Maqaa paakeejii hin [npmjs.com](//npmjs.com) qofa irratti fayyadamuu Maqaa domeenii marsariitii akka maqaa paakeejiitti fayyadamuun filannoo gaarii dha.

Yeroo paakeejii `npm` irratti hundaa'uun maxxansitu, durtii gatii `v:` **`//unpkg.com/` fayyadamuu mirkaneessi** `i18n.site` yeroo kaachota `/.v` daandii durtii kana jalatti yeroodhaan ilaaluu gadhiifama haaraa galmaan ga'uuf addatti fooyyessee jira.

Hiikkaa fi maxxansuuf galmee `md` keessatti `i18n.site --npm` ykn `i18n.site -n` fiigi.

Yoo maxxansuuf naannoo walitti makamuu walitti fufiinsa qabu fayyadamte, `nodejs` fe'uun hin barbaachisu, hayyama seenee fi maxxansuu `~/.npmrc` gara naannootti waraabuu qofa.

Yoo maqaa paakeejii `v:` in `ol.yml` fooyyessite, maaloo **jalqaba `.i18n/v/ol` haquu kee mirkaneessi** , sana booda maxxansuu.

##### Saarvarii Bakka Bu'aa Npm'n Maxxanfame

Yoo fayyadamtoonni Chaayinaa guddittii rakkoo networkii mudatanii fi paakeejii `npm` maxxansuu hin dandeenye, jijjiiramaa naannoo `https_proxy` akka sarvarii bakka bu'aa qindeessuuf saaguu danda'u.

Buufata sarvarii bakka bu'aa kee `7890` ta'a jennee yoo fudhanne, barreessuu dandeessa:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Qabiyyee Ofumaan Keessummeefame

Yoo qabiyyee ofumaan keessummeessuu barbaadde, jalqaba `md/.i18n/htm/ol.yml` gulaaliitii `v: //unpkg.com/i18n.site` gara durtii URL keetii jijjiiri, kan akka `v: //i18n-v.xxx.com` .

Galmee `md` galchiiti fiigi

```
i18n.site --htm_conf ol --save
```

ykn gabaabduu jechuudha

```
i18n.site -c ol -s
```

Sana booda, qabiyyee galmee `md/out/ol/v` keessa jiru gara daandii durtii URL `v:` keessatti saagameetti qindeessii.

Dhumarratti, **yeroo kaachota daandii `/.v` hanga `1s` xumuramu qindeessii** , yoo kana hin taane qabiyyeen haaraa gadhiifame battalumatti argamuu hin danda'u.

Yeroon kaachota daandii biroof gaaffii hin barbaachifne hir'isuuf waggaa tokkoo fi isaa ol saaguun ni danda'ama.

##### Qabiyyee Gara S3tti Keessummeessuu

Qabiyyee ofumaan keessummeessuuf, sarvarii mataa keetii fayyadamuu malees, filannoo beekamaan biraa `S3` fayyadamuudha `CDN` +

`S3` `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Yeroon kaachota daandii `/.v` xumuramu `1s` akka ta'uuf `CDN` qindeessuu yaadadhu, yoo kana hin taane qabiyyeen haaraa gadhiifame battalumatti argamuu hin danda'u.

### Marsariitii Maxxansuu

Weebsaayitiin bakka fedhetti bobbaasuun ni danda'ama [github page](https://pages.github.com) akkasumas [cloudflare page](https://pages.cloudflare.com) filannoo gaarii dha.

Marsariitichi ijaarsa [aplikeeshinii fuula tokkoo](https://developer.mozilla.org/docs/Glossary/SPA) waan fayyadamuuf, daandii URL `. ` hanga `index.html` hin qabne irra deebi'ii barreessuu yaadadhu.

Fuulli galmee weebsaayitii al tokko qofa bobbaasuun kan barbaachisu yoo ta'u, fooyya'iinsa qabiyyee itti aanuuf fuula galmee weebsaayitii irra deebi'anii bobbaasuun hin barbaachisu.

#### Fuula github Irratti Bobbaasaa

Jalqaba [github tuquun dhaabbata uumuuf](https://github.com/account/organizations/new?plan=free) Maqaan dhaabbataa armaan gadii akka fakkeenyaatti `i18n-demo` dha.

Sana booda dhaabbata kana jalatti warehouse `i18n-demo.github.io` uumi (maaloo `i18n-demo` maqaa dhaabbata uumteen bakka buusi):

![](https://p.3ti.site/1721098657.avif)

Qabiyyee barruu darbe keessa yeroo maxxansitu, `out/ol/htm` uumameera Maaloo galmee kana galchiiti fiigi :

```
ln -s index.html 404.html
```


`github page` irra deebi'ee barreessuu daandii URL waan hin deeggarreef, `404.html` bakka isaa fayyadama.

Sana booda ajaja armaan gadii galmee `htm` keessatti hojjedhu ( `i18n-demo/i18n-demo.github.io.git` teessoo kuusaa mataa keetiin bakka buusuu yaadadhu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Erga koodii dhiibdee booda, osoo hin argatin dura bobbii `github page` milkaa'inaan akka hojjetu eegi (akkuma armaan gadiitti).

<img src="//p.3ti.site/1721116586.avif" width="350px">

Fuula demo'f mee ilaalaa:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Fuula cloudflare Irratti Bobbaasaa

[cloudflare page](//pages.cloudflare.com) `github page`

Bobba'iinsi `cloudflare page` yeroo baay'ee bobbii `github page` armaan olitti ibsame irratti hundaa'a.

Pirojektii uumuu fi mana kuusaa `i18n-demo.github.io` armaan olii hidhu.

Adeemsi isaas fakkii armaan gadii irratti mul’ateera:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Maaloo `Add Account` cuqaasuun dhaabbata `i18n-demo` qaqqabummaa hayyamaa .

Yoo mana kuusaa dhaabbata biraa hidhatte, dhaabbati haaraan osoo hin mul'atin dura yeroo lama hayyamuuf `Add Account` cuqaasuu si barbaachisuu danda'a.

![](https://p.3ti.site/1721118306.avif)

Itti aansuudhaan, mana kuusaa `i18n-demo.github.io` fili, kana booda `Begin setup` cuqaasi, fi gatiiwwan durtii tarkaanfiiwwan itti aanan fayyadami.

![](https://p.3ti.site/1721118490.avif)

Yeroo jalqabaaf erga hidhattee booda, osoo itti hin argatin daqiiqaa muraasa eeguu qabda.

Erga bobbaa'ee booda, maqaa domeenii amala hidhuu dandeessa.

![](https://p.3ti.site/1721119459.avif)

Erga maqaa domeenii amala hidhee booda, maaloo gara maqaa domeenii deemii irra deebi'anii barreessuu daandii aplikeeshinii fuula tokkoo qindeessi, akkuma armaan gadii:

![](https://p.3ti.site/1721119320.avif)

Seerotni suuraa armaan olii irratti mul'atan akka armaan gadiitti argamu Maaloo `i18n.site` sarara jalqabaa armaan gadii irratti maqaa domeenii hidhuun bakka buusi.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Dabalataan, maaloo seera kaachota qindeessii, akkuma armaan gaditti mul'atu, fi yeroo kaachota ji'a tokkootti saagi.

![](https://p.3ti.site/1721125111.avif)

Maaloo walsimsiisu maqaa domeenii tarkaanfii lammaffaa suuraa armaan olii keessatti gara maqaa domeenii ati hidhetti jijjiiri.

#### Chaayinaa Guddittii Keessatti Bobbii Marsariitii Fooyyessuu

Naannoo networkii Chaayinaa guddittii keessatti raawwii dhaqqabummaa fooyya’aa argachuu yoo barbaaddan, maaloo dursa [maqaa domeenii galmeessaa](//beian.aliyun.com) .

Sana booda, kuusaa wantootaa gurgurtoota duumessaa + guddittii keessatti fayyadami `CDN` Qabiyyee armaan gadii bobbaasuu `out/ol/htm` .

Karaa irra deebitee barreessuudhaaf shallaggii qarqara fayyadamuu dandeessa Fakkeenyaaf, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) akkasitti qindeessuu ni danda'ama:

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

Galmeen `MX` fi galmeen `CNAME` waliin jiraachuu waan hin dandeenyeef, yeroo `A` iimeelii maqaa domeenii fudhachuu yoo `CNAME` , iskiriiptii [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Dabalataanis, kaffaltiin tiraafikaa biyya alaa daldaltoota duumessaa Chaayinaa guddittii keessatti qaala'aa waan ta'eef, baasii fooyyessuu yoo barbaaddan, [DNS Cloud 's free geographical resolution](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) fi [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) 's custom domain name (akkuma armaan gadiitti mul'atu) fayyadamuun galmaan gahuu dandeessu tiraafikaa gara biraatti jijjiiruu──Tiraafikaa Chaayinaa guddittii Baidu Cloud `CDN` , tiraafikaa idil-addunyaa cloudflare .

![](https://p.3ti.site/1721119788.avif)

Furmaatni bobbii fooyyessuu kun caalaatti walxaxaa waan ta’aniif gara fuulduraatti boqonnaa adda addaa keessatti kan dhiyaatan ta’a.

#### Qajeelfama Maqaa Domeenii Waliigalaa

Yoo `i18n.site` fayyadamtee marsariitii akka marsariitii kee isa guddaatti uumte, yeroo baayyee kallattii pan-domain qindeessuu qabda, jechuunis, qaqqabummaa gara `*.xxx.com` ( `www.xxx.com` dabalatee) gara `xxx.com` tti qajeelchuu qabda.

Ulaagaa kana gargaarsa Alibaba Cloud `CDN` `EdgeScript` ( [English document](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Chinese document](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) tiin galma gahuu danda'a .

Maqaa domeenii [CDN Cloud](https://cdn.console.aliyun.com/domain/list) keessatti dabaluudhaan maqaa domeenii `*.xxx.com` `CNAME` Alibaba Cloud `CDN` keessatti akeekaa .

![](https://p.3ti.site/1721122000.avif)

Fakkeenyaaf, qindeessaan kallattii irra deebi'uu maqaa pan-domain kan `*.i18n.site` fakkii armaan olii keessatti akka armaan gadiitti:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### nginx Waliin Bobbaasuu

Maaloo qindeessaa kan armaan gadii keewwata `server` nginx keessatti dabali Maaloo `/root/i18n/md/out/ol/htm` gara daandii pirojektii mataa keetii `out/ol/htm` jijjiiri :

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

#### `public`

Faayilota istaatiksii marsariitichaa, kan akka `favicon.ico` , `robots.txt` , fi kkf.

Faayiloonni mallattoo asitti argaman [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Galmee `.i18n` jalatti faayilii qindeessaa, kaachota hiikkaa fi kkf kan `i18n.site` Bal'ina isaaf boqonnaa itti aanu ["Qindeessituu"](/i18n.site/conf) ilaali.

#### `en`

Galmee afaan madda, faayilii qindeessaa `.i18n/conf.yml` keessaa `fromTo` keessaa `en` wajjin walsimu

```yaml
i18n:
  fromTo:
    en: zh
```

Mee qindeessaa hiikkaa ilaalaa [i18](/i18/use)