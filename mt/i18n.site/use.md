# Installa &

## Token Tal-Konfigurazzjoni

L `i18n.site` għodda tat-traduzzjoni `i18` hija inkorporata, jekk jogħġbok [ikklikkja hawn biex tirreferi għad-dokument `i18` biex tikkonfigura t-token tal-aċċess](/i18/use) .

## Installa

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Proġett Demo

Nibdew bi proġett demo u nitgħallmu kif tuża `i18n.site`

L-ewwel nikklonajna r-repożitorju tad-demo u nħaddmu l-kmand kif ġej:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Utenti fiċ-Ċina kontinentali jistgħu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

L-isem tad-direttorju tal-klonu tal-bażi tal-kodiċi għandu jkun `md` biex jiffaċilita l-preview lokali b `docker` `demo.i18n.site`

### Tittraduċi

L-ewwel, daħħal id `md` direttorju u mexxi `i18n.site` , li se jittraduċi `en` għal `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Wara t-tħaddim, jiġu ġġenerati fajls tat-traduzzjoni u tal-cache. Jekk jogħġbok ftakar li żżidhom fir-repożitorju `git add . ` fid-direttorju `md`

### Preview Lokali

Installa u `docker` ( `MAC` jirrakkomandaw li tuża [orbstack](https://orbstack.dev) bħala l - runtime ta `docker` ).

Imbagħad, daħħal id-direttorju `docker` u mexxi `./up.sh` , u mbagħad żur [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Kontenut

Jadotta arkitettura [ta' applikazzjoni ta' paġna waħda](https://developer.mozilla.org/docs/Glossary/SPA) , u l-paġna tad-dħul tal-websajt u l `i18n.site` kontenut tal-websajt huma skjerati b'mod indipendenti.

Wara li tmexxi t-traduzzjoni ta' hawn fuq, id-direttorji `htm` u `v` se jiġu ġġenerati fid-direttorju `md/out/dev`

Hawnhekk `dev` tindika li hija mibnija fuq il-fajl `.i18n/htm/dev.yml` .

Taħt : -kontenut `dev`

Taħt id-direttorju hemm il-paġna tad-dħul tal-websajt `htm`

`v` Id-direttorju fih il-kontenut tal-websajt bin-numru tal-verżjoni.

Preview lokali se tikkopja l-fajls kollha fid-direttorju `out/dev/v/0.1.0`

Għar-rilaxx uffiċjali, il-fajls mibdula jiġu kkupjati fid-direttorju tan-numru tal-verżjoni l-ġdid.

#### Uża -c Biex Tispeċifika L-Fajl Tal-Konfigurazzjoni

Fajls ta' konfigurazzjoni differenti se joħolqu direttorji korrispondenti taħt id-direttorju `out`

Per eżempju `.i18n/htm/ol.yml` se toħloq `out/ol` direttorju.

`dev.yml` u `ol.yml` huma l-konfigurazzjonijiet default.

`dev` hija l-abbrevjazzjoni ta' `development` , li tirrappreżenta l-ambjent tal-iżvilupp, tintuża għall-preview lokali, u hija wkoll il-fajl tal-konfigurazzjoni default.
`ol` l-abbrevjazzjoni ta' `online` , li tirrappreżenta l-ambjent onlajn, tintuża għar-rilaxx uffiċjali, u hija wkoll il-fajl tal-konfigurazzjoni default meta tippubblika għal `npm` bl-użu tal-parametru tal-linja tal-kmand `-n` .

Tista 'wkoll toħloq fajls ta' konfigurazzjoni oħra `--htm_conf` fuq il-linja tal-kmand biex tispeċifika l-isem tal-fajl tal-konfigurazzjoni:

pereżempju:
```
i18n.site --htm_conf yourConfig --save
```

`--save` jindika n-numru tal-verżjoni tar-rilaxx tal-aġġornament.

#### <a rel=id href="#npm" id="npm"></a> Ippubblika l-kontenut fuq npmjs.com

Il-pubblikazzjoni ta' kontenut għal [npmjs.com](//npmjs.com) hija s-soluzzjoni default rakkomandata (ara [Disponibbiltà Għolja ta' Front-end](/i18n.site/feature#ha) ).

##### npm login & Rilaxx

Installa `nodejs` uża `npm login` biex tidħol.

Editja `md/.i18n/htm/ol.yml` ibdel `i18n.site` f' `v: //unpkg.com/i18n.site` għal tiegħek `npm` isem il-pakkett.

