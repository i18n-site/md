# Installieren & Vorschau

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