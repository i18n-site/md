# .i18n/conf.yml

კონფიგურაციის ფაილი არის `.i18n/conf.yml` `i18n.site`

გარდა `ignore:` და `i18n:` პარამეტრებისა [`i18`](/i18) კონფიგურაციის ფაილი ასეთია:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

მათ შორის, `ext:` კონფიგურაციის ელემენტი ნიშნავს `upload` რომ გამოქვეყნებისას აიტვირთება მხოლოდ `.md` .

## Ნავიგაციის Ზედა Ნავიგაცია

`nav:` კონფიგურაციის პარამეტრები, რომელიც შეესაბამება ნავიგაციის მენიუს საწყისი გვერდის ზედა ნაწილში.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

მათ შორის `i18n: home` შეესაბამება `en/i18n.yml`中`home: Home` .

ითარგმნება მრავალ ენაზე, როგორიცაა `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

თარგმანის დასრულების შემდეგ, შეგიძლიათ შეცვალოთ `yml` თარგმანში, მაგრამ არ დაამატოთ ან წაშალოთ თარგმანის გასაღები `yml` .

### `use: Toc` Ერთი Ფაილის Შაბლონი (Მოხაზულობით)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ნიშნავს `Toc` rendering-ის გამოყენებას, რომელიც არის ერთი `Markdown` შაბლონის რენდერი.

`TOC` არის შემოკლება `Table of Contents` . როდესაც ეს თარგი იქნება გამოსახული, ამ `Markdown` ფაილის მონახაზი გამოჩნდება გვერდითა ზოლში.

`url:` წარმოადგენს ფაილის გზას `Markdown` ( `/` შეესაბამება root დირექტორიას `/README.md` , ამ ფაილის სახელს სჭირდება დიდი პრეფიქსი და პატარა სუფიქსი).

### `use: Md` Ერთი Ფაილის Შაბლონი (Არ Არის Მონახაზი)

`Md` იგივეა, რაც `Toc` , ორივე გამოიყენება ერთი `Markdown` ფაილის გამოსატანად. თუმცა `Md` თარგი არ აჩვენებს მონახაზს გვერდითა ზოლში.

`md` `i18n.site` `use: Md` `use: Toc`

### Ნაგულისხმევი Ჩატვირთვა Კონფიგურაციის Ბილიკის Გარეშე

თუ წვდომის გარკვეული ბილიკის ბილიკის პრეფიქსი არ არის კონფიგურირებული `nav:` ბილიკის შესაბამისი `MarkDown` ფაილი ჩაიტვირთება ნაგულისხმევად და გამოისახება `Md` შაბლონის გამოყენებით.

მაგალითად, თუ თქვენ `/test` , და `nav:` კონფიგურირებულია ამ ბილიკის გარეშე, ხოლო გვერდის ენა არის ინგლისური (კოდი `en` ), შაბლონი ჩაიტვირთება `/en/test.md` და გამოიტანება `Md` ნაგულისხმევად.

`/en/test.md` ეს ფაილი არ არსებობს, ნაგულისხმევი `404` გვერდი გამოჩნდება.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Მრავალფაილიანი Შაბლონი

კონფიგურაციის ფაილში:

```
  - i18n: blog
    use: Doc
