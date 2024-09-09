# Suchmaschinenoptimierung (SEO)

## Grundsatz

`i18n.site` nutzt eine Einzelseitenarchitektur ohne Neuladen. Um die Indexierung durch Suchmaschinen zu erleichtern, werden separate statische Seiten und eine `sitemap.xml` für den Zugriff durch Crawler generiert.

Wenn der `User-Agent` der Zugriffsanfrage ein Suchmaschinen-Crawler ist, wird die Anfrage über `302` auf die statische Seite umgeleitet.

Auf statischen Seiten wird mit `link` vermerkt, welche Links zu verschiedenen Sprachversionen dieser Seite führen, zum Beispiel:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Konfiguration des Objektspeichers für das Hochladen statischer Dateien

Statische Dateien können lokal generiert werden, aber die gängigere Methode ist, sie in den Objektspeicher hochzuladen.

Nehmen wir die Konfigurationsdatei `.i18n/htm/ol.yml` im Demoprojekt als Beispiel

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

Bitte ändern Sie zuerst den `host:`-Wert oben in Ihren Domainnamen, z.B. `i18n.site`.

Dann bearbeiten Sie `~/.config/i18n.site.yml` und fügen Sie die folgende Konfiguration hinzu:

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

In der Konfiguration ändern Sie `i18n.site` in den `host:`-Wert aus `.i18n/htm/ol.yml`, unter `s3` können mehrere Objektspeicher konfiguriert werden, das Feld `region` ist optional (viele Objektspeicher benötigen dieses Feld nicht).

Dann führen Sie `i18n.site -n` aus, um das Projekt neu zu veröffentlichen.

Wenn Sie `~/.config/i18n.site.yml` geändert haben und neu hochladen möchten, verwenden Sie den folgenden Befehl im Projektstammverzeichnis, um den Upload-Cache zu leeren:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Cloudflare-Konfiguration

Domain bei [cloudflare](//www.cloudflare.com) gehostet.

### Umleitungsvorschriften

Fügen Sie die Umleitungsvorschriften wie im folgenden Bild hinzu:

![](//p.3ti.site/1725436822.avif)

Der Regelcode lautet wie folgt, bitte ändern Sie den Code „i18n.site“ in Ihren Domainnamen:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Cache-Regeln hinzufügen

Fügen Sie die Cache-Regeln wie folgt hinzu:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Umleitungsvorschriften

Stellen Sie die Umleitungsvorschriften wie folgt ein, bitte ändern Sie den Code „i18n.site“ in Ihren Domainnamen:

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

`URL redirect` Wählen Sie die dynamische Umleitung. Bitte ändern Sie `/en` im Umleitungspfad `concat("/en",http.request.uri.path,".htm")` in die Standardsprache, die Suchmaschinen indexieren sollen.

## Configuration der intelligenten Baidu Cloud

Wenn Sie Dienstleistungen für das chinesische Festland anbieen möchten, können Sie [Baidu Smart Cloud](//cloud.baidu.com) nutzen.

Daten in den Baidu Object Storage hochladen und an das Baidu Content Distribution Network binden.

Dann ein Skript im [EdgeJS Edge Service](//console.bce.baidu.com/cdn/#/cdn/ejs/list) erstellen wie folgt:

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

Klicken Sie auf `Debug`, und dann auf „Im gesamten Netzwerk veröffentlichen“.

![](//p.3ti.site/1725437754.avif)

## Erweiterte Anwendung: Verteilung des Datenverkehrs basierend auf geografischer Analyse

Wenn Sie sowohl Dienstleistungen für das chinesische Festland anbieen als auch kostenlosen internationalen Datenverkehr über `cloudflare` wünschen, können Sie einen `DNS` mit geografischer Analyse verwenden.

Beispielsweise bietet [Huawei Cloud DNS](https://www.huaweicloud.com) eine kostenlose geografische Analyse, die es ermöglicht, den Datenverkehr auf dem chinesischen Festland über die Baidu Smart Cloud und den internationalen Datenverkehr über `cloudflare` zu leiten.

Bei der Konfiguration von `cloudflare` gibt es viele Fallstricke. Hier sind einige Punkte zu beachten:

### Wie verwendet man `cloudflare`, wenn der Domänenname bei einem anderen `DNS` gehostet wird?

Erst einen beliebigen Domänennamen an `cloudflare` binden, dann unter `SSL/TLS` → benutzerdefinierter Domänenname den Hauptdomänennamen mit diesem Domänennamen verknüpfen.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` kann nicht über einen benutzerdefinierten Domänennamen aufgerufen werden

Da `R2` von `cloudflare` nicht über einen benutzerdefinierten Domänennamen zugänglich ist, muss ein Objektspeicher eines Drittanbieters zum Speichern statischer Dateien verwendet werden.

Nehmen wir [backblaze.com](https://www.backblaze.com) als Beispiel, um zu zeigen, wie man einen Drittanbieter-Objektspeicher an `cloudflare` bindet.

Bei `backblaze.com` einen Bucket erstellen, eine beliebige Datei hochladen, die Datei durchsuchen und den Domänennamen der `Friendly URL` abrufen, hier `f003.backblazeb2.com`.

![](//p.3ti.site/1725440783.avif)

Den Domänennamen bei `cloudflare` auf `CNAME` zu `f003.backblazeb2.com` ändern und den Proxy aktivieren.

![](//p.3ti.site/1725440896.avif)

Den `SSL`-Verschlüsselungsmodus bei `cloudflare` auf `Full` ändern

![](//p.3ti.site/1725438572.avif)

Eine Umleitungsvorschrift wie im folgenden Bild hinzufügen und an die erste Stelle setzen (erste Stufe hat die niedrigste Priorität):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` Wählen Sie „Dynamisch“ und ändern Sie `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` in Ihren Bucket-Namen.

Zusätzlich wird in der obigen `cloudflare`-Umleitungsvorschrift `index.html` in `file/your_bucketname/index.html` geändert, andere Einstellungen bleiben unverändert.

![](//p.3ti.site/1725441384.avif)