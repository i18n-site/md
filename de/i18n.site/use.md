# Installieren &

## Installieren

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfigurationstoken

`i18n.site` verfügt über ein integriertes `i18` Übersetzungstool. [Klicken Sie hier, um auf das `i18` Dokument zum Konfigurieren des Zugriffstokens zu verweisen](/i18/use) .

## Demoprojekt

Beginnen wir mit einem Demoprojekt, um zu lernen, wie man `i18n.site` verwendet.

Wir klonen zunächst das Demo-Repository und führen den Befehl wie folgt aus:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Benutzer auf dem chinesischen Festland können:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Der Verzeichnisname des Codebasisklons `demo.i18n.site` muss `md` sein, um eine lokale Vorschau mit `docker` zu ermöglichen.

### Übersetzen

Geben Sie zunächst das Verzeichnis `md` ein und führen Sie `i18n.site` aus, wodurch `en` in `zh` übersetzt wird.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nach der Ausführung werden Übersetzungs- und Cachedateien generiert. Bitte denken Sie daran, diese dem Repository im `git add . ` `md` hinzuzufügen.

### Lokale Vorschau

Installieren und starten Sie `docker` ( `MAC` Benutzer empfiehlt die Verwendung von [orbstack](https://orbstack.dev) als Laufzeit für `docker` ).

Geben Sie dann das Verzeichnis `docker` ein, führen Sie `./up.sh` aus und besuchen Sie dann [https://127.0.0.1](https://127.0.0.1) um eine lokale Vorschau anzuzeigen.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Inhalte Posten

`i18n.site` verwendet eine [Single-Page-Anwendungsarchitektur](https://developer.mozilla.org/docs/Glossary/SPA) , und die Website-Eingangsseite und der Website-Inhalt werden unabhängig voneinander bereitgestellt.

Nach dem Ausführen der obigen Übersetzung werden die Verzeichnisse `htm` und `v` im Verzeichnis `md/out/dev` generiert.

Hier bedeutet `dev` , dass es basierend auf der Konfigurationsdatei `.i18n/htm/dev.yml` erstellt wird.

`dev` Verzeichnis :

Das `htm` Verzeichnis ist die Einstiegsseite der Website.

Das Verzeichnis `v` enthält Website-Inhalte mit Versionsnummern.

Die lokale Vorschau kümmert sich nicht um die Versionsnummer und kopiert alle Dateien in das Verzeichnis `out/dev/v/0.1.0` .

Für die offizielle Veröffentlichung werden geänderte Dateien in das neue Versionsnummernverzeichnis kopiert.

#### Geben Sie Die Konfigurationsdatei Mit `-c` An

Verschiedene Konfigurationsdateien erstellen entsprechende Verzeichnisse im Verzeichnis `out` .

Beispielsweise erstellt `.i18n/htm/ol.yml` das Verzeichnis `out/ol` .

`dev.yml` und `ol.yml` sind die Standardkonfigurationen.

`dev` ist die Abkürzung von `development` und gibt die Entwicklungsumgebung an, die für die lokale Vorschau verwendet wird, und ist auch die Standardkonfigurationsdatei.
`ol` ist die Abkürzung von `online` und gibt die Online-Umgebung an, die für die offizielle Veröffentlichung verwendet wird. Es ist auch die Standardkonfigurationsdatei, wenn die Befehlszeilenparameter `-n` bis `npm` für die Veröffentlichung verwendet werden.

Sie können auch andere Konfigurationsdateien erstellen. Verwenden Sie `--htm_conf` in der Befehlszeile, um den Namen der zu verwendenden Konfigurationsdatei anzugeben:

Zum Beispiel:
```
i18n.site --htm_conf yourConfig --save
```

Hier steht `--save` für die Versionsnummer des Update-Releases.

#### <a rel=id href="#npm" id="npm"></a> Veröffentlichen Sie Inhalte auf npmjs.com

Die Veröffentlichung von Inhalten in [npmjs.com](//npmjs.com) ist die empfohlene Standardlösung (siehe [Front-End-Hochverfügbarkeit](/i18n.site/feature#ha) ).

##### npm login & Freigeben

Installieren Sie `nodejs` , melden Sie sich mit `npm login` an.

Bearbeiten Sie `md/.i18n/htm/ol.yml` [npmjs.com](//npmjs.com) ändern Sie den Wert von [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/ol.yml#L7) `YOUR_NPM_PACKAGE` als Ihren eigenen `npm` Paketnamen.

Dann ändern Sie `md/.i18n/htm/ol.package.json`

Führen Sie `i18n.site --npm` oder `i18n.site -n` im Verzeichnis `md` aus, um zu übersetzen und zu veröffentlichen.

Wenn Sie zum Veröffentlichen eine kontinuierliche Integrationsumgebung verwenden, ist keine Installation `nodejs` erforderlich. Kopieren Sie einfach die angemeldeten Benutzer und die Veröffentlichungsberechtigung `~/.npmrc` in die Umgebung.

Wenn Sie den Paketnamen `v:` in `ol.yml` ändern, **löschen Sie bitte zuerst `.i18n/v/ol`** und veröffentlichen Sie es dann.

##### Von npm Veröffentlichter Proxyserver

Wenn Benutzer auf dem chinesischen Festland auf Netzwerkprobleme stoßen und keine `npm` Pakete veröffentlichen können, können sie die Umgebungsvariable `https_proxy` festlegen, um den Proxyserver zu konfigurieren.

Unter der Annahme, dass der Port Ihres Proxyservers `7890` ist, können Sie Folgendes schreiben:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

#### Selbstgehostete Inhalte

Wenn Sie den Inhalt selbst hosten möchten, bearbeiten Sie zunächst `md/.i18n/htm/ol.yml` und ändern Sie `v: //unpkg.com/i18n.site` in Ihr URL-Präfix, z. B. `v: //i18n-v.xxx.com` .

Geben Sie das Verzeichnis `md` ein und führen Sie es aus

```
i18n.site --htm_conf ol --save
```

oder Abkürzung

```
i18n.site -c ol -s
```

Konfigurieren Sie dann den Inhalt im Verzeichnis `md/out/ol/v` für den in `v:` festgelegten URL-Präfixpfad.

**Konfigurieren Sie abschließend die Cache-Zeit des Pfads, der mit `/.v` endet, auf `1s`** , da sonst nicht sofort auf den neu veröffentlichten Inhalt zugegriffen werden kann.

Die Cache-Zeit für andere Pfade kann auf ein Jahr oder mehr eingestellt werden, um unnötige Anfragen zu reduzieren.

##### Hosten Sie Inhalte Auf s3

Um Inhalte selbst zu hosten, ist neben der Verwendung Ihres eigenen Servers auch die Verwendung `S3` + `CDN` .

Sie können sich mit [rclone](https://rclone.org) beim `S3` Server anmelden, dann auf das folgende Skript verweisen und es ändern und nur die inkrementellen Änderungen für jede Version auf `S3` kopieren.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Denken Sie daran, `CDN` zu konfigurieren, damit die Cache-Zeit des Pfads, der mit `/.v` endet, `1s` beträgt, da sonst nicht sofort auf den neu veröffentlichten Inhalt zugegriffen werden kann.

### Website Veröffentlichen

Die Website kann überall eingesetzt werden, [github page](https://pages.github.com) und [cloudflare page](https://pages.cloudflare.com) sind eine gute Wahl.

Da die Website eine [Single-Page-Anwendungsarchitektur](https://developer.mozilla.org/docs/Glossary/SPA) verwendet, denken Sie daran, URL-Pfade neu zu schreiben, die nicht `. ` bis `index.html` enthalten.

Die Website-Einstiegsseite muss nur einmal bereitgestellt werden und es besteht keine Notwendigkeit, die Website-Einstiegsseite für spätere Inhaltsaktualisierungen erneut bereitzustellen.

#### Auf Der Github-Seite Bereitstellen

[Klicken Sie zuerst hier github um eine Organisation zu erstellen](https://github.com/account/organizations/new?plan=free) . Der folgende Organisationsname ist beispielsweise `i18n-demo` .

Erstellen Sie dann Lager `i18n-demo.github.io` unter dieser Organisation (bitte ersetzen Sie `i18n-demo` durch den von Ihnen erstellten Organisationsnamen):

![](https://p.3ti.site/1721098657.avif)

Beim Veröffentlichen des Inhalts im vorherigen Artikel wurde `out/ol/htm` generiert. Bitte geben Sie dieses Verzeichnis ein und führen Sie es aus :

```
ln -s index.html 404.html
```


Da `github page` das Umschreiben von URL-Pfaden nicht unterstützt, wird stattdessen `404.html` verwendet.

Führen Sie dann den folgenden Befehl im Verzeichnis `htm` aus (denken Sie daran, `i18n-demo/i18n-demo.github.io.git` durch Ihre eigene Lageradresse zu ersetzen) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Warten Sie nach dem Pushen des Codes, bis die Bereitstellung von `github page` erfolgreich ausgeführt wurde (wie unten gezeigt), bevor Sie darauf zugreifen können.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Die Demoseite finden Sie unter:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Bereitstellung Auf Der Cloudflare-Seite

[cloudflare page](//pages.cloudflare.com) Im Vergleich zu `github page` bietet es eine Pfadumschreibung und ist für das chinesische Festland benutzerfreundlicher. Es wird empfohlen, es zu verwenden.

Die Bereitstellung von `cloudflare page` basiert normalerweise auf der Bereitstellung von `github page` oben.

Erstellen Sie ein Projekt und binden Sie das `i18n-demo.github.io` Warehouse oben.

Der Vorgang ist in der folgenden Abbildung dargestellt:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Klicken Sie bitte auf `Add Account` um der Organisation `i18n-demo` Zugriff zu gewähren.

Wenn Sie das Lager einer anderen Organisation angebunden haben, müssen Sie möglicherweise zweimal auf `Add Account` klicken, um zweimal zu autorisieren, bevor die neue Organisation angezeigt wird.

![](https://p.3ti.site/1721118306.avif)

Wählen Sie als Nächstes Lager `i18n-demo.github.io` aus, klicken Sie dann auf `Begin setup` und verwenden Sie die Standardwerte für die nachfolgenden Schritte.

![](https://p.3ti.site/1721118490.avif)

Nach der ersten Bindung müssen Sie einige Minuten warten, bevor Sie darauf zugreifen können.

Nach der Bereitstellung können Sie einen benutzerdefinierten Domänennamen binden.

![](https://p.3ti.site/1721119459.avif)

Nachdem Sie den benutzerdefinierten Domänennamen gebunden haben, gehen Sie bitte zum Domänennamen, um die Pfadumschreibung der Single-Page-Anwendung zu konfigurieren, wie unten gezeigt:

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

Bitte ändern Sie den passenden Domainnamen im zweiten Schritt im Bild oben in den Domainnamen, den Sie gebunden haben.

#### Optimierung Der Website-Bereitstellung Auf Dem Chinesischen Festland

Wenn Sie eine bessere Zugänglichkeitsleistung in der Netzwerkumgebung des chinesischen Festlandes erzielen möchten, [registrieren Sie bitte zuerst einen Domainnamen](//beian.aliyun.com) .

Dann nutzen Sie den Objektspeicher von Cloud `CDN` + Sie den folgenden Inhalt bereit `out/ol/htm` .

Sie können Edge Computing verwenden, um den Pfad zur Anpassung an Single-Page-Anwendungen neu zu schreiben. [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) kann beispielsweise wie folgt konfiguriert werden:

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

Da Datensatz `MX` und Datensatz `CNAME` nicht nebeneinander existieren können, müssen Sie, wenn Sie gleichzeitig Domainnamen-E-Mails empfangen möchten, mit dem [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) -Skript auf Ebene `CNAME` in Datensatz `A` kooperieren.

Da die Gebühren für den Auslandsverkehr von Cloud-Anbietern auf dem chinesischen Festland außerdem relativ hoch sind, können Sie [die kostenlose geografische Auflösung von Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) und den benutzerdefinierten Domainnamen von [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (wie unten gezeigt) verwenden, um die Kosten zu optimieren Verkehrsumleitung──Verkehr auf dem chinesischen Festland Baidu Cloud `CDN` , internationaler Verkehr geht cloudflare .

![](https://p.3ti.site/1721119788.avif)

Diese Lösungen zur Bereitstellungsoptimierung sind komplexer und werden in Zukunft in separaten Kapiteln vorgestellt.

#### Generische Domänennamenumleitung

Wenn Sie `i18n.site` verwenden, um eine Website als Ihre Hauptwebsite zu generieren, müssen Sie normalerweise eine domänenübergreifende Umleitung konfigurieren, dh den Zugriff von `*.xxx.com` (einschließlich `www.xxx.com` ) auf `xxx.com` umleiten.

Diese Anforderung kann mit Hilfe von Alibaba Cloud `CDN` `EdgeScript` ( [englisches Dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [chinesisches Dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) erreicht werden.

Fügen Sie den Domänennamen in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) hinzu und verweisen Sie den Domänennamen `*.xxx.com` `CNAME` in Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Die domänenübergreifende Namensumleitungskonfiguration `*.i18n.site` im Bild oben sieht beispielsweise wie folgt aus:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

#### Mit nginx Bereitstellen

Bitte fügen Sie im `server` -Absatz von nginx Bitte ändern Sie `/root/i18n/md/out/ol/htm` in den Pfad Ihres eigenen Projekts `out/ol/htm` :

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

Statische Dateien der Website, wie `favicon.ico` , `robots.txt` usw.

Die Icon-Dateien hier können mit [realfavicongenerator.net](https://realfavicongenerator.net) generiert werden.

#### `.i18n`

Unter dem Verzeichnis `.i18n` befinden sich die Konfigurationsdateien, der Übersetzungs-Cache usw. von `i18n.site` Einzelheiten finden Sie im nächsten Kapitel [„Konfiguration“](/i18n.site/conf) .

#### `en`

Quellsprachenverzeichnis, entsprechend `en` von `fromTo` in `.i18n/conf.yml` Konfigurationsdatei

```yaml
i18n:
  fromTo:
    en: zh
```

Bitte beachten Sie die Konfiguration der Übersetzung [i18](/i18/use)