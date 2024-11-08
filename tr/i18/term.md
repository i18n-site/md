# Sözlük

Sözlük dosyası `.i18n/term.yml` oluşturulabilir Aşağıda kaynak dili Çince olan bir sözlük örneği verilmiştir :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Bunlar arasında `zh:` , kaynak dilin varsayılan Çince sözlüğünü temsil eder : Yani, hangi dile çevrilirse çevrilsin, Çince `快猫星云` `Flashcat` çevrilir.

`zh>en:` , Çince'den İngilizceye çeviri yapılırken `告警` `alert` , `故障` de `incident` çevrildiği anlamına gelir.

Burada `zh>` sonra birden fazla hedef dil yazılabilir, bu da benzer dillerdeki terimlerin yapılandırılmasını kolaylaştırabilir.

Örneğin `zh>sk>cs` , Çince Slovakça ve Çekçeye çevrildiğinde bu terminoloji listesinin paylaşıldığı anlamına gelir.

> [!TIP]
> Çok amaçlı terminoloji sözlükleri ve tek itirazlı terminoloji sözlükleri birleştirilmiş kullanımı destekler. Örneğin, `zh>sk>cs` , `zh>sk` ve `zh>cs` üç terminoloji sözlüğü aynı anda tanımlanabilir.