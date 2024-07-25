# Kenya &

## Letšoao La Tlhophiso

`i18n.site` Sesebelisoa sa `i18` sa phetolelo se kentsoe, ka kopo, [tobetsa mona ho bua ka tokomane ea `i18` ho lokisa tokeno ea phihlello](/i18/use) .

## Kenya

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Morero Oa Demo

Ha re qaleng ka projeke ea demo mme re ithute ho e sebelisa `i18n.site`

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

`demo.i18n.site` `md` `docker`

### Fetolela

Ntlha ea `zh` `en` `i18n.site` `md`

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Kamora ho sebetsa, lifaele tsa phetolelo le `md` cache `git add . ` tla hlahisoa.

### Tlhahlobo Ea Lehae

Kenya 'me u `docker` ( `MAC` ba khothaletsa ho sebelisa [orbstack](https://orbstack.dev) joalo ka nako ea ho sebetsa ea `docker` ).

Ebe [https://127.0.0.1](https://127.0.0.1) kenya `./up.sh` la `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Litaba Tsa Poso

`i18n.site` E amohela moralo [oa ts'ebeliso ea leqephe le le leng](https://developer.mozilla.org/docs/Glossary/SPA) , 'me leqephe la monyako oa sebaka sa Marang-rang le litaba tsa sebaka sa Marang-rang li tsamaisoa ka boikemelo.

Kamora ho sebelisa phetolelo e kaholimo, litsamaiso tsa `htm` le `v` li tla hlahisoa bukeng ea `md/out/dev`

Mona `dev` e bontša hore e hahiloe ho latela faele ea `.i18n/htm/dev.yml` .

Tlas'a : `dev`

`htm` Tlas'a bukana ho na le leqephe la ho kena webosaeteng.

`v`

Ponahalo ea lehae e tla kopitsa lifaele tsohle bukeng ea `out/dev/v/0.1.0`

Bakeng sa tokollo ea semmuso, lifaele tse fetotsoeng li tla kopitsoa bukeng ea nomoro ea mofuta o mocha.

#### Sebelisa -c Ho Hlakisa Faele Ea Tlhophiso

Lifaele tse fapaneng tsa tlhophiso li tla theha li-directory tse tsamaellanang tlasa `out`

Ka `out/ol` , `.i18n/htm/ol.yml`

`dev.yml` mme `ol.yml` ke litlhophiso tsa kamehla.

`dev` ke khutsufatso ea `development` , e emelang tikoloho ea nts'etsopele, e sebelisoa bakeng sa ponelo-pele ea lehae, hape ke faele ea kamehla ea tlhophiso.
`ol` ke khutsufatso ea `online` , e emelang tikoloho ea marang-rang, e sebelisetsoang tokollo ea semmuso, hape ke faele ea kamehla ea tlhophiso ha e hatisoa ho `npm` o sebelisa paramethara ea mola oa taelo `-n` .

U ka boela ua etsa lifaele tse ling tsa tlhophiso `--htm_conf` moleng oa taelo ho hlakisa lebitso la faele ea tlhophiso:

ka mohlala:
```
i18n.site --htm_conf yourConfig --save
```

`--save` e bonts'a nomoro ea tokollo ea ntlafatso.

#### <a rel=id href="#npm" id="npm"></a> Phatlalatsa litaba ho npmjs.com

Ho phatlalatsa [litaba](/i18n.site/feature#ha) ho [npmjs.com](//npmjs.com)

##### npm login &

Kenya `nodejs` sebelisa `npm login` ho kena.

Fetola `md/.i18n/htm/ol.yml` fetola `i18n.site` in `v: //unpkg.com/i18n.site` hore e be ea hau `npm` lebitso la sephutheloana.

Sebelisa feela lebitso la sephutheloana se sa sebetseng ho sebelisa lebitso la sebaka sa marang- [npmjs.com](//npmjs.com) kaha lebitso la sephutheloana ke khetho e ntle.

Ha u hatisa ho ipapisitsoe le sephutheloana sa `npm` , **etsa bonnete ba hore u sebelisa `//unpkg.com/`** e le sehlomathiso sa boleng ba `v:` Nako ea "cache" `i18n.site` tlas'a tsela ena ea prefix `/.v` e ntlafalitsoe ka ho khetheha ho thusa ho shebella ka nako e ncha.

Matha `i18n.site --npm` kapa `i18n.site -n` `md` ea ho fetolela le ho phatlalatsa.

Haeba u sebelisa tikoloho e tsoelang pele ea ho kopanya ho phatlalatsa, ha ho na lebaka la ho e kenya `nodejs` Kopitsa tumello ea ho kena le e hatisitsoeng `~/.npmrc` tikolohong.

Haeba u fetola lebitso la sephutheloana ho `v:` in `ol.yml` ka kopo **etsa bonnete ba hore u hlakola `.i18n/v/ol` pele** ebe u e phatlalatsa.

##### Seva Ea Moemeli E Phatlalalitsoeng Ke npm

Haeba basebelisi ba naha ea China ba kopana le mathata a marang-rang 'me ba sa khone ho phatlalatsa sephutheloana `https_proxy` `npm`

Ho nka hore boema-kepe ba hau ba proxy ke `7890` o ka ngola:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Boiketsi Ba Dikahare

Haeba u batla ho iketsetsa litaba, pele, hlophisa `md/.i18n/htm/ol.yml` me u fetole `v: //unpkg.com/i18n.site` ho sehlomathiso sa hau sa URL, joalo ka `v: //i18n-v.xxx.com` .

Kenya bukana ea `md`

```
i18n.site --htm_conf ol --save
```

kapa kgutsufatso

```
i18n.site -c ol -s
```

Ebe, lokisa litaba tse bukeng `v:` `md/out/ol/v`

Qetellong, **lokisa nako ea cache ea tsela `/.v` qetellang ho `1s`** , ho seng joalo litaba tse sa tsoa lokolloa li ke ke tsa fumaneha hang-hang.

Nako ea cache ea litsela tse ling e ka beoa selemo se le seng kapa ho feta ho fokotsa likopo tse sa hlokahaleng.

##### Ba Amohela Litaba Tsa s3

Ho iketsetsa litaba, ntle le ho sebelisa seva ea hau, khetho `CDN` 'ngoe e tloaelehileng ke ho + `S3`

U ka sebelisa seva [rclone](https://rclone.org) `S3` , ebe u sheba le ho fetola sengoloa se ka tlase, 'me u kopitse feela liphetoho tse ntseng li eketseha ho `S3` nako le nako ha u phatlalatsa.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Hopola ho lokisa `CDN` E le hore nako ea cache ea tsela e qetellang ka `/.v` ke `1s` , ho seng joalo u ke ke ua khona ho fumana litaba tse sa tsoa lokolloa hang-hang.

### Phatlalatsa Websaeteng

Webosaete e ka romelloa kae kapa kae, [github page](https://pages.github.com) me [cloudflare page](https://pages.cloudflare.com) ke likhetho tse ntle.

Hobane sebaka sa marang-rang se amohela moralo oa ts'ebeliso `index.html` [leqephe le le leng](https://developer.mozilla.org/docs/Glossary/SPA) , hopola ho ngola hape tsela ea URL e se nang `. `

Leqephe la ho kena sebakeng sa marang-rang le hloka ho romelloa hang feela, 'me ha ho na tlhoko ea ho khutlisetsa leqephe la ho kena webosaeteng bakeng sa lintlafatso tsa litaba tse latelang.

#### Kenya Leqephe La github

[Tlanya github](https://github.com/account/organizations/new?plan=free) pele `i18n-demo`

Ebe u theha sebaka sa `i18n-demo` tlasa mokhatlo ona `i18n-demo.github.io`

<img alt="" src="https://p.3ti.site/1721098657.avif">

Ha u phatlalatsa litaba tse hlahang sehloohong se fetileng, e se e hlahisitsoe ka kopo `out/ol/htm` kenya bukana ena 'me u e tsamaise :

```
ln -s index.html 404.html
```


`404.html` `github page`

Ebe `i18n-demo/i18n-demo.github.io.git` tsamaisa taelo e latelang bukeng : `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Ka mor'a ho sutumetsa khoutu, emela hore ho tsamaisoa ha `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Bakeng sa leqephe la demo ka kopo bona:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### E Sebelisa Leqepheng La cloudflare

[cloudflare page](//pages.cloudflare.com) Ha e bapisoa le `github page` e fana ka mokhoa oa ho ngola hape o mosa ho naha ea China 'me e ea khothaletsoa ho e sebelisa.

`cloudflare page` thomello hangata e ipapisitse le ho romelloa ha `github page` ka holimo.

Theha morero 'me u tlamelle ntlo ea polokelo e kaholimo `i18n-demo.github.io`

Mokhoa ona o bontšoa setšoantšong se ka tlase:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Ka kopo, tobetsa `Add Account` ho fana ka monyetla oa ho fihlella `i18n-demo` .

Haeba u tlamme ntlo ea polokelo ea mokhatlo o mong, u ka 'na ua hloka ho `Add Account` habeli ho e lumella habeli pele mokhatlo o mocha o tla hlahisoa.

<img alt="" src="https://p.3ti.site/1721118306.avif">

E latelang khetha `i18n-demo.github.io` Warehouse, ebe o tobetsa `Begin setup` , 'me u sebelise litekanyetso tsa kamehla bakeng sa mehato e latelang.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Kamora ho tlama kgetlo la pele, o hloka ho ema metsotso e seng mekae pele o ka kena ho yona.

Kamora ho romelloa, o ka tlama lebitso la domain name.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Kamora ho tlama lebitso la domain name, ka kopo e-ea ho domain name ho hlophisa mokhoa oa ho ngola hape oa ts'ebeliso ea leqephe le le leng, joalo ka ha ho bonts'itsoe ka tlase:

<img alt="" src="https://p.3ti.site/1721119320.avif">

`i18n.site` e setšoantšong se ka holimo ke e latelang.

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

Ho phaella moo, ka kopo, lokisa melao ea cache, joalokaha ho bontšitsoe ka tlase, 'me u behe nako ea nako ea cache ho khoeli e le' ngoe.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Ka kopo fetola lebitso la domain name le ts'oanang mohatong oa bobeli setšoantšong se kaholimo ho lebitso la sebaka seo u se tlamileng.

#### Ho Ntlafatsa Phepelo Ea Webosaete Naheng Ea China

Haeba u batla ho fumana ts'ebetso e betere ea phihlello tikolohong ea marang-rang ea China, ka kopo [ngodisa lebitso la domain](//beian.aliyun.com) pele.

Ebe, sebelisa polokelo `out/ol/htm` lintho ea barekisi `CDN` maru naheng ea China +

U ka sebelisa komporo ea moeli ho ngola tsela ea ho ikamahanya le lits'ebetso tsa leqephe le le leng, joalo ka [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) E ka hlophisoa tjena:

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

`MX` lirekoto le lirekoto tsa `CNAME` li ke ke tsa phela hammoho, haeba u batla ho fumana mangolo-tsoibila a mabitso a marang-rang ka nako e le 'ngoe, u hloka ho sebelisana le [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) ho batalatsa `CNAME` ho `A` rekoto.

Ntle le moo, hobane litefiso tsa sephethe-phethe tsa mose ho maoatle tsa barekisi ba maru naheng ea China li batla li le turu, haeba u batla ho ntlafatsa litšenyehelo, u ka sebelisa [qeto ea mahala ea Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) le lebitso la domain la [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (joalo ka ha ho bonts'itsoe ka tlase) ho fihlela phaposo ea sephethephethe──Sephethephethe naheng ea China Baidu Cloud `CDN` sephethephethe sa machaba se ea cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Litharollo tsena tsa ntlafatso ea thomello li rarahane haholoanyane 'me li tla hlahisoa likhaolong tse fapaneng nakong e tlang.

#### Tlosa Sebaka Sa Marang-Rang Sa Generic

Haeba u sebelisa `i18n.site` ho hlahisa sebaka sa marang-rang e le sebaka sa hau sa marang-rang sa mantlha, hangata o hloka ho hlophisa phetisetso ea sebaka sa marang-rang, ke hore, ho tsamaisa `*.xxx.com` (ho kenyeletsoa `www.xxx.com` ) phihlello ho `xxx.com` .

Tlhokahalo ena e ka finyelloa ka thuso ea `CDN` `EdgeScript` Cloud ( [tokomane ea Senyesemane](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Tokomane ea Sechaena](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Kenya lebitso la domain ho [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) 'me u supe `*.xxx.com` sebaka ho Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Mohlala, tlhophiso ea sebaka sa marang-rang sa marang-rang `*.i18n.site` setšoantšong se kaholimo e tjena:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### E Tsamaisa Ka nginx

Ka kopo, eketsa tlhophiso e ts'oanang le e latelang `server` nginx moo `/root/i18n/md/out/ol/htm` ka kopo e fetole tsela ea projeke ea hau `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Sebopeho Sa Directory

#### Setjhaba

Lifaele tse tsitsitseng tsa sebaka sa marang-rang, joalo ka `favicon.ico` `robots.txt` , joalo-joalo.

Lifaele tsa setšoantšo mona li ka hlahisoa ka [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Tlas'a bukana ho na le lifaele tsa `i18n.site` tsa tlhophiso, cache ea phetolelo, joalo-joalo. Sheba khaolo e latelang ea ["Configuration"](/i18n.site/conf) bakeng sa lintlha.

#### en

Bukana ea puo ea mohloli, e tsamaellanang `.i18n/conf.yml` `fromTo` `en` faeleng ea tlhophiso

```yaml
i18n:
  fromTo:
    en: zh
```

Ka kopo sheba tlhophiso ea phetolelo [i18](/i18/use)

