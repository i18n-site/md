# Პროექტის Ვერსია

მაგალითისთვის მიიღეთ დემო პროექტი:

`en/demo2/v` არის პროექტის მიმდინარე ვერსიის ნომერი, რომელიც ნაჩვენები იქნება პროექტის სახელიდან მარჯვნივ, გვერდითი ზოლის მონახაზში.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` არის ენის კოდი, რომელიც შეესაბამება `.i18n/conf.yml` კონფიგურირებული თარგმანის წყაროს ენას.

თუ თქვენი საწყისი ენა არ არის ინგლისური, მაშინ `v` უნდა განთავსდეს თქვენი საწყისი ენის პროექტის დირექტორიაში. 

დამუშავების პროცესშია დოკუმენტების ისტორიული ვერსიების დათვალიერების შესაძლებლობა.

რეკომენდირებულია მხოლოდ დოკუმენტის ვერსიის ნომრის შეცვლა ძირითადი განახლებების გამოქვეყნებისას (როგორიცაა `v1` , `v2` ), რათა თავიდან აიცილოთ საძიებო სისტემების მიერ ინდექსირებული გვერდების გადატვირთვა ვერსიის ძალიან ბევრი ნომრის გამო.

## Გამოიყენეთ Ცარიელი `v` Ფაილის Ინდექსების Გასაყოფად Სხვადასხვა Პროექტებისთვის

`en/blog` პროექტში `en/demo1` `v` `en/demo2/v`

`v` `v`

სხვადასხვა პროექტის ინდექსების გაყოფით, შეგიძლიათ თავიდან აიცილოთ ნელი წვდომა, რომელიც გამოწვეულია ყველა ფაილის ინდექსის ერთდროულად ჩატვირთვით მთელ საიტზე.

მაგალითად, დემო პროექტში [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) : `blog`

