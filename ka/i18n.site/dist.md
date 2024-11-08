# Განლაგება Და Ონლაინ

`i18n.site` იღებს [ერთგვერდიანი აპლიკაციის](https://developer.mozilla.org/docs/Glossary/SPA) არქიტექტურას და ვებსაიტის შესასვლელი გვერდი და ვებსაიტის შინაარსი განლაგებულია დამოუკიდებლად.

ზემოაღნიშნული თარგმანის გაშვების შემდეგ, `htm` და `v` დირექტორიები გენერირებული იქნება `md/out/dev` დირექტორიაში.

აქ `dev` ნიშნავს, რომ ის აგებულია `.i18n/htm/dev.yml` კონფიგურაციის ფაილის საფუძველზე.

`dev` დირექტორია :

`htm` დირექტორია არის ვებსაიტის შესასვლელი გვერდი.

`v` დირექტორია შეიცავს ვებსაიტის შინაარსს ვერსიის ნომრებით.

ლოკალური გადახედვა არ აინტერესებს ვერსიის ნომერს და დააკოპირებს ყველა ფაილს `out/dev/v/0.1.0` დირექტორიაში.

ოფიციალური გამოშვებისთვის, შეცვლილი ფაილები დაკოპირდება ახალი ვერსიის ნომრების დირექტორიაში.

## Მიუთითეთ Კონფიგურაციის Ფაილი `-c` Ით

სხვადასხვა კონფიგურაციის ფაილი შექმნის შესაბამის დირექტორიებს `out` დირექტორიაში.

მაგალითად, `.i18n/htm/main.yml` შექმნის `out/main` დირექტორიას.

`dev.yml` და `main.yml` არის ნაგულისხმევი კონფიგურაციები.

`dev` არის `development` -ის აბრევიატურა, რომელიც მიუთითებს განვითარების გარემოზე, რომელიც გამოიყენება ადგილობრივი გადახედვისთვის და ასევე არის ნაგულისხმევი კონფიგურაციის ფაილი.
`ol` არის `online` -ის აბრევიატურა, რომელიც `-n` ონლაინ გარემოზე, რომელიც გამოიყენება ოფიციალური გამოშვებისთვის `npm`

თქვენ ასევე შეგიძლიათ შექმნათ სხვა კონფიგურაციის ფაილები გამოიყენეთ `--htm_conf` ბრძანების სტრიქონზე, რათა მიუთითოთ გამოსაყენებელი კონფიგურაციის ფაილის სახელი:

მაგალითად:
```
i18n.site --htm_conf dist --save
```

აქ `--save` წარმოადგენს განახლების გამოშვების ვერსიის ნომერს.

## <a rel=id href="#npm" id="npm"></a> შინაარსის გამოქვეყნება npmjs.com-ზე

შიგთავსის [npmjs.com](//npmjs.com) არის რეკომენდებული ნაგულისხმევი გადაწყვეტა (იხ [. მაღალი ხელმისაწვდომობა](/i18n.site/feature#ha) ).

### npm & Პოსტი

დააინსტალირეთ `nodejs` , შედით `npm login` ით.

შეცვალეთ `md/.i18n/htm/main.yml` და შეცვალეთ მნიშვნელობა [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) როგორც თქვენი საკუთარი `npm` პაკეტის სახელი.

შემდეგ შეცვალეთ `md/.i18n/htm/main.package.json`

გაუშვით `i18n.site --npm` ან `i18n.site -n` `md` დირექტორიაში თარგმნისა და გამოსაქვეყნებლად.

თუ გამოქვეყნებისთვის იყენებთ უწყვეტი ინტეგრაციის გარემოს, არ არის საჭირო `nodejs` ინსტალაცია. უბრალოდ დააკოპირეთ სისტემაში შესული და გამოქვეყნების ნებართვები `~/.npmrc` გარემოში.

თუ თქვენ შეცვლით პაკეტის სახელს `v:` დან `main.yml` ში, **დარწმუნდით, რომ ჯერ წაშალეთ `.i18n/v/main`** და შემდეგ გამოაქვეყნეთ.

#### Პროქსი Სერვერი Გამოქვეყნებულია Npm-Ის Მიერ

თუ მატერიკული ჩინეთის მომხმარებლებს შეექმნებათ ქსელის პრობლემები და ვერ ახერხებენ `npm` პაკეტის გამოქვეყნებას, მათ შეუძლიათ დააყენონ გარემოს ცვლადი `https_proxy` პროქსი სერვერის კონფიგურაციისთვის.

თუ ვივარაუდებთ, რომ თქვენი პროქსი სერვერის პორტი არის `7890` , შეგიძლიათ დაწეროთ:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Თვითმმართველობის Მასპინძლობს Კონტენტი

თუ გსურთ კონტენტის თვითმასპინძლობა, ჯერ შეცვალეთ `md/.i18n/htm/main.yml` და შეცვალეთ `v: //unpkg.com/i18n.site` თქვენი URL პრეფიქსით, როგორიცაა `v: //i18n-v.xxx.com` .

შეიყვანეთ `md` დირექტორია და გაუშვით

```
i18n.site --htm_conf ol --save
```

ან აბრევიატურა

```
i18n.site -c ol -s
```

შემდეგ, კონფიგურაციის კონფიგურაცია `md/out/main/v` დირექტორიაში URL პრეფიქსის გზაზე, რომელიც მითითებულია `v:` ში.

დაბოლოს, **დააკონფიგურირეთ `/.v` დან `1s` მდე დამთავრებული ბილიკის ქეშის დრო** , წინააღმდეგ შემთხვევაში ახლად გამოშვებულ კონტენტზე დაუყოვნებლივ წვდომა შეუძლებელია.

ქეშის დრო სხვა ბილიკებისთვის შეიძლება დაყენდეს ერთ წელზე ან მეტზე, რათა შემცირდეს არასაჭირო მოთხოვნები.

## Კონტენტის Მასპინძლობა S3-Ზე

კონტენტის თვითმასპინძლობისთვის, საკუთარი სერვერის გამოყენების გარდა, კიდევ `CDN` გავრცელებული ვარიანტია `S3` +

შეგიძლიათ გამოიყენოთ [rclone](https://rclone.org) რათა შეხვიდეთ `S3` სერვერზე, შემდეგ მიმართოთ და შეცვალოთ შემდეგი სკრიპტი და დააკოპიროთ მხოლოდ დამატებითი ცვლილებები `S3` -ზე თითოეული გამოშვებისთვის.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

არ დაგავიწყდეთ `CDN` კონფიგურაცია ისე, რომ `/.v` ით დამთავრებული გზის ქეშის დრო იყოს `1s` , წინააღმდეგ შემთხვევაში ახლად გამოშვებულ კონტენტზე დაუყოვნებლივ წვდომა შეუძლებელია.

## Ვებგვერდის Გამოქვეყნება

ვებსაიტის განთავსება შესაძლებელია ყველგან [github page](https://pages.github.com) და [cloudflare page](https://pages.cloudflare.com) კარგი არჩევანია.

იმის გამო, რომ ვებსაიტი იყენებს [ერთგვერდიანი აპლიკაციის](https://developer.mozilla.org/docs/Glossary/SPA) არქიტექტურას, გახსოვდეთ, რომ გადაწეროთ URL ბილიკები, რომლებიც არ შეიცავს `. ` დან `index.html` .

ვებსაიტის შესვლის გვერდი მხოლოდ ერთხელ უნდა განთავსდეს და არ არის საჭირო ვებსაიტის შესვლის გვერდის ხელახლა განთავსება შინაარსის შემდგომი განახლებისთვის.

### Განთავსება github Გვერდზე

ჯერ [დააწკაპუნეთ აქ github რომ შექმნათ ორგანიზაცია](https://github.com/account/organizations/new?plan=free) `i18n-demo`

შემდეგ შექმენით საწყობი `i18n-demo.github.io` ამ ორგანიზაციის ქვეშ (გთხოვთ შეცვალოთ `i18n-demo` თქვენს მიერ შექმნილი ორგანიზაციის სახელით):

![](https://p.3ti.site/1721098657.avif)

წინა სტატიაში შიგთავსის გამოქვეყნებისას შეიქმნა `out/main/htm` , გთხოვთ, შეიყვანოთ ეს დირექტორია და გაუშვით :

```
ln -s index.html 404.html
```


იმის გამო, რომ `github page` არ უჭერს მხარს URL ბილიკის გადაწერას, ამის ნაცვლად გამოიყენება `404.html` .

შემდეგ გაუშვით შემდეგი ბრძანება `htm` დირექტორიაში (გახსოვდეთ, რომ `i18n-demo/i18n-demo.github.io.git` შეცვალეთ თქვენი საწყობის მისამართით) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

კოდის დაჭერის შემდეგ, დაელოდეთ `github page` -ის განლაგებას წარმატებით (როგორც ნაჩვენებია ქვემოთ), სანამ შეძლებთ მასზე წვდომას.

<img src="//p.3ti.site/1721116586.avif" width="350px">

დემო გვერდისთვის იხილეთ:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Განლაგება cloudflare Გვერდზე

`github page` თან [cloudflare page](//pages.cloudflare.com) , ის უზრუნველყოფს ბილიკების გადაწერას და უფრო მეგობრულია მატერიკზე და უფრო ხელმისაწვდომია მისი გამოყენება.

`cloudflare page` -ის განლაგება ჩვეულებრივ ეფუძნება ზემოთ `github page` -ის განლაგებას.

შექმენით პროექტი და დააკავშირეთ `i18n-demo.github.io` საწყობი ზემოთ.

პროცესი ნაჩვენებია ქვემოთ მოცემულ ფიგურაში:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

გთხოვთ, დააწკაპუნოთ `Add Account` , რათა მისცეთ წვდომა ორგანიზაცია `i18n-demo` ზე.

თუ თქვენ შეკრული გაქვთ სხვა ორგანიზაციის საწყობი, შეიძლება დაგჭირდეთ ორჯერ დააწკაპუნოთ `Add Account` , რათა ორჯერ მიიღოთ ავტორიზაცია, სანამ ახალი ორგანიზაცია გამოჩნდება.

![](https://p.3ti.site/1721118306.avif)

შემდეგი, აირჩიეთ საწყობი `i18n-demo.github.io` , შემდეგ დააჭირეთ `Begin setup` და გამოიყენეთ ნაგულისხმევი მნიშვნელობები შემდგომი ნაბიჯებისთვის.

![](https://p.3ti.site/1721118490.avif)

პირველად დამაგრების შემდეგ, თქვენ უნდა დაელოდოთ რამდენიმე წუთს, სანამ შეძლებთ მასზე წვდომას.

განლაგების შემდეგ, შეგიძლიათ დააკავშიროთ საკუთარი დომენის სახელი.

![](https://p.3ti.site/1721119459.avif)

მორგებული დომენის სახელის შებოჭვის შემდეგ, გთხოვთ, გადახვიდეთ დომენის სახელზე, რათა დააკონფიგურიროთ ერთგვერდიანი აპლიკაციის გადაწერის გზა, როგორც ეს ნაჩვენებია ქვემოთ:

![](https://p.3ti.site/1721119320.avif)

ზემოთ მოცემულ სურათზე მოცემული წესები შემდეგია. გთხოვთ, შეცვალოთ `i18n.site` ქვემოთ მოცემული დომენის სახელით.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

გარდა ამისა, გთხოვთ, დააკონფიგურიროთ ქეშის წესები, როგორც ეს ნაჩვენებია ქვემოთ, და დააყენოთ ქეშის ხანგრძლივობა ერთ თვეზე.

![](https://p.3ti.site/1721125111.avif)

გთხოვთ, შეცვალოთ დომენის სახელი, რომელიც შეესაბამება მეორე საფეხურს ზემოთ მოცემულ სურათზე, თქვენ მიერ შეკრულ დომენის სახელზე.

### Ვებსაიტების Განლაგების Ოპტიმიზაცია Მატერიკულ Ჩინეთში

თუ გსურთ მიიღოთ უკეთესი ხელმისაწვდომობის შესრულება კონტინენტური ჩინეთის ქსელურ გარემოში, გთხოვთ, ჯერ [დაარეგისტრიროთ დომენის სახელი](//beian.aliyun.com) .

შემდეგ, გამოიყენეთ ღრუბლოვანი მოვაჭრეების ობიექტების საცავი მატერიკზე ჩინეთში + განათავსეთ შემდეგი შინაარსი `CDN` `out/main/htm`

თქვენ შეგიძლიათ გამოიყენოთ edge computing, რათა გადაწეროთ გზა ერთგვერდიან აპლიკაციებთან ადაპტაციისთვის, მაგალითად, [Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) შეიძლება იყოს კონფიგურირებული შემდეგნაირად:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // პასუხის სათაურები შეიძლება დაყენდეს გამართვის გამომავალზე, როგორიცაა out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

იმის გამო, რომ ჩანაწერი `MX` და ჩანაწერი `CNAME` არ შეიძლება თანაარსებობდეს, თუ გსურთ დომენის სახელის ელფოსტის მიღება ერთდროულად, უნდა ითანამშრომლოთ [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) `CNAME` დონის ჩანაწერში `A` მდე.

გარდა ამისა, იმის გამო, რომ ჩინეთში ღრუბლოვანი გამყიდველების საზღვარგარეთული სატრანსპორტო საფასური შედარებით ძვირია, თუ გსურთ ხარჯების ოპტიმიზაცია, შეგიძლიათ გამოიყენოთ [DNS Cloud-ის უფასო გეოგრაფიული გარჩევადობა](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) და [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) -ის მორგებული დომენის სახელი (როგორც ნაჩვენებია ქვემოთ). მოძრაობის გადამისამართება──ტრანსპორტის მარშრუტიზაცია მატერიკულ ჩინეთში Baidu Cloud `CDN` , საერთაშორისო ტრაფიკი მიდის cloudflare .

![](https://p.3ti.site/1721119788.avif)

განლაგების ოპტიმიზაციის ეს გადაწყვეტილებები უფრო რთულია და მომავალში ცალკე თავებში იქნება წარმოდგენილი.

### Ზოგადი Დომენის Სახელის Გადამისამართება

თუ თქვენ იყენებთ `i18n.site` ვებსაიტის გენერირებისთვის, როგორც თქვენს მთავარ ვებსაიტად, ჩვეულებრივ უნდა დააკონფიგურიროთ პან-დომენის გადამისამართება, ანუ გადამისამართოთ წვდომა `*.xxx.com` -ზე ( `www.xxx.com` ჩათვლით) `xxx.com` ზე.

ამ მოთხოვნის მიღწევა შესაძლებელია Alibaba Cloud `CDN` `EdgeScript` ( [ინგლისური დოკუმენტი](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [ჩინური დოკუმენტი](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) ) დახმარებით .

დაამატეთ დომენის სახელი [CDN Cloud-](https://cdn.console.aliyun.com/domain/list) ში და მიუთითეთ დომენის სახელი `*.xxx.com` `CNAME` Alibaba Cloud `CDN` -ში.

![](https://p.3ti.site/1721122000.avif)

მაგალითად, პან-დომენის სახელის გადამისამართების კონფიგურაცია `*.i18n.site` -ზე ზემოთ სურათზე არის შემდეგი:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Განათავსეთ Nginx-Ით

გთხოვთ, დაამატოთ შემდეგი `/root/i18n/md/out/main/htm` `server` `out/main/htm` nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## `github action` Უწყვეტი Ინტეგრაციის Საფუძველზე

თქვენი `github action` კონფიგურაციისთვის შეგიძლიათ მიმართოთ შემდეგს:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

როგორც კონფიგურაციაში ჩანს, ეს სამუშაო პროცესი ამოქმედდება `main` და `dist` ფილიალზე გადასვლისას.

სამუშაო პროცესი გამოიყენებს კონფიგურაციის ფაილს, რომელიც `.i18n/htm/main.yml` ფილიალის სახელს, რათა გამოაქვეყნოს დოკუმენტი `.i18n/htm/dist.yml`

ჩვენ გირჩევთ შემდეგ საუკეთესო პრაქტიკას დოკუმენტის გამოქვეყნების პროცესისთვის:

როდესაც ცვლილებები გადადის ფილიალში `main` , დოკუმენტი ამოქმედდება, რათა შეიქმნას და განთავსდეს გადახედვის სადგურზე (გადახედვის სადგური ხელმისაწვდომია [github page](//pages.github.com) ).

გადახედვის საიტზე დოკუმენტის სისწორის დადასტურების შემდეგ, კოდი გაერთიანდება და გადაინაცვლებს ფილიალში `dist` , ხოლო ოფიციალური აწყობა და დანერგვა გადავა ონლაინ.

რა თქმა უნდა, ზემოაღნიშნული პროცესის განხორციელება მოითხოვს მეტი კონფიგურაციის დაწერას.

თქვენ შეგიძლიათ მიმართოთ რეალურ პროექტს სამუშაო პროცესის სკრიპტირებისთვის [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml)

`secrets.I18N_SITE_TOKEN` და `secrets.NPM_TOKEN` კონფიგურაციაში მოითხოვს საიდუმლო ცვლადების კონფიგურაციას კოდის ბაზაში.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` არის პაკეტი `npm` ის გამოქვეყნების კონფიგურაციაში [npmjs.com](//npmjs.com) და შექმენით ჟეტონი გამოქვეყნების ნებართვით

![](//p.3ti.site/1730969906.avif)


## Დირექტორია Სტრუქტურა

### `public`

ვებსაიტის სტატიკური ფაილები, როგორიცაა `favicon.ico` , `robots.txt` და ა.შ.

ხატულა ფაილების გენერირება შესაძლებელია [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

`.i18n` დირექტორიაში არის `i18n.site` ის კონფიგურაციის ფაილები, თარგმანის ქეში და ა.შ. დეტალებისთვის იხილეთ შემდეგი თავი ["კონფიგურაცია"](/i18n.site/conf) .

### `en`

წყარო ენის დირექტორია, რომელიც შეესაბამება `en` / `fromTo` `.i18n/conf.yml` -ში კონფიგურაციის ფაილს

```yaml
i18n:
  fromTo:
    en: zh
```

გთხოვთ, გაეცნოთ თარგმანის კონფიგურაციას [i18](/i18/use)