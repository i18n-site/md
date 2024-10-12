# Install (Dɔgɔtɔrɔso &

## Labɛnni Taamasiyɛn

`i18n.site` bɛ ni `i18` bamanankan baarakɛminɛn ye min bɛ a kɔnɔ Aw [ye nin yɔrɔ digi walasa ka sɛbɛn `i18` lajɛ walasa ka doncogo taamasiyɛn labɛn](/i18/use) .

## Ka Sigi

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Porozɛ Demokarasi

An ka daminɛ ni demo porozɛ ye walasa ka `i18n.site` baaracogo dɔn .

An bɛ fɔlɔ ka demo repository clone ani ka cikan in kɛ nin cogo in na:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Baarakɛlaw minnu bɛ Sinuwa jamanaba la, olu bɛ se ka:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` kode basigilen klon ka ɲɛbila tɔgɔ ka kan ka kɛ `md` ye walasa ka sigida lajɛ nɔgɔya ni `docker` ye .

### Ka Bayɛlɛma

Fɔlɔ, i ka `md` ɲɛbilasɛbɛn don ka `i18n.site` boli, o bɛna `en` baara ka kɛ `zh` ye.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Boli kɔfɛ, bamanankan baarakɛcogo ni cache files bɛna dilan Aw hakili to a la k’u fara marayɔrɔ kan `md` `git add . ` kɔnɔ .

### Sigida Lajɛ Fɔlɔ

`docker` sigi ani k’a daminɛ ( baarakɛla `MAC` b’a fɔ ko ! ka baara kɛ ni [orbstack](https://orbstack.dev) ye i n’a fɔ `docker` ka baarakɛwaati ).

O kɔ fɛ, i bɛ don `docker` ɲɛbilasɛbɛn kɔnɔ ka `./up.sh` boli, o kɔfɛ, i bɛ taa [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Poste Kɔnɔkow

`i18n.site` bɛ [ɲɛ kelen baarakɛminɛnw](https://developer.mozilla.org/docs/Glossary/SPA) sigicogo ta, wa siti dondaw ɲɛ ni siti kɔnɔkow bɛ bila sen kan u yɛrɛma.

Sanfɛ bamanankan baara kɛlen kɔfɛ, ɲɛbilasɛbɛn `htm` ni `v` bɛna Dabɔ `md/out/dev` ɲɛbilasɛbɛn jukɔrɔ.

Yan, `dev` kɔrɔ ye ko a jɔra ka da `.i18n/htm/dev.yml` labɛnni-dosiyɛri kan.

`dev` ɲɛbilasɛbɛn :

`htm` ɲɛbilasɛbɛn ye siti in dondaw ɲɛ ye.

`v` ɲɛbilasɛbɛn kɔnɔ, siti kɔnɔkow bɛ sɔrɔ ni version nimɔrɔw ye.

Sigida ɲɛjirali tɛ hami version nimɔrɔ la wa a bɛna filenw bɛɛ kopi kɛ `out/dev/v/0.1.0` ɲɛbilasɛbɛn kɔnɔ.

Walasa ka bɔ foroba la, dosiye caman caman cili bɛna kopi kɛ version nimɔrɔ kura kɔnɔ.

#### Baara Kɛ Ni -c Ye Walasa Ka Labɛncogo Filen Jira

Labɛnni-dosiyɛri danfaralenw bɛna ɲɛbilasɛbɛnw Dabɔ minnu bɛ Bɛn o ma `out` ɲɛbilasɛbɛn kɔnɔ.

Misali la, `.i18n/htm/ol.yml` bɛna `out/ol` ɲɛbilasɛbɛn da.

`dev.yml` ni `ol.yml` ye 'sènfɛ-sɛbɛnw ye.

`dev` ye `development` surunyalen ye, min bɛ yiriwali sigida jira, min bɛ kɛ sigida ɲɛjirali kama, wa a fana ye labɛncogo dosiye ye.
`ol` ye `online` surunyalen ye, min bɛ ɛntɛrinɛti sigida jira, min bɛ kɛ ka bɔli kɛ ofisi la O fana ye labɛnni-dosiyɛri dafalen ye ni cikan-sɛbɛnw paramɛtɛrɛ `-n` fo `npm` bɛ baara kɛ walasa ka bɔ.

Aw bɛ se fana ka labɛnni-dosiyɛri wɛrɛw dabɔ Baara kɛ ni `--htm_conf` ye cikan-sɛbɛn kan walasa ka labɛn-dosiyɛri tɔgɔ jira aw bɛna baara kɛ ni min ye:

I n'a fo:
```
i18n.site --htm_conf yourConfig --save
```

Yan `--save` bɛ update release version number jira.

#### <a rel=id href="#npm" id="npm"></a> Aw ye kɔnɔkow bɔ npmjs.com kan

Kɔnɔkow bɔli [ka](/i18n.site/feature#ha) [npmjs.com](//npmjs.com)

##### npm login & Ka Bila

`nodejs` sigi , don ni `npm login` .

`md/.i18n/htm/ol.yml` Labɛn ka `i18n.site` Yɛlɛma `v: //unpkg.com/i18n.site` la ka Kɛ i yɛrɛ ka `npm` pake tɔgɔ ye.

