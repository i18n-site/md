# Glosari

Fail Glosari `.i18n/term.yml` boleh dibuat Berikut adalah contoh glosari yang bahasa sumbernya adalah bahasa Cina :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Antaranya `快猫星云` `zh:` mewakili glosari bahasa Cina lalai bagi `Flashcat` sumber :

`zh>en:` bermakna apabila menterjemah daripada bahasa Cina ke bahasa Inggeris, `告警` diterjemahkan kepada `alert` dan `故障` diterjemahkan kepada `incident` .

Di sini, berbilang bahasa sasaran boleh ditulis selepas `zh>` , yang boleh memudahkan konfigurasi istilah dalam bahasa yang serupa.

Sebagai contoh, `zh>sk>cs` bermakna apabila bahasa Cina diterjemahkan ke dalam bahasa Slovak dan Czech, senarai istilah ini dikongsi.

> [!TIP]
> Glosari istilah berbilang objektif dan glosari terminologi tunggal menyokong penggunaan gabungan Contohnya, tiga glosari istilah `zh>sk>cs` , `zh>sk` dan `zh>cs` boleh ditakrifkan pada masa yang sama.