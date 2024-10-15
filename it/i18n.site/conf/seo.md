# Ottimizzazione per i motori di ricerca (SEO)

## Principio

`i18n.site` utilizza un'architettura a pagina singola senza ricarica, e per agevolare l'indicizzazione dei motori di ricerca, genera pagine statiche separate e un `sitemap.xml` per consentire ai crawler di effettuare la scansione.

Quando il `User-Agent` della richiesta di accesso è un crawler del motore di ricerca, la richiesta viene reindirizzata alla pagina statica tramite `302`.

Nelle pagine statiche, si utilizza il tag `link` per indicare i collegamenti alle diverse versioni linguistiche della pagina, ad esempio:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Configurazione del caricamento dei file statici su un servizio di archiviazione oggetti

I file statici possono essere generati localmente, ma è più comune caricarli su un servizio di archiviazione oggetti.

Prendiamo come esempio il file di configurazione `.i18n/htm/ol.yml` nel progetto dimostrativo

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Modifica innanzitutto il valore di `host:` nel tuo dominio, ad esempio `i18n.site`.

Successivamente, modifica `~/.config/i18n.site.yml` e aggiungi la seguente configurazione:

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Nella configurazione, sostituisci `i18n.site` con il valore di `host:` in `.i18n/htm/ol.yml`; è possibile configurare più oggetti di archiviazione in `s3`, e il campo `region` è opzionale (molte archiviazioni di oggetti non richiedono questa impostazione).

Successivamente, esegui `i18n.site -n` per ripubblicare il progetto.

Se hai modificato `~/.config/i18n.site.yml` e desideri ricaricare, utilizza il seguente comando nella directory radice del progetto per pulire la cache di upload:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Configurazione di Cloudflare

Il nome di dominio è ospitato su [cloudflare](//www.cloudflare.com).

### Regole di conversione

Aggiungi le seguenti regole di conversione:

![](//p.3ti.site/1725436822.avif)

Il codice della regola è il seguente, sostituisci "i18n.site" con il tuo dominio:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regole di memorizzazione nella cache

Aggiungi le seguenti regole di memorizzazione nella cache:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Regole di reindirizzamento

Imposta le seguenti regole di reindirizzamento, sostituisci "i18n.site" con il tuo dominio:

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

Per il `reindirizzamento URL` dinamico, modifica il percorso di reindirizzamento `concat("/en", http.request.uri.path, ".htm")` sostituendo `/en` con la lingua predefinita che desideri far indicizzare dai motori di ricerca.

## Configurazione del Cloud Intelligente Baidu

Se hai bisogno di fornire servizi alla Cina continentale, puoi utilizzare [Baidu Smart Cloud](//cloud.baidu.com).

I dati vengono caricati su Baidu Object Storage e associati alla rete di distribuzione dei contenuti Baidu.

Quindi crea uno script nel [servizio EdgeJS di Edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
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

Fare clic su `Debug`, quindi su Pubblica su tutta la rete.

![](//p.3ti.site/1725437754.avif)

## Utilizzo avanzato: distribuzione del traffico basata sulla risoluzione geografica

Se desideri fornire servizi in Cina continentale e usufruire anche del traffico internazionale gratuito di `cloudflare`, puoi utilizzare un `DNS` con risoluzione geografica.

Ad esempio, [Huawei Cloud DNS](https://www.huaweicloud.com) offre una risoluzione geografica gratuita, che permette di indirizzare il traffico della Cina continentale verso Baidu Smart Cloud e quello internazionale verso `cloudflare`.

La configurazione di `cloudflare` è piena di insidie; ecco alcuni punti da tenere a mente:

### Se il tuo dominio è ospitato da altri `DNS`, ecco come utilizzare `cloudflare`

Per prima cosa, associare un dominio arbitrario a `cloudflare`, quindi utilizzare `SSL/TLS` → Dominio personalizzato per associare il dominio principale a questo dominio.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` non è accessibile tramite un nome di dominio personalizzato

Poiché l'object storage `R2` di `cloudflare` non supporta l'accesso tramite dominio personalizzato, è necessario utilizzare un object storage di terze parti per memorizzare file statici.

Tieni a mente [backblaze.com](https://www.backblaze.com) come esempio per illustrare come associare un object storage di terze parti a `cloudflare`.

Crea un bucket su `backblaze.com`, carica un file a caso, fai clic per sfogliare il file e ottieni il nome di dominio `Friendly URL`, qui `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Reindirizza il tuo dominio come `CNAME` a `f003.backblazeb2.com` su `cloudflare` e abilita il proxy.

![](//p.3ti.site/1725440896.avif)

Modificare la modalità di crittografia `SSL` in `cloudflare`, impostando su `Completa`

![](//p.3ti.site/1725438572.avif)

Aggiungi la seguente regola di conversione, posizionala in prima posizione (la prima ha la priorità più bassa):

![](//p.3ti.site/1725443232.avif)

Per il `reindirizzamento a` dinamico, modifica `your_bucketname` in `concat("/file/your_bucketname", http.request.uri.path)` con il nome del tuo bucket.

Inoltre, nella regola di conversione di `cloudflare` menzionata in precedenza, sostituisci `index.html` con `file/your_bucketname/index.html`, mantenendo invariabili le altre configurazioni.

![](//p.3ti.site/1725441384.avif)