Baara kɛ ni pake tɔgɔ ye min tɛ mɔgɔ [npmjs.com](//npmjs.com) la dɔrɔn .

Ni i bɛ bɔli kɛ ka da pake `npm` kan, i **jija ka baara kɛ ni `//unpkg.com/` ye** ka ɲɛsin `v:` daminɛ ma `i18n.site` ye kɛrɛnkɛrɛnnenya la ka cache waati `/.v` ɲɛnabɔ nin dakun fɔlɔ sira in kɔrɔ walasa ka bɔko kura lajɛ waati bɛnnen na.

Aw bɛ `i18n.site --npm` walima `i18n.site -n` boli `md` ɲɛbilasɛbɛn kɔnɔ walasa ka bamanankan baara ani ka bɔ kɛnɛ kan.

N’i bɛ baara kɛ ni sigida jɛlen ye min bɛ taa ɲɛ walasa ka gafe bɔ, kun t’a la ka `nodejs` sigi sen kan.Dɔnni ni bɔli yamaruyaw `~/.npmrc` kopi dɔrɔn sigida la.

N’i ye pake tɔgɔ sɛmɛntiya `v:` in `ol.yml` , i **k’a lajɛ ka `.i18n/v/ol` bɔ fɔlɔ** ka sɔrɔ k’a bɔ kɛnɛ kan.

##### Proxy Server Min Bɔra npm Fɛ

Ni baarakɛlaw minnu bɛ Sinuwa jamanaba kɔnɔ, olu ye gɛlɛyaw sɔrɔ ɛntɛrinɛti kan, n’u ma se ka pake `npm` bɔ, u bɛ se ka sigida fɛn caman sɛgɛsɛgɛli `https_proxy` sigi walasa ka proxy server labɛn.

Ni an y’a miiri ko i ka proxy server port ye `7890` ye, i bɛ se ka sɛbɛnni kɛ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kɔnɔkow Minnu Bɛ Kɛ U Yɛrɛ Ye

N’i b’a fɛ ka kɔnɔkow jate i yɛrɛ ye, i bɛ fɔlɔ ka `md/.i18n/htm/ol.yml` ladilan ka `v: //unpkg.com/i18n.site` Changer ka kɛ i ka URL daminɛ ye, i n’a fɔ `v: //i18n-v.xxx.com` .

Aw bɛ `md` ɲɛbilasɛbɛn don ka boli

```
i18n.site --htm_conf ol --save
```

walima a surunyacogo

```
i18n.site -c ol -s
```

O kɔ fɛ, `md/out/ol/v` ɲɛbilasɛbɛn kɔnɔkow labɛn ka kɛɲɛ ni URL daminɛ sira ye min sigilen bɛ `v:` kɔnɔ.

A laban na, **sira min bɛ ban `/.v` fo `1s` la, o ka cakɛda waati labɛn** , n’o tɛ, kɔnɔko kura bɔlenw tɛ se ka sɔrɔ o yɔrɔnin bɛɛ.

Sira wɛrɛw ka cache waati bɛ se ka sigi san kelen walima ka tɛmɛ o kan walasa ka dɔ bɔ ɲininiw na minnu tɛ mako ɲɛ.

##### Jatigila Kɔnɔkow Ka s3

Walasa ka kɔnɔkow jate i yɛrɛ ye, ka fara i yɛrɛ ka baarakɛminɛnw baara kan, fɛɛrɛ wɛrɛ min bɛ kɛ tuma caman na, o ye ka baara kɛ `S3` `CDN` +

I `S3` se ka baara kɛ `S3` [rclone](https://rclone.org)

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Aw hakili to a la ka `CDN` labɛn walasa sira min bɛ ban `/.v` la, o ka cakɛda waati ka kɛ `1s` ye, n’o tɛ, kɔnɔko kura bɔlenw tɛ se ka sɔrɔ o yɔrɔnin bɛɛ.

### Site Web Bɔ Kɛnɛ Kan

Site web bɛ se ka bila yɔrɔ bɛɛ, [github page](https://pages.github.com) [cloudflare page](https://pages.cloudflare.com) ye sugandili ɲumanw ye.

Ikomi siti in bɛ baara kɛ ni [ɲɛ kelen baarakɛcogo ye](https://developer.mozilla.org/docs/Glossary/SPA) , aw hakili to a la ka URL siraw sɛbɛn kokura minnu tɛ `. ` fo `index.html` sɔrɔ.

Site web doncogo ɲɛ ka kan ka bila sen kan siɲɛ kelen dɔrɔn, wa a man kan ka site web doncogo ɲɛ bila senkan kokura walasa ka kɔnɔkow sɛmɛntiya kɔfɛ.

#### A Bila Sen Kan github Ɲɛ Kan

Fɔlɔ [ka digi github walasa ka jɛkulu dɔ dabɔ](https://github.com/account/organizations/new?plan=free) nin jɛkulu tɔgɔ in ye `i18n-demo` ye misali la .

O kɔ fɛ, depo `i18n-demo.github.io` dabɔ nin jɛkulu in kɔrɔ (aw ye `i18n-demo` bila jɛkulu tɔgɔ nɔ na aw ye min da):

![](https://p.3ti.site/1721098657.avif)

Ni barokun tɛmɛnen kɔnɔkow bɔra, `out/ol/htm` dabɔra Aw bɛ don nin ɲɛbilasɛbɛn in kɔnɔ ka boli :

```
ln -s index.html 404.html
```


Komin `github page` tɛ URL sira sɛbɛnni seginni dɛmɛ, `404.html` bɛ baara kɛ o nɔ na.

O kɔfɛ, nin cikan in kɛ `htm` ɲɛbilasɛbɛn kɔnɔ (aw hakili to a la ka `i18n-demo/i18n-demo.github.io.git` bila aw yɛrɛ ka fɛnmarayɔrɔ ladɛrɛsi nɔ na) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Kode gɛrɛgɛrɛ kɔfɛ, aw bɛ `github page` bilali makɔnɔ a ka baara kɛ ka ɲɛ (i n’a fɔ a jiralen bɛ cogo min na jukɔrɔ) sani aw ka se ka don a la.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Walasa ka demo page lajɛ aw ye nin lajɛ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Deploy on cloudflare Ɲɛ Kan

[cloudflare page](//pages.cloudflare.com) `github page`

A ka c’a la, `cloudflare page` bilali bɛ da `github page` bilali kan sanfɛ.

Porozɛ dɔ dabɔ ka `i18n-demo.github.io` depo siri sanfɛ.

Taabolo jiralen bɛ ja in na min bɛ duguma:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

aw bɛ `Add Account` digi walasa ka sira di jɛkulu `i18n-demo` ma .

N’i ye jɛkulu wɛrɛ ka fɛnmarayɔrɔ siri, i bɛ se ka `Add Account` digi siɲɛ fila walasa ka yamaruya di siɲɛ fila sanni jɛkulu kura ka jira.

![](https://p.3ti.site/1721118306.avif)

O kɔfɛ, depo `i18n-demo.github.io` sugandi, o kɔ, `Begin setup` digi, ka baara kɛ ni nafa fɔlɔw ye walasa ka fɛɛrɛ nataw kɛ.

![](https://p.3ti.site/1721118490.avif)

Siɲɛ fɔlɔ sirilen kɔfɛ, aw ka kan ka miniti damadɔw makɔnɔ sani aw ka se ka don a la.

Deployment kɔfɛ, i bɛ se ka domaine tɔgɔ ladamulen dɔ siri.

![](https://p.3ti.site/1721119459.avif)

Domini tɔgɔ ladamulen sirilen kɔfɛ, i bɛ taa domani tɔgɔ la walasa ka ɲɛ kelen-kelen-application sira sɛbɛnni kura labɛn, i n’a fɔ a jiralen bɛ cogo min na jukɔrɔ:

![](https://p.3ti.site/1721119320.avif)

Sariya minnu bɛ ja in kan, olu ye ninnu ye Aw ye `i18n.site` min bɛ duguma layini fɔlɔ la, o bila o nɔ na ni aw ye domani tɔgɔ min siri.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ka fara o kan, aw bɛ cakɛda sariyaw labɛn, i n’a fɔ a jiralen bɛ cogo min na jukɔrɔ, ka cakɛda kuntaala sigi kalo kelen ye.

![](https://p.3ti.site/1721125111.avif)

Aw ye domani tɔgɔ bɛnkan Changer (Yɛlɛma) taabolo filanan na ja min bɛ sanfɛ ka kɛ domaine tɔgɔ ye aw ye min siri.

#### Sitiw Bilali Baara Kɛcogo Ɲuman Na Sinuwa Jamanaba Kɔnɔ

N’i b’a fɛ ka seko ni dɔnko baarakɛcogo ɲuman sɔrɔ Sinuwa jamanaba ka rezo sigida la, i ka [domani tɔgɔ sɛbɛn](//beian.aliyun.com) fɔlɔ.

O kɔfɛ, baara kɛ ni sankaba feerelaw ka fɛnw marali ye Sinuwa jamanaba kɔnɔ `CDN` Nin kɔnɔkow bila sen kan `out/ol/htm` +

Aw bɛ se ka baara kɛ ni edge computing ye walasa ka sira sɛbɛn kokura walasa ka ladamu ɲɛ kelen baarakɛcogo la Misali la, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) bɛ se ka labɛn nin cogo la:

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

Komin disiki `MX` ni disiki `CNAME` tɛ se ka sigi ɲɔgɔn fɛ, n’i `CNAME` fɛ ka domani tɔgɔ imɛli `A` waati kelen na, i ka kan ka jɛ ka baara kɛ ni [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Ka fara o kan, bawo sankaba feerelaw ka jamana kɔkan sirako sara bɛ Sinuwa jamanaba kɔnɔ, n’i b’a fɛ ka musakaw ɲɛnabɔ ka ɲɛ, i bɛ se ka baara kɛ ni [Huawei DNS ka dugukoloko ɲɛnabɔli fu ye](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) ani [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) ka domɛni tɔgɔ ladamulen (i n’a fɔ a jiralen bɛ cogo min na jukɔrɔ) walasa ka se ka sɔrɔ sirako jiginni──sirako siratigɛ la Sinuwa jamanaba Baidu Cloud `CDN` , diɲɛ sirako bɛ taa cloudflare .

![](https://p.3ti.site/1721119788.avif)

O baarakɛcogo ɲuman ɲɛnabɔcogo ninnu ka gɛlɛn kosɛbɛ, wa u bɛna don sapitiri danfaralenw kɔnɔ don nataw la.

#### Domɛni Tɔgɔ Caman Cili

N’i bɛ baara Kɛ ni `i18n.site` walasa ka ‘websayiti dɔ Dabɔ i ka ‘websayitiba ye, a ka c’a la, i ka kan ka `*.xxx.com` -domain (yɔrɔ-yɔrɔ-yɔrɔ-yɔrɔ-yɔrɔ- `www.xxx.com` yɔrɔ- `xxx.com` ]

o wajibi in bɛ se ka kɛ ni Alibaba Cloud `CDN` `EdgeScript` ( [tubabukan sɛbɛn](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Sinuwa sɛbɛn](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) dɛmɛ ye .

aw bɛ domani tɔgɔ fara [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) kɔnɔ ani ka domani tɔgɔ jira `*.xxx.com` `CNAME` Alibaba Cloud `CDN` kɔnɔ .

![](https://p.3ti.site/1721122000.avif)

Misali la, pan-domain tɔgɔ jiginni cogoya min ye `*.i18n.site` ye ja min bɛ sanfɛ, o ye nin ye:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Deploy Ni nginx Ye

Aw ye labɛn `out/ol/htm` fara a `/root/i18n/md/out/ol/htm` min bɛ tali kɛ `server` cogo la nginx

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Annuaire (Daɲɛgafe) Jɔcogo

#### `public`

Siti in ka dosiye jɔlenw, i n’a fɔ `favicon.ico` , `robots.txt` , wdfl.

ikomi filenw bɛ se ka dilan ni [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

`.i18n` ɲɛbilasɛbɛn jukɔrɔ, `i18n.site` ka labɛnni-dosiyɛriw, bamanankan-falen-falen-sɛbɛnw, a ɲɔgɔnnaw bɛ yen.Aw ye tilayɔrɔba nata lajɛ ["Labɛnni"](/i18n.site/conf) walasa ka kunnafoni wɛrɛw sɔrɔ.

#### `en`

Source kan ɲɛbilasɛbɛn, min bɛ bɛn `en` ma `fromTo` kɔnɔ `.i18n/conf.yml` labɛncogo filen

```yaml
i18n:
  fromTo:
    en: zh
```

Aw ye bamanankan baarakɛcogo lajɛ [i18](/i18/use)