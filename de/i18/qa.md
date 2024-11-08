# Faq

## Das Hinzufügen Oder Löschen Von Zeilen Der Übersetzung Führt Zu Verwirrung in Der Übersetzung

> [!WARN]
> Denken Sie daran, **dass die Anzahl der Zeilen in der Übersetzung der Anzahl der Zeilen im Originaltext entsprechen muss** .
> Das heißt, wenn Sie die Übersetzung manuell anpassen, **fügen Sie der Übersetzung keine Zeilen hinzu oder löschen Sie sie nicht** , da sonst die Zuordnungsbeziehung zwischen der Übersetzung und dem Originaltext gestört wird.

Wenn Sie versehentlich eine Zeile hinzufügen oder löschen, was zu Verwirrung führt, stellen Sie bitte die Übersetzung auf die Version vor der Änderung wieder her, führen Sie `i18` Übersetzung erneut aus und speichern Sie die korrekte Zuordnung erneut zwischen.

Die Zuordnung zwischen der Übersetzung und dem Originaltext ist an das Token gebunden. Erstellen Sie ein neues Token in [i18n.site/token](//i18n.site/token) löschen Sie `.i18h/hash` und übersetzen Sie erneut, um die verwirrende Zuordnung zu löschen (dies führt jedoch dazu, dass alle manuellen Anpassungen an der Übersetzung verloren gehen).

## `YAML` : So Vermeiden Sie, Dass Link `HTML` in `Markdown` Umgewandelt Wird

Ein Wert von `YAML` wird für die Übersetzung als `MarkDown` behandelt.

Manchmal ist die Konvertierung von `HTML` → `MarkDown` nicht das, was wir wollen, beispielsweise wird `<a href="/">Home</a>` in `[Home](/)` konvertiert.

Durch Hinzufügen eines anderen Attributs als `href` zum `a` -Tag, z. B. `<a class="A" href="/">Home</a>` , kann diese Konvertierung vermieden werden.

## `./i18n/hash` Dateikonflikte Unten

Löschen Sie die in Konflikt stehenden Dateien und führen Sie `i18` Übersetzung erneut aus.