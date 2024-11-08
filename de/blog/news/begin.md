---

brief: |
  Derzeit wurden zwei Open-Source-Befehlszeilentools implementiert: i18 (MarkDown-Befehlszeilenübersetzungstool) und i18n.site (mehrsprachiger Generator für statische Dokumentseiten).

---


# i18n.site · MarkDown-Übersetzungs- Und Website-Erstellungstool Ist Jetzt Online!

Nach mehr als einem halben Jahr Entwicklungszeit ist [https://i18n.site](//i18n.site) online.

Derzeit sind zwei Open-Source-Befehlszeilentools implementiert:

* `i18` : MarkDown Befehlszeilen-Übersetzungstool
* `i18n.site` : Mehrsprachiger Generator für statische Dokumentseiten, **optimiert für das Leseerlebnis**

Die Übersetzung kann das Format `Markdown` perfekt beibehalten. Kann Dateiänderungen erkennen und nur Dateien mit Änderungen übersetzen.

Die Übersetzung kann bearbeitet werden; wenn Sie den Originaltext ändern und ihn erneut maschinell übersetzen, werden die manuellen Änderungen an der Übersetzung nicht überschrieben (sofern dieser Absatz des Originaltexts nicht geändert wurde).

[➤ Klicken Sie hier, um github Bibliothek zu autorisieren, i18n.site automatisch zu folgen](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) und **Bonus- $50 zu erhalten** .

## Herkunft

Im Zeitalter des Internets ist die ganze Welt ein Markt und Mehrsprachigkeit und Lokalisierung sind grundlegende Fähigkeiten.

Die vorhandenen Übersetzungsverwaltungstools sind zu schwergewichtig. Für Programmierer, die auf die Verwaltung der Version `git` angewiesen sind, bevorzugen sie immer noch die Befehlszeile.

Also habe ich ein Übersetzungstool `i18` entwickelt und einen mehrsprachigen statischen Site-Generator `i18n.site` basierend auf dem Übersetzungstool erstellt.

![](https://p.3ti.site/1723777556.avif)

Das ist erst der Anfang, es gibt noch viel zu tun.

Durch die Verbindung der statischen Dokumentenseite mit sozialen Medien und E-Mail-Abonnements können Benutzer beispielsweise rechtzeitig erreicht werden, wenn Updates veröffentlicht werden.

Beispielsweise können mehrsprachige Foren und Arbeitsauftragssysteme in jede Webseite eingebettet werden, sodass Benutzer ohne Barrieren kommunizieren können.

## Open Source

Die Front-End-, Back-End- und [Befehlszeilencodes sind alle Open Source](https://i18n.site/i18n.site/c/src) (das Übersetzungsmodell ist noch nicht Open Source).

Der verwendete Technologie-Stack ist wie folgt:

Frontend [svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

Die Befehlszeile und das Backend werden auf Basis von Rust entwickelt.

hinteres Ende [axum](https://github.com/tokio-rs/axum) , [tower-http](https://github.com/tower-rs/tower-http/releases) .

Befehlszeile [eingebettet js Engine boa_engine](https://docs.rs/boa_engine) , [eingebettete Datenbank fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

Datenbank [kvrocks](https://kvrocks.apache.org) , [mariadb](https://mariadb.org) .

Senden Sie eine E-Mail an [chasquid](https://github.com/albertito/chasquid) -built SMTP

## Kontaktieren Sie Uns

Wenn neue Produkte auf den Markt kommen, sind Probleme vorprogrammiert.

Kontaktieren Sie uns gerne über das Google [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :