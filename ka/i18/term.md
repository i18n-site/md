# Ლექსიკონი

ტერმინების ფაილი `.i18n/term.yml` შეიძლება შეიქმნას ქვემოთ მოცემულია ტერმინების მაგალითი, რომლის საწყისი ენაა ჩინური :

```yml
zh:
  快猫星云: Flashcat

zh>en:
  告警: alert
  故障: incident
```

მათ შორის `zh:` `快猫星云` `Flashcat` ენის ნაგულისხმევ ჩინურ ლექსიკონს :

`zh>en:` ნიშნავს, რომ ჩინურიდან ინგლისურად თარგმნისას `告警` ითარგმნება `alert` ად და `故障` ითარგმნება `incident` ად.

აქ მრავალი სამიზნე ენა შეიძლება დაიწეროს `zh>` შემდეგ, რაც გაამარტივებს ტერმინების კონფიგურაციას მსგავს ენებზე.

მაგალითად, `zh>sk>cs` ნიშნავს, რომ როდესაც ჩინური ითარგმნება სლოვაკურ და ჩეხურ ენებზე, ეს ტერმინოლოგიის სია გაზიარებულია.

> [!TIP]
> `zh>sk` ტერმინოლოგიის ლექსიკონები და ერთპიროვნული ტერმინოლოგიის ლექსიკონები მხარს უჭერენ კომბინირებულ გამოყენებას, მაგალითად, სამი ტერმინოლოგიის `zh>sk>cs` `zh>cs` შესაძლებელია ერთდროულად.