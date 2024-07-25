# Installa &

## Token Di Configurazione

`i18n.site` Lo strumento di traduzione `i18` è incorporato, [fare clic qui per fare riferimento al documento `i18` per configurare il token di accesso](/i18/use) .

## Installare

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Progetto Dimostrativo

Iniziamo con un progetto demo e impariamo a utilizzare `i18n.site`

Per prima cosa cloniamo il repository demo ed eseguiamo il comando come segue:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Gli utenti nella Cina continentale possono:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` Il nome della directory del clone della base di codice deve essere `md` per facilitare l'anteprima locale con `docker` .

### Tradurre

Per prima cosa, entra nella directory `md` ed esegui `i18n.site` , che tradurrà `en` in `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Dopo l'esecuzione, verranno generati i file di traduzione e di cache. Ricordati di aggiungerli al repository `git add . ` nella directory `md` .

### Anteprima Locale

Installa e avvia `docker` ( `MAC` consigliano di utilizzare [orbstack](https://orbstack.dev) come runtime di `docker` ).

Quindi, accedi alla directory `docker` ed esegui `./up.sh` , quindi visita [https://127.0.0.1](https://127.0.0.1) per visualizzare l'anteprima in locale.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Pubblica Contenuti

`i18n.site` Adotta un'architettura [applicativa a pagina singola](https://developer.mozilla.org/docs/Glossary/SPA) e la pagina di ingresso del sito Web e il contenuto del sito Web vengono distribuiti in modo indipendente.

Dopo aver eseguito la traduzione di cui sopra, le directory `htm` e `v` verranno generate nella directory `md/out/dev` .

Qui, `dev` indica che è stato creato in base al file `.i18n/htm/dev.yml` .

`dev` Sotto contenuto :

`htm` Sotto la directory c'è la pagina di ingresso del sito.

`v` La directory contiene il contenuto del sito Web con il numero di versione.

L'anteprima locale copierà tutti i file nella directory `out/dev/v/0.1.0` indipendentemente dal numero di versione.

Per il rilascio ufficiale, i file modificati verranno copiati nella directory del nuovo numero di versione.

#### Utilizzare -c Per Specificare Il File Di Configurazione

Diversi file di configurazione creeranno directory corrispondenti nella directory `out` .

Ad esempio, `.i18n/htm/ol.yml` creerà una directory `out/ol` .

`dev.yml` e `ol.yml` sono le configurazioni predefinite.

`dev` è l'abbreviazione di `development` , che rappresenta l'ambiente di sviluppo, viene utilizzata per l'anteprima locale ed è anche il file di configurazione predefinito.
`ol` è l'abbreviazione di `online` , che rappresenta l'ambiente online, viene utilizzata per il rilascio ufficiale ed è anche il file di configurazione predefinito quando si pubblica su `npm` utilizzando il parametro della riga di comando `-n` .

È inoltre possibile creare altri file di configurazione. Utilizzare `--htm_conf` sulla riga di comando per specificare il nome del file di configurazione:

Per esempio:
```
i18n.site --htm_conf yourConfig --save
```

Qui `--save` indica il numero di versione della versione di aggiornamento.

#### <a rel=id href="#npm" id="npm"></a> Pubblica contenuti su npmjs.com

La pubblicazione di contenuto in [npmjs.com](//npmjs.com) è la soluzione predefinita consigliata (vedere [Disponibilità elevata front-end](/i18n.site/feature#ha) ).

##### npm login & Pubblicazione

Installa `nodejs` usa `npm login` per accedere.

Modifica `md/.i18n/htm/ol.yml` cambia `i18n.site` in `v: //unpkg.com/i18n.site` con il tuo `npm` nome pacchetto.

Basta usare il nome del pacchetto non occupato su [npmjs.com](//npmjs.com) Usare il nome del dominio del sito web come nome del pacchetto è una buona scelta.

Quando pubblichi in base al pacchetto `npm` , **assicurati di utilizzare `//unpkg.com/`** come prefisso del valore `v:` . Il tempo di cache `i18n.site` sotto questo percorso del prefisso `/.v` è stato appositamente ottimizzato per consentire la visualizzazione tempestiva delle nuove versioni.

Eseguire `i18n.site --npm` o `i18n.site -n` nella directory `md` per tradurre e pubblicare.

Se utilizzi un ambiente di integrazione continua per pubblicare, non è necessario installarlo `nodejs` Basta copiare il `~/.npmrc` autorizzazione di accesso e pubblicazione nell'ambiente.

Se modifichi il nome del pacchetto in `v:` in `ol.yml` , **assicurati di eliminare prima `.i18n/v/ol`** e poi di pubblicarlo.

##### Server Proxy Pubblicato Da npm

Se gli utenti nella Cina continentale riscontrano problemi di rete e non sono in grado di pubblicare il pacchetto `npm` , possono impostare la variabile di ambiente `https_proxy` per configurare il server proxy.

Supponendo che la porta del tuo server proxy sia `7890` puoi scrivere:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Contenuti Ospitati Autonomamente

Se desideri ospitare autonomamente il contenuto, modifica prima `md/.i18n/htm/ol.yml` e cambia `v: //unpkg.com/i18n.site` nel prefisso URL, ad esempio `v: //i18n-v.xxx.com` .

Inserisci la directory `md` ed esegui

```
i18n.site --htm_conf ol --save
```

o abbreviazione

```
i18n.site -c ol -s
```

Quindi, configura il contenuto nella directory `md/out/ol/v` sul percorso del prefisso URL impostato in `v:` .

Infine, **configura il tempo di cache del percorso che termina con `/.v` su `1s`** , altrimenti non sarà possibile accedere immediatamente al contenuto appena rilasciato.

Il tempo di memorizzazione nella cache per altri percorsi può essere impostato su un anno o più per ridurre le richieste non necessarie.

##### Ospita Contenuti Su s3

Per ospitare autonomamente i contenuti, oltre a utilizzare + proprio `CDN` , un'altra opzione comune è utilizzare `S3`

Puoi utilizzare il server [rclone](https://rclone.org) Login `S3` , quindi fare riferimento e modificare lo script riportato di seguito e copiare solo le modifiche incrementali su `S3` ogni volta che pubblichi.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Ricordatevi di configurare `CDN` in modo che il tempo di cache del percorso che termina con `/.v` sia `1s` , altrimenti non potrete accedere subito al contenuto appena rilasciato.

### Pubblicare Il Sito Web

Il sito Web può essere distribuito ovunque, [github page](https://pages.github.com) e [cloudflare page](https://pages.cloudflare.com) sono buone scelte.

Poiché il `index.html` Web adotta l'architettura di [un'applicazione a pagina singola](https://developer.mozilla.org/docs/Glossary/SPA) , ricordarsi di riscrivere il percorso dell'URL che non contiene `. `

La pagina di ingresso del sito Web deve essere distribuita solo una volta e non è necessario ridistribuirla per i successivi aggiornamenti del contenuto.

#### Distribuisci Sulla Pagina github

Per prima cosa [fare clic qui github per creare un'organizzazione](https://github.com/account/organizations/new?plan=free) . Il nome dell'organizzazione seguente è `i18n-demo`

Quindi crea un magazzino sotto questa organizzazione `i18n-demo.github.io` (Sostituisci `i18n-demo` con il nome dell'organizzazione che hai creato):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Quando pubblichi il contenuto nell'articolo precedente, è stato generato `out/ol/htm` Inserisci questa directory ed esegui :

```
ln -s index.html 404.html
```


Poiché `github page` non supporta la riscrittura del percorso URL, quindi viene utilizzato `404.html` .

Quindi esegui il seguente comando nella directory `htm` (ricordati di sostituire `i18n-demo/i18n-demo.github.io.git` con il tuo indirizzo di magazzino) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Dopo aver inviato il codice, attendi che la distribuzione di `github page` venga eseguita correttamente (come mostrato di seguito), quindi potrai accedervi.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Per la pagina demo consultare:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Distribuisci Sulla Pagina cloudflare

[cloudflare page](//pages.cloudflare.com) Rispetto a `github page` , fornisce la riscrittura del percorso ed è più amichevole per la Cina continentale ed è più accessibile.

`cloudflare page` La distribuzione è solitamente basata sulla distribuzione di `github page` sopra.

Crea un progetto e associa il magazzino sopra `i18n-demo.github.io`

Il processo è mostrato nella figura seguente:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Fare clic su `Add Account` per concedere l'accesso all `i18n-demo` .

Se hai vincolato il magazzino di un'altra organizzazione, potrebbe essere necessario fare clic due volte su `Add Account` per autorizzarlo due volte prima che venga visualizzata la nuova organizzazione.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Selezionare quindi `i18n-demo.github.io` Warehouse, quindi fare clic su `Begin setup` e utilizzare i valori predefiniti per i passaggi successivi.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Dopo il primo collegamento è necessario attendere qualche minuto prima di potervi accedere.

Dopo la distribuzione, puoi associare un nome di dominio personalizzato.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Dopo aver associato il nome di dominio personalizzato, vai al nome di dominio per configurare la riscrittura del percorso dell'applicazione a pagina singola, come mostrato di seguito:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Le regole nell'immagine sopra sono le seguenti. Sostituisci `i18n.site` nella prima riga sottostante con il nome di dominio a te associato.

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

<img alt="" src="https://p.3ti.site/1721125111.avif">

Modifica il nome di dominio corrispondente nel secondo passaggio nell'immagine sopra con il nome di dominio che hai associato.

#### Ottimizzazione Della Distribuzione Del Sito Web Nella Cina Continentale

Se desideri ottenere migliori prestazioni di accessibilità nell'ambiente di rete della Cina continentale, [registra prima un nome di dominio](//beian.aliyun.com) .

Quindi, utilizza l'archiviazione di oggetti dei fornitori `CDN` servizi cloud nella Cina continentale + Distribuisci `out/ol/htm` seguente contenuto!

Puoi utilizzare l'edge computing per riscrivere il percorso per adattarlo alle applicazioni a pagina singola, come [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) Può essere configurato in questo modo:

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

Poiché i record `MX` e i record `CNAME` non possono coesistere, se desideri ricevere e-mail di nomi di dominio contemporaneamente, devi collaborare con lo script [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) per appiattire `CNAME` in `A` record.

Inoltre, poiché le tariffe per il traffico estero dei fornitori di cloud nella Cina continentale sono relativamente costose, se desideri ottimizzare i costi, puoi utilizzare [la risoluzione geografica gratuita di Huawei Cloud DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) e il nome di dominio personalizzato di [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (come mostrato di seguito). deviazione del traffico──Traffico nella Cina continentale Baidu Cloud `CDN` il traffico internazionale vale cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Queste soluzioni di ottimizzazione della distribuzione sono più complesse e verranno introdotte in capitoli separati in futuro.

#### Reindirizzamento Del Nome Di Dominio Generico

Se utilizzi `i18n.site` per generare un sito Web come sito Web principale, in genere è necessario configurare il reindirizzamento di più domini, ovvero reindirizzare l'accesso `*.xxx.com` (incluso `www.xxx.com` ) a `xxx.com` .

Questo requisito può essere raggiunto con l'aiuto di Alibaba Cloud `EdgeScript` `CDN` ( [documento inglese](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [documento cinese](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Aggiungi un nome di dominio in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) e punta `*.xxx.com` nome di dominio su `CNAME` di Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Ad esempio, la configurazione del reindirizzamento del nome di dominio pan di `*.i18n.site` nell'immagine sopra è la seguente:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Distribuisci Con nginx

Aggiungi una configurazione simile alla seguente nel `server` nginx dove `/root/i18n/md/out/ol/htm` cambiala nel percorso del tuo progetto `out/ol/htm` :

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

#### Pubblico

File statici del sito Web, come `favicon.ico` `robots.txt` , ecc.

I file icona qui possono essere generati con [realfavicongenerator.net](https://realfavicongenerator.net)

#### .i18n

`.i18n` Sotto la directory ci sono i file di configurazione di `i18n.site` , la cache di traduzione, ecc. Per i dettagli vedere il capitolo successivo ["Configurazione"](/i18n.site/conf) .

#### en

Directory della lingua di origine, corrispondente `.i18n/conf.yml` `fromTo` `en` nel file di configurazione

```yaml
i18n:
  fromTo:
    en: zh
```

Si prega di fare riferimento alla configurazione della traduzione [i18](/i18/use)

