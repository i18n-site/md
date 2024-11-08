# Glossar

Es kann die Glossardatei `.i18n/term.yml` erstellt werden. Das Folgende ist ein Beispiel für ein Glossar, dessen Quellsprache Chinesisch ist :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Unter diesen stellt `zh:` das Standard-Chinesisch-Glossar der Ausgangssprache dar : Das heißt, egal in welche Sprache es übersetzt wird, Chinesisch `快猫星云` wird in `Flashcat` übersetzt.

`zh>en:` bedeutet, dass bei der Übersetzung vom Chinesischen ins Englische `告警` in `alert` und `故障` in `incident` übersetzt wird.

Hier können mehrere Zielsprachen nach `zh>` geschrieben werden, was die Konfiguration von Begriffen in ähnlichen Sprachen vereinfachen kann.

Beispielsweise bedeutet `zh>sk>cs` , dass bei der Übersetzung von Chinesisch ins Slowakische und Tschechische diese Terminologieliste gemeinsam genutzt wird.

> [!TIP]
> Multiobjektive Terminologieglossare und Einzelobjekt-Terminologieglossare unterstützen die kombinierte Verwendung. Beispielsweise können drei Terminologieglossare `zh>sk>cs` , `zh>sk` und `zh>cs` gleichzeitig definiert werden.