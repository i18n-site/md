# Distribuzione E on-Line

`i18n.site` adotta un'architettura [applicativa a pagina singola](https://developer.mozilla.org/docs/Glossary/SPA) e la pagina di ingresso del sito Web e il contenuto del sito Web vengono distribuiti in modo indipendente.

Dopo aver eseguito la traduzione di cui sopra, le directory `htm` e `v` verranno generate nella directory `md/out/dev` .

Qui, `dev` significa che è costruito in base al file di configurazione `.i18n/htm/dev.yml` .

`dev` elenco :

La directory `htm` è la pagina di ingresso del sito web.

La directory `v` contiene il contenuto del sito Web con i numeri di versione.

L'anteprima locale non si preoccupa del numero di versione e copierà tutti i file nella directory `out/dev/v/0.1.0` .

Per il rilascio ufficiale, i file modificati verranno copiati nella directory del nuovo numero di versione.

## Specificare Il File Di Configurazione Con `-c`

Diversi file di configurazione creeranno directory corrispondenti nella directory `out` .

Ad esempio, `.i18n/htm/main.yml` creerà la directory `out/main` .

`dev.yml` e `main.yml` sono le configurazioni predefinite.

`dev` è l'abbreviazione di `development` , che indica l'ambiente di sviluppo, utilizzato per l'anteprima locale, ed è anche il file di configurazione predefinito.
`ol` è l'abbreviazione di `online` , che indica l'ambiente online, utilizzato per il rilascio ufficiale. È anche il file di configurazione predefinito quando si utilizzano i parametri della riga di comando `-n` a `npm` per il rilascio.

Puoi anche creare altri file di configurazione. Utilizza `--htm_conf` sulla riga di comando per specificare il nome del file di configurazione da utilizzare:

Per esempio:
```
i18n.site --htm_conf dist --save
```

Qui `--save` rappresenta il numero di versione del rilascio dell'aggiornamento.

## <a rel=id href="#npm" id="npm"></a> Pubblica contenuti su npmjs.com

