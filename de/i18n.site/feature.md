# Produktmerkmale

## Integrierte `i18`-Übersetzungen

Das Programm enthält integrierte `i18`-Übersetzungen; die spezifische Verwendung ist in den [➔ `i18`-Dokumenten](/i18) beschrieben.

## Automatische Anpassung an die Browsersprache

Die Standardsprache der Website wird automatisch der Sprache des Browsers angepasst.

Nach einer manuellen Sprachumschaltung durch den Benutzer wird die Auswahl gespeichert.

Zugehöriger Code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Anpassung für mobile Geräte

Auch auf mobilen Geräten wird ein optimales Lesevergnügen geboten.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Hohe Verfügbarkeit des Frontends

`i18n.site` veröffentlicht den Inhalt der Website standardmäßig auf `npmjs.com`, unterstützt durch [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) und weitere mehrere `CDN`-Dienste, die Inhalte von `npm` bereitstellen.

Dabei wurden Spiegelquellen für das chinesische Festland hinzugefügt, um chinesischen Nutzern eine stabile Zugänglichkeit und eine **hohe Verfügbarkeit des Frontends** zu gewährleisten.

Das Prinzip: Mit [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) Anfragen abfangen, fehlgeschlagene Anfragen bei anderen `CDN`s neu versuchen und die am schnellsten reagierende Quelle adaptiv als Standardladequelle aktivieren.

Zugehöriger Code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Einseitige Anwendung, blitzschnelles Laden

Die Website nutzt eine Single-Page-Application-Architektur, die ohne Neuladen der Seite extrem schnell lädt.

## Optimiert für das Lesevergnügen

### Geschmackvolles Design

> Die Schönheit der Einfachheit wird in der Webgestaltung dieser Website perfekt umgesetzt.
> Es verzichtet auf überflüssige Verzierungen und präsentiert Inhalte in ihrer reinsten Form.
> Wie ein kurzes, aber berührendes Gedicht.

<p style="text-align:right">── Autor von I18N.SITE</p>

[➔ Hier klicken, um eine Übersicht der Stile zu sehen](/i18n.site/md/styl).

### Mehrsprachige `RSS`-Abonnements

![](//p.3ti.site/1725541085.avif)

Das obige Bild zeigt ein mehrsprachiges `RSS`-Abonnement für `i18n.site` über [inoreader.com](//inoreader.com).

### Laden von Online-Schriftarten, Unterstützung von Chinesisch

Standardmäßig aktiviert sind [Alimama 双轴可变方圆体](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) und andere Online-Schriftarten, um das Lesevergnügen auf verschiedenen Plattformen zu vereinheitlichen.

Zur Geschwindigkeitssteigerung werden Schriftarten basierend auf der Wortfrequenz in Segmente geschnitten.

Zugehöriger Code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatische Ausblendung der oberen Navigation

Beim Nach unten Scrollen blendet sich die obere Navigation automatisch aus.

Beim Nach oben Scrollen wird die ausgeblendete Navigation wieder sichtbar.

Bei ruhender Maus blendet sich die Navigation aus.

In der oberen rechten Ecke der Navigationsleiste befindet sich eine Vollbildschaltfläche für ein immersives Lesevergnügen.

### Synchronisierte Hervorhebung der aktuellen Kapitel in der Gliederung

Während des Scrollens durch den rechten Inhalt wird die linke Gliederung synchron mit dem aktuellen Lesekapitel hervorgehoben.

## Coole Details

### Mauseffekte

Beim Überfahren der rechten Navigationsschaltfläche mit der Maus erscheinen coole Effekte.

### `404`-kleiner Geist

Die `404`-Seite zeigt einen süßen schwebenden Geist, dessen Augen sich mit der Maus bewegen; [➔ Hier klicken, um ihn zu sehen](/404)

## Open-Source-Code

[Der Code ist Open Source](/i18n.site/src). Wer sich an der Entwicklung beteiligen möchte, ist eingeladen, sich auf der [Mailingliste](//groups.google.com/u/2/g/i18n-site) vorzustellen.

Es gibt viele kleine, aber wichtige Aufgaben, die nicht dringend sind. Das Entwicklungsteam wird basierend auf den technischen Fähigkeiten der Interessenten Aufgaben zuweisen und gleichzeitig die Entwicklungsdocs verbessern.