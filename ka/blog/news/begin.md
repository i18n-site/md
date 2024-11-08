---

brief: |
  ამჟამად დანერგილია ორი ღია კოდის ბრძანების ხაზის ინსტრუმენტი: i18 (MarkDown ბრძანების ხაზის თარგმნის ინსტრუმენტი) და i18n.site (მრავალენოვანი სტატიკური დოკუმენტის საიტის გენერატორი)

---


# i18n.site · MarkDown-Ის Თარგმანისა Და Ვებსაიტების Შექმნის Ინსტრუმენტი Ახლა Უკვე Ონლაინა!

ნახევარ წელზე მეტი ხნის განვითარების შემდეგ, [https://i18n.site](//i18n.site)

ამჟამად დანერგილია ორი ღია კოდის ბრძანების ხაზი:

* `i18` : MarkDown ბრძანების ხაზის თარგმნის ინსტრუმენტი
* `i18n.site` : მრავალენოვანი სტატიკური დოკუმენტის საიტის გენერატორი, **ოპტიმიზირებულია კითხვის გამოცდილებისთვის**

თარგმანს შეუძლია შესანიშნავად შეინარჩუნოს `Markdown` ფორმატი. შეუძლია ფაილის ცვლილებების იდენტიფიცირება და მხოლოდ ცვლილებების მქონე ფაილების თარგმნა.

თარგმანი რედაქტირებადია, თუ თქვენ შეცვლით ორიგინალურ ტექსტს და ხელახლა თარგმნით მას, თარგმანის ხელით ცვლილებები არ გადაიწერება (თუ ორიგინალური ტექსტის ეს პუნქტი არ არის შეცვლილი).

[➤ დააწკაპუნეთ აქ ავტორიზაციისთვის და ავტომატურად i18n.site github ბიბლიოთეკას](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) და **მიიღეთ ბონუსი $50** .

## Წარმოშობა

ინტერნეტის ეპოქაში მთელი მსოფლიო ბაზარია და მულტილინგვიზმი და ლოკალიზაცია ძირითადი უნარებია.

თარგმანის მართვის არსებული ინსტრუმენტები ძალიან მძიმეა პროგრამისტებისთვის, რომლებიც ეყრდნობიან `git` ვერსიის მენეჯმენტს, ისინი მაინც ანიჭებენ უპირატესობას ბრძანების ხაზს.

ასე რომ, მე შევიმუშავე მთარგმნელობითი ინსტრუმენტი `i18` და ავაშენე მრავალენოვანი სტატიკური საიტის გენერატორი `i18n.site` თარგმანის ხელსაწყოს საფუძველზე.

![](https://p.3ti.site/1723777556.avif)

ეს მხოლოდ დასაწყისია, გასაკეთებელი კიდევ ბევრია.

მაგალითად, სტატიკური დოკუმენტის საიტის სოციალურ მედიასთან და ელ.ფოსტის გამოწერებთან დაკავშირებით, მომხმარებლებს შეუძლიათ დაუკავშირდნენ დროულად, როდესაც განახლებები გამოქვეყნდება.

მაგალითად, მრავალენოვანი ფორუმები და სამუშაო შეკვეთის სისტემები შეიძლება იყოს ჩასმული ნებისმიერ ვებ გვერდზე, რაც მომხმარებლებს საშუალებას აძლევს დაუკავშირდნენ ბარიერების გარეშე.

## Ღია Წყარო

წინა, უკანა და ბრძანების ხაზის [კოდები ყველა ღია კოდია](https://i18n.site/i18n.site/c/src) (თარგმანის მოდელი ჯერ არ არის ღია წყარო).

გამოყენებული ტექნოლოგიური დასტა შემდეგია:

[svelte](https://svelte.dev) , [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

ბრძანების ხაზი და backend შემუშავებულია ჟანგის საფუძველზე.

უკანა ბოლო [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

ბრძანების ხაზი [js ძრავის boa_engine](https://docs.rs/boa_engine) , [ჩაშენებული მონაცემთა ბაზა fjall](https://github.com/fjall-rs/fjall) .

სერვერი [contabo](https://my.contabo.com) VPS

მონაცემთა ბაზა [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

გაგზავნეთ ფოსტა თვითნაკეთი [chasquid](https://github.com/albertito/chasquid) SMTP

## Დაგვიკავშირდით

როდესაც ახალი პროდუქტები გამოდის, პრობლემები გარდაუვალია.

მოგერიდებათ დაგვიკავშირდეთ Google ფორუმის მეშვეობით [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) :