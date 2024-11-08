# Lug'At

Lug'at fayli `.i18n/term.yml` yaratilishi mumkin. Quyida manba tili xitoy tili bo'lgan lug'at misoli keltirilgan :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

Ular orasida `zh:` asl tilning standart xitoycha lug'atini ifodalaydi : ya'ni qaysi tilga tarjima qilinmasin, xitoycha `快猫星云` `Flashcat` ga tarjima qilinadi.

`zh>en:` xitoy tilidan ingliz tiliga tarjima qilinganda `告警` `alert` ga va `故障` `incident` ga tarjima qilinganligini bildiradi.

Bu erda `zh>` dan keyin bir nechta maqsadli tillar yozilishi mumkin, bu o'xshash tillardagi atamalar konfiguratsiyasini soddalashtirishi mumkin.

Misol uchun, `zh>sk>cs` xitoy tili slovak va chex tillariga tarjima qilinganda, bu atamalar ro'yxati umumiy bo'lishini anglatadi.

> [!TIP]
> Ko'p maqsadli terminologiya lug'atlari va bitta ob'ektiv terminologiya lug'atlari birgalikda foydalanishni qo'llab-quvvatlaydi, masalan, uchta terminologiya lug'ati `zh>sk>cs` , `zh>sk` va `zh>cs` bir vaqtning o'zida aniqlanishi mumkin.