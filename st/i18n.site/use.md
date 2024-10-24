# Kenya &

## Kenya

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Letšoao La Tlhophiso

`i18n.site` e na le sesebelisoa sa phetolelo se hahelletsoeng ka har'a `i18` Ka kopo [, tobetsa mona ho bua ka tokomane `i18` ho lokisa tokeno ea phihlello](/i18/use) .

## Morero Oa Demo

Ha re qale ka morero oa demo ho ithuta ho sebelisa `i18n.site` .

Re qala ka ho kopanya polokelo ea demo ebe re tsamaisa taelo ka tsela e latelang:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Basebelisi naheng ea China ba ka:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Lebitso la bukana la `demo.i18n.site` code base clone e tlameha ho ba `md` ho thusa ponelo-pele ea sebaka ka `docker` .

### Fetolela

Ntlha ea pele, kenya `md` directory mme u tsamaise `i18n.site` , e tla fetolela `en` ho `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Kamora ho sebetsa, lifaele tsa phetolelo `git add . ` cache li tla `md` .

### Tlhahlobo Ea Lehae

Kenya 'me u qale `docker` (mosebelisi `MAC` o khothaletsa ho sebelisa [orbstack](https://orbstack.dev) joalo ka nako ea ho sebetsa bakeng sa `docker` ).

Ebe, kenya `docker` directory 'me u tsamaise `./up.sh` , ebe u [https://127.0.0.1](https://127.0.0.1) ho bona esale pele sebakeng sa heno.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Litaba Tsa Poso

`i18n.site` e amohela moralo [oa ts'ebeliso ea leqephe le le leng](https://developer.mozilla.org/docs/Glossary/SPA) , mme leqephe la ho kena webosaeteng le litaba tsa webosaete li tsamaisoa ka boikemelo.

Ka mor'a ho sebelisa phetolelo e ka holimo, li-directory `htm` le `v` li tla hlahisoa tlas'a `md/out/dev` directory.

Mona, `dev` e bolela hore e hahiloe ho latela faele `.i18n/htm/dev.yml` ea tlhophiso.

`dev` directory :

`htm` directory ke leqephe la ho kena webosaeteng.

Lenane la `v` le na le litaba tsa sebaka sa marang-rang tse nang le linomoro tsa mofuta.

Ponahalo ea lehae ha e tsotelle nomoro ea mofuta mme e tla kopitsa lifaele tsohle bukeng ea `out/dev/v/0.1.0` .

Bakeng sa tokollo ea semmuso, lifaele tse fetotsoeng li tla kopitsoa bukeng ea nomoro ea mofuta o mocha.

#### Hlalosa Faele Ea Tlhophiso Ka `-c`

Lifaele tse fapaneng tsa tlhophiso li tla theha li-directory tse tsamaellanang bukeng ea `out` .

Mohlala, `.i18n/htm/ol.yml` e tla theha `out/ol` directory.

`dev.yml` le `ol.yml` ke litlhophiso tsa kamehla.

`dev` ke khutsufatso ea `development` , e bonts'ang tikoloho ea nts'etsopele, e sebelisetsoang tlhahlobo ea lehae, hape ke faele ea kamehla ea tlhophiso.
`ol` ke khutsufatso ea `online` , e bonts'ang tikoloho ea inthaneteng, e sebelisetsoang tokollo ea semmuso Hape ke faele e hlophisitsoeng ea kamehla ha u sebelisa li-parameter tsa mola oa taelo `-n` ho isa ho `npm` ho lokolla.

U ka boela ua theha lifaele tse ling tsa tlhophiso Sebelisa `--htm_conf` moleng oa taelo ho hlakisa lebitso la faele eo u lokelang ho e sebelisa.

ka mohlala:
```
i18n.site --htm_conf yourConfig --save
```

Mona `--save` e emela nomoro ea tokollo ea ntlafatso.

#### <a rel=id href="#npm" id="npm"></a> Phatlalatsa litaba ho npmjs.com

[Ho](/i18n.site/feature#ha) phatlalatsa litaba ho [npmjs.com](//npmjs.com)

##### npm login &

Kenya `nodejs` , kena ka `npm login` .

Fetola `md/.i18n/htm/ol.yml` me u fetole boleng ba [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` joalo ka lebitso la sephutheloana sa hau se sa `npm` se [npmjs.com](//npmjs.com) etsoa.

Ebe u fetola `md/.i18n/htm/ol.package.json`

Matha `i18n.site --npm` kapa `i18n.site -n` bukeng ea `md` ho fetolela le ho phatlalatsa.

Haeba u sebelisa tikoloho e tsoelang pele ea ho kopanya ho phatlalatsa, ha ho hlokahale hore u kenye `nodejs` , kopitsa feela ho kenngoa le ho phatlalatsa tumello ea `~/.npmrc` tikolohong.

Haeba u fetola lebitso la sephutheloana sa `v:` ho `ol.yml` , ka kopo **etsa bonnete ba hore u hlakola `.i18n/v/ol` pele** ebe u e phatlalatsa.

##### Seva Ea Moemeli E Hatisitsoeng Ke npm

Haeba basebelisi ba naha ea China ba kopana le mathata a marang-rang 'me ba sa khone ho phatlalatsa liphutheloana `npm` , ba ka beha phetoho ea tikoloho `https_proxy` ho lokisa seva sa proxy.

Ka ho nka hore boema-kepe ba hau ba proxy ke `7890` , u ka ngola:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Boiketsi Ba Dikahare

Haeba u batla ho iketsetsa litaba, qala ka ho hlophisa `md/.i18n/htm/ol.yml` 'me u fetole `v: //unpkg.com/i18n.site` ho sehlomathiso sa URL ea hau, joalo ka `v: //i18n-v.xxx.com` .

Kenya `md` directory ebe u matha

```
i18n.site --htm_conf ol --save
```

kapa kgutsufatso

```
i18n.site -c ol -s
```

Ebe, lokisa litaba tse bukeng ea `md/out/ol/v` ho tsela ea URL e behiloeng ho `v:` .

Qetellong, **lokisa nako ea cache ea tsela e qetellang ka `/.v` ho `1s`** , ho seng joalo litaba tse sa tsoa lokolloa li ke ke tsa fumaneha hang-hang.

Nako ea cache ea litsela tse ling e ka beoa selemo se le seng kapa ho feta ho fokotsa likopo tse sa hlokahaleng.

##### Ba Amohela Litaba Tsa s3

Ho iketsetsa litaba, ntle le ho sebelisa `CDN` sa hau, khetho e 'ngoe e tloaelehileng ke ho sebelisa `S3` + .

U ka sebelisa [rclone](https://rclone.org) ho kena ho `S3` seva, ebe u sheba le ho fetola script e latelang, 'me u kopitse liphetoho tse ntseng li eketseha ho `S3` bakeng sa tokollo e' ngoe le e 'ngoe.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Hopola ho lokisa `CDN` e le hore nako ea cache ea tsela e qetellang ka `/.v` ke `1s` , ho seng joalo litaba tse sa tsoa lokolloa li ke ke tsa fumanoa hang-hang.

### Phatlalatsa Websaeteng

Webosaete e ka romelloa kae kapa kae, [github page](https://pages.github.com) me [cloudflare page](https://pages.cloudflare.com) ke likhetho tse ntle.

Hobane sebaka sa marang-rang se sebelisa sebopeho [sa ts'ebeliso ea leqephe le le leng](https://developer.mozilla.org/docs/Glossary/SPA) , hopola ho ngola bocha litsela tsa URL tse se nang `. ` ho isa ho `index.html` .

Leqephe la ho kena sebakeng sa marang-rang le hloka ho romelloa hang feela, 'me ha ho na tlhoko ea ho khutlisetsa leqephe la ho kena webosaeteng bakeng sa lintlafatso tsa litaba tse latelang.

#### Kenya Leqephe La github

[Tlanya mona pele github Ho theha mokhatlo](https://github.com/account/organizations/new?plan=free) Lebitso le latelang ke `i18n-demo` e le mohlala.

Ebe u theha ntlo ea polokelo `i18n-demo.github.io` tlasa mokhatlo ona (ka kopo tlosa `i18n-demo` ka lebitso la mokhatlo leo u le thehileng):

![](https://p.3ti.site/1721098657.avif)

Ha u phatlalatsa litaba tse hlahang sehloohong se fetileng, `out/ol/htm` e entsoe ka kopo, kenya bukana ena 'me u e tsamaise :

```
ln -s index.html 404.html
```


Hobane `github page` ha e tšehetse ho ngola bocha ha tsela ea URL, ho sebelisoa `404.html` ho fapana le hoo.

Ebe u tsamaisa taelo e latelang bukeng ea `htm` (hopola ho nkela `i18n-demo/i18n-demo.github.io.git` sebaka ka aterese ea hau ea polokelo) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ka mor'a ho sutumetsa khoutu, emela hore ho romelloa ha `github page` ho sebetsa ka katleho (joalokaha ho bontšitsoe ka tlase) pele u ka e fumana.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Bakeng sa leqephe la demo ka kopo bona:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### E Sebelisa Leqepheng La cloudflare

Ha [cloudflare page](//pages.cloudflare.com) bapisoa le `github page` , e fana ka mokhoa oa ho ngola hape 'me e na le botsoalle ho naha ea China mme e fumaneha habonolo.

Ho romelloa ha `cloudflare page` hangata ho ipapisitse le ho romelloa ha `github page` ka holimo.

Theha morero 'me u tlamelle ntlo ea polokelo `i18n-demo.github.io` ka holimo.

Mokhoa ona o bontšoa setšoantšong se ka tlase:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Ka kopo, tobetsa `Add Account` ho fana ka monyetla oa ho kena mokhatlong `i18n-demo` .

Haeba u tlamme ntlo ea polokelo ea mokhatlo o mong, u ka 'na ua hloka ho tobetsa `Add Account` habeli ho fana ka tumello habeli pele mokhatlo o mocha o tla hlahisoa.

![](https://p.3ti.site/1721118306.avif)

E latelang, khetha ntlo ea polokelo `i18n-demo.github.io` , ebe u tobetsa `Begin setup` , 'me u sebelise litekanyetso tsa kamehla bakeng sa mehato e latelang.

![](https://p.3ti.site/1721118490.avif)

Kamora ho tlama kgetlo la pele, o hloka ho ema metsotso e seng mekae pele o ka kena ho yona.

Kamora ho romelloa, o ka tlama lebitso la domain name.

![](https://p.3ti.site/1721119459.avif)

Kamora ho tlama lebitso la domain name, ka kopo e-ea ho domain name ho hlophisa mokhoa oa ho ngola hape oa ts'ebeliso ea leqephe le le leng, joalo ka ha ho bonts'itsoe ka tlase:

![](https://p.3ti.site/1721119320.avif)

Melao e setšoantšong se ka holimo ke `i18n.site` latelang.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Ho phaella moo, ka kopo, lokisa melao ea cache, joalokaha ho bontšitsoe ka tlase, 'me u behe nako ea nako ea cache ho khoeli e le' ngoe.

![](https://p.3ti.site/1721125111.avif)

Ka kopo fetola lebitso la domain name le ts'oanang mohatong oa bobeli setšoantšong se kaholimo ho lebitso la sebaka seo u se tlamileng.

#### Ho Ntlafatsa Phepelo Ea Webosaete Naheng Ea China

Haeba u batla ho fumana ts'ebetso e betere ea phihlello tikolohong ea marang-rang ea China, ka kopo [ngodisa lebitso la domain](//beian.aliyun.com) pele.

Joale, sebelisa polokelo ea lintho tsa barekisi ba maru naheng ea + `CDN` Kenya litaba tse latelang `out/ol/htm` .

U ka sebelisa komporo ea moeli ho ngola tsela ea ho ikamahanya le lits'ebetso tsa leqephe le le leng Ka mohlala, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) e ka hlophisoa tjena:

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

Hobane rekoto ea `MX` le rekoto ea `CNAME` e ke ke ea phela hammoho, haeba u batla ho fumana li-imeile tsa mabitso a marang-rang ka nako e le 'ngoe, u hloka ho sebelisana le lengolo `CNAME` [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) rekota `A` .

Ntle le moo, hobane litefiso tsa sephethe-phethe tsa mose ho maoatle tsa barekisi ba maru naheng ea China li batla li le turu, haeba u batla ho ntlafatsa litšenyehelo, u ka sebelisa [DNS ea mahala ea Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) le lebitso la domain la [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (joalo ka ha ho bonts'itsoe ka tlase) ho fihlela phaposo ea sephethephethe──Sephethephethe naheng ea China Baidu Cloud `CDN` , sephethephethe sa machaba se ea cloudflare .

![](https://p.3ti.site/1721119788.avif)

Litharollo tsena tsa ntlafatso ea thomello li rarahane haholoanyane 'me li tla hlahisoa likhaolong tse fapaneng nakong e tlang.

#### Tlosa Sebaka Sa Marang-Rang Sa Generic

Haeba u sebelisa `i18n.site` ho hlahisa sebaka sa marang-rang e le sebaka sa hau sa marang-rang se ka sehloohong, hangata ho hlokahala hore u lokise mokhoa oa ho tsamaisa sebaka sa marang-rang, ke hore, ho tsamaisa phihlello ho `*.xxx.com` (ho kenyeletsoa `www.xxx.com` ) ho ea ho `xxx.com` .

Tlhokahalo ena e ka finyelloa ka thuso ea Alibaba Cloud `CDN` `EdgeScript` ( [tokomane ea Senyesemane](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Tokomane ea Sechaena](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Kenya lebitso la domain ho [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) me u supe lebitso la domain `*.xxx.com` `CNAME` ho Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Mohlala, sebopeho sa "pan-domain name redirection" ea `*.i18n.site` setšoantšong se kaholimo ke ka tsela e latelang:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### E Tsamaisa Ka nginx

Ka kopo, eketsa tlhophiso e ts'oanang le `/root/i18n/md/out/ol/htm` latelang serapeng sa `server` sa nginx `out/ol/htm`

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Sebopeho Sa Bukana

#### `public`

Lifaele tse tsitsitseng tsa sebaka sa marang-rang, joalo ka `favicon.ico` , `robots.txt` , joalo-joalo.

Lifaele tsa setšoantšo mona li ka hlahisoa ka [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Tlas'a bukana ea `.i18n` ho na le lifaele tsa tlhophiso, cache ea phetolelo, joalo-joalo ea `i18n.site` Sheba khaolo e latelang ["Configuration"](/i18n.site/conf) bakeng sa lintlha.

#### `en`

Bukana ea puo ea mohloli, e tsamaellanang le `en` ho `fromTo` ho faele `.i18n/conf.yml` ea litlhophiso

```yaml
i18n:
  fromTo:
    en: zh
```

Ka kopo sheba tlhophiso ea phetolelo [i18](/i18/use)