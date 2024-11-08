# Ottimizzazione Per I Motori Di Ricerca (Seo)

## Principio

`i18n.site` adotta un'architettura a pagina singola senza aggiornamento Per facilitare l'indicizzazione della ricerca, verranno generate una pagina statica separata e `sitemap.xml` per la scansione da parte dei crawler.

Quando `User-Agent` della richiesta di accesso viene utilizzato dal crawler del motore di ricerca, la richiesta verrà reindirizzata alla pagina statica tramite `302` .

Nelle pagine statiche, utilizzare `link` per indicare collegamenti a versioni in lingue diverse di questa pagina, ad esempio :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Configurazione nginx Locale

Prendiamo come esempio il file di configurazione `.i18n/htm/main.yml` nel progetto demo

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Per prima cosa modifica il valore `host:` sopra nel tuo nome di dominio, ad esempio `xxx.com` .

Quindi, `i18n.site -n` , la pagina statica verrà generata nella directory `out/main/htm` .

Naturalmente, puoi anche abilitare altri file di configurazione, ad esempio facendo riferimento prima alla configurazione di `main` per creare `.i18n/htm/dist.package.json` e `.i18n/htm/dist.yml` .

Quindi esegui `i18n.site -n -c dist` in modo che la pagina statica venga generata su `out/dist/htm` .

`nginx` può essere impostato facendo riferimento alla configurazione seguente.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Non memorizzare nella cache gli script di lavoro del server per troppo tempo
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Imposta tempi di cache più lunghi per altre risorse statiche
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Imposta il file statico utilizzato dal crawler come voce della home page
location = / {
  # Se $botLang non è vuoto, significa accesso e reindirizzamento del crawler in base al percorso linguistico impostato
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Configurazione dell'applicazione a pagina singola
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Configurare L'archiviazione Di Oggetti Per Il Caricamento Di File Statici

I file statici possono essere generati localmente, ma un approccio più comune consiste nel caricarli nell'archivio oggetti.

Modificare `out` configurato sopra in :

```
out:
  - s3
```

Quindi, modifica `~/.config/i18n.site.yml` e aggiungi la seguente configurazione :

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

Nella configurazione, modificare `i18n.site` nel valore di `host:` in `.i18n/htm/main.yml` , è possibile configurare più archivi di oggetti in `s3` e il campo `region` è facoltativo (molti archivi di oggetti non necessitano di impostare questo campo).

Quindi esegui `i18n.site -n` per ripubblicare il progetto.

Se hai modificato `~/.config/i18n.site.yml` e desideri ricaricare, utilizza il seguente comando nella directory root del progetto per svuotare la cache di caricamento :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Configurazione Di cloudflare

Nome di dominio ospitato su [cloudflare](//www.cloudflare.com)

### Regole Di Conversione

Aggiungi le regole di conversione come mostrato di seguito:

![](//p.3ti.site/1725436822.avif)

Il codice della regola è il seguente, modifica il codice "i18n.site" nel tuo nome di dominio:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Regole Di Memorizzazione Nella Cache

Aggiungi le regole della cache come segue:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Regole Di Reindirizzamento

Imposta le regole di reindirizzamento come segue, modifica il codice "i18n.site" nel tuo nome di dominio

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

`URL redirect` Seleziona il reindirizzamento dinamico, modifica `/en` nel percorso di reindirizzamento `concat("/en",http.request.uri.path,".htm")` nella lingua predefinita che desideri includere nei motori di ricerca.

## Configurazione Del Cloud Intelligente Baidu

Se devi fornire servizi alla Cina continentale, puoi utilizzare [Baidu Smart Cloud](//cloud.baidu.com) .

I dati vengono caricati su Baidu Object Storage e associati alla rete di distribuzione dei contenuti Baidu.

Quindi creare lo script nel [servizio Edge EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list)

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
  // Le intestazioni di risposta possono essere impostate per eseguire il debug dell'output, ad esempio out.XXX = 'MSG';
})
```

Fare clic su `Debug` , quindi su Pubblica su tutta la rete.

![](//p.3ti.site/1725437754.avif)

## Utilizzo Avanzato: Distribuisci Il Traffico in Base Alla Risoluzione Regionale

Se desideri fornire servizi nella Cina continentale e desideri anche `cloudflare` traffico internazionale gratuito, puoi utilizzare `DNS` con risoluzione regionale.

Ad esempio, [Huawei Cloud DNS](https://www.huaweicloud.com) fornisce analisi regionali gratuite, con le quali il traffico della Cina continentale può passare attraverso Baidu Smart Cloud e il traffico internazionale può passare attraverso `cloudflare` .

Ci sono molte insidie nella configurazione di `cloudflare` Ecco alcuni punti da notare :

### Il Nome Di Dominio È Ospitato in Altri `DNS` , Come Utilizzare `cloudflare`

Per prima cosa associa un nome di dominio arbitrario a `cloudflare` , quindi utilizza `SSL/TLS` → nome di dominio personalizzato per associare il nome di dominio principale a questo nome di dominio.

![](https://p.3ti.site/1725438658.avif)

### Non È Possibile Accedere `cloudflare R2` Tramite Un Nome Di Dominio Personalizzato

Poiché non è possibile accedere all'object storage `R2` `cloudflare` tramite un nome di dominio personalizzato, è necessario utilizzare un object storage di terze parti per posizionare file statici.

Qui prendiamo [backblaze.com](https://www.backblaze.com) come esempio per dimostrare come associare oggetti di terze parti e memorizzarli su `cloudflare` .

Crea un bucket su `backblaze.com` , carica qualsiasi file, fai clic per sfogliare il file e ottieni il nome di dominio `Friendly URL` , che qui è `f003.backblazeb2.com` .

![](//p.3ti.site/1725440783.avif)

Cambia il nome del dominio da `CNAME` a `f003.backblazeb2.com` a `cloudflare` e abilita il proxy.

![](//p.3ti.site/1725440896.avif)

Modifica `cloudflare` di `SSL` → modalità di crittografia, imposta su `Full`

![](//p.3ti.site/1725438572.avif)

Aggiungi la regola di conversione come mostrato di seguito, mettila per prima (la prima ha la priorità più bassa):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` seleziona dinamico e modifica `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` con il nome del tuo bucket.

Inoltre, nella regola di conversione `cloudflare` di cui sopra, `index.html` viene modificato in `file/your_bucketname/index.html` e le altre configurazioni rimangono le stesse.

![](//p.3ti.site/1725441384.avif)