La pubblicazione di contenuto in [npmjs.com](//npmjs.com) è la soluzione predefinita consigliata (vedere [Disponibilità elevata front-end](/i18n.site/feature#ha) ).

### npm &

Installa `nodejs` , accedi con `npm login` .

Modifica `md/.i18n/htm/main.yml` e cambia il valore da [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` come nome del tuo pacchetto `npm` Qualsiasi nome di pacchetto non occupato su [npmjs.com](//npmjs.com) andrà bene.

Quindi modificare `md/.i18n/htm/main.package.json`

Esegui `i18n.site --npm` o `i18n.site -n` nella directory `md` per tradurre e pubblicare.

Se utilizzi un ambiente di integrazione continua per pubblicare, non è necessario installare `nodejs` Basta copiare le autorizzazioni di accesso e pubblicazione `~/.npmrc` nell'ambiente.

Se modifichi il nome del pacchetto `v:` in `main.yml` , **assicurati di eliminare prima `.i18n/v/main`** e poi pubblicarlo.

#### Server Proxy Pubblicato Da npm

Se gli utenti nella Cina continentale riscontrano problemi di rete e non sono in grado di pubblicare pacchetti `npm` , possono impostare la variabile di ambiente `https_proxy` per configurare il server proxy.

Supponendo che la porta del tuo server proxy sia `7890` , puoi scrivere:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Contenuti Ospitati Autonomamente

Se desideri ospitare autonomamente il contenuto, modifica prima `md/.i18n/htm/main.yml` e cambia `v: //unpkg.com/i18n.site` nel prefisso URL, ad esempio `v: //i18n-v.xxx.com` .

Inserisci la directory `md` ed esegui

```
i18n.site --htm_conf ol --save
```

o abbreviazione

```
i18n.site -c ol -s
```

Quindi, configura il contenuto nella directory `md/out/main/v` sul percorso del prefisso URL impostato in `v:` .

Infine, **configura il tempo di cache del percorso che termina con `/.v` a `1s`** , altrimenti non sarà possibile accedere immediatamente al contenuto appena rilasciato.

Il tempo di memorizzazione nella cache per altri percorsi può essere impostato su un anno o più per ridurre le richieste non necessarie.

## Ospita Contenuti Su s3

Per ospitare autonomamente i contenuti, oltre a utilizzare il proprio server, un'altra opzione comune `CDN` utilizzare `S3` +

È possibile utilizzare [rclone](https://rclone.org) per accedere al server `S3` , quindi fare riferimento e modificare il seguente script e copiare solo le modifiche incrementali su `S3` per ogni versione.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Ricordarsi di configurare `CDN` in modo che il tempo di cache del percorso che termina con `/.v` sia `1s` , altrimenti non sarà possibile accedere immediatamente al contenuto appena rilasciato.

## Pubblicare Il Sito Web

Il sito Web può essere distribuito ovunque, [github page](https://pages.github.com) e [cloudflare page](https://pages.cloudflare.com) sono buone scelte.

Poiché il sito Web utilizza un'architettura [applicativa a pagina singola](https://developer.mozilla.org/docs/Glossary/SPA) , ricordarsi di riscrivere i percorsi URL che non contengono valori `. ` a `index.html` .

La pagina di ingresso del sito Web deve essere distribuita solo una volta e non è necessario ridistribuirla per i successivi aggiornamenti del contenuto.

### Distribuisci Sulla Pagina github

Per prima cosa [fai clic qui github per creare un'organizzazione](https://github.com/account/organizations/new?plan=free) . Il nome dell'organizzazione seguente è `i18n-demo` come esempio.

Quindi crea il magazzino `i18n-demo.github.io` sotto questa organizzazione (sostituisci `i18n-demo` con il nome dell'organizzazione che hai creato):

![](https://p.3ti.site/1721098657.avif)

Quando si pubblica il contenuto nell'articolo precedente, è stato generato `out/main/htm` Inserisci questa directory ed esegui :

```
ln -s index.html 404.html
```


Poiché `github page` non supporta la riscrittura del percorso URL, viene utilizzato `404.html` .

Quindi esegui il seguente comando nella directory `htm` (ricordati di sostituire `i18n-demo/i18n-demo.github.io.git` con il tuo indirizzo di magazzino) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Dopo aver inviato il codice, attendi che la distribuzione di `github page` venga eseguita correttamente (come mostrato di seguito) prima di potervi accedere.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Per la pagina demo consultare:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Distribuisci Sulla Pagina cloudflare

[cloudflare page](//pages.cloudflare.com) Rispetto a `github page` , fornisce la riscrittura del percorso ed è più amichevole per la Cina continentale ed è più accessibile.

L'implementazione di `cloudflare page` è solitamente basata sull'implementazione di `github page` sopra.

Crea un progetto e associa il magazzino `i18n-demo.github.io` sopra.

Il processo è mostrato nella figura seguente:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Fare clic su `Add Account` per concedere l'accesso all'organizzazione `i18n-demo` .

Se hai vincolato il magazzino di un'altra organizzazione, potrebbe essere necessario fare clic due volte su `Add Account` per autorizzare due volte prima che venga visualizzata la nuova organizzazione.

![](https://p.3ti.site/1721118306.avif)

Successivamente, seleziona magazzino `i18n-demo.github.io` , quindi fai clic su `Begin setup` e utilizza i valori predefiniti per i passaggi successivi.

![](https://p.3ti.site/1721118490.avif)

Dopo il primo collegamento è necessario attendere qualche minuto prima di potervi accedere.

Dopo la distribuzione, puoi associare un nome di dominio personalizzato.

![](https://p.3ti.site/1721119459.avif)

Dopo aver associato il nome di dominio personalizzato, vai al nome di dominio per configurare la riscrittura del percorso dell'applicazione a pagina singola, come mostrato di seguito:

![](https://p.3ti.site/1721119320.avif)

Le regole nell'immagine sopra sono le seguenti. Sostituisci `i18n.site` nella prima riga sottostante con il nome di dominio che hai associato.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Inoltre, configura le regole della cache, come mostrato di seguito, e imposta la durata della cache su un mese.

![](https://p.3ti.site/1721125111.avif)

Modifica il nome di dominio corrispondente nel secondo passaggio nell'immagine sopra con il nome di dominio che hai associato.

### Ottimizzazione Della Distribuzione Del Sito Web Nella Cina Continentale

Se desideri ottenere migliori prestazioni di accessibilità nell'ambiente di rete della Cina continentale, [registra prima un nome di dominio](//beian.aliyun.com) .

Quindi, utilizza l'object storage dei fornitori cloud nella Cina continentale + `CDN` Distribuisci il seguente contenuto `out/main/htm` .

Puoi utilizzare l'edge computing per riscrivere il percorso per adattarlo alle applicazioni a pagina singola. Ad esempio, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) può essere configurato in questo modo:

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

![](https://p.3ti.site/1721121273.avif)

Poiché il record `MX` e il record `CNAME` non possono coesistere, se desideri ricevere e-mail di nomi di dominio contemporaneamente, devi collaborare con lo script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) per il livello `CNAME` nel record `A` .

Inoltre, poiché le tariffe per il traffico estero dei fornitori di cloud nella Cina continentale sono relativamente costose, se desideri ottimizzare i costi, puoi utilizzare [la risoluzione geografica gratuita di Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) e il nome di dominio personalizzato di [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (come mostrato di seguito). deviazione del traffico──Instradamento del traffico nella Cina continentale Baidu Cloud `CDN` , il traffico internazionale vale cloudflare .

![](https://p.3ti.site/1721119788.avif)

Queste soluzioni di ottimizzazione della distribuzione sono più complesse e verranno introdotte in capitoli separati in futuro.

### Reindirizzamento Del Nome Di Dominio Generico

Se utilizzi `i18n.site` per generare un sito Web come sito Web principale, in genere è necessario configurare il reindirizzamento di più domini, ovvero reindirizzare l'accesso da `*.xxx.com` (incluso `www.xxx.com` ) a `xxx.com` .

Questo requisito può essere raggiunto con l'aiuto di Alibaba Cloud `CDN` `EdgeScript` ( [documento inglese](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [documento cinese](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Aggiungi il nome di dominio in [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) e punta il nome di dominio `*.xxx.com` `CNAME` in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Ad esempio, la configurazione del reindirizzamento del nome di dominio pan di `*.i18n.site` nell'immagine sopra è la seguente:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Distribuisci Con nginx

Aggiungi una configurazione simile alla seguente nel paragrafo `server` di nginx Cambia `/root/i18n/md/out/main/htm` nel percorso del tuo progetto `out/main/htm` :

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Basato Su `github action` Integrazione Continua

Puoi fare riferimento a quanto segue per configurare il tuo `github action` :

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

Come si può vedere nella configurazione, questo flusso di lavoro viene attivato quando si passa al ramo `main` e al ramo `dist` .

Il flusso di lavoro utilizzerà il file di configurazione corrispondente al nome del ramo per pubblicare il documento. Qui, `.i18n/htm/main.yml` e `.i18n/htm/dist.yml` verranno utilizzati rispettivamente come configurazione di pubblicazione.

Consigliamo le seguenti best practice per il processo di rilascio dei documenti:

Quando le modifiche vengono inviate al ramo `main` , il documento viene avviato per essere creato e distribuito alla stazione di anteprima (la stazione di anteprima è disponibile [github page](//pages.github.com) ).

Dopo aver confermato che il documento è corretto sul sito di anteprima, il codice verrà unito e inviato al ramo `dist` e la compilazione e la distribuzione ufficiali andranno online.

Naturalmente, l'implementazione del processo di cui sopra richiede la scrittura di più configurazioni.

È possibile fare riferimento al progetto reale per lo scripting del flusso di lavoro [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` e `secrets.NPM_TOKEN` nella configurazione richiedono la configurazione delle variabili segrete nella codebase.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` è il token di pubblicazione del pacchetto `npm` nella configurazione Visita [npmjs.com](//npmjs.com) e crea un token con autorizzazioni di pubblicazione (come mostrato di seguito).

![](//p.3ti.site/1730969906.avif)


## Struttura Delle Directory

### `public`

File statici del sito Web, come `favicon.ico` , `robots.txt` , ecc.

I file icona qui possono essere generati con [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Sotto la directory `.i18n` ci sono i file di configurazione, la cache di traduzione, ecc. di `i18n.site` Vedere il capitolo successivo ["Configurazione"](/i18n.site/conf) per i dettagli.

### `en`

Directory della lingua di origine, corrispondente al file di configurazione `en` di `fromTo` in `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Si prega di fare riferimento alla configurazione della traduzione [i18](/i18/use)