Uża biss l-isem tal-pakkett mhux okkupat fuq [npmjs.com](//npmjs.com)

Meta tippubblika bbażat fuq il-pakkett `npm` , **kun żgur li tuża `//unpkg.com/`** bħala l-prefiss tal-valur `v:` Il-ħin tal-cache `i18n.site` taħt dan il-passaġġ tal-prefiss `/.v` ġie ottimizzat apposta biex jippermetti l-wiri f'waqtu ta 'rilaxxi ġodda.

Mexxi `i18n.site --npm` jew `i18n.site -n` fid `md` direttorju biex tittraduċi u tippubblika.

Jekk tuża ambjent ta' integrazzjoni kontinwa biex tippubblika, m'hemmx bżonn li tinstallah `nodejs` tikkopja l-permess li illoggja u ppubblikat `~/.npmrc` fl-ambjent.

Jekk timmodifika l-isem tal-pakkett f' `v:` `ol.yml` , jekk jogħġbok **kun żgur li tħassar `.i18n/v/ol` l-ewwel** u mbagħad ippubblikah.

##### Proxy Server Ippubblikat Minn npm

Jekk l-utenti fiċ-Ċina kontinentali jiltaqgħu `https_proxy` ' problemi tan-netwerk u ma jistgħux jippubblikaw il-pakkett `npm`

Jekk wieħed jassumi li l-port tas-server proxy tiegħek huwa `7890` tista' tikteb:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Kontenut Self-Hosted

Jekk trid tospita l-kontenut, l-ewwel, `md/.i18n/htm/ol.yml` u biddel `v: //unpkg.com/i18n.site` għall-prefiss tal-URL tiegħek, bħal `v: //i18n-v.xxx.com` .

Daħħal id-direttorju `md`

```
i18n.site --htm_conf ol --save
```

jew abbrevjazzjoni

```
i18n.site -c ol -s
```

Imbagħad, ikkonfigura l-kontenut fid `md/out/ol/v` direttorju għall-passaġġ tal-prefiss tal-URL stabbilit f' `v:` .

Fl-aħħarnett, **ikkonfigura l-ħin tal-cache tal-mogħdija `/.v` tispiċċa fi `1s`** , inkella l-kontenut li għadu kif ħareġ ma jistax jiġi aċċessat immedjatament.

Il-ħin tal-cache għal mogħdijiet oħra jista 'jiġi ssettjat għal sena jew aktar biex jitnaqqsu t-talbiet mhux meħtieġa.

##### Ospitanti Kontenut Għal s3

Biex tospita l-kontenut, minbarra li tuża `CDN` -server tiegħek, għażla komuni oħra hija li tuża `S3` +

Tista' tuża `S3` [rclone](https://rclone.org) Login, imbagħad irreferi u timmodifika l-iskript hawn taħt, u tikkopja biss bidliet inkrementali għal `S3` kull darba li tippubblika.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ftakar li tikkonfigura `CDN` sabiex il-ħin tal-cache tal-mogħdija li tispiċċa f' `/.v` ikun `1s` , inkella ma tkunx tista' taċċessa l-kontenut li għadu kemm ħareġ immedjatament.

### Tippubblika Websajt

Il-websajt tista' tiġi skjerata kullimkien [github page](https://pages.github.com) u [cloudflare page](https://pages.cloudflare.com) huma għażliet tajbin.

Minħabba li l-websajt tadotta l-arkitettura ta ' [applikazzjoni ta' paġna waħda](https://developer.mozilla.org/docs/Glossary/SPA) , ftakar li terġa 'tikteb il-passaġġ tal-URL li ma `. ` għal `index.html` .

Il-paġna tad-dħul tal-websajt teħtieġ li tiġi skjerata darba biss, u m'hemmx bżonn li terġa' titħaddem il-paġna tad-dħul tal-websajt għal aġġornamenti sussegwenti tal-kontenut.

#### Użu Fuq Il-Paġna github

L-ewwel [ikklikkja github biex toħloq organizzazzjoni](https://github.com/account/organizations/new?plan=free) L-isem ta' l-organizzazzjoni li ġej `i18n-demo`

Imbagħad oħloq maħżen taħt din l `i18n-demo.github.io` organizzazzjoni (Jekk jogħġbok ibdel `i18n-demo` bl-isem tal-organizzazzjoni li ħloqt):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Meta tippubblika l-kontenut fl-artiklu preċedenti, ġie ġġenerat `out/ol/htm` Jekk jogħġbok daħħal dan id-direttorju u run :

```
ln -s index.html 404.html
```


Minħabba `github page` ma jappoġġjax il-kitba mill-ġdid tal-passaġġ tal-URL, għalhekk `404.html` jintuża minflok.

Imbagħad mexxi l `i18n-demo/i18n-demo.github.io.git` kmand li ġej `htm` direttorju :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Wara li timbotta l-kodiċi, stenna li l-iskjerament ta `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Għal paġna demo jekk jogħġbok ara:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Uża Fuq Il-Paġna cloudflare

Imqabbel ma `github page` [cloudflare page](//pages.cloudflare.com) jipprovdi kitba mill-ġdid u huwa aktar faċli għaċ-Ċina kontinentali u huwa aktar aċċessibbli.

`cloudflare page` L-iskjerament huwa ġeneralment ibbażat fuq l-iskjerament ta `github page` hawn fuq.

Oħloq proġett u torbot il-maħżen ta 'hawn fuq `i18n-demo.github.io`

Il-proċess jidher fil-figura hawn taħt:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Jekk jogħġbok `Add Account` biex tagħti aċċess għall- `i18n-demo` .

Jekk ilbot il-maħżen ta' organizzazzjoni oħra, jista' jkollok bżonn `Add Account` darbtejn biex tawtorizzaha darbtejn qabel ma tintwera l-organizzazzjoni l-ġdida.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Imbagħad agħżel `i18n-demo.github.io` , imbagħad ikklikkja `Begin setup` , u uża l-valuri default għall-passi sussegwenti.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Wara li torbot għall-ewwel darba, trid tistenna ftit minuti qabel ma tkun tista' taċċessah.

Wara l-iskjerament, tista' torbot isem tad-dominju tad-dwana.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Wara li torbot l-isem tad-dominju tad-dwana, jekk jogħġbok mur fl-isem tad-dominju biex tikkonfigura l-kitba mill-ġdid tal-passaġġ tal-applikazzjoni ta 'paġna waħda, kif muri hawn taħt:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Ir `i18n.site` regoli fl-istampa ta' hawn fuq huma kif ġej.

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

Barra minn hekk, jekk jogħġbok ikkonfigura r-regoli tal-cache, kif muri hawn taħt, u ssettja t-tul tal-cache għal xahar.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Jekk jogħġbok ibdel l-isem tad-dominju li jaqbel fit-tieni pass fl-istampa ta' hawn fuq għall-isem tad-dominju li torbot.

#### Ottimizzazzjoni Tal-Iskjerament Tal-Websajt Fiċ-Ċina Kontinentali

Jekk trid tikseb prestazzjoni aħjar ta 'aċċessibbiltà fl-ambjent tan-netwerk taċ-Ċina kontinentali, jekk jogħġbok [irreġistra isem ta' dominju](//beian.aliyun.com) l-ewwel.

Imbagħad, uża l-ħażna tal `out/ol/htm` oġġetti tal-bejjiegħa tas-sħab fiċ `CDN` Ċina kontinentali +

Tista 'tuża edge computing biex tikteb mill-ġdid il-mogħdija biex tadatta għal applikazzjonijiet ta' paġna waħda, bħal [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) Jista 'jiġi kkonfigurat hekk:

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

Minħabba `MX` r-rekords u `CNAME` rekords ma jistgħux jeżistu flimkien, jekk trid tirċievi emails bl-isem tad-dominju fl-istess ħin, trid tikkoopera mal [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) iskript biex iċċattja `CNAME` fis- `A` rekord.

Barra minn hekk, minħabba li t-tariffi tat-traffiku barranin tal-bejjiegħa tas-sħab fiċ-Ċina kontinentali huma relattivament għaljin, jekk trid tottimizza l-ispejjeż, tista 'tuża [r-riżoluzzjoni ġeografika ħielsa ta DNS Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) u l-isem tad-dominju tad-dwana [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (kif muri hawn taħt) biex tikseb! devjazzjoni tat-traffiku──Traffiku fiċ-Ċina kontinentali Baidu Cloud `CDN` it-traffiku internazzjonali jmur cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Dawn is-soluzzjonijiet għall-ottimizzazzjoni tal-iskjerament huma aktar kumplessi u se jiġu introdotti f'kapitoli separati fil-futur.

#### Direzzjoni Mill-Ġdid Tal-Isem Tad-Dominju Ġeneriku

Jekk tuża `i18n.site` biex tiġġenera websajt bħala l-websajt prinċipali tiegħek, normalment ikollok bżonn tikkonfigura direzzjoni mill-ġdid pan-domain, jiġifieri, tidderieġi mill-ġdid `*.xxx.com` (inkluż `www.xxx.com` ) aċċess għal `xxx.com` .

Dan ir-rekwiżit jista 'jinkiseb bl-għajnuna ta `CDN` Alibaba Cloud's `EdgeScript` ( [dokument bl-Ingliż](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Dokument Ċiniż](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Żid isem tad-dominju f'Alibaba [CDN](https://cdn.console.aliyun.com/domain/list) u poġġi `*.xxx.com` isem tad-dominju lejn Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Pereżempju, il-konfigurazzjoni tad-direzzjoni mill-ġdid tal-isem pan-dominju ta’ `*.i18n.site` fl-istampa ta’ hawn fuq hija kif ġej:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Użu B'nginx

Jekk jogħġbok żid konfigurazzjoni simili għal dan li ġej fil `server` nginx fejn `/root/i18n/md/out/ol/htm` jekk jogħġbok ibdelha għall - mogħdija tal - proġett tiegħek `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struttura Tad-Direttorju

#### Pubbliku

Fajls statiċi tal-websajt, bħal `favicon.ico` `robots.txt` , eċċ.

Il-fajls tal-ikona hawn jistgħu jiġu ġġenerati b' [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Taħt id-direttorju hemm il-fajls tal-konfigurazzjoni ta' `i18n.site` , il-cache tat-traduzzjoni, eċċ `.i18n` Ara l-kapitolu li jmiss ["Konfigurazzjoni"](/i18n.site/conf) għad-dettalji.

#### en

Direttorju tal-lingwa tas-sors, li jikkorrispondi `.i18n/conf.yml` `fromTo` `en` fil-fajl tal-konfigurazzjoni

```yaml
i18n:
  fromTo:
    en: zh
```

Jekk jogħġbok irreferi għall-konfigurazzjoni tat-traduzzjoni [i18](/i18/use)

