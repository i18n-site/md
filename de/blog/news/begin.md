# i18n.site · MarkDown-Übersetzungs- und Website-Erstellungstool, online!

Nach mehr als einem halben Jahr Entwicklung ist [https://i18n.site](//i18n.site) online gegangen.

Derzeit sind zwei Open-Source-Befehlszeilenwerkzeuge implementiert:

* `i18`: MarkDown-Befehlszeilen-Übersetzungstool
* `i18n.site` : Mehrsprachiger Generator für statische Dokumentseiten, **optimiert für das Leseerlebnis**

Die Übersetzung bewahrt das `Markdown`-Format perfekt. Es kann Änderungen an Dateien erkennen und nur geänderte Dateien übersetzen.

Die Übersetzung ist bearbeitbar; bei Änderungen am Originaltext bleiben manuelle Änderungen an der Übersetzung erhalten (wenn der betreffende Abschnitt des Originaltexts nicht geändert wurde).

[Klicken Sie hier, um github zu autorisieren und automatisch zu i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) und **Bonus- $50 zu erhalten** .

## Ursprung

In der Ära des Internets ist der ganze Weltmarkt präsent, und Mehrsprachigkeit und Lokalisierung sind grundlegende Fähigkeiten.

Die derzeitigen Übersetzungsmanagement-Tools sind zu komplex, für Programmierer, die auf `git`-Versionen angewiesen sind, ist die Befehlszeile jedoch bevorzugt.

Daher habe ich das Übersetzungstool `i18` entwickelt und darauf basierend den mehrsprachigen statischen Website-Generator `i18n.site` erstellt.

![](https://p.3ti.site/1723777556.avif)

Das ist erst der Anfang, es gibt noch viel zu tun.

z.B. die Verbindung von statischen Dokumentenseiten mit sozialen Medien und E-Mail-Abonnements, um Benutzer rechtzeitig über Updates zu informieren.

z.B. mehrsprachige Foren und Ticket-Systeme, die in jede Webseite eingebettet werden können, damit Benutzer barrierefrei kommunizieren können.

## Open Source

Der Frontend-, Backend- und Befehlszeilen-Code [ist alle Open Source](https://i18n.site/i18n.site/c/src) (das Übersetzungsmodell ist vorerst nicht Open Source).

Der verwendete Technologie-Stack ist wie folgt:

Frontend [svelte](https://svelte.dev), [stylus](https://stylus-lang.com), [pug](https://github.com/pugjs/pug), [vite](https://github.com/vitejs/vite)

Die Befehlszeile und das Backend sind auf Basis von Rust entwickelt.

Backend [axum](https://github.com/tokio-rs/axum), [tower-http](https://github.com/tower-rs/tower-http/releases).

Befehlszeile [eingebettete JS-Engine boa_engine](https://docs.rs/boa_engine), [eingebettete Datenbank fjall](https://github.com/fjall-rs/fjall).

VPS-Server [contabo](https://my.contabo.com)

Datenbank [kvrocks](https://kvrocks.apache.org), [mariadb](https://mariadb.org).

[chasquid](https://github.com/albertito/chasquid) für selbstgehostete SMTP-Mailversand

## Kontaktieren Sie uns

Bei der Einführung neuer Produkte sind Probleme unvermeidlich.

Kontaktieren Sie uns über das Google Forum: [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site)