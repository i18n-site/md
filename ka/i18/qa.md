# Faq

## Თარგმანის Სტრიქონების Დამატება Ან Წაშლა, Რაც Იწვევს Თარგმანში Დაბნეულობას

> [!WARN]
> დაიმახსოვრეთ, **თარგმანში სტრიქონების რაოდენობა უნდა შეესაბამებოდეს თავდაპირველი ტექსტის სტრიქონებს** .
> ანუ, თარგმანის ხელით მორგებისას, **არ დაამატოთ ან წაშალოთ თარგმანის სტრიქონები** , წინააღმდეგ შემთხვევაში თარგმანისა და ორიგინალი ტექსტის რუკის ურთიერთობა დაირღვა.

თუ შემთხვევით დაამატეთ ან წაშალეთ სტრიქონი, რაც იწვევს დაბნეულობას, გთხოვთ, აღადგინოთ თარგმანი ვერსიაზე მოდიფიკაციამდე, ხელახლა გაუშვათ `i18` თარგმანი და ხელახლა ჩაშალოთ სწორი რუკების ქეში.

თარგმანსა და თავდაპირველ ტექსტს შორის დახატვა დაკავშირებულია ჟეტონთან. შექმენით ახალი ჟეტონი [i18n.site/token](//i18n.site/token) წაშალეთ `.i18h/hash` და თარგმნეთ ხელახლა დამაბნეველი რუკების გასასუფთავებლად (მაგრამ ეს გამოიწვევს თარგმანის ყველა ხელით შესწორებას).

## `YAML` : `HTML` `Markdown`

მნიშვნელობა `YAML` განიხილება როგორც `MarkDown` თარგმანისთვის.

ზოგჯერ კონვერტაცია `HTML` → `MarkDown` -დან არ არის ის, რაც ჩვენ გვინდა, მაგალითად, `<a href="/">Home</a>` გარდაიქმნება `[Home](/)` -ზე.

`a` ტეგზე `href` ის გარდა ნებისმიერი ატრიბუტის დამატება, როგორიცაა `<a class="A" href="/">Home</a>` , შეიძლება თავიდან აიცილოს ეს კონვერტაცია.

## `./i18n/hash` Ფაილის Კონფლიქტი Ქვემოთ

წაშალეთ კონფლიქტური ფაილები და ხელახლა გაუშვით `i18` თარგმანი.