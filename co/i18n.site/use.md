# Installa &

## Token Di Cunfigurazione

U strumentu di traduzzione `i18` hè incrustatu `i18n.site` fate [un clic quì per riferite à u `i18` documentu per cunfigurà u token d'accessu](/i18/use) .

## Installa

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Prughjettu Demo

Cuminciamu cù un prughjettu demo è amparà à aduprà `i18n.site`

Prima clonemu u repository demo è eseguimu u cumandamentu cusì:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

L'utilizatori in Cina continentale ponu:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

U nome di u repertoriu di u clone di u codice deve esse `md` per facilità l'anteprima locale cù `docker` `demo.i18n.site`

### Traduce

Prima, entre in u `md` è eseguite `i18n.site` , chì traduce `en` à `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Dopu l'esecuzione, i fugliali di traduzzione è cache seranu generati, ricordate di aghjunghje à u repository `git add . ` in u cartulare `md`

### Preview Locale

Installa è `docker` ( `MAC` ricumandemu di utilizà [orbstack](https://orbstack.dev) cum'è runtime di `docker` ).

Dopu, entre in [https://127.0.0.1](https://127.0.0.1) `./up.sh` `docker`

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Post Cuntenutu

`i18n.site` una architettura [di l'applicazione di una sola pagina](https://developer.mozilla.org/docs/Glossary/SPA) , è a pagina di entrata di u situ web è u cuntenutu di u situ web sò implementati indipindente.

Dopu avè eseguitu a traduzzione sopra, i repertorii `htm` è `v` seranu generati in u cartulare `md/out/dev`

Quì `dev` indica chì hè custruitu nantu à u schedariu `.i18n/htm/dev.yml` .

`dev` Sottu cuntenutu :

`htm` u repertoriu hè a pagina di entrata di u situ.

`v` U repertoriu cuntene u cuntenutu di u situ web cù u numeru di versione.

L'anteprima locale copià tutti i fugliali in u `out/dev/v/0.1.0` , indipendentemente da u numeru di versione.

Per a liberazione ufficiale, i schedarii cambiati seranu copiati in u novu repertoriu di numeri di versione.

#### Aduprate -c Per Specificà U Schedariu Di Cunfigurazione

Diversi fugliali di cunfigurazione creanu cartulari currispondenti sottu u cartulare `out`

Per esempiu `.i18n/htm/ol.yml` creà un annuariu `out/ol` .

`dev.yml` è `ol.yml` sò e cunfigurazioni predeterminate.

`dev` l'abbreviazione di `development` , chì rapprisenta l'ambienti di sviluppu, hè utilizatu per a preview locale, è hè ancu u schedariu di cunfigurazione predeterminatu.
`ol` l'abbreviazione di `online` , chì rapprisenta l'ambiente in linea, hè utilizatu per a liberazione ufficiale, è hè ancu u schedariu di cunfigurazione predeterminatu quandu si publica à `npm` utilizandu u paràmetru di linea di cumanda `-n` .

Pudete ancu creà altri schedarii di cunfigurazione `--htm_conf` in a linea di cumanda per specificà u nome di u schedariu di cunfigurazione.

per esempiu:
```
i18n.site --htm_conf yourConfig --save
```

`--save` indica u numeru di versione di l'aghjurnamentu.

#### <a rel=id href="#npm" id="npm"></a> Publicate u cuntenutu à npmjs.com

A pubblicazione di cuntenutu à [npmjs.com](//npmjs.com) hè a suluzione predeterminata cunsigliata (vede [Front-end High Availability](/i18n.site/feature#ha) ).

##### npm login & Liberazione

Installa `nodejs` utilizate `npm login` per login.

Edite `md/.i18n/htm/ol.yml` cambiate `i18n.site` in `v: //unpkg.com/i18n.site` à u vostru propiu `npm` nome di u pacchettu.

Aduprà solu u nome di u pacchettu di u pacchettu in u [npmjs.com](//npmjs.com)

Quandu publicate nantu à u pacchettu `npm` , **assicuratevi di utilizà `//unpkg.com/`** cum'è u prefissu di u valore `v:` U tempu di cache `i18n.site` sottu sta strada di prefissu `/.v` hè stata ottimizzata per permette a visualizazione puntuale di e novi versioni.

Eseguite `i18n.site --npm` o `i18n.site -n` in u `md` per traduce è publicà.

Se aduprate un ambiente d'integrazione cuntinuu per publicà, ùn ci hè micca bisognu di stallà `nodejs` Basta copiate u permessu di login è publicatu `~/.npmrc` à l'ambiente.

Se mudificate u nome di u pacchettu in `v:` in `ol.yml` **assicuratevi di sguassà `.i18n/v/ol` prima** è di publicà.

##### Servitore Proxy Publicatu Da npm

Se l'utilizatori in a Cina continentale scontranu prublemi di rete è ùn sò micca capaci di publicà `npm` pacchettu, ponu stabilisce a variabile d'ambiente `https_proxy` per cunfigurà u servitore proxy.

Assumindu chì u vostru portu di u servitore proxy hè `7890` pudete scrive:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Cuntinutu Self-Hosted

Se vulete auto-ospitu u cuntenutu, prima, `md/.i18n/htm/ol.yml` è cambiate `v: //unpkg.com/i18n.site` à u vostru prefissu URL, cum'è `v: //i18n-v.xxx.com` .

Entra in u cartulare `md`

```
i18n.site --htm_conf ol --save
```

o abbreviazione

```
i18n.site -c ol -s
```

Allora, cunfigurà u cuntenutu in u `v:` `md/out/ol/v`

Infine, **cunfigurà u tempu di cache di u percorsu chì finisce `/.v` `1s`** , altrimente u cuntenutu appena liberatu ùn pò micca accede immediatamente.

U tempu di cache per altri percorsi pò esse stabilitu à un annu o più per riduce e richieste innecessarii.

##### Host Cuntenutu À s3

Per auttà u cuntenutu, in più di utilizà `CDN` vostru propiu servitore, una altra opzione cumuni hè di utilizà `S3` +

Pudete aduprà u servitore [rclone](https://rclone.org) `S3` , allora riferite è mudificà u script quì sottu, è copià solu i cambiamenti incrementali in `S3` ogni volta chì publicate.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ricurdatevi di cunfigurà `CDN` in modu chì u tempu di cache di u percorsu chì finisce in `/.v` hè `1s` , altrimenti ùn puderete micca accede immediatamente à u cuntenutu appena liberatu.

### Publicà U Situ Web

U situ web pò esse implementatu in ogni locu [github page](https://pages.github.com) è [cloudflare page](https://pages.cloudflare.com) sò boni scelte.

Perchè u situ web adopra l'architettura di [una applicazione di una sola pagina](https://developer.mozilla.org/docs/Glossary/SPA) , ricordate di riscrivite u percorsu URL chì ùn cuntene `. ` `index.html` .

A pagina di entrata di u situ web deve esse implementata solu una volta, è ùn ci hè micca bisognu di ripiglià a pagina di entrata di u situ web per l'aghjurnamenti di cuntenutu sussegwenti.

#### Implementa Nantu À a Pagina github

Prima [cliccate github per creà una urganizazione](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Allora crea un magazzinu sottu questa `i18n-demo.github.io` (per piacè rimpiazzà `i18n-demo` cù u nome di l'urganizazione chì avete creatu):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Quandu pubblicà u cuntenutu in l'articulu precedente, hè statu generatu `out/ol/htm` piacè entre in questu repertoriu è eseguite :

```
ln -s index.html 404.html
```


`github page` ùn sustene micca a riscrittura di u caminu di l'URL, cusì `404.html` hè utilizatu invece.

Allora eseguite u cumandimu `i18n-demo/i18n-demo.github.io.git` : u cartulare `htm`

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Dopu avè imbuttatu u codice, aspettate chì a implementazione di `github page`

<img src="//p.3ti.site/1721116586.avif" width="350px">

Per a pagina demo, vede:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Implementa Nantu À a Pagina cloudflare

In cunfrontu [cloudflare page](//pages.cloudflare.com) `github page` , furnisce a riscrittura di u caminu è hè più amichevule à a Cina continentale è hè più accessibile.

L'implementazione hè `cloudflare page` basatu annantu à l'implementazione di `github page` sopra.

Crea un prughjettu è legà u magazzinu sopra `i18n-demo.github.io`

U prucessu hè mostratu in a figura sottu:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Per piacè `Add Account` per dà accessu à l' `i18n-demo` .

Se avete ligatu u magazzinu di un'altra urganizazione, pudete avè bisognu di `Add Account` duie volte per l'autorizà duie volte prima chì a nova urganizazione sia visualizata.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Dopu selezziunate `i18n-demo.github.io` , dopu cliccate `Begin setup` , è utilizate i valori predeterminati per i passi successivi.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Dopu à ubligatoriu per a prima volta, avete bisognu di aspittà uni pochi di minuti prima di pudè accede.

Dopu a implementazione, pudete ligà un nome di duminiu persunalizatu.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Dopu avè vintu u nome di duminiu persunalizatu, andate à u nome di duminiu per cunfigurà a riscrittura di u percorsu di l'applicazione di una sola pagina, cum'è mostratu quì sottu:

<img alt="" src="https://p.3ti.site/1721119320.avif">

E regule in l'imaghjini sopra sò i seguenti, per piacè `i18n.site` in a prima linea sottu cù u nome di duminiu ligatu à voi.

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

Inoltre, cunfigurà e regule di cache, cum'è mostratu quì sottu, è stabilisce a durata di a cache à un mese.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Per piacè cambià u nome di duminiu chì currisponde à u sicondu passu in a stampa sopra à u nome di duminiu chì avete ligatu.

#### Ottimizza L'implementazione Di U Situ Web in Cina Continentale

Se vulete ottene u megliu rendimentu di l'accessibilità in l'ambiente di rete di a Cina continentale, [registrate prima un nome di duminiu](//beian.aliyun.com) .

Allora, aduprate u almacenamentu `CDN` `out/ol/htm` ughjettu di i venditori di nuvola in Cina continentale +

Pudete utilizà l'edge computing per riscrive u percorsu per adattà à l'applicazioni di una sola pagina, cum'è [Baidu Smart `CDN`](//cloud.baidu.com/product/cdn.html) pò esse cunfiguratu cusì:

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

`MX` i registri è `CNAME` record ùn ponu micca coesiste, se vulete riceve e-mail di nome `A` duminiu à u stessu tempu, avete bisognu `CNAME` cooperà cù u script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)

Inoltre, perchè e spese di trafficu d'oltremare di i venditori di nuvola in Cina continentale sò relativamente caru, se vulete ottimisà i costi, pudete aduprà [a risoluzione geografica gratuita di Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) è u nome di duminiu persunalizatu [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (cum'è mostratu quì sottu). Diversione di u trafficu──U trafficu in a Cina continentale Baidu Cloud `CDN` u trafficu internaziunale va cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Queste soluzioni di ottimisazione di implementazione sò più cumplesse è seranu introdutte in capituli separati in u futuru.

#### Redirezzione Di Nome Di Duminiu Genericu

Sè aduprate `i18n.site` per generà un situ web cum'è u vostru situ web principale, di solitu avete bisognu di cunfigurà a redirezzione di pan-dominiu, vale à dì, redirezzione `*.xxx.com` (inclusi `www.xxx.com` ) accessu à `xxx.com` .

Stu requisitu pò esse rializatu cù l'aiutu di Alibaba Cloud `CDN` `EdgeScript` ( [documentu inglese](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Documentu cinese](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Aghjunghjite un nome di duminiu in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) è puntate `*.xxx.com` nome di duminiu à Alibaba Cloud `CDN` 's `CNAME` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Per esempiu, a cunfigurazione di redirezzione di u nome di pan- `*.i18n.site` in a stampa sopra hè a seguente:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Implementa Cù nginx

Per piacè aghjunghje una cunfigurazione simile à a seguente in `server` nginx induve `/root/i18n/md/out/ol/htm` per piacè cambià à u percorsu di u vostru propiu prughjettu `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struttura Di U Repertoriu

#### Publicu

Fichi statichi di u situ web, cum'è `favicon.ico` `robots.txt` , etc.

I schedarii di l'icona quì ponu esse generati cun [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

Sottu `.i18n` u cartulare sò i schedarii di cunfigurazione di `i18n.site` , cache di traduzzione, etc. Vede u prossimu capitulu ["Configurazione"](/i18n.site/conf) per i dettagli !

#### Fr

Repertoriu di a lingua di origine, currispundenti `.i18n/conf.yml` `fromTo` `en` in u schedariu di cunfigurazione

```yaml
i18n:
  fromTo:
    en: zh
```

Per piacè riferite à a cunfigurazione di a traduzzione [i18](/i18/use)

