# Installieren &

## Konfigurationstoken

`i18n.site` Das `i18` -Übersetzungstool ist eingebettet. [Klicken Sie hier, um auf das `i18` -Dokument zum Konfigurieren des Zugriffstokens zu verweisen](/i18/use) .

## Installieren

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Demoprojekt

Beginnen wir mit einem Demoprojekt und lernen Sie die Verwendung `i18n.site`

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

`demo.i18n.site` Der Verzeichnisname des Codebasisklons muss `md` sein, um eine lokale Vorschau mit `docker` zu ermöglichen.

### Übersetzen

Geben Sie zunächst das Verzeichnis `md` ein und führen Sie `i18n.site` aus, wodurch `en` in `zh` übersetzt wird.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Nach der Ausführung werden Übersetzungs- und Cache-Dateien generiert. Bitte denken Sie daran, diese dem Repository `git add . ` im `md` hinzuzufügen.

### Lokale Vorschau

Installieren und starten Sie `docker` ( `MAC` empfehlen die Verwendung von [orbstack](https://orbstack.dev) als Laufzeit von `docker` ).

Geben Sie dann das Verzeichnis `docker` ein, führen Sie `./up.sh` aus und besuchen Sie dann [https://127.0.0.1](https://127.0.0.1) um eine lokale Vorschau anzuzeigen.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">

### Inhalte Posten

`i18n.site` Nimmt eine [Single-Page-Anwendungsarchitektur](https://developer.mozilla.org/docs/Glossary/SPA) an und die Website-Eingangsseite und der Website-Inhalt werden unabhängig voneinander bereitgestellt.

Nach dem Ausführen der obigen Übersetzung werden die Verzeichnisse `htm` und `v` im Verzeichnis `md/out/dev` generiert.

Hier zeigt `dev` an, dass es auf der Grundlage der `.i18n/htm/dev.yml` erstellt wird.

`dev` Unter Inhalt :

`htm` Unter dem Verzeichnis befindet sich die Einstiegsseite der Website.

`v` Das Verzeichnis enthält den Inhalt der Website mit Versionsnummer.

Die lokale Vorschau kopiert alle Dateien unabhängig von der Versionsnummer in das `out/dev/v/0.1.0` -Verzeichnis.

Für die offizielle Veröffentlichung werden geänderte Dateien in das neue Versionsnummernverzeichnis kopiert.

#### Verwenden Sie -C, Um Die Konfigurationsdatei Anzugeben

Verschiedene Konfigurationsdateien erstellen entsprechende Verzeichnisse im Verzeichnis `out`

Beispielsweise erstellt `.i18n/htm/ol.yml` ein `out/ol` -Verzeichnis.

`dev.yml` und `ol.yml` sind die Standardkonfigurationen.

`dev` ist die Abkürzung für `development` , die die Entwicklungsumgebung darstellt, für die lokale Vorschau verwendet wird und auch die Standardkonfigurationsdatei ist.
`ol` ist die Abkürzung für `online` , die die Online-Umgebung darstellt, für die offizielle Veröffentlichung verwendet wird und auch die Standardkonfigurationsdatei beim Veröffentlichen in `npm` unter Verwendung des Befehlszeilenparameters `-n` ist.

Sie können auch andere Konfigurationsdateien erstellen. Verwenden Sie `--htm_conf` in der Befehlszeile, um den Namen der Konfigurationsdatei anzugeben:

Zum Beispiel:
```
i18n.site --htm_conf yourConfig --save
```

Hier gibt `--save` die Versionsnummer des Update-Releases an.

#### <a rel=id href="#npm" id="npm"></a> Veröffentlichen Sie Inhalte auf npmjs.com

Die Veröffentlichung von Inhalten in [npmjs.com](//npmjs.com) ist die empfohlene Standardlösung (siehe [Front-End-Hochverfügbarkeit](/i18n.site/feature#ha) ).

##### npm login & Freigeben

Installieren Sie `nodejs` verwenden Sie `npm login` um sich anzumelden.

Bearbeiten `md/.i18n/htm/ol.yml` ändern Sie `i18n.site` in `v: //unpkg.com/i18n.site` in Ihren eigenen `npm` Paketnamen.

Verwenden Sie einfach den nicht belegten Paketnamen [npmjs.com](//npmjs.com) Die Verwendung des Website-Domainnamens als Paketname ist eine gute Wahl.

Stellen Sie beim Veröffentlichen auf Basis des `npm` -Pakets **sicher, dass Sie `//unpkg.com/`** als Präfix des `v:` -Werts verwenden. Die Cache-Zeit `i18n.site` unter diesem Präfixpfad `/.v` wurde speziell optimiert, um die rechtzeitige Anzeige neuer Versionen zu ermöglichen.

Führen Sie `i18n.site --npm` oder `i18n.site -n` im `md` -Verzeichnis aus, um zu übersetzen und zu veröffentlichen.

Wenn Sie zum Veröffentlichen eine kontinuierliche Integrationsumgebung verwenden, müssen Sie diese nicht installieren `nodejs` Kopieren Sie einfach die angemeldete und veröffentlichte Berechtigung `~/.npmrc` in die Umgebung.

Wenn Sie den Paketnamen in `v:` `ol.yml` ändern, **löschen Sie bitte zuerst `.i18n/v/ol`** und veröffentlichen Sie es dann.

##### Von npm Veröffentlichter Proxyserver

Wenn Benutzer auf dem chinesischen Festland auf Netzwerkprobleme stoßen und das `npm` -Paket nicht veröffentlichen können, können sie die Umgebungsvariable `https_proxy` festlegen, um den Proxyserver zu konfigurieren.

Unter der Annahme, dass Ihr Proxy-Server-Port `7890` können Sie schreiben:

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

Konfigurieren Sie dann den Inhalt im Verzeichnis `md/out/ol/v` auf den in `v:` festgelegten URL-Präfixpfad.

**Konfigurieren Sie abschließend die Cache-Zeit des Pfads, der mit `/.v` endet, auf `1s`** , da sonst nicht sofort auf den neu veröffentlichten Inhalt zugegriffen werden kann.

Die Cache-Zeit für andere Pfade kann auf ein Jahr oder mehr eingestellt werden, um unnötige Anfragen zu reduzieren.

##### Hosten Sie Inhalte Auf s3

Um Inhalte selbst zu hosten, `CDN` neben der Verwendung Ihres eigenen Servers auch + Verwendung von `S3`

Sie können `S3` [rclone](https://rclone.org) verwenden, dann auf das Skript unten verweisen und es ändern und bei `S3` Veröffentlichung nur inkrementelle Änderungen kopieren.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/ol/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/ol/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/ol/v/.v "$s3:/$bucket/"
```

Denken Sie daran `CDN` dass die Cache-Zeit des mit `/.v` endenden Pfads `1s` beträgt, andernfalls können Sie nicht sofort auf den neu veröffentlichten Inhalt zugreifen.

### Website Veröffentlichen

Die Website kann überall eingesetzt werden, [github page](https://pages.github.com) und [cloudflare page](https://pages.cloudflare.com) sind eine gute Wahl.

Da die Website die Architektur [einer Single-Page-Anwendung](https://developer.mozilla.org/docs/Glossary/SPA) übernimmt, denken Sie daran, den URL-Pfad, der kein `index.html` enthält `. ` umzuschreiben.

Die Website-Einstiegsseite muss nur einmal bereitgestellt werden und es besteht keine Notwendigkeit, die Website-Einstiegsseite für spätere Inhaltsaktualisierungen erneut bereitzustellen.

#### Auf Der Github-Seite Bereitstellen

[Klicken Sie zuerst hier github um eine Organisation zu erstellen](https://github.com/account/organizations/new?plan=free) . Der folgende Organisationsname `i18n-demo` als Beispiel.

Erstellen Sie dann ein Lager unter dieser `i18n-demo.github.io` (Bitte ersetzen Sie `i18n-demo` durch den von Ihnen erstellten Organisationsnamen):

<img alt="" src="https://p.3ti.site/1721098657.avif">

Beim Veröffentlichen des Inhalts im vorherigen Artikel wurde dieser generiert `out/ol/htm` Bitte geben Sie dieses Verzeichnis ein und führen Sie es aus :

```
ln -s index.html 404.html
```


Da `github page` das Umschreiben von URL-Pfaden nicht unterstützt, wird stattdessen `404.html` verwendet.

Führen Sie dann den folgenden Befehl im `htm` -Verzeichnis aus (denken Sie daran, `i18n-demo/i18n-demo.github.io.git` durch Ihre eigene Lageradresse zu ersetzen) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Warten Sie nach dem Pushen des Codes, bis die Bereitstellung von `github page` erfolgreich ausgeführt wurde (wie unten gezeigt), und dann können Sie darauf zugreifen.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Die Demoseite finden Sie unter:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

#### Bereitstellung Auf Der Cloudflare-Seite

[cloudflare page](//pages.cloudflare.com) Im Vergleich zu `github page` bietet es eine Pfadumschreibung und ist für das chinesische Festland benutzerfreundlicher. Es wird empfohlen, es zu verwenden.

`cloudflare page` Die Bereitstellung basiert normalerweise auf der Bereitstellung von `github page` oben.

Erstellen Sie ein Projekt und binden Sie das oben `i18n-demo.github.io` Warehouse.

Der Vorgang ist in der folgenden Abbildung dargestellt:
<img alt="" src="https://p.3ti.site/1721117897.avif">
<img alt="" src="https://p.3ti.site/1721118239.avif">

Bitte klicken Sie auf `Add Account` um der `i18n-demo` Zugriff zu gewähren.

Wenn Sie das Lager einer anderen Organisation angebunden haben, müssen Sie möglicherweise zweimal auf klicken `Add Account` um es zweimal zu autorisieren, bevor die neue Organisation angezeigt wird.

<img alt="" src="https://p.3ti.site/1721118306.avif">

Wählen Sie als nächstes `i18n-demo.github.io` Warehouse aus, klicken Sie dann auf `Begin setup` und verwenden Sie die Standardwerte für die folgenden Schritte.

<img alt="" src="https://p.3ti.site/1721118490.avif">

Nach der ersten Bindung müssen Sie einige Minuten warten, bevor Sie darauf zugreifen können.

Nach der Bereitstellung können Sie einen benutzerdefinierten Domänennamen binden.

<img alt="" src="https://p.3ti.site/1721119459.avif">

Nachdem Sie den benutzerdefinierten Domänennamen gebunden haben, gehen Sie bitte zum Domänennamen, um die Pfadumschreibung der Single-Page-Anwendung zu konfigurieren, wie unten gezeigt:

<img alt="" src="https://p.3ti.site/1721119320.avif">

Die Regeln im Bild oben lauten wie folgt: Bitte ersetzen Sie `i18n.site` in der ersten Zeile unten durch den an Sie gebundenen Domainnamen.

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

Konfigurieren Sie außerdem die Cache-Regeln wie unten gezeigt und legen Sie die Cache-Dauer auf einen Monat fest.

<img alt="" src="https://p.3ti.site/1721125111.avif">

Bitte ändern Sie den passenden Domainnamen im zweiten Schritt im Bild oben in den Domainnamen, den Sie gebunden haben.

#### Optimierung Der Website-Bereitstellung Auf Dem Chinesischen Festland

Wenn Sie eine bessere Zugänglichkeitsleistung in der Netzwerkumgebung des chinesischen Festlandes erzielen möchten, [registrieren Sie bitte zuerst einen Domainnamen](//beian.aliyun.com) .

Dann nutzen `out/ol/htm` den Objektspeicher von Cloud-Anbietern auf `CDN` chinesischen Festland +

Sie können Edge Computing verwenden, um den Pfad zur Anpassung an Single-Page-Anwendungen wie [Baidu Smart Cloud neu zu schreiben `CDN`](//cloud.baidu.com/product/cdn.html) Es kann wie folgt konfiguriert werden:

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

Da `MX` -Datensätze und `CNAME` -Datensätze nicht gleichzeitig existieren können, müssen Sie mit dem [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) -Skript zusammenarbeiten, um `CNAME` in `A` -Datensatz) zu reduzieren.

Da die Gebühren für den Auslandsverkehr von Cloud-Anbietern auf dem chinesischen Festland außerdem relativ hoch sind, können Sie [die kostenlose geografische Auflösung von Huawei DNS](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) und den benutzerdefinierten Domainnamen von [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (wie unten gezeigt) verwenden, um die Kosten zu optimieren Verkehrsumleitung──Verkehr auf dem chinesischen Festland Baidu Cloud `CDN` internationaler Verkehr geht cloudflare .

<img alt="" src="https://p.3ti.site/1721119788.avif">

Diese Lösungen zur Bereitstellungsoptimierung sind komplexer und werden in Zukunft in separaten Kapiteln vorgestellt.

#### Generische Domänennamenumleitung

Wenn Sie `i18n.site` verwenden, um eine Website als Ihre Hauptwebsite zu erstellen, müssen Sie normalerweise eine domänenübergreifende Umleitung konfigurieren, d. h. den `*.xxx.com` (einschließlich `www.xxx.com` )-Zugriff auf `xxx.com` umleiten.

Diese Anforderung kann mit Hilfe von Alibaba Clouds `EdgeScript` ( [englisches Dokument](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [chinesisches Dokument](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) erreicht werden `CDN`

Fügen Sie einen Domänennamen in [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) hinzu und verweisen Sie `*.xxx.com` Domänennamen auf `CNAME` von Alibaba Cloud `CDN` .

<img alt="" src="https://p.3ti.site/1721122000.avif">

Die domänenübergreifende Namensumleitungskonfiguration von `*.i18n.site` im Bild oben sieht beispielsweise wie folgt aus:

```
rewrite(concat('https://i18n.site/',$uri), 'redirect',301)
```

<img alt="" src="https://p.3ti.site/1721121934.avif">

#### Mit nginx Bereitstellen

Bitte fügen Sie `server` eine Konfiguration ähnlich der folgenden hinzu nginx wobei `/root/i18n/md/out/ol/htm` bitte in den Pfad Ihres eigenen Projekts `out/ol/htm` geändert wird:

```
location / {
  root  /root/i18n/md/out/ol/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

### Verzeichnisaufbau

#### Öffentlich

Statische Dateien der Website, wie `favicon.ico` `robots.txt` usw.

Die Icon-Dateien können hier mit [realfavicongenerator.net](https://realfavicongenerator.net) generiert werden.

#### .i18n

`.i18n` Unter dem Verzeichnis befinden sich `i18n.site` die Konfigurationsdateien, der Übersetzungs-Cache usw. Weitere Informationen finden Sie im nächsten Kapitel [„Konfiguration“](/i18n.site/conf) .

#### De

Quellsprachverzeichnis, entsprechend `.i18n/conf.yml` `fromTo` `en` in der Konfigurationsdatei

```yaml
i18n:
  fromTo:
    en: zh
```

Bitte beachten Sie die Konfiguration der Übersetzung [i18](/i18/use)

