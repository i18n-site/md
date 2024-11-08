# Glossario

È possibile creare il file di glossario `.i18n/term.yml` Quello che segue è un esempio di glossario la cui lingua di origine è il cinese :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Tra questi, `zh:` rappresenta il glossario cinese predefinito della lingua di origine : ovvero, indipendentemente dalla lingua in cui viene tradotto, il cinese `快猫星云` viene tradotto in `Flashcat` !

`zh>en:` significa che quando si traduce dal cinese all'inglese, `告警` viene tradotto in `alert` e `故障` viene tradotto in `incident` .

Qui è possibile scrivere più lingue di destinazione dopo `zh>` , il che può semplificare la configurazione di termini in lingue simili.

Ad esempio, `zh>sk>cs` significa che quando il cinese viene tradotto in slovacco e ceco, l'elenco terminologico viene condiviso.

> [!TIP]
> I glossari terminologici multi-obiettivo e i glossari terminologici a singola obiezione supportano l'uso combinato. Ad esempio, è possibile definire tre glossari terminologici `zh>sk>cs` , `zh>sk` e `zh>cs` contemporaneamente.