# FAQ

## Das Hinzufügen oder Löschen von Zeilen in der Übersetzung führt zu einer Verwirrung des Textes

Denken Sie daran, **dass die Anzahl der Zeilen in der Übersetzung der Anzahl der Zeilen im Originaltext entsprechen muss**.

Das bedeutet, dass Sie bei manueller Anpassung der Übersetzung **keine Zeilen hinzufügen oder löschen dürfen**, da dies die Zuordnungsbeziehung zwischen Übersetzung und Originaltext durcheinanderbringen würde.

Wenn Sie versehentlich eine Zeile hinzufügen oder löschen und dies zu einer Verwirrung führt, stellen Sie bitte die Übersetzung auf die Version vor der Änderung zurück und führen Sie die `i18`-Übersetzung erneut aus, um die korrekte Zuordnung wiederherzustellen.

Die Zuordnung zwischen Übersetzung und Originaltext ist an das Token gebunden. Erstellen Sie ein neues Token in [i18n.site/token](//i18n.site/token), löschen Sie `.i18h/hash` und übersetzen Sie erneut, um die verwirrende Zuordnung zu löschen (dies führt jedoch dazu, dass alle manuellen Anpassungen an der Übersetzung verloren gehen).

## `YAML`: Wie vermeidet man die Umwandlung von `HTML`-Links in `Markdown`?

Die Werte in `YAML` werden bei der Übersetzung als `Markdown` betrachtet.

Manchmal ist die Umwandlung von `HTML` zu `Markdown` nicht erwünscht, zum Beispiel wenn `<a href="/">Home</a>` in `[Home](/)` umgewandelt wird.

Vermeiden Sie diese Umwandlung, indem Sie dem `a`-Tag ein anderes Attribut als `href` hinzufügen, zum Beispiel `<a class="A" href="/">Home</a>`.

## DATEIKONFLIKTE unter `./i18n/hash`

Löschen Sie die konfliktierenden Dateien und führen Sie die `i18`-Übersetzung erneut aus.