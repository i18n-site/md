# Glosar

Fișierul de glosar `.i18n/term.yml` poate fi creat. Următorul este un exemplu de glosar a cărui limbă sursă este chineza :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Printre acestea, `zh:` reprezintă glosarul chineză implicit al limbii sursă : Adică, indiferent în ce limbă este tradus, chineza `快猫星云` este tradus în `Flashcat` .

`zh>en:` înseamnă că atunci când traduceți din chineză în engleză, `告警` este tradus în `alert` și `故障` este tradus în `incident` .

Aici, mai multe limbi țintă pot fi scrise după `zh>` , ceea ce poate simplifica configurarea termenilor în limbi similare.

De exemplu, `zh>sk>cs` înseamnă că atunci când chineza este tradusă în slovacă și cehă, această listă de terminologie este partajată.

> [!TIP]
> Glosarele terminologice cu mai multe obiective și glosarele terminologice cu o singură obiecție acceptă utilizarea combinată De exemplu, trei glosare terminologice `zh>sk>cs` , `zh>sk` și `zh>cs` pot fi definite în același timp.