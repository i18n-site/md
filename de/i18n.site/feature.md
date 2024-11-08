# Produktmerkmale

## `i18` Übersetzungen Integriert

Das Programm verfügt über eine integrierte `i18` Übersetzung. Informationen zur spezifischen Verwendung finden Sie [im Dokument ➔ `i18`](/i18) .

## Passen Sie Die Browsersprache Automatisch An

Die Standardsprache der Website stimmt automatisch mit der Sprache des Browsers überein.

Nachdem der Benutzer die Sprache manuell umgeschaltet hat, wird die Auswahl des Benutzers gespeichert.

Zugehöriger [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee) :

## Anpassung Mobiler Endgeräte

Auch auf dem Handy gibt es ein perfektes Leseerlebnis.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Hohe Front-End-Verfügbarkeit

`i18n.site` veröffentlicht den Inhalt der Website standardmäßig auf `npmjs.com` , mit Hilfe von [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) und anderen `CDN` Inhalten, die auf `npm` geladen werden.

Auf dieser Basis wurden Spiegelquellen vom chinesischen Festland hinzugefügt, um chinesischen Benutzern einen stabilen Zugriff und **eine hohe Front-End-Verfügbarkeit** zu ermöglichen.

Das Prinzip lautet: Anfragen mit [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) abfangen, fehlgeschlagene Anfragen mit anderen `CDN` wiederholen und adaptiv die am schnellsten reagierende Ursprungsseite als Standardladequelle aktivieren.

Zugehöriger [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker) :

## Einseitige Anwendung, Extrem Schnelles Laden

Die Website verwendet eine Single-Page-Anwendungsarchitektur, ohne Aktualisierung beim Seitenwechsel und extrem schnelles Laden.

## Optimiert Für Das Leseerlebnis

### Gut Gestalteter Stil

> Die Schönheit der Einfachheit wird im Webdesign dieser Website perfekt interpretiert.
> Es verzichtet auf überflüssige Dekoration und präsentiert Inhalte in ihrer reinsten Form.
> Wie ein wunderschönes Gedicht berührt es, obwohl es kurz ist, die Herzen der Menschen.

<p style="text-align:right">── I18N.SITE Autor</p>

[➔ Klicken Sie hier, um eine Liste der Stile anzuzeigen](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Das Bild oben zeigt Multi-Language `RSS` mit [inoreader.com](//inoreader.com) -Abonnement `i18n.site` .

### Laden Sie Online-Schriftarten Und Unterstützen Sie Chinesisch

Standardmäßig sind [die zweiachsigen variablen rechteckigen Schriftarten von Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) andere Online-Schriftarten auf der Webseite aktiviert, um das Leseerlebnis von Benutzern auf verschiedenen Plattformen zu vereinheitlichen.

Gleichzeitig werden Schriftarten zur Verbesserung der Ladegeschwindigkeit anhand der Worthäufigkeitsstatistik in Scheiben geschnitten.

Zugehöriger [github.com/i18n-site/font](https://github.com/i18n-site/font) :

### Top-Navigation Automatisch Ausgeblendet

Scrollen Sie nach unten und die obere Navigation wird automatisch ausgeblendet.

Scrollen Sie nach oben und die ausgeblendete Navigation wird wieder angezeigt.

Es wird ausgeblendet, wenn die Maus nicht bewegt wird.

In der oberen rechten Ecke der Navigationsleiste befindet sich eine Vollbildschaltfläche, um ein umfassendes Leseerlebnis für Dokumente zu schaffen.

### Synchronisierte Gliederungshervorhebung Des Aktuellen Kapitels

Beim Scrollen durch den Inhalt auf der rechten Seite wird durch die Gliederung auf der linken Seite gleichzeitig das aktuell gelesene Kapitel hervorgehoben.

## Coole Details

### Mauseffekte

Bewegen Sie Ihre Maus über die Schaltfläche auf der rechten Seite der oberen Navigation, um coole Spezialeffekte zu sehen.

### `404` Kleiner Geist

Auf der Seite `404` befindet sich ein niedlicher kleiner schwebender Geist, dessen Augen sich mit der Maus bewegen. [➔ Klicken Sie hier, um ihn anzuzeigen](/404) .

## Open-Source-Code

[Der Code ist Open Source](/i18n.site/c/src) . Wenn Sie an der Entwicklung interessiert sind, stellen Sie sich bitte [der Mailingliste](//groups.google.com/u/2/g/i18n-site) vor.

Es gibt viele kleine Anforderungen, die wichtig, aber nicht dringend sind. Das Entwicklungsteam weist Ihnen praktische Aufgaben zu, die auf den Technologien basieren, in denen Sie sich gut auskennen, und verbessert die Entwicklungsdokumente, während Sie die Anforderungen zuweisen.