# Glosarium

File Glosarium `.i18n/term.yml` bisa digawe ing ngisor iki minangka conto glosarium sing basa sumbere Cina :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Antarane wong-wong mau, `zh:` `Flashcat` glosarium `快猫星云` Cina standar saka basa sumber :

`zh>en:` tegese nalika nerjemahake saka Cina menyang Inggris, `告警` diterjemahake dadi `alert` lan `故障` diterjemahake dadi `incident` .

Ing kene, sawetara basa target bisa ditulis sawise `zh>` , sing bisa nyederhanakake konfigurasi istilah ing basa sing padha.

Contone, `zh>sk>cs` tegese yen basa Cina diterjemahake menyang Slovak lan Ceko, dhaptar terminologi iki dienggo bareng.

> [!TIP]
> Glosarium terminologi multi-tujuan lan glosarium terminologi siji-objektif ndhukung panggunaan gabungan Contone, telung glosarium terminologi `zh>sk>cs` , `zh>sk` lan `zh>cs` bisa ditetepake bebarengan.