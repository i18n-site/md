# Impiegazione È in Linea

`i18n.site` adopta una architettura [di l'applicazione di una sola pagina](https://developer.mozilla.org/docs/Glossary/SPA) , è a pagina d'entrata di u situ web è u cuntenutu di u situ web sò implementati indipindente.

Dopu avè eseguitu a traduzzione sopra, i cartulari `htm` è `v` seranu generati sottu u cartulare `md/out/dev` .

Quì, `dev` significa chì hè custruitu basatu annantu à u schedariu di cunfigurazione `.i18n/htm/dev.yml` .

`dev` annuariu :

U repertoriu `htm` hè a pagina di entrata di u situ web.

U repertoriu `v` cuntene u cuntenutu di u situ web cù numeri di versione.

L'anteprima locale ùn importa micca u numeru di versione è copià tutti i schedari in u cartulare `out/dev/v/0.1.0` .

Per a liberazione ufficiale, i schedarii cambiati seranu copiati in u novu repertoriu di numeri di versione.

## Specificate U Schedariu Di Cunfigurazione Cù `-c`

Diversi schedarii di cunfigurazione creanu cartulari currispondenti in u cartulare `out` .

Per esempiu, `.i18n/htm/main.yml` creà u cartulare `out/main` .

`dev.yml` è `main.yml` sò e cunfigurazioni predeterminate.

`dev` hè l'abbreviazione di `development` , chì indica l'ambiente di sviluppu, utilizatu per a vista previa locale, è hè ancu u schedariu di cunfigurazione predeterminatu.
`ol` hè l'abbreviazione di `online` , chì indica l'ambiente in linea, chì hè utilizatu per a liberazione ufficiale Hè ancu u schedariu di cunfigurazione predeterminatu quandu si usa i paràmetri di a linea di cumanda `-n` à `npm` per liberà.

Pudete ancu creà altri schedarii di cunfigurazione Aduprate `--htm_conf` in a linea di cummanda per specificà u nome di u schedariu di cunfigurazione per utilizà:

per esempiu:
```
i18n.site --htm_conf dist --save
```

Quì `--save` rapprisenta u numeru di versione di l'aghjurnamentu.

## <a rel=id href="#npm" id="npm"></a> Publicate u cuntenutu à npmjs.com

A pubblicazione di cuntenutu à [npmjs.com](//npmjs.com) hè a suluzione predeterminata cunsigliata (vede [Front-end High Availability](/i18n.site/feature#ha) ).

### npm & Post

Installa `nodejs` , accede cù `npm login` .

Edite `md/.i18n/htm/main.yml` [npmjs.com](//npmjs.com) cambia u valore di [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` cum'è u vostru nome di pacchettu `npm` .

Allora mudificà `md/.i18n/htm/main.package.json`

Eseguite `i18n.site --npm` o `i18n.site -n` in u cartulare `md` per traduce è publicà.

Se aduprate un ambiente d'integrazione cuntinuu per publicà, ùn ci hè bisognu di installà `nodejs` Basta cupià i permessi di cunnessu è di publicazione `~/.npmrc` à l'ambiente.

Se mudificate u nome di u pacchettu di `v:` in `main.yml` , **assicuratevi di sguassà prima `.i18n/v/main`** è poi di publicà.

#### Servitore Proxy Publicatu Da npm

Se l'utilizatori in a Cina continentale scontranu prublemi di rete è ùn sò micca capaci di publicà `npm` pacchetti, ponu stabilisce a variabile d'ambiente `https_proxy` per cunfigurà u servitore proxy.

Assumindu chì u vostru portu di u servitore proxy hè `7890` , pudete scrive:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Cuntinutu Self-Hosted

Se vulete auto-ospitu u cuntenutu, prima editate `md/.i18n/htm/main.yml` è cambiate `v: //unpkg.com/i18n.site` à u vostru prefissu URL, cum'è `v: //i18n-v.xxx.com` .

Entre in u cartulare `md` è eseguite

```
i18n.site --htm_conf ol --save
```

o abbreviazione

```
i18n.site -c ol -s
```

Allora, cunfigurà u cuntenutu in u cartulare `md/out/main/v` à u percorsu di prefissu URL stabilitu in `v:` .

Infine, **cunfigurà u tempu di cache di u percorsu chì finisce in `/.v` à `1s`** , altrimente u cuntenutu novu liberatu ùn pò micca accede immediatamente.

U tempu di cache per altri percorsi pò esse stabilitu à un annu o più per riduce e richieste innecessarii.

## Host Cuntenutu À s3

Per auttà u cuntenutu, in più di `CDN` u vostru servitore, una altra opzione cumuni hè di utilizà `S3` + .

Pudete aduprà [rclone](https://rclone.org) per accede à u servitore `S3` , dopu riferite è mudificà u script seguente, è solu copià i cambiamenti incrementali à `S3` per ogni versione.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Ricurdatevi di cunfigurà `CDN` in modu chì u tempu di cache di a strada chì finisce in `/.v` hè `1s` , altrimente u cuntenutu di novu liberatu ùn pò micca accede immediatamente.

## Publicà U Situ Web

U situ web pò esse implementatu in ogni locu [github page](https://pages.github.com) è [cloudflare page](https://pages.cloudflare.com) sò boni scelte.

Perchè u situ web usa una architettura [di l'applicazione di una sola pagina](https://developer.mozilla.org/docs/Glossary/SPA) , ricurdate di riscrive i percorsi URL chì ùn cuntenenu micca `. ` à `index.html` .

A pagina di entrata di u situ web deve esse implementata solu una volta, è ùn ci hè micca bisognu di redistribuisce a pagina di entrata di u situ web per l'aghjurnamenti di cuntenutu sussegwenti.

### Implementa Nantu À a Pagina github

Prima [cliccate github per creà una urganizazione](https://github.com/account/organizations/new?plan=free) `i18n-demo`

Allora crea u magazzinu `i18n-demo.github.io` sottu questa urganizazione (per piacè rimpiazzà `i18n-demo` cù u nome di l'urganizazione chì avete creatu):

![](https://p.3ti.site/1721098657.avif)

Quandu pubblicà u cuntenutu in l'articulu precedente, `out/main/htm` hè statu generatu Per piacè entre in questu repertoriu è eseguite :

```
ln -s index.html 404.html
```


Perchè `github page` ùn sustene micca a riscrittura di u percorsu URL, `404.html` hè utilizatu invece.

Allora eseguite u cumandimu seguitu in u cartulare `htm` (ricurdate di rimpiazzà `i18n-demo/i18n-demo.github.io.git` cù u vostru propiu indirizzu di magazzinu) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Dopu avè imbuttatu u codice, aspittà chì a implementazione di `github page` per eseguisce cù successu (cum'è mostra quì sottu) prima di pudè accede.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Per a pagina demo, vede:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Implementa Nantu À a Pagina cloudflare

[cloudflare page](//pages.cloudflare.com) cunfrontu cù `github page` , furnisce a riscrittura di u percorsu è hè più amichevule à a Cina continentale è hè più accessibile.

L'implementazione di `cloudflare page` hè generalmente basatu annantu à l'implementazione di `github page` sopra.

Crea un prughjettu è ligà u magazzinu `i18n-demo.github.io` sopra.

U prucessu hè mostratu in a figura sottu:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Per piacè cliccate `Add Account` per dà accessu à l'urganizazione `i18n-demo` .

Se avete ligatu u magazzinu di un'altra urganizazione, pudete avè bisognu di cliccà `Add Account` duie volte per autorizà duie volte prima chì a nova urganizazione sia visualizata.

![](https://p.3ti.site/1721118306.avif)

Dopu, selezziunate u magazzinu `i18n-demo.github.io` , dopu cliccate `Begin setup` , è utilizate i valori predeterminati per i passi successivi.

![](https://p.3ti.site/1721118490.avif)

Dopu à ubligatoriu per a prima volta, avete bisognu di aspittà uni pochi di minuti prima di pudè accede.

Dopu a implementazione, pudete ligà un nome di duminiu persunalizatu.

![](https://p.3ti.site/1721119459.avif)

Dopu avè vintu u nome di duminiu persunalizatu, andate à u nome di duminiu per cunfigurà a riscrittura di u percorsu di l'applicazione di una sola pagina, cum'è mostratu quì sottu:

![](https://p.3ti.site/1721119320.avif)

E regule in a stampa di sopra sò i seguenti, per piacè rimpiazzà `i18n.site` in a prima linea sottu cù u nome di duminiu chì avete ligatu.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Inoltre, cunfigurà e regule di cache, cum'è mostratu quì sottu, è stabilisce a durata di a cache à un mese.

![](https://p.3ti.site/1721125111.avif)

Per piacè cambià u nome di duminiu chì currisponde à u sicondu passu in a stampa sopra à u nome di duminiu chì avete ligatu.

### Ottimizza L'implementazione Di U Situ Web in Cina Continentale

Se vulete ottene u megliu rendimentu di l'accessibilità in l'ambiente di rete di a Cina continentale, [registrate prima un nome di duminiu](//beian.aliyun.com) .

Allora, aduprate l'almacenamentu di l'ughjettu di `out/main/htm` venditori di nuvola in Cina continentale + Impulsate u cuntenutu seguente `CDN` .

Pudete utilizà l'edge computing per riscrive u percorsu per adattà à l'applicazioni di una sola pagina Per esempiu, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) pò esse cunfiguratu cusì:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // L'intestazione di a risposta pò esse impostata per debug output, cum'è out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Perchè u record `MX` è u record `CNAME` ùn ponu micca coesiste, se vulete riceve emails di nome di duminiu à u stessu tempu, avete bisognu di cooperà cù [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) script à u nivellu `CNAME` in u record `A` .

Inoltre, perchè e spese di trafficu d'oltremare di i venditori di nuvola in Cina continentale sò relativamente caru, se vulete ottimisà i costi, pudete aduprà [DNS risoluzione geografica gratuita di Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) è u nome di duminiu persunalizatu [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (cum'è mostratu quì sottu). Diversione di u trafficu──Traffic routing in China continentale Baidu Cloud `CDN` , u trafficu internaziunale va cloudflare .

![](https://p.3ti.site/1721119788.avif)

Queste soluzioni di ottimisazione di implementazione sò più cumplesse è seranu introdutte in capituli separati in u futuru.

### Redirezzione Di Nome Di Duminiu Genericu

Se utilizate `i18n.site` per generà un situ web cum'è u vostru situ web principale, di solitu avete bisognu di cunfigurà a redirezzione di pan-dominiu, vale à dì, redirige l'accessu à `*.xxx.com` (inclusi `www.xxx.com` ) à `xxx.com` .

Stu requisitu pò esse rializatu cù l'aiutu di Alibaba Cloud `CDN` `EdgeScript` ( [documentu inglese](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [documentu Chinese](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Aghjunghjite u nome di duminiu in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) è puntate u nome di duminiu `*.xxx.com` `CNAME` in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Per esempiu, a cunfigurazione di redirezzione di u nome pan-domain di `*.i18n.site` in a stampa sopra hè a siguenti:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Implementa Cù nginx

Per piacè aghjunghje una cunfigurazione simile à a seguente in u paràgrafu `server` di nginx Per piacè cambiate `/root/i18n/md/out/main/htm` à u percorsu di u vostru propiu prughjettu `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Basatu Nantu À `github action` Integrazione Cuntinua

Pudete riferite à i seguenti per cunfigurà u vostru `github action` :

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Comu pò esse vistu in a cunfigurazione, stu flussu di travagliu hè attivatu quandu si preme à a branche `main` è a branche `dist` .

U flussu di travagliu aduprà u schedariu di cunfigurazione chì currisponde à u nome di a filiera per publicà u documentu quì, `.i18n/htm/main.yml` è `.i18n/htm/dist.yml` seranu utilizati rispettivamente cum'è a cunfigurazione di publicazione.

Ricumandemu e seguenti migliori pratiche per u prucessu di liberazione di documenti:

Quandu i cambiamenti sò spinti à a branche `main` , u documentu hè attivatu per esse custruitu è spiegatu à a stazione di anteprima (a stazione di anteprima hè dispunibule [github page](//pages.github.com) ).

Dopu avè cunfirmatu chì u documentu hè currettu in u situ di vista previa, u codice serà unitu è imbuttatu à a branche `dist` , è a custruzzione ufficiale è a implementazione andarà in linea.

Di sicuru, l'implementazione di u prucessu sopra esige scrive più cunfigurazioni.

Pudete riferite à u prughjettu [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) per u scripting di u flussu di travagliu.

`secrets.I18N_SITE_TOKEN` è `secrets.NPM_TOKEN` in a cunfigurazione richiede di cunfigurà variàbili secreti in a basa di codice.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` hè u token di pubblicazione di u pacchettu `npm` in a cunfigurazione Visita [npmjs.com](//npmjs.com)

![](//p.3ti.site/1730969906.avif)


## Struttura Di U Repertoriu

### `public`

Fichi statichi di u situ web, cum'è `favicon.ico` , `robots.txt` , etc.

I schedarii di l'icona quì ponu esse generati cun [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Sottu u cartulare `.i18n` sò i schedarii di cunfigurazione, cache di traduzzione, etc. di `i18n.site` Vede u prossimu capitulu ["Configurazione"](/i18n.site/conf) per i dettagli.

### `en`

Repertorio di lingua di origine, currispundenti à `en` di `fromTo` in `.i18n/conf.yml` file di cunfigurazione

```yaml
i18n:
  fromTo:
    en: zh
```

Per piacè riferite à a cunfigurazione di a traduzzione [i18](/i18/use)