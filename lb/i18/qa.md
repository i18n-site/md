# Faq

## D'Zeilen Vun Der Iwwersetzung Addéieren Oder Läschen, Wat Zu Duercherneen an Der Iwwersetzung Resultéiert

> [!WARN]
> Denkt drun, **d'Zuel vun den Zeilen an der Iwwersetzung muss mat den Zeilen am Originaltext entspriechen** .
> Dat heescht, wann Dir d'Iwwersetzung manuell ugepasst hutt, **keng Zeilen vun der Iwwersetzung derbäisetzen oder läschen** , soss gëtt d'Kaartverhältnis tëscht der Iwwersetzung an dem Originaltext gestéiert.

Wann Dir zoufälleg eng Zeil bäigefüügt oder läscht, wat Duercherneen verursaacht, restauréiert w.e.g. d'Iwwersetzung op d'Versioun virun der Ännerung, fuert `i18` Iwwersetzung nach eng Kéier, a re-cache déi richteg Mapping.

D'Mapping tëscht der Iwwersetzung an dem Originaltext ass un den Token gebonnen. Erstellt en neien Token an [i18n.site/token](//i18n.site/token) läscht `.i18h/hash` , an iwwersetzt nach eng Kéier fir déi konfus Mapping ze läschen (awer dëst wäert all manuell Upassunge vun der Iwwersetzung verléieren).

## `YAML` : Wéi Vermeide Ech Datt De Link `HTML` Op `Markdown` Ëmgewandelt Gëtt

E Wäert vun `YAML` gëtt als `MarkDown` fir Iwwersetzung behandelt.

Heiansdo ass d'Konversioun vun `HTML` → `MarkDown` net wat mir wëllen, sou wéi `<a href="/">Home</a>` op `[Home](/)` ëmgewandelt gëtt.

All Attribut anescht wéi `href` un den `a` Tag bäizefügen, wéi `<a class="A" href="/">Home</a>` , kann dës Konversioun vermeiden.

## `./i18n/hash` Fichier Konflikter Ënnert

Läschen déi konfliktend Dateien a lafen `i18` Iwwersetzung erëm.