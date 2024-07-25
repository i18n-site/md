# Gemeinsame Problem

## D'Zeilen Vun Der Iwwersetzung Addéieren Oder Läschen, Wat Zu Duercherneen an Der Iwwersetzung Resultéiert

Denkt drun, **d'Zuel vun den Zeilen an der Iwwersetzung muss mat den Zeilen am Originaltext entspriechen** .

Dat heescht, wann Dir d'Iwwersetzung manuell ugepasst hutt, **keng Zeilen vun der Iwwersetzung derbäisetzen oder läschen** , soss gëtt d'Kaartverhältnis tëscht der Iwwersetzung an dem Originaltext gestéiert.

Wann Dir zoufälleg eng Zeil bäigefüügt oder geläscht hutt, wat Duercherneen verursaacht, restauréiert w.e.g. d'Iwwersetzung op d'Versioun virun der Ännerung, fuert d'Iwwersetzung `i18` , a cache déi richteg Mapping nei.

D'Mapping tëscht der Iwwersetzung an dem Originaltext ass un den Token gebonnen. Erstellt en neit Token an [i18n.site/token](//i18n.site/token) läscht `.i18h/hash` an iwwersetzt nach eng Kéier fir déi konfus Kaart ze läschen (awer dëst wäert all manuell Upassunge vun der Iwwersetzung verléieren).

## `YAML` : `HTML` `Markdown`

De Wäert vun `YAML` gëtt als `MarkDown` fir Iwwersetzung behandelt.

Heiansdo ass d'Konversioun vun `HTML` `MarkDown` net wat mir wëllen, sou wéi `<a href="/">Home</a>` ëmgewandelt gëtt `[Home](/)` .

Füügt all Attribut anescht wéi `href` un `a` Tag, wéi `<a class="A" href="/">Home</a>` , fir dës Konversioun ze vermeiden.

## `./I18n/Hash` Déi Folgend Dateie Konflikt

Läschen déi konfliktend Dateien a lafen iwwersetze `i18`
