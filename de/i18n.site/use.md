# Installation & Bereitstellung

## Token-Konfiguration

`i18n.site` enthält das integrierte `i18`-Übersetzungstool. Bitte [beziehen Sie sich hier auf die Dokumentation von `i18`, um die Zugriffs-Token zu konfigurieren](/i18/use).

## Installation

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demonstrationsprojekt

Lassen Sie uns mit einem Demonstrationsprojekt beginnen, um zu lernen, wie man `i18n.site` verwendet.

Zuerst klonen wir das Demonstrations-Repository und führen den folgenden Befehl aus:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Benutzer in China können:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Der Verzeichnisname für das geklonte Repository `demo.i18n.site` muss unbedingt `md` lauten, um eine lokale Vorschau mit `docker` zu ermöglichen.

### Übersetzung

Zuerst navigieren Sie ins Verzeichnis `md` und führen Sie `i18n.site` aus, um `en` in `zh` zu übersetzen.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nach der Ausführung werden Übersetzungs- und Cache-Dateien generiert. Denken Sie daran, im Verzeichnis `md` `git add .` auszuführen, um sie dem Repository hinzuzufügen.

### Lokale Vorschau

Installieren und starten Sie `docker` ( `MAC` Benutzer empfehlen die Verwendung von [orbstack](https://orbstack.dev) als Runtime für `docker` ).

Dann navigieren Sie ins Verzeichnis `docker` und führen Sie `./up.sh` aus. Besuchen Sie [https://127.0.0.1](https://127.0.0.1), um die lokale Vorschau anzuzeigen.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Inhalt veröffentlichen

`i18n.site` verwendet eine [Single-Page-Application](https://developer.mozilla.org/docs/Glossary/SPA)-Architektur, wobei die Website-Eingangsseite und der Website-Inhalt unabhängig voneinander bereitgestellt werden.

Nach der Übersetzung werden im Verzeichnis `md/out/dev` die Verzeichnisse `htm` und `v` generiert.

Hier bedeutet `dev`, dass es auf Basis der Konfigurationsdatei `.i18n/htm/dev.yml` erstellt wird.

Im Verzeichnis `dev`:

Das Verzeichnis `htm` enthält die Website-Eingangsseite.

Das Verzeichnis `v` enthält die Website-Inhalte mit Versionsnummern.

Bei der lokalen Vorschau spielt die Versionsnummer keine Rolle, da alle Dateien in das Verzeichnis `out/dev/v/0.1.0` kopiert werden.

Bei der offiziellen Veröffentlichung werden geänderte Dateien in das neue Versionsnummernverzeichnis kopiert.

#### Verwenden Sie -C, Um Die Konfigurationsdatei Anzugeben

Unterschiedliche Konfigurationsdateien erstellen entsprechende Verzeichnisse im `out`-Verzeichnis.

Beispielsweise erstellt `.i18n/htm/ol.yml` das Verzeichnis `out/ol`.

`dev.yml` und `ol.yml` sind die Standardkonfigurationen.

`dev` ist die Abkürzung für `development` und bezeichnet die Entwicklungsumgebung, die für die lokale Vorschau verwendet wird und auch die Standardkonfigurationsdatei ist.
`ol` ist die Abkürzung für `online` und bezeichnet die Online-Umgebung, die für die offizielle Veröffentlichung verwendet wird. Es ist auch die Standardkonfigurationsdatei, wenn die Befehlszeilenparameter `-n` zum Veröffentlichen auf `npm` verwendet werden.

Sie können auch andere Konfigurationsdateien erstellen. Verwenden Sie `--htm_conf` in der Befehlszeile, um den Namen der zu verwendenden Konfigurationsdatei anzugeben:

Zum Beispiel:
```
i18n.site --htm_conf yourConfig --save
```

Hier bedeutet `--save`, dass die Versionsnummer aktualisiert wird.

#### <a rel=id href="#npm" id="npm"></a> Inhalt auf npmjs.com veröffentlichen

Die Veröffentlichung von Inhalten auf [npmjs.com](//npmjs.com) ist die empfohlene Standardlösung (siehe [Frontend-Hochverfügbarkeit](/i18n.site/feature#ha)).

##### npm login & Veröffentlichen

Installieren Sie `nodejs` und melden Sie sich mit `npm login` an.

Bearbeiten Sie `md/.i18n/htm/ol.yml` und ändern Sie `i18n.site` in `v: //unpkg.com/i18n.site` in Ihren eigenen `npm`-Paketnamen.

Verwenden Sie einen auf [npmjs.com](//npmjs.com) nicht belegten Paketnamen. Die Verwendung des Website-Domainnamens als Paketname ist eine gute Wahl.

Stellen Sie beim Veröffentlichen auf Basis von Paket `npm` sicher, dass Sie 2 für das Präfix von `v:` **`//unpkg.com/`** . Der Wert `i18n.site` hat die Cache-Zeit von `/.v` unter diesem Präfixpfad speziell optimiert, um eine zeitnahe Anzeige neuer Versionen zu erreichen.

Führen Sie im Verzeichnis `md` `i18n.site --npm` oder `i18n.site -n` aus, um zu übersetzen und zu veröffentlichen.

Wenn Sie eine kontinuierliche Integrationsumgebung zum Veröffentlichen verwenden, ist keine Installation von `nodejs` erforderlich. Kopieren Sie einfach die bereits angemeldeten und berechtigten `~/.npmrc` in die Umgebung.

Wenn Sie den Paketnamen `v:` in `ol.yml` ändern, **löschen Sie bitte zuerst `.i18n/v/ol`** und veröffentlichen Sie anschließend.

##### npm-Proxyserver

Benutzer in China, die auf Netzwerkprobleme stoßen und `npm`-Pakete nicht veröffentlichen können, können die Umgebungsvariable `https_proxy` festlegen, um den Proxyserver zu konfigurieren.

Unter der Annahme, dass Ihr Proxy-Server-Port `7890` ist, können Sie es so schreiben:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Selbstgehostete Inhalte

Wenn Sie Inhalte selbst hosten möchten, bearbeiten Sie zunächst `md/.i18n/htm/ol.yml` und ändern Sie `v: //unpkg.com/i18n.site` in Ihr URL-Präfix, z.B. `v: //i18n-v.xxx.com`.

Gehen Sie ins Verzeichnis `md` und führen Sie es aus

```
i18n.site --htm_conf ol --save
```

oder verkürzt

```
i18n.site -c ol -s
```

Konfigurieren Sie dann den Inhalt im Verzeichnis `md/out/ol/v` für das in `v:` festgelegte URL-Präfixpfad.

**Konfigurieren Sie abschließend die Cache-Zeit der Pfade, die auf `/.v` enden, auf `1s`**, da sonst nicht sofort auf den neu veröffentlichten Inhalt zugegriffen werden kann.

Die Cache-Zeit für andere Pfade kann auf ein Jahr oder mehr eingestellt werden, um unnötige Anfragen zu reduzieren.

##### Inhalte auf S3 hosten

Die Selbstverwaltung von Inhalten, neben der Verwendung Ihres eigenen Servers, bietet eine weitere häufige Option mit `S3` + `CDN`.

Sie können sich mit [rclone](https://rclone.org) am `S3`-Server anmelden und das folgende Skript referenzieren und anpassen, um nur die inkrementellen Änderungen für jede Veröffentlichung auf `S3` zu kopieren.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Stellen Sie sicher, dass Sie `CDN` konfigurieren, damit die Cache-Zeit für Pfade, die mit `/.v` enden, auf `1s` gesetzt ist, da sonst nicht sofort auf den neu veröffentlichten Inhalt zugegriffen werden kann.

### Website veröffentlichen

Die Website kann überall bereitgestellt werden, [GitHub Pages](https://pages.github.com) und [Cloudflare Pages](https://pages.cloudflare.com) sind beide gute Optionen.

Da die Website eine [Single-Page-Application](https://developer.mozilla.org/docs/Glossary/SPA)-Architektur verwendet, denken Sie daran, URL-Pfade ohne `. ` auf `index.html` umzuschreiben.

Die Website-Eingangsseite muss nur einmal bereitgestellt werden. Bei späteren Inhaltsaktualisierungen ist keine erneute Bereitstellung der Website-Eingangsseite erforderlich.

#### Bereitstellung auf GitHub Pages

Erstellen Sie zunächst eine Organisation auf GitHub, indem Sie [hier klicken](https://github.com/account/organizations/new?plan=free). Der Name der Organisation lautet beispielsweise `i18n-demo`.

Erstellen Sie dann das Repository `i18n-demo.github.io` unter dieser Organisation (ersetzen Sie `i18n-demo` durch den Namen Ihrer Organisation):

![](https://p.3ti.site/1721098657.avif)

Wenn Sie den Inhalt veröffentlicht haben, wurde `out/ol/htm` generiert. Navigieren Sie in dieses Verzeichnis und führen Sie den folgenden Befehl aus:

```
ln -s index.html 404.html
```


Da `github page` das Umschreiben von URL-Pfaden nicht unterstützt, wird stattdessen `404.html` verwendet.

Führen Sie dann den folgenden Befehl im Verzeichnis `htm` aus (ersetzen Sie `i18n-demo/i18n-demo.github.io.git` durch Ihre Repository-Adresse):

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Warten Sie nach dem Pushen des Codes, bis die Bereitstellung von `github page` erfolgreich abgeschlossen ist (wie unten gezeigt), bevor Sie darauf zugreifen.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Die Demonstrationsseite finden Sie unter:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Bereitstellung auf Cloudflare Pages

[cloudflare page](//pages.cloudflare.com) bietet gegenüber `github page` eine Pfadumschreibung und eine benutzerfreundlichere Verfügbarkeit für das chinesische Festland. Es wird empfohlen, es zu verwenden.

Die Bereitstellung von `cloudflare page` basiert normalerweise auf der Bereitstellung von `github page` oben.

Erstellen Sie ein Projekt und binden Sie das Repository `i18n-demo.github.io` oben.

Der Vorgang ist in der folgenden Abbildung dargestellt:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klicken Sie bitte auf `Add Account`, um der Organisation `i18n-demo` Zugriff zu gewähren.

Wenn Sie das Repository einer anderen Organisation angebunden haben, müssen Sie möglicherweise zweimal auf `Add Account` klicken, um zweimal zu autorisieren, bevor die neue Organisation angezeigt wird.

![](https://p.3ti.site/1721118306.avif)

Wählen Sie als Nächstes das Repository `i18n-demo.github.io` aus und klicken Sie auf `Begin setup`. Die nachfolgenden Schritte können mit den Standardwerten durchgeführt werden.

![](https://p.3ti.site/1721118490.avif)

Nach der ersten Bindung müssen Sie einige Minuten warten, bevor Sie darauf zugreifen können.

Nach der Bereitstellung können Sie einen benutzerdefinierten Domänennamen binden.

![](https://p.3ti.site/1721119459.avif)

Nachdem Sie den benutzerdefinierten Domänennamen gebunden haben, konfigurieren Sie bitte die Pfadumleitung der Einzelseitenanwendung unter dem Domänennamen, wie unten gezeigt:

![](https://p.3ti.site/1721119320.avif)

Die Regeln im obigen Bild lauten wie folgt. Bitte ersetzen Sie `i18n.site` in der ersten Zeile unten durch den von Ihnen gebundenen Domainnamen.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Konfigurieren Sie außerdem die Cache-Regeln wie unten gezeigt und legen Sie die Cache-Dauer auf einen Monat fest.

![](https://p.3ti.site/1721125111.avif)

Ändern Sie den Domainnamen im zweiten Schritt im Bild oben in den Domainnamen, den Sie gebunden haben.

#### Optimierung der Website-Bereitstellung in China

Wenn Sie in der Netzwerkumgebung in China eine bessere Zugänglichkeitsleistung erzielen möchten, [registrieren Sie bitte zuerst einen Domainnamen](//beian.aliyun.com).

Nutzen Sie dann den Objektspeicher von Cloud-Anbietern in China und `CDN`, um den Inhalt unter `out/ol/htm` bereitzustellen.

Sie können Edge Computing verwenden, um den Pfad für die Anpassung an Einzelseitenanwendungen neu zu schreiben. [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kann beispielsweise wie folgt konfiguriert werden:

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

Da Datensatz `MX` und Datensatz `CNAME` nicht nebeneinander existieren können, müssen Sie, wenn Sie gleichzeitig Domainnamen-E-Mails empfangen möchten, mit dem [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten)-Skript auf Ebene `CNAME` in Datensatz `A` kooperieren.

Da die Gebühren für den Auslandsverkehr von Cloud-Anbietern in China relativ hoch sind, können Sie [die kostenlose geografische Auflösung von Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) und den benutzerdefinierten Domainnamen von [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (wie unten gezeigt) verwenden, um die Kosten zu optimieren und den Verkehr umzuleiten ── Verkehr in China geht über Baidu Cloud `CDN`, internationaler Verkehr über Cloudflare.

![](https://p.3ti.site/1721119788.avif)

Diese Lösungen zur Bereitstellungsoptimierung sind komplexer und werden in Zukunft in separaten Kapiteln vorgestellt.

#### Generische Domänennamenumleitung

Wenn Sie `i18n.site` verwenden, um eine Website als Ihre Hauptwebsite zu generieren, müssen Sie normalerweise eine generische Domänennamenumleitung konfigurieren, d.h. den Zugriff von `*.xxx.com` (einschließlich `www.xxx.com`) auf `xxx.com` umleiten.

Diese Anforderung kann mit Hilfe von Alibaba Cloud `CDN` `EdgeScript` ( [englische Dokumentation](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [chinesische Dokumentation](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) erreicht werden

Fügen Sie den Domänennamen in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) hinzu und verweisen Sie den Domänennamen `*.xxx.com` auf den `CNAME` in Alibaba Cloud `CDN`.

![](https://p.3ti.site/1721122000.avif)

Die generische Domänennamenumleitungskonfiguration `*.i18n.site` im Bild oben sieht beispielsweise wie folgt aus:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Mit nginx bereitstellen

Fügen Sie im `server`-Abschnitt von nginx ähnliche Konfigurationen hinzu, wobei Sie `/root/i18n/md/out/ol/htm` durch den Pfad Ihres eigenen Projekts `out/ol/htm` ersetzen:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Verzeichnisstruktur

#### `public`

Statische Dateien der Website, wie `favicon.ico`, `robots.txt` usw.

Diese Icon-Dateien können mit [realfavicongenerator.net](https://realfavicongenerator.net) generiert werden.

#### `.i18n`

Unter dem Verzeichnis `.i18n` befinden sich die Konfigurationsdateien, der Übersetzungs-Cache usw. von `i18n.site`. Einzelheiten finden Sie im nächsten Kapitel [„Konfiguration“](/i18n.site/conf).

#### `en`

Quellsprachenverzeichnis, entsprechend `en` von `fromTo` in der `.i18n/conf.yml`-Konfigurationsdatei

```yaml
i18n:
  fromTo:
    en: zh
```

Bitte beachten Sie die Konfiguration der Übersetzung [i18](/i18/use).