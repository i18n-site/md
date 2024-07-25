# Häufiges Problem

## Das Hinzufügen Oder Löschen Von Zeilen Der Übersetzung Führt Zu Verwirrung in Der Übersetzung

Denken Sie daran, **dass die Anzahl der Zeilen in der Übersetzung der Anzahl der Zeilen im Originaltext entsprechen muss** .

Das heißt, wenn Sie die Übersetzung manuell anpassen, **fügen Sie der Übersetzung keine Zeilen hinzu oder löschen Sie sie nicht** , da sonst die Zuordnungsbeziehung zwischen der Übersetzung und dem Originaltext gestört wird.

Wenn Sie versehentlich eine Zeile hinzufügen oder löschen, was zu Verwirrung führt, stellen Sie die Übersetzung bitte auf die Version vor der Änderung wieder her, führen Sie die Übersetzung `i18` aus und speichern Sie die korrekte Zuordnung erneut zwischen.

Die Zuordnung zwischen der Übersetzung und dem Originaltext ist an das Token gebunden. Erstellen Sie ein neues Token [i18n.site/token](//i18n.site/token) löschen Sie `.i18h/hash` und übersetzen Sie es erneut, um die verwirrende Zuordnung zu löschen (dies führt jedoch dazu, dass alle manuellen Anpassungen an der Übersetzung verloren gehen).

## `YAML` : Verhindern Sie, Dass `HTML` Des Links in `Markdown` Umgewandelt Wird

Der Wert von `YAML` wird für die Übersetzung als `MarkDown` behandelt.

Manchmal ist die Konvertierung von `HTML` → `MarkDown` nicht das, was wir wollen, z. B. die Konvertierung von `<a href="/">Home</a>` in `[Home](/)` .

Fügen Sie dem `a` -Tag ein beliebiges Attribut außer `href` hinzu, z. B. `<a class="A" href="/">Home</a>` , um diese Konvertierung zu vermeiden.

## `./I18n/Hash` Die Folgenden Dateien Stehen Im Konflikt

Löschen Sie die in Konflikt stehenden Dateien und führen Sie Translate erneut aus `i18`
