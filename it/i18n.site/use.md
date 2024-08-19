# Installa & Distribuisci

## Configurazione Token

`i18n.site` integra lo strumento di traduzione `i18`, prima di tutto [fai clic qui per consultare la documentazione di configurazione del token di accesso `i18`](/i18/use).

## Installazione

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Progetto di Dimostrazione

Iniziamo con un progetto di dimostrazione per imparare a utilizzare `i18n.site`.

Prima di tutto, cloniamo il repository di dimostrazione e eseguiamo il comando seguente:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gli utenti nella Cina continentale possono:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Il nome della directory di clonazione del repository `demo.i18n.site` deve essere `md` per facilitare la visualizzazione locale con `docker`.

### Traduzione

In primo luogo, entra nella directory `md` e esegui `i18n.site`, che tradurrà `en` in `zh`.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Dopo l'esecuzione, verranno generati i file di traduzione e di cache. Ricorda di eseguire `git add .` nel repository nella directory `md`.

### Visualizzazione Locale

Installa e avvia `docker` ( `MAC` utente consiglia di utilizzare [orbstack](https://orbstack.dev) come runtime per `docker` ).

Quindi, entra nella directory `docker` e esegui `./up.sh`, quindi visita [https://127.0.0.1](https://127.0.0.1) per visualizzare l'anteprima localmente.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Pubblicazione dei Contenuti

`i18n.site` utilizza un'architettura di [applicazione a pagina singola](https://developer.mozilla.org/docs/Glossary/SPA) e la pagina di ingresso del sito web e il contenuto del sito web vengono distribuiti in modo indipendente.

Dopo aver eseguito la traduzione sopra menzionata, le directory `htm` e `v` verranno generate nella directory `md/out/dev`.

Qui, `dev` significa che è costruito in base al file di configurazione `.i18n/htm/dev.yml`.

Contenuto di `dev`:

La directory `htm` è la pagina di ingresso del sito web.

La directory `v` contiene il contenuto del sito web con numeri di versione.

Per la visualizzazione locale, non è necessario preoccuparsi del numero di versione e tutti i file verranno copiati nella directory `out/dev/v/0.1.0`.

Per il rilascio ufficiale, i file modificati verranno copiati nella directory del nuovo numero di versione.

#### Utilizzare -c Per Specificare Il File Di Configurazione

Diversi file di configurazione creeranno directory corrispondenti nella directory `out`.

Ad esempio, `.i18n/htm/ol.yml` creerà la directory `out/ol`.

`dev.yml` e `ol.yml` sono le configurazioni predefinite.

`dev` è l'abbreviazione di `development`, che indica l'ambiente di sviluppo, utilizzato per la visualizzazione locale e è anche il file di configurazione predefinito.
`ol` è l'abbreviazione di `online`, che indica l'ambiente online, utilizzato per il rilascio ufficiale. È anche il file di configurazione predefinito quando si utilizza il parametro della riga di comando `-n` per il rilascio su `npm`.

Puoi anche creare altri file di configurazione. Utilizza `--htm_conf` sulla riga di comando per specificare il nome del file di configurazione da utilizzare:

Per esempio:
```
i18n.site --htm_conf yourConfig --save
```

qui `--save` rappresenta l'aggiornamento del numero di versione del rilascio.

#### <a rel=id href="#npm" id="npm"></a> Pubblica i Contenuti su npmjs.com

La pubblicazione dei contenuti su [npmjs.com](//npmjs.com) è la soluzione predefinita consigliata (vedere [Disponibilità elevata front-end](/i18n.site/feature#ha)).

##### npm login & Pubblicazione

Installa `nodejs`, accedi con `npm login`.

Modifica `md/.i18n/htm/ol.yml` e cambia `i18n.site` in `v: //unpkg.com/i18n.site` con il nome del tuo pacchetto `npm`.

Basta usare il nome del pacchetto non occupato su [npmjs.com](//npmjs.com). Usare il nome del dominio del sito web come nome del pacchetto è una buona scelta.

Quando si pubblica in base al pacchetto `npm`, **assicurati di utilizzare `//unpkg.com/` come prefisso del valore `v:`**. `i18n.site` ha ottimizzato appositamente il tempo di cache di `/.v` sotto questo percorso di prefisso per ottenere una visualizzazione tempestiva delle nuove versioni.

Esegui `i18n.site --npm` o `i18n.site -n` nella directory `md` per tradurre e pubblicare.

Se utilizzi un ambiente di integrazione continua per pubblicare, non è necessario installare `nodejs`. Basta copiare le autorizzazioni di accesso e pubblicazione `~/.npmrc` in questo ambiente.

Se modifichi il nome del pacchetto `v:` in `ol.yml`, **assicurati di eliminare prima `.i18n/v/ol`** e poi pubblicarlo.

##### Proxy Server per la Pubblicazione npm

Se gli utenti in Cina continentale riscontrano problemi di rete e non sono in grado di pubblicare pacchetti `npm`, possono impostare la variabile di ambiente `https_proxy` per configurare il server proxy.

Supponendo che la porta del tuo server proxy sia `7890`, puoi scrivere:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenuti Ospitati Autonomamente

Se desideri ospitare autonomamente i contenuti, modifica prima `md/.i18n/htm/ol.yml` e cambia `v: //unpkg.com/i18n.site` nel prefisso URL, ad esempio `v: //i18n-v.xxx.com`.

Entra nella directory `md` ed esegui

```
i18n.site --htm_conf ol --save
```

o abbreviazione

```
i18n.site -c ol -s
```

Quindi, configura il contenuto nella directory `md/out/ol/v` sul percorso del prefisso URL impostato in `v:`.

Infine, **configura il tempo di cache del percorso che termina con `/.v` a `1s`**. Altrimenti, non sarà possibile accedere immediatamente al contenuto appena rilasciato.

Il tempo di memorizzazione nella cache per altri percorsi può essere impostato su un anno o più per ridurre le richieste non necessarie.

##### Ospitare Contenuti su S3

Per ospitare autonomamente i contenuti, oltre a utilizzare il proprio server, un'altra opzione comune è utilizzare `S3` + `CDN`.

È possibile utilizzare [rclone](https://rclone.org) per accedere al server `S3`, quindi fare riferimento e modificare il seguente script e copiare solo le modifiche incrementali su `S3` per ogni versione.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ricorda di configurare `CDN` in modo che il tempo di cache del percorso che termina con `/.v` sia `1s`. Altrimenti, non sarà possibile accedere immediatamente al contenuto appena rilasciato.

### Pubblicare il Sito Web

Il sito web può essere distribuito ovunque, [github page](https://pages.github.com) e [cloudflare page](https://pages.cloudflare.com) sono buone scelte.

Poiché il sito web utilizza un'architettura [applicativa a pagina singola](https://developer.mozilla.org/docs/Glossary/SPA), ricordati di riscrivere i percorsi URL che non contengono `. ` a `index.html`.

La pagina di ingresso del sito web deve essere distribuita solo una volta e non è necessario ridistribuirla per gli aggiornamenti successivi del contenuto.

#### Distribuire su GitHub Page

Per prima cosa [fai clic qui per creare un'organizzazione su GitHub](https://github.com/account/organizations/new?plan=free). Il nome dell'organizzazione di esempio è `i18n-demo`.

Quindi crea il repository `i18n-demo.github.io` sotto questa organizzazione (sostituisci `i18n-demo` con il nome dell'organizzazione che hai creato):

![](https://p.3ti.site/1721098657.avif)

Quando si pubblica il contenuto nell'articolo precedente, è stato generato `out/ol/htm`. Entra in questa directory ed esegui:

```
ln -s index.html 404.html
```


Poiché `github page` non supporta la riscrittura dei percorsi URL, viene utilizzato `404.html` come sostituto.

Quindi esegui il seguente comando nella directory `htm` (ricorda di sostituire `i18n-demo/i18n-demo.github.io.git` con il tuo indirizzo di repository):

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

#### Distribuire su Cloudflare Page

[cloudflare page](//pages.cloudflare.com) è più amichevole rispetto a `github page` e offre una migliore accessibilità in Cina continentale.

La distribuzione di `cloudflare page` è solitamente basata sulla distribuzione di `github page` sopra.

Crea un progetto e associa il repository `i18n-demo.github.io` sopra.

Il processo è mostrato nella figura seguente:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Clicca su `Add Account` per concedere l'accesso all'organizzazione `i18n-demo`.

Se hai vincolato il repository di un'altra organizzazione, potrebbe essere necessario fare clic due volte su `Add Account` per autorizzare due volte prima che venga visualizzata la nuova organizzazione.

![](https://p.3ti.site/1721118306.avif)

Successivamente, seleziona il repository `i18n-demo.github.io` e fai clic su `Begin setup`. Utilizza i valori predefiniti per i passaggi successivi.

![](https://p.3ti.site/1721118490.avif)

Dopo il primo collegamento è necessario attendere qualche minuto prima di potervi accedere.

Dopo la distribuzione, puoi associare un dominio personalizzato.

![](https://p.3ti.site/1721119459.avif)

Dopo aver associato il dominio personalizzato, vai al dominio per configurare la riscrittura del percorso dell'applicazione a pagina singola, come mostrato di seguito:

![](https://p.3ti.site/1721119320.avif)

Le regole nella figura sopra sono le seguenti. Sostituisci `i18n.site` nella prima riga sottostante con il nome di dominio che hai associato.

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

Inoltre, configura le regole della cache, come mostrato di seguito, e imposta la durata della cache su un mese.

![](https://p.3ti.site/1721125111.avif)

Modifica il nome di dominio corrispondente nel secondo passaggio nella figura sopra con il nome di dominio che hai associato.

#### Ottimizzazione della Distribuzione del Sito Web in Cina Continentale

Se desideri ottenere migliori prestazioni di accessibilità nell'ambiente di rete della Cina continentale, [registra prima un nome di dominio](//beian.aliyun.com).

Quindi, utilizza l'object storage dei fornitori cloud nella Cina continentale + `CDN` per distribuire il seguente contenuto `out/ol/htm`.

Puoi utilizzare l'edge computing per riscrivere il percorso per adattarlo alle applicazioni a pagina singola. Ad esempio, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) può essere configurato in questo modo:

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

Poiché il record `MX` e il record `CNAME` non possono coesistere, se desideri ricevere e-mail di nomi di dominio contemporaneamente, devi collaborare con lo script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) per il livello `CNAME` nel record `A`.

Inoltre, poiché le tariffe per il traffico estero dei fornitori di cloud nella Cina continentale sono relativamente costose, se desideri ottimizzare i costi, puoi utilizzare [la risoluzione geografica gratuita di Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) e il nome di dominio personalizzato di [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (come mostrato di seguito) per deviazione del traffico ── il traffico in Cina continentale attraverso Baidu Cloud `CDN`, il traffico internazionale attraverso cloudflare.

![](https://p.3ti.site/1721119788.avif)

Queste soluzioni di ottimizzazione della distribuzione sono più complesse e verranno introdotte in capitoli separati in futuro.

#### Reindirizzamento del Nome di Dominio Generico

Se utilizzi `i18n.site` per generare un sito web come sito web principale, in genere è necessario configurare il reindirizzamento di più domini, ovvero reindirizzare l'accesso da `*.xxx.com` (incluso `www.xxx.com` ) a `xxx.com`.

Questo requisito può essere raggiunto con l'aiuto di Alibaba Cloud `CDN` `EdgeScript` ( [documento inglese](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [documento cinese](https://help.aliyun.com/zh/cdn/developer-reference/edgescript))

Aggiungi il nome di dominio in [Alibaba Cloud CDN](https://cdn.console.aliyun.com/domain/list) e punta il nome di dominio da `*.xxx.com` a `CNAME` in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Ad esempio, la configurazione del reindirizzamento del nome di dominio pan di `*.i18n.site` nell'immagine sopra è la seguente:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Struttura delle Directory

Aggiungi una configurazione simile alla seguente nel paragrafo `server` di nginx Cambia `/root/i18n/md/out/ol/htm` nel percorso del tuo progetto `out/ol/htm` :

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Struttura Delle Directory

#### `public`

File statici del sito Web, come `favicon.ico` , `robots.txt` , ecc.

I file icona qui possono essere generati con [realfavicongenerator.net](https://realfavicongenerator.net)

#### `.i18n`

Sotto la directory `.i18n` ci sono i file di configurazione, la cache di traduzione, ecc. di `i18n.site` Per i dettagli vedere il capitolo successivo ["Configurazione"](/i18n.site/conf) .

#### `en`

Directory della lingua sorgente, corrispondente a `en` in `fromTo` del file di configurazione `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Consultare la configurazione della traduzione [i18](/i18/use)