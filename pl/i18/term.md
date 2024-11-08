# Słowniczek

Można utworzyć plik glosariusza `.i18n/term.yml` Poniżej znajduje się przykład glosariusza, którego językiem źródłowym jest chiński :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Wśród nich `zh:` oznacza domyślny chiński słownik języka źródłowego : Oznacza to, że niezależnie od języka, na jaki jest on przetłumaczony, chiński `快猫星云` jest tłumaczony na `Flashcat` .

`zh>en:` oznacza, że podczas tłumaczenia z chińskiego na angielski `告警` jest tłumaczone na `alert` , a `故障` na `incident` .

Tutaj po `zh>` można zapisać wiele języków docelowych, co może uprościć konfigurację terminów w podobnych językach.

Na przykład wartość `zh>sk>cs` oznacza, że po przetłumaczeniu języka chińskiego na język słowacki i czeski ta lista terminologii jest udostępniana.

> [!TIP]
> Glosariusze terminologii o wielu celach i glosariusze terminologii z jednym zarzutem umożliwiają użycie łączone. Na przykład można zdefiniować jednocześnie trzy glosariusze terminologii `zh>sk>cs` , `zh>sk` i `zh>cs` .