# Suchmaschinenoptimierung (Seo)

## Prinzip

`i18n.site` verwendet eine Einzelseitenarchitektur ohne Aktualisierung. Um die Suchindizierung zu erleichtern, wird eine separate statische Seite und `sitemap.xml` zum Crawlen durch Crawler generiert.

Wenn der Suchmaschinen-Crawler `User-Agent` der Zugriffsanforderung verwendet, wird die Anforderung über `302` auf die statische Seite umgeleitet.

Verwenden Sie auf statischen Seiten `link` , um Links zu verschiedenen Sprachversionen dieser Seite anzugeben, z. B. :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Lokale Nginx-Konfiguration

Nehmen Sie als Beispiel die `.i18n/htm/main.yml` -Konfigurationsdatei im Demoprojekt

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

Bitte ändern Sie zunächst den Wert `host:` oben in Ihren Domainnamen, z. B. `xxx.com` .

Dann wird `i18n.site -n` die statische Seite im Verzeichnis `out/main/htm` generiert.

Natürlich können Sie auch andere Konfigurationsdateien aktivieren, z. B. zuerst auf die Konfiguration `main` verweisen, um `.i18n/htm/dist.package.json` und `.i18n/htm/dist.yml` zu erstellen.

Führen Sie dann `i18n.site -n -c dist` aus, damit die statische Seite auf `out/dist/htm` generiert wird.

`nginx` kann mithilfe der folgenden Konfiguration eingestellt werden.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Speichern Sie Server-Worker-Skripte nicht zu lange im Cache
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Legen Sie längere Cache-Zeiten für andere statische Ressourcen fest
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Legen Sie fest, welche statische Datei der Crawler als Homepage-Eintrag verwendet
location = / {
  # Wenn $botLang nicht leer ist, bedeutet dies Crawler-Zugriff und Umleitung entsprechend dem eingestellten Sprachpfad
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Konfiguration einer Einzelseitenanwendung
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Konfigurieren Sie Den Objektspeicher Zum Hochladen Statischer Dateien

Statische Dateien können lokal generiert werden, ein häufigerer Ansatz besteht jedoch darin, sie in den Objektspeicher hochzuladen.

Ändern Sie `out` in :

```
out:
  - s3
```

Bearbeiten Sie dann `~/.config/i18n.site.yml` und fügen Sie die folgende Konfiguration hinzu :

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

Bitte ändern Sie in der Konfiguration `i18n.site` in den Wert `host:` in `.i18n/htm/main.yml` Unter `s3` können mehrere Objektspeicher konfiguriert werden, und das Feld `region` ist optional (viele Objektspeicher müssen dieses Feld nicht festlegen).

Führen Sie dann `i18n.site -n` aus, um das Projekt erneut zu veröffentlichen.

Wenn Sie `~/.config/i18n.site.yml` geändert haben und erneut hochladen möchten, verwenden Sie bitte den folgenden Befehl im Projektstammverzeichnis, um den Upload-Cache zu leeren :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Cloudflare-Konfiguration

Domainname gehostet bei [cloudflare](//www.cloudflare.com)

### Konvertierungsregeln

Fügen Sie die Konvertierungsregeln wie unten gezeigt hinzu:

![](//p.3ti.site/1725436822.avif)

Der Regelcode lautet wie folgt. Bitte ändern Sie den Code „i18n.site“ in Ihren Domainnamen:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Caching-Regeln

Fügen Sie Cache-Regeln wie folgt hinzu:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Umleitungsregeln

Legen Sie die Umleitungsregeln wie folgt fest. Bitte ändern Sie den Code „i18n.site“ in Ihren Domainnamen

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

`URL redirect` Wählen Sie die dynamische Umleitung. Bitte ändern Sie `/en` im Umleitungspfad `concat("/en",http.request.uri.path,".htm")` in die Standardsprache, die Suchmaschinen einbeziehen sollen.

## Intelligente Baidu-Cloud-Konfiguration

Wenn Sie Dienste für das chinesische Festland bereitstellen müssen, können Sie [Baidu Smart Cloud](//cloud.baidu.com) verwenden.

Die Daten werden in den Baidu Object Storage hochgeladen und an das Baidu Content Distribution Network gebunden.

Erstellen Sie dann das Skript im [EdgeJS -Dienst](//console.bce.baidu.com/cdn/#/cdn/ejs/list) wie folgt

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
  // Antwortheader können auf Debug-Ausgaben gesetzt werden, z. B. out.XXX = 'MSG';
})
```

Klicken Sie auf `Debug` und dann auf Im gesamten Netzwerk veröffentlichen.

![](//p.3ti.site/1725437754.avif)

## Erweiterte Verwendung: Verteilen Sie Den Datenverkehr Basierend Auf Der Regionalen Auflösung

Wenn Sie Dienste auf dem chinesischen Festland anbieten und außerdem `cloudflare` kostenlosen internationalen Datenverkehr wünschen, können Sie `DNS` mit regionaler Auflösung verwenden.

Beispielsweise bietet [Huawei DNS](https://www.huaweicloud.com) eine kostenlose regionale Analyse, mit der der Datenverkehr auf dem chinesischen Festland über die Baidu Smart Cloud und der internationale Datenverkehr über `cloudflare` geleitet werden kann.

Die Konfiguration von `cloudflare` birgt viele Fallstricke. Hier sind einige Punkte zu beachten :

### Der Domänenname Wird in Anderen Gehostet `DNS` , Verwendung `cloudflare`

Binden Sie zunächst einen beliebigen Domänennamen an `cloudflare` und verwenden Sie dann `SSL/TLS` → benutzerdefinierter Domänenname, um den Hauptdomänennamen diesem Domänennamen zuzuordnen.

![](https://p.3ti.site/1725438658.avif)

### Auf `cloudflare R2` Kann Nicht Über Einen Benutzerdefinierten Domänennamen Zugegriffen Werden

Da auf den `cloudflare` Objektspeicher `R2` nicht über einen benutzerdefinierten Domänennamen zugegriffen werden kann, muss zum Platzieren statischer Dateien ein Objektspeicher eines Drittanbieters verwendet werden.

Hier nehmen wir [backblaze.com](https://www.backblaze.com) als Beispiel, um zu demonstrieren, wie man Objekte von Drittanbietern bindet, die bei `cloudflare` gespeichert werden sollen.

Erstellen Sie einen Bucket bei `backblaze.com` , laden Sie eine beliebige Datei hoch, klicken Sie, um die Datei zu durchsuchen, und rufen Sie den Domänennamen `Friendly URL` ab, der hier `f003.backblazeb2.com` ist.

![](//p.3ti.site/1725440783.avif)

Ändern Sie den Domänennamen von `CNAME` auf `f003.backblazeb2.com` bei `cloudflare` und aktivieren Sie den Proxy.

![](//p.3ti.site/1725440896.avif)

Ändern Sie `cloudflare` von `SSL` → Verschlüsselungsmodus, setzen Sie ihn auf `Full`

![](//p.3ti.site/1725438572.avif)

Fügen Sie die Konvertierungsregel wie unten gezeigt hinzu und setzen Sie sie an die erste Stelle (die erste hat die niedrigste Priorität):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` Wählen Sie „Dynamisch“ und ändern Sie `your_bucketname` in `concat("/file/your_bucketname",http.request.uri.path)` in Ihren Bucket-Namen.

Darüber hinaus wird in der obigen `cloudflare` Konvertierungsregel `index.html` in `file/your_bucketname/index.html` geändert und andere Konfigurationen bleiben gleich.

![](//p.3ti.site/1725441384.avif)