```

მიუთითებს შაბლონის გაფორმებისთვის `Doc`

`Doc` მხარს უჭერს მრავალი `MarkDown` ინტეგრირებას ერთი ან მრავალი პროექტისთვის დოკუმენტის კონტურების შესაქმნელად.

#### Ერთი Პროექტი (Მრავალჯერადი Ფაილი)

`blog` არის `Doc` ერთი პროექტის რეჟიმი.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Როდესაც url Ცარიელია, Ის Ნაგულისხმევად Ადგენს i18n Მნიშვნელობას

თუ არ წერთ `url` `url` `i18n` -ის მნიშვნელობა.

ზემოაღნიშნული ჩაწერის მეთოდი უდრის `url: blog` ხოლო მისი შესაბამისი ფაილი არის `en/blog/TOC` .

#### Მრავალი Პროექტი

`.i18n/conf.yml` კონფიგურაცია `i18n:doc` არის მრავალპროექტის რეჟიმში.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

აქ, `menu: NB demo1,demo2` ნიშნავს `NB` გამოყენებას ჩამოსაშლელი მენიუს გამოსატანად.

`NB` არის აბრევიატურა `Name Breif` , რაც მიუთითებს, რომ ჩამოსაშლელ მენიუს შეუძლია აჩვენოს პროექტის სახელი და სლოგანი.

`NB` -ს მოსდევს მასზე გადაცემული `demo1,demo2` .
შენიშვნა მძიმით `,` -მდე ** უნდა `demo1,demo2` : **

ზემოაღნიშნული პარამეტრებისთვის, შესაბამისი დირექტორია ინდექსი ფაილი არის:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Სარჩევის Ინდექსი

`i18n.site` შეასრულებს `js` დანამატს `.i18n/hook/after.tran/TOC.js` დემო საწყობში, რათა წაიკითხოს დირექტორიის ინდექსის ფაილი `doc` შეესაბამება შაბლონის კონფიგურაციას `TOC` რათა გამოიმუშაოს `json` დირექტორიაში.

თუ იყენებთ `doc` , უნდა გქონდეთ ეს დანამატი.

თუ `i18n.site` ინიციალიზაციას უწევთ ცარიელი საქაღალდიდან, გახსოვდეთ, რომ დააკოპიროთ `.i18n` დემო პროექტში თქვენს დირექტორიაში.

შაბლონი გამოიტანს სარჩევს გენერირებული `json` -ის საფუძველზე `Doc`

##### Შინაარსის Დეტალური Ახსნა

შინაარსი : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Გამოიყენეთ Ჩაღრმავება Დონეების Აღსანიშნავად

ზემოთ `en/blog/TOC` პირველ სტრიქონში `README.md` შეესაბამება ქვემოთ მოცემულ სურათს `i18n.site` , რომელიც არის პროექტის სახელი.

შემდეგი ორი სტრიქონი არის ისე, როგორც ნაჩვენებია ქვემოთ მოცემულ ეკრანის სურათზე.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` შეესაბამება `News` ,
`news/begin.md` შეესაბამება `Our Product is Online !`

`TOC` ფაილი ჩაღრმავებულია მონახაზის იერარქიული ურთიერთობის აღსანიშნავად და მხარს უჭერს მრავალ დონის შეწევას.

##### Მშობლის Დონე Მხოლოდ Სათაურს Წერს Და Არა Შინაარსს.

როდესაც შეწევის რამდენიმე დონეა, მშობელი დონე წერს მხოლოდ სათაურს და არა შინაარსს. წინააღმდეგ შემთხვევაში, ტიპოგრაფია გაფუჭდება.

##### Პროექტი README.md 

პროექტის `README.md` , მაგალითად, შეგიძლიათ დაწეროთ შინაარსი `en/demo2/README.md` .

გაითვალისწინეთ, რომ ამ ფაილის შინაარსი არ აჩვენებს სარჩევის მონახაზს, ამიტომ რეკომენდებულია სიგრძის შეზღუდვა და მოკლე შესავალის დაწერა.

###### Პროექტის Სლოგანი

როგორც ხედავთ `Deme Two` ჩამოსაშლელი მენიუსა და კატალოგის პროექტის სახელწოდების ქვემოთ არის მისი პროექტის `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: შეესაბამება პირველ ხაზს `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

პროექტი `README.md` პირველი დონის `:` პირველი წერის შემდეგ შინაარსი ჩაითვლება პროექტის სლოგანად.

მომხმარებლებმა ჩინეთიდან, იაპონიიდან და კორეიდან, გაითვალისწინეთ, რომ თქვენ უნდა გამოიყენოთ ნახევარსიგანის ორწერტილი `:`

##### Როგორ Გადავიტანოთ TOC Ნაყარი?

`TOC` უნდა განთავსდეს საწყისი ენის დირექტორიაში.

მაგალითად, თუ საწყისი ენა არის ჩინური, `TOC` ზემოთ არის `zh/blog/TOC` .

თუ საწყისი ენა შეცვლილია, თქვენ უნდა გადაიტანოთ `TOC` პროექტის გარკვეულ ენაზე სხვა ენაზე.

შეგიძლიათ მიმართოთ შემდეგ ბრძანებებს:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

გთხოვთ `zh/` შეცვალოთ `en/`


