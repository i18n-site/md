# Საერთო Პრობლემა

## Შემთხვევით Წაიშალა `.i18n/V` Რის Გამოც `Npm` Პაკეტი Ვერ Გამოქვეყნდა

`npm` პაკეტის გამოშვების ისტორიული ვერსია შენახულია `.i18n/v/ol/v.hash`

თუ შემთხვევით წაშალეთ `.i18n/v/ol` `npm` პაკეტი არ გამოქვეყნდება.

ამ დროს, პირველ რიგში, იპოვნეთ თქვენი პროექტის ბოლო გამოშვების ვერსიის ნომერი, მაგალითად [npmjs.com](//npmjs.com) `0.1.9`

შემდეგ იხილეთ ქვემოთ მოცემული `bash` შექმნა.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

გაითვალისწინეთ, რომ ამ გზით შეკეთება დაკარგავს ფაილის ისტორიას, რაც შეუძლებელს გახდის შემდეგი გამოშვების თანდათანობით განახლებას და მთელი კონტენტი ხელახლა შეიფუთება და აიტვირთება ერთხელ.

