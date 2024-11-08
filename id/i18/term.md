# Glosarium

File glosarium `.i18n/term.yml` dapat dibuat. Berikut ini contoh glosarium yang bahasa sumbernya adalah bahasa Mandarin :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Diantaranya, `zh:` mewakili glosarium bahasa Mandarin default dari bahasa sumber : Artinya, apa pun bahasa yang diterjemahkan, bahasa Mandarin `快猫星云` diterjemahkan ke dalam `Flashcat` .

`zh>en:` berarti ketika menerjemahkan dari bahasa Mandarin ke bahasa Inggris, `告警` diterjemahkan menjadi `alert` dan `故障` diterjemahkan menjadi `incident` .

Di sini, beberapa bahasa target dapat ditulis setelah `zh>` , yang dapat menyederhanakan konfigurasi istilah dalam bahasa serupa.

Misalnya, `zh>sk>cs` berarti ketika bahasa Mandarin diterjemahkan ke dalam bahasa Slovakia dan Ceko, daftar terminologi ini akan dibagikan.

> [!TIP]
> Glosarium terminologi multi-objektif dan glosarium terminologi keberatan tunggal mendukung penggunaan gabungan. Misalnya, tiga glosarium terminologi `zh>sk>cs` , `zh>sk` dan `zh>cs` dapat didefinisikan secara bersamaan.