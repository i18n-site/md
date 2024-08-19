# Produktmerkmale

## Integration von `i18`-Übersetzungen

Das Programm ist mit `i18`-Übersetzungen ausgestattet. Die spezifische Verwendung ist in den [➔ `i18`-Dokumenten](/i18) beschrieben.

## Automatische Anpassung an die Browsersprache

Die Standardsprache der Website wird automatisch der Sprache des Browsers angepasst.

Nach manueller Sprachumschaltung durch den Benutzer wird die Auswahl gespeichert.

Zugehöriger Code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Anpassung für mobile Geräte

Auch auf mobilen Geräten wird ein optimales Lesevergnügen geboten.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Hohe Verfügbarkeit des Frontends

`i18n.site` veröffentlicht standardmäßig den Inhalt der Website auf `npmjs.com`, unterstützt durch [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) und andere `CDN`s, die auf `npm` geladen sind.

Dabei wurden Spiegelserver auf dem chinesischen Festland hinzugefügt, um chinesischen Nutzern eine stabile Zugänglichkeit und eine **hohe Verfügbarkeit des Frontends** zu gewährleisten.

Das Prinzip dabei ist: Anfragen mit [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) abzufangen, fehlgeschlagene Anfragen auf anderen `CDN`s zu wiederholen und adaptiv die am schnellsten reagierende Quelle als Standardladestation zu verwenden.

Zugehöriger Code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Einseitige Anwendung, schnelles Laden

Die Website verwendet eine Single-Page-Application-Architektur, die ohne Neuladen der Seite extrem schnell lädt.

## Optimierung für das Lesevergnügen

### Geschmackvoll gestalteter Stil

> Die Schönheit der Einfachheit wird in der Webgestaltung dieser Website perfekt dargestellt.
> Es verzichtet auf überflüssige Verzierungen und präsentiert Inhalte in ihrer reinsten Form.
> Wie ein kurzes, aber berührendes Gedicht.

<p style="text-align:right">── Autor von I18N.SITE</p>

[➔ Klicken Sie hier, um die Stile zu betrachten](/i18n.site/md/styl).

### Laden von Online-Schriftarten, Unterstützung von Chinesisch

Standardmäßig aktiviert sind [Alimama Double Axial Variable Rectangle](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) und andere Online-Schriftarten, um das Lesevergnügen auf verschiedenen Plattformen zu vereinheitlichen.

Zugleich werden Schriftarten zur Geschwindigkeitssteigerung basierend auf Wortfrequenzstatistiken in Segmente unterteilt.

Zugehöriger Code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatische Ausblendung der oberen Navigation

Beim Nach unten Scrollen wird die obere Navigation automatisch ausgeblendet.

Beim Nach oben Scrollen wird die ausgeblendete Navigation wieder angezeigt.

Verblasst, wenn die Maus ruht.

In der oberen rechten Ecke der Navigationsleiste befindet sich eine Vollbildschaltfläche für ein umfassendes Lesevergnügen.

### Synchronisierte Hervorhebung der aktuellen Kapitel in der Gliederung

Während des Scrollens des rechten Inhalts wird die linke Gliederung synchron mit dem aktuellen gelesenen Kapitel hervorgehoben.

## Coole Details

### Mauseffekte

Beim Überfahren der rechten oberen Navigationsknöpfe mit der Maus können coole Effekte beobachtet werden.

### Kleiner Geist auf der `404`-Seite

Auf der `404`-Seite schwebt ein niedlicher kleiner Geist, dessen Augen der Mausbewegung folgen. [➔ Klicken Sie hier, um ihn zu sehen](/404)

## Open Source Code

[Der Code ist Open Source](/i18n.site/src). Wer sich an der Entwicklung beteiligen möchte, ist eingeladen, sich auf der [Mailingliste](//groups.google.com/u/2/g/i18n-site) vorzustellen.

Es gibt viele kleine, aber wichtige Aufgaben, die das Entwicklungsteam basierend auf den technischen Fähigkeiten der Interessenten zugeteilt und gleichzeitig die Entwicklungsunterlagen verbessert.