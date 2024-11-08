# Დააინსტალირეთ Და Გამოიყენეთ

## windows Ჯერ Დააინსტალირე git bash

windows , გთხოვთ, [დააწკაპუნოთ აქ, რომ ჩამოტვირთოთ და დააინსტალიროთ `git bash` ჯერ](https://git-scm.com/download/win) .

განახორციელეთ შემდგომი ოპერაციები `git bash` -ში.

## Დააინსტალირეთ

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Თარგმანის Ნიშნის Კონფიგურაცია

[i18n.site/token](//i18n.site/token) ტოკენის კოპირებას

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

შექმენით `~/.config/i18n.site.yml` , ჩასვით მასში დაკოპირებული შინაარსი, შინაარსი ასეთია:

```
token: YOUR_API_TOKEN
```

გარდა ამისა, თქვენ უნდა [დააკავშიროთ](/#price) გადახდის საკრედიტო ბარათი [i18n.site/payBill](//i18n.site/payBill)

## Გამოყენება

### Დემო Პროექტი

გთხოვთ [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) მიმართოთ დემო პროექტს `i18` თარგმანის კონფიგურაციის გასაგებად.

მომხმარებლებს ჩინეთში შეუძლიათ კლონირება [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

კლონირების შემდეგ შედით დირექტორიაში და გაუშვით `i18` თარგმანის დასასრულებლად.

### Დირექტორია Სტრუქტურა

შაბლონის საწყობის დირექტორია სტრუქტურა ასეთია

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

თარგმნილი დემო ფაილები `en` დირექტორიაში მხოლოდ მაგალითია და შეიძლება წაიშალოს.

### Გაუშვით Თარგმანი

შეიყვანეთ დირექტორია და გაუშვით `i18` თარგმნისთვის.

თარგმანის გარდა, პროგრამა ასევე გამოიმუშავებს `.i18n/data` საქაღალდეს, გთხოვთ, დაამატოთ ის საცავში.

ახალი ფაილის თარგმნის შემდეგ, ამ დირექტორიაში შეიქმნება ახალი `git add . ` ფაილი.

## Კონფიგურაციის Ფაილი

`.i18n/conf.yml` არის `i18` ბრძანების ხაზის თარგმანის ხელსაწყოს კონფიგურაციის ფაილი

შინაარსი ასეთია:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Საწყისი Ენა &

კონფიგურაციის ფაილში `fromTo` -ის დაქვემდებარებულია:

`en` არის საწყისი ენა, `zh ja ko de fr` არის თარგმანის სამიზნე ენა.

ენის კოდი იხილეთ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

მაგალითად, თუ გსურთ თარგმნოთ ჩინური ინგლისურად, გადაწერეთ ეს ხაზი `zh: en` .

თუ გსურთ თარგმნოთ ყველა მხარდაჭერილ ენაზე, გთხოვთ დატოვეთ ცარიელი `:` შემდეგ. მაგალითად

```
i18n:
  fromTo:
    en:
```

თქვენ შეგიძლიათ დააკონფიგურიროთ `fromTo` სხვადასხვა ფაილებისთვის / დემონსტრირება იწერება შემდეგნაირად :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

ამ კონფიგურაციის ცხრილში, კატალოგი `blog` თარგმანის საწყისი ენა არის `zh` , ხოლო კატალოგი `blog/your_file_name.md` თარგმანის საწყისი ენა არის `ja` .

### Მრავალენოვანი Სურათები/Ბმულები

როდესაც URL-ები სურათებში და ბმულები `replace:` და `MarkDown` -ში (და ჩაშენებული `HTML` -ის `src` და `href` ატრიბუტები) კონფიგურირებულია `.i18n/conf.yml` -ში ამ პრეფიქსით, URL-ში საწყისი ენის კოდი შეიცვლება თარგმანის ენის კოდით ( [ენა კოდების სია](/i18/LANG_CODE) ).

მაგალითად, თქვენი კონფიგურაცია ასეთია:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` არის ლექსიკონი, გასაღები არის URL პრეფიქსი, რომელიც უნდა შეიცვალოს და მნიშვნელობა არის ჩანაცვლების წესი.

ზემოთ `ko de uk>ru zh-TW>zh >en` წესის ჩანაცვლების მნიშვნელობა არის ის, რომ `ko de` იყენებს საკუთარი ენის კოდის სურათს, `zh-TW` და `zh` იყენებს `zh` ის სურათს, `uk` იყენებს `ru` ის სურათს და სხვა ენები (როგორიცაა `ja` ) იყენებს სურათს. ნაგულისხმევად `en` დან.

მაგალითად, ფრანგული ( `fr` ) წყაროს ფაილი `MarkDown` არის შემდეგი :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

თარგმნილი და გენერირებული ინგლისური ( `en` ) ფაილი არის შემდეგი :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

აქ, საწყისი ენის კოდის `/en/` შეიცვალა სამიზნე ენაში `/zh/` ებით.

: URL-ში უნდა იყოს `/` შეცვლილი ტექსტის ენის კოდის წინ და შემდეგ.

> [!TIP]
> თუ `- /` კონფიგურირებულია `url:` -ში, მხოლოდ შედარებითი ბილიკები დაემთხვევა, მაგრამ `//` ით დაწყებული URL-ები არ დაემთხვევა.
>
> თუ დომენის სახელის ზოგიერთი ბმული უნდა შეიცვალოს და ზოგიერთს არ სურს ჩანაცვლება, შეგიძლიათ გამოიყენოთ სხვადასხვა პრეფიქსები, როგორიცაა `[x](//x.com/en/)` და `[x](https://x.com/en/)` , რომ განასხვავოთ ისინი.

### Ფაილის Იგნორირება

ნაგულისხმევად, ყველა ფაილი, რომელიც იწყება `.md` ით და `.yml` საწყისი ენის დირექტორიაში ითარგმნება.

თუ გსურთ უგულებელყოთ გარკვეული ფაილები და არ თარგმნოთ ისინი (როგორიცაა დაუმთავრებელი მონახაზები), შეგიძლიათ დააკონფიგურიროთ ის `ignore` ველით.

`ignore` იყენებს [globset](https://docs.rs/globset/latest/globset/#syntax) სინტაქსს, როგორც `.gitignore` ფაილს.

მაგალითად, `_* ` ზემოთ კონფიგურაციის ფაილში ნიშნავს, რომ `_` ით დაწყებული ფაილები არ ითარგმნება.

## Თარგმნის Წესები

### Თარგმანის Რედაქტორებმა Არ Უნდა Დაამატონ Ან Წაშალონ Ხაზები

თარგმანი რედაქტირებადია. შეცვალეთ ორიგინალი ტექსტი და თარგმნეთ იგი ხელახლა, თარგმანის მექანიკური ცვლილებები არ გადაიწერება (თუ ორიგინალური ტექსტის ეს პუნქტი არ არის შეცვლილი).

> [!WARN]
> თარგმანის სტრიქონებსა და ორიგინალ ტექსტს შორის უნდა არსებობდეს ერთი-ერთზე მიმოწერა. ანუ, თარგმანის შედგენისას არ დაამატოთ ან წაშალოთ სტრიქონები. წინააღმდეგ შემთხვევაში, ეს გამოიწვევს დაბნეულობას თარგმანის რედაქტირების ქეშში.

თუ რამე არასწორედ წარიმართება, [გადაწყვეტილებისთვის მიმართეთ FAQ-ს.](/i18/qa#H1)

### `YAML` Თარგმანი

ბრძანების ხაზის ინსტრუმენტი იპოვის ყველა ფაილს, რომელიც მთავრდება `.yml` -ით, საწყისი ენის ფაილის დირექტორიაში და თარგმნის მათ.

* გაითვალისწინეთ, რომ ფაილის სახელის სუფიქსი უნდა იყოს `.yml` (არა `.yaml` ).

ინსტრუმენტი თარგმნის მხოლოდ ლექსიკონის მნიშვნელობებს `.yml` -ში და არა ლექსიკონის კლავიშებს.

მაგალითად `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

ითარგმნება როგორც `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` -ის თარგმანი ასევე შეიძლება შეიცვალოს ხელით (მაგრამ არ დაამატოთ ან წაშალოთ კლავიშები ან ხაზები თარგმანში).

`YAML` თარგმანის საფუძველზე, თქვენ შეგიძლიათ მარტივად შექმნათ საერთაშორისო გადაწყვეტილებები სხვადასხვა პროგრამირების ენებისთვის.

## Გაფართოებული Გამოყენება

### Თარგმანის Ქვეცნობარი

სანამ იქმნება `.i18n/conf.yml` (არ არის საჭირო ყოველ ჯერზე დემო პროექტის შაბლონიდან დაწყება), `i18` კარგად იმუშავებს.

ბრძანების ხაზის ინსტრუმენტი იპოვის `.i18n/conf.yml` კონფიგურაციას ყველა ქვედირექტორიაში და თარგმნის მათ.

პროექტებს, რომლებიც იყენებენ [monorepo](//monorepo.tools) , შეუძლიათ ენობრივი ფაილების დაყოფა ქვედირექტორებად.

![](https://p.3ti.site/1719910016.avif)

### Მორგებული Ინსტალაციის Დირექტორია

ნაგულისხმევად დაინსტალირებული იქნება `/usr/local/bin` -ზე.

თუ `/usr/local/bin` არ აქვს ჩაწერის უფლება, ის დაინსტალირდება `~/.bin` ზე.

გარემოს ცვლადის `TO` დაყენებამ შეიძლება განსაზღვროს ინსტალაციის დირექტორია, მაგალითად :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```