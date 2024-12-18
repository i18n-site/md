# مسرد

يمكن إنشاء ملف المسرد `.i18n/term.yml` فيما يلي مثال لمسرد لغته المصدر هي الصينية :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

من بينها، يمثل `zh:` المعجم الصيني الافتراضي للغة المصدر : أي أنه بغض النظر عن اللغة التي يتم ترجمتها إليها، يتم ترجمة اللغة الصينية `快猫星云` إلى `Flashcat` .

`zh>en:` يعني أنه عند الترجمة من الصينية إلى الإنجليزية، يتم ترجمة `告警` إلى `alert` و `故障` إلى `incident` .

هنا، يمكن كتابة عدة لغات مستهدفة بعد `zh>` ، مما قد يبسط تكوين المصطلحات في اللغات المماثلة.

على سبيل المثال، `zh>sk>cs` يعني أنه عند ترجمة اللغة الصينية إلى السلوفاكية والتشيكية، تتم مشاركة قائمة المصطلحات هذه.

> [!TIP]
> تدعم مسارد المصطلحات متعددة الأهداف ومسارد المصطلحات ذات الاعتراض الواحد الاستخدام المشترك، على سبيل المثال، يمكن تعريف ثلاثة مسارد للمصطلحات `zh>sk>cs` و `zh>sk` و `zh>cs` في نفس الوقت.